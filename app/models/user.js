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
        index: Number,
        listened_number: Number
    })]
});

module.exports = User;