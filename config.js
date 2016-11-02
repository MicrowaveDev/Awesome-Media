const application_root = __dirname;

const media_path = "/media/";
let config = {
	media_options: {
		relative_path: media_path,
		absolute_path: application_root +  "/public" + media_path
	},
	vk_api_options: {
		app_id: 5638380, // public info placed to config.js
		app_secret: process.env.VK_APP_SECRET, // private info placed to env variables
		redirect_uri: 'http://media.jonybang.ru/api/vk_callback_auth',
		scope: 'audio,offline'//,nohttps
	},
	permissions: {
		vkUsersIds: [11204355, 179126482, 182778898, 1935590, 18365571, 349093873]
	},
	multer_options: {
		dest: './public/' + media_path + 'temp/'
	}
};

module.exports.data = config;

module.exports.setLocals = function(app){
	const _ = require('lodash');
	_.extend(app.locals, config);
};