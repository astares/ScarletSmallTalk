 'use strict';
const SKException = Object.create(smalltalk.SKPrimitiveModule);
smalltalk.primitiveManager.registerModule(SKException, "SKException");

SKException.primSignal = function (receiver, args) {
	var stk = (new Error()).stack;
	receiver["@nativeException"] = (new Error());
	throw(receiver);
}
