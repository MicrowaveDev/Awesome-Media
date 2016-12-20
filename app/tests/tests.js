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
let audioType;
let audioPath = `${__dirname}/medias/${audioName}`;
let audioId;
let playlist;

describe('Routes', function () {
    this.timeout(360000000);

    before('Open  connection to the DB', function (done) {
        mongoose.connect('mongodb://localhost/awesome_media', done);
    });

    describe('Tests', function () {

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
            let req = request(`${root}:${port}`).post('/api/auth');
            req.set('Content-Type', 'application/json')
                .send({
                login: 'Test',
                password: 'Password'
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

            it('Should send audio', function (done) {
                let req = request(`${root}:${port}`).post('/api/media-upload');
                req.cookies = sessionId;
                req.attach('file', audioPath)
                    .expect(200)
                    .end( (err, res) => {
                        if (err) {
                            return done(err);
                        }
                        done();
                    });
            });

            it('Should get audio', function (done) {
                let req = request(`${root}:${port}`).get('/api/media');
                req.cookies = sessionId;
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

        });

        describe('Test creating playlist, getting and removing', function () {
            let testName = "Test_playlist";
            let playlistId;

            it('Should create playlist, POST/api/playlist', function (done) {
                let req = request(`${root}:${port}`).post('/api/playlist/');
                req.cookies = sessionId;
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
                let req = request(`${root}:${port}`).get(`/api/playlist/${playlistId}`);
                req.cookies = sessionId;
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
        });
    });
});