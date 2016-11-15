const vkController = require('./controllers/vk');
const mediaController = require('./controllers/media');
const commonController = require('./controllers/common');
const usersController = require('./controllers/users');
const playlistsController = require('./controllers/playlists');

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

    app.get("/api/playlists",  playlistsController.openLists);
    app.post("/api/playlist", playlistsController.createList);
    app.delete("/api/playlist/:id", playlistsController.deleteList);
    app.get("/api/playlist/:id", playlistsController.getList);

    app.get("/api/media", mediaController.getMedia);
    app.post("/api/media", mediaController.postMedia);
    app.post("/api/media-upload", commonController.prepareTestUser, mediaController.uploadMedia);


    // app.get('/api/test_env', function(req, res){
    //     res.status(200).json(process.env);
    // });
};


