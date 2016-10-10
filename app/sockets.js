var vkController = require('./controllers/vk');

module.exports = function(io, app){

	io.of("vk_audio_sync").on("connection", (socket) => vkController.vkAudioSync(socket, app));

};