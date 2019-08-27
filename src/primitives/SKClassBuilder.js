'use strict';
const SKClassBuilder = Object.create(smalltalk.SKPrimitiveModule);
smalltalk.primitiveManager.registerModule(SKClassBuilder, "SKClassBuilder");

SKClassBuilder.primAddSubclassOfNamedInstanceVariableNames = function (receiver, args) {
	const aClass = args[0];
	const aString = args[1].valueOf();
	const aCollection = args[2].valueOf();
	smalltalk.addClass(aString, aClass, aCollection);
	return smalltalk[aString]
}
