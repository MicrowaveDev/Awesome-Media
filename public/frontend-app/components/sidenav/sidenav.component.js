import { Component, EventEmitter, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';

import { Ajax } from '../../helpers/ajax';
import { UserModel } from '../../models/user.model';
import { UserService } from "../../services/user.service";

import template from './sidenav.template.html';

@Component({
    selector: 'sidenav',
    template: template,
    inputs: ['currentUser', 'message', 'allowToCreateFirstUser'],
    outputs: ['onVkAuth', 'onUploadMedia', 'onSyncAudio', 'onSaveNewUser', 'onLogInUser']
})
export class SidenavComponent {
    onVkAuth: EventEmitter = new EventEmitter();
    onUploadMedia: EventEmitter = new EventEmitter();
    onSyncAudio: EventEmitter = new EventEmitter();
    onSaveNewUser: EventEmitter = new EventEmitter();
    onLogInUser: EventEmitter = new EventEmitter();

    uploader = new FileUploader({url: '/api/media-upload'});

    currentUser: UserModel;
    newUser = null;
    logInUser = null;

    constructor(route: ActivatedRoute, ajax: Ajax, user_service : UserService, @Inject('AppConfig') app_config){
        this._route = route;
        this._ajax = ajax;
        this._user_service = user_service;
		this._app_config = app_config;
    }

    ngOnInit() {
        this._route.params
            .map(params => params.status)
            .subscribe((status) => {

            });

        //TODO: fix ugly code
        let self = this;
        //this.uploader.onCompleteAll = ()=>{
        //    self.onUploadMedia.next();
        //};
        this.uploader.onCompleteItem = ()=>{
            self.onUploadMedia.next();
        };
    }

    saveNewUser(){
        this.onSaveNewUser.next(this.newUser);
    }
    logIn(){
        this.onLogInUser.next(this.logInUser);
    }

    vkAuth(){
        const o = this._app_config.vk_api_options;

		let vk_window = window.open(`https://oauth.vk.com/authorize?client_id=${o.app_id}&display=popup&redirect_uri=${o.redirect_uri}&scope=${o.scope}&response_type=code&v=5.53`, 'VK Auth', 'width=900,height=600');

        vk_window.onunload = () => {
            this.onVkAuth.next();
            this._user_service.getCurrent((currentUser) => {
                this.currentUser = currentUser;
            })
        };
    }
    syncAudio(){
        this.onSyncAudio.next();
    }
}