/**
 * Created by graver on 29.11.16.
 */
"use strict";
const _ = require('lodash');
const request = require('request');
const expect = require('chai').expect;

const User = require('./../models/user');

const apiHelper = require('./../helpers/api');
const playlistsController = require('./../controllers/playlists');
const commonController = require('./../controllers/common');


let requestRaw = {
    session: null
};
let user_id;

describe('Routes', function () {
    describe('Get lists', function () {
        beforeEach('Creates test user', function () {
            let user = new User({
                login: 'Test',
                first_name: 'FirstName',
                last_name: 'LastName',
                vk: {}
            });
            user.save((err, doc) => {
                if (err) {
                    console.log(err);
                    return;
                }
                user_id = doc._id;
            })
        });
        
        afterEach('Remove test user', function () {
            User.remove({_id: user_id}, function (err) {
                if (err) {
                    console.log(err);
                    return;
                }
            })
        });

        it("Should return playlists", function (done) {
            let opts = {
                url: "http://localhost:3007/api/playlists"
            };
            request(opts, (err, res, body) => {
                expect(res.statusCode).to.equal(200); //User not found, cause session for this request is empty
                console.log(body);
                done();
            })
        });
    });
});
