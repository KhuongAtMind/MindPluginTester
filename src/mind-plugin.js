import {bindable} from 'aurelia-framework';

export class MindPlugin {
	@bindable passedInVal;
	constructor () {
		this.passedValue = '...';
		this.firstNum = 0;
		this.secondNum = 0;
		this.result = 0;
	}

	passedInValChanged (value) {
		console.log('passed in value changed', value);
		this.passedValue = value;
	}

	add () {
		this.result = Number(this.firstNum) + Number(this.secondNum);
	}

	subtract () {
		this.result = Number(this.firstNum) - Number(this.secondNum);
	}

	multiply () {
		this.result = Number(this.firstNum) * Number(this.secondNum);
	}

	divide () {
		this.result = Number(this.firstNum) / Number(this.secondNum);
	}
}
