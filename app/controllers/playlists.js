const Playlist = require('../models/playlist');
const apiHelper = require('../helpers/api');

module.exports = {
    openList: function (req, res) {
        "use strict";

        return Playlist.find(function (err, lists) {
            if (err) {
                apiHelper.handleError(res, err);
            }
            return res.send(lists);

        })

    },

    createList: function (req, res) {
        "use strict";

        if (!(req.body.name || req.body.medias)) {
            apiHelper.handleError(res, "Invalid name input", "Must provide a name of a list.", 400);
            return;
        }
        let newList = new Playlist(req.body);
        newList.save(apiHelper.APIResponse(res));
    },
    
    deleteList: function (req, res) {
        
    }


};