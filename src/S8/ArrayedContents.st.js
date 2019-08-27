smalltalk.addClass("ArrayedContents", smalltalk.SequenceableCollection, ['contents'], 'Kernel');
smalltalk.ArrayedContents.$classVariableNames=("");
smalltalk.bind(smalltalk.ArrayedContents, unescape("contents"), "contents", function ArrayedContents__contents(){
const self = this; if (((nil.isNil_(self['@contents']))).valueOf()) {self['@contents']=smalltalk.Array.$$new()};
return self['@contents'];
}
, "private", unescape("contents%0D%09%22%20Private%20-%20Return%20the%20contents%20of%20the%20receiver.%20%22%0D%0D%09contents%20isNil%20ifTrue%3A%20%5B%20contents%20%3A%3D%20Array%20new%20%5D.%0D%09%5Econtents"));
smalltalk.bind(smalltalk.ArrayedContents, unescape("add%3A"), "add_", function ArrayedContents__add_(anObject){
const self = this; return (self.contents()).add_(anObject);
}
, "adding", unescape("add%3A%20anObject%0D%09%22%20Add%20anObject%20to%20the%20receiver.%20%22%0D%0D%09%5Eself%20contents%20add%3A%20anObject"));
smalltalk.bind(smalltalk.ArrayedContents, unescape("at%3AifAbsent%3A"), "at_ifAbsent_", function ArrayedContents__at_ifAbsent_(anIndex,aBlock){
const self = this; return (self.contents()).at_ifAbsent_(anIndex,aBlock);
}
, "accessing", unescape("at%3A%20anIndex%20ifAbsent%3A%20aBlock%0D%09%22%20Return%20the%20contents%20of%20the%20receiver%20at%20anIndex%20or%20the%20result%20of%20evaluating%20aBlock.%20%22%0D%0D%09%5Eself%20contents%20at%3A%20anIndex%20ifAbsent%3A%20aBlock"));
smalltalk.bind(smalltalk.ArrayedContents, unescape("at%3Aput%3A"), "at_put_", function ArrayedContents__at_put_(anIndex,anObject){
const self = this; return (self.contents()).at_put_(anIndex,anObject);
}
, "accessing", unescape("at%3A%20anIndex%20put%3A%20anObject%0D%09%22%20Set%20the%20contents%20of%20the%20receiver%20at%20anIndex.%20%22%0D%0D%09%5Eself%20contents%20at%3A%20anIndex%20put%3A%20anObject"));
smalltalk.bind(smalltalk.ArrayedContents, unescape("atAllPut%3A"), "atAllPut_", function ArrayedContents__atAllPut_(anObject){
const self = this; return (self.contents()).atAllPut_(anObject);
}
, "accessing", unescape("atAllPut%3A%20anObject%0D%09%22%20Replace%20all%20elements%20of%20the%20receiver%20with%20anObject.%20%22%0D%0D%09%5Eself%20contents%20atAllPut%3A%20anObject"));
smalltalk.bind(smalltalk.ArrayedContents, unescape("copyFrom%3Ato%3A"), "copyFrom_to_", function ArrayedContents__copyFrom_to_(anIndex,anotherIndex){
var result = nil;
const self = this; result=(self.$klass).$$new();
anIndex.to_do_(anotherIndex,(function ArrayedContents__(each){
return result.add_((self.at_(each)));
}
));
return result;
}
, "copying", unescape("copyFrom%3A%20anIndex%20to%3A%20anotherIndex%0D%09%22%20Return%20the%20receiver%20contents%20in%20the%20interval.%20%22%0D%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%20self%20class%20new.%0D%09anIndex%20to%3A%20anotherIndex%20do%3A%20%5B%3Aeach%20%7C%20result%20add%3A%20%28self%20at%3A%20each%29%20%5D.%0D%09%5Eresult"));
smalltalk.bind(smalltalk.ArrayedContents, unescape("indexOf%3AifAbsent%3A"), "indexOf_ifAbsent_", function ArrayedContents__indexOf_ifAbsent_(anObject,aBlock){
const self = this; return (self.contents()).indexOf_ifAbsent_(anObject,aBlock);
}
, "testing", unescape("indexOf%3A%20anObject%20ifAbsent%3A%20aBlock%0D%09%22%20Return%20the%20position%20of%20anObject%20in%20the%20receiver%2C%20or%20the%20result%20of%20evaluating%20aBlock.%20%22%0D%0D%09%5Eself%20contents%20indexOf%3A%20anObject%20ifAbsent%3A%20aBlock"));
smalltalk.bind(smalltalk.ArrayedContents, unescape("detect%3AifNone%3A"), "detect_ifNone_", function ArrayedContents__detect_ifNone_(aBlock,anotherBlock){
const self = this; return (self.contents()).detect_ifNone_(aBlock,anotherBlock);
}
, "enumerating", unescape("detect%3A%20aBlock%20ifNone%3A%20anotherBlock%0D%09%22%20Return%20the%20object%20in%20the%20receiver%20that%20return%20true%20when%20evaluated%20with%20aBlock%20or%20the%20result%20of%20evaluating%20anotherBlock.%20%22%0D%0D%09%5Eself%20contents%20detect%3A%20aBlock%20ifNone%3A%20anotherBlock"));
smalltalk.bind(smalltalk.ArrayedContents, unescape("do%3A"), "do_", function ArrayedContents__do_(aBlock){
const self = this; return (self.contents()).do_(aBlock);
}
, "enumerating", unescape("do%3A%20aBlock%0D%09%22%20Evaluate%20aBlock%20with%20the%20contents%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20contents%20do%3A%20aBlock"));
smalltalk.bind(smalltalk.ArrayedContents, unescape("includes%3A"), "includes_", function ArrayedContents__includes_(anObject){
const self = this; return (self.contents()).includes_(anObject);
}
, "testing", unescape("includes%3A%20anObject%0D%09%22%20Return%20true%20if%20anObject%20is%20in%20receiver%27s%20contents.%20%22%0D%0D%09%5Eself%20contents%20includes%3A%20anObject"));
smalltalk.bind(smalltalk.ArrayedContents, unescape("isEmpty"), "isEmpty", function ArrayedContents__isEmpty(){
const self = this; return (self.contents()).isEmpty();
}
, "testing", unescape("isEmpty%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20empty.%20%22%0D%0D%09%5Eself%20contents%20isEmpty"));
smalltalk.bind(smalltalk.ArrayedContents, unescape("occurrencesOf%3A"), "occurrencesOf_", function ArrayedContents__occurrencesOf_(anObject){
const self = this; return (self.contents()).occurrencesOf_(anObject);
}
, "counting", unescape("occurrencesOf%3A%20anObject%0D%09%22%20Return%20the%20occurrences%20of%20anObject%20in%20the%20receiver.%20%22%0D%0D%09%5Eself%20contents%20occurrencesOf%3A%20anObject"));
smalltalk.bind(smalltalk.ArrayedContents, unescape("reverseDo%3A"), "reverseDo_", function ArrayedContents__reverseDo_(aBlock){
const self = this; return (self.contents()).reverseDo_(aBlock);
}
, "enumerating", unescape("reverseDo%3A%20aBlock%0D%09%22%20Evaluate%20aBlock%20with%20the%20contents%20of%20the%20receiver%20in%20reverse%20order%20of%20iteration.%20%22%0D%0D%09%5Eself%20contents%20reverseDo%3A%20aBlock"));
smalltalk.bind(smalltalk.ArrayedContents, unescape("reversed"), "reversed", function ArrayedContents__reversed(){
const self = this; return (self.$klass).withAll_(((self.contents()).reversed()));
}
, "copying", unescape("reversed%0D%09%22%20Return%20an%20array%20with%20the%20contents%20of%20the%20receiver%20in%20reverse%20order.%20%22%0D%0D%09%5Eself%20class%20withAll%3A%20self%20contents%20reversed"));
smalltalk.bind(smalltalk.ArrayedContents, unescape("detect%3AifNone%3A"), "detect_ifNone_", function ArrayedContents__detect_ifNone_(aBlock,anotherBlock){
const self = this; return (self.contents()).detect_ifNone_(aBlock,anotherBlock);
}
, "enumerating", unescape("detect%3A%20aBlock%20ifNone%3A%20anotherBlock%0D%09%22%20Return%20the%20object%20in%20the%20receiver%20that%20return%20true%20when%20evaluated%20with%20aBlock%20or%20the%20result%20of%20evaluating%20anotherBlock.%20%22%0D%0D%09%5Eself%20contents%20detect%3A%20aBlock%20ifNone%3A%20anotherBlock"));
smalltalk.bind(smalltalk.ArrayedContents, unescape("remove%3AifAbsent%3A"), "remove_ifAbsent_", function ArrayedContents__remove_ifAbsent_(anObject,aBlock){
const self = this; return (self.contents()).remove_ifAbsent_(anObject,aBlock);
}
, "removing", unescape("remove%3A%20anObject%20ifAbsent%3A%20aBlock%0D%09%22%20Remove%20anObject%20from%20the%20receiver.%0D%09Return%20the%20result%20of%20evaluating%20aBlock%20if%20anObject%20is%20not%20in%20the%20receiver.%0D%09%22%0D%0D%09%5Eself%20contents%20remove%3A%20anObject%20ifAbsent%3A%20aBlock"));
smalltalk.bind(smalltalk.ArrayedContents, unescape("removeAll"), "removeAll", function ArrayedContents__removeAll(){
const self = this; self['@contents']=nil;
return self;
}
, "removing", unescape("removeAll%0D%09%22%20Remove%20all%20the%20objects%20in%20the%20receiver.%20%22%0D%0D%09contents%20%3A%3D%20nil"));
smalltalk.bind(smalltalk.ArrayedContents, unescape("removeFirst"), "removeFirst", function ArrayedContents__removeFirst(){
const self = this; return (self.contents()).removeFirst();
}
, "removing", unescape("removeFirst%0D%09%22%20Remove%20the%20first%20object%20in%20the%20receiver.%20%22%0D%0D%09%5Eself%20contents%20removeFirst"));
smalltalk.bind(smalltalk.ArrayedContents, unescape("removeLast"), "removeLast", function ArrayedContents__removeLast(){
const self = this; return (self.contents()).removeLast();
}
, "removing", unescape("removeLast%0D%09%22%20Remove%20the%20last%20object%20in%20the%20receiver.%20%22%0D%0D%09%5Eself%20contents%20removeLast"));
smalltalk.bind(smalltalk.ArrayedContents, unescape("removeIndex%3A"), "removeIndex_", function ArrayedContents__removeIndex_(index){
const self = this; return (self.contents()).removeIndex_(index);
}
, "removing", unescape("removeIndex%3A%20index%0D%09%22%20Remove%20the%20element%20at%20index.%20%22%0D%0D%09%5Eself%20contents%20removeIndex%3A%20index"));
smalltalk.bind(smalltalk.ArrayedContents, unescape("size"), "size", function ArrayedContents__size(){
const self = this; return (self.contents()).size();
}
, "accesing", unescape("size%0D%09%22%20Return%20the%20size%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20contents%20size"));
smalltalk.bind(smalltalk.ArrayedContents, unescape("withIndexDo%3A"), "withIndexDo_", function ArrayedContents__withIndexDo_(aBlock){
const self = this; return (self.contents()).withIndexDo_(aBlock);
}
, "enumerating", unescape("withIndexDo%3A%20aBlock%0D%09%22%20Evaluate%20aBlock%20with%20all%20the%20index%20positions%20in%20the%20receiver.%20%22%0D%0D%09%5Eself%20contents%20withIndexDo%3A%20aBlock"));
