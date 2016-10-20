import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

/**
 * Broadcaster objects can perform broadcast of events among the application components
 */
export class Broadcaster {
	_eventBus : Subject;

	constructor() {
		this._eventBus = new Subject();
	}

	broadcast(key, data) {
		this._eventBus.next({ key, data });
	}

	on(key) : Observable {
		return this._eventBus.asObservable()
			.filter(event => event.key === key)
			.map(event => event.data);
	}
}