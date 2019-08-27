smalltalk.addClass("IntegerTest", smalltalk.TestCase, [], 'Kernel-Tests-Numbers');
smalltalk.IntegerTest.$classVariableNames=("");
smalltalk.bind(smalltalk.IntegerTest, unescape("testIsInteger"), "testIsInteger", function IntegerTest__testIsInteger(){
const self = this; self.assert_(((1).isInteger()));
self.assert_(((0).isInteger()));
self.assert_(((-1).isInteger()));
self.deny_((true.isInteger()));
self.deny_((nil.isInteger()));
self.deny_(((1.1).isInteger()));
self.assert_(((1).isInteger()));
self.assert_(((0).isInteger()));
self.assert_(((-1).isInteger()));
return self;
}
, "testing", unescape("testIsInteger%0D%09self%20assert%3A%201%20isInteger.%0D%09self%20assert%3A%200%20isInteger.%0D%09self%20assert%3A%20-1%20isInteger.%0D%09self%20deny%3A%20true%20isInteger.%0D%09self%20deny%3A%20nil%20isInteger.%0D%09self%20deny%3A%201.1%20isInteger.%0D%09self%20assert%3A%201.0%20isInteger.%0D%09self%20assert%3A%200.0%20isInteger.%0D%09self%20assert%3A%20-1.0%20isInteger.%0D"));
smalltalk.bind(smalltalk.IntegerTest, unescape("testRounding"), "testRounding", function IntegerTest__testRounding(){
const self = this; self.assert_equals_(((5).round_((2))),(5));
return self;
}
, "test - rounding", unescape("testRounding%0D%20%20%20%20%20%20%20%20%22%0D%20%20%20%20%20%20%20%20self%20debug%3A%20%23testRounding%0D%20%20%20%20%20%20%20%20%22%0D%0D%20%20%20%20%20%20%20%20self%20assert%3A%20%285%20round%3A%202%29%20equals%3A%205"));
smalltalk.bind(smalltalk.IntegerTest, unescape("testIntegerReadsOkFromString"), "testIntegerReadsOkFromString", function IntegerTest__testIntegerReadsOkFromString(){
const self = this; self.assert_(((smalltalk.Integer.readFrom_("123"))._eq((123))));
self.assert_(((smalltalk.Integer.readFrom_radix_("A3",(16)))._eq((163))));
return self;
}
, "tests - instance creation", unescape("testIntegerReadsOkFromString%0D%09self%20assert%3A%20%28Integer%20readFrom%3A%20%27123%27%29%20%3D%20123.%0D%09%22VSE%20doesn%27t%20know%20negativity%0D%09self%20assert%3A%20%28Integer%20readFrom%3A%20%27-123%27%29%20%3D%20-123.%22%0D%09self%20assert%3A%20%28Integer%20readFrom%3A%20%27A3%27%20radix%3A%2016%29%20%3D%20163.%0D%09%22VSE%20doesn%27t%20know%20negativity%0D%09self%20assert%3A%20%28Integer%20readFrom%3A%20%27-A3%27%20radix%3A%2016%29%20%3D%20-163.%22"));
smalltalk.bind(smalltalk.IntegerTest, unescape("testIntegerReadsNotOkFromString"), "testIntegerReadsNotOkFromString", function IntegerTest__testIntegerReadsNotOkFromString(){
const self = this; self.assert_(((smalltalk.Integer.readFrom_(("A23".readStream())))._eq((0))));
self.assert_(((smalltalk.Integer.readFrom_radix_(("A3".readStream()),(8)))._eq((0))));
return self;
}
, "tests - instance creation", unescape("testIntegerReadsNotOkFromString%0D%09self%20assert%3A%20%28%28Integer%20readFrom%3A%20%27A23%27%20readStream%29%20%3D%200%29.%0D%09%22self%20assert%3A%20%28%28Integer%20readFrom%3A%20%27-A23%27%20readStream%29%20%3D%200%29.%22%0D%09self%20assert%3A%20%28%28Integer%20readFrom%3A%20%27A3%27%20readStream%20radix%3A%208%29%20%3D%200%29.%0D%09%22self%20assert%3A%20%28%28Integer%20readFrom%3A%20%27-A3%27%20readStream%20radix%3A%208%29%20%3D%200%29.%22%0D%09"));
smalltalk.bind(smalltalk.IntegerTest, unescape("testStringAsNumber"), "testStringAsNumber", function IntegerTest__testStringAsNumber(){
const self = this; self.assert_((("123".asNumber())._eq((123))));
self.assert_((("123.".asNumber())._eq((123))));
self.assert_((("123This is not to be read".asNumber())._eq((123))));
return self;
}
, "tests - instance creation", unescape("testStringAsNumber%0D%09%22This%20covers%20parsing%20in%20Number%3E%3EreadFrom%3A%0D%09Trailing%20decimal%20points%20should%20be%20ignored.%22%0D%0D%09self%20assert%3A%20%28%27123%27%20asNumber%20%3D%20123%29.%0D%09%22self%20assert%3A%20%28%27-123%27%20asNumber%20%3D%20-123%29.%22%0D%09self%20assert%3A%20%28%27123.%27%20asNumber%20%3D%20123%29.%0D%09%22self%20assert%3A%20%28%27-123.%27%20asNumber%20%3D%20-123%29.%22%0D%09self%20assert%3A%20%28%27123This%20is%20not%20to%20be%20read%27%20asNumber%20%3D%20123%29.%0D%09%22self%20assert%3A%20%28%27123e%20could%20be%20confused%20with%20a%20Float%27%20asNumber%20%3D%20123%29%20message%3A%20%27123e%27%20asNumber%20printString.%22%0D%09"));
smalltalk.bind(smalltalk.IntegerTest, unescape("testRaisedToErrorConditions"), "testRaisedToErrorConditions", function IntegerTest__testRaisedToErrorConditions(){
const self = this; self.assert_((((-2).raisedTo_(((1)._slash((4))))).isNaN()));
self.assert_((((-2).raisedTo_((1.24))).isNaN()));
return self;
}
, "tests - mathematical functions", unescape("testRaisedToErrorConditions%0D%09%22%0D%09IntegerTest%20new%20testRaisedToErrorConditions%0D%09%22%0D%0D%09self%20assert%3A%20%28-2%20raisedTo%3A%201/4%29%20isNaN.%0D%09self%20assert%3A%20%28-2%20raisedTo%3A%201.24%29%20isNaN"));
smalltalk.bind(smalltalk.IntegerTest, unescape("testDegreeSin"), "testDegreeSin", function IntegerTest__testDegreeSin(){
const self = this; (45).degreeSin();
self.assert_(((((((45).degreeSin()).squared())._minus(((1)._slash((2))))).abs())._lt_eq((smalltalk.Float.epsilon()))));
self.assert_((((((30).degreeSin())._minus(((1)._slash((2))))).abs())._lt_eq((smalltalk.Float.epsilon()))));
self.assert_((((((-30).degreeSin())._plus(((1)._slash((2))))).abs())._lt_eq((smalltalk.Float.epsilon()))));
(-360).to_do_((360),(function IntegerTest__(i){
return self.assert_(((i.degreeSin()).closeTo_(((i.degreesToRadians()).sin()))));
}
));
(-10).to_do_((10),(function IntegerTest__(k){
self.assert_((((((k._star((360)))._plus((90))).degreeSin())._minus((1)))._lt_eq((smalltalk.Float.epsilon()))));
self.assert_((((((k._star((360)))._minus((90))).degreeSin())._plus((1)))._lt_eq((smalltalk.Float.epsilon()))));
self.assert_(((((k._star((360)))._plus((180))).degreeSin())._lt_eq((smalltalk.Float.epsilon()))));
return self.assert_((((k._star((360))).degreeSin())._lt_eq((smalltalk.Float.epsilon()))));
}
));
return self;
}
, "tests - mathematical functions", unescape("testDegreeSin%0D%09%22self%20run%3A%20%23testDegreeSin%22%0D%0D%0945%20degreeSin.%09%22Following%20tests%20use%20approximate%20equality%2C%20because%20sine%20are%20generally%20evaluated%20using%20inexact%20Floating%20point%20arithmetic%22%0D%09self%20assert%3A%20%2845%20degreeSin%20squared%20-%20%281%20/%202%29%29%20abs%20%3C%3D%20Float%20epsilon.%0D%09self%20assert%3A%20%2830%20degreeSin%20-%20%281%20/%202%29%29%20abs%20%3C%3D%20Float%20epsilon.%0D%09self%20assert%3A%20%28-30%20degreeSin%20+%20%281%20/%202%29%29%20abs%20%3C%3D%20Float%20epsilon.%0D%09-360%20to%3A%20360%20do%3A%20%5B%20%3Ai%20%7C%0D%09%09self%20assert%3A%20%28i%20degreeSin%20closeTo%3A%20i%20degreesToRadians%20sin%29%5D.%0D%09%22Following%20tests%20use%20strict%20equality%20which%20is%20a%20requested%20property%20of%20degreeSin%0D%09Not%20here%20obviously%22%0D%09-10%20to%3A%2010%20do%3A%20%5B%20%3Ak%20%7C%0D%09%09self%20assert%3A%20%28%28k%20*%20360%20+%2090%29%20degreeSin%20-%201%29%20%3C%3D%20Float%20epsilon.%0D%09%09self%20assert%3A%20%28%28k%20*%20360%20-%2090%29%20degreeSin%20+%201%29%20%3C%3D%20Float%20epsilon.%0D%09%09self%20assert%3A%20%28%28k%20*%20360%20+%20180%29%20degreeSin%29%20%3C%3D%20Float%20epsilon.%0D%09%09self%20assert%3A%20%28%28k%20*%20360%29%20degreeSin%29%20%3C%3D%20Float%20epsilon%0D%09%09%5D"));
smalltalk.bind(smalltalk.IntegerTest, unescape("testLog"), "testLog", function IntegerTest__testLog(){
const self = this; self.assert_((((100).log()).closeTo_((2))));
return self;
}
, "tests - mathematical functions", unescape("testLog%0D%09self%20assert%3A%20%28100%20log%20closeTo%3A%202%29.%0D%09"));
smalltalk.bind(smalltalk.IntegerTest, unescape("testLn"), "testLn", function IntegerTest__testLn(){
const self = this; self.assert_((((100).ln()).closeTo_((((10).ln())._star((2))))));
return self;
}
, "tests - mathematical functions", unescape("testLn%0D%09self%20assert%3A%20%28100%20ln%20closeTo%3A%2010%20ln*2%29.%0D%09"));
smalltalk.bind(smalltalk.IntegerTest, unescape("testDegreeCos"), "testDegreeCos", function IntegerTest__testDegreeCos(){
const self = this; (45).degreeCos();
self.assert_(((((((45).degreeCos()).squared())._minus(((1)._slash((2))))).abs())._lt_eq((smalltalk.Float.epsilon()))));
self.assert_((((((60).degreeCos())._minus(((1)._slash((2))))).abs())._lt_eq((smalltalk.Float.epsilon()))));
self.assert_((((((120).degreeCos())._plus(((1)._slash((2))))).abs())._lt_eq((smalltalk.Float.epsilon()))));
(-360).to_do_((360),(function IntegerTest__(i){
return self.assert_(((i.degreeCos()).closeTo_(((i.degreesToRadians()).cos()))));
}
));
(-10).to_do_((10),(function IntegerTest__(k){
self.assert_(((((k._star((360)))._plus((90))).degreeCos())._lt_eq((smalltalk.Float.epsilon()))));
self.assert_(((((k._star((360)))._minus((90))).degreeCos())._lt_eq((smalltalk.Float.epsilon()))));
self.assert_((((((k._star((360)))._plus((180))).degreeCos())._plus((1)))._lt_eq((smalltalk.Float.epsilon()))));
return self.assert_(((((k._star((360))).degreeCos())._minus((1)))._lt_eq((smalltalk.Float.epsilon()))));
}
));
return self;
}
, "tests - mathematical functions", unescape("testDegreeCos%0D%09%22self%20run%3A%20%23testDegreeCos%22%0D%0D%0945%20degreeCos.%09%22Following%20tests%20use%20approximate%20equality%2C%20because%20cosine%20are%20generally%20evaluated%20using%20inexact%20Floating%20point%20arithmetic%22%0D%09self%20assert%3A%20%2845%20degreeCos%20squared%20-%20%281%20/%202%29%29%20abs%20%3C%3D%20Float%20epsilon.%0D%09self%20assert%3A%20%2860%20degreeCos%20-%20%281%20/%202%29%29%20abs%20%3C%3D%20Float%20epsilon.%0D%09self%20assert%3A%20%28120%20degreeCos%20+%20%281%20/%202%29%29%20abs%20%3C%3D%20Float%20epsilon.%0D%09-360%20to%3A%20360%20do%3A%20%5B%20%3Ai%20%7C%20self%20assert%3A%20%28i%20degreeCos%20closeTo%3A%20i%20degreesToRadians%20cos%29%20%5D.%0D%09%22Following%20tests%20use%20strict%20equality%20which%20is%20a%20requested%20property%20of%20degreeCos%0D%09Not%20here%20obviously%22%0D%09-10%20to%3A%2010%20do%3A%20%5B%20%3Ak%20%7C%0D%09%09self%20assert%3A%20%28k%20*%20360%20+%2090%29%20degreeCos%20%3C%3D%20Float%20epsilon.%0D%09%09self%20assert%3A%20%28k%20*%20360%20-%2090%29%20degreeCos%20%3C%3D%20Float%20epsilon.%0D%09%09self%20assert%3A%20%28k%20*%20360%20+%20180%29%20degreeCos%20+%201%20%3C%3D%20Float%20epsilon.%0D%09%09self%20assert%3A%20%28k%20*%20360%29%20degreeCos%20-%201%20%3C%3D%20Float%20epsilon%0D%09%09%5D"));
smalltalk.bind(smalltalk.IntegerTest, unescape("testBitLogic"), "testBitLogic", function IntegerTest__testBitLogic(){
var count = nil;
var n = nil;
const self = this; count=(30);
(1).to_do_(count,(function IntegerTest__(i){
return self.assert_(((((1).bitShift_(i)).bitShift_((i.negated())))._eq((1))));
}
));
(1).to_do_(count,(function IntegerTest__(i){
return self.assert_(((((-1).bitShift_(i)).bitShift_((i.negated())))._eq((-1))));
}
));
(1).to_do_(count,(function IntegerTest__(i){
return self.assert_(((((1).bitShift_(i)).bitAnd_((-1)))._eq(((1).bitShift_(i)))));
}
));
(1).to_do_(count,(function IntegerTest__(i){
n=(1).bitShift_(i);
return self.assert_(((n.bitAnd_((n.negated())))._eq(n)));
}
));
(1).to_do_(count,(function IntegerTest__(i){
n=(1).bitShift_(i);
return self.assert_(((n.negated())._eq(((n.bitXor_((-1)))._plus((1))))));
}
));
(1).to_do_(count,(function IntegerTest__(i){
n=(1).bitShift_(i);
return self.assert_(((n._plus((n.bitXor_((-1)))))._eq((-1))));
}
));
(1).to_do_(count,(function IntegerTest__(i){
n=(1).bitShift_(i);
return self.assert_(((n.negated())._eq(((n.bitXor_((-1)))._plus((1))))));
}
));
return self;
}
, "tests - bitLogic", unescape("testBitLogic%0D%09%22This%20little%20suite%20of%20tests%20is%20designed%20to%20verify%20correct%20operation%20of%20most%20of%20Pharo%27s%20bit%20manipulation%20code%2C%20including%20two%27s%20complement%20representation%20of%20negative%20values.%20%20It%20was%20written%20in%20a%20hurry%20and%20is%20probably%20lacking%20several%20important%20checks.%22%0D%09%22self%20run%3A%20%23testBitLogic%22%0D%0D%09%7C%20count%20n%20%7C%0D%09%22Pharo%20test%20uses%20100%22%0D%09count%20%3A%3D%2030.%0D%0D%09%22Shift%201%20bit%20left%20then%20right%20and%20test%20for%201%22%0D%091%20to%3A%20count%20do%3A%20%5B%3Ai%20%7C%20self%20assert%3A%20%28%281%20bitShift%3A%20i%29%20bitShift%3A%20i%20negated%29%20%3D%201%5D.%0D%0D%09%22Shift%20-1%20left%20then%20right%20and%20test%20for%201%22%0D%091%20to%3A%20count%20do%3A%20%5B%3Ai%20%7C%20self%20assert%3A%20%28%28-1%20bitShift%3A%20i%29%20bitShift%3A%20i%20negated%29%20%3D%20-1%5D.%0D%0D%09%22And%20a%20single%20bit%20with%20-1%20and%20test%20for%20same%20value%22%0D%091%20to%3A%20count%20do%3A%20%5B%3Ai%20%7C%20self%20assert%3A%20%28%281%20bitShift%3A%20i%29%20bitAnd%3A%20-1%29%20%3D%20%281%20bitShift%3A%20i%29%5D.%0D%0D%09%22Verify%20that%20%28n%20bitAnd%3A%20n%20negated%29%20%3D%20n%20for%20single%20bits%22%0D%091%20to%3A%20count%20do%3A%20%5B%3Ai%20%7C%20%20n%20%3A%3D%201%20bitShift%3A%20i.%20self%20assert%3A%20%28n%20bitAnd%3A%20n%20negated%29%20%3D%20n%5D.%0D%0D%09%22Verify%20that%20n%20negated%20%3D%20%28n%20complemented%20+%201%29%20for%20single%20bits%22%0D%091%20to%3A%20count%20do%3A%20%5B%3Ai%20%7C%0D%09%09%09%09%09n%20%3A%3D%201%20bitShift%3A%20i.%0D%09%09%09%09%09self%20assert%3A%20n%20negated%20%3D%20%28%28n%20bitXor%3A%20-1%29%20+%201%29%5D.%0D%0D%09%22Verify%20that%20%28n%20+%20n%20complemented%29%20%3D%20-1%20for%20single%20bits%22%0D%091%20to%3A%20count%20do%3A%20%5B%3Ai%20%7C%0D%09%09%09%09%09n%20%3A%3D%201%20bitShift%3A%20i.%0D%09%09%09%09%09self%20assert%3A%20%28n%20+%20%28n%20bitXor%3A%20-1%29%29%20%3D%20-1%5D.%0D%0D%09%22Verify%20that%20n%20negated%20%3D%20%28n%20complemented%20+1%29%20for%20single%20bits%22%0D%091%20to%3A%20count%20do%3A%20%5B%3Ai%20%7C%0D%09%09%09%09%09n%20%3A%3D%201%20bitShift%3A%20i.%0D%09%09%09%09%09self%20assert%3A%20n%20negated%20%3D%20%28%28n%20bitXor%3A%20-1%29%20+%201%29%5D."));
smalltalk.bind(smalltalk.IntegerTest, unescape("testBitShift"), "testBitShift", function IntegerTest__testBitShift(){
const self = this; self.assert_equals_(((3)._lt_lt((2))),(12));
self.assert_equals_(((3).bitShift_((2))),(12));
self.assert_equals_(((11)._gt_gt((2))),(2));
self.assert_equals_(((11).bitShift_((-2))),(2));
return self;
}
, "tests - bitLogic", unescape("testBitShift%0D%0D%09self%20assert%3A%202r11%20%3C%3C%202%20equals%3A%202r1100.%0D%09self%20assert%3A%20%282r11%20bitShift%3A%202%29%20equals%3A%202r1100.%0D%09self%20assert%3A%202r1011%20%3E%3E%202%20equals%3A%202r10.%0D%09self%20assert%3A%20%282r1011%20bitShift%3A%20-2%29%20equals%3A%202r10."));
smalltalk.bind(smalltalk.IntegerTest, unescape("testBitOr"), "testBitOr", function IntegerTest__testBitOr(){
const self = this; self.assert_equals_(((5).bitOr_((10))),(15));
return self;
}
, "tests - bitLogic", unescape("testBitOr%0D%0D%09%22self%20assert%3A%20%282r0101%20%7C%202r1010%29%20equals%3A%202r1111.%22%0D%09self%20assert%3A%20%282r0101%20bitOr%3A%202r1010%29%20equals%3A%202r1111."));
smalltalk.bind(smalltalk.IntegerTest, unescape("testBitXor"), "testBitXor", function IntegerTest__testBitXor(){
const self = this; self.assert_equals_(((12).bitXor_((10))),(6));
return self;
}
, "tests - bitLogic", unescape("testBitXor%0D%0D%09self%20assert%3A%20%282r1100%20bitXor%3A%202r1010%29%20equals%3A%202r0110."));
smalltalk.bind(smalltalk.IntegerTest, unescape("testBitAt"), "testBitAt", function IntegerTest__testBitAt(){
const self = this; self.assert_equals_(((2).bitAt_((1))),(0));
self.assert_equals_(((2).bitAt_((2))),(1));
self.assert_description_((((1).to_((100))).allSatisfy_((function IntegerTest__(i){
return ((0).bitAt_(i))._eq((0));
}
))),"all bits of zero are set to zero");
self.assert_description_((((1).to_((100))).allSatisfy_((function IntegerTest__(i){
return ((-1).bitAt_(i))._eq((1));
}
))),unescape("In%20two%20complements%2C%20all%20bits%20of%20-1%20are%20set%20to%201"));
return self;
}
, "tests - bitLogic", unescape("testBitAt%0D%0D%09self%20assert%3A%20%282r10%20bitAt%3A%201%29%20equals%3A%200.%0D%09self%20assert%3A%20%282r10%20bitAt%3A%202%29%20equals%3A%201.%0D%0D%09self%0D%09%09assert%3A%20%28%281%20to%3A%20100%29%20allSatisfy%3A%20%5B%3Ai%20%7C%20%280%20bitAt%3A%20i%29%20%3D%200%5D%29%0D%09%09description%3A%20%27all%20bits%20of%20zero%20are%20set%20to%20zero%27.%0D%0D%09self%0D%09%09assert%3A%20%28%281%20to%3A%20100%29%20allSatisfy%3A%20%5B%3Ai%20%7C%20%28-1%20bitAt%3A%20i%29%20%3D%201%5D%29%0D%09%09description%3A%20%27In%20two%20complements%2C%20all%20bits%20of%20-1%20are%20set%20to%201%27.%0D%09"));
smalltalk.bind(smalltalk.IntegerTest, unescape("testBitAnd"), "testBitAnd", function IntegerTest__testBitAnd(){
const self = this; self.assert_equals_(((12).bitAnd_((10))),(8));
self.assert_equals_(((12)._amp((10))),(8));
return self;
}
, "tests - bitLogic", unescape("testBitAnd%0D%0D%09self%20assert%3A%20%282r1100%20bitAnd%3A%202r1010%29%20equals%3A%202r1000.%0D%09self%20assert%3A%20%282r1100%20%26%202r1010%29%20equals%3A%202r1000.%0D%22%09self%20assert%3A%20%28-2%20bitAnd%3A%2016rFFFFFFFF%29%20equals%3A%2016rFFFFFFFE.%0D%09self%20assert%3A%20%28-2%20%26%2016rFFFFFFFF%29%20equals%3A%2016rFFFFFFFE.%22%0D%09"));
smalltalk.bind(smalltalk.IntegerTest, unescape("testEven"), "testEven", function IntegerTest__testEven(){
const self = this; self.deny_(((1073741825).even()));
self.assert_(((1073741824).even()));
return self;
}
, "tests - basic", unescape("testEven%0D%0D%09self%20deny%3A%20%281073741825%20even%29.%0D%09self%20assert%3A%20%281073741824%20%20even%29.%0D%09"));
smalltalk.bind(smalltalk.IntegerTest, unescape("assert%3AclassAndValueEquals%3A"), "assert_classAndValueEquals_", function IntegerTest__assert_classAndValueEquals_(a,b){
const self = this; self.assert_(((a.$klass)._eq((b.$klass))));
self.assert_((a._eq(b)));
return self;
}
, "private", unescape("assert%3A%20a%20classAndValueEquals%3A%20b%0D%09self%20assert%3A%20a%20class%20%3D%20b%20class.%0D%09self%20assert%3A%20a%20%3D%20b"));
