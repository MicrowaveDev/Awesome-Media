import {Component, EventEmitter} from '@angular/core';

import template from './audio-player.template.html';

import { VgAPI } from 'videogular2/core';
import {MediaModel} from "../models/media.model";
import {CommonHelper} from "../helpers/coomon";

@Component({
	selector: 'audio-player',
	template: template,
	inputs: [ 'audio' ],
	outputs: [ 'onEnded' ]
})
export class AudioPlayer implements OnInit, OnChanges {
	onEnded: EventEmitter = new EventEmitter();
	isFirst: Boolean = true;
	audio: MediaModel;

	constructor (vg_api : VgAPI) {
		this._vg_api = vg_api;
	}

	ngOnInit() {
		console.log('audio init', this.audio);
	}

	ngOnChanges(changes: {audio: SimpleChange}) {
		if(!this.audio)
			return;

		if(this.isFirst){
			this.isFirst = false;
			return;
		}

		this.audio = changes.audio.currentValue;
		setTimeout((() => {
			//https://github.com/videogular/videogular2/issues/112
			this._vg_api.getDefaultMedia().elem.load();
			this._vg_api.play();
		}).bind(this), 300);
	}
	onPlayerReady(){
		console.log("onPlayerReady");
		let self = this;
		this._vg_api.subscriptions.ended._subscribe(CommonHelper.handleEmitter((e) => {
			self.onEnded.next(self.audio);
			console.log('_vg_api.subscriptions.ended');
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