smalltalk.addClass("Float", smalltalk.Number, [], 'Number');
smalltalk.Float.$classVariableNames=("");
smalltalk.bind(smalltalk.Float.$klass, unescape("emax"), "emax", function Float_class__emax(){
const self = this; return (1023);
}
, "instance creation", unescape("emax%0D%09%22Answer%20exponent%20of%20maximal%20representable%20value%22%0D%0D%09%5E1023"));
smalltalk.bind(smalltalk.Float.$klass, unescape("negativeInfinity"), "negativeInfinity", function Float_class__negativeInfinity(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKNumber.primNegativeInfinity(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "instance creation", unescape("negativeInfinity%0D%09%3Cprimitive%3A%20%27primNegativeInfinity%27%20module%3A%20%27SKNumber%27%3E%0D%09%5Eself%20primitiveFailed"));
smalltalk.bind(smalltalk.Float.$klass, unescape("infinity"), "infinity", function Float_class__infinity(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKNumber.primInfinity(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "instance creation", unescape("infinity%0D%09%3Cprimitive%3A%20%27primInfinity%27%20module%3A%20%27SKNumber%27%3E%0D%09%5Eself%20primitiveFailed"));
smalltalk.bind(smalltalk.Float.$klass, unescape("nan"), "nan", function Float_class__nan(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKNumber.primNaN(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "instance creation", unescape("nan%0D%09%3Cprimitive%3A%20%27primNaN%27%20module%3A%20%27SKNumber%27%3E%0D%09%5Eself%20primitiveFailed"));
smalltalk.bind(smalltalk.Float.$klass, unescape("negativeZero"), "negativeZero", function Float_class__negativeZero(){
const self = this; return (0);
}
, "instance creation", unescape("negativeZero%0D%09%5E-0.0"));
smalltalk.bind(smalltalk.Float.$klass, unescape("epsilon"), "epsilon", function Float_class__epsilon(){
const self = this; return (0.001);
}
, "instance creation", unescape("epsilon%0D%09%5E0.001"));
smalltalk.bind(smalltalk.Float.$klass, unescape("multiplicativeIdentity"), "multiplicativeIdentity", function Float_class__multiplicativeIdentity(){
const self = this; return (1);
}
, "math", unescape("multiplicativeIdentity%0D%09%22Answer%20the%20multiplicative%20identity%20element%20for%20instances%20of%0D%09the%20receiver%3A%20the%20number%20which%2C%20when%20multiplied%20by%20any%20other%0D%09number%20yields%20the%20other%20number.%22%0D%0D%09%5E1.0"));
