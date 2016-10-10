import {Component} from '@angular/core';

@Component({
	selector : '[href]',
	host : {
		'(click)' : 'preventDefault($event)'
	},
	template: '<ng-content></ng-content>',
	inputs: [ 'href' ]
})

export class PreventHref {
	preventDefault(event) {
		if(this.href.length == 0) event.preventDefault();
	}
}