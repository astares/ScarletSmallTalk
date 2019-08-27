const join = require('path').join;

const imageName = 'sk-test-image.js';
const imagePath = join(__dirname, '..', 'tests', 'artifacts', imageName);

const stFiles = [
	  "./tests/src/CoreClasses/Message.st"
	, "./tests/src/CoreClasses/NumberTestCase.st"
	, "./tests/src/CoreClasses/StringTestCase.st"

	, "./tests/src/Kernel/ArrayTestCase.st"
	, "./tests/src/Kernel/BlockClosureTestCase.st"
	, "./tests/src/Kernel/BooleanTestCase.st"
	, "./tests/src/Kernel/DateTimeTestCase.st"
//	, "./tests/src/Kernel/DateTimeLocaleTestCase.st"
	, "./tests/src/Kernel/DictionaryTestCase.st"
	, "./tests/src/Kernel/ExceptionTestCase.st"
	, "./tests/src/Kernel/IntervalTestCase.st"
	, "./tests/src/Kernel/NumberTestCase.st"
	, "./tests/src/Kernel/ObjectTestCase.st"
	, "./tests/src/Kernel/PoolDictionaryTestCase.st"
	, "./tests/src/Kernel/SetTestCase.st"
	, "./tests/src/Kernel/SmalltalkTestCase.st"
	, "./tests/src/Kernel/StringTestCase.st"

	, "./tests/src/Number/FloatTest.st"
	, "./tests/src/Number/IntegerTest.st"
	, "./tests/src/Number/NumberTest.st"
	, "./tests/src/Number/SmallIntegerTest.st"

	, "./tests/src/ext/ByteArrayTestCase.st"
	, "./tests/src/ext/DictionaryTestCase.st"
	, "./tests/src/ext/OrderedCollectionTestCase.st"

	, "./tests/src/SKCompiler/StCompilerTestClass.st"
	, "./tests/src/SKCompiler/StCompilerTestSubClass.st"
	, "./tests/src/SKCompiler/StCompilerTest.st"
	, "./tests/src/SKCompiler/StCompilerSubClassTest.st"
	, "./tests/src/Compiler/PrimitiveTestCase.st"
	, "./tests/src/Compiler/PrimitiveSpecTestModule.st"
	, "./tests/src/Compiler/PrimitiveSpecTestAndroid.st"
	, "./tests/src/Compiler/PrimitiveSpecTestNodeJS.st"

];

const primFiles = [
	"./tests/src/Compiler/NativeTestModule.js"
	, "./tests/src/Compiler/NativeSpecTestModule.js"
];

var jsFiles;

var concatMap = require('concat-map');
jsFiles = concatMap(stFiles, function (x) {
	return x + ".js";
});
jsFiles = jsFiles.concat(primFiles);

module.exports = { 
	imageName: imageName,
	imagePath: imagePath,
	stFiles: stFiles,
	jsFiles: jsFiles
}

