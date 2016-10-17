const vkontakte = require('vkontakte');
const _ = require('lodash');
const async = require('async');

const request = require("request");
const http = require('http');
const https = require('https');
const fs = require('fs');

const User = require("../models/user");
const Media = require("../models/media");
const apiHelper = require('../helpers/api');
const commonHelper = require('../helpers/common');
const vkAudioHelper = require('../helpers/vk_audio');
const filesHelper = require('../helpers/files');

module.exports = {
    vkCallbackAuth: function(req, res) {
		if(req.query.error && req.query.error_description){
			return apiHelper.handleError(res, req.query.error, req.query.error_description, 500);
		}

		if(!req.query.code){
			return apiHelper.handleError(res, "Invalid input", "Required params not defined.", 400);
		}

        const vk_api_options = req.app.locals.vk_api_options;
		let url = 'https://oauth.vk.com/access_token?client_id=' + vk_api_options.app_id + '&client_secret=' + vk_api_options.app_secret + '&redirect_uri=' + vk_api_options.redirect_uri + '&code=' + req.query.code;
		console.log('vk request url', url);

		request({ url: url, json: true }, function(error, response, body) {
			console.log('vk error', error);
			console.log('vk response', body);

			req.session.vk_service = _.pick(body, ['access_token', 'expires_in', 'user_id']);

            const vk = vkontakte(req.session.vk_service.access_token);
			vk('users.get', {user_ids : req.session.vk_service.user_id, fields: 'domain', v: '5.53'}, function(err, response){
				console.log('users.get error', err);
				let vk_user = response[0];

				if(req.session.user_id)
					User.findOne({ '_id': req.session.user_id }, foundUserCallback);
				else
					User.findOne({ 'vk.id': vk_user.id }, foundUserCallback);

				function foundUserCallback(err, user) {
					if(!user){
						user = new User({
							login: vk_user.domain,
							first_name: vk_user.first_name,
							last_name: vk_user.last_name,
							vk: vk_user
						});
					} else {
						user.vk = vk_user;
					}

					user.vk.token = req.session.vk_service.access_token;

					user.save(function(err, user){
						req.session.user_id = user._id;

						res.send('<html><head></head><body><script>window.close();</script></body></html>');
					});
				}

			});
		}, function(error){
			console.log('vkCallbackAuth error', error);
			res.status(500).json(error);
		});
    },
	//NOT WORKING IN PRODUCTION(WHEN SERVER IP AND CLIENT IP ARE NOT EQUAL) :(
	vkOpenApiAuth: function(req, res){
		if (!commonHelper.hasProperties(req.body, ['mid', 'secret', 'sid', 'sig'])) {
			apiHelper.handleError(res, "Invalid input", "Required params not defined.", 400);
			return;
		}

		req.session.vk_service = _.pick(req.body, ['mid', 'secret', 'sid', 'sig']);
		req.session.vk_service.user_id = req.body.user.id;

		User.findOne({ vk_id: req.body.user.id }, function(err, user) {
			if(!user){
				user = new User({
					login: req.body.user.domain,
					first_name: req.body.user.first_name,
					last_name: req.body.user.last_name,
					vk: req.body.user
				});
			} else {
				user.vk = req.body.user;
			}

			user.vk.token = req.body.sid;

			user.save(apiHelper.APIResponse(res));

			req.session.user_id = user._id;
		});
	},

    vkAudioList: function(req, res) {
        if(!req.session.user_id || !req.session.vk_service)
			return apiHelper.handleError(res, "Invalid session", "No user_id or vk_service data on session.", 400);

        //TODO: fix
		return apiHelper.handleError(res, "Invalid session", "Play VK audio without synced temporary unavailable :(", 400);
    },
	vkAudioListTest: function(req, res) {
		if(!req.session.user_id || !req.session.vk_service)
			return apiHelper.handleError(res, "Invalid session", "No user_id or vk_service data on session.", 400);
        const vk = vkontakte(req.session.vk_service.access_token);

		vk('audio.get', {owner_id : req.session.vk_service.user_id , v: '5.53'}, function(err, response){
			let result = response ? _.map(response.items, (audio) => vkAudioHelper.vkAudioToMedia(audio)) : null;

			apiHelper.APIResponse(res)(err, result);
		});
	},

    vkAudioSync: function(socket, app) {
        const permissions = app.locals.permissions;
        const media_options = app.locals.media_options;

        let session = socket.request.session;
        let vk_user_id = null;

        socket.on('start', function (data) {
            if(!session.user_id || !session.vk_service) {
                return socket.emit('start_response', apiHelper.socketResponse('invalid_session', 'Invalid session. Please re-login.'));
            } else {
                vk_user_id = parseInt(session.vk_service.user_id);
            }

            if(permissions.vkUsersIds.indexOf(vk_user_id) == -1) {
                return socket.emit('start_response', apiHelper.socketResponse('not_permitted', "I'm sorry, but you are not in elite club. For create your own server with your elite club check the github repo.", {permitted_ids: permissions.vkUsersIds, user_id: vk_user_id}));
            }

            //=======================================================================================
            // DEFINITIONS
            //=======================================================================================
            let vk = vkontakte(session.vk_service.access_token),
                audios = null,
                user = null,
                media_ids_dict = null;

            let result = {
                total: null,
                saved: 0,
                already_exists: 0,
                error: 0,
                getSummary: function(){
                    this.total_done = this.saved + this.already_exists + this.error;
                    return this;
                },
                getMessage: function(is_error){
                    this.getSummary();
                    let start_message = is_error ? 'Oops, one of vk audio has error.' : 'Alright, you are in the elite club.';
                    return start_message + ' VK Audio sync to server - ' + this.total_done + ' of ' + this.total + ' items (saved: ' + this.saved + ', already exist: ' + this.already_exists + ', error: ' + this.error + ')'
                },
                getResponseData: function(object){
                    return  _.extend({}, this, {object: object});
                }
            };

            function addMediaToUser(media){
                if(media && media._id)
                    media_ids_dict[media._id] = media.vk ? media.vk.date : media.date;

				if(_.some(user.medias, user_media => user_media.media_id.toString() == media._id.toString()))
					return;

				user.medias.push({media_id: media._id, number: 0});
                user.save();
            }
            //=======================================================================================
            // START PROCESS AND SET DATA TO VARIABLES
            //=======================================================================================

            vk('audio.get', {owner_id : session.vk_service.user_id, v: '5.53'}, function(err, response){
                if(!response.count) {
                    return socket.emit('start_response', apiHelper.socketResponse('not_found', "You don't have audio :(", {permitted_ids: permissions.vkUsersIds, user_id: vk_user_id}));
                }

                audios = response.items;
				result.total = response.items.length;

                User.findOne({_id: session.user_id}, function(userErr, userDoc) {
                    user = userDoc;

                    Media.find({ _id: { "$in" : user.media_ids || [] } }, function(mediaErr, mediaDocs){

                        media_ids_dict = _(mediaDocs).map(mediaDocs, media => [media._id, media.vk.date]).fromPairs().value() || {};

                        //RUN TASKS

                        processVkAudios();

                        return socket.emit('start_response', apiHelper.socketResponse(null, "Alright, you are in the elite club. VK Audio synced was getting started. Please wait for finish..."));
                    });
                });

            });


            function processVkAudios(){
                let tasks = [];

                _.forEach(audios, function(vk_audio, index){

                    tasks.push(function(callback) {
                        Media.findOne({$or: [
                            { 'vk.id': vk_audio.id },
                            { $and: [{ 'artist': vk_audio.artist }, { 'title': vk_audio.title }] },
                            { $and: [{ 'vk.artist': vk_audio.artist }, { 'vk.title': vk_audio.title }] }
                        ]}, function(err, media) {
                            if (media){
                                result.already_exists++;
                                addMediaToUser(media);
                                return callback(null, media);
                            }

                            media = new Media(vkAudioHelper.vkAudioToMedia(vk_audio));
                            media.user_loaded_id = session.user_id;

                            let path_data = filesHelper.getMediaFilePathData(media);

                            if (!fs.existsSync(path_data.absolute_dir_path)){
                                fs.mkdirSync(path_data.absolute_dir_path);
                            }

                            if(!vk_audio.url)
                                return httpError('empty audio');

                            let file = fs.createWriteStream(path_data.absolute_file_path);

                            try {
                                console.log('GET ' + vk_audio.url);

                                const httpService = vk_audio.url.indexOf("https:") == 0 ? https : http;
                                httpService.get(vk_audio.url, function(response) {
                                    console.log('httpService callback');
                                    response.on('data', function(data) {
                                        file.write(data);
                                    }).on('end', function() {
                                        file.end();

                                        media.path = path_data.relative_file_path;
                                        media.save(function(err, doc){
                                            console.log('[SAVED]', path_data.file_name);
                                            result.saved++;
                                            socket.emit('partial_success', apiHelper.socketResponse(null, result.getMessage(), result.getResponseData(doc)));
                                            callback(err, doc);

                                            addMediaToUser(media);
                                        });
                                    }).on('error', httpError);

                                }, httpError);
                            } catch (ex){
                                httpError(ex);
                            }

                            function httpError(error){
                                socket.emit('partial_success', apiHelper.socketResponse(null, result.getMessage(true)));
                                console.log('http get error', vk_audio.url, error);
                                console.log(vk_audio);
                                result.error++;
                                callback(null, media);

                                console.log((index + 1) + ' of ' + audios.length);
                                console.log(result);
                            }
                        });
                    });
                });

                async.parallelLimit(tasks, 10, function(err, docs) {

                    //END ALL TASKS

                    User.findOne({_id: session.user_id}, function(err, dbUser) {
						user = dbUser;

						let media_ids = commonHelper.getKeysSortedByValue(media_ids_dict);
						_.forEach(user.medias, (user_media) => {
							if(!user_media.number && user_media.vk){
								user_media.number = media_ids.indexOf(user_media.media_id.toString());
							}
						});

						user.save();

						socket.emit('all_success', apiHelper.socketResponse(err, "VK Audio Sync complete", result));
						socket.disconnect(0);
                    });
                });
            }

        });
    }
};