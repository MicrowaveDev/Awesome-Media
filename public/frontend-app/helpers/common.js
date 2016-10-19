export class CommonHelper {
	constructor(){
	}

	static handleEmitter(nextCallback, addCallback) {
		return {
			add: addCallback || function(){},
			next: nextCallback
		}
	}
}