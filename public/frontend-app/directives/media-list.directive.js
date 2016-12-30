import {Component, NgZone, EventEmitter, Output, Input} from '@angular/core';

import template from './media-list.template.html';
import {MediaService} from "../services/media.service";
import {LoadMedia} from "../broadcasters/load-media";
import {MediaModel} from "../models/media.model";
import {PlaylistService} from "../services/playlist.service";

@Component({
	selector: 'media-list',
	template: template
})
export class MediaList implements OnInit {
	@Output() onChangeCurrent: EventEmitter = new EventEmitter();
	@Output() onLoadList: EventEmitter = new EventEmitter();
	@Input() list : Array<MediaModel>;
	@Input() message : String;

	@Output() mediaSelect: EventEmitter = new EventEmitter();
	@Output() currentMediaChange: EventEmitter = new EventEmitter();

	_currentMedia: MediaModel;
	@Input()
	get	currentMedia () {
		return this._currentMedia;
	};
	set	currentMedia (value) {
		this._currentMedia = value;
		this.currentMediaChange.emit(value);
	};

	loaded = false;

	constructor (media_service : MediaService,
				 playlist_service : PlaylistService,
				 load_media: LoadMedia) {
		this._media_service = media_service;
		this._playlist_service = playlist_service;
		this._load_media = load_media;
		this.zone = new NgZone({enableLongStackTrace: false});

		this._load_media.on().subscribe((options, callback) => {
			this.loaded = false;
			if(options && options.playlist){
				this.loadPlaylistMedia(options.playlist, callback);
			} else {
				this.loadUserMedia(callback);
			}
		});
	}

	ngOnInit() {
		this.loadUserMedia();
	}

	loadUserMedia(callback){
		this._media_service.query().then(this.initMedia.bind(this), this.loadError.bind(this));
	}
	loadPlaylistMedia(playlist, callback){
		this._playlist_service.show(playlist.id).then((playlist) => {
			this.initMedia(playlist.medias);
			this.message = `${playlist.name} - Playlist media:`
		}, this.loadError.bind(this));
	}

	selectMedia(media) {
		this.currentMedia = media;
		this.mediaSelect.emit(media);
	}

	initMedia(media_list){
		this.list = media_list;
		if(media_list.length > 0)
			this.currentMedia = media_list[0];

		this.loaded = true;
		this.onLoadList.emit(media_list);
		//if(callback)
		//	callback(media_list);
	}
	loadError(error){
		this.zone.run(() => {
			this.initMedia.bind(this)([]);
			this.message = _.has(error, '_body') ? error._body : error;
		});
	}
}