/**
 * Created by graver on 29.11.16.
 */
"use strict";
const _ = require('lodash');
const request = require('supertest');
const expect = require('chai').expect;
const mongoose = require('mongoose');

const User = require('./../models/user');

const apiHelper = require('./../helpers/api');
const commonController = require('./../controllers/common');

let sessionId;
let user_id;
let root = "http://localhost"
let port = 3007;

request(`${root}:${port}`)
    .get('/api/users').expect(200).end( (err, res) => {
    if (err) {
        return console.log(err);
    }
    sessionId = res.headers['set-cookie'].pop().split(';')[0];
});

describe('Routes', function () {

    before('Open  connection to the DB', function (done) {
        mongoose.connect('mongodb://localhost/awesome_media', done);
    });

    describe('Get lists', function () {

        beforeEach('Creates test user', function (done) {
            let user = new User({
                login: 'Test',
                first_name: 'FirstName',
                last_name: 'LastName',
                vk: {}
            });
            user.save((err, doc) => {
                if (err) {
                    return console.log(err);
                }
                user_id = doc._id;
                done();
            })
        });

        afterEach('Remove test user', function (done) {
            User.remove({_id: user_id}, function (err) {
                if (err) {
                    return console.log(err);
                }
                done()
            })
        });

        it("Should return playlists", function (done) {
            let req = request(`${root}:${port}`).get('/api/playlists');
            req.cookies = sessionId;
            req.set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .end( (err, res) => {
                    if (err) {
                        return console.log(err);
                    }
                    expect(res.body).to.be.a('array');
                });
        });
    });
});
