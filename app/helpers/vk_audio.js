var _ = require('lodash');

var commonHelper = require("./common");

module.exports = {
    vkAudioToMedia: function(vk_audio){
        //vk_audio fields: https://vk.com/dev/audio_object

        var media = _.pick(vk_audio, ['artist', 'title', 'duration']);

        var extension = commonHelper.getExtension(vk_audio.url);

        _.extend(media, {
            remote_url: vk_audio.url,
            vk:{
                id: vk_audio.id,
                lyrics_id: vk_audio.lyrics_id,
                genre_id: vk_audio.genre_id,
                owner_id: vk_audio.owner_id,
                date: vk_audio.date,
                artist: vk_audio.artist,
                title: vk_audio.title
            },
            type: 'audio/' + extension
        });
        return media;
    }
};