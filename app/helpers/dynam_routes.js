'use strict';
const Playlist = require('../models/playlist');

module.exports = function (app, callback) {
    Playlist.find(function (err, lists) {
        if (err) {
            console.log(err);
        }

        let arrLists = [];
        Array.prototype.push.apply(arrLists, lists); // if lists != collection

        arrLists.forEach(function (elem) {
            app.get('/api/playlist/' + elem.name, callback)
        })
    })
};
