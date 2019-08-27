smalltalk.addClass("NumberTestCase", smalltalk.TestCase, [], 'nil');
smalltalk.NumberTestCase.$classVariableNames=("");
smalltalk.bind(smalltalk.NumberTestCase, unescape("testEquality"), "testEquality", function NumberTestCase__testEquality(){
const self = this; self.deny_equals_((0),[]);
self.deny_equals_((0),[(0)]);
self.deny_equals_((12),nil);
self.deny_equals_((12),"12");
self.deny_equals_((12),[(12)]);
self.assert_equals_((12),(12));
self.assert_equals_(((12).yourself()),(12));
self.assert_equals_((12),((12).yourself()));
return self;
}
, "running", unescape("testEquality%0D%0D%09self%0D%09%09deny%3A%200%0D%09%09equals%3A%20%23%28%29.%0D%09self%0D%09%09deny%3A%200%0D%09%09equals%3A%20%23%280%29.%0D%09self%0D%09%09deny%3A%2012%0D%09%09equals%3A%20nil.%0D%09self%0D%09%09deny%3A%2012%0D%09%09equals%3A%20%2712%27.%0D%09self%0D%09%09deny%3A%2012%0D%09%09equals%3A%20%23%2812%29.%0D%09self%0D%09%09assert%3A%2012%0D%09%09equals%3A%2012.%0D%09self%0D%09%09assert%3A%2012%20yourself%0D%09%09equals%3A%2012.%0D%09self%0D%09%09assert%3A%2012%0D%09%09equals%3A%2012%20yourself%20"));
smalltalk.bind(smalltalk.NumberTestCase, unescape("testGreaterThan"), "testGreaterThan", function NumberTestCase__testGreaterThan(){
var badValues = nil;
const self = this; badValues=[[], [(2)], true, false, "", "2"];
badValues.do_((function NumberTestCase__(each){
return self.should_raise_((function NumberTestCase__(){
return (3)._gt(each);
}
),smalltalk.Error);
}
));
(function NumberTestCase__($1$){
$1$.deny_(((0)._gt((0))));
$1$.deny_(((3)._gt((4))));
$1$.assert_(((2)._gt((1))));
return $1$.assert_(((-1)._gt((-2))))}
)(self);
self.should_raise_((function NumberTestCase__(){
return (3)._gt((smalltalk.Object.$$new()));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testGreaterThan%0D%0D%09%7C%20badValues%20%7C%0D%09badValues%20%3A%3D%20%23%28%23%28%29%20%23%282%29%20true%20false%20%27%27%20%272%27%29.%0D%09badValues%20do%3A%20%5B%20%3Aeach%20%7C%20self%20should%3A%20%5B3%20%3E%20each%5D%20raise%3A%20Error%20%5D.%0D%09self%0D%09%09deny%3A%200%20%3E%200%3B%0D%09%09deny%3A%203%20%3E%204%3B%0D%09%09assert%3A%202%20%3E%201%3B%0D%09%09assert%3A%20-1%20%3E%20-2.%0D%09self%0D%09%09should%3A%20%5B3%20%3E%20Object%20new%5D%0D%09%09raise%3A%20Error.%20"));
smalltalk.bind(smalltalk.NumberTestCase, unescape("testLessThan"), "testLessThan", function NumberTestCase__testLessThan(){
var badValues = nil;
const self = this; badValues=[[], [(2)], true, false, "", "2"];
badValues.do_((function NumberTestCase__(each){
return self.should_raise_((function NumberTestCase__(){
return (3)._lt(each);
}
),smalltalk.Error);
}
));
(function NumberTestCase__($1$){
$1$.deny_(((3)._lt((3))));
$1$.deny_(((3)._lt((2))));
$1$.assert_(((3)._lt((4))));
return $1$.assert_(((-2)._lt((-1))))}
)(self);
self.should_raise_((function NumberTestCase__(){
return (3)._lt((smalltalk.Object.$$new()));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testLessThan%0D%0D%09%7C%20badValues%20%7C%0D%09badValues%20%3A%3D%20%23%28%23%28%29%20%23%282%29%20true%20false%20%27%27%20%272%27%29.%0D%09badValues%20do%3A%20%5B%20%3Aeach%20%7C%20self%20should%3A%20%5B3%20%3C%20each%5D%20raise%3A%20Error%20%5D.%0D%09self%0D%09%09deny%3A%203%20%3C%203%3B%0D%09%09deny%3A%203%20%3C%202%3B%0D%09%09assert%3A%203%20%3C%204%3B%0D%09%09assert%3A%20-2%20%3C%20-1.%0D%09self%0D%09%09should%3A%20%5B3%20%3C%20Object%20new%5D%0D%09%09raise%3A%20Error.%20"));
smalltalk.bind(smalltalk.NumberTestCase, unescape("testGreaterThanEqualTo"), "testGreaterThanEqualTo", function NumberTestCase__testGreaterThanEqualTo(){
var badValues = nil;
const self = this; badValues=[[], [(2)], true, false, "", "2"];
badValues.do_((function NumberTestCase__(each){
return self.should_raise_((function NumberTestCase__(){
return (3)._gt_eq(each);
}
),smalltalk.Error);
}
));
(function NumberTestCase__($1$){
$1$.assert_(((3)._gt_eq((2))));
$1$.assert_(((3)._gt_eq((3))));
$1$.assert_(((-1)._gt_eq((-2))));
return $1$.deny_(((3)._gt_eq((4))))}
)(self);
self.should_raise_((function NumberTestCase__(){
return (3)._gt_eq((smalltalk.Object.$$new()));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testGreaterThanEqualTo%0D%0D%09%7C%20badValues%20%7C%0D%09badValues%20%3A%3D%20%23%28%23%28%29%20%23%282%29%20true%20false%20%27%27%20%272%27%29.%0D%09badValues%20do%3A%20%5B%20%3Aeach%20%7C%20self%20should%3A%20%5B3%20%3E%3D%20each%5D%20raise%3A%20Error%20%5D.%0D%09self%0D%09%09assert%3A%203%20%3E%3D%202%3B%0D%09%09assert%3A%203%20%3E%3D%203%3B%0D%09%09assert%3A%20-1%20%3E%3D%20-2%3B%0D%09%09deny%3A%203%20%3E%3D%204.%0D%09self%0D%09%09should%3A%20%5B3%20%3E%3D%20Object%20new%5D%0D%09%09raise%3A%20Error.%20"));
smalltalk.bind(smalltalk.NumberTestCase, unescape("testLessThanEqualTo"), "testLessThanEqualTo", function NumberTestCase__testLessThanEqualTo(){
var badValues = nil;
const self = this; badValues=[[], [(2)], true, false, "", "2"];
badValues.do_((function NumberTestCase__(each){
return self.should_raise_((function NumberTestCase__(){
return (3)._lt_eq(each);
}
),smalltalk.Error);
}
));
(function NumberTestCase__($1$){
$1$.assert_(((3)._lt_eq((4))));
$1$.assert_(((3)._lt_eq((3))));
$1$.assert_(((-2)._lt_eq((-1))));
return $1$.deny_(((3)._lt_eq((2))))}
)(self);
self.should_raise_((function NumberTestCase__(){
return (3)._lt_eq((smalltalk.Object.$$new()));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testLessThanEqualTo%0D%0D%09%7C%20badValues%20%7C%0D%09badValues%20%3A%3D%20%23%28%23%28%29%20%23%282%29%20true%20false%20%27%27%20%272%27%29.%0D%09badValues%20do%3A%20%5B%20%3Aeach%20%7C%20self%20should%3A%20%5B3%20%3C%3D%20each%5D%20raise%3A%20Error%20%5D.%0D%09self%0D%09%09assert%3A%203%20%3C%3D%204%3B%0D%09%09assert%3A%203%20%3C%3D%203%3B%0D%09%09assert%3A%20-2%20%3C%3D%20-1%3B%0D%09%09deny%3A%203%20%3C%3D%202.%0D%09self%0D%09%09should%3A%20%5B3%20%3C%3D%20Object%20new%5D%0D%09%09raise%3A%20Error.%20"));
smalltalk.bind(smalltalk.NumberTestCase, unescape("testAddition"), "testAddition", function NumberTestCase__testAddition(){
var badValues = nil;
const self = this; badValues=[[], [(2)], true, false, "", "2"];
badValues.do_((function NumberTestCase__(each){
return self.should_raise_((function NumberTestCase__(){
return (2)._plus(each);
}
),smalltalk.Error);
}
));
self.assert_equals_(((1)._plus((2))),(3));
self.assert_equals_(((-1)._plus((-2))),(-3));
self.assert_equals_(((-1)._plus((2))),(1));
self.assert_equals_(((1)._plus((-1))),(0));
self.assert_equals_(((0)._plus((0))),(0));
self.should_raise_((function NumberTestCase__(){
return (2)._plus((smalltalk.Object.$$new()));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testAddition%0D%0D%09%7C%20badValues%20%7C%0D%09badValues%20%3A%3D%20%23%28%23%28%29%20%23%282%29%20true%20false%20%27%27%20%272%27%29.%0D%09badValues%20do%3A%20%5B%20%3Aeach%20%7C%20self%20should%3A%5B2%20+%20each%5D%20raise%3A%20Error%20%5D.%0D%09self%0D%09%09assert%3A%201%20+%202%0D%09%09equals%3A%203.%0D%09self%0D%09%09assert%3A%20-1%20+%20-2%0D%09%09equals%3A%20-3.%0D%09self%0D%09%09assert%3A%20-1%20+%202%0D%09%09equals%3A%201.%0D%09self%0D%09%09assert%3A%201%20+%20-1%0D%09%09equals%3A%200.%0D%09self%0D%09%09assert%3A%200%20+%200%0D%09%09equals%3A%200.%0D%09self%0D%09%09should%3A%20%5B2%20+%20Object%20new%5D%0D%09%09raise%3A%20Error.%20"));
smalltalk.bind(smalltalk.NumberTestCase, unescape("testSubtraction"), "testSubtraction", function NumberTestCase__testSubtraction(){
var badValues = nil;
const self = this; badValues=[[], [(2)], true, false, "", "2"];
badValues.do_((function NumberTestCase__(each){
return self.should_raise_((function NumberTestCase__(){
return (2)._minus(each);
}
),smalltalk.Error);
}
));
self.assert_equals_(((2)._minus((1))),(1));
self.assert_equals_(((2)._minus((-1))),(3));
self.assert_equals_(((-2)._minus((3))),(-5));
self.assert_equals_(((-2)._minus((-2))),(0));
self.should_raise_((function NumberTestCase__(){
return (2)._plus((smalltalk.Object.$$new()));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testSubtraction%0D%0D%09%7C%20badValues%20%7C%0D%09badValues%20%3A%3D%20%23%28%23%28%29%20%23%282%29%20true%20false%20%27%27%20%272%27%29.%0D%09badValues%20do%3A%20%5B%20%3Aeach%20%7C%20self%20should%3A%20%5B2%20-%20each%5D%20raise%3A%20Error%5D.%0D%09self%0D%09%09assert%3A%202%20-%201%0D%09%09equals%3A%201.%0D%09self%0D%09%09assert%3A%202%20-%20-1%0D%09%09equals%3A%203.%0D%09self%0D%09%09assert%3A%20-2%20-%203%0D%09%09equals%3A%20-5.%0D%09self%0D%09%09assert%3A%20-2%20-%20-2%0D%09%09equals%3A%200.%0D%09self%0D%09%09should%3A%20%5B2%20+%20Object%20new%5D%0D%09%09raise%3A%20Error.%20"));
smalltalk.bind(smalltalk.NumberTestCase, unescape("testMultiply"), "testMultiply", function NumberTestCase__testMultiply(){
var badValues = nil;
const self = this; badValues=[[], [(2)], true, false, "", "2"];
badValues.do_((function NumberTestCase__(each){
return self.should_raise_((function NumberTestCase__(){
return (2)._star(each);
}
),smalltalk.Error);
}
));
self.assert_equals_(((5)._star((5))),(25));
self.assert_equals_(((5)._star((-5))),(-25));
self.assert_equals_(((-2)._star((2))),(-4));
self.assert_equals_(((-1)._star((-1))),(1));
self.assert_equals_(((1)._star((0))),(0));
self.should_raise_((function NumberTestCase__(){
return (2)._star((smalltalk.Object.$$new()));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testMultiply%0D%0D%09%7C%20badValues%20%7C%0D%09badValues%20%3A%3D%20%23%28%23%28%29%20%23%282%29%20true%20false%20%27%27%20%272%27%29.%0D%09badValues%20do%3A%20%5B%20%3Aeach%20%7C%20self%20should%3A%5B2%20*%20each%5D%20raise%3A%20Error%5D.%0D%09self%0D%09%09assert%3A%205%20*%205%0D%09%09equals%3A%2025.%0D%09self%0D%09%09assert%3A%205%20*%20-5%0D%09%09equals%3A%20-25.%0D%09self%0D%09%09assert%3A%20-2%20*%202%0D%09%09equals%3A%20-4.%0D%09self%0D%09%09assert%3A%20-1%20*%20-1%0D%09%09equals%3A%201.%0D%09self%0D%09%09assert%3A%201%20*%200%0D%09%09equals%3A%200.%0D%09self%0D%09%09should%3A%20%5B2%20*%20Object%20new%5D%0D%09%09raise%3A%20Error.%20"));
smalltalk.bind(smalltalk.NumberTestCase, unescape("testDivide"), "testDivide", function NumberTestCase__testDivide(){
var badValues = nil;
const self = this; badValues=[[], [(2)], true, false, "", "2"];
badValues.do_((function NumberTestCase__(each){
return self.should_raise_((function NumberTestCase__(){
return (2)._slash(each);
}
),smalltalk.Error);
}
));
self.assert_equals_(((25)._slash((5))),(5));
self.assert_equals_(((25)._slash((-5))),(-5));
self.assert_equals_(((-25)._slash((5))),(-5));
self.assert_equals_(((-25)._slash((-5))),(5));
self.assert_equals_(((0)._slash((5))),(0));
self.should_raise_((function NumberTestCase__(){
return (2)._slash((0));
}
),smalltalk.Error);
self.should_raise_((function NumberTestCase__(){
return (2)._slash((smalltalk.Object.$$new()));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testDivide%0D%0D%09%7C%20badValues%20%7C%0D%09badValues%20%3A%3D%20%23%28%23%28%29%20%23%282%29%20true%20false%20%27%27%20%272%27%29.%0D%09badValues%20do%3A%20%5B%20%3Aeach%20%7C%20self%20should%3A%20%5B%202%20/%20each%20%5D%20raise%3A%20Error%20%5D.%0D%09self%0D%09%09assert%3A%2025%20/%205%0D%09%09equals%3A%205.%0D%09self%0D%09%09assert%3A%2025%20/%20-5%0D%09%09equals%3A%20-5.%0D%09self%0D%09%09assert%3A%20-25%20/%205%0D%09%09equals%3A%20-5.%0D%09self%0D%09%09assert%3A%20-25%20/%20-5%0D%09%09equals%3A%205.%0D%09self%0D%09%09assert%3A%200%20/%205%0D%09%09equals%3A%200.%0D%09self%0D%09%09should%3A%20%5B2%20/%200%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09should%3A%20%5B2%20/%20Object%20new%5D%0D%09%09raise%3A%20Error.%20"));
smalltalk.bind(smalltalk.NumberTestCase, unescape("testBitAnd"), "testBitAnd", function NumberTestCase__testBitAnd(){
var badValues = nil;
const self = this; badValues=[[], "", true, false, [(1)], "1", (1.01)];
badValues.do_((function NumberTestCase__(each){
return self.should_raise_((function NumberTestCase__(){
return (1).bitAnd_(each);
}
),smalltalk.Error);
}
));
self.should_raise_((function NumberTestCase__(){
return (1.01).bitAnd_((1));
}
),smalltalk.Error);
self.assert_equals_(((3).bitAnd_((9))),(1));
self.assert_equals_(((15).bitAnd_((0))),(0));
self.assert_equals_(((15).bitAnd_((5))),(5));
return self;
}
, "running", unescape("testBitAnd%0D%0D%09%7C%20badValues%20%7C%0D%09badValues%20%3A%3D%20%23%28%23%28%29%20%27%27%20true%20false%20%23%281%29%20%271%27%201.01%29.%0D%09badValues%20do%3A%5B%20%3Aeach%20%7C%20self%20should%3A%5B%281%20bitAnd%3A%20each%29%5D%20raise%3A%20Error%20%5D.%0D%09self%0D%09%09should%3A%20%5B%281.01%20bitAnd%3A%201%29%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09assert%3A%20%283%20bitAnd%3A%209%29%0D%09%09equals%3A%201.%0D%09self%0D%09%09assert%3A%20%2815%20bitAnd%3A%200%29%0D%09%09equals%3A%200.%0D%09self%0D%09%09assert%3A%20%2815%20bitAnd%3A%205%29%0D%09%09equals%3A%205.%20"));
smalltalk.bind(smalltalk.NumberTestCase, unescape("testBitOr"), "testBitOr", function NumberTestCase__testBitOr(){
var badValues = nil;
const self = this; badValues=[[], "", true, false, [(1)], "1", (1.01)];
badValues.do_((function NumberTestCase__(each){
return self.should_raise_((function NumberTestCase__(){
return (1).bitOr_(each);
}
),smalltalk.Error);
}
));
self.should_raise_((function NumberTestCase__(){
return (1.01).bitOr_((1));
}
),smalltalk.Error);
self.assert_equals_(((4).bitOr_((0))),(4));
self.assert_equals_(((9).bitOr_((6))),(15));
return self;
}
, "running", unescape("testBitOr%0D%0D%09%7C%20badValues%20%7C%0D%09badValues%20%3A%3D%20%23%28%23%28%29%20%27%27%20true%20false%20%23%281%29%20%271%27%201.01%29.%0D%09badValues%20do%3A%5B%20%3Aeach%20%7C%20self%20should%3A%5B%281%20bitOr%3A%20each%29%5D%20raise%3A%20Error%20%5D.%0D%09self%0D%09%09should%3A%20%5B%281.01%20bitOr%3A%201%29%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09assert%3A%20%284%20bitOr%3A%200%29%0D%09%09equals%3A%204.%0D%09self%0D%09%09assert%3A%20%289%20bitOr%3A%206%29%0D%09%09equals%3A%2015.%20"));
smalltalk.bind(smalltalk.NumberTestCase, unescape("testBitXor"), "testBitXor", function NumberTestCase__testBitXor(){
var badValues = nil;
const self = this; badValues=[[], "", true, false, [(1)], "1", (1.01)];
badValues.do_((function NumberTestCase__(each){
return self.should_raise_((function NumberTestCase__(){
return (1).bitXor_(each);
}
),smalltalk.Error);
}
));
self.should_raise_((function NumberTestCase__(){
return (1.01).bitXor_((1));
}
),smalltalk.Error);
self.assert_equals_(((10).bitXor_((5))),(15));
self.assert_equals_(((15).bitXor_((15))),(0));
return self;
}
, "running", unescape("testBitXor%0D%0D%09%7C%20badValues%20%7C%0D%09badValues%20%3A%3D%20%23%28%23%28%29%20%27%27%20true%20false%20%23%281%29%20%271%27%201.01%29.%0D%09badValues%20do%3A%5B%20%3Aeach%20%7C%20self%20should%3A%5B%281%20bitXor%3A%20each%29%5D%20raise%3A%20Error%20%5D.%0D%09self%0D%09%09should%3A%20%5B%281.01%20bitXor%3A%201%29%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09assert%3A%20%2810%20bitXor%3A%205%29%0D%09%09equals%3A%2015.%0D%09self%0D%09%09assert%3A%20%2815%20bitXor%3A%2015%29%0D%09%09equals%3A%200.%20"));
smalltalk.bind(smalltalk.NumberTestCase, unescape("testBitShiftLeft"), "testBitShiftLeft", function NumberTestCase__testBitShiftLeft(){
var badValues = nil;
const self = this; badValues=[[], "", true, false, [(1)], "1", (1.01)];
badValues.do_((function NumberTestCase__(each){
return self.should_raise_((function NumberTestCase__(){
return (1)._lt_lt(each);
}
),smalltalk.Error);
}
));
self.should_raise_((function NumberTestCase__(){
return (1.01)._lt_lt((1));
}
),smalltalk.Error);
self.assert_equals_(((15)._lt_lt((1))),(30));
self.assert_equals_(((1)._lt_lt((5))),(32));
return self;
}
, "running", unescape("testBitShiftLeft%0D%0D%09%7C%20badValues%20%7C%0D%09badValues%20%3A%3D%20%23%28%23%28%29%20%27%27%20true%20false%20%23%281%29%20%271%27%201.01%29.%0D%09badValues%20do%3A%5B%20%3Aeach%20%7C%20self%20should%3A%20%5B1%20%3C%3C%20each%5D%20raise%3A%20Error%20%5D.%0D%09self%0D%09%09should%3A%20%5B1.01%20%3C%3C%201%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09assert%3A%2015%20%3C%3C%201%0D%09%09equals%3A%2030.%0D%09self%0D%09%09assert%3A%201%20%3C%3C%205%0D%09%09equals%3A%2032.%20"));
smalltalk.bind(smalltalk.NumberTestCase, unescape("testBitShiftRight"), "testBitShiftRight", function NumberTestCase__testBitShiftRight(){
var badValues = nil;
const self = this; badValues=[[], "", true, false, [(1)], "1", (1.01)];
badValues.do_((function NumberTestCase__(each){
return self.should_raise_((function NumberTestCase__(){
return (1)._gt_gt(each);
}
),smalltalk.Error);
}
));
self.should_raise_((function NumberTestCase__(){
return (1.01)._gt_gt((1));
}
),smalltalk.Error);
self.assert_equals_(((15)._gt_gt((1))),(7));
self.assert_equals_(((1)._gt_gt((5))),(0));
return self;
}
, "running", unescape("testBitShiftRight%0D%0D%09%7C%20badValues%20%7C%0D%09badValues%20%3A%3D%20%23%28%23%28%29%20%27%27%20true%20false%20%23%281%29%20%271%27%201.01%29.%0D%09badValues%20do%3A%5B%20%3Aeach%20%7C%20self%20should%3A%20%5B1%20%3E%3E%20each%5D%20raise%3A%20Error%20%5D.%0D%09self%0D%09%09should%3A%20%5B1.01%20%3E%3E%201%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09assert%3A%2015%20%3E%3E%201%0D%09%09equals%3A%207.%0D%09self%0D%09%09assert%3A%201%20%3E%3E%205%0D%09%09equals%3A%200.%20"));
smalltalk.bind(smalltalk.NumberTestCase, unescape("testFloor"), "testFloor", function NumberTestCase__testFloor(){
const self = this; self.assert_equals_(((3.2).floor()),(3));
self.assert_equals_(((-1.2).floor()),(-2));
self.assert_equals_(((0).floor()),(0));
return self;
}
, "running", unescape("testFloor%0D%0D%09self%0D%09%09assert%3A%203.2%20floor%0D%09%09equals%3A%203.%0D%09self%0D%09%09assert%3A%20-1.2%20floor%0D%09%09equals%3A%20-2.%0D%09self%0D%09%09assert%3A%200%20floor%0D%09%09equals%3A%200.%20"));
smalltalk.bind(smalltalk.NumberTestCase, unescape("testCeiling"), "testCeiling", function NumberTestCase__testCeiling(){
const self = this; self.assert_equals_(((3.2).ceiling()),(4));
self.assert_equals_(((-1.2).ceiling()),(-1));
self.assert_equals_(((0).ceiling()),(0));
return self;
}
, "running", unescape("testCeiling%0D%0D%09self%0D%09%09assert%3A%203.2%20ceiling%0D%09%09equals%3A%204.%0D%09self%0D%09%09assert%3A%20-1.2%20ceiling%0D%09%09equals%3A%20-1.%0D%09self%0D%09%09assert%3A%200%20ceiling%0D%09%09equals%3A%200.%20"));
smalltalk.bind(smalltalk.NumberTestCase, unescape("testRaisedTo"), "testRaisedTo", function NumberTestCase__testRaisedTo(){
const self = this; self.assert_equals_(((2).raisedTo_((4))),(16));
self.assert_equals_(((2).raisedTo_((0))),(1));
self.assert_equals_(((2).raisedTo_((-3))),(0.125));
self.assert_equals_(((4).raisedTo_((0.5))),(2));
self.assert_equals_(((-2).raisedTo_((2))),(4));
self.assert_equals_(((0).raisedTo_((1))),(0));
self.assert_equals_(((5).raisedTo_((0))),(1));
self.assert_equals_(((-5).raisedTo_((3))),(-125));
return self;
}
, "running", unescape("testRaisedTo%0D%0D%09self%0D%09%09assert%3A%20%282%20raisedTo%3A%204%29%0D%09%09equals%3A%2016.%0D%09self%0D%09%09assert%3A%20%282%20raisedTo%3A%200%29%0D%09%09equals%3A%201.%0D%09self%0D%09%09assert%3A%20%282%20raisedTo%3A%20-3%29%0D%09%09equals%3A%200.125.%0D%09self%0D%09%09assert%3A%20%284%20raisedTo%3A%200.5%29%0D%09%09equals%3A%202.%0D%09self%0D%09%09assert%3A%20%28-2%20raisedTo%3A%202%29%0D%09%09equals%3A%204.%0D%09self%0D%09%09assert%3A%20%280%20raisedTo%3A%201%29%0D%09%09equals%3A%200.%0D%09self%0D%09%09assert%3A%20%285%20raisedTo%3A%200%29%0D%09%09equals%3A%201.%0D%09self%0D%09%09assert%3A%20%28-5%20raisedTo%3A%203%29%0D%09%09equals%3A%20-125.%20"));
smalltalk.bind(smalltalk.NumberTestCase, unescape("testLn"), "testLn", function NumberTestCase__testLn(){
const self = this; self.assert_((((100).ln()).closeTo_((((10).ln())._star((2))))));
self.assert_equals_(((1).ln()),(0));
self.should_raise_((function NumberTestCase__(){
return (-1).ln();
}
),smalltalk.Error);
return self;
}
, "running", unescape("testLn%0D%0D%09self%20assert%3A%20%28100%20ln%20closeTo%3A%2010%20ln*2%29.%0D%09self%0D%09%09assert%3A%201%20ln%0D%09%09equals%3A%200.%0D%09self%0D%09%09should%3A%20%5B%20-1%20ln%20%5D%0D%09%09raise%3A%20Error.%20"));
smalltalk.bind(smalltalk.NumberTestCase, unescape("testSin"), "testSin", function NumberTestCase__testSin(){
const self = this; self.assert_equals_((((smalltalk.Number.pi())._slash((2))).sin()),(1));
self.assert_equals_(((0).sin()),(0));
return self;
}
, "running", unescape("testSin%0D%0D%09self%0D%09%09assert%3A%20%28%28Number%20pi%20/%202%29%20sin%29%0D%09%09equals%3A%201.%0D%09self%0D%09%09assert%3A%200%20sin%0D%09%09equals%3A%200.%20"));
smalltalk.bind(smalltalk.NumberTestCase, unescape("testCos"), "testCos", function NumberTestCase__testCos(){
const self = this; self.assert_(((((smalltalk.Number.pi())._slash((2))).cos()).closeTo_((0))));
self.assert_equals_(((0).cos()),(1));
return self;
}
, "running", unescape("testCos%0D%0D%09self%20assert%3A%20%28%28%28Number%20pi%20/%202%29%20cos%29%20closeTo%3A%200%29.%0D%09self%0D%09%09assert%3A%200%20cos%0D%09%09equals%3A%201.%20"));
smalltalk.bind(smalltalk.NumberTestCase, unescape("testTan"), "testTan", function NumberTestCase__testTan(){
const self = this; self.assert_((((smalltalk.Number.pi()).tan()).closeTo_((0))));
self.assert_equals_(((0).tan()),(0));
return self;
}
, "running", unescape("testTan%0D%0D%09self%0D%09%09assert%3A%20%28Number%20pi%20tan%20closeTo%3A%200%29.%0D%09self%0D%09%09assert%3A%200%20tan%0D%09%09equals%3A%200.%20"));
smalltalk.bind(smalltalk.NumberTestCase, unescape("testArcSin"), "testArcSin", function NumberTestCase__testArcSin(){
const self = this; self.assert_equals_(((0).arcSin()),(0));
return self;
}
, "running", unescape("testArcSin%0D%0D%09self%0D%09%09assert%3A%200%20arcSin%0D%09%09equals%3A%200.%20"));
smalltalk.bind(smalltalk.NumberTestCase, unescape("testArcCos"), "testArcCos", function NumberTestCase__testArcCos(){
const self = this; self.assert_equals_(((1).arcCos()),(0));
return self;
}
, "running", unescape("testArcCos%0D%0D%09self%0D%09%09assert%3A%201%20arcCos%0D%09%09equals%3A%200.%20"));
smalltalk.bind(smalltalk.NumberTestCase, unescape("testArcTan"), "testArcTan", function NumberTestCase__testArcTan(){
const self = this; self.assert_equals_(((0).arcTan()),(0));
return self;
}
, "running", unescape("testArcTan%0D%0D%09self%0D%09%09assert%3A%200%20arcTan%0D%09%09equals%3A%200.%20"));
smalltalk.bind(smalltalk.NumberTestCase, unescape("testATan2"), "testATan2", function NumberTestCase__testATan2(){
const self = this; self.assert_equals_(((8).atan2_((4))),(1.1071487177940904));
self.assert_equals_(((-8).atan2_((-4))),(-2.0344439357957027));
self.assert_equals_(((0).atan2_((0))),(0));
return self;
}
, "running", unescape("testATan2%0D%0D%09self%0D%09%09assert%3A%20%288%20atan2%3A%204%29%0D%09%09equals%3A%201.1071487177940904.%0D%09self%0D%09%09assert%3A%20%28-8%20atan2%3A%20-4%29%0D%09%09equals%3A%20-2.0344439357957027.%0D%09self%0D%09%09assert%3A%20%280%20atan2%3A%200%29%0D%09%09equals%3A%200.%20"));
smalltalk.bind(smalltalk.NumberTestCase, unescape("testSqrt"), "testSqrt", function NumberTestCase__testSqrt(){
const self = this; self.assert_equals_(((1).sqrt()),(1));
self.assert_equals_(((144).sqrt()),(12));
self.assert_equals_(((0).sqrt()),(0));
self.should_raise_((function NumberTestCase__(){
return (-25).sqrt();
}
),smalltalk.Error);
return self;
}
, "running", unescape("testSqrt%0D%0D%09self%0D%09%09assert%3A%201%20sqrt%0D%09%09equals%3A%201.%0D%09self%0D%09%09assert%3A%20144%20sqrt%0D%09%09equals%3A%2012.%0D%09self%0D%09%09assert%3A%200%20sqrt%0D%09%09equals%3A%200.%0D%09self%0D%09%09should%3A%20%5B%20-25%20sqrt%20%5D%0D%09%09raise%3A%20Error.%20"));
smalltalk.bind(smalltalk.NumberTestCase, unescape("testMax"), "testMax", function NumberTestCase__testMax(){
const self = this; self.assert_equals_(((1).max_((2))),(2));
self.assert_equals_(((0).max_((1))),(1));
self.assert_equals_(((-2).max_((1))),(1));
self.assert_equals_(((-1).max_((-5))),(-1));
self.assert_equals_(((5).max_((-10))),(5));
self.assert_equals_(((0).max_((0))),(0));
return self;
}
, "running", unescape("testMax%0D%0D%09self%0D%09%09assert%3A%20%281%20max%3A%202%29%0D%09%09equals%3A%202.%0D%09self%0D%09%09assert%3A%20%280%20max%3A%201%29%0D%09%09equals%3A%201.%0D%09self%0D%09%09assert%3A%20%28-2%20max%3A%201%29%0D%09%09equals%3A%201.%0D%09self%0D%09%09assert%3A%20%28-1%20max%3A%20-5%29%0D%09%09equals%3A%20-1.%0D%09self%0D%09%09assert%3A%20%285%20max%3A%20-10%29%0D%09%09equals%3A%205.%0D%09self%0D%09%09assert%3A%20%280%20max%3A%200%29%0D%09%09equals%3A%200.%20"));
smalltalk.bind(smalltalk.NumberTestCase, unescape("testMin"), "testMin", function NumberTestCase__testMin(){
const self = this; self.assert_equals_(((1).min_((2))),(1));
self.assert_equals_(((-2).min_((1))),(-2));
self.assert_equals_(((1).min_((-5))),(-5));
self.assert_equals_(((-1).min_((-10))),(-10));
self.assert_equals_(((0).min_((0))),(0));
self.assert_equals_(((0).min_((1))),(0));
return self;
}
, "running", unescape("testMin%0D%0D%09self%0D%09%09assert%3A%20%281%20min%3A%202%29%0D%09%09equals%3A%201.%0D%09self%0D%09%09assert%3A%20%28-2%20min%3A%201%29%0D%09%09equals%3A%20-2.%0D%09self%0D%09%09assert%3A%20%281%20min%3A%20-5%29%0D%09%09equals%3A%20-5.%0D%09self%0D%09%09assert%3A%20%28-1%20min%3A%20-10%29%0D%09%09equals%3A%20-10.%0D%09self%0D%09%09assert%3A%20%280%20min%3A%200%29%0D%09%09equals%3A%200.%0D%09self%0D%09%09assert%3A%20%280%20min%3A%201%29%0D%09%09equals%3A%200.%20"));
smalltalk.bind(smalltalk.NumberTestCase, unescape("testToDo"), "testToDo", function NumberTestCase__testToDo(){
var result = nil;
const self = this; result=(0);
(1).to_do_((4),(function NumberTestCase__(each){
return result=result._plus(each);
}
));
self.assert_equals_(result,(10));
(4).to_do_((1),(function NumberTestCase__(each){
return result=result._minus(each);
}
));
self.assert_equals_(result,(10));
return self;
}
, "running", unescape("testToDo%0D%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%200.%0D%091%20to%3A%204%20do%3A%20%5B%20%3Aeach%20%7C%20result%20%3A%3D%20result%20+%20each%20%5D.%0D%09self%0D%09%09assert%3A%20result%0D%09%09equals%3A%2010.%0D%094%20to%3A%201%20do%3A%20%5B%20%3Aeach%20%7C%20result%20%3A%3D%20result%20-%20each%20%5D.%0D%09self%0D%09%09assert%3A%20result%0D%09%09equals%3A%2010.%20"));
smalltalk.bind(smalltalk.NumberTestCase, unescape("testIsNumber"), "testIsNumber", function NumberTestCase__testIsNumber(){
var nonNumbers = nil;
var validNumbers = nil;
const self = this; nonNumbers=[[], "", true, false, [(1)], "1"];
nonNumbers.do_((function NumberTestCase__(each){
return self.deny_((each.isNumber()));
}
));
validNumbers=[(100), (1.5), (-2), (0)];
validNumbers.do_((function NumberTestCase__(each){
return self.assert_((each.isNumber()));
}
));
return self;
}
, "running", unescape("testIsNumber%0D%0D%09%7C%20nonNumbers%20validNumbers%20%7C%0D%09nonNumbers%20%3A%3D%20%23%28%23%28%29%20%27%27%20true%20false%20%23%281%29%20%271%27%29.%0D%09nonNumbers%20do%3A%20%5B%20%3Aeach%20%7C%20self%20deny%3A%20each%20isNumber%20%5D.%0D%09validNumbers%20%3A%3D%20%23%28100%201.5%20-2%200%29.%0D%09validNumbers%20do%3A%20%5B%20%3Aeach%20%7C%20self%20assert%3A%20each%20isNumber%5D.%20"));
smalltalk.bind(smalltalk.NumberTestCase, unescape("testToByDo"), "testToByDo", function NumberTestCase__testToByDo(){
var result = nil;
const self = this; result=(0);
(0).to_by_do_((10),(2),(function NumberTestCase__(each){
return result=result._plus(each);
}
));
self.assert_equals_(result,(30));
(4).to_by_do_((1),(2),(function NumberTestCase__(each){
return result=result._minus(each);
}
));
self.assert_equals_(result,(30));
return self;
}
, "running", unescape("testToByDo%0D%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%200.%0D%090%20to%3A%2010%20by%3A%202%20do%3A%20%5B%20%3Aeach%20%7C%20result%20%3A%3D%20result%20+%20each%20%5D.%0D%09self%0D%09%09assert%3A%20result%0D%09%09equals%3A%2030.%0D%094%20to%3A%201%20by%3A%202%20do%3A%20%5B%20%3Aeach%20%7C%20result%20%3A%3D%20result%20-%20each%20%5D.%0D%09self%0D%09%09assert%3A%20result%0D%09%09equals%3A%2030.%20"));
smalltalk.bind(smalltalk.NumberTestCase, unescape("testPi"), "testPi", function NumberTestCase__testPi(){
const self = this; self.assert_(((smalltalk.Number.pi()).closeTo_((3.141592653589793))));
return self;
}
, "running", unescape("testPi%0D%0D%09self%0D%09%09assert%3A%20%28%28Number%20pi%29%20closeTo%3A%203.141592653589793%29.%20"));
smalltalk.bind(smalltalk.NumberTestCase, unescape("testIsInteger"), "testIsInteger", function NumberTestCase__testIsInteger(){
var nonIntegers = nil;
const self = this; nonIntegers=[[], "", true, false, (1.5), [(1)], "1"];
nonIntegers.do_((function NumberTestCase__(each){
return self.deny_((each.isInteger()));
}
));
(function NumberTestCase__($1$){
$1$.assert_(((1).isInteger()));
$1$.assert_(((0).isInteger()));
return $1$.assert_(((-1).isInteger()))}
)(self);
return self;
}
, "running", unescape("testIsInteger%0D%0D%09%7C%20nonIntegers%20%7C%0D%09nonIntegers%20%3A%3D%20%23%28%23%28%29%20%27%27%20true%20false%201.5%20%23%281%29%20%271%27%29.%0D%09nonIntegers%20do%3A%5B%20%3Aeach%20%7C%20self%20deny%3A%20each%20isInteger%20%5D.%0D%09self%0D%09%09assert%3A%201%20isInteger%3B%0D%09%09assert%3A%200%20isInteger%3B%0D%09%09assert%3A%20-1%20isInteger.%20"));
smalltalk.bind(smalltalk.NumberTestCase, unescape("testRounded"), "testRounded", function NumberTestCase__testRounded(){
const self = this; self.assert_equals_(((1.4).rounded()),(1));
self.assert_equals_(((0).rounded()),(0));
self.assert_equals_(((5).rounded()),(5));
self.assert_equals_(((1.5).rounded()),(2));
self.assert_equals_(((-1.2).rounded()),(-1));
return self;
}
, "running", unescape("testRounded%0D%0D%09self%0D%09%09assert%3A%201.4%20rounded%0D%09%09equals%3A%201.%0D%09self%0D%09%09assert%3A%200%20rounded%0D%09%09equals%3A%200.%0D%09self%0D%09%09assert%3A%205%20rounded%0D%09%09equals%3A%205.%0D%09self%0D%09%09assert%3A%201.5%20rounded%0D%09%09equals%3A%202.%0D%09self%0D%09%09assert%3A%20-1.2%20rounded%0D%09%09equals%3A%20-1.%20"));
smalltalk.bind(smalltalk.NumberTestCase, unescape("testTo"), "testTo", function NumberTestCase__testTo(){
var expected = nil;
var result = nil;
const self = this; expected=smalltalk.Interval.from_to_((1),(5));
result=(1).to_((5));
self.assert_equals_(result,expected);
return self;
}
, "running", unescape("testTo%0D%0D%09%7C%20expected%20result%20%7C%0D%09expected%20%3A%3D%20Interval%20from%3A%201%20to%3A%205.%0D%09result%20%3A%3D%201%20to%3A%205.%0D%09self%0D%09%09assert%3A%20result%0D%09%09equals%3A%20expected%20"));
smalltalk.bind(smalltalk.NumberTestCase, unescape("testToBy"), "testToBy", function NumberTestCase__testToBy(){
var expected = nil;
var result = nil;
const self = this; expected=smalltalk.Interval.from_to_by_((4),(25),(4));
result=(4).to_by_((25),(4));
self.assert_equals_(result,expected);
return self;
}
, "running", unescape("testToBy%0D%09%0D%09%7C%20expected%20result%20%7C%0D%09expected%20%3A%3D%20Interval%20from%3A%204%20to%3A%2025%20by%3A%204.%0D%09result%20%3A%3D%204%20to%3A%2025%20by%3A%204.%0D%09self%0D%09%09assert%3A%20result%0D%09%09equals%3A%20expected%20"));
