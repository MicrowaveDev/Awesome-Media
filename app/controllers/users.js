var crypto = require('crypto');
var fs = require('fs');

var apiHelper = require('../helpers/api');
var User = require("../models/user");

module.exports = {
    list: function(req, res) {
        User.find({ }, apiHelper.APIResponse(res));
    },

    create: function(req, res) {
        if(!req.session.user_id){
            User.find({ }, function(err, users){
                if(users.length)
                    return apiHelper.handleError(res, "Invalid session", "Create new user not allowed.", 400);
                else
                    createUser();
            });
        } else {
            createUser();
        }

        function createUser(){
            var user = new User();
            user.login = req.body.login;

            var md5sum = crypto.createHash('md5');
            md5sum.update(req.body.password);
            user.password = md5sum.digest('hex');

            user.save(function(err, user){
                req.session.user_id = user.id;
                apiHelper.APIResponse(res)(err, user);
            });
        }
    },

    auth: function(req, res){
        var md5sum = crypto.createHash('md5');
        md5sum.update(req.body.password);
        var password_hash = md5sum.digest('hex');

        User.findOne({login: req.body.login, password: password_hash }, function(err, user){
            if(user){
                req.session.user_id = user.id;
                apiHelper.APIResponse(res)(err, user);
            }
            else{
                apiHelper.handleError(res, "Auth failed", "User with this login and password not exist.", 400);
            }
        });
    }
};