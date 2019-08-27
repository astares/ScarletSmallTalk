DateTestTemplate = function(){};
DateTestTemplate.prototype.primGetYear = function (receiver, args) {
	return receiver.getFullYear();
}
DateTest = new DateTestTemplate();

primValueOf = function() { 
	return this;
}
smalltalk.bind(smalltalk.DateTime, "primitiveValueOf", "primitiveValueOf", primValueOf, "testing");

dt1 = function() { 
	return this.getFullYear();
}
smalltalk.bind(smalltalk.DateTime, "testdt1", "testdt1", dt1, "testing");

dt2 = function() { 
	var self = this; 

	var result = smalltalk.primitiveManager.callPrimitive("SKDateTime", "primGetYear", this, arguments);
	if (result !== smalltalk.primitiveManager.primFailValue) 
		return result; 
	return self.error_("Must be a Date.");
}
smalltalk.bind(smalltalk.DateTime, "testdt2", "testdt2", dt2, "testing");

dt3 = function() { 
	var self = this; 

	var result = SKDateTime.primGetYear(this, arguments);
	if (result !== smalltalk.primitiveManager.primFailValue) 
		return result; 
	return self.error_("Must be a Date.");
}
smalltalk.bind(smalltalk.DateTime, "testdt3", "testdt3", dt3, "testing");

dt4 = function() { 
	var self = this; 

	const args = [];
	const length = arguments.length;
	for (var i = 0; i < length; ++i) {
		args[i] = arguments[i];
	}
	var result = smalltalk.primitiveManager.callPrimitive("SKDateTime", "primGetYear", this, args);
	if (result !== smalltalk.primitiveManager.primFailValue) 
		return result; 
	return self.error_("Must be a Date.");
}
smalltalk.bind(smalltalk.DateTime, "testdt4", "testdt4", dt4, "testing");

dt5 = function() { 
	var self = this; 

	const args = [];
	const length = arguments.length;
	for (var i = 0; i < length; ++i) {
		args[i] = arguments[i];
	}
	var result = SKDateTime.primGetYear(this, args);
	if (result !== smalltalk.primitiveManager.primFailValue) 
		return result; 
	return self.error_("Must be a Date.");
}
smalltalk.bind(smalltalk.DateTime, "testdt5", "testdt5", dt5, "testing");

dt6 = function() { 
	var self = this; 

	var result = SKDateTime.primGetYear(this.primitiveValueOf(), [arguments[0] ]);
	if (result !== smalltalk.primitiveManager.primFailValue) 
		return result; 
	return self.error_("Must be a Date.");
}
smalltalk.bind(smalltalk.DateTime, "testdt6", "testdt6", dt6, "testing");
