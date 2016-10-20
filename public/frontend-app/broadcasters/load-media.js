import {Broadcaster} from "./broadcaster";

export class LoadMedia {
	/**
	 * Constructor
	 * @param broadcaster
	 */
	constructor(broadcaster: Broadcaster) {
		this._broadcaster = broadcaster;
	}

	fire(options = null)  {
		this._broadcaster.broadcast('LoadMedia', options);
	}

	on() {
		return this._broadcaster.on('LoadMedia');
	}
}
