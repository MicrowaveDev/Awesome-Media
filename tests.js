/**
 * Created by graver on 29.11.16.
 */
"use strict";

const mocha = require('mocha');
const _ = require('lodash');

const User = require('./app/models/user');

const apiHelper = require('./app/helpers/api');
const playlistsController = require('./app/controllers/playlists');
const commonController = require('./app/controllers/common');

let describe = mocha.describe;
let it = mocha.it;

let requestRaw = {
    session: null
};

function getUser() {
    return new Promise(function (res, rej) {
        User.find({}, function (err, docs) {
            if(docs && docs.length){
                req.session.user_id = docs[0]._id;
                res(docs);
            }
            rej(err);
        })
    })
}

getUser().then(function (res, err) {
    describe('Routes', function () {
        describe('Get lists', function () {
            it("Should return playlists", function (done) {
                console.log(res)
            });
        });
    });
});

