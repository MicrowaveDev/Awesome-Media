const apiHelper = require('../helpers/api');
const mediaHelper = require('../helpers/media');

const User = require('../models/user');

module.exports = {

    getNamesOfLists: function (req, res) {
        apiHelper.APIResponse(res)(err, res.locals.current_user.playlists);
    },

    createList: function (req, res) {
        if (!(req.body.name && req.body.medias)) {
            apiHelper.handleError(res, "Invalid playlist", "Must provide name and medias for playlist", 400);
            return;
        }
        res.locals.current_user.playlists.push({
            name: req.body.name,
            user_id: req.session.user_id,
            medias: req.body.medias
        })
        res.locals.current_user.save(function (err) {
            if (err) {
                apiHelper.handleError(res, "Invalid saving", "Params for saving is invalid", 200)
            }
        })
    },

    getList: function (req, res) {
        let playlist;

        playlist = res.locals.current_user.playlists.id(req.params.id);
        if (playlist) {
            mediaHelper.getSortedMedia(playlist.medias, apiHelper.APIResponse(res));
        } else {
            apiHelper.handleError(res, "Invalid playlist", "Playlist not found.", 400);
        }
    },

    deleteList: function (req, res) {
        res.locals.current_user.playlists.id(req.params.id).remove();
        res.locals.current_user.save(function (err) {
            if (err) {
                apiHelper.handleError(res, "Invalid saving", "Params for saving is invalid", 200);
            }
        });
    },

    addMedia: function (req, res) {
        let playlist;

        playlist = res.locals.current_user.id(req.params.id);
        playlist.medias.push({
            number: ++playlist.medias.length,
            media_id: req.body.media_id
        });
    },
    
    removeMedia: function (req, res) {
        let playlist;

        playlist = res.locals.current_user.id(req.params.id);
        playlist.deleteOne({
            media_id: req.body.media_id
        });
    }
};
