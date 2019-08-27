smalltalk.addClass("NativeSpecTestModule", smalltalk.PrimitiveTestModule, [], 'Primitives');
smalltalk.NativeSpecTestModule.$classVariableNames=("");
smalltalk.addClass("NativeSpecTestCase", smalltalk.PrimitiveTestCase, [], 'Primitives');
smalltalk.NativeSpecTestCase.$classVariableNames=("");
smalltalk.bind(smalltalk.NativeSpecTestCase, unescape("setup"), "setup", function NativeSpecTestCase__setup(){
const self = this; smalltalk.superImplementor(smalltalk.NativeSpecTestCase,'setup').apply(self, []);
smalltalk.RuntimePrimitiveManager.setPlatformName_("common");
return self;
}
, "primitives", unescape("setup%0D%09super%20setup.%0D%20%20%20%20RuntimePrimitiveManager%20setPlatformName%3A%20%27common%27."));
smalltalk.bind(smalltalk.NativeSpecTestCase, unescape("primReturnPlatformName"), "primReturnPlatformName", function NativeSpecTestCase__primReturnPlatformName(){
var $$primitiveResult = smalltalk.primitiveManager.modules.NativeSpecTestModule.primReturnPlatformName(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; self.primitiveFailed();
return self;
}
, "primitives", unescape("primReturnPlatformName%0D%0D%09%3Cprimitive%3A%20%27primReturnPlatformName%27%20module%3A%20%27NativeSpecTestModule%27%3E%0D%09self%20primitiveFailed"));
smalltalk.bind(smalltalk.NativeSpecTestCase, unescape("primReturnFortyTwo"), "primReturnFortyTwo", function NativeSpecTestCase__primReturnFortyTwo(){
var $$primitiveResult = smalltalk.primitiveManager.modules.NativeSpecTestModule.primReturnFortyTwo(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; self.primitiveFailed();
return self;
}
, "primitives", unescape("primReturnFortyTwo%0D%0D%09%3Cprimitive%3A%20%27primReturnFortyTwo%27%20module%3A%20%27NativeSpecTestModule%27%3E%0D%09self%20primitiveFailed"));
smalltalk.bind(smalltalk.NativeSpecTestCase, unescape("primReturnReceiver"), "primReturnReceiver", function NativeSpecTestCase__primReturnReceiver(){
var $$primitiveResult = smalltalk.primitiveManager.modules.NativeSpecTestModule.primReturnReceiver(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; self.primitiveFailed();
return self;
}
, "primitives", unescape("primReturnReceiver%0D%0D%09%3Cprimitive%3A%20%27primReturnReceiver%27%20module%3A%20%27NativeSpecTestModule%27%3E%0D%09self%20primitiveFailed"));
smalltalk.bind(smalltalk.NativeSpecTestCase, unescape("primReturnNil"), "primReturnNil", function NativeSpecTestCase__primReturnNil(){
var $$primitiveResult = smalltalk.primitiveManager.modules.NativeSpecTestModule.primReturnNil(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; self.primitiveFailed();
return self;
}
, "primitives", unescape("primReturnNil%0D%0D%09%3Cprimitive%3A%20%27primReturnNil%27%20module%3A%20%27NativeSpecTestModule%27%3E%0D%09self%20primitiveFailed"));
smalltalk.bind(smalltalk.NativeSpecTestCase, unescape("zero"), "zero", function NativeSpecTestCase__zero(){
var $$primitiveResult = smalltalk.primitiveManager.modules.NativeSpecTestModule.primReturnArguments(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; self.primitiveFailed();
return self;
}
, "primitives", unescape("zero%0D%0D%09%3Cprimitive%3A%20%27primReturnArguments%27%20module%3A%20%27NativeSpecTestModule%27%3E%0D%09self%20primitiveFailed"));
smalltalk.bind(smalltalk.NativeSpecTestCase, unescape("one%3A"), "one_", function NativeSpecTestCase__one_(anObject){
var $$primitiveResult = smalltalk.primitiveManager.modules.NativeSpecTestModule.primReturnArguments(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; self.primitiveFailed();
return self;
}
, "primitives", unescape("one%3A%20anObject%0D%0D%09%3Cprimitive%3A%20%27primReturnArguments%27%20module%3A%20%27NativeSpecTestModule%27%3E%0D%09self%20primitiveFailed"));
smalltalk.bind(smalltalk.NativeSpecTestCase, unescape("one%3Atwo%3A"), "one_two_", function NativeSpecTestCase__one_two_(anObject,bObject){
var $$primitiveResult = smalltalk.primitiveManager.modules.NativeSpecTestModule.primReturnArguments(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; self.primitiveFailed();
return self;
}
, "primitives", unescape("one%3A%20anObject%0Dtwo%3A%20bObject%0D%0D%09%3Cprimitive%3A%20%27primReturnArguments%27%20module%3A%20%27NativeSpecTestModule%27%3E%0D%09self%20primitiveFailed"));
smalltalk.bind(smalltalk.NativeSpecTestCase, unescape("primFail"), "primFail", function NativeSpecTestCase__primFail(){
var $$primitiveResult = smalltalk.primitiveManager.modules.NativeSpecTestModule.primFail(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; self['@testValue']=self['@testValue']._plus((1));
return self;
}
, "primitives", unescape("primFail%0D%0D%09%3Cprimitive%3A%20%27primFail%27%20module%3A%20%27NativeSpecTestModule%27%3E%0D%09testValue%20%3A%3D%20testValue%20+%201"));
smalltalk.bind(smalltalk.NativeSpecTestCase, unescape("append%3Ato%3A"), "append_to_", function NativeSpecTestCase__append_to_(aString,anotherString){
var $$primitiveResult = smalltalk.primitiveManager.modules.NativeSpecTestModule.primAppendTo(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; self.primitiveFailed();
return self;
}
, "primitives", unescape("append%3A%20aString%0Dto%3A%20anotherString%0D%0D%09%3Cprimitive%3A%20%27primAppendTo%27%20module%3A%20%27NativeSpecTestModule%27%3E%0D%09self%20primitiveFailed"));
smalltalk.bind(smalltalk.NativeSpecTestCase, unescape("testPrimReturnPlatformName"), "testPrimReturnPlatformName", function NativeSpecTestCase__testPrimReturnPlatformName(){
var result = nil;
const self = this; result=self.primReturnPlatformName();
self.assert_equals_(result,"common");
smalltalk.RuntimePrimitiveManager.setPlatformName_("iOS");
result=self.primReturnPlatformName();
self.assert_equals_(result,"iOS");
smalltalk.RuntimePrimitiveManager.setPlatformName_("Android");
result=self.primReturnPlatformName();
self.assert_equals_(result,"Android");
smalltalk.RuntimePrimitiveManager.setPlatformName_("NodeJS");
result=self.primReturnPlatformName();
self.assert_equals_(result,"NodeJS");
smalltalk.RuntimePrimitiveManager.setPlatformName_("common");
result=self.primReturnPlatformName();
self.assert_equals_(result,"common");
return self;
}
, "running", unescape("testPrimReturnPlatformName%0D%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%20self%20primReturnPlatformName.%0D%09self%0D%09%09assert%3A%20result%0D%09%09equals%3A%20%27common%27.%0D%0D%09RuntimePrimitiveManager%20setPlatformName%3A%20%27iOS%27.%0D%0D%09result%20%3A%3D%20self%20primReturnPlatformName.%0D%09self%0D%09%09assert%3A%20result%0D%09%09equals%3A%20%27iOS%27.%0D%09%09%0D%09RuntimePrimitiveManager%20setPlatformName%3A%20%27Android%27.%0D%0D%09result%20%3A%3D%20self%20primReturnPlatformName.%0D%09self%0D%09%09assert%3A%20result%0D%09%09equals%3A%20%27Android%27.%0D%09%09%0D%09RuntimePrimitiveManager%20setPlatformName%3A%20%27NodeJS%27.%0D%0D%09result%20%3A%3D%20self%20primReturnPlatformName.%0D%09self%0D%09%09assert%3A%20result%0D%09%09equals%3A%20%27NodeJS%27.%0D%09%09%0D%09RuntimePrimitiveManager%20setPlatformName%3A%20%27common%27.%0D%0D%09result%20%3A%3D%20self%20primReturnPlatformName.%0D%09self%0D%09%09assert%3A%20result%0D%09%09equals%3A%20%27common%27."));
