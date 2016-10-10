var application_root = __dirname;

var media_path = "/media/";
var config = {
	media_options: {
		relative_path: media_path,
		absolute_path: application_root +  "/public" + media_path
	},
	vk_api_options: {
		app_id: process.env.VK_APP_ID,
		app_secret: process.env.VK_APP_SECRET,
		redirect_uri: 'http://media.jonybang.ru/api/vk_callback_auth',
		scope: 'audio,offline'//,nohttps
	},
	permissions: {
		vkUsersIds: [11204355, 179126482, 182778898, 1935590]
	},
	multer_options: {
		dest: './public/' + media_path + 'temp/'
	}
};

module.exports.data = config;

module.exports.setLocals = function(app){
	var _ = require('lodash');
	_.extend(app.locals, config);
};