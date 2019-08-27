// Strict mode shouldn't be enabled for this primitive
// 'use strict';
const SKSmalltalk = Object.create(smalltalk.SKPrimitiveModule);
smalltalk.primitiveManager.registerModule(SKSmalltalk, "SKSmalltalk");

SKSmalltalk.primEval = function (receiver, args) {
	const jsExpression = args[0];
	return eval(jsExpression);
}
