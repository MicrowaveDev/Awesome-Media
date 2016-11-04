const Playslist = require('../models/playlist');

module.exports = {
    openList: function (name) {
        "use strict";

        // TODO: opens list of albums from there
        console.log('hello');
        Playslist.find(query, function (doc) {
            console.log(doc);
        });
    },


};