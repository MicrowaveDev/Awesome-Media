const mongoose = require('mongoose'),
    Types = mongoose.Schema.Types;

const Playlist = mongoose.model('Playlist', {
    name: String,
    content: Array 
});

module.exports = Playlist;