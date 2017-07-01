import {bindable} from 'aurelia-framework';

export class MindPluginToo {
	@bindable passedInVal;
	constructor () {
		this.passedInVal = '...';
	}
}
