'use strict';

smalltalk.NativeTestModule = {};
smalltalk.NativeTestModule.primReturnFortyTwo = function (receiver, args) {
	return 42;
}

smalltalk.NativeTestModule.primReturnReceiver = function (receiver, args) {
	return receiver;
}

smalltalk.NativeTestModule.primReturnNil = function (receiver, args) {
	return nil;
}

smalltalk.NativeTestModule.primReturnArguments = function (receiver, args) {
	return Array.prototype.slice.call(args);
}

smalltalk.NativeTestModule.primFail = function (receiver, args) {
	return smalltalk.primitiveManager.primFailValue;
}

smalltalk.NativeTestModule.primAppendTo = function (receiver, args) {
	if (args.length != 2) {
		return smalltalk.primitiveManager.primFailValue;
	}
	return "" + args[1] + args[0];
}

smalltalk.primitiveManager.registerModule(smalltalk.NativeTestModule, "NativeTestModule");