const fs = require('fs');
const _ = require('lodash');
const multer = require('multer');

const apiHelper = require('../helpers/api');
const filesHelper = require('../helpers/files');
const Media = require("../models/media");
const User = require("../models/user");

const config = require("../../config").data;
const upload = multer(config.multer_options).single('file');

module.exports = {
    getMedia: function(req, res) {
        if(!req.session.user_id){
            apiHelper.handleError(res, "Invalid session", "You are not auth.", 400);
            return;
        }

        User.findOne({_id: req.session.user_id}, function(err, user){
            if(user)
                Media.find({ _id: { "$in" : user.medias ? user.medias.map((user_media) => user_media.media_id) : [] } }, function(err, docs){
                    let userSortedMediaIds = _(user.medias).orderBy(['index'], ['asc']).map((user_media) => user_media.media_id.toString()).value();

                    let sortedMedia = _.orderBy(docs, (media) => {
                        return userSortedMediaIds.indexOf(media._id.toString());
                    }, ['asc']);

                    apiHelper.APIResponse(res)(err, sortedMedia);
                });
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
                            user.medias.forEach((user_media) => {
                                user_media.index += 1;
                            });

                            user.medias.push({media_id: doc._id, index: 0});

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