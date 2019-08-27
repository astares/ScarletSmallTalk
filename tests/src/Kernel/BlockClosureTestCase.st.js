smalltalk.addClass("BlockClosureTestCase", smalltalk.TestCase, [], 'nil');
smalltalk.BlockClosureTestCase.$classVariableNames=("");
smalltalk.bind(smalltalk.BlockClosureTestCase, unescape("testWhileTrue"), "testWhileTrue", function BlockClosureTestCase__testWhileTrue(){
var val = nil;
const self = this; val=(0);
while((val._lt((10))).valueOf()){val=val._plus((1))};;
self.assert_equals_(val,(10));
while((false.yourself()).valueOf()){self.assert_(false)};;
return self;
}
, "running", unescape("testWhileTrue%0D%0D%09%7C%20val%20%7C%0D%09val%20%3A%3D%200.%0D%09%5Bval%20%3C%2010%5D%0D%09%09whileTrue%3A%20%5Bval%20%3A%3D%20val%20+%201%5D.%0D%09self%0D%09%09assert%3A%20val%0D%09%09equals%3A%2010.%0D%22%09self%0D%09%09should%3A%20%5B%5Bval%20%3C%2011%5D%20whileTrue%3A%20nil%5D%0D%09%09raise%3A%20Error.%0D%22%09%5Bfalse%20yourself%5D%20whileTrue%3A%20%5Bself%20assert%3A%20false%5D.%20"));
smalltalk.bind(smalltalk.BlockClosureTestCase, unescape("testWhileFalse"), "testWhileFalse", function BlockClosureTestCase__testWhileFalse(){
var val = nil;
const self = this; val=(0);
while((val._eq((10))).not()){val=val._plus((1))};;
self.assert_equals_(val,(10));
return self;
}
, "running", unescape("testWhileFalse%0D%0D%09%7C%20val%20%7C%0D%09val%20%3A%3D%200.%0D%09%5Bval%20%3D%2010%5D%0D%09%09whileFalse%3A%20%5Bval%20%3A%3D%20val%20+%201%5D.%0D%09self%0D%09%09assert%3Aval%0D%09%09equals%3A10.%0D%22%09self%0D%09%09should%3A%20%5B%5Bval%20%3E%2011%5D%20whileFalse%3A%20nil%5D%0D%09%09raise%3A%20Error.%22%20"));
smalltalk.bind(smalltalk.BlockClosureTestCase, unescape("testValue"), "testValue", function BlockClosureTestCase__testValue(){
const self = this; self.assert_equals_(((function BlockClosureTestCase__(){
return (2)._plus((2));
}
).value()),(4));
return self;
}
, "running", unescape("testValue%0D%0D%09self%0D%09%09assert%3A%20%5B2%20+%202%5D%20value%0D%09%09equals%3A%204.%20"));
smalltalk.bind(smalltalk.BlockClosureTestCase, unescape("testValueWithObject"), "testValueWithObject", function BlockClosureTestCase__testValueWithObject(){
const self = this; self.assert_equals_(((function BlockClosureTestCase__(x){
return x._plus((2));
}
).value_((3))),(5));
self.should_raise_((function BlockClosureTestCase__(){
return (function BlockClosureTestCase__(x){
return x._plus((2));
}
).value();
}
),smalltalk.Error);
return self;
}
, "running", unescape("testValueWithObject%0D%0D%09self%0D%09%09assert%3A%20%28%5B%20%3Ax%20%7C%20x%20+%202%5D%20value%3A%203%29%0D%09%09equals%3A%205.%0D%09self%0D%09%09should%3A%20%5B%28%5B%3Ax%20%7C%20x%20+%202%5D%20value%29%5D%0D%09%09raise%3A%20Error.%20"));
smalltalk.bind(smalltalk.BlockClosureTestCase, unescape("testValueWith2Objects"), "testValueWith2Objects", function BlockClosureTestCase__testValueWith2Objects(){
const self = this; self.should_raise_((function BlockClosureTestCase__(){
return (function BlockClosureTestCase__(x,y){
return x._plus(y);
}
).value();
}
),smalltalk.Error);
self.should_raise_((function BlockClosureTestCase__(){
return (function BlockClosureTestCase__(a,b){
return a._plus(b);
}
).value_((1));
}
),smalltalk.Error);
self.assert_equals_(((function BlockClosureTestCase__(x,y){
return x._plus(y);
}
).value_value_((3),(2))),(5));
return self;
}
, "running", unescape("testValueWith2Objects%0D%0D%09self%0D%09%09should%3A%20%5B%5B%3Ax%20%3Ay%20%7C%20x%20+%20y%5D%20value%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09should%3A%20%5B%5B%3Aa%20%3Ab%7C%20a%20+%20b%5D%20value%3A%201%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09assert%3A%20%28%5B%3Ax%20%3Ay%20%7C%20x%20+%20y%5D%20value%3A%203%20value%3A%202%29%0D%09%09equals%3A%205.%20"));
smalltalk.bind(smalltalk.BlockClosureTestCase, unescape("testValueWith3Objects"), "testValueWith3Objects", function BlockClosureTestCase__testValueWith3Objects(){
const self = this; self.should_raise_((function BlockClosureTestCase__(){
return (function BlockClosureTestCase__(x,y,z){
return (x._plus(y))._plus(z);
}
).value();
}
),smalltalk.Error);
self.should_raise_((function BlockClosureTestCase__(){
return (function BlockClosureTestCase__(a,b,c){
return (a._plus(b))._plus(c);
}
).value_value_((1),(2));
}
),smalltalk.Error);
self.assert_equals_(((function BlockClosureTestCase__(x,y,z){
return (x._plus(y))._plus(z);
}
).value_value_value_((1),(2),(3))),(6));
return self;
}
, "running", unescape("testValueWith3Objects%0D%0D%09self%0D%09%09should%3A%20%5B%5B%3Ax%20%3Ay%20%3Az%20%7C%20x%20+%20y%20+%20z%5D%20value%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09should%3A%20%5B%5B%3Aa%20%3Ab%20%3Ac%7C%20a%20+%20b%20+%20c%5D%20value%3A%201%20value%3A%202%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09assert%3A%20%28%5B%20%3Ax%20%3Ay%20%3Az%20%7C%20x%20+%20y%20+%20z%5D%20value%3A%201%20value%3A%202%20value%3A%203%29%0D%09%09equals%3A%206.%20"));
smalltalk.bind(smalltalk.BlockClosureTestCase, unescape("testValueWith4Objects"), "testValueWith4Objects", function BlockClosureTestCase__testValueWith4Objects(){
const self = this; self.should_raise_((function BlockClosureTestCase__(){
return (function BlockClosureTestCase__(a,b,c,d){
return ((a._plus(b))._plus(c))._plus(d);
}
).value();
}
),smalltalk.Error);
self.should_raise_((function BlockClosureTestCase__(){
return (function BlockClosureTestCase__(a,b,c,d){
return ((a._plus(b))._plus(c))._plus(d);
}
).value_value_value_((1),(2),(3));
}
),smalltalk.Error);
self.assert_equals_(((function BlockClosureTestCase__(a,b,c,d){
return ((a._plus(b))._plus(c))._plus(d);
}
).value_value_value_value_((25),(50),(20),(5))),(100));
return self;
}
, "running", unescape("testValueWith4Objects%0D%0D%09self%0D%09%09should%3A%20%5B%5B%3Aa%20%3Ab%20%3Ac%20%3Ad%20%7C%20a%20+%20b%20+%20c%20+%20d%5D%20value%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09should%3A%20%5B%5B%3Aa%20%3Ab%20%3Ac%20%3Ad%20%7C%20a%20+%20b%20+%20c%20+%20d%5D%20value%3A%201%20value%3A%202%20value%3A%203%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09assert%3A%20%28%5B%20%3Aa%20%3Ab%20%3Ac%20%3Ad%20%7C%20a%20+%20b%20+%20c%20+%20d%5D%20value%3A%2025%20value%3A%2050%20value%3A%2020%20value%3A%205%29%0D%09%09equals%3A%20100.%20"));
smalltalk.bind(smalltalk.BlockClosureTestCase, unescape("testValueWithArguments"), "testValueWithArguments", function BlockClosureTestCase__testValueWithArguments(){
const self = this; self.should_raise_((function BlockClosureTestCase__(){
return (function BlockClosureTestCase__(x,y){
return x._plus(y);
}
).valueWithArguments_([(1)]);
}
),smalltalk.Error);
self.should_raise_((function BlockClosureTestCase__(){
return (function BlockClosureTestCase__(x,y){
return x._plus(y);
}
).valueWithArguments_("");
}
),smalltalk.Error);
self.should_raise_((function BlockClosureTestCase__(){
return (function BlockClosureTestCase__(){
return (4);
}
).valueWithArguments_([(1), (2), (3)]);
}
),smalltalk.Error);
self.assert_equals_(((function BlockClosureTestCase__(){
return (4);
}
).valueWithArguments_([])),(4));
self.assert_equals_(((function BlockClosureTestCase__(x,y,z){
return ((x._plus(y))._plus(z))._plus((4));
}
).valueWithArguments_([(1), (2), (3)])),(10));
return self;
}
, "running", unescape("testValueWithArguments%0D%0D%09self%0D%09%09should%3A%20%5B%28%5B%3Ax%20%3Ay%20%7C%20x%20+%20y%5D%20valueWithArguments%3A%20%23%281%29%29%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09should%3A%20%5B%28%5B%3Ax%20%3Ay%20%7C%20x%20+%20y%5D%20valueWithArguments%3A%20%27%27%29%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09should%3A%20%5B%28%5B4%5D%20valueWithArguments%3A%20%23%281%202%203%29%29%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09assert%3A%20%28%5B4%5D%20valueWithArguments%3A%20%23%28%29%29%0D%09%09equals%3A%204.%0D%09self%0D%09%09assert%3A%20%28%5B%20%3Ax%20%3Ay%20%3Az%20%7C%20x%20+%20y%20+z%20+%204%5D%20valueWithArguments%3A%20%23%281%202%203%29%29%0D%09%09equals%3A%2010.%20"));
smalltalk.bind(smalltalk.BlockClosureTestCase, unescape("testOnDo"), "testOnDo", function BlockClosureTestCase__testOnDo(){
var val = nil;
const self = this; val=(0);
self.assert_equals_(((function BlockClosureTestCase__(){
return (1);
}
).on_do_((function BlockClosureTestCase__(){
return (smalltalk.Error.$$new()).Signal();
}
),(function BlockClosureTestCase__(){
return (2)._plus((2));
}
))),(1));
(function BlockClosureTestCase__(){
return self.error_("123");
}
).on_do_(smalltalk.Error,(function BlockClosureTestCase__(){
return val=(2);
}
));
self.assert_equals_(val,(2));
return self;
}
, "running", unescape("testOnDo%0D%09%7C%20val%20%7C%0D%09val%20%3A%3D%200.%0D%09self%0D%09%09assert%3A%20%28%5B1%5D%20on%3A%5BError%20new%20Signal%5D%20do%3A%20%5B2%20+%202%5D%29%0D%09%09equals%3A%201.%0D%09%28%5Bself%20error%3A%27123%27%5D%20on%3A%20Error%20do%3A%20%5Bval%20%3A%3D%202%5D%29.%0D%09self%0D%09%09assert%3A%20val%0D%09%09equals%3A%202.%20"));
smalltalk.bind(smalltalk.BlockClosureTestCase, unescape("testEnsure"), "testEnsure", function BlockClosureTestCase__testEnsure(){
var val = nil;
const self = this; (function BlockClosureTestCase__(){
return (3)._slash((4));
}
).ensure_((function BlockClosureTestCase__(){
return val=(1)._slash((2));
}
));
self.assert_equals_(val,((1)._slash((2))));
val=(0);
self.should_raise_((function BlockClosureTestCase__(){
return (function BlockClosureTestCase__(){
return (smalltalk.Error.$$new()).signal();
}
).ensure_((function BlockClosureTestCase__(){
return val=(3);
}
));
}
),smalltalk.Error);
self.assert_equals_(val,(3));
return self;
}
, "running", unescape("testEnsure%0D%09%7C%20val%20%7C%0D%09%28%5B3/4%5D%20ensure%3A%20%5Bval%20%3A%3D%201/2%5D%29.%0D%09self%0D%09%09assert%3A%20val%0D%09%09equals%3A%201/2.%0D%09val%20%3A%3D%200.%0D%09self%0D%09%09should%3A%20%5B%20%5BError%20new%20signal%20%5D%20ensure%3A%20%5B%20val%20%3A%3D%203%20%5D%5D%0D%09%09raise%3A%20Error.%0D%09%09self%0D%09%09%09assert%3A%20val%0D%09%09%09equals%3A%203.%20"));
smalltalk.bind(smalltalk.BlockClosureTestCase, unescape("testArguementCount"), "testArguementCount", function BlockClosureTestCase__testArguementCount(){
const self = this; self.assert_equals_(((function BlockClosureTestCase__(){
return nil;
}
).argumentCount()),(0));
self.assert_equals_(((function BlockClosureTestCase__(){
return (2);
}
).argumentCount()),(0));
self.assert_equals_(((function BlockClosureTestCase__(x){
return x;
}
).argumentCount()),(1));
self.assert_equals_(((function BlockClosureTestCase__(x,y,z){
return (x._plus(y))._plus(z);
}
).argumentCount()),(3));
return self;
}
, "running", unescape("testArguementCount%0D%0D%09self%0D%09%09assert%3A%20%5B%5D%20argumentCount%0D%09%09equals%3A%200.%0D%09self%0D%09%09assert%3A%20%5B2%5D%20argumentCount%0D%09%09equals%3A%200.%0D%09self%0D%09%09assert%3A%20%5B%3Ax%20%7C%20x%5D%20argumentCount%0D%09%09equals%3A%201.%0D%09self%0D%09%09assert%3A%20%5B%3Ax%20%3Ay%20%3Az%20%7C%20x%20+%20y%20+%20z%5D%20argumentCount%0D%09%09equals%3A%203.%20"));
smalltalk.bind(smalltalk.BlockClosureTestCase, unescape("testEquality"), "testEquality", function BlockClosureTestCase__testEquality(){
var generateBlock = nil;
var aBlock = nil;
const self = this; generateBlock=(function BlockClosureTestCase__(){
return (function BlockClosureTestCase__(){
return nil;
}
);
}
);
self.assert_equals_(generateBlock,generateBlock);
self.deny_equals_((generateBlock.value()),(generateBlock.value()));
self.deny_equals_((function BlockClosureTestCase__(){
return (function BlockClosureTestCase__(){
return nil;
}
);
}
),generateBlock);
return self;
}
, "running", unescape("testEquality%0D%0D%09%7C%20generateBlock%20aBlock%20%7C%0D%09generateBlock%20%3A%3D%20%5B%5B%5D%5D.%0D%09self%20%0D%09%09assert%3A%20generateBlock%0D%09%09equals%3A%20generateBlock.%0D%09self%0D%09%09deny%3A%20generateBlock%20value%0D%09%09equals%3A%20generateBlock%20value.%0D%09self%0D%09%09deny%3A%20%5B%5B%5D%5D%0D%09%09equals%3A%20generateBlock%20"));
smalltalk.bind(smalltalk.BlockClosureTestCase, unescape("testDoubleEquality"), "testDoubleEquality", function BlockClosureTestCase__testDoubleEquality(){
var generateBlock = nil;
const self = this; generateBlock=(function BlockClosureTestCase__(){
return (function BlockClosureTestCase__(){
return nil;
}
);
}
);
(function BlockClosureTestCase__($1$){
$1$.assert_(((nil.is_eqeq_(generateBlock,generateBlock))));
$1$.deny_(((nil.is_eqeq_(generateBlock.value(),generateBlock.value()))));
return $1$.deny_(((nil.is_eqeq_(generateBlock,(function BlockClosureTestCase__(){
return (function BlockClosureTestCase__(){
return nil;
}
);
}
)))))}
)(self);
return self;
}
, "running", unescape("testDoubleEquality%0D%0D%09%7C%20generateBlock%20%7C%0D%09generateBlock%20%3A%3D%20%5B%5B%5D%5D.%0D%09self%0D%09%09assert%3A%20generateBlock%20%3D%3D%20generateBlock%3B%0D%09%09deny%3A%20generateBlock%20value%20%3D%3D%20generateBlock%20value%3B%0D%09%09deny%3A%20generateBlock%20%3D%3D%20%5B%5B%5D%5D%20"));
smalltalk.bind(smalltalk.BlockClosureTestCase, unescape("testNotEquals"), "testNotEquals", function BlockClosureTestCase__testNotEquals(){
var generateBlock = nil;
const self = this; generateBlock=(function BlockClosureTestCase__(){
return (function BlockClosureTestCase__(){
return nil;
}
);
}
);
(function BlockClosureTestCase__($1$){
$1$.deny_((generateBlock._no_eq(generateBlock)));
$1$.assert_(((generateBlock.value())._no_eq((generateBlock.value()))));
return $1$.assert_((generateBlock._no_eq((function BlockClosureTestCase__(){
return (function BlockClosureTestCase__(){
return nil;
}
);
}
))))}
)(self);
return self;
}
, "running", unescape("testNotEquals%0D%0D%09%7C%20generateBlock%20%7C%0D%09generateBlock%20%3A%3D%20%5B%5B%5D%5D.%0D%09self%20%0D%09%09deny%3A%20generateBlock%20%7E%3D%20generateBlock%3B%0D%09%09assert%3A%20generateBlock%20value%20%7E%3D%20generateBlock%20value%3B%0D%09%09assert%3A%20generateBlock%20%7E%3D%20%5B%5B%5D%5D%20"));
smalltalk.bind(smalltalk.BlockClosureTestCase, unescape("testDoubleNotEqual"), "testDoubleNotEqual", function BlockClosureTestCase__testDoubleNotEqual(){
var generateBlock = nil;
const self = this; generateBlock=(function BlockClosureTestCase__(){
return (function BlockClosureTestCase__(){
return nil;
}
);
}
);
(function BlockClosureTestCase__($1$){
$1$.deny_((generateBlock._no_no(generateBlock)));
$1$.assert_(((generateBlock.value())._no_no((generateBlock.value()))));
return $1$.assert_((generateBlock._no_no((function BlockClosureTestCase__(){
return (function BlockClosureTestCase__(){
return nil;
}
);
}
))))}
)(self);
return self;
}
, "running", unescape("testDoubleNotEqual%0D%0D%09%7C%20generateBlock%20%7C%0D%09generateBlock%20%3A%3D%20%5B%5B%5D%5D.%0D%09self%20%0D%09%09deny%3A%20generateBlock%20%7E%7E%20generateBlock%3B%0D%09%09assert%3A%20generateBlock%20value%20%7E%7E%20generateBlock%20value%3B%0D%09%09assert%3A%20generateBlock%20%7E%7E%20%5B%5B%5D%5D%20"));
smalltalk.bind(smalltalk.BlockClosureTestCase, unescape("testPrintString"), "testPrintString", function BlockClosureTestCase__testPrintString(){
var str = nil;
const self = this; str=(function BlockClosureTestCase__(){
return (1);
}
).printString();
self.assert_equals_(str,"a BlockClosure");
return self;
}
, "running", unescape("testPrintString%0D%0D%09%7C%20str%20%7C%0D%09str%20%3A%3D%20%5B1%5D%20printString.%0D%09self%0D%09%09assert%3A%20str%0D%09%09equals%3A%20%27a%20BlockClosure%27%20"));
smalltalk.bind(smalltalk.BlockClosureTestCase, unescape("testPrintOn"), "testPrintOn", function BlockClosureTestCase__testPrintOn(){
var stream = nil;
const self = this; stream="".stream();
(function BlockClosureTestCase__(){
return nil;
}
).printOn_(stream);
self.assert_equals_((stream.contents()),"a BlockClosure");
return self;
}
, "running", unescape("testPrintOn%0D%0D%09%7C%20stream%20%7C%0D%09stream%20%3A%3D%20%27%27%20stream.%0D%09%5B%5D%20printOn%3A%20stream.%0D%09self%20%0D%09%09assert%3A%20stream%20contents%0D%09%09equals%3A%20%27a%20BlockClosure%27%20"));
smalltalk.bind(smalltalk.BlockClosureTestCase, unescape("testEvaluateFor"), "testEvaluateFor", function BlockClosureTestCase__testEvaluateFor(){
const self = this; self.assert_equals_(((function BlockClosureTestCase__(x){
return x._plus((1));
}
).evaluateFor_((1))),(2));
return self;
}
, "running", unescape("testEvaluateFor%0D%0D%09self%20%0D%09%09assert%3A%20%28%5B%3Ax%20%7C%20x%20+%201%5D%20evaluateFor%3A%201%29%0D%09%09equals%3A%202%20"));
smalltalk.bind(smalltalk.BlockClosureTestCase, unescape("testEvaluate"), "testEvaluate", function BlockClosureTestCase__testEvaluate(){
const self = this; self.assert_equals_(((function BlockClosureTestCase__(){
return (1);
}
).evaluate()),(1));
return self;
}
, "running", unescape("testEvaluate%0D%0D%09self%0D%09%09assert%3A%20%5B1%5D%20evaluate%0D%09%09equals%3A%201%20"));
