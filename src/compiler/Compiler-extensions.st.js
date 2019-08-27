smalltalk.bind(smalltalk.UndefinedObject, unescape("generateOn%3A"), "generateOn_", function UndefinedObject__generateOn_(generator){
const self = this; generator.generateNilLiteral_((self.asString()));
return self;
}
, "*Compiler-JS", unescape("generateOn%3A%20generator%0D%09generator%20generateNilLiteral%3A%20self%20asString"));
smalltalk.bind(smalltalk.Boolean, unescape("generateOn%3A"), "generateOn_", function Boolean__generateOn_(generator){
const self = this; generator.generateBooleanLiteral_(self);
return self;
}
, "*Compiler-JS", unescape("generateOn%3A%20generator%0D%09generator%20generateBooleanLiteral%3A%20self"));
smalltalk.bind(smalltalk.Array, unescape("generateOn%3A"), "generateOn_", function Array__generateOn_(generator){
const self = this; generator.generateArrayLiteral_(self);
return self;
}
, "*Compiler-JS", unescape("generateOn%3A%20generator%0D%09generator%20generateArrayLiteral%3A%20self"));
smalltalk.bind(smalltalk.String, unescape("generateOn%3A"), "generateOn_", function String__generateOn_(generator){
const self = this; generator.generateStringLiteral_(self);
return self;
}
, "*Compiler-JS", unescape("generateOn%3A%20generator%0D%09generator%20generateStringLiteral%3A%20self"));
smalltalk.bind(smalltalk.Number, unescape("generateOn%3A"), "generateOn_", function Number__generateOn_(generator){
const self = this; generator.generateNumberLiteral_(self);
return self;
}
, "*Compiler-JS", unescape("generateOn%3A%20generator%0D%09generator%20generateNumberLiteral%3A%20self"));
smalltalk.bind(smalltalk.Object, unescape("isVariableBinding"), "isVariableBinding", function Object__isVariableBinding(){
const self = this; return false;
}
, "testing", unescape("isVariableBinding%0D%09%22Return%20true%20if%20I%20represent%20a%20literal%20variable%20binding%22%0D%09%5Efalse%0D%09"));
