smalltalk.addClass("StringTestCase", smalltalk.TestCase, [], 'nil');
smalltalk.StringTestCase.$classVariableNames=("");
smalltalk.bind(smalltalk.StringTestCase, unescape("testFromString"), "testFromString", function StringTestCase__testFromString(){
const self = this; self.assert_equals_((smalltalk.String.fromString_(unescape("hello%2C%20world%21"))),unescape("hello%2C%20world%21"));
self.assert_equals_((smalltalk.String.fromString_("")),"");
self.should_raise_((function StringTestCase__(){
return smalltalk.String.fromString_((12345));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testFromString%0D%0D%09self%20%0D%09%09assert%3A%20%28String%20fromString%3A%20%27hello%2C%20world%21%27%29%0D%09%09equals%3A%20%27hello%2C%20world%21%27.%0D%09self%0D%09%09assert%3A%20%28String%20fromString%3A%20%27%27%29%0D%09%09equals%3A%20%27%27.%0D%09self%0D%09%09should%3A%20%5B%28String%20fromString%3A%2012345%29%5D%0D%09%09raise%3A%20Error.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testCR"), "testCR", function StringTestCase__testCR(){
const self = this; self.assert_equals_((smalltalk.String.cr()),(smalltalk.String.fromCharCode_((13))));
return self;
}
, "running", unescape("testCR%0D%0D%09self%0D%09%09assert%3A%20String%20cr%0D%09%09equals%3A%20%28String%20fromCharCode%3A%2013%29.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testLF"), "testLF", function StringTestCase__testLF(){
const self = this; self.assert_equals_((smalltalk.String.lf()),(smalltalk.String.fromCharCode_((10))));
return self;
}
, "running", unescape("testLF%0D%0D%09self%0D%09%09assert%3A%20String%20lf%0D%09%09equals%3A%20%28String%20fromCharCode%3A%2010%29.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testCRLF"), "testCRLF", function StringTestCase__testCRLF(){
const self = this; self.assert_equals_((smalltalk.String.crlf()),((smalltalk.String.fromCharCode_((13)))._comma((smalltalk.String.fromCharCode_((10))))));
return self;
}
, "running", unescape("testCRLF%0D%0D%09self%0D%09%09assert%3A%20String%20crlf%0D%09%09equals%3A%20%28%28String%20fromCharCode%3A13%29%2C%28String%20fromCharCode%3A10%29%29.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testSpace"), "testSpace", function StringTestCase__testSpace(){
const self = this; self.assert_equals_((smalltalk.String.space()),(smalltalk.String.fromCharCode_((32))));
return self;
}
, "running", unescape("testSpace%0D%0D%09self%0D%09%09assert%3A%20String%20space%0D%09%09equals%3A%20%28String%20fromCharCode%3A%2032%29.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testTab"), "testTab", function StringTestCase__testTab(){
const self = this; self.assert_equals_((smalltalk.String.tab()),(smalltalk.String.fromCharCode_((9))));
return self;
}
, "running", unescape("testTab%0D%0D%09self%0D%09%09assert%3A%20String%20tab%0D%09%09equals%3A%20%28String%20fromCharCode%3A%209%29.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testSize"), "testSize", function StringTestCase__testSize(){
const self = this; self.assert_equals_(("123456789".size()),(9));
self.assert_equals_(("".size()),(0));
return self;
}
, "running", unescape("testSize%0D%0D%09self%0D%09%09assert%3A%20%27123456789%27%20size%0D%09%09equals%3A%209.%0D%09self%0D%09%09assert%3A%20%27%27%20size%0D%09%09equals%3A%200.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testAt"), "testAt", function StringTestCase__testAt(){
const self = this; self.assert_equals_(("123456789".at_((6))),"6");
self.should_raise_((function StringTestCase__(){
return "".at_((1));
}
),smalltalk.Error);
self.should_raise_((function StringTestCase__(){
return "12345".at_((2.5));
}
),smalltalk.Error);
self.should_raise_((function StringTestCase__(){
return "12345".at_((-2));
}
),smalltalk.Error);
self.should_raise_((function StringTestCase__(){
return "12345".at_("one");
}
),smalltalk.Error);
return self;
}
, "running", unescape("testAt%0D%0D%09self%0D%09%09assert%3A%20%28%27123456789%27%20at%3A%206%29%0D%09%09equals%3A%20%276%27.%0D%09self%0D%09%09should%3A%20%5B%28%27%27%20at%3A%201%29%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09should%3A%20%5B%28%2712345%27%20at%3A%202.5%29%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09should%3A%20%5B%28%2712345%27%29%20at%3A%20-2%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09should%3A%20%5B%28%2712345%27%20at%3A%20%27one%27%29%5D%0D%09%09raise%3A%20Error.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testEquals"), "testEquals", function StringTestCase__testEquals(){
var nonStrings = nil;
const self = this; nonStrings=[(1), true, false, [], [(1)], nil];
nonStrings.do_((function StringTestCase__(each){
return self.deny_((each._eq("1")));
}
));
self.assert_((unescape("Hello%20World%21")._eq(unescape("Hello%20World%21"))));
self.deny_((unescape("Hello%20World%21")._eq(unescape("HelloWorld%21"))));
self.assert_((unescape("Hello%20World%21")._eq(("Hello "._comma(unescape("World%21"))))));
return self;
}
, "running", unescape("testEquals%0D%0D%09%7C%20nonStrings%20%7C%0D%09nonStrings%20%3A%3D%20%23%281%20true%20false%20%23%28%29%20%23%281%29%20nil%29.%0D%09nonStrings%20do%3A%5B%20%3Aeach%20%7C%20self%20deny%3A%20each%20%3D%20%271%27%20%5D.%0D%09self%20assert%3A%20%27Hello%20World%21%27%20%3D%20%27Hello%20World%21%27.%0D%09self%20deny%3A%20%27Hello%20World%21%27%20%3D%20%27HelloWorld%21%27.%0D%09self%20assert%3A%20%27Hello%20World%21%27%20%3D%20%28%27Hello%20%27%2C%27World%21%27%29.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testDo"), "testDo", function StringTestCase__testDo(){
var result = nil;
const self = this; result="";
unescape("hello%20world%21").do_((function StringTestCase__(each){
return result=result._comma(each);
}
));
self.assert_equals_(result,unescape("hello%20world%21"));
self.should_raise_((function StringTestCase__(){
return "123".do_((3));
}
),smalltalk.Error);
self.should_raise_((function StringTestCase__(){
return "123".do_((function StringTestCase__(x,y){
return x._plus(y);
}
));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testDo%0D%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%20%27%27.%0D%09%27hello%20world%21%27%20do%3A%5B%20%3Aeach%20%7C%20result%20%3A%3D%20result%2Ceach%5D.%0D%09self%0D%09%09assert%3A%20result%0D%09%09equals%3A%20%27hello%20world%21%27.%0D%09self%0D%09%09should%3A%20%5B%27123%27%20do%3A%203%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09should%3A%20%5B%27123%27%20do%3A%20%5B%3Ax%20%3Ay%20%7C%20x%20+%20y%5D%5D%0D%09%09raise%3A%20Error.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testDetectIfNone"), "testDetectIfNone", function StringTestCase__testDetectIfNone(){
var alphabet = nil;
var alphabetWithoutE = nil;
var result = nil;
const self = this; alphabet="abcdefghijklmnopqrstuvwxyz";
alphabetWithoutE="abcdfghijklmnopqrstuvwxyz";
result=true;
alphabet.detect_ifNone_((function StringTestCase__(each){
return each._eq("e");
}
),(function StringTestCase__(){
return result=false;
}
));
self.assert_(result);
alphabetWithoutE.detect_ifNone_((function StringTestCase__(each){
return each._eq("e");
}
),(function StringTestCase__(){
return result=false;
}
));
self.deny_(result);
self.should_raise_((function StringTestCase__(){
return alphabet.detect_ifNone_((function StringTestCase__(each){
return each._eq("e");
}
),false);
}
),smalltalk.Error);
self.should_raise_((function StringTestCase__(){
return alphabet.detect_ifNone_(false,(function StringTestCase__(){
return result=false;
}
));
}
),smalltalk.Error);
self.should_raise_((function StringTestCase__(){
return alphabet.detect_ifNone_((function StringTestCase__(each,each2){
return each._gt(each2);
}
),(function StringTestCase__(){
return false;
}
));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testDetectIfNone%0D%0D%09%7C%20alphabet%20alphabetWithoutE%20result%7C%0D%09alphabet%20%3A%3D%20%27abcdefghijklmnopqrstuvwxyz%27.%0D%09alphabetWithoutE%20%20%3A%3D%20%27abcdfghijklmnopqrstuvwxyz%27.%0D%09result%20%3A%3D%20true.%0D%09alphabet%20detect%3A%5B%20%3Aeach%20%7C%20each%20%3D%20%27e%27%5D%20ifNone%3A%20%5Bresult%20%3A%3D%20false%5D.%0D%09self%20assert%3A%20result.%0D%09alphabetWithoutE%20detect%3A%5B%20%3Aeach%20%7C%20each%20%3D%20%27e%27%5D%20ifNone%3A%20%5Bresult%20%3A%3D%20false%5D.%0D%09self%20deny%3A%20result.%0D%09self%0D%09%09should%3A%20%5Balphabet%20detect%3A%20%5B%3Aeach%20%7C%20each%20%3D%20%27e%27%5D%20ifNone%3A%20false%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09should%3A%20%5Balphabet%20detect%3A%20false%20ifNone%3A%20%5Bresult%20%3A%3D%20false%5D%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09should%3A%20%5Balphabet%20detect%3A%20%5B%3Aeach%20%3Aeach2%20%7C%20each%20%3E%20each2%5D%20ifNone%3A%20%5Bfalse%5D%5D%0D%09%09raise%3A%20Error.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testEscape"), "testEscape", function StringTestCase__testEscape(){
const self = this; self.assert_equals_((unescape("%21").escaped()),unescape("%2521"));
self.assert_equals_((unescape("%u0107").escaped()),unescape("%25u0107"));
return self;
}
, "running", unescape("testEscape%0D%0D%09self%0D%09%09assert%3A%20%27%21%27%20escaped%0D%09%09equals%3A%20%27%2521%27.%0D%09self%0D%09%09assert%3A%20%27%u0107%27%20escaped%0D%09%09equals%3A%20%27%25u0107%27.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testUnescape"), "testUnescape", function StringTestCase__testUnescape(){
const self = this; self.assert_equals_((unescape("%2521").unescaped()),unescape("%21"));
self.assert_equals_((unescape("%25u0107").unescaped()),unescape("%u0107"));
return self;
}
, "running", unescape("testUnescape%0D%0D%09self%0D%09%09assert%3A%20%27%2521%27%20unescaped%0D%09%09equals%3A%20%27%21%27.%0D%09self%0D%09%09assert%3A%20%27%25u0107%27%20unescaped%0D%09%09equals%3A%20%27%u0107%27.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testAsEncodedURI"), "testAsEncodedURI", function StringTestCase__testAsEncodedURI(){
const self = this; self.assert_equals_((unescape("%3Fx%3Dtest").asEncodedURI()),unescape("%253Fx%253Dtest"));
self.assert_equals_((unescape("%3Fx%3D%u0448%u0435%u043B%u043B%u044B").asEncodedURI()),unescape("%253Fx%253D%25D1%2588%25D0%25B5%25D0%25BB%25D0%25BB%25D1%258B"));
return self;
}
, "running", unescape("testAsEncodedURI%0D%0D%09self%0D%09%09assert%3A%20%27%3Fx%3Dtest%27%20asEncodedURI%0D%09%09equals%3A%20%27%253Fx%253Dtest%27.%0D%09self%0D%09%09assert%3A%20%27%3Fx%3D%u0448%u0435%u043B%u043B%u044B%27%20asEncodedURI%0D%09%09equals%3A%20%27%253Fx%253D%25D1%2588%25D0%25B5%25D0%25BB%25D0%25BB%25D1%258B%27.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testAsDecodedURI"), "testAsDecodedURI", function StringTestCase__testAsDecodedURI(){
const self = this; self.assert_equals_((unescape("%253Fx%253Dtest").asDecodedURI()),unescape("%3Fx%3Dtest"));
self.assert_equals_((unescape("%253Fx%253D%25D1%2588%25D0%25B5%25D0%25BB%25D0%25BB%25D1%258B").asDecodedURI()),unescape("%3Fx%3D%u0448%u0435%u043B%u043B%u044B"));
return self;
}
, "running", unescape("testAsDecodedURI%0D%0D%09self%0D%09%09assert%3A%20%27%253Fx%253Dtest%27%20asDecodedURI%0D%09%09equals%3A%20%27%3Fx%3Dtest%27.%0D%09self%0D%09%09assert%3A%20%27%253Fx%253D%25D1%2588%25D0%25B5%25D0%25BB%25D0%25BB%25D1%258B%27%20asDecodedURI%0D%09%09equals%3A%20%27%3Fx%3D%u0448%u0435%u043B%u043B%u044B%27.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testConcat"), "testConcat", function StringTestCase__testConcat(){
var undefinedString = nil;
const self = this; self.assert_equals_(("Hello"._comma(undefinedString)),"Hello");
self.assert_equals_(("Hello"._comma(nil)),"Hello");
self.assert_equals_((unescape("Hello%2C%20")._comma(unescape("World%21"))),unescape("Hello%2C%20World%21"));
return self;
}
, "running", unescape("testConcat%0D%09%7C%20undefinedString%20%7C%0D%09self%0D%09%09assert%3A%20%27Hello%27%20%2C%20undefinedString%0D%09%09equals%3A%20%27Hello%27.%0D%09self%0D%09%09assert%3A%20%27Hello%27%20%2C%20nil%0D%09%09equals%3A%20%27Hello%27.%0D%09self%0D%09%09assert%3A%20%27Hello%2C%20%27%2C%27World%21%27%0D%09%09equals%3A%20%27Hello%2C%20World%21%27.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testCopyWith"), "testCopyWith", function StringTestCase__testCopyWith(){
const self = this; self.assert_equals_((unescape("Hello%2C").copyWith_("1")),unescape("Hello%2C1"));
return self;
}
, "running", unescape("testCopyWith%0D%0D%09self%0D%09%09assert%3A%20%28%27Hello%2C%27%20copyWith%3A%271%27%29%0D%09%09equals%3A%20%27Hello%2C1%27.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testCopyFromTo"), "testCopyFromTo", function StringTestCase__testCopyFromTo(){
const self = this; self.should_raise_((function StringTestCase__(){
return unescape("123Hello%2C%20World%21123").copyFrom_to_("1",(2));
}
),smalltalk.Error);
self.should_raise_((function StringTestCase__(){
return unescape("123Hello%2C%20World%21123").copyFrom_to_((1),"2");
}
),smalltalk.Error);
self.assert_equals_((unescape("123Hello%2C%20World%21123").copyFrom_to_((4),(16))),unescape("Hello%2C%20World%21"));
return self;
}
, "running", unescape("testCopyFromTo%0D%0D%09self%0D%09%09should%3A%20%5B%28%27123Hello%2C%20World%21123%27%20copyFrom%3A%20%271%27%20to%3A%202%29%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09should%3A%20%5B%28%27123Hello%2C%20World%21123%27%20copyFrom%3A%201%20to%3A%20%272%27%29%5D%0D%09%09raise%3A%20Error.%0D%09self%20%0D%09%09assert%3A%20%28%27123Hello%2C%20World%21123%27%20copyFrom%3A%204%20to%3A%2016%29%0D%09%09equals%3A%20%27Hello%2C%20World%21%27.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testIndexOf"), "testIndexOf", function StringTestCase__testIndexOf(){
const self = this; self.assert_equals_((unescape("hello%2C%20world%21").indexOf_("w")),(8));
self.assert_equals_((unescape("hello%2C%20world%21").indexOf_("z")),(0));
self.assert_equals_((unescape("hello%2C%20world%21").indexOf_("world")),(8));
self.should_raise_((function StringTestCase__(){
return "1234".indexOf_((3));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testIndexOf%0D%0D%09self%0D%09%09assert%3A%20%28%27hello%2C%20world%21%27%20indexOf%3A%20%27w%27%29%0D%09%09equals%3A%208.%0D%09self%0D%09%09assert%3A%20%28%27hello%2C%20world%21%27%20indexOf%3A%20%27z%27%29%0D%09%09equals%3A%200.%0D%09self%0D%09%09assert%3A%20%28%27hello%2C%20world%21%27%20indexOf%3A%20%27world%27%29%0D%09%09equals%3A%208.%0D%09self%0D%09%09should%3A%20%5B%28%271234%27%20indexOf%3A3%29%5D%0D%09%09raise%3A%20Error.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testIndexOfStartingFrom"), "testIndexOfStartingFrom", function StringTestCase__testIndexOfStartingFrom(){
const self = this; self.assert_equals_((unescape("hello%2C%20world%21").indexOf_startingAt_("l",(5))),(11));
self.assert_equals_(("123".indexOf_startingAt_("2",(4))),(0));
self.should_raise_((function StringTestCase__(){
return "123".indexOf_startingAt_((2),(1));
}
),smalltalk.Error);
self.should_raise_((function StringTestCase__(){
return "123".indexOf_startingAt_("2","1");
}
),smalltalk.Error);
return self;
}
, "running", unescape("testIndexOfStartingFrom%0D%0D%09self%0D%09%09assert%3A%20%28%27hello%2C%20world%21%27%20indexOf%3A%20%27l%27%20startingAt%3A%205%29%0D%09%09equals%3A%2011.%0D%09self%0D%09%09assert%3A%20%28%27123%27%20indexOf%3A%20%272%27%20startingAt%3A%204%29%0D%09%09equals%3A%200.%0D%09self%0D%09%09should%3A%20%5B%27123%27%20indexOf%3A%202%20startingAt%3A%201%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09should%3A%20%5B%27123%27%20indexOf%3A%20%272%27%20startingAt%3A%20%271%27%5D%0D%09%09raise%3A%20Error.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testLastIndexOf"), "testLastIndexOf", function StringTestCase__testLastIndexOf(){
const self = this; self.assert_equals_(("aaHello Worlda".lastIndexOf_("a")),(14));
self.assert_equals_(("aaHello Worlda".lastIndexOf_("z")),(0));
return self;
}
, "running", unescape("testLastIndexOf%0D%0D%09self%0D%09%09assert%3A%20%28%27aaHello%20Worlda%27%20lastIndexOf%3A%20%27a%27%29%0D%09%09equals%3A%2014.%0D%09self%0D%09%09assert%3A%20%28%27aaHello%20Worlda%27%20lastIndexOf%3A%27z%27%29%0D%09%09equals%3A%200.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testLastIndexOfStartingFrom"), "testLastIndexOfStartingFrom", function StringTestCase__testLastIndexOfStartingFrom(){
const self = this; self.assert_equals_(("aaHello Worlda".lastIndexOf_startingAt_("l",(10))),(6));
self.assert_equals_(("aaHello Worlda".lastIndexOf_startingAt_("l",(14))),(12));
self.assert_equals_(("121".lastIndexOf_startingAt_("1",(3))),(3));
return self;
}
, "running", unescape("testLastIndexOfStartingFrom%0D%0D%09self%0D%09%09assert%3A%20%28%27aaHello%20Worlda%27%20lastIndexOf%3A%20%27l%27%20startingAt%3A%2010%29%0D%09%09equals%3A%206.%0D%09self%0D%09%09assert%3A%20%28%27aaHello%20Worlda%27%20lastIndexOf%3A%20%27l%27%20startingAt%3A%2014%29%0D%09%09equals%3A%2012.%0D%09self%0D%09%09assert%3A%20%28%27121%27%20lastIndexOf%3A%20%271%27%20startingAt%3A%203%29%0D%09%09equals%3A%203.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testAsJavascript"), "testAsJavascript", function StringTestCase__testAsJavascript(){
const self = this; self.assert_equals_((unescape("%21").asJavascript()),unescape("unescape%28%22%2521%22%29"));
self.assert_equals_((unescape("@").asJavascript()),unescape("unescape%28%22@%22%29"));
return self;
}
, "running", unescape("testAsJavascript%0D%0D%09self%0D%09%09assert%3A%20%27%21%27%20asJavascript%0D%09%09equals%3A%20%27unescape%28%22%2521%22%29%27.%0D%09self%0D%09%09assert%3A%20%27@%27%20asJavascript%0D%09%09equals%3A%20%27unescape%28%22@%22%29%27.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testSplit"), "testSplit", function StringTestCase__testSplit(){
const self = this; self.assert_equals_(("162636465".tokenize_((6))),["1", "2", "3", "4", "5"]);
self.assert_equals_(("1 2 3 4 5".tokenize_(" ")),["1", "2", "3", "4", "5"]);
return self;
}
, "running", unescape("testSplit%0D%09%0D%09self%0D%09%09assert%3A%20%28%27162636465%27%20tokenize%3A%206%29%0D%09%09equals%3A%20%23%28%271%27%20%272%27%20%273%27%20%274%27%20%275%27%29.%0D%09self%0D%09%09assert%3A%20%28%271%202%203%204%205%27%20tokenize%3A%20%27%20%27%29%0D%09%09equals%3A%20%23%28%271%27%20%272%27%20%273%27%20%274%27%20%275%27%29.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testIsLetter"), "testIsLetter", function StringTestCase__testIsLetter(){
const self = this; (function StringTestCase__($1$){
$1$.assert_(("L".isLetter()));
$1$.assert_(("z".isLetter()));
$1$.deny_(("1".isLetter()));
$1$.deny_(("hey".isLetter()));
return $1$.deny_((unescape("%26").isLetter()))}
)(self);
return self;
}
, "running", unescape("testIsLetter%0D%0D%09self%0D%09%09assert%3A%20%27L%27%20isLetter%3B%0D%09%09assert%3A%20%27z%27%20isLetter%3B%0D%09%09deny%3A%20%271%27%20isLetter%3B%0D%09%09deny%3A%20%27hey%27%20isLetter%3B%0D%09%09deny%3A%20%27%26%27%20isLetter.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testIsDigit"), "testIsDigit", function StringTestCase__testIsDigit(){
const self = this; (function StringTestCase__($1$){
$1$.assert_(("1".isDigit()));
$1$.assert_(("0".isDigit()));
$1$.deny_(("a".isDigit()));
return $1$.deny_(("11".isDigit()))}
)(self);
return self;
}
, "running", unescape("testIsDigit%0D%0D%09self%0D%09%09assert%3A%20%271%27%20isDigit%3B%0D%09%09assert%3A%20%270%27%20isDigit%3B%0D%09%09deny%3A%20%27a%27%20isDigit%3B%0D%09%09deny%3A%20%2711%27%20isDigit.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testAsUppercase"), "testAsUppercase", function StringTestCase__testAsUppercase(){
const self = this; self.assert_equals_((unescape("hello%2C%20world%21").asUpperCase()),unescape("HELLO%2C%20WORLD%21"));
return self;
}
, "running", unescape("testAsUppercase%0D%0D%09self%0D%09%09assert%3A%20%27hello%2C%20world%21%27%20asUpperCase%0D%09%09equals%3A%20%27HELLO%2C%20WORLD%21%27.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testAsLowercase"), "testAsLowercase", function StringTestCase__testAsLowercase(){
const self = this; self.assert_equals_((unescape("HELLO%2C%20WORLD%21").asLowerCase()),unescape("hello%2C%20world%21"));
return self;
}
, "running", unescape("testAsLowercase%0D%0D%09self%0D%09%09assert%3A%20%27HELLO%2C%20WORLD%21%27%20asLowerCase%0D%09%09equals%3A%20%27hello%2C%20world%21%27.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testLessThan"), "testLessThan", function StringTestCase__testLessThan(){
var nonStrings = nil;
const self = this; nonStrings=[(1), [], false, true, nil];
nonStrings.do_((function StringTestCase__(each){
return self.should_raise_((function StringTestCase__(){
return "test"._lt(each);
}
),smalltalk.Error);
}
));
(function StringTestCase__($1$){
$1$.assert_(("abc"._lt("xyz")));
$1$.assert_(("678"._lt("76")));
$1$.deny_(("abc"._lt("abc")));
return $1$.deny_(("26"._lt("128")))}
)(self);
return self;
}
, "running", unescape("testLessThan%0D%0D%09%7C%20nonStrings%20%7C%0D%09nonStrings%20%3A%3D%20%23%281%20%23%28%29%20false%20true%20nil%29.%0D%09nonStrings%20do%3A%5B%20%3Aeach%20%7C%20self%20should%3A%5B%27test%27%20%3C%20each%5D%20raise%3A%20Error%5D.%0D%09self%0D%09%09assert%3A%20%28%27abc%27%20%3C%20%27xyz%27%29%3B%0D%09%09assert%3A%20%28%27678%27%20%3C%20%2776%27%29%3B%0D%09%09deny%3A%20%28%27abc%27%20%3C%20%27abc%27%29%3B%0D%09%09deny%3A%20%28%2726%27%20%3C%20%27128%27%29.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testGreaterThan"), "testGreaterThan", function StringTestCase__testGreaterThan(){
var nonStrings = nil;
const self = this; nonStrings=[(1), [], false, true, nil];
nonStrings.do_((function StringTestCase__(each){
return self.should_raise_((function StringTestCase__(){
return "test"._gt(each);
}
),smalltalk.Error);
}
));
(function StringTestCase__($1$){
$1$.assert_(("cat"._gt("car")));
$1$.assert_(("70"._gt("432")));
$1$.deny_(("abc"._gt("abc")));
return $1$.deny_(("324"._gt("8")))}
)(self);
return self;
}
, "running", unescape("testGreaterThan%0D%0D%09%7C%20nonStrings%20%7C%0D%09nonStrings%20%3A%3D%20%23%281%20%23%28%29%20false%20true%20nil%29.%0D%09nonStrings%20do%3A%5B%20%3Aeach%20%7C%20self%20should%3A%5B%27test%27%20%3E%20each%5D%20raise%3A%20Error%5D.%0D%09self%0D%09%09assert%3A%20%28%27cat%27%20%3E%20%27car%27%29%3B%0D%09%09assert%3A%20%28%2770%27%20%3E%20%27432%27%29%3B%0D%09%09deny%3A%20%28%27abc%27%20%3E%20%27abc%27%29%3B%0D%09%09deny%3A%20%28%27324%27%20%3E%20%278%27%29.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testLessThanEqualTo"), "testLessThanEqualTo", function StringTestCase__testLessThanEqualTo(){
var nonStrings = nil;
const self = this; nonStrings=[(1), [], false, true, nil];
nonStrings.do_((function StringTestCase__(each){
return self.should_raise_((function StringTestCase__(){
return "test"._lt_eq(each);
}
),smalltalk.Error);
}
));
(function StringTestCase__($1$){
$1$.assert_(("abc"._lt_eq("xyz")));
$1$.assert_(("678"._lt_eq("76")));
$1$.assert_(("abc"._lt_eq("abc")));
return $1$.deny_(("26"._lt_eq("128")))}
)(self);
return self;
}
, "running", unescape("testLessThanEqualTo%0D%0D%09%7C%20nonStrings%20%7C%0D%09nonStrings%20%3A%3D%20%23%281%20%23%28%29%20false%20true%20nil%29.%0D%09nonStrings%20do%3A%5B%20%3Aeach%20%7C%20self%20should%3A%5B%27test%27%20%3C%3D%20each%5D%20raise%3A%20Error%5D.%0D%09self%0D%09%09assert%3A%20%28%27abc%27%20%3C%3D%20%27xyz%27%29%3B%0D%09%09assert%3A%20%28%27678%27%20%3C%3D%20%2776%27%29%3B%0D%09%09assert%3A%20%28%27abc%27%20%3C%3D%20%27abc%27%29%3B%0D%09%09deny%3A%20%28%2726%27%20%3C%3D%20%27128%27%29.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testGreaterThanEqualTo"), "testGreaterThanEqualTo", function StringTestCase__testGreaterThanEqualTo(){
var nonStrings = nil;
const self = this; nonStrings=[(1), [], false, true, nil];
nonStrings.do_((function StringTestCase__(each){
return self.should_raise_((function StringTestCase__(){
return "test"._gt_eq(each);
}
),smalltalk.Error);
}
));
(function StringTestCase__($1$){
$1$.assert_(("cat"._gt_eq("car")));
$1$.assert_(("70"._gt_eq("432")));
$1$.assert_(("abc"._gt_eq("abc")));
return $1$.deny_(("324"._gt_eq("8")))}
)(self);
return self;
}
, "running", unescape("testGreaterThanEqualTo%0D%0D%09%7C%20nonStrings%20%7C%0D%09nonStrings%20%3A%3D%20%23%281%20%23%28%29%20false%20true%20nil%29.%0D%09nonStrings%20do%3A%5B%20%3Aeach%20%7C%20self%20should%3A%5B%27test%27%20%3E%3D%20each%5D%20raise%3A%20Error%5D.%0D%09self%0D%09%09assert%3A%20%28%27cat%27%20%3E%3D%20%27car%27%29%3B%0D%09%09assert%3A%20%28%2770%27%20%3E%3D%20%27432%27%29%3B%0D%09%09assert%3A%20%28%27abc%27%20%3E%3D%20%27abc%27%29%3B%0D%09%09deny%3A%20%28%27324%27%20%3E%3D%20%278%27%29.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testIsCharacter"), "testIsCharacter", function StringTestCase__testIsCharacter(){
const self = this; (function StringTestCase__($1$){
$1$.assert_(("r".isCharacter()));
$1$.assert_(("2".isCharacter()));
$1$.deny_(("".isCharacter()));
return $1$.deny_(("hello".isCharacter()))}
)(self);
return self;
}
, "running", unescape("testIsCharacter%0D%0D%09self%0D%09%09assert%3A%20%27r%27%20isCharacter%3B%0D%09%09assert%3A%20%272%27%20isCharacter%3B%0D%09%09deny%3A%20%27%27%20isCharacter%3B%0D%09%09deny%3A%20%27hello%27%20isCharacter.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testAsciiValue"), "testAsciiValue", function StringTestCase__testAsciiValue(){
const self = this; self.assert_equals_((unescape("%21").asciiValue()),(33));
self.assert_equals_(("A".asciiValue()),(65));
self.assert_equals_(("test".asciiValue()),(116));
return self;
}
, "running", unescape("testAsciiValue%0D%0D%09self%0D%09%09assert%3A%20%27%21%27%20asciiValue%0D%09%09equals%3A%2033.%0D%09self%0D%09%09assert%3A%20%27A%27%20asciiValue%0D%09%09equals%3A%2065.%0D%09self%20%0D%09%09assert%3A%20%27test%27%20asciiValue%0D%09%09equals%3A%20116.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testIsSep"), "testIsSep", function StringTestCase__testIsSep(){
const self = this; (function StringTestCase__($1$){
$1$.assert_(((smalltalk.String.space()).isSeparator()));
$1$.assert_(((smalltalk.String.tab()).isSeparator()));
$1$.assert_(((smalltalk.String.cr()).isSeparator()));
$1$.assert_(((smalltalk.String.lf()).isSeparator()));
return $1$.deny_(("test".isSeparator()))}
)(self);
return self;
}
, "running", unescape("testIsSep%0D%0D%09self%0D%09%09assert%3A%20String%20space%20isSeparator%3B%0D%09%09assert%3A%20String%20tab%20isSeparator%3B%0D%09%09assert%3A%20String%20cr%20isSeparator%3B%0D%09%09assert%3A%20String%20lf%20isSeparator%3B%0D%09%09deny%3A%20%27test%27%20isSeparator.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testReplaceRegExp"), "testReplaceRegExp", function StringTestCase__testReplaceRegExp(){
var testString = nil;
var regExp = nil;
const self = this; testString="Mr Blue has a blue house and a blue car";
regExp=smalltalk.RegularExpression.fromString_flag_("blue","g");
self.assert_equals_((testString.replaceRegexp_with_(regExp,"purple")),"Mr Blue has a purple house and a purple car");
self.should_raise_((function StringTestCase__(){
return testString.replaceRegexp_with_(unescape("/test/"),"purple");
}
),smalltalk.Error);
self.should_raise_((function StringTestCase__(){
return testString.replaceRegexp_with_(regExp,(1));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testReplaceRegExp%0D%0D%09%7C%20testString%20regExp%20%7C%0D%09testString%20%3A%3D%20%27Mr%20Blue%20has%20a%20blue%20house%20and%20a%20blue%20car%27.%0D%09regExp%20%3A%3D%20%28RegularExpression%20fromString%3A%27blue%27%20flag%3A%27g%27%29.%0D%09self%0D%09%09assert%3A%20%28testString%20replaceRegexp%3A%20regExp%20with%3A%20%27purple%27%29%0D%09%09equals%3A%20%27Mr%20Blue%20has%20a%20purple%20house%20and%20a%20purple%20car%27.%0D%09self%0D%09%09should%3A%20%5B%28testString%20replaceRegexp%3A%20%27/test/%27%20with%3A%20%27purple%27%29%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09should%3A%20%5B%28testString%20replaceRegexp%3A%20regExp%20with%3A%201%29%5D%0D%09%09raise%3A%20Error.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testAsSelector"), "testAsSelector", function StringTestCase__testAsSelector(){
const self = this; self.assert_equals_((unescape("%5C").asSelector()),"_bk");
self.assert_equals_((unescape("*").asSelector()),"_star");
self.assert_equals_((unescape("%23toString").asSelector()),"toString");
self.assert_equals_((unescape("%23toString%3Avalue%3A").asSelector()),"toString");
self.assert_equals_(("value:value:".asSelector()),"value_value_");
return self;
}
, "running", unescape("testAsSelector%0D%0D%09self%0D%09%09assert%3A%20%27%5C%27%20asSelector%0D%09%09equals%3A%27_bk%27.%0D%09self%0D%09%09assert%3A%20%27*%27%20asSelector%0D%09%09equals%3A%27_star%27.%0D%09self%0D%09%09assert%3A%20%27%23toString%27%20asSelector%0D%09%09equals%3A%20%27toString%27.%0D%09self%0D%09%09assert%3A%20%27%23toString%3Avalue%3A%27%20asSelector%0D%09%09equals%3A%20%27toString%27.%0D%09self%0D%09%09assert%3A%20%27value%3Avalue%3A%27%20asSelector%0D%09%09equals%3A%20%27value_value_%27.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testReplaceWith"), "testReplaceWith", function StringTestCase__testReplaceWith(){
const self = this; self.assert_equals_(("hello hello world".replace_with_("hello","no")),"no no world");
self.should_raise_((function StringTestCase__(){
return "hello hello world".replace_with_((3),"no");
}
),smalltalk.Error);
self.should_raise_((function StringTestCase__(){
return "hello hello world".replace_with_("hello",true);
}
),smalltalk.Error);
return self;
}
, "running", unescape("testReplaceWith%0D%0D%09self%20%0D%09%09assert%3A%20%28%27hello%20hello%20world%27%20replace%3A%20%27hello%27%20with%3A%20%27no%27%29%0D%09%09equals%3A%20%27no%20no%20world%27.%0D%09self%0D%09%09should%3A%20%5B%28%27hello%20hello%20world%27%20replace%3A%203%20with%3A%20%27no%27%29%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09should%3A%20%5B%28%27hello%20hello%20world%27%20replace%3A%20%27hello%27%20with%3A%20true%29%5D%0D%09%09raise%3A%20Error.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testFromCharCode"), "testFromCharCode", function StringTestCase__testFromCharCode(){
const self = this; self.assert_equals_((smalltalk.String.fromCharCode_([(61), (62), (63)])),unescape("%3D%3E%3F"));
self.assert_equals_((smalltalk.String.fromCharCode_((81))),"Q");
self.assert_equals_((smalltalk.String.fromCharCode_((10))),(smalltalk.String.lf()));
self.should_raise_((function StringTestCase__(){
return smalltalk.String.fromCharCode_("81");
}
),smalltalk.Error);
return self;
}
, "running", unescape("testFromCharCode%0D%0D%09self%0D%09%09assert%3A%20%28String%20fromCharCode%3A%20%23%2861%2062%2063%29%29%0D%09%09equals%3A%20%27%3D%3E%3F%27.%0D%09self%0D%09%09assert%3A%20%28String%20fromCharCode%3A%2081%29%0D%09%09equals%3A%20%27Q%27.%0D%09self%0D%09%09assert%3A%20%28String%20fromCharCode%3A%2010%29%0D%09%09equals%3A%20String%20lf.%0D%09self%0D%09%09should%3A%20%5B%28String%20fromCharCode%3A%20%2781%27%29%5D%0D%09%09raise%3A%20Error.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testArgumentCount"), "testArgumentCount", function StringTestCase__testArgumentCount(){
const self = this; self.assert_equals_(("test:test2:test3:".argumentCount()),(3));
self.assert_equals_((unescape("+").argumentCount()),(1));
self.assert_equals_(("test".argumentCount()),(0));
return self;
}
, "running", unescape("testArgumentCount%0D%0D%09self%0D%09%09assert%3A%20%27test%3Atest2%3Atest3%3A%27%20argumentCount%0D%09%09equals%3A%203.%0D%09self%0D%09%09assert%3A%20%27+%27%20argumentCount%0D%09%09equals%3A%201.%0D%09self%0D%09%09assert%3A%20%27test%27%20argumentCount%0D%09%09equals%3A%200.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testMatchARegExp"), "testMatchARegExp", function StringTestCase__testMatchARegExp(){
var testString = nil;
const self = this; testString="test";
(function StringTestCase__($1$){
$1$.assert_((unescape("hello%2C%20test%20world%21").match_(testString)));
return $1$.deny_((unescape("hello%2C%20world%21").match_(testString)))}
)(self);
self.should_raise_((function StringTestCase__(){
return "1234".match_((3));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testMatchARegExp%0D%0D%09%7C%20testString%20%7C%0D%09testString%20%3A%3D%20%27test%27.%0D%09self%0D%09%09%20assert%3A%20%28%27hello%2C%20test%20world%21%27%20match%3A%20testString%29%3B%0D%09%09%20deny%3A%20%28%27hello%2C%20world%21%27%20match%3A%20testString%29.%0D%09self%0D%09%09should%3A%20%5B%28%271234%27%20match%3A%203%29%5D%0D%09%09raise%3A%20Error.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testWithIndexDo"), "testWithIndexDo", function StringTestCase__testWithIndexDo(){
const self = this; "123".withIndexDo_((function StringTestCase__(each,index){
return self.assert_((each._eq((index.asString()))));
}
));
self.should_raise_((function StringTestCase__(){
return "123".withIndexDo_((5));
}
),smalltalk.Error);
self.should_raise_((function StringTestCase__(){
return "123".withIndexDo_((function StringTestCase__(each){
return ((self.assert()).each())._eq((1));
}
));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testWithIndexDo%0D%0D%09%27123%27%20withIndexDo%3A%20%5B%20%3Aeach%20%3Aindex%20%7C%20self%20assert%3A%20each%20%3D%20index%20asString%5D.%0D%09self%0D%09%09should%3A%20%5B%27123%27%20withIndexDo%3A%205%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09should%3A%20%5B%27123%27%20withIndexDo%3A%5B%3Aeach%20%7C%20self%20assert%20each%20%3D%201%5D%5D%0D%09%09raise%3A%20Error.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testAsString"), "testAsString", function StringTestCase__testAsString(){
const self = this; self.assert_equals_((unescape("hello%2C%20world").asString()),unescape("hello%2C%20world"));
return self;
}
, "running", unescape("testAsString%0D%0D%09self%0D%09%09assert%3A%20%27hello%2C%20world%27%20asString%0D%09%09equals%3A%20%27hello%2C%20world%27.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testAsArrayOfSubstringsSeparatedBy"), "testAsArrayOfSubstringsSeparatedBy", function StringTestCase__testAsArrayOfSubstringsSeparatedBy(){
const self = this; self.assert_equals_(("the red fox".asArrayOfSubstringsSeparatedBy_(" ")),["the", "red", "fox"]);
return self;
}
, "running", unescape("testAsArrayOfSubstringsSeparatedBy%0D%0D%09self%0D%09%09assert%3A%20%28%27the%20red%20fox%27%20asArrayOfSubstringsSeparatedBy%3A%20%27%20%27%29%0D%09%09equals%3A%20%23%28%27the%27%20%27red%27%20%27fox%27%29.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testCopyReplaceFromToWith"), "testCopyReplaceFromToWith", function StringTestCase__testCopyReplaceFromToWith(){
const self = this; self.assert_equals_(("those are nice cats".copyReplaceFrom_to_with_((16),(19),"dogs")),"those are nice dogs");
return self;
}
, "running", unescape("testCopyReplaceFromToWith%0D%0D%09self%0D%09%09assert%3A%20%28%27those%20are%20nice%20cats%27%20copyReplaceFrom%3A%2016%20to%3A%2019%20with%3A%20%27dogs%27%29%0D%09%09equals%3A%20%27those%20are%20nice%20dogs%27.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testReplaceAll"), "testReplaceAll", function StringTestCase__testReplaceAll(){
const self = this; self.assert_equals_((unescape("fails%2C%20this%20test%20fails").replaceAll_with_("fails","passes")),unescape("passes%2C%20this%20test%20passes"));
return self;
}
, "running", unescape("testReplaceAll%0D%0D%09self%0D%09%09assert%3A%20%28%27fails%2C%20this%20test%20fails%27%20replaceAll%3A%20%27fails%27%20with%3A%20%27passes%27%29%0D%09%09equals%3A%20%27passes%2C%20this%20test%20passes%27.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testBetweenAnd"), "testBetweenAnd", function StringTestCase__testBetweenAnd(){
const self = this; (function StringTestCase__($1$){
$1$.assert_(("car".between_and_("can","cat")));
return $1$.deny_(("bug".between_and_("zap","zip")))}
)(self);
return self;
}
, "running", unescape("testBetweenAnd%0D%0D%09self%0D%09%09assert%3A%20%28%27car%27%20between%3A%20%27can%27%20and%3A%20%27cat%27%29%3B%0D%09%09deny%3A%20%28%27bug%27%20between%3A%20%27zap%27%20and%3A%20%27zip%27%29.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testCopyWithout"), "testCopyWithout", function StringTestCase__testCopyWithout(){
const self = this; self.assert_equals_(("abcdefghijk".copyWithout_("ghijk")),"abcdef");
return self;
}
, "running", unescape("testCopyWithout%0D%0D%09self%0D%09%09assert%3A%20%28%27abcdefghijk%27%20copyWithout%3A%20%27ghijk%27%29%0D%09%09equals%3A%20%27abcdef%27.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testFindFirst"), "testFindFirst", function StringTestCase__testFindFirst(){
const self = this; self.assert_equals_(("abcb".findFirst_((function StringTestCase__(each){
return each._eq("b");
}
))),(2));
return self;
}
, "running", unescape("testFindFirst%0D%0D%09self%0D%09%09assert%3A%20%28%27abcb%27%20findFirst%3A%20%5B%3Aeach%20%7C%20each%20%3D%20%27b%27%5D%29%0D%09%09equals%3A%202.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testFindLast"), "testFindLast", function StringTestCase__testFindLast(){
const self = this; self.assert_equals_(("zzaza".findLast_((function StringTestCase__(each){
return each._eq("z");
}
))),(4));
return self;
}
, "running", unescape("testFindLast%0D%0D%09self%0D%09%09assert%3A%20%28%27zzaza%27%20findLast%3A%20%5B%3Aeach%20%7C%20each%20%3D%20%27z%27%5D%29%0D%09%09equals%3A%204.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testIndexOfIfAbsent"), "testIndexOfIfAbsent", function StringTestCase__testIndexOfIfAbsent(){
var result = nil;
const self = this; result=(0);
result="test".indexOf_ifAbsent_("es",(function StringTestCase__(){
return result=(0);
}
));
self.assert_equals_(result,(2));
result="test".indexOf_ifAbsent_("z",(function StringTestCase__(){
return result=(0);
}
));
self.assert_equals_(result,(0));
return self;
}
, "running", unescape("testIndexOfIfAbsent%0D%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%200.%0D%09result%20%3A%3D%20%28%27test%27%20indexOf%3A%20%27es%27%20ifAbsent%3A%20%5Bresult%20%3A%3D%200%5D%29.%0D%09self%20%0D%09%09assert%3A%20result%20%0D%09%09equals%3A%202.%0D%09result%20%3A%3D%20%28%27test%27%20indexOf%3A%20%27z%27%20ifAbsent%3A%20%5Bresult%20%3A%3D%200%5D%29.%0D%09self%20%0D%09%09assert%3A%20result%0D%09%09equals%3A%200.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testReversed"), "testReversed", function StringTestCase__testReversed(){
const self = this; self.assert_equals_(("12345".reversed()),"54321");
return self;
}
, "running", unescape("testReversed%0D%0D%09self%0D%09%09assert%3A%20%2712345%27%20reversed%0D%09%09equals%3A%20%2754321%27.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testReverseDo"), "testReverseDo", function StringTestCase__testReverseDo(){
var result = nil;
const self = this; result="";
"12345".reverseDo_((function StringTestCase__(each){
return result=result._comma(each);
}
));
self.assert_equals_(result,"54321");
return self;
}
, "running", unescape("testReverseDo%0D%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%20%27%27.%0D%09%2712345%27%20reverseDo%3A%20%5B%20%3Aeach%20%7C%20result%20%3A%3D%20result%2Ceach%20%5D.%0D%09self%20%0D%09%09assert%3A%20result%20%0D%09%09equals%3A%20%2754321%27.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testWithDo"), "testWithDo", function StringTestCase__testWithDo(){
var result = nil;
const self = this; result="";
"1357".with_do_("2468",(function StringTestCase__(odd,even){
return result=(result._comma(odd))._comma(even);
}
));
self.assert_equals_(result,"12345678");
return self;
}
, "running", unescape("testWithDo%0D%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%20%27%27.%0D%09%271357%27%20with%3A%20%272468%27%20do%3A%20%5B%20%3Aodd%20%3Aeven%20%7C%20result%20%3A%3D%20result%2Codd%2Ceven%20%5D.%0D%09self%20%0D%09%09assert%3A%20result%20%0D%09%09equals%3A%20%2712345678%27.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testAsArray"), "testAsArray", function StringTestCase__testAsArray(){
var result = nil;
const self = this; result="12345".asArray();
self.assert_((result.isArray()));
self.assert_equals_(result,["1", "2", "3", "4", "5"]);
return self;
}
, "running", unescape("testAsArray%0D%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%20%2712345%27%20asArray.%0D%09self%20assert%3A%20result%20isArray.%0D%09self%20%0D%09%09assert%3A%20result%0D%09%09equals%3A%20%23%28%271%27%20%272%27%20%273%27%20%274%27%20%275%27%29.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testAsSet"), "testAsSet", function StringTestCase__testAsSet(){
var testSet = nil;
const self = this; testSet="apple".asSet();
self.assert_((testSet.isSet()));
self.assert_equals_((testSet.size()),(4));
"apple".do_((function StringTestCase__(each){
return self.assert_((testSet.includes_(each)));
}
));
return self;
}
, "running", unescape("testAsSet%0D%0D%09%7C%20testSet%20%7C%0D%09testSet%20%3A%3D%20%27apple%27%20asSet.%0D%09self%20assert%3A%20testSet%20isSet.%0D%09self%0D%09%09assert%3A%20testSet%20size%0D%09%09equals%3A%204.%0D%09%27apple%27%20do%3A%20%5B%3Aeach%20%7C%20self%20assert%3A%20%28testSet%20includes%3A%20each%29%5D.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testDetect"), "testDetect", function StringTestCase__testDetect(){
const self = this; self.assert_equals_(("abcd".detect_((function StringTestCase__(each){
return each._gt("c");
}
))),"d");
self.should_raise_((function StringTestCase__(){
return "abcd".detect_((function StringTestCase__(each){
return each._gt("z");
}
));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testDetect%0D%0D%09self%20%0D%09%09assert%3A%20%28%27abcd%27%20detect%3A%20%5B%3Aeach%20%7C%20each%20%3E%20%27c%27%5D%29%0D%09%09equals%3A%20%27d%27.%0D%09self%0D%09%09should%3A%20%5B%28%27abcd%27%20detect%3A%20%5B%3Aeach%20%7C%20each%20%3E%20%27z%27%5D%29%5D%0D%09%09raise%3A%20Error.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testDetectIfNone"), "testDetectIfNone", function StringTestCase__testDetectIfNone(){
var testValue = nil;
const self = this; testValue=(0);
testValue="abcd".detect_ifNone_((function StringTestCase__(each){
return each._gt("d");
}
),(function StringTestCase__(){
return (-1);
}
));
self.assert_equals_(testValue,(-1));
testValue="abcd".detect_ifNone_((function StringTestCase__(each){
return each._eq("d");
}
),(function StringTestCase__(){
return (-2);
}
));
self.assert_equals_(testValue,"d");
return self;
}
, "running", unescape("testDetectIfNone%0D%0D%09%7C%20testValue%20%7C%0D%09testValue%20%3A%3D%200.%0D%09testValue%20%3A%3D%20%28%27abcd%27%20detect%3A%20%5B%20%3Aeach%20%7C%20each%20%3E%20%27d%27%5D%20ifNone%3A%20%5B-1%5D%29.%0D%09self%20%0D%09%09assert%3A%20testValue%0D%09%09equals%3A%20-1.%0D%09testValue%20%3A%3D%20%28%27abcd%27%20detect%3A%20%5B%20%3Aeach%20%7C%20each%20%3D%20%27d%27%5D%20ifNone%3A%20%5B-2%5D%29.%0D%09self%0D%09%09assert%3A%20testValue%0D%09%09equals%3A%20%27d%27.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testDoSeparatedBy"), "testDoSeparatedBy", function StringTestCase__testDoSeparatedBy(){
var result = nil;
const self = this; result="";
"12345".do_separatedBy_((function StringTestCase__(each){
return result=result._comma(each);
}
),(function StringTestCase__(){
return result=result._comma(" ");
}
));
self.assert_equals_(result,"1 2 3 4 5");
return self;
}
, "running", unescape("testDoSeparatedBy%0D%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%20%27%27.%20%0D%09%28%2712345%27%20do%3A%20%5B%3Aeach%20%7C%20result%20%3A%3D%20result%2Ceach%5D%20separatedBy%3A%20%5Bresult%20%3A%3D%20result%2C%20%27%20%27%5D%29.%0D%09self%0D%09%09assert%3A%20result%0D%09%09equals%3A%20%271%202%203%204%205%27.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testIncludes"), "testIncludes", function StringTestCase__testIncludes(){
const self = this; (function StringTestCase__($1$){
$1$.assert_(("1234".includes_("2")));
return $1$.deny_(("abcd".includes_("2")))}
)(self);
return self;
}
, "running", unescape("testIncludes%0D%0D%09self%20%0D%09%09assert%3A%20%28%271234%27%20includes%3A%20%272%27%29%3B%0D%09%09deny%3A%20%28%27abcd%27%20includes%3A%20%272%27%29.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testInjectInto"), "testInjectInto", function StringTestCase__testInjectInto(){
var result = nil;
const self = this; result="12345".inject_into_("First",(function StringTestCase__(a,b){
return a._comma(b);
}
));
self.assert_equals_(result,"First12345");
return self;
}
, "running", unescape("testInjectInto%0D%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%20%28%2712345%27%20inject%3A%20%27First%27%20into%3A%20%5B%3Aa%20%3Ab%20%7C%20a%2Cb%20%5D%29.%0D%09self%0D%09%09assert%3A%20result%0D%09%09equals%3A%20%27First12345%27.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testIsEmpty"), "testIsEmpty", function StringTestCase__testIsEmpty(){
const self = this; (function StringTestCase__($1$){
$1$.assert_(("".isEmpty()));
return $1$.deny_(("test".isEmpty()))}
)(self);
return self;
}
, "running", unescape("testIsEmpty%0D%0D%09self%20%0D%09%09assert%3A%20%27%27%20isEmpty%3B%0D%09%09deny%3A%20%27test%27%20isEmpty.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testNotEmpty"), "testNotEmpty", function StringTestCase__testNotEmpty(){
const self = this; (function StringTestCase__($1$){
$1$.assert_(("test".notEmpty()));
return $1$.deny_(("".notEmpty()))}
)(self);
return self;
}
, "running", unescape("testNotEmpty%0D%0D%09self%0D%09%09assert%3A%20%27test%27%20notEmpty%3B%0D%09%09deny%3A%20%27%27%20notEmpty.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testOccurrencesOf"), "testOccurrencesOf", function StringTestCase__testOccurrencesOf(){
const self = this; self.assert_equals_(("aaa".occurrencesOf_("a")),(3));
self.assert_equals_(("abc".occurrencesOf_("z")),(0));
return self;
}
, "running", unescape("testOccurrencesOf%0D%0D%09self%0D%09%09assert%3A%20%28%27aaa%27%20occurrencesOf%3A%20%27a%27%29%0D%09%09equals%3A%203.%0D%09self%0D%09%09assert%3A%20%28%27abc%27%20occurrencesOf%3A%20%27z%27%29%0D%09%09equals%3A%200.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testSize"), "testSize", function StringTestCase__testSize(){
const self = this; self.assert_equals_(("12345".size()),(5));
self.assert_equals_(("".size()),(0));
return self;
}
, "running", unescape("testSize%0D%0D%09self%0D%09%09assert%3A%20%2712345%27%20size%0D%09%09equals%3A%205.%0D%09self%0D%09%09assert%3A%20%27%27%20size%0D%09%09equals%3A%200.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testExec"), "testExec", function StringTestCase__testExec(){
var testReg = nil;
var result = nil;
const self = this; testReg=smalltalk.RegularExpression.fromString_flag_("blue","g");
result=testReg.exec_(unescape("that%20color%20is%20blue%2C%20blue"));
self.assert_equals_(result,["blue"]);
result=testReg.exec_("that color is red");
self.assert_(((nil.isNil_(result))));
testReg=smalltalk.RegularExpression.fromString_flag_("d","g");
self.should_raise_((function StringTestCase__(){
return testReg.exec_(false);
}
),smalltalk.Error);
return self;
}
, "running", unescape("testExec%0D%0D%09%7C%20testReg%20result%20%7C%0D%09testReg%20%3A%3D%20%28RegularExpression%20fromString%3A%27blue%27%20flag%3A%27g%27%29.%0D%09result%20%3A%3D%20testReg%20exec%3A%20%27that%20color%20is%20blue%2C%20blue%27.%0D%09self%0D%09%09assert%3A%20result%0D%09%09equals%3A%20%23%28%27blue%27%29.%0D%09result%20%3A%3D%20testReg%20exec%3A%20%27that%20color%20is%20red%27.%0D%09self%20assert%3A%20result%20isNil.%0D%09testReg%20%3A%3D%20%28RegularExpression%20fromString%3A%27d%27%20flag%3A%27g%27%29.%0D%09self%20%0D%09%09should%3A%20%5BtestReg%20exec%3A%20false%5D%0D%09%09raise%3A%20Error.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testCompile"), "testCompile", function StringTestCase__testCompile(){
var reg = nil;
const self = this; reg=smalltalk.RegularExpression.fromString_flag_("blue","g");
self.assert_equals_(("red blue".replaceRegexp_with_(reg,"test")),"red test");
reg.compile_("red");
self.assert_equals_(("red blue".replaceRegexp_with_(reg,"test")),"test blue");
self.should_raise_((function StringTestCase__(){
return reg.compile_((23));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testCompile%0D%09%0D%09%7C%20reg%20%7C%0D%09reg%20%3A%3D%20%28RegularExpression%20fromString%3A%27blue%27%20flag%3A%27g%27%29.%0D%09self%20%0D%09%09assert%3A%20%28%27red%20blue%27%20replaceRegexp%3A%20reg%20with%3A%20%27test%27%29%0D%09%09equals%3A%20%27red%20test%27.%0D%09reg%20compile%3A%20%27red%27.%0D%09self%20%0D%09%09assert%3A%20%28%27red%20blue%27%20replaceRegexp%3A%20reg%20with%3A%20%27test%27%29%0D%09%09equals%3A%20%27test%20blue%27.%0D%09self%0D%09%09should%3A%20%5Breg%20compile%3A%2023%5D%0D%09%09raise%3A%20Error.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testTest"), "testTest", function StringTestCase__testTest(){
var reg = nil;
const self = this; reg=smalltalk.RegularExpression.fromString_flag_("f","g");
(function StringTestCase__($1$){
$1$.assert_((reg.test_("abcdefg")));
return $1$.deny_((reg.test_("abcde")))}
)(self);
self.should_raise_((function StringTestCase__(){
return reg.test_(true);
}
),smalltalk.Error);
return self;
}
, "running", unescape("testTest%0D%0D%09%7C%20reg%20%7C%0D%09reg%20%3A%3D%20%28RegularExpression%20fromString%3A%27f%27%20flag%3A%27g%27%29.%0D%09self%0D%09%09assert%3A%20%28reg%20test%3A%20%27abcdefg%27%29%3B%0D%09%09deny%3A%20%28reg%20test%3A%20%27abcde%27%29.%0D%09self%0D%09%09should%3A%20%5Breg%20test%3A%20true%5D%0D%09%09raise%3A%20Error.%20"));
smalltalk.bind(smalltalk.StringTestCase, unescape("testAsNumber"), "testAsNumber", function StringTestCase__testAsNumber(){
const self = this; self.assert_equals_(("5".asNumber()),(5));
self.assert_equals_(("".asNumber()),(0));
self.assert_equals_(("2rr100".asNumber()),(0));
self.assert_equals_(("2r100".asNumber()),(4));
return self;
}
, "running", unescape("testAsNumber%0D%0D%09self%0D%09%09assert%3A%20%275%27%20asNumber%0D%09%09equals%3A%205.%0D%09self%0D%09%09assert%3A%20%27%27%20asNumber%0D%09%09equals%3A%200.%0D%09self%20%0D%09%09assert%3A%20%272rr100%27%20asNumber%0D%09%09equals%3A%200.%0D%09self%20%0D%09%09assert%3A%20%272r100%27%20asNumber%0D%09%09equals%3A%204%20"));
