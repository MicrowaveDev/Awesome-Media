import { Component, NgZone } from '@angular/core';

import { MediaService } from '../../services/media.service';
import { UserService } from '../../services/user.service';
import { MediaModel } from '../../models/media.model';
import { UserModel } from '../../models/user.model';

import template from './media.template.html';
import {SocketService} from "../../services/socket.service";
import {LoadMedia} from "../../broadcasters/load-media";
import {PlayMedia} from "../../broadcasters/play-media";

@Component({
    selector: 'media',
    template: template
})
export class MediaComponent {
    mediaList : Array<MediaModel>;
    currentMedia : MediaModel;
    currentUser: UserModel;

    sideNavMessage = '';

    constructor(media_service : MediaService, user_service : UserService,
     socket_service: SocketService, load_media: LoadMedia, play_media: PlayMedia){
        this._media_service = media_service;
        this._user_service = user_service;
        this._socket_service = socket_service;
        this._load_media = load_media;
        this._play_media = play_media;

        this.zone = new NgZone({enableLongStackTrace: false});
    }

    ngOnInit() {
        this._user_service.list().then((users) => {
            this.users = users;
        });

        this._user_service.getCurrent((currentUser) => {
            this.currentUser = currentUser;
        });
    }

    mediaListLoaded(media_list){
        this.mediaList = media_list;
        this.loaded = true;
    }
    mediaSelected(media){
        this.currentMedia = media;
        this._play_media.fire();
    }
    nextMedia(){
        let mediaIndex = this.mediaList.indexOf(this.currentMedia);
        if(mediaIndex == this.mediaList.length - 1){
            mediaIndex = -1;
        }
        this.mediaSelected(this.mediaList[++mediaIndex]);
    }
    onVkAuth(){
        this._load_media.fire();
    }
    onUploadMedia(){
        this._load_media.fire();
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
            this._load_media.fire();
        }, this.userError.bind(this));
    }
    onSyncAudio(){
        let socket = this._socket_service.get("vk_audio_sync", (response) => {
            if(response.error){
                alert(response.message);
            } else {
                this.listLabel = 'Local audio list:';
                this.mediaList = [];
                this.mediaListMessage = response.message;
                this.loaded = false;
            }
        });

        socket.on("partial_success", (response) => {
            if(response.data && response.data.object){
                this.mediaList.push(response.data.object);
            }
            this.mediaListMessage = response.message;
        });

        socket.on("all_success", (response) => {
            this.sync_success = true;
            this.mediaListMessage = 'All media are synced! Refresh audio list...';

            this._load_media.fire();
        });

        socket.on("disconnect", (response) => {
            if(!this.sync_success)
                this.mediaListMessage = 'Something wrong, refresh page and try again.';
        });
    }
    showPlaylistMedia(playlist){
        this._load_media.fire({playlist: playlist});
    }
}