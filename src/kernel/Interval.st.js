smalltalk.addClass("Interval", smalltalk.SequenceableCollection, ['start', 'stop', 'step'], 'Kernel');
smalltalk.Interval.$classVariableNames=("");
smalltalk.bind(smalltalk.Interval.$klass, unescape("from%3Ato%3Aby%3A"), "from_to_by_", function Interval_class__from_to_by_(startNum,stopNum,stepNum){
var interval = nil;
const self = this; interval=smalltalk.Interval.$$new();
interval.start_(startNum);
interval.stop_(stopNum);
interval.step_(stepNum);
return interval;
}
, "Instantiation", unescape("from%3A%20startNum%20to%3A%20stopNum%20by%3A%20stepNum%0D%0D%09%7C%20interval%20%7C%0D%09interval%20%3A%3D%20Interval%20new.%0D%09interval%20start%3A%20startNum.%0D%09interval%20stop%3A%20stopNum.%0D%09interval%20step%3A%20stepNum.%0D%09%5Einterval%20"));
smalltalk.bind(smalltalk.Interval.$klass, unescape("from%3Ato%3A"), "from_to_", function Interval_class__from_to_(startNum,stopNum){
const self = this; return smalltalk.Interval.from_to_by_(startNum,stopNum,(1));
}
, "Instantiation", unescape("from%3A%20startNum%20to%3A%20stopNum%0D%0D%09%5EInterval%20from%3A%20startNum%20to%3A%20stopNum%20by%3A%201%20"));
smalltalk.bind(smalltalk.Interval, unescape("start"), "start", function Interval__start(){
const self = this; return self['@start'];
}
, "accessing", unescape("start%0D%0D%09%5Estart%20"));
smalltalk.bind(smalltalk.Interval, unescape("stop"), "stop", function Interval__stop(){
const self = this; return self['@stop'];
}
, "accessing", unescape("stop%0D%0D%09%5Estop%20"));
smalltalk.bind(smalltalk.Interval, unescape("step"), "step", function Interval__step(){
const self = this; return self['@step'];
}
, "accessing", unescape("step%0D%0D%09%5Estep%20"));
smalltalk.bind(smalltalk.Interval, unescape("start%3A"), "start_", function Interval__start_(aNum){
const self = this; self['@start']=aNum;
return self;
}
, "accessing", unescape("start%3A%20aNum%0D%0D%09start%20%3A%3D%20aNum%20"));
smalltalk.bind(smalltalk.Interval, unescape("stop%3A"), "stop_", function Interval__stop_(aNum){
const self = this; self['@stop']=aNum;
return self;
}
, "accessing", unescape("stop%3A%20aNum%0D%0D%09stop%20%3A%3D%20aNum%20"));
smalltalk.bind(smalltalk.Interval, unescape("step%3A"), "step_", function Interval__step_(aNum){
const self = this; self['@step']=aNum;
return self;
}
, "accessing", unescape("step%3A%20aNum%0D%0D%09step%20%3A%3D%20aNum%20"));
smalltalk.bind(smalltalk.Interval, unescape("size"), "size", function Interval__size(){
const self = this; return ((((self.stop())._minus((self.start())))._slash((self.step())))._plus((1))).floor();
}
, "accessing", unescape("size%0D%09%5E%28%28%28self%20stop%20-%20%28self%20start%29%29%20/%20self%20step%29%20+%201%29%20floor%20"));
smalltalk.bind(smalltalk.Interval, unescape("do%3A"), "do_", function Interval__do_(aBlock){
var current = nil;
const self = this; current=self.start();
while((current._no_eq((self.stop()))).valueOf()){if (((self.step())._gt((0))).valueOf()) {if ((current._gt(self['@stop'])).valueOf()) {return self}} else {if ((current._lt(self['@stop'])).valueOf()) {return self}};
aBlock.value_(current);
current=current._plus((self.step()))};;
aBlock.value_(current);
return self;
}
, "enumerating", unescape("do%3A%20aBlock%0D%0D%09%7C%20current%20%7C%0D%09current%20%3A%3D%20self%20start.%0D%09%5Bcurrent%20%7E%3D%20%28self%20stop%29%5D%0D%09%09whileTrue%3A%20%0D%09%09%09%5B%20self%20step%20%3E%200%0D%09%09%09%09ifTrue%3A%0D%09%09%09%09%09%5Bcurrent%20%3E%20stop%20ifTrue%3A%5B%5Eself%5D%5D%0D%09%09%09%09ifFalse%3A%0D%09%09%09%09%09%5Bcurrent%20%3C%20stop%20ifTrue%3A%5B%5Eself%5D%5D.%20%0D%09%09%09aBlock%20value%3A%20current.%20%0D%09%09%09current%20%3A%3D%20current%20+%20self%20step%20%5D.%0D%09aBlock%20value%3A%20current%20"));
smalltalk.bind(smalltalk.Interval, unescape("%3D"), "_eq", function Interval___eq(anInterval){
const self = this; return ((self.$klass)._eq((anInterval.$klass))).and_((function Interval__(){
return ((self.start())._eq((anInterval.start()))).and_((function Interval__(){
return ((self.stop())._eq((anInterval.stop()))).and_((function Interval__(){
return (self.step())._eq((anInterval.step()));
}
));
}
));
}
));
}
, "testing", unescape("%3D%20anInterval%0D%0D%09%5Eself%20class%20%3D%20anInterval%20class%20%0D%09%09and%3A%20%5Bself%20start%20%3D%20anInterval%20start%20%0D%09%09and%3A%20%5Bself%20stop%20%3D%20anInterval%20stop%20%0D%09%09and%3A%5Bself%20step%20%3D%20anInterval%20step%5D%5D%5D%20"));
smalltalk.bind(smalltalk.Interval, unescape("%2C"), "_comma", function Interval___comma(anInterval){
var result = nil;
var index = nil;
const self = this; index=(1);
result=smalltalk.Array.new_(((self.size())._plus((anInterval.size()))));
self.do_((function Interval__(each){
result.at_put_(index,each);
return index=index._plus((1));
}
));
anInterval.do_((function Interval__(each){
result.at_put_(index,each);
return index=index._plus((1));
}
));
return result;
}
, "copying", unescape("%2C%20anInterval%0D%0D%09%7C%20result%20index%20%7C%0D%09index%20%3A%3D%201.%0D%09result%20%3A%3D%20Array%20new%3A%20%28self%20size%20+%20anInterval%20size%29.%0D%09self%20do%3A%20%0D%09%09%5B%20%3Aeach%20%7C%20result%20at%3A%20index%20put%3A%20each.%20%0D%09%09index%20%3A%3D%20index%20+%201%5D.%0D%09anInterval%20do%3A%20%0D%09%09%5B%20%3Aeach%20%7C%20result%20at%3A%20index%20put%3A%20each.%20%0D%09%09index%20%3A%3D%20index%20+%201%5D.%0D%09%5Eresult%20"));
smalltalk.bind(smalltalk.Interval, unescape("collect%3A"), "collect_", function Interval__collect_(aBlock){
var result = nil;
const self = this; result=smalltalk.Array.new_((self.size()));
(self.asArray()).withIndexDo_((function Interval__(each,index){
return result.at_put_(index,(aBlock.value_(each)));
}
));
return result;
}
, "copying", unescape("collect%3A%20aBlock%0D%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%20Array%20new%3A%20self%20size.%0D%09self%20asArray%20withIndexDo%3A%20%5B%3Aeach%20%3Aindex%7C%20result%20at%3A%20index%20put%3A%20%28aBlock%20value%3A%20each%29%5D.%0D%09%5Eresult%20"));
smalltalk.bind(smalltalk.Interval, unescape("copyFrom%3Ato%3A"), "copyFrom_to_", function Interval__copyFrom_to_(start,stop){
const self = this; if (((start._lt((self.start()))).or_((function Interval__(){
return start._gt((self.stop()));
}
))).valueOf()) {return self.error_("Start argument must be in the range of the interval start and end")};
if (((stop._lt(start)).or_((function Interval__(){
return stop._gt((self.stop()));
}
))).valueOf()) {return self.error_(unescape("Stop%20argument%20must%20be%20in%20the%20range%20of%20the%20start%20argument%20and%20the%20interval%27s%20end"))};
return smalltalk.Interval.from_to_by_(start,stop,(self.step()));
}
, "copying", unescape("copyFrom%3A%20start%20to%3A%20stop%0D%0D%09%28start%20%3C%20self%20start%20or%3A%20%5Bstart%20%3E%20self%20stop%5D%29%0D%09%09ifTrue%3A%20%5B%5Eself%20error%3A%20%27Start%20argument%20must%20be%20in%20the%20range%20of%20the%20interval%20start%20and%20end%27%5D.%0D%09%28stop%20%3C%20start%20or%3A%20%5Bstop%20%3E%20self%20stop%5D%29%0D%09%09ifTrue%3A%20%5B%5Eself%20error%3A%27Stop%20argument%20must%20be%20in%20the%20range%20of%20the%20start%20argument%20and%20the%20interval%27%27s%20end%27%5D.%0D%09%5EInterval%20from%3A%20start%20to%3A%20stop%20by%3A%20self%20step%20"));
smalltalk.bind(smalltalk.Interval, unescape("copyReplaceAll%3Awith%3A"), "copyReplaceAll_with_", function Interval__copyReplaceAll_with_(aCollection,anotherCollection){
var selfArray = nil;
var replacingArray = nil;
var replacementArray = nil;
var startIndex = nil;
const self = this; selfArray=self.asArray();
replacingArray=aCollection.asArray();
if ((selfArray.includesAll_(replacingArray)).not()) {return selfArray};
replacementArray=anotherCollection.asArray();
startIndex=selfArray.indexOf_((replacingArray.first()));
if (((selfArray.indexOfCollection_(replacingArray))._eq((0))).valueOf()) {return selfArray};
return selfArray.copyReplaceFrom_to_with_(startIndex,((replacingArray.size())._plus((1))),replacementArray);
}
, "copying", unescape("copyReplaceAll%3A%20aCollection%20with%3A%20anotherCollection%0D%0D%09%7C%20selfArray%20replacingArray%20replacementArray%20startIndex%20%7C%0D%09selfArray%20%3A%3D%20self%20asArray.%0D%09replacingArray%20%3A%3D%20aCollection%20asArray.%0D%09%28selfArray%20includesAll%3A%20replacingArray%29%0D%09%09ifFalse%3A%20%5B%5EselfArray%5D.%0D%09replacementArray%20%3A%3D%20anotherCollection%20asArray.%0D%09startIndex%20%3A%3D%20selfArray%20indexOf%3A%20replacingArray%20first.%0D%09%28selfArray%20indexOfCollection%3A%20replacingArray%29%20%3D%200%0D%09%09ifTrue%3A%20%5B%5EselfArray%5D.%0D%09%5EselfArray%20copyReplaceFrom%3A%20startIndex%20to%3A%20replacingArray%20size%20+%201%20with%3A%20replacementArray%20"));
smalltalk.bind(smalltalk.Interval, unescape("copyReplaceFrom%3Ato%3Awith%3A"), "copyReplaceFrom_to_with_", function Interval__copyReplaceFrom_to_with_(start,stop,aCollection){
var oCollection = nil;
var selfArray = nil;
var begin = nil;
var end = nil;
const self = this; if (((stop._eq((start._minus((1))))).and_((function Interval__(){
return start._lt(((self.size())._plus((1))));
}
))).valueOf()) {selfArray=self.asArray();
if ((stop._eq((0))).valueOf()) {begin=[]} else {begin=selfArray.copyFrom_to_((1),stop)};
end=selfArray.copyFrom_to_(start,(selfArray.size()));
return (begin._comma(aCollection))._comma(end)};
if (((stop._eq((self.size()))).and_((function Interval__(){
return start._eq((stop._plus((1))));
}
))).valueOf()) {oCollection=self.asOrderedCollection();
aCollection.do_((function Interval__(each){
return oCollection.add_(each);
}
));
return oCollection.asArray()};
if (((start._lt((1))).or_((function Interval__(){
return start._gt(stop);
}
))).valueOf()) {return self.error_("start argument outside of valid range")};
if ((stop._gt(((self.size())._plus((1))))).valueOf()) {return self.error_("stop argument outisde of valid range")};
selfArray=self.asArray();
return selfArray.copyReplaceFrom_to_with_(start,stop,(aCollection.asArray()));
}
, "copying", unescape("copyReplaceFrom%3A%20start%20to%3A%20stop%20with%3A%20aCollection%0D%0D%09%7C%20oCollection%20selfArray%20begin%20end%20%7C%0D%09%22Case%20for%20Insertion%22%0D%09%28stop%20%3D%20%28start%20-%201%29%20and%3A%20%5Bstart%20%3C%20%28self%20size%20+%201%29%5D%29%0D%09%09ifTrue%3A%20%0D%09%09%09%5BselfArray%20%3A%3D%20self%20asArray.%0D%09%09%09stop%20%3D%200%0D%09%09%09%09ifTrue%3A%20%5Bbegin%20%3A%3D%20%23%28%29%5D%0D%09%09%09%09ifFalse%3A%20%5Bbegin%20%3A%3D%20selfArray%20copyFrom%3A%201%20to%3A%20stop%5D.%0D%09%09%09%09end%20%3A%3D%20selfArray%20copyFrom%3A%20start%20to%3A%20selfArray%20size.%0D%09%09%09%09%5Ebegin%2CaCollection%2Cend%5D.%0D%09%22Case%20for%20appending%22%0D%09%28stop%20%3D%20self%20size%20and%3A%20%5Bstart%20%3D%20%28stop%20+%201%29%5D%29%0D%09%09ifTrue%3A%20%0D%09%09%09%5BoCollection%20%3A%3D%20self%20asOrderedCollection.%0D%09%09%09%20aCollection%20do%3A%20%5B%3Aeach%20%7C%20oCollection%20add%3A%20each%5D.%0D%09%09%09%20%5EoCollection%20asArray%5D.%0D%09%28start%20%3C%201%20or%3A%20%5Bstart%20%3E%20stop%5D%20%29%0D%09%09ifTrue%3A%20%5B%5Eself%20error%3A%20%27start%20argument%20outside%20of%20valid%20range%27%5D.%0D%09%28stop%20%3E%20%28self%20size%20+%201%29%29%0D%09%09ifTrue%3A%20%5B%5Eself%20error%3A%20%27stop%20argument%20outisde%20of%20valid%20range%27%5D.%0D%09selfArray%20%3A%3D%20self%20asArray.%0D%09%5EselfArray%20copyReplaceFrom%3A%20start%20to%3A%20stop%20with%3A%20aCollection%20asArray%20"));
smalltalk.bind(smalltalk.Interval, unescape("copyReplaceFrom%3Ato%3AwithObject%3A"), "copyReplaceFrom_to_withObject_", function Interval__copyReplaceFrom_to_withObject_(start,stop,anObject){
var oCollection = nil;
var selfArray = nil;
var begin = nil;
var insert = nil;
var end = nil;
const self = this; oCollection=self.asOrderedCollection();
if (((stop._eq((start._minus((1))))).and_((function Interval__(){
return start._lt(((oCollection.size())._plus((1))));
}
))).valueOf()) {selfArray=self.asArray();
if ((stop._eq((0))).valueOf()) {begin=[]} else {begin=selfArray.copyFrom_to_((1),stop)};
insert=smalltalk.Array.with_(anObject);
end=selfArray.copyFrom_to_(start,(selfArray.size()));
return (begin._comma(insert))._comma(end)};
if (((stop._eq((oCollection.size()))).and_((function Interval__(){
return start._eq((stop._plus((1))));
}
))).valueOf()) {oCollection.add_(anObject);
return oCollection.asArray()};
if (((start._gt((self.stop()))).or_((function Interval__(){
return start._gt(stop);
}
))).valueOf()) {return self.error_("start argument outside of valid range")};
if ((stop._gt(((self.size())._plus((1))))).valueOf()) {return self.error_("stop argument outside of valide range")};
selfArray=self.asArray();
selfArray.replaceFrom_to_withObject_(start,stop,anObject);
return selfArray;
}
, "copying", unescape("copyReplaceFrom%3A%20start%20to%3A%20stop%20withObject%3A%20anObject%0D%0D%09%7C%20oCollection%20selfArray%20begin%20insert%20end%7C%0D%09oCollection%20%3A%3D%20self%20asOrderedCollection.%0D%09%22case%20for%20Insertion%22%0D%09%28stop%20%3D%20%28start%20-%201%29%20and%3A%20%5Bstart%20%3C%20%28oCollection%20size%20+%201%29%5D%29%0D%09%09ifTrue%3A%20%0D%09%09%09%5B%20selfArray%20%3A%3D%20self%20asArray.%0D%09%09%09%28stop%20%3D%200%29%0D%09%09%09%09ifTrue%3A%20%5Bbegin%20%3A%3D%20%23%28%29%5D%0D%09%09%09%09ifFalse%3A%20%5Bbegin%20%3A%3D%20selfArray%20copyFrom%3A%201%20to%3A%20stop%5D.%0D%09%09%09insert%20%3A%3D%20Array%20with%3A%20anObject.%0D%09%09%09end%20%3A%3D%20selfArray%20copyFrom%3A%20start%20to%3A%20selfArray%20size.%0D%09%09%09%5Ebegin%2Cinsert%2Cend%5D.%0D%09%22case%20for%20Appending%22%0D%09%28stop%20%3D%20oCollection%20size%20and%3A%20%5Bstart%20%3D%20%28stop%20+%201%29%5D%29%0D%09%09ifTrue%3A%0D%09%09%09%5BoCollection%20add%3A%20anObject.%20%0D%09%09%09%5EoCollection%20asArray%5D.%0D%09%28start%20%3E%20self%20stop%20or%3A%20%5Bstart%20%3E%20stop%5D%29%0D%09%09ifTrue%3A%20%5B%5Eself%20error%3A%20%27start%20argument%20outside%20of%20valid%20range%27%5D.%0D%09%28stop%20%3E%20%28self%20size%20+%201%29%29%0D%09%09ifTrue%3A%20%5B%5Eself%20error%3A%20%27stop%20argument%20outside%20of%20valide%20range%27%5D.%0D%09%22case%20for%20replacement%22%0D%09selfArray%20%3A%3D%20self%20asArray.%0D%09selfArray%20replaceFrom%3A%20start%20to%3A%20stop%20withObject%3A%20anObject.%0D%09%5EselfArray%20"));
smalltalk.bind(smalltalk.Interval, unescape("copyReplacing%3AwithObject%3A"), "copyReplacing_withObject_", function Interval__copyReplacing_withObject_(anObject,replacementObject){
var result = nil;
const self = this; result=smalltalk.Array.new_((self.size()));
(self.asArray()).withIndexDo_((function Interval__(val,index){
if ((anObject._eq(val)).valueOf()) {return result.at_put_(index,replacementObject)} else {return result.at_put_(index,val)};
}
));
return result;
}
, "copying", unescape("copyReplacing%3A%20anObject%20withObject%3A%20replacementObject%0D%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%20%28Array%20new%3A%20self%20size%29.%0D%09self%20asArray%20withIndexDo%3A%20%5B%3Aval%20%3Aindex%20%7C%20anObject%20%3D%20val%20ifTrue%3A%20%5Bresult%20at%3A%20index%20put%3A%20replacementObject%5D%20ifFalse%3A%20%5Bresult%20at%3A%20index%20put%3A%20val%5D%5D.%0D%09%5Eresult%20"));
smalltalk.bind(smalltalk.Interval, unescape("copyWithout%3A"), "copyWithout_", function Interval__copyWithout_(anObject){
var result = nil;
const self = this; result=smalltalk.OrderedCollection.$$new();
self.do_((function Interval__(each){
if ((anObject._eq(each)).not()) {return result.add_(each)} else {return nil};
}
));
return result.asArray();
}
, "copying", unescape("copyWithout%3A%20anObject%0D%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%20OrderedCollection%20new.%0D%09self%20do%3A%20%5B%3Aeach%20%7C%20anObject%20%3D%20each%20ifFalse%3A%5Bresult%20add%3A%20each%5D%5D.%0D%09%5Eresult%20asArray%20"));
smalltalk.bind(smalltalk.Interval, unescape("reject%3A"), "reject_", function Interval__reject_(aBlock){
var result = nil;
const self = this; result=smalltalk.OrderedCollection.$$new();
self.do_((function Interval__(each){
if ((aBlock.value_(each)).not()) {return result.add_(each)} else {return nil};
}
));
return result.asArray();
}
, "testing", unescape("reject%3A%20aBlock%0D%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%20OrderedCollection%20new.%0D%09self%20do%3A%20%5B%3Aeach%20%7C%20%28aBlock%20value%3A%20each%29%20ifFalse%3A%20%5Bresult%20add%3A%20each%5D%5D.%0D%09%5Eresult%20asArray%20"));
smalltalk.bind(smalltalk.Interval, unescape("reverse"), "reverse", function Interval__reverse(){
const self = this; return smalltalk.Interval.from_to_by_((self.stop()),(self.start()),((self.step())._star((-1))));
}
, "copying", unescape("reverse%0D%0D%09%5EInterval%20from%3A%20self%20stop%20to%3A%20self%20start%20by%3A%20%28self%20step%20*%20-1%29%20"));
smalltalk.bind(smalltalk.Interval, unescape("select%3A"), "select_", function Interval__select_(aBlock){
var result = nil;
const self = this; result=smalltalk.OrderedCollection.$$new();
self.do_((function Interval__(each){
if ((aBlock.value_(each)).valueOf()) {return result.add_(each)} else {return nil};
}
));
return result.asArray();
}
, "copying", unescape("select%3A%20aBlock%0D%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%20OrderedCollection%20new.%0D%09self%20do%3A%20%5B%3Aeach%20%7C%20%28aBlock%20value%3A%20each%29%20ifTrue%3A%20%5Bresult%20add%3A%20each%5D%5D.%0D%09%5Eresult%20asArray%20"));
