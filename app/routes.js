const vkController = require('./controllers/vk');
const mediaController = require('./controllers/media');
const commonController = require('./controllers/common');
const usersController = require('./controllers/users');
const playlistsController = require('./controllers/playlists');

const apiHelper = require('./helpers/api');

module.exports = function(app){

    app.get("/api/vk_callback_auth", vkController.vkCallbackAuth);
    app.post("/api/vk_open_api_auth", vkController.vkOpenApiAuth);
    app.get("/api/vk_audio_list", vkController.vkAudioList);
    app.get("/api/vk_audio_list_test", vkController.vkAudioListTest);
    app.post("/api/vk_audio_sync", vkController.vkAudioSync);

    app.get("/api/users", usersController.list); //tested
    app.post("/api/users", usersController.create); //tested
    app.post("/api/auth", usersController.auth); //tested
    app.get("/api/current_user", commonController.currentUser); //tested

    app.get("/api/playlists", apiHelper.getCurrentUser, playlistsController.getLists); //tested
    app.post("/api/playlists", apiHelper.getCurrentUser, playlistsController.createList); //tested
    app.delete("/api/playlists/:id", apiHelper.getCurrentUser, playlistsController.deleteList); //tested
    app.get("/api/playlists/:id", apiHelper.getCurrentUser, playlistsController.getList); //tested
    app.put("/api/playlists/:id", apiHelper.getCurrentUser, playlistsController.updateList); //tested
    app.post("/api/playlists/media/:id", apiHelper.getCurrentUser, playlistsController.addMedia); //tested
    app.delete("/api/playlists/media/:id", apiHelper.getCurrentUser, playlistsController.removeMedia); //tested


    app.get("/api/media", apiHelper.getCurrentUser, mediaController.getMedia); //tested
    app.post("/api/media", mediaController.postMedia);
    app.post("/api/media-upload", commonController.prepareTestUser, mediaController.uploadMedia); //tested


    // app.get('/api/test_env', function(req, res){
    //     res.status(200).json(process.env);
    // });
};


