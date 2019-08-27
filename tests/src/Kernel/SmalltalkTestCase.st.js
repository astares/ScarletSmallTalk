smalltalk.addClass("SmalltalkTestCase", smalltalk.TestCase, [], 'nil');
smalltalk.SmalltalkTestCase.$classVariableNames=("");
smalltalk.bind(smalltalk.SmalltalkTestCase, unescape("testEval"), "testEval", function SmalltalkTestCase__testEval(){
const self = this; self.assert_equals_(((function SmalltalkTestCase__(){
return (smalltalk.Smalltalk.current()).eval_(unescape("5%20+%205"));
}
).value()),(10));
return self;
}
, "running", unescape("testEval%0D%0D%09self%20%0D%09%09assert%3A%20%5BSmalltalk%20current%20eval%3A%20%275%20+%205%27%5D%20value%0D%09%09equals%3A%2010%20"));
smalltalk.bind(smalltalk.SmalltalkTestCase, unescape("testEvaluate"), "testEvaluate", function SmalltalkTestCase__testEvaluate(){
const self = this; self.assert_equals_(((function SmalltalkTestCase__(){
return ((smalltalk.Smalltalk.current()).compilerSupport()).evaluate_(unescape("5%20+%205"));
}
).value()),(10));
return self;
}
, "running", unescape("testEvaluate%0D%0D%09self%20%0D%09%09assert%3A%20%5BSmalltalk%20current%20compilerSupport%20evaluate%3A%20%275%20+%205%27%5D%20value%0D%09%09equals%3A%2010%20"));
smalltalk.bind(smalltalk.SmalltalkTestCase, unescape("testDoIt"), "testDoIt", function SmalltalkTestCase__testDoIt(){
const self = this; self.assert_equals_(((function SmalltalkTestCase__(){
return ((smalltalk.Smalltalk.current()).compilerSupport()).doIt_(unescape("5%20+%205"));
}
).value()),(10));
return self;
}
, "running", unescape("testDoIt%0D%0D%09self%20%0D%09%09assert%3A%20%5BSmalltalk%20current%20compilerSupport%20doIt%3A%20%275%20+%205%27%5D%20value%0D%09%09equals%3A%2010%20"));
