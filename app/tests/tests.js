/**
 * Created by graver on 29.11.16.
 */
"use strict";
const _ = require('lodash');
const request = require('supertest');
const expect = require('chai').expect;
const mongoose = require('mongoose');
const crypto = require('crypto');
const fs = require('fs');

const User = require('./../models/user');
const apiHelper = require('./../helpers/api');
const commonHelper = require('./../helpers/common');

const root = "http://localhost";

let sessionId;
let userId;
let port = 3007;

let audioName = 'test_audio.mp3'
let audioPath = `${__dirname}/medias/${audioName}`;
let audioId;
let playlist;
let login = 'Test';
let password = 'Password';

function sendRequest(method, uri, cookies) {
    let req = request(`${root}:${port}`)[method](uri);
    req.cookies = cookies;
    return req;
}

describe('Routes', function () {
    this.timeout(360000000);

    before('Open  connection to the DB', function (done) {
        mongoose.connect('mongodb://localhost/awesome_media', done);
    });

    describe('Tests', function () {

        before('Creates test user', function (done) {
            let user = new User({
                login: login,
                password: commonHelper.cryptPassword(password),
                first_name: 'FirstName',
                last_name: 'LastName',
                vk: {}
            });
            user.save((err, doc) => {
                if (err) {
                    return done(err);
                }
                userId = doc._id;
                done();
            })
        });

        after('Remove test user', function (done) {
            User.remove({_id: userId}, function (err) {
                if (err) {
                    return done(err);
                }
                done()
            })
        });

        it('Should auth test user, POST/api/auth', function (done) {
            let req = sendRequest('post', '/api/auth');
            req.set('Content-Type', 'application/json')
                .send({
                    login: login,
                    password: password
                }).expect(200)
                    .end( (err, res) => {
                        if (err) {
                            return done(err);
                        }
                        sessionId = res.headers['set-cookie'].pop().split(';')[0];
                        done();
                    })
        });

        describe('Test sending and getting medias', function () {

            it('Should send audio, POST/api/media-upload', function (done) {
                let req = sendRequest('post', '/api/media-upload', sessionId);
                req.attach('file', audioPath)
                    .expect(200)
                    .end( (err, res) => {
                        if (err) {
                            return done(err);
                        }
                        done();
                    });
            });

            it('Should get audio GET/api/media', function (done) {
                let req = sendRequest('get', '/api/media', sessionId)
                req.expect(200)
                    .expect('Content-Type', /json/)
                    .end( (err, res) => {
                        if (err) {
                            return done(err);
                        }
                        expect(res.body).to.be.a('array');
                        expect(res.body[0].artist).to.equal(audioName);
                        expect(res.body[0].type).to.equal('audio/mp3');
                        audioId = res.body[0]._id;
                        done();
                    });
            });

            //TODO: POST/api/media

        });

        describe('Test creating playlist, getting and removing', function () {
            let testName = "Test_playlist";
            let playlistId;

            it('Should create playlist with test audio, POST/api/playlist', function (done) {
                let req = sendRequest('post', '/api/playlist/', sessionId);
                req.set('Content-Type', 'application/json')
                    .send({
                        name: testName,
                        medias: [{
                            media_id: audioId
                        }]
                    })
                    .expect(200)
                    .end( (err, res) => {
                        if (err) {
                            return done(err);
                        }
                        playlist = res.body;
                        playlistId = res.body._id;
                        done();
                    });
            });

            it('Should return created playlist, GET/api/playlist/:id', function (done) {
                let req = sendRequest('get', `/api/playlist/${playlistId}`, sessionId);
                req.set('Accept', 'application/json')
                    .expect('Content-Type', /json/)
                    .expect(200)
                    .end( (err, res) => {
                        if (err) {
                            return done(err);
                        }
                        expect(res.body.name).to.equal(testName);
                        expect(JSON.stringify(res.body.medias) === JSON.stringify(playlist.medias)).to.equal(true);
                        done();
                    });
            });

            it('Should return all playlists, actually - one, GET/api/playlists', function (done) {
                let req = sendRequest('get', '/api/playlists/', sessionId);
                req.set('Accept', 'application/json')
                    .expect('Content-Type', /json/)
                    .expect(200)
                    .end( (err, res) => {
                        if (err) {
                            return done(err);
                        }
                        expect(res.body).to.be.a('array');
                        expect(playlistId === res.body[0]._id).to.equal(true);
                        done();
                    });
            });

            it('Should update playlist, PUT/api/playlist/:id', function (done) {
                let req = sendRequest('put', `/api/playlist/${playlistId}`, sessionId);
                let updatedPartName = `updated_${testName}`;
                req.set('Content-Type', 'application/json')
                    .send({
                        name: `${updatedPartName}`
                    })
                    .expect(200)
                    .expect('Content-Type', /json/)
                    .end( (err, res) => {
                        if (err) {
                            return done(err);
                        }
                        expect(res.body.name).to.equal(updatedPartName);
                        done();
                    })
            });

            it('Should delete test audio from playlist, DELETE/api/playlist/media/:id', function (done) {
                let req = sendRequest('delete', `/api/playlist/media/${playlistId}`, sessionId);
                req.expect(200)
                    .send({
                        id: audioId
                    })
                    .end( (err) => {
                        if (err) {
                            return done(err);
                        }
                        done();
                    });
            });

            it('Should add test audio again, POST/api/playlist/media/:id', function (done) {
                let req = sendRequest('post', `/api/playlist/media/${playlistId}`, sessionId);
                req.send({
                    media_id: audioId
                })
                    .expect(200)
                    .end( (err) => {
                        if (err) {
                            return done(err);
                        }
                        done();
                    })
            });

            it('Should remove playlist, DELETE/api/playlist/:id', function (done) {
                let req = sendRequest('delete', `/api/playlist/${playlistId}`, sessionId);
                req.expect(200)
                    .end( (err) => {
                        if (err) {
                            return done(err);
                        }
                        done();
                    })
            });
        });
        
        describe('Test getting users', function () {

            let testLogin = 'so_login';
            let testPass = 'so_password';

            it('Should create test user, POST/api/users', function (done) {
                let req = sendRequest('post', '/api/users', sessionId);
                req.set('Content-Type', 'application/json')
                    .send({
                        login: testLogin,
                        password: testPass
                    }).expect(200)
                    .expect('Content-Type', /json/)
                    .end( (err, res) => {
                        if (err) {
                            return done(err);
                        }
                        expect(res.body.login).to.equal(testLogin);
                        done();
                    });
            });

            it('Should reauth to main test user', function (done) {
                let req = sendRequest('post', '/api/auth');
                req.set('Content-Type', 'application/json')
                    .send({
                        login: login,
                        password: password
                    }).expect(200)
                    .end( (err, res) => {
                        if (err) {
                            return done(err);
                        }
                        sessionId = res.headers['set-cookie'].pop().split(';')[0];
                        done();
                    })
            });

            it('Should get list of all users, GET/api/users', function (done) {
                let req = sendRequest('get', '/api/users', sessionId);
                req.expect(200)
                    .expect('Content-Type', /json/)
                    .end( (err, res) => {
                        if (err) {
                            done(err);
                        }
                        expect(res.body).to.be.a('array');
                        expect(res.body).to.be.a('array');
                        expect(res.body.pop().login).to.equal(testLogin);
                        expect(res.body.pop().login).to.equal(login);
                        done();
                })
            });

            it('Should get main test user, GET/api/current_user', function (done) {
                let req = sendRequest('get', '/api/current_user', sessionId);
                req.expect(200)
                    .expect('Content-Type', /json/)
                    .end( (err, res) => {
                        if (err) {
                            return done(err);
                        }
                        expect(res.body.login).to.equal(login);
                        done();
                    })
            });
        })
    });
});