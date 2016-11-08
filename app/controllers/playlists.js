const Playlist = require('../models/playlist');
const apiHelper = require('../helpers/api');
const url = require('url');
"use strict";

module.exports = {

    openLists: function (req, res) {
        return Playlist.find(apiHelper.APIResponse(res));
    },

    createList: function (req, res) {
        if (!(req.body.name || req.body.medias)) {
            apiHelper.handleError(res, "Invalid name input", "Must provide a name of a list and list.", 400);
            return;
        }
        let newList = new Playlist(req.body);
        newList.save(apiHelper.APIResponse(res));
    },

    getList: function (req, res) {
        let name = req.originalUrl.slice(14);
        Playlist.find({name: name}, apiHelper.APIResponse(res));
    },

    deleteList: function (req, res) {
        if (!req.body.id) {
            apiHelper.handleError(res, "Invalid id input", "Must provide a id of a list", 400);
            return;
        }
        Playlist.find({_id: req.body.id}).remove();
    },

    getMedias: function (req, res) {
        
    }
};
