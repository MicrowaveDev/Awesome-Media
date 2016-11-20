const apiHelper = require('../helpers/api');
const mediaHelper = require('../helpers/media');

const User = require('../models/user');

module.exports = {

    openLists: function (req, res) {
        if (res.locals.err) {
            apiHelper.handleError(res, "Invalid user", "User not found", 400);
        }
        apiHelper.APIResponse(res)(err, res.locals.current_user.playlists);
    },

    createList: function (req, res) {

    },

    getList: function (req, res) {
        let playlist;

        if (res.locals.err) {
            apiHelper.handleError(res, "Invalid user", "User not found", 400);
        }
        playlist = res.current_user.playlists.id(req.params.id);
        if (playlist) {
            mediaHelper.getSortedMedia(playlist.medias, apiHelper.APIResponse(res));
        } else {
            apiHelper.handleError(res, "Invalid playlist", "Playlist not found.", 400);
        }
    },

    deleteList: function (req, res) {

    }
};
