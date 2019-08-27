smalltalk.addClass("DateTimeTestCase", smalltalk.TestCase, [], 'nil');
smalltalk.DateTimeTestCase.$classVariableNames=("");
smalltalk.bind(smalltalk.DateTimeTestCase, unescape("dateForTest"), "dateForTest", function DateTimeTestCase__dateForTest(){
const self = this; return smalltalk.DateTime.fromSeconds_(((1530810916)._plus((smalltalk.DateTime.utcOffsetSeconds()))));
}
, "running", unescape("dateForTest%0D%09%5E%20DateTime%20fromSeconds%3A%201530810916%20+%20DateTime%20utcOffsetSeconds"));
smalltalk.bind(smalltalk.DateTimeTestCase, unescape("testYear"), "testYear", function DateTimeTestCase__testYear(){
var testTime = nil;
const self = this; testTime=self.dateForTest();
self.assert_equals_((testTime.year()),(2018));
testTime.year_(((2017).yourself()));
self.should_raise_((function DateTimeTestCase__(){
return testTime.year_((2016.5));
}
),smalltalk.Error);
self.should_raise_((function DateTimeTestCase__(){
return testTime.year_(unescape("December%2025th%2C%202017"));
}
),smalltalk.Error);
self.assert_equals_((testTime.year()),(2017));
return self;
}
, "running", unescape("testYear%0D%0D%09%7C%20testTime%20%7C%0D%09testTime%20%3A%3D%20self%20dateForTest.%0D%09self%0D%09%09assert%3A%20testTime%20year%0D%09%09equals%3A%202018.%0D%09testTime%20year%3A%202017%20yourself.%0D%09self%0D%09%09should%3A%20%5BtestTime%20year%3A%202016.5%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09should%3A%20%5BtestTime%20year%3A%20%27December%2025th%2C%202017%27%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09assert%3A%20testTime%20year%0D%09%09equals%3A%202017.%20"));
smalltalk.bind(smalltalk.DateTimeTestCase, unescape("testMonth"), "testMonth", function DateTimeTestCase__testMonth(){
var testTime = nil;
var badMonths = nil;
const self = this; testTime=self.dateForTest();
self.assert_equals_((testTime.month()),(7));
testTime.month_(((6).yourself()));
self.assert_equals_((testTime.month()),(6));
badMonths=[(-1), (0), (4.3), (13)];
badMonths.do_((function DateTimeTestCase__(each){
return self.should_raise_((function DateTimeTestCase__(){
return testTime.month_(each);
}
),smalltalk.Error);
}
));
return self;
}
, "running", unescape("testMonth%0D%0D%09%7C%20testTime%20badMonths%20%7C%0D%09testTime%20%3A%3D%20self%20dateForTest.%0D%09self%0D%09%09assert%3A%20testTime%20month%0D%09%09equals%3A%207.%0D%09testTime%20month%3A%206%20yourself.%0D%09self%0D%09%09assert%3A%20testTime%20month%0D%09%09equals%3A%206.%0D%09badMonths%20%3A%3D%20%23%28-1%200%204.3%2013%29.%0D%09badMonths%20do%3A%5B%20%3Aeach%20%7C%20self%20should%3A%5BtestTime%20month%3A%20each%5D%20raise%3A%20Error%5D.%20"));
smalltalk.bind(smalltalk.DateTimeTestCase, unescape("testDayOfWeek"), "testDayOfWeek", function DateTimeTestCase__testDayOfWeek(){
var testTime = nil;
const self = this; testTime=self.dateForTest();
self.assert_equals_((testTime.dayOfWeek()),(5));
return self;
}
, "running", unescape("testDayOfWeek%0D%0D%09%7C%20testTime%20%7C%0D%09testTime%20%3A%3D%20self%20dateForTest.%0D%09self%0D%09%09assert%3A%20testTime%20dayOfWeek%0D%09%09equals%3A%205.%20"));
smalltalk.bind(smalltalk.DateTimeTestCase, unescape("testDayOfMonth"), "testDayOfMonth", function DateTimeTestCase__testDayOfMonth(){
var testTime = nil;
var badDays = nil;
const self = this; testTime=self.dateForTest();
self.assert_equals_((testTime.dayOfMonth()),(5));
testTime.dayOfMonth_(((1).yourself()));
self.assert_equals_((testTime.dayOfMonth()),(1));
badDays=[(-1), (0), (15.7), (32)];
badDays.do_((function DateTimeTestCase__(each){
return self.should_raise_((function DateTimeTestCase__(){
return testTime.dayOfMonth_(each);
}
),smalltalk.Error);
}
));
return self;
}
, "running", unescape("testDayOfMonth%0D%0D%09%7C%20testTime%20badDays%20%7C%0D%09testTime%20%3A%3D%20self%20dateForTest.%0D%09self%0D%09%09assert%3A%20testTime%20dayOfMonth%0D%09%09equals%3A%205.%0D%09testTime%20dayOfMonth%3A%201%20yourself.%0D%09self%0D%09%09assert%3A%20testTime%20dayOfMonth%0D%09%09equals%3A%201.%0D%09badDays%20%3A%3D%20%23%28-1%200%2015.7%2032%29.%0D%09badDays%20do%3A%5B%20%3Aeach%20%7C%20self%20should%3A%5BtestTime%20dayOfMonth%3A%20each%5D%20raise%3A%20Error%5D.%20"));
smalltalk.bind(smalltalk.DateTimeTestCase, unescape("testTime"), "testTime", function DateTimeTestCase__testTime(){
var testTime = nil;
const self = this; testTime=smalltalk.DateTime.fromSeconds_((1530810916));
self.assert_equals_((testTime.time()),(1530810916000));
testTime.time_(((1).yourself()));
self.assert_equals_((testTime.time()),(1));
return self;
}
, "running", unescape("testTime%0D%0D%09%7C%20testTime%20%7C%0D%09testTime%20%3A%3D%20DateTime%20fromSeconds%3A%201530810916.%0D%09self%0D%09%09assert%3A%20testTime%20time%0D%09%09equals%3A%201530810916000.%0D%09testTime%20time%3A%201%20yourself.%0D%09self%0D%09%09assert%3A%20testTime%20time%0D%09%09equals%3A%201.%20"));
smalltalk.bind(smalltalk.DateTimeTestCase, unescape("testMinutes"), "testMinutes", function DateTimeTestCase__testMinutes(){
var testTime = nil;
var badMinutes = nil;
const self = this; testTime=self.dateForTest();
testTime.minutes_(((45).yourself()));
self.assert_equals_((testTime.minutes()),(45));
badMinutes=[[], (-1), (60), true, false, "43"];
badMinutes.do_((function DateTimeTestCase__(each){
return self.should_raise_((function DateTimeTestCase__(){
return testTime.minutes_(each);
}
),smalltalk.Error);
}
));
return self;
}
, "running", unescape("testMinutes%0D%0D%09%7C%20testTime%20badMinutes%7C%0D%09testTime%20%3A%3D%20self%20dateForTest.%0D%09testTime%20minutes%3A%2045%20yourself.%0D%09self%0D%09%09assert%3A%20testTime%20minutes%0D%09%09equals%3A%2045.%0D%09badMinutes%20%3A%3D%20%23%28%23%28%29%20-1%2060%20true%20false%20%2743%27%29.%0D%09badMinutes%20do%3A%20%5B%20%3Aeach%20%7C%20self%20should%3A%5BtestTime%20minutes%3A%20each%5D%20raise%3A%20Error%5D.%20"));
smalltalk.bind(smalltalk.DateTimeTestCase, unescape("testSeconds"), "testSeconds", function DateTimeTestCase__testSeconds(){
var testTime = nil;
var badSeconds = nil;
const self = this; testTime=self.dateForTest();
self.assert_equals_((testTime.seconds()),(16));
self.should_raise_((function DateTimeTestCase__(){
return testTime.seconds_((87));
}
),smalltalk.Error);
testTime.seconds_(((10).yourself()));
self.assert_equals_((testTime.seconds()),(10));
badSeconds=[(-1), (50.4), (60), (61)];
badSeconds.do_((function DateTimeTestCase__(each){
return self.should_raise_((function DateTimeTestCase__(){
return testTime.seconds_(each);
}
),smalltalk.Error);
}
));
testTime=smalltalk.DateTime.fromSeconds_((12345));
self.assert_equals_((testTime.asSeconds()),(12345));
return self;
}
, "running", unescape("testSeconds%0D%0D%09%7C%20testTime%20badSeconds%20%7C%0D%09testTime%20%3A%3D%20self%20dateForTest.%0D%09self%0D%09%09assert%3A%20testTime%20seconds%0D%09%09equals%3A%2016.%0D%09self%0D%09%09should%3A%5BtestTime%20seconds%3A%2087%5D%0D%09%09raise%3A%20Error.%0D%09testTime%20seconds%3A%2010%20yourself.%0D%09self%0D%09%09assert%3A%20testTime%20seconds%0D%09%09equals%3A%2010.%0D%09badSeconds%20%3A%3D%20%23%28-1%2050.4%2060%2061%29.%0D%09badSeconds%20do%3A%5B%20%3Aeach%20%7C%20self%20should%3A%5BtestTime%20seconds%3A%20each%5D%20raise%3A%20Error%5D.%0D%09testTime%20%3A%3D%20DateTime%20fromSeconds%3A%2012345.%0D%09self%0D%09%09assert%3A%20testTime%20asSeconds%0D%09%09equals%3A%2012345.%20"));
smalltalk.bind(smalltalk.DateTimeTestCase, unescape("testMilliseconds"), "testMilliseconds", function DateTimeTestCase__testMilliseconds(){
var testTime = nil;
var badMilliseconds = nil;
const self = this; testTime=self.dateForTest();
self.assert_equals_((testTime.milliseconds()),(0));
testTime.milliseconds_(((6).yourself()));
self.assert_equals_((testTime.milliseconds()),(6));
badMilliseconds=[(-1), (1000.1), (1001)];
badMilliseconds.do_((function DateTimeTestCase__(each){
return self.should_raise_((function DateTimeTestCase__(){
return testTime.milliseconds_(each);
}
),smalltalk.Error);
}
));
return self;
}
, "running", unescape("testMilliseconds%0D%0D%09%7C%20testTime%20badMilliseconds%20%7C%0D%09testTime%20%3A%3D%20self%20dateForTest.%0D%09self%0D%09%09assert%3A%20testTime%20milliseconds%0D%09%09equals%3A%200.%0D%09testTime%20milliseconds%3A%206%20yourself.%0D%09self%0D%09%09assert%3A%20testTime%20milliseconds%0D%09%09equals%3A%206.%0D%09badMilliseconds%20%3A%3D%20%23%28-1%201000.1%201001%29.%0D%09badMilliseconds%20do%3A%5B%20%3Aeach%20%7C%20self%20should%3A%5BtestTime%20milliseconds%3A%20each%5D%20raise%3A%20Error%5D.%20"));
smalltalk.bind(smalltalk.DateTimeTestCase, unescape("testLessThanaDateTime"), "testLessThanaDateTime", function DateTimeTestCase__testLessThanaDateTime(){
var testTime = nil;
var prevTime = nil;
const self = this; testTime=self.dateForTest();
prevTime=smalltalk.DateTime.fromSeconds_((((self.dateForTest()).seconds())._minus((1))));
self.assert_((prevTime._lt(testTime)));
self.deny_(((smalltalk.DateTime.now())._lt(testTime)));
self.should_raise_((function DateTimeTestCase__(){
return testTime._lt((1));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testLessThanaDateTime%0D%0D%09%7C%20testTime%20prevTime%20%7C%0D%09testTime%20%3A%3D%20self%20dateForTest.%0D%09prevTime%20%3A%3D%20DateTime%20fromSeconds%3A%20self%20dateForTest%20seconds%20-%201.%0D%09self%20assert%3A%20prevTime%20%3C%20testTime.%0D%09self%20deny%3A%20DateTime%20now%20%3C%20testTime.%0D%09self%0D%09%09should%3A%20%5BtestTime%20%3C%201%5D%0D%09%09raise%3A%20Error.%20"));
smalltalk.bind(smalltalk.DateTimeTestCase, unescape("testGreaterThanaDateTime"), "testGreaterThanaDateTime", function DateTimeTestCase__testGreaterThanaDateTime(){
var testTime = nil;
var prevTime = nil;
const self = this; testTime=self.dateForTest();
prevTime=smalltalk.DateTime.fromSeconds_((((self.dateForTest()).seconds())._minus((1))));
self.deny_((prevTime._gt(testTime)));
self.assert_(((smalltalk.DateTime.now())._gt(testTime)));
self.should_raise_((function DateTimeTestCase__(){
return testTime._gt((1));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testGreaterThanaDateTime%0D%0D%09%7C%20testTime%20prevTime%20%7C%0D%09testTime%20%3A%3D%20self%20dateForTest.%0D%09prevTime%20%3A%3D%20DateTime%20fromSeconds%3A%20self%20dateForTest%20seconds%20-%201.%0D%09self%20deny%3A%20prevTime%20%3E%20testTime.%0D%09self%20assert%3A%20DateTime%20now%20%3E%20testTime.%0D%09self%0D%09%09should%3A%20%5BtestTime%20%3E%201%5D%0D%09%09raise%3A%20Error.%20"));
smalltalk.bind(smalltalk.DateTimeTestCase, unescape("testLessThanEqualaDateTime"), "testLessThanEqualaDateTime", function DateTimeTestCase__testLessThanEqualaDateTime(){
var testTime = nil;
var prevTime = nil;
const self = this; testTime=self.dateForTest();
prevTime=smalltalk.DateTime.fromSeconds_((((self.dateForTest()).seconds())._minus((1))));
self.assert_((prevTime._lt_eq(testTime)));
self.deny_(((smalltalk.DateTime.now())._lt_eq(testTime)));
prevTime=smalltalk.DateTime.fromSeconds_(((self.dateForTest()).seconds()));
self.assert_((prevTime._lt_eq(testTime)));
self.should_raise_((function DateTimeTestCase__(){
return testTime._lt_eq((1));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testLessThanEqualaDateTime%0D%0D%09%7C%20testTime%20prevTime%20%7C%0D%09testTime%20%3A%3D%20self%20dateForTest.%0D%09prevTime%20%3A%3D%20DateTime%20fromSeconds%3A%20self%20dateForTest%20seconds%20-%201.%0D%09self%20assert%3A%20prevTime%20%3C%3D%20testTime.%0D%09self%20deny%3A%20DateTime%20now%20%3C%3D%20testTime.%0D%09prevTime%20%3A%3D%20DateTime%20fromSeconds%3A%20self%20dateForTest%20seconds.%0D%09self%20assert%3A%20prevTime%20%3C%3D%20testTime.%0D%09self%0D%09%09should%3A%20%5BtestTime%20%3C%3D%201%5D%0D%09%09raise%3A%20Error.%20"));
smalltalk.bind(smalltalk.DateTimeTestCase, unescape("testGreaterThanEqualaDateTime"), "testGreaterThanEqualaDateTime", function DateTimeTestCase__testGreaterThanEqualaDateTime(){
var testTime = nil;
var prevTime = nil;
const self = this; testTime=self.dateForTest();
prevTime=smalltalk.DateTime.fromSeconds_((((self.dateForTest()).seconds())._minus((1))));
self.deny_((prevTime._gt_eq(testTime)));
self.assert_(((smalltalk.DateTime.now())._gt_eq(testTime)));
prevTime=self.dateForTest();
self.assert_((prevTime._gt_eq(testTime)));
self.should_raise_((function DateTimeTestCase__(){
return testTime._gt_eq((1));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testGreaterThanEqualaDateTime%0D%0D%09%7C%20testTime%20prevTime%20%7C%0D%09testTime%20%3A%3D%20self%20dateForTest.%0D%09prevTime%20%3A%3D%20DateTime%20fromSeconds%3A%20self%20dateForTest%20seconds%20-%201.%0D%09self%20deny%3A%20prevTime%20%3E%3D%20testTime.%0D%09self%20assert%3A%20DateTime%20now%20%3E%3D%20testTime.%0D%09prevTime%20%3A%3D%20self%20dateForTest.%0D%09self%20assert%3A%20prevTime%20%3E%3D%20testTime.%0D%09self%0D%09%09should%3A%20%5BtestTime%20%3E%3D%201%5D%0D%09%09raise%3A%20Error.%20"));
smalltalk.bind(smalltalk.DateTimeTestCase, unescape("testSubtractaDateTime"), "testSubtractaDateTime", function DateTimeTestCase__testSubtractaDateTime(){
var currentTime = nil;
var futureTime = nil;
var elapsed = nil;
const self = this; currentTime=smalltalk.DateTime.fromSeconds_((1530899240));
futureTime=smalltalk.DateTime.fromSeconds_((1530899279));
elapsed=futureTime._minus(currentTime);
self.assert_equals_(elapsed,(39));
return self;
}
, "running", unescape("testSubtractaDateTime%0D%0D%09%7C%20currentTime%20futureTime%20elapsed%20%7C%0D%09currentTime%20%3A%3D%20DateTime%20fromSeconds%3A%201530899240.%0D%09futureTime%20%20%3A%3D%20DateTime%20fromSeconds%3A%201530899279.%0D%09elapsed%20%3A%3D%20futureTime%20-%20currentTime.%0D%09self%0D%09%09assert%3A%20elapsed%0D%09%09equals%3A%2039.%20"));
smalltalk.bind(smalltalk.DateTimeTestCase, unescape("testAddaDateTime"), "testAddaDateTime", function DateTimeTestCase__testAddaDateTime(){
var currentTime = nil;
var futureTime = nil;
var elapsed = nil;
const self = this; currentTime=smalltalk.DateTime.fromSeconds_((150));
futureTime=smalltalk.DateTime.fromSeconds_((150));
elapsed=futureTime._plus(currentTime);
self.assert_equals_(elapsed,(300));
return self;
}
, "running", unescape("testAddaDateTime%0D%0D%09%7C%20currentTime%20futureTime%20elapsed%20%7C%0D%09currentTime%20%3A%3D%20DateTime%20fromSeconds%3A%20150.%0D%09futureTime%20%20%3A%3D%20DateTime%20fromSeconds%3A%20150.%0D%09elapsed%20%3A%3D%20futureTime%20+%20currentTime.%0D%09self%0D%09%09assert%3A%20elapsed%0D%09%09equals%3A%20300.%20"));
smalltalk.bind(smalltalk.DateTimeTestCase, unescape("testIsValid"), "testIsValid", function DateTimeTestCase__testIsValid(){
const self = this; self.assert_(((smalltalk.DateTime.now()).isValid()));
return self;
}
, "running", unescape("testIsValid%0D%0D%09self%20assert%3A%20DateTime%20now%20isValid.%20"));
smalltalk.bind(smalltalk.DateTimeTestCase, unescape("testNewFromString"), "testNewFromString", function DateTimeTestCase__testNewFromString(){
var testDate = nil;
const self = this; testDate=smalltalk.DateTime.fromString_(unescape("1962/12/15%2001%3A40%3A00"));
self.assert_equals_((testDate.toDateString()),"Sat Dec 15 1962");
self.assert_equals_((testDate.hours()),(1));
self.assert_equals_((testDate.minutes()),(40));
self.assert_equals_((testDate.seconds()),(0));
return self;
}
, "running", unescape("testNewFromString%0D%0D%09%7C%20testDate%20%7C%0D%09testDate%20%3A%3D%20DateTime%20fromString%3A%20%271962/12/15%2001%3A40%3A00%27.%0D%09self%0D%09%09assert%3A%20testDate%20toDateString%0D%09%09equals%3A%20%27Sat%20Dec%2015%201962%27.%0D%09self%0D%09%09assert%3A%20testDate%20hours%0D%09%09equals%3A%201.%0D%09self%0D%09%09assert%3A%20testDate%20minutes%0D%09%09equals%3A%2040.%0D%09self%0D%09%09assert%3A%20testDate%20seconds%0D%09%09equals%3A%200.%20"));
smalltalk.bind(smalltalk.DateTimeTestCase, unescape("testNewFromMilliseconds"), "testNewFromMilliseconds", function DateTimeTestCase__testNewFromMilliseconds(){
var testDate = nil;
const self = this; testDate=smalltalk.DateTime.fromMilliseconds_(((1531142162000).yourself()));
self.should_raise_((function DateTimeTestCase__(){
return testDate=smalltalk.DateTime.fromMilliseconds_(true);
}
),smalltalk.Error);
self.assert_equals_((testDate.time()),(1531142162000));
return self;
}
, "running", unescape("testNewFromMilliseconds%0D%0D%09%7C%20testDate%20%7C%0D%09testDate%20%3A%3D%20DateTime%20fromMilliseconds%3A%201531142162000%20yourself.%0D%09self%0D%09%09should%3A%20%5BtestDate%20%3A%3D%20DateTime%20fromMilliseconds%3A%20true%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09assert%3A%20testDate%20time%0D%09%09equals%3A%201531142162000"));
smalltalk.bind(smalltalk.DateTimeTestCase, unescape("testEqualityIdentityCoercionRegression"), "testEqualityIdentityCoercionRegression", function DateTimeTestCase__testEqualityIdentityCoercionRegression(){
var dt = nil;
var ms = nil;
const self = this; dt=smalltalk.DateTime.now();
ms=dt.asMilliseconds();
self.assert_equals_((ms.$klass),smalltalk.Number);
(function DateTimeTestCase__($1$){
$1$.assert_((dt._eq(dt)));
$1$.assert_(((nil.is_eqeq_(dt,dt))));
$1$.deny_((dt._eq(ms)));
$1$.deny_((ms._eq(dt)));
$1$.deny_(((nil.is_eqeq_(dt,ms))));
return $1$.deny_(((nil.is_eqeq_(ms,dt))))}
)(self);
return self;
}
, "running", unescape("testEqualityIdentityCoercionRegression%0D%09%22Ensure%20DateTime%20does%20not%20coerce%20to%0D%09a%20Number%20during%20comparison%22%0D%0D%09%7C%20dt%20ms%20%7C%0D%09dt%20%3A%3D%20DateTime%20now.%0D%09ms%20%3A%3D%20dt%20asMilliseconds.%0D%09self%0D%09%09assert%3A%20ms%20class%0D%09%09equals%3A%20Number.%0D%09self%0D%09%09assert%3A%20dt%20%3D%20dt%3B%0D%09%09assert%3A%20dt%20%3D%3D%20dt%3B%0D%09%09deny%3A%20dt%20%3D%20ms%3B%0D%09%09deny%3A%20ms%20%3D%20dt%3B%0D%09%09deny%3A%20dt%20%3D%3D%20ms%3B%0D%09%09deny%3A%20ms%20%3D%3D%20dt"));
smalltalk.bind(smalltalk.DateTimeTestCase, unescape("testEqualityIdentityRegression"), "testEqualityIdentityRegression", function DateTimeTestCase__testEqualityIdentityRegression(){
var seconds = nil;
var dt1 = nil;
var dt2 = nil;
var dt3 = nil;
const self = this; seconds=(1551991364);
dt1=smalltalk.DateTime.fromSeconds_(seconds);
dt2=smalltalk.DateTime.fromSeconds_(seconds);
dt3=smalltalk.DateTime.fromSeconds_((seconds._plus((60))));
(function DateTimeTestCase__($1$){
$1$.assert_((dt1._eq(dt1)));
$1$.assert_(((nil.is_eqeq_(dt1,dt1))));
$1$.assert_((dt1._eq(dt2)));
$1$.assert_((dt2._eq(dt1)));
$1$.deny_(((nil.is_eqeq_(dt1,dt2))));
$1$.deny_(((nil.is_eqeq_(dt2,dt1))));
$1$.deny_((dt1._eq(dt3)));
$1$.deny_((dt3._eq(dt1)));
$1$.deny_(((nil.is_eqeq_(dt1,dt3))));
return $1$.deny_(((nil.is_eqeq_(dt3,dt1))))}
)(self);
return self;
}
, "running", unescape("testEqualityIdentityRegression%0D%0D%09%7C%20seconds%20dt1%20dt2%20dt3%20%7C%0D%09seconds%20%3A%3D%201551991364.%0D%09dt1%20%3A%3D%20DateTime%20fromSeconds%3A%20seconds.%0D%09dt2%20%3A%3D%20DateTime%20fromSeconds%3A%20seconds.%0D%09dt3%20%3A%3D%20DateTime%20fromSeconds%3A%20seconds%20+%2060.%0D%09self%0D%09%09assert%3A%20dt1%20%3D%20dt1%3B%0D%09%09assert%3A%20dt1%20%3D%3D%20dt1%3B%0D%09%09assert%3A%20dt1%20%3D%20dt2%3B%0D%09%09assert%3A%20dt2%20%3D%20dt1%3B%0D%09%09deny%3A%20dt1%20%3D%3D%20dt2%3B%0D%09%09deny%3A%20dt2%20%3D%3D%20dt1%3B%0D%09%09deny%3A%20dt1%20%3D%20dt3%3B%0D%09%09deny%3A%20dt3%20%3D%20dt1%3B%0D%09%09deny%3A%20dt1%20%3D%3D%20dt3%3B%0D%09%09deny%3A%20dt3%20%3D%3D%20dt1"));
smalltalk.bind(smalltalk.DateTimeTestCase, unescape("testAddToOrderedCollectionRegression"), "testAddToOrderedCollectionRegression", function DateTimeTestCase__testAddToOrderedCollectionRegression(){
var dt = nil;
var oc = nil;
var assertBlock = nil;
const self = this; dt=smalltalk.DateTime.now();
oc=smalltalk.OrderedCollection.$$new();
assertBlock=(function DateTimeTestCase__(element){
self.assert_equals_((element.$klass),smalltalk.DateTime);
return self.assert_(((nil.is_eqeq_(dt,element))));
}
);
oc.add_(dt);
self.assert_equals_((oc.size()),(1));
oc.do_(assertBlock);
oc.addFirst_(dt);
self.assert_equals_((oc.size()),(2));
oc.do_(assertBlock);
oc.addLast_(dt);
self.assert_equals_((oc.size()),(3));
oc.do_(assertBlock);
return self;
}
, "running", unescape("testAddToOrderedCollectionRegression%0D%09%22Ensure%20that%20adding%20a%20DateTime%0D%09to%20an%20OrderedCollection%20results%0D%09in%20the%20DateTime%20getting%20stored%0D%09instead%20of%20a%20Number.%22%0D%0D%09%7C%20dt%20oc%20assertBlock%20%7C%0D%09dt%20%3A%3D%20DateTime%20now.%0D%09oc%20%3A%3D%20OrderedCollection%20new.%0D%09assertBlock%20%3A%3D%20%0D%09%09%5B%3Aelement%20%7C%0D%09%09self%0D%09%09%09assert%3A%20element%20class%0D%09%09%09equals%3A%20DateTime.%0D%09%09self%20assert%3A%20dt%20%3D%3D%20element%5D.%0D%09%22%23add%3A%22%0D%09oc%20add%3A%20dt.%0D%09self%0D%09%09assert%3A%20oc%20size%0D%09%09equals%3A%201.%0D%09oc%20do%3A%20assertBlock.%0D%09%22%23addFirst%3A%22%0D%09oc%20addFirst%3A%20dt.%0D%09self%0D%09%09assert%3A%20oc%20size%0D%09%09equals%3A%202.%0D%09oc%20do%3A%20assertBlock.%0D%09%22%23addLast%3A%22%0D%09oc%20addLast%3A%20dt.%0D%09self%0D%09%09assert%3A%20oc%20size%0D%09%09equals%3A%203.%0D%09oc%20do%3A%20assertBlock"));
smalltalk.bind(smalltalk.DateTimeTestCase, unescape("testPropertiesRegression"), "testPropertiesRegression", function DateTimeTestCase__testPropertiesRegression(){
var host = nil;
var dt = nil;
var propertyName = nil;
var extractedDt = nil;
const self = this; host=smalltalk.Object.$$new();
dt=smalltalk.DateTime.now();
propertyName="dateTime";
host.propertyAt_put_(propertyName,dt);
extractedDt=host.propertyAt_(propertyName);
self.assert_equals_((extractedDt.$klass),smalltalk.DateTime);
self.assert_(((nil.is_eqeq_(dt,extractedDt))));
return self;
}
, "running", unescape("testPropertiesRegression%0D%0D%09%7C%20host%20dt%20propertyName%20extractedDt%20%7C%0D%09host%20%3A%3D%20Object%20new.%0D%09dt%20%3A%3D%20DateTime%20now.%0D%09propertyName%20%3A%3D%20%23dateTime.%0D%09host%0D%09%09propertyAt%3A%20propertyName%0D%09%09put%3A%20dt.%0D%09extractedDt%20%3A%3D%20host%20propertyAt%3A%20propertyName.%0D%09self%0D%09%09assert%3A%20extractedDt%20class%0D%09%09equals%3A%20DateTime.%0D%09self%20assert%3A%20dt%20%3D%3D%20extractedDt"));
