smalltalk.addClass("NumberTest", smalltalk.TestCase, [], 'Tests');
smalltalk.NumberTest.$classVariableNames=("");
smalltalk.bind(smalltalk.NumberTest, unescape("testAbs"), "testAbs", function NumberTest__testAbs(){
const self = this; self.assert_((((4).abs())._eq((4))));
self.assert_((((-4).abs())._eq((4))));
return self;
}
, "tests", unescape("testAbs%0D%09self%20assert%3A%204%20abs%20%3D%204.%0D%09self%20assert%3A%20-4%20abs%20%3D%204%0D"));
smalltalk.bind(smalltalk.NumberTest, unescape("testAsNumber"), "testAsNumber", function NumberTest__testAsNumber(){
const self = this; self.assert_((((3).asNumber())._eq((3))));
return self;
}
, "tests", unescape("testAsNumber%0D%09self%20assert%3A%203%20asNumber%20%3D%203.%0D"));
smalltalk.bind(smalltalk.NumberTest, unescape("testBetweenAnd"), "testBetweenAnd", function NumberTest__testBetweenAnd(){
const self = this; self.assert_(((4).between_and_((3),(5))));
self.assert_((((1).between_and_((5),(6))).not()));
self.assert_((((90).between_and_((67),(87))).not()));
self.assert_(((1).between_and_((1),(1))));
return self;
}
, "tests", unescape("testBetweenAnd%0D%09self%20assert%3A%20%284%20between%3A%203%20and%3A%205%29.%0D%09self%20assert%3A%20%281%20between%3A%205%20and%3A%206%29%20not.%0D%09self%20assert%3A%20%2890%20between%3A%2067%20and%3A%2087%29%20not.%0D%09self%20assert%3A%20%281%20between%3A%201%20and%3A%201%29.%0D"));
smalltalk.bind(smalltalk.NumberTest, unescape("testCopying"), "testCopying", function NumberTest__testCopying(){
const self = this; self.assert_(((nil.is_eqeq_((1).copy(),(1)))));
self.assert_(((nil.is_eqeq_((1).deepCopy(),(1)))));
return self;
}
, "tests", unescape("testCopying%0D%09self%20assert%3A%201%20copy%20%3D%3D%201.%0D%09self%20assert%3A%201%20deepCopy%20%3D%3D%201%0D"));
smalltalk.bind(smalltalk.NumberTest, unescape("testDegreesToRadians"), "testDegreesToRadians", function NumberTest__testDegreesToRadians(){
const self = this; self.assert_((((((180).degreesToRadians())._minus((smalltalk.Number.pi()))).abs())._lt_eq((0.01))));
return self;
}
, "tests", unescape("testDegreesToRadians%0D%09self%20assert%3A%20%28180%20degreesToRadians%20-%20Number%20pi%29%20abs%20%3C%3D%200.01.%0D"));
smalltalk.bind(smalltalk.NumberTest, unescape("testIdentity"), "testIdentity", function NumberTest__testIdentity(){
const self = this; self.assert_(((nil.is_eqeq_((1),(1)))));
self.assert_(((nil.is_eqeq_((0),(0)))));
self.deny_(((nil.is_eqeq_((1),(0)))));
self.assert_(((nil.is_eqeq_((1).yourself(),(1)))));
self.assert_(((nil.is_eqeq_((1),(1).yourself()))));
self.assert_(((nil.is_eqeq_((1).yourself(),(1).yourself()))));
self.deny_(((nil.is_eqeq_((1),(2)))));
return self;
}
, "tests", unescape("testIdentity%0D%09self%20assert%3A%201%20%3D%3D%201.%0D%09self%20assert%3A%200%20%3D%3D%200.%0D%09self%20deny%3A%201%20%3D%3D%200.%0D%0D%09self%20assert%3A%201%20yourself%20%3D%3D%201.%0D%09self%20assert%3A%201%20%3D%3D%201%20yourself.%0D%09self%20assert%3A%201%20yourself%20%3D%3D%201%20yourself.%0D%0D%09self%20deny%3A%201%20%3D%3D%202%0D"));
smalltalk.bind(smalltalk.NumberTest, unescape("testLog"), "testLog", function NumberTest__testLog(){
const self = this; self.assert_((((10000).log())._eq((4))));
self.assert_((((512).log_((2)))._eq((9))));
self.assert_((((smalltalk.Number.e()).ln())._eq((1))));
return self;
}
, "tests", unescape("testLog%0D%09self%20assert%3A%2010000%20log%20%3D%204.%0D%09self%20assert%3A%20%28512%20log%3A%202%29%20%3D%209.%0D%09self%20assert%3A%20Number%20e%20ln%20%3D%201.%0D"));
smalltalk.bind(smalltalk.NumberTest, unescape("testNegated"), "testNegated", function NumberTest__testNegated(){
const self = this; self.assert_((((3).negated())._eq((-3))));
self.assert_((((-3).negated())._eq((3))));
return self;
}
, "tests", unescape("testNegated%0D%09self%20assert%3A%203%20negated%20%3D%20-3.%0D%09self%20assert%3A%20-3%20negated%20%3D%203%0D"));
smalltalk.bind(smalltalk.NumberTest, unescape("testRadiansToDegrees"), "testRadiansToDegrees", function NumberTest__testRadiansToDegrees(){
const self = this; self.assert_((((((smalltalk.Number.pi()).radiansToDegrees())._minus((180))).abs())._lt_eq((0.01))));
return self;
}
, "tests", unescape("testRadiansToDegrees%0D%09self%20assert%3A%20%28Number%20pi%20radiansToDegrees%20-%20180%29%20abs%20%3C%3D%200.01.%0D"));
smalltalk.bind(smalltalk.NumberTest, unescape("testSign"), "testSign", function NumberTest__testSign(){
const self = this; self.assert_((((5).sign())._eq((1))));
self.assert_((((0).sign())._eq((0))));
self.assert_((((-1.4).sign())._eq((-1))));
return self;
}
, "tests", unescape("testSign%0D%09self%20assert%3A%205%20sign%20%3D%201.%0D%09self%20assert%3A%200%20sign%20%3D%200.%0D%09self%20assert%3A%20-1.4%20sign%20%3D%20-1.%0D"));
smalltalk.bind(smalltalk.NumberTest, unescape("testSquared"), "testSquared", function NumberTest__testSquared(){
const self = this; self.assert_((((4).squared())._eq((16))));
return self;
}
, "tests", unescape("testSquared%0D%09self%20assert%3A%204%20squared%20%3D%2016%0D"));
smalltalk.bind(smalltalk.NumberTest, unescape("testTimesRepeat"), "testTimesRepeat", function NumberTest__testTimesRepeat(){
var i = nil;
const self = this; i=(0);
for(var $1$ = (0);$1$>0;$1$--){ i=i._plus((1))};;
self.assert_((i._eq((0))));
for(var $2$ = (5);$2$>0;$2$--){ i=i._plus((1))};;
self.assert_((i._eq((5))));
return self;
}
, "tests", unescape("testTimesRepeat%0D%09%7C%20i%20%7C%0D%09i%20%3A%3D%200.%0D%090%20timesRepeat%3A%20%5B%20i%20%3A%3D%20i%20+%201%20%5D.%0D%09self%20assert%3A%20i%20%3D%200.%0D%0D%095%20timesRepeat%3A%20%5B%20i%20%3A%3D%20i%20+%201%20%5D.%0D%09self%20assert%3A%20i%20%3D%205%0D"));
smalltalk.bind(smalltalk.NumberTest, unescape("testTrigonometry"), "testTrigonometry", function NumberTest__testTrigonometry(){
const self = this; self.assert_((((0).cos())._eq((1))));
self.assert_((((0).sin())._eq((0))));
self.assert_((((0).tan())._eq((0))));
self.assert_((((1).arcCos())._eq((0))));
self.assert_((((0).arcSin())._eq((0))));
return self;
}
, "tests", unescape("testTrigonometry%0D%09self%20assert%3A%200%20cos%20%3D%201.%0D%09self%20assert%3A%200%20sin%20%3D%200.%0D%09self%20assert%3A%200%20tan%20%3D%200.%0D%09self%20assert%3A%201%20arcCos%20%3D%200.%0D%09self%20assert%3A%200%20arcSin%20%3D%200.%0D%0D"));
smalltalk.bind(smalltalk.NumberTest, unescape("testTruncated"), "testTruncated", function NumberTest__testTruncated(){
const self = this; self.assert_((((3).truncated())._eq((3))));
self.assert_((((3.212).truncated())._eq((3))));
self.assert_((((3.51).truncated())._eq((3))));
return self;
}
, "tests", unescape("testTruncated%0D%09self%20assert%3A%203%20truncated%20%3D%203.%0D%09self%20assert%3A%203.212%20truncated%20%3D%203.%0D%09self%20assert%3A%203.51%20truncated%20%3D%203%0D"));
