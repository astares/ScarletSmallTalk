smalltalk.addClass("DictionaryTestCase", smalltalk.TestCase, [], 'nil');
smalltalk.DictionaryTestCase.$classVariableNames=("");
smalltalk.bind(smalltalk.DictionaryTestCase, unescape("testAddObjectsWithTheSameJSToString"), "testAddObjectsWithTheSameJSToString", function DictionaryTestCase__testAddObjectsWithTheSameJSToString(){
var dict = nil;
var a = nil;
var b = nil;
var aValue = nil;
var bValue = nil;
const self = this; dict=smalltalk.Dictionary.$$new();
self.assert_((dict.isEmpty()));
a=smalltalk.Object.$$new();
aValue="a";
b=smalltalk.Object.$$new();
bValue="b";
self.deny_equals_(a,b);
dict.add_((a._minus_gt(aValue)));
self.assert_equals_((dict.size()),(1));
self.assert_equals_((dict.at_(a)),aValue);
dict.add_((b._minus_gt(bValue)));
self.assert_equals_((dict.size()),(2));
self.assert_equals_((dict.at_(a)),aValue);
self.assert_equals_((dict.at_(b)),bValue);
return self;
}
, "running", unescape("testAddObjectsWithTheSameJSToString%0D%0D%09%7C%20dict%20a%20b%20aValue%20bValue%20%7C%0D%09dict%20%3A%3D%20Dictionary%20new.%0D%09self%20assert%3A%20dict%20isEmpty.%0D%09a%20%3A%3D%20Object%20new.%0D%09aValue%20%3A%3D%20%27a%27.%0D%09b%20%3A%3D%20Object%20new.%0D%09bValue%20%3A%3D%20%27b%27.%0D%09self%0D%09%09deny%3A%20a%0D%09%09equals%3A%20b.%0D%09dict%20add%3A%20a%20-%3E%20aValue.%0D%09self%0D%09%09assert%3A%20dict%20size%0D%09%09equals%3A%201.%0D%09self%0D%09%09assert%3A%20%28dict%20at%3A%20a%29%0D%09%09equals%3A%20aValue.%0D%09dict%20add%3A%20b%20-%3E%20bValue.%0D%09self%0D%09%09assert%3A%20dict%20size%0D%09%09equals%3A%202.%0D%09self%0D%09%09assert%3A%20%28dict%20at%3A%20a%29%0D%09%09equals%3A%20aValue.%0D%09self%0D%09%09assert%3A%20%28dict%20at%3A%20b%29%0D%09%09equals%3A%20bValue"));
smalltalk.bind(smalltalk.DictionaryTestCase, unescape("testAddKeyWhichMatchesJSPropertyName"), "testAddKeyWhichMatchesJSPropertyName", function DictionaryTestCase__testAddKeyWhichMatchesJSPropertyName(){
var dict = nil;
var toString = nil;
var triggerEvent = nil;
const self = this; dict=smalltalk.Dictionary.$$new();
self.assert_((dict.isEmpty()));
toString="toString";
triggerEvent="triggerEvent:";
(function DictionaryTestCase__($1$){
$1$.add_((toString._minus_gt(toString)));
return $1$.add_((triggerEvent._minus_gt(triggerEvent)))}
)(dict);
self.assert_equals_((dict.size()),(2));
self.assert_equals_((dict.at_(toString)),toString);
self.assert_equals_((dict.at_(triggerEvent)),triggerEvent);
return self;
}
, "running", unescape("testAddKeyWhichMatchesJSPropertyName%0D%0D%09%7C%20dict%20toString%20triggerEvent%20%7C%0D%09dict%20%3A%3D%20Dictionary%20new.%0D%09self%20assert%3A%20dict%20isEmpty.%0D%09toString%20%3A%3D%20%27toString%27.%0D%09triggerEvent%20%3A%3D%20%27triggerEvent%3A%27.%0D%09dict%0D%09%09add%3A%20toString%20-%3E%20toString%3B%0D%09%09add%3A%20triggerEvent%20-%3E%20triggerEvent.%0D%09self%0D%09%09assert%3A%20dict%20size%0D%09%09equals%3A%202.%0D%09self%0D%09%09assert%3A%20%28dict%20at%3A%20toString%29%0D%09%09equals%3A%20toString.%0D%09self%0D%09%09assert%3A%20%28dict%20at%3A%20triggerEvent%29%0D%09%09equals%3A%20triggerEvent"));
