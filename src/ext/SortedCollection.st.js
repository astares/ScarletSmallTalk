smalltalk.addClass("SortedCollection", smalltalk.ArrayedContents, ['sortBlock', 'sorted'], 'nil');
smalltalk.SortedCollection.$classVariableNames=("");
smalltalk.SortedCollection.$klass.$iVarNames = [];
smalltalk.bind(smalltalk.SortedCollection.$klass, unescape("new"), "$$new", function SortedCollection_class__$$new(){
const self = this; return (smalltalk.superImplementor(smalltalk.SortedCollection.$klass,'$$new').apply(self, [])).ascendingOrder();
}
, "", unescape("new%0D%20%20%20%20%22Answer%20a%20SortedCollection%20capable%20of%20sort%20in%20ascending%20order.%22%0D%20%20%20%20%5Esuper%20new%20ascendingOrder"));
smalltalk.bind(smalltalk.SortedCollection.$klass, unescape("sortBlock%3A"), "sortBlock_", function SortedCollection_class__sortBlock_(aBlock){
const self = this; return (smalltalk.superImplementor(smalltalk.SortedCollection.$klass,'$$new').apply(self, [])).sortBlock_(aBlock);
}
, "", unescape("sortBlock%3A%20aBlock%0D%20%20%20%22Answer%20a%20SortedCollection%20which%20will%0D%20%20%20sort%20in%20the%20order%20defined%20by%20aBlock.%22%0D%20%20%20%5Esuper%20new%20sortBlock%3A%20aBlock"));
smalltalk.bind(smalltalk.SortedCollection, unescape("sortBlock"), "sortBlock", function SortedCollection__sortBlock(){
const self = this; if (((nil.isNil_(self['@sortBlock']))).valueOf()) {self['@sortBlock']=self.defaultSortBlock()};
return self['@sortBlock'];
}
, "", unescape("sortBlock%0D%20%20%20%20%22Return%20the%20block%20that%20determines%20sort%0D%20%20%20%20ordering%20for%20the%20receiver.%22%0D%20%20%20%28sortBlock%20isNil%29%0D%20%20%20%20%20%20ifTrue%3A%5BsortBlock%20%3A%3D%20self%20defaultSortBlock%5D.%0D%20%20%20%5EsortBlock"));
smalltalk.bind(smalltalk.SortedCollection, unescape("ascendingOrder"), "ascendingOrder", function SortedCollection__ascendingOrder(){
const self = this; self.sortBlock_((self.defaultSortBlock()));
self['@sorted']=true;
return self;
}
, "", unescape("ascendingOrder%0D%20%20%20%22Sets%20default%20ascending%20order%22%0D%20%20%20self%20sortBlock%3A%20self%20defaultSortBlock.%0D%20%20%20sorted%20%3A%3D%20true."));
smalltalk.bind(smalltalk.SortedCollection, unescape("add%3A"), "add_", function SortedCollection__add_(anObject){
const self = this; smalltalk.superImplementor(smalltalk.SortedCollection,'add_').apply(self, [anObject]);
self['@sorted']=false;
return anObject;
}
, "", unescape("add%3A%20anObject%0D%20%20%20%22Add%20anObject%20to%20the%20receiver.%20%22%0D%20%20%20super%20add%3A%20anObject.%0D%20%20%20sorted%20%3A%3D%20false.%0D%20%20%20%5EanObject"));
smalltalk.bind(smalltalk.SortedCollection, unescape("defaultSortBlock"), "defaultSortBlock", function SortedCollection__defaultSortBlock(){
const self = this; return (function SortedCollection__(object1,object2){
return object1._lt_eq(object2);
}
);
}
, "", unescape("defaultSortBlock%0D%0D%20%20%20%5E%5B%3Aobject1%20%3Aobject2%7C%20object1%20%3C%3D%20object2%5D"));
smalltalk.bind(smalltalk.SortedCollection, unescape("sortBlock%3A"), "sortBlock_", function SortedCollection__sortBlock_(aBlock){
const self = this; self['@sortBlock']=aBlock;
self.reSort();
return self;
}
, "", unescape("sortBlock%3A%20aBlock%0D%20%20%20%22Return%20the%20receiver.%20%20Set%20the%20sort%20block%20for%0D%20%20%20the%20receiver%20to%20aBlock%20and%20resort%20the%20receiver.%22%0D%20%20%20sortBlock%20%3A%3D%20aBlock.%0D%20%20%20self%20reSort"));
smalltalk.bind(smalltalk.SortedCollection, unescape("reSort"), "reSort", function SortedCollection__reSort(){
const self = this; self.sort_((self.sortBlock()));
return self;
}
, "", unescape("reSort%0D%20%20%20%22Private%20-%20Return%20the%20receiver%20collection%0D%20%20%20resorted%20according%20to%20sortBlock.%22%0D%20%20%20self%20sort%3A%20%28self%20sortBlock%29"));
smalltalk.bind(smalltalk.SortedCollection, unescape("sort%3A"), "sort_", function SortedCollection__sort_(aBlock){
const self = this; if (((nil.isNil_(self['@contents']))).not()) {self['@contents'].sort_(aBlock);
self['@sorted']=true};
return self;
}
, "", unescape("sort%3A%20aBlock%0D%20%20%20%22Sort%20%28inplace%29%20the%20receiver%27s%20contents%20with%20aBlock.%20%22%0D%0D%20%20%20contents%20isNil%0D%20%20%20%20%20%20ifFalse%3A%5Bcontents%20sort%3A%20aBlock.%0D%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20sorted%20%3A%3D%20true%5D"));
smalltalk.bind(smalltalk.SortedCollection, unescape("checkSorting"), "checkSorting", function SortedCollection__checkSorting(){
const self = this; if ((self['@sorted']).not()) {self.reSort()};
return self;
}
, "", unescape("checkSorting%0D%20%20%20%22Private%20-%20Check%20the%20properly%20sorting%20state%2C%0D%20%20%20sorting%20the%20receiver%20if%20needed%22%0D%20%20%20sorted%20ifFalse%3A%5B%20self%20reSort%20%5D"));
smalltalk.bind(smalltalk.SortedCollection, unescape("remove%3AifAbsent%3A"), "remove_ifAbsent_", function SortedCollection__remove_ifAbsent_(anObject,aBlock){
var result = nil;
const self = this; result=smalltalk.superImplementor(smalltalk.SortedCollection,'remove_ifAbsent_').apply(self, [anObject,aBlock]);
self['@sorted']=false;
return result;
}
, "", unescape("remove%3A%20anObject%20ifAbsent%3A%20aBlock%0D%20%20%20%22%20Remove%20anObject%20from%20the%20receiver.%0D%20%20%20Return%20the%20result%20of%20evaluating%20aBlock%20if%20anObject%20is%20not%20in%20the%20receiver.%09%22%0D%20%20%20%7C%20result%20%7C%0D%20%20%20result%20%3A%3D%20super%20remove%3A%20anObject%20ifAbsent%3A%20aBlock.%0D%20%20%20sorted%20%3A%3D%20false.%0D%20%20%20%5Eresult"));
smalltalk.bind(smalltalk.SortedCollection, unescape("removeIndex%3A"), "removeIndex_", function SortedCollection__removeIndex_(index){
var result = nil;
const self = this; result=smalltalk.superImplementor(smalltalk.SortedCollection,'removeIndex_').apply(self, [index]);
self['@sorted']=false;
return result;
}
, "", unescape("removeIndex%3A%20index%0D%20%20%20%22Remove%20the%20element%20at%20index.%20%22%0D%20%20%20%7C%20result%20%7C%0D%20%20%20result%20%3A%3D%20super%20removeIndex%3A%20index.%0D%20%20%20sorted%20%3A%3D%20false.%0D%20%20%20%5Eresult"));
smalltalk.bind(smalltalk.SortedCollection, unescape("withIndexDo%3A"), "withIndexDo_", function SortedCollection__withIndexDo_(aBlock){
const self = this; self.checkSorting();
smalltalk.superImplementor(smalltalk.SortedCollection,'withIndexDo_').apply(self, [aBlock]);
return self;
}
, "", unescape("withIndexDo%3A%20aBlock%0D%20%20%20%22Evaluate%20aBlock%20with%20all%20the%20index%20positions%20in%20the%20receiver.%20%22%0D%0D%20%20%20self%20checkSorting.%0D%20%20%20super%20withIndexDo%3A%20aBlock"));
smalltalk.bind(smalltalk.SortedCollection, unescape("sorted%3A"), "sorted_", function SortedCollection__sorted_(aValue){
const self = this; self['@sorted']=aValue;
return self;
}
, "", unescape("sorted%3A%20aValue%0D%0D%20%20%20%20%20%20%20%20%22Set%20my%20%27sorted%27%20instance%20variable%20to%20aValue.%22%0D%20%20%20%20sorted%20%3A%3D%20aValue"));
