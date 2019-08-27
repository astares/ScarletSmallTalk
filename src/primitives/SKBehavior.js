'use strict';
const SKBehavior = Object.create(smalltalk.SKPrimitiveModule);
smalltalk.primitiveManager.registerModule(SKBehavior, "SKBehavior");

SKBehavior.primPrototype = function (receiver, args) {
	return (receiver['$fn'])['prototype'];
}

SKBehavior.primConstructor = function (receiver, args) {
	return receiver['$fn'];
}

SKBehavior.primMethodsDo = function (receiver, args) {
	const aBlock = args[0];
	if (typeof aBlock != 'function') {
		return primitveManager.primFailValue;
	}
	var methods = receiver.$fn.prototype.$methods;
	for(var i in methods) {
		if (!methods.hasOwnProperty(i)) break;
		aBlock(methods[i]);
	}
}

SKBehavior.primSelectorsDo = function (receiver, args) {
	const aBlock = args[0];
	if (typeof aBlock != 'function') {
		return this.primFailValue;
	}
	var methods = receiver.$fn.prototype.$methods;
	for(var i in methods) {
		if (!methods.hasOwnProperty(i)) break;
		aBlock(methods[i].$selector);
	}
}

SKBehavior.primImplements = function (receiver, args) {
	const aSymbol = args[0];
	if (typeof aSymbol != 'string') {
		return this.primFailValue;
	}
	return (aSymbol in receiver.$fn.prototype.$methods);
}

SKBehavior.primCompiledMethodAt = function (receiver, args) {
	const aSymbol = args[0];
	if (typeof aSymbol != 'string') {
		return this.primFailValue;
	}
	return receiver.$fn.prototype.$methods[aSymbol] || nil;
}
