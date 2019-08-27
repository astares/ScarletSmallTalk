const join = require('path').join;

const imageName = 'sunit-image.js';
const imagePath = join(__dirname, '..', 'tests', 'artifacts', imageName);

const stFiles = [
	  "./tests/resources/SUnit/SUnit.st"
];

var jsFiles;

var concatMap = require('concat-map');
jsFiles = concatMap(stFiles, function (x) {
	return x + ".js";
});

module.exports = { 
	imageName: imageName,
	imagePath: imagePath,
	stFiles: stFiles,
	jsFiles: jsFiles
}

