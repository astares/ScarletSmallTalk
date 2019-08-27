'use strict';
const SKRegularExpression = Object.create(smalltalk.SKPrimitiveModule);
smalltalk.primitiveManager.registerModule(SKRegularExpression, "SKRegularExpression");

SKRegularExpression.primFromString = function(receiver, args) {
	const aString = args[0].valueOf();
	const flag = args[1].valueOf();
	if (typeof aString != 'string' || typeof flag != 'string') {
		return this.primFailValue;
	}
	return new RegExp(aString, flag);
}

SKRegularExpression.primExec = function (receiver, args) {
	const aString = args[0].valueOf();
	if(typeof aString != 'string') {
		return primitveManager.primFailValue;
	}
	return receiver.exec(aString);
}

SKRegularExpression.primTest = function (receiver, args) {
	const aString = args[0].valueOf();
	if (typeof aString != 'string') {
		return this.primFailValue;
	}
	return receiver.test(aString);
}

SKRegularExpression.primCompile = function (receiver, args) {
	const aString = args[0].valueOf();
	if (typeof aString != 'string') {
		return this.primFailValue;
	}
	return receiver.compile(aString);
}
