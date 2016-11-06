const mongoose = require('mongoose'),
    Types = mongoose.Schema.Types;

const Playlist = mongoose.model('Playlist', {
    name: String,
    medias: [new mongoose.Schema({
        id: String
    })]
});

module.exports = Playlist;