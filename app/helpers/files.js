var _ = require('lodash');
var probe = require('node-ffprobe');

var commonHelper = require("./common");
var filesHelper = require("./files");
var config = require("../../config").data;

module.exports = {
    fileToMedia: function(multer_file, callback){
        //multer_file fields: https://github.com/expressjs/multer#api

        var separatedName = multer_file.originalname.split('-'),
            media = {};

        media.path = multer_file.path;

        media.artist = _.trim(separatedName[0]);

        //remove artist from separatedName
        separatedName.splice(0, 1);

        var separatedTitle = separatedName.join('-').split('.');
        //remove extension from separatedTitle
        separatedTitle.splice(separatedTitle.length - 1, 1);

        media.title = separatedTitle.join('.');

        probe(multer_file.path, function(err, probeData) {

            media.duration = probeData.probe_time;
            media.type = 'audio/' + probeData.format.format_name;

            if(callback)
                callback(media);
        });

        return media;
    },
    getMediaFileName: function(media){
        var old_file_name = media.artist + ' - ' + media.title;
        var file_name = old_file_name.replace(/[^\wа-яёА-ЯЁa-zA-Z\s.,-]/gi, ' ');
        if(file_name.length > 100)
            file_name = file_name.substring(0, 100);

        file_name = _.trim(file_name);

        console.log(old_file_name, '=>', file_name);
        var extension = media.type ? _.last(media.type.split('/')) : commonHelper.getExtension(media.url || media.path);
        file_name += "." + extension;

        return file_name;
    },
    getMediaFilePathData: function(media){
        var result = {};
        var in_media_dir = media.user_loaded_id + '/';

        result.relative_dir_path = config.media_options.relative_path + in_media_dir;
        result.absolute_dir_path = config.media_options.absolute_path + in_media_dir;

        result.file_name = this.getMediaFileName(media);
        result.relative_file_path = result.relative_dir_path + result.file_name;
        result.absolute_file_path = result.absolute_dir_path + result.file_name;

        return result;
    }
};