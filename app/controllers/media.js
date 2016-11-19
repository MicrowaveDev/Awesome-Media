const fs = require('fs');
const _ = require('lodash');
const multer = require('multer');

const apiHelper = require('../helpers/api');
const mediaHelper = require('../helpers/media');
const filesHelper = require('../helpers/files');
const Media = require("../models/media");
const User = require("../models/user");

const config = require("../../config").data;
const upload = multer(config.multer_options).single('file');

module.exports = {
    getMedia: function(req, res) {
        let sortedMedia;

        if(!req.session.user_id){
            apiHelper.handleError(res, "Invalid session", "You are not auth.", 400);
            return;
        }

        mediaHelper.openUserSession(req, function(err, user){
            if(user)
                mediaHelper.getSortedMedia(user.medias, apiHelper.APIResponse(res));

            else
                apiHelper.handleError(res, "Invalid user", "User not found.", 400);
        });
    },

    getMediaFiles: function(req, res) {
        const media_options = req.app.locals.media_options;
        fs.readdir(media_options.absolute_path, function(err, items) {
            let result = _.map(items, (file_name) => ({name: file_name, src: media_options.relative_path + file_name, type: "audio/mp3"}));

            apiHelper.APIResponse(res)(err, result);
        });
    },

    uploadMedia: function(req, res) {

        upload(req, res, function(err){
            if(err)
                return apiHelper.handleError(res, err, "File not uploaded.");

            User.findOne({_id: req.session.user_id}, function(err, user){

                filesHelper.fileToMedia(req.file, function (resultMedia){

                    let newMedia = new Media(resultMedia);
                    newMedia.user_loaded_id = req.session.user_id;

                    let path_data = filesHelper.getMediaFilePathData(newMedia);

                    if (!fs.existsSync(path_data.absolute_dir_path)){
                        fs.mkdirSync(path_data.absolute_dir_path);
                    }

                    fs.rename(req.file.path, path_data.absolute_file_path, function (err) {
                        if(err)
                            return apiHelper.handleError(res, err, "File not uploaded.");

                        newMedia.path = path_data.relative_file_path;
                        newMedia.save(function(err, doc){
                            var max_number = 0;
                            user.medias.forEach((user_media) => {
                                max_number = user_media.number > max_number ? user_media.number: max_number;
                            });

                            user.medias.push({media_id: doc._id, source: 'manual', number: max_number + 1});

                            user.save();
                            apiHelper.APIResponse(res)(err, doc);
                        });
                    });
                });

            });


        });
    },

    postMedia: function(req, res) {
        if (!(req.body.name || req.body.path)) {
            apiHelper.handleError(res, "Invalid user input", "Must provide a first or last name.", 400);
            return;
        }

        let newMedia = new Media(req.body);
        newMedia.save(apiHelper.APIResponse(res));
    }
};
