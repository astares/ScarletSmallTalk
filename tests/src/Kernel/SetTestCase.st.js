smalltalk.addClass("SetTestCase", smalltalk.TestCase, [], 'nil');
smalltalk.SetTestCase.$classVariableNames=("");
smalltalk.bind(smalltalk.SetTestCase, unescape("testAsArray"), "testAsArray", function SetTestCase__testAsArray(){
var set = nil;
var resultArray = nil;
const self = this; set=smalltalk.Set.with_with_with_((1),(2),(3));
resultArray=set.asArray();
self.assert_equals_((resultArray.$klass),smalltalk.Array);
[(1), (2), (3)].do_((function SetTestCase__(each){
return self.assert_((resultArray.includes_(each)));
}
));
self.assert_equals_((resultArray.size()),(3));
return self;
}
, "running", unescape("testAsArray%0D%0D%09%7C%20set%20resultArray%20%7C%0D%09set%20%3A%3D%20Set%20with%3A%201%20with%3A%202%20with%3A%203.%0D%09resultArray%20%3A%3D%20set%20asArray.%0D%09self%20%0D%09%09assert%3A%20resultArray%20class%0D%09%09equals%3A%20Array.%0D%09%23%281%202%203%29%20do%3A%20%5B%3Aeach%20%7C%20self%20assert%3A%20%28resultArray%20includes%3A%20each%29%5D.%0D%09self%0D%09%09assert%3A%20resultArray%20size%0D%09%09equals%3A%203%20"));
smalltalk.bind(smalltalk.SetTestCase, unescape("testAsOrderedCollection"), "testAsOrderedCollection", function SetTestCase__testAsOrderedCollection(){
var ts = nil;
var oCollection = nil;
const self = this; ts=smalltalk.Set.with_with_((1),(2));
oCollection=ts.asOrderedCollection();
self.assert_equals_((oCollection.$klass),smalltalk.OrderedCollection);
(function SetTestCase__($1$){
$1$.assert_((oCollection.includes_((1))));
return $1$.assert_((oCollection.includes_((2))))}
)(self);
self.assert_equals_((oCollection.size()),(2));
return self;
}
, "running", unescape("testAsOrderedCollection%0D%0D%09%7C%20ts%20oCollection%20%7C%0D%09ts%20%3A%3D%20Set%20with%3A%201%20with%3A%202.%0D%09oCollection%20%3A%3D%20ts%20asOrderedCollection.%0D%09self%0D%09%09assert%3A%20oCollection%20class%0D%09%09equals%3A%20OrderedCollection.%0D%09self%0D%09%09assert%3A%20%28oCollection%20includes%3A%201%29%3B%0D%09%09assert%3A%20%28oCollection%20includes%3A%202%29.%0D%09self%0D%09%09assert%3A%20oCollection%20size%0D%09%09equals%3A%202%20"));
smalltalk.bind(smalltalk.SetTestCase, unescape("testAsSet"), "testAsSet", function SetTestCase__testAsSet(){
var testSet = nil;
var resultSet = nil;
const self = this; testSet=smalltalk.Set.with_with_((1),(2));
resultSet=testSet.asSet();
self.assert_((resultSet.isSet()));
self.assert_equals_(resultSet,([(1), (2)].asSet()));
return self;
}
, "running", unescape("testAsSet%0D%0D%09%7C%20testSet%20resultSet%20%7C%0D%09testSet%20%3A%3D%20Set%20with%3A%201%20with%3A%202.%0D%09resultSet%20%3A%3D%20testSet%20asSet.%0D%09self%20assert%3A%20resultSet%20isSet.%0D%09self%0D%09%09assert%3A%20resultSet%0D%09%09equals%3A%20%23%281%202%29%20asSet.%20"));
smalltalk.bind(smalltalk.SetTestCase, unescape("testAsSortedCollection"), "testAsSortedCollection", function SetTestCase__testAsSortedCollection(){
var testSet = nil;
var sortedCollection = nil;
const self = this; testSet=smalltalk.Set.with_with_((2),(1));
sortedCollection=testSet.asSortedCollection();
self.assert_equals_((sortedCollection.$klass),smalltalk.SortedCollection);
return self;
}
, "running", unescape("testAsSortedCollection%0D%0D%09%7C%20testSet%20sortedCollection%20%7C%0D%09testSet%20%3A%3D%20Set%20with%3A%202%20with%3A%201.%0D%09sortedCollection%20%3A%3D%20testSet%20asSortedCollection.%0D%09self%0D%09%09assert%3A%20sortedCollection%20class%0D%09%09equals%3A%20SortedCollection.%20"));
smalltalk.bind(smalltalk.SetTestCase, unescape("testCollect"), "testCollect", function SetTestCase__testCollect(){
var testSet = nil;
var resultSet = nil;
var expectedSet = nil;
const self = this; expectedSet=[(1), (2), (3), (4)].asSet();
testSet=[(0), (1), (2), (3)].asSet();
resultSet=testSet.collect_((function SetTestCase__(each){
return each._plus((1));
}
));
self.assert_equals_(resultSet,expectedSet);
return self;
}
, "running", unescape("testCollect%0D%0D%09%7C%20testSet%20resultSet%20expectedSet%20%7C%0D%09expectedSet%20%3A%3D%20%23%281%202%203%204%29%20asSet.%0D%09testSet%20%3A%3D%20%23%280%201%202%203%29%20asSet.%0D%09resultSet%20%3A%3D%20testSet%20collect%3A%20%5B%3Aeach%20%7C%20each%20+%201%5D.%0D%09self%0D%09%09assert%3A%20resultSet%0D%09%09equals%3A%20expectedSet%20"));
smalltalk.bind(smalltalk.SetTestCase, unescape("testDetect"), "testDetect", function SetTestCase__testDetect(){
var testSet = nil;
const self = this; testSet=smalltalk.Set.with_((2));
self.should_raise_((function SetTestCase__(){
return testSet.detect_((function SetTestCase__(each){
return each._lt((2));
}
));
}
),smalltalk.Error);
testSet.add_((1));
self.assert_equals_((testSet.detect_((function SetTestCase__(each){
return each._lt((2));
}
))),(1));
return self;
}
, "running", unescape("testDetect%0D%0D%09%7C%20testSet%20%7C%0D%09testSet%20%3A%3D%20Set%20with%3A%202.%0D%09self%0D%09%09should%3A%20%5BtestSet%20detect%3A%20%5B%3Aeach%20%7C%20each%20%3C%202%5D%5D%0D%09%09raise%3A%20Error.%0D%09testSet%20add%3A%201.%0D%09self%0D%09%09assert%3A%20%28testSet%20detect%3A%20%5B%3Aeach%20%7C%20each%20%3C%202%5D%29%0D%09%09equals%3A%201.%20"));
smalltalk.bind(smalltalk.SetTestCase, unescape("testDetectIfNone"), "testDetectIfNone", function SetTestCase__testDetectIfNone(){
var testSet = nil;
const self = this; testSet=smalltalk.Set.with_((2));
self.assert_equals_((testSet.detect_ifNone_((function SetTestCase__(each){
return each._lt((2));
}
),(function SetTestCase__(){
return (-1);
}
))),(-1));
testSet.add_((1));
self.assert_equals_((testSet.detect_ifNone_((function SetTestCase__(each){
return each._lt((2));
}
),(function SetTestCase__(){
return (-1);
}
))),(1));
return self;
}
, "running", unescape("testDetectIfNone%0D%0D%09%7C%20testSet%20%7C%0D%09testSet%20%3A%3D%20Set%20with%3A%202.%0D%09self%0D%09%09assert%3A%20%28testSet%20detect%3A%20%5B%3Aeach%20%7C%20each%20%3C%202%5D%20ifNone%3A%5B-1%5D%29%0D%09%09equals%3A%20-1.%0D%09testSet%20add%3A%201.%0D%09self%0D%09%09assert%3A%20%28testSet%20detect%3A%20%5B%3Aeach%20%7C%20each%20%3C%202%5D%20ifNone%3A%5B-1%5D%29%0D%09%09equals%3A%201.%20"));
smalltalk.bind(smalltalk.SetTestCase, unescape("testDo"), "testDo", function SetTestCase__testDo(){
var testSet = nil;
var result = nil;
const self = this; result=(0);
testSet=[(1), (2), (3), (4)].asSet();
testSet.do_((function SetTestCase__(each){
return result=result._plus(each);
}
));
self.assert_equals_(result,(10));
self.should_raise_((function SetTestCase__(){
return testSet.do_((4));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testDo%0D%0D%09%7C%20testSet%20result%20%7C%0D%09result%20%3A%3D%200.%0D%09testSet%20%3A%3D%20%23%281%202%203%204%29%20asSet.%0D%09testSet%20do%3A%20%5B%3Aeach%20%7C%20result%20%3A%3D%20result%20+%20each%5D.%0D%09self%0D%09%09assert%3A%20result%0D%09%09equals%3A%2010.%0D%09self%0D%09%09should%3A%20%5BtestSet%20do%3A%204%5D%0D%09%09raise%3A%20Error%20"));
smalltalk.bind(smalltalk.SetTestCase, unescape("testDoSeparatedBy"), "testDoSeparatedBy", function SetTestCase__testDoSeparatedBy(){
var testSet = nil;
var result = nil;
const self = this; testSet=[(1), (2), (3), (4)].asSet();
result=(0);
testSet.do_separatedBy_((function SetTestCase__(each){
return result=result._plus(each);
}
),(function SetTestCase__(){
return result=result._plus((10));
}
));
self.assert_equals_(result,(40));
self.shouldnt_raise_((function SetTestCase__(){
return testSet.do_separatedBy_((function SetTestCase__(each){
return each._plus((1));
}
),(4));
}
),smalltalk.Error);
self.should_raise_((function SetTestCase__(){
return testSet.do_separatedBy_((4),(function SetTestCase__(){
return result=result._comma("");
}
));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testDoSeparatedBy%0D%0D%09%7C%20testSet%20result%20%7C%0D%09testSet%20%3A%3D%20%23%281%202%203%204%29%20asSet.%0D%09result%20%3A%3D%200.%0D%09testSet%20do%3A%20%5B%3Aeach%20%7C%20result%20%3A%3D%20result%20+%20each%5D%20separatedBy%3A%20%5Bresult%20%3A%3D%20result%20+%2010%5D.%0D%09self%0D%09%09assert%3A%20result%0D%09%09equals%3A%2040.%0D%09self%0D%09%09shouldnt%3A%20%5BtestSet%20do%3A%20%5B%3Aeach%20%7C%20each%20+%201%5D%20separatedBy%3A%204%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09should%3A%20%5BtestSet%20do%3A%204%20separatedBy%3A%20%5Bresult%20%3A%3D%20result%2C%27%27%5D%5D%0D%09%09raise%3A%20Error%20"));
smalltalk.bind(smalltalk.SetTestCase, unescape("testAdd"), "testAdd", function SetTestCase__testAdd(){
var testSet = nil;
const self = this; testSet=smalltalk.Set.$$new();
self.assert_(((testSet.size())._eq((0))));
testSet.add_((1));
self.assert_(((testSet.size())._eq((1))));
self.assert_((testSet.includes_((1))));
testSet.add_((2));
self.assert_(((testSet.size())._eq((2))));
self.assert_((testSet.includes_((2))));
testSet.add_((1));
self.assert_(((testSet.size())._eq((2))));
return self;
}
, "running", unescape("testAdd%0D%0D%09%7C%20testSet%20%7C%0D%09testSet%20%3A%3D%20Set%20new.%0D%09self%20assert%3A%20testSet%20size%20%3D%200.%0D%09testSet%20add%3A%201.%0D%09self%20assert%3A%20testSet%20size%20%3D%201.%0D%09self%20assert%3A%20%28testSet%20includes%3A%201%29.%0D%09testSet%20add%3A%202.%0D%09self%20assert%3A%20testSet%20size%20%3D%202.%0D%09self%20assert%3A%20%28testSet%20includes%3A%202%29.%0D%09testSet%20add%3A%201.%0D%09self%20assert%3A%20testSet%20size%20%3D%202%20"));
smalltalk.bind(smalltalk.SetTestCase, unescape("testRemove"), "testRemove", function SetTestCase__testRemove(){
var testSet = nil;
const self = this; testSet=smalltalk.Set.$$new();
self.assert_(((testSet.size())._eq((0))));
testSet.add_((1));
self.assert_(((testSet.size())._eq((1))));
self.assert_((testSet.includes_((1))));
testSet.add_((2));
self.assert_(((testSet.size())._eq((2))));
self.assert_((testSet.includes_((2))));
testSet.remove_((1));
self.assert_(((testSet.size())._eq((1))));
self.deny_((testSet.includes_((1))));
self.assert_((testSet.includes_((2))));
return self;
}
, "running", unescape("testRemove%0D%0D%09%7C%20testSet%20%7C%0D%09testSet%20%3A%3D%20Set%20new.%0D%09self%20assert%3A%20testSet%20size%20%3D%200.%0D%09testSet%20add%3A%201.%0D%09self%20assert%3A%20testSet%20size%20%3D%201.%0D%09self%20assert%3A%20%28testSet%20includes%3A%201%29.%0D%09testSet%20add%3A%202.%0D%09self%20assert%3A%20testSet%20size%20%3D%202.%0D%09self%20assert%3A%20%28testSet%20includes%3A%202%29.%0D%09testSet%20remove%3A%201.%0D%09self%20assert%3A%20testSet%20size%20%3D%201.%0D%09self%20deny%3A%20%28testSet%20includes%3A%201%29.%0D%09self%20assert%3A%20%28testSet%20includes%3A%202%29%20"));
smalltalk.bind(smalltalk.SetTestCase, unescape("testIncludes"), "testIncludes", function SetTestCase__testIncludes(){
var testSet = nil;
const self = this; testSet=smalltalk.Set.$$new();
self.deny_((testSet.includes_((1))));
testSet.add_((1));
self.assert_((testSet.includes_((1))));
return self;
}
, "running", unescape("testIncludes%0D%0D%09%7C%20testSet%20%7C%0D%09testSet%20%3A%3D%20Set%20new.%0D%09self%20deny%3A%20%28testSet%20includes%3A%201%29.%0D%09testSet%20add%3A%201.%0D%09self%20assert%3A%20%28testSet%20includes%3A%201%29%20"));
smalltalk.bind(smalltalk.SetTestCase, unescape("testInjectInto"), "testInjectInto", function SetTestCase__testInjectInto(){
var testSet = nil;
var result = nil;
const self = this; testSet=smalltalk.Set.withAll_([(1), (2), (3), (4)]);
result=testSet.inject_into_((0),(function SetTestCase__(sum,each){
return sum._plus(each);
}
));
self.assert_equals_(result,(10));
self.should_raise_((function SetTestCase__(){
return testSet.inject_into_((0),(1));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testInjectInto%0D%0D%09%7C%20testSet%20result%20%7C%0D%09testSet%20%3A%3D%20Set%20withAll%3A%20%23%281%202%203%204%29.%0D%09result%20%3A%3D%20testSet%20inject%3A%200%20into%3A%20%5B%3Asum%20%3Aeach%20%7C%20sum%20+%20each%5D.%0D%09self%20%0D%09%09assert%3A%20result%0D%09%09equals%3A%2010.%0D%09self%20%0D%09%09should%3A%20%5BtestSet%20inject%3A%200%20into%3A%201%5D%0D%09%09raise%3A%20Error.%20"));
smalltalk.bind(smalltalk.SetTestCase, unescape("testIsEmpty"), "testIsEmpty", function SetTestCase__testIsEmpty(){
var testSet = nil;
const self = this; testSet=smalltalk.Set.$$new();
self.assert_((testSet.isEmpty()));
testSet.add_((1));
self.deny_((testSet.isEmpty()));
return self;
}
, "running", unescape("testIsEmpty%0D%0D%09%7C%20testSet%20%7C%0D%09testSet%20%3A%3D%20Set%20new.%0D%09self%20assert%3A%20testSet%20isEmpty.%0D%09testSet%20add%3A%201.%0D%09self%20deny%3A%20testSet%20isEmpty%20"));
smalltalk.bind(smalltalk.SetTestCase, unescape("testNotEmpty"), "testNotEmpty", function SetTestCase__testNotEmpty(){
var testSet = nil;
const self = this; testSet=smalltalk.Set.$$new();
self.deny_((testSet.notEmpty()));
testSet.add_((1));
self.assert_((testSet.notEmpty()));
return self;
}
, "running", unescape("testNotEmpty%0D%0D%09%7C%20testSet%20%7C%0D%09testSet%20%3A%3D%20Set%20new.%0D%09self%20deny%3A%20testSet%20notEmpty.%0D%09testSet%20add%3A%201.%0D%09self%20assert%3A%20testSet%20notEmpty%20"));
smalltalk.bind(smalltalk.SetTestCase, unescape("testOccurrencesOf"), "testOccurrencesOf", function SetTestCase__testOccurrencesOf(){
var testSet = nil;
const self = this; testSet=smalltalk.Set.$$new();
self.assert_equals_((testSet.occurrencesOf_((1))),(0));
testSet.add_((1));
self.assert_equals_((testSet.occurrencesOf_((1))),(1));
testSet.add_((1));
self.assert_equals_((testSet.occurrencesOf_((1))),(1));
return self;
}
, "running", unescape("testOccurrencesOf%0D%0D%09%7C%20testSet%20%7C%0D%09testSet%20%3A%3D%20Set%20new.%0D%09self%0D%09%09assert%3A%20%28testSet%20occurrencesOf%3A%201%29%0D%09%09equals%3A%200.%0D%09testSet%20add%3A%201.%0D%09self%0D%09%09assert%3A%20%28testSet%20occurrencesOf%3A%201%29%0D%09%09equals%3A%201.%0D%09testSet%20add%3A%201.%0D%09self%0D%09%09assert%3A%20%28testSet%20occurrencesOf%3A%201%29%0D%09%09equals%3A%201%20"));
smalltalk.bind(smalltalk.SetTestCase, unescape("testReject"), "testReject", function SetTestCase__testReject(){
var testSet = nil;
var resultSet = nil;
const self = this; testSet=smalltalk.Set.withAll_([(1), (2), (3), (4)]);
resultSet=testSet.reject_((function SetTestCase__(each){
return each.odd();
}
));
self.assert_equals_(resultSet,([(2), (4)].asSet()));
self.should_raise_((function SetTestCase__(){
return testSet.reject_((1));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testReject%0D%0D%09%7C%20testSet%20resultSet%20%7C%0D%09testSet%20%3A%3D%20Set%20withAll%3A%20%23%281%202%203%204%29.%0D%09%0D%09resultSet%20%3A%3D%20testSet%20reject%3A%20%5B%3Aeach%20%7C%20each%20odd%5D.%0D%09self%20%0D%09%09assert%3A%20resultSet%0D%09%09equals%3A%20%23%282%204%29%20asSet.%0D%09self%0D%09%09should%3A%20%5BtestSet%20reject%3A%201%5D%0D%09%09raise%3A%20Error%20"));
smalltalk.bind(smalltalk.SetTestCase, unescape("testSelect"), "testSelect", function SetTestCase__testSelect(){
var testSet = nil;
var resultSet = nil;
const self = this; testSet=smalltalk.Set.withAll_([(1), (2), (3), (4)]);
resultSet=testSet.select_((function SetTestCase__(each){
return each.odd();
}
));
self.assert_equals_(resultSet,([(1), (3)].asSet()));
self.should_raise_((function SetTestCase__(){
return testSet.collect_((1));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testSelect%0D%0D%09%7C%20testSet%20resultSet%20%7C%0D%09testSet%20%3A%3D%20Set%20withAll%3A%20%23%281%202%203%204%29.%0D%09resultSet%20%3A%3D%20testSet%20select%3A%20%5B%3Aeach%20%7C%20each%20odd%5D.%0D%09self%0D%09%09assert%3A%20resultSet%0D%09%09equals%3A%20%23%281%203%29%20asSet.%0D%09self%0D%09%09should%3A%20%5BtestSet%20collect%3A%201%5D%0D%09%09raise%3A%20Error%20"));
smalltalk.bind(smalltalk.SetTestCase, unescape("testSize"), "testSize", function SetTestCase__testSize(){
var testSet = nil;
const self = this; testSet=smalltalk.Set.$$new();
self.assert_equals_((testSet.size()),(0));
testSet.add_((1));
self.assert_equals_((testSet.size()),(1));
testSet.add_((1));
self.assert_equals_((testSet.size()),(1));
return self;
}
, "running", unescape("testSize%0D%0D%09%7C%20testSet%20%7C%0D%09testSet%20%3A%3D%20Set%20new.%0D%09self%20%0D%09%09assert%3A%20testSet%20size%0D%09%09equals%3A%200.%0D%09testSet%20add%3A%201.%09%0D%09self%0D%09%09assert%3A%20testSet%20size%0D%09%09equals%3A%201.%0D%09testSet%20add%3A%201.%0D%09self%0D%09%09assert%3A%20testSet%20size%0D%09%09equals%3A%201%20"));
