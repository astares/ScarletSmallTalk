smalltalk.addClass("MethodReferences", smalltalk.EventManager, ['rootClasses', 'results'], 'Tools-References');
smalltalk.MethodReferences.$classVariableNames=("");
smalltalk.bind(smalltalk.Smalltalk.$klass, unescape("sendersOf%3A"), "sendersOf_", function Smalltalk_class__sendersOf_(selector){
const self = this; return (self.current()).sendersOf_(selector);
}
, "Tools-query", unescape("sendersOf%3A%20selector%0D%09%22%20Return%20the%20senders%20of%20message%20selector.%20%22%0D%0D%09%5Eself%20current%20sendersOf%3A%20selector"));
smalltalk.bind(smalltalk.Smalltalk, unescape("methodReferences"), "methodReferences", function Smalltalk__methodReferences(){
const self = this; return smalltalk.MethodReferences.$$new();
}
, "Tools-accessing", unescape("methodReferences%0D%09%22%20Return%20the%20methodReferences%20tool%20of%20the%20receiver.%20%22%0D%0D%09%5EMethodReferences%20new"));
smalltalk.bind(smalltalk.Smalltalk, unescape("sendersOf%3A"), "sendersOf_", function Smalltalk__sendersOf_(selector){
const self = this; return (self.methodReferences()).sendersOf_(selector);
}
, "Tools-query", unescape("sendersOf%3A%20selector%0D%09%22%20Return%20the%20senders%20of%20message%20selector.%20%22%0D%0D%09%5Eself%20methodReferences%20sendersOf%3A%20selector"));
smalltalk.bind(smalltalk.String, unescape("senders"), "senders", function String__senders(){
const self = this; return smalltalk.Smalltalk.sendersOf_(self);
}
, "Tools-query", unescape("senders%0D%09%22%20Return%20the%20senders%20of%20the%20receiver.%20%22%0D%0D%09%5ESmalltalk%20sendersOf%3A%20self"));
smalltalk.bind(smalltalk.String, unescape("implementors"), "implementors", function String__implementors(){
const self = this; return smalltalk.Smalltalk.implementorsOf_(self);
}
, "Tools-query", unescape("implementors%0D%09%22%20Return%20the%20implementors%20of%20the%20receiver.%20%22%0D%0D%09%5ESmalltalk%20implementorsOf%3A%20self"));
smalltalk.bind(smalltalk.MethodReferences.$klass, unescape("constructEventsTriggered"), "constructEventsTriggered", function MethodReferences_class__constructEventsTriggered(){
const self = this; return ["found:", "found:pattern:in:", "needsMethods", "searchStarted", "searchFinished"]._comma((smalltalk.superImplementor(smalltalk.MethodReferences.$klass,'constructEventsTriggered').apply(self, [])));
}
, "events", unescape("constructEventsTriggered%0D%09%22%20Private%20-%20Return%20the%20events%20managed%20by%20instances%20of%20the%20receiver.%20%22%0D%0D%09%5E%23%28%09%23found%3A%20%23found%3Apattern%3Ain%3A%0D%09%09%23needsMethods%0D%09%09%23searchStarted%20%23searchFinished%0D%09%29%20%2C%20super%20constructEventsTriggered"));
smalltalk.bind(smalltalk.MethodReferences.$klass, unescape("of%3A"), "of_", function MethodReferences_class__of_(selector){
const self = this; return (self.$$new()).referencesOf_(selector);
}
, "testing", unescape("of%3A%20selector%0D%09%22%20Return%20the%20references%20to%20selector.%20%22%0D%0D%09%5Eself%20new%20referencesOf%3A%20selector"));
smalltalk.bind(smalltalk.MethodReferences.$klass, unescape("ofGlobal%3A"), "ofGlobal_", function MethodReferences_class__ofGlobal_(globalName){
const self = this; return (self.$$new()).referencesOfGlobal_(globalName);
}
, "testing", unescape("ofGlobal%3A%20globalName%0D%09%22%20Return%20the%20references%20to%20global%20globalName.%20%22%0D%0D%09%5Eself%20new%20referencesOfGlobal%3A%20globalName"));
smalltalk.bind(smalltalk.MethodReferences.$klass, unescape("findClasses%3A"), "findClasses_", function MethodReferences_class__findClasses_(what){
const self = this; return (self.$$new()).findClasses_(what);
}
, "testing", unescape("findClasses%3A%20what%0D%09%22%20Find%20classes%20in%20the%20system%20matching%20what.%20%22%0D%0D%09%5Eself%20new%20findClasses%3A%20what"));
smalltalk.bind(smalltalk.MethodReferences.$klass, unescape("globals"), "globals", function MethodReferences_class__globals(){
var tool = nil;
var result = nil;
const self = this; return result;
}
, "testing", unescape("globals%0D%09%22%20Return%20the%20references%20to%20all%20global%20names.%20%22%0D%0D%09%7C%20tool%20result%20%7C%0D%22%0D%09tool%20%3A%3D%20self%20new.%0D%09result%20%3A%3D%20PoolDictionary%20new.%0D%09tool%20when%3A%20%23found%3Apattern%3Ain%3A%20do%3A%20%5B%3Amth%20%3Amask%20%3Astream%7C%20%7C%20global%20%7C%0D%09%09global%20%3A%3D%20SmalltalkParser%20new%20globalNameParser%20parse%3A%20stream.%0D%09%09global%20isParseFailure%20ifFalse%3A%20%5B%0D%09%09%09%28result%20at%3A%20global%20ifAbsentPut%3A%20%5BArray%20new%5D%29%20add%3A%20mth%0D%09%09%5D.%0D%09%5D.%0D%09tool%20searchGlobalReferences.%0D%22%0D%09%5Eresult"));
smalltalk.bind(smalltalk.MethodReferences.$klass, unescape("methodOverwrites"), "methodOverwrites", function MethodReferences_class__methodOverwrites(){
const self = this; return (self.$$new()).methodOverwrites();
}
, "testing", unescape("methodOverwrites%0D%09%22%20Find%20the%20methods%20that%20are%20implemented/overwritten%20by%20subclasses.%20%22%0D%0D%09%5Eself%20new%20methodOverwrites"));
smalltalk.bind(smalltalk.MethodReferences.$klass, unescape("variableOverwrites"), "variableOverwrites", function MethodReferences_class__variableOverwrites(){
const self = this; return (self.$$new()).variableOverwrites();
}
, "testing", unescape("variableOverwrites%0D%09%22%20Find%20the%20methods%20that%20has%20potential%20overwrite%20of%20variable%20names.%20%22%0D%0D%09%5Eself%20new%20variableOverwrites"));
smalltalk.bind(smalltalk.MethodReferences, unescape("initializeResults"), "initializeResults", function MethodReferences__initializeResults(){
const self = this; self['@results']=smalltalk.Array.$$new();
return self;
}
, "initialize", unescape("initializeResults%0D%09%22%20Private%20-%20Initialize%20the%20results%20of%20the%20receiver.%20%22%0D%0D%09results%20%3A%3D%20Array%20new"));
smalltalk.bind(smalltalk.MethodReferences, unescape("reset"), "reset", function MethodReferences__reset(){
const self = this; self.results_(nil);
return self;
}
, "initialize", unescape("reset%0D%09%22%20Reset%20the%20receiver.%20%22%0D%0D%09self%20results%3A%20nil"));
smalltalk.bind(smalltalk.MethodReferences, unescape("rootClasses%3A"), "rootClasses_", function MethodReferences__rootClasses_(array){
const self = this; self['@rootClasses']=array;
return self;
}
, "accessing", unescape("rootClasses%3A%20array%0D%09%22%20Set%20the%20rootClasses%20of%20the%20receiver.%20%22%0D%0D%09rootClasses%20%3A%3D%20array"));
smalltalk.bind(smalltalk.MethodReferences, unescape("results"), "results", function MethodReferences__results(){
const self = this; if (((nil.isNil_(self['@results']))).valueOf()) {self.initializeResults()};
return self['@results'];
}
, "accessing", unescape("results%0D%09%22%20Return%20the%20results%20of%20the%20receiver.%20%22%0D%0D%09results%20isNil%20ifTrue%3A%20%5B%20self%20initializeResults%20%5D.%0D%09%5Eresults"));
smalltalk.bind(smalltalk.MethodReferences, unescape("results%3A"), "results_", function MethodReferences__results_(array){
const self = this; self['@results']=array;
return self;
}
, "accessing", unescape("results%3A%20array%0D%09%22%20Set%20the%20results%20of%20the%20receiver.%20%22%0D%0D%09results%20%3A%3D%20array"));
smalltalk.bind(smalltalk.MethodReferences, unescape("rootClasses"), "rootClasses", function MethodReferences__rootClasses(){
const self = this; if (((nil.isNil_(self['@rootClasses']))).valueOf()) {return smalltalk.Smalltalk.rootClasses()};
return self['@rootClasses'];
}
, "accessing", unescape("rootClasses%0D%09%22%20Return%20the%20rootClasses%20of%20the%20receiver.%20%22%0D%0D%09rootClasses%20isNil%20ifTrue%3A%20%5B%20%5ESmalltalk%20rootClasses%20%5D.%0D%09%5ErootClasses"));
smalltalk.bind(smalltalk.MethodReferences, unescape("allMethodsIn%3A"), "allMethodsIn_", function MethodReferences__allMethodsIn_(aCollection){
var result = nil;
const self = this; result=smalltalk.Array.$$new();
(self.rootClasses()).do_((function MethodReferences__(root){
return ((root.instanceClass()).withAllSubclasses()).do_((function MethodReferences__(cls){
cls.methodsDo_((function MethodReferences__(each){
return result.add_(each);
}
));
return (cls.$klass).methodsDo_((function MethodReferences__(each){
return result.add_(each);
}
));
}
));
}
));
return result;
}
, "accessing", unescape("allMethodsIn%3A%20aCollection%0D%09%22%20Return%20the%20methods%20defined%20by%20aCollection%20of%20classes.%20%22%0D%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%20Array%20new.%0D%09self%20rootClasses%20do%3A%20%5B%3Aroot%7C%0D%09%09root%20instanceClass%20withAllSubclasses%20do%3A%20%5B%3Acls%7C%0D%09%09%09cls%20methodsDo%3A%20%5B%3Aeach%7C%20result%20add%3A%20each%20%5D.%0D%09%09%09cls%20class%20methodsDo%3A%20%5B%3Aeach%7C%20result%20add%3A%20each%20%5D.%0D%09%09%5D%0D%09%5D.%0D%09%5Eresult"));
smalltalk.bind(smalltalk.MethodReferences, unescape("allMethods"), "allMethods", function MethodReferences__allMethods(){
const self = this; return self.triggerEvent_ifNotHandled_("needsMethods",(function MethodReferences__(){
return self.allMethodsIn_((self.rootClasses()));
}
));
}
, "accessing", unescape("allMethods%0D%09%22%20Return%20the%20methods%20to%20search%20the%20receiver.%20%22%0D%0D%09%5Eself%09triggerEvent%3A%20%23needsMethods%0D%09%09ifNotHandled%3A%20%5B%20self%20allMethodsIn%3A%20self%20rootClasses%20%5D"));
smalltalk.bind(smalltalk.MethodReferences, unescape("search%3Awith%3A"), "search_with_", function MethodReferences__search_with_(what,targetBlock){
var atoms = nil;
const self = this; atoms=self.allMethods();
self.triggerEvent_("searchStarted");
atoms=atoms.select_((function MethodReferences__(aMethod){
var source = nil;
source=targetBlock.value_(aMethod);
if ((((nil.isNil_(source)===false)).and_((function MethodReferences__(){
return (source.toString()).includes_(what);
}
))).valueOf()) {(self.results()).add_(aMethod);
self.triggerEvent_with_("found:",aMethod);
if ((self.hasActionForEvent_("found:pattern:in:")).valueOf()) {var stream = nil;
var args = nil;
stream=(source.toString()).stream();
args=smalltalk.Array.with_with_with_(aMethod,what,stream);
while(((function MethodReferences__(){
return (function MethodReferences__($1$){
$1$.upTo_(what);
return $1$.atEnd()}
)(stream);
}
)()).not()){self.triggerEvent_withArguments_("found:pattern:in:",args)};};
return true} else {return false};
}
));
self.triggerEvent_("searchFinished");
return atoms;
}
, "searching", unescape("search%3A%20what%20with%3A%20targetBlock%0D%09%22%20Find%20what%20on%20target%20of%20selected%20methods.%20%22%0D%0D%09%7C%20atoms%20%7C%0D%09atoms%20%3A%3D%20self%20allMethods.%0D%09self%20triggerEvent%3A%20%23searchStarted.%0D%09atoms%20%3A%3D%20atoms%20select%3A%20%5B%3AaMethod%7C%20%7C%20source%20%7C%0D%09%09source%20%3A%3D%20targetBlock%20value%3A%20aMethod.%0D%09%09%28source%20notNil%20and%3A%20%5Bsource%20toString%20includes%3A%20what%5D%29%20ifTrue%3A%20%5B%0D%09%09%09self%20results%20add%3A%20aMethod.%0D%09%09%09self%20triggerEvent%3A%20%23found%3A%20with%3A%20aMethod.%0D%09%09%09%28self%20hasActionForEvent%3A%20%23found%3Apattern%3Ain%3A%29%20ifTrue%3A%20%5B%20%7C%20stream%20args%20%7C%0D%09%09%09%09stream%20%3A%3D%20source%20toString%20stream.%0D%09%09%09%09args%20%3A%3D%20Array%20with%3A%20aMethod%20with%3A%20what%20with%3A%20stream.%0D%09%09%09%09%5B%20stream%20upTo%3A%20what%3B%20atEnd%20%5D%20whileFalse%3A%20%5B%0D%09%09%09%09%09self%20triggerEvent%3A%20%23found%3Apattern%3Ain%3A%20withArguments%3A%20args%0D%09%09%09%09%5D%0D%09%09%09%5D.%0D%09%09%09true%0D%09%09%5D%20ifFalse%3A%20%5B%20false%20%5D%0D%09%5D.%0D%09self%20triggerEvent%3A%20%23searchFinished.%0D%09%5Eatoms"));
smalltalk.bind(smalltalk.MethodReferences, unescape("search%3A"), "search_", function MethodReferences__search_(what){
const self = this; return self.search_with_(what,(function MethodReferences__(aMethod){
return aMethod.fn();
}
));
}
, "searching", unescape("search%3A%20what%0D%09%22%20Find%20references%20to%20what%20in%20selected%20methods.%0D%09Note%3A%20search%20is%20realized%20on%20javascript%20source%20of%20native%20code%20of%20methods.%0D%09%22%0D%0D%09%5Eself%20search%3A%20what%20with%3A%20%5B%3AaMethod%7C%20aMethod%20fn%20%5D"));
smalltalk.bind(smalltalk.MethodReferences, unescape("searchSource%3A"), "searchSource_", function MethodReferences__searchSource_(what){
const self = this; return self.search_with_(what,(function MethodReferences__(aMethod){
return aMethod.source();
}
));
}
, "searching", unescape("searchSource%3A%20what%0D%09%22%20Find%20what%20in%20source%20of%20selected%20methods.%20%22%0D%0D%09%5Eself%20search%3A%20what%20with%3A%20%5B%3AaMethod%7C%20aMethod%20source%20%5D"));
smalltalk.bind(smalltalk.MethodReferences, unescape("inlines"), "inlines", function MethodReferences__inlines(){
const self = this; return self.searchSource_(unescape("%7B%27"));
}
, "searching", unescape("inlines%0D%09%22%20Find%20javascript%20inlines%20in%20selected%20methods.%20%22%0D%0D%09%5Eself%20searchSource%3A%20%27%7B%27%27%27"));
smalltalk.bind(smalltalk.MethodReferences, unescape("searchCategory%3A"), "searchCategory_", function MethodReferences__searchCategory_(aName){
var found = nil;
const self = this; self.triggerEvent_("searchStarted");
found=(smalltalk.Exporter.$$new()).matchCategory_from_(aName,(self.rootClasses()));
found=(found.first())._comma((found.last()));
found.do_((function MethodReferences__(each){
(self.results()).add_(each);
return self.triggerEvent_with_("found:",each);
}
));
self.triggerEvent_("searchFinished");
return found;
}
, "searching", unescape("searchCategory%3A%20aName%0D%09%22%20Find%20%28source%29%20references%20to%20category%20starting%20from%20root%20classes.%20%22%0D%0D%09%7C%20found%20%7C%0D%09self%20triggerEvent%3A%20%23searchStarted.%0D%09found%20%3A%3D%20Exporter%20new%20matchCategory%3A%20aName%20from%3A%20self%20rootClasses.%0D%09found%20%3A%3D%20found%20first%20%2C%20found%20last.%0D%09found%20do%3A%20%5B%3Aeach%7C%0D%09%09%09self%20results%20add%3A%20each.%0D%09%09%09self%20triggerEvent%3A%20%23found%3A%20with%3A%20each.%0D%09%5D.%0D%09self%20triggerEvent%3A%20%23searchFinished.%0D%09%5Efound"));
smalltalk.bind(smalltalk.MethodReferences, unescape("sendPatternsOf%3A"), "sendPatternsOf_", function MethodReferences__sendPatternsOf_(aSelector){
const self = this; return smalltalk.Array.with_with_((self.normalSendPatternOf_(aSelector)),(self.superSendPatternOf_(aSelector)));
}
, "patterns", unescape("sendPatternsOf%3A%20aSelector%0D%09%22%20Private%20-%20Return%20the%20search%20patterns%20for%20references%20of%20aSelector.%20%22%0D%0D%09%5EArray%0D%09%09with%3A%20%28self%20normalSendPatternOf%3A%20aSelector%29%0D%09%09with%3A%20%28self%20superSendPatternOf%3A%20aSelector%29"));
smalltalk.bind(smalltalk.MethodReferences, unescape("normalSendPatternOf%3A"), "normalSendPatternOf_", function MethodReferences__normalSendPatternOf_(aSelector){
const self = this; return ("."._comma((aSelector.asSelector())))._comma(unescape("%28"));
}
, "patterns", unescape("normalSendPatternOf%3A%20aSelector%0D%09%22%20Private%20-%20Return%20the%20search%20pattern%20for%20normal%20senders%20of%20aSelector.%20%22%0D%0D%09%5E%27.%27%20%2CaSelector%20asSelector%20%2C%27%28%27"));
smalltalk.bind(smalltalk.MethodReferences, unescape("superSendPatternOf%3A"), "superSendPatternOf_", function MethodReferences__superSendPatternOf_(aSelector){
const self = this; return (unescape(".%24superclass.%24fn.prototype%5B%27")._comma((aSelector.asSelector())))._comma(unescape("%27%5D.apply%28"));
}
, "patterns", unescape("superSendPatternOf%3A%20aSelector%0D%09%22%20Private%20-%20Return%20the%20search%20pattern%20for%20senders%20%28to%20super%29%20of%20aSelector.%20%22%0D%0D%09%5E%27.%24superclass.%24fn.prototype%5B%27%27%27%20%2CaSelector%20asSelector%20%2C%27%27%27%5D.apply%28%27"));
smalltalk.bind(smalltalk.MethodReferences, unescape("instVarPatternOf%3A"), "instVarPatternOf_", function MethodReferences__instVarPatternOf_(instVarName){
const self = this; return (unescape("self%5B%27@")._comma((instVarName.asJavascriptName())))._comma(unescape("%27%5D"));
}
, "patterns", unescape("instVarPatternOf%3A%20instVarName%0D%09%22%20Private%20-%20Return%20the%20search%20pattern%20for%20instance%20variable%20access.%20%22%0D%0D%09%5E%27self%5B%27%27@%27%20%2CinstVarName%20asJavascriptName%20%2C%27%27%27%5D%27"));
smalltalk.bind(smalltalk.MethodReferences, unescape("globalPatternOf%3A"), "globalPatternOf_", function MethodReferences__globalPatternOf_(globalName){
const self = this; return "smalltalk."._comma(globalName);
}
, "patterns", unescape("globalPatternOf%3A%20globalName%0D%09%22%20Private%20-%20Return%20the%20search%20pattern%20for%20global%20variable%20access.%20%22%0D%0D%09%5E%27smalltalk.%27%20%2CglobalName"));
smalltalk.bind(smalltalk.MethodReferences, unescape("types"), "types", function MethodReferences__types(){
const self = this; return ["referencesOf:", "referencesOfGlobal:", "referencesOfClassVariable:", "referencesOfInstanceVariable:", "findClasses:", "findMessages:", "searchCategory:", "search:", "searchSource:", "globalReferences", "missingGlobals", "inlines", "methodOverwrites", "variableOverwrites"];
}
, "types", unescape("types%0D%09%22%20Private%20-%20Return%20the%20types%20of%20search%20implemented%20by%20the%20receiver.%20%22%0D%0D%09%5E%23%28%09%23referencesOf%3A%20%23referencesOfGlobal%3A%0D%09%09%23referencesOfClassVariable%3A%0D%09%09%23referencesOfInstanceVariable%3A%0D%09%09%23findClasses%3A%20%23findMessages%3A%0D%09%09%23searchCategory%3A%0D%09%09%23search%3A%20%23searchSource%3A%0D%09%09%23globalReferences%20%23missingGlobals%20%23inlines%0D%09%09%23methodOverwrites%20%23variableOverwrites%0D%09%29"));
smalltalk.bind(smalltalk.MethodReferences, unescape("search%3Atype%3A"), "search_type_", function MethodReferences__search_type_(aName,typeSelector){
var selector = nil;
const self = this; selector=(typeSelector.includes_(":")).ifTrue_ifFalse_((function MethodReferences__(){
return (typeSelector.upTo_(":"))._comma(":");
}
),(function MethodReferences__(){
return typeSelector.upTo_(" ");
}
));
if (((smalltalk.responds_to_(self,selector))).valueOf()) {return self.perform_with_(selector,(aName.trimBlanks()))} else {return nil};
}
, "searching", unescape("search%3A%20aName%20type%3A%20typeSelector%0D%09%22%20Return%20the%20result%20of%20searching%20for%20aName%20as%20a%20search%20of%20specified%20type%20%28or%20nil%29.%20%22%0D%0D%09%7C%20selector%20%7C%0D%09selector%20%3A%3D%20%28typeSelector%20includes%3A%20%24%3A%29%0D%09ifTrue%3A%20%5B%20%28typeSelector%20upTo%3A%20%24%3A%29%20%2C%24%3A%20%5D%0D%09ifFalse%3A%20%5B%20typeSelector%20upTo%3A%20%24%20%20%5D.%0D%09%5E%28self%20respondsTo%3A%20selector%29%20ifTrue%3A%20%5B%0D%09%09self%20perform%3A%20selector%20with%3A%20aName%20trimBlanks%0D%09%5D"));
smalltalk.bind(smalltalk.MethodReferences, unescape("sendersOf%3A"), "sendersOf_", function MethodReferences__sendersOf_(aSelector){
const self = this; return (self.sendPatternsOf_(aSelector)).inject_into_((smalltalk.Array.$$new()),(function MethodReferences__(total,each){
return total._comma((self.search_(each)));
}
));
}
, "searching", unescape("sendersOf%3A%20aSelector%0D%09%22%20Find%20the%20requested%20elements%20from%20root%20classes.%20%22%0D%0D%09%5E%28self%20sendPatternsOf%3A%20aSelector%29%20inject%3A%20Array%20new%20into%3A%20%5B%3Atotal%20%3Aeach%7C%0D%09%09total%20%2C%20%28self%20search%3A%20each%29%0D%09%5D"));
smalltalk.bind(smalltalk.MethodReferences, unescape("referencesOf%3A"), "referencesOf_", function MethodReferences__referencesOf_(aSelector){
const self = this; (function MethodReferences__($1$){
$1$.add_(((unescape("---%20Implementors%20of%20%23")._comma(aSelector))._comma(unescape("%20---"))));
$1$.addAll_((self.implementorsOf_(aSelector)));
return $1$.add_(((unescape("---%20Senders%20of%20%23")._comma(aSelector))._comma(unescape("%20---"))))}
)(self.results());
self.sendersOf_(aSelector);
return self['@results'];
}
, "searching", unescape("referencesOf%3A%20aSelector%0D%09%22%20Find%20the%20references%20to%20message%20%28aSelector%29.%20%22%0D%0D%09self%20results%0D%09%09add%3A%20%27---%20Implementors%20of%20%23%27%20%2CaSelector%20%2C%27%20---%27%3B%0D%09%09addAll%3A%20%28self%20implementorsOf%3A%20aSelector%29%3B%0D%09%09add%3A%20%27---%20Senders%20of%20%23%27%20%2CaSelector%20%2C%27%20---%27.%0D%09self%20sendersOf%3A%20aSelector.%0D%09%5Eresults"));
smalltalk.bind(smalltalk.MethodReferences, unescape("referencesOfInstanceVariable%3A"), "referencesOfInstanceVariable_", function MethodReferences__referencesOfInstanceVariable_(instVarName){
const self = this; return self.search_((self.instVarPatternOf_(instVarName)));
}
, "searching", unescape("referencesOfInstanceVariable%3A%20instVarName%0D%09%22%20Find%20the%20requested%20elements%20from%20root%20classes.%20%22%0D%0D%09%5Eself%20search%3A%20%28self%20instVarPatternOf%3A%20instVarName%29"));
smalltalk.bind(smalltalk.MethodReferences, unescape("settersOfInstanceVariable%3A"), "settersOfInstanceVariable_", function MethodReferences__settersOfInstanceVariable_(instVarName){
const self = this; return self.search_(((self.instVarPatternOf_(instVarName))._comma(unescape("%3D"))));
}
, "searching", unescape("settersOfInstanceVariable%3A%20instVarName%0D%09%22%20Find%20the%20requested%20elements%20from%20root%20classes.%20%22%0D%0D%09%5Eself%20search%3A%20%28self%20instVarPatternOf%3A%20instVarName%29%20%2C%27%3D%27"));
smalltalk.bind(smalltalk.MethodReferences, unescape("referencesOfGlobal%3A"), "referencesOfGlobal_", function MethodReferences__referencesOfGlobal_(globalName){
const self = this; return self.search_((self.globalPatternOf_(globalName)));
}
, "searching", unescape("referencesOfGlobal%3A%20globalName%0D%09%22%20Find%20the%20requested%20elements%20from%20root%20classes.%20%22%0D%0D%09%5Eself%20search%3A%20%28self%20globalPatternOf%3A%20globalName%29"));
smalltalk.bind(smalltalk.MethodReferences, unescape("searchGlobalReferences"), "searchGlobalReferences", function MethodReferences__searchGlobalReferences(){
const self = this; return self.search_((self.globalPatternOf_("")));
}
, "searching", unescape("searchGlobalReferences%0D%09%22%20Find%20the%20requested%20elements%20from%20root%20classes.%20%22%0D%0D%09%5Eself%20search%3A%20%28self%20globalPatternOf%3A%20%27%27%29"));
smalltalk.bind(smalltalk.MethodReferences, unescape("settersOfGlobalVariable%3A"), "settersOfGlobalVariable_", function MethodReferences__settersOfGlobalVariable_(globalName){
const self = this; return self.search_(((self.globalPatternOf_(globalName))._comma(unescape("%3D"))));
}
, "searching", unescape("settersOfGlobalVariable%3A%20globalName%0D%09%22%20Find%20the%20requested%20elements%20from%20root%20classes.%20%22%0D%0D%09%5Eself%20search%3A%20%28self%20globalPatternOf%3A%20globalName%29%20%2C%27%3D%27"));
smalltalk.bind(smalltalk.MethodReferences, unescape("referencesOfClassVariable%3A"), "referencesOfClassVariable_", function MethodReferences__referencesOfClassVariable_(classVarName){
const self = this; return self.search_(((unescape(".classVariableAt_%28%22")._comma(classVarName))._comma(unescape("%22%29"))));
}
, "searching", unescape("referencesOfClassVariable%3A%20classVarName%0D%09%22%20Find%20the%20requested%20elements%20from%20root%20classes.%20%22%0D%0D%09%5Eself%20search%3A%20%27.classVariableAt_%28%22%27%2CclassVarName%2C%27%22%29%27"));
smalltalk.bind(smalltalk.MethodReferences, unescape("settersOfClassVariable%3A"), "settersOfClassVariable_", function MethodReferences__settersOfClassVariable_(classVarName){
const self = this; return self.search_(((unescape(".classVariableAt_put_%28%22")._comma(classVarName))._comma(unescape("%22%2C"))));
}
, "searching", unescape("settersOfClassVariable%3A%20classVarName%0D%09%22%20Find%20the%20requested%20elements%20from%20root%20classes.%20%22%0D%0D%09%5Eself%20search%3A%20%27.classVariableAt_put_%28%22%27%2CclassVarName%2C%27%22%2C%27"));
smalltalk.bind(smalltalk.MethodReferences, unescape("globalReferences"), "globalReferences", function MethodReferences__globalReferences(){
var pool = nil;
const self = this; pool=(self.$klass).globals();
((pool.keys()).sorted()).do_((function MethodReferences__(aName){
return (function MethodReferences__($1$){
$1$.add_(((unescape("---%20References%20to%3A%20")._comma(aName))._comma(unescape("%20---"))));
return $1$.addAll_((pool.at_(aName)))}
)(self.results());
}
));
return self['@results'];
}
, "searching", unescape("globalReferences%0D%09%22%20Find%20the%20references%20to%20globals.%20%22%0D%0D%09%7C%20pool%20%7C%0D%09pool%20%3A%3D%20self%20class%20globals.%0D%09pool%20keys%20sorted%20do%3A%20%5B%3AaName%7C%0D%09%09self%20results%0D%09%09%09add%3A%20%27---%20References%20to%3A%20%27%2CaName%2C%27%20---%27%3B%0D%09%09%09addAll%3A%20%28pool%20at%3A%20aName%29%0D%09%5D.%0D%09%5Eresults"));
smalltalk.bind(smalltalk.MethodReferences, unescape("missingGlobals"), "missingGlobals", function MethodReferences__missingGlobals(){
var pool = nil;
const self = this; pool=(self.$klass).globals();
(((pool.keys()).sorted()).reject_((function MethodReferences__(key){
return smalltalk.Smalltalk.includesKey_(key);
}
))).do_((function MethodReferences__(aName){
return (function MethodReferences__($1$){
$1$.add_(((unescape("---%20Missing%20global%3A%20")._comma(aName))._comma(unescape("%20---"))));
return $1$.addAll_((pool.at_(aName)))}
)(self.results());
}
));
if (((self.results()).isEmpty()).valueOf()) {(self.results()).add_(unescape("---%20All%20global%20references%20are%20bound%20to%20Smalltalk%20---"))};
return self['@results'];
}
, "searching", unescape("missingGlobals%0D%09%22%20Find%20the%20references%20to%20missing%20globals.%20%22%0D%0D%09%7C%20pool%20%7C%0D%09pool%20%3A%3D%20self%20class%20globals.%0D%09%28pool%20keys%20sorted%0D%09%09reject%3A%20%5B%3Akey%7C%20%28Smalltalk%20includesKey%3A%20key%29%20%5D%29%0D%09%09do%3A%20%5B%3AaName%7C%0D%09%09%09self%20results%0D%09%09%09%09add%3A%20%27---%20Missing%20global%3A%20%27%2CaName%2C%27%20---%27%3B%0D%09%09%09%09addAll%3A%20%28pool%20at%3A%20aName%29%0D%09%09%5D.%0D%09self%20results%20isEmpty%20ifTrue%3A%20%5B%0D%09%09self%20results%20add%3A%20%27---%20All%20global%20references%20are%20bound%20to%20Smalltalk%20---%27%0D%09%5D.%0D%09%5Eresults"));
smalltalk.bind(smalltalk.MethodReferences, unescape("implementorsOf%3A"), "implementorsOf_", function MethodReferences__implementorsOf_(aSelector){
const self = this; return (smalltalk.Smalltalk.current()).implementorsOf_(aSelector);
}
, "private", unescape("implementorsOf%3A%20aSelector%0D%09%22%20Private%20-%20Return%20the%20implementors%20of%20aSelector.%20%22%0D%0D%09%5ESmalltalk%20current%20implementorsOf%3A%20aSelector"));
smalltalk.bind(smalltalk.MethodReferences, unescape("messagesOf%3A"), "messagesOf_", function MethodReferences__messagesOf_(aCompiledMethod){
var stream = nil;
var selectors = nil;
var string = nil;
const self = this; stream=((aCompiledMethod.fn()).toString()).stream();
stream.upTo_(unescape("%7B"));
selectors=smalltalk.Set.$$new();
while((stream.atEnd()).not()){selectors.add_(((((function MethodReferences__($1$){
$1$.upTo_(".");
return $1$.upTo_(unescape("%28"))}
)(stream).asArrayOfSubstringsSeparatedBy_(".")).last()).asStSelector()))};;
selectors.remove_ifAbsent_("",(function MethodReferences__(){
return nil;
}
));
return ((selectors.asArray()).select_((function MethodReferences__(each){
return each.isLiteral();
}
))).sorted();
}
, "accessing", unescape("messagesOf%3A%20aCompiledMethod%0D%09%22%20Return%20all%20the%20messages%20that%20can%20be%20sent%20during%20execution%20of%20aCompiledMethod.%20%22%0D%0D%09%7C%20stream%20selectors%20string%20%7C%0D%09stream%20%3A%3D%20aCompiledMethod%20fn%20toString%20stream.%0D%09stream%20upTo%3A%20%24%7B.%0D%09selectors%20%3A%3D%20Set%20new.%0D%09%5Bstream%20atEnd%5D%20whileFalse%3A%20%5B%0D%09%09selectors%20add%3A%20%28%28%0D%09%09%09stream%20upTo%3A%20%24.%3BupTo%3A%20%24%28%0D%09%09%09%29%20asArrayOfSubstringsSeparatedBy%3A%20%24.%29%0D%09%09%09last%20asStSelector%0D%09%5D.%0D%09selectors%20remove%3A%20%27%27%20ifAbsent%3A%20%5B%5D.%0D%09%5E%28selectors%20asArray%20select%3A%20%5B%3Aeach%7C%20each%20isLiteral%20%5D%29%20sorted"));
smalltalk.bind(smalltalk.MethodReferences, unescape("globalReferencesOf%3A"), "globalReferencesOf_", function MethodReferences__globalReferencesOf_(aCompiledMethod){
var result = nil;
const self = this; result=smalltalk.Set.$$new();
return (result.asArray()).sorted();
}
, "accessing", unescape("globalReferencesOf%3A%20aCompiledMethod%0D%09%22%20Return%20all%20the%20global%20reference%20names%20in%20aCompiledMethod.%20%22%0D%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%20Set%20new.%0D%22%0D%09self%0D%09%09when%3A%20%23needsMethods%20do%3A%20%5B%20Array%20with%3A%20aCompiledMethod%20%5D%3B%0D%09%09when%3A%20%23found%3Apattern%3Ain%3A%20do%3A%20%5B%3Amth%20%3Amask%20%3Astream%7C%20%7C%20global%20%7C%0D%09%09%09global%20%3A%3D%20SmalltalkParser%20new%20globalNameParser%20parse%3A%20stream.%0D%09%09%09global%20isParseFailure%20ifFalse%3A%20%5B%20result%20add%3A%20global%20%5D.%0D%09%09%5D%3B%0D%09%09yourself.%0D%09self%20searchGlobalReferences.%0D%22%0D%09%5Eresult%20asArray%20sorted"));
smalltalk.bind(smalltalk.MethodReferences, unescape("findClasses%3A"), "findClasses_", function MethodReferences__findClasses_(what){
var keys = nil;
var system = nil;
const self = this; if ((what.isString()).valueOf()) {return self.findClasses_(((what.trimBlanks()).asArrayOfSubstrings()))};
self.triggerEvent_("searchStarted");
keys=what.collect_((function MethodReferences__(each){
return (each.asString()).asLowercase();
}
));
system=smalltalk.Smalltalk.current();
if ((keys.notEmpty()).valueOf()) {(system.classes()).do_((function MethodReferences__(aClass){
var key = nil;
key=(aClass.name()).asLowercase();
if (((nil.isNil_(keys.detect_ifNone_((function MethodReferences__(one){
return key.includes_(one);
}
),(function MethodReferences__(){
return nil;
}
)))===false)).valueOf()) {(self.results()).add_(aClass);
return self.triggerEvent_with_("found:",aClass)} else {return nil};
}
))};
self.triggerEvent_("searchFinished");
return self.results();
}
, "searching", unescape("findClasses%3A%20what%0D%09%22%20Find%20classes%20matching%20what.%20%22%0D%0D%09%7C%20keys%20system%20%7C%0D%09what%20isString%20ifTrue%3A%20%5B%0D%09%09%5Eself%20findClasses%3A%20what%20trimBlanks%20asArrayOfSubstrings%0D%09%5D.%0D%09self%20triggerEvent%3A%20%23searchStarted.%0D%09keys%20%3A%3D%20what%20collect%3A%20%5B%3Aeach%7C%20each%20asString%20asLowercase%20%5D.%0D%09system%20%3A%3D%20Smalltalk%20current.%0D%09keys%20notEmpty%20ifTrue%3A%20%5B%0D%09%09system%20classes%20do%3A%20%5B%3AaClass%7C%20%7C%20key%20%7C%0D%09%09%09key%20%3A%3D%20aClass%20name%20asLowercase.%0D%09%09%09%28keys%20detect%3A%20%5B%3Aone%7C%20key%20includes%3A%20one%20%5D%20ifNone%3A%20%5B%5D%29%20notNil%20ifTrue%3A%20%5B%0D%09%09%09%09self%20results%20add%3A%20aClass.%0D%09%09%09%09self%20triggerEvent%3A%20%23found%3A%20with%3A%20aClass.%0D%09%09%09%5D%0D%09%09%5D.%0D%09%5D.%0D%09self%20triggerEvent%3A%20%23searchFinished.%0D%09%5Eself%20results"));
smalltalk.bind(smalltalk.MethodReferences, unescape("methodOverwritesOf%3A"), "methodOverwritesOf_", function MethodReferences__methodOverwritesOf_(aClass){
var map = nil;
var subclasses = nil;
const self = this; subclasses=aClass.allSubclasses();
map=smalltalk.PoolDictionary.$$new();
if ((subclasses.isEmpty()).valueOf()) {return map};
aClass.methodsDo_((function MethodReferences__(mth){
var selector = nil;
selector=mth.selector();
map.at_put_(selector,(smalltalk.Array.with_(mth)));
return subclasses.do_((function MethodReferences__(each){
if (((each.selectors()).includes_(selector)).valueOf()) {return (map.at_(selector)).add_((each._gt_gt(selector)))} else {return nil};
}
));
}
));
subclasses.do_((function MethodReferences__(each){
return (self.methodOverwritesOf_(each)).keysAndValuesDo_((function MethodReferences__(key,value){
return (map.at_ifAbsentPut_(key,(function MethodReferences__(){
return smalltalk.Array.$$new();
}
))).addAll_(value);
}
));
}
));
(((map.keys()).asArray()).select_((function MethodReferences__(key){
return ((map.at_(key)).size())._lt_eq((1));
}
))).do_((function MethodReferences__(key){
return map.removeKey_(key);
}
));
return map;
}
, "private", unescape("methodOverwritesOf%3A%20aClass%0D%09%22%20Private%20-%20Find%20the%20methods%20subimplemented%20by%20subclasses%20of%20aClass.%20%22%0D%0D%09%7C%20map%20subclasses%20%7C%0D%09subclasses%20%3A%3D%20aClass%20allSubclasses.%0D%09map%20%3A%3D%20PoolDictionary%20new.%0D%09subclasses%20isEmpty%20ifTrue%3A%20%5B%20%5Emap%20%5D.%0D%09aClass%20methodsDo%3A%20%5B%3Amth%7C%20%7C%20selector%20%7C%0D%09%09selector%20%3A%3D%20mth%20selector.%0D%09%09map%20at%3A%20selector%20put%3A%20%28Array%20with%3A%20mth%29.%0D%09%09subclasses%20do%3A%20%5B%3Aeach%7C%0D%09%09%09%28each%20selectors%20includes%3A%20selector%29%20ifTrue%3A%20%5B%0D%09%09%09%09%28map%20at%3A%20selector%29%20add%3A%20each%20%3E%3E%20selector%0D%09%09%09%5D.%0D%09%09%5D.%0D%09%5D.%0D%09subclasses%20do%3A%20%5B%3Aeach%7C%0D%09%09%28self%20methodOverwritesOf%3A%20each%29%20keysAndValuesDo%3A%20%5B%3Akey%20%3Avalue%7C%0D%09%09%09%28map%20at%3A%20key%20ifAbsentPut%3A%20%5BArray%20new%5D%29%20addAll%3A%20value%0D%09%09%5D.%0D%09%5D.%0D%09%28map%20keys%20asArray%0D%09%09select%3A%20%5B%3Akey%7C%20%28map%20at%3A%20key%29%20size%20%3C%3D%201%20%5D%0D%09%09%29%20do%3A%20%5B%3Akey%7C%20map%20removeKey%3A%20key%20%5D.%0D%09%5Emap"));
smalltalk.bind(smalltalk.MethodReferences, unescape("addMethodOverwrites%3A"), "addMethodOverwrites_", function MethodReferences__addMethodOverwrites_(map){
const self = this; map.associationsDo_((function MethodReferences__(assoc){
return (assoc.value()).do_((function MethodReferences__(each){
self.triggerEvent_with_("found:",each);
return (self.results()).add_(each);
}
));
}
));
return self;
}
, "private", unescape("addMethodOverwrites%3A%20map%0D%09%22%20Private%20-%20Register%20the%20methods%20overwrites%20in%20map.%20%22%0D%0D%09map%20associationsDo%3A%20%5B%3Aassoc%7C%0D%09%09assoc%20value%20do%3A%20%5B%3Aeach%7C%0D%09%09%09self%20triggerEvent%3A%20%23found%3A%20with%3A%20each.%0D%09%09%09self%20results%20add%3A%20each.%0D%09%09%5D%0D%09%5D"));
smalltalk.bind(smalltalk.MethodReferences, unescape("methodOverwrites"), "methodOverwrites", function MethodReferences__methodOverwrites(){
const self = this; self.triggerEvent_("searchStarted");
(smalltalk.Smalltalk.rootClasses()).do_((function MethodReferences__(aClass){
self.addMethodOverwrites_((self.methodOverwritesOf_(aClass)));
return self.addMethodOverwrites_((self.methodOverwritesOf_((aClass.$klass))));
}
));
self.triggerEvent_("searchFinished");
return self.results();
}
, "searching", unescape("methodOverwrites%0D%09%22%20Find%20the%20methods%20that%20are%20implemented/overwritten%20by%20subclasses.%20%22%0D%0D%09self%20triggerEvent%3A%20%23searchStarted.%0D%09Smalltalk%20rootClasses%20do%3A%20%5B%3AaClass%7C%0D%09%09self%20addMethodOverwrites%3A%20%28self%20methodOverwritesOf%3A%20aClass%29.%0D%09%09self%20addMethodOverwrites%3A%20%28self%20methodOverwritesOf%3A%20aClass%20class%29.%0D%09%5D.%0D%09self%20triggerEvent%3A%20%23searchFinished.%0D%09%5Eself%20results"));
smalltalk.bind(smalltalk.MethodReferences, unescape("hasArgumentOverwrites%3Ain%3A"), "hasArgumentOverwrites_in_", function MethodReferences__hasArgumentOverwrites_in_(names,stream){
var args = nil;
const self = this; var $early={name:"stReturn"};
try {
args=(function MethodReferences__($1$){
$1$.upTo_(unescape("%28"));
return $1$.upTo_(unescape("%29"))}
)(stream).asArrayOfSubstringsSeparatedBy_(unescape("%2C"));
args.do_((function MethodReferences__(each){
if ((names.includes_(each)).valueOf()) {$early.result=true; throw ($early)} else {return nil};
}
));
return false;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "private", unescape("hasArgumentOverwrites%3A%20names%20in%3A%20stream%0D%09%22%20Private%20-%20Returns%20true%20if%20stream%20of%20code%20has%20argument%20name%20conflicts.%20%22%0D%0D%09%7C%20args%20%7C%0D%09args%20%3A%3D%20%28stream%20upTo%3A%20%24%28%3B%20upTo%3A%20%24%29%29%20asArrayOfSubstringsSeparatedBy%3A%20%24%2C.%0D%09args%20do%3A%20%5B%3Aeach%7C%0D%09%09%28names%20includes%3A%20each%29%20ifTrue%3A%20%5B%20%5Etrue%20%5D.%0D%09%5D.%0D%09%5Efalse"));
smalltalk.bind(smalltalk.MethodReferences, unescape("hasLocalOverwrites%3Ain%3A"), "hasLocalOverwrites_in_", function MethodReferences__hasLocalOverwrites_in_(names,stream){
var candidate = nil;
const self = this; var $early={name:"stReturn"};
try {
while((stream.atEnd()).not()){candidate=(function MethodReferences__($1$){
$1$.upTo_("var ");
return $1$.upTo_(unescape("%3D"))}
)(stream).trimBlanks();
if ((names.includes_(candidate)).valueOf()) {$early.result=true; throw ($early)}};;
return false;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "private", unescape("hasLocalOverwrites%3A%20names%20in%3A%20stream%0D%09%22%20Private%20-%20Returns%20true%20if%20stream%20of%20code%20has%20local%20name%20conflicts.%20%22%0D%0D%09%7C%20candidate%20%7C%0D%09%5Bstream%20atEnd%5D%20whileFalse%3A%20%5B%0D%09%09candidate%20%3A%3D%20%28stream%20upTo%3A%20%27var%20%27%3B%20upTo%3A%20%24%3D%29%20trimBlanks.%0D%09%09%28names%20includes%3A%20candidate%29%20ifTrue%3A%20%5B%0D%09%09%09%5Etrue%0D%09%09%5D.%0D%09%5D.%0D%09%5Efalse"));
smalltalk.bind(smalltalk.MethodReferences, unescape("addVariableOverwrites%3Ain%3A"), "addVariableOverwrites_in_", function MethodReferences__addVariableOverwrites_in_(names,mth){
var stream = nil;
const self = this; stream=((mth.fn()).toString()).stream();
if (((self.hasArgumentOverwrites_in_(names,stream)).or_((function MethodReferences__(){
return self.hasLocalOverwrites_in_(names,stream);
}
))).valueOf()) {self.triggerEvent_with_("found:",mth);
(self.results()).add_(mth)};
return self;
}
, "private", unescape("addVariableOverwrites%3A%20names%20in%3A%20mth%0D%09%22%20Private%20-%20Register%20the%20methods%20that%20has%20name%20overwrites.%20%22%0D%0D%09%7C%20stream%20%7C%0D%09stream%20%3A%3D%20mth%20fn%20toString%20stream.%0D%09%28%28self%20hasArgumentOverwrites%3A%20names%20in%3A%20stream%29%0D%09or%3A%20%5B%20self%20hasLocalOverwrites%3A%20names%20in%3A%20stream%20%5D%29%0D%09ifTrue%3A%20%5B%0D%09%09self%20triggerEvent%3A%20%23found%3A%20with%3A%20mth.%0D%09%09self%20results%20add%3A%20mth.%0D%09%5D"));
smalltalk.bind(smalltalk.MethodReferences, unescape("variableOverwrites"), "variableOverwrites", function MethodReferences__variableOverwrites(){
const self = this; self.triggerEvent_("searchStarted");
((smalltalk.Smalltalk.current()).classes()).do_((function MethodReferences__(aClass){
var names = nil;
names=aClass.allInstVarNames();
aClass.methodsDo_((function MethodReferences__(mth){
return self.addVariableOverwrites_in_(names,mth);
}
));
names=(aClass.$klass).allInstVarNames();
return (aClass.$klass).methodsDo_((function MethodReferences__(mth){
return self.addVariableOverwrites_in_(names,mth);
}
));
}
));
self.triggerEvent_("searchFinished");
return self.results();
}
, "searching", unescape("variableOverwrites%0D%09%22%20Find%20the%20methods%20that%20has%20potential%20overwrite%20of%20variable%20names.%20%22%0D%0D%09self%20triggerEvent%3A%20%23searchStarted.%0D%09Smalltalk%20current%20classes%20do%3A%20%5B%3AaClass%7C%20%7C%20names%20%7C%0D%09%09names%20%3A%3D%20aClass%20allInstVarNames.%0D%09%09aClass%20methodsDo%3A%20%5B%3Amth%7C%0D%09%09%09self%20addVariableOverwrites%3A%20names%20in%3A%20mth.%0D%09%09%5D.%0D%09%09names%20%3A%3D%20aClass%20class%20allInstVarNames.%0D%09%09aClass%20class%20methodsDo%3A%20%5B%3Amth%7C%0D%09%09%09self%20addVariableOverwrites%3A%20names%20in%3A%20mth.%0D%09%09%5D.%0D%09%5D.%0D%09self%20triggerEvent%3A%20%23searchFinished.%0D%09%5Eself%20results"));
smalltalk.bind(smalltalk.MethodReferences.$klass, unescape("findMessages%3A"), "findMessages_", function MethodReferences_class__findMessages_(what){
const self = this; return (self.$$new()).findMessages_(what);
}
, "testing", unescape("findMessages%3A%20what%0D%09%22%20Find%20messages%20in%20the%20system%20matching%20what.%20%22%0D%0D%09%5Eself%20new%20findMessages%3A%20what"));
smalltalk.bind(smalltalk.MethodReferences, unescape("findMessages%3A"), "findMessages_", function MethodReferences__findMessages_(what){
var keys = nil;
const self = this; if ((what.isString()).valueOf()) {return self.findMessages_(((what.trimBlanks()).asArrayOfSubstrings()))};
self.triggerEvent_("searchStarted");
keys=what.collect_((function MethodReferences__(each){
return each.asString();
}
));
if ((keys.notEmpty()).valueOf()) {var all = nil;
var collect = nil;
all=self.allMethods();
all.do_((function MethodReferences__(mth){
var current = nil;
current=mth.selector();
if (((nil.isNil_(keys.detect_ifNone_((function MethodReferences__(one){
return current.includes_(one);
}
),(function MethodReferences__(){
return nil;
}
)))===false)).valueOf()) {(self.results()).add_(mth);
return self.triggerEvent_with_("found:",mth)} else {return nil};
}
))};
self.triggerEvent_("searchFinished");
return self.results();
}
, "searching", unescape("findMessages%3A%20what%0D%09%22%20Find%20messages%20matching%20what.%20%22%0D%0D%09%7C%20keys%20%7C%0D%09what%20isString%20ifTrue%3A%20%5B%0D%09%09%5Eself%20findMessages%3A%20what%20trimBlanks%20asArrayOfSubstrings%0D%09%5D.%0D%09self%20triggerEvent%3A%20%23searchStarted.%0D%09keys%20%3A%3D%20what%20collect%3A%20%5B%3Aeach%7C%20each%20asString%20%22asLowercase%22%20%5D.%0D%09keys%20notEmpty%20ifTrue%3A%20%5B%20%7C%20all%20collect%20%7C%0D%09%09all%20%3A%3D%20self%20allMethods.%0D%09%09all%20do%3A%20%5B%3Amth%7C%20%7C%20current%20%7C%0D%09%09%09current%20%3A%3D%20mth%20selector%20%22asLowercase%22.%0D%09%09%09%28keys%20detect%3A%20%5B%3Aone%7C%20current%20includes%3A%20one%20%5D%20ifNone%3A%20%5B%5D%29%20notNil%20ifTrue%3A%20%5B%0D%09%09%09%09self%20results%20add%3A%20mth.%0D%09%09%09%09self%20triggerEvent%3A%20%23found%3A%20with%3A%20mth.%0D%09%09%09%5D.%0D%09%09%5D.%0D%09%5D.%0D%09self%20triggerEvent%3A%20%23searchFinished.%0D%09%5Eself%20results"));
