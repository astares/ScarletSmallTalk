
const NativeSpecTestModuleSpec = smalltalk.primitiveManager.newPrimitiveSpec();

NativeSpecTestModuleSpec.common.primReturnPlatformName = function (receiver, args) {
	return smalltalk.primitiveManager.platform;
}
// NativeSpecTestModuleSpec.iOS.primReturnPlatformName = function (receiver, args) {
// 	return 'iOS';
// }
// NativeSpecTestModuleSpec.common.primReturnPlatformName = function (receiver, args) {
// 	return 'common';
// }
// NativeSpecTestModuleSpec.Android.primReturnPlatformName = function (receiver, args) {
// 	return 'Android';
// }
// NativeSpecTestModuleSpec.NodeJS.primReturnPlatformName = function (receiver, args) {
// 	return 'NodeJS';
// }

NativeSpecTestModuleSpec.common.primReturnFortyTwo = function (receiver, args) {
	return 42;
}

NativeSpecTestModuleSpec.iOS.primReturnFortyTwo = function (receiver, args) {
	return 42;
}

NativeSpecTestModuleSpec.common.primReturnReceiver = function (receiver, args) {
	return receiver;
}

NativeSpecTestModuleSpec.common.primReturnNil = function (receiver, args) {
	return nil;
}

NativeSpecTestModuleSpec.common.primReturnArguments = function (receiver, args) {
	return Array.prototype.slice.call(args);
}

NativeSpecTestModuleSpec.common.primFail = function (receiver, args) {
	return smalltalk.primitiveManager.primFailValue;
}

NativeSpecTestModuleSpec.common.primAppendTo = function (receiver, args) {
	if (args.length != 2) {
		return smalltalk.primitiveManager.primFailValue;
	}
	return "" + args[1] + args[0];
}

smalltalk.primitiveManager.registerSpec(NativeSpecTestModuleSpec, "NativeSpecTestModule");
