smalltalk.addClass("StCompilerTestClass", smalltalk.Object, ['instVar1', 'instVar2', 'instVar3', 'value1', 'value2'], 'Compiler-JS-Test');
smalltalk.StCompilerTestClass.$classVariableNames=("ClassVar1 ClassVar2 ClassVar3");
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("instVar"), "instVar", function StCompilerTestClass__instVar(){
const self = this; self['@instVar1'];
return self;
}
, "variables instance", unescape("instVar%0D%09instVar1"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("instVarReturn"), "instVarReturn", function StCompilerTestClass__instVarReturn(){
const self = this; return self['@instVar1'];
}
, "variables instance", unescape("instVarReturn%0D%09%5EinstVar1"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("initialize"), "initialize", function StCompilerTestClass__initialize(){
const self = this; self['@instVar1']="instVar1";
self['@instVar2']="instVar2";
self['@instVar3']="instVar3";
return self;
}
, "initialize-release", unescape("initialize%0D%09instVar1%20%3A%3D%20%27instVar1%27.%0D%09instVar2%20%3A%3D%20%27instVar2%27.%0D%09instVar3%20%3A%3D%20%27instVar3%27.%0D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("value1%3A"), "value1_", function StCompilerTestClass__value1_(aValue){
const self = this; self['@value1']=aValue;
return self;
}
, "initialize-release", unescape("value1%3A%20aValue%0D%09value1%20%3A%3D%20aValue"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("value2%3A"), "value2_", function StCompilerTestClass__value2_(aValue){
const self = this; self['@value2']=aValue;
return self;
}
, "initialize-release", unescape("value2%3A%20aValue%0D%09value2%20%3A%3D%20aValue"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("value1"), "value1", function StCompilerTestClass__value1(){
const self = this; return self['@value1'];
}
, "accessing", unescape("value1%0D%09%5Evalue1"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("value2"), "value2", function StCompilerTestClass__value2(){
const self = this; return self['@value2'];
}
, "accessing", unescape("value2%0D%09%5Evalue2"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("%5C%5C"), "_bk_bk", function StCompilerTestClass___bk_bk(aNumber){
const self = this; return self['@value1']._bk_bk(aNumber);
}
, "messages", unescape("%5C%5C%20aNumber%0D%09%5Evalue1%20%5C%5C%20aNumber"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("binary"), "binary", function StCompilerTestClass__binary(){
const self = this; (1)._plus((2));
return self;
}
, "messages", unescape("binary%0D%091%20+%202"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("binaryBinaryReturn"), "binaryBinaryReturn", function StCompilerTestClass__binaryBinaryReturn(){
const self = this; return ((1)._plus((2)))._minus((3));
}
, "messages", unescape("binaryBinaryReturn%0D%09%5E1%20+%202%20-%203"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("binaryBracedReturn"), "binaryBracedReturn", function StCompilerTestClass__binaryBracedReturn(){
const self = this; return (1)._plus(((2)._star((3))));
}
, "messages", unescape("binaryBracedReturn%0D%09%5E1%20+%20%282%20*%203%29"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("binaryReturn"), "binaryReturn", function StCompilerTestClass__binaryReturn(){
const self = this; return (1)._plus((2));
}
, "messages", unescape("binaryReturn%0D%09%5E1%20+%202"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("cascadeKeywordReturn"), "cascadeKeywordReturn", function StCompilerTestClass__cascadeKeywordReturn(){
const self = this; return (function StCompilerTestClass__($1$){
$1$.add_((1));
return $1$.add_((2))}
)(self['@value1']);
}
, "messages", unescape("cascadeKeywordReturn%0D%09%5Evalue1%0D%09%09add%3A%201%3B%0D%09%09add%3A%202"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("cascadeKeywordReturnYourself"), "cascadeKeywordReturnYourself", function StCompilerTestClass__cascadeKeywordReturnYourself(){
const self = this; return (function StCompilerTestClass__($1$){
$1$.add_((1));
$1$.add_((2));
return $1$.yourself()}
)(self['@value1']);
}
, "messages", unescape("cascadeKeywordReturnYourself%0D%09%5Evalue1%0D%09%09add%3A%201%3B%0D%09%09add%3A%202%3B%0D%09%09yourself"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("cascadeLiteralReturn"), "cascadeLiteralReturn", function StCompilerTestClass__cascadeLiteralReturn(){
const self = this; return (function StCompilerTestClass__($1$){
$1$.odd();
return $1$.even()}
)((5));
}
, "messages", unescape("cascadeLiteralReturn%0D%09%5E5%0D%09%09odd%3B%0D%09%09even"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("cascadeMessageReceiverReturn"), "cascadeMessageReceiverReturn", function StCompilerTestClass__cascadeMessageReceiverReturn(){
const self = this; return (function StCompilerTestClass__($1$){
$1$.add_((1));
return $1$.add_((2))}
)(self['@value1'].yourself());
}
, "messages", unescape("cascadeMessageReceiverReturn%0D%09%5Evalue1%20yourself%0D%09%09add%3A%201%3B%0D%09%09add%3A%202"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("cascadeSelf"), "cascadeSelf", function StCompilerTestClass__cascadeSelf(){
const self = this; (function StCompilerTestClass__($1$){
$1$.yourself();
return $1$.yourself()}
)(self);
return self;
}
, "messages", unescape("cascadeSelf%0D%09self%0D%09%09yourself%3B%0D%09%09yourself"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("cascadeUnaryReturn"), "cascadeUnaryReturn", function StCompilerTestClass__cascadeUnaryReturn(){
const self = this; return (function StCompilerTestClass__($1$){
$1$.yourself();
return $1$.yourself()}
)(self['@value1']);
}
, "messages", unescape("cascadeUnaryReturn%0D%09%5Evalue1%0D%09%09yourself%3B%0D%09%09yourself"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("keyword"), "keyword", function StCompilerTestClass__keyword(){
const self = this; return self.keywordMethodReturn_((1));
}
, "messages", unescape("keyword%0D%09%5Eself%20keywordMethodReturn%3A%201"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("sendSuper"), "sendSuper", function StCompilerTestClass__sendSuper(){
const self = this; smalltalk.superImplementor(smalltalk.StCompilerTestClass,'isNil').apply(self, []);
return self;
}
, "messages", unescape("sendSuper%0D%09super%20isNil"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("unary"), "unary", function StCompilerTestClass__unary(){
const self = this; "123".size();
return self;
}
, "messages", unescape("unary%0D%09%27123%27%20size"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("unaryAssignmentReceiver"), "unaryAssignmentReceiver", function StCompilerTestClass__unaryAssignmentReceiver(){
const self = this; return (self['@value1']="123"._comma("4")).size();
}
, "messages", unescape("unaryAssignmentReceiver%0D%09%5E%28value1%20%3A%3D%20%27123%27%20%2C%20%274%27%29%20size"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("unaryReturn"), "unaryReturn", function StCompilerTestClass__unaryReturn(){
const self = this; return "123".size();
}
, "messages", unescape("unaryReturn%0D%09%5E%27123%27%20size"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("unaryUnaryReturn"), "unaryUnaryReturn", function StCompilerTestClass__unaryUnaryReturn(){
const self = this; return ("123".size()).even();
}
, "messages", unescape("unaryUnaryReturn%0D%09%5E%27123%27%20size%20even"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("+"), "_plus", function StCompilerTestClass___plus(something){
const self = this; return something;
}
, "method", unescape("+%20something%0D%09%5Esomething%0D%09"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("emptyMethod"), "emptyMethod", function StCompilerTestClass__emptyMethod(){
const self = this; self;
return self;
}
, "method", "emptyMethod");
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("keywordMethod%3A"), "keywordMethod_", function StCompilerTestClass__keywordMethod_(arg1){
const self = this; self;
return self;
}
, "method", unescape("keywordMethod%3A%20arg1%0D%09"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("keywordMethod%3Awith%3A"), "keywordMethod_with_", function StCompilerTestClass__keywordMethod_with_(arg1,arg2){
const self = this; self;
return self;
}
, "method", unescape("keywordMethod%3A%20arg1%20with%3A%20arg2%0D%09"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("keywordMethod%3Awith%3Awith%3A"), "keywordMethod_with_with_", function StCompilerTestClass__keywordMethod_with_with_(arg1,arg2,arg3){
const self = this; self;
return self;
}
, "method", unescape("keywordMethod%3A%20arg1%20with%3A%20arg2%20with%3A%20arg3%0D%09"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("keywordMethodReturn%3A"), "keywordMethodReturn_", function StCompilerTestClass__keywordMethodReturn_(arg1){
const self = this; return arg1;
}
, "method", unescape("keywordMethodReturn%3A%20arg1%0D%09%5Earg1"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("keywordMethodReturn%3Awith%3A"), "keywordMethodReturn_with_", function StCompilerTestClass__keywordMethodReturn_with_(arg1,arg2){
const self = this; return arg2;
}
, "method", unescape("keywordMethodReturn%3A%20arg1%20with%3A%20arg2%0D%09%5Earg2"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("keywordMethodReturn%3Awith%3Awith%3A"), "keywordMethodReturn_with_with_", function StCompilerTestClass__keywordMethodReturn_with_with_(arg1,arg2,arg3){
const self = this; return arg3;
}
, "method", unescape("keywordMethodReturn%3A%20arg1%20with%3A%20arg2%20with%3A%20arg3%0D%09%5Earg3"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("unaryMethod"), "unaryMethod", function StCompilerTestClass__unaryMethod(){
const self = this; self;
return self;
}
, "method", unescape("unaryMethod%0D%09"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("primitiveWithFollowUpFailed"), "primitiveWithFollowUpFailed", function StCompilerTestClass__primitiveWithFollowUpFailed(){
var $$primitiveResult = smalltalk.primitiveManager.modules.NKBarcodeScanner.primScan(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; self.primitiveFailed();
return self;
}
, "primitives", unescape("primitiveWithFollowUpFailed%0D%09%3Cprimitive%3A%20%27primScan%27%20module%3A%20%27NKBarcodeScanner%27%3E%0D%09self%20primitiveFailed"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("primitiveWithFollowUpReturn"), "primitiveWithFollowUpReturn", function StCompilerTestClass__primitiveWithFollowUpReturn(){
var $$primitiveResult = smalltalk.primitiveManager.modules.NKBarcodeScanner.primScan(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return (42);
}
, "primitives", unescape("primitiveWithFollowUpReturn%0D%09%3Cprimitive%3A%20%27primScan%27%20module%3A%20%27NKBarcodeScanner%27%3E%0D%09%5E42"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("ifFalse"), "ifFalse", function StCompilerTestClass__ifFalse(){
const self = this; if (((1)._lt((2))).not()) {"one"};
return self;
}
, "rewrite if", unescape("ifFalse%0D%091%20%3C%202%0D%09%09ifFalse%3A%20%5B%27one%27%5D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("ifFalseAssignment"), "ifFalseAssignment", function StCompilerTestClass__ifFalseAssignment(){
var a = nil;
const self = this; if ((a=(1)._lt((2))).not()) {"one"};
return self;
}
, "rewrite if", unescape("ifFalseAssignment%0D%09%7C%20a%20%7C%0D%09%28a%20%3A%3D%201%20%3C%202%29%0D%09%09ifFalse%3A%20%5B%27one%27%5D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("ifFalseBlockIfTrueReturn"), "ifFalseBlockIfTrueReturn", function StCompilerTestClass__ifFalseBlockIfTrueReturn(){
const self = this; if ((self['@value1']._lt(self['@value2'])).not()) {if ((self['@value1']._gt(self['@value2'])).valueOf()) {return []}};
return self;
}
, "rewrite if", unescape("ifFalseBlockIfTrueReturn%0D%09value1%20%3C%20value2%20ifFalse%3A%20%5B%0D%09%09value1%20%3E%20value2%20ifTrue%3A%20%5B%0D%09%09%09%5E%20%23%28%29%5D%5D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("ifFalseBlockReturnIfTrue"), "ifFalseBlockReturnIfTrue", function StCompilerTestClass__ifFalseBlockReturnIfTrue(){
const self = this; if ((self['@value1']._lt(self['@value2'])).not()) {if ((self['@value1']._gt(self['@value2'])).valueOf()) {return []} else {return nil}};
return self;
}
, "rewrite if", unescape("ifFalseBlockReturnIfTrue%0D%09value1%20%3C%20value2%20ifFalse%3A%20%5B%0D%09%09%5Evalue1%20%3E%20value2%20ifTrue%3A%20%5B%0D%09%09%09%23%28%29%5D%5D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("ifFalseIfTrue"), "ifFalseIfTrue", function StCompilerTestClass__ifFalseIfTrue(){
const self = this; if (((1)._lt((2))).not()) {"two"} else {"one"};
return self;
}
, "rewrite if", unescape("ifFalseIfTrue%0D%091%20%3C%202%0D%09%09ifFalse%3A%20%5B%27two%27%5D%0D%09%09ifTrue%3A%20%5B%27one%27%5D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("ifFalseReturn"), "ifFalseReturn", function StCompilerTestClass__ifFalseReturn(){
const self = this; if ((self['@value1']._lt(self['@value2'])).not()) {return "one"};
return self;
}
, "rewrite if", unescape("ifFalseReturn%0D%09value1%20%3C%20value2%0D%09%09ifFalse%3A%20%5B%5E%27one%27%5D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("ifNilIfNotNil"), "ifNilIfNotNil", function StCompilerTestClass__ifNilIfNotNil(){
const self = this; (nil.isNil_(self['@value1']) ? "one" : "two");
return self;
}
, "rewrite if", unescape("ifNilIfNotNil%0D%09value1%0D%09%09ifNil%3A%20%5B%27one%27%5D%0D%09%09ifNotNil%3A%20%5B%27two%27%5D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("ifNilIfNotNilBlocksReturn"), "ifNilIfNotNilBlocksReturn", function StCompilerTestClass__ifNilIfNotNilBlocksReturn(){
const self = this; return (nil.isNil_(self['@value1']) ? (function StCompilerTestClass__(){
"one".size();
return "one";
}
)() : true.ifTrue_ifFalse_((function StCompilerTestClass__(){
return "two";
}
),(function StCompilerTestClass__(){
return "three";
}
)));
}
, "rewrite if", unescape("ifNilIfNotNilBlocksReturn%0D%09%5Evalue1%0D%09%09ifNil%3A%20%5B%27one%27%20size.%20%27one%27%5D%0D%09%09ifNotNil%3A%20%5Btrue%20ifTrue%3A%20%5B%27two%27%5D%20ifFalse%3A%20%5B%27three%27%5D%5D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("ifNilIfNotNilReturn"), "ifNilIfNotNilReturn", function StCompilerTestClass__ifNilIfNotNilReturn(){
const self = this; return (nil.isNil_(self['@value1']) ? "one" : "two");
}
, "rewrite if", unescape("ifNilIfNotNilReturn%0D%09%5Evalue1%0D%09%09ifNil%3A%20%5B%27one%27%5D%0D%09%09ifNotNil%3A%20%5B%27two%27%5D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("ifNotNilIfNilReturn"), "ifNotNilIfNilReturn", function StCompilerTestClass__ifNotNilIfNilReturn(){
const self = this; return (!nil.isNil_(self['@value1']) ? "one" : "two");
}
, "rewrite if", unescape("ifNotNilIfNilReturn%0D%09%5Evalue1%0D%09%09ifNotNil%3A%20%5B%27one%27%5D%0D%09%09ifNil%3A%20%5B%27two%27%5D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("ifTrue"), "ifTrue", function StCompilerTestClass__ifTrue(){
const self = this; if (((1)._lt((2))).valueOf()) {"one"};
return self;
}
, "rewrite if", unescape("ifTrue%0D%091%20%3C%202%0D%09%09ifTrue%3A%20%5B%27one%27%5D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("ifTrueIfFalse"), "ifTrueIfFalse", function StCompilerTestClass__ifTrueIfFalse(){
const self = this; if (((1)._lt((2))).valueOf()) {"one"} else {"two"};
return self;
}
, "rewrite if", unescape("ifTrueIfFalse%0D%091%20%3C%202%0D%09%09ifTrue%3A%20%5B%27one%27%5D%0D%09%09ifFalse%3A%20%5B%27two%27%5D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("ifTrueIfFalseReturn"), "ifTrueIfFalseReturn", function StCompilerTestClass__ifTrueIfFalseReturn(){
const self = this; if ((self['@value1']._lt(self['@value2'])).valueOf()) {"one"} else {return "two"};
return self;
}
, "rewrite if", unescape("ifTrueIfFalseReturn%0D%09value1%20%3C%20value2%0D%09%09ifTrue%3A%20%5B%27one%27%5D%0D%09%09ifFalse%3A%20%5B%5E%27two%27%5D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("ifTrueIfFalseReturnBlockValue%3A"), "ifTrueIfFalseReturnBlockValue_", function StCompilerTestClass__ifTrueIfFalseReturnBlockValue_(aBlock){
const self = this; if ((self['@value1']._lt(self['@value2'])).valueOf()) {return aBlock.value()} else {return self['@value1']};
}
, "rewrite if", unescape("ifTrueIfFalseReturnBlockValue%3A%20aBlock%0D%09%5Evalue1%20%3C%20value2%0D%09%09ifTrue%3A%20aBlock%20ifFalse%3A%20%5Bvalue1%5D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("ifTrueIfFalseReturnLiteralValue"), "ifTrueIfFalseReturnLiteralValue", function StCompilerTestClass__ifTrueIfFalseReturnLiteralValue(){
const self = this; if ((self['@value1']._lt(self['@value2'])).valueOf()) {return (4).value()} else {return self['@value1']};
}
, "rewrite if", unescape("ifTrueIfFalseReturnLiteralValue%0D%09%5Evalue1%20%3C%20value2%0D%09%09ifTrue%3A%204%20ifFalse%3A%20%5Bvalue1%5D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("ifTrueReturn"), "ifTrueReturn", function StCompilerTestClass__ifTrueReturn(){
const self = this; if ((self['@value1']._lt(self['@value2'])).valueOf()) {return "one"};
return self;
}
, "rewrite if", unescape("ifTrueReturn%0D%09value1%20%3C%20value2%0D%09%09ifTrue%3A%20%5B%5E%27one%27%5D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("ifTrueReturnBlock"), "ifTrueReturnBlock", function StCompilerTestClass__ifTrueReturnBlock(){
const self = this; if (((1)._lt((2))).valueOf()) {return (function StCompilerTestClass__(a,block){
return a.with_(block);
}
)};
return self;
}
, "rewrite if", unescape("ifTrueReturnBlock%0D%091%20%3C%202%0D%09%09ifTrue%3A%20%5B%5E%20%5B%20%3Aa%20%3Ablock%20%7C%20a%20with%3A%20block%5D%5D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("ifTrueReturnBlockValue%3A"), "ifTrueReturnBlockValue_", function StCompilerTestClass__ifTrueReturnBlockValue_(aBlock){
const self = this; if ((self['@value1']._lt(self['@value2'])).valueOf()) {return aBlock.value()} else {return self['@value1']};
}
, "rewrite if", unescape("ifTrueReturnBlockValue%3A%20aBlock%0D%09%5Evalue1%20%3C%20value2%0D%09%09ifTrue%3A%20aBlock%20ifFalse%3A%20%5Bvalue1%5D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("ifTrueReturnIfFalse"), "ifTrueReturnIfFalse", function StCompilerTestClass__ifTrueReturnIfFalse(){
const self = this; if ((self['@value1']._lt(self['@value2'])).valueOf()) {return "one"} else {"two"};
return self;
}
, "rewrite if", unescape("ifTrueReturnIfFalse%0D%09value1%20%3C%20value2%0D%09%09ifTrue%3A%20%5B%5E%27one%27%5D%0D%09%09ifFalse%3A%20%5B%27two%27%5D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("ifUndefined"), "ifUndefined", function StCompilerTestClass__ifUndefined(){
const self = this; (function(){var $1$; $1$ = self['@value1']; if (typeof($1$) == "undefined") { return "one" } else { return $1$ }})();
return self;
}
, "rewrite if", unescape("ifUndefined%0D%09value1%0D%09%09ifUndefined%3A%20%5B%27one%27%5D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("ifUndefinedReturn"), "ifUndefinedReturn", function StCompilerTestClass__ifUndefinedReturn(){
const self = this; return (function(){var $1$; $1$ = (function(){var $2$; $2$ = self[self['@value1']]; return nil.isNil_($2$) ? nil : $2$})(); if (typeof($1$) == "undefined") { return "one" } else { return $1$ }})();
}
, "rewrite if", unescape("ifUndefinedReturn%0D%09%5E%28self%20basicAt%3A%20value1%29%0D%09%09ifUndefined%3A%20%5B%27one%27%5D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("inlineIfTrueIfFalse"), "inlineIfTrueIfFalse", function StCompilerTestClass__inlineIfTrueIfFalse(){
var result = nil;
const self = this; result=(self['@value1']._lt(self['@value2'])).ifTrue_ifFalse_((function StCompilerTestClass__(){
return self['@instVar1'];
}
),(function StCompilerTestClass__(){
return self['@instVar2'];
}
));
return result;
}
, "rewrite if", unescape("inlineIfTrueIfFalse%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%20value1%20%3C%20value2%0D%09%09ifTrue%3A%20%5BinstVar1%5D%0D%09%09ifFalse%3A%20%5BinstVar2%5D.%0D%09%5Eresult%0D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("inlineIfTrueIfFalseBlock%3A"), "inlineIfTrueIfFalseBlock_", function StCompilerTestClass__inlineIfTrueIfFalseBlock_(aBlock){
var result = nil;
const self = this; result=(self['@value1']._lt(self['@value2'])).ifTrue_ifFalse_(aBlock,(function StCompilerTestClass__(){
return self['@instVar2'];
}
));
return result;
}
, "rewrite if", unescape("inlineIfTrueIfFalseBlock%3A%20aBlock%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%20value1%20%3C%20value2%0D%09%09ifTrue%3A%20aBlock%0D%09%09ifFalse%3A%20%5BinstVar2%5D.%0D%09%5Eresult%0D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("inlineReceiverIfTrueIfFalse"), "inlineReceiverIfTrueIfFalse", function StCompilerTestClass__inlineReceiverIfTrueIfFalse(){
const self = this; return ((self['@value1']._lt(self['@value2'])).ifTrue_ifFalse_((function StCompilerTestClass__(){
return self['@instVar1'];
}
),(function StCompilerTestClass__(){
return self['@instVar2'];
}
))).yourself();
}
, "rewrite if", unescape("inlineReceiverIfTrueIfFalse%0D%09%5E%28value1%20%3C%20value2%0D%09%09ifTrue%3A%20%5BinstVar1%5D%0D%09%09ifFalse%3A%20%5BinstVar2%5D%29%20yourself"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("inlineReturnIfTrueIfFalse"), "inlineReturnIfTrueIfFalse", function StCompilerTestClass__inlineReturnIfTrueIfFalse(){
const self = this; if ((self['@value1']._lt(self['@value2'])).valueOf()) {return self['@instVar1']} else {return self['@instVar2']};
}
, "rewrite if", unescape("inlineReturnIfTrueIfFalse%0D%09%5Evalue1%20%3C%20value2%0D%09%09ifTrue%3A%20%5BinstVar1%5D%0D%09%09ifFalse%3A%20%5BinstVar2%5D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("isKindOfReturn"), "isKindOfReturn", function StCompilerTestClass__isKindOfReturn(){
const self = this; return (smalltalk.is_kindOf_(self['@value1'],"one".$klass));
}
, "rewrite if", unescape("isKindOfReturn%0D%09%5Evalue1%0D%09%09isKindOf%3A%20%27one%27%20class"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("nonLocalReturnIfTrue"), "nonLocalReturnIfTrue", function StCompilerTestClass__nonLocalReturnIfTrue(){
const self = this; var $early={name:"stReturn"};
try {
if ((self['@value1']._lt(self['@value2'])).valueOf()) {(function StCompilerTestClass__(){
$early.result="one"; throw ($early);
}
).value()} else {"two"};
return self;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "rewrite if", unescape("nonLocalReturnIfTrue%0D%09value1%20%3C%20value2%0D%09%09ifTrue%3A%20%5B%5B%5E%27one%27%5D%20value%5D%0D%09%09ifFalse%3A%20%5B%27two%27%5D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("returnIfFalse"), "returnIfFalse", function StCompilerTestClass__returnIfFalse(){
const self = this; if ((self['@value1']._lt(self['@value2'])).not()) {return "one"} else {return nil};
}
, "rewrite if", unescape("returnIfFalse%0D%09%5Evalue1%20%3C%20value2%0D%09%09ifFalse%3A%20%5B%27one%27%5D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("returnIfFalseIfTrue"), "returnIfFalseIfTrue", function StCompilerTestClass__returnIfFalseIfTrue(){
const self = this; if ((self['@value1']._lt(self['@value2'])).not()) {return "two"} else {return "one"};
}
, "rewrite if", unescape("returnIfFalseIfTrue%0D%09%5Evalue1%20%3C%20value2%0D%09%09ifFalse%3A%20%5B%27two%27%5D%0D%09%09ifTrue%3A%20%5B%27one%27%5D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("returnIfTrue"), "returnIfTrue", function StCompilerTestClass__returnIfTrue(){
const self = this; if ((self['@value1']._lt(self['@value2'])).valueOf()) {return "one"} else {return nil};
}
, "rewrite if", unescape("returnIfTrue%0D%09%5Evalue1%20%3C%20value2%0D%09%09ifTrue%3A%20%5B%27one%27%5D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("returnIfTrueIfFalse"), "returnIfTrueIfFalse", function StCompilerTestClass__returnIfTrueIfFalse(){
const self = this; if ((self['@value1']._lt(self['@value2'])).valueOf()) {return "one"} else {return "two"};
}
, "rewrite if", unescape("returnIfTrueIfFalse%0D%09%5Evalue1%20%3C%20value2%0D%09%09ifTrue%3A%20%5B%27one%27%5D%0D%09%09ifFalse%3A%20%5B%27two%27%5D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("bindSmalltalkClassName"), "bindSmalltalkClassName", function StCompilerTestClass__bindSmalltalkClassName(){
const self = this; return smalltalk.StCompilerTestClass.name();
}
, "binding", unescape("bindSmalltalkClassName%0D%09%5EStCompilerTestClass%20name"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("variable"), "variable", function StCompilerTestClass__variable(){
var var1 = nil;
const self = this; self;
return self;
}
, "variables temp", unescape("variable%0D%09%7C%20var1%20%7C"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("variableAssign"), "variableAssign", function StCompilerTestClass__variableAssign(){
var var1 = nil;
const self = this; var1=(1);
return self;
}
, "variables temp", unescape("variableAssign%0D%09%7C%20var1%20%7C%0D%09var1%20%3A%3D%201"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("variableAssignReturn"), "variableAssignReturn", function StCompilerTestClass__variableAssignReturn(){
var var1 = nil;
const self = this; var1=(1);
return var1;
}
, "variables temp", unescape("variableAssignReturn%0D%09%7C%20var1%20%7C%0D%09var1%20%3A%3D%201.%0D%09%5Evar1"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("variableReturn"), "variableReturn", function StCompilerTestClass__variableReturn(){
var var1 = nil;
const self = this; return var1;
}
, "variables temp", unescape("variableReturn%0D%09%7C%20var1%20%7C%0D%09%5Evar1"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("variableReturnAssign"), "variableReturnAssign", function StCompilerTestClass__variableReturnAssign(){
var var1 = nil;
const self = this; return var1=(1);
}
, "variables temp", unescape("variableReturnAssign%0D%09%7C%20var1%20%7C%0D%09%5Evar1%20%3A%3D%201"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("variables"), "variables", function StCompilerTestClass__variables(){
var var1 = nil;
var var2 = nil;
const self = this; self;
return self;
}
, "variables temp", unescape("variables%0D%09%7C%20var1%20var2%20%7C"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("variablesAssign"), "variablesAssign", function StCompilerTestClass__variablesAssign(){
var var1 = nil;
var var2 = nil;
const self = this; var1=(1);
var2=(2);
return self;
}
, "variables temp", unescape("variablesAssign%0D%09%7C%20var1%20var2%20%7C%0D%09var1%20%3A%3D%201.%0D%09var2%20%3A%3D%202"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("variablesAssignAssignReturn"), "variablesAssignAssignReturn", function StCompilerTestClass__variablesAssignAssignReturn(){
var var1 = nil;
var var2 = nil;
const self = this; var1=(1);
var2=var1;
return var2;
}
, "variables temp", unescape("variablesAssignAssignReturn%0D%09%7C%20var1%20var2%20%7C%0D%09var1%20%3A%3D%201.%0D%09var2%20%3A%3D%20var1.%0D%09%5Evar2"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("variablesAssignReturn"), "variablesAssignReturn", function StCompilerTestClass__variablesAssignReturn(){
var var1 = nil;
var var2 = nil;
const self = this; var1=(1);
var2=(2);
return var2;
}
, "variables temp", unescape("variablesAssignReturn%0D%09%7C%20var1%20var2%20%7C%0D%09var1%20%3A%3D%201.%0D%09var2%20%3A%3D%202.%0D%09%5Evar2"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("variablesEmpty"), "variablesEmpty", function StCompilerTestClass__variablesEmpty(){
const self = this; self;
return self;
}
, "variables temp", unescape("variablesEmpty%0D%09%7C%20%20%7C"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("variablesReturn"), "variablesReturn", function StCompilerTestClass__variablesReturn(){
var var1 = nil;
var var2 = nil;
const self = this; return var2;
}
, "variables temp", unescape("variablesReturn%0D%09%7C%20var1%20var2%20%7C%0D%09%5Evar2"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("variablesReturnAssign"), "variablesReturnAssign", function StCompilerTestClass__variablesReturnAssign(){
var var1 = nil;
var var2 = nil;
const self = this; var1=(1);
return var2=(2);
}
, "variables temp", unescape("variablesReturnAssign%0D%09%7C%20var1%20var2%20%7C%0D%09var1%20%3A%3D%201.%0D%09%5Evar2%20%3A%3D%202"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("blockEmpty"), "blockEmpty", function StCompilerTestClass__blockEmpty(){
const self = this; function StCompilerTestClass__(){
return nil;
}
;
return self;
}
, "blocks", unescape("blockEmpty%0D%09%5B%20%5D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("blockEmptyEval"), "blockEmptyEval", function StCompilerTestClass__blockEmptyEval(){
const self = this; (function StCompilerTestClass__(){
return nil;
}
).value();
return self;
}
, "blocks", unescape("blockEmptyEval%0D%09%5B%20%5D%20value"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("blockExpressionEval"), "blockExpressionEval", function StCompilerTestClass__blockExpressionEval(){
const self = this; return (function StCompilerTestClass__(x){
return x._star(x);
}
).value_((2));
}
, "blocks", unescape("blockExpressionEval%0D%09%5E%5B%3Ax%20%7C%20x*x%5D%20value%3A%202"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("blockExpressionVariableEval"), "blockExpressionVariableEval", function StCompilerTestClass__blockExpressionVariableEval(){
const self = this; return (function StCompilerTestClass__(x){
"123".size();
return x._star(x);
}
).value_((3));
}
, "blocks", unescape("blockExpressionVariableEval%0D%09%5E%5B%3Ax%20%7C%20%0D%09%09%27123%27%20size.%0D%09%09x*x%5D%20value%3A%203"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("blockLiteral"), "blockLiteral", function StCompilerTestClass__blockLiteral(){
const self = this; function StCompilerTestClass__(){
return (5);
}
;
return self;
}
, "blocks", unescape("blockLiteral%0D%09%5B5%20%5D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("blockLiteralEval"), "blockLiteralEval", function StCompilerTestClass__blockLiteralEval(){
const self = this; (function StCompilerTestClass__(){
return (5);
}
).value();
return self;
}
, "blocks", unescape("blockLiteralEval%0D%09%5B5%20%5D%20value"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("blockLiteralEvalReturn"), "blockLiteralEvalReturn", function StCompilerTestClass__blockLiteralEvalReturn(){
const self = this; return (function StCompilerTestClass__(){
return (5);
}
).value();
}
, "blocks", unescape("blockLiteralEvalReturn%0D%09%5E%5B5%20%5D%20value"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("blockReturnTemp"), "blockReturnTemp", function StCompilerTestClass__blockReturnTemp(){
const self = this; return (function StCompilerTestClass__(){
var y = nil;
y=self['@value1'];
return y;
}
).value();
}
, "blocks", unescape("blockReturnTemp%0D%09%5E%5B%20%7C%20y%20%7C%20y%20%3A%3D%20value1.%20y%5D%20value"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("blockReturnTempBlock"), "blockReturnTempBlock", function StCompilerTestClass__blockReturnTempBlock(){
const self = this; return (function StCompilerTestClass__(){
var y = nil;
y=self['@value1'];
return y;
}
);
}
, "blocks", unescape("blockReturnTempBlock%0D%09%5E%5B%20%7C%20y%20%7C%20y%20%3A%3D%20value1.%20y%5D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("blockReturnTempEval"), "blockReturnTempEval", function StCompilerTestClass__blockReturnTempEval(){
const self = this; return (function StCompilerTestClass__(){
var y = nil;
y=self['@value1'];
return y;
}
).value();
}
, "blocks", unescape("blockReturnTempEval%0D%09%5E%5B%20%7C%20y%20%7C%20y%20%3A%3D%20value1.%20y%5D%20value"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("blockReturnVariableTemp"), "blockReturnVariableTemp", function StCompilerTestClass__blockReturnVariableTemp(){
const self = this; return (function StCompilerTestClass__(x){
var y = nil;
y=x;
return y;
}
).value_(self['@value1']);
}
, "blocks", unescape("blockReturnVariableTemp%0D%09%5E%5B%3Ax%20%7C%20%7C%20y%20%7C%20y%20%3A%3D%20x.%20y%5D%20value%3A%20value1"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("blockSuperSend"), "blockSuperSend", function StCompilerTestClass__blockSuperSend(){
var ans = nil;
const self = this; (function StCompilerTestClass__(){
return ans=smalltalk.superImplementor(smalltalk.StCompilerTestClass,'yourself').apply(self, []);
}
).ensure_((function StCompilerTestClass__(){
return ans=nil;
}
));
return ans;
}
, "blocks", unescape("blockSuperSend%0D%09%7C%20ans%20%7C%0D%09%20%5Bans%20%3A%3D%20super%20yourself%5D%20%0D%09%09ensure%3A%20%5Bans%20%3A%3D%20nil%5D.%0D%09%5Eans"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("blockTemp"), "blockTemp", function StCompilerTestClass__blockTemp(){
const self = this; function StCompilerTestClass__(){
var y = nil;
return nil;
}
;
return self;
}
, "blocks", unescape("blockTemp%0D%09%5B%20%7C%20y%20%7C%20%5D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("blockTempEmpty"), "blockTempEmpty", function StCompilerTestClass__blockTempEmpty(){
const self = this; function StCompilerTestClass__(){
return nil;
}
;
return self;
}
, "blocks", unescape("blockTempEmpty%0D%09%5B%20%7C%7C%20%5D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("blockTempVariableEmpty"), "blockTempVariableEmpty", function StCompilerTestClass__blockTempVariableEmpty(){
const self = this; function StCompilerTestClass__(x){
return nil;
}
;
return self;
}
, "blocks", unescape("blockTempVariableEmpty%0D%09%5B%3Ax%20%7C%20%7C%7C%20%5D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("blockVariableEmpty"), "blockVariableEmpty", function StCompilerTestClass__blockVariableEmpty(){
const self = this; function StCompilerTestClass__(x){
return nil;
}
;
return self;
}
, "blocks", unescape("blockVariableEmpty%0D%09%5B%3Ax%20%7C%20%5D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("blockVariableEmptyEval"), "blockVariableEmptyEval", function StCompilerTestClass__blockVariableEmptyEval(){
const self = this; (function StCompilerTestClass__(x){
return nil;
}
).value_((1));
return self;
}
, "blocks", unescape("blockVariableEmptyEval%0D%09%5B%3Ax%20%7C%20%5D%20value%3A%201"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("blockVariableEval"), "blockVariableEval", function StCompilerTestClass__blockVariableEval(){
const self = this; return (function StCompilerTestClass__(x){
return x;
}
).value_((2));
}
, "blocks", unescape("blockVariableEval%0D%09%5E%5B%3Ax%20%7C%20x%5D%20value%3A%202"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("blockVariablesEmpty"), "blockVariablesEmpty", function StCompilerTestClass__blockVariablesEmpty(){
const self = this; function StCompilerTestClass__(x,y){
return nil;
}
;
return self;
}
, "blocks", unescape("blockVariablesEmpty%0D%09%5B%3Ax%20%3Ay%20%7C%20%20%5D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("returnWhileFalse"), "returnWhileFalse", function StCompilerTestClass__returnWhileFalse(){
const self = this; var $early={name:"stReturn"};
try {
while(((function StCompilerTestClass__(){
if ((self['@value1']._lt(self['@value2'])).valueOf()) {$early.result="one"; throw ($early)};
return (2)._gt((1));
}
)()).not()){};
return self;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "rewrite loops", unescape("returnWhileFalse%0D%09%5B%0D%09value1%20%3C%20value2%20ifTrue%3A%20%5B%5E%27one%27%5D.%20%0D%092%20%3E%201%5D%20whileFalse"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("returnWhileTrue"), "returnWhileTrue", function StCompilerTestClass__returnWhileTrue(){
const self = this; var $early={name:"stReturn"};
try {
while(((function StCompilerTestClass__(){
if ((self['@value1']._lt(self['@value2'])).valueOf()) {$early.result="one"; throw ($early)};
return (2)._lt((1));
}
)()).valueOf()){};;
return self;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "rewrite loops", unescape("returnWhileTrue%0D%09%5B%0D%09value1%20%3C%20value2%20ifTrue%3A%20%5B%5E%27one%27%5D.%20%0D%092%20%3C%201%5D%20whileTrue"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("testNonLocal"), "testNonLocal", function StCompilerTestClass__testNonLocal(){
var repeat = nil;
const self = this; var $early={name:"stReturn"};
try {
while(((function StCompilerTestClass__(){
if (((1)._lt((2))).valueOf()) {if ((self.primaryExpression()).not()) {$early.result=self.expected_("Argument"); throw ($early)}} else {$early.result=(nil.isNil_("hello")===false); throw ($early)};
return repeat;
}
)()).valueOf()){nil};;
return true;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "rewrite loops", unescape("testNonLocal%0D%0D%09%7C%20repeat%20%7C%0D%09%5B1%20%3C%202%0D%09%09ifTrue%3A%20%20%5Bself%20primaryExpression%20ifFalse%3A%20%5B%5Eself%20expected%3A%20%27Argument%27%5D%5D%0D%09%09ifFalse%3A%20%5B%5E%27hello%27%20notNil%5D.%0D%09repeat%5D%0D%09%09whileTrue%3A%20%5B%5D.%0D%09%5Etrue"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("whileFalse"), "whileFalse", function StCompilerTestClass__whileFalse(){
const self = this; while(((2)._gt((1))).not()){};
return self;
}
, "rewrite loops", unescape("whileFalse%0D%09%5B2%20%3E%201%5D%20whileFalse"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("whileFalseDo"), "whileFalseDo", function StCompilerTestClass__whileFalseDo(){
const self = this; while((self['@value1']._gt(self['@value2'])).not()){self['@value1']=self['@value1']._plus((1))};;
return self['@value1'];
}
, "rewrite loops", unescape("whileFalseDo%0D%09%5Bvalue1%20%3E%20value2%5D%20whileFalse%3A%20%5Bvalue1%20%3A%3D%20value1%20+%201%5D.%0D%09%5Evalue1"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("whileFalseReturn"), "whileFalseReturn", function StCompilerTestClass__whileFalseReturn(){
const self = this; return (function(){while(!(2)._gt((1))){};return nil})();
}
, "rewrite loops", unescape("whileFalseReturn%0D%09%5E%5B2%20%3E%201%5D%20whileFalse"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("whileFalseVars"), "whileFalseVars", function StCompilerTestClass__whileFalseVars(){
const self = this; while(((nil.is_eqeq_(self['@value1'],self['@value1']))).not()){};
return self;
}
, "rewrite loops", unescape("whileFalseVars%0D%09%5Bvalue1%20%3D%3D%20value1%5D%20whileFalse"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("whileTrue"), "whileTrue", function StCompilerTestClass__whileTrue(){
const self = this; while(((2)._lt((1))).valueOf()){};;
return self;
}
, "rewrite loops", unescape("whileTrue%0D%09%5B2%20%3C%201%5D%20whileTrue"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("whileTrueDo"), "whileTrueDo", function StCompilerTestClass__whileTrueDo(){
const self = this; while((self['@value1']._lt(self['@value2'])).valueOf()){self['@value1']=self['@value1']._plus((1))};;
return self['@value1'];
}
, "rewrite loops", unescape("whileTrueDo%0D%09%5Bvalue1%20%3C%20value2%5D%20whileTrue%3A%20%5Bvalue1%20%3A%3D%20value1%20+%201%5D.%0D%09%5Evalue1"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("whileTrueDoNonLocalReturn"), "whileTrueDoNonLocalReturn", function StCompilerTestClass__whileTrueDoNonLocalReturn(){
const self = this; while((self['@value1']._lt(self['@value2'])).valueOf()){if ((self['@value1']._gt(self['@value2'])).valueOf()) {return nil}};;
return self;
}
, "rewrite loops", unescape("whileTrueDoNonLocalReturn%0D%09%5Bvalue1%20%3C%20value2%5D%20whileTrue%3A%20%5B%0D%20%20%20%20%20%20%20%20%20%20%20%20value1%20%3E%20value2%0D%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ifTrue%3A%5B%5Enil%5D%5D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("whileTrueNestedNonLocalReturn"), "whileTrueNestedNonLocalReturn", function StCompilerTestClass__whileTrueNestedNonLocalReturn(){
const self = this; var $early={name:"stReturn"};
try {
while(((function StCompilerTestClass__(){
if (((1)._gt((2))).valueOf()) {if (((3)._gt((2))).valueOf()) {$early.result=(3); throw ($early)} else {"noting"}};
return (2)._lt((1));
}
)()).valueOf()){};;
return self;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "rewrite loops", unescape("whileTrueNestedNonLocalReturn%0D%09%5B%0D%091%20%3E%202%20ifTrue%3A%20%5B%0D%09%093%20%3E%202%0D%09%09%09ifTrue%3A%20%5B%5E3%5D%0D%09%09%09ifFalse%3A%20%5B%27noting%27%5D%5D.%0D%092%20%3C%201%5D%20whileTrue"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("whileTrueNonLocalReturn"), "whileTrueNonLocalReturn", function StCompilerTestClass__whileTrueNonLocalReturn(){
const self = this; var $early={name:"stReturn"};
try {
while(((function StCompilerTestClass__(){
if (((1)._gt((2))).valueOf()) {$early.result=(3); throw ($early)};
return (2)._lt((1));
}
)()).valueOf()){};;
return self;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "rewrite loops", unescape("whileTrueNonLocalReturn%0D%09%5B%0D%091%20%3E%202%20ifTrue%3A%20%5B%5E3%5D.%0D%092%20%3C%201%5D%20whileTrue"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("whileTrueReturn"), "whileTrueReturn", function StCompilerTestClass__whileTrueReturn(){
const self = this; return (function(){while((2)._lt((1))){};return nil})();
}
, "rewrite loops", unescape("whileTrueReturn%0D%09%5E%5B2%20%3C%201%5D%20whileTrue"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("whileVariableTrueDo%3A"), "whileVariableTrueDo_", function StCompilerTestClass__whileVariableTrueDo_(aBlock){
const self = this; aBlock.whileTrue_((function StCompilerTestClass__(){
return self['@value1']=self['@value1']._plus((1));
}
));
return self['@value1'];
}
, "rewrite loops", unescape("whileVariableTrueDo%3A%20aBlock%0D%09aBlock%20whileTrue%3A%20%5Bvalue1%20%3A%3D%20value1%20+%201%5D.%0D%09%5Evalue1"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("basicAt%3A"), "basicAt_", function StCompilerTestClass__basicAt_(varName){
var index = nil;
var instVarName = nil;
const self = this; instVarName=(varName.asString()).allButFirst();
index=(self.$klass).instVarIndexFor_ifAbsent_(instVarName,(function StCompilerTestClass__(){
return (-1);
}
));
if ((index._lt((0))).valueOf()) {return nil} else {return self.instVarAt_(index)};
}
, "private", unescape("basicAt%3A%20varName%0D%09%22this%20is%20only%20used%20for%20the%20smalltalk%20tests.%0D%09JS%20code%20will%20not%20call%20this%20as%20the%20call%20will%20be%20inlined%20by%20the%20compiler%22%0D%0D%09%7C%20index%20instVarName%20%7C%0D%09instVarName%20%3A%3D%20varName%20asString%20allButFirst.%0D%09index%20%3A%3D%20self%20class%20instVarIndexFor%3A%20instVarName%20ifAbsent%3A%20%5B-1%5D.%0D%09%5Eindex%20%3C%200%0D%09%09ifTrue%3A%20%5Bnil%5D%0D%09%09ifFalse%3A%20%5Bself%20instVarAt%3A%20index%5D%0D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("basicAt%3AifAbsent%3A"), "basicAt_ifAbsent_", function StCompilerTestClass__basicAt_ifAbsent_(varName,aBlock){
var index = nil;
var instVarName = nil;
const self = this; var $early={name:"stReturn"};
try {
instVarName=(varName.asString()).allButFirst();
index=(self.$klass).instVarIndexFor_ifAbsent_(instVarName,(function StCompilerTestClass__(){
$early.result=aBlock.value(); throw ($early);
}
));
if ((index._lt((0))).valueOf()) {return nil} else {return self.instVarAt_(index)};
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "private", unescape("basicAt%3A%20varName%20ifAbsent%3A%20aBlock%0D%09%22this%20is%20only%20used%20for%20the%20smalltalk%20tests.%0D%09JS%20code%20will%20not%20call%20this%20as%20the%20call%20will%20be%20inlined%20by%20the%20compiler%22%0D%0D%09%7C%20index%20instVarName%20%7C%0D%09instVarName%20%3A%3D%20varName%20asString%20allButFirst.%0D%09index%20%3A%3D%20self%20class%20instVarIndexFor%3A%20instVarName%20ifAbsent%3A%20%5B%5EaBlock%20value%5D.%0D%09%5Eindex%20%3C%200%0D%09%09ifTrue%3A%20%5Bnil%5D%0D%09%09ifFalse%3A%20%5Bself%20instVarAt%3A%20index%5D%0D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("basicAt%3Aput%3A"), "basicAt_put_", function StCompilerTestClass__basicAt_put_(varName,value){
var index = nil;
var instVarName = nil;
const self = this; instVarName=(varName.asString()).allButFirst();
index=(self.$klass).instVarIndexFor_ifAbsent_(instVarName,(function StCompilerTestClass__(){
return (-1);
}
));
if ((index._lt((0))).valueOf()) {return nil} else {return self.instVarAt_put_(index,value)};
}
, "private", unescape("basicAt%3A%20varName%20put%3A%20value%0D%09%22this%20is%20only%20used%20for%20the%20smalltalk%20tests.%0D%09JS%20code%20will%20not%20call%20this%20as%20the%20call%20will%20be%20inlined%20by%20the%20compiler%22%0D%0D%09%7C%20index%20instVarName%20%7C%0D%09instVarName%20%3A%3D%20varName%20asString%20allButFirst.%0D%09index%20%3A%3D%20self%20class%20instVarIndexFor%3A%20instVarName%20ifAbsent%3A%20%5B-1%5D.%0D%09%5Eindex%20%3C%200%0D%09%09ifTrue%3A%20%5Bnil%5D%0D%09%09ifFalse%3A%20%5Bself%20instVarAt%3A%20index%20put%3A%20value%5D%0D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("classVar"), "classVar", function StCompilerTestClass__classVar(){
const self = this; smalltalk.StCompilerTestClass.classVariableAt_("ClassVar1");
return self;
}
, "variables class var", unescape("classVar%0D%09ClassVar1"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("classVarAssignment"), "classVarAssignment", function StCompilerTestClass__classVarAssignment(){
const self = this; smalltalk.StCompilerTestClass.classVariableAt_put_("ClassVar1",self['@value1']);
return smalltalk.StCompilerTestClass.classVariableAt_("ClassVar1");
}
, "variables class var", unescape("classVarAssignment%0D%09ClassVar1%20%3A%3D%20value1.%0D%09%5EClassVar1"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("classVarReturn"), "classVarReturn", function StCompilerTestClass__classVarReturn(){
const self = this; return smalltalk.StCompilerTestClass.classVariableAt_("ClassVar1");
}
, "variables class var", unescape("classVarReturn%0D%09%5EClassVar1"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("blockExpressionVariableReturnEval"), "blockExpressionVariableReturnEval", function StCompilerTestClass__blockExpressionVariableReturnEval(){
const self = this; var $early={name:"stReturn"};
try {
(function StCompilerTestClass__(x){
"123".size();
$early.result=x._star(x); throw ($early);
}
).value_((4));
return self;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "block returns", unescape("blockExpressionVariableReturnEval%0D%09%5B%3Ax%20%7C%20%0D%09%09%27123%27%20size.%0D%09%09%5Ex*x%5D%20value%3A%204"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("blockReturnBlockCascade"), "blockReturnBlockCascade", function StCompilerTestClass__blockReturnBlockCascade(){
const self = this; var $early={name:"stReturn"};
try {
(function StCompilerTestClass__(){
return (function StCompilerTestClass__($1$){
$1$.value();
$1$.value_((function StCompilerTestClass__(){
return (1);
}
));
return $1$.value_((function StCompilerTestClass__(){
$early.result=(2); throw ($early);
}
))}
)(true);
}
).value();
return self;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "block returns", unescape("blockReturnBlockCascade%0D%09%5Btrue%0D%09%09value%3B%0D%09%09value%3A%20%5B1%5D%3B%0D%09%09value%3A%20%5B%5E2%5D%0D%09%5D%20value"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("blockReturnCascade"), "blockReturnCascade", function StCompilerTestClass__blockReturnCascade(){
const self = this; var $early={name:"stReturn"};
try {
(function StCompilerTestClass__($1$){
$1$.value();
$1$.value_((function StCompilerTestClass__(){
return (1);
}
));
return $1$.value_((function StCompilerTestClass__(){
$early.result=(2); throw ($early);
}
))}
)(true);
return self;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "block returns", unescape("blockReturnCascade%0D%09true%0D%09%09value%3B%0D%09%09value%3A%20%5B1%5D%3B%0D%09%09value%3A%20%5B%5E2%5D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("blockReturnCascadeIfTrue"), "blockReturnCascadeIfTrue", function StCompilerTestClass__blockReturnCascadeIfTrue(){
const self = this; var $early={name:"stReturn"};
try {
(function StCompilerTestClass__($1$){
$1$.value();
$1$.value_((function StCompilerTestClass__(){
if ((true).valueOf()) {return (1)} else {return nil};
}
));
$1$.value_((function StCompilerTestClass__(){
return (2);
}
));
$1$.value_((function StCompilerTestClass__(){
if ((true).valueOf()) {$early.result=(1); throw ($early)} else {return nil};
}
));
return $1$.value_((function StCompilerTestClass__(){
$early.result=(2); throw ($early);
}
))}
)(true);
return self;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "block returns", unescape("blockReturnCascadeIfTrue%0D%09true%0D%09%09value%3B%0D%09%09value%3A%20%5Btrue%20ifTrue%3A%20%5B1%5D%5D%3B%0D%09%09value%3A%20%5B2%5D%3B%0D%09%09value%3A%20%5Btrue%20ifTrue%3A%20%5B%5E1%5D%5D%3B%0D%09%09value%3A%20%5B%5E2%5D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("blockReturnCascadeReceiver"), "blockReturnCascadeReceiver", function StCompilerTestClass__blockReturnCascadeReceiver(){
const self = this; var $early={name:"stReturn"};
try {
(function StCompilerTestClass__($1$){
$1$.value();
return $1$.value_((function StCompilerTestClass__(){
return (2);
}
))}
)((function StCompilerTestClass__(){
$early.result=(3); throw ($early);
}
).value());
return self;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "block returns", unescape("blockReturnCascadeReceiver%0D%09%28%5B%5E3%5D%20value%29%0D%09%09value%3B%0D%09%09value%3A%20%5B2%5D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("blockReturnIfTrueTemp"), "blockReturnIfTrueTemp", function StCompilerTestClass__blockReturnIfTrueTemp(){
var oc = nil;
const self = this; oc=smalltalk.Object.$$new();
if (((oc.size())._gt((1))).valueOf()) {return oc};
return self;
}
, "block returns", unescape("blockReturnIfTrueTemp%0D%09%7C%20oc%20%7C%0D%09oc%20%3A%3D%20Object%20new.%0D%09%28oc%20size%20%3E%201%29%0D%09%09ifTrue%3A%20%5B%5Eoc%5D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("blockReturnLiteral"), "blockReturnLiteral", function StCompilerTestClass__blockReturnLiteral(){
const self = this; var $early={name:"stReturn"};
try {
function StCompilerTestClass__(){
$early.result=(42); throw ($early);
}
;
return self;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "block returns", unescape("blockReturnLiteral%0D%09%5B%20%5E42%5D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("blockReturnLiteralReturn"), "blockReturnLiteralReturn", function StCompilerTestClass__blockReturnLiteralReturn(){
const self = this; var $early={name:"stReturn"};
try {
return (function StCompilerTestClass__(){
$early.result=(42); throw ($early);
}
);
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "block returns", unescape("blockReturnLiteralReturn%0D%09%5E%5B%20%5E42%5D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("blockReturnLiteralValue"), "blockReturnLiteralValue", function StCompilerTestClass__blockReturnLiteralValue(){
const self = this; var $early={name:"stReturn"};
try {
(function StCompilerTestClass__(){
$early.result=(42); throw ($early);
}
).value();
return self;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "block returns", unescape("blockReturnLiteralValue%0D%09%5B%20%5E42%5D%20value"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("blockReturnLiteralValueReturn"), "blockReturnLiteralValueReturn", function StCompilerTestClass__blockReturnLiteralValueReturn(){
const self = this; var $early={name:"stReturn"};
try {
return (function StCompilerTestClass__(){
$early.result=(42); throw ($early);
}
).value();
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "block returns", unescape("blockReturnLiteralValueReturn%0D%09%5E%5B%20%5E42%5D%20value"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("blockReturnMessageReturnIfTrue"), "blockReturnMessageReturnIfTrue", function StCompilerTestClass__blockReturnMessageReturnIfTrue(){
const self = this; var $early={name:"stReturn"};
try {
self.value_((function StCompilerTestClass__(x){
if ((x).valueOf()) {$early.result="aa".includes_("a"); throw ($early)} else {return nil};
}
));
return self;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "block returns", unescape("blockReturnMessageReturnIfTrue%0D%09self%20value%3A%20%5B%3Ax%20%7C%20x%20ifTrue%3A%20%5B%5E%27aa%27%20includes%3A%20%27a%27%5D%5D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("blockReturnMessageReturnIfTrueLiteral"), "blockReturnMessageReturnIfTrueLiteral", function StCompilerTestClass__blockReturnMessageReturnIfTrueLiteral(){
const self = this; var $early={name:"stReturn"};
try {
self.value_((function StCompilerTestClass__(x){
if ((x).valueOf()) {$early.result=true; throw ($early)} else {return nil};
}
));
return self;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "block returns", unescape("blockReturnMessageReturnIfTrueLiteral%0D%09self%20value%3A%20%5B%3Ax%20%7C%20x%20ifTrue%3A%20%5B%5Etrue%5D%5D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("blockReturnMessageReturnLiteral"), "blockReturnMessageReturnLiteral", function StCompilerTestClass__blockReturnMessageReturnLiteral(){
const self = this; var $early={name:"stReturn"};
try {
self.value_((function StCompilerTestClass__(){
$early.result=(42); throw ($early);
}
));
return self;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "block returns", unescape("blockReturnMessageReturnLiteral%0D%09self%20value%3A%20%5B%5E42%5D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("blockReturnMessageReturnVariable"), "blockReturnMessageReturnVariable", function StCompilerTestClass__blockReturnMessageReturnVariable(){
const self = this; var $early={name:"stReturn"};
try {
self.value_((function StCompilerTestClass__(x){
$early.result=x; throw ($early);
}
));
return self;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "block returns", unescape("blockReturnMessageReturnVariable%0D%09self%20value%3A%20%5B%3Ax%20%7C%20%5Ex%5D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("blockReturnTempReturn"), "blockReturnTempReturn", function StCompilerTestClass__blockReturnTempReturn(){
const self = this; var $early={name:"stReturn"};
try {
return (function StCompilerTestClass__(){
var y = nil;
y=self['@value1'];
$early.result=y; throw ($early);
}
);
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "block returns", unescape("blockReturnTempReturn%0D%09%5E%5B%20%7C%20y%20%7C%20y%20%3A%3D%20value1.%20%5Ey%5D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("blockReturnValueIfTrue"), "blockReturnValueIfTrue", function StCompilerTestClass__blockReturnValueIfTrue(){
const self = this; var $early={name:"stReturn"};
try {
(function StCompilerTestClass__(){
if ((true).valueOf()) {$early.result=nil; throw ($early)};
$early.result=(42); throw ($early);
}
).value();
return self;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "block returns", unescape("blockReturnValueIfTrue%0D%09%5B%0D%09%09true%0D%09%09%09ifTrue%3A%5B%5Enil%5D.%0D%09%09%5E42%0D%09%5D%20value%0D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("blockReturnValueTemp"), "blockReturnValueTemp", function StCompilerTestClass__blockReturnValueTemp(){
var i = nil;
const self = this; var $early={name:"stReturn"};
try {
i=(42);
(function StCompilerTestClass__(){
$early.result=i; throw ($early);
}
).value();
return self;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "block returns", unescape("blockReturnValueTemp%0D%09%7C%20i%20%7C%0D%09i%20%3A%3D%2042.%0D%09%5B%0D%09%09%5Ei%0D%09%5D%20value%0D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("blockTempReturn"), "blockTempReturn", function StCompilerTestClass__blockTempReturn(){
const self = this; var $early={name:"stReturn"};
try {
function StCompilerTestClass__(){
var y = nil;
$early.result=y; throw ($early);
}
;
return self;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "block returns", unescape("blockTempReturn%0D%09%5B%20%7C%20y%20%7C%20%5E%20y%5D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("blockVariableEmptyReturn"), "blockVariableEmptyReturn", function StCompilerTestClass__blockVariableEmptyReturn(){
const self = this; var $early={name:"stReturn"};
try {
function StCompilerTestClass__(x){
$early.result=x; throw ($early);
}
;
return self;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "block returns", unescape("blockVariableEmptyReturn%0D%09%5B%3Ax%20%7C%20%5Ex%20%5D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("blockVariableReturnEval"), "blockVariableReturnEval", function StCompilerTestClass__blockVariableReturnEval(){
const self = this; var $early={name:"stReturn"};
try {
(function StCompilerTestClass__(x){
$early.result=x; throw ($early);
}
).value_((1));
return self;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "block returns", unescape("blockVariableReturnEval%0D%09%5B%3Ax%20%7C%20%5Ex%5D%20value%3A%201"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("blockVariablesEmptyReturn"), "blockVariablesEmptyReturn", function StCompilerTestClass__blockVariablesEmptyReturn(){
const self = this; var $early={name:"stReturn"};
try {
function StCompilerTestClass__(x,y){
$early.result=y; throw ($early);
}
;
return self;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "block returns", unescape("blockVariablesEmptyReturn%0D%09%5B%3Ax%20%3Ay%20%7C%20%5Ey%20%5D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("ifTrue%3AifFalseBlockValue%3A"), "ifTrue_ifFalseBlockValue_", function StCompilerTestClass__ifTrue_ifFalseBlockValue_(successBlock,failureBlock){
const self = this; var $early={name:"stReturn"};
try {
if (((nil.isNil_(self))).not()) {return self.value_((function StCompilerTestClass__(success){
var result = nil;
if ((success).valueOf()) {$early.result=successBlock.value(); throw ($early)} else {$early.result=failureBlock.value(); throw ($early)};
}
))} else {return nil};
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "block returns", unescape("ifTrue%3A%20successBlock%20ifFalseBlockValue%3A%20failureBlock%0D%09%5Eself%20isNil%0D%20%20%20%20%20%20%20%20ifFalse%3A%0D%20%20%20%20%20%20%20%20%20%20%20%20%5Bself%0D%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3A%0D%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5B%3Asuccess%20%7C%20%7Cresult%7C%0D%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20success%0D%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ifTrue%3A%20%5B%5EsuccessBlock%20value%5D%0D%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ifFalse%3A%20%5B%5EfailureBlock%20value%5D.%0D%20%20%20%20%20%20%20%20%20%20%20%20%5D%5D."));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("ifTrue%3AifFalseReturnBlock%3A"), "ifTrue_ifFalseReturnBlock_", function StCompilerTestClass__ifTrue_ifFalseReturnBlock_(successBlock,failureBlock){
const self = this; var $early={name:"stReturn"};
try {
return self.value_((function StCompilerTestClass__(success){
$early.result=success.ifTrue_ifFalse_(successBlock,failureBlock); throw ($early);
}
));
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "block returns", unescape("ifTrue%3A%20successBlock%20ifFalseReturnBlock%3A%20failureBlock%0D%09%5Eself%20value%3A%20%5B%3Asuccess%20%7C%20%0D%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5Esuccess%0D%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ifTrue%3A%20successBlock%0D%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ifFalse%3A%20failureBlock.%0D%20%20%20%20%20%20%20%20%20%20%20%20%5D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("ifTrue%3AifFalseReturnBlockValue%3A"), "ifTrue_ifFalseReturnBlockValue_", function StCompilerTestClass__ifTrue_ifFalseReturnBlockValue_(successBlock,failureBlock){
const self = this; var $early={name:"stReturn"};
try {
if (((nil.isNil_(self))).not()) {return self.value_((function StCompilerTestClass__(success){
var result = nil;
$early.result=success.ifTrue_ifFalse_((function StCompilerTestClass__(){
return successBlock.value();
}
),(function StCompilerTestClass__(){
return failureBlock.value();
}
)); throw ($early);
}
))} else {return nil};
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "block returns", unescape("ifTrue%3A%20successBlock%20ifFalseReturnBlockValue%3A%20failureBlock%0D%09%5Eself%20isNil%0D%20%20%20%20%20%20%20%20ifFalse%3A%0D%20%20%20%20%20%20%20%20%20%20%20%20%5Bself%0D%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3A%0D%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5B%3Asuccess%20%7C%20%7Cresult%7C%0D%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5Esuccess%0D%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ifTrue%3A%20%5BsuccessBlock%20value%5D%0D%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ifFalse%3A%20%5BfailureBlock%20value%5D.%0D%20%20%20%20%20%20%20%20%20%20%20%20%5D%5D."));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("basicAtIfAbsentReturn"), "basicAtIfAbsentReturn", function StCompilerTestClass__basicAtIfAbsentReturn(){
const self = this; return (function(){var $1$; $1$ = self[unescape("@value42")]; return nil.isNil_($1$) ? self['@value1'] : $1$})();
}
, "rewrite", unescape("basicAtIfAbsentReturn%0D%09%5Eself%20basicAt%3A%20%27@value42%27%20ifAbsent%3A%20%5Bvalue1%5D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("basicAtPut"), "basicAtPut", function StCompilerTestClass__basicAtPut(){
const self = this; (self[unescape("@value2")]=self['@value1']);
return self;
}
, "rewrite", unescape("basicAtPut%0D%09self%20basicAt%3A%20%27@value2%27%20put%3A%20value1"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("basicAtReturn"), "basicAtReturn", function StCompilerTestClass__basicAtReturn(){
const self = this; return (function(){var $1$; $1$ = self[unescape("@value2")]; return nil.isNil_($1$) ? nil : $1$})();
}
, "rewrite", unescape("basicAtReturn%0D%09%5Eself%20basicAt%3A%20%27@value2%27"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("basicAtVariableIfAbsentBlockReturn"), "basicAtVariableIfAbsentBlockReturn", function StCompilerTestClass__basicAtVariableIfAbsentBlockReturn(){
var block = nil;
const self = this; block=(function StCompilerTestClass__(){
return "one";
}
);
return (function(){var $1$; $1$ = self[self['@value1']]; return nil.isNil_($1$) ? block.value() : $1$})();
}
, "rewrite", unescape("basicAtVariableIfAbsentBlockReturn%0D%09%7C%20block%20%7C%0D%09block%20%3A%3D%20%5B%27one%27%5D.%0D%09%5Eself%20basicAt%3A%20value1%20ifAbsent%3A%20block"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("basicAtVariableIfAbsentReturn"), "basicAtVariableIfAbsentReturn", function StCompilerTestClass__basicAtVariableIfAbsentReturn(){
const self = this; return (function(){var $1$; $1$ = self[self['@value1']]; return nil.isNil_($1$) ? "one" : $1$})();
}
, "rewrite", unescape("basicAtVariableIfAbsentReturn%0D%09%5Eself%20basicAt%3A%20value1%20ifAbsent%3A%20%5B%27one%27%5D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("basicAtVariableReturn"), "basicAtVariableReturn", function StCompilerTestClass__basicAtVariableReturn(){
const self = this; return (function(){var $1$; $1$ = self[self['@value1']]; return nil.isNil_($1$) ? nil : $1$})();
}
, "rewrite", unescape("basicAtVariableReturn%0D%09%5Eself%20basicAt%3A%20value1"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("classAccess"), "classAccess", function StCompilerTestClass__classAccess(){
const self = this; return self['@value1'].$klass;
}
, "rewrite", unescape("classAccess%0D%09%5Evalue1%20class"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("eqEqEq"), "eqEqEq", function StCompilerTestClass__eqEqEq(){
const self = this; return (self['@value1'] === self['@value2']);
}
, "rewrite", unescape("eqEqEq%0D%09%5Evalue1%20%3D%3D%3D%20value2"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("ifNil"), "ifNil", function StCompilerTestClass__ifNil(){
const self = this; (function(){var $1$; $1$ = self['@value1']; if (nil.isNil_($1$)) { return "one" } else { return $1$; }})();
return self;
}
, "rewrite", unescape("ifNil%0D%09value1%20ifNil%3A%20%5B%27one%27%5D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("ifNilReturn"), "ifNilReturn", function StCompilerTestClass__ifNilReturn(){
const self = this; var $early={name:"stReturn"};
try {
(function(){var $1$; $1$ = self['@value1']; if (nil.isNil_($1$)) { return (function StCompilerTestClass__(){
$early.result="one"; throw ($early);
}
)() } else { return $1$; }})();
return self;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "rewrite", unescape("ifNilReturn%0D%09value1%20ifNil%3A%20%5B%5E%27one%27%5D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("ifNotNil"), "ifNotNil", function StCompilerTestClass__ifNotNil(){
const self = this; (function(){var $1$; $1$ = self['@value1']; if (nil.isNil_($1$)) { return "one" } else { return $1$; }})();
return self;
}
, "rewrite", unescape("ifNotNil%0D%09value1%20ifNil%3A%20%5B%27one%27%5D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("ifNotNilReturn"), "ifNotNilReturn", function StCompilerTestClass__ifNotNilReturn(){
const self = this; var $early={name:"stReturn"};
try {
(function(){var $1$; $1$ = self['@value1']; if (!nil.isNil_($1$)) { return (function StCompilerTestClass__(){
$early.result="one"; throw ($early);
}
)() } else { return $1$; }})();
return self;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "rewrite", unescape("ifNotNilReturn%0D%09value1%20ifNotNil%3A%20%5B%5E%27one%27%5D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("returnIfNil"), "returnIfNil", function StCompilerTestClass__returnIfNil(){
const self = this; return (function(){var $1$; $1$ = self['@value1']; if (nil.isNil_($1$)) { return "one" } else { return $1$; }})();
}
, "rewrite", unescape("returnIfNil%0D%09%5Evalue1%20ifNil%3A%20%5B%27one%27%5D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("returnIfNotNil"), "returnIfNotNil", function StCompilerTestClass__returnIfNotNil(){
const self = this; return (function(){var $1$; $1$ = self['@value1']; if (!nil.isNil_($1$)) { return "one" } else { return $1$; }})();
}
, "rewrite", unescape("returnIfNotNil%0D%09%5Evalue1%20ifNotNil%3A%20%5B%27one%27%5D"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("returnIsNil"), "returnIsNil", function StCompilerTestClass__returnIsNil(){
const self = this; return (nil.isNil_(self['@value1']));
}
, "rewrite", unescape("returnIsNil%0D%09%5Evalue1%20isNil"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("returnNotNil"), "returnNotNil", function StCompilerTestClass__returnNotNil(){
const self = this; return (nil.isNil_(self['@value1'])===false);
}
, "rewrite", unescape("returnNotNil%0D%09%5Evalue1%20notNil"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("literalArrayWithBoolean"), "literalArrayWithBoolean", function StCompilerTestClass__literalArrayWithBoolean(){
const self = this; return [true, false, true];
}
, "literals", unescape("literalArrayWithBoolean%0D%09%5E%23%28%20true%20false%20true%20%29"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("literalArrayWithCharacters"), "literalArrayWithCharacters", function StCompilerTestClass__literalArrayWithCharacters(){
const self = this; return ["a", "b", "c"];
}
, "literals", unescape("literalArrayWithCharacters%0D%09%5E%23%28%20%24a%20%24b%20%24c%20%29"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("literalArrayWithNil"), "literalArrayWithNil", function StCompilerTestClass__literalArrayWithNil(){
const self = this; return [nil, nil, nil];
}
, "literals", unescape("literalArrayWithNil%0D%09%5E%23%28%20nil%20nil%20nil%20%29"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("literalArrayWithNumbers"), "literalArrayWithNumbers", function StCompilerTestClass__literalArrayWithNumbers(){
const self = this; return [(42), (-42), (123.45), (146), (40960)];
}
, "literals", unescape("literalArrayWithNumbers%0D%09%5E%23%28%20%0D%09%0942%0D%09%09-42%0D%09%09123.45%0D%09%09%22disabled%201.2345e2%22%20%22123.45%22%0D%09%092r10010010%20%22146%22%0D%09%0916rA000%20%2240960%22%0D%09%09%29"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("literalArrayWithStrings"), "literalArrayWithStrings", function StCompilerTestClass__literalArrayWithStrings(){
const self = this; return ["1", "2", "3"];
}
, "literals", unescape("literalArrayWithStrings%0D%09%5E%23%28%20%271%27%20%20%272%27%20%20%273%27%20%29"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("literalCRString"), "literalCRString", function StCompilerTestClass__literalCRString(){
const self = this; return unescape("hello%0Dworld");
}
, "literals", unescape("literalCRString%0D%09%5E%27hello%0Dworld%27"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("literalCharacter"), "literalCharacter", function StCompilerTestClass__literalCharacter(){
const self = this; return "a";
}
, "literals", unescape("literalCharacter%0D%09%5E%24a"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("literalFalse"), "literalFalse", function StCompilerTestClass__literalFalse(){
const self = this; return false;
}
, "literals", unescape("literalFalse%0D%09%5Efalse"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("literalNil"), "literalNil", function StCompilerTestClass__literalNil(){
const self = this; return nil;
}
, "literals", unescape("literalNil%0D%09%5Enil"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("literalNumber"), "literalNumber", function StCompilerTestClass__literalNumber(){
const self = this; return (42);
}
, "literals", unescape("literalNumber%0D%09%5E42"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("literalSelf"), "literalSelf", function StCompilerTestClass__literalSelf(){
const self = this; return self;
}
, "literals", unescape("literalSelf%0D%09%5Eself"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("literalString"), "literalString", function StCompilerTestClass__literalString(){
const self = this; return "hello world";
}
, "literals", unescape("literalString%0D%09%5E%27hello%20world%27"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("literalSymbol"), "literalSymbol", function StCompilerTestClass__literalSymbol(){
const self = this; return "symbolic";
}
, "literals", unescape("literalSymbol%0D%09%5E%23symbolic"));
smalltalk.bind(smalltalk.StCompilerTestClass, unescape("literalTrue"), "literalTrue", function StCompilerTestClass__literalTrue(){
const self = this; return true;
}
, "literals", unescape("literalTrue%0D%09%5Etrue"));
smalltalk.StCompilerTestClass.$klass.$iVarNames = ['classInstVar1', 'classInstVar2'];
smalltalk.bind(smalltalk.StCompilerTestClass.$klass, unescape("classVar1"), "classVar1", function StCompilerTestClass_class__classVar1(){
const self = this; return smalltalk.StCompilerTestClass.classVariableAt_("ClassVar1");
}
, "class initialization", unescape("classVar1%0D%09%5EClassVar1"));
smalltalk.bind(smalltalk.StCompilerTestClass.$klass, unescape("initialize"), "initialize", function StCompilerTestClass_class__initialize(){
const self = this; self.initializeClassVars();
self['@classInstVar1']="classInstVar1";
self['@classInstVar2']="classInstVar2";
return self;
}
, "class initialization", unescape("initialize%0D%09self%20initializeClassVars.%0D%0D%09classInstVar1%20%3A%3D%20%27classInstVar1%27.%0D%09classInstVar2%20%3A%3D%20%27classInstVar2%27"));
smalltalk.bind(smalltalk.StCompilerTestClass.$klass, unescape("initializeClassVars"), "initializeClassVars", function StCompilerTestClass_class__initializeClassVars(){
const self = this; smalltalk.StCompilerTestClass.classVariableAt_put_("ClassVar1","classVar1");
smalltalk.StCompilerTestClass.classVariableAt_put_("ClassVar2","classVar2");
smalltalk.StCompilerTestClass.classVariableAt_put_("ClassVar3","classVar3");
return self;
}
, "class initialization", unescape("initializeClassVars%0D%09ClassVar1%20%3A%3D%20%27classVar1%27.%0D%09ClassVar2%20%3A%3D%20%27classVar2%27.%0D%09ClassVar3%20%3A%3D%20%27classVar3%27"));
smalltalk.bind(smalltalk.StCompilerTestClass.$klass, unescape("tearDown"), "tearDown", function StCompilerTestClass_class__tearDown(){
const self = this; smalltalk.StCompilerTestClass.classVariableAt_put_("ClassVar1",nil);
smalltalk.StCompilerTestClass.classVariableAt_put_("ClassVar2",nil);
smalltalk.StCompilerTestClass.classVariableAt_put_("ClassVar3",nil);
self['@classInstVar1']=nil;
self['@classInstVar2']=nil;
return self;
}
, "class initialization", unescape("tearDown%0D%09ClassVar1%20%3A%3D%20nil.%0D%09ClassVar2%20%3A%3D%20nil.%0D%09ClassVar3%20%3A%3D%20nil.%0D%09classInstVar1%20%3A%3D%20nil.%0D%09classInstVar2%20%3A%3D%20nil"));
smalltalk.bind(smalltalk.StCompilerTestClass.$klass, unescape("classInstVar1"), "classInstVar1", function StCompilerTestClass_class__classInstVar1(){
const self = this; return self['@classInstVar1'];
}
, "accessing", unescape("classInstVar1%0D%09%5EclassInstVar1"));
smalltalk.bind(smalltalk.StCompilerTestClass.$klass, unescape("classInstVarAssignment"), "classInstVarAssignment", function StCompilerTestClass_class__classInstVarAssignment(){
const self = this; self['@classInstVar1']=smalltalk.StCompilerTestClass.classVariableAt_("ClassVar1");
return self;
}
, "class inst vars", unescape("classInstVarAssignment%0D%09classInstVar1%20%3A%3D%20ClassVar1"));
smalltalk.bind(smalltalk.StCompilerTestClass.$klass, unescape("classInstVarReturn"), "classInstVarReturn", function StCompilerTestClass_class__classInstVarReturn(){
const self = this; return self['@classInstVar1'];
}
, "class inst vars", unescape("classInstVarReturn%0D%09%5EclassInstVar1"));
smalltalk.bind(smalltalk.StCompilerTestClass.$klass, unescape("new"), "$$new", function StCompilerTestClass_class__$$new(){
const self = this; return (smalltalk.superImplementor(smalltalk.StCompilerTestClass.$klass,'$$new').apply(self, [])).initialize();
}
, "instance creation", unescape("new%0D%09%5Esuper%20new%20initialize"));
