const apiHelper = require('../helpers/api');
const mediaHelper = require('../helpers/media');

const User = require('../models/user');

module.exports = {

    getLists: function (req, res) {
        apiHelper.APIResponse(res)(null, res.locals.current_user.playlists);
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
        let playlist = res.locals.current_user.playlists.id(req.params.id);
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
        let playlist = res.locals.current_user.playlists.id(req.params.id);
        if (playlist) {
            playlist.medias.push({
                media_id: req.body.media_id,
                number: playlist.medias.length + 1
            });
            res.locals.current_user.save(function (err) {
                if (err) {
                    apiHelper.handleError(res, "Invalid saving", "Params for saving is invalid", 200)
                }
            });
        } else {
            apiHelper.handleError(res, "Invalid playlist", "Playlist not found.", 400);
            return;
        }
    },
    
    removeMedia: function (req, res) {
        let playlist = res.locals.current_user.playlists.id(req.params.id);
        let mediaId;
        if (playlist) {
            mediaId = playlist.medias.find(function (elem_media)  {
                return elem_media.media_id === req.body.media_id;
            });
            if (!(~mediaId)) {
                apiHelper.handleError(res, "Invalid media", "Media not found");
                return;
            } else {
                playlist.medias.splice(mediaId, 1);
            }
            res.locals.current_user.save(function (err) {
                if (err) {
                    apiHelper.handleError(res, "Invalid saving", "Params for saving is invalid", 200)
                }
            });
        } else {
            apiHelper.handleError(res, "Invalid playlist", "Playlist not found.", 400);
            return;
        }
    }
};
