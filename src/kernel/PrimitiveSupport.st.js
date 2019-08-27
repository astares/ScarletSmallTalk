smalltalk.addClass("RuntimePrimitiveManager", smalltalk.Object, [], 'nil');
smalltalk.RuntimePrimitiveManager.$classVariableNames=("");
smalltalk.addClass("PrimitiveModule", smalltalk.Object, ['primFailValue'], 'Primitive Support');
smalltalk.PrimitiveModule.$classVariableNames=("");
smalltalk.addClass("PrimitiveFailed", smalltalk.Error, [], 'nil');
smalltalk.PrimitiveFailed.$classVariableNames=("");
smalltalk.bind(smalltalk.Object, unescape("primitiveFailed"), "primitiveFailed", function Object__primitiveFailed(){
var stk = nil;
const self = this; return smalltalk.PrimitiveFailed.signal_("Primitve failed");
}
, "", unescape("primitiveFailed%0D%09%7C%20stk%20%7C%0D%09%22Private%20-%20Initiate%20a%20walkback%20with%20label%0D%09%20containing%20primitive%20failed%20message.%22%0D%20%0D%20%09%22%20enable%20this%20if%20you%20need%20the%20primitive%20failed%20stack%22%0D%09%22%0D%09%7B%27stk%20%3D%20%28new%20Error%28%29%29.stack%3B%0D%09console.log%28stk%29%3B%0D%09%27%7D.%0D%09%5EPrimitiveFailed%20signal%3A%20stk%0D%09%22%0D%09%5EPrimitiveFailed%20signal%3A%20%27Primitve%20failed%27"));
smalltalk.bind(smalltalk.Object, unescape("primitiveFailed%3A"), "primitiveFailed_", function Object__primitiveFailed_(aString){
const self = this; return smalltalk.PrimitiveFailed.signal_(aString);
}
, "", unescape("primitiveFailed%3A%20aString%0D%09%0D%09%22%20enable%20this%20if%20you%20need%20the%20primitive%20failed%20stack%22%0D%09%22%0D%09%7B%27stk%20%3D%20%28new%20Error%28%29%29.stack%3B%0D%09console.log%28aString%29%3B%0D%09console.log%28stk%29%3B%0D%09%27%7D.%0D%09%22%0D%09%5EPrimitiveFailed%20signal%3A%20aString"));
smalltalk.bind(smalltalk.RuntimePrimitiveManager.$klass, unescape("setPlatformName%3A"), "setPlatformName_", function RuntimePrimitiveManager_class__setPlatformName_(aString){
var $$primitiveResult = smalltalk.primitiveManager.modules.RuntimePrimitiveManager.primSetPlatformName(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; self;
return self;
}
, "registration", unescape("setPlatformName%3A%20aString%0D%0D%09%3Cprimitive%3A%20%27primSetPlatformName%27%20module%3A%20%27RuntimePrimitiveManager%27%3E"));
smalltalk.bind(smalltalk.RuntimePrimitiveManager.$klass, unescape("registerModule%3A"), "registerModule_", function RuntimePrimitiveManager_class__registerModule_(aPrimitiveModule){
const self = this; self.registerModule_named_with_(aPrimitiveModule,(aPrimitiveModule.moduleName()),(aPrimitiveModule.primitiveMap()));
return self;
}
, "registration", unescape("registerModule%3A%20aPrimitiveModule%0D%0D%09self%0D%09%09registerModule%3A%20aPrimitiveModule%0D%09%09named%3A%20aPrimitiveModule%20moduleName%0D%09%09with%3A%20aPrimitiveModule%20primitiveMap"));
smalltalk.bind(smalltalk.RuntimePrimitiveManager.$klass, unescape("newPrimitiveSpec"), "newPrimitiveSpec", function RuntimePrimitiveManager_class__newPrimitiveSpec(){
var $$primitiveResult = smalltalk.primitiveManager.modules.RuntimePrimitiveManager.primNewPrimitiveSpec(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; self;
return self;
}
, "registration", unescape("newPrimitiveSpec%0D%0D%09%3Cprimitive%3A%20%27primNewPrimitiveSpec%27%20module%3A%20%27RuntimePrimitiveManager%27%3E"));
smalltalk.bind(smalltalk.RuntimePrimitiveManager.$klass, unescape("registerSpec%3Anamed%3A"), "registerSpec_named_", function RuntimePrimitiveManager_class__registerSpec_named_(aSpec,aString){
var $$primitiveResult = smalltalk.primitiveManager.modules.RuntimePrimitiveManager.primRegisterSpec(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; self;
return self;
}
, "registration", unescape("registerSpec%3A%20aSpec%0Dnamed%3A%20aString%0D%0D%09%3Cprimitive%3A%20%27primRegisterSpec%27%20module%3A%20%27RuntimePrimitiveManager%27%3E"));
smalltalk.bind(smalltalk.RuntimePrimitiveManager.$klass, unescape("registerModule%3Anamed%3Awith%3A"), "registerModule_named_with_", function RuntimePrimitiveManager_class__registerModule_named_with_(aPrimitiveModule,aString,aDictionary){
var $$primitiveResult = smalltalk.primitiveManager.modules.RuntimePrimitiveManager.primRegisterSmalltalkModule(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; self;
return self;
}
, "registration", unescape("registerModule%3A%20aPrimitiveModule%0Dnamed%3A%20aString%0Dwith%3A%20aDictionary%0D%0D%09%3Cprimitive%3A%20%27primRegisterSmalltalkModule%27%20module%3A%20%27RuntimePrimitiveManager%27%3E"));
smalltalk.bind(smalltalk.RuntimePrimitiveManager.$klass, unescape("deregisterModule%3A"), "deregisterModule_", function RuntimePrimitiveManager_class__deregisterModule_(aModule){
var $$primitiveResult = smalltalk.primitiveManager.modules.RuntimePrimitiveManager.primDeregisterSmalltalkModule(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; self;
return self;
}
, "registration", unescape("deregisterModule%3A%20aModule%0D%0D%09%3Cprimitive%3A%20%27primDeregisterSmalltalkModule%27%20module%3A%20%27RuntimePrimitiveManager%27%3E"));
smalltalk.bind(smalltalk.PrimitiveModule, unescape("primitiveMap"), "primitiveMap", function PrimitiveModule__primitiveMap(){
const self = this; return smalltalk.Dictionary.$$new();
}
, "accessing", unescape("primitiveMap%0D%09%22This%20method%20should%20return%20a%20mapping%20between%20the%20primitive%20name%0D%09and%20the%20selector%20that%20should%20be%20performed.%0D%09A%20Smalltalk%20primitive%20should%20take%20two%20arguments.%0D%091.%20Primitive%20receiver.%0D%092.%20Array%20of%20arguments%20to%20the%20primitive%20method.%22%0D%0D%09%5EDictionary%20new"));
smalltalk.bind(smalltalk.PrimitiveModule, unescape("primFailValue"), "primFailValue", function PrimitiveModule__primFailValue(){
const self = this; return (function(){var $1$; $1$ = self['@primFailValue']; if (nil.isNil_($1$)) { return self['@primFailValue']=smalltalk.Object.$$new() } else { return $1$; }})();
}
, "accessing", unescape("primFailValue%0D%0D%09%5EprimFailValue%20ifNil%3A%20%5BprimFailValue%20%3A%3D%20Object%20new%5D"));
smalltalk.bind(smalltalk.PrimitiveModule, unescape("moduleName"), "moduleName", function PrimitiveModule__moduleName(){
const self = this; return (self.$klass).name();
}
, "accessing", unescape("moduleName%0D%09%5Eself%20class%20name"));
smalltalk.bind(smalltalk.PrimitiveModule, unescape("register"), "register", function PrimitiveModule__register(){
const self = this; smalltalk.RuntimePrimitiveManager.registerModule_(self);
return self;
}
, "initialize-release", unescape("register%0D%0D%09RuntimePrimitiveManager%20registerModule%3A%20self."));
smalltalk.bind(smalltalk.PrimitiveModule, unescape("deregister"), "deregister", function PrimitiveModule__deregister(){
const self = this; smalltalk.RuntimePrimitiveManager.deregisterModule_(self);
return self;
}
, "initialize-release", unescape("deregister%0D%0D%09RuntimePrimitiveManager%20deregisterModule%3A%20self"));
smalltalk.bind(smalltalk.PrimitiveModule, unescape("primitiveFailed"), "primitiveFailed", function PrimitiveModule__primitiveFailed(){
const self = this; return self.primFailValue();
}
, "error handling", unescape("primitiveFailed%0D%0D%09%5Eself%20primFailValue"));
smalltalk.bind(smalltalk.PrimitiveModule, unescape("primitiveFailed%3A"), "primitiveFailed_", function PrimitiveModule__primitiveFailed_(message){
const self = this; return self.primFailValue();
}
, "error handling", unescape("primitiveFailed%3A%20message%0D%0D%09%5Eself%20primFailValue"));
