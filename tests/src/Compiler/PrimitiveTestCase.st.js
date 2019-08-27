smalltalk.addClass("PrimitiveTestModule", smalltalk.PrimitiveModule, [], 'Primitives');
smalltalk.PrimitiveTestModule.$classVariableNames=("");
smalltalk.bind(smalltalk.PrimitiveTestModule, unescape("primitiveMap"), "primitiveMap", function PrimitiveTestModule__primitiveMap(){
const self = this; return (function PrimitiveTestModule__($1$){
$1$.at_put_("primReturnFortyTwo","primReturnFortyTwo:arguments:");
$1$.at_put_("primReturnReceiver","primReturnReceiver:arguments:");
$1$.at_put_("primReturnArguments","primReturnArguments:arguments:");
$1$.at_put_("primReturnNil","primReturnNil:arguments:");
$1$.at_put_("primFail","primFail:arguments:");
$1$.at_put_("primAppendTo","primAppendTo:arguments:");
return $1$.yourself()}
)(smalltalk.Dictionary.$$new());
}
, "accessing", unescape("primitiveMap%0D%0D%09%5EDictionary%20new%0D%09%09at%3A%20%23primReturnFortyTwo%20put%3A%20%23primReturnFortyTwo%3Aarguments%3A%3B%0D%09%09at%3A%20%23primReturnReceiver%20put%3A%20%23primReturnReceiver%3Aarguments%3A%3B%0D%09%09at%3A%20%23primReturnArguments%20put%3A%20%23primReturnArguments%3Aarguments%3A%3B%0D%09%09at%3A%20%23primReturnNil%20put%3A%20%23primReturnNil%3Aarguments%3A%3B%0D%09%09at%3A%20%23primFail%20put%3A%20%23primFail%3Aarguments%3A%3B%0D%09%09at%3A%20%23primAppendTo%20put%3A%20%23primAppendTo%3Aarguments%3A%3B%0D%09%09yourself"));
smalltalk.bind(smalltalk.PrimitiveTestModule, unescape("primReturnFortyTwo%3Aarguments%3A"), "primReturnFortyTwo_arguments_", function PrimitiveTestModule__primReturnFortyTwo_arguments_(receiver,anArray){
const self = this; return (42);
}
, "running", unescape("primReturnFortyTwo%3A%20receiver%0Darguments%3A%20anArray%0D%0D%09%5E42"));
smalltalk.bind(smalltalk.PrimitiveTestModule, unescape("primReturnReceiver%3Aarguments%3A"), "primReturnReceiver_arguments_", function PrimitiveTestModule__primReturnReceiver_arguments_(receiver,anArray){
const self = this; return receiver;
}
, "running", unescape("primReturnReceiver%3A%20receiver%0Darguments%3A%20anArray%0D%0D%09%5Ereceiver"));
smalltalk.bind(smalltalk.PrimitiveTestModule, unescape("primReturnNil%3Aarguments%3A"), "primReturnNil_arguments_", function PrimitiveTestModule__primReturnNil_arguments_(receiver,anArray){
const self = this; return nil;
}
, "running", unescape("primReturnNil%3A%20receiver%0Darguments%3A%20anArray%0D%0D%09%5Enil"));
smalltalk.bind(smalltalk.PrimitiveTestModule, unescape("primReturnArguments%3Aarguments%3A"), "primReturnArguments_arguments_", function PrimitiveTestModule__primReturnArguments_arguments_(receiver,anArray){
const self = this; return anArray;
}
, "running", unescape("primReturnArguments%3A%20receiver%0Darguments%3A%20anArray%0D%0D%09%5EanArray"));
smalltalk.bind(smalltalk.PrimitiveTestModule, unescape("primFail%3Aarguments%3A"), "primFail_arguments_", function PrimitiveTestModule__primFail_arguments_(receiver,anArray){
const self = this; return self.primFailValue();
}
, "running", unescape("primFail%3A%20receiver%0Darguments%3A%20anArray%0D%0D%09%5Eself%20primFailValue"));
smalltalk.bind(smalltalk.PrimitiveTestModule, unescape("primAppendTo%3Aarguments%3A"), "primAppendTo_arguments_", function PrimitiveTestModule__primAppendTo_arguments_(receiver,anArray){
const self = this; if (((anArray.size())._eq((2))).not()) {return self.primFailValue()};
return (anArray.at_((2)))._comma((anArray.at_((1))));
}
, "running", unescape("primAppendTo%3A%20receiver%0Darguments%3A%20anArray%0D%0D%09anArray%20size%20%3D%202%0D%09%09ifFalse%3A%20%5B%5Eself%20primFailValue%5D.%0D%09%5E%28anArray%20at%3A%202%29%2C%20%28anArray%20at%3A%201%29"));
smalltalk.addClass("PrimitiveTestCase", smalltalk.TestCase, ['testValue'], 'Primitives');
smalltalk.PrimitiveTestCase.$classVariableNames=("");
smalltalk.bind(smalltalk.PrimitiveTestCase, unescape("primReturnFortyTwo"), "primReturnFortyTwo", function PrimitiveTestCase__primReturnFortyTwo(){
var $$primitiveResult = smalltalk.primitiveManager.modules.PrimitiveTestModule.primReturnFortyTwo(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; self.primitiveFailed();
return self;
}
, "primitives", unescape("primReturnFortyTwo%0D%0D%09%3Cprimitive%3A%20%27primReturnFortyTwo%27%20module%3A%20%27PrimitiveTestModule%27%3E%0D%09self%20primitiveFailed"));
smalltalk.bind(smalltalk.PrimitiveTestCase, unescape("primReturnReceiver"), "primReturnReceiver", function PrimitiveTestCase__primReturnReceiver(){
var $$primitiveResult = smalltalk.primitiveManager.modules.PrimitiveTestModule.primReturnReceiver(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; self.primitiveFailed();
return self;
}
, "primitives", unescape("primReturnReceiver%0D%0D%09%3Cprimitive%3A%20%27primReturnReceiver%27%20module%3A%20%27PrimitiveTestModule%27%3E%0D%09self%20primitiveFailed"));
smalltalk.bind(smalltalk.PrimitiveTestCase, unescape("primReturnNil"), "primReturnNil", function PrimitiveTestCase__primReturnNil(){
var $$primitiveResult = smalltalk.primitiveManager.modules.PrimitiveTestModule.primReturnNil(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; self.primitiveFailed();
return self;
}
, "primitives", unescape("primReturnNil%0D%0D%09%3Cprimitive%3A%20%27primReturnNil%27%20module%3A%20%27PrimitiveTestModule%27%3E%0D%09self%20primitiveFailed"));
smalltalk.bind(smalltalk.PrimitiveTestCase, unescape("zero"), "zero", function PrimitiveTestCase__zero(){
var $$primitiveResult = smalltalk.primitiveManager.modules.PrimitiveTestModule.primReturnArguments(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; self.primitiveFailed();
return self;
}
, "primitives", unescape("zero%0D%0D%09%3Cprimitive%3A%20%27primReturnArguments%27%20module%3A%20%27PrimitiveTestModule%27%3E%0D%09self%20primitiveFailed"));
smalltalk.bind(smalltalk.PrimitiveTestCase, unescape("one%3A"), "one_", function PrimitiveTestCase__one_(anObject){
var $$primitiveResult = smalltalk.primitiveManager.modules.PrimitiveTestModule.primReturnArguments(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; self.primitiveFailed();
return self;
}
, "primitives", unescape("one%3A%20anObject%0D%0D%09%3Cprimitive%3A%20%27primReturnArguments%27%20module%3A%20%27PrimitiveTestModule%27%3E%0D%09self%20primitiveFailed"));
smalltalk.bind(smalltalk.PrimitiveTestCase, unescape("one%3Atwo%3A"), "one_two_", function PrimitiveTestCase__one_two_(anObject,bObject){
var $$primitiveResult = smalltalk.primitiveManager.modules.PrimitiveTestModule.primReturnArguments(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; self.primitiveFailed();
return self;
}
, "primitives", unescape("one%3A%20anObject%0Dtwo%3A%20bObject%0D%0D%09%3Cprimitive%3A%20%27primReturnArguments%27%20module%3A%20%27PrimitiveTestModule%27%3E%0D%09self%20primitiveFailed"));
smalltalk.bind(smalltalk.PrimitiveTestCase, unescape("primFail"), "primFail", function PrimitiveTestCase__primFail(){
var $$primitiveResult = smalltalk.primitiveManager.modules.PrimitiveTestModule.primFail(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; self['@testValue']=self['@testValue']._plus((1));
return self;
}
, "primitives", unescape("primFail%0D%0D%09%3Cprimitive%3A%20%27primFail%27%20module%3A%20%27PrimitiveTestModule%27%3E%0D%09testValue%20%3A%3D%20testValue%20+%201"));
smalltalk.bind(smalltalk.PrimitiveTestCase, unescape("append%3Ato%3A"), "append_to_", function PrimitiveTestCase__append_to_(aString,anotherString){
var $$primitiveResult = smalltalk.primitiveManager.modules.PrimitiveTestModule.primAppendTo(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; self.primitiveFailed();
return self;
}
, "primitives", unescape("append%3A%20aString%0Dto%3A%20anotherString%0D%0D%09%3Cprimitive%3A%20%27primAppendTo%27%20module%3A%20%27PrimitiveTestModule%27%3E%0D%09self%20primitiveFailed"));
smalltalk.bind(smalltalk.PrimitiveTestCase, unescape("setUp"), "setUp", function PrimitiveTestCase__setUp(){
const self = this; smalltalk.superImplementor(smalltalk.PrimitiveTestCase,'setUp').apply(self, []);
(smalltalk.PrimitiveTestModule.$$new()).register();
return self;
}
, "initializing", unescape("setUp%0D%0D%09super%20setUp.%0D%09PrimitiveTestModule%20new%20register"));
smalltalk.bind(smalltalk.PrimitiveTestCase, unescape("testPrimReturnFortyTwo"), "testPrimReturnFortyTwo", function PrimitiveTestCase__testPrimReturnFortyTwo(){
var result = nil;
const self = this; result=self.primReturnFortyTwo();
self.assert_equals_(result,(42));
return self;
}
, "running", unescape("testPrimReturnFortyTwo%0D%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%20self%20primReturnFortyTwo.%0D%09self%0D%09%09assert%3A%20result%0D%09%09equals%3A%2042"));
smalltalk.bind(smalltalk.PrimitiveTestCase, unescape("testPrimReturnReceiver"), "testPrimReturnReceiver", function PrimitiveTestCase__testPrimReturnReceiver(){
var result = nil;
const self = this; result=self.primReturnReceiver();
self.assert_equals_(result,self);
return self;
}
, "running", unescape("testPrimReturnReceiver%0D%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%20self%20primReturnReceiver.%0D%09self%0D%09%09assert%3A%20result%0D%09%09equals%3A%20self"));
smalltalk.bind(smalltalk.PrimitiveTestCase, unescape("testReturnNil"), "testReturnNil", function PrimitiveTestCase__testReturnNil(){
const self = this; self.assert_equals_((self.primReturnNil()),nil);
return self;
}
, "running", unescape("testReturnNil%0D%0D%09self%0D%09%09assert%3A%20self%20primReturnNil%0D%09%09equals%3A%20nil"));
smalltalk.bind(smalltalk.PrimitiveTestCase, unescape("testReturnArguments"), "testReturnArguments", function PrimitiveTestCase__testReturnArguments(){
var identity = nil;
var result = nil;
const self = this; self.assert_equals_((self.zero()),[]);
self.assert_equals_((self.one_((42))),[(42)]);
self.assert_equals_((self.one_two_((42),(52))),[(42), (52)]);
identity=smalltalk.Object.$$new();
result=self.one_(identity);
self.assert_(((nil.is_eqeq_(result.at_((1)),identity))));
return self;
}
, "running", unescape("testReturnArguments%0D%0D%09%7C%20identity%20result%20%7C%0D%09self%0D%09%09assert%3A%20self%20zero%0D%09%09equals%3A%20%23%28%29.%0D%09self%0D%09%09assert%3A%20%28self%20one%3A%2042%29%0D%09%09equals%3A%20%23%28%2042%20%29.%0D%09self%0D%09%09assert%3A%20%28self%20one%3A%2042%20two%3A%2052%29%0D%09%09equals%3A%20%23%28%2042%2052%20%29.%0D%09identity%20%3A%3D%20Object%20new.%0D%09result%20%3A%3D%20self%20one%3A%20identity.%0D%09self%20assert%3A%20%28result%20at%3A%201%29%20%3D%3D%20identity"));
smalltalk.bind(smalltalk.PrimitiveTestCase, unescape("testPrimAppendTo"), "testPrimAppendTo", function PrimitiveTestCase__testPrimAppendTo(){
var result = nil;
const self = this; result=self.append_to_(unescape("World%21"),unescape("Hello%2C%20"));
self.assert_equals_(result,unescape("Hello%2C%20World%21"));
return self;
}
, "running", unescape("testPrimAppendTo%0D%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%20self%0D%09%09append%3A%20%27World%21%27%0D%09%09to%3A%20%27Hello%2C%20%27.%0D%09self%0D%09%09assert%3A%20result%0D%09%09equals%3A%20%27Hello%2C%20World%21%27"));
smalltalk.bind(smalltalk.PrimitiveTestCase, unescape("testPrimFail"), "testPrimFail", function PrimitiveTestCase__testPrimFail(){
const self = this; self['@testValue']=(0);
self.primFail();
self.assert_equals_(self['@testValue'],(1));
return self;
}
, "running", unescape("testPrimFail%0D%0D%09testValue%20%3A%3D%200.%0D%09self%20primFail.%20%22Smalltalk%20failure%20code%20increments%20testValue.%22%0D%09self%0D%09%09assert%3A%20testValue%0D%09%09equals%3A%201"));
smalltalk.bind(smalltalk.PrimitiveTestCase, unescape("testPrimitiveFailed"), "testPrimitiveFailed", function PrimitiveTestCase__testPrimitiveFailed(){
const self = this; self.should_raise_((function PrimitiveTestCase__(){
return self.primitiveFailed();
}
),smalltalk.PrimitiveFailed);
self.should_raise_((function PrimitiveTestCase__(){
return self.primitiveFailed_("Test");
}
),smalltalk.PrimitiveFailed);
return self;
}
, "running", unescape("testPrimitiveFailed%0D%0D%09self%0D%09%09should%3A%20%5Bself%20primitiveFailed%5D%0D%09%09raise%3A%20PrimitiveFailed.%0D%09self%0D%09%09should%3A%20%5Bself%20primitiveFailed%3A%20%27Test%27%5D%0D%09%09raise%3A%20PrimitiveFailed"));
smalltalk.addClass("NativeTestCase", smalltalk.PrimitiveTestCase, [], 'Primitives');
smalltalk.NativeTestCase.$classVariableNames=("");
smalltalk.bind(smalltalk.NativeTestCase, unescape("primReturnFortyTwo"), "primReturnFortyTwo", function NativeTestCase__primReturnFortyTwo(){
var $$primitiveResult = smalltalk.primitiveManager.modules.NativeTestModule.primReturnFortyTwo(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; self.primitiveFailed();
return self;
}
, "primitives", unescape("primReturnFortyTwo%0D%0D%09%3Cprimitive%3A%20%27primReturnFortyTwo%27%20module%3A%20%27NativeTestModule%27%3E%0D%09self%20primitiveFailed"));
smalltalk.bind(smalltalk.NativeTestCase, unescape("primReturnReceiver"), "primReturnReceiver", function NativeTestCase__primReturnReceiver(){
var $$primitiveResult = smalltalk.primitiveManager.modules.NativeTestModule.primReturnReceiver(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; self.primitiveFailed();
return self;
}
, "primitives", unescape("primReturnReceiver%0D%0D%09%3Cprimitive%3A%20%27primReturnReceiver%27%20module%3A%20%27NativeTestModule%27%3E%0D%09self%20primitiveFailed"));
smalltalk.bind(smalltalk.NativeTestCase, unescape("primReturnNil"), "primReturnNil", function NativeTestCase__primReturnNil(){
var $$primitiveResult = smalltalk.primitiveManager.modules.NativeTestModule.primReturnNil(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; self.primitiveFailed();
return self;
}
, "primitives", unescape("primReturnNil%0D%0D%09%3Cprimitive%3A%20%27primReturnNil%27%20module%3A%20%27NativeTestModule%27%3E%0D%09self%20primitiveFailed"));
smalltalk.bind(smalltalk.NativeTestCase, unescape("zero"), "zero", function NativeTestCase__zero(){
var $$primitiveResult = smalltalk.primitiveManager.modules.NativeTestModule.primReturnArguments(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; self.primitiveFailed();
return self;
}
, "primitives", unescape("zero%0D%0D%09%3Cprimitive%3A%20%27primReturnArguments%27%20module%3A%20%27NativeTestModule%27%3E%0D%09self%20primitiveFailed"));
smalltalk.bind(smalltalk.NativeTestCase, unescape("one%3A"), "one_", function NativeTestCase__one_(anObject){
var $$primitiveResult = smalltalk.primitiveManager.modules.NativeTestModule.primReturnArguments(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; self.primitiveFailed();
return self;
}
, "primitives", unescape("one%3A%20anObject%0D%0D%09%3Cprimitive%3A%20%27primReturnArguments%27%20module%3A%20%27NativeTestModule%27%3E%0D%09self%20primitiveFailed"));
smalltalk.bind(smalltalk.NativeTestCase, unescape("one%3Atwo%3A"), "one_two_", function NativeTestCase__one_two_(anObject,bObject){
var $$primitiveResult = smalltalk.primitiveManager.modules.NativeTestModule.primReturnArguments(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; self.primitiveFailed();
return self;
}
, "primitives", unescape("one%3A%20anObject%0Dtwo%3A%20bObject%0D%0D%09%3Cprimitive%3A%20%27primReturnArguments%27%20module%3A%20%27NativeTestModule%27%3E%0D%09self%20primitiveFailed"));
smalltalk.bind(smalltalk.NativeTestCase, unescape("primFail"), "primFail", function NativeTestCase__primFail(){
var $$primitiveResult = smalltalk.primitiveManager.modules.NativeTestModule.primFail(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; self['@testValue']=self['@testValue']._plus((1));
return self;
}
, "primitives", unescape("primFail%0D%0D%09%3Cprimitive%3A%20%27primFail%27%20module%3A%20%27NativeTestModule%27%3E%0D%09testValue%20%3A%3D%20testValue%20+%201"));
smalltalk.bind(smalltalk.NativeTestCase, unescape("append%3Ato%3A"), "append_to_", function NativeTestCase__append_to_(aString,anotherString){
var $$primitiveResult = smalltalk.primitiveManager.modules.NativeTestModule.primAppendTo(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; self.primitiveFailed();
return self;
}
, "primitives", unescape("append%3A%20aString%0Dto%3A%20anotherString%0D%0D%09%3Cprimitive%3A%20%27primAppendTo%27%20module%3A%20%27NativeTestModule%27%3E%0D%09self%20primitiveFailed"));
