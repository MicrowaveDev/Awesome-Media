const apiHelper = require('../helpers/api');
const mediaHelper = require('../helpers/media');

const User = require('../models/user');

module.exports = {

    openLists: function (req, res) {
        mediaHelper.openUserSession(req, function (err, user) {
            let namesOfPlaylists;

            if (err) {
                apiHelper.handleError(res, "Invalid user", "User not found", 400);
            }
            namesOfPlaylists = user.playlists.id('name');
            apiHelper.APIResponse(res)(err, namesOfPlaylists);
        })
    },

    createList: function (req, res) {
    },

    getList: function (req, res) {
        mediaHelper.openUserSession(req, function (err, user) {
            let playlist;

            if (err) {
                apiHelper.handleError(res, "Invalid user", "User not found", 400);
            }
            playlist = user.playlists.id(req.params.id);
            if (playlist) {
                mediaHelper.getSortedMedia(playlist.medias, apiHelper.APIResponse(res));
            } else {
                apiHelper.handleError(res, "Invalid playlist", "Playlist not found.", 400);
            }
        });
    },

    deleteList: function (req, res) {

    },

    getMedias: function (req, res) {
        
    }
};
