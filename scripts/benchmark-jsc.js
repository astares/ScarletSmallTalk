// https://trac.webkit.org/wiki/JSC
timing = function (count, f) { 
	let begin = Date.now(); 
	for (i=0; i<count; i++) {
		f()
	}
	let end=Date.now();
	debug("time: " + (end-begin)) ;
}

var exitCode = 0;
try {
	const kernel = load("./artifacts/sk.kernel.js");
	const numberCall = load("./benchmarks/primitiveCallNumber.js");
	const dateCall = load("./benchmarks/primitiveCallDate.js");
	const primBench = load("./benchmarks/PrimitiveBenchmarks.st.js");

	debug('tiny benchmark');
	timing(1, function() {
		smalltalk.PrimitiveBenchmark.$$new().runTinyBenchmark();
	});
	debug('tiny benchmark again');
	timing(1, function() {
		smalltalk.PrimitiveBenchmark.$$new().runTinyBenchmark();
	});

	debug('test gt1 (original)');
	timing(100000, function() { 
		(5).testgt1((4)) 
	});
	debug('test gt2 (valueOf)');
	timing(100000, function() { 
		(5).testgt2((4)) 
	});
	debug('test gt3 (copy args, valueOf)');
	timing(100000, function() { 
		(5).testgt3((4)) 
	});
	debug('test gt4 (inline call)');
	timing(100000, function() { 
		(5).testgt4((4)) 
	});
	debug('test gt5 (inline call, copy args)');
	timing(100000, function() { 
		(5).testgt5((4)) 
	});
	debug('test inline');
	timing(100000, function() { 
		(5).testInline((4)) 
	});

	const testDate = smalltalk.DateTime.today();
	debug('test dt1 (inline)');
	timing(1000000, function() { 
		testDate.testdt1() 
	});
	debug('test dt2 (original)');
	timing(1000000, function() { 
		testDate.testdt2() 
	});
	debug('test dt3 (direct call)');
	timing(1000000, function() { 
		testDate.testdt3() 
	});
	debug('test dt4 (copy args)');
	timing(1000000, function() { 
		testDate.testdt4() 
	});
	debug('test dt5 (direct call, copy args)');
	timing(1000000, function() { 
		testDate.testdt5() 
	});
	debug('test dt6 (direct call, copy args, valueOf)');
	timing(1000000, function() { 
		testDate.testdt5() 
	});

} catch (err) {
	debug('// Run Error: '+err);
	debug(err.stack);
	exitCode = 1;
}


