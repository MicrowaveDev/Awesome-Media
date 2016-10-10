import { Component, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VgAPI } from 'videogular2/core';

import { MediaService } from '../../services/media.service';
import { UserService } from '../../services/user.service';
import { Ajax } from '../../helpers/ajax';
import { MediaModel } from '../../models/media.model';
import { UserModel } from '../../models/user.model';

import template from './media-list.template.html';
import {SocketService} from "../../services/socket.service";

@Component({
    selector: 'media-list',
    template: template
})
export class MediaListComponent {
    currentMedia : MediaModel;
    currentUser: UserModel;

    sideNavMessage = '';

    constructor(media_service : MediaService, user_service : UserService, route: ActivatedRoute, vg_api: VgAPI, ajax: Ajax,
     socket_service: SocketService){
        this._media_service = media_service;
        this._user_service = user_service;
        this._route = route;
        this._vg_api = vg_api;
        this._ajax = ajax;
        this._socket_service = socket_service;

        this.zone = new NgZone({enableLongStackTrace: false});
    }

    ngOnInit() {
        this._route.params
            .map(params => params.status)
            .subscribe((status) => {
                this.loadUserMedia();
            });

        this._user_service.list().then((users) => {
            this.users = users;
        });

        this._user_service.getCurrent((currentUser) => {
            this.currentUser = currentUser;
        });
    }

    loadUserMedia(){
        this.loaded = false;

        function loadError(error){
            this.zone.run(() => {
                this.message = _.has(error, '_body') ? error._body : error;
                this.loaded = true;
            });
        }
        function initMedia(media_list){
            this.mediaList = media_list;
            this.currentMedia = media_list[0];
            this.loaded = true;
        }
        this._media_service.query().then((result) => {
            if(result.length) {
                this.listLabel = 'Local audio list:';
                initMedia.bind(this)(result);
            }
            else {
                this.message = 'No media :(';
                this.loaded = true;
                //TODO: make it worked
                //this._ajax.get('/api/vk_audio_list').then((media_list) => {
                //    this.listLabel = 'VK audio list:';
                //    initMedia(media_list);
                //}, loadError.bind(this))
            }
        }, loadError.bind(this));
    }

    setCurrentMedia(media){
        this.currentMedia = media;
        this._vg_api.play();
    }
    nextMedia(){
        var mediaIndex = this.mediaList.indexOf(this.currentMedia);
        if(mediaIndex == this.mediaList.length - 1){
            mediaIndex = -1;
        }
        this.currentMedia = this.mediaList[++mediaIndex];
    }
    onVkAuth(){
        this.loadUserMedia();
    }
    onUploadMedia(){
        this.loadUserMedia();
    }

    userError(error){
        this.zone.run(() => {
            this.sideNavMessage = _.has(error, '_body') ? error._body : error;
        });
    }
    onSaveNewUser(newUser){
        this._user_service.create(newUser).then((user) => {
            this.currentUser = user;
        }, this.userError.bind(this));
    }
    onLogInUser(logInUser){
        this._user_service.auth(logInUser).then((user) => {
            this.currentUser = user;
        }, this.userError.bind(this));
    }
    onSyncAudio(){
        var socket = this._socket_service.get("vk_audio_sync", (response) => {
            if(response.error){
                alert(response.message);
            } else {
                this.listLabel = 'Local audio list:';
                this.mediaList = [];
                this.message = response.message;
                this.loaded = false;
            }
        });

        socket.on("partial_success", (response) => {
            if(response.data && response.data.object){
                this.mediaList.push(response.data.object);
            }
            this.message = response.message;
            console.log("partial_success", response);
        });

        socket.on("all_success", (response) => {
            this.sync_success = true;
            console.log("all_success", response);
            this.message = 'All media are synced! Refresh audio list...';

            this._media_service.query().then((result) => {
                this.mediaList = result;
            })
        });

        socket.on("disconnect", (response) => {
            if(!this.sync_success)
                this.message = 'Something wrong, refresh page and try again.';
            else
                setTimeout(() => {
                    this.loaded = true;
                }, 5000);
        });
    }
}