var bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
var express = require("express");
var expressSession = require('express-session');
var methodOverride = require('method-override');
var socketIo = require('socket.io');
var mongoStore = require('connect-mongo')(expressSession);
var env = require('node-env-file');

var application_root = __dirname;
env(application_root + '/.env');

var app_config = require('./config');
var app_routes = require('./app/routes');
var app_sockets = require('./app/sockets');

var app = express();

app.use(express.static(application_root + "/public"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(methodOverride());

mongoose.connect('mongodb://localhost/awesome_media');
var db = mongoose.connection;

var session = expressSession({
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
  var server = app.listen(process.env.PORT || 3007, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });

  var io = socketIo.listen(server);

  // http://stackoverflow.com/questions/25532692/how-to-share-sessions-with-socket-io-1-x-and-express-4-x/25618636#comment55421335_25618636
  io.use(function(socket, next) {
    session(socket.request, {}, next);
  });

  app.use(session);

  app_config.setLocals(app);
  app_routes(app);
  app_sockets(io, app);
});

process.on('uncaughtException', function (err) {
  console.log('uncaughtException', err);
});