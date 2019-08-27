'use strict';
const SKObject = Object.create(smalltalk.SKPrimitiveModule);
smalltalk.primitiveManager.registerModule(SKObject, "SKObject");

SKObject.primBasicNew = function (receiver, args) {
	return new receiver.$fn();
}

SKObject.primPerform = function (receiver, args) {
	const jsSelector = args[0].valueOf();
	if (typeof jsSelector != 'string') {
		return this.primFailValue;
	}
	const performArgs = args[1];

	const fn = receiver[jsSelector];
	if (typeof fn === "undefined") {
		return receiver.dnu_withArguments_((jsSelector.asStSelector()),performArgs);
	}
	return fn.apply(receiver, performArgs);
}

SKObject.primBasicAt = function (receiver, args) {
	const aString = args[0];
	if (aString.constructor !== String || aString.length == 0) {
		return this.primFailValue;
	}
	const property = receiver[aString];
	if (((nil.isNil_(property))).valueOf()) {
		return nil
	}
	return property;
}

SKObject.primBasicAtIfAbsent = function (receiver, args) {
	const aString = args[0];
	const aBlock = args[1];
	if (aString.constructor !== String || aString.length == 0) {
		return this.primFailValue;
	}
	const property = receiver[aString];
	if (((nil.isNil_(property))).valueOf()) {
		return aBlock();
	}
	return property;
}

SKObject.primBasicAtPut = function (receiver, args) {
	const aString = args[0];
	const aValue = args[1];
	if (aString.constructor !== String || aString.length == 0) {
		return this.primFailValue;
	}
	receiver[aString] = aValue;
	return aValue;
}

SKObject.primSmalltalk = function (receiver, args) {
	//Return the smalltalk system containing the receiver
	return smalltalk;
}

SKObject.primHalt = function (receiver, args) {
	debugger;
}

SKObject.primAsJSON = function (receiver, args) {
	// JSON - Return the JSON representation of the receiver
	return JSON.stringify(receiver.asJSONObject());
}

SKObject.primPrint = function (receiver, args) {
	var valueToPrint = args[0].asString().valueOf();
	print(valueToPrint);
	return receiver;
}

SKObject.primFileIn = function (receiver, args) {
	var fileName = args[0].valueOf();
	try {
		this.print("// fileIn(\"" + fileName + "\");");
		return fileIn(fileName);
	} catch (e) {
		return this.primFailValue;
	}
}

SKObject.primFileInJS = function (receiver, args) {
	var fileName = args[0].valueOf();
	try {
		this.print("// fileInJS(\"" + fileName + "\");");
		fileInJS(fileName);
	} catch (e) {
//		this.print(e.stack);
		return this.primFailValue;
	}
}

SKObject.primTypeOf = function (receiver, args) {
	var object = args[0];
	return typeof object;
}

SKObject.primJsPropertyNames = function (receiver, args) {
	var array = [];
	Object.getOwnPropertyNames(receiver).forEach(
		function (each, idx, properties) {
			array.push(each);
		});
	return array;
}

SKObject.primPropertyAtIfAbsent = function (receiver, args) {
	const aKey = args[0];
	const aBlock = args[1];
	if (aKey.constructor !== String) {
		return this.primFailValue;
	}
	const propertyName = '@p_' + aKey;
	const storedValue = receiver[propertyName];
	return storedValue == null
			? aBlock()
			: storedValue;
}

SKObject.primPropertyAtPut = function (receiver, args) {
	const aKey = args[0];
	const aValue = args[1];
	if (aKey.constructor !== String || aKey.length == 0) {
		return this.primFailValue;
	}
	const propertyName = "@p_" + aKey;
	receiver[propertyName] = aValue;
	return aValue;
}

SKObject.primIsObject = function (receiver, args) {
	const object = args[0].valueOf();
	if (object == nil) {
		return object == nil;
	}
	return (object.$klass)?true:false;
}

SKObject.primBasicDelete = function (receiver, args) {
	const aString = args[0].valueOf();
	if (typeof aString != 'string') {
		return this.primFailValue;
	}
	delete receiver[aString];
	return receiver;
}
