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

describe('Routes', function () {
    describe('Get lists', function () {
        before(function () {
            User.find({}, function (err, docs) {
                if (docs && docs.length) {
                    //give me the connect.sid
                }
            })
        })

        let opts = {
            url: "http://localhost:3007/api/playlists"
        };

        it("Should return playlists", function (done) {
            request(opts, (err, res, body) => {
                expect(res.statusCode).to.equal(200); //but it equals 400!!! user not found!!
                console.log(body);
                done();
            })
        });
    });
});
