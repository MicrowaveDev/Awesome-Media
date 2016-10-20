import {Broadcaster} from "./broadcaster";

export class PlayMedia {
	/**
	 * Constructor
	 * @param broadcaster
	 */
	constructor(broadcaster: Broadcaster) {
		this._broadcaster = broadcaster;
	}

	fire(options = null)  {
		this._broadcaster.broadcast('PlayMedia', options);
	}

	on() {
		return this._broadcaster.on('PlayMedia');
	}
}
