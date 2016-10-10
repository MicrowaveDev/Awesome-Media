# Awesome Media App

Simple web player of server based media with possibility of sync with VKontakte.  
Disclaimer:  
Now there is no way for auth in app without vk auth. It will be implemented in nearest next version.

## Project stage

On current stage project can load all available your vk audio to server ./public/media/user-id/ directory for play audio from your server.

## How to try

1. Prepare your server environment for MEAN stack (Node 6.* required):  
https://github.com/creationix/nvm  
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/

2. Clone this repo to server: `git clone https://github.com/Jonybang/Awesome-Media`  

3. Execute npm install on cloned directory `npm install`

4. For sync with Vkontakte:  
Create you own web-site VKontakte App: https://vk.com/editapp?act=create  
For manual upload audio:  
Install ffmpeg: `sudo apt-get install ffmpeg`

5. Start Node: `VK_APP_ID=your-vk-app-id VK_APP_SECRET=your-vk-app-secret node server.js`  
Or install forever, and start Forever: https://github.com/foreverjs/forever  
`VK_APP_ID=your-vk-app-id VK_APP_SECRET=your-vk-app-secret forever start server.js`
6. Open your-server-domen-or-ip:3007

7. Optionaly. Bind application to domain/subdomain:  
http://stackoverflow.com/questions/5009324/node-js-nginx-what-now


## Manual load VK audio:

Reason for manual load vk audio(RUS): http://vkaudiosaver.ru/news/otobrazhenie-ne-vseh-trekov-v-vkaudiosaver.html

```
var jq = document.createElement('script');
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);
function sleep(ms) {ms += new Date().getTime();while (new Date() < ms){}} 
setTimeout(function(){
	$('.audio_row').length;
	
	var document_height = 0;
	var intervalID = setInterval(function(){
		if($(document).height() <= document_height)		
			scrollFinish();
					
		document_height = $(document).height();
		$(window).scrollTop($(document).height());
	}, 1000);
	
	function scrollFinish(){
	    clearInterval(intervalID);
	    // TODO: take ids from server and download not exist on server ids
	    console.log('scrollFinish');
	}
}, 1000);
```

Then manual upload audio to application (currently not implemented)


## TODO:

- Fix not first sync with vk
- Place "Manual load VK audio" script on app interface with instruction
- Cron for load audio
- Add remote sources(not only VK)

## Dev Notes

Mongoose:  
http://mongoosejs.com/docs/guide.html

NodeJS 6 DOCS:  
https://nodejs.org/dist/latest-v6.x/docs/api/

Node style guide:  
https://github.com/felixge/node-style-guide

Angular 2 ES6:  
https://github.com/blacksonic/angular2-esnext-todomvc

Angular Material:  
https://github.com/angular/material2

Player:  
https://github.com/videogular/videogular2

VK API:  
https://www.npmjs.com/package/vkapi  
or:  
https://github.com/57uff3r/nodejs-vksdk

Webpack styles:  
http://asyncee.github.io/blog/nastrojka-webpack-dlya-raboty-s-react-i-sass/

Socket with angular 2:  
https://github.com/jussikinnula/angular2-socketio-chat-example

FFProbe:  
https://github.com/ListenerApproved/node-ffprobe
