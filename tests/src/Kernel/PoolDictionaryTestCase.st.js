smalltalk.addClass("PoolDictionaryTestCase", smalltalk.TestCase, [], 'nil');
smalltalk.PoolDictionaryTestCase.$classVariableNames=("");
smalltalk.bind(smalltalk.PoolDictionaryTestCase, unescape("testRemoveKeyIfAbsent"), "testRemoveKeyIfAbsent", function PoolDictionaryTestCase__testRemoveKeyIfAbsent(){
var poolD = nil;
var testValue = nil;
const self = this; testValue=(0);
poolD=smalltalk.PoolDictionary.$$new();
self.assert_equals_((poolD.size()),(0));
poolD.add_(("test"._minus_gt((5))));
self.assert_equals_((poolD.size()),(1));
poolD.removeKey_ifAbsent_("test",(function PoolDictionaryTestCase__(){
return testValue=(-1);
}
));
self.assert_equals_((poolD.size()),(0));
self.deny_equals_(testValue,(-1));
poolD.add_(("test2"._minus_gt((5))));
poolD.removeKey_ifAbsent_("test",(function PoolDictionaryTestCase__(){
return testValue=(-1);
}
));
self.assert_equals_(testValue,(-1));
poolD.removeKey_ifAbsent_((5),(function PoolDictionaryTestCase__(){
return testValue=(-2);
}
));
self.assert_equals_(testValue,(-2));
self.assert_equals_((poolD.removeKey_ifAbsent_(true,(function PoolDictionaryTestCase__(){
return (-5);
}
))),(-5));
self.should_raise_((function PoolDictionaryTestCase__(){
return poolD.removeKey_ifAbsent_("test",(-1));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testRemoveKeyIfAbsent%0D%0D%09%7C%20poolD%20testValue%20%7C%0D%09testValue%20%3A%3D%200.%0D%09poolD%20%3A%3D%20PoolDictionary%20new.%0D%09self%0D%09%09assert%3A%20poolD%20size%20%0D%09%09equals%3A%200.%0D%09poolD%20add%3A%20%27test%27%20-%3E%205.%0D%09self%0D%09%09assert%3A%20poolD%20size%0D%09%09equals%3A%201.%0D%09poolD%20removeKey%3A%20%27test%27%20ifAbsent%3A%20%5BtestValue%20%3A%3D%20-1%5D.%0D%09self%20%0D%09%09assert%3A%20poolD%20size%0D%09%09equals%3A%200.%0D%09self%20%0D%09%09deny%3A%20testValue%0D%09%09equals%3A%20-1.%0D%09poolD%20add%3A%20%27test2%27%20-%3E%205.%0D%09poolD%20removeKey%3A%20%27test%27%20ifAbsent%3A%20%5BtestValue%20%3A%3D%20-1%5D.%0D%09self%20%0D%09%09assert%3A%20testValue%20%0D%09%09equals%3A%20-1.%0D%09poolD%20removeKey%3A%205%20ifAbsent%3A%20%5BtestValue%20%3A%3D%20-2%5D.%0D%09self%0D%09%09assert%3A%20testValue%0D%09%09equals%3A%20-2.%0D%09self%20%0D%09%09assert%3A%20%28poolD%20removeKey%3A%20true%20ifAbsent%3A%20%5B-5%5D%29%0D%09%09equals%3A%20-5.%0D%09self%0D%09%09should%3A%20%5BpoolD%20removeKey%3A%20%27test%27%20ifAbsent%3A%20-1%5D%0D%09%09raise%3A%20Error.%20"));
smalltalk.bind(smalltalk.PoolDictionaryTestCase, unescape("testAtKeyIfAbsent"), "testAtKeyIfAbsent", function PoolDictionaryTestCase__testAtKeyIfAbsent(){
var poolD = nil;
var failValue = nil;
const self = this; poolD=smalltalk.PoolDictionary.$$new();
poolD.add_(("test"._minus_gt((10))));
self.assert_equals_((poolD.at_ifAbsent_("test",(function PoolDictionaryTestCase__(){
return (-1);
}
))),(10));
self.assert_equals_((poolD.at_ifAbsent_("test2",(function PoolDictionaryTestCase__(){
return (-1);
}
))),(-1));
self.assert_equals_((poolD.at_ifAbsent_(true,(function PoolDictionaryTestCase__(){
return (-1);
}
))),(-1));
self.should_raise_((function PoolDictionaryTestCase__(){
return poolD.at_ifAbsent_("test2",(-1));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testAtKeyIfAbsent%0D%0D%09%7C%20poolD%20failValue%20%7C%0D%09poolD%20%3A%3D%20PoolDictionary%20new.%0D%09poolD%20add%3A%20%27test%27%20-%3E%2010.%0D%09self%0D%09%09assert%3A%20%28poolD%20at%3A%20%27test%27%20ifAbsent%3A%20%5B-1%5D%29%0D%09%09equals%3A%2010.%0D%09self%0D%09%09assert%3A%20%28poolD%20at%3A%20%27test2%27%20ifAbsent%3A%20%5B-1%5D%29%0D%09%09equals%3A%20-1.%0D%09self%0D%09%09assert%3A%20%28poolD%20at%3A%20true%20ifAbsent%3A%20%5B-1%5D%29%0D%09%09equals%3A%20-1.%0D%09self%0D%09%09should%3A%20%5BpoolD%20at%3A%20%27test2%27%20ifAbsent%3A%20-1%5D%0D%09%09raise%3A%20Error.%20"));
smalltalk.bind(smalltalk.PoolDictionaryTestCase, unescape("testKeys"), "testKeys", function PoolDictionaryTestCase__testKeys(){
var poolD = nil;
var expected = nil;
var results = nil;
const self = this; poolD=smalltalk.PoolDictionary.$$new();
expected=["test1", "test2"].asSet();
self.assert_equals_((poolD.keys()),[]);
poolD.add_(("test1"._minus_gt((1))));
poolD.add_(("test2"._minus_gt((2))));
self.assert_equals_(((poolD.keys()).asSet()),expected);
poolD.removeKey_ifAbsent_("test1",(function PoolDictionaryTestCase__(){
return nil;
}
));
self.assert_equals_(((poolD.keys()).asSet()),(["test2"].asSet()));
return self;
}
, "running", unescape("testKeys%0D%0D%09%7C%20poolD%20expected%20results%20%7C%0D%09poolD%20%3A%3D%20PoolDictionary%20new.%0D%09expected%20%3A%3D%20%23%28%27test1%27%20%27test2%27%29%20asSet.%0D%09self%0D%09%09assert%3A%20poolD%20keys%0D%09%09equals%3A%20%23%28%29.%0D%09poolD%20add%3A%20%27test1%27%20-%3E%201.%0D%09poolD%20add%3A%20%27test2%27%20-%3E%202.%0D%09self%20%0D%09%09assert%3A%20poolD%20keys%20asSet%20%0D%09%09equals%3A%20expected.%0D%09poolD%20removeKey%3A%20%27test1%27%20ifAbsent%3A%20%5B%5D.%0D%09self%20%0D%09%09assert%3A%20poolD%20keys%20asSet%20%0D%09%09equals%3A%20%23%28%27test2%27%29%20asSet.%20"));
smalltalk.bind(smalltalk.PoolDictionaryTestCase, unescape("testAtPut"), "testAtPut", function PoolDictionaryTestCase__testAtPut(){
var pd = nil;
const self = this; pd=smalltalk.PoolDictionary.$$new();
self.assert_equals_((pd.size()),(0));
pd.at_put_("test",(5));
self.assert_equals_((pd.size()),(1));
self.assert_equals_((pd.at_ifAbsent_("test",(function PoolDictionaryTestCase__(){
return (-1);
}
))),(5));
self.should_raise_((function PoolDictionaryTestCase__(){
return pd.at_put_(true,"this should raise an error.");
}
),smalltalk.Error);
return self;
}
, "running", unescape("testAtPut%0D%0D%09%7C%20pd%20%7C%0D%09pd%20%3A%3D%20PoolDictionary%20new.%0D%09self%20%0D%09%09assert%3A%20pd%20size%20%0D%09%09equals%3A%200.%0D%09pd%20at%3A%20%27test%27%20put%3A%205.%0D%09self%0D%09%09assert%3A%20pd%20size%0D%09%09equals%3A%201.%0D%09self%0D%09%09assert%3A%20%28pd%20at%3A%20%27test%27%20ifAbsent%3A%20%5B-1%5D%29%0D%09%09equals%3A%205.%0D%09self%0D%09%09should%3A%20%5Bpd%20at%3A%20true%20put%3A%20%27this%20should%20raise%20an%20error.%27%5D%0D%09%09raise%3A%20Error.%20"));
smalltalk.bind(smalltalk.PoolDictionaryTestCase, unescape("testKeysAndValuesDo"), "testKeysAndValuesDo", function PoolDictionaryTestCase__testKeysAndValuesDo(){
var pd = nil;
var stringResults = nil;
var numberResults = nil;
var expectedStrings = nil;
var expectedNums = nil;
const self = this; expectedNums=[(1), (2), (3), (4)].asSet();
expectedStrings=["test1", "test2", "test3", "test4"].asSet();
pd=smalltalk.PoolDictionary.$$new();
stringResults=smalltalk.Set.$$new();
numberResults=smalltalk.Set.$$new();
pd.at_put_("test1",(1));
pd.at_put_("test2",(2));
pd.at_put_("test3",(3));
pd.at_put_("test4",(4));
pd.keysAndValuesDo_((function PoolDictionaryTestCase__(key,value){
stringResults.add_(key);
return numberResults.add_(value);
}
));
self.assert_equals_(numberResults,expectedNums);
self.assert_equals_(stringResults,expectedStrings);
return self;
}
, "running", unescape("testKeysAndValuesDo%0D%0D%09%7C%20pd%20stringResults%20numberResults%20expectedStrings%20expectedNums%20%7C%0D%09expectedNums%20%3A%3D%20%23%281%202%203%204%29%20asSet.%0D%09expectedStrings%20%3A%3D%20%23%28%27test1%27%20%27test2%27%20%27test3%27%20%27test4%27%29%20asSet.%0D%09pd%20%3A%3D%20PoolDictionary%20new.%0D%09stringResults%20%3A%3D%20Set%20new.%0D%09numberResults%20%3A%3D%20Set%20new.%0D%09pd%20at%3A%20%27test1%27%20put%3A%201.%0D%09pd%20at%3A%20%27test2%27%20put%3A%202.%0D%09pd%20at%3A%20%27test3%27%20put%3A%203.%0D%09pd%20at%3A%20%27test4%27%20put%3A%204.%0D%09pd%20keysAndValuesDo%3A%20%5B%3Akey%20%3Avalue%20%7C%20stringResults%20add%3A%20key.%20numberResults%20add%3A%20value%5D.%0D%09self%20%0D%09%09assert%3A%20numberResults%0D%09%09equals%3A%20expectedNums.%0D%09self%0D%09%09assert%3A%20stringResults%0D%09%09equals%3A%20expectedStrings.%20"));
smalltalk.bind(smalltalk.PoolDictionaryTestCase, unescape("testValues"), "testValues", function PoolDictionaryTestCase__testValues(){
var pd = nil;
var expectedValues = nil;
var result = nil;
const self = this; expectedValues=[(1), (2), "test"].asSet();
pd=smalltalk.PoolDictionary.$$new();
pd.at_put_("test",(1));
pd.at_put_("test2",(2));
pd.at_put_("test3","test");
result=(pd.values()).asSet();
self.assert_equals_(result,expectedValues);
return self;
}
, "running", unescape("testValues%0D%0D%09%7C%20pd%20expectedValues%20result%20%7C%0D%09expectedValues%20%3A%3D%20%23%281%202%20%27test%27%29%20asSet.%0D%09pd%20%3A%3D%20PoolDictionary%20new.%0D%09pd%20at%3A%20%27test%27%20put%3A%201.%0D%09pd%20at%3A%20%27test2%27%20put%3A%202.%0D%09pd%20at%3A%20%27test3%27%20put%3A%20%27test%27.%0D%09result%20%3A%3D%20pd%20values%20asSet.%0D%09self%20%0D%09%09assert%3A%20result%0D%09%09equals%3A%20expectedValues.%20"));
