/**
 * Created by graver on 29.11.16.
 */
"use strict";
const _ = require('lodash');
const request = require('supertest');
const expect = require('chai').expect;
const mongoose = require('mongoose');
const crypto = require('crypto');

const User = require('./../models/user');
const root = "http://localhost";

const apiHelper = require('./../helpers/api');
const commonHelper = require('./../helpers/common');

let sessionId;
let user_id;
let port = 3007;



describe('Routes', function () {
    this.timeout(360000000);

    before('Open  connection to the DB', function (done) {
        mongoose.connect('mongodb://localhost/awesome_media', done);
    });

    describe('Get lists', function () {

        before('Creates test user', function (done) {
            let user = new User({
                login: 'Test',
                password: commonHelper.cryptPassword('Password'),
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

        after('Remove test user', function (done) {
            User.remove({_id: user_id}, function (err) {
                if (err) {
                    done(err);
                }
                done()
            })
        });

        it('Should auth test user, POST/api/auth', function (done) {
            let req = request(`${root}:${port}`).post('/api/auth');
            req.send({
                login: 'Test',
                password: 'Password'
            }).expect(200)
                .end( (err, res) => {
                    if (err) {
                        done(err);
                    }
                    sessionId = res.headers['set-cookie'].pop().split(';')[0];
                    done();
            })
        });

        it('Should create playlist, POST/api/playlist', function (done) {
            let req = request(`${root}:${port}`).post('/api/playlist');
            req.cookies = sessionId;
            req.send({
                name: 'Test_playlist',
                medias: []
            }).expect(200)
                .end( (err, res) => {
                    if (err) {
                        done(err);
                    }
                    done();
            });

        });

        it('Should return playlists, GET/api/playlists', function (done) {
            let req = request(`${root}:${port}`).get('/api/playlists');
            req.cookies = sessionId;
            req.set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .end( (err, res) => {
                    if (err) {
                        done(err);
                    }
                    expect(res.body).to.be.a('array');
                    done();
                });
        });
    });
});
