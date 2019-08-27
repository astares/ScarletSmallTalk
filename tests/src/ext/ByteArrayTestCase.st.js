smalltalk.addClass("ByteArrayTestCase", smalltalk.TestCase, [], 'Tests');
smalltalk.ByteArrayTestCase.$classVariableNames=("");
smalltalk.bind(smalltalk.ByteArrayTestCase, unescape("testCreate"), "testCreate", function ByteArrayTestCase__testCreate(){
var x = nil;
var y = nil;
const self = this; x=smalltalk.ByteArray.$$new();
self.assert_((x.isEmpty()));
y=x.asByteArray();
self.assert_(((nil.is_eqeq_(x,y))));
return self;
}
, "running", unescape("testCreate%0D%0D%09%7C%20x%20y%20%7C%0D%09x%20%3A%3D%20ByteArray%20new.%0D%09self%20assert%3A%20x%20isEmpty.%0D%09y%20%3A%3D%20x%20asByteArray.%0D%09self%20assert%3A%20x%20%3D%3D%20y.%0D%09"));
smalltalk.bind(smalltalk.ByteArrayTestCase, unescape("testCreateSize"), "testCreateSize", function ByteArrayTestCase__testCreateSize(){
var x = nil;
const self = this; x=smalltalk.ByteArray.new_((1));
self.deny_((x.isEmpty()));
self.assert_(((x.size())._eq((1))));
self.assert_(((x.at_((1)))._eq((0))));
x=smalltalk.ByteArray.new_((2));
self.assert_(((x.size())._eq((2))));
self.assert_(((x.at_((1)))._eq((0))));
self.assert_(((x.at_((2)))._eq((0))));
x=smalltalk.ByteArray.new_((3));
self.assert_(((x.size())._eq((3))));
self.assert_(((x.at_((1)))._eq((0))));
self.assert_(((x.at_((2)))._eq((0))));
self.assert_(((x.at_((3)))._eq((0))));
return self;
}
, "as yet unclassified", unescape("testCreateSize%0D%0D%09%7C%20x%20%7C%0D%09x%20%3A%3D%20ByteArray%20new%3A%201.%0D%09self%20deny%3A%20x%20isEmpty.%0D%09self%20assert%3A%20x%20size%20%3D%201.%0D%09self%20assert%3A%20%28x%20at%3A%201%29%20%3D%200.%0D%09x%20%3A%3D%20ByteArray%20new%3A%202.%0D%09self%20assert%3A%20x%20size%20%3D%202.%0D%09self%20assert%3A%20%28x%20at%3A%201%29%20%3D%200.%0D%09self%20assert%3A%20%28x%20at%3A%202%29%20%3D%200.%0D%09x%20%3A%3D%20ByteArray%20new%3A%203.%0D%09self%20assert%3A%20x%20size%20%3D%203.%0D%09self%20assert%3A%20%28x%20at%3A%201%29%20%3D%200.%0D%09self%20assert%3A%20%28x%20at%3A%202%29%20%3D%200.%0D%09self%20assert%3A%20%28x%20at%3A%203%29%20%3D%200.%0D%09"));
smalltalk.bind(smalltalk.ByteArrayTestCase, unescape("testByteAccess"), "testByteAccess", function ByteArrayTestCase__testByteAccess(){
var x = nil;
var y = nil;
const self = this; x=smalltalk.ByteArray.new_((1));
self.deny_((x.isEmpty()));
self.assert_(((x.size())._eq((1))));
self.assert_(((x.at_((1)))._eq((0))));
self.should_raise_((function ByteArrayTestCase__(){
return x.add_((2));
}
),smalltalk.Error);
self.should_raise_((function ByteArrayTestCase__(){
return y=x.at_((2));
}
),smalltalk.Error);
(1).to_do_((255),(function ByteArrayTestCase__(i){
x.at_put_((1),i);
return self.assert_(((x.at_((1)))._eq(i)));
}
));
self.should_raise_((function ByteArrayTestCase__(){
return x.at_put_((1),(256));
}
),smalltalk.Error);
self.should_raise_((function ByteArrayTestCase__(){
return x.at_put_((1),(-1));
}
),smalltalk.Error);
return self;
}
, "as yet unclassified", unescape("testByteAccess%0D%0D%09%7C%20x%20%20y%20%7C%0D%0D%09x%20%3A%3D%20ByteArray%20new%3A%201.%0D%09self%20deny%3A%20x%20isEmpty.%0D%09self%20assert%3A%20x%20size%20%3D%201.%0D%09self%20assert%3A%20%28x%20at%3A%201%29%20%3D%200.%0D%09self%0D%09%09should%3A%20%5Bx%20add%3A%202%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09should%3A%20%5By%20%3A%3D%20x%20at%3A%202%5D%0D%09%09raise%3A%20Error.%0D%09%09%0D%09%22self%20assert%3A%20%28x%20at%3A%20999%20ifAbsent%3A%20%5B42%5D%29%20%3D%2042.%22%0D%09%0D%091%20to%3A%20255%20do%3A%20%5B%3Ai%20%7C%20%0D%09%09x%20at%3A%201%20put%3A%20i.%0D%09%09self%20assert%3A%20%28x%20at%3A%201%29%20%3D%20i%5D.%0D%09%09%0D%09%0D%09self%20should%3A%20%5Bx%20at%3A%201%20put%3A%20256.%5D%0D%09%09raise%3A%20Error.%0D%09self%20should%3A%20%5Bx%20at%3A%201%20put%3A%20-1.%5D%0D%09%09raise%3A%20Error.%0D%09%09%0D%09"));
smalltalk.bind(smalltalk.ByteArrayTestCase, unescape("testEquality"), "testEquality", function ByteArrayTestCase__testEquality(){
var x = nil;
var y = nil;
const self = this; x=smalltalk.ByteArray.new_((1));
x.at_put_((1),(42));
y=smalltalk.ByteArray.new_((1));
y.at_put_((1),(42));
self.assert_((x._eq(y)));
self.deny_(((nil.is_eqeq_(x,y))));
return self;
}
, "as yet unclassified", unescape("testEquality%0D%09%7C%20x%20y%20%7C%0D%09%0D%09x%20%3A%3D%20ByteArray%20new%3A%201.%0D%09x%20at%3A%201%20put%3A%2042.%0D%09y%20%3A%3D%20ByteArray%20new%3A%201.%0D%09y%20at%3A%201%20put%3A%2042.%20%0D%09self%20assert%3A%20x%20%3D%20y.%0D%09self%20deny%3A%20x%20%3D%3D%20y%0D%09%09"));
smalltalk.bind(smalltalk.ByteArrayTestCase, unescape("testCopy"), "testCopy", function ByteArrayTestCase__testCopy(){
var x = nil;
var y = nil;
const self = this; x=smalltalk.ByteArray.new_((1));
x.at_put_((1),(99));
y=x.shallowCopy();
x.at_put_((1),(42));
self.deny_(((y.at_((1)))._eq((x.at_((1))))));
x=smalltalk.ByteArray.new_((1));
x.at_put_((1),(99));
y=x.copy();
x.at_put_((1),(42));
self.deny_(((y.at_((1)))._eq((x.at_((1))))));
x=smalltalk.ByteArray.new_((1));
x.at_put_((1),(99));
y=x.deepCopy();
x.at_put_((1),(42));
self.deny_(((y.at_((1)))._eq((x.at_((1))))));
return self;
}
, "as yet unclassified", unescape("testCopy%0D%09%7Cx%20y%7C%0D%09%0D%20%20%20%20x%20%3A%3D%20%28ByteArray%20new%3A%201%29.%0D%20%20%20%20x%20at%3A%201%20put%3A%2099.%0D%20%20%20%20y%20%3A%3D%20x%20shallowCopy.%0D%20%20%20%20x%20at%3A%201%20put%3A%2042.%0D%20%20%20%20self%20deny%3A%20%28y%20at%3A%201%29%20%3D%20%28x%20at%3A%201%29.%0D%20%20%20%20%0D%20%20%20%20x%20%3A%3D%20%28ByteArray%20new%3A%201%29.%0D%20%20%20%20x%20at%3A%201%20put%3A%2099.%0D%20%20%20%20y%20%3A%3D%20x%20copy.%0D%20%20%20%20x%20at%3A%201%20put%3A%2042.%0D%20%20%20%20self%20deny%3A%20%28y%20at%3A%201%29%20%3D%20%28x%20at%3A%201%29.%0D%20%20%20%20%0D%20%20%20%20%20%20%20%20%0D%20%20%20%20x%20%3A%3D%20%28ByteArray%20new%3A%201%29.%0D%20%20%20%20x%20at%3A%201%20put%3A%2099.%0D%20%20%20%20y%20%3A%3D%20x%20deepCopy.%0D%20%20%20%20x%20at%3A%201%20put%3A%2042.%0D%20%20%20%20self%20deny%3A%20%28y%20at%3A%201%29%20%3D%20%28x%20at%3A%201%29%0D%20%20%20%20%09%0D%20%20%20%20"));
smalltalk.bind(smalltalk.ByteArrayTestCase, unescape("testCopyFrom"), "testCopyFrom", function ByteArrayTestCase__testCopyFrom(){
var x = nil;
var y = nil;
const self = this; x=smalltalk.ByteArray.new_((1));
x.at_put_((1),(99));
self.should_raise_((function ByteArrayTestCase__(){
return x.copyFrom_to_((99),(101));
}
),smalltalk.Error);
y=x.copyFrom_to_((1),(1));
self.assert_(((y.at_((1)))._eq((99))));
x=smalltalk.ByteArray.new_((3));
x.at_put_((1),(1));
x.at_put_((2),(2));
x.at_put_((3),(3));
y=x.copyFrom_to_((1),(2));
self.assert_(((y.size())._eq((2))));
self.assert_(((y.at_((1)))._eq((1))));
self.assert_(((y.at_((2)))._eq((2))));
y=x.copyFrom_to_((2),(3));
self.assert_(((y.size())._eq((2))));
self.assert_(((y.at_((1)))._eq((2))));
self.assert_(((y.at_((2)))._eq((3))));
return self;
}
, "as yet unclassified", unescape("testCopyFrom%0D%09%7Cx%20y%7C%0D%0D%20%20%20%20x%20%3A%3D%20ByteArray%20new%3A%201.%0D%20%20%20%20x%20at%3A%201%20put%3A%2099.%0D%20%20%0D%09self%20should%3A%20%5B%20x%20copyFrom%3A%2099%20to%3A%20101%5D%0D%09%09raise%3A%20Error.%0D%09%0D%09y%20%3A%3D%20x%20copyFrom%3A%201%20to%3A%201.%0D%09self%20assert%3A%20%28y%20at%3A%201%29%20%3D%2099.%0D%09%0D%09x%20%3A%3D%20ByteArray%20new%3A%203.%0D%09x%20at%3A%201%20put%3A%201.%0D%09x%20at%3A%202%20put%3A%202.%0D%09x%20at%3A%203%20put%3A%203.%0D%09y%20%3A%3D%20x%20copyFrom%3A%201%20to%3A%202.%0D%09self%20assert%3A%20y%20size%20%3D%202.%0D%09self%20assert%3A%20%28y%20at%3A%201%29%20%3D%201.%0D%09self%20assert%3A%20%28y%20at%3A%202%29%20%3D%202.%0D%09y%20%3A%3D%20x%20copyFrom%3A%202%20to%3A%203.%0D%09self%20assert%3A%20y%20size%20%3D%202.%0D%09self%20assert%3A%20%28y%20at%3A%201%29%20%3D%202.%0D%09self%20assert%3A%20%28y%20at%3A%202%29%20%3D%203.%0D%20%20%20%20%09%0D%20%20%20%20"));
smalltalk.bind(smalltalk.ByteArrayTestCase, unescape("testDetectIncludesIndexOf"), "testDetectIncludesIndexOf", function ByteArrayTestCase__testDetectIncludesIndexOf(){
var x = nil;
var y = nil;
const self = this; x=smalltalk.ByteArray.new_((3));
x.at_put_((1),(1));
x.at_put_((2),(2));
x.at_put_((3),(3));
self.assert_(((x.detect_ifNone_((function ByteArrayTestCase__(a){
return a._eq((2));
}
),(function ByteArrayTestCase__(){
return (42);
}
)))._eq((2))));
self.assert_(((x.detect_ifNone_((function ByteArrayTestCase__(a){
return a._eq((4));
}
),(function ByteArrayTestCase__(){
return (42);
}
)))._eq((42))));
self.assert_((x.includes_((1))));
self.assert_((x.includes_((2))));
self.assert_((x.includes_((3))));
self.deny_((x.includes_((4))));
self.assert_(((x.indexOf_((1)))._eq((1))));
self.assert_(((x.indexOf_((2)))._eq((2))));
self.assert_(((x.indexOf_((3)))._eq((3))));
self.assert_(((x.indexOf_((4)))._eq((0))));
return self;
}
, "as yet unclassified", unescape("testDetectIncludesIndexOf%0D%09%09%7Cx%20y%7C%0D%09x%20%3A%3D%20ByteArray%20new%3A%203.%0D%09x%20at%3A%201%20put%3A%201.%0D%09x%20at%3A%202%20put%3A%202.%0D%09x%20at%3A%203%20put%3A%203.%0D%0D%09self%20assert%3A%20%28x%20detect%3A%20%5B%3Aa%20%7C%20a%20%3D%202%5D%20ifNone%3A%20%5B42%5D%29%20%3D%202.%0D%09self%20assert%3A%20%28x%20detect%3A%20%5B%3Aa%20%7C%20a%20%3D%204%5D%20ifNone%3A%20%5B42%5D%29%20%3D%2042.%0D%09self%20assert%3A%20%28x%20includes%3A%201%29.%0D%09self%20assert%3A%20%28x%20includes%3A%202%29.%0D%09self%20assert%3A%20%28x%20includes%3A%203%29.%0D%09self%20deny%3A%20%28x%20includes%3A%204%29.%0D%09self%20assert%3A%20%28x%20indexOf%3A%201%29%20%3D%201.%0D%09self%20assert%3A%20%28x%20indexOf%3A%202%29%20%3D%202.%0D%09self%20assert%3A%20%28x%20indexOf%3A%203%29%20%3D%203.%0D%09self%20assert%3A%20%28x%20indexOf%3A%204%29%20%3D%200.%0D%09%22self%20assert%3A%20%28x%20indexOf%3A%204%20ifAbsent%3A%20%5B42%5D%29%20%3D%2042.%22%0D%09"));
smalltalk.bind(smalltalk.ByteArrayTestCase, unescape("testDo"), "testDo", function ByteArrayTestCase__testDo(){
var x = nil;
var y = nil;
const self = this; x=smalltalk.ByteArray.new_((3));
x.at_put_((1),(1));
x.at_put_((2),(2));
x.at_put_((3),(3));
y=(0);
x.do_((function ByteArrayTestCase__(a){
return y=y._plus(a);
}
));
self.assert_((y._eq((6))));
return self;
}
, "as yet unclassified", unescape("testDo%0D%09%09%7Cx%20y%7C%0D%09x%20%3A%3D%20ByteArray%20new%3A%203.%0D%09x%20at%3A%201%20put%3A%201.%0D%09x%20at%3A%202%20put%3A%202.%0D%09x%20at%3A%203%20put%3A%203.%0D%0D%09y%20%3A%3D%200.%0D%09x%20do%3A%20%5B%3Aa%20%7C%20y%20%3A%3D%20y%20+%20a%5D.%0D%09self%20assert%3A%20y%20%3D%206%0D%09"));
smalltalk.bind(smalltalk.ByteArrayTestCase, unescape("testOccurrencesOf"), "testOccurrencesOf", function ByteArrayTestCase__testOccurrencesOf(){
var x = nil;
const self = this; x=smalltalk.ByteArray.new_((3));
x.at_put_((1),(1));
x.at_put_((2),(2));
x.at_put_((3),(2));
self.assert_(((x.occurrencesOf_((1)))._eq((1))));
self.assert_(((x.occurrencesOf_((2)))._eq((2))));
return self;
}
, "as yet unclassified", unescape("testOccurrencesOf%0D%09%09%7Cx%20%7C%0D%09x%20%3A%3D%20ByteArray%20new%3A%203.%0D%09x%20at%3A%201%20put%3A%201.%0D%09x%20at%3A%202%20put%3A%202.%0D%09x%20at%3A%203%20put%3A%202.%0D%0D%09self%20assert%3A%20%28x%20occurrencesOf%3A%201%29%20%3D%201.%0D%09self%20assert%3A%20%28x%20occurrencesOf%3A%202%29%20%3D%202.%0D%09%0D%09"));
smalltalk.bind(smalltalk.ByteArrayTestCase, unescape("testReversed"), "testReversed", function ByteArrayTestCase__testReversed(){
var x = nil;
var y = nil;
var z = nil;
var rcheck = nil;
const self = this; x=smalltalk.ByteArray.new_((3));
x.at_put_((1),(1));
x.at_put_((2),(2));
x.at_put_((3),(3));
y=x.reversed();
self.assert_(((y.at_((1)))._eq((3))));
self.assert_(((y.at_((2)))._eq((2))));
self.assert_(((y.at_((3)))._eq((1))));
self.assert_(((x.at_((1)))._eq((1))));
self.assert_(((x.at_((2)))._eq((2))));
self.assert_(((x.at_((3)))._eq((3))));
z=smalltalk.Array.$$new();
x.reverseDo_((function ByteArrayTestCase__(a){
return z.add_(a);
}
));
self.assert_(((z.at_((1)))._eq((3))));
self.assert_(((z.at_((2)))._eq((2))));
self.assert_(((z.at_((3)))._eq((1))));
return self;
}
, "as yet unclassified", unescape("testReversed%0D%09%09%7Cx%20y%20z%20rcheck%7C%0D%09%09%0D%09x%20%3A%3D%20ByteArray%20new%3A%203.%0D%09x%20at%3A%201%20put%3A%201.%0D%09x%20at%3A%202%20put%3A%202.%0D%09x%20at%3A%203%20put%3A%203.%0D%09y%20%3A%3D%20x%20reversed.%0D%09%0D%09self%20assert%3A%20%28y%20at%3A%201%29%20%3D%203.%0D%09self%20assert%3A%20%28y%20at%3A%202%29%20%3D%202.%0D%09self%20assert%3A%20%28y%20at%3A%203%29%20%3D%201.%0D%09self%20assert%3A%20%28x%20at%3A%201%29%20%3D%201.%0D%09self%20assert%3A%20%28x%20at%3A%202%29%20%3D%202.%0D%09self%20assert%3A%20%28x%20at%3A%203%29%20%3D%203.%0D%0D%09z%20%3A%3D%20Array%20new.%0D%09%0D%09x%20reverseDo%3A%20%5B%3Aa%20%7C%20z%20add%3A%20a%5D.%0D%09self%20assert%3A%20%28z%20at%3A%201%29%20%3D%203.%0D%09self%20assert%3A%20%28z%20at%3A%202%29%20%3D%202.%0D%09self%20assert%3A%20%28z%20at%3A%203%29%20%3D%201.%0D%09"));
smalltalk.bind(smalltalk.ByteArrayTestCase, unescape("testConversions"), "testConversions", function ByteArrayTestCase__testConversions(){
var c = nil;
var x = nil;
const self = this; c=smalltalk.String.fromCharCode_((255));
x=c.asByteArray();
self.assert_(((x.size())._eq((2))));
self.assert_(((x.at_((1)))._eq((195))));
self.assert_(((x.at_((2)))._eq((191))));
self.assert_(((x.asString())._eq(c)));
return self;
}
, "as yet unclassified", unescape("testConversions%0D%09%7C%20c%20x%20%7C%20%0D%09%0D%09c%20%3A%3D%20String%20fromCharCode%3A%20255.%0D%09x%20%3A%3D%20c%20asByteArray.%20%0D%09self%20assert%3A%20x%20size%20%3D%202.%0D%09self%20assert%3A%20%28x%20at%3A%201%29%20%3D%2016rC3.%0D%09self%20assert%3A%20%28x%20at%3A%202%29%20%3D%2016rBF.%0D%09self%20assert%3A%20x%20asString%20%3D%20c."));
