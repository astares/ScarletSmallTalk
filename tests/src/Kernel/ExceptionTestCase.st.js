smalltalk.addClass("ExceptionTestCase", smalltalk.TestCase, [], 'nil');
smalltalk.ExceptionTestCase.$classVariableNames=("");
smalltalk.bind(smalltalk.ExceptionTestCase, unescape("testSignal"), "testSignal", function ExceptionTestCase__testSignal(){
const self = this; self.should_raise_((function ExceptionTestCase__(){
return smalltalk.Exception.signal();
}
),smalltalk.Exception);
return self;
}
, "running", unescape("testSignal%0D%0D%09self%0D%09%09should%3A%20%5BException%20signal%5D%0D%09%09raise%3A%20Exception%20"));
smalltalk.bind(smalltalk.ExceptionTestCase, unescape("testOnDoWithNonLocalReturn"), "testOnDoWithNonLocalReturn", function ExceptionTestCase__testOnDoWithNonLocalReturn(){
const self = this; var $early={name:"stReturn"};
try {
(function ExceptionTestCase__(){
$early.result=true; throw ($early);
}
).on_do_(smalltalk.Error,(function ExceptionTestCase__(ex){
return self.assert_(false);
}
));
return self;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "running", unescape("testOnDoWithNonLocalReturn%0D%0D%20%20%20%20%5B%5Etrue%5D%0D%20%20%20%20%20%20%20%20on%3A%20Error%0D%20%20%20%20%20%20%20%20do%3A%20%5B%3Aex%20%7C%20self%20assert%3A%20false%5D"));
