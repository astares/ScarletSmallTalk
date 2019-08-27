smalltalk.bind(smalltalk.Number.$klass, unescape("multiplicativeIdentity"), "multiplicativeIdentity", function Number_class__multiplicativeIdentity(){
const self = this; return (1);
}
, "math", unescape("multiplicativeIdentity%0D%09%09%22Answer%20the%20multiplicative%20identity%20element%20for%20instances%20of%0D%09%09the%20receiver%3A%20the%20number%20which%2C%20when%20multiplied%20by%20any%20other%0D%09%09number%20yields%20the%20other%20number.%22%0D%09%5E1"));
smalltalk.bind(smalltalk.Number.$klass, unescape("e"), "e", function Number_class__e(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKNumber.primE(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "instantiation", unescape("e%0D%09%22Answer%20the%20floating%20point%20representation%20of%20pi.%22%0D%0D%09%3Cprimitive%3A%20%27primE%27%20module%3A%20%27SKNumber%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.Number, unescape("log"), "log", function Number__log(){
const self = this; return (self.ln())._slash(((10).ln()));
}
, "arithmetic", unescape("log%0D%09%22Return%20the%20log%2010%20of%20the%20receiver.%22%0D%0D%09%5Eself%20ln%20/%2010%20ln"));
smalltalk.bind(smalltalk.Number, unescape("reciprocal"), "reciprocal", function Number__reciprocal(){
const self = this; return ((self.$klass).multiplicativeIdentity())._slash(self);
}
, "math", unescape("reciprocal%0D%09%09%22Answer%20one%20divided%20by%20the%20receiver.%22%0D%09%5Eself%20class%20multiplicativeIdentity%20/%20self"));
smalltalk.bind(smalltalk.Number, unescape("asFloat"), "asFloat", function Number__asFloat(){
const self = this; return self.valueOf();
}
, "converting", unescape("asFloat%0D%0D%09%5Eself%20valueOf"));
smalltalk.bind(smalltalk.Number, unescape("hash"), "hash", function Number__hash(){
const self = this; return self;
}
, "comparing", unescape("hash%0D%09%5Eself"));
smalltalk.bind(smalltalk.Number, unescape("isZero"), "isZero", function Number__isZero(){
const self = this; return (self.asFloat())._eq((0));
}
, "testing", unescape("isZero%0D%0D%09%5Eself%20asFloat%20%3D%200.0"));
smalltalk.bind(smalltalk.Number, unescape("isNaN"), "isNaN", function Number__isNaN(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKNumber.primIsNaN(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "testing", unescape("isNaN%0D%0D%09%3Cprimitive%3A%20%27primIsNaN%27%20module%3A%20%27SKNumber%27%3E%0D%09%5Eself%20primitiveFailed"));
smalltalk.bind(smalltalk.Number, unescape("isInfinite"), "isInfinite", function Number__isInfinite(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKNumber.primIsInfinite(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "testing", unescape("isInfinite%0D%0D%09%3Cprimitive%3A%20%27primIsInfinite%27%20module%3A%20%27SKNumber%27%3E%0D%09%5Eself%20primitiveFailed"));
smalltalk.bind(smalltalk.Number, unescape("isPowerOfTwo"), "isPowerOfTwo", function Number__isPowerOfTwo(){
const self = this; return (self._no_eq((0))).and_((function Number__(){
return (self.bitAnd_((self._minus((1)))))._eq((0));
}
));
}
, "testing", unescape("isPowerOfTwo%0D%09%22Return%20true%20if%20the%20receiver%20is%20an%20integral%20power%20of%20two.%22%0D%09%5E%20self%20%7E%3D%200%20and%3A%20%5B%28self%20bitAnd%3A%20self-1%29%20%3D%200%5D"));
smalltalk.bind(smalltalk.Number, unescape("closeTo%3A"), "closeTo_", function Number__closeTo_(aNumber){
const self = this; return ((self.abs())._minus((aNumber.abs())))._lt_eq((smalltalk.Float.epsilon()));
}
, "comparing", unescape("closeTo%3A%20aNumber%0D%09%5E%28self%20abs%20-%20aNumber%20abs%29%20%3C%3D%20Float%20epsilon%20"));
smalltalk.bind(smalltalk.Number, unescape("round%3A"), "round_", function Number__round_(positions){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKNumber.primRound(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "rounding", unescape("round%3A%20positions%0D%09%3Cprimitive%3A%20%27primRound%27%20module%3A%20%27SKNumber%27%3E%0D%09%5Eself%20primitiveFailed"));
smalltalk.bind(smalltalk.Number, unescape("gcd%3A"), "gcd_", function Number__gcd_(anInteger){
var u = nil;
var v = nil;
var r = nil;
const self = this; u=self.abs();
v=anInteger.abs();
if ((u._lt(v)).valueOf()) {r=u;
u=v;
v=r};
while((v._eq((0))).not()){r=u._bk_bk(v);
u=v;
v=r};;
return u;
}
, "math", unescape("gcd%3A%20anInteger%0D%09%09%22Answer%20the%20greatest%20common%20divisor%0D%09%09%20between%20the%20receiver%20and%20anInteger.%22%0D%09%7C%20u%20v%20r%20%7C%0D%09u%20%3A%3D%20self%20abs.%0D%09v%20%3A%3D%20anInteger%20abs.%0D%09u%20%3C%20v%0D%09%09ifTrue%3A%20%5B%0D%09%09%09r%20%3A%3D%20u.%0D%09%09%09u%20%3A%3D%20v.%0D%09%09%09v%20%3A%3D%20r%5D.%0D%09%5Bv%20%3D%200%5D%0D%09%09whileFalse%3A%20%5B%0D%09%09%09r%20%3A%3D%20u%20%5C%5C%20v.%0D%09%09%09u%20%3A%3D%20v.%0D%09%09%09v%20%3A%3D%20r%5D.%0D%09%5Eu"));
smalltalk.bind(smalltalk.Number, unescape("exp"), "exp", function Number__exp(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKNumber.primExp(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "math", unescape("exp%0D%09%3Cprimitive%3A%20%27primExp%27%20module%3A%20%27SKNumber%27%3E%0D%09%5Eself%20primitiveFailed"));
smalltalk.bind(smalltalk.Number, unescape("radiansToDegrees"), "radiansToDegrees", function Number__radiansToDegrees(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKNumber.primRadiansToDegrees(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "math", unescape("radiansToDegrees%0D%09%22Answer%20the%20number%20of%20degrees%20the%0D%09%20receiver%20represents%20in%20radians.%22%0D%09%3Cprimitive%3A%20%27primRadiansToDegrees%27%20module%3A%20%27SKNumber%27%3E%0D%09%5Eself%20primitiveFailed"));
smalltalk.bind(smalltalk.Number, unescape("degreesToRadians"), "degreesToRadians", function Number__degreesToRadians(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKNumber.primDegreesToRadians(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "math", unescape("degreesToRadians%0D%09%22Answer%20the%20number%20of%20radians%20the%0D%09%20receiver%20represents%20in%20degrees.%22%0D%09%3Cprimitive%3A%20%27primDegreesToRadians%27%20module%3A%20%27SKNumber%27%3E%0D%09%5Eself%20primitiveFailed"));
smalltalk.bind(smalltalk.Number, unescape("degreeSin"), "degreeSin", function Number__degreeSin(){
const self = this; return (self.degreesToRadians()).sin();
}
, "math", unescape("degreeSin%0D%09%5Eself%20degreesToRadians%20sin"));
smalltalk.bind(smalltalk.Number, unescape("degreeCos"), "degreeCos", function Number__degreeCos(){
const self = this; return (self.degreesToRadians()).cos();
}
, "math", unescape("degreeCos%0D%09%5Eself%20degreesToRadians%20cos"));
smalltalk.bind(smalltalk.Number, unescape("arcTan%3A"), "arcTan_", function Number__arcTan_(aNumber){
const self = this; return self.atan2_(aNumber);
}
, "math", unescape("arcTan%3A%20aNumber%0D%09%5Eself%20atan2%3A%20aNumber"));
