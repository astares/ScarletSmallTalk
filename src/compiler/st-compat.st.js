smalltalk.bind(smalltalk.Behavior, unescape("commentStamp%3Aprior%3A"), "commentStamp_prior_", function Behavior__commentStamp_prior_(changeStamp,indexAndOffset){
const self = this; return self.commentStamp();
}
, "fileIn/Out", unescape("commentStamp%3A%20changeStamp%20prior%3A%20indexAndOffset%0D%09%22Prior%20source%20link%20ignored%20when%20filing%20in.%22%0D%09%5Eself%20commentStamp%0D%09"));
smalltalk.addClass("OutOfScopeNotification", smalltalk.Exception, [], 'Kernel');
smalltalk.OutOfScopeNotification.$classVariableNames=("");
smalltalk.bind(smalltalk.Class, unescape("variableSubclass%3AinstanceVariableNames%3AclassVariableNames%3ApoolDictionaries%3Acategory%3A"), "variableSubclass_instanceVariableNames_classVariableNames_poolDictionaries_category_", function Class__variableSubclass_instanceVariableNames_classVariableNames_poolDictionaries_category_(aString,aString2,aString3,poolVarNames,aCategory){
const self = this; return self.subclass_instanceVariableNames_classVariableNames_poolDictionaries_category_(aString,aString2,aString3,poolVarNames,aCategory);
}
, "instantiation", unescape("variableSubclass%3A%20aString%0DinstanceVariableNames%3A%20aString2%0DclassVariableNames%3A%20aString3%0DpoolDictionaries%3A%20poolVarNames%0Dcategory%3A%20aCategory%0D%09%22%20Create%20a%20new%20subclass%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%0D%09%09subclass%3A%20aString%0D%09%09instanceVariableNames%3A%20aString2%0D%09%09classVariableNames%3AaString3%0D%09%09poolDictionaries%3A%20poolVarNames%0D%09%09category%3A%20aCategory"));
smalltalk.bind(smalltalk.SequenceableCollection, unescape("atAllPut%3A"), "atAllPut_", function SequenceableCollection__atAllPut_(anObject){
const self = this; (1).to_do_((self.size()),(function SequenceableCollection__(index){
return self.at_put_(index,anObject);
}
));
return self;
}
, "accessing", unescape("atAllPut%3A%20anObject%20%0D%09%22Put%20anObject%20at%20every%20one%20of%20the%20receiver%27s%20indices.%22%0D%0D%091%20to%3A%20self%20size%20do%3A%20%5B%3Aindex%20%7C%20self%20at%3A%20index%20put%3A%20anObject%5D"));
smalltalk.bind(smalltalk.SequenceableCollection, unescape("allButLastDo%3A"), "allButLastDo_", function SequenceableCollection__allButLastDo_(block){
const self = this; (1).to_do_(((self.size())._minus((1))),(function SequenceableCollection__(index){
return block.value_((self.at_(index)));
}
));
return self;
}
, "enumerating", unescape("allButLastDo%3A%20block%0D%0D%091%20to%3A%20self%20size%20-%201%20do%3A%0D%09%09%5B%3Aindex%20%7C%20block%20value%3A%20%28self%20at%3A%20index%29%5D"));
smalltalk.bind(smalltalk.SequenceableCollection, unescape("copyUpTo%3A"), "copyUpTo_", function SequenceableCollection__copyUpTo_(anElement){
var index = nil;
const self = this; index=self.indexOf_(anElement);
if ((index._eq((0))).valueOf()) {return self.copy()};
return self.first_((index._minus((1))));
}
, "copying", unescape("copyUpTo%3A%20anElement%20%0D%09%22Answer%20all%20elements%20up%20to%20but%20not%20including%20anObject.%20If%20there%0D%09is%20no%20such%20object%2C%20answer%20a%20copy%20of%20the%20receiver.%22%0D%0D%09%7C%20index%20%7C%0D%09index%20%3A%3D%20self%20indexOf%3A%20anElement.%0D%09index%20%3D%200%20ifTrue%3A%20%5B%20%5Eself%20copy%20%5D.%0D%09%5Eself%20first%3A%20index%20-%201"));
smalltalk.bind(smalltalk.SequenceableCollection, unescape("first%3A"), "first_", function SequenceableCollection__first_(n){
const self = this; return self.copyFrom_to_((1),n);
}
, "copying", unescape("first%3A%20n%0D%09%22Answer%20the%20first%20n%20elements%20of%20the%20receiver.%0D%09Raise%20an%20error%20if%20there%20are%20not%20enough%20elements.%22%0D%0D%09%5E%20self%20copyFrom%3A%201%20to%3A%20n"));
smalltalk.bind(smalltalk.SequenceableCollection, unescape("replaceAllOccurencesOf%3Awith%3A"), "replaceAllOccurencesOf_with_", function SequenceableCollection__replaceAllOccurencesOf_with_(oldObject,newObject){
const self = this; return self.replaceAll_with_(oldObject,newObject);
}
, "accessing", unescape("replaceAllOccurencesOf%3A%20oldObject%20with%3A%20newObject%20%0D%09%22Replace%20all%20occurences%20of%20oldObject%20with%20newObject%22%0D%09%5Eself%20replaceAll%3A%20oldObject%20with%3A%20newObject"));
smalltalk.bind(smalltalk.Array.$klass, unescape("new%3AwithAll%3A"), "new_withAll_", function Array_class__new_withAll_(size,value){
const self = this; return (self.new_(size)).atAllPut_(value);
}
, "instance creation", unescape("new%3A%20size%20withAll%3A%20value%20%0D%09%22Answer%20an%20instance%20of%20me%2C%20with%20number%20of%20elements%20equal%20to%20size%2C%20each%20%0D%09of%20which%20refers%20to%20the%20argument%2C%20value.%22%0D%0D%09%5E%28self%20new%3A%20size%29%20atAllPut%3A%20value"));
smalltalk.bind(smalltalk.Array.$klass, unescape("blockVariableEval"), "blockVariableEval", function Array_class__blockVariableEval(){
const self = this; return (function Array_class__(x){
return x;
}
).value_((2));
}
, "instance creation", unescape("blockVariableEval%0D%09%5E%5B%3Ax%20%7C%20x%5D%20value%3A%202"));
smalltalk.bind(smalltalk.Array, unescape("writeStream"), "writeStream", function Array__writeStream(){
const self = this; return smalltalk.Stream.on_((smalltalk.Array.$$new()));
}
, "accessing", unescape("writeStream%0D%09%5EStream%20on%3A%20Array%20new"));
smalltalk.bind(smalltalk.Stream, unescape("resetToStart"), "resetToStart", function Stream__resetToStart(){
const self = this; self.resetContents();
return self;
}
, "positioning", unescape("resetToStart%0D%09self%20resetContents"));
smalltalk.bind(smalltalk.String, unescape("subStrings"), "subStrings", function String__subStrings(){
const self = this; return self.asArrayOfSubstrings();
}
, "converting", unescape("subStrings%0D%09%5Eself%20asArrayOfSubstrings"));
smalltalk.bind(smalltalk.String, unescape("charCode"), "charCode", function String__charCode(){
const self = this; return self.asciiValue();
}
, "converting", unescape("charCode%0D%09%5Eself%20asciiValue"));
smalltalk.bind(smalltalk.String, unescape("isSymbol"), "isSymbol", function String__isSymbol(){
const self = this; return true;
}
, "converting", unescape("isSymbol%0D%09%5Etrue"));
smalltalk.bind(smalltalk.String, unescape("isBinary"), "isBinary", function String__isBinary(){
var first = nil;
const self = this; first=self.at_((1));
return (((nil.is_eqeq_(first,"_"))).or_((function String__(){
return first.isLetter();
}
))).not();
}
, "testing", unescape("isBinary%0D%09%7C%20first%20%7C%0D%09first%20%3A%3D%20self%20at%3A%201.%0D%09%5E%28first%20%3D%3D%20%24_%20or%3A%20%5Bfirst%20isLetter%5D%29%20not"));
smalltalk.bind(smalltalk.Number.$klass, unescape("primParseFrom%3A"), "primParseFrom_", function Number_class__primParseFrom_(aString){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKNumber.primNumberFrom(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "parsing", unescape("primParseFrom%3A%20aString%0D%09%22%20Return%20the%20receiver%20as%20a%20Number.%20%22%0D%09%3Cprimitive%3A%20%27primNumberFrom%27%20module%3A%20%27SKNumber%27%3E%0D%09%5Eself%20primitiveFailed"));
smalltalk.bind(smalltalk.Number.$klass, unescape("parseFrom%3A"), "parseFrom_", function Number_class__parseFrom_(aString){
const self = this; if ((aString.includes_("r")).valueOf()) {return smalltalk.Number.readFrom_((aString.readStream()))};
return self.primParseFrom_(aString);
}
, "parsing", unescape("parseFrom%3A%20aString%0D%09%22%20Return%20the%20receiver%20as%20a%20Number.%20%22%0D%0D%09%28aString%20includes%3A%20%22%24r%22%27r%27%29%20ifTrue%3A%20%5B%0D%09%09%5ENumber%20readFrom%3A%20aString%20readStream%0D%09%5D.%0D%09%5Eself%20primParseFrom%3A%20aString"));
