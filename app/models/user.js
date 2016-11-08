const mongoose = require('mongoose'),
    Types = mongoose.Schema.Types,
    Playlist = require('./playlist');

const User = mongoose.model('User', {
    login: String,
    password: String,
    first_name: String,
    last_name: String,


    vk: new mongoose.Schema({
        id: String,
        domain: String,
        first_name: String,
        last_name: String,
        token: String
    }),

    medias: [new mongoose.Schema({
        media_id: Types.ObjectId,
        number: Number,
        plays_count: Number,
        source: String
    })],

    lists: [Playlist]
});

module.exports = User;