const join = require('path').join;

const imageName = 'sk.compiler.js';
const imagePath = join(__dirname, '..', 'bootstrap', imageName);

const epilogueFiles = [
	  "./src/compiler/epilogue.js"
];
const stFiles = [
	"./src/compiler/st-compat.st"
	,"./src/compiler/Compiler-JS.st"
	,"./src/compiler/Compiler-JS-Support.st"
	,"./src/compiler/Compiler-extensions.st"
	,"./src/compiler/Compiler-Support.st"
];

const concatMap = require('concat-map');
var jsFiles = concatMap(stFiles, function (x) {
	return x + ".js";
});
imageFiles = [imagePath];
imageFiles = imageFiles.concat(jsFiles);
imageFiles = imageFiles.concat(epilogueFiles);

module.exports = { 
	imageName: imageName,
	imagePath: imagePath,
	stFiles: stFiles,
	imageFiles: imageFiles
}


