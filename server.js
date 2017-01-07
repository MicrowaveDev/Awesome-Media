"use strict";
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const express = require("express");
const expressSession = require('express-session');
const methodOverride = require('method-override');
const socketIo = require('socket.io');
const mongoStore = require('connect-mongo')(expressSession);
const env = require('node-env-file');
const https = require('https');
const http = require('http');
const fs = require('fs');

const privateKey = fs.readFileSync('./sslcert/key.pem').toString();
const certificate = fs.readFileSync('./sslcert/cert.pem').toString();
const credentials = {
  key: privateKey,
  cert: certificate
};

const application_root = __dirname;
env(application_root + '/.env');

const app_config = require('./config');
const app_routes = require('./app/routes');
const app_sockets = require('./app/sockets');

let app = express();

app.use(express.static(application_root + "/public"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(methodOverride());

mongoose.connect('mongodb://localhost/awesome_media');
let db = mongoose.connection;

let session = expressSession({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: app.get('env') === 'production',
    maxAge: 6000000
  },
  store: new mongoStore({ mongooseConnection: db })
});

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  // Initialize the app.
  let server = app.listen(process.env.PORT || 3007, function () {
    const port = server.address().port;
    console.log("App now running on port", port);
  });

  let io = socketIo.listen(server);

  // http://stackoverflow.com/questions/25532692/how-to-share-sessions-with-socket-io-1-x-and-express-4-x/25618636#comment55421335_25618636
  io.use(function(socket, next) {
    session(socket.request, {}, next);
  });

  app.use(session);

  app_config.setLocals(app);
  app_routes(app);
  app_sockets(io, app);

  http.createServer(app).listen(8080);
  https.createServer(credentials, app).listen(4443);
});

process.on('uncaughtException', function (err) {
  console.log('uncaughtException', err);
});