smalltalk.addClass("MyClass", smalltalk.Object, ['iVar'], 'Testing');
smalltalk.MyClass.$classVariableNames=("");
smalltalk.bind(smalltalk.MyClass.$klass, unescape("classMethodOne"), "classMethodOne", function MyClass_class__classMethodOne(){
const self = this; return (1);
}
, "classTesting", unescape("classMethodOne%0D%0D%09%5E1%20"));
smalltalk.bind(smalltalk.MyClass.$klass, unescape("classMethodTwo"), "classMethodTwo", function MyClass_class__classMethodTwo(){
const self = this; return (2);
}
, "classTesting", unescape("classMethodTwo%0D%0D%09%5E2%20"));
smalltalk.bind(smalltalk.MyClass.$klass, unescape("classMethodThree"), "classMethodThree", function MyClass_class__classMethodThree(){
const self = this; return (3);
}
, "classTesting", unescape("classMethodThree%0D%0D%09%5E3%20"));
smalltalk.bind(smalltalk.MyClass, unescape("testMethodOne"), "testMethodOne", function MyClass__testMethodOne(){
const self = this; return "this is test method one";
}
, "testing", unescape("testMethodOne%0D%0D%09%5E%27this%20is%20test%20method%20one%27%20"));
smalltalk.bind(smalltalk.MyClass, unescape("testMethodTwo"), "testMethodTwo", function MyClass__testMethodTwo(){
const self = this; return (5);
}
, "testing", unescape("testMethodTwo%0D%0D%09%5E5%20"));
smalltalk.bind(smalltalk.MyClass, unescape("testMethodThree"), "testMethodThree", function MyClass__testMethodThree(){
const self = this; return true;
}
, "testing", unescape("testMethodThree%0D%0D%09%5Etrue%20"));
smalltalk.addClass("ObjectTestCase", smalltalk.TestCase, [], 'nil');
smalltalk.ObjectTestCase.$classVariableNames=("");
smalltalk.bind(smalltalk.ObjectTestCase, unescape("testTypeOf"), "testTypeOf", function ObjectTestCase__testTypeOf(){
var type = nil;
const self = this; type=nil.typeOf_("");
self.assert_equals_(type,"string");
type=nil.typeOf_(("".yourself()));
self.assert_equals_(type,"object");
type=nil.typeOf_((42));
self.assert_equals_(type,"number");
type=nil.typeOf_(((42).yourself()));
self.assert_equals_(type,"object");
type=nil.typeOf_(true);
self.assert_equals_(type,"boolean");
type=nil.typeOf_((true.yourself()));
self.assert_equals_(type,"object");
type=nil.typeOf_(false);
self.assert_equals_(type,"boolean");
type=nil.typeOf_((false.yourself()));
self.assert_equals_(type,"object");
type=nil.typeOf_([]);
self.assert_equals_(type,"object");
type=nil.typeOf_(([].yourself()));
self.assert_equals_(type,"object");
type=nil.typeOf_((smalltalk.Object.$$new()));
self.assert_equals_(type,"object");
return self;
}
, "running", unescape("testTypeOf%0D%0D%09%7C%20type%20%7C%0D%09type%20%3A%3D%20nil%20typeOf%3A%20%27%27.%0D%09self%0D%09%09assert%3A%20type%0D%09%09equals%3A%20%27string%27.%0D%09type%20%3A%3D%20nil%20typeOf%3A%20%27%27%20yourself.%0D%09self%0D%09%09assert%3A%20type%0D%09%09equals%3A%20%27object%27.%0D%09type%20%3A%3D%20nil%20typeOf%3A%2042.%0D%09self%0D%09%09assert%3A%20type%0D%09%09equals%3A%20%27number%27.%0D%09type%20%3A%3D%20nil%20typeOf%3A%2042%20yourself.%0D%09self%0D%09%09assert%3A%20type%0D%09%09equals%3A%20%27object%27.%0D%09type%20%3A%3D%20nil%20typeOf%3A%20true.%0D%09self%0D%09%09assert%3A%20type%0D%09%09equals%3A%20%27boolean%27.%0D%09type%20%3A%3D%20nil%20typeOf%3A%20true%20yourself.%0D%09self%0D%09%09assert%3A%20type%0D%09%09equals%3A%20%27object%27.%0D%09type%20%3A%3D%20nil%20typeOf%3A%20false.%0D%09self%0D%09%09assert%3A%20type%0D%09%09equals%3A%20%27boolean%27.%0D%09type%20%3A%3D%20nil%20typeOf%3A%20false%20yourself.%0D%09self%0D%09%09assert%3A%20type%0D%09%09equals%3A%20%27object%27.%0D%09type%20%3A%3D%20nil%20typeOf%3A%20%23%28%29.%0D%09self%0D%09%09assert%3A%20type%0D%09%09equals%3A%20%27object%27.%0D%09type%20%3A%3D%20nil%20typeOf%3A%20%23%28%29%20yourself.%0D%09self%0D%09%09assert%3A%20type%0D%09%09equals%3A%20%27object%27.%0D%09type%20%3A%3D%20nil%20typeOf%3A%20Object%20new.%0D%09self%0D%09%09assert%3A%20type%0D%09%09equals%3A%20%27object%27%20"));
smalltalk.bind(smalltalk.ObjectTestCase, unescape("testBasicNew"), "testBasicNew", function ObjectTestCase__testBasicNew(){
var allClasses = nil;
const self = this; allClasses=smalltalk.Object.withAllSubclasses();
allClasses.do_((function ObjectTestCase__(each){
return self.assert_equals_(((each.basicNew()).$klass),each);
}
));
return self;
}
, "running", unescape("testBasicNew%0D%0D%09%7C%20allClasses%20%7C%0D%09allClasses%20%3A%3D%20Object%20withAllSubclasses.%0D%20%09allClasses%20do%3A%20%5B%3Aeach%20%7C%20self%20assert%3A%20each%20basicNew%20class%20equals%3A%20each%5D%20"));
smalltalk.bind(smalltalk.ObjectTestCase, unescape("testJSPropertyNames"), "testJSPropertyNames", function ObjectTestCase__testJSPropertyNames(){
var testObject = nil;
const self = this; testObject=smalltalk.Object.$$new();
(testObject["test"]=(1));
(testObject["test2"]=(2));
(testObject["test3"]=(3));
self.assert_equals_(((testObject.jsPropertyNames()).asSet()),(["test", "test2", "test3"].asSet()));
return self;
}
, "running", unescape("testJSPropertyNames%0D%0D%09%7C%20testObject%20%7C%0D%09testObject%20%3A%3D%20Object%20new.%0D%09testObject%20basicAt%3A%20%27test%27%20%20put%3A%201.%0D%09testObject%20basicAt%3A%20%27test2%27%20put%3A%202.%0D%09testObject%20basicAt%3A%20%27test3%27%20put%3A%203.%0D%09self%0D%09%09assert%3A%20testObject%20jsPropertyNames%20asSet%0D%09%09equals%3A%20%23%28%27test%27%20%27test2%27%20%27test3%27%29%20asSet.%20"));
smalltalk.bind(smalltalk.ObjectTestCase, unescape("testPropertyAtIfAbsent"), "testPropertyAtIfAbsent", function ObjectTestCase__testPropertyAtIfAbsent(){
var testObject = nil;
const self = this; testObject=smalltalk.Object.$$new();
testObject.propertyAt_put_("testProperty",(123));
self.assert_equals_((testObject.propertyAt_ifAbsent_("testProperty",(function ObjectTestCase__(){
return (-2);
}
))),(123));
self.assert_equals_((testObject.propertyAt_ifAbsent_("noProperty",(function ObjectTestCase__(){
return (-2);
}
))),(-2));
self.should_raise_((function ObjectTestCase__(){
return testObject.propertyAt_ifAbsent_("should throw exception",(4));
}
),smalltalk.Error);
self.should_raise_((function ObjectTestCase__(){
return testObject.propertyAt_ifAbsent_(true,(function ObjectTestCase__(){
return (-2);
}
));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testPropertyAtIfAbsent%0D%0D%09%7C%20testObject%20%7C%0D%09testObject%20%3A%3D%20Object%20new.%0D%09testObject%20propertyAt%3A%20%27testProperty%27%20put%3A%20123.%0D%09self%20%0D%09%09assert%3A%20%28testObject%20propertyAt%3A%20%27testProperty%27%20ifAbsent%3A%20%5B-2%5D%29%0D%09%09equals%3A%20123.%0D%09self%0D%09%09assert%3A%20%28testObject%20propertyAt%3A%20%27noProperty%27%20ifAbsent%3A%20%5B-2%5D%29%0D%09%09equals%3A%20-2.%0D%09self%0D%09%09should%3A%20%5BtestObject%20propertyAt%3A%20%27should%20throw%20exception%27%20ifAbsent%3A%204%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09should%3A%20%5BtestObject%20propertyAt%3A%20true%20ifAbsent%3A%20%5B-2%5D%5D%0D%09%09raise%3A%20Error.%20"));
smalltalk.bind(smalltalk.ObjectTestCase, unescape("testPropertyAtPut"), "testPropertyAtPut", function ObjectTestCase__testPropertyAtPut(){
var testObject = nil;
const self = this; testObject=smalltalk.Object.$$new();
testObject.propertyAt_put_("propOne",(1));
testObject.propertyAt_put_("propTwo",(2));
self.assert_equals_((testObject.propertyAt_ifAbsent_("propOne",(function ObjectTestCase__(){
return (-2);
}
))),(1));
self.assert_equals_((testObject.propertyAt_ifAbsent_("propTwo",(function ObjectTestCase__(){
return (-2);
}
))),(2));
self.should_raise_((function ObjectTestCase__(){
return testObject.propertAt_put_("",(3));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testPropertyAtPut%0D%0D%09%7C%20testObject%20%7C%0D%09testObject%20%3A%3D%20Object%20new.%0D%09testObject%20propertyAt%3A%20%27propOne%27%20put%3A%201.%0D%09testObject%20propertyAt%3A%20%27propTwo%27%20put%3A%202.%0D%09self%20%0D%09%09assert%3A%20%28testObject%20propertyAt%3A%20%27propOne%27%20ifAbsent%3A%20%5B-2%5D%29%0D%09%09equals%3A%201.%0D%09self%20%0D%09%09assert%3A%20%28testObject%20propertyAt%3A%20%27propTwo%27%20ifAbsent%3A%20%5B-2%5D%29%0D%09%09equals%3A%202.%0D%09self%0D%09%09should%3A%20%5BtestObject%20propertAt%3A%20%27%27%20put%3A%203%5D%0D%09%09raise%3A%20Error.%20"));
smalltalk.bind(smalltalk.ObjectTestCase, unescape("testIsObject"), "testIsObject", function ObjectTestCase__testIsObject(){
var testObject = nil;
const self = this; testObject=smalltalk.Object.$$new();
self.assert_((smalltalk.Object.isObject_(testObject)));
testObject=nil;
self.assert_((smalltalk.Object.isObject_(testObject)));
return self;
}
, "running", unescape("testIsObject%0D%0D%09%7C%20testObject%20%7C%0D%09testObject%20%3A%3D%20Object%20new.%0D%09self%20assert%3A%20%28Object%20isObject%3A%20testObject%29.%0D%09testObject%20%3A%3D%20nil.%0D%09self%20assert%3A%20%28Object%20isObject%3A%20testObject%29.%20"));
smalltalk.bind(smalltalk.ObjectTestCase, unescape("testBasicAt"), "testBasicAt", function ObjectTestCase__testBasicAt(){
var testObject = nil;
const self = this; testObject=smalltalk.Object.$$new();
self.assert_equals_(((function(){var $1$; $1$ = testObject["prop1"]; return nil.isNil_($1$) ? (-1) : $1$})()),(-1));
(testObject["prop1"]=(1));
self.assert_equals_(((function(){var $2$; $2$ = testObject["prop1"]; return nil.isNil_($2$) ? (-1) : $2$})()),(1));
self.assert_equals_(((function(){var $3$; $3$ = testObject["prop2"]; return nil.isNil_($3$) ? nil : $3$})()),nil);
return self;
}
, "running", unescape("testBasicAt%0D%0D%09%7C%20testObject%20%7C%0D%09testObject%20%3A%3D%20Object%20new.%0D%09self%0D%09%09assert%3A%20%28testObject%20basicAt%3A%20%27prop1%27%20ifAbsent%3A%20%5B-1%5D%29%0D%09%09equals%3A%20-1.%0D%09testObject%20basicAt%3A%20%27prop1%27%20put%3A%201.%0D%09self%0D%09%09assert%3A%20%28testObject%20basicAt%3A%20%27prop1%27%20ifAbsent%3A%20%5B-1%5D%29%0D%09%09equals%3A%201.%0D%09self%0D%09%09assert%3A%20%28testObject%20basicAt%3A%20%27prop2%27%29%0D%09%09equals%3A%20nil"));
smalltalk.bind(smalltalk.ObjectTestCase, unescape("testBasicAtIfAbsent"), "testBasicAtIfAbsent", function ObjectTestCase__testBasicAtIfAbsent(){
var testObject = nil;
const self = this; testObject=smalltalk.Object.$$new();
(testObject["prop1"]=(1));
self.assert_equals_(((function(){var $1$; $1$ = testObject["prop1"]; return nil.isNil_($1$) ? (-1) : $1$})()),(1));
self.assert_equals_(((function(){var $2$; $2$ = testObject["prop2"]; return nil.isNil_($2$) ? (-1) : $2$})()),(-1));
return self;
}
, "running", unescape("testBasicAtIfAbsent%0D%0D%09%7C%20testObject%20%7C%0D%09testObject%20%3A%3D%20Object%20new.%0D%09testObject%20basicAt%3A%20%27prop1%27%20put%3A%201.%0D%09self%0D%09%09assert%3A%20%28testObject%20basicAt%3A%20%27prop1%27%20ifAbsent%3A%20%5B-1%5D%29%0D%09%09equals%3A%201.%0D%09self%0D%09%09assert%3A%20%28testObject%20basicAt%3A%20%27prop2%27%20ifAbsent%3A%20%5B-1%5D%29%0D%09%09equals%3A%20-1"));
smalltalk.bind(smalltalk.ObjectTestCase, unescape("testBasicAtIfAbsentPut"), "testBasicAtIfAbsentPut", function ObjectTestCase__testBasicAtIfAbsentPut(){
var testObject = nil;
var result = nil;
const self = this; testObject=smalltalk.Object.$$new();
(testObject["prop1"]=(1));
self.assert_equals_(((function(){var $1$; $1$ = testObject["prop1"]; return nil.isNil_($1$) ? (-1) : $1$})()),(1));
testObject.basicAt_ifAbsentPut_("prop1",(function ObjectTestCase__(){
return (2);
}
));
self.assert_equals_(((function(){var $2$; $2$ = testObject["prop1"]; return nil.isNil_($2$) ? (-1) : $2$})()),(1));
result=testObject.basicAt_ifAbsentPut_("prop2",(function ObjectTestCase__(){
return (2);
}
));
self.assert_equals_(result,(2));
self.assert_equals_(((function(){var $3$; $3$ = testObject["prop2"]; return nil.isNil_($3$) ? (-1) : $3$})()),(2));
return self;
}
, "running", unescape("testBasicAtIfAbsentPut%0D%0D%09%7C%20testObject%20result%20%7C%0D%09testObject%20%3A%3D%20Object%20new.%0D%09testObject%20basicAt%3A%20%27prop1%27%20put%3A%201.%0D%09self%0D%09%09assert%3A%20%28testObject%20basicAt%3A%20%27prop1%27%20ifAbsent%3A%20%5B-1%5D%29%0D%09%09equals%3A%201.%0D%09testObject%20basicAt%3A%20%27prop1%27%20ifAbsentPut%3A%20%5B2%5D.%0D%09self%0D%09%09assert%3A%20%28testObject%20basicAt%3A%20%27prop1%27%20ifAbsent%3A%20%5B-1%5D%29%0D%09%09equals%3A%201.%0D%0D%09result%20%3A%3D%20testObject%20basicAt%3A%20%27prop2%27%20ifAbsentPut%3A%20%5B2%5D.%0D%09self%0D%09%09assert%3A%20result%0D%09%09equals%3A%202.%0D%09self%0D%09%09assert%3A%20%28testObject%20basicAt%3A%20%27prop2%27%20ifAbsent%3A%20%5B-1%5D%29%0D%09%09equals%3A%202"));
smalltalk.bind(smalltalk.ObjectTestCase, unescape("testBasicDelete"), "testBasicDelete", function ObjectTestCase__testBasicDelete(){
var testObject = nil;
const self = this; testObject=smalltalk.Object.$$new();
(testObject["prop1"]=(1));
self.assert_equals_(((function(){var $1$; $1$ = testObject["prop1"]; return nil.isNil_($1$) ? (-1) : $1$})()),(1));
testObject.basicDelete_("prop1");
self.assert_equals_(((function(){var $2$; $2$ = testObject["prop1"]; return nil.isNil_($2$) ? (-1) : $2$})()),(-1));
self.should_raise_((function ObjectTestCase__(){
return testObject.basicDelete_(true);
}
),smalltalk.Error);
return self;
}
, "running", unescape("testBasicDelete%0D%0D%09%7C%20testObject%20%7C%0D%09testObject%20%3A%3D%20Object%20new.%0D%09testObject%20basicAt%3A%20%27prop1%27%20put%3A%201.%0D%09self%0D%09%09assert%3A%20%28testObject%20basicAt%3A%20%27prop1%27%20ifAbsent%3A%20%5B-1%5D%29%0D%09%09equals%3A%201.%0D%09testObject%20basicDelete%3A%20%27prop1%27.%0D%09self%0D%09%09assert%3A%20%28testObject%20basicAt%3A%20%27prop1%27%20ifAbsent%3A%20%5B-1%5D%29%0D%09%09equals%3A%20-1.%0D%09self%0D%09%09should%3A%20%5BtestObject%20basicDelete%3A%20true%5D%0D%09%09raise%3A%20Error.%20"));
smalltalk.bind(smalltalk.ObjectTestCase, unescape("testMethodsDo"), "testMethodsDo", function ObjectTestCase__testMethodsDo(){
var expectedSet = nil;
var resultSet = nil;
const self = this; expectedSet=["testMethodOne", "testMethodTwo", "testMethodThree"].asSet();
resultSet=[].asSet();
smalltalk.MyClass.methodsDo_((function ObjectTestCase__(method){
return resultSet.add_((method.selector()));
}
));
self.assert_equals_(resultSet,expectedSet);
expectedSet=["classMethodOne", "classMethodTwo", "classMethodThree"].asSet();
resultSet=[].asSet();
(smalltalk.MyClass.$klass).methodsDo_((function ObjectTestCase__(method){
return resultSet.add_((method.selector()));
}
));
self.assert_equals_(resultSet,expectedSet);
return self;
}
, "running", unescape("testMethodsDo%0D%0D%09%7C%20expectedSet%20resultSet%20%7C%0D%09expectedSet%20%3A%3D%20%23%28%27testMethodOne%27%20%27testMethodTwo%27%20%27testMethodThree%27%29%20asSet.%0D%09resultSet%20%3A%3D%20%23%28%29%20asSet.%0D%09MyClass%20methodsDo%3A%20%20%5B%20%3Amethod%20%7C%20%28resultSet%20add%3A%20method%20selector%29%20%5D.%0D%09self%0D%09%09assert%3A%20resultSet%0D%09%09equals%3A%20expectedSet.%0D%09expectedSet%20%3A%3D%20%23%28%27classMethodOne%27%20%27classMethodTwo%27%20%27classMethodThree%27%29%20asSet.%0D%09resultSet%20%3A%3D%20%23%28%29%20asSet.%0D%09MyClass%20class%20methodsDo%3A%20%5B%20%3Amethod%20%7C%20%28resultSet%20add%3A%20method%20selector%29%20%5D.%0D%09self%0D%09%09assert%3A%20resultSet%0D%09%09equals%3A%20expectedSet.%20"));
smalltalk.bind(smalltalk.ObjectTestCase, unescape("testSelectorsDo"), "testSelectorsDo", function ObjectTestCase__testSelectorsDo(){
var expectedSet = nil;
var resultSet = nil;
const self = this; expectedSet=["testMethodOne", "testMethodTwo", "testMethodThree"].asSet();
resultSet=[].asSet();
smalltalk.MyClass.selectorsDo_((function ObjectTestCase__(selector){
return resultSet.add_(selector);
}
));
self.assert_equals_(resultSet,expectedSet);
expectedSet=["classMethodOne", "classMethodTwo", "classMethodThree"].asSet();
resultSet=[].asSet();
(smalltalk.MyClass.$klass).selectorsDo_((function ObjectTestCase__(selector){
return resultSet.add_(selector);
}
));
self.assert_equals_(resultSet,expectedSet);
return self;
}
, "running", unescape("testSelectorsDo%0D%0D%09%7C%20expectedSet%20resultSet%20%7C%0D%09expectedSet%20%3A%3D%20%23%28%27testMethodOne%27%20%27testMethodTwo%27%20%27testMethodThree%27%29%20asSet.%0D%09resultSet%20%3A%3D%20%23%28%29%20asSet.%0D%09MyClass%20selectorsDo%3A%20%5B%3Aselector%20%7C%20%28resultSet%20add%3A%20selector%29%5D.%0D%09self%0D%09%09assert%3A%20resultSet%0D%09%09equals%3A%20expectedSet.%0D%09expectedSet%20%3A%3D%20%23%28%27classMethodOne%27%20%27classMethodTwo%27%20%27classMethodThree%27%29%20asSet.%0D%09resultSet%20%3A%3D%20%23%28%29%20asSet.%0D%09MyClass%20class%20selectorsDo%3A%20%5B%3Aselector%20%7C%20%28resultSet%20add%3A%20selector%29%5D.%0D%09self%0D%09%09assert%3A%20resultSet%0D%09%09equals%3A%20expectedSet.%20"));
smalltalk.bind(smalltalk.ObjectTestCase, unescape("testImplements"), "testImplements", function ObjectTestCase__testImplements(){
const self = this; (function ObjectTestCase__($1$){
$1$.assert_((smalltalk.MyClass.implements_("testMethodOne")));
$1$.deny_((smalltalk.MyClass.implements_("madeUpMethod")));
$1$.assert_(((smalltalk.MyClass.$klass).implements_("classMethodOne")));
return $1$.deny_(((smalltalk.MyClass.$klass).implements_("zmadeUpMethod")))}
)(self);
self.should_raise_((function ObjectTestCase__(){
return smalltalk.MyClass.implements_((4));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testImplements%0D%0D%09self%20%0D%09%09assert%3A%20%28MyClass%20implements%3A%20%23testMethodOne%29%3B%0D%09%09deny%3A%20%28MyClass%20implements%3A%20%23madeUpMethod%29%3B%0D%09%09assert%3A%20%28MyClass%20class%20implements%3A%20%23classMethodOne%29%3B%0D%09%09deny%3A%20%28MyClass%20class%20implements%3A%20%23zmadeUpMethod%29.%0D%09self%0D%09%09should%3A%20%5BMyClass%20implements%3A%204%5D%0D%09%09raise%3A%20Error%20"));
smalltalk.bind(smalltalk.ObjectTestCase, unescape("testCompiledMethodAt"), "testCompiledMethodAt", function ObjectTestCase__testCompiledMethodAt(){
const self = this; self.assert_equals_(((smalltalk.MyClass.compiledMethodAt_("testMethodOne")).selector()),"testMethodOne");
self.assert_(((nil.isNil_(smalltalk.MyClass.compiledMethodAt_("noMethod")))));
self.should_raise_((function ObjectTestCase__(){
return smalltalk.MyClass.compiledMethodAt_((3));
}
),smalltalk.Error);
return self;
}
, "running", unescape("testCompiledMethodAt%0D%0D%09self%20%0D%09%09assert%3A%20%28MyClass%20compiledMethodAt%3A%20%23testMethodOne%29%20selector%0D%09%09equals%3A%20%27testMethodOne%27.%0D%09self%20assert%3A%20%28MyClass%20compiledMethodAt%3A%20%23noMethod%29%20isNil.%0D%09self%20%0D%09%09should%3A%20%5BMyClass%20compiledMethodAt%3A%203%5D%0D%09%09raise%3A%20Error%20"));
smalltalk.bind(smalltalk.ObjectTestCase, unescape("testEquality"), "testEquality", function ObjectTestCase__testEquality(){
var object = nil;
var anotherObject = nil;
const self = this; object=smalltalk.Object.$$new();
anotherObject=smalltalk.Object.$$new();
self.assert_equals_(object,object);
self.deny_equals_(anotherObject,object);
return self;
}
, "running", unescape("testEquality%0D%0D%09%7C%20object%20anotherObject%20%7C%0D%09object%20%3A%3D%20Object%20new.%0D%09anotherObject%20%3A%3D%20Object%20new.%0D%09self%0D%09%09assert%3A%20object%0D%09%09equals%3A%20object.%0D%09self%0D%09%09deny%3A%20anotherObject%0D%09%09equals%3A%20object%20"));
smalltalk.bind(smalltalk.ObjectTestCase, unescape("testIdentity"), "testIdentity", function ObjectTestCase__testIdentity(){
var object = nil;
var anotherObject = nil;
const self = this; object=smalltalk.Object.$$new();
anotherObject=smalltalk.Object.$$new();
(function ObjectTestCase__($1$){
$1$.assert_(((nil.is_eqeq_(object,object))));
return $1$.deny_(((nil.is_eqeq_(object,anotherObject))))}
)(self);
return self;
}
, "running", unescape("testIdentity%0D%0D%09%7C%20object%20anotherObject%20%7C%0D%09object%20%3A%3D%20Object%20new.%0D%09anotherObject%20%3A%3D%20Object%20new.%0D%09self%0D%09%09assert%3A%20object%20%3D%3D%20object%3B%0D%09%09deny%3A%20object%20%3D%3D%20anotherObject%20"));
smalltalk.bind(smalltalk.ObjectTestCase, unescape("testNotEqual"), "testNotEqual", function ObjectTestCase__testNotEqual(){
var object = nil;
var anotherObject = nil;
const self = this; object=smalltalk.Object.$$new();
anotherObject=smalltalk.Object.$$new();
(function ObjectTestCase__($1$){
$1$.deny_((object._no_eq(object)));
return $1$.assert_((object._no_eq(anotherObject)))}
)(self);
return self;
}
, "running", unescape("testNotEqual%0D%0D%09%7C%20object%20anotherObject%20%7C%0D%09object%20%3A%3D%20Object%20new.%0D%09anotherObject%20%3A%3D%20Object%20new.%0D%09self%0D%09%09deny%3A%20object%20%7E%3D%20object%3B%0D%09%09assert%3A%20object%20%7E%3D%20anotherObject%20"));
smalltalk.bind(smalltalk.ObjectTestCase, unescape("testNotIdentical"), "testNotIdentical", function ObjectTestCase__testNotIdentical(){
var object = nil;
var anotherObject = nil;
const self = this; object=smalltalk.Object.$$new();
anotherObject=smalltalk.Object.$$new();
(function ObjectTestCase__($1$){
$1$.deny_((object._no_no(object)));
return $1$.assert_((object._no_no(anotherObject)))}
)(self);
return self;
}
, "running", unescape("testNotIdentical%0D%0D%09%7C%20object%20anotherObject%20%7C%0D%09object%20%3A%3D%20Object%20new.%0D%09anotherObject%20%3A%3D%20Object%20new.%0D%09self%0D%09%09deny%3A%20object%20%7E%7E%20object%3B%0D%09%09assert%3A%20object%20%7E%7E%20anotherObject%20"));
smalltalk.bind(smalltalk.ObjectTestCase, unescape("testClass"), "testClass", function ObjectTestCase__testClass(){
const self = this; self.assert_equals_(((smalltalk.Object.$$new()).$klass),smalltalk.Object);
self.assert_equals_(((smalltalk.String.$$new()).$klass),smalltalk.String);
return self;
}
, "running", unescape("testClass%0D%0D%09self%0D%09%09assert%3A%20Object%20new%20class%0D%09%09equals%3A%20Object.%0D%09self%0D%09%09assert%3A%20String%20new%20class%0D%09%09equals%3A%20String%20"));
smalltalk.bind(smalltalk.ObjectTestCase, unescape("testYourself"), "testYourself", function ObjectTestCase__testYourself(){
var object = nil;
const self = this; object=smalltalk.Object.$$new();
self.assert_(((nil.is_eqeq_(object.yourself(),object))));
return self;
}
, "running", unescape("testYourself%0D%0D%09%7C%20object%20%7C%0D%09object%20%3A%3D%20Object%20new.%0D%09self%20assert%3A%20object%20yourself%20%3D%3D%20object%20"));
smalltalk.bind(smalltalk.ObjectTestCase, unescape("testPrintString"), "testPrintString", function ObjectTestCase__testPrintString(){
var str = nil;
var obj = nil;
const self = this; obj=smalltalk.Object.$$new();
str=obj.printString();
self.assert_equals_(str,"a Object");
return self;
}
, "running", unescape("testPrintString%0D%0D%09%7C%20str%20obj%20%7C%0D%09obj%20%3A%3D%20Object%20new.%0D%09str%20%3A%3D%20%20obj%20printString.%0D%09self%0D%09%09assert%3A%20str%0D%09%09equals%3A%20%27a%20Object%27%20"));
smalltalk.bind(smalltalk.ObjectTestCase, unescape("testPrintOn"), "testPrintOn", function ObjectTestCase__testPrintOn(){
var stream = nil;
var obj = nil;
const self = this; obj=smalltalk.Object.$$new();
stream="".stream();
obj.printOn_(stream);
self.assert_equals_((stream.contents()),"a Object");
return self;
}
, "running", unescape("testPrintOn%0D%0D%09%7C%20stream%20obj%20%7C%0D%09obj%20%3A%3D%20Object%20new.%0D%09stream%20%3A%3D%20%27%27%20stream.%0D%09obj%20printOn%3A%20stream.%0D%09self%0D%09%09assert%3A%20stream%20contents%0D%09%09equals%3A%20%27a%20Object%27%20"));
smalltalk.bind(smalltalk.ObjectTestCase, unescape("testError"), "testError", function ObjectTestCase__testError(){
const self = this; self.should_raise_((function ObjectTestCase__(){
return (smalltalk.Object.$$new()).error_("test error");
}
),smalltalk.Error);
return self;
}
, "running", unescape("testError%0D%0D%09self%0D%09%09should%3A%20%5BObject%20new%20error%3A%20%27test%20error%27%5D%0D%09%09raise%3A%20Error%20"));
smalltalk.bind(smalltalk.ObjectTestCase, unescape("testIsKindOf"), "testIsKindOf", function ObjectTestCase__testIsKindOf(){
var obj = nil;
const self = this; obj=smalltalk.Object.$$new();
(function ObjectTestCase__($1$){
$1$.assert_(((smalltalk.is_kindOf_(obj,smalltalk.Object))));
return $1$.deny_(((smalltalk.is_kindOf_(obj,smalltalk.Array))))}
)(self);
return self;
}
, "running", unescape("testIsKindOf%0D%0D%09%7C%20obj%20%7C%0D%09obj%20%3A%3D%20Object%20new.%0D%09self%20%0D%09%09assert%3A%20%28obj%20isKindOf%3A%20Object%29%3B%0D%09%09deny%3A%20%28obj%20isKindOf%3A%20Array%29%20"));
smalltalk.bind(smalltalk.ObjectTestCase, unescape("testIsMemberOf"), "testIsMemberOf", function ObjectTestCase__testIsMemberOf(){
const self = this; (function ObjectTestCase__($1$){
$1$.assert_(((smalltalk.Object.$$new()).isMemberOf_(smalltalk.Object)));
$1$.assert_(((smalltalk.String.$$new()).isMemberOf_(smalltalk.String)));
$1$.deny_(((smalltalk.String.$$new()).isMemberOf_(smalltalk.Object)));
return $1$.deny_(((smalltalk.Object.$$new()).isMemberOf_(smalltalk.String)))}
)(self);
return self;
}
, "running", unescape("testIsMemberOf%0D%0D%09self%20%0D%09%09assert%3A%20%28Object%20new%20isMemberOf%3A%20Object%29%3B%0D%09%09assert%3A%20%28String%20new%20isMemberOf%3A%20String%29%3B%0D%09%09deny%3A%20%28String%20new%20isMemberOf%3A%20Object%29%3B%0D%09%09deny%3A%20%28Object%20new%20isMemberOf%3A%20String%29%20"));
smalltalk.bind(smalltalk.ObjectTestCase, unescape("testIsNil"), "testIsNil", function ObjectTestCase__testIsNil(){
var obj = nil;
const self = this; obj=smalltalk.Object.$$new();
self.deny_(((nil.isNil_(obj))));
obj=nil;
self.assert_(((nil.isNil_(obj))));
return self;
}
, "running", unescape("testIsNil%0D%0D%09%7C%20obj%20%7C%0D%09obj%20%3A%3D%20Object%20new.%0D%09self%20deny%3A%20obj%20isNil.%0D%09obj%20%3A%3D%20nil.%0D%09self%20assert%3A%20obj%20isNil%20"));
smalltalk.bind(smalltalk.ObjectTestCase, unescape("testNotNil"), "testNotNil", function ObjectTestCase__testNotNil(){
var obj = nil;
const self = this; obj=smalltalk.Object.$$new();
self.assert_(((nil.isNil_(obj)===false)));
obj=nil;
self.deny_(((nil.isNil_(obj)===false)));
return self;
}
, "running", unescape("testNotNil%0D%0D%09%7C%20obj%20%7C%0D%09obj%20%3A%3D%20Object%20new.%0D%09self%20assert%3A%20obj%20notNil.%0D%09obj%20%3A%3D%20nil.%0D%09self%20deny%3A%20obj%20notNil%20"));
smalltalk.bind(smalltalk.ObjectTestCase, unescape("testPerform"), "testPerform", function ObjectTestCase__testPerform(){
const self = this; self.assert_equals_(("hello".perform_("size")),(5));
self.should_raise_((function ObjectTestCase__(){
return "hello".perform_("basicAt:");
}
),smalltalk.Error);
self.should_raise_((function ObjectTestCase__(){
return nil.perform_("xlerb");
}
),smalltalk.MessageNotUnderstood);
return self;
}
, "running", unescape("testPerform%0D%0D%09self%20%0D%09%09assert%3A%20%28%27hello%27%20perform%3A%20%23size%29%0D%09%09equals%3A%205.%0D%09self%0D%09%09should%3A%20%5B%27hello%27%20perform%3A%20%23basicAt%3A%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09should%3A%20%5Bnil%20perform%3A%20%23xlerb%5D%20%0D%09%09raise%3A%20MessageNotUnderstood%20"));
smalltalk.bind(smalltalk.ObjectTestCase, unescape("testPerformWith"), "testPerformWith", function ObjectTestCase__testPerformWith(){
var obj = nil;
const self = this; obj=smalltalk.Object.$$new();
(obj["test"]=(1));
self.assert_equals_((obj.perform_with_("basicAt:","test")),(1));
self.should_raise_((function ObjectTestCase__(){
return obj.perform_with_("size","test");
}
),smalltalk.Error);
self.should_raise_((function ObjectTestCase__(){
return obj.perform_with_("basicAt:put:","test");
}
),smalltalk.Error);
return self;
}
, "running", unescape("testPerformWith%0D%0D%09%7C%20obj%20%7C%0D%09obj%20%3A%3D%20Object%20new.%0D%09obj%20basicAt%3A%20%27test%27%20put%3A%201.%0D%09self%0D%09%09assert%3A%20%28obj%20perform%3A%20%23basicAt%3A%20with%3A%20%27test%27%29%0D%09%09equals%3A%201.%0D%09self%0D%09%09should%3A%20%5Bobj%20perform%3A%20%23size%20with%3A%20%27test%27%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09should%3A%20%5Bobj%20perform%3A%20%23basicAt%3Aput%3A%20with%3A%20%27test%27%5D%0D%09%09raise%3A%20Error%20"));
smalltalk.bind(smalltalk.ObjectTestCase, unescape("testPerformWithArguments"), "testPerformWithArguments", function ObjectTestCase__testPerformWithArguments(){
var obj = nil;
const self = this; obj=smalltalk.Object.$$new();
self.assert_(((nil.isNil_((function(){var $1$; $1$ = obj["test"]; return nil.isNil_($1$) ? nil : $1$})()))));
obj.perform_withArguments_("basicAt:put:",["test", (1)]);
self.assert_equals_(((function(){var $2$; $2$ = obj["test"]; return nil.isNil_($2$) ? nil : $2$})()),(1));
self.should_raise_((function ObjectTestCase__(){
return obj.perform_withArguments_("basicAt:put:",["test", (1), (1)]);
}
),smalltalk.Error);
return self;
}
, "running", unescape("testPerformWithArguments%0D%0D%09%7C%20obj%20%7C%0D%09obj%20%3A%3D%20Object%20new.%0D%09self%20assert%3A%20%28obj%20basicAt%3A%20%27test%27%29%20isNil.%0D%09obj%20perform%3A%20%23basicAt%3Aput%3A%20withArguments%3A%20%23%28%27test%27%201%29.%0D%09self%20%0D%09%09assert%3A%20%28obj%20basicAt%3A%20%27test%27%29%20%0D%09%09equals%3A%201.%0D%09self%0D%09%09should%3A%20%5Bobj%20perform%3A%20%23basicAt%3Aput%3A%20withArguments%3A%20%23%28%27test%27%201%201%29%5D%0D%09%09raise%3A%20Error%20"));
smalltalk.bind(smalltalk.ObjectTestCase, unescape("testRespondsTo"), "testRespondsTo", function ObjectTestCase__testRespondsTo(){
var obj = nil;
const self = this; obj=smalltalk.Object.$$new();
(function ObjectTestCase__($1$){
$1$.assert_(((smalltalk.responds_to_(obj,"basicAt:"))));
return $1$.deny_(((smalltalk.responds_to_(obj,"notAMessage"))))}
)(self);
return self;
}
, "running", unescape("testRespondsTo%0D%0D%09%7C%20obj%20%7C%0D%09obj%20%3A%3D%20Object%20new.%0D%09self%20%0D%09%09assert%3A%20%28obj%20respondsTo%3A%20%23basicAt%3A%29%3B%0D%09%09deny%3A%20%28obj%20respondsTo%3A%20%23notAMessage%29%20"));
smalltalk.bind(smalltalk.ObjectTestCase, unescape("testCopy"), "testCopy", function ObjectTestCase__testCopy(){
var obj = nil;
const self = this; obj=smalltalk.MyClass.copy();
self.assert_equals_((obj.instanceVariableNames()),["iVar"]);
return self;
}
, "running", unescape("testCopy%0D%0D%09%7C%20obj%20%7C%0D%09obj%20%3A%3D%20MyClass%20copy.%0D%09self%0D%09%09assert%3A%20%28obj%20instanceVariableNames%29%0D%09%09equals%3A%20%23%28%27iVar%27%29%20"));
