gtInline = function(aNumber) { 
	// if(aNumber == null) {
	// 	return primitiveManager.primFailValue;
	// }
//	const primitiveNumber = aNumber.valueOf();
	// if (typeof primitiveNumber != 'number') {
	// 	return primitiveManager.primFailValue;
	// }
	return this.valueOf() > aNumber;
}
smalltalk.bind(smalltalk.Number, "testInline", "testInline", gtInline, "testing");

gt1 = function(aNumber) { 
	var self = this; 

	var result = smalltalk.primitiveManager.callPrimitive("SKNumber", "primGreaterThan", this, arguments);
	if (result !== smalltalk.primitiveManager.primFailValue) 
		return result; 
	return self.error_("Must be a Number.");
}
smalltalk.bind(smalltalk.Number, "testgt1", "testgt1", gt1, "testing");

gt2 = function(aNumber) { 
	var self = this; 

	var result = smalltalk.primitiveManager.callPrimitive("SKNumber", "primGreaterThan", this.valueOf(), arguments);
	if (result !== smalltalk.primitiveManager.primFailValue) 
		return result; 
	return self.error_("Must be a Number.");
}
smalltalk.bind(smalltalk.Number, "testgt2", "testgt2", gt2, "testing");

gt3 = function(aNumber) { 
	var self = this; 

	const args = [];
	const length = arguments.length;
	for (var i = 0; i < length; ++i) {
		args[i] = arguments[i];
	}
	// var args = new Array(arguments.length);
	// for (var i = 0; i < arguments.length; ++i) {
	// 	args[i] = arguments[i];
	// }

	var result = smalltalk.primitiveManager.callPrimitive("SKNumber", "primGreaterThan", this.valueOf(), args);
	if (result !== smalltalk.primitiveManager.primFailValue) 
		return result; 
	return self.error_("Must be a Number.");
}
smalltalk.bind(smalltalk.Number, "testgt3", "testgt3", gt3, "testing");

gt4 = function(aNumber) { 
	var self = this; 

	var result = SKNumber.primGreaterThan(this.valueOf(), arguments);
	if (result !== smalltalk.primitiveManager.primFailValue) 
		return result; 
	return self.error_("Must be a Number.");
}
smalltalk.bind(smalltalk.Number, "testgt4", "testgt4", gt4, "testing");

gt5 = function(aNumber) { 
	var self = this; 

	const args = [];
	const length = arguments.length;
	for (var i = 0; i < length; ++i) {
		args[i] = arguments[i];
	}

	var result = SKNumber.primGreaterThan(this.valueOf(), args);
	if (result !== smalltalk.primitiveManager.primFailValue) 
		return result; 
	return self.error_("Must be a Number.");
}
smalltalk.bind(smalltalk.Number, "testgt5", "testgt5", gt5, "testing");


