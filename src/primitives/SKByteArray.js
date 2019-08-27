'use strict';
const SKByteArray = Object.create(smalltalk.SKPrimitiveModule);
smalltalk.primitiveManager.registerModule(SKByteArray, "SKByteArray");

SKByteArray.primInitializeStorage = function (receiver, args) {
	var size = args[0].valueOf();
	if (typeof size == "number") {
		receiver.__contents = new Uint8Array(size);
		return receiver;
	}
	return this.primFailValue;
}

SKByteArray.primSize = function (receiver, args) {
	var contents = receiver.__contents;
	return contents
		? contents.length
		: this.primFailValue;
}

SKByteArray.primAt = function (receiver, args) {
	var contents = receiver.__contents;
	var index = args[0].valueOf();
	if (contents
		&& Number.isInteger(index)
		&& index >= 1
		&& index <= contents.length) {
			return contents[index - 1];
	}
	return this.primFailValue;
}

SKByteArray.primAtPut = function (receiver, args) {
	var contents = receiver.__contents;
	var index = args[0].valueOf();
	var byte = args[1].valueOf();
	if (contents
		&& Number.isInteger(index)
		&& index >= 1
		&& index <= contents.length
		&& Number.isInteger(byte)
		&& byte >= 0
		&& byte <= 255) {
			contents[index - 1] = byte;
			return byte;
	}
	return this.primFailValue;
}

SKByteArray.primUTF8ToString = function(receiver, args) {
	//https://stackoverflow.com/questions/8936984/uint8array-to-string-in-javascript
	var utf8ArrayToStr = (function() {
		var charCache = new Array(128); // Preallocate the cache for the common single byte chars
		var charFromCodePt = String.fromCodePoint || String.fromCharCode;
		var result = [];

		return function(array) {
			var codePt, byte1;
			var buffLen = array.length;

			result.length = 0;

			for (var i = 0; i < buffLen;) {
				byte1 = array[i++];

				if (byte1 <= 0x7F) {
					codePt = byte1;
				} else if (byte1 <= 0xDF) {
					codePt = ((byte1 & 0x1F) << 6) | (array[i++] & 0x3F);
				} else if (byte1 <= 0xEF) {
					codePt = ((byte1 & 0x0F) << 12) | ((array[i++] & 0x3F) << 6) | (array[i++] & 0x3F);
				} else if (String.fromCodePoint) {
					codePt = ((byte1 & 0x07) << 18) | ((array[i++] & 0x3F) << 12) | ((array[i++] & 0x3F) << 6) | (array[i++] & 0x3F);
				} else {
					codePt = 63; // Cannot convert four byte code points, so use "?" instead
					i += 3;
				}
				result.push(charCache[codePt] || (charCache[codePt] = charFromCodePt(codePt)));
			}

			return result.join("");
		};
	})();
	return utf8ArrayToStr(receiver.__contents);
}

SKByteArray.primFromUint8Array = function (receiver, args) {
	
	var bytes = args[0];
	if (bytes && bytes.constructor == Uint8Array) {
		var byteArray = smalltalk.ByteArray.basicNew();
		byteArray.__contents = bytes;
		return byteArray;
	}
	return this.primFailValue;
}

SKByteArray.primContents = function (receiver, args) {
	
	if (typeof(receiver.__contents) != "undefined") {
		return receiver.__contents;
	}
	return this.primFailValue;
}

SKByteArray.primAsByteArray = function(receiver, args) {
	//https://gist.github.com/joni/3760795
	function toUTF8Array(str) {
		var utf8 = [];
		for (var i=0; i < str.length; i++) {
			var charcode = str.charCodeAt(i);
			if (charcode < 0x80) {
				utf8.push(charcode);
			} else if (charcode < 0x800) {
				utf8.push(0xc0 | (charcode >> 6), 
					0x80 | (charcode & 0x3f));
			} else if (charcode < 0xd800 || charcode >= 0xe000) {
				utf8.push(0xe0 | (charcode >> 12), 
					0x80 | ((charcode>>6) & 0x3f), 
					0x80 | (charcode & 0x3f));
			} else { // surrogate pair
				i++;
				// UTF-16 encodes 0x10000-0x10FFFF by
				// subtracting 0x10000 and splitting the
				// 20 bits of 0x0-0xFFFFF into two halves
				charcode = 0x10000 + (((charcode & 0x3ff)<<10)
					| (str.charCodeAt(i+1) & 0x3ff))
				utf8.push(0xf0 | (charcode >>18), 
					0x80 | ((charcode>>12) & 0x3f), 
					0x80 | ((charcode>>6) & 0x3f), 
					0x80 | (charcode & 0x3f));
			}
		}
		return utf8 ;
	}
	var bytes = smalltalk.ByteArray.basicNew();
	bytes.__contents = new Uint8Array(toUTF8Array(receiver.valueOf()));
	return bytes;
}

SKByteArray.primAsByteArrayNoEncoding = function(receiver, args) {
	function toArray(str) {
		var byte = [];
		for (var i=0; i < str.length; i++) {
			byte.push(str.charCodeAt(i));
		}
		return byte ;
	}
	var bytes = smalltalk.ByteArray.basicNew();
	bytes.__contents = new Uint8Array(toArray(receiver));
	return bytes;
}

