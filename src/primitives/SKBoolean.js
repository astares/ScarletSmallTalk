'use strict';
const SKBoolean = Object.create(smalltalk.SKPrimitiveModule);
smalltalk.primitiveManager.registerModule(SKBoolean, "SKBoolean");

SKBoolean.primEquals = function (receiver, args) {
	const object = args[0];
	return (receiver.valueOf() === object.valueOf());
}

SKBoolean.primPrintString = function (receiver, args) {
	if (receiver.valueOf()) {
		return 'true';
	} else {
		return 'false';
	}
}

SKBoolean.primIfTrue = function (receiver, args) {
	const trueBlock = args[0];
	// if (trueBlock.constructor !== Function) {
	// 	return this.primFailValue;
	// }
	return receiver.valueOf()
		? trueBlock.value()
		: nil;
}

SKBoolean.primIfFalse = function (receiver, args) {
	const falseBlock = args[0];
	// if (falseBlock.constructor !== Function) {
	// 	return this.primFailValue;
	// }
	return receiver.valueOf()
		? nil
		: falseBlock.value();
}

SKBoolean.primTrueFalse = function (receiver, args) {
	const trueBlock = args[0];
	const falseBlock = args[1];
	// if (trueBlock.constructor !== Function || falseBlock.constructor !== Function) {
	// 	return this.primFailValue;
	// }
	return receiver.valueOf()
		? trueBlock.value()
		: falseBlock();
}

SKBoolean.primFalseTrue = function (receiver, args) {
	const falseBlock = args[0];
	const trueBlock = args[1];
	// if (falseBlock.constructor !== Function || trueBlock.constructor !== Function) {
	// 	return this.primFailValue;
	// }
	return receiver.valueOf()
		? trueBlock.value()
		: falseBlock();
}

SKBoolean.primAnd = function (receiver, args) {
	const block = args[0];
	if (block.constructor !== Function) {
		return this.primFailValue;
	}
	return receiver.valueOf()
		? block()
		: false;
}

SKBoolean.primOr = function (receiver, args) {
	const block = args[0];
	if (block.constructor !== Function) {
		return this.primFailValue;
	}
	return receiver.valueOf()
		? true
		: block();
}

SKBoolean.primNot = function (receiver, args) {
	return receiver.valueOf() === false;
}

SKBoolean.primAmpersand = function (receiver, args) {
	const operand = args[0];
	if (operand.constructor !== Boolean) {
		return this.primFailValue;
	}
	return receiver.valueOf() && operand.valueOf();
}

SKBoolean.primPipeSymbol = function (receiver, args) {
	const operand = args[0];
	if (operand.constructor !== Boolean) {
		return this.primFailValue;
	}
	return receiver.valueOf() || operand.valueOf();
}
