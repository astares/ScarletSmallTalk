'use strict';
const SKNumber = Object.create(smalltalk.SKPrimitiveModule);
smalltalk.primitiveManager.registerModule(SKNumber, "SKNumber");

SKNumber.primRandom = function (receiver, args) {
	return Math.random();
}

SKNumber.primEquality = function (receiver, args) {
	const object = args[0];
	if (object.constructor !== Number) {
		return this.primFailValue;
	}
	return receiver.valueOf() === object.valueOf();
}

SKNumber.primAddition = function (receiver, args) {
	const operand = args[0];
	if (operand.constructor !== Number) {
		return this.primFailValue;
	}
	return receiver + operand;
}

SKNumber.primSubtraction = function (receiver, args) {
	const operand = args[0];
	if (operand.constructor !== Number) {
		return this.primFailValue;
	}
	return receiver - operand;
}

SKNumber.primMultiplication = function (receiver, args) {
	const operand = args[0];
	if (operand.constructor !== Number) {
		return this.primFailValue;
	}
	return receiver * operand;
}

SKNumber.primDivide = function (receiver, args) {
	const operand = args[0];
	if (operand.constructor !== Number || operand == 0) {
		return this.primFailValue;
	}
	return receiver / operand;
}

SKNumber.primGreaterThan = function (receiver, args) {
	const operand = args[0];
	if (operand.constructor !== Number) {
		return this.primFailValue;
	}
	return receiver > operand;
}

SKNumber.primLessThan = function (receiver, args) {
	const operand = args[0];
	if (operand.constructor !== Number) {
		return this.primFailValue;
	}
	return receiver < operand;
}

SKNumber.primGreaterThanEqualTo = function (receiver, args) {
	const operand = args[0];
	if (operand.constructor !== Number) {
		return this.primFailValue;
	}
	return receiver >= operand;
}

SKNumber.primLessThanEqualTo = function (receiver, args) {
	const operand = args[0];
	if (operand.constructor !== Number) {
		return this.primFailValue;
	}
	return receiver <= operand;
}

SKNumber.primBitAnd = function (receiver, args) {
	const value = args[0];
	if (value.constructor !== Number) {
		return this.primFailValue;
	}
	const base = receiver.valueOf();
	const operand = value.valueOf();
	if (!(Number.isInteger(base) && Number.isInteger(operand))) {
		return this.primFailValue;
	}
	return base & operand;
}

SKNumber.primBitOr = function (receiver, args) {
	const value = args[0];
	if (value.constructor !== Number) {
		return this.primFailValue;
	}
	const base = receiver.valueOf();
	const operand = value.valueOf();
	if (!(Number.isInteger(base) && Number.isInteger(operand))) {
		return this.primFailValue;
	}
	return base | operand;
}

SKNumber.primBitXor = function (receiver, args) {
	const value = args[0];
	if (value.constructor !== Number) {
		return this.primFailValue;
	}
	const base = receiver.valueOf();
	const operand = value.valueOf();
	if (!(Number.isInteger(base) && Number.isInteger(operand))) {
		return this.primFailValue;
	}
	return base ^ operand;
}

SKNumber.primBitShiftLeft = function (receiver, args) {
	const value = args[0];
	if (value.constructor !== Number) {
		return this.primFailValue;
	}
	const base = receiver.valueOf();
	const operand = value.valueOf();
	if (!(Number.isInteger(base) && Number.isInteger(operand))) {
		return this.primFailValue;
	}
	return base << operand;
}

SKNumber.primBitShiftRight = function (receiver, args) {
	const value = args[0];
	if (value.constructor !== Number) {
		return this.primFailValue;
	}
	const base = receiver.valueOf();
	const operand = value.valueOf();
	if (!(Number.isInteger(base) && Number.isInteger(operand))) {
		return this.primFailValue;
	}
	return base >> operand;
}

SKNumber.primFloor = function (receiver, args) {
	return Math.floor(receiver.valueOf());
}

SKNumber.primCeiling = function (receiver, args) {
	return Math.ceil(receiver.valueOf());
}

SKNumber.primLn = function (receiver, args) {
	const receiverNumber = receiver.valueOf();
	if (receiverNumber <= 0) {
		return this.primFailValue;
	}
	return Math.log(receiverNumber);
}

SKNumber.primRaisedTo = function (receiver, args) {
	const operand = args[0];
	if (operand.constructor !== Number) {
		return this.primFailValue;
	}
	const base = receiver.valueOf();
	const power = operand.valueOf();
	return Math.pow(base, power);
}

SKNumber.primSin = function (receiver, args) {
	return Math.sin(receiver.valueOf());
}

SKNumber.primCos = function (receiver, args) {
	return Math.cos(receiver.valueOf());
}

SKNumber.primTan = function (receiver, args) {
	return Math.tan(receiver.valueOf());
}

SKNumber.primAtan2 = function (receiver, args) {
	const object = args[0];
	if (object == null) {
		return this.primFailValue;
	}
	const primitiveNumber = object.valueOf();
	if (typeof primitiveNumber != 'number') {
		return this.primFailValue;
	}
	return Math.atan2(receiver.valueOf(), primitiveNumber);
}

SKNumber.primArctan = function (receiver, args) {
	return Math.atan(receiver.valueOf());
}

SKNumber.primArcsin = function (receiver, args) {
	return Math.asin(receiver.valueOf());
}

SKNumber.primArccos = function (receiver, args) {
	return Math.acos(receiver.valueOf());
}

SKNumber.primSqrt = function (receiver, args){
	const receiverNumber = receiver.valueOf();
	if (receiverNumber < 0) {
		return this.primFailValue;
	}
	return Math.sqrt(receiverNumber);
}

SKNumber.primToDo = function (receiver, args) {
	let upperBound = args[0];
	const block = args[1];
	if (upperBound.constructor !== Number 
		|| block.constructor !== Function)
	{
		return this.primFailValue;
	}
	const start = receiver.valueOf();
	upperBound = upperBound.valueOf();
	for (let i=start; i<=upperBound; i++) {
		block(i);
	}
	return receiver;
}

SKNumber.primToByDo = function (receiver, args) {
	let upperBound = args[0];
	let step = args[1];
	const block = args[2];
	if (upperBound.constructor !== Number
		|| step.constructor !== Number
		|| block.constructor !== Function)
	{
		return this.primFailValue;
	}
	const start = receiver.valueOf();
	upperBound = upperBound.valueOf();
	step = step.valueOf();
	if (step > 0) {
		for (let i=start; i<=upperBound; i+=step) {
			block(i);
		}
	}
	return receiver;
}

SKNumber.primIsNumber = function (receiver, args) {
	return !isNaN(receiver.valueOf());
}

SKNumber.primPi = function (receiver, args) {
	return Math.PI;
}

SKNumber.primE = function (receiver, args) {
	return Math.E;
}

SKNumber.primIsInteger = function (receiver, args) {
	return Number.isInteger(receiver.valueOf());
}

SKNumber.primRounded = function (receiver, args) {
	const receiverValue = receiver.valueOf();
	if (receiverValue < 0) {
		return (Math.round(Math.abs(receiverValue))) * -1;
	}
	else {
		return Math.round(receiverValue);
	}
}

SKNumber.primIsNaN = function (receiver, args) {
	return isNaN(receiver.valueOf());
}

SKNumber.primIsInfinite = function (receiver, args) {
	return !isFinite(receiver.valueOf());
}

SKNumber.primRound = function (receiver, args) {
	const object = args[0];
	if (object == null) {
		return this.primFailValue;
	}
	const positions = object.valueOf();
	if (typeof positions != 'number') {
		return this.primFailValue;
	}
	return Number(receiver.toFixed(positions));
}

SKNumber.primExp = function (receiver, args) {
	return Math.exp(receiver.valueOf());
}

SKNumber.primRadiansToDegrees = function (receiver, args) {
	return receiver.valueOf() * 180.0 / Math.PI;
}

SKNumber.primDegreesToRadians = function (receiver, args) {
	return receiver.valueOf() * Math.PI / 180.0;
}

SKNumber.primNegativeInfinity = function (receiver, args) {
	return Number.NEGATIVE_INFINITY;
}

SKNumber.primInfinity = function (receiver, args) {
	return Number.POSITIVE_INFINITY;
}

SKNumber.primNaN = function (receiver, args) {
	return Number.NaN;
}

SKNumber.primNumberFrom = function (receiver, args) {
	const aString = args[0].valueOf();
	if (typeof aString != 'string') {
		return this.primFailValue;
	}
	return Number(aString);
}

