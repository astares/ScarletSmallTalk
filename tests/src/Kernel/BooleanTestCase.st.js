smalltalk.addClass("BooleanTestCase", smalltalk.TestCase, [], 'nil');
smalltalk.BooleanTestCase.$classVariableNames=("");
smalltalk.bind(smalltalk.BooleanTestCase, unescape("testEquals"), "testEquals", function BooleanTestCase__testEquals(){
var badVals = nil;
const self = this; badVals=[(1), "", [], "2", [(2)], nil];
badVals.do_((function BooleanTestCase__(each){
return self.deny_((true._eq(badVals)));
}
));
self.assert_((true._eq(((1)._eq((1))))));
self.assert_((false._eq(((1)._gt((10))))));
self.assert_((true._eq(true)));
self.assert_((false._eq(false)));
self.deny_((true._eq(false)));
self.deny_((false._eq(true)));
self.deny_(((true.yourself())._eq(false)));
self.assert_(((true.yourself())._eq(true)));
self.deny_(((false.yourself())._eq(true)));
return self;
}
, "running", unescape("testEquals%0D%0D%09%7C%20badVals%20%7C%0D%09badVals%20%3A%3D%20%23%281%20%27%27%20%23%28%29%20%272%27%20%23%282%29%20nil%29.%0D%09badVals%20do%3A%20%5B%3Aeach%20%7C%20self%20deny%3A%20true%20%3D%20badVals%5D.%0D%09self%20assert%3A%20%28true%20%3D%20%281%20%3D%201%29%29.%0D%09self%20assert%3A%20%28false%20%3D%20%281%20%3E%2010%29%29.%0D%09self%20assert%3A%20true%20%3D%20true.%0D%09self%20assert%3A%20false%20%3D%20false.%0D%09self%20deny%3A%20true%20%3D%20false.%0D%09self%20deny%3A%20false%20%3D%20true.%0D%09self%20deny%3A%20%28true%20yourself%29%20%3D%20false.%0D%09self%20assert%3A%20%28true%20yourself%29%20%3D%20true.%0D%09self%20deny%3A%20%28false%20yourself%29%20%3D%20true.%20"));
smalltalk.bind(smalltalk.BooleanTestCase, unescape("testIfTrue"), "testIfTrue", function BooleanTestCase__testIfTrue(){
const self = this; self.assert_equals_((true.ifTrue_((function BooleanTestCase__(){
return (3)._plus((2));
}
))),(5));
self.assert_equals_((false.ifTrue_((function BooleanTestCase__(){
return (3)._plus((2));
}
))),nil);
self.assert_equals_((true.ifTrue_((4))),(4));
return self;
}
, "running", unescape("testIfTrue%0D%0D%09self%0D%09%09assert%3A%20%28true%20ifTrue%3A%20%5B3%20+%202%5D%29%0D%09%09equals%3A%205.%0D%09self%0D%09%09assert%3A%20%28false%20ifTrue%3A%20%5B3%20+%202%5D%29%0D%09%09equals%3A%20nil.%0D%09self%0D%09%09assert%3A%20%28true%20ifTrue%3A%204%29%0D%09%09equals%3A%204.%0D%22%09self%0D%09%09assert%3A%20%5B%28false%20ifTrue%3A%204%29%5D%0D%09%09equals%3A%20nil.%22%20"));
smalltalk.bind(smalltalk.BooleanTestCase, unescape("testIfFalse"), "testIfFalse", function BooleanTestCase__testIfFalse(){
const self = this; self.assert_equals_((false.ifFalse_((function BooleanTestCase__(){
return (2)._plus((2));
}
))),(4));
self.assert_equals_((true.ifFalse_((function BooleanTestCase__(){
return (2)._plus((2));
}
))),nil);
return self;
}
, "running", unescape("testIfFalse%0D%0D%09self%0D%09%09assert%3A%20%28false%20ifFalse%3A%20%5B2%20+%202%5D%29%0D%09%09equals%3A%204.%0D%09self%0D%09%09assert%3A%20%28true%20ifFalse%3A%20%5B2%20+%202%5D%29%0D%09%09equals%3A%20nil.%0D%22%09self%0D%09%09assert%3A%20%5B%28false%20ifFalse%3A%204%29%5D%0D%09%09equals%3A%204.%0D%09self%0D%09%09assert%3A%20%5B%28false%20ifTrue%3A%204%29%5D%0D%09%09equals%3A%20nil.%20%22"));
smalltalk.bind(smalltalk.BooleanTestCase, unescape("testIfTrueIfFalse"), "testIfTrueIfFalse", function BooleanTestCase__testIfTrueIfFalse(){
const self = this; self.assert_equals_((true.ifTrue_ifFalse_((function BooleanTestCase__(){
return (1);
}
),(function BooleanTestCase__(){
return (2);
}
))),(1));
self.assert_equals_((false.ifTrue_ifFalse_((function BooleanTestCase__(){
return (1);
}
),(function BooleanTestCase__(){
return (2);
}
))),(2));
return self;
}
, "running", unescape("testIfTrueIfFalse%0D%0D%09self%0D%09%09assert%3A%20%28true%20ifTrue%3A%20%5B1%5D%20ifFalse%3A%20%5B2%5D%29%0D%09%09equals%3A%201.%0D%09self%0D%09%09assert%3A%20%28false%20ifTrue%3A%20%5B1%5D%20ifFalse%3A%20%5B2%5D%29%0D%09%09equals%3A%202.%0D%22%09self%0D%09%09assert%3A%20%5B%28false%20ifTrue%3A%20%5B1%5D%20ifFalse%3A%202%29%5D%0D%09%09equals%3A%202.%22%20"));
smalltalk.bind(smalltalk.BooleanTestCase, unescape("testIfFalseIfTrue"), "testIfFalseIfTrue", function BooleanTestCase__testIfFalseIfTrue(){
const self = this; self.assert_equals_((true.ifFalse_ifTrue_((function BooleanTestCase__(){
return (1);
}
),(function BooleanTestCase__(){
return (2);
}
))),(2));
return self;
}
, "running", unescape("testIfFalseIfTrue%0D%0D%09self%0D%09%09assert%3A%20%28true%20ifFalse%3A%20%5B1%5D%20ifTrue%3A%20%5B2%5D%29%0D%09%09equals%3A%202.%0D%22%09self%0D%09%09assert%3A%20%28false%20ifFalse%3A%20%5B1%5D%20ifTrue%3A%20%5B2%5D%29%0D%09%09equals%3A%201.%0D%09self%0D%09%09assert%3A%20%5B%28false%20ifTrue%3A%20%23%28%29%20ifFalse%3A%202%29%5D%0D%09%09equals%3A%202.%20%22"));
smalltalk.bind(smalltalk.BooleanTestCase, unescape("testNot"), "testNot", function BooleanTestCase__testNot(){
const self = this; self.assert_((false.not()));
self.deny_((true.not()));
return self;
}
, "running", unescape("testNot%0D%0D%09self%20assert%3A%20false%20not.%0D%09self%20deny%3A%20true%20not%20"));
smalltalk.bind(smalltalk.BooleanTestCase, unescape("testPrintString"), "testPrintString", function BooleanTestCase__testPrintString(){
const self = this; self.assert_equals_((true.printString()),"true");
self.assert_equals_((false.printString()),"false");
return self;
}
, "running", unescape("testPrintString%0D%0D%09self%0D%09%09assert%3A%20true%20printString%0D%09%09equals%3A%20%27true%27.%0D%09self%0D%09%09assert%3A%20false%20printString%0D%09%09equals%3A%20%27false%27.%20"));
smalltalk.bind(smalltalk.BooleanTestCase, unescape("testAnd"), "testAnd", function BooleanTestCase__testAnd(){
const self = this; (function BooleanTestCase__($1$){
$1$.deny_((false.and_((function BooleanTestCase__(){
return false;
}
))));
$1$.deny_((false.and_((function BooleanTestCase__(){
return true;
}
))));
$1$.deny_((true.and_((function BooleanTestCase__(){
return false;
}
))));
return $1$.assert_((true.and_((function BooleanTestCase__(){
return true;
}
))))}
)(self);
self.should_raise_((function BooleanTestCase__(){
return true.and_(true);
}
),smalltalk.Error);
return self;
}
, "running", unescape("testAnd%0D%0D%09self%20%0D%09%09deny%3A%20%28false%20and%3A%20%5Bfalse%5D%29%3B%0D%09%09deny%3A%20%28false%20and%3A%20%5Btrue%5D%29%3B%0D%09%09deny%3A%20%28true%20and%3A%20%5Bfalse%5D%29%3B%0D%09%09assert%3A%20%28true%20and%3A%20%5Btrue%5D%29.%0D%09self%0D%09%09should%3A%20%5Btrue%20and%3A%20true%5D%0D%09%09raise%3A%20Error%20"));
smalltalk.bind(smalltalk.BooleanTestCase, unescape("testOr"), "testOr", function BooleanTestCase__testOr(){
const self = this; (function BooleanTestCase__($1$){
$1$.deny_((false.or_((function BooleanTestCase__(){
return false;
}
))));
$1$.assert_((false.or_((function BooleanTestCase__(){
return true;
}
))));
$1$.assert_((true.or_((function BooleanTestCase__(){
return false;
}
))));
return $1$.assert_((true.or_((function BooleanTestCase__(){
return true;
}
))))}
)(self);
self.should_raise_((function BooleanTestCase__(){
return true.or_(true);
}
),smalltalk.Error);
return self;
}
, "running", unescape("testOr%0D%0D%09self%0D%09%09deny%3A%20%28false%20or%3A%20%5Bfalse%5D%29%3B%0D%09%09assert%3A%20%28false%20or%3A%20%5Btrue%5D%29%3B%0D%09%09assert%3A%20%28true%20or%3A%20%5Bfalse%5D%29%3B%0D%09%09assert%3A%20%28true%20or%3A%20%5Btrue%5D%29.%0D%09self%0D%09%09should%3A%20%5Btrue%20or%3A%20true%5D%0D%09%09raise%3A%20Error%20"));
smalltalk.bind(smalltalk.BooleanTestCase, unescape("testAmpersand"), "testAmpersand", function BooleanTestCase__testAmpersand(){
const self = this; (function BooleanTestCase__($1$){
$1$.deny_((false._amp(false)));
$1$.deny_((false._amp(true)));
$1$.deny_((true._amp(false)));
return $1$.assert_((true._amp(true)))}
)(self);
self.should_raise_((function BooleanTestCase__(){
return true._amp((function BooleanTestCase__(){
return true;
}
));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testAmpersand%0D%0D%09self%0D%09%09deny%3A%20%28false%20%26%20false%29%3B%0D%09%09deny%3A%20%28false%20%26%20true%29%3B%0D%09%09deny%3A%20%28true%20%26%20false%29%3B%0D%09%09assert%3A%20%28true%20%26%20true%29.%0D%09self%0D%09%09should%3A%20%5Btrue%20%26%20%5Btrue%5D%5D%0D%09%09raise%3A%20Error%20"));
smalltalk.bind(smalltalk.BooleanTestCase, unescape("testPipeSymbol"), "testPipeSymbol", function BooleanTestCase__testPipeSymbol(){
const self = this; (function BooleanTestCase__($1$){
$1$.deny_((false._bar(false)));
$1$.assert_((false._bar(true)));
$1$.assert_((true._bar(false)));
return $1$.assert_((true._bar(true)))}
)(self);
self.should_raise_((function BooleanTestCase__(){
return true._bar((function BooleanTestCase__(){
return false;
}
));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testPipeSymbol%0D%0D%09self%0D%09%09deny%3A%20%28false%20%7C%20false%29%3B%0D%09%09assert%3A%20%28false%20%7C%20true%29%3B%0D%09%09assert%3A%20%28true%20%7C%20false%29%3B%0D%09%09assert%3A%20%28true%20%7C%20true%29.%0D%09self%0D%09%09should%3A%20%5Btrue%20%7C%20%5Bfalse%5D%5D%0D%09%09raise%3A%20Error%20"));
