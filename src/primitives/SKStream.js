'use strict';
const SKStream = Object.create(smalltalk.SKPrimitiveModule);
smalltalk.primitiveManager.registerModule(SKStream, "SKStream");

SKStream.primStringPrimPeekForAll = function (receiver, args) {
	const aString = args[0].valueOf();
	if (aString.constructor != String) {
		return this.primFailValue;
	}
	var start = receiver.position();
	for (var i=0;i<aString.length; i++){
		if (receiver["@collection"].charCodeAt(start+i) != aString.charCodeAt(i)) {
			return false;
		}
	}
	receiver.position_(receiver.position() + aString.length());
	return true;
}
