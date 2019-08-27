
const readline = require('readline-sync');
const fs = require('fs')
var glob = require("glob")

require("../artifacts/sk.kernel.prod.js");

//console.log(process.argv);
var filesToLoad = [];
const cmdLine = require('commander');
cmdLine
	.arguments('<files-to-load...>')
		.action(function (files) {
			filesToLoad = files;
	});
cmdLine
	.option('-i, --interactive', 'Interactive mode');
cmdLine
	.command('compile <source...>')
		.description('Compile a file or a directory of files')
		.action((source) => {
			compileSource(source);
			process.exit(0);
	});
cmdLine
	.command('build <source>')
		.description('Compile files in a directory into an image')
		.action((source, cmd) => {
			// console.log('build command called');
			if (!fs.statSync(source).isDirectory()) {
				console.log('build source needs to be directory!');
				process.exit(-1);
			}
			build(source);
			process.exit(0);
	});
cmdLine
	.parse(process.argv);

if (!process.argv.slice(2).length) {
	cmdLine.outputHelp();
	process.exit(0);
}
for (file of filesToLoad) {
	console.log(file);
 	eval(fs.readFileSync(file)+'');
}

if (cmdLine.interactive) {
	runInteractive();
} else {
	console.log("don't understand:");
	console.log(process.argv);
}

process.exit(0);

function runInteractive() {
	var answer = readline.question('> ');
	while (answer.length > 0) {
	//	console.log('Got: ' + answer + '\n');
		try {
			var result = smalltalk.StCompiler.doIt_(answer);
			console.log('Result: ' + result);
		} catch (e) {
			console.log(e.message);
		}
		var answer = readline.question('> ');
	}
}

function compileSource(source) {
	console.log('source: ' + source);
	for (sourceFile of source) {
		console.log(sourceFile);
		if (fs.statSync(sourceFile).isDirectory()) {
			var sourceFileNames = fs.readdirSync(sourceFile);
			for (sourceFileName of sourceFileNames) {
				compileSourceFile(sourceFile + '/' +sourceFileName);
			}
		} else {
			compileSourceFile(sourceFile);
		}
	}
}

function build(source) {
	// console.log('build source: ' + source);
	removeFiles(source + '/*.js');
	var imagePath = source + '/mobile.js';
	fs.copyFile('./artifacts/mobile.js', imagePath, (err) => {
		if (err) {
			console.log('mobile.js not copied: ' + err.toString());
			throw err;
		}
	});
	var sourceFileNames = new glob.sync(source + '/*.st');
	for (var i = 0; i < sourceFileNames.length; i++) {
		var sourceFileName = sourceFileNames[i];
		var js = compileSourceFile(sourceFileName);
		fs.appendFileSync(imagePath, "\n");
		fs.appendFileSync(imagePath, js);
	}
}

function compileSourceFile(sourceFile) {
	// console.log('Compiling: ', sourceFile);
	try {
		const env = smalltalk.StEnvironment.fromEnvironment();
		// console.log("reading env:", sourceFile)
		try {
			var source = fs.readFileSync(sourceFile, 'utf8');
			env.readBindingsFrom_(source.asStream());
		} catch (e) {
			console.log(e.message);
			process.exit(-1);
		}
		const includeSource = false;
		console.log("compile:", sourceFile)
		var source = fs.readFileSync(sourceFile, 'utf8');
		var result = smalltalk.StStreamCompiler.compile_in_includeSource_(source, env, includeSource);
		if (result.substr(0, 4) == "{st:") {
			console.log(result);
			process.exit(-1);
		}

		var outPath = sourceFile + ".js";
		write (outPath, result);
	} catch (e) {
		console.log(e.message);
		process.exit(-1);
	}
	return result;
}

function removeFiles(pattern) {
	var matches = new glob.sync(pattern);
	for (var i = 0; i < matches.length; i++) {
		var file = matches[i];
		fs.unlinkSync(file, (err) => {
			if (err) {
				console.log('file not removed: ' + err.toString());
				throw err;
			}
		});
	}
}

function write(filePath, aString) {
	var fd = fs.openSync(filePath, 'w+');
	fs.writeSync(fd, aString);
	fs.closeSync(fd);
}