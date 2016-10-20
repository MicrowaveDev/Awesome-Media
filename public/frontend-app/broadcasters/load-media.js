import {Broadcaster} from "./broadcaster";

export class LoadMedia {
	/**
	 * Constructor
	 * @param broadcaster
	 */
	constructor(broadcaster: Broadcaster) {
		this._broadcaster = broadcaster;
	}

	fire(options, callback) {
		this._broadcaster.broadcast('LoadMedia', options, callback);
	}

	on() {
		return this._broadcaster.on('LoadMedia');
	}
}
