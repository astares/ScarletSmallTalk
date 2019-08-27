'use strict';
const SKTranscript = Object.create(smalltalk.SKPrimitiveModule);
smalltalk.primitiveManager.registerModule(SKTranscript, "SKTranscript");

SKTranscript.primNextPutAll = function (receiver, args) {
	const aString = args[0].valueOf();
	if (aString.constructor != String) {
		return this.primFailValue;
	}
	console.log(aString);
}
