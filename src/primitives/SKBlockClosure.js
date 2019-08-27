'use strict';
const SKBlockClosure = Object.create(smalltalk.SKPrimitiveModule);
smalltalk.primitiveManager.registerModule(SKBlockClosure, "SKBlockClosure");

SKBlockClosure.primWhileTrue = function (receiver, args) {
	const block = args[0];
	if (typeof block != 'function') {
		return this.primFailValue;
	}
	while (receiver().valueOf() === true) {
		block();
	}
	return nil;
}

SKBlockClosure.primValue = function (receiver, args) {
	if (args.length != 0) {
		return this.primFailValue;
	}
	return receiver();
}

SKBlockClosure.primValueWith = function (receiver, args) {
	if ( args.length != 1) {
		return this.primFailValue;
	}
	const object = args[0];
	return receiver(object);
}

SKBlockClosure.primValueWith2Objects = function (receiver, args) {
	if ( args.length != 2){
		return this.primFailValue;
	}
	const object = args[0];
	const anotherObject = args[1];
	return receiver(object, anotherObject);
}

SKBlockClosure.primValueWith3Objects = function (receiver, args) {
	if ( args.length != 3){
		return this.primFailValue;
	}
	const firstObject = args[0];
	const secondObject = args[1];
	const thirdObject = args[2];
	return receiver(firstObject, secondObject, thirdObject);
}

SKBlockClosure.primValueWith4Objects = function (receiver, args) {
	if ( args.length != 4){
		return this.primFailValue;
	}
	const firstObject = args[0];
	const secondObject = args[1];
	const thirdObject = args[2];
	const fourthObject = args[3];
	return receiver(firstObject, secondObject, thirdObject, fourthObject);
}

SKBlockClosure.primValueWithArguments = function (receiver, args) {
	const valueArray = args[0];
	if (!Array.isArray(valueArray) || (receiver.length != valueArray.length)) {
		return this.primFailValue;
	}
	if (valueArray.length == 0) {
		return receiver();
	}
	return receiver.apply(null,valueArray);
}

SKBlockClosure.primTryCatch = function (receiver, args) {
	const protectedBlock = args[0];
	const handlerBlock = args[1];
	if (protectedBlock.constructor !== Function
		|| handlerBlock.constructor !== Function)
	{
		return this.primFailValue;
	}
	try {
		return protectedBlock();
	} catch (e) {
		if (e != null && e.name == "stReturn") {
			throw e; // non-local return
		} else {
			return handlerBlock(receiver.smalltalkErrorOf_(e));
		}
	}
}

SKBlockClosure.primEnsure = function (receiver, args) {
	const ensureBlock = args[0];
	if (ensureBlock.constructor !== Function) {
		return this.primFailValue;
	}
	try {
		return receiver();
	} finally {
		ensureBlock();
	}
}

SKBlockClosure.primArgumentsCount = function (receiver, args) {
	return receiver.length;
}
