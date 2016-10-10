var vkController = require('./controllers/vk');
var mediaController = require('./controllers/media');
var commonController = require('./controllers/common');
var usersController = require('./controllers/users');

module.exports = function(app){

    app.get("/api/vk_callback_auth", vkController.vkCallbackAuth);
    app.post("/api/vk_open_api_auth", vkController.vkOpenApiAuth);
    app.get("/api/vk_audio_list", vkController.vkAudioList);
    app.get("/api/vk_audio_list_test", vkController.vkAudioListTest);
    app.post("/api/vk_audio_sync", vkController.vkAudioSync);

    app.get("/api/users", usersController.list);
    app.post("/api/users", usersController.create);
    app.post("/api/auth", usersController.auth);
    app.get("/api/current_user", commonController.currentUser);

    app.get("/api/media", mediaController.getMedia);
    app.post("/api/media", mediaController.postMedia);
    app.post('/api/media-upload', commonController.prepareTestUser, mediaController.uploadMedia);

    app.get('/api/test_env', function(req, res){
        res.status(200).json(process.env);
    });
};


