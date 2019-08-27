// https://github.com/lukeed/taskr/tree/master/packages/taskr

var rimraf = require('rimraf');
const join = require('path').join;
const fs = require('fs')
eval(fs.readFileSync('./bootstrap/node-compat.js', 'utf-8'));

const skcompiler = require('./configs/sk-compiler');
const sk = require('./configs/sk-image');
const mobile = require('./configs/mobile');

const sunit = require('./configs/sunit');
const hudson = require('./configs/sunit-hudson');

const sktest = require('./configs/sk-test');

const versionFile = "build-version.txt";

exports.default = function * (task) {

}

exports.all = function * (task) {
	yield task.serial([
//		'clean'
	]);
}

exports.buildcompiler = function * (task) {
	yield task.serial([
		'build_sk_compiler'
	]);
}

exports.buildkernel = function * (task) {
	yield task.serial([
		'clean',
		'load_sk_compiler',
		'init_environment',
		'build_sk_image'
	]);
}

exports.buildprod = function * (task) {
	yield task.serial([
		'clean',
		'load_sk_compiler',
		'init_environment',
		'build_sk_prod_image'
	]);
}

exports.buildmobile = function * (task) {
	yield task.serial([
		'clean',
		'load_sk_compiler',
		'init_environment',
		'build_sk_mobile_image'
	]);
}

exports.buildbenchmarks = function * (task) {
	yield task.serial([
		'load_sk_compiler',
		'init_environment',
		'compile_benchmarks'
	]);
}

exports.buildsunit = function * (task) {
	yield task.serial([
		'clean_sk',
		'load_sk_compiler',
		'init_environment',
		'build_sk_sunit'
	]);
}

exports.runtests = function * (task) {
	yield task.serial([
		'load_sk_compiler',
		'init_environment',
		'build_sk_sunit',
		'compile_sk_tests',
		'build_sk_test_image',
		'run_sk_tests'
	]);
}

exports.runhudson = function * (task) {
	yield task.serial([
		'load_sk_compiler',
		'init_environment',
		'build_sk_hudson',
		'compile_sk_tests',
		'build_sk_hudson_image',
		'run_sk_hudson'
	]);
}

exports.clean_all = function * (task) {
	console.log("Task clean everything");
	rimraf.sync('./src/kernel/*.st.*');
	rimraf.sync('./src/vse/*.st.*');
	rimraf.sync('./src/compiler/*.st.*');
	rimraf.sync(sk.compilerPath);
	rimraf.sync(sk.imagePath);

	rimraf.sync('./tests/resources/SUnit/*.st.*');
	rimraf.sync('./tests/src/*/*.st.*');
	rimraf.sync('./tests/artifacts/*');
	rimraf.sync(sunit.imagePath);
	rimraf.sync(sktest.imagePath);
}

exports.clean = function * (task) {
	console.log("Task clean");
	rimraf.sync('./src/kernel/*.st.*');
	rimraf.sync('./src/vse/*.st.*');
	rimraf.sync('./src/compiler/*.st.*');

	rimraf.sync('./tests/resources/SUnit/*.st.*');
	rimraf.sync('./tests/src/*/*.st.*');
	rimraf.sync('./tests/artifacts/*');
	rimraf.sync(sunit.imagePath);
	rimraf.sync(sktest.imagePath);
}

exports.load_sk_compiler = function * (task) {
	console.log("Task load compiler");
	var compiler = require(sk.compilerPath);
}

exports.init_environment = function * (task) {
	console.log("Task init environment");
	try {
		env = smalltalk.StEnvironment.bootstrap();
		env.allowUndeclared_(true);
		console.log("read bindings");
		yield task
			.source(sk.stFiles)
			.initEnvironment();
		// env.bindingsKeyAndValuesDo_(function StEnvironment__(key,value){
		// 	console.log(key);
		// 	});
		env.allowUndeclared_(false);
	} catch (e) {
		console.log(e);
	}
}

exports.export_environment = function * (task) {
	console.log("Task init environment");
	try {
		env = smalltalk.StEnvironment.fromEnvironment();
		console.log("read bindings");
		yield task
			.source(lwm.stFiles)
			.initEnvironment({ env:env });
		// env.bindingsKeyAndValuesDo_(function StEnvironment__(key,value){
		// 	console.log(key);
		// 	});
	} catch (e) {
		console.log(e);
	}
}

exports.build_sk_compiler = function * (task) {
	console.log("Task build-sk-compiler");
	// rimraf.sync(sk.compilerPath);
	rimraf.sync('./src/compiler/*.st.js');
	rimraf.sync('./src/compiler/*.st.error.txt');
	
	try {
		var compiler = require(skcompiler.imagePath);
		console.log("read bindings");
		env = smalltalk.StEnvironment.fromEnvironment();
		yield task
			.source(sk.stFiles)
			.initEnvironment();
		console.log("compile compiler");
		yield task
			.source(sk.stFiles)
			.compileSK({ "includeSource": false});
			console.log(sk.compilerName);
		yield task
			.source([versionFile].concat(sk.imageFiles))
			.concat(sk.compilerName)
			.target('artifacts');

	} catch (e) {
		console.log("error caught");
		console.log(e);
		process.exit(1);
	}
	console.log("done");
}

exports.build_sk_image = function * (task) {
	console.log("Task build-sk-image");
	rimraf.sync(sk.imagePath);
	rimraf.sync('./src/kernel/*.st.error.txt');
	try {
		yield task
			.source(sk.stFiles)
			.compileSK();
		yield task
			.source([versionFile].concat(sk.imageFiles))
			.concat(sk.imageName)
			.target('artifacts');
	} catch (e) {
		console.log(e);
	}
}

exports.build_sk_prod_image = function * (task) {
	console.log("Task build-sk-prod-image");
	// rimraf.sync(sk.imagePath);
	rimraf.sync('./src/kernel/*.st.error.txt');
	try {
		yield task
			.source(sk.stFiles)
			.compileSK({ "includeSource": false});
		yield task
			.source([versionFile].concat(sk.imageFiles))
			.concat(sk.imageName.replace(".js", ".prod.js"))
			.target('artifacts');
	} catch (e) {
		console.log(e);
	}
}

exports.build_sk_mobile_image = function * (task) {
	console.log("Task build-sk-mobile-image");
	// rimraf.sync(sk.imagePath);
	rimraf.sync('./src/kernel/*.st.error.txt');
	try {
		yield task
			.source(mobile.stFiles)
			.compileSK({ "includeSource": false});
		yield task
			.source([versionFile].concat(mobile.imageFiles))
			.concat(mobile.imageName)
			.target('artifacts');
	} catch (e) {
		console.log(e);
	}
}

exports.build_sk_sunit = function * (task) {
	console.log("Task sunit");
	rimraf.sync('./tests/resources/SUnit/*.st.error.txt');
	try {
		yield task
			.source(sunit.stFiles)
			.compileSK({ kernel:sk.compilerPath});
		yield task
			.source([sk.imagePath].concat(sunit.jsFiles))
			.concat(sunit.imageName)
			.target('tests/artifacts');
	} catch (e) {
		console.log(e);
	}
}

exports.compile_sk_tests = function * (task) {
	console.log("Task sk test image");
	try {
		yield task
			.source(sktest.stFiles)
			.compileSK({ kernel:sunit.imagePath});
	} catch (e) {
		console.log(e);
	}
}

exports.compile_benchmarks = function * (task) {
	console.log("Task compile benchmarks");
	try {
		const benchmarkFiles = [
			  "./benchmarks/PrimitiveBenchmarks.st"
		];
		
		yield task
			.source(benchmarkFiles)
			.compileSK({ kernel:sk.compilerPath});
	} catch (e) {
		console.log(e);
	}
}

exports.build_sk_test_image = function * (task) {
	console.log("Task sk test image");
	try {
		yield task
			.source([sunit.imagePath].concat(sktest.jsFiles))
			.concat(sktest.imageName)
			.target('tests/artifacts');
	} catch (e) {
		console.log(e);
	}
}

exports.run_sk_tests = function * (task) {
	console.log("Task sk tests");
	try {
		const kernel = require(sktest.imagePath);
		var aTestResult = smalltalk.TestRunner.runAll();

		var numPasses = aTestResult.passes();
		var numFailures = aTestResult.failures().size();
		var numErrors = aTestResult.errors().size();
		print( '\x1b[32mPasses\x1b[0m: ' + numPasses.printString() );
		print( '\x1b[33mFailures\x1b[0m: ' + numFailures.printString() );
		print( '\x1b[31mErrors\x1b[0m: ' + numErrors.printString() );

		if (numErrors > 0) {
			print(aTestResult.errors());
		}
	} catch (e) {
		console.log(e);
	}
}

exports.build_sk_hudson = function * (task) {
	console.log("Task hudson");
	rimraf.sync('./tests/resources/SUnit/*.st.error.txt');
	try {
		yield task
			.source(hudson.stFiles)
			.compileSK({ kernel:sk.compilerPath});
		yield task
			.source([sk.imagePath].concat(hudson.jsFiles))
			.concat(hudson.imageName)
			.target('tests/artifacts');
	} catch (e) {
		console.log(e);
	}
}

exports.build_sk_hudson_image = function * (task) {
	console.log("Task sk test image");
	try {
		yield task
			.source([hudson.imagePath].concat(sktest.jsFiles))
			.concat(sktest.imageName)
			.target('tests/artifacts');
	} catch (e) {
		console.log(e);
	}
}

exports.run_sk_hudson = function * (task) {
	console.log("Task sk tests");
	try {
		const kernel = require(sktest.imagePath);
		var aTestResult = smalltalk.TestRunnerHudson.runAll();
		var outPath = "./tests/reports/kernel.xml";
		var fd = fs.openSync(outPath, 'w+');
		fs.writeSync(fd, aTestResult.junitXML());
		fs.closeSync(fd);
		// write (outPath, aTestResult.junitXML());
		// print(aTestResult.junitXML());

		var numPasses = aTestResult.passes();
		var numFailures = aTestResult.failures().size();
		var numErrors = aTestResult.errors().size();
		print( '\x1b[32mPasses\x1b[0m: ' + numPasses.printString() );
		print( '\x1b[33mFailures\x1b[0m: ' + numFailures.printString() );
		print( '\x1b[31mErrors\x1b[0m: ' + numErrors.printString() );

		if (numErrors > 0) {
			print(aTestResult.errors());
		}
	} catch (e) {
		console.log(e);
	}
}

