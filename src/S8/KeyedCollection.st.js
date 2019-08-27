smalltalk.bind(smalltalk.KeyedCollection.$klass, unescape("basicNew%3A"), "basicNew_", function KeyedCollection_class__basicNew_(size){
const self = this; return self.$$new();
}
, "instantiation", unescape("basicNew%3A%20size%0D%09%22%20Return%20an%20instance%20of%20the%20receiver%20of%20specified%20size.%20%22%0D%0D%09%5Eself%20new"));
smalltalk.bind(smalltalk.KeyedCollection.$klass, unescape("@"), "_at", function KeyedCollection_class___at(jsObject){
var result = nil;
const self = this; result=self.$$new();
(jsObject.jsPropertyNames()).do_((function KeyedCollection_class__(key){
return result.at_put_(key,((function(){var $1$; $1$ = jsObject[key]; return nil.isNil_($1$) ? nil : $1$})()));
}
));
return result;
}
, "instantiation", unescape("@%20jsObject%0D%09%22%20Return%20an%20instance%20of%20the%20receiver%20with%20the%20properties%20owned%20by%20jsObject.%20%22%0D%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%20self%20new.%0D%09jsObject%20jsPropertyNames%20do%3A%20%5B%3Akey%7C%0D%09%09result%20at%3A%20key%20put%3A%20%28jsObject%20basicAt%3A%20key%29%0D%09%5D.%0D%09%5Eresult"));
smalltalk.bind(smalltalk.KeyedCollection.$klass, unescape("fromTuples%3A"), "fromTuples_", function KeyedCollection_class__fromTuples_(tuples){
const self = this; return tuples.inject_into_((self.$$new()),(function KeyedCollection_class__(result,tuple){
result.at_put_((tuple.first()),(tuple.last()));
return result;
}
));
}
, "instantiation", unescape("fromTuples%3A%20tuples%0D%09%22%20Return%20an%20instance%20of%20the%20receiver.%20%22%0D%0D%09%5Etuples%20inject%3A%20self%20new%20into%3A%20%5B%3Aresult%20%3Atuple%7C%0D%09%09result%20at%3A%20tuple%20first%20put%3A%20tuple%20last.%0D%09%09result%0D%09%5D"));
smalltalk.bind(smalltalk.KeyedCollection, unescape("%2C"), "_comma", function KeyedCollection___comma(aCollection){
const self = this; return self.shouldNotImplement_(unescape("%2C"));
}
, "copying", unescape("%2C%20aCollection%0D%09%22%20Return%20a%20copy%20of%20the%20receiver%20with%20aCollection%20appended.%20%22%0D%0D%09%5Eself%20shouldNotImplement%3A%20%23%2C"));
smalltalk.bind(smalltalk.KeyedCollection, unescape("%3D"), "_eq", function KeyedCollection___eq(anObject){
const self = this; var $early={name:"stReturn"};
try {
if (((self.$klass)._eq((anObject.$klass))).not()) {return false};
if (((self.size())._eq((anObject.size()))).not()) {return false};
self.keysAndValuesDo_((function KeyedCollection__(key,value){
if (((anObject.at_ifAbsent_(key,(function KeyedCollection__(){
$early.result=false; throw ($early);
}
)))._eq(value)).not()) {$early.result=false; throw ($early)} else {return nil};
}
));
return true;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "comparing", unescape("%3D%20anObject%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20equal%20to%20anObject.%20%22%0D%0D%09self%20class%20%3D%20anObject%20class%20ifFalse%3A%20%5B%5Efalse%5D.%0D%09self%20size%20%3D%20anObject%20size%20ifFalse%3A%20%5B%5Efalse%5D.%0D%09self%20keysAndValuesDo%3A%20%5B%3Akey%20%3Avalue%20%7C%0D%09%09%28anObject%20at%3A%20key%20ifAbsent%3A%20%5B%5Efalse%5D%29%0D%09%09%09%3D%20value%20ifFalse%3A%20%5B%5Efalse%5D%0D%09%5D.%0D%09%5Etrue"));
smalltalk.bind(smalltalk.KeyedCollection, unescape("add%3A"), "add_", function KeyedCollection__add_(anAssociation){
const self = this; self.at_put_((anAssociation.key()),(anAssociation.value()));
return anAssociation;
}
, "adding", unescape("add%3A%20anAssociation%0D%09%22%20Bind%20anAssociation%20to%20the%20receiver.%20%22%0D%0D%09self%20at%3A%20anAssociation%20key%20put%3A%20anAssociation%20value.%0D%09%5EanAssociation"));
smalltalk.bind(smalltalk.KeyedCollection, unescape("addAll%3A"), "addAll_", function KeyedCollection__addAll_(aKeyedCollection){
const self = this; smalltalk.superImplementor(smalltalk.KeyedCollection,'addAll_').apply(self, [aKeyedCollection.associations()]);
return aKeyedCollection;
}
, "adding", unescape("addAll%3A%20aKeyedCollection%0D%09%22%20Bind%20all%20associations%20in%20aKeyedCollection%20to%20the%20receiver.%20%22%0D%0D%09super%20addAll%3A%20aKeyedCollection%20associations.%0D%09%5EaKeyedCollection"));
smalltalk.bind(smalltalk.KeyedCollection, unescape("asJSONObject"), "asJSONObject", function KeyedCollection__asJSONObject(){
var result = nil;
var value = nil;
const self = this; result=(self.smalltalk()).emptyJSONObject();
self.keysAndValuesDo_((function KeyedCollection__(key,aValue){
value=(self.isObject_(aValue)).ifTrue_ifFalse_((function KeyedCollection__(){
return aValue.asJSONObject();
}
),(function KeyedCollection__(){
return aValue;
}
));
return (result[key]=value);
}
));
return result;
}
, "converting", unescape("asJSONObject%0D%09%22%20Return%20the%20mapping%20of%20the%20receiver%20to%20JSON%20structure.%20%22%0D%0D%09%7C%20result%20value%20%7C%0D%09result%20%3A%3D%20self%20smalltalk%20emptyJSONObject.%0D%09self%20keysAndValuesDo%3A%20%5B%3Akey%20%3AaValue%20%7C%0D%09%09value%20%3A%3D%20%28self%20isObject%3A%20aValue%29%0D%09%09%09ifTrue%3A%20%5B%20aValue%20asJSONObject%20%5D%0D%09%09%09ifFalse%3A%20%5B%20aValue%20%5D.%0D%09%09result%20basicAt%3A%20key%20put%3A%20value%0D%09%5D.%0D%09%5Eresult"));
smalltalk.bind(smalltalk.KeyedCollection, unescape("associations"), "associations", function KeyedCollection__associations(){
var result = nil;
const self = this; result=smalltalk.Array.$$new();
self.associationsDo_((function KeyedCollection__(each){
return result.add_(each);
}
));
return result;
}
, "accessing", unescape("associations%0D%09%22%20Return%20the%20associations%20of%20the%20receiver.%20%22%0D%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%20Array%20new.%0D%09self%20associationsDo%3A%20%5B%3Aeach%7C%20result%20add%3A%20each%20%5D.%0D%09%5Eresult"));
smalltalk.bind(smalltalk.KeyedCollection, unescape("associationsDo%3A"), "associationsDo_", function KeyedCollection__associationsDo_(aBlock){
const self = this; self.keysAndValuesDo_((function KeyedCollection__(key,value){
return aBlock.value_((smalltalk.Association.key_value_(key,value)));
}
));
return self;
}
, "enumerating", unescape("associationsDo%3A%20aBlock%0D%09%22%20Evaluate%20aBlock%20for%20all%20the%20receiver%27s%20associations.%20%22%0D%0D%09self%20keysAndValuesDo%3A%20%5B%3Akey%20%3Avalue%7C%0D%09%09aBlock%20value%3A%20%28Association%20key%3A%20key%20value%3A%20value%29%0D%09%5D."));
smalltalk.bind(smalltalk.KeyedCollection, unescape("at%3A"), "at_", function KeyedCollection__at_(aKey){
const self = this; return self.at_ifAbsent_(aKey,(function KeyedCollection__(){
return self.objectNotFoundAt_(aKey);
}
));
}
, "accessing", unescape("at%3A%20aKey%0D%09%22%20Return%20the%20value%20at%20aKey.%0D%09Signal%20an%20error%20if%20the%20key%20is%20not%20present.%0D%09%22%0D%0D%09%5Eself%20at%3A%20aKey%20ifAbsent%3A%20%5B%20self%20objectNotFoundAt%3A%20aKey%20%5D"));
smalltalk.bind(smalltalk.KeyedCollection, unescape("at%3AifAbsent%3A"), "at_ifAbsent_", function KeyedCollection__at_ifAbsent_(aKey,aBlock){
const self = this; return self.implementedBySubclass_("at:ifAbsent:");
}
, "accessing", unescape("at%3A%20aKey%20ifAbsent%3A%20aBlock%0D%09%22%20Return%20the%20value%20at%20aKey%20or%20the%20result%20of%20evaluating%20aBlock.%20%22%0D%0D%09%5Eself%20implementedBySubclass%3A%20%23at%3AifAbsent%3A"));
smalltalk.bind(smalltalk.KeyedCollection, unescape("values"), "values", function KeyedCollection__values(){
const self = this; return self.implementedBySubclass_("values");
}
, "accessing", unescape("values%0D%09%22%20Return%20the%20values%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20implementedBySubclass%3A%20%23values"));
smalltalk.bind(smalltalk.KeyedCollection, unescape("at%3AifAbsentPut%3A"), "at_ifAbsentPut_", function KeyedCollection__at_ifAbsentPut_(aKey,aBlock){
const self = this; return self.at_ifAbsent_(aKey,(function KeyedCollection__(){
return self.at_put_(aKey,(aBlock.value()));
}
));
}
, "accessing", unescape("at%3A%20aKey%20ifAbsentPut%3A%20aBlock%0D%09%22%20Return%20the%20value%20at%20aKey%2C%20or%20add%20the%20result%20of%20evaluating%20aBlock%20to%20the%20receiver%20if%20it%20is%20absent.%20%22%0D%0D%09%5Eself%20at%3A%20aKey%20ifAbsent%3A%20%5B%20self%20at%3A%20aKey%20put%3A%20aBlock%20value%20%5D"));
smalltalk.bind(smalltalk.KeyedCollection, unescape("at%3Aput%3A"), "at_put_", function KeyedCollection__at_put_(aKey,aValue){
const self = this; return self.implementedBySubclass_("at:put:");
}
, "accessing", unescape("at%3A%20aKey%20put%3A%20aValue%0D%09%22%20Set%20the%20value%20at%20aKey%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20implementedBySubclass%3A%20%23at%3Aput%3A"));
smalltalk.bind(smalltalk.KeyedCollection, unescape("detect%3AifNone%3A"), "detect_ifNone_", function KeyedCollection__detect_ifNone_(aBlock,anotherBlock){
const self = this; return self.implementedBySubclass_("detect:ifNone:");
}
, "enumerating", unescape("detect%3A%20aBlock%20ifNone%3A%20anotherBlock%0D%09%22%20Detect%20the%20value%20who%20matches%20aBlock.%0D%09Return%20the%20result%20of%20evaluating%20aBlock%20if%20no%20value%20matches%20detection%20block.%0D%09%22%0D%0D%09%5Eself%20implementedBySubclass%3A%20%23detect%3AifNone%3A"));
smalltalk.bind(smalltalk.KeyedCollection, unescape("do%3A"), "do_", function KeyedCollection__do_(aBlock){
const self = this; return self.implementedBySubclass_("do:");
}
, "enumerating", unescape("do%3A%20aBlock%0D%09%22%20Evaluates%20aBlock%20for%20all%20values%20in%20the%20receiver.%20%22%0D%0D%09%5Eself%20implementedBySubclass%3A%20%23do%3A"));
smalltalk.bind(smalltalk.KeyedCollection, unescape("includes%3A"), "includes_", function KeyedCollection__includes_(anObject){
const self = this; return self.implementedBySubclass_("includes:");
}
, "testing", unescape("includes%3A%20anObject%0D%09%22%20Return%20true%20if%20the%20receiver%27s%20values%20include%20anObject.%20%22%0D%0D%09%5Eself%20implementedBySubclass%3A%20%23includes%3A"));
smalltalk.bind(smalltalk.KeyedCollection, unescape("keyForValue%3AifAbsent%3A"), "keyForValue_ifAbsent_", function KeyedCollection__keyForValue_ifAbsent_(anObject,aBlock){
const self = this; var $early={name:"stReturn"};
try {
self.keysAndvaluesDo_((function KeyedCollection__(key,value){
if ((anObject._eq(value)).valueOf()) {$early.result=key; throw ($early)} else {return nil};
}
));
return aBlock.value();
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "accessing", unescape("keyForValue%3A%20anObject%20ifAbsent%3A%20aBlock%0D%09%22%20Return%20the%20key%20in%20the%20receiver%20for%20value%20anObject%2C%20or%20the%20result%20of%20evaluating%20aBlock.%20%22%0D%0D%09self%20keysAndvaluesDo%3A%20%5B%3Akey%20%3Avalue%7C%20anObject%20%3D%20value%20ifTrue%3A%20%5B%20%5Ekey%20%5D%20%5D.%0D%09%5EaBlock%20value"));
smalltalk.bind(smalltalk.KeyedCollection, unescape("keys"), "keys", function KeyedCollection__keys(){
const self = this; return self.implementedBySubclass_("keys");
}
, "accessing", unescape("keys%0D%09%22%20Return%20the%20keys%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20implementedBySubclass%3A%20%23keys"));
smalltalk.bind(smalltalk.KeyedCollection, unescape("keysAndValuesDo%3A"), "keysAndValuesDo_", function KeyedCollection__keysAndValuesDo_(aBlock){
const self = this; return self.implementedBySubclass_("keysAndValuesDo:");
}
, "enumerating", unescape("keysAndValuesDo%3A%20aBlock%0D%09%22%20Evaluate%20aBlock%20for%20key/value%20pairs%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20implementedBySubclass%3A%20%23keysAndValuesDo%3A"));
smalltalk.bind(smalltalk.KeyedCollection, unescape("keysDo%3A"), "keysDo_", function KeyedCollection__keysDo_(aBlock){
const self = this; return self.implementedBySubclass_("keysDo:");
}
, "enumerating", unescape("keysDo%3A%20aBlock%0D%09%22%20Evaluate%20aBlock%20with%20the%20keys%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20implementedBySubclass%3A%20%23keysDo%3A"));
smalltalk.bind(smalltalk.KeyedCollection, unescape("includesKey%3A"), "includesKey_", function KeyedCollection__includesKey_(aKey){
const self = this; return self.implementedBySubclass_("includesKey:");
}
, "testing", unescape("includesKey%3A%20aKey%0D%09%22%20Return%20true%20if%20the%20receiver%27s%20keys%20include%20aKey.%20%22%0D%0D%09%5Eself%20implementedBySubclass%3A%20%23includesKey%3A"));
smalltalk.bind(smalltalk.KeyedCollection, unescape("removeKey%3AifAbsent%3A"), "removeKey_ifAbsent_", function KeyedCollection__removeKey_ifAbsent_(aKey,aBlock){
const self = this; return self.implementedBySubclass_("removeKey:ifAbsent:");
}
, "removing", unescape("removeKey%3A%20aKey%20ifAbsent%3A%20aBlock%0D%09%22%20Remove%20the%20binding%20at%20aKey.%20%22%0D%0D%09%5Eself%20implementedBySubclass%3A%20%23removeKey%3AifAbsent%3A"));
smalltalk.bind(smalltalk.KeyedCollection, unescape("isEmpty"), "isEmpty", function KeyedCollection__isEmpty(){
const self = this; return (self.size())._eq((0));
}
, "testing", unescape("isEmpty%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20empty.%20%22%0D%0D%09%5Eself%20size%20%3D%200"));
smalltalk.bind(smalltalk.KeyedCollection, unescape("at%3AifPresent%3A"), "at_ifPresent_", function KeyedCollection__at_ifPresent_(aKey,aBlock){
var aValue = nil;
const self = this; var $early={name:"stReturn"};
try {
aValue=self.at_ifAbsent_(aKey,(function KeyedCollection__(){
$early.result=nil; throw ($early);
}
));
return aBlock.value_(aValue);
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "accessing", unescape("at%3A%20aKey%20ifPresent%3A%20aBlock%0D%09%22%20Return%20the%20result%20of%20evaluating%20aBlock%20if%20there%20is%20a%20value%20at%20aKey%20%28or%20nil%29.%20%22%0D%0D%09%7C%20aValue%20%7C%0D%09aValue%20%3A%3D%20self%20at%3A%20aKey%20ifAbsent%3A%20%5B%20%5Enil%20%5D.%0D%09%5EaBlock%20value%3A%20aValue"));
smalltalk.bind(smalltalk.KeyedCollection, unescape("at%3AifPresent%3AifAbsent%3A"), "at_ifPresent_ifAbsent_", function KeyedCollection__at_ifPresent_ifAbsent_(aKey,aBlock,anotherBlock){
var aValue = nil;
const self = this; var $early={name:"stReturn"};
try {
aValue=self.at_ifAbsent_(aKey,(function KeyedCollection__(){
$early.result=anotherBlock.value(); throw ($early);
}
));
return aBlock.value_(aValue);
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "accessing", unescape("at%3A%20aKey%20ifPresent%3A%20aBlock%20ifAbsent%3A%20anotherBlock%0D%09%22%20Return%20the%20result%20of%20evaluating%20aBlock%20if%20there%20is%20a%20value%20at%20aKey%20%28or%20the%20result%20of%20evaluating%20anotherBlock%29.%20%22%0D%0D%09%7C%20aValue%20%7C%0D%09aValue%20%3A%3D%20self%20at%3A%20aKey%20ifAbsent%3A%20%5B%20%5EanotherBlock%20value%20%5D.%0D%09%5EaBlock%20value%3A%20aValue"));
smalltalk.bind(smalltalk.KeyedCollection, unescape("collect%3A"), "collect_", function KeyedCollection__collect_(aBlock){
var result = nil;
const self = this; result=(self.$klass).$$new();
self.keysAndValuesDo_((function KeyedCollection__(key,value){
return result.at_put_(key,(aBlock.value_(value)));
}
));
return result;
}
, "enumerating", unescape("collect%3A%20aBlock%0D%09%22%20Return%20aKeyedCollection%20with%20keys%20and%20result%20of%20evaluating%20aBlock%20with%20value.%20%22%0D%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%20self%20class%20new.%0D%09self%20keysAndValuesDo%3A%20%5B%3Akey%20%3Avalue%20%7C%0D%09%09result%20at%3A%20key%20put%3A%20%28aBlock%20value%3A%20value%29%0D%09%5D.%0D%09%5Eresult"));
smalltalk.bind(smalltalk.KeyedCollection, unescape("select%3A"), "select_", function KeyedCollection__select_(aBlock){
var result = nil;
const self = this; result=(self.$klass).$$new();
self.keysAndValuesDo_((function KeyedCollection__(key,value){
if ((aBlock.value_(value)).valueOf()) {return result.at_put_(key,value)} else {return nil};
}
));
return result;
}
, "enumerating", unescape("select%3A%20aBlock%0D%09%22%20Return%20the%20contents%20of%20the%20receiver%20wich%20evaluates%20aBlock%20to%20true.%20%22%0D%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%20self%20class%20new.%0D%09self%20keysAndValuesDo%3A%20%5B%3Akey%20%3Avalue%20%7C%0D%09%09%28aBlock%20value%3A%20value%29%20ifTrue%3A%20%5B%20result%20at%3A%20key%20put%3A%20value%20%5D%0D%09%5D.%0D%09%5Eresult"));
smalltalk.bind(smalltalk.KeyedCollection, unescape("shallowCopy"), "shallowCopy", function KeyedCollection__shallowCopy(){
var result = nil;
const self = this; result=(self.$klass).$$new();
self.keysAndValuesDo_((function KeyedCollection__(key,value){
return result.at_put_(key,value);
}
));
return result;
}
, "copying", unescape("shallowCopy%0D%09%22%20Return%20a%20shallow%20copy%20of%20the%20receiver.%20%22%0D%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%20self%20class%20new.%0D%09self%20keysAndValuesDo%3A%20%5B%3Akey%20%3Avalue%20%7C%20result%20at%3A%20key%20put%3A%20value%20%5D.%0D%09%5Eresult"));
smalltalk.bind(smalltalk.KeyedCollection, unescape("tuples"), "tuples", function KeyedCollection__tuples(){
var result = nil;
const self = this; result=smalltalk.Array.$$new();
self.keysAndValuesDo_((function KeyedCollection__(key,value){
return result.add_((smalltalk.Array.with_with_(key,value)));
}
));
return result;
}
, "accessing", unescape("tuples%0D%09%22%20Return%20an%20array%20of%20tuples%20built%20from%20the%20receiver%27s%20contents.%20%22%0D%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%20Array%20new.%0D%09self%20keysAndValuesDo%3A%20%5B%3Akey%20%3Avalue%7C%0D%09%09result%20add%3A%20%28Array%20with%3A%20key%20with%3A%20value%29%0D%09%5D.%0D%09%5Eresult"));
smalltalk.bind(smalltalk.KeyedCollection, unescape("copyFrom%3Ato%3A"), "copyFrom_to_", function KeyedCollection__copyFrom_to_(anIndex,anotherIndex){
const self = this; return self.shouldNotImplement_("copyFrom:to:");
}
, "copying", unescape("copyFrom%3A%20anIndex%20to%3A%20anotherIndex%0D%09%22%20Return%20a%20copy%20of%20the%20receiver%20from%20anIndex%20to%20anotherIndex.%20%22%0D%0D%09%5Eself%20shouldNotImplement%3A%20%23copyFrom%3Ato%3A"));
smalltalk.bind(smalltalk.KeyedCollection, unescape("deepCopy"), "deepCopy", function KeyedCollection__deepCopy(){
var result = nil;
const self = this; result=(self.$klass).$$new();
self.keysAndValuesDo_((function KeyedCollection__(key,value){
return result.at_put_(key,(value.deepCopy()));
}
));
return result;
}
, "copying", unescape("deepCopy%0D%09%22%20Return%20a%20deep%20copy%20of%20the%20receiver.%20%22%0D%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%20self%20class%20new.%0D%09self%20keysAndValuesDo%3A%20%5B%3Akey%20%3Avalue%20%7C%0D%09%09result%20at%3A%20key%20put%3A%20value%20deepCopy%0D%09%5D.%0D%09%5Eresult"));
smalltalk.bind(smalltalk.KeyedCollection, unescape("remove%3A"), "remove_", function KeyedCollection__remove_(aKey){
const self = this; self.removeKey_(aKey);
return self;
}
, "removing", unescape("remove%3A%20aKey%0D%09%22%20Remove%20the%20binding%20at%20aKey.%20%22%0D%0D%09self%20removeKey%3A%20aKey"));
smalltalk.bind(smalltalk.KeyedCollection, unescape("removeKey%3A"), "removeKey_", function KeyedCollection__removeKey_(aKey){
const self = this; return self.removeKey_ifAbsent_(aKey,(function KeyedCollection__(){
return self.objectNotFoundAt_(aKey);
}
));
}
, "removing", unescape("removeKey%3A%20aKey%0D%09%22%20Remove%20the%20binding%20at%20aKey.%0D%09Signal%20an%20error%20if%20the%20key%20is%20not%20present.%0D%09%22%0D%0D%09%5Eself%20removeKey%3A%20aKey%20ifAbsent%3A%20%5B%20self%20objectNotFoundAt%3A%20aKey%20%5D"));
smalltalk.bind(smalltalk.KeyedCollection, unescape("isDictionary"), "isDictionary", function KeyedCollection__isDictionary(){
const self = this; return true;
}
, "query", unescape("isDictionary%0D%09%22%20Returns%20true%20if%20the%20receiver%20is%20a%20dictionary.%20%22%0D%0D%09%5Etrue"));
