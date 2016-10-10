var fs = require('fs');
var _ = require('lodash');
var multer = require('multer');

var apiHelper = require('../helpers/api');
var filesHelper = require('../helpers/files');
var Media = require("../models/media");
var User = require("../models/user");

var config = require("../../config").data;
var upload = multer(config.multer_options).single('file');

module.exports = {
    getMedia: function(req, res) {
        if(!req.session.user_id){
            apiHelper.handleError(res, "Invalid session", "You are not auth.", 400);
            return;
        }

        User.findOne({_id: req.session.user_id}, function(err, user){
            if(user)
                Media.find({ _id: { "$in" : user.medias ? user.medias.map((user_media) => user_media.media_id) : [] } }, function(err, docs){
                    var userSortedMediaIds = _(user.medias).orderBy(['index'], ['asc']).map((user_media) => user_media.media_id).value();

                    console.log(userSortedMediaIds);
                    var sortedMedia = _.orderBy(docs, (media) => {
                        console.log(media._id, _.indexOf(userSortedMediaIds, media._id));
                        return userSortedMediaIds.indexOf(media._id);
                    }, ['asc']);

                    console.log(sortedMedia);
                    apiHelper.APIResponse(res)(err, sortedMedia);
                });
            else
                apiHelper.handleError(res, "Invalid user", "User not found.", 400);
        });
    },
    getMediaFiles: function(req, res) {
        var media_options = req.app.locals.media_options;
        fs.readdir(media_options.absolute_path, function(err, items) {
            var result = _.map(items, (file_name) => ({name: file_name, src: media_options.relative_path + file_name, type: "audio/mp3"}));

            apiHelper.APIResponse(res)(err, result);
        });
    },

    uploadMedia: function(req, res) {

        upload(req, res, function(err){
            if(err)
                return apiHelper.handleError(res, err, "File not uploaded.");

            User.findOne({_id: req.session.user_id}, function(err, user){

                filesHelper.fileToMedia(req.file, function (resultMedia){

                    var newMedia = new Media(resultMedia);
                    newMedia.user_loaded_id = req.session.user_id;

                    var path_data = filesHelper.getMediaFilePathData(newMedia);

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

        var newMedia = new Media(req.body);
        newMedia.save(apiHelper.APIResponse(res));
    }
};