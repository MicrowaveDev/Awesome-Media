import { Component, EventEmitter, Output, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserModel } from '../../models/user.model';

import template from './right_sidenav.template.html';
import {PlaylistService} from "../../services/playlist.service";
import {PlaylistModel} from "../../models/playlist.model";
import {LoadMedia} from "../../broadcasters/load-media";

@Component({
    selector: 'right-sidenav',
    template: template
})
export class RightSidenavComponent {
    @Input() currentUser: UserModel;

    @Output() currentPlaylistChange: EventEmitter = new EventEmitter();

    _currentPlaylist: PlaylistModel;
    @Input()
    get	currentPlaylist () {
        return this._currentPlaylist;
    };
    set	currentPlaylist (value) {
        this._currentPlaylist = value;
        this.currentPlaylistChange.emit(value);
    };

    newPlaylist = null;

    constructor(route: ActivatedRoute,
                playlist_service : PlaylistService){
        this._route = route;
        this._playlist_service = playlist_service;
    }

    ngOnInit() {
        this._route.params
            .map(params => params.status)
            .subscribe((status) => {

            });

        this._playlist_service.query().then((playlists) => {
            this.playlists = playlists;
        })
    }

    selectPlayList(playlist) {
        this.currentPlaylist = playlist;
    }
    createPlaylist(){
        this._playlist_service.save(this.newPlaylist).then((playlist) => {
            this.playlists.push(playlist);
            this.newPlaylist = null;
        })
    }
}