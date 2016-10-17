const mongoose = require('mongoose'),
    Types = mongoose.Schema.Types;

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
    })]
});

module.exports = User;