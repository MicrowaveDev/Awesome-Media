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

	constructor (media_service : MediaService, load_media: LoadMedia) {
		this._media_service = media_service;
		this._load_media = load_media;
		this.zone = new NgZone({enableLongStackTrace: false});

		this._load_media.on().subscribe(options => {
			this.loadUserMedia();
		});
	}

	ngOnInit() {
		this.loadUserMedia();
	}

	selectMedia(media) {
		this.current = media;
		this.onChangeCurrent.emit(media);
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
			this.list = media_list;
			this.current = media_list[0];
			this.loaded = true;
			this.onLoadList.emit(media_list);
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
}