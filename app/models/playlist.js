const mongoose = require('mongoose'),
    Types = mongoose.Schema.Types;

const Playlist = mongoose.model('Playlist', {
    name: String,
    user_id: String,
    medias: [new mongoose.Schema({
        id: String,
        number: Number
    })]
});

module.exports = Playlist;