export class MindPlugin {
	constructor () {
		this.firstNum = 0;
		this.secondNum = 0;
		this.result = 0;
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
