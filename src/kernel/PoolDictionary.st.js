smalltalk.bind(smalltalk.PoolDictionary, unescape("initialize"), "initialize", function PoolDictionary__initialize(){
const self = this; smalltalk.superImplementor(smalltalk.PoolDictionary,'initialize').apply(self, []);
self.initializeHash();
return self;
}
, "initialize", unescape("initialize%0D%09%22%20Private%20-%20Initialize%20the%20receiver.%20%22%0D%0D%09super%20initialize.%0D%09self%20initializeHash.%20"));
smalltalk.bind(smalltalk.PoolDictionary, unescape("initializeHash"), "initializeHash", function PoolDictionary__initializeHash(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKPoolDictionary.primInitializeHash(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "initialization", unescape("initializeHash%0D%0D%09%3Cprimitive%3A%20%27primInitializeHash%27%20module%3A%20%27SKPoolDictionary%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.PoolDictionary, unescape("at%3Aput%3A"), "at_put_", function PoolDictionary__at_put_(aKey,value){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKPoolDictionary.primAtPut(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "accessing", unescape("at%3A%20aKey%20put%3A%20value%0D%09%22%20Set%20the%20value%20at%20aKey%20of%20the%20receiver.%20%22%0D%0D%09%3Cprimitive%3A%20%27primAtPut%27%20module%3A%20%27SKPoolDictionary%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.PoolDictionary, unescape("removeKey%3AifAbsent%3A"), "removeKey_ifAbsent_", function PoolDictionary__removeKey_ifAbsent_(aKey,aBlock){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKPoolDictionary.primRemoveKeyIfAbsent(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "removing", unescape("removeKey%3A%20aKey%20ifAbsent%3A%20aBlock%0D%09%22%20Remove%20the%20binding%20at%20aKey.%20%22%0D%0D%09%3Cprimitive%3A%20%27primRemoveKeyIfAbsent%27%20module%3A%20%27SKPoolDictionary%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.PoolDictionary, unescape("size"), "size", function PoolDictionary__size(){
const self = this; if (((nil.isNil_(self['@size']))).valueOf()) {self['@size']=(self.keys()).size()};
return self['@size'];
}
, "accessing", unescape("size%0D%09%22%20Return%20the%20size%20of%20the%20receiver.%20%22%0D%0D%09size%20isNil%20ifTrue%3A%20%5B%20size%20%3A%3D%20self%20keys%20size%20%5D.%0D%09%5Esize"));
smalltalk.bind(smalltalk.PoolDictionary, unescape("at%3AifAbsent%3A"), "at_ifAbsent_", function PoolDictionary__at_ifAbsent_(aKey,aBlock){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKPoolDictionary.primAtIfAbsent(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "accessing", unescape("at%3A%20aKey%20ifAbsent%3A%20aBlock%0D%09%22%20Return%20the%20value%20at%20aKey%20or%20the%20result%20of%20evaluating%20aBlock.%20%22%0D%0D%09%3Cprimitive%3A%27primAtIfAbsent%27%20module%3A%27SKPoolDictionary%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.PoolDictionary, unescape("includesKey%3A"), "includesKey_", function PoolDictionary__includesKey_(aKey){
const self = this; var $early={name:"stReturn"};
try {
self.at_ifAbsent_(aKey,(function PoolDictionary__(){
$early.result=false; throw ($early);
}
));
return true;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "testing", unescape("includesKey%3A%20aKey%0D%09%22%20Return%20true%20if%20the%20receiver%27s%20keys%20include%20aKey.%20%22%0D%0D%09self%20at%3A%20aKey%20ifAbsent%3A%20%5B%20%5Efalse%20%5D.%0D%09%5Etrue"));
smalltalk.bind(smalltalk.PoolDictionary, unescape("keysAndValuesDo%3A"), "keysAndValuesDo_", function PoolDictionary__keysAndValuesDo_(aBlock){
const self = this; var $early={name:"stReturn"};
try {
(self.keys()).do_((function PoolDictionary__(key){
return aBlock.value_value_(key,(self.at_ifAbsent_(key,(function PoolDictionary__(){
$early.result=self.error_("Key not found in dictionary"); throw ($early);
}
))));
}
));
return self;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "enumerating", unescape("keysAndValuesDo%3A%20aBlock%0D%09%22%20Evaluate%20aBlock%20for%20key/value%20pairs%20of%20the%20receiver.%20%22%0D%0D%09self%20keys%20do%3A%20%5B%3Akey%20%7C%20aBlock%20value%3A%20key%20value%3A%20%28self%20at%3A%20key%20ifAbsent%3A%20%5B%5Eself%20error%3A%20%27Key%20not%20found%20in%20dictionary%27%5D%29%20%5D"));
smalltalk.bind(smalltalk.PoolDictionary, unescape("keys"), "keys", function PoolDictionary__keys(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKPoolDictionary.primKeys(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "accessing", unescape("keys%0D%09%22%20Return%20the%20keys%20of%20the%20receiver.%20%22%0D%0D%09%3Cprimitive%3A%27primKeys%27%20module%3A%20%27SKPoolDictionary%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.PoolDictionary, unescape("values"), "values", function PoolDictionary__values(){
const self = this; var $early={name:"stReturn"};
try {
return (self.keys()).collect_((function PoolDictionary__(key){
return self.at_ifAbsent_(key,(function PoolDictionary__(){
$early.result=self.error_("Key not found in dictionary"); throw ($early);
}
));
}
));
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "accessing", unescape("values%0D%09%22%20Return%20the%20values%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20keys%20collect%3A%20%5B%3Akey%7C%20self%20at%3A%20key%20ifAbsent%3A%20%5B%5Eself%20error%3A%20%27Key%20not%20found%20in%20dictionary%27%5D%20%5D"));
smalltalk.bind(smalltalk.PoolDictionary, unescape("asJavascript"), "asJavascript", function PoolDictionary__asJavascript(){
const self = this; return ((("smalltalk."._comma(((self.$klass).name())))._comma(unescape(".fromTuples_%28")))._comma(((self.tuples()).asJavascript())))._comma(unescape("%29"));
}
, "converting", unescape("asJavascript%0D%09%22%20Return%20the%20javascript%20representation%20of%20the%20receiver.%20%22%0D%0D%09%5E%27smalltalk.%27%2Cself%20class%20name%0D%09%09%2C%27.fromTuples_%28%27%20%2Cself%20tuples%20asJavascript%20%2C%27%29%27"));
smalltalk.bind(smalltalk.PoolDictionary, unescape("detect%3AifNone%3A"), "detect_ifNone_", function PoolDictionary__detect_ifNone_(aBlock,anotherBlock){
const self = this; var $early={name:"stReturn"};
try {
self.keysAndValuesDo_((function PoolDictionary__(key,value){
if ((aBlock.value_(value)).valueOf()) {$early.result=value; throw ($early)} else {return nil};
}
));
return anotherBlock.value();
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "enumerating", unescape("detect%3A%20aBlock%20ifNone%3A%20anotherBlock%0D%09%22%20Detect%20the%20value%20who%20matches%20aBlock.%0D%09Return%20the%20result%20of%20evaluating%20aBlock%20if%20no%20value%20matches%20detection%20block.%0D%09%22%0D%0D%09self%20keysAndValuesDo%3A%20%5B%3Akey%20%3Avalue%20%7C%0D%09%09%28aBlock%20value%3A%20value%29%20ifTrue%3A%20%5B%20%5Evalue%20%5D%0D%09%5D.%0D%09%5EanotherBlock%20value"));
smalltalk.bind(smalltalk.PoolDictionary, unescape("do%3A"), "do_", function PoolDictionary__do_(aBlock){
const self = this; self.keysAndValuesDo_((function PoolDictionary__(key,value){
return aBlock.value_(value);
}
));
return self;
}
, "enumerating", unescape("do%3A%20aBlock%0D%09%22%20Evaluates%20aBlock%20for%20all%20values%20in%20the%20receiver.%20%22%0D%0D%09self%20keysAndValuesDo%3A%20%5B%3Akey%20%3Avalue%20%7C%20aBlock%20value%3A%20value%20%5D"));
smalltalk.bind(smalltalk.PoolDictionary, unescape("includes%3A"), "includes_", function PoolDictionary__includes_(anObject){
const self = this; var $early={name:"stReturn"};
try {
self.keysAndValuesDo_((function PoolDictionary__(key,value){
if ((anObject._eq(value)).valueOf()) {$early.result=true; throw ($early)} else {return nil};
}
));
return false;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "testing", unescape("includes%3A%20anObject%0D%09%22%20Return%20true%20if%20the%20receiver%27s%20values%20include%20anObject.%20%22%0D%0D%09self%20keysAndValuesDo%3A%20%5B%3Akey%20%3Avalue%20%7C%0D%09%09anObject%20%3D%20value%20ifTrue%3A%20%5B%20%5Etrue%20%5D.%0D%09%5D.%0D%09%5Efalse"));
smalltalk.bind(smalltalk.PoolDictionary, unescape("keysDo%3A"), "keysDo_", function PoolDictionary__keysDo_(aBlock){
const self = this; (self.keys()).do_(aBlock);
return self;
}
, "enumerating", unescape("keysDo%3A%20aBlock%0D%09%22%20Evaluate%20aBlock%20with%20the%20keys%20of%20the%20receiver.%20%22%0D%0D%09self%20keys%20do%3A%20aBlock"));
