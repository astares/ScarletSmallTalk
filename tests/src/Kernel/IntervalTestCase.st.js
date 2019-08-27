smalltalk.addClass("IntervalTestCase", smalltalk.TestCase, [], 'nil');
smalltalk.IntervalTestCase.$classVariableNames=("");
smalltalk.bind(smalltalk.IntervalTestCase, unescape("testCreation"), "testCreation", function IntervalTestCase__testCreation(){
var interval = nil;
const self = this; interval=smalltalk.Interval.$$new();
self.assert_equals_((interval.$klass),smalltalk.Interval);
return self;
}
, "running", unescape("testCreation%0D%0D%09%7C%20interval%20%7C%0D%09interval%20%3A%3D%20Interval%20new.%0D%09self%20%0D%09%09assert%3A%20interval%20class%0D%09%09equals%3A%20Interval%20"));
smalltalk.bind(smalltalk.IntervalTestCase, unescape("testInit"), "testInit", function IntervalTestCase__testInit(){
var $$int = nil;
const self = this; $$int=smalltalk.Interval.from_to_by_((1),(5),(1));
self.assert_equals_(($$int.start()),(1));
self.assert_equals_(($$int.stop()),(5));
self.assert_equals_(($$int.step()),(1));
$$int=smalltalk.Interval.from_to_((10),(20));
self.assert_equals_(($$int.start()),(10));
self.assert_equals_(($$int.stop()),(20));
self.assert_equals_(($$int.step()),(1));
return self;
}
, "running", unescape("testInit%0D%0D%09%7C%20int%20%7C%0D%09int%20%3A%3D%20Interval%20from%3A%201%20to%3A%205%20by%3A%201.%0D%09self%0D%09%09assert%3A%20int%20start%0D%09%09equals%3A%201.%0D%09self%20%0D%09%09assert%3A%20int%20stop%0D%09%09equals%3A%205.%0D%09self%0D%09%09assert%3A%20int%20step%0D%09%09equals%3A%201.%0D%09int%20%3A%3D%20Interval%20from%3A%2010%20to%3A%2020.%0D%09self%0D%09%09assert%3A%20int%20start%0D%09%09equals%3A%2010.%0D%09self%0D%09%09assert%3A%20int%20stop%0D%09%09equals%3A%2020.%0D%09self%0D%09%09assert%3A%20int%20step%0D%09%09equals%3A%201%20"));
smalltalk.bind(smalltalk.IntervalTestCase, unescape("testSize"), "testSize", function IntervalTestCase__testSize(){
const self = this; self.assert_equals_(((smalltalk.Interval.from_to_((0),(10))).size()),(11));
self.assert_equals_(((smalltalk.Interval.from_to_((1),(10))).size()),(10));
self.assert_equals_(((smalltalk.Interval.from_to_by_((10),(2),(-1))).size()),(9));
self.assert_equals_(((smalltalk.Interval.from_to_((-10),(-1))).size()),(10));
self.assert_equals_(((smalltalk.Interval.from_to_by_((-5),(-10),(-1))).size()),(6));
self.assert_equals_(((smalltalk.Interval.from_to_by_((10),(-10),(-1))).size()),(21));
self.assert_equals_(((smalltalk.Interval.from_to_((-10),(10))).size()),(21));
self.assert_equals_(((smalltalk.Interval.from_to_by_((1),(15),(3))).size()),(5));
self.assert_equals_(((smalltalk.Interval.from_to_by_((-8),(6),(4))).size()),(4));
return self;
}
, "running", unescape("testSize%0D%0D%09self%0D%09%09assert%3A%20%28Interval%20from%3A%200%20to%3A%2010%29%20size%0D%09%09equals%3A%2011.%0D%09self%0D%09%09assert%3A%20%28Interval%20from%3A%201%20to%3A%2010%29%20size%0D%09%09equals%3A%2010.%0D%09self%0D%09%09assert%3A%20%28Interval%20from%3A%2010%20to%3A%202%20by%3A%20-1%29%20size%0D%09%09equals%3A%209.%0D%09self%0D%09%09assert%3A%20%28Interval%20from%3A%20-10%20to%3A%20-1%29%20size%0D%09%09equals%3A%2010.%0D%09self%20%0D%09%09assert%3A%20%28Interval%20from%3A%20-5%20to%3A%20-10%20by%3A%20-1%29%20size%0D%09%09equals%3A%206.%0D%09self%0D%09%09assert%3A%20%28Interval%20from%3A%2010%20to%3A%20-10%20by%3A%20-1%29%20size%0D%09%09equals%3A%2021.%0D%09self%0D%09%09assert%3A%20%28Interval%20from%3A%20-10%20to%3A%2010%29%20size%0D%09%09equals%3A%2021.%0D%09self%0D%09%09assert%3A%20%28Interval%20from%3A%201%20to%3A%2015%20by%3A%203%29%20size%0D%09%09equals%3A%205.%0D%09self%0D%09%09assert%3A%20%28Interval%20from%3A%20-8%20to%3A%206%20by%3A%204%29%20size%0D%09%09equals%3A%204%20"));
smalltalk.bind(smalltalk.IntervalTestCase, unescape("testDo"), "testDo", function IntervalTestCase__testDo(){
var $$int = nil;
var results = nil;
var expected = nil;
var index = nil;
const self = this; index=(1);
results=smalltalk.Array.new_((5));
expected=[(1), (2), (3), (4), (5)];
$$int=smalltalk.Interval.from_to_by_((1),(5),(1));
$$int.do_((function IntervalTestCase__(each){
results.at_put_(index,each);
return index=index._plus((1));
}
));
self.assert_equals_(results,expected);
results=smalltalk.Array.new_((5));
index=(1);
expected=[(5), (4), (3), (2), (1)];
$$int=smalltalk.Interval.from_to_by_((5),(1),(-1));
$$int.do_((function IntervalTestCase__(each){
results.at_put_(index,each);
return index=index._plus((1));
}
));
self.assert_equals_(results,expected);
results=smalltalk.Array.new_((3));
index=(1);
expected=[(1), (4), (7)];
$$int=smalltalk.Interval.from_to_by_((1),(8),(3));
$$int.do_((function IntervalTestCase__(each){
results.at_put_(index,each);
return index=index._plus((1));
}
));
self.assert_equals_(results,expected);
return self;
}
, "running", unescape("testDo%0D%0D%09%7C%20int%20results%20expected%20index%20%7C%0D%09index%20%3A%3D%201.%0D%09results%20%3A%3D%20Array%20new%3A%205.%0D%09expected%20%3A%3D%20%23%281%202%203%204%205%29.%0D%09int%20%3A%3D%20Interval%20from%3A%201%20to%3A%205%20by%3A%201.%0D%09int%20do%3A%20%0D%09%09%5B%3Aeach%20%7C%20results%20at%3A%20index%20put%3A%20each.%0D%09%09%20index%20%3A%3D%20index%20+%201%5D.%0D%09self%20%0D%09%09assert%3A%20results%0D%09%09equals%3A%20expected.%0D%09results%20%3A%3D%20Array%20new%3A%205.%0D%09index%20%3A%3D%201.%0D%09expected%20%3A%3D%20%23%285%204%203%202%201%29.%0D%09int%20%3A%3D%20Interval%20from%3A%205%20to%3A%201%20by%3A%20-1.%0D%09int%20do%3A%20%0D%09%09%5B%3Aeach%20%7C%20results%20at%3A%20index%20put%3A%20each.%20%0D%09%09index%20%3A%3D%20index%20+%201%5D.%0D%09self%0D%09%09assert%3A%20results%0D%09%09equals%3A%20expected.%0D%09results%20%3A%3D%20Array%20new%3A%203.%0D%09index%20%3A%3D%201.%0D%09expected%20%3A%3D%20%23%281%204%207%29.%0D%09int%20%3A%3D%20Interval%20from%3A%201%20to%3A%208%20by%3A%203.%0D%09int%20do%3A%20%0D%09%09%5B%3Aeach%20%7C%20results%20at%3A%20index%20put%3A%20each.%20%0D%09%09index%20%3A%3D%20index%20+%201%5D.%0D%09self%0D%09%09assert%3A%20results%0D%09%09equals%3A%20expected%20"));
smalltalk.bind(smalltalk.IntervalTestCase, unescape("testAsArray"), "testAsArray", function IntervalTestCase__testAsArray(){
var interval = nil;
var result = nil;
var expected = nil;
const self = this; interval=smalltalk.Interval.from_to_by_((1),(10),(1));
expected=[(1), (2), (3), (4), (5), (6), (7), (8), (9), (10)];
result=interval.asArray();
self.assert_equals_((result.$klass),smalltalk.Array);
self.assert_equals_(result,expected);
return self;
}
, "running", unescape("testAsArray%0D%0D%09%7C%20interval%20result%20expected%20%7C%0D%09interval%20%3A%3D%20Interval%20from%3A%201%20to%3A%2010%20by%3A%201.%0D%09expected%20%3A%3D%20%23%281%202%203%204%205%206%207%208%209%2010%29.%0D%09result%20%3A%3D%20interval%20asArray.%0D%09self%20%0D%09%09assert%3A%20result%20class%0D%09%09equals%3A%20Array.%0D%09self%0D%09%09assert%3A%20result%0D%09%09equals%3A%20expected%20"));
smalltalk.bind(smalltalk.IntervalTestCase, unescape("testEquality"), "testEquality", function IntervalTestCase__testEquality(){
var intervalOne = nil;
var intervalTwo = nil;
const self = this; intervalOne=smalltalk.Interval.from_to_((1),(5));
intervalTwo=smalltalk.Interval.from_to_((1),(5));
self.assert_equals_(intervalOne,intervalTwo);
intervalTwo=smalltalk.Interval.from_to_by_((1),(5),(2));
self.deny_equals_(intervalOne,intervalTwo);
return self;
}
, "running", unescape("testEquality%0D%0D%09%7C%20intervalOne%20intervalTwo%20%7C%0D%09intervalOne%20%3A%3D%20Interval%20from%3A%201%20to%3A%205.%0D%09intervalTwo%20%3A%3D%20Interval%20from%3A%201%20to%3A%205.%0D%09self%20%0D%09%09assert%3A%20intervalOne%20%0D%09%09equals%3A%20intervalTwo.%0D%09intervalTwo%20%3A%3D%20Interval%20from%3A%201%20to%3A%205%20by%3A%202.%0D%09self%0D%09%09deny%3A%20intervalOne%0D%09%09equals%3A%20intervalTwo%20"));
smalltalk.bind(smalltalk.IntervalTestCase, unescape("testConcat"), "testConcat", function IntervalTestCase__testConcat(){
const self = this; self.assert_equals_((((smalltalk.Interval.from_to_by_((1),(3),(1)))._comma((smalltalk.Interval.from_to_by_((1),(2),(1))))).asArray()),[(1), (2), (3), (1), (2)]);
self.assert_equals_((((smalltalk.Interval.from_to_((1),(3)))._comma([(4), (5)])).asArray()),[(1), (2), (3), (4), (5)]);
return self;
}
, "running", unescape("testConcat%0D%0D%09self%20%0D%09%09assert%3A%20%28%28Interval%20from%3A%201%20to%3A%203%20by%3A%201%29%20%2C%20%28Interval%20from%3A%201%20to%3A%202%20by%3A%201%29%29%20asArray%0D%09%09equals%3A%20%23%281%202%203%201%202%29.%0D%09self%0D%09%09assert%3A%20%28%28Interval%20from%3A%201%20to%3A%203%29%2C%20%23%284%205%29%29%20asArray%0D%09%09equals%3A%20%23%281%202%203%204%205%29%20"));
smalltalk.bind(smalltalk.IntervalTestCase, unescape("testCollect"), "testCollect", function IntervalTestCase__testCollect(){
var interval = nil;
var result = nil;
var expected = nil;
const self = this; expected=[(2), (3), (4), (5), (6)];
interval=smalltalk.Interval.from_to_by_((1),(5),(1));
result=interval.collect_((function IntervalTestCase__(x){
return x._plus((1));
}
));
self.assert_equals_(result,expected);
self.should_raise_((function IntervalTestCase__(){
return interval.collect_((1));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testCollect%0D%0D%09%7C%20interval%20result%20expected%20%7C%0D%09expected%20%3A%3D%20%23%282%203%204%205%206%29.%0D%09interval%20%3A%3D%20Interval%20from%3A%201%20to%3A%205%20by%3A%201.%0D%09result%20%3A%3D%20interval%20collect%3A%20%5B%3Ax%20%7C%20x%20+%201%5D.%0D%09self%0D%09%09assert%3A%20result%20%0D%09%09equals%3A%20expected.%0D%09self%0D%09%09should%3A%20%5Binterval%20collect%3A%201%5D%0D%09%09raise%3A%20Error%20"));
smalltalk.bind(smalltalk.IntervalTestCase, unescape("testCopyFromTo"), "testCopyFromTo", function IntervalTestCase__testCopyFromTo(){
var interval = nil;
var copyInterval = nil;
const self = this; interval=smalltalk.Interval.from_to_by_((1),(10),(1));
copyInterval=interval.copyFrom_to_((5),(10));
self.assert_equals_((copyInterval.$klass),smalltalk.Interval);
self.assert_equals_((copyInterval.start()),(5));
self.assert_equals_((copyInterval.stop()),(10));
self.assert_equals_((copyInterval.step()),(1));
self.should_raise_((function IntervalTestCase__(){
return interval=copyInterval.copyFrom_to_((1),(10));
}
),smalltalk.Error);
self.should_raise_((function IntervalTestCase__(){
return interval=copyInterval.copyFrom_to_((5),(12));
}
),smalltalk.Error);
self.should_raise_((function IntervalTestCase__(){
return interval=copyInterval.copyFrom_to_((10),(5));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testCopyFromTo%0D%0D%09%7C%20interval%20copyInterval%20%7C%0D%09interval%20%3A%3D%20Interval%20from%3A%201%20to%3A%2010%20by%3A%201.%0D%09copyInterval%20%3A%3D%20interval%20copyFrom%3A%205%20to%3A%2010.%0D%09self%20%0D%09%09assert%3A%20copyInterval%20class%0D%09%09equals%3A%20Interval.%0D%09self%20%0D%09%09assert%3A%20copyInterval%20start%20%0D%09%09equals%3A%205.%0D%09self%20%0D%09%09assert%3A%20copyInterval%20stop%20%0D%09%09equals%3A%2010.%0D%09self%0D%09%09assert%3A%20copyInterval%20step%0D%09%09equals%3A%201.%0D%09self%0D%09%09should%3A%20%5Binterval%20%3A%3D%20copyInterval%20copyFrom%3A%201%20to%3A%2010%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09should%3A%20%5Binterval%20%3A%3D%20copyInterval%20copyFrom%3A%205%20to%3A%2012%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09should%3A%20%5Binterval%20%3A%3D%20copyInterval%20copyFrom%3A%2010%20to%3A%205%5D%0D%09%09raise%3A%20Error%20"));
smalltalk.bind(smalltalk.IntervalTestCase, unescape("testCopyReplaceAllWith"), "testCopyReplaceAllWith", function IntervalTestCase__testCopyReplaceAllWith(){
var interval = nil;
var result = nil;
var expected = nil;
const self = this; interval=smalltalk.Interval.from_to_by_((1),(5),(1));
expected=[(1), (6), (7), (8), (9), (5)];
result=interval.copyReplaceAll_with_([(2), (3), (4)],[(6), (7), (8), (9)]);
self.assert_equals_(result,expected);
self.assert_equals_(((smalltalk.Interval.from_to_by_((10),(1),(-1))).copyReplaceAll_with_([(2), (3), (4)],[(5), (6), (7)])),[(10), (9), (8), (7), (6), (5), (4), (3), (2), (1)]);
return self;
}
, "running", unescape("testCopyReplaceAllWith%0D%0D%09%7C%20interval%20result%20expected%20%7C%0D%09interval%20%3A%3D%20Interval%20from%3A%201%20to%3A%205%20by%3A%201.%0D%09expected%20%3A%3D%20%23%281%206%207%208%209%205%29.%0D%09result%20%3A%3D%20interval%20copyReplaceAll%3A%20%23%282%203%204%29%20with%3A%20%23%286%207%208%209%29.%0D%09self%20%0D%09%09assert%3A%20result%0D%09%09equals%3A%20expected.%0D%09self%20%0D%09%09assert%3A%20%28%28Interval%20from%3A%2010%20to%3A%201%20by%3A%20-1%29%20copyReplaceAll%3A%20%23%282%203%204%29%20with%3A%20%23%285%206%207%29%29%0D%09%09equals%3A%20%23%2810%209%208%207%206%205%204%203%202%201%29%20"));
smalltalk.bind(smalltalk.IntervalTestCase, unescape("testCopyReplaceFromToWith"), "testCopyReplaceFromToWith", function IntervalTestCase__testCopyReplaceFromToWith(){
var interval = nil;
var result = nil;
var expected = nil;
const self = this; interval=smalltalk.Interval.from_to_((1),(5));
result=interval.copyReplaceFrom_to_with_((4),(3),[(6), (7), (8), (9)]);
expected=[(1), (2), (3), (6), (7), (8), (9), (4), (5)];
self.assert_equals_(result,expected);
interval=smalltalk.Interval.from_to_((1),(5));
result=interval.copyReplaceFrom_to_with_((6),(5),[(6), (7), (8), (9), (10)]);
expected=(smalltalk.Interval.from_to_((1),(10))).asArray();
self.assert_equals_(result,expected);
interval=smalltalk.Interval.from_to_((20),(30));
result=interval.copyReplaceFrom_to_with_((1),(5),[(1), (2), (3), (4), (5)]);
expected=[(1), (2), (3), (4), (5), (25), (26), (27), (28), (29), (30)];
self.assert_equals_(result,expected);
self.should_raise_((function IntervalTestCase__(){
return interval.copyReplaceFrom_to_with_((11),(22),[(1), (2), (3), (4), (5)]);
}
),smalltalk.Error);
return self;
}
, "running", unescape("testCopyReplaceFromToWith%0D%0D%09%7C%20interval%20result%20expected%20%7C%0D%09interval%20%3A%3D%20Interval%20from%3A%201%20to%3A%205.%0D%09result%20%3A%3D%20interval%20copyReplaceFrom%3A%204%20to%3A%203%20with%3A%20%23%286%207%208%209%29.%0D%09expected%20%3A%3D%20%23%281%202%203%206%207%208%209%204%205%29.%0D%09self%0D%09%09assert%3A%20result%0D%09%09equals%3A%20expected.%0D%09interval%20%3A%3D%20Interval%20from%3A%201%20to%3A%205.%0D%09result%20%3A%3D%20interval%20copyReplaceFrom%3A%206%20to%3A%205%20with%3A%20%23%286%207%208%209%2010%29.%0D%09expected%20%3A%3D%20%28Interval%20from%3A%201%20to%3A%2010%29%20asArray.%0D%09self%0D%09%09assert%3A%20result%20%0D%09%09equals%3A%20expected.%09%0D%09interval%20%3A%3D%20Interval%20from%3A%2020%20to%3A%2030.%0D%09result%20%3A%3D%20interval%20copyReplaceFrom%3A%201%20to%3A%205%20with%3A%20%23%281%202%203%204%205%29.%0D%09expected%20%3A%3D%20%23%281%202%203%204%205%2025%2026%2027%2028%2029%2030%29.%0D%09self%0D%09%09assert%3A%20result%20%0D%09%09equals%3A%20expected.%0D%09self%0D%09%09should%3A%20%5Binterval%20copyReplaceFrom%3A%2011%20to%3A%2022%20with%3A%20%23%281%202%203%204%205%29%5D%0D%09%09raise%3A%20Error%20"));
smalltalk.bind(smalltalk.IntervalTestCase, unescape("testCopyReplaceFromToWithObject"), "testCopyReplaceFromToWithObject", function IntervalTestCase__testCopyReplaceFromToWithObject(){
var interval = nil;
var result = nil;
var expected = nil;
const self = this; interval=smalltalk.Interval.from_to_by_((2),(5),(1));
result=interval.copyReplaceFrom_to_withObject_((1),(0),(1));
expected=[(1), (2), (3), (4), (5)];
self.assert_equals_(result,expected);
interval=smalltalk.Interval.from_to_by_((1),(5),(2));
result=interval.copyReplaceFrom_to_withObject_((3),(2),(4));
expected=[(1), (3), (4), (5)];
self.assert_equals_(result,expected);
interval=smalltalk.Interval.from_to_by_((1),(5),(1));
result=interval.copyReplaceFrom_to_withObject_((6),(5),(6));
expected=[(1), (2), (3), (4), (5), (6)];
self.assert_equals_(result,expected);
self.assert_equals_(((interval.copyReplaceFrom_to_withObject_((2),(4),(6))).$klass),smalltalk.Array);
self.assert_equals_((interval.copyReplaceFrom_to_withObject_((2),(4),(6))),[(1), (6), (6), (6), (5)]);
self.should_raise_((function IntervalTestCase__(){
return interval.copyReplaceFrom_to_withObject_((3),(7),(9));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testCopyReplaceFromToWithObject%0D%0D%09%7C%20interval%20result%20expected%20%7C%0D%09interval%20%3A%3D%20Interval%20from%3A%202%20to%3A%205%20by%3A%201.%0D%09result%20%3A%3D%20interval%20copyReplaceFrom%3A%201%20to%3A%200%20withObject%3A%201.%0D%09expected%20%3A%3D%20%23%281%202%203%204%205%29.%0D%09self%0D%09%09assert%3A%20result%20%0D%09%09equals%3A%20expected.%0D%09interval%20%3A%3D%20Interval%20from%3A%201%20to%3A%205%20by%3A%202.%0D%09result%20%3A%3D%20interval%20copyReplaceFrom%3A%203%20to%3A%202%20withObject%3A%204.%0D%09expected%20%3A%3D%20%23%281%203%204%205%29.%0D%09self%0D%09%09assert%3A%20result%20%0D%09%09equals%3A%20expected.%0D%09interval%20%3A%3D%20Interval%20from%3A%201%20to%3A%205%20by%3A%201.%0D%09result%20%3A%3D%20interval%20copyReplaceFrom%3A%206%20to%3A%205%20withObject%3A%206.%0D%09expected%20%3A%3D%20%23%281%202%203%204%205%206%29.%0D%09self%20%0D%09%09assert%3A%20result%0D%09%09equals%3A%20expected.%20%0D%09self%20%0D%09%09assert%3A%20%28interval%20copyReplaceFrom%3A%202%20to%3A%204%20withObject%3A%206%29%20class%0D%09%09equals%3A%20Array.%0D%09self%0D%09%09assert%3A%20%28interval%20copyReplaceFrom%3A%202%20to%3A%204%20withObject%3A%206%29%0D%09%09equals%3A%20%23%281%206%206%206%205%29.%0D%09self%0D%09%09should%3A%20%5Binterval%20copyReplaceFrom%3A%203%20to%3A%207%20withObject%3A%209%5D%0D%09%09raise%3A%20Error%20"));
smalltalk.bind(smalltalk.IntervalTestCase, unescape("testCopyReplacingWithObject"), "testCopyReplacingWithObject", function IntervalTestCase__testCopyReplacingWithObject(){
var interval = nil;
var result = nil;
var expected = nil;
const self = this; interval=smalltalk.Interval.from_to_by_((1),(5),(1));
expected=[(1), (2), (9), (4), (5)];
result=interval.copyReplacing_withObject_((3),(9));
self.assert_equals_(result,expected);
return self;
}
, "running", unescape("testCopyReplacingWithObject%0D%0D%09%7C%20interval%20result%20expected%20%7C%0D%09interval%20%3A%3D%20Interval%20from%3A%201%20to%3A%205%20by%3A%201.%0D%09expected%20%3A%3D%20%23%281%202%209%204%205%29.%0D%09result%20%3A%3D%20interval%20copyReplacing%3A%203%20withObject%3A%209.%0D%09self%0D%09%09assert%3A%20result%0D%09%09equals%3A%20expected%20"));
smalltalk.bind(smalltalk.IntervalTestCase, unescape("testCopyWith"), "testCopyWith", function IntervalTestCase__testCopyWith(){
var interval = nil;
var result = nil;
var expected = nil;
const self = this; interval=smalltalk.Interval.from_to_by_((1),(3),(1));
expected=[(1), (2), (3), (4)];
result=interval.copyWith_((4));
self.assert_equals_(result,expected);
return self;
}
, "running", unescape("testCopyWith%0D%0D%09%7C%20interval%20result%20expected%20%7C%0D%09interval%20%3A%3D%20Interval%20from%3A%201%20to%3A%203%20by%3A%201.%0D%09expected%20%3A%3D%20%23%281%202%203%204%29.%0D%09result%20%3A%3D%20interval%20copyWith%3A%204.%0D%09self%20%0D%09%09assert%3A%20result%0D%09%09equals%3A%20expected%20"));
smalltalk.bind(smalltalk.IntervalTestCase, unescape("testCopyWithout"), "testCopyWithout", function IntervalTestCase__testCopyWithout(){
var interval = nil;
var result = nil;
var expected = nil;
const self = this; interval=smalltalk.Interval.from_to_by_((1),(5),(1));
expected=[(1), (2), (4), (5)];
result=interval.copyWithout_((3));
self.assert_equals_(result,expected);
return self;
}
, "running", unescape("testCopyWithout%0D%0D%09%7C%20interval%20result%20expected%20%7C%0D%09interval%20%3A%3D%20Interval%20from%3A%201%20to%3A%205%20by%3A%201.%0D%09expected%20%3A%3D%20%23%281%202%204%205%29.%0D%09result%20%3A%3D%20interval%20copyWithout%3A%203.%0D%09self%20%0D%09%09assert%3A%20result%0D%09%09equals%3A%20expected%20"));
smalltalk.bind(smalltalk.IntervalTestCase, unescape("testReject"), "testReject", function IntervalTestCase__testReject(){
var interval = nil;
var result = nil;
var expected = nil;
const self = this; expected=[(2), (4), (6), (8), (10)];
interval=smalltalk.Interval.from_to_by_((1),(10),(1));
result=interval.reject_((function IntervalTestCase__(x){
return x.odd();
}
));
self.assert_equals_(result,expected);
self.should_raise_((function IntervalTestCase__(){
return result=interval.reject_((4));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testReject%0D%0D%09%7C%20interval%20result%20expected%20%7C%0D%09expected%20%3A%3D%20%23%282%204%206%208%2010%29.%0D%09interval%20%3A%3D%20Interval%20from%3A%201%20to%3A%2010%20by%3A%201.%0D%09result%20%3A%3D%20interval%20reject%3A%20%5B%3Ax%20%7C%20x%20odd%5D.%0D%09self%20%0D%09%09assert%3A%20result%0D%09%09equals%3A%20expected.%0D%09self%0D%09%09should%3A%20%5Bresult%20%3A%3D%20interval%20reject%3A%204%5D%0D%09%09raise%3A%20Error%20"));
smalltalk.bind(smalltalk.IntervalTestCase, unescape("testReverse"), "testReverse", function IntervalTestCase__testReverse(){
var interval = nil;
var result = nil;
var expected = nil;
const self = this; interval=smalltalk.Interval.from_to_by_((1),(5),(1));
expected=smalltalk.Interval.from_to_by_((5),(1),(-1));
result=interval.reverse();
self.assert_equals_(result,expected);
return self;
}
, "running", unescape("testReverse%0D%0D%09%7C%20interval%20result%20expected%20%7C%0D%09interval%20%3A%3D%20Interval%20from%3A%201%20to%3A%205%20by%3A%201.%0D%09expected%20%3A%3D%20Interval%20from%3A%205%20to%3A%201%20by%3A%20-1.%0D%09result%20%3A%3D%20interval%20reverse.%0D%09self%20%0D%09%09assert%3A%20result%0D%09%09equals%3A%20expected%20"));
smalltalk.bind(smalltalk.IntervalTestCase, unescape("testSelect"), "testSelect", function IntervalTestCase__testSelect(){
var interval = nil;
var result = nil;
var expected = nil;
const self = this; interval=smalltalk.Interval.from_to_by_((1),(10),(1));
expected=[(1), (3), (5), (7), (9)];
result=interval.select_((function IntervalTestCase__(each){
return each.odd();
}
));
self.assert_equals_(result,expected);
self.should_raise_((function IntervalTestCase__(){
return result=interval.select_(true);
}
),smalltalk.Error);
return self;
}
, "running", unescape("testSelect%0D%0D%09%7C%20interval%20result%20expected%20%7C%0D%09interval%20%3A%3D%20Interval%20from%3A%201%20to%3A%2010%20by%3A%201.%0D%09expected%20%3A%3D%20%23%281%203%205%207%209%29.%0D%09result%20%3A%3D%20interval%20select%3A%20%5B%3Aeach%20%7C%20each%20odd%5D.%0D%09self%0D%09%09assert%3A%20result%0D%09%09equals%3A%20expected.%0D%09self%0D%09%09should%3A%20%5Bresult%20%3A%3D%20interval%20select%3A%20true%5D%0D%09%09raise%3A%20Error%20"));
