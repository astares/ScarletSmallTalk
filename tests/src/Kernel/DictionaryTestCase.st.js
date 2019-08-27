smalltalk.addClass("DictionaryTestCase", smalltalk.TestCase, [], 'nil');
smalltalk.DictionaryTestCase.$classVariableNames=("");
smalltalk.bind(smalltalk.DictionaryTestCase, unescape("testAsArray"), "testAsArray", function DictionaryTestCase__testAsArray(){
var td = nil;
var arr = nil;
const self = this; td=smalltalk.Dictionary.$$new();
self.assert_equals_((td.asArray()),[]);
td.add_(("test1"._minus_gt((1))));
td.add_(("test2"._minus_gt((2))));
td.add_(("test3"._minus_gt((3))));
td.add_(("test4"._minus_gt((4))));
arr=td.asArray();
self.assert_((arr.isArray()));
self.assert_equals_((arr.asSet()),([(1), (2), (3), (4)].asSet()));
return self;
}
, "running", unescape("testAsArray%0D%0D%09%7C%20td%20arr%20%7C%0D%09td%20%3A%3D%20Dictionary%20new.%0D%09self%20%0D%09%09assert%3A%20td%20asArray%20%0D%09%09equals%3A%20%23%28%29.%0D%09td%20add%3A%20%27test1%27%20-%3E%201.%0D%09td%20add%3A%20%27test2%27%20-%3E%202.%0D%09td%20add%3A%20%27test3%27%20-%3E%203.%0D%09td%20add%3A%20%27test4%27%20-%3E%204.%0D%09arr%20%3A%3D%20td%20asArray.%0D%09self%20assert%3A%20arr%20isArray.%0D%09self%0D%09%09assert%3A%20arr%20asSet%0D%09%09equals%3A%20%23%281%202%203%204%29%20asSet.%20"));
smalltalk.bind(smalltalk.DictionaryTestCase, unescape("testAsOrderedCollection"), "testAsOrderedCollection", function DictionaryTestCase__testAsOrderedCollection(){
var td = nil;
var oCollection = nil;
const self = this; td=smalltalk.Dictionary.$$new();
td.add_(("test1"._minus_gt((1))));
td.add_(("test2"._minus_gt((2))));
oCollection=td.asOrderedCollection();
self.assert_equals_((oCollection.$klass),smalltalk.OrderedCollection);
(function DictionaryTestCase__($1$){
$1$.assert_((oCollection.includes_((1))));
return $1$.assert_((oCollection.includes_((2))))}
)(self);
self.assert_equals_((oCollection.size()),(2));
return self;
}
, "running", unescape("testAsOrderedCollection%0D%0D%09%7C%20td%20oCollection%20%7C%0D%09td%20%3A%3D%20Dictionary%20new.%0D%09td%20add%3A%20%27test1%27%20-%3E%201.%0D%09td%20add%3A%20%27test2%27%20-%3E%202.%0D%09oCollection%20%3A%3D%20td%20asOrderedCollection.%0D%09self%0D%09%09assert%3A%20oCollection%20class%0D%09%09equals%3A%20OrderedCollection.%0D%09self%0D%09%09assert%3A%20%28oCollection%20includes%3A%201%29%3B%0D%09%09assert%3A%20%28oCollection%20includes%3A%202%29.%0D%09self%20%0D%09%09assert%3A%20oCollection%20size%20%0D%09%09equals%3A%202%20"));
smalltalk.bind(smalltalk.DictionaryTestCase, unescape("testAsSet"), "testAsSet", function DictionaryTestCase__testAsSet(){
var td = nil;
var set = nil;
const self = this; td=smalltalk.Dictionary.$$new();
td.add_(("test1"._minus_gt((1))));
td.add_(("test2"._minus_gt((2))));
set=td.asSet();
self.assert_((set.isSet()));
self.assert_equals_(set,([(1), (2)].asSet()));
return self;
}
, "running", unescape("testAsSet%0D%0D%09%7C%20td%20set%20%7C%0D%09td%20%3A%3D%20Dictionary%20new.%0D%09td%20add%3A%20%27test1%27%20-%3E%201.%0D%09td%20add%3A%20%27test2%27%20-%3E%202.%0D%09set%20%3A%3D%20td%20asSet.%0D%09self%20assert%3A%20set%20isSet.%0D%09self%20%0D%09%09assert%3A%20set%0D%09%09equals%3A%20%23%281%202%29%20asSet.%20"));
smalltalk.bind(smalltalk.DictionaryTestCase, unescape("testAsSortedCollection"), "testAsSortedCollection", function DictionaryTestCase__testAsSortedCollection(){
var td = nil;
var sc = nil;
const self = this; td=smalltalk.Dictionary.$$new();
td.add_(("test2"._minus_gt((2))));
td.add_(("test1"._minus_gt((1))));
sc=td.asSortedCollection();
return self;
}
, "running", unescape("testAsSortedCollection%0D%0D%09%7C%20td%20sc%20%7C%0D%09td%20%3A%3D%20Dictionary%20new.%0D%09td%20add%3A%20%27test2%27%20-%3E%202.%0D%09td%20add%3A%20%27test1%27%20-%3E%201.%0D%09sc%20%3A%3D%20td%20asSortedCollection"));
smalltalk.bind(smalltalk.DictionaryTestCase, unescape("testCollect"), "testCollect", function DictionaryTestCase__testCollect(){
var td = nil;
var resultD = nil;
var resultVals = nil;
var expectedVals = nil;
const self = this; expectedVals=[(1), (2), (3), (4)].asSet();
td=smalltalk.Dictionary.$$new();
td.add_(("test1"._minus_gt((0))));
td.add_(("test2"._minus_gt((1))));
td.add_(("test3"._minus_gt((2))));
td.add_(("test4"._minus_gt((3))));
resultD=td.collect_((function DictionaryTestCase__(each){
return each._plus((1));
}
));
resultVals=(resultD.values()).asSet();
self.assert_equals_(resultVals,expectedVals);
self.should_raise_((function DictionaryTestCase__(){
return td.collect_((3));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testCollect%0D%0D%09%7C%20td%20resultD%20resultVals%20expectedVals%20%7C%0D%09expectedVals%20%3A%3D%20%23%281%202%203%204%29%20asSet.%0D%09td%20%3A%3D%20Dictionary%20new.%0D%09td%20add%3A%20%27test1%27%20-%3E%200.%0D%09td%20add%3A%20%27test2%27%20-%3E%201.%0D%09td%20add%3A%20%27test3%27%20-%3E%202.%0D%09td%20add%3A%20%27test4%27%20-%3E%203.%0D%09resultD%20%3A%3D%20td%20collect%3A%20%5B%3Aeach%20%7C%20each%20+%201%5D.%0D%09resultVals%20%3A%3D%20resultD%20values%20asSet.%0D%09self%20%0D%09%09assert%3A%20resultVals%0D%09%09equals%3A%20expectedVals.%0D%09self%0D%09%09should%3A%20%5Btd%20collect%3A%203%5D%0D%09%09raise%3A%20Error.%20"));
smalltalk.bind(smalltalk.DictionaryTestCase, unescape("testDetect"), "testDetect", function DictionaryTestCase__testDetect(){
var td = nil;
const self = this; td=smalltalk.Dictionary.$$new();
td.add_(("test1"._minus_gt((4))));
self.should_raise_((function DictionaryTestCase__(){
return td.detect_((function DictionaryTestCase__(each){
return each._lt((3));
}
));
}
),smalltalk.Error);
td.add_(("test2"._minus_gt((2))));
self.assert_equals_((td.detect_((function DictionaryTestCase__(each){
return each._lt((3));
}
))),(2));
self.should_raise_((function DictionaryTestCase__(){
return td.detect_((4));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testDetect%0D%0D%09%7C%20td%20%7C%0D%09td%20%3A%3D%20Dictionary%20new.%0D%09td%20add%3A%20%27test1%27%20-%3E%204.%0D%09self%0D%09%09should%3A%5Btd%20detect%3A%20%5B%3Aeach%20%7C%20each%20%3C%203%5D%5D%0D%09%09raise%3A%20Error.%0D%09td%20add%3A%20%27test2%27%20-%3E%202.%0D%09self%0D%09%09assert%3A%20%28td%20detect%3A%20%5B%3Aeach%20%7C%20each%20%3C%203%5D%29%0D%09%09equals%3A%202.%0D%09self%0D%09%09should%3A%20%5Btd%20detect%3A%204%5D%0D%09%09raise%3A%20Error.%20"));
smalltalk.bind(smalltalk.DictionaryTestCase, unescape("testDetectIfNone"), "testDetectIfNone", function DictionaryTestCase__testDetectIfNone(){
var td = nil;
const self = this; td=smalltalk.Dictionary.$$new();
td.add_(("test1"._minus_gt((6))));
self.assert_equals_((td.detect_ifNone_((function DictionaryTestCase__(each){
return each._lt((6));
}
),(function DictionaryTestCase__(){
return (-1);
}
))),(-1));
td.add_(("test2"._minus_gt((5))));
self.assert_equals_((td.detect_ifNone_((function DictionaryTestCase__(each){
return each._lt((6));
}
),(function DictionaryTestCase__(){
return (-1);
}
))),(5));
self.should_raise_((function DictionaryTestCase__(){
return td.detect_ifNone_((function DictionaryTestCase__(each){
return each._lt((6));
}
),(-1));
}
),smalltalk.Error);
self.should_raise_((function DictionaryTestCase__(){
return td.detect_ifNone_((5),(function DictionaryTestCase__(){
return (-1);
}
));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testDetectIfNone%0D%0D%09%7C%20td%20%7C%0D%09td%20%3A%3D%20Dictionary%20new.%0D%09td%20add%3A%20%27test1%27%20-%3E%206.%0D%09self%20%0D%09%09assert%3A%20%28td%20detect%3A%20%5B%3Aeach%20%7C%20each%20%3C%206%5D%20ifNone%3A%20%5B-1%5D%29%0D%09%09equals%3A%20-1.%0D%09td%20add%3A%20%27test2%27%20-%3E%205.%0D%09self%0D%09%09assert%3A%20%28td%20detect%3A%20%5B%3Aeach%20%7C%20each%20%3C%206%5D%20ifNone%3A%20%5B-1%5D%29%0D%09%09equals%3A%205.%0D%09self%0D%09%09should%3A%20%5Btd%20detect%3A%20%5B%3Aeach%20%7C%20each%20%3C%206%5D%20ifNone%3A%20-1%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09should%3A%20%5Btd%20detect%3A%205%20ifNone%3A%20%5B-1%5D%5D%0D%09%09raise%3A%20Error%20"));
smalltalk.bind(smalltalk.DictionaryTestCase, unescape("testDo"), "testDo", function DictionaryTestCase__testDo(){
var td = nil;
var result = nil;
const self = this; result=(0);
td=smalltalk.Dictionary.$$new();
td.add_(("test1"._minus_gt((1))));
td.add_(("test2"._minus_gt((2))));
td.add_(("test3"._minus_gt((3))));
td.add_(("test4"._minus_gt((4))));
td.do_((function DictionaryTestCase__(each){
return result=result._plus(each);
}
));
self.assert_equals_(result,(10));
self.should_raise_((function DictionaryTestCase__(){
return td.do_((4));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testDo%0D%0D%09%7C%20td%20result%20%7C%0D%09result%20%3A%3D%200.%0D%09td%20%3A%3D%20Dictionary%20new.%0D%09td%20add%3A%20%27test1%27%20-%3E%201.%0D%09td%20add%3A%20%27test2%27%20-%3E%202.%0D%09td%20add%3A%20%27test3%27%20-%3E%203.%0D%09td%20add%3A%20%27test4%27%20-%3E%204.%0D%09td%20do%3A%20%5B%3Aeach%20%7C%20result%20%3A%3D%20result%20+%20each%5D.%0D%09self%20%0D%09%09assert%3A%20result%20%0D%09%09equals%3A%2010.%0D%09self%0D%09%09should%3A%20%5Btd%20do%3A%204%5D%0D%09%09raise%3A%20Error%20"));
smalltalk.bind(smalltalk.DictionaryTestCase, unescape("testDoSeparatedBy"), "testDoSeparatedBy", function DictionaryTestCase__testDoSeparatedBy(){
var td = nil;
var result = nil;
const self = this; td=smalltalk.Dictionary.$$new();
result="";
td.add_(("test1"._minus_gt("1")));
td.add_(("test2"._minus_gt("2")));
td.add_(("test3"._minus_gt("3")));
td.add_(("test4"._minus_gt("4")));
td.do_separatedBy_((function DictionaryTestCase__(each){
return result=result._comma(each);
}
),(function DictionaryTestCase__(){
return result=result._comma(" ");
}
));
self.assert_equals_(result,"1 2 3 4");
self.should_raise_((function DictionaryTestCase__(){
return td.do_separatedBy_((function DictionaryTestCase__(each){
return each._plus((1));
}
),(4));
}
),smalltalk.Error);
self.should_raise_((function DictionaryTestCase__(){
return td.do_separatedBy_((4),(function DictionaryTestCase__(){
return (4);
}
));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testDoSeparatedBy%0D%0D%09%7C%20td%20result%20%7C%0D%09td%20%3A%3D%20Dictionary%20new.%0D%09result%20%3A%3D%20%27%27.%0D%09td%20add%3A%20%27test1%27%20-%3E%20%271%27.%0D%09td%20add%3A%20%27test2%27%20-%3E%20%272%27.%0D%09td%20add%3A%20%27test3%27%20-%3E%20%273%27.%0D%09td%20add%3A%20%27test4%27%20-%3E%20%274%27.%0D%09td%20do%3A%20%5B%3Aeach%20%7C%20result%20%3A%3D%20result%2Ceach%5D%20separatedBy%3A%20%5Bresult%20%3A%3D%20result%2C%27%20%27%5D.%0D%09self%20%0D%09%09assert%3A%20result%0D%09%09equals%3A%20%271%202%203%204%27.%0D%09self%0D%09%09should%3A%20%5Btd%20do%3A%20%5B%3Aeach%20%7C%20each%20+%201%5D%20separatedBy%3A%204%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09should%3A%20%5Btd%20do%3A%204%20separatedBy%3A%20%5B4%5D%5D%0D%09%09raise%3A%20Error%20"));
smalltalk.bind(smalltalk.DictionaryTestCase, unescape("testAdd"), "testAdd", function DictionaryTestCase__testAdd(){
var td = nil;
const self = this; td=smalltalk.Dictionary.$$new();
self.deny_((td.includes_((1))));
self.deny_((td.includesKey_("test1")));
self.assert_(((td.size())._eq((0))));
td.add_(("test1"._minus_gt((1))));
self.assert_(((td.size())._eq((1))));
self.assert_((td.includes_((1))));
self.assert_((td.includesKey_("test1")));
td.add_(("test2"._minus_gt((2))));
self.assert_(((td.size())._eq((2))));
self.assert_((td.includes_((2))));
self.assert_((td.includesKey_("test2")));
td.add_(("test1"._minus_gt((3))));
self.assert_(((td.size())._eq((2))));
self.deny_((td.includes_((1))));
self.assert_((td.includes_((3))));
self.assert_((td.includesKey_("test1")));
return self;
}
, "running", unescape("testAdd%0D%0D%09%7C%20td%20%7C%0D%09td%20%3A%3D%20Dictionary%20new.%0D%09self%20deny%3A%20%28td%20includes%3A%201%29.%0D%09self%20deny%3A%20%28td%20includesKey%3A%20%27test1%27%29.%0D%09self%20assert%3A%20td%20size%20%3D%200.%0D%09td%20add%3A%20%27test1%27%20-%3E%201.%0D%09self%20assert%3A%20td%20size%20%3D%201.%0D%09self%20assert%3A%20%28td%20includes%3A%201%29.%0D%09self%20assert%3A%20%28td%20includesKey%3A%20%27test1%27%29.%0D%0D%09td%20add%3A%20%27test2%27%20-%3E%202.%0D%09self%20assert%3A%20td%20size%20%3D%202.%0D%09self%20assert%3A%20%28td%20includes%3A%202%29.%0D%09self%20assert%3A%20%28td%20includesKey%3A%20%27test2%27%29.%0D%0D%09td%20add%3A%20%27test1%27%20-%3E%203.%0D%09self%20assert%3A%20td%20size%20%3D%202.%0D%09self%20deny%3A%20%28td%20includes%3A%201%29.%0D%09self%20assert%3A%20%28td%20includes%3A%203%29.%0D%09self%20assert%3A%20%28td%20includesKey%3A%20%27test1%27%29%20"));
smalltalk.bind(smalltalk.DictionaryTestCase, unescape("testRemoveKey"), "testRemoveKey", function DictionaryTestCase__testRemoveKey(){
var td = nil;
const self = this; var $early={name:"stReturn"};
try {
td=smalltalk.Dictionary.$$new();
self.deny_((td.includes_((1))));
self.deny_((td.includesKey_("test1")));
self.assert_(((td.size())._eq((0))));
td.add_(("test1"._minus_gt((1))));
self.assert_(((td.size())._eq((1))));
self.assert_((td.includes_((1))));
self.assert_((td.includesKey_("test1")));
td.add_(("test2"._minus_gt((2))));
self.assert_(((td.size())._eq((2))));
self.assert_((td.includes_((2))));
self.assert_((td.includesKey_("test2")));
td.removeKey_("test1");
self.assert_(((td.size())._eq((1))));
self.deny_((td.includes_((1))));
self.assert_((td.includes_((2))));
self.deny_((td.includesKey_("test1")));
td.add_(("test3"._minus_gt((2))));
td.add_(("test1"._minus_gt((5))));
td.add_(("test4"._minus_gt((2))));
self.assert_(((td.size())._eq((4))));
self.assert_((td.includes_((2))));
self.assert_((td.includes_((5))));
["test1", "test2", "test3", "test4"].do_((function DictionaryTestCase__(each){
return self.assert_((td.includesKey_(each)));
}
));
td.removeKey_("test3");
self.assert_(((td.size())._eq((3))));
["test1", "test2", "test4"].do_((function DictionaryTestCase__(each){
return self.assert_((td.includesKey_(each)));
}
));
["test2", "test4"].do_((function DictionaryTestCase__(each){
return self.assert_equals_((td.at_ifAbsent_(each,(function DictionaryTestCase__(){
$early.result=self; throw ($early);
}
))),(2));
}
));
return self;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "running", unescape("testRemoveKey%0D%0D%09%7C%20td%20%7C%0D%09td%20%3A%3D%20Dictionary%20new.%0D%09self%20deny%3A%20%28td%20includes%3A%201%29.%0D%09self%20deny%3A%20%28td%20includesKey%3A%20%27test1%27%29.%0D%09self%20assert%3A%20td%20size%20%3D%200.%0D%09td%20add%3A%20%27test1%27%20-%3E%201.%0D%09self%20assert%3A%20td%20size%20%3D%201.%0D%09self%20assert%3A%20%28td%20includes%3A%201%29.%0D%09self%20assert%3A%20%28td%20includesKey%3A%20%27test1%27%29.%0D%0D%09td%20add%3A%20%27test2%27%20-%3E%202.%0D%09self%20assert%3A%20td%20size%20%3D%202.%0D%09self%20assert%3A%20%28td%20includes%3A%202%29.%0D%09self%20assert%3A%20%28td%20includesKey%3A%20%27test2%27%29.%0D%0D%09td%20removeKey%3A%20%27test1%27.%0D%09self%20assert%3A%20td%20size%20%3D%201.%0D%09self%20deny%3A%20%28td%20includes%3A%201%29.%0D%09self%20assert%3A%20%28td%20includes%3A%202%29.%0D%09self%20deny%3A%20%28td%20includesKey%3A%20%27test1%27%29.%0D%0D%09td%20add%3A%20%27test3%27%20-%3E%202.%0D%09td%20add%3A%20%27test1%27%20-%3E%205.%0D%09td%20add%3A%20%27test4%27%20-%3E%202.%0D%0D%09self%20assert%3A%20td%20size%20%3D%204.%0D%09self%20assert%3A%20%28td%20includes%3A%202%29.%0D%09self%20assert%3A%20%28td%20includes%3A%205%29.%0D%09%23%28%27test1%27%20%27test2%27%20%27test3%27%20%27test4%27%29%20do%3A%20%5B%20%3Aeach%20%7C%20self%20assert%3A%20%28td%20includesKey%3A%20each%29%5D.%0D%09%0D%09td%20removeKey%3A%20%27test3%27.%0D%09self%20assert%3A%20td%20size%20%3D%203.%0D%09%23%28%27test1%27%20%27test2%27%20%27test4%27%29%20do%3A%20%5B%20%3Aeach%20%7C%20self%20assert%3A%20%28td%20includesKey%3A%20each%29%20%5D.%0D%09%23%28%27test2%27%20%27test4%27%29%20do%3A%20%5B%3Aeach%20%7C%20self%20assert%3A%20%28td%20at%3A%20each%20ifAbsent%3A%5B%5Eself%5D%29%20equals%3A%202%5D%20"));
smalltalk.bind(smalltalk.DictionaryTestCase, unescape("testIncludes"), "testIncludes", function DictionaryTestCase__testIncludes(){
var td = nil;
const self = this; td=smalltalk.Dictionary.$$new();
self.deny_((td.includes_((5))));
td.add_(("test"._minus_gt((5))));
self.assert_((td.includes_((5))));
return self;
}
, "running", unescape("testIncludes%0D%0D%09%7C%20td%20%7C%0D%09td%20%3A%3D%20Dictionary%20new.%0D%09self%20deny%3A%20%28td%20includes%3A%205%29.%0D%09td%20add%3A%20%27test%27%20-%3E%205.%0D%09self%20assert%3A%20%28td%20includes%3A%205%29.%20"));
smalltalk.bind(smalltalk.DictionaryTestCase, unescape("testInjectInto"), "testInjectInto", function DictionaryTestCase__testInjectInto(){
var td = nil;
var result = nil;
const self = this; td=smalltalk.Dictionary.$$new();
td.add_(("test1"._minus_gt((1))));
td.add_(("test2"._minus_gt((2))));
td.add_(("test3"._minus_gt((3))));
td.add_(("test4"._minus_gt((4))));
result=td.inject_into_((0),(function DictionaryTestCase__(sum,each){
return sum._plus(each);
}
));
self.assert_equals_(result,(10));
self.should_raise_((function DictionaryTestCase__(){
return td.inject_into_((0),(3));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testInjectInto%0D%0D%09%7C%20td%20result%20%7C%0D%09td%20%3A%3D%20Dictionary%20new.%0D%09td%20add%3A%20%27test1%27%20-%3E%201.%0D%09td%20add%3A%20%27test2%27%20-%3E%202.%0D%09td%20add%3A%20%27test3%27%20-%3E%203.%0D%09td%20add%3A%20%27test4%27%20-%3E%204.%0D%09result%20%3A%3D%20td%20inject%3A%200%20into%3A%20%5B%3Asum%20%3Aeach%20%7C%20sum%20+%20each%5D.%0D%09self%20%0D%09%09assert%3A%20result%0D%09%09equals%3A%2010.%0D%09self%0D%09%09should%3A%20%5Btd%20inject%3A%200%20into%3A%203%5D%0D%09%09raise%3A%20Error%20"));
smalltalk.bind(smalltalk.DictionaryTestCase, unescape("testIsEmpty"), "testIsEmpty", function DictionaryTestCase__testIsEmpty(){
var td = nil;
const self = this; td=smalltalk.Dictionary.$$new();
self.assert_((td.isEmpty()));
td.add_(("test"._minus_gt((1))));
self.deny_((td.isEmpty()));
return self;
}
, "running", unescape("testIsEmpty%0D%0D%09%7C%20td%20%7C%0D%09td%20%3A%3D%20Dictionary%20new.%0D%09self%20assert%3A%20td%20isEmpty.%0D%09td%20add%3A%20%27test%27%20-%3E%201.%0D%09self%20deny%3A%20td%20isEmpty.%20"));
smalltalk.bind(smalltalk.DictionaryTestCase, unescape("testNotEmpty"), "testNotEmpty", function DictionaryTestCase__testNotEmpty(){
var td = nil;
const self = this; td=smalltalk.Dictionary.$$new();
self.deny_((td.notEmpty()));
td.add_(("test"._minus_gt((1))));
self.assert_((td.notEmpty()));
return self;
}
, "running", unescape("testNotEmpty%0D%0D%09%7C%20td%20%7C%0D%09td%20%3A%3D%20Dictionary%20new.%0D%09self%20deny%3A%20td%20notEmpty.%0D%09td%20add%3A%20%27test%27%20-%3E%201.%0D%09self%20assert%3A%20td%20notEmpty.%20"));
smalltalk.bind(smalltalk.DictionaryTestCase, unescape("testOccurrencesOf"), "testOccurrencesOf", function DictionaryTestCase__testOccurrencesOf(){
var td = nil;
const self = this; td=smalltalk.Dictionary.$$new();
self.assert_equals_((td.occurrencesOf_((1))),(0));
td.add_(("test"._minus_gt((1))));
td.add_(("test2"._minus_gt((1))));
td.add_(("test3"._minus_gt((1))));
self.assert_equals_((td.occurrencesOf_((1))),(3));
return self;
}
, "running", unescape("testOccurrencesOf%0D%0D%09%7C%20td%20%7C%0D%09td%20%3A%3D%20Dictionary%20new.%0D%09self%20%0D%09%09assert%3A%20%28td%20occurrencesOf%3A%201%29%0D%09%09equals%3A%200.%0D%09td%20add%3A%20%27test%27%20-%3E%201.%0D%09td%20add%3A%20%27test2%27%20-%3E%201.%0D%09td%20add%3A%20%27test3%27%20-%3E%201.%0D%09self%0D%09%09assert%3A%20%28td%20occurrencesOf%3A%201%29%0D%09%09equals%3A%203.%20"));
smalltalk.bind(smalltalk.DictionaryTestCase, unescape("testReject"), "testReject", function DictionaryTestCase__testReject(){
var td = nil;
var resultDictionary = nil;
var vals = nil;
const self = this; td=smalltalk.Dictionary.$$new();
td.add_(("test"._minus_gt((1))));
td.add_(("test2"._minus_gt((2))));
td.add_(("test3"._minus_gt((3))));
td.add_(("test4"._minus_gt((4))));
resultDictionary=td.reject_((function DictionaryTestCase__(each){
return each.odd();
}
));
vals=(resultDictionary.values()).asSet();
self.assert_equals_(vals,([(2), (4)].asSet()));
self.should_raise_((function DictionaryTestCase__(){
return td.reject_((4));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testReject%0D%0D%09%7C%20td%20resultDictionary%20vals%20%7C%0D%09td%20%3A%3D%20Dictionary%20new.%0D%09td%20add%3A%20%27test%27%20-%3E%20%201.%0D%09td%20add%3A%20%27test2%27%20-%3E%202.%0D%09td%20add%3A%20%27test3%27%20-%3E%203.%0D%09td%20add%3A%20%27test4%27%20-%3E%204.%0D%09resultDictionary%3A%3D%20td%20reject%3A%20%5B%3Aeach%20%7C%20each%20odd%5D.%0D%09vals%20%3A%3D%20resultDictionary%20values%20asSet.%0D%09self%20%0D%09%09assert%3A%20vals%20%0D%09%09equals%3A%20%23%282%204%29%20asSet.%0D%09self%0D%09%09should%3A%20%5Btd%20reject%3A%204%5D%0D%09%09raise%3A%20Error%20"));
smalltalk.bind(smalltalk.DictionaryTestCase, unescape("testSelect"), "testSelect", function DictionaryTestCase__testSelect(){
var td = nil;
var resultDictionary = nil;
var vals = nil;
const self = this; td=smalltalk.Dictionary.$$new();
td.add_(("test"._minus_gt((1))));
td.add_(("test2"._minus_gt((2))));
td.add_(("test3"._minus_gt((3))));
td.add_(("test4"._minus_gt((4))));
resultDictionary=td.select_((function DictionaryTestCase__(each){
return each.odd();
}
));
vals=(resultDictionary.values()).asSet();
self.assert_equals_(vals,([(1), (3)].asSet()));
self.should_raise_((function DictionaryTestCase__(){
return td.select_((4));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testSelect%0D%0D%09%7C%20td%20resultDictionary%20vals%20%7C%0D%09td%20%3A%3D%20Dictionary%20new.%0D%09td%20add%3A%20%27test%27%20-%3E%20%201.%0D%09td%20add%3A%20%27test2%27%20-%3E%202.%0D%09td%20add%3A%20%27test3%27%20-%3E%203.%0D%09td%20add%3A%20%27test4%27%20-%3E%204.%0D%09resultDictionary%3A%3D%20td%20select%3A%20%5B%3Aeach%20%7C%20each%20odd%5D.%0D%09vals%20%3A%3D%20resultDictionary%20values%20asSet.%0D%09self%20%0D%09%09assert%3A%20vals%20%0D%09%09equals%3A%20%23%281%203%29%20asSet.%0D%09self%0D%09%09should%3A%20%5Btd%20select%3A%204%5D%0D%09%09raise%3A%20Error%20"));
smalltalk.bind(smalltalk.DictionaryTestCase, unescape("testSize"), "testSize", function DictionaryTestCase__testSize(){
var td = nil;
const self = this; td=smalltalk.Dictionary.$$new();
self.assert_equals_((td.size()),(0));
td.add_(("test"._minus_gt((5))));
td.add_(("test2"._minus_gt((5))));
self.assert_equals_((td.size()),(2));
return self;
}
, "running", unescape("testSize%0D%0D%09%7C%20td%20%7C%0D%09td%20%3A%3D%20Dictionary%20new.%0D%09self%20%0D%09%09assert%3A%20td%20size%20%0D%09%09equals%3A%200.%0D%09td%20add%3A%20%27test%27%20-%3E%205.%0D%09td%20add%3A%20%27test2%27%20-%3E%205.%0D%09self%20%0D%09%09assert%3A%20td%20size%20%0D%09%09equals%3A%202.%20"));
