const mongoose = require('mongoose'),
    Types = mongoose.Schema.Types;

const Playlist = mongoose.model('Playlist', {
    name: String,
    content: Array // there wiil be links to audios
});

module.exports = Playlist;