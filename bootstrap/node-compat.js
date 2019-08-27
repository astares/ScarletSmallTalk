
// # #isFileOlderThan: fileName with: referenceFileName
isFileOlderThan = function(fileName, referenceFileName) {
	if (!fs.existsSync(fileName)) {
		return true;
	}
	if (!fs.existsSync(referenceFileName)) {
		return false;
	}
	var fileStats = fs.statSync(fileName);
	var referenceStats = fs.statSync(referenceFileName);
	return fileStats.mtimeMs < referenceStats.mtimeMs;
}

// # #fileWrite: fileName string: self mode: 'wb'/'ab'
fileWrite = function(filePath, aString, mode) {
	var flags = mode == 'wb' ? 'w+' : 'a';
	var fd = fs.openSync(filePath, flags);
	fs.writeSync(fd, aString);
	fs.closeSync(fd);
}

// # #fileContents: jsFileName
fileContents = function(fileName) {
	return read(fileName);
}

read = function(filePath) {
	return fs.readFileSync(filePath, 'utf8');
}

print = function(message) {
	console.log(message)
}

load = function(fileName) {
	eval(fs.readFileSync(fileName)+'');
}

quit = function(exitCode) {
	process.exit(exitCode);
}

LogManager = {}