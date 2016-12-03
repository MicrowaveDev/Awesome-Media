/**
 * Created by graver on 29.11.16.
 */
"use strict";
const _ = require('lodash');
const request = require('supertest')('http://localhost:3007'); //should i import port?
const expect = require('chai').expect;
const browser_cookies = require('browser-cookies');

const User = require('./../models/user');

const apiHelper = require('./../helpers/api');
const playlistsController = require('./../controllers/playlists');
const commonController = require('./../controllers/common');


let requestRaw = {
    session: null
};
let sessionId;

describe('Routes', function () {
    before('Get session id', function () {
        request.get('/api/users').expect(200).end( (err, res) => {
            if (err) {
                return console.log(err);
            }
            sessionId = res.headers['set-cookie'].pop().split(';')[0];
        });
    });

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

    describe('Get lists', function () {

        it("Should return playlists", function (done) {
            
        });
    });
});
