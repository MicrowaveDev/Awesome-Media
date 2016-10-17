const mongoose = require('mongoose'),
	Types = mongoose.Schema.Types;

const Media = mongoose.model('Media', {
	artist: String,
	title: String,
	duration: Number,
	path: String,
	type: String,
	remote_url: String,

	vk: new mongoose.Schema({
		id: String,
		lyrics_id: String,
		genre_id: String,
		owner_id: String,
		date: String
	}),

	user_loaded_id: Types.ObjectId
});

module.exports = Media;