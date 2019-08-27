
timing = function (count, f) { 
	let begin = Date.now(); 
	for (i=0; i<count; i++) {
		f()
	}
	let end=Date.now();
	console.log("time: " + (end-begin)) ;
}

var exitCode = 0;
try {
	const kernel = require("../artifacts/sk.kernel.js");
	const numberCall = require("../benchmarks/primitiveCallNumber.js");
	const dateCall = require("../benchmarks/primitiveCallDate.js");
	const primBench = require("../benchmarks/PrimitiveBenchmarks.st.js");

	// console.log('tiny benchmark');
	// timing(1, function() {
	// 	smalltalk.PrimitiveBenchmark.$$new().runTinyBenchmark();
	// });
	// console.log('tiny benchmark again');
	// timing(1, function() {
	// 	smalltalk.PrimitiveBenchmark.$$new().runTinyBenchmark();
	// });

	console.log('test gt1 (original)');
	timing(100000, function() { 
		(5).testgt1((4)) 
	});
	console.log('test gt2 (valueOf)');
	timing(100000, function() { 
		(5).testgt2((4)) 
	});
	console.log('test gt3 (arg copy)');
	timing(100000, function() { 
		(5).testgt3((4)) 
	});
	console.log('test gt4 (inline call)');
	timing(100000, function() { 
		(5).testgt4((4)) 
	});
	console.log('test gt5 (inline call, copy args)');
	timing(100000, function() { 
		(5).testgt5((4)) 
	});
	console.log('test inline (just the expression)');
	timing(100000, function() { 
		(5).testInline((4)) 
	});

	const testDate = smalltalk.DateTime.today();
	console.log('test dt1 (inline)');
	timing(1000000, function() { 
		testDate.testdt1() 
	});
	console.log('test dt2 (original)');
	timing(1000000, function() { 
		testDate.testdt2() 
	});
	console.log('test dt3 (direct call)');
	timing(1000000, function() { 
		testDate.testdt3() 
	});
	console.log('test dt4 (copy args)');
	timing(1000000, function() { 
		testDate.testdt4() 
	});
	console.log('test dt5 (direct call, copy args)');
	timing(1000000, function() { 
		testDate.testdt5() 
	});
	console.log('test dt6 (direct call, copy args, valueOf)');
	timing(1000000, function() { 
		testDate.testdt5() 
	});

} catch (err) {
	console.log('// Run Error: '+err);
	console.log(err.stack);
	exitCode = 1;
}


