"use strict";

System.register([], function (_export, _context) {
	"use strict";

	var MindPlugin;

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	return {
		setters: [],
		execute: function () {
			_export("MindPlugin", MindPlugin = function () {
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
			}());

			_export("MindPlugin", MindPlugin);
		}
	};
});