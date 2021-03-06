'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.MindPlugin = undefined;

var _desc, _value, _class, _descriptor;

var _aureliaFramework = require('aurelia-framework');

function _initDefineProp(target, property, descriptor, context) {
	if (!descriptor) return;
	Object.defineProperty(target, property, {
		enumerable: descriptor.enumerable,
		configurable: descriptor.configurable,
		writable: descriptor.writable,
		value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
	});
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	var desc = {};
	Object['ke' + 'ys'](descriptor).forEach(function (key) {
		desc[key] = descriptor[key];
	});
	desc.enumerable = !!desc.enumerable;
	desc.configurable = !!desc.configurable;

	if ('value' in desc || desc.initializer) {
		desc.writable = true;
	}

	desc = decorators.slice().reverse().reduce(function (desc, decorator) {
		return decorator(target, property, desc) || desc;
	}, desc);

	if (context && desc.initializer !== void 0) {
		desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
		desc.initializer = undefined;
	}

	if (desc.initializer === void 0) {
		Object['define' + 'Property'](target, property, desc);
		desc = null;
	}

	return desc;
}

function _initializerWarningHelper(descriptor, context) {
	throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var MindPlugin = exports.MindPlugin = (_class = function () {
	function MindPlugin() {
		_classCallCheck(this, MindPlugin);

		_initDefineProp(this, 'passedInVal', _descriptor, this);

		this.passedInVal = '...';
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
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'passedInVal', [_aureliaFramework.bindable], {
	enumerable: true,
	initializer: null
})), _class);