smalltalk.bind(smalltalk.Collection, unescape("anySatisfy%3A"), "anySatisfy_", function Collection__anySatisfy_(aBlock){
const self = this; var $early={name:"stReturn"};
try {
self.do_((function Collection__(each){
if ((aBlock.value_(each)).valueOf()) {$early.result=true; throw ($early)} else {return nil};
}
));
return false;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "enumerating", unescape("anySatisfy%3A%20aBlock%0D%0D%09self%0D%09%09do%3A%0D%09%09%09%5B%3Aeach%20%7C%0D%09%09%09%28aBlock%20value%3A%20each%29%0D%09%09%09%09ifTrue%3A%20%5B%5Etrue%5D%5D.%0D%09%5Efalse"));
smalltalk.addClass("ByteArray", smalltalk.SequenceableCollection, [], 'ByteArray');
smalltalk.ByteArray.$classVariableNames=("");
smalltalk.bind(smalltalk.ByteArray.$klass, unescape("new"), "$$new", function ByteArray_class__$$new(){
const self = this; return self.new_((0));
}
, "instance creation", unescape("new%0D%0D%09%5Eself%20new%3A%200"));
smalltalk.bind(smalltalk.ByteArray.$klass, unescape("new%3A"), "new_", function ByteArray_class__new_(aByteCount){
const self = this; return (function ByteArray_class__($1$){
$1$.initialize_(aByteCount);
return $1$.yourself()}
)(self.basicNew());
}
, "instance creation", unescape("new%3A%20aByteCount%0D%0D%09%5Eself%20basicNew%0D%09%09initialize%3A%20aByteCount%3B%0D%09%09yourself"));
smalltalk.bind(smalltalk.ByteArray, unescape("initializeStorage%3A"), "initializeStorage_", function ByteArray__initializeStorage_(aByteCount){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKByteArray.primInitializeStorage(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; self.primitiveFailed();
return self;
}
, "initializing", unescape("initializeStorage%3A%20aByteCount%0D%0D%09%3Cprimitive%3A%20%27primInitializeStorage%27%20module%3A%20%27SKByteArray%27%3E%0D%09self%20primitiveFailed"));
smalltalk.bind(smalltalk.ByteArray, unescape("initialize%3A"), "initialize_", function ByteArray__initialize_(aByteCount){
const self = this; (function ByteArray__($1$){
$1$.initialize();
return $1$.initializeStorage_(aByteCount)}
)(self);
return self;
}
, "initializing", unescape("initialize%3A%20aByteCount%0D%0D%09self%0D%09%09initialize%3B%0D%09%09initializeStorage%3A%20aByteCount"));
smalltalk.bind(smalltalk.ByteArray, unescape("size"), "size", function ByteArray__size(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKByteArray.primSize(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; self.primitiveFailed();
return self;
}
, "", unescape("size%0D%09%22return%20size%20of%20ByteArray%22%0D%0D%09%3Cprimitive%3A%20%27primSize%27%20module%3A%20%27SKByteArray%27%3E%0D%09self%20primitiveFailed"));
smalltalk.bind(smalltalk.ByteArray, unescape("add%3A"), "add_", function ByteArray__add_(anObject){
const self = this; return self.invalidMessage();
}
, "", unescape("add%3A%20anObject%20%0D%09%22Add%20anObject%20to%20the%20receiver.%09This%20method%20reports%0D%09%09%20an%20error%20since%20fixed%20size%20collections%20cannot%20grow.%22%0D%0D%20%20%20%20%5Eself%20invalidMessage"));
smalltalk.bind(smalltalk.ByteArray, unescape("do%3A"), "do_", function ByteArray__do_(aBlock){
const self = this; (1).to_do_((self.size()),(function ByteArray__(i){
return aBlock.value_((self.at_(i)));
}
));
return self;
}
, "", unescape("do%3A%20aBlock%0D%09%22%20Evaluate%20aBlock%20with%20the%20contents%20of%20the%20receiver.%20%22%0D%0D%091%0D%09%09to%3A%20self%20size%0D%09%09do%3A%20%5B%3Ai%20%7C%20aBlock%20value%3A%20%28self%20at%3A%20i%29%5D"));
smalltalk.bind(smalltalk.ByteArray, unescape("detect%3AifNone%3A"), "detect_ifNone_", function ByteArray__detect_ifNone_(aBlock,anotherBlock){
const self = this; var $early={name:"stReturn"};
try {
self.do_((function ByteArray__(each){
if ((aBlock.value_(each)).valueOf()) {$early.result=each; throw ($early)} else {return nil};
}
));
return anotherBlock.value();
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "", unescape("detect%3A%20aBlock%20ifNone%3A%20anotherBlock%0D%09%22%20Return%20the%20object%20in%20the%20receiver%20that%20return%20true%20when%20evaluated%20with%20aBlock%20or%20the%20result%20of%20evaluating%20anotherBlock.%20%22%0D%0D%09self%0D%09%09do%3A%0D%09%09%09%5B%3Aeach%20%7C%0D%09%09%09%28aBlock%20value%3A%20each%29%0D%09%09%09%09ifTrue%3A%20%5B%5Eeach%5D%5D.%0D%09%5EanotherBlock%20value"));
smalltalk.bind(smalltalk.ByteArray, unescape("includes%3A"), "includes_", function ByteArray__includes_(anObject){
const self = this; return self.anySatisfy_((function ByteArray__(each){
return each._eq(anObject);
}
));
}
, "", unescape("includes%3A%20anObject%0D%09%22%20Return%20true%20if%20anObject%20is%20in%20the%20receiver.%22%0D%0D%09%5Eself%20anySatisfy%3A%20%5B%3Aeach%20%7C%20each%20%3D%20anObject%5D"));
smalltalk.bind(smalltalk.ByteArray, unescape("isEmpty"), "isEmpty", function ByteArray__isEmpty(){
const self = this; return (self.size())._eq((0));
}
, "", unescape("isEmpty%0D%0D%09%5Eself%20size%20%3D%200"));
smalltalk.bind(smalltalk.ByteArray, unescape("occurrencesOf%3A"), "occurrencesOf_", function ByteArray__occurrencesOf_(anObject){
const self = this; return self.inject_into_((0),(function ByteArray__(count,each){
if ((each._eq(anObject)).valueOf()) {return count._plus((1))} else {return count};
}
));
}
, "", unescape("occurrencesOf%3A%20anObject%0D%09%22%20Return%20the%20occurrences%20of%20anObject%20in%20the%20receiver.%20%22%0D%0D%09%5Eself%0D%09%09inject%3A%200%0D%09%09into%3A%0D%09%09%09%5B%3Acount%20%3Aeach%20%7C%0D%09%09%09%28each%20%3D%20anObject%29%0D%09%09%09%09ifTrue%3A%20%5Bcount%20+%201%5D%0D%09%09%09%09ifFalse%3A%20%5Bcount%5D%5D"));
smalltalk.bind(smalltalk.ByteArray, unescape("reverseDo%3A"), "reverseDo_", function ByteArray__reverseDo_(aBlock){
var i = nil;
const self = this; i=self.size();
while((i._gt((0))).valueOf()){aBlock.value_((self.at_(i)));
i=i._minus((1))};;
return self;
}
, "", unescape("reverseDo%3A%20aBlock%0D%20%20%20%20%22%20Evaluate%20aBlock%20with%20the%20contents%20of%20the%20receiver%20in%20reverse%20order%20of%20iteration.%20%22%0D%0D%09%7C%20i%20%7C%0D%09i%20%3A%3D%20self%20size.%0D%09%5Bi%20%3E%200%5D%0D%09%09whileTrue%3A%0D%09%09%09%5BaBlock%20value%3A%20%28self%20at%3A%20i%29.%0D%09%09%09i%20%3A%3D%20i%20-%201%5D"));
smalltalk.bind(smalltalk.ByteArray, unescape("copy"), "copy", function ByteArray__copy(){
const self = this; return self.deepCopy();
}
, "", unescape("copy%0D%09%22make%20a%20shallowcopy%20of%20the%20receiver%22%0D%0D%20%20%20%20%5Eself%20deepCopy"));
smalltalk.bind(smalltalk.ByteArray, unescape("deepCopy"), "deepCopy", function ByteArray__deepCopy(){
const self = this; return self.copyFrom_to_((1),(self.size()));
}
, "", unescape("deepCopy%0D%09%22make%20a%20deep%20copy%22%0D%0D%09%5Eself%0D%09%09copyFrom%3A%201%0D%09%09to%3A%20self%20size"));
smalltalk.bind(smalltalk.ByteArray, unescape("printOn%3A"), "printOn_", function ByteArray__printOn_(aStream){
const self = this; (function ByteArray__($1$){
$1$.nextPutAll_(((self.$klass).name()));
return $1$.nextPut_(unescape("%28"))}
)(aStream);
self.do_separatedBy_((function ByteArray__(each){
return each.printOn_base_showRadix_(aStream,(10),false);
}
),(function ByteArray__(){
return aStream.space();
}
));
aStream.nextPut_(unescape("%29"));
return self;
}
, "", unescape("printOn%3A%20aStream%20%0D%09%22print%20in%20hex%22%0D%09%0D%20%20%20%20aStream%0D%20%20%20%20%20%20%20%20nextPutAll%3A%20self%20class%20name%3B%0D%20%20%20%20%20%20%20%20nextPut%3A%20%24%28.%0D%20%20%20%20self%20do%3A%20%5B%3Aeach%20%7C%0D%20%20%20%20%20%20%20%20each%20printOn%3A%20aStream%20base%3A%2010%20showRadix%3A%20false%5D%20separatedBy%3A%20%5BaStream%20space%5D.%0D%20%20%20%20aStream%20nextPut%3A%20%24%29"));
smalltalk.bind(smalltalk.ByteArray, unescape("indexOf%3AifAbsent%3A"), "indexOf_ifAbsent_", function ByteArray__indexOf_ifAbsent_(anObject,aBlock){
const self = this; var $early={name:"stReturn"};
try {
self.doWithIndex_((function ByteArray__($$byte,i){
if (($$byte._eq(anObject)).valueOf()) {$early.result=i; throw ($early)} else {return nil};
}
));
return aBlock.value();
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "", unescape("indexOf%3A%20anObject%20ifAbsent%3A%20aBlock%0D%09%22%20Return%20the%20position%20of%20anObject%20in%20the%20receiver%2C%20or%20the%20result%20of%20evaluating%20aBlock.%20%22%0D%0D%09self%0D%09%09doWithIndex%3A%0D%09%09%09%5B%3Abyte%20%3Ai%20%7C%0D%09%09%09%28byte%20%3D%20anObject%29%0D%09%09%09%09ifTrue%3A%20%5B%5Ei%5D%5D.%0D%09%5EaBlock%20value"));
smalltalk.bind(smalltalk.ByteArray, unescape("asByteArray"), "asByteArray", function ByteArray__asByteArray(){
const self = this; return self;
}
, "", unescape("asByteArray%0D%09%22I%20am%20who%20I%20am%22%0D%0D%20%20%20%20%5Eself"));
smalltalk.bind(smalltalk.ByteArray, unescape("at%3A"), "at_", function ByteArray__at_(anIndex){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKByteArray.primAt(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; self.primitiveFailed();
return self;
}
, "", unescape("at%3A%20anIndex%0D%20%20%20%20%22return%20item%20at%20indexed%20zero%20based%20location%22%0D%0D%09%3Cprimitive%3A%20%27primAt%27%20module%3A%20%27SKByteArray%27%3E%0D%09self%20primitiveFailed"));
smalltalk.bind(smalltalk.ByteArray, unescape("at%3Aput%3A"), "at_put_", function ByteArray__at_put_(anIndex,anObject){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKByteArray.primAtPut(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; self.primitiveFailed();
return self;
}
, "", unescape("at%3A%20anIndex%20put%3A%20anObject%20%0D%20%20%20%20%22%20Set%20the%20object%20in%20the%20receiver%20at%20anIndex%20position.%20%22%0D%0D%09%3Cprimitive%3A%20%27primAtPut%27%20module%3A%20%27SKByteArray%27%3E%0D%09self%20primitiveFailed"));
smalltalk.bind(smalltalk.ByteArray, unescape("shallowCopy"), "shallowCopy", function ByteArray__shallowCopy(){
const self = this; return self.deepCopy();
}
, "", unescape("shallowCopy%0D%09%22make%20a%20shallowcopy%20of%20the%20receiver%22%0D%0D%20%20%20%20%5Eself%20deepCopy"));
smalltalk.bind(smalltalk.ByteArray, unescape("copyFrom%3Ato%3A"), "copyFrom_to_", function ByteArray__copyFrom_to_(startIndex,endIndex){
var size = nil;
var copy = nil;
const self = this; size=((endIndex._minus(startIndex))._plus((1))).max_((0));
copy=smalltalk.ByteArray.new_(size);
copy.replaceFrom_to_with_startingAt_((1),size,self,startIndex);
return copy;
}
, "", unescape("copyFrom%3A%20startIndex%20to%3A%20endIndex%0D%09%22%20Return%20a%20copy%20of%20the%20receiver.%20%22%0D%0D%09%7C%20size%20copy%20%7C%0D%09size%20%3A%3D%20%28endIndex%20-%20startIndex%20+%201%29%20max%3A%200.%0D%09copy%20%3A%3D%20ByteArray%20new%3A%20size.%0D%09copy%0D%09%09replaceFrom%3A%201%0D%09%09to%3A%20size%0D%09%09with%3A%20self%0D%09%09startingAt%3A%20startIndex.%0D%09%5Ecopy"));
smalltalk.bind(smalltalk.ByteArray, unescape("reversed"), "reversed", function ByteArray__reversed(){
var size = nil;
var reversed = nil;
const self = this; size=self.size();
reversed=smalltalk.ByteArray.new_(size);
self.doWithIndex_((function ByteArray__($$byte,i){
return reversed.at_put_(((size._minus(i))._plus((1))),$$byte);
}
));
return reversed;
}
, "", unescape("reversed%0D%09%22%20Return%20an%20array%20with%20the%20contents%20of%20the%20receiver%20in%20reverse%20order.%20%22%0D%0D%09%7C%20size%20reversed%20%7C%0D%09size%20%3A%3D%20self%20size.%0D%09reversed%20%3A%3D%20ByteArray%20new%3A%20size.%0D%09self%0D%09%09doWithIndex%3A%0D%09%09%09%5B%3Abyte%20%3Ai%20%7C%0D%09%09%09reversed%20at%3A%20%28size%20-%20i%20+%201%29%20put%3A%20byte%5D.%0D%09%5Ereversed"));
smalltalk.bind(smalltalk.ByteArray, unescape("asString"), "asString", function ByteArray__asString(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKByteArray.primUTF8ToString(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; self.primitiveFailed();
return self;
}
, "", unescape("asString%0D%09%22return%20as%20String%20object%22%0D%0D%09%3Cprimitive%3A%20%27primUTF8ToString%27%20module%3A%20%27SKByteArray%27%3E%0D%09self%20primitiveFailed"));
smalltalk.bind(smalltalk.String, unescape("asByteArray"), "asByteArray", function String__asByteArray(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKByteArray.primAsByteArray(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; self.primitiveFailed();
return self;
}
, "", unescape("asByteArray%0D%09%22Convert%20the%20string%20to%20a%20byte%20Array%22%0D%0D%09%3Cprimitive%3A%20%27primAsByteArray%27%20module%3A%20%27SKByteArray%27%3E%0D%09self%20primitiveFailed"));
smalltalk.bind(smalltalk.String, unescape("asByteArrayWithNoEncoding"), "asByteArrayWithNoEncoding", function String__asByteArrayWithNoEncoding(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKByteArray.primAsByteArrayNoEncoding(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; self.primitiveFailed();
return self;
}
, "", unescape("asByteArrayWithNoEncoding%0D%09%20%22Convert%20the%20string%20to%20a%20byte%20Array%22%0D%0D%09%20%3Cprimitive%3A%20%27primAsByteArrayNoEncoding%27%20module%3A%20%27SKByteArray%27%3E%0D%09%20self%20primitiveFailed"));
smalltalk.bind(smalltalk.ByteArray.$klass, unescape("contents%3A"), "contents_", function ByteArray_class__contents_(aUint8Array){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKByteArray.primFromUint8Array(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "deprecated", unescape("contents%3A%20aUint8Array%0D%09%22This%20method%20is%20deprecated.%20Any%20primitive%20methods%20that%20need%20to%20return%20bytes%0D%09should%20return%20a%20ByteArray%20instance%20instead%20of%20a%20Uint8Array.%22%0D%0D%09%3Cprimitive%3A%20%27primFromUint8Array%27%20module%3A%20%27SKByteArray%27%3E%0D%09%5Eself%20primitiveFailed"));
smalltalk.bind(smalltalk.ByteArray, unescape("contents"), "contents", function ByteArray__contents(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKByteArray.primContents(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "deprecated", unescape("contents%0D%0D%09%3Cprimitive%3A%20%27primContents%27%20module%3A%20%27SKByteArray%27%3E%0D%09%5Eself%20primitiveFailed"));
