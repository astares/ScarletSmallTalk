smalltalk.addClass("StCompilerTest", smalltalk.TestCase, ['testClass'], 'Compiler-JS-Test');
smalltalk.StCompilerTest.$classVariableNames=("");
smalltalk.bind(smalltalk.StCompilerTest, unescape("benchmark%3A"), "benchmark_", function StCompilerTest__benchmark_(iterations){
var size = nil;
var flags = nil;
var prime = nil;
var k = nil;
var count = nil;
const self = this; size=(8190);
for(var $1$ = iterations;$1$>0;$1$--){ count=(0);
flags=(smalltalk.Array.new_(size)).atAllPut_(true);
(1).to_do_(size,(function StCompilerTest__(i){
if ((flags.at_(i)).valueOf()) {prime=i._plus((1));
k=i._plus(prime);
while((k._lt_eq(size)).valueOf()){flags.at_put_(k,false);
k=k._plus(prime)};;
count=count._plus((1))};
return i;
}
))};;
return count;
}
, "running", unescape("benchmark%3A%20iterations%0D%09%22%28500000%20//%20time%20to%20run%29%20%3D%20approx%20bytecodes%20per%20second%22%0D%09%225000000%20//%20%28Time%20millisecondsToRun%3A%20%5B10%20benchmark%5D%29%20*%201000%22%0D%09%223059000%20on%20a%20Mac%208100/100%22%0D%20%20%20%20%7C%20size%20flags%20prime%20k%20count%20%7C%0D%20%20%20%20size%20%3A%3D%208190.%0D%20%20%20%20iterations%20timesRepeat%3A%0D%20%20%20%20%20%20%20%20%5B%0D%20%20%20%20%20%20%20%20count%20%3A%3D%200.%0D%20%20%20%20%20%20%20%20flags%20%3A%3D%20%28Array%20new%3A%20size%29%20atAllPut%3A%20true.%0D%20%20%20%20%20%20%20%201%20to%3A%20size%20do%3A%0D%20%20%20%20%20%20%20%20%20%20%20%20%5B%3Ai%20%7C%20%28flags%20at%3A%20i%29%20ifTrue%3A%0D%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5Bprime%20%3A%3D%20i+1.%0D%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20k%20%3A%3D%20i%20+%20prime.%0D%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5Bk%20%3C%3D%20size%5D%20whileTrue%3A%0D%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5Bflags%20at%3A%20k%20put%3A%20false.%0D%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20k%20%3A%3D%20k%20+%20prime%5D.%0D%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20count%20%3A%3D%20count%20+%201%5D.%0D%09%09%09i%5D%5D.%0D%20%20%20%20%5E%20count"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("setUp"), "setUp", function StCompilerTest__setUp(){
const self = this; smalltalk.superImplementor(smalltalk.StCompilerTest,'setUp').apply(self, []);
smalltalk.StCompilerTestClass.initialize();
self.assert_(((smalltalk.StCompilerTestClass.classInstVar1())._eq("classInstVar1")));
self.assert_(((smalltalk.StCompilerTestClass.classVar1())._eq("classVar1")));
self['@testClass']=smalltalk.StCompilerTestClass.$$new();
self.assert_(((nil.isNil_(self['@testClass'])===false)));
return self;
}
, "running", unescape("setUp%0D%09super%20setUp.%0D%09StCompilerTestClass%20initialize.%0D%09self%20assert%3A%20StCompilerTestClass%20classInstVar1%20%3D%20%27classInstVar1%27.%0D%09self%20assert%3A%20StCompilerTestClass%20classVar1%20%3D%20%27classVar1%27.%0D%0D%09testClass%20%3A%3D%20StCompilerTestClass%20new.%0D%09self%20assert%3A%20testClass%20notNil"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("tearDown"), "tearDown", function StCompilerTest__tearDown(){
const self = this; smalltalk.superImplementor(smalltalk.StCompilerTest,'tearDown').apply(self, []);
smalltalk.StCompilerTestClass.tearDown();
return self;
}
, "running", unescape("tearDown%0D%09super%20tearDown.%0D%09StCompilerTestClass%20tearDown"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testBenchmark"), "testBenchmark", function StCompilerTest__testBenchmark(){
const self = this; self.benchmark_((100));
return self;
}
, "running", unescape("testBenchmark%0D%09self%20benchmark%3A%20100"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testReturnWhileFalse"), "testReturnWhileFalse", function StCompilerTest__testReturnWhileFalse(){
const self = this; self['@testClass'].value1_((1));
self['@testClass'].value2_((2));
self.assert_(((self['@testClass'].returnWhileFalse())._eq("one")));
self['@testClass'].value1_((2));
self['@testClass'].value2_((1));
self.assert_(((self['@testClass'].returnWhileFalse())._eq(self['@testClass'])));
return self;
}
, "tests loops", unescape("testReturnWhileFalse%0D%09testClass%20value1%3A%201.%0D%09testClass%20value2%3A%202.%0D%09self%20assert%3A%20testClass%20returnWhileFalse%20%3D%20%27one%27.%0D%09testClass%20value1%3A%202.%0D%09testClass%20value2%3A%201.%0D%09self%20assert%3A%20testClass%20returnWhileFalse%20%3D%20testClass"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testReturnWhileTrue"), "testReturnWhileTrue", function StCompilerTest__testReturnWhileTrue(){
const self = this; self['@testClass'].value1_((1));
self['@testClass'].value2_((2));
self.assert_(((self['@testClass'].returnWhileTrue())._eq("one")));
self['@testClass'].value1_((2));
self['@testClass'].value2_((1));
self.assert_(((self['@testClass'].returnWhileTrue())._eq(self['@testClass'])));
return self;
}
, "tests loops", unescape("testReturnWhileTrue%0D%09testClass%20value1%3A%201.%0D%09testClass%20value2%3A%202.%0D%09self%20assert%3A%20testClass%20returnWhileTrue%20%3D%20%27one%27.%0D%09testClass%20value1%3A%202.%0D%09testClass%20value2%3A%201.%0D%09self%20assert%3A%20testClass%20returnWhileTrue%20%3D%20testClass"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testWhileFalseDo"), "testWhileFalseDo", function StCompilerTest__testWhileFalseDo(){
const self = this; self['@testClass'].value1_((1));
self['@testClass'].value2_((3));
self.assert_(((self['@testClass'].whileFalseDo())._eq((4))));
self['@testClass'].value1_((2));
self['@testClass'].value2_((1));
self.assert_(((self['@testClass'].whileFalseDo())._eq((2))));
return self;
}
, "tests loops", unescape("testWhileFalseDo%0D%09testClass%20value1%3A%201.%0D%09testClass%20value2%3A%203.%0D%09self%20assert%3A%20testClass%20whileFalseDo%20%3D%204.%0D%09testClass%20value1%3A%202.%0D%09testClass%20value2%3A%201.%0D%09self%20assert%3A%20testClass%20whileFalseDo%20%3D%202"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testWhileFalseReturn"), "testWhileFalseReturn", function StCompilerTest__testWhileFalseReturn(){
const self = this; self.assert_(((self['@testClass'].whileFalseReturn())._eq(nil)));
return self;
}
, "tests loops", unescape("testWhileFalseReturn%0D%09self%20assert%3A%20testClass%20whileFalseReturn%20%3D%20nil"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testWhileTrueDo"), "testWhileTrueDo", function StCompilerTest__testWhileTrueDo(){
const self = this; self['@testClass'].value1_((1));
self['@testClass'].value2_((3));
self.assert_(((self['@testClass'].whileTrueDo())._eq((3))));
self['@testClass'].value1_((2));
self['@testClass'].value2_((1));
self.assert_(((self['@testClass'].whileTrueDo())._eq((2))));
return self;
}
, "tests loops", unescape("testWhileTrueDo%0D%09testClass%20value1%3A%201.%0D%09testClass%20value2%3A%203.%0D%09self%20assert%3A%20testClass%20whileTrueDo%20%3D%203.%0D%09testClass%20value1%3A%202.%0D%09testClass%20value2%3A%201.%0D%09self%20assert%3A%20testClass%20whileTrueDo%20%3D%202"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testWhileTrueReturn"), "testWhileTrueReturn", function StCompilerTest__testWhileTrueReturn(){
const self = this; self.assert_(((self['@testClass'].whileTrueReturn())._eq(nil)));
return self;
}
, "tests loops", unescape("testWhileTrueReturn%0D%09self%20assert%3A%20testClass%20whileTrueReturn%20%3D%20nil"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testBlockExpressionVariableReturnEval"), "testBlockExpressionVariableReturnEval", function StCompilerTest__testBlockExpressionVariableReturnEval(){
const self = this; self.assert_(((self['@testClass'].blockExpressionVariableReturnEval())._eq((16))));
return self;
}
, "tests block returns", unescape("testBlockExpressionVariableReturnEval%0D%09self%20assert%3A%20testClass%20blockExpressionVariableReturnEval%20%3D%2016"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testBlockReturnLiteralReturn"), "testBlockReturnLiteralReturn", function StCompilerTest__testBlockReturnLiteralReturn(){
const self = this; self.assert_(((smalltalk.is_kindOf_(self['@testClass'].blockReturnLiteralReturn(),smalltalk.BlockClosure))));
return self;
}
, "tests block returns", unescape("testBlockReturnLiteralReturn%0D%09self%20assert%3A%20%28testClass%20blockReturnLiteralReturn%20isKindOf%3A%20BlockClosure%29.%0D%09%22exception%20is%20thrown%20in%20Smalltalk%2C%20but%20not%20Javascript%22%0D%22%09self%20should%3A%20%5BtestClass%20blockReturnLiteralReturn%20value%20%3D%2042%5D%20raise%3A%20Error%22"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testBlockReturnLiteralValueReturn"), "testBlockReturnLiteralValueReturn", function StCompilerTest__testBlockReturnLiteralValueReturn(){
const self = this; self.assert_(((self['@testClass'].blockReturnLiteralValueReturn())._eq((42))));
return self;
}
, "tests block returns", unescape("testBlockReturnLiteralValueReturn%0D%09self%20assert%3A%20testClass%20blockReturnLiteralValueReturn%20%3D%2042"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testBlockVariableReturnEval"), "testBlockVariableReturnEval", function StCompilerTest__testBlockVariableReturnEval(){
const self = this; self.assert_(((self['@testClass'].blockVariableReturnEval())._eq((1))));
return self;
}
, "tests block returns", unescape("testBlockVariableReturnEval%0D%09self%20assert%3A%20testClass%20blockVariableReturnEval%20%3D%201"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testBlockExpressionEval"), "testBlockExpressionEval", function StCompilerTest__testBlockExpressionEval(){
const self = this; self.assert_(((self['@testClass'].blockExpressionEval())._eq((4))));
return self;
}
, "tests blocks", unescape("testBlockExpressionEval%0D%09self%20assert%3A%20testClass%20blockExpressionEval%20%3D%204"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testBlockExpressionVariableEval"), "testBlockExpressionVariableEval", function StCompilerTest__testBlockExpressionVariableEval(){
const self = this; self.assert_(((self['@testClass'].blockExpressionVariableEval())._eq((9))));
return self;
}
, "tests blocks", unescape("testBlockExpressionVariableEval%0D%09self%20assert%3A%20testClass%20blockExpressionVariableEval%20%3D%209"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testBlockLiteralEvalReturn"), "testBlockLiteralEvalReturn", function StCompilerTest__testBlockLiteralEvalReturn(){
const self = this; self.assert_(((self['@testClass'].blockLiteralEvalReturn())._eq((5))));
return self;
}
, "tests blocks", unescape("testBlockLiteralEvalReturn%0D%09self%20assert%3A%20testClass%20blockLiteralEvalReturn%20%3D%205"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testBlockReturnTemp"), "testBlockReturnTemp", function StCompilerTest__testBlockReturnTemp(){
const self = this; self['@testClass'].value1_("one");
self.assert_(((self['@testClass'].blockReturnTemp())._eq("one")));
return self;
}
, "tests blocks", unescape("testBlockReturnTemp%0D%09testClass%20value1%3A%20%27one%27.%0D%09self%20assert%3A%20testClass%20blockReturnTemp%20%3D%20%27one%27"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testBlockReturnTempBlock"), "testBlockReturnTempBlock", function StCompilerTest__testBlockReturnTempBlock(){
const self = this; self['@testClass'].value1_("one");
self.assert_((((self['@testClass'].blockReturnTempBlock()).value())._eq("one")));
return self;
}
, "tests blocks", unescape("testBlockReturnTempBlock%0D%09testClass%20value1%3A%20%27one%27.%0D%09self%20assert%3A%20testClass%20blockReturnTempBlock%20value%20%3D%20%27one%27"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testBlockReturnTempEval"), "testBlockReturnTempEval", function StCompilerTest__testBlockReturnTempEval(){
const self = this; self['@testClass'].value1_("one");
self.assert_(((self['@testClass'].blockReturnTempEval())._eq("one")));
return self;
}
, "tests blocks", unescape("testBlockReturnTempEval%0D%09testClass%20value1%3A%20%27one%27.%0D%09self%20assert%3A%20testClass%20blockReturnTempEval%20%3D%20%27one%27"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testBlockReturnVariableTemp"), "testBlockReturnVariableTemp", function StCompilerTest__testBlockReturnVariableTemp(){
const self = this; self['@testClass'].value1_("one");
self.assert_(((self['@testClass'].blockReturnVariableTemp())._eq("one")));
return self;
}
, "tests blocks", unescape("testBlockReturnVariableTemp%0D%09testClass%20value1%3A%20%27one%27.%0D%09self%20assert%3A%20testClass%20blockReturnVariableTemp%20%3D%20%27one%27"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testBlockVariableEval"), "testBlockVariableEval", function StCompilerTest__testBlockVariableEval(){
const self = this; self.assert_(((self['@testClass'].blockVariableEval())._eq((2))));
return self;
}
, "tests blocks", unescape("testBlockVariableEval%0D%09self%20assert%3A%20testClass%20blockVariableEval%20%3D%202"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testParseDigits"), "testParseDigits", function StCompilerTest__testParseDigits(){
var scanner = nil;
var numberString = nil;
const self = this; scanner=smalltalk.StScanner.$$new();
numberString=scanner.scanDigitString_(("0.0".readStream()));
self.assert_((numberString._eq("0")));
numberString=scanner.scanDigitString_(("0.0.".readStream()));
self.assert_((numberString._eq("0")));
numberString=scanner.scanDigitString_(("10r24".readStream()));
self.assert_((numberString._eq("10")));
numberString=scanner.scanDigitString_(("0.0.0.0".readStream()));
self.assert_((numberString._eq("0")));
numberString=scanner.scanDigitString_(("300.045abs".readStream()));
self.assert_((numberString._eq("300")));
numberString=scanner.scanDigitString_(("300.045rounded".readStream()));
self.assert_((numberString._eq("300")));
return self;
}
, "parsing", unescape("testParseDigits%0D%09%7C%20scanner%20numberString%20%7C%0D%09scanner%20%3A%3D%20StScanner%20new.%0D%09numberString%20%3A%3D%20scanner%20scanDigitString%3A%20%270.0%27%20readStream.%0D%09self%20assert%3A%20numberString%20%3D%20%270%27.%0D%0D%09numberString%20%3A%3D%20scanner%20scanDigitString%3A%20%270.0.%27%20readStream.%0D%09self%20assert%3A%20numberString%20%3D%20%270%27.%0D%0D%09numberString%20%3A%3D%20scanner%20scanDigitString%3A%20%2710r24%27%20readStream.%0D%09self%20assert%3A%20numberString%20%3D%20%2710%27.%0D%0D%09numberString%20%3A%3D%20scanner%20scanDigitString%3A%20%270.0.0.0%27%20readStream.%0D%09self%20assert%3A%20numberString%20%3D%20%270%27.%0D%0D%09numberString%20%3A%3D%20scanner%20scanDigitString%3A%20%27300.045abs%27%20readStream.%0D%09self%20assert%3A%20numberString%20%3D%20%27300%27.%0D%0D%09numberString%20%3A%3D%20scanner%20scanDigitString%3A%20%27300.045rounded%27%20readStream.%0D%09self%20assert%3A%20numberString%20%3D%20%27300%27"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testParseFloat"), "testParseFloat", function StCompilerTest__testParseFloat(){
var scanner = nil;
var numberString = nil;
const self = this; scanner=smalltalk.StScanner.$$new();
numberString=scanner.scanNumberString_(("0.0".readStream()));
self.assert_((numberString._eq("0.0")));
numberString=scanner.scanNumberString_(("0.0.".readStream()));
self.assert_((numberString._eq("0.0")));
numberString=scanner.scanNumberString_(("300.045abs".readStream()));
self.assert_((numberString._eq("300.045")));
numberString=scanner.scanNumberString_(("300.045rounded".readStream()));
self.assert_((numberString._eq("300.045")));
return self;
}
, "parsing", unescape("testParseFloat%0D%09%7C%20scanner%20numberString%20%7C%0D%09scanner%20%3A%3D%20StScanner%20new.%0D%09numberString%20%3A%3D%20scanner%20scanNumberString%3A%20%270.0%27%20readStream.%0D%09self%20assert%3A%20numberString%20%3D%20%270.0%27.%0D%0D%09numberString%20%3A%3D%20scanner%20scanNumberString%3A%20%270.0.%27%20readStream.%0D%09self%20assert%3A%20numberString%20%3D%20%270.0%27.%0D%0D%09numberString%20%3A%3D%20scanner%20scanNumberString%3A%20%27300.045abs%27%20readStream.%0D%09self%20assert%3A%20numberString%20%3D%20%27300.045%27.%0D%0D%09numberString%20%3A%3D%20scanner%20scanNumberString%3A%20%27300.045rounded%27%20readStream.%0D%09self%20assert%3A%20numberString%20%3D%20%27300.045%27"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testParseHex"), "testParseHex", function StCompilerTest__testParseHex(){
const self = this; self;
return self;
}
, "parsing", "testParseHex");
smalltalk.bind(smalltalk.StCompilerTest, unescape("testParseInteger"), "testParseInteger", function StCompilerTest__testParseInteger(){
var scanner = nil;
var numberString = nil;
const self = this; scanner=smalltalk.StScanner.$$new();
numberString=scanner.scanNumberString_(("0.0".readStream()));
self.assert_((numberString._eq("0.0")));
numberString=scanner.scanNumberString_(("123".readStream()));
self.assert_((numberString._eq("123")));
numberString=scanner.scanNumberString_(("123.".readStream()));
self.assert_((numberString._eq("123")));
numberString=scanner.scanNumberString_(("300abs".readStream()));
self.assert_((numberString._eq("300")));
numberString=scanner.scanNumberString_(("300.rounded".readStream()));
self.assert_((numberString._eq("300")));
return self;
}
, "parsing", unescape("testParseInteger%0D%09%7C%20scanner%20numberString%20%7C%0D%09scanner%20%3A%3D%20StScanner%20new.%0D%09numberString%20%3A%3D%20scanner%20scanNumberString%3A%20%270.0%27%20readStream.%0D%09self%20assert%3A%20numberString%20%3D%20%270.0%27.%0D%0D%09numberString%20%3A%3D%20scanner%20scanNumberString%3A%20%27123%27%20readStream.%0D%09self%20assert%3A%20numberString%20%3D%20%27123%27.%0D%0D%09numberString%20%3A%3D%20scanner%20scanNumberString%3A%20%27123.%27%20readStream.%0D%09self%20assert%3A%20numberString%20%3D%20%27123%27.%0D%0D%09numberString%20%3A%3D%20scanner%20scanNumberString%3A%20%27300abs%27%20readStream.%0D%09self%20assert%3A%20numberString%20%3D%20%27300%27.%0D%0D%09numberString%20%3A%3D%20scanner%20scanNumberString%3A%20%27300.rounded%27%20readStream.%0D%09self%20assert%3A%20numberString%20%3D%20%27300%27"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testParseRadix"), "testParseRadix", function StCompilerTest__testParseRadix(){
var scanner = nil;
var numberString = nil;
const self = this; scanner=smalltalk.StScanner.$$new();
numberString=scanner.scanNumberString_(("10r123".readStream()));
self.assert_((numberString._eq("10r123")));
numberString=scanner.scanNumberString_(("10r123rounded".readStream()));
self.assert_((numberString._eq("10r123")));
numberString=scanner.scanNumberString_(("10r123abc".readStream()));
self.assert_((numberString._eq("10r123")));
return self;
}
, "parsing", unescape("testParseRadix%0D%09%7C%20scanner%20numberString%20%7C%0D%09scanner%20%3A%3D%20StScanner%20new.%0D%09numberString%20%3A%3D%20scanner%20scanNumberString%3A%20%2710r123%27%20readStream.%0D%09self%20assert%3A%20numberString%20%3D%20%2710r123%27.%0D%0D%09numberString%20%3A%3D%20scanner%20scanNumberString%3A%20%2710r123rounded%27%20readStream.%0D%09self%20assert%3A%20numberString%20%3D%20%2710r123%27.%0D%0D%09numberString%20%3A%3D%20scanner%20scanNumberString%3A%20%2710r123abc%27%20readStream.%0D%09self%20assert%3A%20numberString%20%3D%20%2710r123%27"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testClassInstVarAssignment"), "testClassInstVarAssignment", function StCompilerTest__testClassInstVarAssignment(){
const self = this; self.assert_((((self['@testClass'].$klass).classInstVarReturn())._eq("classInstVar1")));
(self['@testClass'].$klass).classInstVarAssignment();
self.assert_((((self['@testClass'].$klass).classInstVarReturn())._eq("classVar1")));
return self;
}
, "tests vars", unescape("testClassInstVarAssignment%0D%09self%20assert%3A%20testClass%20class%20classInstVarReturn%20%3D%20%27classInstVar1%27.%0D%09testClass%20class%20classInstVarAssignment.%0D%09self%20assert%3A%20testClass%20class%20classInstVarReturn%20%3D%20%27classVar1%27"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testClassInstVarReturn"), "testClassInstVarReturn", function StCompilerTest__testClassInstVarReturn(){
const self = this; self.assert_((((self['@testClass'].$klass).classInstVarReturn())._eq("classInstVar1")));
return self;
}
, "tests vars", unescape("testClassInstVarReturn%0D%09self%20assert%3A%20testClass%20class%20classInstVarReturn%20%3D%20%27classInstVar1%27"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testClassVarAssignment"), "testClassVarAssignment", function StCompilerTest__testClassVarAssignment(){
const self = this; self.assert_(((self['@testClass'].classVarReturn())._eq("classVar1")));
self['@testClass'].value1_("one");
self['@testClass'].classVarAssignment();
self.assert_(((self['@testClass'].classVarReturn())._eq("one")));
return self;
}
, "tests vars", unescape("testClassVarAssignment%0D%09self%20assert%3A%20testClass%20classVarReturn%20%3D%20%27classVar1%27.%0D%09testClass%20value1%3A%20%27one%27.%0D%09testClass%20classVarAssignment.%0D%09self%20assert%3A%20testClass%20classVarReturn%20%3D%20%27one%27"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testClassVarReturn"), "testClassVarReturn", function StCompilerTest__testClassVarReturn(){
const self = this; self.assert_(((self['@testClass'].classVarReturn())._eq("classVar1")));
return self;
}
, "tests vars", unescape("testClassVarReturn%0D%09self%20assert%3A%20testClass%20classVarReturn%20%3D%20%27classVar1%27"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testInstVarReturn"), "testInstVarReturn", function StCompilerTest__testInstVarReturn(){
const self = this; self.assert_(((self['@testClass'].instVarReturn())._eq("instVar1")));
return self;
}
, "tests vars", unescape("testInstVarReturn%0D%09self%20assert%3A%20testClass%20instVarReturn%20%3D%20%27instVar1%27"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testVariableAssign"), "testVariableAssign", function StCompilerTest__testVariableAssign(){
const self = this; self.assert_(((nil.is_eqeq_(self['@testClass'].variableAssign(),self['@testClass']))));
return self;
}
, "tests vars", unescape("testVariableAssign%0D%09self%20assert%3A%20testClass%20variableAssign%20%3D%3D%20testClass"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testVariableAssignReturn"), "testVariableAssignReturn", function StCompilerTest__testVariableAssignReturn(){
const self = this; self.assert_(((self['@testClass'].variableReturnAssign())._eq((1))));
return self;
}
, "tests vars", unescape("testVariableAssignReturn%0D%09self%20assert%3A%20testClass%20variableReturnAssign%20%3D%201"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testVariableReturn"), "testVariableReturn", function StCompilerTest__testVariableReturn(){
const self = this; self.assert_(((nil.isNil_(self['@testClass'].variableReturn()))));
return self;
}
, "tests vars", unescape("testVariableReturn%0D%09self%20assert%3A%20testClass%20variableReturn%20isNil"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testVariableReturnAssign"), "testVariableReturnAssign", function StCompilerTest__testVariableReturnAssign(){
const self = this; self.assert_(((self['@testClass'].variableReturnAssign())._eq((1))));
return self;
}
, "tests vars", unescape("testVariableReturnAssign%0D%09self%20assert%3A%20testClass%20variableReturnAssign%20%3D%201"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testVariablesAssignReturn"), "testVariablesAssignReturn", function StCompilerTest__testVariablesAssignReturn(){
const self = this; self.assert_(((self['@testClass'].variablesAssignReturn())._eq((2))));
return self;
}
, "tests vars", unescape("testVariablesAssignReturn%0D%09self%20assert%3A%20testClass%20variablesAssignReturn%20%3D%202"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testVariablesReturn"), "testVariablesReturn", function StCompilerTest__testVariablesReturn(){
const self = this; self.assert_(((nil.isNil_(self['@testClass'].variablesReturn()))));
return self;
}
, "tests vars", unescape("testVariablesReturn%0D%09self%20assert%3A%20testClass%20variablesReturn%20isNil"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("disabletestIfUndefinedReturn"), "disabletestIfUndefinedReturn", function StCompilerTest__disabletestIfUndefinedReturn(){
const self = this; self;
return self;
}
, "tests inlining", unescape("disabletestIfUndefinedReturn%0D%09%22we%20have%20no%20way%20currently%20to%20set%20a%20Smalltalk%20inst%20var%20to%20Javascript%20undefined%20directly%22%0D%09%22disable%20for%20now%0D%09self%20assert%3A%20testClass%20ifUndefinedReturn%20%3D%20%27one%27.%0D%09testClass%20value1%3A%20%27value42%27.%0D%09self%20assert%3A%20testClass%20ifUndefinedReturn%20%3D%20%27one%27.%0D%09testClass%20value1%3A%20%27@value2%27.%0D%09self%20assert%3A%20testClass%20ifUndefinedReturn%20%3D%20%27one%27.%0D%09testClass%20value2%3A%202.%0D%09self%20assert%3A%20testClass%20ifUndefinedReturn%20%3D%202%0D%09%22"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testIfFalseBlockIfTrueReturn"), "testIfFalseBlockIfTrueReturn", function StCompilerTest__testIfFalseBlockIfTrueReturn(){
const self = this; self['@testClass'].value1_((2));
self['@testClass'].value2_((1));
self.assert_description_(((self['@testClass'].ifFalseBlockIfTrueReturn())._eq([])),((self['@testClass'].ifFalseBlockIfTrueReturn()).asString()));
self['@testClass'].value1_((1));
self['@testClass'].value2_((2));
self.assert_description_(((self['@testClass'].ifFalseBlockIfTrueReturn())._eq(self['@testClass'])),((self['@testClass'].ifFalseBlockIfTrueReturn()).asString()));
return self;
}
, "tests inlining", unescape("testIfFalseBlockIfTrueReturn%0D%09testClass%20value1%3A%202.%0D%09testClass%20value2%3A%201.%0D%09self%20assert%3A%20testClass%20ifFalseBlockIfTrueReturn%20%3D%20%23%28%29%20description%3A%20testClass%20ifFalseBlockIfTrueReturn%20asString.%0D%09testClass%20value1%3A%201.%0D%09testClass%20value2%3A%202.%0D%09self%20assert%3A%20testClass%20ifFalseBlockIfTrueReturn%20%3D%20testClass%20description%3A%20testClass%20ifFalseBlockIfTrueReturn%20asString"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testIfFalseReturn"), "testIfFalseReturn", function StCompilerTest__testIfFalseReturn(){
const self = this; self['@testClass'].value1_((1));
self['@testClass'].value2_((2));
self.assert_(((nil.is_eqeq_(self['@testClass'].ifFalseReturn(),self['@testClass']))));
self['@testClass'].value1_((2));
self['@testClass'].value2_((1));
self.assert_(((self['@testClass'].ifFalseReturn())._eq("one")));
return self;
}
, "tests inlining", unescape("testIfFalseReturn%0D%09testClass%20value1%3A%201.%0D%09testClass%20value2%3A%202.%0D%09self%20assert%3A%20testClass%20ifFalseReturn%20%3D%3D%20testClass.%0D%09testClass%20value1%3A%202.%0D%09testClass%20value2%3A%201.%0D%09self%20assert%3A%20testClass%20ifFalseReturn%20%3D%20%27one%27"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testIfNilReturn"), "testIfNilReturn", function StCompilerTest__testIfNilReturn(){
const self = this; self['@testClass'].value1_(nil);
self.assert_(((self['@testClass'].ifNilReturn())._eq("one")));
self['@testClass'].value1_((2));
self.assert_(((self['@testClass'].ifNilReturn())._eq(self['@testClass'])));
return self;
}
, "tests inlining", unescape("testIfNilReturn%0D%09testClass%20value1%3A%20nil.%0D%09self%20assert%3A%20testClass%20ifNilReturn%20%3D%20%27one%27.%0D%09testClass%20value1%3A%202.%0D%09self%20assert%3A%20testClass%20ifNilReturn%20%3D%20testClass"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testIfNotNilReturn"), "testIfNotNilReturn", function StCompilerTest__testIfNotNilReturn(){
const self = this; self['@testClass'].value1_(nil);
self.assert_(((self['@testClass'].ifNotNilReturn())._eq(self['@testClass'])));
self['@testClass'].value1_((2));
self.assert_(((self['@testClass'].ifNotNilReturn())._eq("one")));
return self;
}
, "tests inlining", unescape("testIfNotNilReturn%0D%09testClass%20value1%3A%20nil.%0D%09self%20assert%3A%20testClass%20ifNotNilReturn%20%3D%20testClass.%0D%09testClass%20value1%3A%202.%0D%09self%20assert%3A%20testClass%20ifNotNilReturn%20%3D%20%27one%27"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testIfTrueIfFalseReturn"), "testIfTrueIfFalseReturn", function StCompilerTest__testIfTrueIfFalseReturn(){
const self = this; self['@testClass'].value1_((1));
self['@testClass'].value2_((2));
self.assert_(((self['@testClass'].ifTrueIfFalseReturn())._eq(self['@testClass'])));
self['@testClass'].value1_((2));
self['@testClass'].value2_((1));
self.assert_(((self['@testClass'].ifTrueIfFalseReturn())._eq("two")));
return self;
}
, "tests inlining", unescape("testIfTrueIfFalseReturn%0D%09testClass%20value1%3A%201.%0D%09testClass%20value2%3A%202.%0D%09self%20assert%3A%20testClass%20ifTrueIfFalseReturn%20%3D%20testClass.%0D%09testClass%20value1%3A%202.%0D%09testClass%20value2%3A%201.%0D%09self%20assert%3A%20testClass%20ifTrueIfFalseReturn%20%3D%20%27two%27"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testIfTrueReturn"), "testIfTrueReturn", function StCompilerTest__testIfTrueReturn(){
const self = this; self['@testClass'].value1_((1));
self['@testClass'].value2_((2));
self.assert_(((self['@testClass'].ifTrueReturn())._eq("one")));
self['@testClass'].value1_((2));
self['@testClass'].value2_((1));
self.assert_(((nil.is_eqeq_(self['@testClass'].ifTrueReturn(),self['@testClass']))));
return self;
}
, "tests inlining", unescape("testIfTrueReturn%0D%09testClass%20value1%3A%201.%0D%09testClass%20value2%3A%202.%0D%09self%20assert%3A%20testClass%20ifTrueReturn%20%3D%20%27one%27.%0D%09testClass%20value1%3A%202.%0D%09testClass%20value2%3A%201.%0D%09self%20assert%3A%20testClass%20ifTrueReturn%20%3D%3D%20testClass"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testIfTrueReturnIfFalse"), "testIfTrueReturnIfFalse", function StCompilerTest__testIfTrueReturnIfFalse(){
const self = this; self['@testClass'].value1_((1));
self['@testClass'].value2_((2));
self.assert_(((self['@testClass'].ifTrueReturnIfFalse())._eq("one")));
self['@testClass'].value1_((2));
self['@testClass'].value2_((1));
self.assert_(((self['@testClass'].ifTrueReturnIfFalse())._eq(self['@testClass'])));
return self;
}
, "tests inlining", unescape("testIfTrueReturnIfFalse%0D%09testClass%20value1%3A%201.%0D%09testClass%20value2%3A%202.%0D%09self%20assert%3A%20testClass%20ifTrueReturnIfFalse%20%3D%20%27one%27.%0D%09testClass%20value1%3A%202.%0D%09testClass%20value2%3A%201.%0D%09self%20assert%3A%20testClass%20ifTrueReturnIfFalse%20%3D%20testClass"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testInlineIfTrueIfFalse"), "testInlineIfTrueIfFalse", function StCompilerTest__testInlineIfTrueIfFalse(){
const self = this; self['@testClass'].value1_((1));
self['@testClass'].value2_((2));
self.assert_(((self['@testClass'].inlineIfTrueIfFalse())._eq("instVar1")));
self['@testClass'].value1_((2));
self['@testClass'].value2_((1));
self.assert_(((self['@testClass'].inlineIfTrueIfFalse())._eq("instVar2")));
return self;
}
, "tests inlining", unescape("testInlineIfTrueIfFalse%0D%09testClass%20value1%3A%201.%0D%09testClass%20value2%3A%202.%0D%09self%20assert%3A%20testClass%20inlineIfTrueIfFalse%20%3D%20%27instVar1%27.%0D%09testClass%20value1%3A%202.%0D%09testClass%20value2%3A%201.%0D%09self%20assert%3A%20testClass%20inlineIfTrueIfFalse%20%3D%20%27instVar2%27"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testInlineReceiverIfTrueIfFalse"), "testInlineReceiverIfTrueIfFalse", function StCompilerTest__testInlineReceiverIfTrueIfFalse(){
const self = this; self['@testClass'].value1_((1));
self['@testClass'].value2_((2));
self.assert_(((self['@testClass'].inlineReceiverIfTrueIfFalse())._eq("instVar1")));
self['@testClass'].value1_((2));
self['@testClass'].value2_((1));
self.assert_(((self['@testClass'].inlineReceiverIfTrueIfFalse())._eq("instVar2")));
return self;
}
, "tests inlining", unescape("testInlineReceiverIfTrueIfFalse%0D%09testClass%20value1%3A%201.%0D%09testClass%20value2%3A%202.%0D%09self%20assert%3A%20testClass%20inlineReceiverIfTrueIfFalse%20%3D%20%27instVar1%27.%0D%09testClass%20value1%3A%202.%0D%09testClass%20value2%3A%201.%0D%09self%20assert%3A%20testClass%20inlineReceiverIfTrueIfFalse%20%3D%20%27instVar2%27"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testInlineReturnIfTrueIfFalse"), "testInlineReturnIfTrueIfFalse", function StCompilerTest__testInlineReturnIfTrueIfFalse(){
const self = this; self['@testClass'].value1_((1));
self['@testClass'].value2_((2));
self.assert_(((self['@testClass'].inlineReturnIfTrueIfFalse())._eq("instVar1")));
self['@testClass'].value1_((2));
self['@testClass'].value2_((1));
self.assert_(((self['@testClass'].inlineReturnIfTrueIfFalse())._eq("instVar2")));
return self;
}
, "tests inlining", unescape("testInlineReturnIfTrueIfFalse%0D%09testClass%20value1%3A%201.%0D%09testClass%20value2%3A%202.%0D%09self%20assert%3A%20testClass%20inlineReturnIfTrueIfFalse%20%3D%20%27instVar1%27.%0D%09testClass%20value1%3A%202.%0D%09testClass%20value2%3A%201.%0D%09self%20assert%3A%20testClass%20inlineReturnIfTrueIfFalse%20%3D%20%27instVar2%27"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testIsKindOfReturn"), "testIsKindOfReturn", function StCompilerTest__testIsKindOfReturn(){
const self = this; self['@testClass'].value1_((2));
self.assert_(((self['@testClass'].isKindOfReturn()).not()));
self['@testClass'].value1_("two");
self.assert_((self['@testClass'].isKindOfReturn()));
return self;
}
, "tests inlining", unescape("testIsKindOfReturn%0D%09testClass%20value1%3A%202.%0D%09self%20assert%3A%20testClass%20isKindOfReturn%20not.%0D%09testClass%20value1%3A%20%27two%27.%0D%09self%20assert%3A%20testClass%20isKindOfReturn"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testNonLocalReturnIfTrue"), "testNonLocalReturnIfTrue", function StCompilerTest__testNonLocalReturnIfTrue(){
const self = this; self['@testClass'].value1_((1));
self['@testClass'].value2_((2));
self.assert_(((self['@testClass'].nonLocalReturnIfTrue())._eq("one")));
self['@testClass'].value1_((2));
self['@testClass'].value2_((1));
self.assert_(((self['@testClass'].nonLocalReturnIfTrue())._eq(self['@testClass'])));
return self;
}
, "tests inlining", unescape("testNonLocalReturnIfTrue%0D%09testClass%20value1%3A%201.%0D%09testClass%20value2%3A%202.%0D%09self%20assert%3A%20testClass%20nonLocalReturnIfTrue%20%3D%20%27one%27.%0D%09testClass%20value1%3A%202.%0D%09testClass%20value2%3A%201.%0D%09self%20assert%3A%20testClass%20nonLocalReturnIfTrue%20%3D%20testClass"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testReturnIfFalse"), "testReturnIfFalse", function StCompilerTest__testReturnIfFalse(){
const self = this; self['@testClass'].value1_((1));
self['@testClass'].value2_((2));
self.assert_(((self['@testClass'].returnIfFalse())._eq(nil)));
self['@testClass'].value1_((2));
self['@testClass'].value2_((1));
self.assert_(((self['@testClass'].returnIfFalse())._eq("one")));
return self;
}
, "tests inlining", unescape("testReturnIfFalse%0D%09testClass%20value1%3A%201.%0D%09testClass%20value2%3A%202.%0D%09self%20assert%3A%20testClass%20returnIfFalse%20%3D%20nil.%0D%09testClass%20value1%3A%202.%0D%09testClass%20value2%3A%201.%0D%09self%20assert%3A%20testClass%20returnIfFalse%20%3D%20%27one%27"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testReturnIfFalseIfTrue"), "testReturnIfFalseIfTrue", function StCompilerTest__testReturnIfFalseIfTrue(){
const self = this; self['@testClass'].value1_((1));
self['@testClass'].value2_((2));
self.assert_(((self['@testClass'].returnIfFalseIfTrue())._eq("one")));
self['@testClass'].value1_((2));
self['@testClass'].value2_((1));
self.assert_(((self['@testClass'].returnIfFalseIfTrue())._eq("two")));
return self;
}
, "tests inlining", unescape("testReturnIfFalseIfTrue%0D%09testClass%20value1%3A%201.%0D%09testClass%20value2%3A%202.%0D%09self%20assert%3A%20testClass%20returnIfFalseIfTrue%20%3D%20%27one%27.%0D%09testClass%20value1%3A%202.%0D%09testClass%20value2%3A%201.%0D%09self%20assert%3A%20testClass%20returnIfFalseIfTrue%20%3D%20%27two%27"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testReturnIfNil"), "testReturnIfNil", function StCompilerTest__testReturnIfNil(){
const self = this; self['@testClass'].value1_(nil);
self.assert_(((self['@testClass'].returnIfNil())._eq("one")));
self['@testClass'].value1_((2));
self.assert_(((self['@testClass'].returnIfNil())._eq((2))));
return self;
}
, "tests inlining", unescape("testReturnIfNil%0D%09testClass%20value1%3A%20nil.%0D%09self%20assert%3A%20testClass%20returnIfNil%20%3D%20%27one%27.%0D%09testClass%20value1%3A%202.%0D%09self%20assert%3A%20testClass%20returnIfNil%20%3D%202"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testReturnIfNilIfNotNil"), "testReturnIfNilIfNotNil", function StCompilerTest__testReturnIfNilIfNotNil(){
const self = this; self.assert_description_(((self['@testClass'].ifNilIfNotNilReturn())._eq("one")),"should be nil");
self['@testClass'].value1_((2));
self.assert_description_(((self['@testClass'].ifNilIfNotNilReturn())._eq("two")),("should be not nil:"._comma((self['@testClass'].ifNilIfNotNilReturn()))));
return self;
}
, "tests inlining", unescape("testReturnIfNilIfNotNil%0D%09self%20assert%3A%20testClass%20ifNilIfNotNilReturn%20%3D%20%27one%27%20description%3A%20%27should%20be%20nil%27.%0D%09testClass%20value1%3A%202.%0D%09self%20assert%3A%20testClass%20ifNilIfNotNilReturn%20%3D%20%27two%27%20description%3A%20%20%27should%20be%20not%20nil%3A%27%20%2C%20testClass%20ifNilIfNotNilReturn"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testReturnIfNotNil"), "testReturnIfNotNil", function StCompilerTest__testReturnIfNotNil(){
const self = this; self.assert_(((self['@testClass'].returnIfNotNil())._eq(nil)));
self['@testClass'].value1_(nil);
self.assert_(((nil.isNil_(self['@testClass'].returnIfNotNil()))));
self['@testClass'].value1_((2));
self.assert_(((self['@testClass'].returnIfNotNil())._eq("one")));
return self;
}
, "tests inlining", unescape("testReturnIfNotNil%0D%09self%20assert%3A%20testClass%20returnIfNotNil%20%3D%20nil.%0D%09testClass%20value1%3A%20nil.%0D%09self%20assert%3A%20testClass%20returnIfNotNil%20isNil.%0D%09testClass%20value1%3A%202.%0D%09self%20assert%3A%20testClass%20returnIfNotNil%20%3D%20%27one%27"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testReturnIfNotNilIfNil"), "testReturnIfNotNilIfNil", function StCompilerTest__testReturnIfNotNilIfNil(){
const self = this; self.assert_(((self['@testClass'].ifNotNilIfNilReturn())._eq("two")));
self['@testClass'].value1_((2));
self.assert_(((self['@testClass'].ifNotNilIfNilReturn())._eq("one")));
return self;
}
, "tests inlining", unescape("testReturnIfNotNilIfNil%0D%09self%20assert%3A%20testClass%20ifNotNilIfNilReturn%20%3D%20%27two%27.%0D%09testClass%20value1%3A%202.%0D%09self%20assert%3A%20testClass%20ifNotNilIfNilReturn%20%3D%20%27one%27"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testReturnIfTrue"), "testReturnIfTrue", function StCompilerTest__testReturnIfTrue(){
const self = this; self['@testClass'].value1_((1));
self['@testClass'].value2_((2));
self.assert_(((self['@testClass'].returnIfTrue())._eq("one")));
self['@testClass'].value1_((2));
self['@testClass'].value2_((1));
self.assert_(((self['@testClass'].returnIfTrue())._eq(nil)));
return self;
}
, "tests inlining", unescape("testReturnIfTrue%0D%09testClass%20value1%3A%201.%0D%09testClass%20value2%3A%202.%0D%09self%20assert%3A%20testClass%20returnIfTrue%20%3D%20%27one%27.%0D%09testClass%20value1%3A%202.%0D%09testClass%20value2%3A%201.%0D%09self%20assert%3A%20testClass%20returnIfTrue%20%3D%20nil"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testReturnIfTrueIfFalse"), "testReturnIfTrueIfFalse", function StCompilerTest__testReturnIfTrueIfFalse(){
const self = this; self['@testClass'].value1_((1));
self['@testClass'].value2_((2));
self.assert_(((self['@testClass'].returnIfTrueIfFalse())._eq("one")));
self['@testClass'].value1_((2));
self['@testClass'].value2_((1));
self.assert_(((self['@testClass'].returnIfTrueIfFalse())._eq("two")));
return self;
}
, "tests inlining", unescape("testReturnIfTrueIfFalse%0D%09testClass%20value1%3A%201.%0D%09testClass%20value2%3A%202.%0D%09self%20assert%3A%20testClass%20returnIfTrueIfFalse%20%3D%20%27one%27.%0D%09testClass%20value1%3A%202.%0D%09testClass%20value2%3A%201.%0D%09self%20assert%3A%20testClass%20returnIfTrueIfFalse%20%3D%20%27two%27"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testAsJavascript"), "testAsJavascript", function StCompilerTest__testAsJavascript(){
var stString = nil;
var jsString = nil;
const self = this; stString=" .0123456789:ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
jsString=stString.asJavascript();
stString=(unescape("%22")._comma(stString))._comma(unescape("%22"));
self.assert_description_(((jsString.size())._eq((stString.size()))),jsString);
self.assert_description_(((jsString.unescaped())._eq(stString)),(jsString.unescaped()));
stString=unescape("%2521%2522%2523%2524%2525%2526%2527%2528%2529%252C%253B%253C%253D%253E%253F%255B%255C%255D%255E%2560%257B%257C%257D").unescaped();
jsString=stString.asJavascript();
self.assert_description_(((jsString.size())._eq((((stString.size())._star((3)))._plus((12))))),(stString._comma(jsString)));
return self;
}
, "tests", unescape("testAsJavascript%0D%09%7C%20stString%20jsString%20%7C%0D%09stString%20%3A%3D%20%27%20.0123456789%3AABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz%27.%0D%09jsString%20%3A%3D%20stString%20asJavascript.%0D%09stString%20%3A%3D%20%27%22%27%20%2C%20stString%20%2C%20%27%22%27.%0D%09self%20assert%3A%20jsString%20size%20%3D%20stString%20size%20description%3A%20jsString.%0D%09self%20assert%3A%20jsString%20unescaped%20%3D%20stString%20description%3A%20jsString%20unescaped.%0D%0D%09%22%20%27*+-/@%27%20is%20not%20escaped%20in%20javascript%2C%20but%20not%20included%20in%20the%20escape%20test%20regex.%0D%09Consistency%20is%20a%20wonderful%20thing%22%0D%09stString%20%3A%3D%20%27%2521%2522%2523%2524%2525%2526%2527%2528%2529%252C%253B%253C%253D%253E%253F%255B%255C%255D%255E%2560%257B%257C%257D%27%20unescaped.%0D%09jsString%20%3A%3D%20stString%20asJavascript.%0D%09self%20assert%3A%20jsString%20size%20%3D%20%28stString%20size%20*%203%20+%2012%29%20description%3A%20stString%20%2C%20jsString"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testBasicAtIfAbsentReturn"), "testBasicAtIfAbsentReturn", function StCompilerTest__testBasicAtIfAbsentReturn(){
const self = this; self['@testClass'].value1_("one");
self.assert_(((self['@testClass'].basicAtIfAbsentReturn())._eq("one")));
return self;
}
, "tests", unescape("testBasicAtIfAbsentReturn%0D%09testClass%20value1%3A%20%27one%27.%0D%09self%20assert%3A%20testClass%20basicAtIfAbsentReturn%20%3D%20%27one%27"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testBasicAtPut"), "testBasicAtPut", function StCompilerTest__testBasicAtPut(){
const self = this; self.assert_(((nil.isNil_(self['@testClass'].value2()))));
self['@testClass'].value1_((5));
self['@testClass'].basicAtPut();
self.assert_(((self['@testClass'].value2())._eq((5))));
return self;
}
, "tests", unescape("testBasicAtPut%0D%09self%20assert%3A%20testClass%20value2%20isNil.%0D%09testClass%20value1%3A%205.%0D%09testClass%20basicAtPut.%0D%09self%20assert%3A%20testClass%20value2%20%3D%205"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testBasicAtReturn"), "testBasicAtReturn", function StCompilerTest__testBasicAtReturn(){
const self = this; self.assert_(((nil.isNil_(self['@testClass'].basicAtReturn()))));
self['@testClass'].value2_((5));
self.assert_(((self['@testClass'].basicAtReturn())._eq((5))));
return self;
}
, "tests", unescape("testBasicAtReturn%0D%09self%20assert%3A%20testClass%20basicAtReturn%20isNil.%0D%09testClass%20value2%3A%205.%0D%09self%20assert%3A%20testClass%20basicAtReturn%20%3D%205"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testBasicAtVariableIfAbsentReturn"), "testBasicAtVariableIfAbsentReturn", function StCompilerTest__testBasicAtVariableIfAbsentReturn(){
const self = this; self.assert_(((self['@testClass'].basicAtVariableIfAbsentReturn())._eq("one")));
self['@testClass'].value1_(unescape("@value2"));
self['@testClass'].value2_((5));
self.assert_(((self['@testClass'].basicAtVariableIfAbsentReturn())._eq((5))));
return self;
}
, "tests", unescape("testBasicAtVariableIfAbsentReturn%0D%09self%20assert%3A%20testClass%20basicAtVariableIfAbsentReturn%20%3D%20%27one%27.%0D%09testClass%20value1%3A%20%27@value2%27.%0D%09testClass%20value2%3A%205.%0D%09self%20assert%3A%20testClass%20basicAtVariableIfAbsentReturn%20%3D%205"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testBasicAtVariableReturn"), "testBasicAtVariableReturn", function StCompilerTest__testBasicAtVariableReturn(){
const self = this; self['@testClass'].value1_(unescape("@value2"));
self['@testClass'].value2_((5));
self.assert_(((self['@testClass'].basicAtVariableReturn())._eq((5))));
self['@testClass'].value1_(unescape("@value42"));
self.assert_(((nil.isNil_(self['@testClass'].basicAtVariableReturn()))));
return self;
}
, "tests", unescape("testBasicAtVariableReturn%0D%09testClass%20value1%3A%20%27@value2%27.%0D%09testClass%20value2%3A%205.%0D%09self%20assert%3A%20testClass%20basicAtVariableReturn%20%3D%205.%0D%09testClass%20value1%3A%20%27@value42%27.%0D%09self%20assert%3A%20testClass%20basicAtVariableReturn%20isNil"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testBinaryBinaryReturn"), "testBinaryBinaryReturn", function StCompilerTest__testBinaryBinaryReturn(){
const self = this; self.assert_(((self['@testClass'].binaryBinaryReturn())._eq((0))));
return self;
}
, "tests", unescape("testBinaryBinaryReturn%0D%09self%20assert%3A%20testClass%20binaryBinaryReturn%20%3D%200"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testBinaryBracedReturn"), "testBinaryBracedReturn", function StCompilerTest__testBinaryBracedReturn(){
const self = this; self.assert_(((self['@testClass'].binaryBracedReturn())._eq((7))));
return self;
}
, "tests", unescape("testBinaryBracedReturn%0D%09self%20assert%3A%20testClass%20binaryBracedReturn%20%3D%207"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testBinaryReturn"), "testBinaryReturn", function StCompilerTest__testBinaryReturn(){
const self = this; self.assert_(((self['@testClass'].binaryReturn())._eq((3))));
return self;
}
, "tests", unescape("testBinaryReturn%0D%09self%20assert%3A%20testClass%20binaryReturn%20%3D%203"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testBindSmalltalkClassName"), "testBindSmalltalkClassName", function StCompilerTest__testBindSmalltalkClassName(){
var result = nil;
const self = this; result=(self['@testClass'].bindSmalltalkClassName()).asString();
self.assert_description_((result._eq("StCompilerTestClass")),result);
return self;
}
, "tests", unescape("testBindSmalltalkClassName%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%20testClass%20bindSmalltalkClassName%20asString.%0D%09self%20assert%3A%20result%20%3D%20%27StCompilerTestClass%27%20description%3A%20result"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testCascadeKeywordReturn"), "testCascadeKeywordReturn", function StCompilerTest__testCascadeKeywordReturn(){
var collection = nil;
const self = this; collection=smalltalk.OrderedCollection.$$new();
self['@testClass'].value1_(collection);
self.assert_(((self['@testClass'].cascadeKeywordReturn())._eq((2))));
self.assert_(((collection.at_((1)))._eq((1))));
self.assert_(((collection.at_((2)))._eq((2))));
return self;
}
, "tests", unescape("testCascadeKeywordReturn%0D%09%7C%20collection%20%7C%0D%09collection%20%3A%3D%20OrderedCollection%20new.%0D%09testClass%20value1%3A%20collection.%0D%09self%20assert%3A%20testClass%20cascadeKeywordReturn%20%3D%202.%0D%09self%20assert%3A%20%28collection%20at%3A%201%29%20%3D%201.%0D%09self%20assert%3A%20%28collection%20at%3A%202%29%20%3D%202"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testCascadeKeywordReturnYourself"), "testCascadeKeywordReturnYourself", function StCompilerTest__testCascadeKeywordReturnYourself(){
var collection = nil;
var result = nil;
const self = this; collection=smalltalk.OrderedCollection.$$new();
self['@testClass'].value1_(collection);
result=self['@testClass'].cascadeKeywordReturnYourself();
self.assert_(((nil.is_eqeq_(result,collection))));
self.assert_(((result.at_((1)))._eq((1))));
self.assert_(((result.at_((2)))._eq((2))));
return self;
}
, "tests", unescape("testCascadeKeywordReturnYourself%0D%09%7C%20collection%20result%20%7C%0D%09collection%20%3A%3D%20OrderedCollection%20new.%0D%09testClass%20value1%3A%20collection.%0D%09result%20%3A%3D%20testClass%20cascadeKeywordReturnYourself.%0D%09self%20assert%3A%20result%20%3D%3D%20collection.%0D%09self%20assert%3A%20%28result%20at%3A%201%29%20%3D%201.%0D%09self%20assert%3A%20%28result%20at%3A%202%29%20%3D%202"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testCascadeLiteralReturn"), "testCascadeLiteralReturn", function StCompilerTest__testCascadeLiteralReturn(){
const self = this; self.assert_(((self['@testClass'].cascadeLiteralReturn()).not()));
return self;
}
, "tests", unescape("testCascadeLiteralReturn%0D%09self%20assert%3A%20testClass%20cascadeLiteralReturn%20not"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testCascadeUnaryReturn"), "testCascadeUnaryReturn", function StCompilerTest__testCascadeUnaryReturn(){
const self = this; self['@testClass'].value1_((3));
self.assert_(((self['@testClass'].cascadeUnaryReturn())._eq((3))));
self['@testClass'].value1_("one");
self.assert_(((self['@testClass'].cascadeUnaryReturn())._eq("one")));
return self;
}
, "tests", unescape("testCascadeUnaryReturn%0D%09testClass%20value1%3A%203.%0D%09self%20assert%3A%20testClass%20cascadeUnaryReturn%20%3D%203.%0D%09testClass%20value1%3A%20%27one%27.%0D%09self%20assert%3A%20testClass%20cascadeUnaryReturn%20%3D%20%27one%27"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testEmptyMethod"), "testEmptyMethod", function StCompilerTest__testEmptyMethod(){
const self = this; self.assert_(((nil.isNil_(self['@testClass'])===false)));
self.assert_(((nil.is_eqeq_(self['@testClass'].emptyMethod(),self['@testClass']))));
return self;
}
, "tests", unescape("testEmptyMethod%0D%09self%20assert%3A%20testClass%20notNil.%0D%09self%20assert%3A%20testClass%20emptyMethod%20%3D%3D%20testClass"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testKeywordReturn"), "testKeywordReturn", function StCompilerTest__testKeywordReturn(){
const self = this; self.assert_(((self['@testClass'].keywordMethodReturn_((1)))._eq((1))));
return self;
}
, "tests", unescape("testKeywordReturn%0D%09self%20assert%3A%20%28testClass%20keywordMethodReturn%3A%201%29%20%3D%201"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testKeywordReturnWith"), "testKeywordReturnWith", function StCompilerTest__testKeywordReturnWith(){
const self = this; self.assert_(((self['@testClass'].keywordMethodReturn_with_((1),(2)))._eq((2))));
return self;
}
, "tests", unescape("testKeywordReturnWith%0D%09self%20assert%3A%20%28testClass%20keywordMethodReturn%3A%201%20with%3A%202%29%20%3D%202"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testKeywordReturnWithWith"), "testKeywordReturnWithWith", function StCompilerTest__testKeywordReturnWithWith(){
const self = this; self.assert_(((self['@testClass'].keywordMethodReturn_with_with_((1),(2),(3)))._eq((3))));
return self;
}
, "tests", unescape("testKeywordReturnWithWith%0D%09self%20assert%3A%20%28testClass%20keywordMethodReturn%3A%201%20with%3A%202%20with%3A%203%29%20%3D%203"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testLiteralArrayWithBoolean"), "testLiteralArrayWithBoolean", function StCompilerTest__testLiteralArrayWithBoolean(){
var array = nil;
const self = this; array=self['@testClass'].literalArrayWithBoolean();
self.assert_(((array.size())._eq((3))));
self.assert_((array.at_((1))));
self.deny_((array.at_((2))));
self.assert_((array.at_((3))));
return self;
}
, "tests", unescape("testLiteralArrayWithBoolean%0D%09%7C%20array%20%7C%0D%09array%20%3A%3D%20testClass%20literalArrayWithBoolean.%0D%09self%20assert%3A%20array%20size%20%3D%203.%0D%09self%20assert%3A%20%28array%20at%3A%201%29.%0D%09self%20deny%3A%20%28array%20at%3A%202%29.%0D%09self%20assert%3A%20%28array%20at%3A%203%29.%0D"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testLiteralArrayWithCharacters"), "testLiteralArrayWithCharacters", function StCompilerTest__testLiteralArrayWithCharacters(){
var array = nil;
const self = this; array=self['@testClass'].literalArrayWithCharacters();
self.assert_(((array.size())._eq((3))));
self.assert_(((array.at_((1)))._eq("a")));
self.assert_(((array.at_((2)))._eq("b")));
self.assert_(((array.at_((3)))._eq("c")));
return self;
}
, "tests", unescape("testLiteralArrayWithCharacters%0D%09%7C%20array%20%7C%0D%09array%20%3A%3D%20testClass%20literalArrayWithCharacters.%0D%09self%20assert%3A%20array%20size%20%3D%203.%0D%09self%20assert%3A%20%28array%20at%3A%201%29%20%3D%20%24a.%0D%09self%20assert%3A%20%28array%20at%3A%202%29%20%3D%20%24b.%0D%09self%20assert%3A%20%28array%20at%3A%203%29%20%3D%20%24c.%0D"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testLiteralArrayWithNil"), "testLiteralArrayWithNil", function StCompilerTest__testLiteralArrayWithNil(){
var array = nil;
const self = this; array=self['@testClass'].literalArrayWithNil();
self.assert_(((array.size())._eq((3))));
self.assert_(((nil.isNil_(array.at_((1))))));
self.assert_(((nil.isNil_(array.at_((2))))));
self.assert_(((nil.isNil_(array.at_((3))))));
return self;
}
, "tests", unescape("testLiteralArrayWithNil%0D%09%7C%20array%20%7C%0D%09array%20%3A%3D%20testClass%20literalArrayWithNil.%0D%09self%20assert%3A%20array%20size%20%3D%203.%0D%09self%20assert%3A%20%28array%20at%3A%201%29%20isNil.%0D%09self%20assert%3A%20%28array%20at%3A%202%29%20isNil.%0D%09self%20assert%3A%20%28array%20at%3A%203%29%20isNil.%0D"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testLiteralArrayWithNumbers"), "testLiteralArrayWithNumbers", function StCompilerTest__testLiteralArrayWithNumbers(){
var array = nil;
const self = this; array=self['@testClass'].literalArrayWithNumbers();
self.assert_(((array.size())._eq((5))));
self.assert_(((array.at_((1)))._eq((42))));
self.assert_(((array.at_((2)))._eq((-42))));
self.assert_(((array.at_((3)))._eq((123.45))));
self.assert_(((array.at_((4)))._eq((146))));
self.assert_(((array.at_((5)))._eq((40960))));
return self;
}
, "tests", unescape("testLiteralArrayWithNumbers%0D%09%7C%20array%20%7C%0D%09array%20%3A%3D%20testClass%20literalArrayWithNumbers.%0D%09self%20assert%3A%20array%20size%20%3D%205.%0D%09self%20assert%3A%20%28array%20at%3A%201%29%20%3D%2042.%0D%09self%20assert%3A%20%28array%20at%3A%202%29%20%3D%20-42.%0D%09self%20assert%3A%20%28array%20at%3A%203%29%20%3D%20123.45.%0D%09%22disabled%20self%20assert%3A%20%28array%20at%3A%204%29%20%3D%20123.45.%22%20%221.2345e2%22%0D%09self%20assert%3A%20%28array%20at%3A%204%29%20%3D%20146.%20%222r10010010%22%0D%09self%20assert%3A%20%28array%20at%3A%205%29%20%3D%2040960.%20%2216rA000%22%0D%09"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testLiteralArrayWithStrings"), "testLiteralArrayWithStrings", function StCompilerTest__testLiteralArrayWithStrings(){
var array = nil;
const self = this; array=self['@testClass'].literalArrayWithStrings();
self.assert_(((array.size())._eq((3))));
self.assert_(((array.at_((1)))._eq("1")));
self.assert_(((array.at_((2)))._eq("2")));
self.assert_(((array.at_((3)))._eq("3")));
return self;
}
, "tests", unescape("testLiteralArrayWithStrings%0D%09%7C%20array%20%7C%0D%09array%20%3A%3D%20testClass%20literalArrayWithStrings.%0D%09self%20assert%3A%20array%20size%20%3D%203.%0D%09self%20assert%3A%20%28array%20at%3A%201%29%20%3D%20%271%27.%0D%09self%20assert%3A%20%28array%20at%3A%202%29%20%3D%20%272%27.%0D%09self%20assert%3A%20%28array%20at%3A%203%29%20%3D%20%273%27.%0D"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testLiteralCRString"), "testLiteralCRString", function StCompilerTest__testLiteralCRString(){
var string = nil;
const self = this; string=self['@testClass'].literalCRString();
self.assert_description_(((string.size())._eq((11))),string);
self.assert_description_((string._eq((unescape("hello%250Dworld").unescaped()))),string);
return self;
}
, "tests", unescape("testLiteralCRString%0D%0D%09%7C%20string%20%7C%0D%09string%20%3A%3D%20testClass%20literalCRString.%0D%09self%20assert%3A%20string%20size%20%3D%2011%20description%3A%20string.%0D%09self%20assert%3A%20string%20%3D%20%27hello%250Dworld%27%20unescaped%20description%3A%20string"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testLiteralCharacter"), "testLiteralCharacter", function StCompilerTest__testLiteralCharacter(){
var $$char = nil;
const self = this; $$char=self['@testClass'].literalCharacter();
self.assert_((($$char.asciiValue())._eq((97))));
return self;
}
, "tests", unescape("testLiteralCharacter%0D%09%7C%20char%20%7C%0D%09char%20%3A%3D%20testClass%20literalCharacter.%0D%09self%20assert%3A%20char%20asciiValue%20%3D%2097"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testLiteralFalse"), "testLiteralFalse", function StCompilerTest__testLiteralFalse(){
const self = this; self.assert_(((self['@testClass'].literalFalse()).not()));
return self;
}
, "tests", unescape("testLiteralFalse%0D%09self%20assert%3A%20testClass%20literalFalse%20not"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testLiteralSelf"), "testLiteralSelf", function StCompilerTest__testLiteralSelf(){
const self = this; self.assert_(((nil.is_eqeq_(self['@testClass'].literalSelf(),self['@testClass']))));
return self;
}
, "tests", unescape("testLiteralSelf%0D%09self%20assert%3A%20testClass%20literalSelf%20%3D%3D%20testClass"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testLiteralString"), "testLiteralString", function StCompilerTest__testLiteralString(){
var string = nil;
const self = this; string=self['@testClass'].literalString();
self.assert_description_(((string.size())._eq((11))),string);
self.assert_description_((string._eq("hello world")),string);
return self;
}
, "tests", unescape("testLiteralString%0D%09%7C%20string%20%7C%0D%09string%20%3A%3D%20testClass%20literalString.%0D%09self%20assert%3A%20string%20size%20%3D%2011%20description%3A%20string.%0D%09self%20assert%3A%20string%20%3D%20%27hello%20world%27%20description%3A%20string"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testLiteralSymbol"), "testLiteralSymbol", function StCompilerTest__testLiteralSymbol(){
const self = this; self.assert_(((nil.is_eqeq_(self['@testClass'].literalSymbol(),"symbolic"))));
return self;
}
, "tests", unescape("testLiteralSymbol%0D%09self%20assert%3A%20testClass%20literalSymbol%20%3D%3D%20%23symbolic"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testLiteralTrue"), "testLiteralTrue", function StCompilerTest__testLiteralTrue(){
const self = this; self.assert_((self['@testClass'].literalTrue()));
return self;
}
, "tests", unescape("testLiteralTrue%0D%09self%20assert%3A%20testClass%20literalTrue"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testUnaryReturn"), "testUnaryReturn", function StCompilerTest__testUnaryReturn(){
const self = this; self.assert_(((self['@testClass'].unaryReturn())._eq((3))));
return self;
}
, "tests", unescape("testUnaryReturn%0D%09self%20assert%3A%20testClass%20unaryReturn%20%3D%203"));
smalltalk.bind(smalltalk.StCompilerTest, unescape("testUnaryUnaryReturn"), "testUnaryUnaryReturn", function StCompilerTest__testUnaryUnaryReturn(){
const self = this; self.assert_(((self['@testClass'].unaryUnaryReturn()).not()));
return self;
}
, "tests", unescape("testUnaryUnaryReturn%0D%09self%20assert%3A%20testClass%20unaryUnaryReturn%20not"));
