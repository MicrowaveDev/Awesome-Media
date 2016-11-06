const Playlist = require('../models/playlist');
const apiHelper = require('../helpers/api');

module.exports = {
    openList: function (req, res) {
        "use strict";

        return Playlist.find(apiHelper.APIResponse(res));
    },

    createList: function (req, res) {
        "use strict";

        if (!(req.body.name || req.body.medias)) {
            apiHelper.handleError(res, "Invalid name input", "Must provide a name of a list and list.", 400);
            return;
        }
        let newList = new Playlist(req.body);
        newList.save(apiHelper.APIResponse(res));
    },

    getList: function (req, res) {
        "use strict";

        if (!req.body.name) {
            apiHelper.handleError(res, "Invalid name input", "Must provide a name of a list", 400);
            return;
        }
        Playlist.find({name: req.body.name}, apiHelper.APIResponse(res));
    },
    
    deleteList: function (req, res) {
        "use strict";

        if (!req.body.name) {
            apiHelper.handleError(res, "Invalid name input", "Must provide a name of a list", 400);
            return;
        }
        Playlist.find({name: req.body.name}).remove();
    }
};