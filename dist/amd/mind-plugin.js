define(["exports"], function (exports) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var MindPlugin = exports.MindPlugin = function () {
		function MindPlugin() {
			_classCallCheck(this, MindPlugin);

			this.firstNum = 0;
			this.secondNum = 0;
			this.result = 0;
		}

		MindPlugin.prototype.add = function add() {
			this.result = Number(this.firstNum) + Number(this.secondNum);
		};

		MindPlugin.prototype.subtract = function subtract() {
			this.result = Number(this.firstNum) - Number(this.secondNum);
		};

		MindPlugin.prototype.multiply = function multiply() {
			this.result = Number(this.firstNum) * Number(this.secondNum);
		};

		MindPlugin.prototype.divide = function divide() {
			this.result = Number(this.firstNum) / Number(this.secondNum);
		};

		return MindPlugin;
	}();
});