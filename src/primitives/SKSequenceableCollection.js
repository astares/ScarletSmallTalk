'use strict';
const SKSequenceableCollection = Object.create(smalltalk.SKPrimitiveModule);
smalltalk.primitiveManager.registerModule(SKSequenceableCollection, "SKSequenceableCollection");

SKSequenceableCollection.primIndexOfIfAbsent = function (receiver, args) {
	const object = args[0].valueOf();
	const block = args[1].valueOf();
	if (typeof block != 'function') {
		return this.primFailValue;
	}
	for(var i=0;i<receiver.length;i++){ 
		if (receiver[i]._eq(object)) { 
			return i + 1; 
		} 
	}
	return block();
}

SKSequenceableCollection.primDo = function (receiver, args) {
	const block = args[0].valueOf();
	if (typeof block != 'function') {
		return this.primFailValue;
	}
	for(var i=0;i<receiver.length;i++){
		block(receiver[i]);
	}
}

SKSequenceableCollection.primDetectIfNone = function (receiver, args) {
	const block1 = args[0].valueOf();
	const block2 = args[1].valueOf();
	if (typeof block1 != 'function' || typeof block2 != 'function' || block1.length != 1 || block2.length != 0) {
		return this.primFailValue;
	}
	for (var i = 0; i < receiver.length; i++) { 
		if (block1(receiver[i])) { 
			return receiver[i];
		}
	}
	return block2();
}

SKSequenceableCollection.primReversed = function (receiver, args) {
	var result = new Array();
	var len = receiver.length; 
	var i = len;
	while(i--){
		result[len-i-1] = receiver[i];
	}
	return result;
}

SKSequenceableCollection.primIsEmpty = function (receiver, args) {
	return (receiver.length)?false:true;
}

SKSequenceableCollection.primReverseDo = function (receiver, args) {
	const block = args[0].valueOf();
	if (typeof block != 'function') {
		return this.primFailValue;
	}
	var i = receiver.length;
	while(i--) {
		block(receiver[i]);
	}
}

SKSequenceableCollection.primOccurrencesOf = function (receiver, args) {
	const object = args[0].valueOf();
	var i = receiver.length; 
	var count = 0;
	while (i--) { 
		if (receiver[i]._eq(object)) { 
			count++; 
		} 
	}
	return count;
}
