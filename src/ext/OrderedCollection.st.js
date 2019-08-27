smalltalk.addClass("OrderedCollection", smalltalk.SequenceableCollection, ['contents'], 'nil');
smalltalk.OrderedCollection.$classVariableNames=("");
smalltalk.OrderedCollection.$klass.$iVarNames = [];
smalltalk.bind(smalltalk.OrderedCollection, unescape("%2C"), "_comma", function OrderedCollection___comma(aCollection){
const self = this; return self.copyWithAll_(aCollection);
}
, "", unescape("%2C%20aCollection%0D%0D%09%5Eself%20copyWithAll%3A%20aCollection"));
smalltalk.bind(smalltalk.OrderedCollection, unescape("add%3A"), "add_", function OrderedCollection__add_(anObject){
const self = this; return (self.contents()).add_(anObject);
}
, "", unescape("add%3A%20anObject%0D%0D%09%5Eself%20contents%20add%3A%20anObject"));
smalltalk.bind(smalltalk.OrderedCollection, unescape("add%3Aafter%3A"), "add_after_", function OrderedCollection__add_after_(anObject,anotherObject){
const self = this; return (self.contents()).add_after_(anObject,anotherObject);
}
, "", unescape("add%3A%20anObject%0Dafter%3A%20anotherObject%0D%0D%09%5Eself%20contents%0D%09%09add%3A%20anObject%0D%09%09after%3A%20anotherObject"));
smalltalk.bind(smalltalk.OrderedCollection, unescape("addAll%3A"), "addAll_", function OrderedCollection__addAll_(aCollection){
const self = this; aCollection.do_((function OrderedCollection__(each){
return self.add_(each);
}
));
return aCollection;
}
, "", unescape("addAll%3A%20aCollection%0D%0D%09aCollection%20do%3A%20%5B%3Aeach%20%7C%20self%20add%3A%20each%5D.%0D%09%5EaCollection"));
smalltalk.bind(smalltalk.OrderedCollection, unescape("addFirst%3A"), "addFirst_", function OrderedCollection__addFirst_(anObject){
const self = this; return (self.contents()).addFirst_(anObject);
}
, "", unescape("addFirst%3A%20anObject%0D%0D%09%5Eself%20contents%20addFirst%3A%20anObject"));
smalltalk.bind(smalltalk.OrderedCollection, unescape("addLast%3A"), "addLast_", function OrderedCollection__addLast_(anObject){
const self = this; return (self.contents()).addLast_(anObject);
}
, "", unescape("addLast%3A%20anObject%0D%0D%09%5Eself%20contents%20addLast%3A%20anObject"));
smalltalk.bind(smalltalk.OrderedCollection, unescape("asArray"), "asArray", function OrderedCollection__asArray(){
var array = nil;
const self = this; array=smalltalk.Array.new_((self.size()));
self.doWithIndex_((function OrderedCollection__(each,index){
return array.at_put_(index,each);
}
));
return array;
}
, "", unescape("asArray%0D%0D%09%7C%20array%20%7C%0D%09array%20%3A%3D%20Array%20new%3A%20self%20size.%0D%09self%20doWithIndex%3A%20%5B%3Aeach%20%3Aindex%20%7C%20array%20at%3A%20index%20put%3A%20each%5D.%0D%09%5Earray"));
smalltalk.bind(smalltalk.OrderedCollection, unescape("asJSONObject"), "asJSONObject", function OrderedCollection__asJSONObject(){
const self = this; return (self.contents()).asJSONObject();
}
, "", unescape("asJSONObject%0D%0D%09%5Eself%20contents%20asJSONObject"));
smalltalk.bind(smalltalk.OrderedCollection, unescape("asJavascript"), "asJavascript", function OrderedCollection__asJavascript(){
const self = this; return (self.contents()).asJavascript();
}
, "", unescape("asJavascript%0D%0D%09%5Eself%20contents%20asJavascript"));
smalltalk.bind(smalltalk.OrderedCollection, unescape("at%3AifAbsent%3A"), "at_ifAbsent_", function OrderedCollection__at_ifAbsent_(anIndex,aBlock){
const self = this; return (self.contents()).at_ifAbsent_(anIndex,aBlock);
}
, "", unescape("at%3A%20anIndex%0DifAbsent%3A%20aBlock%0D%0D%09%5Eself%20contents%0D%09%09at%3A%20anIndex%0D%09%09ifAbsent%3A%20aBlock"));
smalltalk.bind(smalltalk.OrderedCollection, unescape("atAllPut%3A"), "atAllPut_", function OrderedCollection__atAllPut_(anObject){
const self = this; (self.contents()).atAllPut_(anObject);
return anObject;
}
, "", unescape("atAllPut%3A%20anObject%0D%0D%09self%20contents%20atAllPut%3A%20anObject.%0D%09%5EanObject"));
smalltalk.bind(smalltalk.OrderedCollection, unescape("copyFrom%3Ato%3A"), "copyFrom_to_", function OrderedCollection__copyFrom_to_(startIndex,endIndex){
var copiedContents = nil;
const self = this; copiedContents=(self.contents()).copyFrom_to_(startIndex,endIndex);
return (self.$klass).contents_(copiedContents);
}
, "", unescape("copyFrom%3A%20startIndex%0Dto%3A%20endIndex%0D%0D%09%7C%20copiedContents%20%7C%0D%09copiedContents%20%3A%3D%20self%20contents%20copyFrom%3A%20startIndex%20to%3A%20endIndex.%0D%09%5Eself%20class%20contents%3A%20copiedContents"));
smalltalk.bind(smalltalk.OrderedCollection, unescape("copyWithAll%3A"), "copyWithAll_", function OrderedCollection__copyWithAll_(aCollection){
const self = this; return (function OrderedCollection__($1$){
$1$.addAll_(self);
$1$.addAll_(aCollection);
return $1$.yourself()}
)((self.$klass).$$new());
}
, "", unescape("copyWithAll%3A%20aCollection%0D%0D%09%5Eself%20class%20new%0D%09%09addAll%3A%20self%3B%0D%09%09addAll%3A%20aCollection%3B%0D%09%09yourself"));
smalltalk.bind(smalltalk.OrderedCollection, unescape("deepCopy"), "deepCopy", function OrderedCollection__deepCopy(){
const self = this; return smalltalk.OrderedCollection.contents_(((self.contents()).deepCopy()));
}
, "", unescape("deepCopy%0D%0D%09%5EOrderedCollection%20contents%3A%20self%20contents%20deepCopy"));
smalltalk.bind(smalltalk.OrderedCollection, unescape("reversed"), "reversed", function OrderedCollection__reversed(){
const self = this; return smalltalk.OrderedCollection.contents_(((self.contents()).reversed()));
}
, "", unescape("reversed%0D%0D%09%5EOrderedCollection%20contents%3A%20self%20contents%20reversed"));
smalltalk.bind(smalltalk.OrderedCollection, unescape("shallowCopy"), "shallowCopy", function OrderedCollection__shallowCopy(){
const self = this; return smalltalk.OrderedCollection.contents_(((self.contents()).shallowCopy()));
}
, "", unescape("shallowCopy%0D%0D%09%5EOrderedCollection%20contents%3A%20self%20contents%20shallowCopy"));
smalltalk.bind(smalltalk.OrderedCollection, unescape("do%3A"), "do_", function OrderedCollection__do_(aBlock){
const self = this; (self.contents()).do_(aBlock);
return self;
}
, "", unescape("do%3A%20aBlock%0D%0D%09self%20contents%20do%3A%20aBlock"));
smalltalk.bind(smalltalk.OrderedCollection, unescape("detect%3AifNone%3A"), "detect_ifNone_", function OrderedCollection__detect_ifNone_(aBlock,anotherBlock){
const self = this; return (self.contents()).detect_ifNone_(aBlock,anotherBlock);
}
, "", unescape("detect%3A%20aBlock%0DifNone%3A%20anotherBlock%0D%0D%09%5Eself%20contents%0D%09%09detect%3A%20aBlock%0D%09%09ifNone%3A%20anotherBlock"));
smalltalk.bind(smalltalk.OrderedCollection, unescape("reverseDo%3A"), "reverseDo_", function OrderedCollection__reverseDo_(aBlock){
const self = this; (self.contents()).reverseDo_(aBlock);
return self;
}
, "", unescape("reverseDo%3A%20aBlock%0D%0D%09self%20contents%20reverseDo%3A%20aBlock"));
smalltalk.bind(smalltalk.OrderedCollection, unescape("isEmpty"), "isEmpty", function OrderedCollection__isEmpty(){
const self = this; return (self.size())._eq((0));
}
, "", unescape("isEmpty%0D%0D%09%20%5Eself%20size%20%3D%200"));
smalltalk.bind(smalltalk.OrderedCollection, unescape("includes%3A"), "includes_", function OrderedCollection__includes_(anObject){
const self = this; return (self.contents()).includes_(anObject);
}
, "", unescape("includes%3A%20anObject%0D%0D%09%5Eself%20contents%20includes%3A%20anObject"));
smalltalk.bind(smalltalk.OrderedCollection, unescape("indexOf%3AifAbsent%3A"), "indexOf_ifAbsent_", function OrderedCollection__indexOf_ifAbsent_(anObject,aBlock){
const self = this; return (self.contents()).indexOf_ifAbsent_(anObject,aBlock);
}
, "", unescape("indexOf%3A%20anObject%0DifAbsent%3A%20aBlock%0D%0D%09%5Eself%20contents%0D%09%09indexOf%3A%20anObject%0D%09%09ifAbsent%3A%20aBlock"));
smalltalk.bind(smalltalk.OrderedCollection, unescape("first"), "first", function OrderedCollection__first(){
const self = this; return (self.contents()).first();
}
, "", unescape("first%0D%0D%09%5Eself%20contents%20first"));
smalltalk.bind(smalltalk.OrderedCollection, unescape("fourth"), "fourth", function OrderedCollection__fourth(){
const self = this; return (self.contents()).fourth();
}
, "", unescape("fourth%0D%0D%09%5Eself%20contents%20fourth"));
smalltalk.bind(smalltalk.OrderedCollection, unescape("three"), "three", function OrderedCollection__three(){
const self = this; return self.third();
}
, "", unescape("three%0D%0D%09%5Eself%20third"));
smalltalk.bind(smalltalk.OrderedCollection, unescape("two"), "two", function OrderedCollection__two(){
const self = this; return self.second();
}
, "", unescape("two%0D%0D%09%5Eself%20second"));
smalltalk.bind(smalltalk.OrderedCollection, unescape("occurrencesOf%3A"), "occurrencesOf_", function OrderedCollection__occurrencesOf_(anObject){
const self = this; return (self.contents()).occurrencesOf_(anObject);
}
, "", unescape("occurrencesOf%3A%20anObject%0D%0D%09%20%5Eself%20contents%20occurrencesOf%3A%20anObject"));
smalltalk.bind(smalltalk.OrderedCollection, unescape("printOn%3A"), "printOn_", function OrderedCollection__printOn_(aStream){
const self = this; (function OrderedCollection__($1$){
$1$.nextPutAll_(((self.$klass).name()));
return $1$.nextPut_(unescape("%28"))}
)(aStream);
self.do_separatedBy_((function OrderedCollection__(each){
return each.printOn_(aStream);
}
),(function OrderedCollection__(){
return aStream.space();
}
));
aStream.nextPut_(unescape("%29"));
return self;
}
, "", unescape("printOn%3A%20aStream%0D%0D%09aStream%0D%09%09nextPutAll%3A%20self%20class%20name%3B%0D%09%09nextPut%3A%20%24%28.%0D%09self%0D%09%09do%3A%20%5B%3Aeach%20%7C%20each%20printOn%3A%20aStream%5D%0D%09%09separatedBy%3A%20%5BaStream%20space%5D.%0D%09aStream%20nextPut%3A%20%24%29"));
smalltalk.bind(smalltalk.OrderedCollection, unescape("remove%3AifAbsent%3A"), "remove_ifAbsent_", function OrderedCollection__remove_ifAbsent_(anObject,aBlock){
const self = this; return (self.contents()).remove_ifAbsent_(anObject,aBlock);
}
, "", unescape("remove%3A%20anObject%0DifAbsent%3A%20aBlock%0D%0D%09%5Eself%20contents%0D%09%09remove%3A%20anObject%0D%09%09ifAbsent%3A%20aBlock"));
smalltalk.bind(smalltalk.OrderedCollection, unescape("removeAll"), "removeAll", function OrderedCollection__removeAll(){
const self = this; self.initializeContents();
return self;
}
, "", unescape("removeAll%0D%0D%09self%20initializeContents"));
smalltalk.bind(smalltalk.OrderedCollection, unescape("removeFirst"), "removeFirst", function OrderedCollection__removeFirst(){
const self = this; return (self.contents()).removeFirst();
}
, "", unescape("removeFirst%0D%0D%09%5Eself%20contents%20removeFirst"));
smalltalk.bind(smalltalk.OrderedCollection, unescape("removeIndex%3A"), "removeIndex_", function OrderedCollection__removeIndex_(anIndex){
const self = this; return (self.contents()).removeIndex_(anIndex);
}
, "", unescape("removeIndex%3A%20anIndex%0D%0D%09%5Eself%20contents%20removeIndex%3A%20anIndex"));
smalltalk.bind(smalltalk.OrderedCollection, unescape("removeLast"), "removeLast", function OrderedCollection__removeLast(){
const self = this; return (self.contents()).removeLast();
}
, "", unescape("removeLast%0D%0D%09%5Eself%20contents%20removeLast"));
smalltalk.bind(smalltalk.OrderedCollection, unescape("second"), "second", function OrderedCollection__second(){
const self = this; return (self.contents()).second();
}
, "", unescape("second%0D%0D%09%5Eself%20contents%20second"));
smalltalk.bind(smalltalk.OrderedCollection, unescape("size"), "size", function OrderedCollection__size(){
const self = this; return (self.contents()).size();
}
, "", unescape("size%0D%0D%09%5Eself%20contents%20size"));
smalltalk.bind(smalltalk.OrderedCollection, unescape("sort%3A"), "sort_", function OrderedCollection__sort_(aBlock){
const self = this; (self.contents()).sort_(aBlock);
return self;
}
, "", unescape("sort%3A%20aBlock%0D%0D%09self%20contents%20sort%3A%20aBlock"));
smalltalk.bind(smalltalk.OrderedCollection, unescape("sorted"), "sorted", function OrderedCollection__sorted(){
const self = this; return smalltalk.OrderedCollection.contents_(((self.contents()).sorted()));
}
, "", unescape("sorted%0D%0D%09%5EOrderedCollection%20contents%3A%20self%20contents%20sorted"));
smalltalk.bind(smalltalk.OrderedCollection, unescape("sorted%3A"), "sorted_", function OrderedCollection__sorted_(aBlock){
const self = this; return smalltalk.OrderedCollection.contents_(((self.contents()).sorted_(aBlock)));
}
, "", unescape("sorted%3A%20aBlock%0D%0D%09%5EOrderedCollection%20contents%3A%20%28self%20contents%20sorted%3A%20aBlock%29"));
smalltalk.bind(smalltalk.OrderedCollection, unescape("third"), "third", function OrderedCollection__third(){
const self = this; return (self.contents()).third();
}
, "", unescape("third%0D%0D%09%5Eself%20contents%20third"));
smalltalk.bind(smalltalk.OrderedCollection, unescape("initializeContents"), "initializeContents", function OrderedCollection__initializeContents(){
const self = this; self['@contents']=smalltalk.Array.$$new();
return self;
}
, "", unescape("initializeContents%0D%0D%09contents%20%3A%3D%20Array%20new"));
smalltalk.bind(smalltalk.OrderedCollection, unescape("initialize"), "initialize", function OrderedCollection__initialize(){
const self = this; smalltalk.superImplementor(smalltalk.OrderedCollection,'initialize').apply(self, []);
self.initializeContents();
return self;
}
, "", unescape("initialize%0D%0D%09super%20initialize.%0D%09self%20initializeContents"));
smalltalk.bind(smalltalk.OrderedCollection, unescape("contents"), "contents", function OrderedCollection__contents(){
const self = this; return self['@contents'];
}
, "", unescape("contents%0D%0D%09%5Econtents"));
smalltalk.bind(smalltalk.OrderedCollection, unescape("contents%3A"), "contents_", function OrderedCollection__contents_(anArray){
const self = this; self['@contents']=anArray;
return self;
}
, "", unescape("contents%3A%20anArray%0D%0D%09contents%20%3A%3D%20anArray"));
smalltalk.bind(smalltalk.OrderedCollection.$klass, unescape("contents%3A"), "contents_", function OrderedCollection_class__contents_(anArray){
const self = this; return (function OrderedCollection_class__($1$){
$1$.contents_(anArray);
return $1$.yourself()}
)(self.$$new());
}
, "", unescape("contents%3A%20anArray%0D%0D%09%5Eself%20new%0D%09%09contents%3A%20anArray%3B%0D%09%09yourself"));
smalltalk.bind(smalltalk.OrderedCollection.$klass, unescape("basicNew%3A"), "basicNew_", function OrderedCollection_class__basicNew_(anInteger){
const self = this; return self.$$new();
}
, "", unescape("basicNew%3A%20anInteger%0D%0D%09%5Eself%20new"));
smalltalk.bind(smalltalk.OrderedCollection, unescape("at%3A"), "at_", function OrderedCollection__at_(anIndex){
const self = this; return (self.contents()).at_(anIndex);
}
, "", unescape("at%3A%20anIndex%0D%0D%09%5Eself%20contents%20at%3A%20anIndex"));
smalltalk.bind(smalltalk.OrderedCollection, unescape("at%3Aput%3A"), "at_put_", function OrderedCollection__at_put_(anIndex,anObject){
const self = this; return (self.contents()).at_put_(anIndex,anObject);
}
, "", unescape("at%3A%20anIndex%20put%3A%20anObject%0D%0D%09%5Eself%20contents%20at%3A%20anIndex%20put%3A%20anObject"));
