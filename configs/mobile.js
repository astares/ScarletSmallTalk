const join = require('path').join;

const imageName = 'mobile.js';
const imagePath = join(__dirname, '..', 'artifacts', imageName);

const bootFiles = [
	  "./license.txt"
	, "./bootstrap/runtime.js"
];
const primitiveFiles = [
	  "./src/primitives/SKPrimitiveModule.js"
	, "./src/primitives/SKArray.js"
	, "./src/primitives/SKByteArray.js"
	, "./src/primitives/SKBehavior.js"
	, "./src/primitives/SKBlockClosure.js"
	, "./src/primitives/SKBoolean.js"
	, "./src/primitives/SKByteArray.js"
	, "./src/primitives/SKClassBuilder.js"
	, "./src/primitives/SKDateTime.js"
	, "./src/primitives/SKException.js"
	, "./src/primitives/SKNumber.js"
	, "./src/primitives/SKObject.js"
	, "./src/primitives/SKPoolDictionary.js"
	, "./src/primitives/SKRegularExpression.js"
	, "./src/primitives/SKSequenceableCollection.js"
	, "./src/primitives/SKSmalltalk.js"
	, "./src/primitives/SKStream.js"
	, "./src/primitives/SKString.js"
	, "./src/primitives/SKUndefinedObject.js"
//	, "./src/primitives/SKTranscript.js"
];
const epilogueFiles = [
	 "./bootstrap/epilogue.js"
	, "./src/compiler/epilogue.js"
	, "./bootstrap/mobile-doit.js"
];
const stFiles = [
	  "./src/kernel/initialize.st"
	, "./src/kernel/Interval.st"
	, "./src/kernel/Kernel.st"


	, "./src/S8/KeyedCollection.st"
	, "./src/S8/ArrayedContents.st"
	, "./src/S8/EventManager.st"
	, "./src/S8/MethodReferences.st"
	, "./src/S8/SystemManager.st"

	, "./src/kernel/PoolDictionary.st"
	, "./src/kernel/PrimitiveSupport.st"
	, "./src/S8/Tools.st"
	, "./src/kernel/Transcript.st"
	, "./src/kernel/Snapshot.st"

	,"./src/ext/ByteArray.st"
	,"./src/ext/Kernel-ext.st"
	,"./src/ext/Collection.st"
	,"./src/ext/OrderedCollection.st"
	,"./src/ext/SortedCollection.st"
	,"./src/ext/OrderedSet.st"
	,"./src/ext/Number.st"
	,"./src/ext/Float.st"
	,"./src/ext/Integer.st"
	,"./src/ext/Character.st"

	,"./src/compiler/st-compat.st"
	,"./src/compiler/Compiler-JS.st"
	,"./src/compiler/Compiler-JS-Support.st"
	,"./src/compiler/Compiler-Support.st"
	,"./src/compiler/Compiler-extensions.st"
	,"./src/compiler/Compiler-support.st"
];

var jsFiles;

var concatMap = require('concat-map');
jsFiles = concatMap(stFiles, function (x) {
	return x + ".js";
});

var imageFiles = bootFiles.concat(primitiveFiles);
imageFiles = imageFiles.concat(jsFiles);
imageFiles = imageFiles.concat(epilogueFiles);

module.exports = { 
	imageName: imageName,
	imagePath: imagePath,
	stFiles: stFiles,
	imageFiles: imageFiles
}


