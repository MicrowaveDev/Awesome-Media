const apiHelper = require('../helpers/api');
const User = require('../models/user');
"use strict";

module.exports = {

    openLists: function (req, res) {
        User.findOne({ _id: req.session.user_id }, function (err, user) {
            if (err) {
                apiHelper.handleError(res, "Invalid user", "User not found", 400);
            }
            let playlists = user.playlists;
        });
    },

    createList: function (req, res) {

    },

    getList: function (req, res) {
        User.findOne({ _id: req.session.user_id }, function (err, user) {
            if (err) {
                apiHelper.handleError(res, "Invalid user", "User not found", 400);
            }
            let playlist = user.playlists.id(req.params.id);
        });
    },

    deleteList: function (req, res) {

    },

    getMedias: function (req, res) {
        
    }
};
