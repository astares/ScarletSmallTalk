smalltalk.addClass("TestCase", smalltalk.Object, ['assertCount'], 'SUnit');
smalltalk.TestCase.$classVariableNames=("");
smalltalk.addClass("TestResult", smalltalk.Object, ['runningInHudson', 'timestamp', 'runs', 'passed', 'errors', 'failures', 'total'], 'SUnit');
smalltalk.TestResult.$classVariableNames=("");
smalltalk.addClass("TestFailure", smalltalk.Error, [], 'SUnit');
smalltalk.TestFailure.$classVariableNames=("");
smalltalk.addClass("TestRunner", smalltalk.Object, ['result', 'progress', 'timeout', 'notificationBlock'], 'SUnit');
smalltalk.TestRunner.$classVariableNames=("");
smalltalk.bind(smalltalk.TestCase, unescape("assertCount"), "assertCount", function TestCase__assertCount(){
const self = this; return self['@assertCount'];
}
, "accessing", unescape("assertCount%0D%0D%09%5EassertCount"));
smalltalk.bind(smalltalk.TestCase, unescape("assertCount%3A"), "assertCount_", function TestCase__assertCount_(anInteger){
const self = this; self['@assertCount']=anInteger;
return self;
}
, "accessing", unescape("assertCount%3A%20anInteger%0D%0D%09assertCount%20%3A%3D%20anInteger"));
smalltalk.bind(smalltalk.TestCase, unescape("resetAssertCount"), "resetAssertCount", function TestCase__resetAssertCount(){
const self = this; self.assertCount_((0));
return self;
}
, "record keeping", unescape("resetAssertCount%0D%0D%09self%20assertCount%3A%200"));
smalltalk.bind(smalltalk.TestCase, unescape("incrementAssertionCount"), "incrementAssertionCount", function TestCase__incrementAssertionCount(){
const self = this; self.assertCount_(((self.assertCount())._plus((1))));
return self;
}
, "record keeping", unescape("incrementAssertionCount%0D%0D%09self%20assertCount%3A%20self%20assertCount%20+%201"));
smalltalk.bind(smalltalk.TestCase.$klass, unescape("run"), "run", function TestCase_class__run(){
const self = this; return smalltalk.TestRunner.run_(self);
}
, "testing", unescape("run%0D%09%22%20Run%20the%20test%20case%20selectors%20implemented%20by%20the%20receiver.%20%22%0D%0D%09%5ETestRunner%20run%3A%20self"));
smalltalk.bind(smalltalk.TestCase.$klass, unescape("runAll"), "runAll", function TestCase_class__runAll(){
const self = this; return smalltalk.TestRunner.runAll_((self.withAllSubclasses()));
}
, "testing", unescape("runAll%0D%09%22%20Run%20the%20test%20case%20selectors%20implemented%20by%20the%20receiver%20and%20its%20subclasses.%20%22%0D%0D%09%5ETestRunner%20runAll%3A%20self%20withAllSubclasses"));
smalltalk.bind(smalltalk.TestCase.$klass, unescape("runCases%3Afor%3Adoing%3A"), "runCases_for_doing_", function TestCase_class__runCases_for_doing_(selectors,aTestResult,aBlock){
const self = this; return (self.$$new()).runCases_for_doing_(selectors,aTestResult,aBlock);
}
, "executing", unescape("runCases%3A%20selectors%20for%3A%20aTestResult%20doing%3A%20aBlock%0D%09%22%20Run%20test%20case%20with%20selectors.%20%22%0D%0D%09%5Eself%20new%20runCases%3A%20selectors%20for%3A%20aTestResult%20doing%3A%20aBlock"));
smalltalk.bind(smalltalk.TestCase.$klass, unescape("ownedTestSelectors"), "ownedTestSelectors", function TestCase_class__ownedTestSelectors(){
const self = this; return ((self.methodDictionary()).keys()).select_((function TestCase_class__(each){
return each.match_(unescape("%5Etest"));
}
));
}
, "private", unescape("ownedTestSelectors%0D%09%22%20Return%20the%20test%20selectors%20implemented%20by%20the%20receiver.%20%22%0D%0D%09%5Eself%20methodDictionary%20keys%20select%3A%20%5B%3Aeach%20%7C%20each%20match%3A%20%27%5Etest%27%20%5D"));
smalltalk.bind(smalltalk.TestCase.$klass, unescape("withTestSuperclasses"), "withTestSuperclasses", function TestCase_class__withTestSuperclasses(){
var superclasses = nil;
const self = this; superclasses=(self.allSuperclasses()).select_((function TestCase_class__(each){
return each.inheritsFrom_(smalltalk.TestCase);
}
));
return (smalltalk.Array.with_(self))._comma(superclasses);
}
, "private", unescape("withTestSuperclasses%0D%09%22%20Return%20the%20receiver%20with%20all%20test%20superclasses.%20%22%0D%0D%09%7C%20superclasses%20%7C%0D%09superclasses%20%3A%3D%20self%20allSuperclasses%20select%3A%20%5B%3Aeach%20%7C%20each%20inheritsFrom%3A%20TestCase%5D.%0D%09%5E%28Array%20with%3A%20self%29%2C%20superclasses"));
smalltalk.bind(smalltalk.TestCase.$klass, unescape("selectorsForTest"), "selectorsForTest", function TestCase_class__selectorsForTest(){
const self = this; return (self.withTestSuperclasses()).inject_into_((smalltalk.Array.$$new()),(function TestCase_class__(total,each){
return total._comma((each.ownedTestSelectors()));
}
));
}
, "private", unescape("selectorsForTest%0D%09%22%20Return%20the%20test%20selectors%20implemented%20by%20the%20receiver.%0D%09The%20default%20action%20return%20the%20message%20selectors%20matching%20test%20pattern%20implemented%20by%20the%20receiver%27s%20class%20and%20its%20test%20superclasses.%0D%09%22%0D%0D%09%5Eself%20withTestSuperclasses%20inject%3A%20Array%20new%20into%3A%20%5B%3Atotal%20%3Aeach%7C%20total%20%2C%20each%20ownedTestSelectors%20%5D"));
smalltalk.bind(smalltalk.TestCase, unescape("cleanUp"), "cleanUp", function TestCase__cleanUp(){
const self = this; ((self.$klass).instanceVariableNames()).do_((function TestCase__(each){
if ((["testSelector"].includes_(each)).not()) {return self.instVarAt_put_(each,nil)} else {return nil};
}
));
return self;
}
, "private", unescape("cleanUp%0D%09%22%20Private%20-%20CleanUp%20the%20instance%20variables%20of%20the%20receiver.%20%22%0D%0D%09self%20class%20instanceVariableNames%20do%3A%20%5B%3Aeach%7C%0D%09%09%28%23%28%20%23testSelector%20%29%20includes%3A%20each%29%20ifFalse%3A%20%5B%0D%09%09%09self%20instVarAt%3A%20each%20put%3A%20nil%0D%09%09%5D.%0D%09%5D"));
smalltalk.bind(smalltalk.TestCase, unescape("signalFailure%3A"), "signalFailure_", function TestCase__signalFailure_(aString){
const self = this; smalltalk.TestFailure.signal_(aString);
return self;
}
, "private", unescape("signalFailure%3A%20aString%0D%09%22%20Private%20-%20Signal%20a%20test%20failure.%20%22%0D%0D%09TestFailure%20signal%3A%20aString"));
smalltalk.bind(smalltalk.TestCase, unescape("setUp"), "setUp", function TestCase__setUp(){
const self = this; self.resetAssertCount();
return self;
}
, "executing", unescape("setUp%0D%09%22%20Setup%20the%20receiver%20to%20perform%20a%20test.%0D%09This%20method%20can%20be%20refined%20by%20subclasses%20to%20ensure%20correct%20testing%20context.%0D%09%22%0D%09self%20resetAssertCount"));
smalltalk.bind(smalltalk.TestCase, unescape("tearDown"), "tearDown", function TestCase__tearDown(){
const self = this; self;
return self;
}
, "executing", unescape("tearDown%0D%09%22%20Release%20the%20receiver%27s%20resources.%0D%09The%20default%20action%20do%20nothing.%0D%09This%20method%20can%20be%20refined%20by%20subclasses%20to%20clean%20up%20resources%20allocated%20for%20testing.%0D%09%22"));
smalltalk.bind(smalltalk.TestCase, unescape("selectorsForTest"), "selectorsForTest", function TestCase__selectorsForTest(){
const self = this; return (self.$klass).selectorsForTest();
}
, "executing", unescape("selectorsForTest%0D%09%22%20Return%20the%20test%20selectors%20implemented%20by%20the%20receiver.%20%22%0D%0D%09%5Eself%20class%20selectorsForTest"));
smalltalk.bind(smalltalk.TestCase, unescape("runCaseFor%3A"), "runCaseFor_", function TestCase__runCaseFor_(aTestResult){
const self = this; self.runCases_for_doing_((self.selectorsForTest()),aTestResult,nil);
return self;
}
, "executing", unescape("runCaseFor%3A%20aTestResult%0D%09%22%20Run%20a%20test%20case.%20%22%0D%0D%09self%20runCases%3A%20self%20selectorsForTest%20for%3A%20aTestResult%20doing%3A%20nil"));
smalltalk.bind(smalltalk.TestCase, unescape("runCases%3Afor%3Adoing%3A"), "runCases_for_doing_", function TestCase__runCases_for_doing_(selectors,aTestResult,aBlock){
const self = this; self.performTests_for_doing_(selectors,aTestResult,aBlock);
return self;
}
, "executing", unescape("runCases%3A%20selectors%20for%3A%20aTestResult%20doing%3A%20aBlock%0D%09%22%20Run%20test%20case%20with%20selectors.%20%22%0D%0D%09self%20performTests%3A%20selectors%20for%3A%20aTestResult%20doing%3A%20aBlock"));
smalltalk.bind(smalltalk.TestCase, unescape("performTests%3Afor%3Adoing%3A"), "performTests_for_doing_", function TestCase__performTests_for_doing_(selectors,aResult,aBlock){
const self = this; selectors.do_((function TestCase__(each){
if (((nil.is_eqeq_(each,"testSelectors"))).not()) {return (function TestCase__(){
self.setUp();
return self.perform_testFor_doing_(each,aResult,aBlock);
}
).ensure_((function TestCase__(){
return (function TestCase__($1$){
$1$.tearDown();
return $1$.cleanUp()}
)(self);
}
))} else {return nil};
}
));
return self;
}
, "private", unescape("performTests%3A%20selectors%20for%3A%20aResult%20doing%3A%20aBlock%0D%09%22%20Evaluate%20the%20tests%20defined%20by%20the%20receiver.%20%22%0D%0D%09selectors%0D%09%09do%3A%20%20%5B%3Aeach%7C%0D%09%09%09each%20%3D%3D%20%23testSelectors%0D%09%09%09%09ifFalse%3A%20%5B%0D%09%09%09%09%09%5Bself%20setUp.%0D%09%09%09%09%09self%20perform%3A%20each%20testFor%3A%20aResult%20doing%3A%20aBlock%5D%0D%09%09%09%09%09%09ensure%3A%0D%09%09%09%09%09%09%09%5Bself%0D%09%09%09%09%09%09%09%09tearDown%3B%0D%09%09%09%09%09%09%09%09cleanUp%5D%0D%09%09%09%09%09%5D%5D"));
smalltalk.bind(smalltalk.TestCase, unescape("perform%3AtestFor%3Adoing%3A"), "perform_testFor_doing_", function TestCase__perform_testFor_doing_(selector,aResult,aBlock){
var didPass = nil;
const self = this; didPass=true;
(function TestCase__(){
return (function TestCase__(){
(function(){var $1$; $1$ = aBlock; if (!nil.isNil_($1$)) { return aBlock.value_value_(self,selector) } else { return $1$; }})();
return self.perform_(selector);
}
).on_do_(smalltalk.TestFailure,(function TestCase__(failure){
didPass=false;
(function TestCase__($2$){
$2$.print_(unescape("%09Fail%21"));
return $2$.print_((unescape("%09")._comma((failure.description()))))}
)(self);
return aResult.addFailure_class_test_(failure,((self.$klass).name()),selector);
}
));
}
).on_do_(smalltalk.Error,(function TestCase__(error){
didPass=false;
(function TestCase__($3$){
$3$.print_(unescape("%09Fail%21"));
return $3$.print_((unescape("%09")._comma((error.description()))))}
)(self);
return aResult.addError_class_test_(error,((self.$klass).name()),selector);
}
));
if ((didPass).valueOf()) {aResult.addPassed_test_(((self.$klass).name()),selector)};
aResult.finished();
return self;
}
, "private", unescape("perform%3A%20selector%20testFor%3A%20aResult%20doing%3A%20aBlock%0D%09%22%20Evaluate%20the%20tests%20implemented%20as%20selector%20in%20the%20receiver.%20%22%0D%0D%09%7C%20didPass%20%7C%0D%09didPass%20%3A%3D%20true.%0D%09%5B%5BaBlock%0D%09%09ifNotNil%3A%0D%09%09%09%5BaBlock%0D%09%09%09%09value%3A%20self%0D%09%09%09%09value%3A%20selector%5D.%0D%09self%20perform%3A%20selector.%5D%0D%09%09on%3A%20TestFailure%0D%09%09do%3A%20%5B%3Afailure%7C%0D%09%09%09didPass%20%3A%3D%20false.%0D%09%09%09self%0D%09%09%09%09print%3A%20%27%09Fail%21%27%3B%0D%09%09%09%09print%3A%20%27%09%27%2C%20failure%20description.%0D%09%09%09aResult%20addFailure%3A%20failure%20class%3A%20self%20class%20name%20test%3A%20selector.%0D%09%09%09%22aResult%20addFailure%3A%20failure%20at%3A%20self%20class%20name%2C%20%27%3E%3E%23%27%2C%20selector%22%5D%5D%0D%09%09on%3A%20Error%0D%09%09do%3A%20%5B%3Aerror%7C%0D%09%09didPass%20%3A%3D%20false.%0D%09%09%09self%0D%09%09%09%09print%3A%20%27%09Fail%21%27%3B%0D%09%09%09%09print%3A%20%27%09%27%2C%20error%20description.%0D%09%09%09aResult%20addError%3A%20error%20class%3A%20self%20class%20name%20test%3A%20selector.%0D%09%09%09%22aResult%20addError%3A%20error%20at%3A%20self%20class%20name%2C%20%27%3E%3E%23%27%2C%20selector%22%5D.%0D%09didPass%0D%09%09ifTrue%3A%20%5B%0D%09%09%09aResult%20addPassed%3A%20self%20class%20name%20test%3A%20selector.%0D%09%09%09%22aResult%20addPassed%3A%20self%20class%20name%2C%20%27%3E%3E%23%27%2C%20selector%22%5D.%0D%09aResult%20finished."));
smalltalk.bind(smalltalk.TestCase, unescape("assert%3A"), "assert_", function TestCase__assert_(aBoolean){
const self = this; self.incrementAssertionCount();
if ((aBoolean).not()) {self.signalFailure_((("Assertion "._comma(((self.assertCount()).printString())))._comma(unescape("%20failed%21"))))};
return self;
}
, "testing", unescape("assert%3A%20aBoolean%0D%09%22%20Test%20an%20assertion.%20%22%0D%0D%09self%20incrementAssertionCount.%0D%09aBoolean%20ifFalse%3A%20%5B%20self%20signalFailure%3A%20%27Assertion%20%27%2C%20self%20assertCount%20printString%2C%20%27%20failed%21%27%20%5D"));
smalltalk.bind(smalltalk.TestCase, unescape("assert%3Amessage%3A"), "assert_message_", function TestCase__assert_message_(aBoolean,message){
const self = this; if ((aBoolean).not()) {self.signalFailure_(("Assertion failed: "._comma(message)))};
return self;
}
, "testing", unescape("assert%3A%20aBoolean%20message%3A%20message%0D%20%20%20%09%22%20Test%20an%20assertion.%20%22%0D%0D%20%20%20%09aBoolean%20ifFalse%3A%20%5B%20self%20signalFailure%3A%20%27Assertion%20failed%3A%20%27%2C%20message%20%5D"));
smalltalk.bind(smalltalk.TestCase, unescape("assert%3Adescription%3A"), "assert_description_", function TestCase__assert_description_(aBoolean,message){
const self = this; self.assert_message_(aBoolean,message);
return self;
}
, "testing", unescape("assert%3A%20aBoolean%20description%3A%20message%0D%20%20%20%09%22%20Test%20an%20assertion.%20%22%0D%09self%20assert%3A%20aBoolean%20message%3A%20message"));
smalltalk.bind(smalltalk.TestCase, unescape("deny%3A"), "deny_", function TestCase__deny_(aBoolean){
const self = this; self.assert_((aBoolean.not()));
return self;
}
, "testing", unescape("deny%3A%20aBoolean%0D%09%22%20Test%20a%20negative%20assertion.%20%22%0D%0D%09self%20assert%3A%20aBoolean%20not"));
smalltalk.bind(smalltalk.TestCase, unescape("deny%3Amessage%3A"), "deny_message_", function TestCase__deny_message_(aBoolean,message){
const self = this; if ((aBoolean).valueOf()) {self.signalFailure_(("Assertion failed: "._comma(message)))};
return self;
}
, "testing", unescape("deny%3A%20aBoolean%20message%3A%20message%0D%20%20%20%09%22%20Test%20an%20assertion.%20%22%0D%0D%20%20%20%09aBoolean%20ifTrue%3A%20%5B%20self%20signalFailure%3A%20%27Assertion%20failed%3A%20%27%2C%20message%20%5D"));
smalltalk.bind(smalltalk.TestCase, unescape("assert%3Aequals%3A"), "assert_equals_", function TestCase__assert_equals_(anObject,bObject){
const self = this; self.assert_((anObject._eq(bObject)));
return self;
}
, "testing", unescape("assert%3A%20anObject%0Dequals%3A%20bObject%0D%09%22%20Test%20an%20assertion.%20%22%0D%0D%09self%20assert%3A%20anObject%20%3D%20bObject"));
smalltalk.bind(smalltalk.TestCase, unescape("deny%3Aequals%3A"), "deny_equals_", function TestCase__deny_equals_(anObject,bObject){
const self = this; self.deny_((anObject._eq(bObject)));
return self;
}
, "testing", unescape("deny%3A%20anObject%0Dequals%3A%20bObject%0D%09%22%20Test%20an%20assertion.%20%22%0D%0D%09self%20deny%3A%20anObject%20%3D%20bObject"));
smalltalk.bind(smalltalk.TestCase, unescape("executeShould%3AinScopeOf%3A"), "executeShould_inScopeOf_", function TestCase__executeShould_inScopeOf_(aBlock,anException){
const self = this; var $early={name:"stReturn"};
try {
aBlock.on_do_(anException,(function TestCase__(ex){
$early.result=true; throw ($early);
}
));
return false;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "asserting", unescape("executeShould%3A%20aBlock%0DinScopeOf%3A%20anException%0D%0D%09aBlock%0D%09%09on%3A%20anException%0D%09%09do%3A%20%5B%3Aex%20%7C%20%5Etrue%5D.%0D%09%5Efalse"));
smalltalk.bind(smalltalk.TestCase, unescape("should%3Araise%3A"), "should_raise_", function TestCase__should_raise_(aBlock,anException){
const self = this; self.assert_((self.executeShould_inScopeOf_(aBlock,anException)));
return self;
}
, "asserting", unescape("should%3A%20aBlock%0Draise%3A%20anException%0D%0D%09self%20assert%3A%20%28self%20executeShould%3A%20aBlock%20inScopeOf%3A%20anException%29"));
smalltalk.bind(smalltalk.TestCase, unescape("shouldnt%3Araise%3A"), "shouldnt_raise_", function TestCase__shouldnt_raise_(aBlock,anException){
const self = this; self.deny_((self.executeShould_inScopeOf_(aBlock,anException)));
return self;
}
, "asserting", unescape("shouldnt%3A%20aBlock%0Draise%3A%20anException%0D%0D%09self%20deny%3A%20%28self%20executeShould%3A%20aBlock%20inScopeOf%3A%20anException%29"));
smalltalk.bind(smalltalk.TestResult, unescape("timestamp"), "timestamp", function TestResult__timestamp(){
const self = this; return self['@timestamp'];
}
, "accessing", unescape("timestamp%0D%09%22%20Return%20the%20timestamp%20of%20the%20receiver.%20%22%0D%0D%09%5Etimestamp"));
smalltalk.bind(smalltalk.TestResult, unescape("errors"), "errors", function TestResult__errors(){
const self = this; return self['@errors'];
}
, "accessing", unescape("errors%0D%09%22%20Return%20the%20errors%20of%20the%20receiver.%20%22%0D%0D%09%5Eerrors"));
smalltalk.bind(smalltalk.TestResult, unescape("failures"), "failures", function TestResult__failures(){
const self = this; return self['@failures'];
}
, "accessing", unescape("failures%0D%09%22%20Return%20the%20failures%20of%20the%20receiver.%20%22%0D%0D%09%5Efailures"));
smalltalk.bind(smalltalk.TestResult, unescape("passed"), "passed", function TestResult__passed(){
const self = this; return self['@passed'];
}
, "accessing", unescape("passed%0D%09%22%20Return%20the%20passed%20of%20the%20receiver.%20%22%0D%0D%09%5Epassed"));
smalltalk.bind(smalltalk.TestResult, unescape("total"), "total", function TestResult__total(){
const self = this; return self['@total'];
}
, "accessing", unescape("total%0D%09%22%20Return%20the%20total%20of%20the%20receiver.%20%22%0D%0D%09%5Etotal"));
smalltalk.bind(smalltalk.TestResult, unescape("total%3A"), "total_", function TestResult__total_(aNumber){
const self = this; self['@total']=aNumber;
return self;
}
, "accessing", unescape("total%3A%20aNumber%0D%09%22%20Set%20the%20total%20of%20the%20receiver.%20%22%0D%0D%09total%20%3A%3D%20aNumber"));
smalltalk.bind(smalltalk.TestResult, unescape("addError%3Aclass%3Atest%3A"), "addError_class_test_", function TestResult__addError_class_test_(error,className,testSelector){
const self = this; (self.errors()).add_((smalltalk.Array.with_with_(error,((((self.$klass).name())._comma(unescape("%3E%3E%23")))._comma(testSelector)))));
return self;
}
, "accessing", unescape("addError%3A%20error%20class%3A%20className%20test%3A%20testSelector%0D%09%22%20Record%20the%20error%20at%20current%20test%20stage.%20%22%0D%09self%20errors%20add%3A%20%28Array%20with%3A%20error%20with%3A%20self%20class%20name%2C%20%27%3E%3E%23%27%2C%20testSelector%29"));
smalltalk.bind(smalltalk.TestResult, unescape("addPassed%3Atest%3A"), "addPassed_test_", function TestResult__addPassed_test_(className,testSelector){
const self = this; (self.passed()).add_(((((self.$klass).name())._comma(unescape("%3E%3E%23")))._comma(testSelector)));
return self;
}
, "accessing", unescape("addPassed%3A%20className%20test%3A%20testSelector%0D%09%22%20Record%20the%20pass%20at%20current%20test%20stage.%20%22%0D%0D%09self%20passed%20add%3A%20%28self%20class%20name%2C%20%27%3E%3E%23%27%2C%20testSelector%29"));
smalltalk.bind(smalltalk.TestResult, unescape("addFailure%3Aclass%3Atest%3A"), "addFailure_class_test_", function TestResult__addFailure_class_test_(failure,className,testSelector){
const self = this; (self.failures()).add_((smalltalk.Array.with_with_(failure,((((self.$klass).name())._comma(unescape("%3E%3E%23")))._comma(testSelector)))));
return self;
}
, "accessing", unescape("addFailure%3A%20failure%20class%3A%20className%20test%3A%20testSelector%0D%09%22%20Record%20the%20failure%20at%20current%20test%20stage.%20%22%0D%0D%09self%20failures%20add%3A%20%28Array%20with%3A%20failure%20with%3A%20self%20class%20name%2C%20%27%3E%3E%23%27%2C%20testSelector%29"));
smalltalk.bind(smalltalk.TestResult, unescape("runs"), "runs", function TestResult__runs(){
const self = this; return self['@runs'];
}
, "accessing", unescape("runs%0D%09%22%20Return%20the%20run%20count%20of%20the%20receiver.%20%22%0D%0D%09%5Eruns"));
smalltalk.bind(smalltalk.TestResult, unescape("finished"), "finished", function TestResult__finished(){
const self = this; self['@runs']=self['@runs']._plus((1));
return self;
}
, "accessing", unescape("finished%0D%09%22%20The%20test%20has%20finished.%20%22%0D%0D%09runs%20%3A%3D%20runs%20+%201"));
smalltalk.bind(smalltalk.TestResult, unescape("status"), "status", function TestResult__status(){
const self = this; if (((self.errors()).notEmpty()).valueOf()) {return "error"};
if (((self.failures()).isEmpty()).valueOf()) {return "success"};
return "failure";
}
, "accessing", unescape("status%0D%09%22%20Return%20the%20status%20of%20the%20receiver.%20%22%0D%0D%09self%20errors%20notEmpty%20ifTrue%3A%20%5B%20%5E%23error%20%5D.%0D%09self%20failures%20isEmpty%20ifTrue%3A%20%5B%20%5E%23success%20%5D.%0D%09%5E%23failure"));
smalltalk.bind(smalltalk.TestResult, unescape("passes"), "passes", function TestResult__passes(){
const self = this; return (self.total())._minus((((self.errors()).size())._plus(((self.failures()).size()))));
}
, "accessing", unescape("passes%0D%09%22%20Return%20the%20number%20of%20tests%20that%20run%20ok.%20%22%0D%0D%09%5Eself%20total%20-%20%28self%20errors%20size%20+%20self%20failures%20size%29"));
smalltalk.bind(smalltalk.TestResult, unescape("initialize"), "initialize", function TestResult__initialize(){
const self = this; smalltalk.superImplementor(smalltalk.TestResult,'initialize').apply(self, []);
self['@timestamp']=smalltalk.DateTime.now();
self['@runs']=self['@total']=(0);
self['@passed']=smalltalk.Array.$$new();
self['@errors']=smalltalk.Array.$$new();
self['@failures']=smalltalk.Array.$$new();
return self;
}
, "initialize", unescape("initialize%0D%09%22%20Private%20-%20Initialize%20the%20receiver.%20%22%0D%0D%09super%20initialize.%0D%09timestamp%20%3A%3D%20DateTime%20now.%0D%09runs%20%3A%3D%20total%20%3A%3D%200.%0D%09passed%20%3A%3D%20Array%20new.%0D%09errors%20%3A%3D%20Array%20new.%0D%09failures%20%3A%3D%20Array%20new."));
smalltalk.bind(smalltalk.TestResult, unescape("toString"), "toString", function TestResult__toString(){
const self = this; if (((nil.isNil_(self['@total']))).valueOf()) {return "a"._comma(((self.$klass).name()))};
return ((((((((((((self.$klass).name())._comma(unescape("%20%5B")))._comma((self.status())))._comma(unescape("%5D%20")))._comma(((self.passes()).asString())))._comma(unescape("%20ok%2C%20")))._comma((((self.failures()).size()).asString())))._comma(unescape("%20failed%2C%20")))._comma((((self.errors()).size()).asString())))._comma(" errors"))._comma(unescape("%0D")))._comma((self.description()));
}
, "printing", unescape("toString%0D%09%22%20Return%20the%20string%20representation%20of%20the%20receiver.%20%22%0D%0D%09total%20isNil%20ifTrue%3A%20%5B%20%5E%27a%27%2Cself%20class%20name%20%5D.%0D%09%5Eself%20class%20name%20%2C%27%20%5B%27%2C%20self%20status%2C%27%5D%20%27%0D%09%09%2Cself%20passes%20asString%2C%27%20ok%2C%20%27%0D%09%09%2Cself%20failures%20size%20asString%2C%27%20failed%2C%20%27%0D%09%09%2Cself%20errors%20size%20asString%2C%27%20errors%27%0D%09%09%2C%27%0D%27%0D%09%09%2Cself%20description"));
smalltalk.bind(smalltalk.TestResult, unescape("description"), "description", function TestResult__description(){
var stream = nil;
const self = this; stream=(smalltalk.String.$$new()).stream();
(function TestResult__($1$){
$1$.nextPutAll_((unescape("status%3D")._comma((self.status()))));
return $1$.cr()}
)(stream);
(function TestResult__($2$){
$2$.cr();
$2$.nextPutAll_("failures:");
return $2$.cr()}
)(stream);
(self.failures()).do_((function TestResult__(tuple){
return (function TestResult__($3$){
$3$.cr();
return $3$.nextPutAll_((((unescape("%09")._comma((tuple.last())))._comma(unescape("%09")))._comma(((tuple.first()).description()))))}
)(stream);
}
));
(function TestResult__($4$){
$4$.cr();
$4$.nextPutAll_("errors:");
return $4$.cr()}
)(stream);
(self.errors()).do_((function TestResult__(tuple){
return (function TestResult__($5$){
$5$.cr();
return $5$.nextPutAll_((((unescape("%09")._comma((tuple.last())))._comma(unescape("%09")))._comma(((tuple.first()).description()))))}
)(stream);
}
));
(function TestResult__($6$){
$6$.cr();
$6$.nextPutAll_("passed:");
return $6$.cr()}
)(stream);
(self.passed()).do_((function TestResult__(stage){
return (function TestResult__($7$){
$7$.cr();
return $7$.nextPutAll_((unescape("%09")._comma(stage)))}
)(stream);
}
));
return stream.contents();
}
, "printing", unescape("description%0D%09%22%20Return%20the%20description%20of%20the%20receiver.%20%22%0D%0D%09%7C%20stream%20%7C%0D%09stream%20%3A%3D%20String%20new%20stream.%0D%09stream%20nextPutAll%3A%20%27status%3D%27%2C%20self%20status%3Bcr.%0D%09stream%20cr%3B%20nextPutAll%3A%20%27failures%3A%27%3Bcr.%0D%09self%20failures%20do%3A%20%5B%3Atuple%7C%0D%09%09stream%20cr%3BnextPutAll%3A%20%27%09%27%2Ctuple%20last%20%2C%27%09%27%20%2Ctuple%20first%20description%0D%09%5D.%0D%09stream%20cr%3B%20nextPutAll%3A%20%27errors%3A%27%3Bcr.%0D%09self%20errors%20do%3A%20%5B%3Atuple%7C%0D%09%09stream%20cr%3BnextPutAll%3A%20%27%09%27%2Ctuple%20last%20%2C%27%09%27%20%2Ctuple%20first%20description%0D%09%5D.%0D%09stream%20cr%3B%20nextPutAll%3A%20%27passed%3A%27%3Bcr.%0D%09self%20passed%20do%3A%20%5B%3Astage%7C%0D%09%09stream%20cr%3BnextPutAll%3A%20%27%09%27%2Cstage%0D%09%5D.%0D%09%5Estream%20contents"));
smalltalk.bind(smalltalk.TestRunner.$klass, unescape("runAll"), "runAll", function TestRunner_class__runAll(){
const self = this; return self.runAll_((smalltalk.TestCase.allSubclasses()));
}
, "testing", unescape("runAll%0D%09%22%20Run%20all%20test%20cases.%20%22%0D%0D%09%5Eself%20runAll%3A%20TestCase%20allSubclasses"));
smalltalk.bind(smalltalk.TestRunner.$klass, unescape("runCategories%3A"), "runCategories_", function TestRunner_class__runCategories_(categories){
const self = this; return self.runAll_(((smalltalk.TestCase.allSubclasses()).select_((function TestRunner_class__(each){
return categories.includes_((each.category()));
}
))));
}
, "testing", unescape("runCategories%3A%20categories%0D%09%22%20Run%20all%20test%20cases%20defined%20in%20TestCase%20subclasses%20matching%20categories.%20%22%0D%0D%09%5Eself%20runAll%3A%20%28TestCase%20allSubclasses%0D%09%09select%3A%20%5B%3Aeach%7C%20categories%20includes%3A%20each%20category%20%5D%29"));
smalltalk.bind(smalltalk.TestRunner.$klass, unescape("runAll%3A"), "runAll_", function TestRunner_class__runAll_(aCollection){
const self = this; return (self.$$new()).runClasses_(aCollection);
}
, "testing", unescape("runAll%3A%20aCollection%0D%09%22%20Run%20all%20test%20cases%20defined%20in%20aCollection%20%28of%20TestCase%20subclasses%29.%20%22%0D%0D%09%5Eself%20new%20runClasses%3A%20aCollection"));
smalltalk.bind(smalltalk.TestRunner.$klass, unescape("run%3A"), "run_", function TestRunner_class__run_(aTestCase){
const self = this; return (self.$$new()).runAll_((smalltalk.Array.with_(aTestCase)));
}
, "testing", unescape("run%3A%20aTestCase%0D%09%22%20Run%20a%20test%20case.%20%22%0D%0D%09%5Eself%20new%20runAll%3A%20%28Array%20with%3A%20aTestCase%29"));
smalltalk.bind(smalltalk.TestRunner, unescape("progress"), "progress", function TestRunner__progress(){
const self = this; return self['@progress'];
}
, "accessing", unescape("progress%0D%09%22%20Return%20the%20progress%20indicator%20of%20the%20receiver%20%28or%20nil%29.%20%22%0D%0D%09%5Eprogress"));
smalltalk.bind(smalltalk.TestRunner, unescape("progress%3A"), "progress_", function TestRunner__progress_(aProgress){
const self = this; self['@progress']=aProgress;
return self;
}
, "accessing", unescape("progress%3A%20aProgress%0D%09%22%20Set%20the%20progress%20indicator%20of%20the%20receiver.%20%22%0D%0D%09progress%20%3A%3D%20aProgress"));
smalltalk.bind(smalltalk.TestRunner, unescape("timeout"), "timeout", function TestRunner__timeout(){
const self = this; return self['@timeout'];
}
, "accessing", unescape("timeout%0D%09%22%20Return%20the%20timeout%20of%20the%20receiver%20%28or%20nil%29.%20%22%0D%0D%09%5Etimeout"));
smalltalk.bind(smalltalk.TestRunner, unescape("percent"), "percent", function TestRunner__percent(){
var runs = nil;
var total = nil;
const self = this; if (((nil.isNil_(self['@result']))).valueOf()) {return (0)};
runs=self['@result'].runs();
total=self['@result'].total();
if (((nil.is_eqeq_(total,(0)))).valueOf()) {return (0)};
return ((100)._star(runs))._slash(total);
}
, "accessing", unescape("percent%0D%09%22%20Return%20the%20percent%20of%20advance%20in%20the%20current%20test%20set.%20%22%0D%09%7C%20runs%20total%20%7C%0D%09result%20isNil%20ifTrue%3A%20%5B%20%5E0%20%5D.%0D%09runs%20%3A%3D%20result%20runs.%0D%09total%20%3A%3D%20result%20total.%0D%09total%20%3D%3D%200%20ifTrue%3A%20%5B%20%5E0%20%5D.%0D%09%22work%20around%20a%20fraction%20issue%20for%20now%22%0D%09%5E100.0%20*%20runs%20/%20total"));
smalltalk.bind(smalltalk.TestRunner, unescape("timeout%3A"), "timeout_", function TestRunner__timeout_(aNumber){
const self = this; self['@timeout']=aNumber;
return self;
}
, "accessing", unescape("timeout%3A%20aNumber%0D%09%22%20Set%20the%20timeout%20of%20the%20receiver.%0D%09WARNING%3A%20do%20not%20set%20the%20timeout%20if%20the%20platform%20do%20not%20support%20setTimeout%28%29.%0D%09%22%0D%0D%09timeout%20%3A%3D%20aNumber"));
smalltalk.bind(smalltalk.TestRunner, unescape("notificationBlock"), "notificationBlock", function TestRunner__notificationBlock(){
const self = this; if (((nil.isNil_(self['@notificationBlock']))).valueOf()) {return (function TestRunner__(test,selector){
return self.print_(((((test.$klass).name())._comma(unescape("%3E%3E%23")))._comma(selector)));
}
)};
return self['@notificationBlock'];
}
, "accessing", unescape("notificationBlock%0D%09%22%20Return%20the%20notificationBlock%20of%20the%20receiver%20%28or%20default%20printing%20block%29.%20%22%0D%0D%09notificationBlock%20isNil%20ifTrue%3A%20%5B%0D%09%09%5E%5B%3Atest%20%3Aselector%20%7C%20self%20print%3A%20test%20class%20name%2C%27%3E%3E%23%27%2Cselector%20%5D%0D%09%5D.%0D%09%5EnotificationBlock"));
smalltalk.bind(smalltalk.TestRunner, unescape("notificationBlock%3A"), "notificationBlock_", function TestRunner__notificationBlock_(aTwoArgumentBlock){
const self = this; self['@notificationBlock']=aTwoArgumentBlock;
return self;
}
, "accessing", unescape("notificationBlock%3A%20aTwoArgumentBlock%0D%09%22%20Set%20the%20notificationBlock%20of%20the%20receiver.%20%22%0D%0D%09notificationBlock%20%3A%3D%20aTwoArgumentBlock"));
smalltalk.bind(smalltalk.TestRunner, unescape("runClasses%3A"), "runClasses_", function TestRunner__runClasses_(aCollection){
const self = this; return self.runTests_(aCollection);
}
, "testing", unescape("runClasses%3A%20aCollection%0D%09%22%20Run%20all%20test%20cases%20defined%20in%20aCollection%20%28of%20TestCase%20subclasses%29.%20%22%0D%0D%09%5Eself%20runTests%3A%20aCollection"));
smalltalk.bind(smalltalk.TestRunner, unescape("initTestResult"), "initTestResult", function TestRunner__initTestResult(){
const self = this; self['@result']=smalltalk.TestResult.$$new();
return self;
}
, "private", unescape("initTestResult%0D%09result%20%3A%3D%20TestResult%20new"));
smalltalk.bind(smalltalk.TestRunner, unescape("runTests%3A"), "runTests_", function TestRunner__runTests_(specification){
var tests = nil;
const self = this; self.percent_((0));
tests=specification.collect_((function TestRunner__(each){
if ((each.isClass()).valueOf()) {return smalltalk.Array.with_with_(each,(each.selectorsForTest()))} else {return each};
}
));
self.initTestResult();
self['@result'].total_((tests.inject_into_((0),(function TestRunner__(total,tuple){
return total._plus(((tuple.last()).size()));
}
))));
tests.do_((function TestRunner__(tuple){
self.percent_((self.percent()));
return self.valueWithTimeout_((function TestRunner__(){
return (tuple.first()).runCases_for_doing_((tuple.last()),self['@result'],(self.notificationBlock()));
}
));
}
));
return self['@result'];
}
, "testing", unescape("runTests%3A%20specification%0D%09%22%20Run%20all%20test%20cases%20defined%20in%20specification.%0D%09Return%20the%20result%20of%20testing.%0D%09specification%20is%20a%20collection%20of%20TestCase%20subclass%20or%20tuples%20of%20%28TestCaseSubclass%20selectors%29%0D%09%22%0D%0D%09%7C%20tests%20%7C%0D%09self%20percent%3A%200.%0D%09tests%20%3A%3D%20specification%20collect%3A%20%5B%3Aeach%7C%0D%09%09each%20isClass%0D%09%09ifTrue%3A%20%5B%20Array%20with%3A%20each%20with%3A%20each%20selectorsForTest%20%5D%0D%09%09ifFalse%3A%20%5B%20each%20%5D%0D%09%5D.%0D%09self%20initTestResult.%0D%09result%20total%3A%20%28tests%20inject%3A%200%20into%3A%20%5B%3Atotal%20%3Atuple%7C%20total%20+%20tuple%20last%20size%20%5D%29.%0D%09tests%20do%3A%20%5B%3Atuple%7C%0D%09%09self%20percent%3A%20self%20percent.%0D%09%09self%20valueWithTimeout%3A%20%5B%0D%09%09%09tuple%20first%0D%09%09%09%09runCases%3A%20tuple%20last%20for%3A%20result%0D%09%09%09%09doing%3A%20self%20notificationBlock%0D%09%09%5D.%0D%09%5D.%0D%09%5Eresult"));
smalltalk.bind(smalltalk.TestRunner, unescape("valueWithTimeout%3A"), "valueWithTimeout_", function TestRunner__valueWithTimeout_(aBlock){
const self = this; if (((nil.isNil_(self.timeout()))).valueOf()) {return aBlock.value()};
return aBlock.valueWithTimeout_((self.timeout()));
}
, "private", unescape("valueWithTimeout%3A%20aBlock%0D%09%22%20Private%20-%20Return%20the%20result%20of%20evaluating%20aBlock%20%28with%20timeout%29.%20%22%0D%0D%09self%20timeout%20isNil%20ifTrue%3A%20%5B%20%5EaBlock%20value%20%5D.%0D%09%5EaBlock%20valueWithTimeout%3A%20self%20timeout"));
smalltalk.bind(smalltalk.TestRunner, unescape("percent%3A"), "percent_", function TestRunner__percent_(aNumber){
const self = this; if (((nil.isNil_(self.progress()))).valueOf()) {return self};
(self.progress()).value_(aNumber);
return self;
}
, "private", unescape("percent%3A%20aNumber%0D%09%22%20Private%20-%20Notify%20the%20percent%20of%20advance%20in%20the%20current%20test%20set.%20%22%0D%0D%09self%20progress%20isNil%20ifTrue%3A%20%5B%20%5Eself%20%5D.%0D%09self%20progress%20value%3A%20aNumber"));
