smalltalk.addClass("ArrayTestCase", smalltalk.TestCase, [], 'nil');
smalltalk.ArrayTestCase.$classVariableNames=("");
smalltalk.bind(smalltalk.ArrayTestCase, unescape("testBasicNew"), "testBasicNew", function ArrayTestCase__testBasicNew(){
var testArray = nil;
const self = this; testArray=smalltalk.Array.basicNew_((3));
self.assert_((testArray.isArray()));
self.assert_equals_((testArray.size()),(3));
self.assert_equals_(testArray,[nil, nil, nil]);
self.should_raise_((function ArrayTestCase__(){
return smalltalk.Array.basicNew_((3.5));
}
),smalltalk.Error);
self.should_raise_((function ArrayTestCase__(){
return smalltalk.Array.basicNew_("3");
}
),smalltalk.Error);
return self;
}
, "running", unescape("testBasicNew%0D%0D%09%7C%20testArray%20%7C%0D%09testArray%20%3A%3D%20Array%20basicNew%3A%203.%0D%09self%20assert%3A%20testArray%20isArray.%0D%09self%0D%09%09assert%3A%20testArray%20size%0D%09%09equals%3A%203.%0D%09self%0D%09%09assert%3A%20testArray%0D%09%09equals%3A%20%23%28nil%20nil%20nil%29.%0D%09self%0D%09%09should%3A%20%5BArray%20basicNew%3A%203.5%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09should%3A%20%5BArray%20basicNew%3A%20%273%27%5D%0D%09%09raise%3A%20Error.%20"));
smalltalk.bind(smalltalk.ArrayTestCase, unescape("testWith"), "testWith", function ArrayTestCase__testWith(){
const self = this; self.assert_equals_((smalltalk.Array.with_((2))),[(2)]);
return self;
}
, "running", unescape("testWith%0D%0D%09self%0D%09%09assert%3A%20%28Array%20with%3A%202%29%0D%09%09equals%3A%20%23%282%29.%20"));
smalltalk.bind(smalltalk.ArrayTestCase, unescape("testWithWith"), "testWithWith", function ArrayTestCase__testWithWith(){
const self = this; self.assert_equals_((smalltalk.Array.with_with_((1),(2))),[(1), (2)]);
return self;
}
, "running", unescape("testWithWith%0D%0D%09self%0D%09%09assert%3A%20%28Array%20with%3A%201%20with%3A%202%29%0D%09%09equals%3A%20%23%281%202%29.%20"));
smalltalk.bind(smalltalk.ArrayTestCase, unescape("testWithWithWith"), "testWithWithWith", function ArrayTestCase__testWithWithWith(){
const self = this; self.assert_equals_((smalltalk.Array.with_with_with_((1),(2),(3))),[(1), (2), (3)]);
return self;
}
, "running", unescape("testWithWithWith%0D%0D%09self%0D%09%09assert%3A%20%28Array%20with%3A%201%20with%3A%202%20with%3A%203%29%0D%09%09equals%3A%20%23%281%202%203%29.%20"));
smalltalk.bind(smalltalk.ArrayTestCase, unescape("testWithWithWithWith"), "testWithWithWithWith", function ArrayTestCase__testWithWithWithWith(){
const self = this; self.assert_equals_((smalltalk.Array.with_with_with_with_((1),(2),(3),(4))),[(1), (2), (3), (4)]);
return self;
}
, "running", unescape("testWithWithWithWith%0D%0D%09self%0D%09%09assert%3A%20%28Array%20with%3A%201%20with%3A%202%20with%3A%203%20with%3A%204%29%0D%09%09equals%3A%20%23%281%202%203%204%29.%20"));
smalltalk.bind(smalltalk.ArrayTestCase, unescape("testWithAll"), "testWithAll", function ArrayTestCase__testWithAll(){
var testArray = nil;
var testSet = nil;
var testDictionary = nil;
const self = this; testSet=[(1), (2), (3)].asSet();
testDictionary=smalltalk.Dictionary.fromKeys_and_(["one", "two", "three"],[(1), (2), (3)]);
self.assert_equals_((smalltalk.Array.withAll_("1234")),["1", "2", "3", "4"]);
self.assert_equals_((smalltalk.Array.withAll_([(1), (2), (3), (4), (5)])),[(1), (2), (3), (4), (5)]);
testArray=smalltalk.Array.withAll_(testSet);
self.assert_equals_((testArray.size()),(testSet.size()));
testArray.do_((function ArrayTestCase__(each){
return self.assert_((testSet.includes_(each)));
}
));
testArray=smalltalk.Array.withAll_(testDictionary);
self.assert_equals_((testArray.size()),(testDictionary.size()));
testArray.do_((function ArrayTestCase__(each){
return self.assert_((testDictionary.includes_(each)));
}
));
return self;
}
, "running", unescape("testWithAll%0D%09%0D%09%7C%20testArray%20testSet%20testDictionary%20%7C%0D%09testSet%20%3A%3D%20%23%281%202%203%29%20asSet.%0D%09testDictionary%20%3A%3D%20Dictionary%20fromKeys%3A%20%23%28%27one%27%20%27two%27%20%27three%27%29%20and%3A%20%23%281%202%203%29.%0D%09self%0D%09%09assert%3A%20%28Array%20withAll%3A%20%271234%27%29%0D%09%09equals%3A%20%23%28%271%27%20%272%27%20%273%27%20%274%27%29.%0D%09self%0D%09%09assert%3A%20%28Array%20withAll%3A%20%23%281%202%203%204%205%29%29%0D%09%09equals%3A%20%23%281%202%203%204%205%29.%0D%09testArray%20%3A%3D%20Array%20withAll%3A%20testSet.%0D%09self%0D%09%09assert%3A%20testArray%20size%0D%09%09equals%3A%20testSet%20size.%0D%09testArray%20do%3A%5B%20%3Aeach%20%7C%20self%20assert%3A%20%28testSet%20includes%3A%20each%29%5D.%0D%09testArray%20%3A%3D%20Array%20withAll%3A%20testDictionary.%0D%09self%0D%09%09assert%3A%20testArray%20size%0D%09%09equals%3A%20testDictionary%20size.%0D%09testArray%20do%3A%5B%20%3Aeach%20%7C%20self%20assert%3A%20%28testDictionary%20includes%3A%20each%29%5D.%20"));
smalltalk.bind(smalltalk.ArrayTestCase, unescape("testSize"), "testSize", function ArrayTestCase__testSize(){
const self = this; self.assert_equals_(([].size()),(0));
self.assert_equals_(([(1), (2), (3)].size()),(3));
return self;
}
, "running", unescape("testSize%0D%0D%09self%0D%09%09assert%3A%20%23%28%29%20size%0D%09%09equals%3A%200.%0D%09self%0D%09%09assert%3A%20%23%281%202%203%29%20size%0D%09%09equals%3A%203.%20"));
smalltalk.bind(smalltalk.ArrayTestCase, unescape("testAtPut"), "testAtPut", function ArrayTestCase__testAtPut(){
var testArray = nil;
var value = nil;
var tvalue = nil;
var isType = nil;
const self = this; testArray=[(1), (2), (3), (4), (6)];
testArray.at_put_((5),(5));
self.assert_equals_(testArray,[(1), (2), (3), (4), (5)]);
testArray.at_put_((5),"5");
value=testArray.at_((5));
self.assert_equals_(value,"5");
tvalue=smalltalk.DateTime.$$new();
testArray.at_put_((5),tvalue);
value=testArray.at_((5));
self.assert_equals_(value,tvalue);
self.assert_(((self.typeOf_(tvalue))._eq((self.typeOf_(value)))));
self.should_raise_((function ArrayTestCase__(){
return testArray.at_put_("",(3));
}
),smalltalk.Error);
self.should_raise_((function ArrayTestCase__(){
return testArray.at_put_((-1),(3));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testAtPut%0D%0D%09%7C%20testArray%20value%20tvalue%20isType%7C%0D%09testArray%20%3A%3D%20%23%281%202%203%204%206%29.%0D%09testArray%20at%3A%205%20put%3A%205.%0D%09self%0D%09%09assert%3A%20testArray%0D%09%09equals%3A%20%23%281%202%203%204%205%29.%0D%09testArray%20at%3A%205%20put%3A%20%275%27.%0D%09value%20%3A%3D%20testArray%20at%3A%205.%0D%09self%0D%09%09assert%3A%20value%0D%09%09equals%3A%20%20%275%27.%0D%0D%09tvalue%20%3A%3D%20DateTime%20new.%0D%09testArray%20at%3A%205%20put%3A%20tvalue.%0D%09value%20%3A%3D%20testArray%20at%3A%205.%0D%09%22this%20assertion%20is%20useless%2C%20as%20Javascript%20applies%20equality%20insanity%22%0D%09self%0D%09%09assert%3A%20value%0D%09%09equals%3A%20%20tvalue.%0D%09%22make%20sure%20the%20object%20stays%20what%20it%20is/was%22%0D%09self%20assert%3A%20%28self%20typeOf%3A%20tvalue%29%20%3D%20%28self%20typeOf%3A%20value%29.%0D%0D%09self%20%0D%09%09should%3A%20%5BtestArray%20at%3A%20%27%27%20put%3A%203%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09should%3A%20%5BtestArray%20at%3A%20-1%20put%3A%203%5D%0D%09%09raise%3A%20Error.%20"));
smalltalk.bind(smalltalk.ArrayTestCase, unescape("testAt"), "testAt", function ArrayTestCase__testAt(){
const self = this; self.assert_equals_(([(5), (4), (3), (2), (1)].at_((4))),(2));
self.should_raise_((function ArrayTestCase__(){
return [(5), (4), (3), (2), (1)].at_((-1));
}
),smalltalk.Error);
self.should_raise_((function ArrayTestCase__(){
return [(5), (4), (3), (2), (1)].at_((6));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testAt%0D%0D%09self%20%0D%09%09assert%3A%20%28%23%285%204%203%202%201%29%20at%3A%204%29%0D%09%09equals%3A%202.%0D%09self%0D%09%09should%3A%20%5B%23%285%204%203%202%201%29%20at%3A%20-1%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09should%3A%20%5B%23%285%204%203%202%201%29%20at%3A%206%5D%0D%09%09raise%3A%20Error.%20"));
smalltalk.bind(smalltalk.ArrayTestCase, unescape("testAtIfAbsent"), "testAtIfAbsent", function ArrayTestCase__testAtIfAbsent(){
var testValue = nil;
const self = this; testValue=(0);
testValue=[(1), (2), (3), (4), (10)].at_ifAbsent_((3),(function ArrayTestCase__(){
return (-3);
}
));
self.assert_equals_(testValue,(3));
testValue=[(1), (2), (3), (4), (5)].at_ifAbsent_((10),(function ArrayTestCase__(){
return (-3);
}
));
self.assert_equals_(testValue,(-3));
return self;
}
, "running", unescape("testAtIfAbsent%0D%0D%09%7C%20testValue%20%7C%0D%09testValue%20%3A%3D%200.%0D%09testValue%20%3A%3D%20%23%281%202%203%204%2010%29%20at%3A%203%20ifAbsent%3A%5B-3%5D.%0D%09self%20%0D%09%09assert%3A%20testValue%20%0D%09%09equals%3A%203.%0D%09testValue%20%3A%3D%20%23%281%202%203%204%205%29%20at%3A%2010%20ifAbsent%3A%5B-3%5D.%0D%09self%0D%09%09assert%3A%20testValue%0D%09%09equals%3A%20-3.%20"));
smalltalk.bind(smalltalk.ArrayTestCase, unescape("testDo"), "testDo", function ArrayTestCase__testDo(){
var result = nil;
const self = this; result=(0);
[(1), (2), (3), (4)].do_((function ArrayTestCase__(each){
return result=result._plus(each);
}
));
self.assert_equals_(result,(10));
self.should_raise_((function ArrayTestCase__(){
return [(1), (2), (3)].do_((5));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testDo%0D%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%200.%0D%09%23%281%202%203%204%29%20do%3A%20%5B%3Aeach%20%7C%20result%20%3A%3D%20result%20+%20each%5D.%0D%09self%0D%09%09assert%3A%20result%0D%09%09equals%3A%2010.%0D%09self%0D%09%09should%3A%20%5B%23%281%202%203%29%20do%3A%205%5D%0D%09%09raise%3A%20Error.%20"));
smalltalk.bind(smalltalk.ArrayTestCase, unescape("testAddAll"), "testAddAll", function ArrayTestCase__testAddAll(){
var resultArray = nil;
var testSet = nil;
var testDictionary = nil;
const self = this; testSet=[(4), (5), (6)].asSet();
testDictionary=smalltalk.Dictionary.fromKeys_and_(["one", "two", "three"],[(1), (2), (3)]);
resultArray=[(1), (2), (3)];
resultArray.addAll_([(4), (5), (6)]);
self.assert_equals_(resultArray,[(1), (2), (3), (4), (5), (6)]);
resultArray=[(1), (2), (3)];
resultArray.addAll_(["1", "2", "3"]);
self.assert_equals_(resultArray,[(1), (2), (3), "1", "2", "3"]);
resultArray=[];
resultArray.addAll_(testSet);
self.assert_equals_((resultArray.size()),(testSet.size()));
resultArray.do_((function ArrayTestCase__(each){
return self.assert_((testSet.includes_(each)));
}
));
resultArray=[];
resultArray.addAll_(testDictionary);
self.assert_equals_((resultArray.size()),(testDictionary.size()));
resultArray.do_((function ArrayTestCase__(each){
return self.assert_((testDictionary.includes_(each)));
}
));
return self;
}
, "running", unescape("testAddAll%0D%0D%09%7C%20resultArray%20testSet%20testDictionary%20%7C%0D%09testSet%20%3A%3D%20%23%284%205%206%29%20asSet.%0D%09testDictionary%20%3A%3D%20Dictionary%20fromKeys%3A%20%23%28%27one%27%20%27two%27%20%27three%27%29%20and%3A%20%23%281%202%203%29.%0D%09resultArray%20%3A%3D%20%23%281%202%203%29.%20%0D%09resultArray%20addAll%3A%20%23%284%205%206%29.%0D%09self%0D%09%09assert%3A%20resultArray%0D%09%09equals%3A%20%23%281%202%203%204%205%206%29.%0D%09resultArray%20%3A%3D%20%23%281%202%203%29.%0D%09resultArray%20addAll%3A%20%23%28%271%27%20%272%27%20%273%27%29.%0D%09self%0D%09%09assert%3A%20resultArray%0D%09%09equals%3A%20%23%281%202%203%20%271%27%20%272%27%20%273%27%29.%0D%09resultArray%20%3A%3D%20%23%28%29.%0D%09resultArray%20addAll%3A%20testSet.%0D%09self%0D%09%09assert%3A%20resultArray%20size%20%0D%09%09equals%3A%20testSet%20size.%0D%09resultArray%20do%3A%20%5B%3Aeach%20%7C%20self%20assert%3A%20%28testSet%20includes%3A%20each%29%5D.%0D%09resultArray%20%3A%3D%20%23%28%29.%0D%09resultArray%20addAll%3A%20testDictionary.%0D%09self%0D%09%09assert%3A%20resultArray%20size%0D%09%09equals%3A%20testDictionary%20size.%0D%09resultArray%20do%3A%5B%3Aeach%20%7C%20self%20assert%3A%20%28testDictionary%20includes%3A%20each%29%5D.%20"));
smalltalk.bind(smalltalk.ArrayTestCase, unescape("testShallowCopy"), "testShallowCopy", function ArrayTestCase__testShallowCopy(){
var arrayOne = nil;
var copiedArray = nil;
const self = this; arrayOne=[(1), (2), (3)];
copiedArray=arrayOne.shallowCopy();
self.assert_equals_(copiedArray,arrayOne);
self.deny_(((nil.is_eqeq_(arrayOne,copiedArray))));
return self;
}
, "running", unescape("testShallowCopy%0D%0D%09%7C%20arrayOne%20copiedArray%20%7C%0D%09arrayOne%20%3A%3D%20%23%281%202%203%29.%0D%09copiedArray%20%3A%3D%20arrayOne%20shallowCopy.%0D%09self%0D%09%09assert%3A%20copiedArray%0D%09%09equals%3A%20arrayOne.%0D%09self%20deny%3A%20arrayOne%20%3D%3D%20copiedArray.%20"));
smalltalk.bind(smalltalk.ArrayTestCase, unescape("testCopyWithAll"), "testCopyWithAll", function ArrayTestCase__testCopyWithAll(){
var copiedArray = nil;
var testSet = nil;
var testDictionary = nil;
const self = this; testSet=[(4), (5), (6)].asSet();
testDictionary=smalltalk.Dictionary.fromKeys_and_(["one", "two", "three"],[(1), (2), (3)]);
copiedArray=[(1), (2), (3)].copyWithAll_([(4), (5), (6), (7), (8)]);
self.assert_equals_(copiedArray,[(1), (2), (3), (4), (5), (6), (7), (8)]);
copiedArray=[].copyWithAll_(testSet);
self.assert_equals_((copiedArray.size()),(testSet.size()));
copiedArray.do_((function ArrayTestCase__(each){
return self.assert_((testSet.includes_(each)));
}
));
self.should_raise_((function ArrayTestCase__(){
return [(1), (2), (3)].copyWithAll_((4));
}
),smalltalk.Error);
copiedArray=[].copyWithAll_(testDictionary);
self.assert_equals_((copiedArray.size()),(testDictionary.size()));
copiedArray.do_((function ArrayTestCase__(each){
return self.assert_((testDictionary.includes_(each)));
}
));
return self;
}
, "running", unescape("testCopyWithAll%0D%0D%09%7C%20copiedArray%20testSet%20testDictionary%7C%0D%09testSet%20%3A%3D%20%23%284%205%206%29%20asSet.%0D%09testDictionary%20%3A%3D%20Dictionary%20fromKeys%3A%20%23%28%27one%27%20%27two%27%20%27three%27%29%20and%3A%20%23%281%202%203%29.%0D%09copiedArray%20%3A%3D%20%23%281%202%203%29%20copyWithAll%3A%20%23%284%205%206%207%208%29.%0D%09self%0D%09%09assert%3A%20copiedArray%0D%09%09equals%3A%20%23%281%202%203%204%205%206%207%208%29.%0D%09copiedArray%20%3A%3D%20%23%28%29%20copyWithAll%3A%20testSet.%0D%09self%20%0D%09%09assert%3A%20copiedArray%20size%0D%09%09equals%3A%20testSet%20size.%0D%09copiedArray%20do%3A%20%5B%3Aeach%20%7C%20self%20assert%3A%20%28testSet%20includes%3A%20each%29%5D.%0D%09self%0D%09%09should%3A%20%5B%23%281%202%203%29%20copyWithAll%3A%204%5D%0D%09%09raise%3A%20Error.%0D%09copiedArray%20%3A%3D%20%23%28%29%20copyWithAll%3A%20testDictionary.%0D%09self%0D%09%09assert%3A%20copiedArray%20size%0D%09%09equals%3A%20testDictionary%20size.%0D%09copiedArray%20do%3A%20%5B%3Aeach%20%7C%20self%20assert%3A%20%28testDictionary%20includes%3A%20each%29%5D.%20"));
smalltalk.bind(smalltalk.ArrayTestCase, unescape("testConcat"), "testConcat", function ArrayTestCase__testConcat(){
const self = this; self.assert_equals_(([(1), (2), (3)]._comma([(1), (2), (3)])),[(1), (2), (3), (1), (2), (3)]);
self.assert_equals_(([(1), (2), (3)]._comma("123")),[(1), (2), (3), "1", "2", "3"]);
self.assert_equals_(([(1), (2), (3)]._comma([])),[(1), (2), (3)]);
self.should_raise_((function ArrayTestCase__(){
return [(1), (2), (3)]._comma((4));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testConcat%0D%0D%09self%0D%09%09assert%3A%20%23%281%202%203%29%20%2C%20%23%281%202%203%29%0D%09%09equals%3A%20%23%281%202%203%201%202%203%29.%0D%09self%20%0D%09%09assert%3A%20%23%281%202%203%29%20%2C%20%27123%27%0D%09%09equals%3A%20%23%281%202%203%20%271%27%20%272%27%20%273%27%29.%0D%09self%0D%09%09assert%3A%20%23%281%202%203%29%20%2C%20%23%28%29%0D%09%09equals%3A%20%23%281%202%203%29.%0D%09self%20%0D%09%09should%3A%20%5B%23%281%202%203%29%2C%204%5D%0D%09%09raise%3A%20Error.%20"));
smalltalk.bind(smalltalk.ArrayTestCase, unescape("testJoin"), "testJoin", function ArrayTestCase__testJoin(){
const self = this; self.assert_equals_(([(1), (2), (3)].join_(unescape("%2C"))),unescape("1%2C2%2C3"));
self.should_raise_((function ArrayTestCase__(){
return [(1), (2), (3)].join_((4));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testJoin%0D%0D%09self%0D%09%09assert%3A%20%28%23%281%202%203%29%20join%3A%20%27%2C%27%29%0D%09%09equals%3A%20%271%2C2%2C3%27.%0D%09self%0D%09%09should%3A%20%5B%23%281%202%203%29%20join%3A%204%5D%0D%09%09raise%3A%20Error.%20"));
smalltalk.bind(smalltalk.ArrayTestCase, unescape("testSort"), "testSort", function ArrayTestCase__testSort(){
const self = this; self.assert_equals_(([(4), (5), (3), (1), (2)].sort_((function ArrayTestCase__(a,b){
return b._gt(a);
}
))),[(1), (2), (3), (4), (5)]);
self.assert_equals_(([(4), (5), (3), (1), (2)].sort_((function ArrayTestCase__(a,b){
return a._gt(b);
}
))),[(5), (4), (3), (2), (1)]);
self.should_raise_((function ArrayTestCase__(){
return [(4), (5), (3), (1), (2)].sort_((4));
}
),smalltalk.Error);
self.should_raise_((function ArrayTestCase__(){
return [(4), (5), (3), (1), (2)].sort_((function ArrayTestCase__(a){
return (1)._gt(a);
}
));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testSort%0D%0D%09self%0D%09%09assert%3A%20%28%23%284%205%203%201%202%29%20sort%3A%20%5B%20%3Aa%20%3Ab%20%7C%20b%20%3E%20a%20%5D%29%0D%09%09equals%3A%20%23%281%202%203%204%205%29.%0D%09self%20%0D%09%09assert%3A%20%28%23%284%205%203%201%202%29%20sort%3A%20%5B%20%3Aa%20%3Ab%20%7C%20a%20%3E%20b%20%5D%29%0D%09%09equals%3A%20%23%285%204%203%202%201%29.%0D%09self%0D%09%09should%3A%20%5B%28%23%284%205%203%201%202%29%20sort%3A%204%29%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09should%3A%20%5B%28%23%284%205%203%201%202%29%20sort%3A%20%5B%20%3Aa%20%7C%201%20%3E%20a%20%5D%29%5D%0D%09%09raise%3A%20Error.%20"));
smalltalk.bind(smalltalk.ArrayTestCase, unescape("testRemoveIfAbsent"), "testRemoveIfAbsent", function ArrayTestCase__testRemoveIfAbsent(){
var testArray = nil;
var removeValue = nil;
const self = this; removeValue=(0);
testArray=[(1), (2), (3), (4), (5)];
removeValue=testArray.remove_ifAbsent_((3),(function ArrayTestCase__(){
return (-1);
}
));
self.assert_equals_(removeValue,(3));
self.assert_equals_(testArray,[(1), (2), (4), (5)]);
removeValue=testArray.remove_ifAbsent_((3),(function ArrayTestCase__(){
return (-1);
}
));
self.assert_equals_(removeValue,(-1));
self.assert_equals_(testArray,[(1), (2), (4), (5)]);
return self;
}
, "running", unescape("testRemoveIfAbsent%0D%0D%09%7C%20testArray%20removeValue%20%7C%0D%09removeValue%20%3A%3D%200.%0D%09testArray%20%3A%3D%20%23%281%202%203%204%205%29.%0D%09removeValue%20%3A%3D%20testArray%20remove%3A%203%20ifAbsent%3A%20%5B-1%5D.%0D%09self%20%0D%09%09assert%3A%20removeValue%0D%09%09equals%3A%203.%0D%09self%0D%09%09assert%3A%20testArray%0D%09%09equals%3A%20%23%281%202%204%205%29.%0D%09removeValue%20%3A%3D%20testArray%20remove%3A%203%20ifAbsent%3A%20%5B-1%5D.%0D%09self%20%0D%09%09assert%3A%20removeValue%0D%09%09equals%3A%20-1.%0D%09self%20%0D%09%09assert%3A%20testArray%20%0D%09%09equals%3A%20%23%281%202%204%205%29.%20"));
smalltalk.bind(smalltalk.ArrayTestCase, unescape("testAdd"), "testAdd", function ArrayTestCase__testAdd(){
var testArray = nil;
var toAdd = nil;
const self = this; testArray=[(1), (2), (3)];
toAdd=[(1), "1", []];
toAdd.do_((function ArrayTestCase__(each){
return testArray.add_(each);
}
));
self.assert_equals_(testArray,[(1), (2), (3), (1), "1", []]);
return self;
}
, "running", unescape("testAdd%0D%0D%09%7C%20testArray%20toAdd%20%7C%0D%09testArray%20%3A%3D%20%23%281%202%203%29.%0D%09toAdd%20%3A%3D%20%23%281%20%271%27%20%23%28%29%29.%0D%09toAdd%20do%3A%20%5B%3Aeach%20%7C%20testArray%20add%3A%20each%5D.%0D%09self%0D%09%09assert%3A%20testArray%0D%09%09equals%3A%20%23%281%202%203%201%20%271%27%20%23%28%29%29.%20"));
smalltalk.bind(smalltalk.ArrayTestCase, unescape("testAddLast"), "testAddLast", function ArrayTestCase__testAddLast(){
var testArray = nil;
var toAdd = nil;
const self = this; testArray=[(1), (2), (3)];
toAdd=[(1), "1", []];
toAdd.do_((function ArrayTestCase__(each){
return testArray.addLast_(each);
}
));
self.assert_equals_(testArray,[(1), (2), (3), (1), "1", []]);
return self;
}
, "running", unescape("testAddLast%0D%0D%09%7C%20testArray%20toAdd%20%7C%0D%09testArray%20%3A%3D%20%23%281%202%203%29.%0D%09toAdd%20%3A%3D%20%23%281%20%271%27%20%23%28%29%29.%0D%09toAdd%20do%3A%20%5B%3Aeach%20%7C%20testArray%20addLast%3A%20each%5D.%0D%09self%0D%09%09assert%3A%20testArray%0D%09%09equals%3A%20%23%281%202%203%201%20%271%27%20%23%28%29%29.%20"));
smalltalk.bind(smalltalk.ArrayTestCase, unescape("testAddFirst"), "testAddFirst", function ArrayTestCase__testAddFirst(){
var testArray = nil;
var toAdd = nil;
const self = this; testArray=[(4), (5), (6)];
toAdd=[(3), (2), (1)];
toAdd.do_((function ArrayTestCase__(each){
return testArray.addFirst_(each);
}
));
self.assert_equals_(testArray,[(1), (2), (3), (4), (5), (6)]);
return self;
}
, "running", unescape("testAddFirst%0D%0D%09%7C%20testArray%20toAdd%20%7C%0D%09testArray%20%3A%3D%20%23%284%205%206%29.%0D%09toAdd%20%3A%3D%20%23%283%202%201%29.%0D%09toAdd%20do%3A%20%5B%3Aeach%20%7C%20testArray%20addFirst%3A%20each%5D.%0D%09self%0D%09%09assert%3A%20testArray%0D%09%09equals%3A%20%23%281%202%203%204%205%206%29"));
smalltalk.bind(smalltalk.ArrayTestCase, unescape("testAddFirstEmpty"), "testAddFirstEmpty", function ArrayTestCase__testAddFirstEmpty(){
var testArray = nil;
const self = this; testArray=smalltalk.Array.$$new();
self.assert_equals_((testArray.size()),(0));
testArray.addFirst_((1));
self.assert_equals_((testArray.size()),(1));
self.assert_equals_((testArray.at_((1))),(1));
return self;
}
, "running", unescape("testAddFirstEmpty%0D%0D%09%7C%20testArray%20%7C%0D%09testArray%20%3A%3D%20Array%20new.%0D%09self%20assert%3A%20testArray%20size%20equals%3A%200.%0D%09testArray%20addFirst%3A%201.%0D%09self%20assert%3A%20testArray%20size%20equals%3A%201.%0D%09self%20assert%3A%20%28testArray%20at%3A%201%29%20equals%3A%201"));
smalltalk.bind(smalltalk.ArrayTestCase, unescape("testRemoveFirst"), "testRemoveFirst", function ArrayTestCase__testRemoveFirst(){
var testArray = nil;
var removeVal = nil;
const self = this; testArray=[(1), (2), (3), (4), (5), (6)];
removeVal=testArray.removeFirst();
self.assert_equals_(removeVal,(1));
self.assert_equals_(testArray,[(2), (3), (4), (5), (6)]);
self.should_raise_((function ArrayTestCase__(){
return [].removeFirst();
}
),smalltalk.Error);
return self;
}
, "running", unescape("testRemoveFirst%0D%0D%09%7C%20testArray%20removeVal%20%7C%0D%09testArray%20%3A%3D%20%23%281%202%203%204%205%206%29.%0D%09removeVal%20%3A%3D%20testArray%20removeFirst.%0D%09self%0D%09%09assert%3A%20removeVal%0D%09%09equals%3A%201.%0D%09self%20%0D%09%09assert%3A%20testArray%0D%09%09equals%3A%20%23%282%203%204%205%206%29.%0D%09self%0D%09%09should%3A%20%5B%23%28%29%20removeFirst%5D%0D%09%09raise%3A%20Error.%20"));
smalltalk.bind(smalltalk.ArrayTestCase, unescape("testRemoveAll"), "testRemoveAll", function ArrayTestCase__testRemoveAll(){
var testArray = nil;
const self = this; testArray=[(1), (2), (3), (4), (5)];
testArray.removeAll();
self.assert_equals_(testArray,[]);
self.assert_equals_(([].removeAll()),[]);
return self;
}
, "running", unescape("testRemoveAll%0D%0D%09%7C%20testArray%20%7C%0D%09testArray%20%3A%3D%20%23%281%202%203%204%205%29.%0D%09testArray%20removeAll.%0D%09self%20%0D%09%09assert%3A%20testArray%0D%09%09equals%3A%20%23%28%29.%0D%09self%0D%09%09assert%3A%20%23%28%29%20removeAll%0D%09%09equals%3A%20%23%28%29.%20"));
smalltalk.bind(smalltalk.ArrayTestCase, unescape("testRemoveIndex"), "testRemoveIndex", function ArrayTestCase__testRemoveIndex(){
var testArray = nil;
const self = this; testArray=[(1), (2), (3), (4), (5), (6)];
testArray.removeIndex_((5));
self.assert_equals_(testArray,[(1), (2), (3), (4), (6)]);
self.should_raise_((function ArrayTestCase__(){
return [(1), (2), (3)].removeIndex_((4));
}
),smalltalk.Error);
self.should_raise_((function ArrayTestCase__(){
return [(1), (2), (3)].removeIndex_((-1));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testRemoveIndex%0D%0D%09%7C%20testArray%20%7C%0D%09testArray%20%3A%3D%20%23%281%202%203%204%205%206%29.%0D%09testArray%20removeIndex%3A%205.%0D%09self%0D%09%09assert%3A%20testArray%0D%09%09equals%3A%20%23%281%202%203%204%206%29.%0D%09self%0D%09%09should%3A%20%5B%20%23%281%202%203%29%20removeIndex%3A%204%20%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09should%3A%20%5B%20%23%281%202%203%29%20removeIndex%3A%20-1%20%5D%0D%09%09raise%3A%20Error.%20"));
smalltalk.bind(smalltalk.ArrayTestCase, unescape("testAtAllPut"), "testAtAllPut", function ArrayTestCase__testAtAllPut(){
var testArray = nil;
const self = this; testArray=[(1), (2), (3), (4), (5)];
testArray.atAllPut_((7));
self.assert_equals_(testArray,[(7), (7), (7), (7), (7)]);
testArray.removeAll();
testArray.atAllPut_((1));
self.assert_equals_(testArray,[]);
self.assert_equals_(([(1), (2), (3), (4)].atAllPut_((5))),[(5), (5), (5), (5)]);
return self;
}
, "running", unescape("testAtAllPut%0D%0D%09%7C%20testArray%20%7C%0D%09testArray%20%3A%3D%20%23%281%202%203%204%205%29.%0D%09testArray%20atAllPut%3A%207.%0D%09self%0D%09%09assert%3A%20testArray%0D%09%09equals%3A%20%23%287%207%207%207%207%29.%0D%09testArray%20removeAll.%0D%09testArray%20atAllPut%3A%201.%0D%09self%0D%09%09assert%3A%20testArray%0D%09%09equals%3A%20%23%28%29.%0D%09self%0D%09%09assert%3A%20%28%23%281%202%203%204%29%20atAllPut%3A%205%29%0D%09%09equals%3A%20%23%285%205%205%205%29.%20"));
smalltalk.bind(smalltalk.ArrayTestCase, unescape("testWithIndexDo"), "testWithIndexDo", function ArrayTestCase__testWithIndexDo(){
var testArray = nil;
const self = this; testArray=[(5), (4), (3), (2), (1)];
testArray.withIndexDo_((function ArrayTestCase__(x,y){
return self.assert_((((6)._minus(x))._eq(y)));
}
));
self.should_raise_((function ArrayTestCase__(){
return testArray.withIndexDo_((function ArrayTestCase__(x){
return x._plus((1));
}
));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testWithIndexDo%0D%0D%09%7C%20testArray%20%7C%0D%09testArray%20%3A%3D%20%23%285%204%203%202%201%29.%0D%09testArray%20withIndexDo%3A%20%5B%3Ax%20%3Ay%20%7C%20self%20assert%3A%206%20-%20x%20%3D%20y%5D.%0D%09self%0D%09%09should%3A%20%5BtestArray%20withIndexDo%3A%20%5B%3Ax%20%7C%20x%20+%201%5D%5D%0D%09%09raise%3A%20Error.%20"));
smalltalk.bind(smalltalk.ArrayTestCase, unescape("testIndexOfIfAbsent"), "testIndexOfIfAbsent", function ArrayTestCase__testIndexOfIfAbsent(){
var value = nil;
const self = this; value=(0);
value=[(5), (4), (3), (2), (1)].indexOf_ifAbsent_((4),(function ArrayTestCase__(){
return (-1);
}
));
self.assert_equals_(value,(2));
value=[(5), (4), (3), (2), (1)].indexOf_ifAbsent_((6),(function ArrayTestCase__(){
return (-1);
}
));
self.assert_equals_(value,(-1));
return self;
}
, "running", unescape("testIndexOfIfAbsent%0D%0D%09%7C%20value%20%7C%0D%09value%20%3A%3D%200.%0D%09value%20%3A%3D%20%23%285%204%203%202%201%29%20indexOf%3A%204%20ifAbsent%3A%20%5B-1%5D.%0D%09self%20%0D%09%09assert%3A%20value%20%0D%09%09equals%3A%202.%0D%09value%20%3A%3D%20%23%285%204%203%202%201%29%20indexOf%3A%206%20ifAbsent%3A%20%5B-1%5D.%0D%09self%0D%09%09assert%3A%20value%0D%09%09equals%3A%20-1.%20"));
smalltalk.bind(smalltalk.ArrayTestCase, unescape("testDetectIfNone"), "testDetectIfNone", function ArrayTestCase__testDetectIfNone(){
var value = nil;
const self = this; value=(0);
value=[(1), (2), (3), (4), (5)].detect_ifNone_((function ArrayTestCase__(each){
return each._gt((4));
}
),(function ArrayTestCase__(){
return (-1);
}
));
self.assert_equals_(value,(5));
value=[(1), (2), (3), (4), (5)].detect_ifNone_((function ArrayTestCase__(each){
return each._gt((5));
}
),(function ArrayTestCase__(){
return (-1);
}
));
self.assert_equals_(value,(-1));
self.should_raise_((function ArrayTestCase__(){
return [(1), (2), (3)].detect_ifNone_((3),(function ArrayTestCase__(){
return (-1);
}
));
}
),smalltalk.Error);
self.should_raise_((function ArrayTestCase__(){
return [(1), (2), (3)].detect_ifNone_((function ArrayTestCase__(each){
return each._gt((2));
}
),(4));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testDetectIfNone%0D%0D%09%7C%20value%20%7C%0D%09value%20%3A%3D%200.%0D%09value%20%3A%3D%20%23%281%202%203%204%205%29%20detect%3A%20%5B%3Aeach%20%7C%20each%20%3E%204%5D%20ifNone%3A%20%5B-1%5D.%0D%09self%20%0D%09%09assert%3A%20value%20%0D%09%09equals%3A%205.%0D%09value%20%3A%3D%20%23%281%202%203%204%205%29%20detect%3A%20%5B%3Aeach%20%7C%20each%20%3E%205%5D%20ifNone%3A%20%5B-1%5D.%0D%09self%0D%09%09assert%3A%20value%0D%09%09equals%3A%20-1.%0D%09self%0D%09%09should%3A%20%5B%23%281%202%203%29%20detect%3A%203%20ifNone%3A%20%5B-1%5D%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09should%3A%20%5B%23%281%202%203%29%20detect%3A%20%5B%3Aeach%20%7C%20each%20%3E%202%5D%20ifNone%3A%204%5D%0D%09%09raise%3A%20Error.%20"));
smalltalk.bind(smalltalk.ArrayTestCase, unescape("testReversed"), "testReversed", function ArrayTestCase__testReversed(){
const self = this; self.assert_equals_(([(1), (2), (3), (4), (5)].reversed()),[(5), (4), (3), (2), (1)]);
return self;
}
, "running", unescape("testReversed%0D%0D%09self%0D%09%09assert%3A%20%23%281%202%203%204%205%29%20reversed%0D%09%09equals%3A%20%23%285%204%203%202%201%29.%20"));
smalltalk.bind(smalltalk.ArrayTestCase, unescape("testIsEmpty"), "testIsEmpty", function ArrayTestCase__testIsEmpty(){
const self = this; (function ArrayTestCase__($1$){
$1$.assert_(([].isEmpty()));
return $1$.deny_(([(1)].isEmpty()))}
)(self);
return self;
}
, "running", unescape("testIsEmpty%0D%0D%09self%0D%09%09assert%3A%20%23%28%29%20isEmpty%3B%0D%09%09deny%3A%20%23%281%29%20isEmpty.%20"));
smalltalk.bind(smalltalk.ArrayTestCase, unescape("testReverseDo"), "testReverseDo", function ArrayTestCase__testReverseDo(){
var result = nil;
const self = this; result=(0);
[(1), (2), (3), (4)].reverseDo_((function ArrayTestCase__(each){
return result=result._plus(each);
}
));
self.assert_equals_(result,(10));
result="";
["o", "l", "l", "e", "h"].reverseDo_((function ArrayTestCase__(each){
return result=result._comma(each);
}
));
self.assert_equals_(result,"hello");
self.should_raise_((function ArrayTestCase__(){
return ["o", "l", "l", "e", "h"].reverseDo_((5));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testReverseDo%0D%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%200.%0D%09%23%281%202%203%204%29%20reverseDo%3A%20%5B%3Aeach%20%7C%20%20result%20%3A%3D%20result%20+%20each%5D.%0D%09self%20%0D%09%09assert%3A%20result%20%0D%09%09equals%3A%2010.%0D%09result%20%3A%3D%20%27%27.%0D%09%23%28%27o%27%20%27l%27%20%27l%27%20%27e%27%20%27h%27%29%20reverseDo%3A%20%5B%3Aeach%20%7C%20result%20%3A%3D%20result%2Ceach%5D.%0D%09self%0D%09%09assert%3A%20result%0D%09%09equals%3A%20%27hello%27.%0D%09self%0D%09%09should%3A%20%5B%23%28%27o%27%20%27l%27%20%27l%27%20%27e%27%20%27h%27%29%20reverseDo%3A%205%5D%0D%09%09raise%3A%20Error.%20"));
smalltalk.bind(smalltalk.ArrayTestCase, unescape("testIncludes"), "testIncludes", function ArrayTestCase__testIncludes(){
const self = this; (function ArrayTestCase__($1$){
$1$.assert_(([(1), (2), (3)].includes_((3))));
$1$.assert_((["1", "hi"].includes_("hi")));
$1$.deny_((["1", "hi"].includes_("Hi")));
$1$.deny_(([(1), (2), (3)].includes_((4))));
return $1$.deny_(([].includes_((1))))}
)(self);
return self;
}
, "running", unescape("testIncludes%0D%0D%09self%0D%09%09assert%3A%20%28%23%281%202%203%29%20includes%3A%203%29%3B%0D%09%09assert%3A%20%28%23%28%271%27%20%27hi%27%29%20includes%3A%20%27hi%27%29%3B%0D%09%09deny%3A%20%28%23%28%271%27%20%27hi%27%29%20includes%3A%20%27Hi%27%29%3B%0D%09%09deny%3A%20%28%23%281%202%203%29%20includes%3A%204%29%3B%0D%09%09deny%3A%20%28%23%28%29%20includes%3A%201%29.%20"));
smalltalk.bind(smalltalk.ArrayTestCase, unescape("testOccurences"), "testOccurences", function ArrayTestCase__testOccurences(){
const self = this; self.assert_equals_(([(1), (2), (3), (4), (5), (6), (1), (1), (1)].occurrencesOf_((1))),(4));
self.assert_equals_(([(1), (2), (3)].occurrencesOf_((4))),(0));
return self;
}
, "running", unescape("testOccurences%0D%0D%09self%0D%09%09assert%3A%20%28%23%281%202%203%204%205%206%201%201%201%29%20occurrencesOf%3A%201%29%0D%09%09equals%3A%204.%0D%09self%20%0D%09%09assert%3A%20%28%23%281%202%203%29%20occurrencesOf%3A%204%29%0D%09%09equals%3A%200.%20"));
smalltalk.bind(smalltalk.ArrayTestCase, unescape("testNew"), "testNew", function ArrayTestCase__testNew(){
var array = nil;
const self = this; array=smalltalk.Array.new_((0));
self.assert_equals_(array,[]);
array=smalltalk.Array.new_((5));
self.assert_equals_(array,[nil, nil, nil, nil, nil]);
return self;
}
, "running", unescape("testNew%0D%0D%09%7C%20array%20%7C%0D%09array%20%3A%3D%20Array%20new%3A%200.%0D%09self%0D%09%09assert%3A%20array%0D%09%09equals%3A%20%23%28%29.%0D%09array%20%3A%3D%20Array%20new%3A%205.%0D%09self%0D%09%09assert%3A%20array%0D%09%09equals%3A%20%23%28%20nil%20nil%20nil%20nil%20nil%20%29%20"));
smalltalk.bind(smalltalk.ArrayTestCase, unescape("testAsArray"), "testAsArray", function ArrayTestCase__testAsArray(){
const self = this; self.assert_((([(1), (2), (3)].asArray()).isArray()));
self.assert_equals_(([(1), (2), (3)].asArray()),[(1), (2), (3)]);
return self;
}
, "running", unescape("testAsArray%0D%0D%09self%20assert%3A%20%23%281%202%203%29%20asArray%20isArray.%0D%09self%0D%09%09assert%3A%20%23%281%202%203%29%20asArray%0D%09%09equals%3A%20%23%281%202%203%29%20"));
smalltalk.bind(smalltalk.ArrayTestCase, unescape("testAsSet"), "testAsSet", function ArrayTestCase__testAsSet(){
var testSet = nil;
var expectedSet = nil;
const self = this; testSet=[(1), (2), (3)].asSet();
expectedSet=smalltalk.Set.with_with_with_((1),(2),(3));
self.assert_equals_((testSet.$klass),smalltalk.Set);
self.assert_equals_((testSet.size()),(3));
self.assert_equals_(testSet,expectedSet);
return self;
}
, "running", unescape("testAsSet%0D%0D%09%7C%20testSet%20expectedSet%20%7C%0D%09testSet%20%3A%3D%20%23%281%202%203%29%20asSet.%0D%09expectedSet%20%3A%3D%20Set%20with%3A%201%20with%3A%202%20with%3A%203.%0D%09self%20%0D%09%09assert%3A%20testSet%20class%0D%09%09equals%3A%20Set.%0D%09self%0D%09%09assert%3A%20testSet%20size%0D%09%09equals%3A%203.%0D%09self%20%0D%09%09assert%3A%20testSet%0D%09%09equals%3A%20expectedSet%20"));
smalltalk.bind(smalltalk.ArrayTestCase, unescape("testCollect"), "testCollect", function ArrayTestCase__testCollect(){
const self = this; self.assert_equals_(([(1), (2), (3), (4)].collect_((function ArrayTestCase__(each){
return each._plus((1));
}
))),[(2), (3), (4), (5)]);
self.should_raise_((function ArrayTestCase__(){
return [(1), (2), (3), (4)].collect_((3));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testCollect%0D%0D%09self%0D%09%09assert%3A%20%28%23%281%202%203%204%29%20collect%3A%20%5B%3Aeach%20%7C%20each%20+%201%5D%29%0D%09%09equals%3A%20%23%282%203%204%205%29.%0D%09self%0D%09%09should%3A%20%5B%23%281%202%203%204%29%20collect%3A%203%5D%0D%09%09raise%3A%20Error.%20"));
smalltalk.bind(smalltalk.ArrayTestCase, unescape("testDetect"), "testDetect", function ArrayTestCase__testDetect(){
const self = this; self.assert_equals_(([(1), (2), (3)].detect_((function ArrayTestCase__(each){
return each._gt((2));
}
))),(3));
self.should_raise_((function ArrayTestCase__(){
return [(1), (2), (3)].detect_((function ArrayTestCase__(each){
return each._gt((3));
}
));
}
),smalltalk.Error);
self.should_raise_((function ArrayTestCase__(){
return [(1), (2), (3)].detect_((3));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testDetect%0D%0D%09self%0D%09%09assert%3A%20%28%23%281%202%203%29%20detect%3A%20%5B%3Aeach%20%7C%20each%20%3E%202%5D%29%0D%09%09equals%3A%203.%0D%09self%0D%09%09should%3A%20%5B%23%281%202%203%29%20detect%3A%20%5B%3Aeach%20%7C%20each%20%3E%203%5D%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09should%3A%20%5B%23%281%202%203%29%20detect%3A%203%5D%0D%09%09raise%3A%20Error.%20"));
smalltalk.bind(smalltalk.ArrayTestCase, unescape("testNotEmpty"), "testNotEmpty", function ArrayTestCase__testNotEmpty(){
const self = this; (function ArrayTestCase__($1$){
$1$.assert_(([(1), (2), (3)].notEmpty()));
return $1$.deny_(([].notEmpty()))}
)(self);
return self;
}
, "running", unescape("testNotEmpty%0D%0D%09self%20%0D%09%09assert%3A%20%23%281%202%203%29%20notEmpty%3B%0D%09%09deny%3A%20%23%28%29%20notEmpty.%20"));
smalltalk.bind(smalltalk.ArrayTestCase, unescape("testSelect"), "testSelect", function ArrayTestCase__testSelect(){
const self = this; self.assert_equals_(([(1), (2), (3), (4), (5)].select_((function ArrayTestCase__(each){
return each.odd();
}
))),[(1), (3), (5)]);
self.assert_equals_(([(1), (2), (3), (4), (5)].select_((function ArrayTestCase__(each){
return each._gt((5));
}
))),[]);
self.should_raise_((function ArrayTestCase__(){
return [(1), (2), (3), (4), (5)].select_((4));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testSelect%0D%0D%09self%0D%09%09assert%3A%20%28%23%281%202%203%204%205%29%20select%3A%5B%3Aeach%20%7C%20each%20odd%5D%29%0D%09%09equals%3A%20%23%281%203%205%29.%0D%09self%0D%09%09assert%3A%20%28%23%281%202%203%204%205%29%20select%3A%5B%3Aeach%20%7C%20each%20%3E%205%5D%29%0D%09%09equals%3A%20%23%28%29.%0D%09self%0D%09%09should%3A%20%5B%23%281%202%203%204%205%29%20select%3A%204%5D%0D%09%09raise%3A%20Error.%20"));
smalltalk.bind(smalltalk.ArrayTestCase, unescape("testReject"), "testReject", function ArrayTestCase__testReject(){
const self = this; self.assert_equals_(([(1), (2), (3), (4), (5)].reject_((function ArrayTestCase__(each){
return each.odd();
}
))),[(2), (4)]);
self.assert_equals_(([(1), (2), (3), (4), (5)].reject_((function ArrayTestCase__(each){
return each._gt((0));
}
))),[]);
self.should_raise_((function ArrayTestCase__(){
return [(1), (2), (3), (4), (5)].reject_((3));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testReject%0D%0D%09self%0D%09%09assert%3A%20%28%23%281%202%203%204%205%29%20reject%3A%5B%3Aeach%20%7C%20each%20odd%5D%29%0D%09%09equals%3A%20%23%282%204%29.%0D%09self%0D%09%09assert%3A%20%28%23%281%202%203%204%205%29%20reject%3A%5B%3Aeach%20%7C%20each%20%3E%200%5D%29%0D%09%09equals%3A%20%23%28%29.%0D%09self%0D%09%09should%3A%20%5B%23%281%202%203%204%205%29%20reject%3A%203%5D%0D%09%09raise%3A%20Error.%20"));
smalltalk.bind(smalltalk.ArrayTestCase, unescape("testInjectInto"), "testInjectInto", function ArrayTestCase__testInjectInto(){
var result = nil;
const self = this; result=[(1), (2), (3), (4)].inject_into_((0),(function ArrayTestCase__(sum,each){
return sum._plus(each);
}
));
self.assert_equals_(result,(10));
self.should_raise_((function ArrayTestCase__(){
return [(1), (2), (3), (4)].inject_into_((0),(2));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testInjectInto%0D%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%20%23%281%202%203%204%29%20inject%3A%200%20into%3A%20%5B%3Asum%20%3Aeach%20%7C%20sum%20+%20each%5D.%0D%09self%0D%09%09assert%3A%20result%0D%09%09equals%3A%2010.%0D%09self%0D%09%09should%3A%20%5B%23%281%202%203%204%29%20inject%3A%200%20into%3A%202%5D%0D%09%09raise%3A%20Error.%20"));
smalltalk.bind(smalltalk.ArrayTestCase, unescape("testDoSeparatedBy"), "testDoSeparatedBy", function ArrayTestCase__testDoSeparatedBy(){
var result = nil;
const self = this; result="";
["1", "2", "3", "4", "5"].do_separatedBy_((function ArrayTestCase__(each){
return result=result._comma(each);
}
),(function ArrayTestCase__(){
return result=result._comma(" ");
}
));
self.assert_equals_(result,"1 2 3 4 5");
self.should_raise_((function ArrayTestCase__(){
return [(1), (2), (3)].do_separatedBy_((3),(function ArrayTestCase__(){
return (4);
}
));
}
),smalltalk.Error);
self.shouldnt_raise_((function ArrayTestCase__(){
return [(1), (2), (3)].do_separatedBy_((function ArrayTestCase__(each){
return each._plus((1));
}
)," ");
}
),smalltalk.Error);
return self;
}
, "running", unescape("testDoSeparatedBy%0D%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%20%27%27.%0D%09%23%28%271%27%20%272%27%20%273%27%20%274%27%20%275%27%29%20do%3A%20%5B%3Aeach%20%7C%20result%20%3A%3D%20result%2Ceach%5D%20separatedBy%3A%20%5Bresult%20%3A%3D%20result%2C%27%20%27%5D.%0D%09self%20%0D%09%09assert%3A%20result%20%0D%09%09equals%3A%20%271%202%203%204%205%27.%0D%09self%0D%09%09should%3A%20%5B%23%281%202%203%29%20do%3A%203%20separatedBy%3A%20%5B4%5D%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09shouldnt%3A%20%5B%23%281%202%203%29%20do%3A%20%5B%3Aeach%20%7C%20each%20+%201%5D%20separatedBy%3A%20%27%20%27%5D%0D%09%09raise%3A%20Error.%20"));
smalltalk.bind(smalltalk.ArrayTestCase, unescape("testAsOrderedCollection"), "testAsOrderedCollection", function ArrayTestCase__testAsOrderedCollection(){
var result = nil;
var expectedCollection = nil;
const self = this; result=[(2), (1), (3)].asOrderedCollection();
expectedCollection=smalltalk.OrderedCollection.with_with_with_((2),(1),(3));
self.assert_equals_((result.$klass),smalltalk.OrderedCollection);
self.assert_equals_(result,expectedCollection);
return self;
}
, "running", unescape("testAsOrderedCollection%0D%0D%09%7C%20result%20%20expectedCollection%20%7C%0D%09result%20%3A%3D%20%23%282%201%203%29%20asOrderedCollection.%0D%09expectedCollection%20%3A%3D%20OrderedCollection%20with%3A%202%20with%3A%201%20with%3A%203.%0D%09self%0D%09%09assert%3A%20result%20class%20%0D%09%09equals%3A%20OrderedCollection.%0D%09self%0D%09%09assert%3A%20result%0D%09%09equals%3A%20expectedCollection.%20"));
smalltalk.bind(smalltalk.ArrayTestCase, unescape("testAsSortedCollection"), "testAsSortedCollection", function ArrayTestCase__testAsSortedCollection(){
var testArray = nil;
var result = nil;
const self = this; testArray=[(2), (1), (3)];
result=testArray.asSortedCollection();
self.assert_equals_((result.$klass),smalltalk.SortedCollection);
return self;
}
, "running", unescape("testAsSortedCollection%0D%0D%09%7C%20testArray%20result%20%7C%0D%09testArray%20%3A%3D%20%23%282%201%203%29.%0D%09result%20%3A%3D%20testArray%20asSortedCollection.%0D%09self%0D%09%09assert%3A%20result%20class%0D%09%09equals%3A%20SortedCollection.%20"));
