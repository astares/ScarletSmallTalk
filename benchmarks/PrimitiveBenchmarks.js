const fs = require('fs');
eval(fs.readFileSync('../build/scripts/node-compat.js', 'utf-8'));
eval(fs.readFileSync('../artifacts/sk.kernel.js', 'utf-8'));

nil.emmit_("PrimitiveBenchmarks.st");

smalltalk.bind(smalltalk.PrimitiveBenchmark, "primFortyThree", 0, function PrimitiveBenchmark__primFortyThree() {
	var self = this;
	var module = smalltalk.primitiveManager.modules["PrimitiveBenchmark"];
	if (module && module["primFortyThree"]) {
		return module["primFortyThree"](this, arguments);
	}
	self.primitiveFailed();
	return self;
}, "running", nil);

function PrimitiveBenchmark() {}
PrimitiveBenchmark.prototype.primFortyTwo = function (receiver, args) {
	return 42;
}
PrimitiveBenchmark.prototype.primFortyThree = function (receiver, args) {
	return 43;
}
smalltalk.primitiveManager.registerModule(new PrimitiveBenchmark(), "PrimitiveBenchmark");

function benchAction(numberOfTrials, action) {
	var start = new Date();
	for (var i=0; i<numberOfTrials; i++) {
		action();
	}
	return new Date().getTime() - start.getTime();
}

function runBenchmark(benchmark) {
	var name = benchmark["name"];
	var action = benchmark["action"];
	for (var i=0; i<9; i++) {
		var numTrials = Math.pow(10, i);
		var executionTime = benchAction(numTrials, action);
		console.log("name: " + name + " trials: " + numTrials.toString() + " seconds: " + (executionTime / 1000).toString());
	}
}

var testObject = smalltalk.PrimitiveBenchmark.$$new();

var accessor = function () {
	testObject.fortyTwo();
}

var primitiveAccessor = function() {
	testObject.primFortyTwo();
}

var possiblePrimitiveAccessor = function() {
	testObject.primFortyThree();
}

var actionToBenchmark = [
	{
		"name" : "accessor",
		"action" : accessor
	},
	{
		"name" : "Current Prim",
		"action" : primitiveAccessor
	},
	{
		"name" : "Possible Prim",
		"action" : possiblePrimitiveAccessor
	}
]

actionToBenchmark.map(runBenchmark);