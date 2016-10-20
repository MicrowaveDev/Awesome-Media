import {Component, EventEmitter, Input, Output} from '@angular/core';

import template from './audio-player.template.html';

import { VgAPI } from 'videogular2/core';
import {MediaModel} from "../models/media.model";
import {CommonHelper} from "../helpers/common";
import {PlayMedia} from "../broadcasters/play-media";

@Component({
	selector: 'audio-player',
	template: template
})
export class AudioPlayer implements OnInit, OnChanges {
	@Input() audio: MediaModel;
	@Output() onEnded: EventEmitter = new EventEmitter();
	isFirst: Boolean = true;

	constructor (vg_api : VgAPI, play_media: PlayMedia) {
		this._vg_api = vg_api;
		this._play_media = play_media;

		this._play_media.on().subscribe(options => {
			setTimeout((() => {
				//https://github.com/videogular/videogular2/issues/112
				this._vg_api.getDefaultMedia().elem.load();
				this._vg_api.play();
			}).bind(this), 300);
		});
	}

	ngOnInit() {
		console.log('audio init', this.audio);
	}
	ngOnChanges(changes: {audio: SimpleChange}) {
		if(!this.audio)
			return;

		this._vg_api.getDefaultMedia().elem.load();
	}

	onPlayerReady(){
		let self = this;
		this._vg_api.subscriptions.ended._subscribe(CommonHelper.handleEmitter((e) => {
			self.onEnded.emit(self.audio);
		}));
	}
	onEnterCuePoint(){
		console.log("onEnterCuePoint");
	}
	onExitCuePoint(){
		console.log("onExitCuePoint");
	}
	onComplete(){
		console.log("onComplete");
	}
}