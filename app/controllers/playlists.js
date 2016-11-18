const apiHelper = require('../helpers/api');
const User = require('../models/user');

module.exports = {

    openLists: function (req, res) {

    },

    createList: function (req, res) {

    },

    getList: function (req, res) {
        User.findOne({ _id: req.session.user_id }, function (err, user) {
            if (err) {
                apiHelper.handleError(res, "Invalid user", "User not found", 400);
            }
            let playlist = user.playlists.id(req.params.id);
            if (playlist) {

            }
        });
    },

    deleteList: function (req, res) {

    },

    getMedias: function (req, res) {
        
    }
};
