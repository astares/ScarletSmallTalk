smalltalk.addClass("FloatTest", smalltalk.TestCase, [], 'Tests');
smalltalk.FloatTest.$classVariableNames=("");
smalltalk.bind(smalltalk.FloatTest, unescape("testIsFloat"), "testIsFloat", function FloatTest__testIsFloat(){
const self = this; self.deny_(((1).isFloat()));
self.assert_(((1.1).isFloat()));
self.deny_(((1).isFloat()));
self.deny_(((0).isFloat()));
self.deny_(((-1).isFloat()));
self.deny_((true.isFloat()));
self.deny_((nil.isFloat()));
self.deny_(((1).isFloat()));
self.deny_(((0).isFloat()));
self.deny_(((-1).isFloat()));
return self;
}
, "testing", unescape("testIsFloat%0D%09self%20deny%3A%201%20isFloat.%0D%09self%20assert%3A%201.1%20isFloat.%0D%09self%20deny%3A%201.0%20isFloat.%0D%09self%20deny%3A%200.0%20isFloat.%0D%09self%20deny%3A%20-1.0%20isFloat.%0D%09self%20deny%3A%20true%20isFloat.%0D%09self%20deny%3A%20nil%20isFloat.%0D%09self%20deny%3A%201%20isFloat.%0D%09self%20deny%3A%200%20isFloat.%0D%09self%20deny%3A%20-1%20isFloat.%0D"));
smalltalk.bind(smalltalk.FloatTest, unescape("testDivide"), "testDivide", function FloatTest__testDivide(){
const self = this; self.assert_((((1.5)._slash((2)))._eq((0.75))));
self.assert_((((2)._slash((1)))._eq((2))));
self.should_raise_((function FloatTest__(){
return (2)._slash((0));
}
),smalltalk.Error);
self.should_raise_((function FloatTest__(){
return (2)._slash((0));
}
),smalltalk.Error);
self.should_raise_((function FloatTest__(){
return (1.2)._slash((smalltalk.Float.negativeZero()));
}
),smalltalk.Error);
self.should_raise_((function FloatTest__(){
return (1.2)._slash(((1.3)._minus((1.3))));
}
),smalltalk.Error);
return self;
}
, "tests - arithmetic", unescape("testDivide%0D%0D%09self%20assert%3A%201.5%20/%202.0%20%3D%200.75.%0D%0D%09self%20assert%3A%202.0%20/%201%20%3D%202.0.%0D%0D%09self%20should%3A%20%5B%202.0%20/%200%20%5D%20raise%3A%20Error.%0D%09self%20should%3A%20%5B%202.0%20/%200.0%20%5D%20raise%3A%20Error.%0D%09self%20should%3A%20%5B%201.2%20/%20Float%20negativeZero%20%5D%20raise%3A%20Error.%0D%09self%20should%3A%20%5B%201.2%20/%20%281.3%20-%201.3%29%20%5D%20raise%3A%20Error%0D%09"));
smalltalk.bind(smalltalk.FloatTest, unescape("testZero1"), "testZero1", function FloatTest__testZero1(){
const self = this; self.assert_(((smalltalk.Float.negativeZero())._eq(((0).asFloat()))));
return self;
}
, "tests - zero behavior", unescape("testZero1%0D%09%22FloatTest%20new%20testZero1%22%0D%0D%09self%20assert%3A%20Float%20negativeZero%20%3D%200%20asFloat.%0D%0D%09%22The%20negative%20zero%20has%20a%20bit%20representation%20that%20is%20different%20from%20the%20bit%20representation%20of%20the%20positive%20zero.%20Nevertheless%2C%20both%20values%20are%20defined%20to%20be%20equal.%22%0D"));
smalltalk.bind(smalltalk.FloatTest, unescape("testIsZero"), "testIsZero", function FloatTest__testIsZero(){
const self = this; self.assert_(((0).isZero()));
self.deny_(((0.1).isZero()));
return self;
}
, "tests - zero behavior", unescape("testIsZero%0D%09self%20assert%3A%200.0%20isZero.%0D%09self%20deny%3A%20%200.1%20isZero."));
smalltalk.bind(smalltalk.FloatTest, unescape("testNegativeZeroSign"), "testNegativeZeroSign", function FloatTest__testNegativeZeroSign(){
const self = this; self.assert_((((smalltalk.Float.negativeZero()).sign())._eq((0))));
return self;
}
, "tests - zero behavior", unescape("testNegativeZeroSign%0D%09%22VSE%20behaviour%20differs%20from%20this%0D%09self%20assert%3A%20Float%20negativeZero%20sign%20%3D%20-1%22%0D%09self%20assert%3A%20Float%20negativeZero%20sign%20%3D%200"));
smalltalk.bind(smalltalk.FloatTest, unescape("testNegativeZeroAbs"), "testNegativeZeroAbs", function FloatTest__testNegativeZeroAbs(){
const self = this; self.assert_description_(((((smalltalk.Float.negativeZero()).abs()).sign()).positive()),"the absolute value of a negative zero is zero");
return self;
}
, "tests - zero behavior", unescape("testNegativeZeroAbs%0D%09self%20assert%3A%20Float%20negativeZero%20abs%20sign%20positive%20description%3A%20%27the%20absolute%20value%20of%20a%20negative%20zero%20is%20zero%27"));
smalltalk.bind(smalltalk.FloatTest, unescape("testReciprocal"), "testReciprocal", function FloatTest__testReciprocal(){
const self = this; (function FloatTest__($1$){
$1$.assert_((((1).reciprocal())._eq((1))));
$1$.assert_((((2).reciprocal())._eq((0.5))));
$1$.assert_((((-1).reciprocal())._eq((-1))));
return $1$.assert_((((-2).reciprocal())._eq((-0.5))))}
)(self);
self.should_raise_((function FloatTest__(){
return (0).reciprocal();
}
),smalltalk.Error);
return self;
}
, "tests - NaN behavior", unescape("testReciprocal%0D%0D%09self%0D%09%09assert%3A%201.0%20reciprocal%20%3D%201.0%3B%0D%09%09assert%3A%202.0%20reciprocal%20%3D%200.5%3B%0D%09%09assert%3A%20-1.0%20reciprocal%20%3D%20-1.0%3B%0D%09%09assert%3A%20-2.0%20reciprocal%20%3D%20-0.5.%0D%0D%09self%20should%3A%20%5B%200.0%20reciprocal%20%5D%20raise%3A%20Error"));
smalltalk.bind(smalltalk.FloatTest, unescape("testComparisonWhenPrimitiveFails"), "testComparisonWhenPrimitiveFails", function FloatTest__testComparisonWhenPrimitiveFails(){
const self = this; self.deny_(((0.5)._lt(((1)._slash((4))))));
self.deny_(((0.5)._lt(((1)._slash((2))))));
self.assert_(((0.5)._lt(((3)._slash((4))))));
self.deny_(((0.5)._lt_eq(((1)._slash((4))))));
self.assert_(((0.5)._lt_eq(((1)._slash((2))))));
self.assert_(((0.5)._lt_eq(((3)._slash((4))))));
self.assert_(((0.5)._gt(((1)._slash((4))))));
self.deny_(((0.5)._gt(((1)._slash((2))))));
self.deny_(((0.5)._gt(((3)._slash((4))))));
self.assert_(((0.5)._gt_eq(((1)._slash((4))))));
self.assert_(((0.5)._gt_eq(((1)._slash((2))))));
self.deny_(((0.5)._gt_eq(((3)._slash((4))))));
self.deny_(((0.5)._eq(((1)._slash((4))))));
self.assert_(((0.5)._eq(((1)._slash((2))))));
self.deny_(((0.5)._eq(((3)._slash((4))))));
self.assert_(((0.5)._no_eq(((1)._slash((4))))));
self.deny_(((0.5)._no_eq(((1)._slash((2))))));
self.assert_(((0.5)._no_eq(((3)._slash((4))))));
return self;
}
, "tests - compare", unescape("testComparisonWhenPrimitiveFails%0D%09%22This%20is%20related%20to%20http%3A//bugs.squeak.org/view.php%3Fid%3D7361%22%0D%0D%09self%20deny%3A%200.5%20%3C%20%281/4%29.%0D%09self%20deny%3A%200.5%20%3C%20%281/2%29.%0D%09self%20assert%3A%200.5%20%3C%20%283/4%29.%0D%0D%09self%20deny%3A%200.5%20%3C%3D%20%281/4%29.%0D%09self%20assert%3A%200.5%20%3C%3D%20%281/2%29.%0D%09self%20assert%3A%200.5%20%3C%3D%20%283/4%29.%0D%0D%09self%20assert%3A%200.5%20%3E%20%281/4%29.%0D%09self%20deny%3A%200.5%20%3E%20%281/2%29.%0D%09self%20deny%3A%200.5%20%3E%20%283/4%29.%0D%0D%09self%20assert%3A%200.5%20%3E%3D%20%281/4%29.%0D%09self%20assert%3A%200.5%20%3E%3D%20%281/2%29.%0D%09self%20deny%3A%200.5%20%3E%3D%20%283/4%29.%0D%0D%09self%20deny%3A%200.5%20%3D%20%281/4%29.%0D%09self%20assert%3A%200.5%20%3D%20%281/2%29.%0D%09self%20deny%3A%200.5%20%3D%20%283/4%29.%0D%0D%09self%20assert%3A%200.5%20%7E%3D%20%281/4%29.%0D%09self%20deny%3A%200.5%20%7E%3D%20%281/2%29.%0D%09self%20assert%3A%200.5%20%7E%3D%20%283/4%29."));
smalltalk.bind(smalltalk.FloatTest, unescape("testSetOfFloat"), "testSetOfFloat", function FloatTest__testSetOfFloat(){
var size3 = nil;
var size4 = nil;
const self = this; size3=(function FloatTest__($1$){
$1$.add_((3));
$1$.add_((3));
return $1$.size()}
)(smalltalk.Set.new_((3)));
size4=(function FloatTest__($2$){
$2$.add_((3));
$2$.add_((3));
return $2$.size()}
)(smalltalk.Set.new_((4)));
self.assert_description_((size3._eq(size4)),"The size of a Set should not depend on its capacity.");
return self;
}
, "tests - compare", unescape("testSetOfFloat%0D%20%20%20%20%20%20%22Classical%20disagreement%20between%20hash%20and%20%3D%20did%20lead%20to%20a%20bug.%0D%20%20%20%20%20%20%20This%20is%20a%20non%20regression%20test%20from%20http%3A//bugs.squeak.org/view.php%3Fid%3D3360%22%0D%09%22self%20debug%3A%20%23testSetOfFloat%22%0D%0D%20%20%20%20%20%20%20%7C%20size3%20size4%20%7C%0D%20%20%20%20%20%20%20size3%20%3A%3D%20%28Set%20new%3A%203%29%20add%3A%203%3B%20add%3A%203.0%3B%20size.%0D%20%20%20%20%20%20%20size4%20%3A%3D%20%28Set%20new%3A%204%29%20add%3A%203%3B%20add%3A%203.0%3B%20size.%0D%20%20%20%20%20%20%20self%20assert%3A%20size3%20%3D%20size4%20description%3A%20%27The%20size%20of%20a%20Set%20should%20not%20depend%20on%20its%20capacity.%27"));
smalltalk.bind(smalltalk.FloatTest, unescape("testRounding"), "testRounding", function FloatTest__testRounding(){
const self = this; self.assert_((((10.1234).round_((2)))._eq((10.12))));
self.assert_((((10.1234).round_((0)))._eq((10))));
return self;
}
, "tests - rounding", unescape("testRounding%0D%20%20%20%20%20%20%20%20%22%0D%20%20%20%20%20%20%20%20self%20debug%3A%20%23testRounding%0D%20%20%20%20%20%20%20%20%22%0D%0D%20%20%20%20%20%20%20%20self%20assert%3A%20%2810.1234%20round%3A%202%29%20%3D%2010.12.%0D%20%20%20%20%20%20%20%20self%20assert%3A%20%2810.1234%20round%3A%200%29%20%3D%2010"));
smalltalk.bind(smalltalk.FloatTest, unescape("testCeiling"), "testCeiling", function FloatTest__testCeiling(){
const self = this; self.assert_((((1).ceiling())._eq((1))));
self.assert_((((1.1).ceiling())._eq((2))));
self.assert_((((-2).ceiling())._eq((-2))));
self.assert_((((-2.1).ceiling())._eq((-2))));
return self;
}
, "tests - conversion", unescape("testCeiling%0D%09self%20assert%3A%201.0%20ceiling%20%3D%201.%0D%09self%20assert%3A%201.1%20ceiling%20%3D%202.%0D%09self%20assert%3A%20-2.0%20ceiling%20%3D%20-2.%0D%09self%20assert%3A%20-2.1%20ceiling%20%3D%20-2."));
smalltalk.bind(smalltalk.FloatTest, unescape("testFloatTruncated"), "testFloatTruncated", function FloatTest__testFloatTruncated(){
var x = nil;
var y = nil;
var $$int = nil;
var r = nil;
const self = this; $$int=(10).raisedTo_((16));
x=$$int.asFloat();
self.assert_(((x.asInteger())._eq($$int)));
return self;
}
, "tests - conversion", unescape("testFloatTruncated%0D%09%22%2810%20raisedTo%3A%2016%29%20asFloat%20has%20an%20exact%20representation%20%28no%20round%20off%20error%29.%0D%09It%20should%20convert%20back%20to%20integer%20without%20loosing%20bits.%0D%09This%20is%20a%20no%20regression%20test%20on%20http%3A//bugs.impara.de/view.php%3Fid%3D3504%22%0D%0D%09%7C%20x%20y%20int%20r%20%7C%0D%09int%20%3A%3D%2010%20raisedTo%3A%2016.%0D%09x%20%3A%3D%20int%20asFloat.%0D%22%09y%20%3A%3D%20%285%20raisedTo%3A%2016%29%20asFloat%20timesTwoPower%3A%2016.%0D%09self%20assert%3A%20x%20%3D%20y.%0D%22%0D%09self%20assert%3A%20x%20asInteger%20%3D%20int"));
smalltalk.bind(smalltalk.FloatTest, unescape("testStringAsNumber"), "testStringAsNumber", function FloatTest__testStringAsNumber(){
var aFloat = nil;
const self = this; aFloat=unescape("-12.3456").asNumber();
self.assert_(((-12.3456)._eq(aFloat)));
aFloat=unescape("-12.3456e2").asNumber();
self.assert_(((-1234.56)._eq(aFloat)));
return self;
}
, "tests - conversion", unescape("testStringAsNumber%0D%09%22This%20covers%20parsing%20in%20Number%3E%3EreadFrom%3A%22%0D%0D%09%7C%20aFloat%20%7C%0D%09aFloat%20%3A%3D%20%27-12.3456%27%20asNumber.%0D%09self%20assert%3A%20-12.3456%20%3D%20aFloat.%0D%09aFloat%20%3A%3D%20%27-12.3456e2%27%20asNumber.%0D%09self%20assert%3A%20-1234.56%20%3D%20aFloat.%0D%09%22%0D%09aFloat%20%3A%3D%20%27-12.3456d2%27%20asNumber.%0D%09self%20assert%3A%20-1234.56%20%3D%20aFloat.%0D%09aFloat%20%3A%3D%20%27-12.3456q2%27%20asNumber.%0D%09self%20assert%3A%20-1234.56%20%3D%20aFloat.%0D%09aFloat%20%3A%3D%20%27-12.3456q2%27%20asNumber.%0D%09self%20assert%3A%20-1234.56%20%3D%20aFloat.%0D%09aFloat%20%3A%3D%20%2712.3456q2%27%20asNumber.%0D%09self%20assert%3A%201234.56%20%3D%20aFloat.%0D%09%22%0D"));
smalltalk.bind(smalltalk.FloatTest, unescape("testFloor"), "testFloor", function FloatTest__testFloor(){
const self = this; self.assert_((((1).floor())._eq((1))));
self.assert_((((1.1).floor())._eq((1))));
self.assert_((((-2).floor())._eq((-2))));
self.assert_((((-2.1).floor())._eq((-3))));
return self;
}
, "tests - conversion", unescape("testFloor%0D%09self%20assert%3A%201.0%20floor%20%3D%201.%0D%09self%20assert%3A%201.1%20floor%20%3D%201.%0D%09self%20assert%3A%20-2.0%20floor%20%3D%20-2.%0D%09self%20assert%3A%20-2.1%20floor%20%3D%20-3."));
smalltalk.bind(smalltalk.FloatTest, unescape("testTruncated"), "testTruncated", function FloatTest__testTruncated(){
const self = this; self.assert_((((1).truncated())._eq((1))));
self.assert_((((1.1).truncated())._eq((1))));
self.assert_((((-2).truncated())._eq((-2))));
self.assert_((((-2.1).truncated())._eq((-2))));
return self;
}
, "tests - conversion", unescape("testTruncated%0D%09self%20assert%3A%201.0%20truncated%20%3D%201.%0D%09self%20assert%3A%201.1%20truncated%20%3D%201.%0D%09self%20assert%3A%20-2.0%20truncated%20%3D%20-2.%0D%09self%20assert%3A%20-2.1%20truncated%20%3D%20-2."));
smalltalk.bind(smalltalk.FloatTest, unescape("testRounded"), "testRounded", function FloatTest__testRounded(){
const self = this; self.assert_((((0.9).rounded())._eq((1))));
self.assert_((((1).rounded())._eq((1))));
self.assert_((((1.1).rounded())._eq((1))));
self.assert_((((-1.9).rounded())._eq((-2))));
self.assert_((((-2).rounded())._eq((-2))));
self.assert_((((-2.1).rounded())._eq((-2))));
self.assert_((((1.5).rounded())._eq((2))));
self.assert_((((-1.5).rounded())._eq((-2))));
return self;
}
, "tests - conversion", unescape("testRounded%0D%09self%20assert%3A%200.9%20rounded%20%3D%201.%0D%09self%20assert%3A%201.0%20rounded%20%3D%201.%0D%09self%20assert%3A%201.1%20rounded%20%3D%201.%0D%09self%20assert%3A%20-1.9%20rounded%20%3D%20-2.%0D%09self%20assert%3A%20-2.0%20rounded%20%3D%20-2.%0D%09self%20assert%3A%20-2.1%20rounded%20%3D%20-2.%0D%0D%09%22In%20case%20of%20tie%2C%20round%20to%20upper%20magnitude%22%0D%09self%20assert%3A%201.5%20rounded%20%3D%202.%0D%09self%20assert%3A%20-1.5%20rounded%20%3D%20-2."));
smalltalk.bind(smalltalk.FloatTest, unescape("testCopy"), "testCopy", function FloatTest__testCopy(){
const self = this; self.assert_((((2).copy())._eq((2))));
self.assert_((((-0.5).copy())._eq((-0.5))));
return self;
}
, "tests", unescape("testCopy%0D%09%22Elementary%20tests%22%0D%09self%20assert%3A%202.0%20copy%20%3D%202.0.%0D%09self%20assert%3A%20-0.5%20copy%20%3D%20-0.5"));
smalltalk.bind(smalltalk.FloatTest, unescape("testDegreeCos"), "testDegreeCos", function FloatTest__testDegreeCos(){
const self = this; (45).degreeCos();
self.assert_(((((((45).degreeCos()).squared())._minus((0.5))).abs())._lt_eq((smalltalk.Float.epsilon()))));
self.assert_((((((60).degreeCos())._minus((0.5))).abs())._lt_eq((smalltalk.Float.epsilon()))));
self.assert_((((((120).degreeCos())._plus((0.5))).abs())._lt_eq((smalltalk.Float.epsilon()))));
(-360).to_do_((360),(function FloatTest__(i){
return self.assert_(((i.degreeCos()).closeTo_(((i.degreesToRadians()).cos()))));
}
));
return self;
}
, "tests - mathematical functions", unescape("testDegreeCos%0D%0945.0%20degreeCos.%09%22Following%20tests%20use%20approximate%20equality%2C%20because%20cosine%20are%20generally%20evaluated%20using%20inexact%20Floating%20point%20arithmetic%22%0D%09self%20assert%3A%20%2845.0%20degreeCos%20squared%20-%200.5%29%20abs%20%3C%3D%20Float%20epsilon.%0D%09self%20assert%3A%20%2860.0%20degreeCos%20-%200.5%29%20abs%20%3C%3D%20Float%20epsilon.%0D%09self%20assert%3A%20%28120.0%20degreeCos%20+%200.5%29%20abs%20%3C%3D%20Float%20epsilon.%0D%09-360.0%20to%3A%20360.0%20do%3A%20%5B%20%3Ai%20%7C%20self%20assert%3A%20%28i%20degreeCos%20closeTo%3A%20i%20degreesToRadians%20cos%29%20%5D.%0D%09"));
smalltalk.bind(smalltalk.FloatTest, unescape("testArcTan"), "testArcTan", function FloatTest__testArcTan(){
const self = this; self.assert_((((100).arcTan_((100))).closeTo_(((smalltalk.Float.pi())._slash((4))))));
self.assert_((((-100).arcTan_((100))).closeTo_(((smalltalk.Float.pi())._slash((-4))))));
self.assert_((((100).arcTan_((-100))).closeTo_((((smalltalk.Float.pi())._star((3)))._slash((4))))));
self.assert_((((-100).arcTan_((-100))).closeTo_((((smalltalk.Float.pi())._star((-3)))._slash((4))))));
self.assert_((((0).arcTan_((100))).closeTo_((0))));
self.assert_((((0).arcTan_((-100))).closeTo_((smalltalk.Float.pi()))));
self.assert_((((100).arcTan_((0))).closeTo_(((smalltalk.Float.pi())._slash((2))))));
self.assert_((((-100).arcTan_((0))).closeTo_(((smalltalk.Float.pi())._slash((-2))))));
self.assert_((((smalltalk.Float.negativeZero()).arcTan_((100))).closeTo_((0))));
self.assert_((((smalltalk.Float.negativeZero()).arcTan_((-100))).closeTo_(((smalltalk.Float.pi())._star((-1))))));
self.assert_((((0).arcTan_((0)))._eq((0))));
self.assert_((((smalltalk.Float.negativeZero()).arcTan_((0)))._eq((0))));
self.assert_((((0).arcTan_((smalltalk.Float.negativeZero()))).closeTo_((smalltalk.Float.pi()))));
self.assert_((((smalltalk.Float.negativeZero()).arcTan_((smalltalk.Float.negativeZero()))).closeTo_(((smalltalk.Float.pi()).negated()))));
return self;
}
, "tests - mathematical functions", unescape("testArcTan%0D%0D%09self%20assert%3A%20%28%28100%20arcTan%3A%20100%29%20closeTo%3A%20Float%20pi%20/%204%29.%0D%09self%20assert%3A%20%28%28-100%20arcTan%3A%20100%29%20closeTo%3A%20Float%20pi%20/%20-4%29.%0D%09self%20assert%3A%20%28%28100%20arcTan%3A%20-100%29%20closeTo%3A%20Float%20pi%20*%203%20/%204%29.%0D%09self%20assert%3A%20%28%28-100%20arcTan%3A%20-100%29%20closeTo%3A%20Float%20pi%20*%20-3%20/%204%29.%0D%09self%20assert%3A%20%28%280%20arcTan%3A%20100%29%20closeTo%3A%200%29.%0D%09self%20assert%3A%20%28%280%20arcTan%3A%20-100%29%20closeTo%3A%20Float%20pi%29.%0D%09self%20assert%3A%20%28%28100%20arcTan%3A%200%29%20closeTo%3A%20Float%20pi%20/%202%29.%0D%09self%20assert%3A%20%28%28-100%20arcTan%3A%200%29%20closeTo%3A%20Float%20pi%20/%20-2%29.%0D%0D%09self%20assert%3A%20%28%28Float%20negativeZero%20arcTan%3A%20100%29%20closeTo%3A%200%29.%0D%09self%20assert%3A%20%28%28Float%20negativeZero%20arcTan%3A%20-100%29%20closeTo%3A%20Float%20pi%20*%20-1%29.%0D%0D%09self%20assert%3A%20%280%20arcTan%3A%200%29%20%3D%200.%0D%09self%20assert%3A%20%28Float%20negativeZero%20arcTan%3A%200%29%20%3D%200.%0D%09self%20assert%3A%20%28%280%20arcTan%3A%20Float%20negativeZero%29%20closeTo%3A%20Float%20pi%29.%0D%09self%20assert%3A%20%28%28Float%20negativeZero%20arcTan%3A%20Float%20negativeZero%29%20closeTo%3A%20Float%20pi%20negated%29.%20"));
smalltalk.bind(smalltalk.FloatTest, unescape("testDegreeCosForExceptionalValues"), "testDegreeCosForExceptionalValues", function FloatTest__testDegreeCosForExceptionalValues(){
const self = this; self.assert_((((smalltalk.Float.infinity()).degreeCos()).isNaN()));
self.assert_(((((smalltalk.Float.infinity()).negated()).degreeCos()).isNaN()));
return self;
}
, "tests - mathematical functions", unescape("testDegreeCosForExceptionalValues%0D%09self%20assert%3A%20Float%20infinity%20degreeCos%20isNaN.%0D%09self%20assert%3A%20Float%20infinity%20negated%20degreeCos%20isNaN."));
smalltalk.bind(smalltalk.FloatTest, unescape("testDegreeSinForExceptionalValues"), "testDegreeSinForExceptionalValues", function FloatTest__testDegreeSinForExceptionalValues(){
const self = this; self.assert_((((smalltalk.Float.infinity()).degreeSin()).isNaN()));
self.assert_(((((smalltalk.Float.infinity()).negated()).degreeSin()).isNaN()));
return self;
}
, "tests - mathematical functions", unescape("testDegreeSinForExceptionalValues%0D%09self%20assert%3A%20Float%20infinity%20degreeSin%20isNaN.%0D%09self%20assert%3A%20Float%20infinity%20negated%20degreeSin%20isNaN."));
smalltalk.bind(smalltalk.FloatTest, unescape("testDegreeSin"), "testDegreeSin", function FloatTest__testDegreeSin(){
const self = this; (45).degreeSin();
self.assert_(((((((45).degreeSin()).squared())._minus((0.5))).abs())._lt_eq((smalltalk.Float.epsilon()))));
self.assert_((((((30).degreeSin())._minus((0.5))).abs())._lt_eq((smalltalk.Float.epsilon()))));
self.assert_((((((-30).degreeSin())._plus((0.5))).abs())._lt_eq((smalltalk.Float.epsilon()))));
(-360).to_do_((360),(function FloatTest__(i){
return self.assert_(((i.degreeSin()).closeTo_(((i.degreesToRadians()).sin()))));
}
));
return self;
}
, "tests - mathematical functions", unescape("testDegreeSin%0D%0945.0%20degreeSin.%09%22Following%20tests%20use%20approximate%20equality%2C%20because%20sine%20are%20generally%20evaluated%20using%20inexact%20Floating%20point%20arithmetic%22%0D%09self%20assert%3A%20%2845.0%20degreeSin%20squared%20-%200.5%29%20abs%20%3C%3D%20Float%20epsilon.%0D%09self%20assert%3A%20%2830.0%20degreeSin%20-%200.5%29%20abs%20%3C%3D%20Float%20epsilon.%0D%09self%20assert%3A%20%28-30.0%20degreeSin%20+%200.5%29%20abs%20%3C%3D%20Float%20epsilon.%0D%09-360.0%20to%3A%20360.0%20do%3A%20%5B%20%3Ai%20%7C%20self%20assert%3A%20%28i%20degreeSin%20closeTo%3A%20i%20degreesToRadians%20sin%29%20%5D"));
smalltalk.bind(smalltalk.FloatTest, unescape("testSign"), "testSign", function FloatTest__testSign(){
var negatives = nil;
var positives = nil;
var strictNegatives = nil;
var strictPositives = nil;
var zero = nil;
const self = this; strictPositives=smalltalk.Array.with_with_with_((2),(2.5),(smalltalk.Float.infinity()));
strictNegatives=smalltalk.Array.with_with_with_((-3),(-3.25),(smalltalk.Float.negativeInfinity()));
zero=(0);
positives=strictPositives.copyWith_(zero);
negatives=strictNegatives;
strictPositives.do_((function FloatTest__(aPositive){
return self.assert_(((aPositive.sign())._eq((1))));
}
));
strictNegatives.do_((function FloatTest__(aNegative){
return self.assert_(((aNegative.sign())._eq((-1))));
}
));
self.assert_(((zero.sign())._eq((0))));
return self;
}
, "tests - mathematical functions", unescape("testSign%0D%0D%20%20%20%20%20%20%22Set%20up%22%0D%20%20%20%20%20%20%7C%20negatives%20positives%20strictNegatives%20strictPositives%20zero%20%7C%0D%20%20%20%20%20%20strictPositives%20%3A%3D%20Array%20with%3A%202%20with%3A%202.5%20with%3A%20Float%20infinity.%0D%20%20%20%20%20%20strictNegatives%20%3A%3D%20Array%20with%3A%20-3%20with%3A%20-3.25%20with%3A%20Float%20negativeInfinity.%0D%20%20%20%20%20%20zero%20%3A%3D%200.0.%0D%20%20%20%20%20%20positives%20%3A%3D%20strictPositives%20copyWith%3A%20zero.%0D%20%20%20%20%20%20negatives%20%3A%3D%20strictNegatives.%0D%0D%20%20%20%20%20%20%22The%20sign%20of%20non%20zeros%22%0D%20%20%20%20%20%20strictPositives%20do%3A%20%5B%3AaPositive%20%7C%20self%20assert%3A%20aPositive%20sign%20%3D%201%5D.%0D%20%20%20%20%20%20strictNegatives%20do%3A%20%5B%3AaNegative%20%7C%20self%20assert%3A%20aNegative%20sign%20%3D%20-1%5D.%0D%0D%20%20%20%20%20%20%22The%20sign%20of%20zeros%22%0D%20%20%20%20%20%20self%20assert%3A%20zero%20sign%20%3D%200.%0D%20%20%20%20%20"));
smalltalk.bind(smalltalk.FloatTest, unescape("testInfinity1"), "testInfinity1", function FloatTest__testInfinity1(){
var i1 = nil;
var i2 = nil;
const self = this; i1=(10000).exp();
i2=(1000000000).exp();
self.assert_((i1.isInfinite()));
self.assert_((i2.isInfinite()));
self.assert_((i1._eq(i2)));
return self;
}
, "tests - infinity behavior", unescape("testInfinity1%0D%09%7C%20i1%20%20i2%20%7C%0D%09i1%20%3A%3D%2010000%20exp.%0D%09i2%20%3A%3D%201000000000%20exp.%0D%09self%20assert%3A%20i1%20isInfinite.%0D%09self%20assert%3A%20i2%20isInfinite.%0D%09self%20assert%3A%20i1%20%3D%20i2.%0D%09%22All%20infinities%20are%20equal.%20%28This%20is%20a%20very%20substantial%20difference%20to%20NaN%27s%2C%20which%20are%20never%20equal.%22%0D"));
smalltalk.bind(smalltalk.FloatTest, unescape("testInfinity2"), "testInfinity2", function FloatTest__testInfinity2(){
var i1 = nil;
var i2 = nil;
const self = this; i1=(10000).exp();
i2=(1000000000).exp();
i2=(0)._minus(i2);
self.assert_((i1.isInfinite()));
self.assert_((i1.positive()));
self.assert_((i2.isInfinite()));
self.assert_((i2.negative()));
self.deny_((i1._eq(i2)));
return self;
}
, "tests - infinity behavior", unescape("testInfinity2%0D%20%20%20%22FloatTest%20new%20testInfinity2%22%0D%0D%09%7C%20i1%20%20i2%20%7C%0D%09i1%20%3A%3D%2010000%20exp.%0D%09i2%20%3A%3D%201000000000%20exp.%0D%09i2%20%3A%3D%200%20-%20i2.%20%22%20this%20is%20entirely%20ok.%20You%20can%20compute%20with%20infinite%20values.%22%0D%0D%09self%20assert%3A%20i1%20isInfinite.%0D%09self%20assert%3A%20i1%20positive.%0D%09self%20assert%3A%20i2%20isInfinite.%0D%09self%20assert%3A%20i2%20negative.%0D%09self%20deny%3A%20i1%20%3D%20i2.%0D%20%20%09%22All%20infinities%20are%20signed.%20Negative%20infinity%20is%20not%20equal%20to%20Infinity%22%0D"));
smalltalk.bind(smalltalk.FloatTest, unescape("testInfinityCloseTo"), "testInfinityCloseTo", function FloatTest__testInfinityCloseTo(){
const self = this; self.deny_(((smalltalk.Float.infinity()).closeTo_(((smalltalk.Float.infinity()).negated()))));
self.deny_((((smalltalk.Float.infinity()).negated()).closeTo_((smalltalk.Float.infinity()))));
return self;
}
, "tests - infinity behavior", unescape("testInfinityCloseTo%0D%09%22This%20is%20a%20test%20for%20bug%20http%3A//bugs.squeak.org/view.php%3Fid%3D6729%3A%22%0D%0D%20%09%22FloatTest%20new%20testInfinityCloseTo%22%0D%0D%09self%20deny%3A%20%28Float%20infinity%20closeTo%3A%20Float%20infinity%20negated%29.%0D%09self%20deny%3A%20%28Float%20infinity%20negated%20closeTo%3A%20Float%20infinity%29."));
