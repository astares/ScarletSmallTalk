'use strict';
const SKPoolDictionary = Object.create(smalltalk.SKPrimitiveModule);
smalltalk.primitiveManager.registerModule(SKPoolDictionary, "SKPoolDictionary");

SKPoolDictionary.primInitializeHash = function (receiver, args) {
	receiver["_hash"] = {};
	return receiver;
}

SKPoolDictionary.primRemoveKeyIfAbsent = function (receiver, args) {
	const aKey = args[0].valueOf();
	const aBlock = args[1];
	const hash = receiver["_hash"];
	const keyType = typeof aKey;
	if (typeof aBlock != 'function') {
		return this.primFailValue;
	}
	if ((keyType != 'string' && keyType != 'number') || !(aKey in hash)) {	
		return aBlock();
	}
	receiver["@size"] = nil;
	delete hash[aKey];
	return receiver;
}

SKPoolDictionary.primAtIfAbsent = function (receiver, args) {
	const aKey = args[0].valueOf();
	const aBlock = args[1];
	const keyType = typeof aKey;
	if(typeof aBlock != 'function') {
		return primitveManager.primFailValue;
	}
	const hash = receiver["_hash"];
	if ((keyType != 'string' && keyType != 'number') || !(aKey in hash)) {
		return aBlock();
	}
	return hash[aKey];
}

SKPoolDictionary.primKeys = function (receiver, args) {
	return Object.getOwnPropertyNames(receiver["_hash"]);
}

SKPoolDictionary.primAtPut = function (receiver, args) {
	const key = args[0].valueOf();
	const value = args[1].valueOf();
	const keyType = typeof key;
	if (keyType != 'string' && keyType != 'number') {
		return this.primFailValue;
	}
	receiver["@size"] = nil;
	return receiver["_hash"][key] = value;
}
