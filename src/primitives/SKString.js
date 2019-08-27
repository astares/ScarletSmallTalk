'use strict';
const SKString = Object.create(smalltalk.SKPrimitiveModule);
smalltalk.primitiveManager.registerModule(SKString, "SKString");

SKString.primEquals = function (receiver, args) {
	const string = args[0].valueOf();
	if (typeof string != 'string') {
		return this.primFailValue;
	}
	return (receiver.valueOf() === string);
}

SKString.primSize = function (receiver, args) {
	return receiver.length;
}

SKString.primAt = function (receiver, args) {
	const pos = args[0].valueOf();
	if (typeof pos != 'number' || !Number.isInteger(pos) || pos > receiver.length || pos < 1) {
		return this.primFailValue;
	}
	return receiver.charAt(pos-1);
}

SKString.primDo = function (receiver, args) {
	const block = args[0].valueOf();
	if (typeof block != 'function' || block.length != 1) {
		return this.primFailValue;
	}
	for (var i=0;i<receiver.length;i++){block(receiver.charAt(i));}
}

SKString.primDetectIfNone = function (receiver, args) {
	const block = args[0].valueOf();
	const block2 = args[1].valueOf();
	if (typeof block != 'function' || block.length != 1 || typeof block2 != 'function' || block2.length != 0) {
		return this.primFailValue;
	}
	for (var i = 0; i < receiver.length; i++) {
		if (block(receiver.charAt(i))) {
			return receiver.charAt(i);
		}
	}
	return block2();
}

SKString.primWithIndexDo = function (receiver, args) {
	const block = args[0].valueOf();
	if (typeof block != 'function' || block.length != 2) {
		return this.primFailValue;
	}
	for (var i=0;i<receiver.length;i++){block(receiver.charAt(i), i+1);}
}

SKString.primEscaped = function (receiver, args) {
	return escape(receiver);
}

SKString.primUnescaped = function (receiver, args) {
	return unescape(receiver);
}

SKString.primURIEncode = function (receiver, args) {
	return encodeURIComponent(receiver);
}

SKString.primURIDecode = function (receiver, args) {
	return decodeURIComponent(receiver);
}

SKString.primConcat = function (receiver, args) {
	const aString = args[0].valueOf();
	if (aString === undefined
		|| aString === nil
		|| aString === smalltalk.nil) {
		return receiver;
	}
	if (typeof aString != 'string') {
		return this.primFailValue;
	}
	return receiver + aString;
}

SKString.primCopyWith = function (receiver, args) {
	return receiver + args[0].valueOf().toString()
}

SKString.primCopyFromTo = function (receiver, args) {
	const start = args[0].valueOf();
	const end = args[1].valueOf();
	const receiverLength = receiver.length;
	if (!Number.isInteger(start) || !Number.isInteger(end)) {
		return this.primFailValue;
	}
	// javascript substring method doesn't return an error if the start or end is greater than the length
	// the end can also be less than the start
	return receiver.substring(start-1,end);
}

SKString.primIndexOf = function (receiver, args) {
	const subString = args[0].valueOf();
	if (typeof subString != 'string') {
		return this.primFailValue;
	}
	return receiver.indexOf(subString) + 1;
}

SKString.primIndexOfStartingAt = function (receiver, args) {
	const subString = args[0].valueOf();
	const start = args[1].valueOf();
	if (typeof subString != 'string' || !Number.isInteger(start)) {
		return this.primFailValue;
	}
	return receiver.indexOf(subString, start-1) + 1;
}

SKString.primLastIndexOf = function (receiver, args) {
	const subString = args[0].valueOf();
	if (typeof subString != 'string') {
		return this.primFailValue;
	}
	return receiver.lastIndexOf(subString) + 1;
}

SKString.primLastIndexOfStartingAt = function (receiver, args){
	const subString = args[0].valueOf();
	const start = args[1].valueOf();
	if (typeof subString != 'string' || !Number.isInteger(start)) {
		return this.primFailValue;
	}
	return receiver.lastIndexOf(subString, start-1) + 1;
}

SKString.primAsJavascript = function (receiver, args) {
	if(receiver.search(/^[a-zA-Z0-9_:.$ ]*$/) == -1)
			return "unescape(\"" + escape(receiver) + "\")";
		else
			return "\"" + receiver + "\"";
}

SKString.primTokenize = function (receiver, args) {
	const token = args[0].valueOf();
	return receiver.split(token);
}

SKString.primIsLetter = function (receiver, args) {
	return receiver.search('[A-Za-z]$') == 0;
}

SKString.primIsDigit = function (receiver, args) {
	return receiver.search('[0-9]$') == 0;
}

SKString.primAsUppercase = function (receiver, args) {
	return receiver.toUpperCase();
}

SKString.primAsLowercase = function (receiver, args) {
	return receiver.toLowerCase();
}

SKString.primGreaterThan = function (receiver, args) {
	const argument = args[0].valueOf();
	if (typeof argument != 'string') {
		return this.primFailValue;
	}
	return receiver.valueOf() > argument;
}

SKString.primLessThan = function (receiver, args) {
	const argument = args[0].valueOf();
	if (typeof argument != 'string') {
		return this.primFailValue;
	}
	return receiver.valueOf() < argument;
}

SKString.primGreaterThanEqualTo = function (receiver, args) {
	const argument = args[0].valueOf();
	if (typeof argument != 'string') {
		return this.primFailValue;
	}
	return receiver.valueOf() >= argument;
}

SKString.primLessThanEqualTo = function (receiver, args) {
	const argument = args[0].valueOf();
	if (typeof argument != 'string') {
		return this.primFailValue;
	}
	return receiver.valueOf() <= argument;
}

SKString.primIsCharacter = function (receiver, args) {
	return receiver.length == 1;
}

SKString.primAsciiValue = function (receiver, args) {
	return receiver.charCodeAt(0);
}

SKString.primIsSeparator = function (receiver, args) {
	return (new RegExp("\\s")).test(receiver);
}

SKString.primFromString = function (receiver, args) {
	const aString = args[0].valueOf();
	if (typeof aString != 'string') {
		return this.primFailValue;
	}
	return new receiver.$fn(aString);
}

SKString.primReplaceRegExp = function (receiver, args) {
	const regEx = args[0].valueOf();
	const replacementString = args[1].valueOf();
	if (!(regEx instanceof RegExp) || typeof replacementString != 'string') {
		return this.primFailValue;
	}
	return receiver.replace(regEx, replacementString);
}

SKString.primReplaceWith = function (receiver, args) {
	const toReplace = args[0].valueOf();
	const replacementString = args[1].valueOf();
	if (typeof toReplace != 'string' || typeof replacementString != 'string') {
		return this.primFailValue;
	}
	const regexString = toReplace.replace(/[\\^$*+?.()|[\]{}]/g, "\\$&");
	return receiver.replace(new RegExp(regexString,'g'), replacementString);
}

SKString.primFromCharCode = function (receiver, args) {
	const numberOrArray = args[0].valueOf();
	if (Number.isInteger(numberOrArray)) {
		return String.fromCharCode(numberOrArray);
	} 
	else if (Array.isArray(numberOrArray)) {
		return String.fromCharCode.apply(null, numberOrArray);
	}
	else {
		return this.primFailValue;
	}
}

SKString.primAsSelector = function (receiver, args) {
	var receiverVal = receiver.valueOf();
	if (receiverVal === '') { return '$' }
	else if (receiverVal[0] == '#') { 
		var end = receiverVal.indexOf(':');
		if (end == -1) {
			end = receiverVal.length;
		}
		return receiverVal.substring(1,end);
	}
//	else if (receiverVal === '\\') { return '_bk'; }
	return receiverVal
		.replace(/:/g,"_")
		.replace(/[+]/g,"_plus")
		.replace(/-/g,"_minus")
		.replace(/[*]/g,"_star")
		.replace(/[/]/g,"_slash")
		.replace(/[|]/g,"_bar")
		.replace(/[&]/g,"_amp")
		.replace(/>/g,"_gt")
		.replace(/</g,"_lt")
		.replace(/=/g,"_eq")
		.replace(/,/g,"_comma")
		.replace(/[@]/g,"_at")
		.replace(/~/g,"_no")
		.replace(/\\/g,"_bk")
		.asJavascriptName();
}

SKString.primMatch = function (receiver, args) {
	return receiver.match(args[0].valueOf());
}

SKString.primMatchRegExp = function (receiver, args) {
	const aString = args[0].valueOf();
	if (aString.constructor != String) {
		return this.primFailValue;
	}
	return receiver.search(aString) != -1;
}

SKString.primAsNumber = function (receiver, args) {
	if (receiver.includes('r')) {
		return this.primFailValue;
	}
	const value = Number(receiver);
	if (isNaN(value)) {
		return 0;
	} else {
		return value;
	}
}
