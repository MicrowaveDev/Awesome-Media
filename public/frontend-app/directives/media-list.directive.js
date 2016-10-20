import {Component, NgZone, EventEmitter, Output, Input} from '@angular/core';

import template from './media-list.template.html';
import {MediaService} from "../services/media.service";
import {LoadMedia} from "../broadcasters/load-media";
import {MediaModel} from "../models/media.model";

@Component({
	selector: 'media-list',
	template: template
})
export class MediaList implements OnInit {
	@Output() onChangeCurrent: EventEmitter = new EventEmitter();
	@Output() onLoadList: EventEmitter = new EventEmitter();
	@Input() list : Array<MediaModel>;
	@Input() current : MediaModel;
	@Input() message : String;

	constructor (media_service : MediaService, load_media: LoadMedia) {
		this._media_service = media_service;
		this._load_media = load_media;
		this.zone = new NgZone({enableLongStackTrace: false});

		this._load_media.on().subscribe((options, callback) => {
			this.loadUserMedia(callback);
		});
	}

	ngOnInit() {
		this.loadUserMedia();
	}

	selectMedia(media) {
		this.current = media;
		this.onChangeCurrent.emit(media);
	}

	loadUserMedia(callback){
		this.loaded = false;

		function loadError(error){
			this.zone.run(() => {
				initMedia.bind(this)([]);
				this.message = _.has(error, '_body') ? error._body : error;
			});
		}
		function initMedia(media_list){
			this.list = media_list;
			if(media_list.length > 0)
				this.current = media_list[0];
			this.loaded = true;
			this.onLoadList.emit(media_list);
			if(callback)
				callback(media_list);
		}
		this._media_service.query().then((result) => {
			if(result.length) {
				this.message = 'Local audio list:';
				initMedia.bind(this)(result);
			}
			else {
				this.message = 'No media :(';
				this.loaded = true;
				initMedia.bind(this)([]);

				//TODO: make it worked
				//this._ajax.get('/api/vk_audio_list').then((media_list) => {
				//    this.listLabel = 'VK audio list:';
				//    initMedia(media_list);
				//}, loadError.bind(this))
			}
		}, loadError.bind(this));
	}
}