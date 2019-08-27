'use strict';
const SKTools = Object.create(smalltalk.SKPrimitiveModule);
smalltalk.primitiveManager.registerModule(SKTools, "SKTools");

SKTools.primWriteToFile = function (receiver, args) {
	const fileName = args[0].valueOf();
	if (typeof fileName != 'string') {
		return this.primFailValue;
	}
	return fileWrite(fileName, receiver, "wb");
}

SKTools.primAppendToFile = function (receiver, args) {
	const fileName = args[0].valueOf();
	if (typeof fileName != 'string') {
		return this.primFailValue;
	}
	return fileWrite(fileName, receiver, "ab");
}

SKTools.primFileContents = function (receiver, args) {
	const jsFileName = args[0].valueOf();
	if (typeof jsFileName != 'string') {
		return this.primFailValue;
	}
	return fileContents(jsFileName);
}

SKTools.primFileOlderThan = function (receiver, args) {
	const fileName = args[0].valueOf();
	if (typeof fileName != 'string') {
		return this.primFailValue;
	}
	const referenceFileName = args[1].valueOf();
	if (typeof referenceFileName != 'string') {
		return this.primFailValue;
	}
	return isFileOlderThan(fileName, referenceFileName); 
}
