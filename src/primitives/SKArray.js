'use strict';
const SKArray = Object.create(smalltalk.SKPrimitiveModule);

smalltalk.primitiveManager.registerModule(SKArray, "SKArray");

SKArray.primBasicNew = function (receiver, args) {
	const size = args[0].valueOf();
	if (!Number.isInteger(size)) {
		return this.primFailValue;
	}
	return new Array(size).fill(nil);
}

SKArray.primSize = function(receiver, args) {
	return receiver.length;
}

SKArray.primAtPut = function (receiver, args) {
	const pos = args[0].valueOf();
	const val = args[1];
	// The final check in this if statement is commented out to be fixed at a later time
	// For now we rely on Javascripts arrays to grow dynamically, and this check messes with that abillity
	if (!Number.isInteger(pos) || pos < 1 ) { //|| pos > receiver.length) {
		return this.primFailValue;
	}
	return receiver[pos-1] = val;
}

SKArray.primAt = function (receiver, args) {
	const index = args[0].valueOf();
	const value = receiver[index - 1];
	if(value === undefined) { 
		return this.primFailValue; 
	}
	return value;
}

SKArray.primAtIfAbsent = function (receiver, args) {
	const index = args[0].valueOf();
	const block = args[1].valueOf();
	var value = receiver[index - 1];
	if(value === undefined) { return block(); }
	return value;
}

SKArray.primDo = function (receiver, args) {
	const block = args[0].valueOf();
	if (typeof block != 'function') {
		return this.primFailValue;
	}
	for(var i=0;i<receiver.length;i++){ 
		block(receiver[i]);
	}
}

SKArray.primAddAll = function (receiver, args) {
	const collection = args[0];
	if (collection.constructor != Array) {
		return this.primFailValue;
	}
	const arr = Array.from(collection.valueOf());
	receiver.push.apply(receiver, arr);
}

SKArray.primShallowCopy = function(receiver, args) {
	return receiver.slice(0);
}

SKArray.primCopyWithAll = function (receiver, args) {
	const collection = args[0];
	if (collection.constructor != Array) {
		return this.primFailValue;
	}
	const arr = Array.from(collection.valueOf());
	return receiver.concat(arr);
}

SKArray.primJoin = function (receiver, args) {
	const aString = args[0].valueOf();
	if (typeof aString != 'string') {
		return this.primFailValue;
	}
	return receiver.join(aString);
}

SKArray.primSort = function (receiver, args) {
	const aBlock = args[0].valueOf();
	if (typeof aBlock != 'function' || aBlock.length != 2 ) {
		return this.primFailValue;
	}
	return receiver.sort((a, b) => aBlock(a, b) ? -1 : 1);
}

function primitiveForm(anObject) {
	if (anObject == null) {
		return nil;
	} else if (anObject.constructor == Date) {
		return anObject;
	} else {
		return anObject.valueOf();
	}
}

SKArray.primRemoveIfAbsent = function (receiver, args) {
	const anObject = primitiveForm(args[0]);
	const aBlock = primitiveForm(args[1]);
	if (typeof aBlock != 'function') {
		return this.primFailValue;
	}
	for(var i=0;i<receiver.length;i++) {
		if(receiver[i] == anObject) {
			receiver.splice(i,1); 
			return anObject;
		}
	}
	return aBlock.value();
}

SKArray.primAddLast = function (receiver, args) {
	const value = args[0];
	receiver.push(value);
	return value;
}

SKArray.primAddFirst = function (receiver, args) {
	const anObject = args[0];
	receiver.splice(0,0,anObject);
	return anObject;
}

SKArray.primRemoveFirst = function (receiver, args) {
	if (receiver.length < 1) {
		return this.primFailValue;
	}
	const first = receiver[0];
	receiver.splice(0,1);
	return first;
}

SKArray.primRemoveAll = function (receiver, args) {
	if (receiver.length < 1) {
		return [];
	}
	receiver.splice(0,receiver.length);
}

SKArray.primRemoveIndex = function (receiver, args) {
	const index = args[0].valueOf();
	if(!Number.isInteger(index) || (index < 1 || index > receiver.length)) {
		return this.primFailValue;
	}
	receiver.splice(index-1, 1);
}

SKArray.primAtAllPut = function (receiver, args) {
	const anObject = args[0];
	for(var i=0;i<receiver.length;i++){ 
		receiver[i] = anObject;
	}
	return receiver;
}

SKArray.primWithIndexDo = function (receiver, args) {
	const aBlock = args[0].valueOf();
	if (typeof aBlock != 'function' || aBlock.length != 2) {
		return this.primFailValue;
	}
	for(var i=0;i<receiver.length;i++){
		aBlock(receiver[i], i+1);
	}
}
