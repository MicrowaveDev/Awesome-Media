const apiHelper = require('../helpers/api');
const mediaHelper = require('../helpers/media');

const _ = require('lodash');


module.exports = {

    getLists: function (req, res) {
        apiHelper.APIResponse(res)(null, res.locals.current_user.playlists);
    },

    createList: function (req, res) {
        if (!req.body.name) {
            return apiHelper.handleError(res, "Invalid playlist", "Must provide name for playlist", 400);
        }
        let medias = _.map(req.body.medias, (elem, index) => {
            return {
                media_id: elem._id,
                number: index
            };
        });
        res.locals.current_user.playlists.push({
            name: req.body.name,
            user_id: req.session.user_id,
            medias: medias
        });
        res.locals.current_user.save(function (err, user) {
            if (err) {
                return apiHelper.handleError(res, "Invalid saving", "Params for saving is invalid", 200);
            }
            apiHelper.APIResponse(res)(err, user.playlists[user.playlists.length - 1]);
        })
    },

    getList: function (req, res) {
        let playlist = res.locals.current_user.playlists.id(req.params.id);
        if (!playlist) {
            return apiHelper.handleError(res, "Invalid playlist", "Playlist not found.", 400);
        }
        mediaHelper.getSortedMedia(playlist.medias, (err, result_medias) => {
            playlist.medias = result_medias;
            apiHelper.APIResponse(res)(err, playlist);
        });
    },

    deleteList: function (req, res) {
        res.locals.current_user.playlists.id(req.params.id).remove();
        res.locals.current_user.save(function (err) {
            if (err) {
                return apiHelper.handleError(res, "Invalid saving", "Params for saving is invalid", 200);
            }
        });
        apiHelper.APIResponse(res)();
    },

    addMedia: function (req, res) {
        let playlist = res.locals.current_user.playlists.id(req.params.id);
        if(!playlist) {
            return apiHelper.handleError(res, "Invalid playlist", "Playlist not found.", 400);
        }
        playlist.medias.push({
            media_id: req.body.media_id,
            number: playlist.medias.length + 1
        });
        res.locals.current_user.save(function (err) {
            if (err) {
                return apiHelper.handleError(res, "Invalid saving", "Params for saving is invalid", 200);
            }
        });
        apiHelper.APIResponse(res)();
    },
    
    removeMedia: function (req, res) {
        let playlist = res.locals.current_user.playlists.id(req.params.id);
        if (!playlist) {
            return apiHelper.handleError(res, "Invalid playlist", "Playlist not found.", 400);
        }
        let media = playlist.medias.find( (elem) => {
            return elem.media_id.toString() === req.body.id;
        });
        media.remove();
        res.locals.current_user.save(function (err) {
            if (err) {
                apiHelper.handleError(res, "Invalid saving", "Params for saving is invalid", 200)
            }
            apiHelper.APIResponse(res)();
        });
    },

    updateList: function (req, res) {
        let playlist = res.locals.current_user.playlists.id(req.params.id);
        if (!playlist) {
            return apiHelper.handleError(res, "Invalid playlist", "Playlist not found.", 400);
        }
        _.extend(playlist, req.body);
        res.locals.current_user.save(function (err, user) {
            if (err) {
                return apiHelper.handleError(res, "Invalid saving", "Params for saving is invalid", 200);
            }
            apiHelper.APIResponse(res)(null, user.playlists[user.playlists.length - 1]);
        })
    }
};
