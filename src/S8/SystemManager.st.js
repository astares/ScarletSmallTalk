smalltalk.addClass("SystemManager", smalltalk.EventManager, [], 'Snapshot');
smalltalk.SystemManager.$classVariableNames=("Current");
smalltalk.bind(smalltalk.SystemManager.$klass, unescape("constructEventsTriggered"), "constructEventsTriggered", function SystemManager_class__constructEventsTriggered(){
const self = this; return (smalltalk.superImplementor(smalltalk.SystemManager.$klass,'constructEventsTriggered').apply(self, []))._comma(["aboutToBind:to:", "methodBound:to:", "aboutToRemove:from:", "methodRemoved:from:", "aboutToChange:to:", "aboutToCreateClass:with:", "classChanged:", "classShapeChanged:", "object:at:notFoundIn:", "log:", "memoryWarning:"]);
}
, "events", unescape("constructEventsTriggered%0D%09%22%20Private%20-%20Return%20the%20events%20managed%20by%20instances%20of%20the%20receiver.%20%22%0D%0D%09%5Esuper%20constructEventsTriggered%20%2C%23%28%0D%09%09%23aboutToBind%3Ato%3A%0D%09%09%23methodBound%3Ato%3A%0D%09%09%23aboutToRemove%3Afrom%3A%0D%09%09%23methodRemoved%3Afrom%3A%0D%09%09%23aboutToChange%3Ato%3A%0D%09%09%23aboutToCreateClass%3Awith%3A%0D%09%09%23classChanged%3A%0D%09%09%23classShapeChanged%3A%0D%09%09%23object%3Aat%3AnotFoundIn%3A%0D%09%09%23log%3A%0D%09%09%23memoryWarning%3A%0D%09%29"));
smalltalk.bind(smalltalk.SystemManager.$klass, unescape("currentOrNil"), "currentOrNil", function SystemManager_class__currentOrNil(){
const self = this; return self.classVariableAt_ifAbsent_("Current",(function SystemManager_class__(){
return nil;
}
));
}
, "singleton", unescape("currentOrNil%0D%09%22%20Return%20the%20current%20instance%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20classVariableAt%3A%20%23Current%20ifAbsent%3A%20%5B%20nil%20%5D"));
smalltalk.bind(smalltalk.SystemManager.$klass, unescape("current"), "current", function SystemManager_class__current(){
const self = this; if (((nil.isNil_(smalltalk.SystemManager.classVariableAt_("Current")))).valueOf()) {self.current_((self.$$new()))};
return smalltalk.SystemManager.classVariableAt_("Current");
}
, "singleton", unescape("current%0D%09%22%20Return%20the%20current%20instance%20of%20the%20receiver.%20%22%0D%0D%09Current%20isNil%20ifTrue%3A%20%5B%20self%20current%3A%20self%20new%20%5D.%0D%09%5ECurrent"));
smalltalk.bind(smalltalk.SystemManager.$klass, unescape("current%3A"), "current_", function SystemManager_class__current_(aSystemManager){
const self = this; smalltalk.SystemManager.classVariableAt_put_("Current",aSystemManager);
aSystemManager.install();
return self;
}
, "singleton", unescape("current%3A%20aSystemManager%0D%09%22%20Set%20the%20current%20source%20manager%20of%20the%20system.%20%22%0D%0D%09Current%20%3A%3D%20aSystemManager.%0D%09aSystemManager%20install."));
smalltalk.bind(smalltalk.SystemManager.$klass, unescape("log%3A"), "log_", function SystemManager_class__log_(aString){
const self = this; if (((nil.isNil_(smalltalk.SystemManager.classVariableAt_("Current"))===false)).valueOf()) {smalltalk.SystemManager.classVariableAt_("Current").log_(aString)};
return self;
}
, "log", unescape("log%3A%20aString%0D%09%22%20Log%20aString%20onto%20loggin%20stream.%20%22%0D%0D%09Current%20notNil%20ifTrue%3A%20%5B%20Current%20log%3A%20aString%20%5D"));
smalltalk.bind(smalltalk.SystemManager.$klass, unescape("memoryWarning%3A"), "memoryWarning_", function SystemManager_class__memoryWarning_(anArgument){
const self = this; if (((nil.isNil_(smalltalk.SystemManager.classVariableAt_("Current"))===false)).valueOf()) {smalltalk.SystemManager.classVariableAt_("Current").memoryWarning_(anArgument)};
return self;
}
, "memory", unescape("memoryWarning%3A%20anArgument%0D%09%22%20Trigger%20a%20memory%20warning%20event.%20%22%0D%0D%09Current%20notNil%20ifTrue%3A%20%5B%20Current%20memoryWarning%3A%20anArgument%20%5D"));
smalltalk.bind(smalltalk.SystemManager, unescape("install"), "install", function SystemManager__install(){
const self = this; self;
return self;
}
, "install", unescape("install%0D%09%22%20Private%20-%20Install%20the%20receiver%20as%20the%20source%20manager%20of%20the%20system.%0D%09The%20default%20action%20is%20to%20do%20nothing.%0D%09This%20method%20can%20be%20refined%20by%20subclasses.%0D%09%22"));
smalltalk.bind(smalltalk.SystemManager, unescape("aboutToBind%3Ato%3A"), "aboutToBind_to_", function SystemManager__aboutToBind_to_(aMethod,aClass){
const self = this; return self.triggerEvent_with_with_("aboutToBind:to:",aMethod,aClass);
}
, "tracking-methods", unescape("aboutToBind%3A%20aMethod%20to%3A%20aClass%0D%09%22%20Private%20-%20The%20method%20will%20be%20bound%20to%20aClass.%20%22%0D%0D%09%5Eself%20triggerEvent%3A%20%23aboutToBind%3Ato%3A%20with%3A%20aMethod%20with%3A%20aClass%20"));
smalltalk.bind(smalltalk.SystemManager, unescape("methodBound%3Ato%3A"), "methodBound_to_", function SystemManager__methodBound_to_(aMethod,aClass){
const self = this; return self.triggerEvent_with_with_("methodBound:to:",aMethod,aClass);
}
, "tracking-methods", unescape("methodBound%3A%20aMethod%20to%3A%20aClass%0D%09%22%20Private%20-%20The%20method%20has%20been%20bound%20to%20aClass.%20%22%0D%0D%09%5Eself%20triggerEvent%3A%20%23methodBound%3Ato%3A%20with%3A%20aMethod%20with%3A%20aClass%20"));
smalltalk.bind(smalltalk.SystemManager, unescape("aboutToRemove%3Afrom%3A"), "aboutToRemove_from_", function SystemManager__aboutToRemove_from_(aMethod,aClass){
const self = this; return self.triggerEvent_with_with_("aboutToRemove:from:",aMethod,aClass);
}
, "tracking-methods", unescape("aboutToRemove%3A%20aMethod%20from%3A%20aClass%0D%09%22%20Private%20-%20The%20method%20will%20be%20removed%20from%20aClass.%20%22%0D%0D%09%5Eself%20triggerEvent%3A%20%23aboutToRemove%3Afrom%3A%20with%3A%20aMethod%20with%3A%20aClass%20"));
smalltalk.bind(smalltalk.SystemManager, unescape("methodRemoved%3Afrom%3A"), "methodRemoved_from_", function SystemManager__methodRemoved_from_(aMethod,aClass){
const self = this; return self.triggerEvent_with_with_("methodRemoved:from:",aMethod,aClass);
}
, "tracking-methods", unescape("methodRemoved%3A%20aMethod%20from%3A%20aClass%0D%09%22%20Private%20-%20The%20method%20has%20been%20removed%20from%20aClass.%20%22%0D%0D%09%5Eself%20triggerEvent%3A%20%23methodRemoved%3Afrom%3A%20with%3A%20aMethod%20with%3A%20aClass%20"));
smalltalk.bind(smalltalk.SystemManager, unescape("aboutToChange%3Asuperclass%3AiVarNames%3Acategory%3A"), "aboutToChange_superclass_iVarNames_category_", function SystemManager__aboutToChange_superclass_iVarNames_category_(aClass,superclass,iVarNames,category){
const self = this; return self.triggerEvent_with_with_("aboutToChange:to:",aClass,(smalltalk.Array.with_with_with_(superclass,iVarNames,category)));
}
, "tracking-classes", unescape("aboutToChange%3A%20aClass%20superclass%3A%20superclass%20iVarNames%3A%20iVarNames%20category%3A%20category%0D%09%22%20Private%20-%20aClass%20is%20about%20to%20be%20changed.%20%22%0D%0D%09%5Eself%09triggerEvent%3A%20%23aboutToChange%3Ato%3A%0D%09%09with%3A%20aClass%0D%09%09with%3A%20%28Array%20with%3A%20superclass%20with%3A%20iVarNames%20with%3A%20category%29"));
smalltalk.bind(smalltalk.SystemManager, unescape("aboutToCreateClass%3Asuperclass%3AiVarNames%3Acategory%3A"), "aboutToCreateClass_superclass_iVarNames_category_", function SystemManager__aboutToCreateClass_superclass_iVarNames_category_(globalName,superclass,iVarNames,category){
const self = this; return self.triggerEvent_with_with_("aboutToCreateClass:with:",globalName,(smalltalk.Array.with_with_with_(superclass,iVarNames,category)));
}
, "tracking-classes", unescape("aboutToCreateClass%3A%20globalName%20superclass%3A%20superclass%20iVarNames%3A%20iVarNames%20category%3A%20category%0D%09%22%20Private%20-%20Attemp%20to%20create%20Class%20with%20name%20globalName.%20%22%0D%0D%09%5Eself%09triggerEvent%3A%20%23aboutToCreateClass%3Awith%3A%0D%09%09with%3A%20globalName%0D%09%09with%3A%20%28Array%20with%3A%20superclass%20with%3A%20iVarNames%20with%3A%20category%29"));
smalltalk.bind(smalltalk.SystemManager, unescape("classChanged%3A"), "classChanged_", function SystemManager__classChanged_(aBehavior){
const self = this; return self.triggerEvent_with_("classChanged:",aBehavior);
}
, "tracking-classes", unescape("classChanged%3A%20aBehavior%0D%09%22%20Private%20-%20aBehavior%20has%20been%20changed.%20%22%0D%0D%09%5Eself%20triggerEvent%3A%20%23classChanged%3A%20with%3A%20aBehavior%20"));
smalltalk.bind(smalltalk.SystemManager, unescape("classShapeChanged%3A"), "classShapeChanged_", function SystemManager__classShapeChanged_(aBehavior){
const self = this; return self.triggerEvent_with_ifNotHandled_("classShapeChanged:",aBehavior,(function SystemManager__(){
return aBehavior.recompileAll();
}
));
}
, "tracking-classes", unescape("classShapeChanged%3A%20aBehavior%0D%09%22%20Private%20-%20aBehavior%20has%20changed%20shape.%20%22%0D%0D%09%5Eself%09triggerEvent%3A%20%23classShapeChanged%3A%0D%09%09with%3A%20aBehavior%0D%09%09ifNotHandled%3A%20%5B%20aBehavior%20recompileAll%20%5D"));
smalltalk.bind(smalltalk.SystemManager, unescape("log%3A"), "log_", function SystemManager__log_(aString){
const self = this; return self.triggerEvent_with_("log:",aString);
}
, "log", unescape("log%3A%20aString%0D%09%22%20Private%20-%20Log%20aString%20onto%20loggin%20device.%20%22%0D%0D%09%5Eself%20triggerEvent%3A%20%23log%3A%20with%3A%20aString"));
smalltalk.bind(smalltalk.SystemManager, unescape("memoryWarning%3A"), "memoryWarning_", function SystemManager__memoryWarning_(anArgument){
const self = this; return self.triggerEvent_with_("memoryWarning:",anArgument);
}
, "memory", unescape("memoryWarning%3A%20anArgument%0D%09%22%20Trigger%20a%20memory%20warning%20event.%0D%09The%20execution%20environment%20can%20signal%20memory%20warning/low%20conditions%2C%20we%20trigger%20an%20event%20to%20be%20handled%20at%20application%20level.%0D%09Note%3A%20It%20is%20frequent%20procedure%20to%20clean%20cached%20resources%20that%20can%20be%20reconstructed%20later%2C%20if%20required.%0D%09%22%0D%0D%09%5Eself%20triggerEvent%3A%20%23memoryWarning%3A%20with%3A%20anArgument"));
smalltalk.bind(smalltalk.SystemManager, unescape("object%3Aat%3AnotFoundIn%3A"), "object_at_notFoundIn_", function SystemManager__object_at_notFoundIn_(anObject,indexOrKey,aCollection){
const self = this; return self.triggerEvent_withArguments_ifNotHandled_("object:at:notFoundIn:",(smalltalk.Array.with_with_with_(anObject,indexOrKey,aCollection)),(function SystemManager__(){
return self.print_((((unescape("Object/key%28")._comma(((((nil.isNil_(indexOrKey))).ifTrue_ifFalse_((function SystemManager__(){
return anObject;
}
),(function SystemManager__(){
return indexOrKey;
}
))).toString())))._comma(unescape("%29%20not%20found%20in%20")))._comma((aCollection.printString()))));
}
));
}
, "failures", unescape("object%3A%20anObject%20at%3A%20indexOrKey%20notFoundIn%3A%20aCollection%0D%09%22%20Trigger%20a%20missing%20object%20event.%20%22%0D%0D%09%5Eself%20triggerEvent%3A%20%23object%3Aat%3AnotFoundIn%3A%0D%09%09withArguments%3A%20%28Array%20with%3A%20anObject%20with%3A%20indexOrKey%20with%3A%20aCollection%29%0D%09%09ifNotHandled%3A%20%5B%0D%09%09%09self%20print%3A%20%27Object/key%28%27%0D%09%09%09%09%2C%28indexOrKey%20isNil%20ifTrue%3A%20%5BanObject%5D%20ifFalse%3A%20%5BindexOrKey%5D%29%20toString%0D%09%09%09%09%2C%27%29%20not%20found%20in%20%27%2CaCollection%20printString%0D%09%09%5D"));
