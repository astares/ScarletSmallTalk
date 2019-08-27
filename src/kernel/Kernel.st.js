smalltalk.addClass("Exception", smalltalk.Object, ['messageText'], 'Kernel');
smalltalk.Exception.$classVariableNames=("");
smalltalk.addClass("Error", smalltalk.Exception, [], 'Kernel');
smalltalk.Error.$classVariableNames=("");
smalltalk.bind(smalltalk.Object, unescape("smalltalk"), "smalltalk", function Object__smalltalk(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKObject.primSmalltalk(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; self.primitiveFailed();
return self;
}
, "system", unescape("smalltalk%0D%20%09%22%20Return%20the%20smalltalk%20system%20containing%20the%20receiver.%20%22%0D%0D%20%09%3Cprimitive%3A%20%27primSmalltalk%27%20module%3A%20%27SKObject%27%3E%0D%20%09self%20primitiveFailed"));
smalltalk.bind(smalltalk.Object, unescape("halt"), "halt", function Object__halt(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKObject.primHalt(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; self.primitiveFailed();
return self;
}
, "debug", unescape("halt%0D%20%09%22%20Private%20-%20Halt%20execution%20entering%20debugger.%20%22%0D%0D%20%09%3Cprimitive%3A%20%27primHalt%27%20module%3A%20%27SKObject%27%3E%0D%20%09self%20primitiveFailed"));
smalltalk.bind(smalltalk.Object, unescape("notImplementedYet"), "notImplementedYet", function Object__notImplementedYet(){
const self = this; self.error_(("Not implemented. Yet".halt()));
return self;
}
, "development", unescape("notImplementedYet%0D%09%22%20Private%20-%20Halt%20execution%20and/or%20generate%20an%20error%20reporting%20implementation%20incomplete.%20%22%0D%0D%09self%20error%3A%20%27Not%20implemented.%20Yet%27%20halt"));
smalltalk.bind(smalltalk.Object, unescape("notYetImplemented"), "notYetImplemented", function Object__notYetImplemented(){
const self = this; return self.notImplementedYet();
}
, "development", unescape("notYetImplemented%0D%09%22Error%20since%20a%20method%20has%20not%20yet%20been%20implemented.%22%0D%0D%09%5Eself%20notImplementedYet"));
smalltalk.bind(smalltalk.Object, unescape("notYetImplemented%3A"), "notYetImplemented_", function Object__notYetImplemented_(aSelector){
const self = this; return self.notImplementedYet_(aSelector);
}
, "development", unescape("notYetImplemented%3A%20aSelector%0D%09%22Error%20since%20a%20method%20has%20not%20yet%20been%20implemented.%22%0D%0D%09%5Eself%20notImplementedYet%3A%20aSelector"));
smalltalk.bind(smalltalk.Object, unescape("notImplementedYet%3A"), "notImplementedYet_", function Object__notImplementedYet_(aSelector){
var message = nil;
const self = this; message=((((self.$klass).name())._comma(unescape("%3E%3E")))._comma((aSelector.asLiteral())))._comma(" is not yet implemented.");
self.error_(message);
return self;
}
, "development", unescape("notImplementedYet%3A%20aSelector%0D%09%22%20Private%20-%20Halt%20execution%20and/or%20generate%20an%20error%20reporting%20implementation%20incomplete.%20%22%0D%0D%09%7C%20message%20%7C%0D%09message%20%3A%3D%20self%20class%20name%2C%20%27%3E%3E%27%2C%20aSelector%20asLiteral%2C%20%27%20is%20not%20yet%20implemented.%27.%0D%09self%20error%3A%20message"));
smalltalk.bind(smalltalk.Object, unescape("accept%3A"), "accept_", function Object__accept_(what){
const self = this; self.print_((((unescape("%5Bbug%5D%20")._comma((self.asString())))._comma(" accept: "))._comma((what.asString()))));
return self.error_(unescape("%23accept%3A%20out%20of%20control."));
}
, "parserBug", unescape("accept%3A%20what%0D%09%22%20Private%20-%20Report%20buggy%20send%20by%20compiler.%20%22%0D%0D%09self%20print%3A%20%27%5Bbug%5D%20%27%2Cself%20asString%2C%27%20accept%3A%20%27%2Cwhat%20asString.%0D%09%5Eself%20error%3A%20%27%23accept%3A%20out%20of%20control.%27"));
smalltalk.bind(smalltalk.Object, unescape("%3D"), "_eq", function Object___eq(anObject){
const self = this; return (nil.is_eqeq_(self,anObject));
}
, "comparing", unescape("%3D%20anObject%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20equal%20to%20anObject.%20%22%0D%0D%09%5Eself%20%3D%3D%20anObject"));
smalltalk.bind(smalltalk.Object, unescape("%7E%3D"), "_no_eq", function Object___no_eq(anObject){
const self = this; return (nil.is_eqeq_(self._eq(anObject),false));
}
, "comparing", unescape("%7E%3D%20anObject%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20not%20equal%20to%20anObject.%20%22%0D%0D%09%5E%28self%20%3D%20anObject%29%20%3D%3D%20false"));
smalltalk.bind(smalltalk.Object, unescape("initialize"), "initialize", function Object__initialize(){
const self = this; self;
return self;
}
, "initialize", unescape("initialize%0D%09%22%20Private%20-%20Initialize%20the%20receiver.%0D%09The%20default%20implementation%20do%20nothing.%0D%09This%20method%20can%20be%20refined%20by%20subclasses%20to%20support%20creation%20time%20initialization%20of%20collaborators.%0D%09%22"));
smalltalk.bind(smalltalk.Object, unescape("value"), "value", function Object__value(){
const self = this; return self;
}
, "accessing", unescape("value%0D%09%22%20Return%20the%20receiver.%20%22%0D%0D%09%5Eself"));
smalltalk.bind(smalltalk.Object, unescape("yourself"), "yourself", function Object__yourself(){
const self = this; return self;
}
, "identity", unescape("yourself%0D%09%22%20Return%20the%20receiver.%20%22%0D%0D%09%5Eself"));
smalltalk.bind(smalltalk.Object, unescape("class"), "$$class", function Object__$$class(){
const self = this; return (function(){var $1$; $1$ = self["$klass"]; return nil.isNil_($1$) ? nil : $1$})();
}
, "accessing", unescape("class%0D%09%22%20Return%20the%20class%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20basicAt%3A%20%27%24klass%27"));
smalltalk.bind(smalltalk.Object, unescape("size"), "size", function Object__size(){
const self = this; return (0);
}
, "accessing", unescape("size%0D%09%22%20Return%20the%20size%20of%20the%20receiver.%0D%09The%20default%20implementation%20return%20zero.%0D%09This%20method%20can%20be%20refined%20by%20subclasses%20to%20support%20indexed%20access.%0D%09%22%0D%0D%09%5E0"));
smalltalk.bind(smalltalk.Object, unescape("copy"), "copy", function Object__copy(){
const self = this; return self.shallowCopy();
}
, "copying", unescape("copy%0D%09%22%20Return%20a%20copy%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20shallowCopy"));
smalltalk.bind(smalltalk.Object, unescape("shallowCopy"), "shallowCopy", function Object__shallowCopy(){
var result = nil;
const self = this; result=(self.$klass).basicNew();
(self.$klass).allInstVarNamesDo_((function Object__(instVarName){
return (result[unescape("@")._comma(instVarName)]=(function(){var $1$; $1$ = self[unescape("@")._comma(instVarName)]; return nil.isNil_($1$) ? nil : $1$})());
}
));
return result;
}
, "copying", unescape("shallowCopy%0D%09%22%20Return%20a%20deep%20copy%20of%20the%20receiver.%20%22%0D%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%20self%20class%20basicNew.%0D%09self%20class%20allInstVarNamesDo%3A%20%5B%3AinstVarName%7C%0D%09%09result%09basicAt%3A%20%24@%2CinstVarName%0D%09%09%09put%3A%20%28self%20basicAt%3A%20%24@%2CinstVarName%29%0D%09%5D.%0D%09%5Eresult"));
smalltalk.bind(smalltalk.Object, unescape("deepCopyOf%3A"), "deepCopyOf_", function Object__deepCopyOf_(what){
const self = this; if (((nil.isNil_(what))).valueOf()) {return what};
if ((self.isObject_(what)).valueOf()) {return what.deepCopy()};
return what;
}
, "copying", unescape("deepCopyOf%3A%20what%0D%09%22%20Private%20-%20Returns%20a%20deep%20copy%20of%20what.%20%22%0D%0D%09what%20isNil%20ifTrue%3A%20%5B%20%5Ewhat%20%5D.%0D%09%28self%20isObject%3A%20what%29%20ifTrue%3A%20%5B%20%5Ewhat%20deepCopy%20%5D.%0D%09%5Ewhat"));
smalltalk.bind(smalltalk.Object, unescape("deepCopy"), "deepCopy", function Object__deepCopy(){
var result = nil;
var value = nil;
const self = this; result=(self.$klass).basicNew();
(self.$klass).allInstVarNamesDo_((function Object__(iv){
value=self.deepCopyOf_(((function(){var $1$; $1$ = self[unescape("@")._comma(iv)]; return nil.isNil_($1$) ? nil : $1$})()));
return (result[unescape("@")._comma(iv)]=value);
}
));
return result;
}
, "copying", unescape("deepCopy%0D%09%22%20Return%20a%20deep%20copy%20of%20the%20receiver.%20%22%0D%0D%09%7C%20result%20value%20%7C%0D%09result%20%3A%3D%20self%20class%20basicNew.%0D%09self%20class%20allInstVarNamesDo%3A%20%5B%3Aiv%7C%0D%09%09value%20%3A%3D%20self%20deepCopyOf%3A%20%28self%20basicAt%3A%20%24@%2Civ%29.%0D%09%09result%09basicAt%3A%20%24@%2Civ%20put%3A%20value%0D%09%5D.%0D%09%5Eresult"));
smalltalk.bind(smalltalk.Object, unescape("-%3E"), "_minus_gt", function Object___minus_gt(anObject){
const self = this; return smalltalk.Association.key_value_(self,anObject);
}
, "converting", unescape("-%3E%20anObject%0D%09%22%20Return%20an%20association%20of%20the%20receiver%20to%20anObject.%20%22%0D%0D%09%5EAssociation%20key%3A%20self%20value%3A%20anObject"));
smalltalk.bind(smalltalk.Object, unescape("asString"), "asString", function Object__asString(){
const self = this; return self.printString();
}
, "converting", unescape("asString%0D%09%22%20Return%20the%20receiver%20as%20a%20String.%20%22%0D%0D%09%5Eself%20printString"));
smalltalk.bind(smalltalk.Object, unescape("toString"), "toString", function Object__toString(){
const self = this; return (unescape("%7Bst%3Aa")._comma(((self.$klass).name())))._comma(unescape("%7D"));
}
, "converting", unescape("toString%0D%09%22%20Convert%20the%20receiver%20to%20a%20String.%20%22%0D%0D%09%5E%27%7Bst%3Aa%27%2Cself%20class%20name%2C%24%7D"));
smalltalk.bind(smalltalk.Object, unescape("asJavascript"), "asJavascript", function Object__asJavascript(){
const self = this; return self.asString();
}
, "converting", unescape("asJavascript%0D%09%22%20Return%20the%20javascript%20representation%20of%20the%20receiver.%0D%09The%20default%20implementation%20return%20the%20receiver%20as%20a%20String.%0D%09This%20method%20must%20be%20refined%20by%20subclasses%20implementing%20literal%20representation%20in%20javascript.%0D%09%22%0D%0D%09%5Eself%20asString"));
smalltalk.bind(smalltalk.Object, unescape("asJSON"), "asJSON", function Object__asJSON(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKObject.primAsJSON(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "converting", unescape("asJSON%0D%09%22%20JSON%20-%20Return%20the%20JSON%20representation%20of%20the%20receiver.%20%22%0D%0D%09%3Cprimitive%3A%20%27primAsJSON%27%20module%3A%20%27SKObject%27%3E%0D%09%5Eself%20primitiveFailed"));
smalltalk.bind(smalltalk.Object, unescape("escapedCode"), "escapedCode", function Object__escapedCode(){
const self = this; return self.asJavascript();
}
, "converting", unescape("escapedCode%0D%09%22%20Return%20the%20code%20to%20reproduce%20receiver%20from%20%28javascript%29%20code.%20%22%0D%0D%09%5Eself%20asJavascript"));
smalltalk.bind(smalltalk.Object, unescape("basicPerform%3AwithArguments%3A"), "basicPerform_withArguments_", function Object__basicPerform_withArguments_(jsSelector,anArray){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKObject.primPerform(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "private", unescape("basicPerform%3A%20jsSelector%20withArguments%3A%20anArray%0D%09%22%20Private%20-%20Basic%20implementation%20of%20%23perform...%20%22%0D%09%3Cprimitive%3A%20%27primPerform%27%20module%3A%20%27SKObject%27%3E%0D%09%5Eself%20primitiveFailed"));
smalltalk.bind(smalltalk.Object, unescape("perform%3A"), "perform_", function Object__perform_(aSymbol){
const self = this; return self.perform_withArguments_(aSymbol,[]);
}
, "perform", unescape("perform%3A%20aSymbol%0D%09%22%20Return%20the%20result%20of%20sending%20message%20aSymbol%20to%20the%20receiver.%20%22%0D%0D%09%5Eself%20perform%3A%20aSymbol%20withArguments%3A%20%23%28%29"));
smalltalk.bind(smalltalk.Object, unescape("perform%3Awith%3A"), "perform_with_", function Object__perform_with_(aSymbol,argument){
const self = this; return self.perform_withArguments_(aSymbol,(smalltalk.Array.with_(argument)));
}
, "perform", unescape("perform%3A%20aSymbol%20with%3A%20argument%0D%09%22%20Return%20the%20result%20of%20sending%20message%20aSymbol%20to%20the%20receiver.%20%22%0D%0D%09%5Eself%20perform%3A%20aSymbol%20withArguments%3A%20%28Array%20with%3A%20argument%29"));
smalltalk.bind(smalltalk.Object, unescape("perform%3AwithArguments%3A"), "perform_withArguments_", function Object__perform_withArguments_(aSymbol,aCollection){
const self = this; if (((aSymbol.numberOfArguments())._eq((aCollection.size()))).not()) {return self.error_("Invalid arguments size")};
return self.basicPerform_withArguments_((aSymbol.asSelector()),(aCollection.asArray()));
}
, "perform", unescape("perform%3A%20aSymbol%20withArguments%3A%20aCollection%0D%09%22%20Return%20the%20result%20of%20sending%20message%20aSymbol%20to%20the%20receiver.%20%22%0D%0D%09aSymbol%20numberOfArguments%20%3D%20aCollection%20size%20ifFalse%3A%20%5B%0D%09%09%5Eself%20error%3A%20%27Invalid%20arguments%20size%27%0D%09%5D.%0D%09%5Eself%20basicPerform%3A%20aSymbol%20asSelector%20withArguments%3A%20aCollection%20asArray"));
smalltalk.bind(smalltalk.Object, unescape("basicAt%3A"), "basicAt_", function Object__basicAt_(aString){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKObject.primBasicAt(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "accessing", unescape("basicAt%3A%20aString%0D%09%22%20Return%20the%20property%20of%20the%20receiver%20known%20as%20aString%20%28or%20nil%29.%20%22%0D%0D%09%3Cprimitive%3A%20%27primBasicAt%27%20module%3A%20%27SKObject%27%3E%0D%09%5Eself%20primitiveFailed"));
smalltalk.bind(smalltalk.Object, unescape("basicAt%3AifAbsent%3A"), "basicAt_ifAbsent_", function Object__basicAt_ifAbsent_(aString,aBlock){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKObject.primBasicAtIfAbsent(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "accessing", unescape("basicAt%3A%20aString%20ifAbsent%3A%20aBlock%0D%09%22%20Return%20the%20property%20of%20the%20receiver%20known%20as%20aString%20%28or%20the%20result%20of%20evaluating%20aBlock%29.%20%22%0D%0D%09%3Cprimitive%3A%20%27primBasicAtIfAbsent%27%20module%3A%20%27SKObject%27%3E%0D%09%5Eself%20primitiveFailed"));
smalltalk.bind(smalltalk.Object, unescape("basicAt%3Aput%3A"), "basicAt_put_", function Object__basicAt_put_(aString,anObject){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKObject.primBasicAtPut(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "accessing", unescape("basicAt%3A%20aString%20put%3A%20anObject%0D%09%22%20Set%20the%20property%20of%20the%20receiver%20known%20as%20aString.%20%22%0D%0D%09%3Cprimitive%3A%20%27primBasicAtPut%27%20module%3A%20%27SKObject%27%3E%0D%09%5Eself%20primitiveFailed"));
smalltalk.bind(smalltalk.Object, unescape("basicAt%3AifAbsentPut%3A"), "basicAt_ifAbsentPut_", function Object__basicAt_ifAbsentPut_(aString,aBlock){
const self = this; return (function(){var $1$; $1$ = self[aString]; return nil.isNil_($1$) ? (self[aString]=aBlock.value()) : $1$})();
}
, "accessing", unescape("basicAt%3A%20aString%20ifAbsentPut%3A%20aBlock%0D%09%22%20Return%20the%20property%20of%20the%20receiver%20known%20as%20aString%20%28or%20set%20it%20with%20the%20result%20of%20evaluating%20aBlock%29.%20%22%0D%0D%09%5Eself%20basicAt%3A%20aString%20ifAbsent%3A%20%5B%20self%20basicAt%3A%20aString%20put%3A%20aBlock%20value%20%5D"));
smalltalk.bind(smalltalk.Object, unescape("instVarAt%3A"), "instVarAt_", function Object__instVarAt_(instVarName){
const self = this; if ((instVarName.isNumber()).valueOf()) {return self.instVarAt_((((self.$klass).allInstVarNames()).at_(instVarName)))};
return (function(){var $1$; $1$ = self[unescape("@")._comma(instVarName)]; return nil.isNil_($1$) ? nil : $1$})();
}
, "accessing", unescape("instVarAt%3A%20instVarName%0D%09%22%20Return%20the%20internal%20collaborator%20of%20the%20receiver%20known%20as%20instVarName.%20%22%0D%0D%09instVarName%20isNumber%20ifTrue%3A%20%5B%0D%09%09%5Eself%20instVarAt%3A%20%28self%20class%20allInstVarNames%20at%3A%20instVarName%29%0D%09%5D.%0D%09%5Eself%20basicAt%3A%20%27@%27%2C%20instVarName"));
smalltalk.bind(smalltalk.Object, unescape("instVarAt%3Aput%3A"), "instVarAt_put_", function Object__instVarAt_put_(instVarName,anObject){
const self = this; if ((instVarName.isNumber()).valueOf()) {return self.instVarAt_put_((((self.$klass).allInstVarNames()).at_(instVarName)),anObject)};
return (self[unescape("@")._comma(instVarName)]=anObject);
}
, "accessing", unescape("instVarAt%3A%20instVarName%20put%3A%20anObject%0D%09%22%20Set%20the%20internal%20collaborator%20of%20the%20receiver%20known%20as%20instVarName%20to%20anObject.%20%22%0D%0D%09instVarName%20isNumber%20ifTrue%3A%20%5B%0D%09%09%5Eself%20instVarAt%3A%20%28self%20class%20allInstVarNames%20at%3A%20instVarName%29%20put%3A%20anObject%0D%09%5D.%0D%09%5Eself%20basicAt%3A%20%27@%27%2C%20instVarName%20put%3A%20anObject"));
smalltalk.bind(smalltalk.Object, unescape("stPropertyPrefix"), "stPropertyPrefix", function Object__stPropertyPrefix(){
const self = this; return unescape("@property_");
}
, "accessing", unescape("stPropertyPrefix%0D%09%22The%20prefix%20used%20to%20namespace%20Smalltalk%20properties.%22%0D%0D%09%5E%27@property_%27"));
smalltalk.bind(smalltalk.Object, unescape("jsPropertyNames"), "jsPropertyNames", function Object__jsPropertyNames(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKObject.primJsPropertyNames(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "accessing", unescape("jsPropertyNames%0D%09%22Return%20the%20names%20of%20all%20of%20the%20javascript%20properties.%22%0D%0D%09%3Cprimitive%3A%27primJsPropertyNames%27%20module%3A%27SKObject%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.Object, unescape("propertyTable"), "propertyTable", function Object__propertyTable(){
var properties = nil;
var propertyNames = nil;
var table = nil;
const self = this; properties=(self.jsPropertyNames()).select_((function Object__(each){
return each.beginsWith_((self.stPropertyPrefix()));
}
));
propertyNames=properties.collect_((function Object__(each){
return each.copyFrom_to_((((self.stPropertyPrefix()).size())._plus((1))),(each.size()));
}
));
table=smalltalk.Dictionary.$$new();
propertyNames.do_((function Object__(each){
return table.at_put_(each,(self.propertyAt_(each)));
}
));
return table;
}
, "accessing", unescape("propertyTable%0D%09%22Access%20a%20read-only%20copy%20of%20all%20of%20the%0D%09properties%20of%20the%20receiver.%22%0D%0D%09%7C%20properties%20propertyNames%20table%20%7C%0D%09properties%20%3A%3D%20self%20jsPropertyNames%0D%09%09select%3A%0D%09%09%09%5B%3Aeach%20%7C%20each%20beginsWith%3A%20self%20stPropertyPrefix%5D.%0D%09propertyNames%20%3A%3D%20properties%0D%09%09collect%3A%0D%09%09%09%5B%3Aeach%20%7C%20each%20copyFrom%3A%20self%20stPropertyPrefix%20size%20+%201%20to%3A%20each%20size%5D.%0D%09table%20%3A%3D%20Dictionary%20new.%0D%09propertyNames%20do%3A%20%5B%3Aeach%20%7C%20table%20at%3A%20each%20put%3A%20%28self%20propertyAt%3A%20each%29%5D.%0D%09%5Etable"));
smalltalk.bind(smalltalk.Object, unescape("propertyAt%3A"), "propertyAt_", function Object__propertyAt_(aString){
const self = this; return self.propertyAt_ifAbsent_(aString,(function Object__(){
return nil;
}
));
}
, "accessing", unescape("propertyAt%3A%20aString%0D%09%22Access%20a%20the%20specified%20property.%20Return%20nil%20if%20it%0D%09does%20not%20exist.%22%0D%0D%09%5Eself%20propertyAt%3A%20aString%20ifAbsent%3A%20%5Bnil%5D"));
smalltalk.bind(smalltalk.Object, unescape("propertyAt%3AifAbsent%3A"), "propertyAt_ifAbsent_", function Object__propertyAt_ifAbsent_(aString,aBlock){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKObject.primPropertyAtIfAbsent(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "accessing", unescape("propertyAt%3A%20aString%20ifAbsent%3A%20aBlock%0D%09%22Access%20a%20property%20value.%20If%20the%20property%2C%0D%09does%20not%20exist%2C%20return%20the%20value%20of%20aBlock.%22%0D%0D%09%3Cprimitive%3A%20%27primPropertyAtIfAbsent%27%20module%3A%20%27SKObject%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.Object, unescape("propertyAt%3Aput%3A"), "propertyAt_put_", function Object__propertyAt_put_(aString,aValue){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKObject.primPropertyAtPut(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "accessing", unescape("propertyAt%3A%20aString%20put%3A%20aValue%0D%09%22Set%20the%20value%20of%20a%20property.%22%0D%0D%09%3Cprimitive%3A%20%27primPropertyAtPut%27%20module%3A%20%27SKObject%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.Object, unescape("propertyAt%3AifAbsentPut%3A"), "propertyAt_ifAbsentPut_", function Object__propertyAt_ifAbsentPut_(aString,aBlock){
const self = this; return self.propertyAt_ifAbsent_(aString,(function Object__(){
return self.propertyAt_put_(aString,(aBlock.value()));
}
));
}
, "accessing", unescape("propertyAt%3A%20aString%20ifAbsentPut%3A%20aBlock%0D%09%22Attempt%20to%20access%20an%20object%20property.%20If%20it%20does%20not%20exist%2C%0D%09evalaute%20aBlock%2C%20setting%20the%20property%20to%20that%20value.%20Return%20the%0D%09value%20of%20the%20property.%22%0D%0D%09%5Eself%0D%09%09propertyAt%3A%20aString%0D%09%09ifAbsent%3A%20%5Bself%20propertyAt%3A%20aString%20put%3A%20aBlock%20value%5D"));
smalltalk.bind(smalltalk.Object, unescape("error%3A"), "error_", function Object__error_(aString){
const self = this; return smalltalk.Error.signal_(aString);
}
, "error", unescape("error%3A%20aString%0D%09%22%20Return%20the%20result%20of%20managing%20error%28aString%29%20in%20the%20receiver.%20%22%0D%0D%09%5EError%20signal%3A%20aString"));
smalltalk.bind(smalltalk.Object, unescape("osError"), "osError", function Object__osError(){
const self = this; return self.error_("OS Error");
}
, "error", unescape("osError%0D%09%22An%20error%20has%20occurred%20related%20to%20the%20native%20operating%20system.%22%0D%0D%09%5Eself%20error%3A%20%27OS%20Error%27"));
smalltalk.bind(smalltalk.Object, unescape("subclassResponsibility"), "subclassResponsibility", function Object__subclassResponsibility(){
const self = this; return self.subclassResponsibility_(nil);
}
, "error", unescape("subclassResponsibility%0D%09%22%20Private%20-%20The%20concrete%20implementation%20on%20the%20receiver%20is%20not%20complete.%20%22%0D%0D%09%5Eself%20subclassResponsibility%3A%20nil"));
smalltalk.bind(smalltalk.Object, unescape("implementedBySubclass"), "implementedBySubclass", function Object__implementedBySubclass(){
const self = this; return self.subclassResponsibility();
}
, "error", unescape("implementedBySubclass%0D%09%22%20Private%20-%20The%20concrete%20implementation%20on%20the%20receiver%20is%20not%20complete.%20%22%0D%0D%09%5Eself%20subclassResponsibility"));
smalltalk.bind(smalltalk.Object, unescape("shouldNotImplement"), "shouldNotImplement", function Object__shouldNotImplement(){
const self = this; return self.shouldNotImplement_(nil);
}
, "error", unescape("shouldNotImplement%0D%09%22%20The%20receiver%20received%20a%20message%20that%20is%20not%20expected.%20%22%0D%0D%09%5Eself%20shouldNotImplement%3A%20nil"));
smalltalk.bind(smalltalk.Object, unescape("invalidMessage"), "invalidMessage", function Object__invalidMessage(){
const self = this; return self.invalidMessage_(nil);
}
, "error", unescape("invalidMessage%0D%09%22%20The%20receiver%20received%20a%20message%20that%20is%20invalid%20%28not%20expected%20for%20this%20object%29.%20%22%0D%0D%09%5Eself%20invalidMessage%3A%20nil"));
smalltalk.bind(smalltalk.Object, unescape("subclassResponsibility%3A"), "subclassResponsibility_", function Object__subclassResponsibility_(aSelector){
const self = this; return self.error_((((("Implementation of"._comma((((nil.isNil_(aSelector))).ifTrue_ifFalse_((function Object__(){
return " ";
}
),(function Object__(){
return unescape("%20%23")._comma(aSelector);
}
)))))._comma(unescape("%20is%20a%20responsibility%20of%20the%20subclass%28")))._comma(((self.$klass).name())))._comma(unescape("%29."))));
}
, "error", unescape("subclassResponsibility%3A%20aSelector%0D%09%22%20Private%20-%20The%20concrete%20implementation%20on%20the%20receiver%20is%20not%20complete.%20%22%0D%0D%09%5Eself%20error%3A%0D%09%09%20%27Implementation%20of%27%0D%09%09%2C%28aSelector%20isNil%20ifTrue%3A%20%5B%27%20%27%5D%20ifFalse%3A%20%5B%27%20%23%27%2CaSelector%5D%29%0D%09%09%2C%27%20is%20a%20responsibility%20of%20the%20subclass%28%27%2Cself%20class%20name%2C%27%29.%27"));
smalltalk.bind(smalltalk.Object, unescape("implementedBySubclass%3A"), "implementedBySubclass_", function Object__implementedBySubclass_(aSelector){
const self = this; return self.subclassResponsibility_(aSelector);
}
, "error", unescape("implementedBySubclass%3A%20aSelector%0D%09%22%20Private%20-%20The%20concrete%20implementation%20on%20the%20receiver%20is%20not%20complete.%20%22%0D%0D%09%5Eself%20subclassResponsibility%3A%20aSelector"));
smalltalk.bind(smalltalk.Object, unescape("shouldNotImplement%3A"), "shouldNotImplement_", function Object__shouldNotImplement_(aSelector){
const self = this; return self.error_(((("Message"._comma((((nil.isNil_(aSelector))).ifTrue_ifFalse_((function Object__(){
return " ";
}
),(function Object__(){
return unescape("%20%23")._comma(aSelector);
}
)))))._comma(" should not be implemented for instances of "))._comma(((self.$klass).name()))));
}
, "error", unescape("shouldNotImplement%3A%20aSelector%0D%09%22%20The%20receiver%20received%20a%20message%20that%20is%20not%20expected.%20%22%0D%0D%09%5Eself%20error%3A%0D%09%09%20%27Message%27%0D%09%09%2C%28aSelector%20isNil%20ifTrue%3A%20%5B%27%20%27%5D%20ifFalse%3A%20%5B%27%20%23%27%2CaSelector%5D%29%0D%09%09%2C%27%20should%20not%20be%20implemented%20for%20instances%20of%20%27%2C%20self%20class%20name"));
smalltalk.bind(smalltalk.Object, unescape("invalidMessage%3A"), "invalidMessage_", function Object__invalidMessage_(aSelector){
const self = this; return self.error_(((("Message"._comma((((nil.isNil_(aSelector))).ifTrue_ifFalse_((function Object__(){
return " ";
}
),(function Object__(){
return unescape("%20%23")._comma(aSelector);
}
)))))._comma(" should not be sent to instances of "))._comma(((self.$klass).name()))));
}
, "error", unescape("invalidMessage%3A%20aSelector%0D%09%22%20The%20receiver%20received%20a%20message%20that%20is%20invalid%20%28not%20expected%20for%20this%20object%29.%20%22%0D%0D%09%5Eself%20error%3A%0D%09%09%20%27Message%27%0D%09%09%2C%28aSelector%20isNil%20ifTrue%3A%20%5B%27%20%27%5D%20ifFalse%3A%20%5B%27%20%23%27%2CaSelector%5D%29%0D%09%09%2C%27%20should%20not%20be%20sent%20to%20instances%20of%20%27%2C%20self%20class%20name"));
smalltalk.bind(smalltalk.Object, unescape("smalltalkErrorOf%3A"), "smalltalkErrorOf_", function Object__smalltalkErrorOf_(aNativeException){
var result = nil;
const self = this; if ((self.isObject_(aNativeException)).valueOf()) {if (((smalltalk.is_kindOf_(aNativeException,smalltalk.Exception))).valueOf()) {return aNativeException};
return (smalltalk.Error.$$new()).messageText_(aNativeException)};
result=(function(){var $1$; $1$ = aNativeException["smalltalkError"]; return nil.isNil_($1$) ? nil : $1$})();
if (((nil.isNil_(result)===false)).valueOf()) {return result};
return (function Object__($2$){
$2$.messageText_((((function(){var $3$; $3$ = aNativeException["description"]; return nil.isNil_($3$) ? nil : $3$})() || (function(){var $4$; $4$ = aNativeException["message"]; return nil.isNil_($4$) ? nil : $4$})())));
$2$.nativeException_(aNativeException);
return $2$.yourself()}
)(smalltalk.Error.$$new());
}
, "private", unescape("smalltalkErrorOf%3A%20aNativeException%0D%09%22%20Private%2C%20Internal%20-%20Return%20anException%20associated%20with%20a%20native%28javascript%29%20exception.%20%22%0D%0D%09%7C%20result%20%7C%0D%09%28self%20isObject%3A%20aNativeException%29%20ifTrue%3A%20%5B%0D%09%09%28aNativeException%20isKindOf%3A%20Exception%29%20ifTrue%3A%20%5B%20%5EaNativeException%20%5D.%0D%09%09%5EError%20new%20messageText%3A%20aNativeException%0D%09%5D.%0D%09result%20%3A%3D%20aNativeException%20basicAt%3A%20%23smalltalkError.%0D%09result%20notNil%20ifTrue%3A%20%5B%20%5Eresult%20%5D.%0D%09%5EError%20new%0D%09%09messageText%3A%20%28aNativeException%20basicAt%3A%20%23description%29%20%7C%7C%20%28aNativeException%20basicAt%3A%20%23message%29%3B%0D%09%09nativeException%3A%20aNativeException%3B%0D%09%09yourself"));
smalltalk.bind(smalltalk.Exception, unescape("nativeException"), "nativeException", function Exception__nativeException(){
const self = this; return (function(){var $1$; $1$ = self[unescape("@nativeException")]; return nil.isNil_($1$) ? nil : $1$})();
}
, "private", unescape("nativeException%0D%09%22%20Private%2C%20Internal%20-%20Return%20the%20native%20exception%20associated%20with%20the%20receiver%20%28or%20nil%29.%20%22%0D%0D%09%5Eself%20basicAt%3A%20%27@nativeException%27"));
smalltalk.bind(smalltalk.Exception, unescape("nativeException%3A"), "nativeException_", function Exception__nativeException_($$native){
const self = this; return (self[unescape("@nativeException")]=$$native);
}
, "private", unescape("nativeException%3A%20native%0D%09%22%20Private%2C%20Internal%20-%20Set%20the%20native%20exception%20associated%20with%20the%20receiver.%20%22%0D%0D%09%5Eself%20basicAt%3A%20%27@nativeException%27%20put%3A%20native"));
smalltalk.bind(smalltalk.Exception, unescape("stack"), "stack", function Exception__stack(){
var $$native = nil;
const self = this; $$native=self.nativeException();
if (((nil.isNil_($$native))).valueOf()) {return ""};
return ((function(){var $1$; $1$ = $$native["stack"]; return nil.isNil_($1$) ? nil : $1$})() || "");
}
, "stack", unescape("stack%0D%09%22%20Return%20a%20stack%20trace%20string.%20%22%0D%0D%09%7C%20native%20%7C%0D%09native%20%3A%3D%20self%20nativeException.%0D%09native%20isNil%20ifTrue%3A%20%5B%20%5E%27%27%20%5D.%0D%09%5E%28native%20basicAt%3A%20%23stack%29%20%7C%7C%20%27%27"));
smalltalk.bind(smalltalk.Exception, unescape("toString"), "toString", function Exception__toString(){
var txt = nil;
var stk = nil;
const self = this; txt=self.messageText();
if (((nil.isNil_(txt))).valueOf()) {txt=""};
stk=self.stack();
if (((nil.isNil_(stk))).valueOf()) {stk=""} else {stk=unescape("%0D")._comma(stk)};
return ((((unescape("%7Bst%3Aa")._comma(((self.$klass).name())))._comma(unescape("%20-%20")))._comma(txt))._comma(unescape("%7D")))._comma(stk);
}
, "converting", unescape("toString%0D%09%22%20Convert%20the%20receiver%20to%20a%20String.%20%22%0D%0D%09%7C%20txt%20stk%20%7C%0D%09txt%20%3A%3D%20self%20messageText.%20txt%20isNil%20ifTrue%3A%20%5B%20txt%20%3A%3D%20%27%27%20%5D.%0D%09stk%20%3A%3D%20self%20stack.%0D%09stk%20isNil%20ifTrue%3A%20%5B%20stk%20%3A%3D%20%27%27%20%5D%20ifFalse%3A%20%5B%20stk%20%3A%3D%20%27%0D%27%2Cstk%20%5D.%0D%09%5E%27%7Bst%3Aa%27%20%2Cself%20class%20name%20%2C%27%20-%20%27%20%2Ctxt%20%2C%24%7D%20%2Cstk"));
smalltalk.bind(smalltalk.Object, unescape("printOn%3A"), "printOn_", function Object__printOn_(aStream){
const self = this; (function Object__($1$){
$1$.nextPutAll_("a ");
return $1$.nextPutAll_(((self.$klass).name()))}
)(aStream);
return self;
}
, "printing", unescape("printOn%3A%20aStream%0D%09%22Print%20the%20receiver%20onto%20the%20provided%20Stream.%22%0D%0D%09aStream%0D%09%09nextPutAll%3A%20%27a%20%27%3B%0D%09%09nextPutAll%3A%20self%20class%20name"));
smalltalk.bind(smalltalk.Object, unescape("printString"), "printString", function Object__printString(){
var stream = nil;
const self = this; stream="".stream();
self.printOn_(stream);
return stream.contents();
}
, "printing", unescape("printString%0D%09%22%20Return%20a%20printable%20representation%20of%20the%20receiver.%20%22%0D%0D%09%7C%20stream%20%7C%0D%09stream%20%3A%3D%20%27%27%20stream.%0D%09self%20printOn%3A%20stream.%0D%09%5Estream%20contents"));
smalltalk.bind(smalltalk.Object, unescape("isKindOf%3A"), "isKindOf_", function Object__isKindOf_(aClass){
const self = this; return (self.$klass).inheritsFrom_(aClass);
}
, "testing", unescape("isKindOf%3A%20aClass%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20kind%20of%20aClass.%20%22%0D%0D%09%5Eself%20class%20inheritsFrom%3A%20aClass"));
smalltalk.bind(smalltalk.Object, unescape("isMemberOf%3A"), "isMemberOf_", function Object__isMemberOf_(aClass){
const self = this; return (nil.is_eqeq_(self.$klass,aClass));
}
, "testing", unescape("isMemberOf%3A%20aClass%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20member%20of%20aClass.%20%22%0D%0D%09%5Eself%20class%20%3D%3D%20aClass"));
smalltalk.bind(smalltalk.Object, unescape("ifNil%3A"), "ifNil_", function Object__ifNil_(aBlock){
const self = this; return self;
}
, "testing", unescape("ifNil%3A%20aBlock%0D%09%22%20Return%20the%20receiver%20if%20it%20is%20not%20nil%2C%20or%20the%20result%20of%20evaluating%20aBlock%20%28if%20it%20is%20nil%29.%20%22%0D%0D%09%5Eself"));
smalltalk.bind(smalltalk.Object, unescape("ifNil%3AifNotNil%3A"), "ifNil_ifNotNil_", function Object__ifNil_ifNotNil_(aBlock,anotherBlock){
const self = this; return anotherBlock.value();
}
, "testing", unescape("ifNil%3A%20aBlock%20ifNotNil%3A%20anotherBlock%0D%09%22%20Return%20the%20result%20of%20evaluating%20aBlock%20if%20the%20receiver%20is%20nil%20or%20the%20result%20of%20evaluating%20anotherBlock%20%28if%20not%20nil%29.%20%22%0D%0D%09%5EanotherBlock%20value"));
smalltalk.bind(smalltalk.Object, unescape("ifNotNil%3A"), "ifNotNil_", function Object__ifNotNil_(aBlock){
const self = this; return aBlock.value();
}
, "testing", unescape("ifNotNil%3A%20aBlock%0D%09%22%20Return%20the%20result%20of%20evaluating%20aBlock%20if%20the%20receiver%20is%20not%20nil%2C%20or%20nil%20if%20it%20is%20nil.%20%22%0D%0D%09%5EaBlock%20value"));
smalltalk.bind(smalltalk.Object, unescape("ifNotNil%3AifNil%3A"), "ifNotNil_ifNil_", function Object__ifNotNil_ifNil_(aBlock,anotherBlock){
const self = this; return aBlock.value();
}
, "testing", unescape("ifNotNil%3A%20aBlock%20ifNil%3A%20anotherBlock%0D%09%22%20Return%20the%20result%20of%20evaluating%20aBlock%20if%20the%20receiver%20is%20not%20nil%2C%20or%20the%20result%20of%20evaluating%20anotherBlock%20if%20it%20is%20nil.%20%22%0D%0D%09%5EaBlock%20value"));
smalltalk.bind(smalltalk.Object, unescape("isNil"), "isNil", function Object__isNil(){
const self = this; return false;
}
, "testing", unescape("isNil%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20nil.%20%22%0D%0D%09%5Efalse"));
smalltalk.bind(smalltalk.Object, unescape("notNil"), "notNil", function Object__notNil(){
const self = this; return ((nil.isNil_(self))).not();
}
, "testing", unescape("notNil%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20not%20nil.%20%22%0D%0D%09%5Eself%20isNil%20not"));
smalltalk.bind(smalltalk.Object, unescape("isClass"), "isClass", function Object__isClass(){
const self = this; return false;
}
, "testing", unescape("isClass%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20a%20Class.%20%22%0D%0D%09%5Efalse"));
smalltalk.bind(smalltalk.Object, unescape("isMetaclass"), "isMetaclass", function Object__isMetaclass(){
const self = this; return false;
}
, "testing", unescape("isMetaclass%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20a%20metaclass.%20%22%0D%0D%09%5Efalse"));
smalltalk.bind(smalltalk.Object, unescape("isNumber"), "isNumber", function Object__isNumber(){
const self = this; return false;
}
, "testing", unescape("isNumber%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20a%20Number.%20%22%0D%0D%09%5Efalse"));
smalltalk.bind(smalltalk.Object, unescape("isString"), "isString", function Object__isString(){
const self = this; return false;
}
, "testing", unescape("isString%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20a%20String.%20%22%0D%0D%09%5Efalse"));
smalltalk.bind(smalltalk.Object, unescape("isArray"), "isArray", function Object__isArray(){
const self = this; return false;
}
, "testing", unescape("isArray%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20an%20Array.%20%22%0D%0D%09%5Efalse"));
smalltalk.bind(smalltalk.Object, unescape("isObject%3A"), "isObject_", function Object__isObject_(anObject){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKObject.primIsObject(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "testing", unescape("isObject%3A%20anObject%0D%09%22%20Return%20true%20if%20anObject%20is%20a%20smalltalk%20object.%0D%09Return%20false%20if%20the%20object%20is%20foreign%20%28e.g.%20javascript%29%20object.%22%0D%0D%09%3Cprimitive%3A%20%27primIsObject%27%20module%3A%20%27SKObject%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.Object, unescape("isCollection"), "isCollection", function Object__isCollection(){
const self = this; return false;
}
, "testing", unescape("isCollection%0D%09%22Return%20true%20if%20the%20receiver%20is%20a%20Collection.%22%0D%0D%09%5Efalse"));
smalltalk.bind(smalltalk.Object, unescape("isDateTime"), "isDateTime", function Object__isDateTime(){
const self = this; return false;
}
, "testing", unescape("isDateTime%0D%09%22Return%20true%20if%20the%20receiver%20is%20a%20DateTime.%22%0D%0D%09%5Efalse"));
smalltalk.bind(smalltalk.Object, unescape("isInteger"), "isInteger", function Object__isInteger(){
const self = this; return false;
}
, "testing", unescape("isInteger%0D%09%22Return%20true%20if%20the%20receiver%20is%20an%20Integer.%22%0D%0D%09%5Efalse"));
smalltalk.bind(smalltalk.Object, unescape("isFloat"), "isFloat", function Object__isFloat(){
const self = this; return false;
}
, "testing", unescape("isFloat%0D%09%22Return%20true%20if%20the%20receiver%20is%20a%20Float.%22%0D%0D%09%5Efalse"));
smalltalk.bind(smalltalk.Object, unescape("isBoolean"), "isBoolean", function Object__isBoolean(){
const self = this; return false;
}
, "testing", unescape("isBoolean%0D%09%22Return%20true%20if%20the%20receiver%20is%20a%20Boolean.%22%0D%0D%09%5Efalse"));
smalltalk.bind(smalltalk.Object, unescape("isMagnitude"), "isMagnitude", function Object__isMagnitude(){
const self = this; return false;
}
, "testing", unescape("isMagnitude%0D%09%22Return%20true%20if%20the%20receiver%20is%20a%20Magnitude.%22%0D%0D%09%5Efalse"));
smalltalk.bind(smalltalk.Object, unescape("isDictionary"), "isDictionary", function Object__isDictionary(){
const self = this; return false;
}
, "testing", unescape("isDictionary%0D%09%22Return%20true%20if%20the%20receiver%20is%20a%20Float.%22%0D%0D%09%5Efalse"));
smalltalk.bind(smalltalk.Object, unescape("isSymbol"), "isSymbol", function Object__isSymbol(){
const self = this; return false;
}
, "testing", unescape("isSymbol%0D%09%22Return%20true%20if%20the%20receiver%20is%20a%20Symbol.%22%0D%0D%09%5Efalse"));
smalltalk.bind(smalltalk.Number, unescape("isFloat"), "isFloat", function Number__isFloat(){
const self = this; return (self.isInteger()).not();
}
, "testing", unescape("isFloat%0D%09%22Return%20whether%20the%20reciever%20is%20a%20Float.%22%0D%0D%09%5Eself%20isInteger%20not"));
smalltalk.bind(smalltalk.Number, unescape("isInteger"), "isInteger", function Number__isInteger(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKNumber.primIsInteger(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; self;
return self;
}
, "testing", unescape("isInteger%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20an%20Integer.%20%22%0D%0D%09%3Cprimitive%3A%20%27primIsInteger%27%20module%3A%20%27SKNumber%27%3E%20"));
smalltalk.bind(smalltalk.Number, unescape("isMagnitude"), "isMagnitude", function Number__isMagnitude(){
const self = this; return true;
}
, "testing", unescape("isMagnitude%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20a%20magnitude.%20%22%0D%0D%09%5Etrue"));
smalltalk.bind(smalltalk.Number, unescape("positive"), "positive", function Number__positive(){
const self = this; return self._gt_eq((0));
}
, "testing", unescape("positive%0D%09%22Return%20whether%20the%20receiver%20is%20%3E%3D%200.%22%0D%0D%09%5Eself%20%3E%3D%200"));
smalltalk.bind(smalltalk.Number, unescape("strictlyPositive"), "strictlyPositive", function Number__strictlyPositive(){
const self = this; return self._gt((0));
}
, "testing", unescape("strictlyPositive%0D%09%22Return%20whether%20the%20receiver%20is%20%3E0.%22%0D%0D%09%5Eself%20%3E%200"));
smalltalk.bind(smalltalk.Object, unescape("typeOf%3A"), "typeOf_", function Object__typeOf_(jsObject){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKObject.primTypeOf(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "utilities", unescape("typeOf%3A%20jsObject%0D%09%22%20Return%20the%20type%20of%20%28javascript%29Object.%20%22%0D%0D%09%3Cprimitive%3A%20%27primTypeOf%27%20module%3A%20%27SKObject%27%3E%0D%09%5Eself%20primitiveFailed%20"));
smalltalk.bind(smalltalk.Object, unescape("methodFor%3A"), "methodFor_", function Object__methodFor_(aSymbol){
const self = this; return (self.$klass)._gt_gt_gt(aSymbol);
}
, "messages", unescape("methodFor%3A%20aSymbol%0D%09%22%20Return%20the%20method%20implementing%20aSymbol%20%28or%20nil%29.%20%22%0D%0D%09%5Eself%20class%20%3E%3E%3E%20aSymbol"));
smalltalk.bind(smalltalk.Object, unescape("respondsTo%3A"), "respondsTo_", function Object__respondsTo_(aSymbol){
const self = this; return (nil.isNil_(self.methodFor_(aSymbol))===false);
}
, "messages", unescape("respondsTo%3A%20aSymbol%0D%09%22%20Return%20true%20if%20the%20receiver%20respond%20to%20message%20aSymbol.%20%22%0D%0D%09%5E%28self%20methodFor%3A%20aSymbol%29%20notNil"));
smalltalk.bind(smalltalk.Object, unescape("basicDelete%3A"), "basicDelete_", function Object__basicDelete_(aString){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKObject.primBasicDelete(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "accessing", unescape("basicDelete%3A%20aString%0D%09%22%20Private%20-%20Basic%20implementation%20of%20deletion%20of%20property%20aString%20of%20the%20receiver.%20%22%0D%0D%09%3Cprimitive%3A%20%27primBasicDelete%27%20module%3A%20%27SKObject%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.Object, unescape("doesNotUnderstand%3A"), "doesNotUnderstand_", function Object__doesNotUnderstand_(aMessage){
const self = this; return (function Object__($1$){
$1$.receiver_(self);
$1$.message_(aMessage);
return $1$.signal()}
)(smalltalk.MessageNotUnderstood.$$new());
}
, "dnu", unescape("doesNotUnderstand%3A%20aMessage%0D%09%22%20Private%20-%20Basic%20implementation%20of%20a%20message%20sent%20and%20not%20understood%20by%20the%20receiver.%20%22%0D%0D%09%5EMessageNotUnderstood%20new%0D%09%09receiver%3A%20self%3B%0D%09%09message%3A%20aMessage%3B%0D%09%09signal"));
smalltalk.bind(smalltalk.Object, unescape("dnu%3AwithArguments%3A"), "dnu_withArguments_", function Object__dnu_withArguments_(selector,anArray){
const self = this; return self.doesNotUnderstand_((smalltalk.Message.selector_arguments_(selector,anArray)));
}
, "dnu", unescape("dnu%3A%20selector%20withArguments%3A%20anArray%0D%09%22%20Private%20-%20Basic%20implementation%20of%20a%20message%20sent%20and%20not%20understood%20by%20the%20receiver.%20%22%0D%0D%09%5Eself%20doesNotUnderstand%3A%20%28Message%0D%09%09selector%3A%20selector%0D%09%09arguments%3A%20anArray%29"));
smalltalk.bind(smalltalk.Object, unescape("json"), "json", function Object__json(){
const self = this; return self.asJSONObject();
}
, "converting", unescape("json%0D%09%22%20Return%20the%20receiver%20as%20a%20hash%20object.%20%22%0D%0D%09%5Eself%20asJSONObject"));
smalltalk.bind(smalltalk.Object, unescape("asJson%3A"), "asJson_", function Object__asJson_(anObject){
const self = this; if (((nil.isNil_(anObject))).valueOf()) {return nil.json()};
if ((self.isObject_(anObject)).valueOf()) {return anObject.json()} else {return anObject};
}
, "converting", unescape("asJson%3A%20anObject%0D%09%22%20Return%20anObject%20as%20a%20hash%20object.%20%22%0D%0D%09anObject%20isNil%20ifTrue%3A%20%5B%20%5Enil%20json%20%5D.%0D%09%5E%28self%20isObject%3A%20anObject%29%0D%09%09ifTrue%3A%20%5B%20anObject%20json%20%5D%0D%09%09ifFalse%3A%20%5B%20anObject%20%5D"));
smalltalk.bind(smalltalk.Object, unescape("asJSONObject"), "asJSONObject", function Object__asJSONObject(){
var result = nil;
const self = this; result=(self.smalltalk()).emptyJSONObject();
self.jsonFieldsDo_ignoring_((function Object__(field,value){
if ((((nil.isNil_(value)===false)).or_((function Object__(){
return self.jsonExportNil();
}
))).valueOf()) {return (result[field]=self.asJson_(value))} else {return nil};
}
),(self.jsonHiddenNames()));
return result;
}
, "converting", unescape("asJSONObject%0D%09%22%20Return%20the%20mapping%20of%20the%20receiver%20to%20JSON%20structure.%20%22%0D%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%20self%20smalltalk%20emptyJSONObject.%0D%09self%20jsonFieldsDo%3A%20%5B%3Afield%20%3Avalue%7C%0D%09%09%28value%20notNil%20or%3A%20%5B%20self%20jsonExportNil%20%5D%29%20ifTrue%3A%20%5B%0D%09%09%09result%20basicAt%3A%20field%20put%3A%20%28self%20asJson%3A%20value%29%0D%09%09%5D.%0D%09%5D%09ignoring%3A%20self%20jsonHiddenNames.%0D%09%5Eresult"));
smalltalk.bind(smalltalk.Object, unescape("jsonHiddenNames"), "jsonHiddenNames", function Object__jsonHiddenNames(){
const self = this; return [];
}
, "converting", unescape("jsonHiddenNames%0D%09%22%20Private%20-%20Return%20the%20names%20of%20the%20fields%20to%20skip%20when%20mapping%20the%20receiver%20to%20JSON%20structure.%20%22%0D%0D%09%5E%23%28%29"));
smalltalk.bind(smalltalk.Object, unescape("jsonFieldsDo%3Aignoring%3A"), "jsonFieldsDo_ignoring_", function Object__jsonFieldsDo_ignoring_(aBlock,ignored){
const self = this; return (self.$klass).allInstVarNamesDo_((function Object__(each){
if ((((nil.isNil_(ignored)===false)).and_((function Object__(){
return ignored.includes_(each);
}
))).not()) {return aBlock.value_value_(each,(self.instVarAt_(each)))} else {return nil};
}
));
}
, "converting", unescape("jsonFieldsDo%3A%20aBlock%20ignoring%3A%20ignored%0D%09%22%20Private%20-%20Evaluates%20a%28TwoArguments%29Block%20with%20the%20fields%20to%20map%20the%20receiver%20to%20JSON%20structure.%20%22%0D%0D%09%5Eself%20class%20allInstVarNamesDo%3A%20%5B%3Aeach%7C%0D%09%09%28ignored%20notNil%20and%3A%20%5B%20ignored%20includes%3A%20each%20%5D%29%20ifFalse%3A%20%5B%0D%09%09%09aBlock%20value%3A%20each%20value%3A%20%28self%20instVarAt%3A%20each%29%0D%09%09%5D.%0D%09%5D"));
smalltalk.bind(smalltalk.Object, unescape("jsonExportNil"), "jsonExportNil", function Object__jsonExportNil(){
const self = this; return false;
}
, "converting", unescape("jsonExportNil%0D%09%22%20Private%20-%20Return%20true%20if%20the%20receiver%20export%20nil%20values.%20%22%0D%0D%09%5Efalse"));
smalltalk.bind(smalltalk.Object, unescape("mustBeBoolean"), "mustBeBoolean", function Object__mustBeBoolean(){
const self = this; return self.error_("Must be boolean.");
}
, "testing", unescape("mustBeBoolean%0D%09%22%20Signal%20an%20error%20if%20the%20receiver%20is%20not%20a%20Boolean.%20%22%0D%0D%09%5Eself%20error%3A%20%27Must%20be%20boolean.%27"));
smalltalk.bind(smalltalk.Boolean, unescape("mustBeBoolean"), "mustBeBoolean", function Boolean__mustBeBoolean(){
const self = this; return self;
}
, "testing", unescape("mustBeBoolean%0D%09%22%20Signal%20an%20error%20if%20the%20receiver%20is%20not%20a%20Boolean.%20%22%0D%0D%09%5Eself"));
smalltalk.addClass("Smalltalk", smalltalk.Object, [], 'Kernel');
smalltalk.Smalltalk.$classVariableNames=("");
smalltalk.bind(smalltalk.Smalltalk.$klass, unescape("current"), "current", function Smalltalk_class__current(){
const self = this; return self.smalltalk();
}
, "accessing", unescape("current%0D%09%22%20Return%20the%20current%20smalltalk%20system%20instance.%20%22%0D%0D%09%5Eself%20smalltalk"));
smalltalk.bind(smalltalk.Smalltalk.$klass, unescape("at%3AifAbsent%3A"), "at_ifAbsent_", function Smalltalk_class__at_ifAbsent_(aGlobalName,aBlock){
const self = this; return (function(){var $1$; $1$ = self.current()[aGlobalName]; return nil.isNil_($1$) ? aBlock.value() : $1$})();
}
, "accessing", unescape("at%3A%20aGlobalName%20ifAbsent%3A%20aBlock%0D%09%22%20Return%20the%20global%20known%20as%20aGlobalName%20in%20the%20receiver%20or%20the%20result%20of%20evaluating%20aBlock.%20%22%0D%0D%09%5Eself%20current%20basicAt%3A%20aGlobalName%20ifAbsent%3A%20aBlock"));
smalltalk.bind(smalltalk.Smalltalk.$klass, unescape("includesKey%3A"), "includesKey_", function Smalltalk_class__includesKey_(aGlobalName){
const self = this; return ((nil.isNil_((function(){var $1$; $1$ = smalltalk.Smalltalk.current()[aGlobalName]; return nil.isNil_($1$) ? nil : $1$})()))).not();
}
, "accessing", unescape("includesKey%3A%20aGlobalName%0D%09%22%20Returns%20true%20if%20the%20global%20aGlobalName%20is%20defined%20in%20the%20receiver.%20%22%0D%0D%09%5E%28%28Smalltalk%20current%0D%09%09basicAt%3A%20aGlobalName%20ifAbsent%3A%20%5Bnil%5D%29%0D%09%09isNil%29%20not"));
smalltalk.bind(smalltalk.Smalltalk.$klass, unescape("at%3A"), "at_", function Smalltalk_class__at_(aGlobalName){
const self = this; return (function(){var $1$; $1$ = self.current()[aGlobalName]; return nil.isNil_($1$) ? nil : $1$})();
}
, "accessing", unescape("at%3A%20aGlobalName%0D%09%22%20Return%20the%20global%20known%20as%20aGlobalName%20in%20the%20receiver%20or%20nil.%20%22%0D%0D%09%5Eself%20current%20basicAt%3A%20aGlobalName%20ifAbsent%3A%20%5B%20nil%20%5D"));
smalltalk.bind(smalltalk.Smalltalk.$klass, unescape("at%3Aput%3A"), "at_put_", function Smalltalk_class__at_put_(aGlobalName,anObject){
const self = this; return ((self.current())[aGlobalName]=anObject);
}
, "accessing", unescape("at%3A%20aGlobalName%20put%3A%20anObject%0D%09%22%20Set%20the%20global%20known%20as%20aGlobalName%20in%20the%20receiver%20top%20anObject.%20%22%0D%0D%09%5Eself%20current%20basicAt%3A%20aGlobalName%20put%3A%20anObject"));
smalltalk.bind(smalltalk.Smalltalk.$klass, unescape("at%3AifAbsentPut%3A"), "at_ifAbsentPut_", function Smalltalk_class__at_ifAbsentPut_(aGlobalName,aBlock){
const self = this; return self.at_ifAbsent_(aGlobalName,(function Smalltalk_class__(){
return self.at_put_(aGlobalName,(aBlock.value()));
}
));
}
, "accessing", unescape("at%3A%20aGlobalName%20ifAbsentPut%3A%20aBlock%0D%09%22%20Return%20the%20global%20known%20as%20aGlobalName%20in%20the%20receiver%20or%20the%20result%20of%20evaluating%20aBlock.%0D%09Set%20the%20global%20to%20return%20value%20if%20was%20absent.%0D%09%22%0D%0D%09%5Eself%20at%3A%20aGlobalName%20ifAbsent%3A%20%5B%0D%09%09self%20at%3A%20aGlobalName%20put%3A%20aBlock%20value%0D%09%5D"));
smalltalk.bind(smalltalk.Smalltalk.$klass, unescape("removeKey%3AifAbsent%3A"), "removeKey_ifAbsent_", function Smalltalk_class__removeKey_ifAbsent_(aKey,aBlock){
const self = this; return (self.current()).removeKey_ifAbsent_(aKey,aBlock);
}
, "removing", unescape("removeKey%3A%20aKey%20ifAbsent%3A%20aBlock%0D%09%22%20Remove%20the%20binding%20at%20aKey.%20%22%0D%0D%09%5Eself%20current%20removeKey%3A%20aKey%20ifAbsent%3A%20aBlock"));
smalltalk.bind(smalltalk.Smalltalk.$klass, unescape("@"), "_at", function Smalltalk_class___at(aGlobalName){
var binding = nil;
const self = this; var $early={name:"stReturn"};
try {
binding=self.at_ifAbsent_(aGlobalName,(function Smalltalk_class__(){
$early.result=smalltalk.Array.$$new(); throw ($early);
}
));
return smalltalk.Array.with_(binding);
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "accessing", unescape("@%20aGlobalName%0D%09%22%20Return%20a%20collection%20with%20the%20objects%20bound%20to%20aGlobalName%20%28or%20an%20empty%20collection%20if%20global%20is%20not%20defined%29.%0D%09It%20is%20used%20in%20expressions%20like%3A%0D%09%09Smalltalk%20@%20%23MyGlobal%20do%3A%20%5B%3Aglobal%7C%20...%20%5D%0D%09%22%0D%0D%09%7C%20binding%20%7C%0D%09binding%20%3A%3D%20self%20at%3A%20aGlobalName%20ifAbsent%3A%20%5B%20%5EArray%20new%20%5D.%0D%09%5EArray%20with%3A%20binding"));
smalltalk.bind(smalltalk.Smalltalk.$klass, unescape("definePool%3Awith%3A"), "definePool_with_", function Smalltalk_class__definePool_with_(poolName,tuples){
const self = this; return (self.current()).definePool_with_(poolName,tuples);
}
, "accessing", unescape("definePool%3A%20poolName%20with%3A%20tuples%0D%09%22%20Define%20the%20pool%20dictionary%20from%20tuples%20specification.%20%22%0D%0D%09%5Eself%20current%20definePool%3A%20poolName%20with%3A%20tuples"));
smalltalk.bind(smalltalk.Smalltalk.$klass, unescape("poolDictionary%3AifAbsent%3A"), "poolDictionary_ifAbsent_", function Smalltalk_class__poolDictionary_ifAbsent_(aPoolName,aBlock){
const self = this; return (self.current()).poolDictionary_ifAbsent_(aPoolName,aBlock);
}
, "accessing", unescape("poolDictionary%3A%20aPoolName%20ifAbsent%3A%20aBlock%0D%09%22%20Return%20the%20pool%20dictionary%20named%20aPoolName%20or%20the%20result%20of%20evaluating%20aBlock.%20%22%0D%0D%09%5Eself%20current%20poolDictionary%3A%20aPoolName%20ifAbsent%3A%20aBlock"));
smalltalk.bind(smalltalk.Smalltalk.$klass, unescape("objectAt%3AifAbsent%3A"), "objectAt_ifAbsent_", function Smalltalk_class__objectAt_ifAbsent_(aName,aBlock){
const self = this; return (self.current()).objectAt_ifAbsent_(aName,aBlock);
}
, "accessing", unescape("objectAt%3A%20aName%20ifAbsent%3A%20aBlock%0D%09%22%20Return%20the%20%28global%20scoped%29%20smalltalk%20object%20at%20aName%20or%20the%20result%20of%20evaluating%20aBlock%20%28if%20undefined%20or%20not%20an%20Object%20instance%29.%20%22%0D%0D%09%5Eself%20current%20objectAt%3A%20aName%20ifAbsent%3A%20aBlock"));
smalltalk.bind(smalltalk.Smalltalk.$klass, unescape("jsObjectAt%3AifAbsent%3A"), "jsObjectAt_ifAbsent_", function Smalltalk_class__jsObjectAt_ifAbsent_(aName,aBlock){
const self = this; return (self.current()).jsObjectAt_ifAbsent_(aName,aBlock);
}
, "accessing", unescape("jsObjectAt%3A%20aName%20ifAbsent%3A%20aBlock%0D%09%22%20Return%20the%20%28global%20scoped%29%20javascript%20object%20at%20aName%20or%20the%20result%20of%20evaluating%20aBlock%20%28if%20undefined%29.%20%22%0D%0D%09%5Eself%20current%20jsObjectAt%3A%20aName%20ifAbsent%3A%20aBlock"));
smalltalk.bind(smalltalk.Smalltalk.$klass, unescape("jsObjectAt%3A"), "jsObjectAt_", function Smalltalk_class__jsObjectAt_(aName){
const self = this; return self.jsObjectAt_ifAbsent_(aName,(function Smalltalk_class__(){
return self.error_(("Undefined "._comma(aName)));
}
));
}
, "accessing", unescape("jsObjectAt%3A%20aName%0D%09%22%20Return%20the%20%28global%20scoped%29%20javascript%20object%20at%20aName.%20%22%0D%0D%09%5Eself%20jsObjectAt%3A%20aName%20ifAbsent%3A%20%5B%20self%20error%3A%20%27Undefined%20%27%2CaName%20%5D"));
smalltalk.bind(smalltalk.Smalltalk.$klass, unescape("global"), "global", function Smalltalk_class__global(){
const self = this; return (self.smalltalk()).jsGlobal();
}
, "accessing", unescape("global%0D%09%22%20Return%20the%20global%20%28javascript%29%20object.%20%22%0D%0D%09%5Eself%20smalltalk%20jsGlobal"));
smalltalk.bind(smalltalk.Smalltalk.$klass, unescape("classes"), "classes", function Smalltalk_class__classes(){
const self = this; return (self.current()).classes();
}
, "accessing", unescape("classes%0D%09%22%20Return%20the%20classes%20defined%20in%20current%20instance.%20%22%0D%0D%09%5Eself%20current%20classes"));
smalltalk.bind(smalltalk.Smalltalk.$klass, unescape("rootClasses"), "rootClasses", function Smalltalk_class__rootClasses(){
const self = this; return (self.current()).rootClasses();
}
, "accessing", unescape("rootClasses%0D%09%22%20Return%20the%20collection%20of%20topLevel%20classes%20in%20the%20receiver.%20%22%0D%0D%09%5Eself%20current%20rootClasses"));
smalltalk.bind(smalltalk.Smalltalk.$klass, unescape("implementorsOf%3A"), "implementorsOf_", function Smalltalk_class__implementorsOf_(aSymbol){
const self = this; return (self.current()).implementorsOf_(aSymbol);
}
, "tools", unescape("implementorsOf%3A%20aSymbol%0D%09%22%20Return%20a%20collection%20of%20methods%20implementing%20aSymbol.%20%22%0D%0D%09%5Eself%20current%20implementorsOf%3A%20aSymbol"));
smalltalk.bind(smalltalk.Smalltalk.$klass, unescape("gc"), "gc", function Smalltalk_class__gc(){
const self = this; var $early={name:"stReturn"};
try {
(self.jsObjectAt_ifAbsent_("gc",(function Smalltalk_class__(){
$early.result=false; throw ($early);
}
))).value();
return true;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "tools", unescape("gc%0D%09%22%20Collect%20garbage.%20%22%0D%0D%09%28self%20jsObjectAt%3A%20%23gc%20ifAbsent%3A%20%5B%20%5Efalse%20%5D%29%20value.%0D%09%5Etrue"));
smalltalk.bind(smalltalk.Smalltalk, unescape("globalAt%3A"), "globalAt_", function Smalltalk__globalAt_(aKey){
const self = this; return (function(){var $1$; $1$ = self[aKey]; return nil.isNil_($1$) ? nil : $1$})();
}
, "accessing", unescape("globalAt%3A%20aKey%0D%09%22%20Return%20the%20global%20at%20aKey%20%28or%20nil%29.%20%22%0D%0D%09%5Eself%20basicAt%3A%20aKey"));
smalltalk.bind(smalltalk.Smalltalk, unescape("globalAt%3AifAbsent%3A"), "globalAt_ifAbsent_", function Smalltalk__globalAt_ifAbsent_(aKey,aBlock){
const self = this; return (function(){var $1$; $1$ = self[aKey]; return nil.isNil_($1$) ? aBlock.value() : $1$})();
}
, "accessing", unescape("globalAt%3A%20aKey%20ifAbsent%3A%20aBlock%0D%09%22%20Return%20the%20global%20at%20aKey%20%28or%20the%20result%20of%20evaluating%20aBlock%29.%20%22%0D%0D%09%5Eself%20basicAt%3A%20aKey%20ifAbsent%3A%20aBlock"));
smalltalk.bind(smalltalk.Smalltalk, unescape("rootClasses"), "rootClasses", function Smalltalk__rootClasses(){
const self = this; return (self.classes()).select_((function Smalltalk__(each){
return (nil.isNil_(each.superclass()));
}
));
}
, "accessing", unescape("rootClasses%0D%09%22%20Return%20the%20collection%20of%20topLevel%20classes%20in%20the%20receiver.%20%22%0D%0D%09%5Eself%20classes%20select%3A%20%5B%3Aeach%7C%20each%20superclass%20isNil%20%5D"));
smalltalk.bind(smalltalk.Smalltalk, unescape("implementorsOf%3A"), "implementorsOf_", function Smalltalk__implementorsOf_(aSymbol){
const self = this; return (self.rootClasses()).inject_into_([],(function Smalltalk__(total,each){
return total._comma((each.implementorsOf_(aSymbol)));
}
));
}
, "testing", unescape("implementorsOf%3A%20aSymbol%0D%09%22%20Return%20a%20collection%20of%20methods%20implementing%20aSymbol.%20%22%0D%0D%09%5Eself%20rootClasses%20inject%3A%20%23%28%29%20into%3A%20%5B%3Atotal%20%3Aeach%7C%0D%09%09total%20%2C%28each%20implementorsOf%3A%20aSymbol%29%0D%09%5D"));
smalltalk.bind(smalltalk.Smalltalk, unescape("objectAt%3AifAbsent%3A"), "objectAt_ifAbsent_", function Smalltalk__objectAt_ifAbsent_(aName,aBlock){
var result = nil;
const self = this; result=self.jsObjectAt_ifAbsent_(aName,aBlock);
if (((nil.isNil_((function(){var $1$; $1$ = result["yourself"]; return nil.isNil_($1$) ? nil : $1$})())===false)).valueOf()) {return result} else {return nil};
}
, "accessing", unescape("objectAt%3A%20aName%20ifAbsent%3A%20aBlock%0D%09%22%20Return%20the%20%28global%20scoped%29%20smalltalk%20object%20at%20aName%20or%20the%20result%20of%20evaluating%20aBlock%20%28if%20undefined%20or%20not%20an%20Object%20instance%29.%20%22%0D%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%20self%20jsObjectAt%3A%20aName%20ifAbsent%3A%20aBlock.%0D%09%5E%28result%20basicAt%3A%20%23yourself%29%20notNil%20ifTrue%3A%20%5B%20result%20%5D"));
smalltalk.bind(smalltalk.Smalltalk, unescape("jsObjectAt%3AifAbsent%3A"), "jsObjectAt_ifAbsent_", function Smalltalk__jsObjectAt_ifAbsent_(aName,aBlock){
const self = this; return (function(){var $1$; $1$ = smalltalk.Smalltalk.global()[aName]; return nil.isNil_($1$) ? aBlock.value() : $1$})();
}
, "accessing", unescape("jsObjectAt%3A%20aName%20ifAbsent%3A%20aBlock%0D%09%22%20Return%20the%20%28global%20scoped%29%20javascript%20object%20at%20aName%20or%20the%20result%20of%20evaluating%20aBlock%20%28if%20undefined%29.%20%22%0D%0D%09%5ESmalltalk%20global%20basicAt%3A%20aName%20ifAbsent%3A%20aBlock"));
smalltalk.bind(smalltalk.Smalltalk, unescape("jsObjectAt%3A"), "jsObjectAt_", function Smalltalk__jsObjectAt_(aName){
const self = this; return self.jsObjectAt_ifAbsent_(aName,(function Smalltalk__(){
return self.error_(("Undefined "._comma(aName)));
}
));
}
, "accessing", unescape("jsObjectAt%3A%20aName%0D%09%22%20Return%20the%20%28global%20scoped%29%20javascript%20object%20at%20aName.%20%22%0D%0D%09%5Eself%20jsObjectAt%3A%20aName%20ifAbsent%3A%20%5B%20self%20error%3A%20%27Undefined%20%27%2CaName%20%5D"));
smalltalk.bind(smalltalk.Smalltalk, unescape("removeKey%3AifAbsent%3A"), "removeKey_ifAbsent_", function Smalltalk__removeKey_ifAbsent_(aKey,aBlock){
const self = this; var $early={name:"stReturn"};
try {
(function(){var $1$; $1$ = self[aKey]; return nil.isNil_($1$) ? (function Smalltalk__(){
$early.result=aBlock.value(); throw ($early);
}
)() : $1$})();
self.basicDelete_(aKey);
return self;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "removing", unescape("removeKey%3A%20aKey%20ifAbsent%3A%20aBlock%0D%09%22%20Remove%20the%20binding%20at%20aKey.%20%22%0D%0D%09self%20basicAt%3A%20aKey%20ifAbsent%3A%20%5B%20%5EaBlock%20value%20%5D.%0D%09self%20basicDelete%3A%20aKey"));
smalltalk.bind(smalltalk.Smalltalk, unescape("definePool%3A"), "definePool_", function Smalltalk__definePool_(poolName){
const self = this; return self.definePool_with_(poolName,(smalltalk.Array.$$new()));
}
, "accessing", unescape("definePool%3A%20poolName%0D%09%22%20Define%20the%20pool%20dictionary%20%28if%20it%20is%20not%20defined%20yet%29.%20%22%0D%0D%09%5Eself%20definePool%3A%20poolName%20with%3A%20Array%20new"));
smalltalk.bind(smalltalk.Smalltalk, unescape("poolDictionary%3AifAbsent%3A"), "poolDictionary_ifAbsent_", function Smalltalk__poolDictionary_ifAbsent_(aPoolName,aBlock){
const self = this; return (function(){var $1$; $1$ = self[aPoolName]; return nil.isNil_($1$) ? aBlock.value() : $1$})();
}
, "accessing", unescape("poolDictionary%3A%20aPoolName%20ifAbsent%3A%20aBlock%0D%09%22%20Return%20the%20pool%20dictionary%20named%20aPoolName%20or%20the%20result%20of%20evaluating%20aBlock.%20%22%0D%0D%09%5Eself%20basicAt%3A%20aPoolName%20ifAbsent%3A%20%5B%20aBlock%20value%20%5D"));
smalltalk.bind(smalltalk.Smalltalk, unescape("poolDictionary%3A"), "poolDictionary_", function Smalltalk__poolDictionary_(aPoolName){
const self = this; return self.poolDictionary_ifAbsent_(aPoolName,(function Smalltalk__(){
return self.definePool_(aPoolName);
}
));
}
, "accessing", unescape("poolDictionary%3A%20aPoolName%0D%09%22%20Return%20the%20pool%20dictionary%20named%20aPoolName.%20%22%0D%0D%09%5Eself%20poolDictionary%3A%20aPoolName%20ifAbsent%3A%20%5B%0D%09%09%22self%20error%3A%20%27Missing%20Pool%20dictionary%3A%20%27%2CaPoolName.%20%22%0D%09%09self%20definePool%3A%20aPoolName%0D%09%5D"));
smalltalk.bind(smalltalk.Smalltalk, unescape("printDefinePool%3Awith%3A"), "printDefinePool_with_", function Smalltalk__printDefinePool_with_(poolName,tuples){
const self = this; self.print_(((unescape("smalltalk.definePool_with_%28%22")._comma(poolName))._comma(unescape("%22%2C%5B"))));
tuples.do_((function Smalltalk__(tuple){
if ((tuple.isArray()).valueOf()) {return self.print_(((((unescape("%09%5B")._comma(((tuple.first()).printString())))._comma(unescape("%2C")))._comma(((tuple.last()).asJavascript())))._comma(unescape("%5D%2C"))))} else {return self.print_(((unescape("%09")._comma((tuple.asJavascript())))._comma(unescape("%2C"))))};
}
));
self.print_(unescape("%09%5D%29%3B"));
return self;
}
, "compiling", unescape("printDefinePool%3A%20poolName%20with%3A%20tuples%0D%09%22%20DEBUG%20-%20Dump%20definition%20of%20the%20pool%20dictionary.%20%22%0D%0D%09self%20print%3A%20%27smalltalk.definePool_with_%28%22%27%2CpoolName%2C%27%22%2C%5B%27.%0D%09tuples%20do%3A%20%5B%3Atuple%7C%0D%09%09tuple%20isArray%20ifTrue%3A%20%5B%0D%09%09%09self%20print%3A%20%27%09%5B%27%2Ctuple%20first%20printString%2C%27%2C%27%2Ctuple%20last%20asJavascript%2C%27%5D%2C%27%0D%09%09%5D%20ifFalse%3A%20%5B%0D%09%09%09self%20print%3A%20%27%09%27%2Ctuple%20asJavascript%20%2C%27%2C%27%0D%09%09%5D%0D%09%5D.%0D%09self%20print%3A%20%27%09%5D%29%3B%27."));
smalltalk.bind(smalltalk.Smalltalk, unescape("definePool%3Awith%3A"), "definePool_with_", function Smalltalk__definePool_with_(poolName,tuples){
var dictionary = nil;
var offset = nil;
const self = this; dictionary=(function(){var $1$; $1$ = self[poolName]; return nil.isNil_($1$) ? (self[poolName]=smalltalk.PoolDictionary.$$new()) : $1$})();
offset=(0);
tuples.do_((function Smalltalk__(each){
if ((each.isArray()).valueOf()) {dictionary.at_put_((each.first()),(each.last()));
if (((each.last()).isNumber()).valueOf()) {return offset=(each.last())._plus((1))} else {return nil}} else {if ((each.isNumber()).valueOf()) {return offset=each} else {dictionary.at_put_(each,offset);
return offset=offset._plus((1))}};
}
));
return dictionary;
}
, "compiling", unescape("definePool%3A%20poolName%20with%3A%20tuples%0D%09%22%20Define%20the%20pool%20dictionary.%20%22%0D%0D%09%7C%20dictionary%20offset%20%7C%0D%09dictionary%20%3A%3D%20self%20basicAt%3A%20poolName%20ifAbsent%3A%20%5B%0D%09%09self%20basicAt%3A%20poolName%20put%3A%20PoolDictionary%20new%0D%09%5D.%0D%09offset%20%3A%3D%200.%0D%09tuples%20do%3A%20%5B%3Aeach%7C%0D%09%09each%20isArray%20ifTrue%3A%20%5B%0D%09%09%09dictionary%20at%3A%20each%20first%20put%3A%20each%20last.%0D%09%09%09each%20last%20isNumber%20ifTrue%3A%20%5B%20offset%20%3A%3D%20each%20last%20+%201%20%5D.%0D%09%09%5D%20ifFalse%3A%20%5B%0D%09%09%09each%20isNumber%20ifTrue%3A%20%5B%20offset%20%3A%3D%20each%20%5D%0D%09%09%09ifFalse%3A%20%5B%0D%09%09%09%09dictionary%20at%3A%20each%20put%3A%20offset.%0D%09%09%09%09offset%20%3A%3D%20offset%20+%201.%0D%09%09%09%5D%0D%09%09%5D%0D%09%5D.%0D%09%5Edictionary"));
smalltalk.bind(smalltalk.Smalltalk, unescape("state"), "state", function Smalltalk__state(){
const self = this; return (function(){var $1$; $1$ = self["$state"]; return nil.isNil_($1$) ? nil : $1$})();
}
, "accessing", unescape("state%0D%09%22%20Return%20the%20state%20of%20the%20receiver%20%28or%20nil%29.%20%22%0D%0D%09%5Eself%20basicAt%3A%20%27%24state%27"));
smalltalk.bind(smalltalk.Smalltalk, unescape("state%3A"), "state_", function Smalltalk__state_(aState){
const self = this; (self["$state"]=aState);
return self;
}
, "accessing", unescape("state%3A%20aState%0D%09%22%20Set%20the%20state%20of%20the%20receiver.%20%22%0D%0D%09self%20basicAt%3A%20%27%24state%27%20put%3A%20aState"));
smalltalk.bind(smalltalk.Smalltalk, unescape("withState%3Ado%3A"), "withState_do_", function Smalltalk__withState_do_(aState,aBlock){
var old = nil;
const self = this; old=self.state();
return (function Smalltalk__(){
self.state_(aState);
return aBlock.value();
}
).ensure_((function Smalltalk__(){
return self.state_(old);
}
));
}
, "accessing", unescape("withState%3A%20aState%20do%3A%20aBlock%0D%09%22%20Set%20the%20state%20of%20the%20receiver%20to%20aState%20during%20execution%20of%20aBlock.%20%22%0D%0D%09%7C%20old%20%7C%0D%09old%20%3A%3D%20self%20state.%0D%09%5E%5B%09self%20state%3A%20aState.%0D%09%09aBlock%20value%0D%09%5D%20ensure%3A%20%5B%0D%09%09self%20state%3A%20old%0D%09%5D"));
smalltalk.bind(smalltalk.Smalltalk, unescape("eval%3A"), "eval_", function Smalltalk__eval_(jsExpression){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKSmalltalk.primEval(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "javascript", unescape("eval%3A%20jsExpression%0D%09%22%20Return%20the%20result%20of%20evaluating%20a%20javascript%20expression%20in%20global%20context.%20%22%0D%0D%09%3Cprimitive%3A%27primEval%27%20module%3A%27SKSmalltalk%27%3E%0D%09%5Eself%20primitiveFailed%20"));
smalltalk.bind(smalltalk.Smalltalk, unescape("eval%3Aas%3A"), "eval_as_", function Smalltalk__eval_as_(jsExpression,aState){
const self = this; return self.withState_do_(aState,(function Smalltalk__(){
return self.eval_(jsExpression);
}
));
}
, "javascript", unescape("eval%3A%20jsExpression%20as%3A%20aState%0D%09%22%20Return%20the%20result%20of%20evaluating%20a%20javascript%20expression%20in%20global%20context.%0D%09The%20state%20of%20the%20system%20change%20to%20state%20while%20evaluating%20the%20expression.%0D%09%22%0D%0D%09%5Eself%20withState%3A%20aState%20do%3A%20%5B%20self%20eval%3A%20jsExpression%20%5D"));
smalltalk.bind(smalltalk.Smalltalk, unescape("removeSources"), "removeSources", function Smalltalk__removeSources(){
const self = this; (self.classes()).do_((function Smalltalk__(each){
return each.removeSources();
}
));
return self;
}
, "tools", unescape("removeSources%0D%09%22%20Remove%20all%20development%20sources%20of%20the%20receiver.%20%22%0D%0D%09self%20classes%20do%3A%20%5B%3Aeach%20%7C%20each%20removeSources%20%5D"));
smalltalk.bind(smalltalk.Smalltalk, unescape("readJSON%3A"), "readJSON_", function Smalltalk__readJSON_(anObject){
const self = this; return self.readJSObject_(anObject);
}
, "json", unescape("readJSON%3A%20anObject%0D%09%22%20Return%20an%20object%20read%20from%20JSON%20map%20object%20anObject.%20%22%0D%0D%09%5Eself%20readJSObject%3A%20anObject"));
smalltalk.bind(smalltalk.Smalltalk, unescape("shallowCopy"), "shallowCopy", function Smalltalk__shallowCopy(){
const self = this; return self;
}
, "copying", unescape("shallowCopy%0D%09%22%20Return%20a%20shallow%20copy%20of%20the%20receiver.%20%22%0D%0D%09%5Eself"));
smalltalk.bind(smalltalk.Smalltalk, unescape("deepCopy"), "deepCopy", function Smalltalk__deepCopy(){
const self = this; return self;
}
, "copying", unescape("deepCopy%0D%09%22%20Return%20a%20deep%20copy%20of%20the%20receiver.%20%22%0D%0D%09%5Eself"));
smalltalk.addClass("Behavior", smalltalk.Object, [], 'Kernel');
smalltalk.Behavior.$classVariableNames=("");
smalltalk.bind(smalltalk.Behavior, unescape("new"), "$$new", function Behavior__$$new(){
const self = this; return (self.basicNew()).initialize();
}
, "instantiation", unescape("new%0D%09%22%20Return%20an%20instance%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20basicNew%20initialize"));
smalltalk.bind(smalltalk.Behavior, unescape("new%3A"), "new_", function Behavior__new_(size){
const self = this; return self.basicNew_(size);
}
, "instantiation", unescape("new%3A%20size%0D%09%22%20Return%20an%20instance%20of%20the%20receiver%20of%20specified%20size.%20%22%0D%0D%09%5Eself%20basicNew%3A%20size"));
smalltalk.bind(smalltalk.Behavior, unescape("basicNew%3A"), "basicNew_", function Behavior__basicNew_(size){
const self = this; return self.invalidMessage_("basicNew:");
}
, "instantiation", unescape("basicNew%3A%20size%0D%09%22%20Return%20an%20instance%20of%20the%20receiver%20of%20specified%20size.%20%22%0D%0D%09%5Eself%20invalidMessage%3A%20%23basicNew%3A"));
smalltalk.bind(smalltalk.Behavior, unescape("basicNew"), "basicNew", function Behavior__basicNew(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKObject.primBasicNew(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "instantiation", unescape("basicNew%0D%09%22%20Return%20a%20new%20%28non-initialized%29%20instance%20of%20the%20receiver.%20%22%0D%0D%09%3Cprimitive%3A%20%27primBasicNew%27%20module%3A%20%27SKObject%27%3E%0D%09%5Eself%20primitiveFailed%20"));
smalltalk.bind(smalltalk.Behavior, unescape("name"), "name", function Behavior__name(){
const self = this; return (function(){var $1$; $1$ = self["$className"]; return nil.isNil_($1$) ? nil : $1$})();
}
, "accessing", unescape("name%0D%09%22%20Return%20the%20name%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20basicAt%3A%20%27%24className%27"));
smalltalk.bind(smalltalk.Behavior, unescape("superclass"), "superclass", function Behavior__superclass(){
const self = this; return (function(){var $1$; $1$ = self["$superclass"]; return nil.isNil_($1$) ? nil : $1$})();
}
, "accessing", unescape("superclass%0D%09%22%20Return%20the%20superclass%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20basicAt%3A%20%27%24superclass%27"));
smalltalk.bind(smalltalk.Behavior, unescape("subclasses"), "subclasses", function Behavior__subclasses(){
const self = this; return (self.smalltalk()).subclasses_(self);
}
, "accessing", unescape("subclasses%0D%09%22%20Return%20the%20subclasses%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20smalltalk%20subclasses%3A%20self"));
smalltalk.bind(smalltalk.Behavior, unescape("allSubclasses"), "allSubclasses", function Behavior__allSubclasses(){
var result = nil;
const self = this; result=smalltalk.Array.$$new();
self.allSubclassesDo_((function Behavior__(each){
return result.add_(each);
}
));
return result;
}
, "testing", unescape("allSubclasses%0D%09%22%20Return%20all%20the%20subclasses%20of%20the%20receiver.%20%22%0D%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%20Array%20new.%0D%09self%20allSubclassesDo%3A%20%5B%3Aeach%7C%20result%20add%3A%20each%20%5D.%0D%09%5Eresult"));
smalltalk.bind(smalltalk.Behavior, unescape("allSubclassesDo%3A"), "allSubclassesDo_", function Behavior__allSubclassesDo_(aBlock){
const self = this; (self.smalltalk()).allSubclassesDo_value_(self,aBlock);
return self;
}
, "testing", unescape("allSubclassesDo%3A%20aBlock%0D%09%22%20Evaluates%20aBlock%20with%20all%20the%20subclasses%20of%20the%20receiver.%20%22%0D%0D%09self%20smalltalk%20allSubclassesDo%3A%20self%20value%3A%20aBlock"));
smalltalk.bind(smalltalk.Behavior, unescape("withAllSubclassesDo%3A"), "withAllSubclassesDo_", function Behavior__withAllSubclassesDo_(aBlock){
const self = this; aBlock.value_(self);
self.allSubclassesDo_(aBlock);
return self;
}
, "testing", unescape("withAllSubclassesDo%3A%20aBlock%0D%09%22%20Evaluates%20aBlock%20with%20the%20receiver%20and%20all%20the%20subclasses.%20%22%0D%0D%09aBlock%20value%3A%20self.%0D%09self%20allSubclassesDo%3A%20aBlock"));
smalltalk.bind(smalltalk.Behavior, unescape("withAllSubclasses"), "withAllSubclasses", function Behavior__withAllSubclasses(){
var result = nil;
const self = this; result=smalltalk.Array.with_(self);
self.allSubclassesDo_((function Behavior__(each){
return result.add_(each);
}
));
return result;
}
, "accessing", unescape("withAllSubclasses%0D%09%22%20Return%20a%20collection%20with%20the%20receiver%20and%20all%20subclasses.%20%22%0D%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%20Array%20with%3A%20self.%0D%09self%20allSubclassesDo%3A%20%5B%3Aeach%7C%20result%20add%3A%20each%20%5D.%0D%09%5Eresult"));
smalltalk.bind(smalltalk.Behavior, unescape("allSuperclassesDo%3A"), "allSuperclassesDo_", function Behavior__allSuperclassesDo_(aBlock){
var current = nil;
const self = this; current=self.superclass();
while(((nil.isNil_(current)===false)).valueOf()){aBlock.value_(current);
current=current.superclass()};;
return self;
}
, "accessing", unescape("allSuperclassesDo%3A%20aBlock%0D%09%22%20Evaluate%20aBlock%20with%20the%20superclasses%20of%20the%20receiver.%0D%09The%20superclasses%20are%20walked%20in%20inverse%20hierarchical%20order%2C%20i.e%20class%20Object%20is%20last.%0D%09%22%0D%0D%09%7C%20current%20%7C%0D%09current%20%3A%3D%20self%20superclass.%0D%09%5B%20current%20notNil%20%5D%20whileTrue%3A%20%5B%0D%09%20%20%20%20%20%20%20%20aBlock%20value%3A%20current.%0D%09%09current%20%3A%3D%20current%20superclass.%0D%09%5D"));
smalltalk.bind(smalltalk.Behavior, unescape("withAllSuperclassesDo%3A"), "withAllSuperclassesDo_", function Behavior__withAllSuperclassesDo_(aBlock){
const self = this; aBlock.value_(self);
return self.allSuperclassesDo_(aBlock);
}
, "accessing", unescape("withAllSuperclassesDo%3A%20aBlock%0D%09%22%20Evaluate%20aBlock%20with%20the%20receiver%20and%20it%27s%20superclasses.%0D%09The%20superclasses%20are%20walked%20in%20inverse%20hierarchical%20order%2C%20i.e%20class%20Object%20is%20last.%0D%09%22%0D%0D%09aBlock%20value%3A%20self.%0D%09%5Eself%20allSuperclassesDo%3A%20aBlock"));
smalltalk.bind(smalltalk.Behavior, unescape("withAllSuperclasses"), "withAllSuperclasses", function Behavior__withAllSuperclasses(){
const self = this; return (smalltalk.Array.with_(self))._comma((self.allSuperclasses()));
}
, "accessing", unescape("withAllSuperclasses%0D%09%22%20Return%20a%20collection%20with%20the%20receiver%20and%20all%20superclasses.%20%22%0D%0D%09%5E%28Array%20with%3A%20self%29%20%2C%20self%20allSuperclasses"));
smalltalk.bind(smalltalk.Behavior, unescape("allSuperclasses"), "allSuperclasses", function Behavior__allSuperclasses(){
var result = nil;
const self = this; result=smalltalk.Array.$$new();
self.allSuperclassesDo_((function Behavior__(each){
return result.add_(each);
}
));
return result;
}
, "accessing", unescape("allSuperclasses%0D%09%22%20Return%20a%20collection%20of%20all%20the%20superclasses%20of%20the%20receiver.%0D%09The%20superclasses%20are%20in%20inverse%20hierarchical%20order%2C%20i.e%20class%20Object%20is%20last.%0D%09%22%0D%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%20Array%20new.%0D%09self%20allSuperclassesDo%3A%20%5B%3Aeach%7C%20result%20add%3A%20each%20%5D.%0D%09%5Eresult"));
smalltalk.bind(smalltalk.Behavior, unescape("inheritsFrom%3A"), "inheritsFrom_", function Behavior__inheritsFrom_(aClass){
const self = this; var $early={name:"stReturn"};
try {
if (((nil.is_eqeq_(self,aClass))).valueOf()) {return true};
self.allSuperclassesDo_((function Behavior__(each){
if (((nil.is_eqeq_(aClass,each))).valueOf()) {$early.result=true; throw ($early)} else {return nil};
}
));
return false;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "testing", unescape("inheritsFrom%3A%20aClass%0D%09%22%20Return%20true%20if%20the%20receiver%20inherits%20from%20aClass.%20%22%0D%0D%09self%20%3D%3D%20aClass%20ifTrue%3A%20%5B%20%5Etrue%20%5D.%0D%09self%20allSuperclassesDo%3A%20%5B%3Aeach%7C%0D%09%09aClass%20%3D%3D%20each%20ifTrue%3A%20%5B%20%5Etrue%20%5D%0D%09%5D.%0D%09%5Efalse"));
smalltalk.bind(smalltalk.Behavior, unescape("prototype"), "prototype", function Behavior__prototype(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKBehavior.primPrototype(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; self.primitiveFailed();
return self;
}
, "accessing", unescape("prototype%0D%09%22%20Return%20the%20prototype%20of%20the%20receiver%20%28or%20nil%29.%20%22%0D%0D%09%3Cprimitive%3A%20%27primPrototype%27%20module%3A%20%27SKBehavior%27%3E%0D%09self%20primitiveFailed"));
smalltalk.bind(smalltalk.Behavior, unescape("primitiveConstructor"), "primitiveConstructor", function Behavior__primitiveConstructor(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKBehavior.primConstructor(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; self.primitiveFailed();
return self;
}
, "accessing", unescape("primitiveConstructor%0D%09%22%20Return%20the%20prototype%20of%20the%20receiver%20%28or%20nil%29.%20%22%0D%0D%09%3Cprimitive%3A%20%27primConstructor%27%20module%3A%20%27SKBehavior%27%3E%0D%09self%20primitiveFailed"));
smalltalk.bind(smalltalk.Behavior, unescape("constructorName"), "constructorName", function Behavior__constructorName(){
var result = nil;
var fn = nil;
const self = this; fn=self.primitiveConstructor();
result=(function(){var $1$; $1$ = fn["name"]; return nil.isNil_($1$) ? nil : $1$})();
if (((nil.isNil_(result)===false)).valueOf()) {if ((result.isEmpty()).valueOf()) {return nil};
if ((result._eq("$scarletConstructor")).valueOf()) {return nil};
return result};
result=((fn.toString()).upTo_(unescape("%28"))).asArrayOfSubstrings();
if (((result.size())._eq((2))).not()) {return nil};
return result.last();
}
, "accessing", unescape("constructorName%0D%09%22%20Return%20the%20name%20of%20the%20constructor%20of%20the%20receiver%20%28or%20nil%29.%20%22%0D%0D%09%7C%20result%20fn%20%7C%0D%09fn%20%3A%3D%20self%20primitiveConstructor.%0D%09result%20%3A%3D%20fn%20basicAt%3A%20%23name.%0D%09result%20notNil%20ifTrue%3A%20%5B%0D%09%09result%20isEmpty%20ifTrue%3A%20%5B%20%5Enil%20%5D.%0D%09%09result%20%3D%20%27%24scarletConstructor%27%20ifTrue%3A%20%5B%20%5Enil%20%5D.%0D%09%09%5Eresult%0D%09%5D.%0D%09result%20%3A%3D%20%28fn%20toString%20upTo%3A%20%24%28%29%20asArrayOfSubstrings.%0D%09result%20size%20%3D%202%20ifFalse%3A%20%5B%20%5Enil%20%5D.%0D%09%5Eresult%20last"));
smalltalk.bind(smalltalk.Behavior, unescape("methodsDo%3A"), "methodsDo_", function Behavior__methodsDo_(aBlock){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKBehavior.primMethodsDo(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "accessing", unescape("methodsDo%3A%20aBlock%0D%09%22%20Evaluates%20aBlock%20for%20all%20the%20methods%20defined%20by%20the%20receiver.%20%22%0D%0D%09%3Cprimitive%3A%20%27primMethodsDo%27%20module%3A%20%27SKBehavior%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.Behavior, unescape("selectorsDo%3A"), "selectorsDo_", function Behavior__selectorsDo_(aBlock){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKBehavior.primSelectorsDo(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "accessing", unescape("selectorsDo%3A%20aBlock%0D%09%22%20Evaluate%20aBlock%20for%20all%20the%20selectors%20implemented%20by%20the%20receiver.%20%22%0D%0D%09%3Cprimitive%3A%20%27primSelectorsDo%27%20module%3A%20%27SKBehavior%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.Behavior, unescape("methodDictionary"), "methodDictionary", function Behavior__methodDictionary(){
var result = nil;
const self = this; result=smalltalk.PoolDictionary.$$new();
self.methodsDo_((function Behavior__(each){
return result.at_put_((each.selector()),each);
}
));
return result;
}
, "accessing", unescape("methodDictionary%0D%09%22%20Return%20a%20dictionary%20with%20the%20methods%20implemented%20by%20the%20receiver.%20%22%0D%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%20PoolDictionary%20new.%0D%09self%20methodsDo%3A%20%5B%3Aeach%7C%20result%20at%3A%20each%20selector%20put%3A%20each%20%5D.%0D%09%5Eresult"));
smalltalk.bind(smalltalk.Behavior, unescape("selectors"), "selectors", function Behavior__selectors(){
var result = nil;
const self = this; result=smalltalk.Array.$$new();
self.selectorsDo_((function Behavior__(each){
return result.add_(each);
}
));
return result;
}
, "accessing", unescape("selectors%0D%09%22%20Return%20the%20selectors%20implemented%20by%20the%20receiver.%20%22%0D%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%20Array%20new.%0D%09self%20selectorsDo%3A%20%5B%3Aeach%7C%20result%20add%3A%20each%20%5D.%0D%09%5Eresult"));
smalltalk.bind(smalltalk.Behavior, unescape("implements%3A"), "implements_", function Behavior__implements_(aSymbol){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKBehavior.primImplements(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "testing", unescape("implements%3A%20aSymbol%0D%09%22%20Return%20true%20if%20the%20receiver%20implements%20message%20aSymbol.%20%22%0D%0D%09%3Cprimitive%3A%20%27primImplements%27%20module%3A%20%27SKBehavior%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.Behavior, unescape("compiledMethodAt%3A"), "compiledMethodAt_", function Behavior__compiledMethodAt_(aSymbol){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKBehavior.primCompiledMethodAt(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "accessing", unescape("compiledMethodAt%3A%20aSymbol%0D%09%22%20Return%20the%20compiled%20method%20at%20aSymbol%20implemented%20by%20the%20receiver%20%28or%20nil%29.%20%22%0D%0D%09%3Cprimitive%3A%20%27primCompiledMethodAt%27%20module%3A%20%27SKBehavior%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.Behavior, unescape("%3E%3E"), "_gt_gt", function Behavior___gt_gt(aSymbol){
const self = this; return self.compiledMethodAt_(aSymbol);
}
, "accessing", unescape("%3E%3E%20aSymbol%0D%09%22%20Return%20the%20method%20at%20aSymbol%20%28or%20nil%20if%20not%20implemented%20by%20the%20receiver%29.%20%22%0D%0D%09%5Eself%20compiledMethodAt%3A%20aSymbol"));
smalltalk.bind(smalltalk.Behavior, unescape("%3E%3E%3E"), "_gt_gt_gt", function Behavior___gt_gt_gt(aSymbol){
var result = nil;
const self = this; result=self.compiledMethodAt_(aSymbol);
if ((((nil.isNil_(result))).and_((function Behavior__(){
return (nil.isNil_(self.superclass())===false);
}
))).valueOf()) {return (self.superclass())._gt_gt_gt(aSymbol)};
return result;
}
, "accessing", unescape("%3E%3E%3E%20aSymbol%0D%09%22%20Return%20the%20method%20at%20aSymbol%20searching%20up%20in%20receiver%27s%20hierarchy%20%28or%20nil%20if%20not%20implemented%20by%20the%20receiver%20nor%20its%20superclasses%29.%20%22%0D%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%20self%20compiledMethodAt%3A%20aSymbol.%0D%09%28result%20isNil%20and%3A%20%5Bself%20superclass%20notNil%5D%29%20ifTrue%3A%20%5B%0D%09%09%5Eself%20superclass%20%3E%3E%3E%20aSymbol%0D%09%5D.%0D%09%5Eresult"));
smalltalk.bind(smalltalk.Behavior, unescape("instVarNames"), "instVarNames", function Behavior__instVarNames(){
const self = this; return (function(){var $1$; $1$ = self["$iVarNames"]; return nil.isNil_($1$) ? nil : $1$})();
}
, "accessing", unescape("instVarNames%0D%09%22%20Return%20the%20instance%20variable%20names%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20basicAt%3A%20%27%24iVarNames%27"));
smalltalk.bind(smalltalk.Behavior, unescape("allInstVarNames"), "allInstVarNames", function Behavior__allInstVarNames(){
var result = nil;
const self = this; result=self.instVarNames();
self.allSuperclassesDo_((function Behavior__(each){
return result=(each.instVarNames())._comma(result);
}
));
return result;
}
, "accessing", unescape("allInstVarNames%0D%09%22%20Return%20all%20of%20the%20instance%20variable%20names%20defined%20in%20the%20receiver%20and%20its%20superclasses.%20%22%0D%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%20self%20instVarNames.%0D%09self%20allSuperclassesDo%3A%20%5B%20%3Aeach%20%7C%20result%20%3A%3D%20each%20instVarNames%20%2C%20result%20%5D.%0D%09%5Eresult"));
smalltalk.bind(smalltalk.Behavior, unescape("instanceVariableNames"), "instanceVariableNames", function Behavior__instanceVariableNames(){
const self = this; return (function(){var $1$; $1$ = self["$iVarNames"]; return nil.isNil_($1$) ? nil : $1$})();
}
, "accessing", unescape("instanceVariableNames%0D%09%22%20Return%20the%20instance%20variable%20names%20defined%20by%20the%20receiver.%20%22%0D%0D%09%5Eself%20basicAt%3A%20%27%24iVarNames%27"));
smalltalk.bind(smalltalk.Behavior, unescape("propertyNames"), "propertyNames", function Behavior__propertyNames(){
const self = this; return (function(){var $1$; $1$ = self["$propertyNames"]; return nil.isNil_($1$) ? smalltalk.Array.$$new() : $1$})();
}
, "accessing", unescape("propertyNames%0D%09%22%20Return%20the%20property%20names%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20basicAt%3A%20%27%24propertyNames%27%20ifAbsent%3A%20%5B%20Array%20new%20%5D"));
smalltalk.bind(smalltalk.Behavior, unescape("propertyNames%3A"), "propertyNames_", function Behavior__propertyNames_(anArray){
const self = this; if (((nil.isNil_(anArray))).valueOf()) {return self.basicDelete_("$propertyNames")};
return (self["$propertyNames"]=anArray);
}
, "accessing", unescape("propertyNames%3A%20anArray%0D%09%22%20Set%20the%20property%20names%20of%20the%20receiver.%20%22%0D%0D%09anArray%20isNil%20ifTrue%3A%20%5B%20%5Eself%20basicDelete%3A%20%27%24propertyNames%27%20%5D.%0D%09%5Eself%20basicAt%3A%20%27%24propertyNames%27%20put%3A%20anArray"));
smalltalk.bind(smalltalk.Behavior, unescape("allPropertyNamesDo%3A"), "allPropertyNamesDo_", function Behavior__allPropertyNamesDo_(aBlock){
const self = this; (self.propertyNames()).do_(aBlock);
self.allSuperclassesDo_((function Behavior__(each){
return (each.propertyNames()).do_(aBlock);
}
));
return self;
}
, "accessing", unescape("allPropertyNamesDo%3A%20aBlock%0D%09%22%20Evaluates%20aBlock%20for%20the%20property%20names%20defined%20in%20the%20receiver%20and%20its%20superclasses.%20%22%0D%0D%09self%20propertyNames%20do%3A%20aBlock.%0D%09self%20allSuperclassesDo%3A%20%5B%20%3Aeach%20%7C%20each%20propertyNames%20do%3A%20aBlock%20%5D."));
smalltalk.bind(smalltalk.Behavior, unescape("allInstVarNamesDo%3A"), "allInstVarNamesDo_", function Behavior__allInstVarNamesDo_(aBlock){
const self = this; (self.instVarNames()).do_(aBlock);
self.allSuperclassesDo_((function Behavior__(each){
return (each.instVarNames()).do_(aBlock);
}
));
return self;
}
, "accessing", unescape("allInstVarNamesDo%3A%20aBlock%0D%09%22%20Evaluates%20aBlock%20for%20the%20instance%20variable%20names%20defined%20in%20the%20receiver%20and%20its%20superclasses.%20%22%0D%0D%09self%20instVarNames%20do%3A%20aBlock.%0D%09self%20allSuperclassesDo%3A%20%5B%20%3Aeach%20%7C%20each%20instVarNames%20do%3A%20aBlock%20%5D."));
smalltalk.bind(smalltalk.Behavior, unescape("comment"), "comment", function Behavior__comment(){
const self = this; return (function(){var $1$; $1$ = self.instanceClass()["$comment"]; return nil.isNil_($1$) ? "" : $1$})();
}
, "accessing", unescape("comment%0D%09%22%20Return%20the%20comment%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20instanceClass%20basicAt%3A%20%27%24comment%27%20ifAbsent%3A%20%5B%20%27%27%20%5D"));
smalltalk.bind(smalltalk.Behavior, unescape("comment%3A"), "comment_", function Behavior__comment_(aString){
const self = this; ((self.instanceClass())["$comment"]=aString);
return self;
}
, "accessing", unescape("comment%3A%20aString%0D%09%22%20Set%20the%20comment%20of%20the%20receiver.%20%22%0D%0D%09self%20instanceClass%20basicAt%3A%20%27%24comment%27%20put%3A%20aString"));
smalltalk.bind(smalltalk.Behavior, unescape("removeSources"), "removeSources", function Behavior__removeSources(){
const self = this; (self.instanceClass()).removeSources();
return self;
}
, "tools", unescape("removeSources%0D%09%22%20Remove%20all%20development%20sources%20of%20the%20receiver.%20%22%0D%0D%09self%20instanceClass%20removeSources"));
smalltalk.bind(smalltalk.Behavior, unescape("poolDictionaryNames"), "poolDictionaryNames", function Behavior__poolDictionaryNames(){
const self = this; return (self.instanceClass()).poolDictionaryNames();
}
, "accessing", unescape("poolDictionaryNames%0D%09%22%20Return%20the%20shared%20pool%20names%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20instanceClass%20poolDictionaryNames"));
smalltalk.bind(smalltalk.Behavior, unescape("sharedPoolsAndNamesDo%3A"), "sharedPoolsAndNamesDo_", function Behavior__sharedPoolsAndNamesDo_(aBlock){
var pool = nil;
const self = this; (self.instanceClass()).withAllSuperclassesDo_((function Behavior__(each){
return (each.poolDictionaryNames()).do_((function Behavior__(aName){
pool=smalltalk.Smalltalk.poolDictionary_ifAbsent_(aName,(function Behavior__(){
return nil;
}
));
if (((nil.isNil_(pool)===false)).valueOf()) {return aBlock.value_value_(aName,pool)} else {return nil};
}
));
}
));
return self;
}
, "accessing", unescape("sharedPoolsAndNamesDo%3A%20aBlock%0D%09%22%20Execute%20aBlock%20for%20the%20pool%20dictionaries%20known%20by%20the%20receiver.%20%22%0D%0D%09%7C%20pool%20%7C%0D%09self%20instanceClass%20withAllSuperclassesDo%3A%20%5B%3Aeach%7C%0D%09%09each%20poolDictionaryNames%20do%3A%20%5B%3AaName%7C%0D%09%09%09pool%20%3A%3D%20Smalltalk%20poolDictionary%3A%20aName%20ifAbsent%3A%20%5B%20nil%20%5D.%0D%09%09%09pool%20notNil%20ifTrue%3A%20%5B%20aBlock%20value%3A%20aName%20value%3A%20pool%20%5D%0D%09%09%5D.%0D%09%5D"));
smalltalk.bind(smalltalk.Behavior, unescape("sharedPoolsDo%3A"), "sharedPoolsDo_", function Behavior__sharedPoolsDo_(aBlock){
const self = this; self.sharedPoolsAndNamesDo_((function Behavior__(aName,aPool){
return aBlock.value_(aPool);
}
));
return self;
}
, "accessing", unescape("sharedPoolsDo%3A%20aBlock%0D%09%22%20Execute%20aBlock%20for%20the%20pool%20dictionaries%20known%20by%20the%20receiver.%20%22%0D%0D%09self%20sharedPoolsAndNamesDo%3A%20%5B%3AaName%20%3AaPool%7C%20aBlock%20value%3A%20aPool%20%5D"));
smalltalk.bind(smalltalk.Behavior, unescape("classVariablesDo%3A"), "classVariablesDo_", function Behavior__classVariablesDo_(aBlock){
var bindings = nil;
const self = this; return (self.instanceClass()).withAllSuperclassesDo_((function Behavior__(each){
bindings=each.classVariables();
if (((nil.isNil_(bindings)===false)).valueOf()) {return bindings.associationsDo_((function Behavior__(assoc){
return aBlock.value_(assoc);
}
))} else {return nil};
}
));
}
, "accessing", unescape("classVariablesDo%3A%20aBlock%0D%09%22%20Execute%20aBlock%20for%20the%20classVariables%20bindings%20known%20by%20the%20receiver.%20%22%0D%0D%09%7C%20bindings%20%7C%0D%09%5Eself%20instanceClass%20withAllSuperclassesDo%3A%20%5B%3Aeach%7C%0D%09%09bindings%20%3A%3D%20each%20classVariables.%0D%09%09bindings%20notNil%20ifTrue%3A%20%5B%0D%09%09%09bindings%20associationsDo%3A%20%5B%3Aassoc%7C%20aBlock%20value%3A%20assoc%20%5D%0D%09%09%5D%0D%09%5D"));
smalltalk.bind(smalltalk.Behavior, unescape("classVariableNamesDo%3A"), "classVariableNamesDo_", function Behavior__classVariableNamesDo_(aBlock){
var bindings = nil;
const self = this; return (self.instanceClass()).withAllSuperclassesDo_((function Behavior__(each){
bindings=each.classVariables();
if (((nil.isNil_(bindings)===false)).valueOf()) {return bindings.keysDo_((function Behavior__(aName){
return aBlock.value_(aName);
}
))} else {return nil};
}
));
}
, "accessing", unescape("classVariableNamesDo%3A%20aBlock%0D%09%22%20Execute%20aBlock%20for%20the%20classVariable%20names%20known%20by%20the%20receiver.%20%22%0D%0D%09%7C%20bindings%20%7C%0D%09%5Eself%20instanceClass%20withAllSuperclassesDo%3A%20%5B%3Aeach%7C%0D%09%09bindings%20%3A%3D%20each%20classVariables.%0D%09%09bindings%20notNil%20ifTrue%3A%20%5B%0D%09%09%09bindings%20keysDo%3A%20%5B%3AaName%7C%20aBlock%20value%3A%20aName%20%5D%0D%09%09%5D%0D%09%5D"));
smalltalk.bind(smalltalk.Behavior, unescape("classVariableAt%3Aput%3A"), "classVariableAt_put_", function Behavior__classVariableAt_put_(aName,anObject){
var bindings = nil;
const self = this; var $early={name:"stReturn"};
try {
(self.instanceClass()).withAllSuperclassesDo_((function Behavior__(each){
bindings=each.classVariables();
return (function(){var $1$; $1$ = bindings; if (!nil.isNil_($1$)) { return (bindings.includesKey_(aName)).ifTrue_((function Behavior__(){
$early.result=bindings.at_put_(aName,anObject); throw ($early);
}
)) } else { return $1$; }})();
}
));
self.error_(((("Undefined class variable "._comma(aName))._comma(" in "))._comma((self.name()))));
return self;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "accessing", unescape("classVariableAt%3A%20aName%20put%3A%20anObject%0D%09%22%20Set%20the%20classVariable%20of%20the%20receiver%20%28or%20one%20of%20its%20superclasses%29%20to%20anObject.%20%22%0D%0D%09%7C%20bindings%20%7C%0D%09self%20instanceClass%20withAllSuperclassesDo%3A%20%5B%3Aeach%7C%0D%09%09bindings%20%3A%3D%20each%20classVariables.%0D%09%09bindings%20ifNotNil%3A%20%5B%0D%09%09%09%28bindings%20includesKey%3A%20aName%29%0D%09%09%09%09ifTrue%3A%20%5B%5Ebindings%20at%3A%20aName%20put%3A%20anObject%5D.%0D%09%09%5D%0D%09%5D.%0D%09self%20error%3A%20%27Undefined%20class%20variable%20%27%2C%20aName%20%2C%27%20in%20%27%20%2C%20self%20name"));
smalltalk.bind(smalltalk.Behavior, unescape("classVariableAt%3AifAbsent%3A"), "classVariableAt_ifAbsent_", function Behavior__classVariableAt_ifAbsent_(aName,aBlock){
var bindings = nil;
const self = this; var $early={name:"stReturn"};
try {
(self.instanceClass()).withAllSuperclassesDo_((function Behavior__(each){
bindings=each.classVariables();
return (function(){var $1$; $1$ = bindings; if (!nil.isNil_($1$)) { return (bindings.includesKey_(aName)).ifTrue_((function Behavior__(){
$early.result=bindings.at_(aName); throw ($early);
}
)) } else { return $1$; }})();
}
));
return aBlock.evaluate();
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "accessing", unescape("classVariableAt%3A%20aName%20ifAbsent%3A%20aBlock%0D%09%22%20Return%20the%20value%20of%20classVariable%20named%20aName.%20%22%0D%0D%09%7C%20bindings%20%7C%0D%09self%20instanceClass%20withAllSuperclassesDo%3A%20%5B%3Aeach%7C%0D%09%09bindings%20%3A%3D%20each%20classVariables.%0D%09%09bindings%20ifNotNil%3A%20%5B%0D%09%09%09%28bindings%20includesKey%3A%20aName%29%20ifTrue%3A%20%5B%0D%09%09%09%09%5Ebindings%20at%3A%20aName%0D%09%09%09%5D%0D%09%09%5D%0D%09%5D.%0D%09%5EaBlock%20evaluate"));
smalltalk.bind(smalltalk.Behavior, unescape("classVariableAt%3A"), "classVariableAt_", function Behavior__classVariableAt_(aName){
const self = this; return self.classVariableAt_ifAbsent_(aName,(function Behavior__(){
return self.error_(((("Undefined class variable "._comma(aName))._comma(" in "))._comma((self.name()))));
}
));
}
, "accessing", unescape("classVariableAt%3A%20aName%0D%09%22%20Return%20the%20value%20of%20classVariable%20named%20aName%20or%20generates%20an%20error.%20%22%0D%0D%09%5Eself%20classVariableAt%3A%20aName%20ifAbsent%3A%20%5B%0D%09%09self%20error%3A%20%27Undefined%20class%20variable%20%27%2CaName%20%2C%27%20in%20%27%20%2Cself%20name%0D%09%5D"));
smalltalk.bind(smalltalk.Behavior, unescape("pool%3AvariableAt%3Aput%3A"), "pool_variableAt_put_", function Behavior__pool_variableAt_put_(poolName,aName,anObject){
var pool = nil;
const self = this; var $early={name:"stReturn"};
try {
pool=smalltalk.Smalltalk.poolDictionary_ifAbsent_(poolName,(function Behavior__(){
$early.result=self.error_(((("Undefined pool variable "._comma(poolName))._comma(" in "))._comma((self.name())))); throw ($early);
}
));
return pool.at_put_(aName,anObject);
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "accessing", unescape("pool%3A%20poolName%20variableAt%3A%20aName%20put%3A%20anObject%0D%09%22%20Set%20the%20pool%20Variable%20of%20the%20receiver%20to%20anObject.%20%22%0D%0D%09%7C%20pool%20%7C%0D%09pool%20%3A%3D%20Smalltalk%0D%09%09poolDictionary%3A%20poolName%0D%09%09ifAbsent%3A%20%5B%20%5Eself%20error%3A%20%27Undefined%20pool%20variable%20%27%2CpoolName%20%2C%27%20in%20%27%20%2Cself%20name%20%5D.%0D%09%5Epool%20at%3A%20aName%20put%3A%20anObject"));
smalltalk.bind(smalltalk.Behavior, unescape("loadRequirementsInto%3A"), "loadRequirementsInto_", function Behavior__loadRequirementsInto_(aCollection){
const self = this; return self;
}
, "loading", unescape("loadRequirementsInto%3A%20aCollection%0D%09%22%20Add%20the%20requirements%20to%20load%20the%20receiver%20from%20sources%20to%20aCollection.%0D%09Default%20action%20do%20nothing%2C%20this%20method%20can%20be%20refined%20by%20the%20subclasses.%0D%09%22%0D%0D%09%5Eself"));
smalltalk.bind(smalltalk.Behavior, unescape("removeSelectors%3A"), "removeSelectors_", function Behavior__removeSelectors_(aCollection){
const self = this; aCollection.do_((function Behavior__(each){
return self.removeSelector_(each);
}
));
return self;
}
, "methods", unescape("removeSelectors%3A%20aCollection%0D%09%22%20Remove%20the%20methods%20for%20messages%20in%20aCollection%2C%20implemented%20by%20the%20receiver.%20%22%0D%0D%09aCollection%20do%3A%20%5B%3Aeach%7C%20self%20removeSelector%3A%20each%20%5D"));
smalltalk.bind(smalltalk.Behavior, unescape("removeCompiledMethod%3A"), "removeCompiledMethod_", function Behavior__removeCompiledMethod_(aMethod){
const self = this; (self.smalltalk()).removeMethod_method_(self,aMethod);
return self;
}
, "private", unescape("removeCompiledMethod%3A%20aMethod%0D%09%22%20Remove%20aMethod%20from%20the%20receiver.%20%22%0D%0D%09self%20smalltalk%20removeMethod%3A%20self%20method%3A%20aMethod"));
smalltalk.bind(smalltalk.Behavior, unescape("missingImplementorFor%3A"), "missingImplementorFor_", function Behavior__missingImplementorFor_(jsSelector){
const self = this; return self.error_(((("Missing implementor for "._comma(((jsSelector.asStSelector()).asLiteral())))._comma(" in "))._comma((self.name()))));
}
, "private", unescape("missingImplementorFor%3A%20jsSelector%0D%09%22%20Private%20-%20Handle%20the%20situation%20where%20there%20is%20no%20implementor%20for%20jsSelector.%0D%09This%20can%20happen%20when%20there%20is%20no%20implementation%20for%20jsSelector%20and%20the%20message%0D%09%20has%20been%20dispatched%20through%20a%20superSend.%0D%09%22%0D%0D%09%5Eself%20error%3A%20%27Missing%20implementor%20for%20%27%0D%09%09%2C%20jsSelector%20asStSelector%20asLiteral%0D%09%09%2C%27%20in%20%27%2Cself%20name"));
smalltalk.bind(smalltalk.Behavior, unescape("removeSelector%3A"), "removeSelector_", function Behavior__removeSelector_(aSelector){
var method = nil;
const self = this; method=self.compiledMethodAt_(aSelector);
if (((nil.isNil_(method)===false)).valueOf()) {self.removeCompiledMethod_(method)};
return self;
}
, "methods", unescape("removeSelector%3A%20aSelector%0D%09%22%20Remove%20the%20method%20for%20message%20aSelector%20implemented%20by%20the%20receiver.%20%22%0D%0D%09%7C%20method%20%7C%0D%09method%20%3A%3D%20self%20compiledMethodAt%3A%20aSelector.%0D%09method%20notNil%20ifTrue%3A%20%5B%20self%20removeCompiledMethod%3A%20method%20%5D."));
smalltalk.bind(smalltalk.Behavior, unescape("removeFromSystem"), "removeFromSystem", function Behavior__removeFromSystem(){
const self = this; (self.instanceClass()).removeFromSystem();
return self;
}
, "remove", unescape("removeFromSystem%0D%09%22%20Remove%20the%20receiver%20from%20system.%20%22%0D%0D%09self%20instanceClass%20removeFromSystem"));
smalltalk.bind(smalltalk.Behavior, unescape("implementorsOf%3A"), "implementorsOf_", function Behavior__implementorsOf_(aSymbol){
var result = nil;
var method = nil;
const self = this; result=smalltalk.Array.$$new();
self.withAllSubclassesDo_((function Behavior__(each){
method=each._gt_gt(aSymbol);
if (((nil.isNil_(method)===false)).valueOf()) {result.add_(method)};
method=(each.$klass)._gt_gt(aSymbol);
if (((nil.isNil_(method)===false)).valueOf()) {return result.add_(method)} else {return nil};
}
));
return result;
}
, "testing", unescape("implementorsOf%3A%20aSymbol%0D%09%22%20Return%20a%20collection%20of%20methods%20of%20the%20receiver%20and%20its%20subclasses%20that%20implement%20aSymbol.%20%22%0D%0D%09%7C%20result%20method%20%7C%0D%09result%20%3A%3D%20Array%20new.%0D%09self%20withAllSubclassesDo%3A%20%5B%3Aeach%20%7C%0D%09%09method%20%3A%3D%20each%20%3E%3E%20aSymbol.%0D%09%09method%20notNil%20ifTrue%3A%20%5B%20result%20add%3A%20method%20%5D.%0D%09%09method%20%3A%3D%20each%20class%20%3E%3E%20aSymbol.%0D%09%09method%20notNil%20ifTrue%3A%20%5B%20result%20add%3A%20method%20%5D.%0D%09%5D.%0D%09%5Eresult"));
smalltalk.bind(smalltalk.Behavior, unescape("asJSONObject"), "asJSONObject", function Behavior__asJSONObject(){
const self = this; return self;
}
, "converting", unescape("asJSONObject%0D%09%22%20Return%20the%20mapping%20of%20the%20receiver%20to%20JSON%20structure.%20%22%0D%0D%09%5Eself"));
smalltalk.bind(smalltalk.Behavior, unescape("shallowCopy"), "shallowCopy", function Behavior__shallowCopy(){
const self = this; return self;
}
, "copying", unescape("shallowCopy%0D%09%22%20Return%20a%20shallow%20copy%20of%20the%20receiver.%20%22%0D%0D%09%5Eself"));
smalltalk.bind(smalltalk.Behavior, unescape("deepCopy"), "deepCopy", function Behavior__deepCopy(){
const self = this; return self;
}
, "copying", unescape("deepCopy%0D%09%22%20Return%20a%20deep%20copy%20of%20the%20receiver.%20%22%0D%0D%09%5Eself"));
smalltalk.bind(smalltalk.Behavior, unescape("toString"), "toString", function Behavior__toString(){
const self = this; return (unescape("%7Bst%3A")._comma((self.name())))._comma(unescape("%7D"));
}
, "converting", unescape("toString%0D%09%22%20Convert%20the%20receiver%20to%20a%20String.%20%22%0D%0D%09%5E%27%7Bst%3A%27%2Cself%20name%2C%24%7D"));
smalltalk.addClass("Class", smalltalk.Behavior, [], 'Kernel');
smalltalk.Class.$classVariableNames=("");
smalltalk.bind(smalltalk.Class, unescape("category"), "category", function Class__category(){
const self = this; return (function(){var $1$; $1$ = self["$category"]; return nil.isNil_($1$) ? nil : $1$})();
}
, "accessing", unescape("category%0D%09%22%20Return%20the%20category%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20basicAt%3A%20%27%24category%27"));
smalltalk.bind(smalltalk.Class, unescape("category%3A"), "category_", function Class__category_(aString){
const self = this; (self["$category"]=aString);
return self;
}
, "accessing", unescape("category%3A%20aString%0D%09%22%20Set%20the%20category%20of%20the%20receiver.%20%22%0D%0D%09self%20basicAt%3A%20%27%24category%27%20put%3A%20aString"));
smalltalk.bind(smalltalk.Class, unescape("classVariables"), "classVariables", function Class__classVariables(){
var names = nil;
const self = this; names=(function(){var $1$; $1$ = self["$classVariableNames"]; return nil.isNil_($1$) ? nil : $1$})();
if (((nil.isNil_(names))).valueOf()) {return (function(){var $2$; $2$ = self["$classVariables"]; return nil.isNil_($2$) ? nil : $2$})()};
self.basicDelete_("$classVariableNames");
self.classVariableNames_(names);
return (function(){var $3$; $3$ = self["$classVariables"]; return nil.isNil_($3$) ? nil : $3$})();
}
, "accessing", unescape("classVariables%0D%09%22%20Return%20the%20class%20variables%20of%20the%20receiver.%20%22%0D%0D%09%7C%20names%20%7C%0D%09names%20%3A%3D%20self%20basicAt%3A%20%27%24classVariableNames%27%20ifAbsent%3A%20%5B%5D.%0D%09names%20isNil%20ifTrue%3A%20%5B%20%5Eself%20basicAt%3A%20%27%24classVariables%27%20%5D.%0D%09self%20basicDelete%3A%20%27%24classVariableNames%27.%0D%09self%20classVariableNames%3A%20names.%0D%09%5Eself%20basicAt%3A%20%27%24classVariables%27"));
smalltalk.bind(smalltalk.Class, unescape("classVariables%3A"), "classVariables_", function Class__classVariables_(aDictionary){
const self = this; if ((((nil.isNil_(aDictionary))).or_((function Class__(){
return aDictionary.isEmpty();
}
))).valueOf()) {return self.basicDelete_("$classVariables")};
return (self["$classVariables"]=aDictionary);
}
, "accessing", unescape("classVariables%3A%20aDictionary%0D%09%22%20Set%20the%20class%20variables%20of%20the%20receiver.%20%22%0D%0D%09%28aDictionary%20isNil%20or%3A%20%5B%20aDictionary%20isEmpty%20%5D%29%20ifTrue%3A%20%5B%0D%09%09%5Eself%20basicDelete%3A%20%27%24classVariables%27%0D%09%5D.%0D%09%5Eself%20basicAt%3A%20%27%24classVariables%27%20put%3A%20aDictionary"));
smalltalk.bind(smalltalk.Class, unescape("poolDictionaries"), "poolDictionaries", function Class__poolDictionaries(){
const self = this; return (function(){var $1$; $1$ = self["$poolDictionaries"]; return nil.isNil_($1$) ? nil : $1$})();
}
, "accessing", unescape("poolDictionaries%0D%09%22%20Return%20the%20poolDictionaries%20of%20the%20receiver%20%28anArray%20or%20nil%29.%20%22%0D%0D%09%5Eself%20basicAt%3A%20%27%24poolDictionaries%27"));
smalltalk.bind(smalltalk.Class, unescape("poolDictionaries%3A"), "poolDictionaries_", function Class__poolDictionaries_(anArray){
const self = this; if ((((nil.isNil_(anArray)===false)).and_((function Class__(){
return anArray.isEmpty();
}
))).valueOf()) {return self.poolDictionaries_(nil)};
return (self["$poolDictionaries"]=anArray);
}
, "accessing", unescape("poolDictionaries%3A%20anArray%0D%09%22%20Set%20the%20poolDictionaries%20of%20the%20receiver.%20%22%0D%0D%09%28anArray%20notNil%20and%3A%20%5B%20anArray%20isEmpty%20%5D%29%20ifTrue%3A%20%5B%0D%09%09%5Eself%20poolDictionaries%3A%20nil%0D%09%5D.%0D%09%5Eself%20basicAt%3A%20%27%24poolDictionaries%27%20put%3A%20anArray"));
smalltalk.bind(smalltalk.Class, unescape("classVariableNames"), "classVariableNames", function Class__classVariableNames(){
const self = this; if (((nil.isNil_(self.classVariables()))).valueOf()) {return smalltalk.Array.$$new()} else {return (self.classVariables()).keys()};
}
, "accessing", unescape("classVariableNames%0D%09%22%20Return%20the%20class%20variable%20names%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20classVariables%20isNil%0D%09%09ifTrue%3A%20%5B%20Array%20new%20%5D%0D%09%09ifFalse%3A%20%5B%20self%20classVariables%20keys%20%5D"));
smalltalk.bind(smalltalk.Class, unescape("classVariablesString"), "classVariablesString", function Class__classVariablesString(){
const self = this; return ((self.classVariableNames()).inject_into_("",(function Class__(total,each){
return (total._comma(each))._comma(" ");
}
))).trimBlanks();
}
, "accessing", unescape("classVariablesString%0D%09%22%20Return%20the%20class%20variable%20names%20of%20the%20receiver%20as%20aString.%20%22%0D%0D%09%5E%28self%20classVariableNames%20inject%3A%20%27%27%0D%09%09into%3A%20%5B%3Atotal%20%3Aeach%7C%20total%20%2C%20each%20%2C%20%27%20%27%20%5D%0D%09%09%29%20trimBlanks"));
smalltalk.bind(smalltalk.Class, unescape("poolDictionaryNames"), "poolDictionaryNames", function Class__poolDictionaryNames(){
const self = this; if (((nil.isNil_(self.poolDictionaries()))).valueOf()) {return smalltalk.Array.$$new()} else {return self.poolDictionaries()};
}
, "accessing", unescape("poolDictionaryNames%0D%09%22%20Return%20the%20pool%20dictionary%20names%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20poolDictionaries%20isNil%0D%09%09ifTrue%3A%20%5B%20Array%20new%20%5D%0D%09%09ifFalse%3A%20%5B%20self%20poolDictionaries%20%5D"));
smalltalk.bind(smalltalk.Class, unescape("poolDictionariesString"), "poolDictionariesString", function Class__poolDictionariesString(){
const self = this; return ((self.poolDictionaryNames()).inject_into_("",(function Class__(total,each){
return (total._comma(each))._comma(" ");
}
))).trimBlanks();
}
, "accessing", unescape("poolDictionariesString%0D%09%22%20Return%20the%20poolDictionary%20names%20of%20the%20receiver%20as%20aString.%20%22%0D%0D%09%5E%28self%20poolDictionaryNames%20inject%3A%20%27%27%0D%09%09into%3A%20%5B%3Atotal%20%3Aeach%7C%20total%20%2C%20each%20%2C%20%27%20%27%20%5D%0D%09%09%29%20trimBlanks"));
smalltalk.bind(smalltalk.Class, unescape("classVariableNames%3A"), "classVariableNames_", function Class__classVariableNames_(classVarNames){
var names = nil;
var dictionary = nil;
var old = nil;
const self = this; if (((nil.isNil_(classVarNames))).valueOf()) {return self.classVariables_(nil)};
names=(classVarNames.isString()).ifTrue_ifFalse_((function Class__(){
return classVarNames.asArrayOfSubstrings();
}
),(function Class__(){
return classVarNames;
}
));
dictionary=smalltalk.PoolDictionary.$$new();
old=self.classVariables();
if (((nil.isNil_(old))).valueOf()) {old=dictionary};
names.do_((function Class__(each){
return dictionary.at_put_(each,(old.at_ifAbsent_(each,(function Class__(){
return nil;
}
))));
}
));
self.classVariables_(dictionary);
return self;
}
, "accessing", unescape("classVariableNames%3A%20classVarNames%0D%09%22%20Set%20the%20variable%20names%20defined%20in%20the%20receiver.%20%22%0D%0D%09%7C%20names%20dictionary%20old%20%7C%0D%09classVarNames%20isNil%20ifTrue%3A%20%5B%20%5Eself%20classVariables%3A%20nil%20%5D.%0D%09names%20%3A%3D%20classVarNames%20isString%0D%09%09ifTrue%3A%20%5B%20classVarNames%20asArrayOfSubstrings%20%5D%0D%09%09ifFalse%3A%20%5B%20classVarNames%20%5D.%0D%09dictionary%20%3A%3D%20PoolDictionary%20new.%0D%09old%20%3A%3D%20self%20classVariables.%20old%20isNil%20ifTrue%3A%20%5B%20old%20%3A%3D%20dictionary%20%5D.%0D%09names%20do%3A%20%5B%3Aeach%7C%0D%09%09dictionary%20at%3A%20each%20put%3A%20%28old%20at%3A%20each%20ifAbsent%3A%20%5B%20nil%20%5D%29%0D%09%5D.%0D%09self%20classVariables%3A%20dictionary."));
smalltalk.bind(smalltalk.Class, unescape("poolDictionaryNames%3A"), "poolDictionaryNames_", function Class__poolDictionaryNames_(poolVarNames){
const self = this; self.poolDictionaries_(((poolVarNames.isString()).ifTrue_ifFalse_((function Class__(){
return poolVarNames.asArrayOfSubstrings();
}
),(function Class__(){
return poolVarNames;
}
))));
return self;
}
, "accessing", unescape("poolDictionaryNames%3A%20poolVarNames%0D%09%22%20Set%20the%20pool%20dictionary%20names%20known%20to%20the%20receiver.%20%22%0D%0D%09self%20poolDictionaries%3A%20%28poolVarNames%20isString%0D%09%09ifTrue%3A%20%5B%20poolVarNames%20asArrayOfSubstrings%20%5D%0D%09%09ifFalse%3A%20%5B%20poolVarNames%20%5D%29."));
smalltalk.bind(smalltalk.Class, unescape("subclass%3AinstanceVariableNames%3A"), "subclass_instanceVariableNames_", function Class__subclass_instanceVariableNames_(aString,anotherString){
const self = this; return self.subclass_instanceVariableNames_category_(aString,anotherString,nil);
}
, "instantiation", unescape("subclass%3A%20aString%20instanceVariableNames%3A%20anotherString%0D%09%22%20Create%20a%20subclass%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%0D%09%09subclass%3A%20aString%0D%09%09instanceVariableNames%3A%20anotherString%0D%09%09category%3A%20nil"));
smalltalk.bind(smalltalk.Class, unescape("subclass%3Acategory%3A"), "subclass_category_", function Class__subclass_category_(aString,aCategory){
const self = this; return self.subclass_instanceVariableNames_category_(aString,"",aCategory);
}
, "instantiation", unescape("subclass%3A%20aString%20category%3A%20aCategory%0D%09%22%20Create%20a%20subclass%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%0D%09%09subclass%3A%20aString%0D%09%09instanceVariableNames%3A%20%27%27%0D%09%09category%3A%20aCategory"));
smalltalk.bind(smalltalk.Class, unescape("subclass%3AinstanceVariableNames%3ApoolDictionaries%3Acategory%3A"), "subclass_instanceVariableNames_poolDictionaries_category_", function Class__subclass_instanceVariableNames_poolDictionaries_category_(aString,aString2,poolVarNames,aCategory){
const self = this; return self.subclass_instanceVariableNames_classVariableNames_poolDictionaries_category_(aString,aString2,"",poolVarNames,aCategory);
}
, "instantiation", unescape("subclass%3A%20aString%0DinstanceVariableNames%3A%20aString2%0DpoolDictionaries%3A%20poolVarNames%0Dcategory%3A%20aCategory%0D%09%22%20Create%20a%20new%20subclass%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%0D%09%09subclass%3A%20aString%0D%09%09instanceVariableNames%3A%20aString2%0D%09%09classVariableNames%3A%27%27%0D%09%09poolDictionaries%3A%20poolVarNames%0D%09%09category%3A%20aCategory"));
smalltalk.bind(smalltalk.Class, unescape("subclass%3AinstanceVariableNames%3Acategory%3A"), "subclass_instanceVariableNames_category_", function Class__subclass_instanceVariableNames_category_(aString,aString2,aString3){
const self = this; return (smalltalk.ClassBuilder.$$new()).superclass_subclass_instanceVariableNames_category_(self,aString,aString2,aString3);
}
, "instantiation", unescape("subclass%3A%20aString%20instanceVariableNames%3A%20aString2%20category%3A%20aString3%0D%09%22%20Create%20a%20subclass%20of%20the%20receiver.%20%22%0D%0D%09%5EClassBuilder%20new%0D%09%09superclass%3A%20self%0D%09%09subclass%3A%20aString%0D%09%09instanceVariableNames%3A%20aString2%0D%09%09category%3A%20aString3"));
smalltalk.bind(smalltalk.Class, unescape("isClass"), "isClass", function Class__isClass(){
const self = this; return true;
}
, "testing", unescape("isClass%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20a%20Class.%20%22%0D%0D%09%5Etrue"));
smalltalk.bind(smalltalk.Class, unescape("printString"), "printString", function Class__printString(){
const self = this; return self.name();
}
, "printing", unescape("printString%0D%09%22%20Return%20a%20printable%20representation%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20name"));
smalltalk.bind(smalltalk.Class, unescape("instanceClass"), "instanceClass", function Class__instanceClass(){
const self = this; return self;
}
, "accessing", unescape("instanceClass%0D%09%22%20Return%20the%20receiver.%20%22%0D%0D%09%5Eself"));
smalltalk.bind(smalltalk.Class, unescape("rename%3A"), "rename_", function Class__rename_(aString){
const self = this; (self.smalltalk()).renameClass_to_(self,aString);
return self;
}
, "renaming", unescape("rename%3A%20aString%0D%09%22%20Rename%20the%20receiver%20to%20aString.%20%22%0D%0D%09self%20smalltalk%20renameClass%3A%20self%20to%3A%20aString"));
smalltalk.bind(smalltalk.Class, unescape("removeFromSystem"), "removeFromSystem", function Class__removeFromSystem(){
const self = this; (self.subclasses()).do_((function Class__(each){
return each.removeFromSystem();
}
));
(self.smalltalk()).removeClass_(self);
return self;
}
, "remove", unescape("removeFromSystem%0D%09%22%20Remove%20the%20receiver%20from%20system.%20%22%0D%0D%09self%20subclasses%20do%3A%20%5B%3Aeach%7C%20each%20removeFromSystem%20%5D.%0D%09self%20smalltalk%20removeClass%3A%20self"));
smalltalk.bind(smalltalk.Class, unescape("removeSources"), "removeSources", function Class__removeSources(){
const self = this; (self.$klass).methodsDo_((function Class__(each){
return each.removeSources();
}
));
self.methodsDo_((function Class__(each){
return each.removeSources();
}
));
(function Class__($1$){
$1$.comment_("");
return $1$.category_("scarlet")}
)(self);
return self;
}
, "tools", unescape("removeSources%0D%09%22%20Remove%20all%20development%20sources%20of%20the%20receiver.%20%22%0D%0D%09self%20class%20methodsDo%3A%20%5B%3Aeach%20%7C%20each%20removeSources%20%5D.%0D%09self%20methodsDo%3A%20%5B%3Aeach%20%7C%20each%20removeSources%20%5D.%0D%09self%20comment%3A%20%27%27%3B%20category%3A%20%23scarlet"));
smalltalk.addClass("Metaclass", smalltalk.Behavior, ['instanceClass'], 'Kernel');
smalltalk.Metaclass.$classVariableNames=("");
smalltalk.bind(smalltalk.Metaclass, unescape("instanceClass"), "instanceClass", function Metaclass__instanceClass(){
const self = this; return self['@instanceClass'];
}
, "accessing", unescape("instanceClass%0D%09%22%20Return%20the%20instance%20class%20of%20receiver.%20%22%0D%0D%09%5EinstanceClass"));
smalltalk.bind(smalltalk.Metaclass, unescape("instanceVariableNames%3A"), "instanceVariableNames_", function Metaclass__instanceVariableNames_(aCollection){
const self = this; (smalltalk.ClassBuilder.$$new()).class_instanceVariableNames_(self,aCollection);
return self;
}
, "accessing", unescape("instanceVariableNames%3A%20aCollection%0D%09%22%20Set%20the%20instance%20variable%20names%20of%20the%20receiver.%20%22%0D%0D%09ClassBuilder%20new%0D%09%09class%3A%20self%0D%09%09instanceVariableNames%3A%20aCollection"));
smalltalk.bind(smalltalk.Metaclass, unescape("isMetaclass"), "isMetaclass", function Metaclass__isMetaclass(){
const self = this; return true;
}
, "testing", unescape("isMetaclass%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20a%20metaclass.%20%22%0D%0D%09%5Etrue"));
smalltalk.bind(smalltalk.Metaclass, unescape("printString"), "printString", function Metaclass__printString(){
const self = this; return ((self.instanceClass()).name())._comma(" class");
}
, "printing", unescape("printString%0D%09%22%20Return%20a%20printable%20representation%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20instanceClass%20name%2C%20%27%20class%27"));
smalltalk.bind(smalltalk.Metaclass, unescape("poolDictionaries"), "poolDictionaries", function Metaclass__poolDictionaries(){
const self = this; return (self.instanceClass()).poolDictionaries();
}
, "accessing", unescape("poolDictionaries%0D%09%22%20Return%20the%20poolDictionaries%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20instanceClass%20poolDictionaries"));
smalltalk.bind(smalltalk.Metaclass, unescape("classVariables"), "classVariables", function Metaclass__classVariables(){
const self = this; return (self.instanceClass()).classVariables();
}
, "accessing", unescape("classVariables%0D%09%22%20Return%20the%20class%20variables%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20instanceClass%20classVariables"));
smalltalk.addClass("CompiledMethod", smalltalk.Object, ['classField'], 'Kernel');
smalltalk.CompiledMethod.$classVariableNames=("");
smalltalk.bind(smalltalk.CompiledMethod, unescape("source"), "source", function CompiledMethod__source(){
const self = this; return (function(){var $1$; $1$ = self["$source"]; return nil.isNil_($1$) ? "" : $1$})();
}
, "accessing", unescape("source%0D%09%22%20Return%20the%20source%20code%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20basicAt%3A%20%27%24source%27%20ifAbsent%3A%20%5B%27%27%5D"));
smalltalk.bind(smalltalk.CompiledMethod, unescape("source%3A"), "source_", function CompiledMethod__source_(aString){
const self = this; (self["$source"]=aString);
return self;
}
, "accessing", unescape("source%3A%20aString%0D%09%22%20Set%20the%20source%20code%20of%20the%20receiver.%20%22%0D%0D%09self%20basicAt%3A%20%27%24source%27%20put%3A%20aString"));
smalltalk.bind(smalltalk.CompiledMethod, unescape("category"), "category", function CompiledMethod__category(){
const self = this; return (function(){var $1$; $1$ = self["$category"]; return nil.isNil_($1$) ? "" : $1$})();
}
, "accessing", unescape("category%0D%09%22%20Return%20the%20category%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20basicAt%3A%20%27%24category%27%20ifAbsent%3A%20%5B%27%27%5D"));
smalltalk.bind(smalltalk.CompiledMethod, unescape("category%3A"), "category_", function CompiledMethod__category_(aString){
const self = this; (self["$category"]=aString);
return self;
}
, "accessing", unescape("category%3A%20aString%0D%09%22%20Set%20the%20category%20of%20the%20receiver.%20%22%0D%0D%09self%20basicAt%3A%20%27%24category%27%20put%3A%20aString"));
smalltalk.bind(smalltalk.CompiledMethod, unescape("selector"), "selector", function CompiledMethod__selector(){
const self = this; return (function(){var $1$; $1$ = self["$selector"]; return nil.isNil_($1$) ? nil : $1$})();
}
, "accessing", unescape("selector%0D%09%22%20Return%20the%20selector%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20basicAt%3A%20%27%24selector%27"));
smalltalk.bind(smalltalk.CompiledMethod, unescape("selector%3A"), "selector_", function CompiledMethod__selector_(aString){
const self = this; (self["$selector"]=aString);
return self;
}
, "accessing", unescape("selector%3A%20aString%0D%09%22%20Set%20the%20selector%20of%20the%20receiver.%20%22%0D%0D%09self%20basicAt%3A%20%27%24selector%27%20put%3A%20aString"));
smalltalk.bind(smalltalk.CompiledMethod, unescape("fn"), "fn", function CompiledMethod__fn(){
const self = this; return (function(){var $1$; $1$ = self["$fn"]; return nil.isNil_($1$) ? nil : $1$})();
}
, "accessing", unescape("fn%0D%09%22%20Return%20the%20function%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20basicAt%3A%20%27%24fn%27"));
smalltalk.bind(smalltalk.CompiledMethod, unescape("fn%3A"), "fn_", function CompiledMethod__fn_(aBlock){
const self = this; (self["$fn"]=aBlock);
return self;
}
, "accessing", unescape("fn%3A%20aBlock%0D%09%22%20Set%20the%20function%20of%20the%20receiver.%20%22%0D%0D%09self%20basicAt%3A%20%27%24fn%27%20put%3A%20aBlock"));
smalltalk.bind(smalltalk.CompiledMethod, unescape("classField"), "classField", function CompiledMethod__classField(){
const self = this; return self['@classField'];
}
, "accessing", unescape("classField%0D%09%22%20Return%20the%20implementor%20of%20the%20receiver.%20%22%0D%0D%09%5EclassField"));
smalltalk.bind(smalltalk.CompiledMethod, unescape("classField%3A"), "classField_", function CompiledMethod__classField_(aClass){
const self = this; self['@classField']=aClass;
return self;
}
, "accessing", unescape("classField%3A%20aClass%0D%09%22%20Set%20the%20implementor%20of%20the%20receiver.%20%22%0D%0D%09classField%20%3A%3D%20aClass"));
smalltalk.bind(smalltalk.CompiledMethod, unescape("generation"), "generation", function CompiledMethod__generation(){
const self = this; return (function(){var $1$; $1$ = self["$generation"]; return nil.isNil_($1$) ? nil : $1$})();
}
, "accessing", unescape("generation%0D%09%22%20Returns%20the%20generation%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20basicAt%3A%20%27%24generation%27"));
smalltalk.bind(smalltalk.CompiledMethod, unescape("comment"), "comment", function CompiledMethod__comment(){
const self = this; return (function CompiledMethod__($1$){
$1$.upTo_(unescape("%22"));
return $1$.upTo_(unescape("%22"))}
)((self.source()).stream()).trimBlanks();
}
, "accessing", unescape("comment%0D%09%22%20Return%20the%20comment%20of%20the%20receiver.%20%22%0D%0D%09%5E%28self%20source%20stream%20upTo%3A%20%24%22%3B%20upTo%3A%20%24%22%29%20trimBlanks"));
smalltalk.bind(smalltalk.CompiledMethod, unescape("toString"), "toString", function CompiledMethod__toString(){
const self = this; return ((((nil.isNil_(self['@classField']))).ifTrue_ifFalse_((function CompiledMethod__(){
return self['@classField'].toString();
}
),(function CompiledMethod__(){
return self['@classField'].name();
}
)))._comma(unescape("%3E%3E%23")))._comma(((self.selector()).toString()));
}
, "printing", unescape("toString%0D%09%22%20Return%20the%20printable%20representation%20of%20the%20receiver.%20%22%0D%0D%09%5E%28classField%20isNil%0D%09%09ifTrue%3A%20%5BclassField%20toString%5D%0D%09%09ifFalse%3A%20%5BclassField%20name%5D%29%0D%09%09%2C%27%3E%3E%23%27%20%2Cself%20selector%20toString"));
smalltalk.bind(smalltalk.CompiledMethod, unescape("printString"), "printString", function CompiledMethod__printString(){
const self = this; return self.toString();
}
, "printing", unescape("printString%0D%09%22%20Return%20the%20printable%20representation%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20toString"));
smalltalk.bind(smalltalk.CompiledMethod, unescape("asJSONObject"), "asJSONObject", function CompiledMethod__asJSONObject(){
const self = this; return self;
}
, "converting", unescape("asJSONObject%0D%09%22%20Return%20the%20mapping%20of%20the%20receiver%20to%20JSON%20structure.%20%22%0D%0D%09%5Eself"));
smalltalk.bind(smalltalk.CompiledMethod, unescape("shallowCopy"), "shallowCopy", function CompiledMethod__shallowCopy(){
const self = this; return self;
}
, "copying", unescape("shallowCopy%0D%09%22%20Return%20a%20shallow%20copy%20of%20the%20receiver.%20%22%0D%0D%09%5Eself"));
smalltalk.bind(smalltalk.CompiledMethod, unescape("deepCopy"), "deepCopy", function CompiledMethod__deepCopy(){
const self = this; return self;
}
, "copying", unescape("deepCopy%0D%09%22%20Return%20a%20deep%20copy%20of%20the%20receiver.%20%22%0D%0D%09%5Eself"));
smalltalk.bind(smalltalk.CompiledMethod, unescape("removeSources"), "removeSources", function CompiledMethod__removeSources(){
const self = this; (function CompiledMethod__($1$){
$1$.source_("");
return $1$.category_("scarlet")}
)(self);
return self;
}
, "tools", unescape("removeSources%0D%09%22%20Remove%20all%20development%20sources%20of%20the%20receiver.%20%22%0D%0D%09self%20source%3A%20%27%27%3B%20category%3A%20%23scarlet"));
smalltalk.addClass("Number", smalltalk.Object, [], 'Kernel');
smalltalk.Number.$classVariableNames=("");
smalltalk.bind(smalltalk.Number, unescape("%3D"), "_eq", function Number___eq(anObject){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKNumber.primEquality(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return false;
}
, "comparing", unescape("%3D%20anObject%0D%20%20%20%20%22%20Return%20true%20if%20the%20receiver%20is%20equal%20to%20anObject.%20%22%0D%0D%09%3Cprimitive%3A%20%27primEquality%27%20module%3A%20%27SKNumber%27%3E%0D%09%5Efalse"));
smalltalk.bind(smalltalk.Number, unescape("mustBeNumber"), "mustBeNumber", function Number__mustBeNumber(){
const self = this; self;
return self;
}
, "testing", unescape("mustBeNumber%0D%09%22%20Signal%20an%20error%20if%20the%20receiver%20is%20not%20a%20Number.%0D%09WARNING%3A%20this%20check%20impose%20a%20severe%20loss%20of%20perfomance%20%28five%20times%20slower%29.%0D%09If%20you%20are%20sure%20the%20operation/compare%20arguments%20are%20ok%20%28a%20number%29%2C%0D%09%20comment%20the%20implementation%20of%20this%20method%20making%20the%20code%20empty.%0D%09%22%0D%0D%09%22self%20isNaN%20ifTrue%3A%20%5B%20super%20mustBeNumber%20%5D%22"));
smalltalk.bind(smalltalk.Object, unescape("mustBeNumber"), "mustBeNumber", function Object__mustBeNumber(){
const self = this; return self.error_("Must be a Number.");
}
, "testing", unescape("mustBeNumber%0D%09%22%20Signal%20an%20error%20if%20the%20receiver%20is%20not%20a%20Number.%20%22%0D%0D%09%5Eself%20error%3A%20%27Must%20be%20a%20Number.%27"));
smalltalk.bind(smalltalk.Number, unescape("%3E"), "_gt", function Number___gt(aNumber){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKNumber.primGreaterThan(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.error_("Must be a Number.");
}
, "comparing", unescape("%3E%20aNumber%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20greater%20to%20aNumber.%20%22%0D%0D%09%3Cprimitive%3A%20%27primGreaterThan%27%20module%3A%20%27SKNumber%27%3E%0D%09%5Eself%20error%3A%20%27Must%20be%20a%20Number.%27%20"));
smalltalk.bind(smalltalk.Number, unescape("%3C"), "_lt", function Number___lt(aNumber){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKNumber.primLessThan(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.errror_("Must be a Number.");
}
, "comparing", unescape("%3C%20aNumber%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20smaller%20to%20aNumber.%20%22%0D%0D%09%3Cprimitive%3A%20%27primLessThan%27%20module%3A%20%27SKNumber%27%3E%0D%09%5Eself%20errror%3A%20%27Must%20be%20a%20Number.%27%20"));
smalltalk.bind(smalltalk.Number, unescape("%3E%3D"), "_gt_eq", function Number___gt_eq(aNumber){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKNumber.primGreaterThanEqualTo(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.error_("Must be a Number.");
}
, "comparing", unescape("%3E%3D%20aNumber%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20greater%20or%20equal%20to%20aNumber.%20%22%0D%0D%09%3Cprimitive%3A%20%27primGreaterThanEqualTo%27%20module%3A%20%27SKNumber%27%3E%0D%09%5Eself%20error%3A%20%27Must%20be%20a%20Number.%27%20"));
smalltalk.bind(smalltalk.Number, unescape("%3C%3D"), "_lt_eq", function Number___lt_eq(aNumber){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKNumber.primLessThanEqualTo(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.error_("Must be a Number.");
}
, "comparing", unescape("%3C%3D%20aNumber%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20smaller%20or%20equal%20to%20aNumber.%20%22%0D%0D%09%3Cprimitive%3A%20%27primLessThanEqualTo%27%20module%3A%20%27SKNumber%27%3E%0D%09%5Eself%20error%3A%20%27Must%20be%20a%20Number.%27.%20"));
smalltalk.bind(smalltalk.Number, unescape("sign"), "sign", function Number__sign(){
const self = this; if ((self.strictlyPositive()).valueOf()) {return (1)};
if ((self.negative()).valueOf()) {return (-1)};
return (0);
}
, "accessing", unescape("sign%0D%09%22Return%201%20if%20the%20receiver%20is%20%3E%200.%0D%09Return%200%20if%20the%20receiver%20is%200.%0D%09Return%20-1%20if%20the%20receiver%20is%20%3C%200.%22%0D%0D%09self%20strictlyPositive%0D%09%09ifTrue%3A%20%5B%5E1%5D.%0D%09self%20negative%0D%09%09ifTrue%3A%20%5B%5E-1%5D.%0D%09%5E0"));
smalltalk.bind(smalltalk.Number, unescape("+"), "_plus", function Number___plus(aNumber){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKNumber.primAddition(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.error_("Must be a Number.");
}
, "arithmetic", unescape("+%20aNumber%0D%09%22%20Return%20the%20result%20of%20operation%20on%20receiver%20and%20aNumber.%20%22%0D%0D%09%3Cprimitive%3A%20%27primAddition%27%20module%3A%20%27SKNumber%27%3E%0D%09%5Eself%20error%3A%20%27Must%20be%20a%20Number.%27.%20"));
smalltalk.bind(smalltalk.Number, unescape("-"), "_minus", function Number___minus(aNumber){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKNumber.primSubtraction(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.error_("Must be a Number.");
}
, "arithmetic", unescape("-%20aNumber%0D%09%22%20Return%20the%20result%20of%20operation%20on%20receiver%20and%20aNumber.%20%22%0D%0D%09%3Cprimitive%3A%20%27primSubtraction%27%20module%3A%20%27SKNumber%27%3E%0D%09%5Eself%20error%3A%20%27Must%20be%20a%20Number.%27.%20"));
smalltalk.bind(smalltalk.Number, unescape("*"), "_star", function Number___star(aNumber){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKNumber.primMultiplication(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.error_("Must be a Number.");
}
, "arithmetic", unescape("*%20aNumber%0D%09%22%20Return%20the%20result%20of%20operation%20on%20receiver%20and%20aNumber.%20%22%0D%0D%09%3Cprimitive%3A%20%27primMultiplication%27%20module%3A%20%27SKNumber%27%3E%0D%09%5Eself%20error%3A%20%27Must%20be%20a%20Number.%27.%20"));
smalltalk.bind(smalltalk.Number, unescape("/"), "_slash", function Number___slash(aNumber){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKNumber.primDivide(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.error_("Must be a Number");
}
, "arithmetic", unescape("/%20aNumber%0D%09%22%20Return%20the%20result%20of%20operation%20on%20receiver%20and%20aNumber.%20%22%0D%0D%09%3Cprimitive%3A%20%27primDivide%27%20module%3A%20%27SKNumber%27%3E%0D%09%5Eself%20error%3A%20%27Must%20be%20a%20Number%27.%20"));
smalltalk.bind(smalltalk.Number, unescape("divideByZero"), "divideByZero", function Number__divideByZero(){
const self = this; return self.error_("Divide by Zero");
}
, "signaling", unescape("divideByZero%0D%09%22%20Signal%20divide%20by%20cero%20attempt.%20%22%0D%0D%09%5Eself%20error%3A%20%27Divide%20by%20Zero%27"));
smalltalk.bind(smalltalk.Number, unescape("%5C%5C"), "_bk_bk", function Number___bk_bk(aNumber){
const self = this; aNumber.mustBeNumber();
if ((aNumber._eq((0))).valueOf()) {self.divideByZero()};
return self._minus(((self._slash_slash(aNumber))._star(aNumber)));
}
, "arithmetic", unescape("%5C%5C%20aNumber%0D%09%22%20Return%20the%20reminder%20of%20dividing%20the%20receiver%20by%20aNumber.%20%22%0D%0D%09aNumber%20mustBeNumber.%0D%09aNumber%20%3D%200%20ifTrue%3A%20%5B%20self%20divideByZero%20%5D.%0D%09%5Eself%20-%20%28self%20//%20aNumber%20*%20aNumber%29"));
smalltalk.bind(smalltalk.Number, unescape("//"), "_slash_slash", function Number___slash_slash(aNumber){
const self = this; aNumber.mustBeNumber();
if ((aNumber._eq((0))).valueOf()) {self.divideByZero()};
return (self._slash(aNumber)).floor();
}
, "arithmetic", unescape("//%20aNumber%0D%09%22%20Return%20the%20result%20of%20operation%20on%20receiver%20and%20aNumber.%20%22%0D%0D%09aNumber%20mustBeNumber.%0D%09aNumber%20%3D%200%20ifTrue%3A%20%5B%20self%20divideByZero%20%5D.%0D%09%5E%28self%20/%20aNumber%29%20floor"));
smalltalk.bind(smalltalk.Number, unescape("sin"), "sin", function Number__sin(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKNumber.primSin(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "arithmetic", unescape("sin%0D%0D%09%3Cprimitive%3A%20%27primSin%27%20module%3A%20%27SKNumber%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.Number, unescape("cos"), "cos", function Number__cos(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKNumber.primCos(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "arithmetic", unescape("cos%0D%0D%09%3Cprimitive%3A%20%27primCos%27%20module%3A%20%27SKNumber%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.Number, unescape("tan"), "tan", function Number__tan(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKNumber.primTan(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "arithmetic", unescape("tan%0D%0D%09%3Cprimitive%3A%20%27primTan%27%20module%3A%20%27SKNumber%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.Number, unescape("atan2%3A"), "atan2_", function Number__atan2_(aNumber){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKNumber.primAtan2(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.error_("Argument must be a Number.");
}
, "arithmetic", unescape("atan2%3A%20aNumber%0D%0D%09%3Cprimitive%3A%20%27primAtan2%27%20module%3A%20%27SKNumber%27%3E%0D%09%5Eself%20error%3A%20%27Argument%20must%20be%20a%20Number.%27.%20"));
smalltalk.bind(smalltalk.Number, unescape("arcTan"), "arcTan", function Number__arcTan(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKNumber.primArctan(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "arithmetic", unescape("arcTan%0D%0D%09%3Cprimitive%3A%20%27primArctan%27%20module%3A%20%27SKNumber%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.Number, unescape("arcSin"), "arcSin", function Number__arcSin(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKNumber.primArcsin(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "arithmetic", unescape("arcSin%0D%0D%09%3Cprimitive%3A%20%27primArcsin%27%20module%3A%20%27SKNumber%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.Number, unescape("arcCos"), "arcCos", function Number__arcCos(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKNumber.primArccos(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "arithmetic", unescape("arcCos%0D%0D%09%3Cprimitive%3A%20%27primArccos%27%20module%3A%20%27SKNumber%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.Number, unescape("negated"), "negated", function Number__negated(){
const self = this; return (-1)._star(self);
}
, "arithmetic", unescape("negated%0D%09%5E-1%20*%20self%20"));
smalltalk.bind(smalltalk.Number, unescape("squared"), "squared", function Number__squared(){
const self = this; return self._star(self);
}
, "arithmetic", unescape("squared%0D%09%5Eself%20*%20self%20"));
smalltalk.bind(smalltalk.Number, unescape("sqrt"), "sqrt", function Number__sqrt(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKNumber.primSqrt(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.error_("Must be a positive number.");
}
, "arithmetic", unescape("sqrt%0D%0D%09%3Cprimitive%3A%20%27primSqrt%27%20module%3A%20%27SKNumber%27%3E%0D%09%5Eself%20error%3A%27Must%20be%20a%20positive%20number.%27.%20"));
smalltalk.bind(smalltalk.Number, unescape("%3C%3C"), "_lt_lt", function Number___lt_lt(aNumber){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKNumber.primBitShiftLeft(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.error_("Must be a Number.");
}
, "arithmetic", unescape("%3C%3C%20aNumber%0D%09%22%20Return%20the%20receiver%20shifted%20aNumber%20of%20bits%20to%20the%20left.%20%22%0D%0D%09%3Cprimitive%3A%20%27primBitShiftLeft%27%20module%3A%20%27SKNumber%27%3E%0D%09%5Eself%20error%3A%27Must%20be%20a%20Number.%27.%20"));
smalltalk.bind(smalltalk.Number, unescape("%3E%3E"), "_gt_gt", function Number___gt_gt(aNumber){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKNumber.primBitShiftRight(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.error_("Must be a Number.");
}
, "arithmetic", unescape("%3E%3E%20aNumber%0D%09%22%20Return%20the%20receiver%20shifted%20aNumber%20of%20bits%20to%20the%20right.%20%22%0D%0D%09%3Cprimitive%3A%20%27primBitShiftRight%27%20module%3A%20%27SKNumber%27%3E%0D%09%5Eself%20error%3A%20%27Must%20be%20a%20Number.%27.%20"));
smalltalk.bind(smalltalk.Number, unescape("bitShift%3A"), "bitShift_", function Number__bitShift_(anInteger){
const self = this; if ((anInteger._lt((0))).valueOf()) {return self._gt_gt((anInteger.negated()))};
return self._lt_lt(anInteger);
}
, "arithmetic", unescape("bitShift%3A%20anInteger%0D%09%22%20Return%20the%20receiver%20shifted%20left%20anInteger%20number%20of%20bits%20if%20anInteger%20is%20positive%2C%20or%20shifted%20right%20for%20anInteger%20negated%20number%20of%20bits%20if%20anInteger%20is%20negative.%22%0D%0D%09anInteger%20%3C%200%20ifTrue%3A%20%5B%20%5Eself%20%3E%3E%20anInteger%20negated%20%5D.%0D%09%5Eself%20%3C%3C%20anInteger"));
smalltalk.bind(smalltalk.Number, unescape("max%3A"), "max_", function Number__max_(aNumber){
const self = this; if ((self._gt(aNumber)).valueOf()) {return self} else {return aNumber};
}
, "arithmetic", unescape("max%3A%20aNumber%0D%09%22%20Return%20the%20result%20of%20operation%20on%20receiver%20and%20aNumber.%20%22%0D%0D%09%5Eself%20%3E%20aNumber%0D%09%09ifTrue%3A%5Bself%5D%0D%09%09ifFalse%3A%5BaNumber%5D.%20"));
smalltalk.bind(smalltalk.Number, unescape("min%3A"), "min_", function Number__min_(aNumber){
const self = this; if ((self._lt(aNumber)).valueOf()) {return self} else {return aNumber};
}
, "arithmetic", unescape("min%3A%20aNumber%0D%09%22%20Return%20the%20result%20of%20operation%20on%20receiver%20and%20aNumber.%20%22%0D%0D%09%5Eself%20%3C%20aNumber%0D%09%09ifTrue%3A%5Bself%5D%0D%09%09ifFalse%3A%5BaNumber%5D.%20"));
smalltalk.bind(smalltalk.Number, unescape("truncated"), "truncated", function Number__truncated(){
const self = this; if ((self.negative()).valueOf()) {return self.ceiling()} else {return self.floor()};
}
, "arithmetic", unescape("truncated%0D%09%22%20Return%20the%20receiver%20truncated.%20%22%0D%0D%09%5Eself%20negative%0D%09%09ifTrue%3A%20%5Bself%20ceiling%5D%0D%09%09ifFalse%3A%20%5Bself%20floor%5D"));
smalltalk.bind(smalltalk.Number, unescape("ln"), "ln", function Number__ln(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKNumber.primLn(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.error_("Must be a positive Number.");
}
, "arithmetic", unescape("ln%0D%09%22Return%20the%20natural%20log%20of%20the%20receiver%22%0D%0D%09%3Cprimitive%3A%20%27primLn%27%20module%3A%20%27SKNumber%27%3E%0D%09%5Eself%20error%3A%20%27Must%20be%20a%20positive%20Number.%27.%20"));
smalltalk.bind(smalltalk.Number, unescape("log%3A"), "log_", function Number__log_(aBaseNumber){
const self = this; return (self.ln())._slash((aBaseNumber.ln()));
}
, "arithmetic", unescape("log%3A%20aBaseNumber%0D%09%22Return%20the%20log%20of%20the%20receiver%20in%20the%20provided%20base.%22%0D%0D%09%5Eself%20ln%20/%20aBaseNumber%20ln"));
smalltalk.bind(smalltalk.Number, unescape("floor"), "floor", function Number__floor(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKNumber.primFloor(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.error_("Must be a Number.");
}
, "arithmetic", unescape("floor%0D%09%22Return%20the%20largest%20integer%20less%20than%20or%20equal%20to%20the%20receiver.%22%0D%0D%09%3Cprimitive%3A%20%27primFloor%27%20module%3A%20%27SKNumber%27%3E%0D%09%5Eself%20error%3A%20%27Must%20be%20a%20Number.%27.%20"));
smalltalk.bind(smalltalk.Number, unescape("ceiling"), "ceiling", function Number__ceiling(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKNumber.primCeiling(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.error_("Must be a Number.");
}
, "arithmetic", unescape("ceiling%0D%09%22Return%20the%20smallest%20integer%20greater%20than%20or%20equal%20to%20the%20receiver.%22%0D%0D%09%3Cprimitive%3A%20%27primCeiling%27%20module%3A%20%27SKNumber%27%3E%0D%09%5Eself%20error%3A%20%27Must%20be%20a%20Number.%27.%20"));
smalltalk.bind(smalltalk.Number, unescape("raisedTo%3A"), "raisedTo_", function Number__raisedTo_(aNumber){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKNumber.primRaisedTo(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.error_("Must be a Number.");
}
, "arithmetic", unescape("raisedTo%3A%20aNumber%0D%09%22Raise%20the%20receiver%20to%20the%20power%20of%20aNumber.%22%0D%0D%09%3Cprimitive%3A%20%27primRaisedTo%27%20module%3A%20%27SKNumber%27%3E%0D%09%5Eself%20error%3A%27Must%20be%20a%20Number.%27.%20"));
smalltalk.bind(smalltalk.Number, unescape("bitAt%3A"), "bitAt_", function Number__bitAt_(anInteger){
const self = this; if (((1)._gt(anInteger)).valueOf()) {self.error_("bitAt: index must be greater than zero")};
if ((self._gt_eq((0))).valueOf()) {return (1).bitAnd_((self.bitShift_(((1)._minus(anInteger)))))} else {return (1)._minus(((1).bitAnd_(((self.bitInvert()).bitShift_(((1)._minus(anInteger)))))))};
}
, "bit operations", unescape("bitAt%3A%20anInteger%0D%09%09%22Answer%200%20if%20the%20bit%20at%20index%20position%20anInteger%0D%09%09%20in%20the%20receiver%20is%200%2C%20else%20answer%201.%22%0D%091%20%3E%20anInteger%0D%09%09ifTrue%3A%20%5B%20self%20error%3A%20%27bitAt%3A%20index%20must%20be%20greater%20than%20zero%27%20%5D.%0D%09%5Eself%20%3E%3D%200%0D%09%09ifTrue%3A%20%5B%201%20bitAnd%3A%20%28%20self%20bitShift%3A%201%20-%20anInteger%20%29%20%5D%0D%09%09ifFalse%3A%20%5B%201%20-%20%28%201%20bitAnd%3A%20%28%20self%20bitInvert%20bitShift%3A%201%20-%20anInteger%20%29%20%29%20%5D"));
smalltalk.bind(smalltalk.Number, unescape("bitInvert"), "bitInvert", function Number__bitInvert(){
const self = this; return (-1)._minus(self);
}
, "bit operations", unescape("bitInvert%0D%09%22Invert%20the%20bits%20of%20the%20receiver%22%0D%0D%09%5E%20-1%20-%20self"));
smalltalk.bind(smalltalk.Number, unescape("bitAnd%3A"), "bitAnd_", function Number__bitAnd_(anInteger){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKNumber.primBitAnd(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.error_("Argument and Receiver must be an integer.");
}
, "bit operations", unescape("bitAnd%3A%20anInteger%0D%09%22Bit%20and%20the%20receiver%20and%20the%20argument.%22%0D%0D%09%3Cprimitive%3A%20%27primBitAnd%27%20module%3A%20%27SKNumber%27%3E%0D%09%5Eself%20error%3A%20%27Argument%20and%20Receiver%20must%20be%20an%20integer.%27.%20"));
smalltalk.bind(smalltalk.Number, unescape("bitOr%3A"), "bitOr_", function Number__bitOr_(anInteger){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKNumber.primBitOr(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.error_("Argument and Receiver must be an integer.");
}
, "bit operations", unescape("bitOr%3A%20anInteger%0D%09%22Bit%20or%20the%20receiver%20and%20the%20argument.%22%0D%0D%09%3Cprimitive%3A%20%27primBitOr%27%20module%3A%20%27SKNumber%27%3E%0D%09%5Eself%20error%3A%20%27Argument%20and%20Receiver%20must%20be%20an%20integer.%27.%20"));
smalltalk.bind(smalltalk.Number, unescape("bitXor%3A"), "bitXor_", function Number__bitXor_(anInteger){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKNumber.primBitXor(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.error_("Argument and Receiver must be an integer.");
}
, "bit operations", unescape("bitXor%3A%20anInteger%0D%09%22Exclusive%20or%20the%20receiver%20with%20the%20argument.%22%0D%0D%09%3Cprimitive%3A%27primBitXor%27%20module%3A%27SKNumber%27%3E%0D%09%5Eself%20error%3A%20%27Argument%20and%20Receiver%20must%20be%20an%20integer.%27.%20"));
smalltalk.bind(smalltalk.Number, unescape("%26"), "_amp", function Number___amp(anInteger){
const self = this; return self.bitAnd_(anInteger);
}
, "bit operations", unescape("%26%20anInteger%0D%09%22Bit%20and%20the%20receiver%20and%20the%20argument.%22%0D%0D%09%5Eself%20bitAnd%3A%20anInteger"));
smalltalk.bind(smalltalk.Number, unescape("asNumber"), "asNumber", function Number__asNumber(){
const self = this; return self._plus((0));
}
, "converting", unescape("asNumber%0D%09%22%20Return%20the%20receiver%20as%20a%20Number.%20%22%0D%0D%09%5Eself%20+%200"));
smalltalk.bind(smalltalk.Number, unescape("abs"), "abs", function Number__abs(){
const self = this; if ((self._lt((0))).valueOf()) {return self.negated()};
return self;
}
, "converting", unescape("abs%0D%09%22%20Return%20the%20absolute%20value%20of%20the%20receiver.%20%22%0D%0D%09self%20%3C%200%20ifTrue%3A%20%5B%20%5Eself%20negated%20%5D.%0D%09%5Eself"));
smalltalk.bind(smalltalk.Number, unescape("rounded"), "rounded", function Number__rounded(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKNumber.primRounded(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "converting", unescape("rounded%0D%09%22%20Return%20the%20receiver%20rounded.%20%22%0D%0D%09%3Cprimitive%3A%20%27primRounded%27%20module%3A%20%27SKNumber%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.Number, unescape("asCharacter"), "asCharacter", function Number__asCharacter(){
const self = this; return smalltalk.String.fromCharCode_(self);
}
, "converting", unescape("asCharacter%0D%09%22%20Return%20the%20character%20with%20the%20receiver%27s%20code.%20%22%0D%0D%09%5EString%20fromCharCode%3A%20self"));
smalltalk.bind(smalltalk.Number, unescape("to%3A"), "to_", function Number__to_(aNumber){
const self = this; return smalltalk.Interval.from_to_(self,aNumber);
}
, "converting", unescape("to%3A%20aNumber%0D%09%22%20Return%20a%20collection%20of%20numbers%20from%20the%20receiver%20to%20aNumber.%20%22%0D%0D%09%5EInterval%20from%3A%20self%20to%3A%20aNumber%20"));
smalltalk.bind(smalltalk.Number, unescape("to%3Aby%3A"), "to_by_", function Number__to_by_(aNumber,anotherNumber){
const self = this; return smalltalk.Interval.from_to_by_(self,aNumber,anotherNumber);
}
, "converting", unescape("to%3A%20aNumber%20by%3A%20anotherNumber%0D%0D%09%5EInterval%20from%3A%20self%20to%3A%20aNumber%20by%3A%20anotherNumber%20"));
smalltalk.bind(smalltalk.Number, unescape("timesRepeat%3A"), "timesRepeat_", function Number__timesRepeat_(aBlock){
var count = nil;
const self = this; if (((aBlock.argumentCount())._eq((1))).valueOf()) {return (1).to_do_(self,aBlock)};
count=(1);
while((count._gt(self)).not()){aBlock.value();
count=count._plus((1))};;
return self;
}
, "enumerating", unescape("timesRepeat%3A%20aBlock%0D%09%22%20Evaluates%20aBlock%20a%20number%20of%20times%20given%20by%20the%20receiver.%0D%09Return%20the%20receiver.%0D%09%22%0D%0D%09%7C%20count%20%7C%0D%09aBlock%20argumentCount%20%3D%201%20ifTrue%3A%20%5B%0D%09%09%5E1%20to%3A%20self%20do%3A%20aBlock%0D%09%5D.%0D%09count%20%3A%3D%201.%0D%09%5B%20count%20%3E%20self%20%5D%20whileFalse%3A%20%5B%0D%09%09aBlock%20value.%0D%09%09count%20%3A%3D%20count%20+%201%0D%09%5D"));
smalltalk.bind(smalltalk.Number, unescape("to%3Ado%3A"), "to_do_", function Number__to_do_(aNumber,aBlock){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKNumber.primToDo(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "iterating", unescape("to%3A%20aNumber%20do%3A%20aBlock%0D%09%22%20Evaluate%20aBlock%20from%20the%20receiver%20to%20aNumber.%0D%09Return%20the%20receiver.%22%0D%0D%09%3Cprimitive%3A%20%27primToDo%27%20module%3A%20%27SKNumber%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.Number, unescape("to%3Aby%3Ado%3A"), "to_by_do_", function Number__to_by_do_(aNumber,increment,aBlock){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKNumber.primToByDo(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "iterating", unescape("to%3A%20aNumber%20by%3A%20increment%20do%3A%20aBlock%0D%09%22%20Evaluate%20aBlock%20for%20the%20numbers%20between%20the%20receiver%20and%20aNumber%20where%20each%20number%20is%20the%20previous%20number%20plus%20increment.%0D%09Return%20the%20receiver.%22%0D%0D%09%3Cprimitive%3A%20%27primToByDo%27%20module%3A%20%27SKNumber%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.Number, unescape("asString"), "asString", function Number__asString(){
const self = this; return self.toString();
}
, "converting", unescape("asString%0D%09%22%20Return%20the%20text%20representation%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20toString"));
smalltalk.bind(smalltalk.Number, unescape("asJavascript"), "asJavascript", function Number__asJavascript(){
const self = this; return (unescape("%28")._comma((self.printString())))._comma(unescape("%29"));
}
, "converting", unescape("asJavascript%0D%09%22%20Return%20the%20javascript%20representation%20of%20the%20receiver.%20%22%0D%0D%09%5E%27%28%27%2C%20self%20printString%2C%20%27%29%27"));
smalltalk.bind(smalltalk.Number, unescape("printOn%3A"), "printOn_", function Number__printOn_(aStream){
const self = this; aStream.nextPutAll_((self.asString()));
return self;
}
, "printing", unescape("printOn%3A%20aStream%0D%09%22Print%20the%20receiver%20on%20aStream%20in%20base%2010.%22%0D%0D%09aStream%20nextPutAll%3A%20self%20asString"));
smalltalk.bind(smalltalk.Number, unescape("isNumber"), "isNumber", function Number__isNumber(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKNumber.primIsNumber(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return false;
}
, "testing", unescape("isNumber%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20a%20number.%20%22%0D%0D%09%3Cprimitive%3A%20%27primIsNumber%27%20module%3A%20%27SKNumber%27%3E%0D%09%5Efalse.%20"));
smalltalk.bind(smalltalk.Number, unescape("atRandom"), "atRandom", function Number__atRandom(){
const self = this; return ((((smalltalk.Random.$$new()).next())._star(self)).truncated())._plus((1));
}
, "converting", unescape("atRandom%0D%09%22%20Return%20a%20random%20integer%20in%20the%20interval%20from%201%20to%20the%20receiver.%20%22%0D%0D%09%5E%28Random%20new%20next%20*%20self%29%20truncated%20+%201"));
smalltalk.bind(smalltalk.Number, unescape("@"), "_at", function Number___at(aNumber){
const self = this; return smalltalk.Point.x_y_(self,(((nil.isNil_(aNumber))).ifTrue_ifFalse_((function Number__(){
return (0);
}
),(function Number__(){
return aNumber;
}
))));
}
, "converting", unescape("@%20aNumber%0D%09%22%20Return%20a%20Point%20with%20coordinates%20given%20by%20the%20receiver%20and%20aNumber.%20%22%0D%0D%09%5EPoint%20x%3A%20self%20y%3A%20%28aNumber%20isNil%20ifTrue%3A%20%5B0%5D%20ifFalse%3A%20%5BaNumber%5D%29"));
smalltalk.bind(smalltalk.Number, unescape("asPoint"), "asPoint", function Number__asPoint(){
const self = this; return smalltalk.Point.x_y_(self,self);
}
, "converting", unescape("asPoint%0D%09%22%20Return%20a%20Point%20with%20both%20coordinates%20given%20by%20the%20receiver.%20%22%0D%0D%09%5EPoint%20x%3A%20self%20y%3A%20self"));
smalltalk.bind(smalltalk.Number, unescape("asJSONObject"), "asJSONObject", function Number__asJSONObject(){
const self = this; return self._plus((0));
}
, "converting", unescape("asJSONObject%0D%09%22%20Return%20the%20mapping%20of%20the%20receiver%20to%20JSON%20structure.%20%22%0D%0D%09%5Eself%20+%200%0D%22Note%3A%09we%20need%20to%20normalize%20result%20to%20do%20not%20destroy%20typeof%20checkings%0D%09Do%20NOT%20modify%20this%20method%20if%20you%20do%20not%20know%20what%20you%20are%20doing.%0D%09If%20you%20remove%20the%20+%200%20computation%2C%20the%20returned%20object%20will%20return%20%27object%27%20and%20not%20%27number%27%20as%20result%20of%20typeof%20operation.%0D%22"));
smalltalk.bind(smalltalk.Number, unescape("asInteger"), "asInteger", function Number__asInteger(){
const self = this; return self.rounded();
}
, "converting", unescape("asInteger%0D%09%22%20Return%20the%20receiver%20as%20an%20Integer.%20%22%0D%0D%09%5Eself%20rounded"));
smalltalk.bind(smalltalk.Number, unescape("between%3Aand%3A"), "between_and_", function Number__between_and_(min,max){
const self = this; return (min._lt_eq(self)).and_((function Number__(){
return self._lt_eq(max);
}
));
}
, "testing", unescape("between%3A%20min%20and%3A%20max%0D%09%22%20Answer%20true%20if%20the%20receiver%20is%20greater%20than%20or%20equal%20to%20min%20and%20less%20than%20or%20equal%20to%20max%2C%20else%20answer%20false.%20%22%0D%0D%09%5Emin%20%3C%3D%20self%20and%3A%20%5B%20self%20%3C%3D%20max%20%5D"));
smalltalk.bind(smalltalk.Number, unescape("even"), "even", function Number__even(){
const self = this; return (self._bk_bk((2)))._eq((0));
}
, "testing", unescape("even%0D%09%22%20Answer%20true%20if%20the%20receiver%20is%20an%20even%20number.%20%22%0D%0D%09%5Eself%20%5C%5C%202%20%3D%200"));
smalltalk.bind(smalltalk.Number, unescape("odd"), "odd", function Number__odd(){
const self = this; return (self._bk_bk((2)))._eq((1));
}
, "testing", unescape("odd%0D%09%22%20Answer%20true%20if%20the%20receiver%20is%20an%20odd%20number.%20%22%0D%0D%09%5Eself%20%5C%5C%202%20%3D%201"));
smalltalk.bind(smalltalk.Number, unescape("negative"), "negative", function Number__negative(){
const self = this; return self._lt((0));
}
, "testing", unescape("negative%0D%09%22Return%20if%20the%20receiver%20is%20negative.%22%0D%0D%09%5Eself%20%3C%200"));
smalltalk.bind(smalltalk.Number, unescape("shallowCopy"), "shallowCopy", function Number__shallowCopy(){
const self = this; return self;
}
, "copying", unescape("shallowCopy%0D%09%22%20Return%20a%20shallow%20copy%20of%20the%20receiver.%20%22%0D%0D%09%5Eself"));
smalltalk.bind(smalltalk.Number, unescape("deepCopy"), "deepCopy", function Number__deepCopy(){
const self = this; return self;
}
, "copying", unescape("deepCopy%0D%09%22%20Return%20a%20deep%20copy%20of%20the%20receiver.%20%22%0D%0D%09%5Eself"));
smalltalk.bind(smalltalk.Number.$klass, unescape("pi"), "pi", function Number_class__pi(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKNumber.primPi(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "instantiation", unescape("pi%0D%09%22%20Return%20the%20singular%20value%20PI.%20%22%0D%0D%09%3Cprimitive%3A%20%27primPi%27%20module%3A%20%27SKNumber%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.Number.$klass, unescape("readFrom%3Aradix%3A"), "readFrom_radix_", function Number_class__readFrom_radix_(aStringOrStream,radix){
var readStream = nil;
var value = nil;
var $$char = nil;
const self = this; var $early={name:"stReturn"};
try {
readStream=aStringOrStream.asStream();
value=(0);
while(((function Number_class__(){
$$char=readStream.peek();
return ((nil.isNil_($$char)===false)).and_((function Number_class__(){
return ($$char.isDigit()).or_((function Number_class__(){
return $$char.isUpperCase();
}
));
}
));
}
)()).valueOf()){if ((radix._lt(($$char.digitValue()))).valueOf()) {$early.result=value; throw ($early)};
value=(value._star(radix))._plus(($$char.digitValue()));
readStream.next()};;
return value;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "converting", unescape("readFrom%3A%20aStringOrStream%20radix%3A%20radix%0D%09%22%20Private%20-%20Read%20an%20integer%20from%20%3CaStream%3E%20and%20return%20it.%20%22%0D%0D%09%7C%20readStream%20value%20char%20%7C%0D%09readStream%20%3A%3D%20aStringOrStream%20asStream.%0D%09value%20%3A%3D%200.%0D%09%5B%09char%20%3A%3D%20readStream%20peek.%0D%09%09char%20notNil%20and%3A%20%5B%20char%20isDigit%20or%3A%20%5B%20char%20isUpperCase%20%5D%20%5D%0D%09%5D%20whileTrue%3A%20%5B%0D%09%09radix%20%3C%20%20char%20digitValue%20ifTrue%3A%20%5B%20%5Evalue%20%5D.%0D%09%09value%20%3A%3D%20value%20*%20radix%20+%20char%20digitValue.%0D%09%09readStream%20next%0D%09%5D.%0D%09%5Evalue"));
smalltalk.bind(smalltalk.Number.$klass, unescape("readFrom%3A"), "readFrom_", function Number_class__readFrom_(aStringOrStream){
var readStream = nil;
var value = nil;
var $$char = nil;
const self = this; readStream=aStringOrStream.asStream();
value=(0);
while(((function Number_class__(){
$$char=readStream.peek();
return ((nil.isNil_($$char)===false)).and_((function Number_class__(){
return $$char.isDigit();
}
));
}
)()).valueOf()){value=(value._star((10)))._plus(($$char.digitValue()));
readStream.next()};;
if (((nil.is_eqeq_($$char,"r"))).not()) {return value};
readStream.next();
return self.readFrom_radix_(readStream,value);
}
, "converting", unescape("readFrom%3A%20aStringOrStream%0D%09%22%20Private%20-%20Read%20an%20integer%20from%20%3CaStream%3E%20and%20return%20it.%20%22%0D%0D%09%7C%20readStream%20value%20char%20%7C%0D%09readStream%20%3A%3D%20aStringOrStream%20asStream.%0D%09value%20%3A%3D%200.%0D%09%5B%09char%20%3A%3D%20readStream%20peek.%0D%09%09char%20notNil%20and%3A%20%5B%20char%20isDigit%20%5D%0D%09%5D%20whileTrue%3A%20%5B%0D%09%09value%20%3A%3D%20value%20*%2010%20+%20char%20digitValue.%0D%09%09readStream%20next%0D%09%5D.%0D%09char%20%3D%3D%20%22%24r%22%27r%27%20ifFalse%3A%20%5B%20%5Evalue%20%5D.%0D%09readStream%20next.%20%22skip%20the%20r%22%0D%09%5Eself%20readFrom%3A%20readStream%20radix%3A%20value"));
smalltalk.addClass("BlockClosure", smalltalk.Object, [], 'Kernel');
smalltalk.BlockClosure.$classVariableNames=("");
smalltalk.bind(smalltalk.BlockClosure, unescape("compiledSource"), "compiledSource", function BlockClosure__compiledSource(){
const self = this; return self.toString();
}
, "accessing", unescape("compiledSource%0D%09%22%20Return%20the%20source%20code%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20toString"));
smalltalk.bind(smalltalk.BlockClosure, unescape("isBlock"), "isBlock", function BlockClosure__isBlock(){
const self = this; return true;
}
, "accesssing", unescape("isBlock%0D%0D%09%5E%20true%20"));
smalltalk.bind(smalltalk.BlockClosure, unescape("whileTrue%3A"), "whileTrue_", function BlockClosure__whileTrue_(aBlock){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKBlockClosure.primWhileTrue(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; if ((self.isBlock()).not()) {return self.error_("Argument must be a Block")};
return self.primitiveFailed();
}
, "iterating", unescape("whileTrue%3A%20aBlock%0D%09%22%20Evaluate%20aBlock%20while%20the%20result%20of%20evaluating%20the%20receiver%20is%20true.%20%22%0D%0D%09%3Cprimitive%3A%20%27primWhileTrue%27%20module%3A%20%27SKBlockClosure%27%3E%0D%09self%20isBlock%0D%09%09ifFalse%3A%20%5B%5Eself%20error%3A%20%27Argument%20must%20be%20a%20Block%27%5D.%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.BlockClosure, unescape("whileFalse%3A"), "whileFalse_", function BlockClosure__whileFalse_(aBlock){
const self = this; while(((self.value()).not()).valueOf()){aBlock.value()};;
return nil;
}
, "iterating", unescape("whileFalse%3A%20aBlock%0D%09%22%20Evaluate%20aBlock%20while%20the%20result%20of%20evaluating%20the%20receiver%20is%20false.%20%22%0D%09%5Bself%20value%20not%5D%20whileTrue%3A%20aBlock.%0D%09%5Enil.%20"));
smalltalk.bind(smalltalk.BlockClosure, unescape("value"), "value", function BlockClosure__value(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKBlockClosure.primValue(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "evaluating", unescape("value%0D%09%22%20Return%20the%20result%20of%20evaluating%20the%20receiver.%20%22%0D%0D%09%3Cprimitive%3A%20%27primValue%27%20module%3A%20%27SKBlockClosure%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.BlockClosure, unescape("value%3A"), "value_", function BlockClosure__value_(anObject){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKBlockClosure.primValueWith(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "evaluating", unescape("value%3A%20anObject%0D%09%22%20Return%20the%20result%20of%20evaluating%20the%20receiver%20with%20anObject.%20%22%0D%0D%09%3Cprimitive%3A%20%27primValueWith%27%20module%3A%20%27SKBlockClosure%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.BlockClosure, unescape("value%3Avalue%3A"), "value_value_", function BlockClosure__value_value_(firstArgument,secondArgument){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKBlockClosure.primValueWith2Objects(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "evaluating", unescape("value%3A%20firstArgument%20value%3A%20secondArgument%0D%09%22%20Return%20the%20result%20of%20evaluating%20the%20receiver%20with%20arguments.%20%22%0D%0D%09%3Cprimitive%3A%20%27primValueWith2Objects%27%20module%3A%20%27SKBlockClosure%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.BlockClosure, unescape("value%3Avalue%3Avalue%3A"), "value_value_value_", function BlockClosure__value_value_value_(firstArgument,secondArgument,thirdArgument){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKBlockClosure.primValueWith3Objects(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "evaluating", unescape("value%3A%20firstArgument%20value%3A%20secondArgument%20value%3A%20thirdArgument%0D%09%22%20Return%20the%20result%20of%20evaluating%20the%20receiver%20with%20arguments.%20%22%0D%0D%09%3Cprimitive%3A%20%27primValueWith3Objects%27%20module%3A%20%27SKBlockClosure%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.BlockClosure, unescape("value%3Avalue%3Avalue%3Avalue%3A"), "value_value_value_value_", function BlockClosure__value_value_value_value_(firstArgument,secondArgument,thirdArgument,fourthArgument){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKBlockClosure.primValueWith4Objects(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "evaluating", unescape("value%3A%20firstArgument%20value%3A%20secondArgument%20value%3A%20thirdArgument%20value%3A%20fourthArgument%0D%09%22%20Return%20the%20result%20of%20evaluating%20the%20receiver%20with%20arguments.%20%22%0D%0D%09%3Cprimitive%3A%20%27primValueWith4Objects%27%20module%3A%20%27SKBlockClosure%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.BlockClosure, unescape("valueWithArguments%3A"), "valueWithArguments_", function BlockClosure__valueWithArguments_(aCollection){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKBlockClosure.primValueWithArguments(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; if ((aCollection.isArray()).not()) {return self.error_("aCollection must be an Array")};
if (((aCollection.argumentCount())._eq((self.argumentCount()))).not()) {return self.error_(((("Receiver requested "._comma(((self.argumentCount()).toString())))._comma(" Arguments given "))._comma(((aCollection.argumentCount()).toString()))))};
return self.primitiveFailed();
}
, "evaluating", unescape("valueWithArguments%3A%20aCollection%0D%09%22%20Return%20the%20result%20of%20evaluating%20the%20receiver%20with%20potential%20arguments.%20%22%0D%0D%09%3Cprimitive%3A%27primValueWithArguments%27%20module%3A%27SKBlockClosure%27%3E%0D%09aCollection%20isArray%0D%09%09ifFalse%3A%20%5B%5Eself%20error%3A%27aCollection%20must%20be%20an%20Array%27%5D.%0D%09aCollection%20argumentCount%20%3D%20self%20argumentCount%0D%09%09ifFalse%3A%20%5B%5Eself%20error%3A%27Receiver%20requested%20%27%2Cself%20argumentCount%20toString%2C%27%20Arguments%20given%20%27%2C%20aCollection%20argumentCount%20toString%5D.%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.BlockClosure, unescape("on%3Ado%3A"), "on_do_", function BlockClosure__on_do_(anExceptionType,aBlock){
const self = this; return self.try_catch_(self,(function BlockClosure__(error){
if (((smalltalk.is_kindOf_(error,anExceptionType))).valueOf()) {return aBlock.value_(error)} else {return error.signal()};
}
));
}
, "error", unescape("on%3A%20anExceptionType%20do%3A%20aBlock%0D%09%22%20Return%20the%20result%20of%20evaluating%20the%20receiver%20catching%20exceptions.%20%22%0D%0D%09%5Eself%20try%3A%20self%20catch%3A%20%5B%3Aerror%20%7C%0D%09%09%28error%20isKindOf%3A%20anExceptionType%29%0D%09%09ifTrue%3A%20%5B%20aBlock%20value%3A%20error%20%5D%0D%09%09ifFalse%3A%20%5B%20error%20signal%20%5D%0D%09%5D"));
smalltalk.bind(smalltalk.BlockClosure, unescape("try%3Acatch%3A"), "try_catch_", function BlockClosure__try_catch_(aBlock,anotherBlock){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKBlockClosure.primTryCatch(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "private", unescape("try%3A%20aBlock%20catch%3A%20anotherBlock%0D%09%22%20Private%20-%20Try%20to%20evaluate%20aBlock%20catching%20exceptions%20with%20catchBlock.%20%22%0D%0D%09%3Cprimitive%3A%27primTryCatch%27%20module%3A%27SKBlockClosure%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.BlockClosure, unescape("valueDeferred%3A"), "valueDeferred_", function BlockClosure__valueDeferred_(milliseconds){
const self = this; self.valueWithTimeout_(milliseconds);
return self;
}
, "evaluating", unescape("valueDeferred%3A%20milliseconds%0D%09%22%20Evaluate%20the%20receiver%20deferred%20in%20time.%0D%09Return%20the%20receiver.%22%0D%0D%09self%20valueWithTimeout%3A%20milliseconds"));
smalltalk.bind(smalltalk.BlockClosure, unescape("valueDeferred"), "valueDeferred", function BlockClosure__valueDeferred(){
const self = this; self.valueDeferred_((0));
return self;
}
, "evaluating", unescape("valueDeferred%0D%09%22%20Evaluate%20the%20receiver%20deferred%20in%20time.%0D%09Return%20the%20receiver.%22%0D%0D%09self%20valueDeferred%3A%200"));
smalltalk.bind(smalltalk.BlockClosure, unescape("ensure%3A"), "ensure_", function BlockClosure__ensure_(aBlock){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKBlockClosure.primEnsure(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "error", unescape("ensure%3A%20aBlock%0D%09%22%20Returns%20the%20result%20of%20evaluating%20the%20receiver.%0D%09Execute%20aBlock%20after%20the%20receiver%20is%20executed.%22%0D%0D%09%3Cprimitive%3A%20%27primEnsure%27%20module%3A%20%27SKBlockClosure%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.BlockClosure, unescape("argumentCount"), "argumentCount", function BlockClosure__argumentCount(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKBlockClosure.primArgumentsCount(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "evaluating", unescape("argumentCount%0D%09%22%20Return%20the%20number%20of%20arguments%20defined%20by%20the%20receiver.%20%22%0D%0D%09%3Cprimitive%3A%20%27primArgumentsCount%27%20module%3A%20%27SKBlockClosure%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.BlockClosure, unescape("installAs%3A"), "installAs_", function BlockClosure__installAs_(functionName){
const self = this; return ((smalltalk.Smalltalk.global())[functionName]=self);
}
, "installing", unescape("installAs%3A%20functionName%0D%09%22%20Install%20the%20receiver%20as%20a%20function%20in%20global%20scope.%20%22%0D%0D%09%5ESmalltalk%20global%20basicAt%3A%20functionName%20put%3A%20self"));
smalltalk.bind(smalltalk.BlockClosure, unescape("asJSONObject"), "asJSONObject", function BlockClosure__asJSONObject(){
const self = this; return self;
}
, "converting", unescape("asJSONObject%0D%09%22%20Return%20the%20mapping%20of%20the%20receiver%20to%20JSON%20structure.%20%22%0D%0D%09%5Eself"));
smalltalk.bind(smalltalk.BlockClosure, unescape("shallowCopy"), "shallowCopy", function BlockClosure__shallowCopy(){
const self = this; return self;
}
, "copying", unescape("shallowCopy%0D%09%22%20Return%20a%20shallow%20copy%20of%20the%20receiver.%20%22%0D%0D%09%5Eself"));
smalltalk.bind(smalltalk.BlockClosure, unescape("deepCopy"), "deepCopy", function BlockClosure__deepCopy(){
const self = this; return self;
}
, "copying", unescape("deepCopy%0D%09%22%20Return%20a%20deep%20copy%20of%20the%20receiver.%20%22%0D%0D%09%5Eself"));
smalltalk.addClass("Boolean", smalltalk.Object, [], 'Kernel');
smalltalk.Boolean.$classVariableNames=("");
smalltalk.bind(smalltalk.Boolean, unescape("%3D"), "_eq", function Boolean___eq(anObject){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKBoolean.primEquals(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "comparing", unescape("%3D%20anObject%0D%20%20%20%20%22%20Return%20true%20if%20the%20receiver%20is%20equal%20to%20anObject.%20%22%0D%0D%09%3Cprimitive%3A%20%27primEquals%27%20module%3A%20%27SKBoolean%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.Boolean, unescape("yourself"), "yourself", function Boolean__yourself(){
const self = this; return self;
}
, "accessing", unescape("yourself%0D%09%5Eself"));
smalltalk.bind(smalltalk.Boolean, unescape("ifTrue%3A"), "ifTrue_", function Boolean__ifTrue_(aBlock){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKBoolean.primIfTrue(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; if ((aBlock.isBlock()).not()) {return self.error_("Argument must be a Block.")};
return self.primitiveFailed();
}
, "control", unescape("ifTrue%3A%20aBlock%0D%0D%09%3Cprimitive%3A%20%27primIfTrue%27%20module%3A%27SKBoolean%27%3E%0D%09aBlock%20isBlock%0D%09%09ifFalse%3A%5B%5Eself%20error%3A%27Argument%20must%20be%20a%20Block.%27%5D.%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.Boolean, unescape("ifFalse%3A"), "ifFalse_", function Boolean__ifFalse_(aBlock){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKBoolean.primIfFalse(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; if ((aBlock.isBlock()).not()) {return self.error_("Argument must be a Block.")};
return self.primitiveFailed();
}
, "control", unescape("ifFalse%3A%20aBlock%0D%0D%09%3Cprimitive%3A%20%27primIfFalse%27%20module%3A%20%27SKBoolean%27%3E%0D%09aBlock%20isBlock%0D%09%09ifFalse%3A%5B%5Eself%20error%3A%27Argument%20must%20be%20a%20Block.%27%5D.%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.Boolean, unescape("ifTrue%3AifFalse%3A"), "ifTrue_ifFalse_", function Boolean__ifTrue_ifFalse_(aBlock,anotherBlock){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKBoolean.primTrueFalse(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; if ((aBlock.isBlock()).not()) {return self.error_("Argument must be a Block.")};
if ((anotherBlock.isBlock()).not()) {return self.error_("Argument must be a Block.")};
return self.primitiveFailed();
}
, "control", unescape("ifTrue%3A%20aBlock%0DifFalse%3A%20anotherBlock%0D%0D%09%3Cprimitive%3A%27primTrueFalse%27%20module%3A%27SKBoolean%27%3E%0D%09aBlock%20isBlock%0D%09%09ifFalse%3A%5B%5Eself%20error%3A%27Argument%20must%20be%20a%20Block.%27%5D.%0D%09anotherBlock%20isBlock%0D%09%09ifFalse%3A%5B%5Eself%20error%3A%27Argument%20must%20be%20a%20Block.%27%5D.%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.Boolean, unescape("ifFalse%3AifTrue%3A"), "ifFalse_ifTrue_", function Boolean__ifFalse_ifTrue_(anotherBlock,aBlock){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKBoolean.primFalseTrue(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; if ((aBlock.isBlock()).not()) {return self.error_("Argument must be a Block.")};
if ((anotherBlock.isBlock()).not()) {return self.error_("Argument must be a Block.")};
return self.primitiveFailed();
}
, "control", unescape("ifFalse%3A%20anotherBlock%0DifTrue%3A%20aBlock%0D%0D%09%3Cprimitive%3A%27primFalseTrue%27%20module%3A%20%27SKBoolean%27%3E%0D%09aBlock%20isBlock%0D%09%09ifFalse%3A%5B%5Eself%20error%3A%27Argument%20must%20be%20a%20Block.%27%5D.%0D%09anotherBlock%20isBlock%0D%09%09ifFalse%3A%5B%5Eself%20error%3A%27Argument%20must%20be%20a%20Block.%27%5D.%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.Boolean, unescape("and%3A"), "and_", function Boolean__and_(aBlock){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKBoolean.primAnd(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "control", unescape("and%3A%20aBlock%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20true%20and%20the%20result%20of%20evaluating%20aBlock%20is%20also%20true.%20%22%0D%0D%09%3Cprimitive%3A%20%27primAnd%27%20module%3A%20%27SKBoolean%27%3E%0D%09%5Eself%20primitiveFailed%20"));
smalltalk.bind(smalltalk.Boolean, unescape("or%3A"), "or_", function Boolean__or_(aBlock){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKBoolean.primOr(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "control", unescape("or%3A%20aBlock%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20true%20or%20the%20result%20of%20evaluating%20aBlock%20is%20true.%20%22%0D%0D%09%3Cprimitive%3A%20%27primOr%27%20module%3A%20%27SKBoolean%27%3E%0D%09%5Eself%20primitiveFailed%20"));
smalltalk.bind(smalltalk.Boolean, unescape("not"), "not", function Boolean__not(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKBoolean.primNot(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "control", unescape("not%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20false.%20%22%0D%0D%09%3Cprimitive%3A%20%27primNot%27%20module%3A%20%27SKBoolean%27%3E%0D%09%5Eself%20primitiveFailed"));
smalltalk.bind(smalltalk.Boolean, unescape("printString"), "printString", function Boolean__printString(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKBoolean.primPrintString(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "printing", unescape("printString%0D%09%22%20Return%20a%20printable%20representation%20of%20the%20receiver.%20%22%0D%0D%09%3Cprimitive%3A%20%27primPrintString%27%20module%3A%20%27SKBoolean%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.Boolean, unescape("asJSONObject"), "asJSONObject", function Boolean__asJSONObject(){
const self = this; return self.and_((function Boolean__(){
return true;
}
));
}
, "converting", unescape("asJSONObject%0D%09%22%20Return%20the%20mapping%20of%20the%20receiver%20to%20JSON%20structure.%20%22%0D%0D%09%5Eself%20and%3A%20%5B%20true%20%5D"));
smalltalk.bind(smalltalk.Boolean, unescape("shallowCopy"), "shallowCopy", function Boolean__shallowCopy(){
const self = this; return self;
}
, "copying", unescape("shallowCopy%0D%09%22%20Return%20a%20shallow%20copy%20of%20the%20receiver.%20%22%0D%0D%09%5Eself"));
smalltalk.bind(smalltalk.Boolean, unescape("deepCopy"), "deepCopy", function Boolean__deepCopy(){
const self = this; return self;
}
, "copying", unescape("deepCopy%0D%09%22%20Return%20a%20deep%20copy%20of%20the%20receiver.%20%22%0D%0D%09%5Eself"));
smalltalk.bind(smalltalk.Boolean, unescape("%26"), "_amp", function Boolean___amp(aBoolean){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKBoolean.primAmpersand(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "logic", unescape("%26%20aBoolean%0D%09%22%20Return%20true%20if%20both%20the%20receiver%20and%20argument%20are%20true.%20False%20in%20any%20other%20case.%20%22%0D%0D%09%3Cprimitive%3A%20%27primAmpersand%27%20module%3A%20%27SKBoolean%27%3E%0D%09%5Eself%20primitiveFailed%20"));
smalltalk.bind(smalltalk.Boolean, unescape("%7C"), "_bar", function Boolean___bar(aBoolean){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKBoolean.primPipeSymbol(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "logic", unescape("%7C%20aBoolean%0D%09%22%20Return%20true%20if%20both%20the%20receiver%20and%20argument%20are%20true.%20False%20in%20any%20other%20case.%20%22%0D%0D%09%3Cprimitive%3A%20%27primPipeSymbol%27%20module%3A%20%27SKBoolean%27%3E%0D%09%5Eself%20primitiveFailed%20"));
smalltalk.bind(smalltalk.Boolean, unescape("isBoolean"), "isBoolean", function Boolean__isBoolean(){
const self = this; return true;
}
, "testing", unescape("isBoolean%0D%09%22%20Returns%20true%20if%20the%20receiver%20is%20a%20boolean.%20%22%0D%0D%09%5Etrue"));
smalltalk.bind(smalltalk.Object, unescape("isBoolean"), "isBoolean", function Object__isBoolean(){
const self = this; return false;
}
, "testing", unescape("isBoolean%0D%09%22%20Returns%20true%20if%20the%20receiver%20is%20a%20boolean.%20%22%0D%0D%09%5Efalse"));
smalltalk.addClass("DateTime", smalltalk.Object, [], 'Kernel');
smalltalk.DateTime.$classVariableNames=("");
smalltalk.bind(smalltalk.DateTime.$klass, unescape("utcOffsetSeconds"), "utcOffsetSeconds", function DateTime_class__utcOffsetSeconds(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKDateTime.primGetUtcOffsetSeconds(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "accessing", unescape("utcOffsetSeconds%0D%09%22%20Return%20the%20year%20of%20the%20receiver.%20%22%0D%0D%09%3Cprimitive%3A%20%27primGetUtcOffsetSeconds%27%20module%3A%20%27SKDateTime%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.DateTime, unescape("year"), "year", function DateTime__year(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKDateTime.primGetYear(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "accessing", unescape("year%0D%09%22%20Return%20the%20year%20of%20the%20receiver.%20%22%0D%0D%09%3Cprimitive%3A%20%27primGetYear%27%20module%3A%20%27SKDateTime%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.DateTime, unescape("month"), "month", function DateTime__month(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKDateTime.primGetMonth(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "accessing", unescape("month%0D%09%22%20Return%20the%20month%20of%20the%20receiver.%20%22%0D%0D%09%3Cprimitive%3A%20%27primGetMonth%27%20module%3A%20%27SKDateTime%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.DateTime, unescape("month%3A"), "month_", function DateTime__month_(aNumber){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKDateTime.primSetMonth(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "accessing", unescape("month%3A%20aNumber%0D%09%22%20Set%20the%20month%20of%20the%20receiver.%20%22%0D%0D%09%3Cprimitive%3A%20%27primSetMonth%27%20module%3A%20%27SKDateTime%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.DateTime, unescape("day"), "day", function DateTime__day(){
const self = this; return self.dayOfWeek();
}
, "accessing", unescape("day%0D%09%22%20Return%20the%20day%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20dayOfWeek"));
smalltalk.bind(smalltalk.DateTime, unescape("dayOfWeek"), "dayOfWeek", function DateTime__dayOfWeek(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKDateTime.primGetDayOfWeek(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "accessing", unescape("dayOfWeek%0D%09%22%20Return%20the%20day%20of%20week%20of%20the%20receiver.%20%22%0D%0D%09%3Cprimitive%3A%20%27primGetDayOfWeek%27%20module%3A%20%27SKDateTime%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.DateTime, unescape("year%3A"), "year_", function DateTime__year_(aNumber){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKDateTime.primSetYear(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "accessing", unescape("year%3A%20aNumber%0D%09%22%20Set%20the%20year%20of%20the%20receiver.%20%22%0D%0D%09%3Cprimitive%3A%20%27primSetYear%27%20module%3A%20%27SKDateTime%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.DateTime, unescape("dayOfMonth"), "dayOfMonth", function DateTime__dayOfMonth(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKDateTime.primGetDayOfMonth(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "accessing", unescape("dayOfMonth%0D%09%22%20Return%20the%20day%20of%20month%20of%20the%20receiver.%20%22%0D%0D%09%3Cprimitive%3A%20%27primGetDayOfMonth%27%20module%3A%20%27SKDateTime%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.DateTime, unescape("dayOfMonth%3A"), "dayOfMonth_", function DateTime__dayOfMonth_(aNumber){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKDateTime.primSetDayOfMonth(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "accessing", unescape("dayOfMonth%3A%20aNumber%0D%09%22%20Set%20the%20day%20of%20month%20of%20the%20receiver.%20%22%0D%0D%09%3Cprimitive%3A%27primSetDayOfMonth%27%20module%3A%27SKDateTime%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.DateTime, unescape("asString"), "asString", function DateTime__asString(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKDateTime.primAsString(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "converting", unescape("asString%0D%09%22%20Return%20the%20text%20representation%20of%20the%20receiver.%20%22%0D%0D%09%3Cprimitive%3A%20%27primAsString%27%20module%3A%20%27SKDateTime%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.DateTime, unescape("printString"), "printString", function DateTime__printString(){
const self = this; return self.asString();
}
, "printing", unescape("printString%0D%09%22%20Return%20the%20printable%20representation%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20asString"));
smalltalk.bind(smalltalk.DateTime, unescape("asMilliseconds"), "asMilliseconds", function DateTime__asMilliseconds(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKDateTime.primGetTime(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "converting", unescape("asMilliseconds%0D%09%22%20Return%20the%20receiver%20as%20milliseconds.%20%22%0D%0D%09%3Cprimitive%3A%20%27primGetTime%27%20module%3A%20%27SKDateTime%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.DateTime, unescape("asSeconds"), "asSeconds", function DateTime__asSeconds(){
const self = this; return (self.asMilliseconds())._slash((1000));
}
, "converting", unescape("asSeconds%0D%09%22Return%20the%20receiver%20as%20seconds.%22%0D%0D%09%5Eself%20asMilliseconds%20/%201000.%20"));
smalltalk.bind(smalltalk.DateTime, unescape("time"), "time", function DateTime__time(){
const self = this; return self.asMilliseconds();
}
, "accessing", unescape("time%0D%09%22%20Return%20the%20time%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20asMilliseconds.%20"));
smalltalk.bind(smalltalk.DateTime, unescape("time%3A"), "time_", function DateTime__time_(aNumber){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKDateTime.primSetTime(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primFailValue();
}
, "accessing", unescape("time%3A%20aNumber%0D%09%22%20Set%20the%20time%20of%20the%20receiver.%20%22%0D%0D%09%3Cprimitive%3A%27primSetTime%27%20module%3A%27SKDateTime%27%3E%0D%09%5Eself%20primFailValue.%20"));
smalltalk.bind(smalltalk.DateTime, unescape("asDateString"), "asDateString", function DateTime__asDateString(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKDateTime.primAsDateString(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "converting", unescape("asDateString%0D%09%22%20Return%20the%20date%20string%20of%20the%20receiver.%20%22%0D%0D%09%3Cprimitive%3A%20%27primAsDateString%27%20module%3A%20%27SKDateTime%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.DateTime, unescape("asTimeString"), "asTimeString", function DateTime__asTimeString(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKDateTime.primAsTimeString(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "converting", unescape("asTimeString%0D%09%22%20Return%20the%20time%20string%20of%20the%20receiver.%20%22%0D%0D%09%3Cprimitive%3A%20%27primAsTimeString%27%20module%3A%20%27SKDateTime%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.DateTime, unescape("asLocaleString"), "asLocaleString", function DateTime__asLocaleString(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKDateTime.primAsLocaleString(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "converting", unescape("asLocaleString%0D%09%22%20Return%20the%20locale%20string%20of%20the%20receiver.%20%22%0D%0D%09%3Cprimitive%3A%27primAsLocaleString%27%20module%3A%27SKDateTime%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.DateTime, unescape("asNumber"), "asNumber", function DateTime__asNumber(){
const self = this; return self.asMilliseconds();
}
, "converting", unescape("asNumber%0D%09%22%20Return%20the%20receiver%20as%20a%20Number.%20%22%0D%0D%09%5Eself%20asMilliseconds"));
smalltalk.bind(smalltalk.DateTime, unescape("hours%3A"), "hours_", function DateTime__hours_(aNumber){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKDateTime.primSetHours(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; if (((aNumber._gt((23))).or_((aNumber._lt((0))))).valueOf()) {return self.error_(("argument must be an integer between 0 and 23. argument given: "._comma((aNumber.toString()))))};
return self.primitiveFailed();
}
, "accessing", unescape("hours%3A%20aNumber%0D%09%22%20Set%20the%20hours%20of%20the%20receiver.%20%22%0D%0D%09%3Cprimitive%3A%20%27primSetHours%27%20module%3A%20%27SKDateTime%27%3E%0D%09%28aNumber%20%3E%2023%20or%3A%20aNumber%20%3C%200%29%0D%09%09ifTrue%3A%5B%5Eself%20error%3A%27argument%20must%20be%20an%20integer%20between%200%20and%2023.%20argument%20given%3A%20%27%2C%20aNumber%20toString%5D.%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.DateTime, unescape("minutes%3A"), "minutes_", function DateTime__minutes_(aNumber){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKDateTime.primSetMinutes(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; if (((aNumber._gt((59))).or_((aNumber._lt((0))))).valueOf()) {return self.error_(("argument must be an integer between 0 and 59. argument given: "._comma((aNumber.toString()))))};
return self.primitiveFailed();
}
, "accessing", unescape("minutes%3A%20aNumber%0D%09%22%20Set%20the%20minutes%20of%20the%20receiver.%20%22%0D%0D%09%3Cprimitive%3A%20%27primSetMinutes%27%20module%3A%20%27SKDateTime%27%3E%0D%09%28aNumber%20%3E%2059%20or%3A%20aNumber%20%3C%200%29%0D%09%09ifTrue%3A%5B%5Eself%20error%3A%27argument%20must%20be%20an%20integer%20between%200%20and%2059.%20argument%20given%3A%20%27%2C%20aNumber%20toString%5D.%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.DateTime, unescape("seconds%3A"), "seconds_", function DateTime__seconds_(aNumber){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKDateTime.primSetSeconds(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; if (((aNumber._gt((59))).or_((aNumber._lt((0))))).valueOf()) {return self.error_(("argument must be an integer between 0 and 59. argument given: "._comma((aNumber.toString()))))};
return self.primitiveFailed();
}
, "accessing", unescape("seconds%3A%20aNumber%0D%09%22%20Set%20the%20seconds%20of%20the%20receiver.%20%22%0D%0D%09%3Cprimitive%3A%20%27primSetSeconds%27%20module%3A%20%27SKDateTime%27%3E%0D%09%28aNumber%20%3E%2059%20or%3A%20aNumber%20%3C%200%29%0D%09%09ifTrue%3A%5B%5Eself%20error%3A%27argument%20must%20be%20an%20integer%20between%200%20and%2059.%20argument%20given%3A%20%27%2C%20aNumber%20toString%5D.%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.DateTime, unescape("milliseconds%3A"), "milliseconds_", function DateTime__milliseconds_(aNumber){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKDateTime.primSetMilliseconds(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; if (((aNumber._gt((999))).or_((aNumber._lt((0))))).valueOf()) {return self.error_(("argument must be an integer between 0 and 999. argument given: "._comma((aNumber.toString()))))};
return self.primitiveFailed();
}
, "accessing", unescape("milliseconds%3A%20aNumber%0D%09%22%20Set%20the%20milliseconds%20of%20the%20receiver.%20%22%0D%0D%09%3Cprimitive%3A%27primSetMilliseconds%27%20module%3A%27SKDateTime%27%3E%0D%09%28aNumber%20%3E%20999%20or%3A%20aNumber%20%3C%200%29%0D%09%09ifTrue%3A%5B%5Eself%20error%3A%27argument%20must%20be%20an%20integer%20between%200%20and%20999.%20argument%20given%3A%20%27%2C%20aNumber%20toString%5D.%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.DateTime, unescape("hours"), "hours", function DateTime__hours(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKDateTime.primGetHours(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "accessing", unescape("hours%0D%09%22%20Return%20the%20hours%20of%20the%20receiver.%20%22%0D%0D%09%3Cprimitive%3A%27primGetHours%27%20module%3A%27SKDateTime%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.DateTime, unescape("minutes"), "minutes", function DateTime__minutes(){
const self = this; return self.getMinutes();
}
, "accessing", unescape("minutes%0D%09%22%20Return%20the%20minutes%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20getMinutes"));
smalltalk.bind(smalltalk.DateTime, unescape("seconds"), "seconds", function DateTime__seconds(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKDateTime.primGetSeconds(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "accessing", unescape("seconds%0D%09%22%20Return%20the%20seconds%20of%20the%20receiver.%20%22%0D%0D%09%3Cprimitive%3A%20%27primGetSeconds%27%20module%3A%20%27SKDateTime%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.DateTime, unescape("milliseconds"), "milliseconds", function DateTime__milliseconds(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKDateTime.primGetMilliseconds(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "accessing", unescape("milliseconds%0D%09%22%20Return%20the%20milliseconds%20of%20the%20receiver.%20%22%0D%0D%09%3Cprimitive%3A%20%27primGetMilliseconds%27%20module%3A%20%27SKDateTime%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.DateTime, unescape("%3D"), "_eq", function DateTime___eq(aDateTime){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKDateTime.primEquality(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return false;
}
, "comparing", unescape("%3D%20aDateTime%0D%09%22Return%20true%20if%20the%20receiver%20is%20equivalent%20to%20aDateTime%22%0D%0D%09%3Cprimitive%3A%20%27primEquality%27%20module%3A%20%27SKDateTime%27%3E%0D%09%5Efalse"));
smalltalk.bind(smalltalk.DateTime, unescape("%3C"), "_lt", function DateTime___lt(aDateTime){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKDateTime.primLessThan(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "comparing", unescape("%3C%20aDateTime%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20previous%20to%20aDateTime.%20%22%0D%0D%09%3Cprimitive%3A%20%27primLessThan%27%20module%3A%20%27SKDateTime%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.DateTime, unescape("%3E"), "_gt", function DateTime___gt(aDateTime){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKDateTime.primGreaterThan(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "comparing", unescape("%3E%20aDateTime%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20later%20than%20aDateTime.%20%22%0D%0D%09%3Cprimitive%3A%20%27primGreaterThan%27%20module%3A%20%27SKDateTime%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.DateTime, unescape("%3C%3D"), "_lt_eq", function DateTime___lt_eq(aDateTime){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKDateTime.primLessThanEqualTo(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "comparing", unescape("%3C%3D%20aDateTime%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20previous%20or%20equal%20to%20aDateTime.%20%22%0D%0D%09%3Cprimitive%3A%27primLessThanEqualTo%27%20module%3A%27SKDateTime%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.DateTime, unescape("%3E%3D"), "_gt_eq", function DateTime___gt_eq(aDateTime){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKDateTime.primGreaterThanEqualTo(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "comparing", unescape("%3E%3D%20aDateTime%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20later%20or%20equal%20to%20aDateTime.%20%22%0D%0D%09%3Cprimitive%3A%27primGreaterThanEqualTo%27%20module%3A%27SKDateTime%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.DateTime, unescape("-"), "_minus", function DateTime___minus(aDateTime){
const self = this; return (self.asSeconds())._minus((aDateTime.asSeconds()));
}
, "arithmetic", unescape("-%20aDateTime%0D%09%22%20Return%20the%20result%20of%20operation%20with%20receiver%20and%20aDateTime%20in%20seconds.%20%22%0D%0D%09%5Eself%20asSeconds%20-%20aDateTime%20asSeconds.%20"));
smalltalk.bind(smalltalk.DateTime, unescape("+"), "_plus", function DateTime___plus(aDateTime){
const self = this; return (self.asSeconds())._plus((aDateTime.asSeconds()));
}
, "arithmetic", unescape("+%20aDateTime%0D%09%22%20Return%20the%20result%20of%20operation%20with%20receiver%20and%20aDateTime%20in%20seconds.%20%22%0D%0D%09%5Eself%20asSeconds%20+%20aDateTime%20asSeconds.%20"));
smalltalk.bind(smalltalk.DateTime, unescape("isValid"), "isValid", function DateTime__isValid(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKDateTime.primIsValid(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "testing", unescape("isValid%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20a%20valid%20instance.%20%22%0D%0D%09%3Cprimitive%3A%27primIsValid%27%20module%3A%27SKDateTime%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.DateTime, unescape("asJSONObject"), "asJSONObject", function DateTime__asJSONObject(){
const self = this; return self;
}
, "converting", unescape("asJSONObject%0D%09%22%20Return%20the%20mapping%20of%20the%20receiver%20to%20JSON%20structure.%20%22%0D%0D%09%5Eself"));
smalltalk.bind(smalltalk.DateTime, unescape("asDateTime"), "asDateTime", function DateTime__asDateTime(){
const self = this; return self;
}
, "converting", unescape("asDateTime%0D%09%22Return%20a%20DateTime%22%0D%0D%09%5Eself"));
smalltalk.bind(smalltalk.DateTime.$klass, unescape("fromString%3A"), "fromString_", function DateTime_class__fromString_(aString){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKDateTime.primNew(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "instantiation", unescape("fromString%3A%20aString%0D%09%22%20Return%20an%20instance%20of%20the%20receiver.%0D%09DateTime%20fromString%3A%20%271962/12/15%2001%3A40%3A00%27%22%0D%0D%09%3Cprimitive%3A%20%27primNew%27%20module%3A%20%27SKDateTime%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.DateTime.$klass, unescape("fromSeconds%3A"), "fromSeconds_", function DateTime_class__fromSeconds_(aNumber){
const self = this; return self.fromMilliseconds_((aNumber._star((1000))));
}
, "instantiation", unescape("fromSeconds%3A%20aNumber%0D%09%22%20Return%20an%20instance%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20fromMilliseconds%3A%20aNumber%20*%201000"));
smalltalk.bind(smalltalk.DateTime.$klass, unescape("fromMilliseconds%3A"), "fromMilliseconds_", function DateTime_class__fromMilliseconds_(aNumber){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKDateTime.primNew(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "instantiation", unescape("fromMilliseconds%3A%20aNumber%0D%09%22%20Return%20an%20instance%20of%20the%20receiver.%20%22%0D%0D%09%09%3Cprimitive%3A%20%27primNew%27%20module%3A%20%27SKDateTime%27%3E%0D%09%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.DateTime.$klass, unescape("today"), "today", function DateTime_class__today(){
const self = this; return self.$$new();
}
, "instantiation", unescape("today%0D%09%22%20Return%20an%20instance%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20new"));
smalltalk.bind(smalltalk.DateTime.$klass, unescape("now"), "now", function DateTime_class__now(){
const self = this; return self.today();
}
, "instantiation", unescape("now%0D%09%22%20Return%20an%20instance%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20today"));
smalltalk.bind(smalltalk.DateTime.$klass, unescape("millisecondsToRun%3A"), "millisecondsToRun_", function DateTime_class__millisecondsToRun_(aBlock){
var start = nil;
const self = this; start=smalltalk.DateTime.now();
aBlock.value();
return (smalltalk.DateTime.now())._minus(start);
}
, "instantiation", unescape("millisecondsToRun%3A%20aBlock%0D%09%22%20Return%20the%20time%20elapsed%20during%20evaluation%20of%20aBlock.%20%22%0D%0D%09%7C%20start%20%7C%0D%09start%20%3A%3D%20DateTime%20now.%0D%09aBlock%20value.%0D%09%5EDateTime%20now%20-%20start"));
smalltalk.bind(smalltalk.DateTime, unescape("isDateTime"), "isDateTime", function DateTime__isDateTime(){
const self = this; return true;
}
, "testing", unescape("isDateTime%0D%0D%09%5Etrue"));
smalltalk.addClass("UndefinedObject", smalltalk.Object, [], 'Kernel');
smalltalk.UndefinedObject.$classVariableNames=("");
smalltalk.bind(smalltalk.UndefinedObject.$klass, unescape("new"), "$$new", function UndefinedObject_class__$$new(){
const self = this; return self.error_(unescape("UndefinedObject%20can%27t%20be%20instantiated."));
}
, "instantiation", unescape("new%0D%09%22%20Return%20an%20instance%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20error%3A%20%27UndefinedObject%20can%27%27t%20be%20instantiated.%27"));
smalltalk.bind(smalltalk.UndefinedObject, unescape("ifNil%3A"), "ifNil_", function UndefinedObject__ifNil_(aBlock){
const self = this; return aBlock.value();
}
, "testing", unescape("ifNil%3A%20aBlock%0D%09%22%20Return%20the%20receiver%20if%20it%20is%20not%20nil%2C%20or%20the%20result%20of%20evaluating%20aBlock%20%28if%20it%20is%20nil%29.%20%22%0D%0D%09%5EaBlock%20value"));
smalltalk.bind(smalltalk.UndefinedObject, unescape("ifNotNil%3A"), "ifNotNil_", function UndefinedObject__ifNotNil_(aBlock){
const self = this; return self;
}
, "testing", unescape("ifNotNil%3A%20aBlock%0D%09%22%20Return%20the%20receiver%20if%20it%20is%20nil%2C%20or%20the%20result%20of%20evaluating%20aBlock.%20%22%0D%0D%09%5Eself"));
smalltalk.bind(smalltalk.UndefinedObject, unescape("ifNil%3AifNotNil%3A"), "ifNil_ifNotNil_", function UndefinedObject__ifNil_ifNotNil_(aBlock,anotherBlock){
const self = this; return aBlock.value();
}
, "testing", unescape("ifNil%3A%20aBlock%20ifNotNil%3A%20anotherBlock%0D%09%22%20Return%20the%20receiver%20if%20it%20is%20nil%2C%20or%20the%20result%20of%20evaluating%20aBlock.%20%22%0D%0D%09%5EaBlock%20value"));
smalltalk.bind(smalltalk.UndefinedObject, unescape("ifNotNil%3AifNil%3A"), "ifNotNil_ifNil_", function UndefinedObject__ifNotNil_ifNil_(aBlock,anotherBlock){
const self = this; return anotherBlock.value();
}
, "testing", unescape("ifNotNil%3A%20aBlock%20ifNil%3A%20anotherBlock%0D%09%22%20Return%20the%20result%20of%20evaluating%20anotherBlock%20if%20teh%20receiver%20is%20nil%2C%20or%20the%20result%20of%20evaluating%20aBlock.%20%22%0D%0D%09%5EanotherBlock%20value"));
smalltalk.bind(smalltalk.UndefinedObject, unescape("isNil"), "isNil", function UndefinedObject__isNil(){
const self = this; return true;
}
, "testing", unescape("isNil%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20nil.%20%22%0D%0D%09%5Etrue"));
smalltalk.bind(smalltalk.UndefinedObject, unescape("notNil"), "notNil", function UndefinedObject__notNil(){
const self = this; return false;
}
, "testing", unescape("notNil%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20not%20nil.%20%22%0D%0D%09%5Efalse"));
smalltalk.bind(smalltalk.UndefinedObject, unescape("printString"), "printString", function UndefinedObject__printString(){
const self = this; return "nil";
}
, "printing", unescape("printString%0D%09%22%20Return%20the%20text%20representation%20of%20the%20receiver.%20%22%0D%0D%09%5E%23nil"));
smalltalk.bind(smalltalk.UndefinedObject, unescape("printOn%3A"), "printOn_", function UndefinedObject__printOn_(aStream){
const self = this; aStream.nextPutAll_("nil");
return self;
}
, "printing", unescape("printOn%3A%20aStream%0D%09%22Print%20the%20receiver%20onto%20aStream%22%0D%0D%09aStream%20nextPutAll%3A%20%27nil%27"));
smalltalk.bind(smalltalk.UndefinedObject, unescape("subclass%3AinstanceVariableNames%3A"), "subclass_instanceVariableNames_", function UndefinedObject__subclass_instanceVariableNames_(aString,anotherString){
const self = this; return self.subclass_instanceVariableNames_category_(aString,anotherString,nil);
}
, "instantiation", unescape("subclass%3A%20aString%20instanceVariableNames%3A%20anotherString%0D%09%22%20Create%20a%20subclass%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%0D%09%09subclass%3A%20aString%0D%09%09instanceVariableNames%3A%20anotherString%0D%09%09category%3A%20nil"));
smalltalk.bind(smalltalk.UndefinedObject, unescape("subclass%3AinstanceVariableNames%3Acategory%3A"), "subclass_instanceVariableNames_category_", function UndefinedObject__subclass_instanceVariableNames_category_(aString,aString2,aString3){
const self = this; return (smalltalk.ClassBuilder.$$new()).superclass_subclass_instanceVariableNames_category_(self,aString,aString2,aString3);
}
, "instantiation", unescape("subclass%3A%20aString%20instanceVariableNames%3A%20aString2%20category%3A%20aString3%0D%09%22%20Create%20a%20subclass%20of%20the%20receiver.%20%22%0D%0D%09%5EClassBuilder%20new%0D%09%09superclass%3A%20self%0D%09%09subclass%3A%20aString%0D%09%09instanceVariableNames%3A%20aString2%0D%09%09category%3A%20aString3"));
smalltalk.bind(smalltalk.UndefinedObject, unescape("asJSONObject"), "asJSONObject", function UndefinedObject__asJSONObject(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKUndefinedObject.primAsJSONObject(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; self.primitiveFailed();
return self;
}
, "converting", unescape("asJSONObject%0D%09%22%20Return%20the%20mapping%20of%20the%20receiver%20to%20JSON%20structure.%20%22%0D%0D%09%3Cprimitive%3A%20%27primAsJSONObject%27%20module%3A%20%27SKUndefinedObject%27%3E%0D%09self%20primitiveFailed"));
smalltalk.bind(smalltalk.UndefinedObject, unescape("asJavascript"), "asJavascript", function UndefinedObject__asJavascript(){
const self = this; return "nil";
}
, "converting", unescape("asJavascript%0D%09%22Return%20the%20Javascript%20%22%0D%0D%09%5E%27nil%27"));
smalltalk.bind(smalltalk.UndefinedObject, unescape("shallowCopy"), "shallowCopy", function UndefinedObject__shallowCopy(){
const self = this; return self;
}
, "copying", unescape("shallowCopy%0D%09%22%20Return%20a%20shallow%20copy%20of%20the%20receiver.%20%22%0D%0D%09%5Eself"));
smalltalk.bind(smalltalk.UndefinedObject, unescape("deepCopy"), "deepCopy", function UndefinedObject__deepCopy(){
const self = this; return self;
}
, "copying", unescape("deepCopy%0D%09%22%20Return%20a%20deep%20copy%20of%20the%20receiver.%20%22%0D%0D%09%5Eself"));
smalltalk.bind(smalltalk.UndefinedObject, unescape("value"), "value", function UndefinedObject__value(){
const self = this; self;
return self;
}
, "evaluating", unescape("value%0D%09%22%20Return%20the%20result%20of%20evaluating%20the%20receiver.%20%22"));
smalltalk.bind(smalltalk.UndefinedObject, unescape("@"), "_at", function UndefinedObject___at(aNumber){
const self = this; return smalltalk.Point.x_y_((0),aNumber);
}
, "converting", unescape("@%20aNumber%0D%09%22%20Return%20a%20Point%20with%20coordinates%20given%20by%20the%20receiver%20and%20aNumber.%20%22%0D%0D%09%5EPoint%20x%3A%200%20y%3A%20aNumber"));
smalltalk.bind(smalltalk.UndefinedObject, unescape("%3D"), "_eq", function UndefinedObject___eq(anObject){
const self = this; return (nil.isNil_(anObject));
}
, "comparing", unescape("%3D%20anObject%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20equal%20to%20anObject.%20%22%0D%0D%09%5EanObject%20isNil"));
smalltalk.bind(smalltalk.UndefinedObject, unescape("%7E%3D"), "_no_eq", function UndefinedObject___no_eq(anObject){
const self = this; return (nil.isNil_(anObject)===false);
}
, "comparing", unescape("%7E%3D%20anObject%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20not%20equal%20to%20anObject.%20%22%0D%0D%09%5EanObject%20notNil"));
smalltalk.addClass("Collection", smalltalk.Object, [], 'Kernel');
smalltalk.Collection.$classVariableNames=("");
smalltalk.bind(smalltalk.Collection, unescape("size"), "size", function Collection__size(){
const self = this; return self.subclassResponsibility_("size");
}
, "accessing", unescape("size%0D%09%22%20Return%20the%20size%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20subclassResponsibility%3A%20%23size"));
smalltalk.bind(smalltalk.Collection, unescape("readStream"), "readStream", function Collection__readStream(){
const self = this; return self.stream();
}
, "accessing", unescape("readStream%0D%09%22%20Return%20a%20read%20stream%20on%20the%20receiver.%20%22%0D%0D%09%5Eself%20stream"));
smalltalk.bind(smalltalk.Collection, unescape("writeStream"), "writeStream", function Collection__writeStream(){
const self = this; return self.stream();
}
, "accessing", unescape("writeStream%0D%09%22%20Return%20a%20write%20stream%20on%20the%20receiver.%20%22%0D%0D%09%5Eself%20stream"));
smalltalk.bind(smalltalk.Collection, unescape("stream"), "stream", function Collection__stream(){
const self = this; return (self.streamClass()).on_(self);
}
, "accessing", unescape("stream%0D%09%22%20Return%20a%20stream%20on%20the%20receiver.%20%22%0D%0D%09%5Eself%20streamClass%20on%3A%20self"));
smalltalk.bind(smalltalk.Collection, unescape("streamClass"), "streamClass", function Collection__streamClass(){
const self = this; return (self.$klass).streamClass();
}
, "accessing", unescape("streamClass%0D%09%22%20Private%20-%20Return%20the%20support%20for%20streamming%20on%20the%20receiver.%20%22%0D%0D%09%5Eself%20class%20streamClass"));
smalltalk.bind(smalltalk.Collection, unescape("intersection%3A"), "intersection_", function Collection__intersection_(aCollection){
const self = this; return self.select_((function Collection__(each){
return aCollection.includes_(each);
}
));
}
, "accessing", unescape("intersection%3A%20aCollection%0D%0D%09%5Eself%20select%3A%20%5B%3Aeach%20%7C%20aCollection%20includes%3A%20each%5D"));
smalltalk.bind(smalltalk.Collection, unescape("errorNotFound"), "errorNotFound", function Collection__errorNotFound(){
const self = this; return self.objectNotFound();
}
, "error", unescape("errorNotFound%0D%09%22%20DEPRECATED%20-%20Generates%20an%20error.%0D%09An%20object%20was%20not%20found%20in%20the%20receiver%27s%20contents.%0D%09%22%0D%0D%09%5Eself%20objectNotFound"));
smalltalk.bind(smalltalk.Collection, unescape("objectNotFound"), "objectNotFound", function Collection__objectNotFound(){
const self = this; return self.error_("Object is not in the collection");
}
, "error", unescape("objectNotFound%0D%09%22%20Private%20-%20Generates%20an%20error.%0D%09An%20object%20was%20not%20found%20in%20the%20receiver%27s%20contents.%0D%09%22%0D%0D%09%5Eself%20error%3A%20%27Object%20is%20not%20in%20the%20collection%27"));
smalltalk.bind(smalltalk.Collection, unescape("objectNotFound%3A"), "objectNotFound_", function Collection__objectNotFound_(anObject){
const self = this; return self.error_(("Object not found: "._comma((anObject.toString()))));
}
, "error", unescape("objectNotFound%3A%20anObject%0D%09%22%20Private%20-%20Generates%20an%20error.%0D%09anObject%20was%20not%20found%20in%20the%20receiver%27s%20contents.%0D%09%22%0D%0D%09%5Eself%20error%3A%20%27Object%20not%20found%3A%20%27%2CanObject%20toString"));
smalltalk.bind(smalltalk.Collection, unescape("objectNotFoundAt%3A"), "objectNotFoundAt_", function Collection__objectNotFoundAt_(indexOrKey){
const self = this; return self.error_(("Object not found at "._comma((indexOrKey.toString()))));
}
, "error", unescape("objectNotFoundAt%3A%20indexOrKey%0D%09%22%20Private%20-%20Generates%20an%20error.%0D%09The%20object%20at%20key/index%20was%20not%20found%20in%20the%20receiver%27s%20contents.%0D%09%22%0D%0D%09%5Eself%20error%3A%20%27Object%20not%20found%20at%20%27%2CindexOrKey%20toString"));
smalltalk.bind(smalltalk.Collection, unescape("add%3A"), "add_", function Collection__add_(anObject){
const self = this; return self.subclassResponsibility_("add:");
}
, "adding", unescape("add%3A%20anObject%0D%09%22%20Add%20anObject%20to%20the%20receiver.%20%22%0D%0D%09%5Eself%20subclassResponsibility%3A%20%23add%3A"));
smalltalk.bind(smalltalk.Collection, unescape("addAll%3A"), "addAll_", function Collection__addAll_(aCollection){
const self = this; aCollection.do_((function Collection__(each){
return self.add_(each);
}
));
return aCollection;
}
, "adding", unescape("addAll%3A%20aCollection%0D%09%22%20Add%20objects%20in%20aCollection%20to%20the%20receiver.%20%22%0D%0D%09aCollection%20do%3A%20%5B%3Aeach%20%7C%20self%20add%3A%20each%20%5D.%0D%09%5EaCollection"));
smalltalk.bind(smalltalk.Collection, unescape("%2C"), "_comma", function Collection___comma(aCollection){
const self = this; return (function Collection__($1$){
$1$.addAll_(aCollection);
return $1$.yourself()}
)(self.copy());
}
, "copying", unescape("%2C%20aCollection%0D%09%22%20Return%20a%20copy%20of%20the%20receiver%20with%20all%20contents%20of%20aCollection.%20%22%0D%0D%09%5Eself%20copy%0D%09%09addAll%3A%20aCollection%3B%0D%09%09yourself"));
smalltalk.bind(smalltalk.Collection, unescape("copyWith%3A"), "copyWith_", function Collection__copyWith_(anObject){
const self = this; return (function Collection__($1$){
$1$.add_(anObject);
return $1$.yourself()}
)(self.copy());
}
, "copying", unescape("copyWith%3A%20anObject%0D%09%22%20Return%20a%20copy%20of%20the%20receiver%20with%20anObject.%20%22%0D%0D%09%5Eself%20copy%20add%3A%20anObject%3B%20yourself"));
smalltalk.bind(smalltalk.Collection, unescape("copyWithAll%3A"), "copyWithAll_", function Collection__copyWithAll_(aCollection){
const self = this; return (function Collection__($1$){
$1$.addAll_(aCollection);
return $1$.yourself()}
)(self.copy());
}
, "copying", unescape("copyWithAll%3A%20aCollection%0D%09%22%20Return%20a%20copy%20of%20the%20receiver%20with%20all%20contents%20of%20aCollection.%20%22%0D%0D%09%5Eself%20copy%0D%09%09addAll%3A%20aCollection%3B%0D%09%09yourself"));
smalltalk.bind(smalltalk.Collection, unescape("asArray"), "asArray", function Collection__asArray(){
var result = nil;
var index = nil;
const self = this; result=smalltalk.Array.$$new();
index=(0);
self.do_((function Collection__(each){
index=index._plus((1));
return result.at_put_(index,each);
}
));
return result;
}
, "converting", unescape("asArray%0D%09%22%20Return%20an%20array%20with%20the%20contents%20of%20the%20receiver.%20%22%0D%0D%09%7C%20result%20index%20%7C%0D%09result%20%3A%3D%20Array%20new.%0D%09index%20%3A%3D%200.%0D%09self%20do%3A%20%5B%3Aeach%20%7C%0D%09%20%20%20%20index%20%3A%3D%20index%20+%201.%0D%09%20%20%20%20result%20at%3A%20index%20put%3A%20each%0D%09%5D.%0D%09%5Eresult"));
smalltalk.bind(smalltalk.Collection, unescape("asSortedCollection"), "asSortedCollection", function Collection__asSortedCollection(){
const self = this; return (function Collection__($1$){
$1$.addAll_(self);
return $1$.yourself()}
)(smalltalk.SortedCollection.$$new());
}
, "converting", unescape("asSortedCollection%0D%09%22Answer%20a%20SortedCollection%20containing%0D%09the%20elements%20of%20the%20receiver%20sorted%0D%09in%20ascending%20order.%22%0D%0D%09%5E%28SortedCollection%20new%29%0D%09%09addAll%3A%20self%3B%0D%09%09yourself"));
smalltalk.bind(smalltalk.Collection, unescape("asOrderedCollection"), "asOrderedCollection", function Collection__asOrderedCollection(){
const self = this; return smalltalk.OrderedCollection.withAll_(self);
}
, "converting", unescape("asOrderedCollection%0D%09%22Return%20an%20OrderedCollection%20containing%20the%20same%20contents%20as%20self.%22%0D%0D%09%5EOrderedCollection%20withAll%3A%20self"));
smalltalk.bind(smalltalk.Collection, unescape("do%3A"), "do_", function Collection__do_(aBlock){
const self = this; return self.subclassResponsibility_("do:");
}
, "enumerating", unescape("do%3A%20aBlock%0D%09%22%20Evaluate%20aBlock%20with%20the%20contents%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20subclassResponsibility%3A%20%23do%3A"));
smalltalk.bind(smalltalk.Collection, unescape("detect%3AifNone%3A"), "detect_ifNone_", function Collection__detect_ifNone_(aBlock,anotherBlock){
const self = this; return self.subclassResponsibility_("detect:ifNone:");
}
, "enumerating", unescape("detect%3A%20aBlock%20ifNone%3A%20anotherBlock%0D%09%22%20Return%20the%20object%20in%20the%20receiver%20that%20return%20true%20when%20evaluated%20with%20aBlock%20or%20the%20result%20of%20evaluating%20anotherBlock.%20%22%0D%0D%09%5Eself%20subclassResponsibility%3A%20%23detect%3AifNone%3A"));
smalltalk.bind(smalltalk.Collection, unescape("reverseDo%3A"), "reverseDo_", function Collection__reverseDo_(aBlock){
const self = this; return self.subclassResponsibility_("reverseDo:");
}
, "enumerating", unescape("reverseDo%3A%20aBlock%0D%09%22%20Evaluate%20aBlock%20with%20the%20contents%20of%20the%20receiver%20in%20reverse%20order%20of%20iteration.%20%22%0D%0D%09%5Eself%20subclassResponsibility%3A%20%23reverseDo%3A"));
smalltalk.bind(smalltalk.Collection, unescape("collect%3A"), "collect_", function Collection__collect_(aBlock){
var result = nil;
const self = this; result=(self.$klass).$$new();
self.do_((function Collection__(each){
return result.add_((aBlock.value_(each)));
}
));
return result;
}
, "enumerating", unescape("collect%3A%20aBlock%0D%09%22%20Return%20a%20collection%20with%20the%20result%20of%20evaluating%20aBlock%20with%20the%20contents%20of%20the%20receiver.%20%22%0D%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%20self%20class%20new.%0D%09self%20do%3A%20%5B%3Aeach%20%7C%20result%20add%3A%20%28aBlock%20value%3A%20each%29%20%5D.%0D%09%5Eresult"));
smalltalk.bind(smalltalk.Collection, unescape("select%3A"), "select_", function Collection__select_(aBlock){
var stream = nil;
const self = this; stream=((self.$klass).$$new()).writeStream();
self.do_((function Collection__(each){
if ((aBlock.value_(each)).valueOf()) {return stream.nextPut_(each)} else {return nil};
}
));
return stream.contents();
}
, "enumerating", unescape("select%3A%20aBlock%0D%09%22%20Return%20the%20contents%20of%20the%20receiver%20wich%20evaluates%20aBlock%20to%20true.%20%22%0D%0D%09%7C%20stream%20%7C%0D%09stream%20%3A%3D%20self%20class%20new%20writeStream.%0D%09self%20do%3A%20%5B%3Aeach%20%7C%0D%09%20%20%20%20%28aBlock%20value%3A%20each%29%20ifTrue%3A%20%5B%20stream%20nextPut%3A%20each%20%5D%0D%09%5D.%0D%09%5Estream%20contents"));
smalltalk.bind(smalltalk.Collection, unescape("detect%3A"), "detect_", function Collection__detect_(aBlock){
const self = this; return self.detect_ifNone_(aBlock,(function Collection__(){
return self.objectNotFound();
}
));
}
, "enumerating", unescape("detect%3A%20aBlock%0D%09%22%20Return%20the%20object%20in%20the%20receiver%20that%20return%20true%20when%20evaluated%20with%20aBlock.%0D%09Generates%20an%20error%20if%20there%20is%20no%20object%20that%20evaluates%20aBlock%20to%20true.%0D%09%22%0D%0D%09%5Eself%20detect%3A%20aBlock%20ifNone%3A%20%5B%20self%20objectNotFound%20%5D"));
smalltalk.bind(smalltalk.Collection, unescape("do%3AseparatedBy%3A"), "do_separatedBy_", function Collection__do_separatedBy_(aBlock,anotherBlock){
var first = nil;
const self = this; first=true;
self.do_((function Collection__(each){
if ((first).valueOf()) {first=false} else {anotherBlock.value()};
return aBlock.value_(each);
}
));
return self;
}
, "enumerating", unescape("do%3A%20aBlock%20separatedBy%3A%20anotherBlock%0D%09%22%20Evaluate%20aBlock%20for%20contents%20of%20the%20receiver%20evaluating%20anotherBlock%20inbetween%20aBlock%20evaluations.%20%22%0D%0D%09%7C%20first%20%7C%0D%09first%20%3A%3D%20true.%0D%09self%20do%3A%20%5B%3Aeach%20%7C%0D%09%20%20%20%20first%0D%09%09ifTrue%3A%20%5B%20first%20%3A%3D%20false%20%5D%0D%09%09ifFalse%3A%20%5B%20anotherBlock%20value%20%5D.%0D%09%20%20%20%20aBlock%20value%3A%20each%0D%09%5D"));
smalltalk.bind(smalltalk.Collection, unescape("do%3AandBetweenDo%3A"), "do_andBetweenDo_", function Collection__do_andBetweenDo_(aDoBlock,aBetweenBlock){
const self = this; return self.do_separatedBy_(aDoBlock,aBetweenBlock);
}
, "enumerating", unescape("do%3A%20aDoBlock%0DandBetweenDo%3A%20aBetweenBlock%0D%09%22Evaluate%20aBlock%20for%20the%20contents.%20Between%20evaluations%20of%20aBlock%2C%20evaluate%20aBetweenBlock.%22%0D%0D%09%5Eself%0D%09%09do%3A%20aDoBlock%0D%09%09separatedBy%3A%20aBetweenBlock"));
smalltalk.bind(smalltalk.Collection, unescape("inject%3Ainto%3A"), "inject_into_", function Collection__inject_into_(anObject,aBlock){
var result = nil;
const self = this; result=anObject;
self.do_((function Collection__(each){
return result=aBlock.value_value_(result,each);
}
));
return result;
}
, "enumerating", unescape("inject%3A%20anObject%20into%3A%20aBlock%0D%09%22%20Evaluate%20aBlock%20for%20result%20of%20previous%20evaluation%20and%20contents%20of%20the%20receiver.%0D%09On%20first%20evaluation%20anObject%20is%20used%20as%20first%20argument%20to%20evaluate%20aBlock.%0D%09%22%0D%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%20anObject.%0D%09self%20do%3A%20%5B%3Aeach%20%7C%20result%20%3A%3D%20aBlock%20value%3A%20result%20value%3A%20each%20%5D.%0D%09%5Eresult"));
smalltalk.bind(smalltalk.Collection, unescape("reject%3A"), "reject_", function Collection__reject_(aBlock){
const self = this; return self.select_((function Collection__(each){
return (aBlock.value_(each))._eq(false);
}
));
}
, "enumerating", unescape("reject%3A%20aBlock%0D%09%22%20Return%20the%20contents%20of%20the%20receiver%20wich%20evaluates%20aBlock%20to%20false.%20%22%0D%0D%09%5Eself%20select%3A%20%5B%3Aeach%20%7C%20%28aBlock%20value%3A%20each%29%20%3D%20false%5D"));
smalltalk.bind(smalltalk.Collection, unescape("select%3AthenCollect%3A"), "select_thenCollect_", function Collection__select_thenCollect_(selectBlock,collectBlock){
const self = this; return (self.select_(selectBlock)).collect_(collectBlock);
}
, "enumerating", unescape("select%3A%20selectBlock%20thenCollect%3A%20collectBlock%0D%09%22%20Return%20a%20new%20collection%20with%20the%20result%20of%20evaluating%20collectBlock%20on%20the%20contents%20of%20the%20receiver%20wich%20evaluates%20selectBlock%20to%20true.%20%22%0D%0D%09%5E%28self%20select%3A%20selectBlock%29%20collect%3A%20collectBlock"));
smalltalk.bind(smalltalk.Collection, unescape("collect%3AthenSelect%3A"), "collect_thenSelect_", function Collection__collect_thenSelect_(collectBlock,selectBlock){
const self = this; return (self.collect_(collectBlock)).select_(selectBlock);
}
, "enumerating", unescape("collect%3A%20collectBlock%20thenSelect%3A%20selectBlock%0D%09%22%20Return%20a%20new%20collection%20with%20the%20result%20of%20evaluating%20collectBlock%20on%20the%20contents%20of%20the%20receiver%20wich%20evaluates%20selectBlock%20to%20true.%20%22%0D%0D%09%5E%28self%20collect%3A%20collectBlock%29%20select%3A%20selectBlock"));
smalltalk.bind(smalltalk.Collection, unescape("reversed"), "reversed", function Collection__reversed(){
const self = this; return self.subclassResponsibility_("reversed");
}
, "copying", unescape("reversed%0D%09%22%20Return%20an%20array%20with%20the%20contents%20of%20the%20receiver%20in%20reverse%20order.%20%22%0D%0D%09%5Eself%20subclassResponsibility%3A%20%23reversed"));
smalltalk.bind(smalltalk.Collection, unescape("includes%3A"), "includes_", function Collection__includes_(anObject){
const self = this; return self.subclassResponsibility_("includes:");
}
, "testing", unescape("includes%3A%20anObject%0D%09%22%20Return%20true%20if%20anObject%20is%20in%20the%20receiver.%20%22%0D%0D%09%5Eself%20subclassResponsibility%3A%20%23includes%3A"));
smalltalk.bind(smalltalk.Collection, unescape("includesAll%3A"), "includesAll_", function Collection__includesAll_(aCollection){
const self = this; var $early={name:"stReturn"};
try {
aCollection.do_((function Collection__(each){
var isPresent = nil;
isPresent=self.includes_(each);
if ((isPresent).not()) {$early.result=false; throw ($early)} else {return nil};
}
));
return true;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "testing", unescape("includesAll%3A%20aCollection%0D%09%22Return%20whether%20the%20receiver%20contains%20all%20of%20the%20elements%20from%20aCollection.%22%0D%0D%09aCollection%0D%09%09do%3A%0D%09%09%09%5B%3Aeach%20%7C%20%7C%20isPresent%20%7C%0D%09%09%09isPresent%20%3A%3D%20self%20includes%3A%20each.%0D%09%09%09isPresent%20ifFalse%3A%20%5B%5Efalse%5D%5D.%0D%09%5Etrue"));
smalltalk.bind(smalltalk.Collection, unescape("isCollection"), "isCollection", function Collection__isCollection(){
const self = this; return true;
}
, "testing", unescape("isCollection%0D%09%22Return%20whether%20the%20receiver%20is%20a%20Collection.%22%0D%0D%09%5Etrue"));
smalltalk.bind(smalltalk.Collection, unescape("notEmpty"), "notEmpty", function Collection__notEmpty(){
const self = this; return (self.isEmpty()).not();
}
, "testing", unescape("notEmpty%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20not%20empty.%20%22%0D%0D%09%5Eself%20isEmpty%20not"));
smalltalk.bind(smalltalk.Collection, unescape("isEmpty"), "isEmpty", function Collection__isEmpty(){
const self = this; return (nil.is_eqeq_(self.size(),(0)));
}
, "testing", unescape("isEmpty%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20empty.%20%22%0D%0D%09%5Eself%20size%20%3D%3D%200"));
smalltalk.bind(smalltalk.Collection, unescape("remove%3A"), "remove_", function Collection__remove_(anObject){
const self = this; return self.remove_ifAbsent_(anObject,(function Collection__(){
return self.objectNotFound_(anObject);
}
));
}
, "removing", unescape("remove%3A%20anObject%0D%09%22%20Remove%20anObject%20from%20receiver%2C%20return%20the%20removed%20object.%20%22%0D%0D%09%5Eself%20remove%3A%20anObject%20ifAbsent%3A%20%5B%20self%20objectNotFound%3A%20anObject%20%5D"));
smalltalk.bind(smalltalk.Collection, unescape("remove%3AifAbsent%3A"), "remove_ifAbsent_", function Collection__remove_ifAbsent_(anObject,aBlock){
const self = this; return self.subclassResponsibility_("remove:ifAbsent:");
}
, "removing", unescape("remove%3A%20anObject%20ifAbsent%3A%20aBlock%0D%09%22%20Remove%20anObject%20from%20receiver.%0D%09Return%20the%20removed%20object%20or%20the%20result%20of%20evaluating%20aBlock%20%28if%20the%20object%20is%20not%20found%29.%0D%09%22%0D%0D%09%5Eself%20subclassResponsibility%3A%20%23remove%3AifAbsent%3A"));
smalltalk.bind(smalltalk.Collection, unescape("removeAll%3A"), "removeAll_", function Collection__removeAll_(aCollection){
const self = this; aCollection.do_((function Collection__(each){
return self.remove_(each);
}
));
return aCollection;
}
, "removing", unescape("removeAll%3A%20aCollection%0D%09%22%20Remove%20aCollection%20from%20receiver.%20%22%0D%0D%09aCollection%20do%3A%20%5B%3Aeach%7C%20self%20remove%3A%20each%20%5D.%0D%09%5EaCollection"));
smalltalk.bind(smalltalk.Collection, unescape("removeAll"), "removeAll", function Collection__removeAll(){
const self = this; self.removeAll_((self.shallowCopy()));
return self;
}
, "removing", unescape("removeAll%0D%09%22%20Remove%20all%20elements%20in%20the%20receiver.%20%22%0D%0D%09self%20removeAll%3A%20self%20shallowCopy"));
smalltalk.bind(smalltalk.Collection, unescape("occurrencesOf%3A"), "occurrencesOf_", function Collection__occurrencesOf_(anObject){
const self = this; return self.inject_into_((0),(function Collection__(total,each){
if ((each._eq(anObject)).valueOf()) {return total._plus((1))} else {return total};
}
));
}
, "counting", unescape("occurrencesOf%3A%20anObject%0D%09%22%20Return%20the%20occurrences%20of%20anObject%20in%20the%20receiver.%20%22%0D%0D%09%5Eself%20inject%3A%200%20into%3A%20%5B%3Atotal%20%3Aeach%7C%0D%09%09each%20%3D%20anObject%20ifTrue%3A%20%5B%20total%20+%201%20%5D%20ifFalse%3A%20%5Btotal%5D%0D%09%5D"));
smalltalk.bind(smalltalk.Collection, unescape("shallowCopy"), "shallowCopy", function Collection__shallowCopy(){
const self = this; return self.collect_((function Collection__(each){
return each;
}
));
}
, "copying", unescape("shallowCopy%0D%09%22%20Return%20a%20shallow%20copy%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20collect%3A%20%5B%3Aeach%7C%20each%20%5D"));
smalltalk.bind(smalltalk.Collection, unescape("deepCopy"), "deepCopy", function Collection__deepCopy(){
const self = this; return self.collect_((function Collection__(each){
return each.deepCopy();
}
));
}
, "copying", unescape("deepCopy%0D%09%22%20Return%20a%20deep%20copy%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20collect%3A%20%5B%3Aeach%7C%20each%20deepCopy%20%5D"));
smalltalk.bind(smalltalk.Collection.$klass, unescape("streamClass"), "streamClass", function Collection_class__streamClass(){
const self = this; return smalltalk.Stream;
}
, "accessing", unescape("streamClass%0D%09%22%20Private%20-%20Return%20the%20support%20for%20streamming%20on%20the%20receiver%27s%20instances.%20%22%0D%0D%09%5EStream"));
smalltalk.bind(smalltalk.Collection.$klass, unescape("with%3A"), "with_", function Collection_class__with_(anObject){
const self = this; return (function Collection_class__($1$){
$1$.add_(anObject);
return $1$.yourself()}
)(self.$$new());
}
, "instantiation", unescape("with%3A%20anObject%0D%09%22%20Return%20an%20instance%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20new%0D%09%09add%3A%20anObject%3B%0D%09%09yourself"));
smalltalk.bind(smalltalk.Collection.$klass, unescape("with%3Awith%3A"), "with_with_", function Collection_class__with_with_(anObject,anotherObject){
const self = this; return (function Collection_class__($1$){
$1$.add_(anObject);
$1$.add_(anotherObject);
return $1$.yourself()}
)(self.$$new());
}
, "instantiation", unescape("with%3A%20anObject%20with%3A%20anotherObject%0D%09%22%20Return%20an%20instance%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20new%0D%09%09add%3A%20anObject%3B%0D%09%09add%3A%20anotherObject%3B%0D%09%09yourself"));
smalltalk.bind(smalltalk.Collection.$klass, unescape("with%3Awith%3Awith%3A"), "with_with_with_", function Collection_class__with_with_with_(firstObject,secondObject,thirdObject){
const self = this; return (function Collection_class__($1$){
$1$.add_(firstObject);
$1$.add_(secondObject);
$1$.add_(thirdObject);
return $1$.yourself()}
)(self.$$new());
}
, "instantiation", unescape("with%3A%20firstObject%20with%3A%20secondObject%20with%3A%20thirdObject%0D%09%22%20Return%20an%20instance%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20new%0D%09%09add%3A%20firstObject%3B%0D%09%09add%3A%20secondObject%3B%0D%09%09add%3A%20thirdObject%3B%0D%09%09yourself"));
smalltalk.bind(smalltalk.Collection.$klass, unescape("with%3Awith%3Awith%3Awith%3A"), "with_with_with_with_", function Collection_class__with_with_with_with_(firstObject,secondObject,thirdObject,fourthObject){
const self = this; return (function Collection_class__($1$){
$1$.add_(firstObject);
$1$.add_(secondObject);
$1$.add_(thirdObject);
$1$.add_(fourthObject);
return $1$.yourself()}
)(self.$$new());
}
, "instantiation", unescape("with%3A%20firstObject%20with%3A%20secondObject%20with%3A%20thirdObject%20with%3A%20fourthObject%0D%09%22%20Return%20an%20instance%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20new%0D%09%09add%3A%20firstObject%3B%0D%09%09add%3A%20secondObject%3B%0D%09%09add%3A%20thirdObject%3B%0D%09%09add%3A%20fourthObject%3B%0D%09%09yourself"));
smalltalk.bind(smalltalk.Collection.$klass, unescape("withAll%3A"), "withAll_", function Collection_class__withAll_(aCollection){
const self = this; return (function Collection_class__($1$){
$1$.addAll_(aCollection);
return $1$.yourself()}
)(self.$$new());
}
, "instantiation", unescape("withAll%3A%20aCollection%0D%09%22%20Return%20an%20instance%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20new%0D%09%09addAll%3A%20aCollection%3B%0D%09%09yourself"));
smalltalk.bind(smalltalk.Collection.$klass, unescape("basicNew%3A"), "basicNew_", function Collection_class__basicNew_(size){
const self = this; return self.subclassResponsibility_("basicNew:");
}
, "instantiation", unescape("basicNew%3A%20size%0D%09%22%20Return%20an%20instance%20of%20the%20receiver%20of%20specified%20size.%20%22%0D%0D%09%5Eself%20subclassResponsibility%3A%20%23basicNew%3A"));
smalltalk.addClass("Set", smalltalk.Collection, ['contents'], 'Kernel');
smalltalk.Set.$classVariableNames=("");
smalltalk.bind(smalltalk.Collection, unescape("asSet"), "asSet", function Collection__asSet(){
const self = this; return smalltalk.Set.withAll_(self);
}
, "converting", unescape("asSet%0D%09%22%20Return%20the%20receiver%20contents%20in%20a%20Set.%20%22%0D%0D%09%5ESet%20withAll%3A%20self"));
smalltalk.bind(smalltalk.Set.$klass, unescape("newContents%3A"), "newContents_", function Set_class__newContents_(contents){
const self = this; return (self.basicNew()).initialize_(contents);
}
, "private", unescape("newContents%3A%20contents%0D%09%22%20Return%20an%20instance%20of%20the%20receiver%20initialized%20from%20given%20contents.%20%22%0D%0D%09%5Eself%20basicNew%20initialize%3A%20contents"));
smalltalk.bind(smalltalk.Set.$klass, unescape("basicNew%3A"), "basicNew_", function Set_class__basicNew_(size){
const self = this; return self.$$new();
}
, "instantiation", unescape("basicNew%3A%20size%0D%09%22%20Return%20an%20instance%20of%20the%20receiver%20of%20specified%20size.%20%22%0D%0D%09%5Eself%20new"));
smalltalk.bind(smalltalk.Set, unescape("initialize"), "initialize", function Set__initialize(){
const self = this; smalltalk.superImplementor(smalltalk.Set,'initialize').apply(self, []);
self['@contents']=[];
return self;
}
, "initialize", unescape("initialize%0D%09%22%20Private%20-%20Initialize%20the%20receiver.%20%22%0D%0D%09super%20initialize.%0D%09contents%20%3A%3D%20%23%28%29."));
smalltalk.bind(smalltalk.Set, unescape("initialize%3A"), "initialize_", function Set__initialize_(initializer){
const self = this; self['@contents']=initializer;
return self;
}
, "initialize", unescape("initialize%3A%20initializer%0D%09%22%20Private%20-%20Initialize%20the%20receiver.%20%22%0D%0D%09contents%20%3A%3D%20initializer."));
smalltalk.bind(smalltalk.Set, unescape("isSet"), "isSet", function Set__isSet(){
const self = this; return true;
}
, "accessing", unescape("isSet%0D%0D%09%5Etrue%20"));
smalltalk.bind(smalltalk.Set, unescape("size"), "size", function Set__size(){
const self = this; return self['@contents'].size();
}
, "accessing", unescape("size%0D%09%22%20Return%20the%20size%20of%20the%20receiver.%20%22%0D%0D%09%5Econtents%20size"));
smalltalk.bind(smalltalk.Set, unescape("contents"), "contents", function Set__contents(){
const self = this; return self['@contents'];
}
, "accessing", unescape("contents%0D%0D%09%5Econtents"));
smalltalk.bind(smalltalk.Set, unescape("basicAdd%3A"), "basicAdd_", function Set__basicAdd_(anObject){
const self = this; self['@contents'].add_(anObject);
return anObject;
}
, "private", unescape("basicAdd%3A%20anObject%0D%09%22%20Private%20-%20Add%20anObject%20to%20the%20receiver%27s%20contents.%20%22%0D%0D%09contents%20add%3A%20anObject.%0D%09%5EanObject"));
smalltalk.bind(smalltalk.Set, unescape("includes%3A"), "includes_", function Set__includes_(anObject){
const self = this; return self['@contents'].includes_(anObject);
}
, "testing", unescape("includes%3A%20anObject%0D%09%22%20Return%20true%20if%20anObject%20is%20in%20receiver%27s%20contents.%20%22%0D%0D%09%5Econtents%20includes%3A%20anObject"));
smalltalk.bind(smalltalk.Set, unescape("add%3A"), "add_", function Set__add_(anObject){
const self = this; if ((self.includes_(anObject)).valueOf()) {return anObject};
return self.basicAdd_(anObject);
}
, "adding", unescape("add%3A%20anObject%0D%09%22%20Add%20anObject%20to%20the%20receiver.%20%22%0D%0D%09%28self%20includes%3A%20anObject%29%20ifTrue%3A%20%5B%20%5EanObject%20%5D.%0D%09%5Eself%20basicAdd%3A%20anObject"));
smalltalk.bind(smalltalk.Set, unescape("remove%3AifAbsent%3A"), "remove_ifAbsent_", function Set__remove_ifAbsent_(anObject,aBlock){
const self = this; return self['@contents'].remove_ifAbsent_(anObject,aBlock);
}
, "removing", unescape("remove%3A%20anObject%20ifAbsent%3A%20aBlock%0D%09%22%20Remove%20anObject%20from%20the%20receiver.%0D%09Return%20the%20result%20of%20evaluating%20aBlock%20if%20anObject%20is%20not%20in%20the%20receiver.%0D%09%22%0D%0D%09%5Econtents%20remove%3A%20anObject%20ifAbsent%3A%20aBlock"));
smalltalk.bind(smalltalk.Set, unescape("copyFrom%3Ato%3A"), "copyFrom_to_", function Set__copyFrom_to_(anIndex,anotherIndex){
const self = this; return self.shouldNotImplement_("copyFrom:to:");
}
, "copying", unescape("copyFrom%3A%20anIndex%20to%3A%20anotherIndex%0D%09%22%20Return%20a%20copy%20of%20the%20receiver%20from%20anIndex%20to%20anotherIndex.%20%22%0D%0D%09%5Eself%20shouldNotImplement%3A%20%23copyFrom%3Ato%3A"));
smalltalk.bind(smalltalk.Set, unescape("asJavascript"), "asJavascript", function Set__asJavascript(){
const self = this; return ((("smalltalk."._comma(((self.$klass).name())))._comma(unescape(".newContents_%28")))._comma((self['@contents'].asJavascript())))._comma(unescape("%29"));
}
, "converting", unescape("asJavascript%0D%09%22%20Return%20the%20javascript%20representation%20of%20the%20receiver.%20%22%0D%0D%09%5E%27smalltalk.%27%2Cself%20class%20name%0D%09%09%2C%27.newContents_%28%27%2C%20contents%20asJavascript%20%2C%27%29%27"));
smalltalk.bind(smalltalk.Set, unescape("%3D"), "_eq", function Set___eq(aSet){
const self = this; var $early={name:"stReturn"};
try {
if (((self.$klass)._eq((aSet.$klass))).not()) {return false};
if (((self.size())._eq((aSet.size()))).not()) {return false};
self.do_((function Set__(each){
if ((aSet.includes_(each)).not()) {$early.result=false; throw ($early)} else {return nil};
}
));
return true;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "comparing", unescape("%3D%20aSet%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20equal%20to%20aSet.%20%22%0D%0D%09self%20class%20%3D%20aSet%20class%20ifFalse%3A%20%5B%5Efalse%5D.%0D%09self%20size%20%3D%20aSet%20size%20ifFalse%3A%20%5B%5Efalse%5D.%0D%09self%20do%3A%20%5B%3Aeach%20%7C%20%28aSet%20includes%3A%20each%29%20ifFalse%3A%20%5B%5Efalse%5D%20%5D.%0D%09%5Etrue"));
smalltalk.bind(smalltalk.Set, unescape("asArray"), "asArray", function Set__asArray(){
const self = this; return self['@contents'].copy();
}
, "converting", unescape("asArray%0D%09%22%20Return%20an%20array%20with%20the%20contents%20of%20the%20receiver.%20%22%0D%0D%09%5Econtents%20copy"));
smalltalk.bind(smalltalk.Set, unescape("toString"), "toString", function Set__toString(){
const self = this; return (((self.$klass).name())._comma(" withAll: "))._comma(((self.asArray()).printString()));
}
, "converting", unescape("toString%0D%09%22%20Convert%20the%20receiver%20to%20a%20String.%20%22%0D%0D%09%5Eself%20class%20name%2C%27%20withAll%3A%20%27%2Cself%20asArray%20printString"));
smalltalk.bind(smalltalk.Set, unescape("sorted"), "sorted", function Set__sorted(){
const self = this; return (self.asArray()).sort();
}
, "sorting", unescape("sorted%0D%09%22%20Return%20the%20contents%20of%20the%20receiver%20sorted.%20%22%0D%0D%09%5Eself%20asArray%20sort"));
smalltalk.bind(smalltalk.Set, unescape("sorted%3A"), "sorted_", function Set__sorted_(aBlock){
const self = this; return (self.asArray()).sort_(aBlock);
}
, "sorting", unescape("sorted%3A%20aBlock%0D%09%22%20Return%20a%20sorted%20copy%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20asArray%20sort%3A%20aBlock"));
smalltalk.bind(smalltalk.Set, unescape("do%3A"), "do_", function Set__do_(aBlock){
const self = this; return self['@contents'].do_(aBlock);
}
, "enumerating", unescape("do%3A%20aBlock%0D%09%22%20Evaluate%20aBlock%20with%20the%20contents%20of%20the%20receiver.%20%22%0D%0D%09%5Econtents%20do%3A%20aBlock"));
smalltalk.bind(smalltalk.Set, unescape("detect%3AifNone%3A"), "detect_ifNone_", function Set__detect_ifNone_(aBlock,anotherBlock){
const self = this; return self['@contents'].detect_ifNone_(aBlock,anotherBlock);
}
, "enumerating", unescape("detect%3A%20aBlock%20ifNone%3A%20anotherBlock%0D%09%22%20Return%20the%20object%20in%20the%20receiver%20that%20return%20true%20when%20evaluated%20with%20aBlock%20or%20the%20result%20of%20evaluating%20anotherBlock.%20%22%0D%0D%09%5Econtents%20detect%3A%20aBlock%20ifNone%3A%20anotherBlock"));
smalltalk.bind(smalltalk.Set, unescape("reverseDo%3A"), "reverseDo_", function Set__reverseDo_(aBlock){
const self = this; return self['@contents'].reverseDo_(aBlock);
}
, "enumerating", unescape("reverseDo%3A%20aBlock%0D%09%22%20Evaluate%20aBlock%20with%20the%20contents%20of%20the%20receiver%20in%20reverse%20order%20of%20iteration.%20%22%0D%0D%09%5Econtents%20reverseDo%3A%20aBlock"));
smalltalk.bind(smalltalk.Set, unescape("collect%3A"), "collect_", function Set__collect_(aBlock){
const self = this; return (self.$klass).withAll_((self['@contents'].collect_(aBlock)));
}
, "enumerating", unescape("collect%3A%20aBlock%0D%09%22%20Return%20a%20collection%20with%20the%20result%20of%20evaluating%20aBlock%20with%20the%20contents%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20class%20withAll%3A%20%28contents%20collect%3A%20aBlock%29"));
smalltalk.bind(smalltalk.Set, unescape("do%3AseparatedBy%3A"), "do_separatedBy_", function Set__do_separatedBy_(aBlock,anotherBlock){
const self = this; return self['@contents'].do_separatedBy_(aBlock,anotherBlock);
}
, "enumerating", unescape("do%3A%20aBlock%20separatedBy%3A%20anotherBlock%0D%09%22%20Evaluate%20aBlock%20for%20contents%20of%20the%20receiver%20evaluating%20anotherBlock%20inbetween%20aBlock%20evaluations.%20%22%0D%0D%09%5Econtents%20do%3A%20aBlock%20separatedBy%3A%20anotherBlock"));
smalltalk.bind(smalltalk.Set, unescape("inject%3Ainto%3A"), "inject_into_", function Set__inject_into_(anObject,aBlock){
const self = this; return self['@contents'].inject_into_(anObject,aBlock);
}
, "enumerating", unescape("inject%3A%20anObject%20into%3A%20aBlock%0D%09%22%20Evaluate%20aBlock%20for%20result%20of%20previous%20evaluation%20and%20contents%20of%20the%20receiver.%0D%09On%20first%20evaluation%20anObject%20is%20used%20as%20first%20argument%20to%20evaluate%20aBlock.%0D%09%22%0D%0D%09%5Econtents%20inject%3A%20anObject%20into%3A%20aBlock"));
smalltalk.bind(smalltalk.Set, unescape("select%3A"), "select_", function Set__select_(aBlock){
const self = this; return (self.$klass).withAll_((self['@contents'].select_(aBlock)));
}
, "enumerating", unescape("select%3A%20aBlock%0D%09%22%20Return%20a%20copy%20of%20the%20receiver%20with%20elements%20wich%20evaluates%20aBlock%20to%20true.%20%22%0D%0D%09%5Eself%20class%20withAll%3A%20%28contents%20select%3A%20aBlock%29"));
smalltalk.bind(smalltalk.Set, unescape("reject%3A"), "reject_", function Set__reject_(aBlock){
const self = this; return (self.$klass).withAll_((self['@contents'].reject_(aBlock)));
}
, "enumerating", unescape("reject%3A%20aBlock%0D%09%22%20Return%20the%20contents%20of%20the%20receiver%20wich%20evaluates%20aBlock%20to%20false.%20%22%0D%0D%09%5Eself%20class%20withAll%3A%20%28contents%20reject%3A%20aBlock%29"));
smalltalk.bind(smalltalk.Set, unescape("reversed"), "reversed", function Set__reversed(){
const self = this; return self['@contents'].reversed();
}
, "copying", unescape("reversed%0D%09%22%20Return%20an%20array%20with%20the%20contents%20of%20the%20receiver%20in%20reverse%20order.%20%22%0D%0D%09%5Econtents%20reversed"));
smalltalk.bind(smalltalk.Set, unescape("notEmpty"), "notEmpty", function Set__notEmpty(){
const self = this; return self['@contents'].notEmpty();
}
, "testing", unescape("notEmpty%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20not%20empty.%20%22%0D%0D%09%5Econtents%20notEmpty"));
smalltalk.bind(smalltalk.Set, unescape("isEmpty"), "isEmpty", function Set__isEmpty(){
const self = this; return self['@contents'].isEmpty();
}
, "testing", unescape("isEmpty%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20empty.%20%22%0D%0D%09%5Econtents%20isEmpty"));
smalltalk.bind(smalltalk.Set, unescape("occurrencesOf%3A"), "occurrencesOf_", function Set__occurrencesOf_(anObject){
const self = this; if ((self.includes_(anObject)).valueOf()) {return (1)} else {return (0)};
}
, "counting", unescape("occurrencesOf%3A%20anObject%0D%09%22%20Return%20the%20occurrences%20of%20anObject%20in%20the%20receiver.%20%22%0D%0D%09%5E%28self%20includes%3A%20anObject%29%20ifTrue%3A%20%5B%201%20%5D%20ifFalse%3A%20%5B%200%20%5D"));
smalltalk.bind(smalltalk.Set, unescape("asSet"), "asSet", function Set__asSet(){
const self = this; return self;
}
, "converting", unescape("asSet%0D%09%22%20Return%20the%20receiver%20contents%20in%20a%20Set.%20%22%0D%0D%09%5Eself"));
smalltalk.bind(smalltalk.Set, unescape("shallowCopy"), "shallowCopy", function Set__shallowCopy(){
const self = this; return (self.$klass).newContents_((self['@contents'].copy()));
}
, "copying", unescape("shallowCopy%0D%09%22%20Return%20a%20shallow%20copy%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20class%20newContents%3A%20contents%20copy"));
smalltalk.bind(smalltalk.Set, unescape("deepCopy"), "deepCopy", function Set__deepCopy(){
const self = this; return (self.$klass).newContents_((self['@contents'].deepCopy()));
}
, "copying", unescape("deepCopy%0D%09%22%20Return%20a%20deep%20copy%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20class%20newContents%3A%20contents%20deepCopy"));
smalltalk.addClass("SequenceableCollection", smalltalk.Collection, [], 'Kernel');
smalltalk.SequenceableCollection.$classVariableNames=("");
smalltalk.bind(smalltalk.SequenceableCollection, unescape("at%3A"), "at_", function SequenceableCollection__at_(anIndex){
const self = this; return self.at_ifAbsent_(anIndex,(function SequenceableCollection__(){
return self.objectNotFoundAt_(anIndex);
}
));
}
, "accessing", unescape("at%3A%20anIndex%0D%09%22%20Return%20the%20object%20in%20the%20receiver%20at%20anIndex%20position.%20%22%0D%0D%09%5Eself%20at%3A%20anIndex%20ifAbsent%3A%20%5B%20self%20objectNotFoundAt%3A%20anIndex%20%5D"));
smalltalk.bind(smalltalk.SequenceableCollection, unescape("at%3AifAbsent%3A"), "at_ifAbsent_", function SequenceableCollection__at_ifAbsent_(anIndex,aBlock){
const self = this; return self.subclassResponsibility_("at:ifAbsent:");
}
, "accessing", unescape("at%3A%20anIndex%20ifAbsent%3A%20aBlock%0D%09%22%20Return%20the%20object%20in%20the%20receiver%20at%20anIndex%20position%20or%20the%20result%20of%20evaluating%20aBlock.%20%22%0D%0D%09%5Eself%20subclassResponsibility%3A%20%23at%3AifAbsent%3A"));
smalltalk.bind(smalltalk.SequenceableCollection, unescape("at%3Aput%3A"), "at_put_", function SequenceableCollection__at_put_(anIndex,anObject){
const self = this; return self.subclassResponsibility_("at:put:");
}
, "accessing", unescape("at%3A%20anIndex%20put%3A%20anObject%0D%09%22%20Set%20the%20object%20in%20the%20receiver%20at%20anIndex%20position.%20%22%0D%0D%09%5Eself%20subclassResponsibility%3A%20%23at%3Aput%3A"));
smalltalk.bind(smalltalk.SequenceableCollection, unescape("at%3AifAbsentPut%3A"), "at_ifAbsentPut_", function SequenceableCollection__at_ifAbsentPut_(aKey,aBlock){
const self = this; return self.at_ifAbsent_(aKey,(function SequenceableCollection__(){
return self.at_put_(aKey,(aBlock.value()));
}
));
}
, "accessing", unescape("at%3A%20aKey%20ifAbsentPut%3A%20aBlock%0D%09%22%20Return%20the%20value%20at%20aKey%2C%20or%20add%20the%20result%20of%20evaluating%20aBlock%20to%20the%20receiver%20if%20it%20is%20absent.%20%22%0D%0D%09%5Eself%20at%3A%20aKey%20ifAbsent%3A%20%5B%20self%20at%3A%20aKey%20put%3A%20aBlock%20value%20%5D"));
smalltalk.bind(smalltalk.SequenceableCollection, unescape("copyFrom%3Ato%3A"), "copyFrom_to_", function SequenceableCollection__copyFrom_to_(anIndex,anotherIndex){
const self = this; return self.subclassResponsibility_("copyFrom:to:");
}
, "copying", unescape("copyFrom%3A%20anIndex%20to%3A%20anotherIndex%0D%09%22%20Return%20a%20copy%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20subclassResponsibility%3A%20%23copyFrom%3Ato%3A"));
smalltalk.bind(smalltalk.SequenceableCollection, unescape("indexOf%3A"), "indexOf_", function SequenceableCollection__indexOf_(anObject){
const self = this; return self.indexOf_ifAbsent_(anObject,(function SequenceableCollection__(){
return (0);
}
));
}
, "testing", unescape("indexOf%3A%20anObject%0D%09%22%20Return%20the%20position%20of%20anObject%20in%20the%20receiver%2C%20or%200.%20%22%0D%0D%09%5Eself%20indexOf%3A%20anObject%20ifAbsent%3A%20%5B%200%20%5D"));
smalltalk.bind(smalltalk.SequenceableCollection, unescape("indexOf%3AifAbsent%3A"), "indexOf_ifAbsent_", function SequenceableCollection__indexOf_ifAbsent_(anObject,aBlock){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKSequenceableCollection.primIndexOfIfAbsent(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "accessing", unescape("indexOf%3A%20anObject%20ifAbsent%3A%20aBlock%0D%09%22%20Return%20the%20position%20of%20anObject%20in%20the%20receiver%2C%20or%20the%20result%20of%20evaluating%20aBlock.%20%22%0D%0D%09%3Cprimitive%3A%27primIndexOfIfAbsent%27%20module%3A%27SKSequenceableCollection%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.SequenceableCollection, unescape("do%3A"), "do_", function SequenceableCollection__do_(aBlock){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKSequenceableCollection.primDo(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "enumerating", unescape("do%3A%20aBlock%0D%09%22%20Evaluate%20aBlock%20with%20the%20contents%20of%20the%20receiver.%20%22%0D%0D%09%3Cprimitive%3A%20%27primDo%27%20module%3A%20%27SKSequenceableCollection%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.SequenceableCollection, unescape("detect%3AifNone%3A"), "detect_ifNone_", function SequenceableCollection__detect_ifNone_(aBlock,anotherBlock){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKSequenceableCollection.primDetectIfNone(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "enumerating", unescape("detect%3A%20aBlock%20ifNone%3A%20anotherBlock%0D%09%22%20Return%20the%20object%20in%20the%20receiver%20that%20return%20true%20when%20evaluated%20with%20aBlock%20or%20the%20result%20of%20evaluating%20anotherBlock.%20%22%0D%0D%09%3Cprimitive%3A%20%27primDetectIfNone%27%20module%3A%20%27SKSequenceableCollection%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.SequenceableCollection, unescape("doWithIndex%3A"), "doWithIndex_", function SequenceableCollection__doWithIndex_(aBlock){
var element = nil;
const self = this; (1).to_do_((self.size()),(function SequenceableCollection__(index){
return aBlock.value_value_((self.at_(index)),index);
}
));
return self;
}
, "enumerating", unescape("doWithIndex%3A%20aBlock%0D%09%22%20Evaluate%20aBlock%20with%20the%20contents%20of%20the%20receiver.%20%22%0D%0D%09%7C%20element%20%7C%0D%091%20to%3A%20self%20size%0D%09%09do%3A%0D%09%09%09%5B%3Aindex%20%7C%0D%09%09%09aBlock%0D%09%09%09%09value%3A%20%28self%20at%3A%20index%29%0D%09%09%09%09value%3A%20index%5D"));
smalltalk.bind(smalltalk.SequenceableCollection, unescape("reversed"), "reversed", function SequenceableCollection__reversed(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKSequenceableCollection.primReversed(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "copying", unescape("reversed%0D%09%22%20Return%20an%20array%20with%20the%20contents%20of%20the%20receiver%20in%20reverse%20order.%20%22%0D%0D%09%3Cprimitive%3A%20%27primReversed%27%20module%3A%20%27SKSequenceableCollection%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.SequenceableCollection, unescape("isEmpty"), "isEmpty", function SequenceableCollection__isEmpty(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKSequenceableCollection.primIsEmpty(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "testing", unescape("isEmpty%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20empty.%0D%09Note%3A%20%5Eself%20size%20%3D%200%20is%20slower%20than%20inlined%20impl.%22%0D%0D%09%3Cprimitive%3A%20%27primIsEmpty%27%20module%3A%20%27SKSequenceableCollection%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.SequenceableCollection, unescape("reverseDo%3A"), "reverseDo_", function SequenceableCollection__reverseDo_(aBlock){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKSequenceableCollection.primReverseDo(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "enumerating", unescape("reverseDo%3A%20aBlock%0D%09%22%20Evaluate%20aBlock%20with%20the%20contents%20of%20the%20receiver%20in%20reverse%20order%20of%20iteration.%20%22%0D%0D%09%3Cprimitive%3A%20%27primReverseDo%27%20module%3A%20%27SKSequenceableCollection%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.SequenceableCollection, unescape("includes%3A"), "includes_", function SequenceableCollection__includes_(anObject){
const self = this; var $early={name:"stReturn"};
try {
if ((self.isObject_(anObject)).not()) {self.error_("argument must be an object")};
self.do_((function SequenceableCollection__(each){
if ((anObject._eq(each)).valueOf()) {$early.result=true; throw ($early)} else {return nil};
}
));
return false;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "testing", unescape("includes%3A%20anObject%0D%09%22%20Return%20true%20if%20anObject%20is%20in%20the%20receiver.%0D%09Note%3A%20the%20indexOf%28%29%20function%20fail%20to%20search%20in%20case%20of%20string%20literals%20in%20Array%20contents.%0D%09%22%0D%09%28self%20isObject%3A%20anObject%29%0D%09%09ifFalse%3A%20%5Bself%20error%3A%20%27argument%20must%20be%20an%20object%27%5D.%0D%09self%20do%3A%20%5B%3Aeach%20%7C%20anObject%20%3D%20each%20ifTrue%3A%5B%5Etrue%5D%5D.%0D%09%5Efalse.%20"));
smalltalk.bind(smalltalk.SequenceableCollection, unescape("occurrencesOf%3A"), "occurrencesOf_", function SequenceableCollection__occurrencesOf_(anObject){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKSequenceableCollection.primOccurrencesOf(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "counting", unescape("occurrencesOf%3A%20anObject%0D%09%22%20Return%20the%20occurrences%20of%20anObject%20in%20the%20receiver.%20%22%0D%0D%09%3Cprimitive%3A%27primOccurrencesOf%27%20module%3A%20%27SKSequenceableCollection%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.SequenceableCollection, unescape("first"), "first", function SequenceableCollection__first(){
const self = this; return self.at_((1));
}
, "accessing", unescape("first%0D%09%22%20Return%20the%20object%20in%20the%20receiver.%20%22%0D%0D%09%5Eself%20at%3A%201"));
smalltalk.bind(smalltalk.SequenceableCollection, unescape("fourth"), "fourth", function SequenceableCollection__fourth(){
const self = this; return self.at_((4));
}
, "accessing", unescape("fourth%0D%09%22%20Return%20the%20object%20in%20the%20receiver.%20%22%0D%0D%09%5Eself%20at%3A%204"));
smalltalk.bind(smalltalk.SequenceableCollection, unescape("last"), "last", function SequenceableCollection__last(){
const self = this; return self.at_((self.size()));
}
, "accessing", unescape("last%0D%09%22%20Return%20the%20object%20in%20the%20receiver.%20%22%0D%0D%09%5Eself%20at%3A%20self%20size"));
smalltalk.bind(smalltalk.SequenceableCollection, unescape("second"), "second", function SequenceableCollection__second(){
const self = this; return self.at_((2));
}
, "accessing", unescape("second%0D%09%22%20Return%20the%20object%20in%20the%20receiver.%20%22%0D%0D%09%5Eself%20at%3A%202"));
smalltalk.bind(smalltalk.SequenceableCollection, unescape("third"), "third", function SequenceableCollection__third(){
const self = this; return self.at_((3));
}
, "accessing", unescape("third%0D%09%22%20Return%20the%20object%20in%20the%20receiver.%20%22%0D%0D%09%5Eself%20at%3A%203"));
smalltalk.bind(smalltalk.SequenceableCollection, unescape("removeLast"), "removeLast", function SequenceableCollection__removeLast(){
const self = this; return self.remove_((self.last()));
}
, "removing", unescape("removeLast%0D%09%22%20Remove%20the%20last%20object%20in%20the%20receiver.%20%22%0D%0D%09%5Eself%20remove%3A%20self%20last"));
smalltalk.bind(smalltalk.SequenceableCollection, unescape("removeFirst"), "removeFirst", function SequenceableCollection__removeFirst(){
const self = this; return self.remove_((self.first()));
}
, "removing", unescape("removeFirst%0D%09%22%20Remove%20the%20first%20object%20in%20the%20receiver.%20%22%0D%0D%09%5Eself%20remove%3A%20self%20first"));
smalltalk.bind(smalltalk.SequenceableCollection, unescape("addLast%3A"), "addLast_", function SequenceableCollection__addLast_(anObject){
const self = this; return self.add_(anObject);
}
, "adding", unescape("addLast%3A%20anObject%0D%09%22%20Add%20the%20object%20in%20the%20receiver%20%28at%20end%29.%20%22%0D%0D%09%5Eself%20add%3A%20anObject"));
smalltalk.bind(smalltalk.SequenceableCollection, unescape("atAll%3Aput%3A"), "atAll_put_", function SequenceableCollection__atAll_put_(indices,anObject){
const self = this; indices.do_((function SequenceableCollection__(index){
return self.at_put_(index,anObject);
}
));
return self;
}
, "accessing", unescape("atAll%3A%20indices%20put%3A%20anObject%0D%09%22%20Return%20the%20receiver%20after%20replacing%20those%20elements%2C%20indexed%20by%20the%20indices%2C%20with%20anObject.%20%22%0D%0D%09indices%20do%3A%20%5B%20%3Aindex%20%7C%20self%20at%3A%20index%20put%3A%20anObject%20%5D"));
smalltalk.bind(smalltalk.SequenceableCollection, unescape("atAllPut%3A"), "atAllPut_", function SequenceableCollection__atAllPut_(anObject){
const self = this; ((1).to_((self.size()))).do_((function SequenceableCollection__(index){
return self.at_put_(index,anObject);
}
));
return self;
}
, "accessing", unescape("atAllPut%3A%20anObject%0D%09%22%20Replace%20all%20elements%20of%20the%20receiver%20with%20anObject.%20%22%0D%0D%09%281%20to%3A%20self%20size%29%20do%3A%20%5B%20%3Aindex%20%7C%20self%20at%3A%20index%20put%3A%20anObject%20%5D"));
smalltalk.bind(smalltalk.SequenceableCollection, unescape("withIndexDo%3A"), "withIndexDo_", function SequenceableCollection__withIndexDo_(aBlock){
const self = this; ((1).to_((self.size()))).do_((function SequenceableCollection__(index){
return aBlock.value_value_((self.at_(index)),index);
}
));
return self;
}
, "enumerating", unescape("withIndexDo%3A%20aBlock%0D%09%22%20Evaluate%20aBlock%20with%20all%20the%20index%20positions%20in%20the%20receiver.%20%22%0D%0D%09%281%20to%3A%20self%20size%29%20do%3A%20%5B%20%3Aindex%20%7C%0D%09%09aBlock%20value%3A%20%28self%20at%3A%20index%29%20value%3A%20index%0D%09%5D"));
smalltalk.bind(smalltalk.SequenceableCollection, unescape("%3D"), "_eq", function SequenceableCollection___eq(aCollection){
var index = nil;
const self = this; var $early={name:"stReturn"};
try {
if (((nil.is_eqeq_(self,aCollection))).valueOf()) {return true};
if (((nil.is_eqeq_(self.$klass,aCollection.$klass))).not()) {return false};
index=self.size();
if ((index._no_eq((aCollection.size()))).valueOf()) {return false};
while((index._lt_eq((0))).not()){if (((self.at_(index))._eq((aCollection.at_(index)))).not()) {$early.result=false; throw ($early)};
index=index._minus((1))};;
return true;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "testing", unescape("%3D%20aCollection%0D%09%22%20Return%20true%20if%20the%20elements%20contained%20by%20the%20receiver%20are%20equal%20to%20the%20elements%20contained%20in%20aCollection.%20%22%0D%0D%09%7C%20index%20%7C%0D%09self%20%3D%3D%20aCollection%20ifTrue%3A%20%5B%20%5Etrue%20%5D.%0D%09self%20class%20%3D%3D%20aCollection%20class%20ifFalse%3A%20%5B%20%5Efalse%20%5D.%0D%09index%20%3A%3D%20self%20size.%0D%09index%20%7E%3D%20aCollection%20size%20ifTrue%3A%20%5B%20%5Efalse%20%5D.%0D%09%5B%20index%20%3C%3D%200%20%5D%20whileFalse%3A%20%5B%0D%09%09%28self%20at%3A%20index%29%20%3D%20%28aCollection%20at%3A%20index%29%20ifFalse%3A%20%5B%20%5Efalse%20%5D.%0D%09%09index%20%3A%3D%20index%20-%201%0D%09%5D.%0D%09%5Etrue"));
smalltalk.bind(smalltalk.SequenceableCollection, unescape("beginsWith%3A"), "beginsWith_", function SequenceableCollection__beginsWith_(aCollection){
const self = this; if (((self.size())._lt((aCollection.size()))).valueOf()) {return false};
if (((self.size())._eq((aCollection.size()))).valueOf()) {return aCollection._eq(self)};
return aCollection._eq((self.copyFrom_to_((1),(aCollection.size()))));
}
, "testing", unescape("beginsWith%3A%20aCollection%0D%09%22%20Return%20true%20if%20the%20receiver%20begins%20with%20aCollection.%20%22%0D%0D%09self%20size%20%3C%20aCollection%20size%20ifTrue%3A%20%5B%20%5Efalse%20%5D.%0D%09self%20size%20%3D%20aCollection%20size%20ifTrue%3A%20%5B%20%5EaCollection%20%3D%20self%20%5D.%0D%09%5EaCollection%20%3D%20%28self%20copyFrom%3A%201%20to%3A%20aCollection%20size%29"));
smalltalk.bind(smalltalk.SequenceableCollection, unescape("endsWith%3A"), "endsWith_", function SequenceableCollection__endsWith_(aCollection){
const self = this; if (((self.size())._lt((aCollection.size()))).valueOf()) {return false};
if (((self.size())._eq((aCollection.size()))).valueOf()) {return aCollection._eq(self)};
return aCollection._eq((self.copyFrom_to_((((self.size())._minus((aCollection.size())))._plus((1))),(self.size()))));
}
, "testing", unescape("endsWith%3A%20aCollection%0D%09%22%20Return%20true%20if%20the%20receiver%20ends%20with%20aCollection.%20%22%0D%0D%09self%20size%20%3C%20aCollection%20size%20ifTrue%3A%20%5B%20%5Efalse%20%5D.%0D%09self%20size%20%3D%20aCollection%20size%20ifTrue%3A%20%5B%20%5EaCollection%20%3D%20self%20%5D.%0D%09%5EaCollection%20%3D%20%28self%20copyFrom%3A%20self%20size%20-%20aCollection%20size%20+%201%20to%3A%20self%20size%29"));
smalltalk.bind(smalltalk.SequenceableCollection, unescape("copyReplaceFrom%3Ato%3Awith%3A"), "copyReplaceFrom_to_with_", function SequenceableCollection__copyReplaceFrom_to_with_(start,stop,aCollection){
const self = this; return ((self.copyFrom_to_((1),(start._minus((1)))))._comma(aCollection))._comma((self.copyFrom_to_((stop._plus((1))),(self.size()))));
}
, "copying", unescape("copyReplaceFrom%3A%20start%20to%3A%20stop%20with%3A%20aCollection%0D%09%22%20Return%20a%20collection%20containing%20a%20copy%20of%20the%20receiver%20with%20the%20elements%20at%20index%20positions%20from%20start%20through%20stop%20replaced%20with%20the%20elements%20of%20aCollection.%20%22%0D%0D%09%5E%28self%20copyFrom%3A%201%20to%3A%20start%20-%201%29%0D%09%09%2C%20aCollection%0D%09%09%2C%20%28self%20copyFrom%3A%20stop%20+%201%20to%3A%20self%20size%29"));
smalltalk.bind(smalltalk.SequenceableCollection, unescape("copyWithout%3A"), "copyWithout_", function SequenceableCollection__copyWithout_(anObject){
var index = nil;
const self = this; var $early={name:"stReturn"};
try {
index=self.indexOf_ifAbsent_(anObject,(function SequenceableCollection__(){
$early.result=self.copy(); throw ($early);
}
));
return (self.copyFrom_to_((1),(index._minus((1)))))._comma(((self.copyFrom_to_((index._plus((1))),(self.size()))).copyWithout_(anObject)));
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "copying", unescape("copyWithout%3A%20anObject%0D%09%22%20Return%20a%20copy%20of%20the%20receiver%20excluding%20anObject%2C%20if%20any.%20%22%0D%0D%09%7C%20index%20%7C%0D%09index%20%3A%3D%20self%20indexOf%3A%20anObject%20ifAbsent%3A%20%5B%20%5Eself%20copy%20%5D.%0D%09%5E%28self%20copyFrom%3A%201%20to%3A%20index%20-%201%29%0D%09%09%2C%28%28self%20copyFrom%3A%20index%20+%201%20to%3A%20self%20size%29%0D%09%09%09copyWithout%3A%20anObject%29"));
smalltalk.bind(smalltalk.SequenceableCollection, unescape("copyWithAll%3A"), "copyWithAll_", function SequenceableCollection__copyWithAll_(aCollection){
const self = this; return self._comma(aCollection);
}
, "copying", unescape("copyWithAll%3A%20aCollection%0D%09%22%20Return%20a%20copy%20of%20the%20receiver%20with%20all%20contents%20of%20aCollection.%20%22%0D%0D%09%5Eself%20%2C%20aCollection%20"));
smalltalk.bind(smalltalk.SequenceableCollection, unescape("findFirst%3A"), "findFirst_", function SequenceableCollection__findFirst_(aBlock){
const self = this; return self.findFirst_ifAbsent_(aBlock,(function SequenceableCollection__(){
return self.errorAbsentObject();
}
));
}
, "searching", unescape("findFirst%3A%20aBlock%0D%09%22%20Return%20the%20index%20of%20the%20first%20element%20of%20the%20receiver%20that%20causes%20aBlock%20to%20evaluate%20to%20true.%0D%20%20%20%20%20%20%20%20%20If%20no%20such%20element%20is%20found%2C%20report%20an%20error.%0D%09%22%0D%0D%09%5Eself%20findFirst%3A%20aBlock%20ifAbsent%3A%20%5B%20self%20errorAbsentObject%20%5D"));
smalltalk.bind(smalltalk.SequenceableCollection, unescape("findFirst%3AifAbsent%3A"), "findFirst_ifAbsent_", function SequenceableCollection__findFirst_ifAbsent_(aBlock,absentBlock){
var index = nil;
var size = nil;
const self = this; size=self.size();
index=(1);
while((index._lt_eq(size)).valueOf()){if ((aBlock.value_((self.at_(index)))).valueOf()) {return index};
index=index._plus((1))};;
return absentBlock.value();
}
, "searching", unescape("findFirst%3A%20aBlock%20ifAbsent%3A%20absentBlock%0D%09%22%20Return%20the%20index%20of%20the%20first%20element%20of%20the%20receiver%20that%20causes%20aBlock%20to%20evaluate%20to%20true.%0D%09If%20no%20such%20element%20is%20found%2C%20return%20the%20result%20of%20evaluating%20the%20argument%20block.%0D%09%22%0D%0D%09%7C%20index%20size%20%7C%0D%09size%20%3A%3D%20self%20size.%0D%09index%20%3A%3D%201.%0D%09%5B%20index%20%3C%3D%20size%20%5D%20whileTrue%3A%20%5B%0D%09%09%28aBlock%20value%3A%20%28self%20at%3A%20index%29%29%20ifTrue%3A%20%5B%20%5Eindex%20%5D.%0D%09%09index%20%3A%3D%20index%20+%201%0D%09%5D.%0D%09%5EabsentBlock%20value"));
smalltalk.bind(smalltalk.SequenceableCollection, unescape("findLast%3A"), "findLast_", function SequenceableCollection__findLast_(aBlock){
const self = this; return self.findLast_ifAbsent_(aBlock,(function SequenceableCollection__(){
return self.errorAbsentObject();
}
));
}
, "searching", unescape("findLast%3A%20aBlock%0D%09%22%20Return%20the%20index%20of%20the%20last%20element%20of%20the%20receiver%20that%20causes%20aBlock%20to%20evaluate%20to%20true.%0D%09If%20no%20such%20element%20is%20found%2C%20report%20an%20error.%0D%09%22%0D%0D%09%5Eself%20findLast%3A%20aBlock%20ifAbsent%3A%20%5B%20self%20errorAbsentObject%20%5D"));
smalltalk.bind(smalltalk.SequenceableCollection, unescape("findLast%3AifAbsent%3A"), "findLast_ifAbsent_", function SequenceableCollection__findLast_ifAbsent_(aBlock,absentBlock){
var index = nil;
const self = this; index=self.size();
while((index._gt((0))).valueOf()){if ((aBlock.value_((self.at_(index)))).valueOf()) {return index};
index=index._minus((1))};;
return absentBlock.value();
}
, "searching", unescape("findLast%3A%20aBlock%20ifAbsent%3A%20absentBlock%0D%09%22%20Return%20the%20index%20of%20the%20last%20element%20of%20the%20receiver%20that%20causes%20aBlock%20to%20evaluate%20to%20true.%0D%09If%20no%20such%20element%20is%20found%2C%20return%20the%20result%20of%20evaluating%20the%20argument%20block.%0D%09%22%0D%0D%09%7C%20index%20%7C%0D%09index%20%3A%3D%20self%20size.%0D%09%5B%20index%20%3E%200%20%5D%20whileTrue%3A%20%5B%0D%09%09%28aBlock%20value%3A%20%28self%20at%3A%20index%29%29%20ifTrue%3A%20%5B%20%5Eindex%20%5D.%0D%09%09index%20%3A%3D%20index%20-%201%0D%09%5D.%0D%09%5EabsentBlock%20value"));
smalltalk.bind(smalltalk.SequenceableCollection, unescape("indexOfCollection%3A"), "indexOfCollection_", function SequenceableCollection__indexOfCollection_(aCollection){
var index1 = nil;
var index2 = nil;
var limit1 = nil;
var limit2 = nil;
const self = this; limit2=aCollection.size();
limit1=((self.size())._minus(limit2))._plus((1));
index1=(1);
while((index1._lt_eq(limit1)).valueOf()){if (((self.at_(index1))._eq((aCollection.at_((1))))).valueOf()) {index2=(2);
while(((index2._lt_eq(limit2)).and_((function SequenceableCollection__(){
return (self.at_(((index1._plus(index2))._minus((1)))))._eq((aCollection.at_(index2)));
}
))).valueOf()){index2=index2._plus((1))};;
if ((index2._gt(limit2)).valueOf()) {return index1}};
index1=index1._plus((1))};;
return (0);
}
, "indexing", unescape("indexOfCollection%3A%20aCollection%0D%09%22%20Return%20the%20index%20position%20of%20the%20first%20occurrence%20of%20aCollection%20in%20the%20receiver%20%28or%200%29.%20%22%0D%0D%09%7C%20index1%20index2%20limit1%20limit2%20%7C%0D%09limit2%20%3A%3D%20aCollection%20size.%0D%09limit1%20%3A%3D%20self%20size%20-%20limit2%20+%201.%0D%09index1%20%3A%3D%201.%0D%09%5B%20index1%20%3C%3D%20limit1%20%5D%20whileTrue%3A%20%5B%0D%09%09%28self%20at%3A%20index1%29%20%3D%20%28aCollection%20at%3A%201%29%20ifTrue%3A%20%5B%0D%09%09%09index2%20%3A%3D%202.%0D%09%09%09%5B%20index2%20%3C%3D%20limit2%20and%3A%20%5B%0D%09%09%09%09%28self%20at%3A%20index1%20+%20index2%20-%201%29%20%3D%20%28aCollection%20at%3A%20index2%29%0D%09%09%09%5D%20%5D%20whileTrue%3A%20%5B%20index2%20%3A%3D%20index2%20+%201%20%5D.%0D%09%09index2%20%3E%20limit2%20ifTrue%3A%20%5B%20%5Eindex1%20%5D%0D%09%09%5D.%0D%09%09index1%20%3A%3D%20index1%20+%201%0D%09%5D.%0D%09%5E0"));
smalltalk.bind(smalltalk.SequenceableCollection, unescape("replaceFrom%3Ato%3Awith%3A"), "replaceFrom_to_with_", function SequenceableCollection__replaceFrom_to_with_(start,stop,aCollection){
const self = this; if ((((stop._minus(start))._plus((1)))._eq((aCollection.size()))).not()) {return self.error_("Replacement has wrong size")};
self.replaceFrom_to_with_startingAt_(start,stop,aCollection,(1));
return self;
}
, "replace", unescape("replaceFrom%3A%20start%20to%3A%20stop%20with%3A%20aCollection%0D%09%22%20Return%20the%20receiver.%0D%09Replace%20the%20elements%20of%20the%20receiver%20at%20index%20positions%20start%20through%20stop%2C%20with%20the%20elements%20of%20aCollection.%20%22%0D%0D%09stop%20-%20start%20+%201%20%3D%20aCollection%20size%20ifFalse%3A%20%5B%0D%09%09%5Eself%20error%3A%20%27Replacement%20has%20wrong%20size%27%0D%09%5D.%0D%09self%0D%09%09replaceFrom%3A%20start%0D%09%09to%3A%20stop%0D%09%09with%3A%20aCollection%0D%09%09startingAt%3A%201"));
smalltalk.bind(smalltalk.SequenceableCollection, unescape("replaceFrom%3Ato%3Awith%3AstartingAt%3A"), "replaceFrom_to_with_startingAt_", function SequenceableCollection__replaceFrom_to_with_startingAt_(start,stop,aCollection,repStart){
var index1 = nil;
var index2 = nil;
const self = this; if ((((nil.is_eqeq_(self,aCollection))).and_((function SequenceableCollection__(){
return repStart._lt(start);
}
))).valueOf()) {index2=(repStart._plus(stop))._minus(start);
index1=stop;
while((start._lt_eq(index1)).valueOf()){self.at_put_(index1,(aCollection.at_(index2)));
index1=index1._minus((1));
index2=index2._minus((1))};;
return self};
index2=repStart;
index1=start;
while((index1._lt_eq(stop)).valueOf()){self.at_put_(index1,(aCollection.at_(index2)));
index1=index1._plus((1));
index2=index2._plus((1))};;
return self;
}
, "replace", unescape("replaceFrom%3A%20start%0D%20%20%20%20to%3A%20stop%0D%20%20%20%20with%3A%20aCollection%0D%20%20%20%20startingAt%3A%20repStart%0D%09%22%20Return%20the%20receiver.%0D%09Replace%20the%20elements%20of%20the%20receiver%20at%20index%20positions%20start%20through%20stop%20with%20consecutive%0D%20%20%20%20%20%20%20%20%20elements%20of%20aCollection%20beginning%20at%20index%20position%20repStart.%0D%09%22%0D%0D%09%7C%20index1%20index2%20%7C%0D%09%28self%20%3D%3D%20aCollection%20and%3A%20%5B%20repStart%20%3C%20start%20%5D%29%20ifTrue%3A%20%5B%20%22do%20backward%20move%20for%20same%20object%22%0D%09%09index2%20%3A%3D%20repStart%20+%20stop%20-%20start.%0D%09%09index1%20%3A%3D%20stop.%0D%09%09%5B%20start%20%3C%3D%20index1%20%5D%20whileTrue%3A%20%5B%0D%09%09%09self%20at%3A%20index1%20put%3A%20%28aCollection%20at%3A%20index2%29.%0D%09%09%09index1%20%3A%3D%20index1%20-%201.%0D%09%09%09index2%20%3A%3D%20index2%20-%201%0D%09%09%5D.%0D%09%09%5Eself%0D%09%5D.%0D%09index2%20%3A%3D%20repStart.%0D%09index1%20%3A%3D%20start.%0D%09%5B%20index1%20%3C%3D%20stop%20%5D%20whileTrue%3A%20%5B%0D%09%09self%20at%3A%20index1%20put%3A%20%28aCollection%20at%3A%20index2%29.%0D%09%09index1%20%3A%3D%20index1%20+%201.%0D%09%09index2%20%3A%3D%20index2%20+%201%0D%09%5D"));
smalltalk.bind(smalltalk.SequenceableCollection, unescape("replaceFrom%3Ato%3Awith%3AstartingWith%3A"), "replaceFrom_to_with_startingWith_", function SequenceableCollection__replaceFrom_to_with_startingWith_(start,stop,replacement,replacementStart){
const self = this; return self.replaceFrom_to_with_startingAt_(start,stop,replacement,replacementStart);
}
, "replace", unescape("replaceFrom%3A%20start%0D%20%20%20%20to%3A%20stop%0D%20%20%20%20with%3A%20replacement%0D%20%20%20%20startingWith%3A%20replacementStart%0D%09%22%20Replace%20the%20elements%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%0D%09%09replaceFrom%3A%20start%0D%09%09to%3A%20stop%0D%09%09with%3A%20replacement%0D%09%09startingAt%3A%20replacementStart"));
smalltalk.bind(smalltalk.SequenceableCollection, unescape("replaceFrom%3Ato%3AwithObject%3A"), "replaceFrom_to_withObject_", function SequenceableCollection__replaceFrom_to_withObject_(start,stop,anObject){
var index = nil;
const self = this; index=start;
while((index._lt_eq(stop)).valueOf()){self.at_put_(index,anObject);
index=index._plus((1))};;
return anObject;
}
, "replace", unescape("replaceFrom%3A%20start%20to%3A%20stop%20withObject%3A%20anObject%0D%09%22Replace%20each%20of%20the%20elements%20of%20the%20receiver%20at%20index%20positions%20start%20through%20stop%20with%20anObject.%20%22%0D%0D%09%7C%20index%20%7C%0D%09index%20%3A%3D%20start.%0D%09%5B%20index%20%3C%3D%20stop%20%5D%20whileTrue%3A%20%5B%0D%09%09self%20at%3A%20index%20put%3A%20anObject.%0D%09%09index%20%3A%3D%20index%20+%201%0D%09%5D.%0D%09%5EanObject"));
smalltalk.bind(smalltalk.SequenceableCollection, unescape("with%3Ado%3A"), "with_do_", function SequenceableCollection__with_do_(aCollection,aBlock){
var first = nil;
var second = nil;
const self = this; first=self.stream();
second=aCollection.stream();
while(((first.atEnd()).or_((function SequenceableCollection__(){
return second.atEnd();
}
))).not()){aBlock.value_value_((first.next()),(second.next()))};;
return self;
}
, "iterating", unescape("with%3A%20aCollection%20do%3A%20aBlock%0D%09%22%20For%20each%20pair%20of%20elements%20evaluate%20aBlock%20with%20those%20elements%20as%20the%20arguments.%20%22%0D%0D%09%7C%20first%20second%20%7C%0D%09first%09%3A%3D%20self%20stream.%0D%09second%09%3A%3D%20aCollection%20stream.%0D%09%5B%20first%20atEnd%20or%3A%20%5B%20second%20atEnd%20%5D%20%5D%20whileFalse%3A%20%5B%0D%09%09aBlock%20value%3A%20first%20next%20value%3A%20second%20next%0D%09%5D."));
smalltalk.addClass("String", smalltalk.SequenceableCollection, [], 'Kernel');
smalltalk.String.$classVariableNames=("");
smalltalk.bind(smalltalk.String.$klass, unescape("streamClass"), "streamClass", function String_class__streamClass(){
const self = this; return smalltalk.StringStream;
}
, "accessing", unescape("streamClass%0D%09%22%20Return%20the%20streamming%20support%20for%20the%20receiver%27s%20instances.%20%22%0D%0D%09%5EStringStream"));
smalltalk.bind(smalltalk.String.$klass, unescape("fromString%3A"), "fromString_", function String_class__fromString_(aString){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKString.primFromString(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "instantiation", unescape("fromString%3A%20aString%0D%09%22%20Return%20an%20instance%20of%20the%20receiver.%20%22%0D%0D%09%3Cprimitive%3A%20%27primFromString%27%20module%3A%20%27SKString%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.String.$klass, unescape("cr"), "cr", function String_class__cr(){
const self = this; return self.fromCharCode_((13));
}
, "accessing", unescape("cr%0D%09%22%20Return%20the%20singular%20instance.%20%22%0D%0D%09%5Eself%20fromCharCode%3A%2013.%20"));
smalltalk.bind(smalltalk.String.$klass, unescape("lf"), "lf", function String_class__lf(){
const self = this; return self.fromCharCode_((10));
}
, "accessing", unescape("lf%0D%09%22%20Return%20the%20singular%20instance.%20%22%0D%0D%09%5Eself%20fromCharCode%3A%2010.%20"));
smalltalk.bind(smalltalk.String.$klass, unescape("crlf"), "crlf", function String_class__crlf(){
const self = this; return (self.cr())._comma((self.lf()));
}
, "accessing", unescape("crlf%0D%09%22%20Return%20the%20singular%20instance.%20%22%0D%0D%09%5Eself%20cr%2C%20self%20lf.%20"));
smalltalk.bind(smalltalk.String.$klass, unescape("space"), "space", function String_class__space(){
const self = this; return self.fromCharCode_((32));
}
, "accessing", unescape("space%0D%09%22%20Return%20the%20singular%20instance.%20%22%0D%0D%09%5Eself%20fromCharCode%3A%2032.%20"));
smalltalk.bind(smalltalk.String.$klass, unescape("tab"), "tab", function String_class__tab(){
const self = this; return self.fromCharCode_((9));
}
, "accessing", unescape("tab%0D%09%22%20Return%20the%20singular%20instance.%20%22%0D%0D%09%5Eself%20fromCharCode%3A%209.%20"));
smalltalk.bind(smalltalk.String.$klass, unescape("zero"), "zero", function String_class__zero(){
const self = this; return self.fromCharCode_((0));
}
, "accessing", unescape("zero%0D%09%22%20Return%20the%20singular%20instance.%20%22%0D%0D%09%5Eself%20fromCharCode%3A%200.%20"));
smalltalk.bind(smalltalk.String.$klass, unescape("with%3A"), "with_", function String_class__with_(aCharacter){
const self = this; return aCharacter;
}
, "instantiation", unescape("with%3A%20aCharacter%0D%09%22%20Return%20an%20instance%20of%20the%20receiver.%20%22%0D%0D%09%5EaCharacter"));
smalltalk.bind(smalltalk.String.$klass, unescape("with%3Awith%3A"), "with_with_", function String_class__with_with_(aCharacter,bCharacter){
const self = this; return aCharacter._comma(bCharacter);
}
, "instantiation", unescape("with%3A%20aCharacter%20with%3A%20bCharacter%0D%09%22%20Return%20an%20instance%20of%20the%20receiver.%20%22%0D%0D%09%5EaCharacter%20%2C%20bCharacter"));
smalltalk.bind(smalltalk.String.$klass, unescape("with%3Awith%3Awith%3A"), "with_with_with_", function String_class__with_with_with_(aCharacter,bCharacter,cCharacter){
const self = this; return (aCharacter._comma(bCharacter))._comma(cCharacter);
}
, "instantiation", unescape("with%3A%20aCharacter%20with%3A%20bCharacter%20with%3A%20cCharacter%0D%09%22%20Return%20an%20instance%20of%20the%20receiver.%20%22%0D%0D%09%5EaCharacter%20%2C%20bCharacter%20%2C%20cCharacter"));
smalltalk.bind(smalltalk.String.$klass, unescape("with%3Awith%3Awith%3Awith%3A"), "with_with_with_with_", function String_class__with_with_with_with_(aCharacter,bCharacter,cCharacter,dCharacter){
const self = this; return ((aCharacter._comma(bCharacter))._comma(cCharacter))._comma(dCharacter);
}
, "instantiation", unescape("with%3A%20aCharacter%20with%3A%20bCharacter%0D%09with%3A%20cCharacter%20with%3A%20dCharacter%0D%09%22%20Return%20an%20instance%20of%20the%20receiver.%20%22%0D%0D%09%5EaCharacter%20%2C%20bCharacter%20%2C%20cCharacter%20%2C%20dCharacter"));
smalltalk.bind(smalltalk.String.$klass, unescape("fromCharCode%3A"), "fromCharCode_", function String_class__fromCharCode_(anArrayOrNumber){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKString.primFromCharCode(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "instantiation", unescape("fromCharCode%3A%20anArrayOrNumber%0D%09%22%20Return%20an%20instance%20of%20the%20receiver.%20%22%0D%0D%09%3Cprimitive%3A%20%27primFromCharCode%27%20module%3A%20%27SKString%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.String.$klass, unescape("streamContents%3A"), "streamContents_", function String_class__streamContents_(aBlock){
var stream = nil;
const self = this; stream="".writeStream();
aBlock.value_(stream);
return stream.contents();
}
, "instance creation", unescape("streamContents%3A%20aBlock%0D%0D%09%7C%20stream%20%7C%0D%09stream%20%3A%3D%20%27%27%20writeStream.%0D%09aBlock%20value%3A%20stream.%0D%09%5Estream%20contents"));
smalltalk.bind(smalltalk.String.$klass, unescape("doItSelector"), "doItSelector", function String_class__doItSelector(){
const self = this; return "skDoIt";
}
, "doIt", unescape("doItSelector%0D%09%22%20Return%20the%20selector%20to%20use%20for%20doIt%20evaluations.%0D%09Warning%3A%20this%20selector%20will%20not%20be%20dump%20on%20image%20nor%20change%20log%20expressions.%0D%09%22%0D%0D%09%5E%23skDoIt"));
smalltalk.bind(smalltalk.String, unescape("%3D"), "_eq", function String___eq(anObject){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKString.primEquals(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return false;
}
, "comparing", unescape("%3D%20anObject%0D%20%20%20%20%22%20Return%20true%20if%20the%20receiver%20is%20equal%20to%20anObject.%20%22%0D%0D%09%3Cprimitive%3A%27primEquals%27%20module%3A%27SKString%27%3E%0D%09%5Efalse.%20"));
smalltalk.bind(smalltalk.String, unescape("size"), "size", function String__size(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKString.primSize(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "accessing", unescape("size%0D%09%22%20Return%20the%20size%20of%20the%20receiver.%20%22%0D%0D%09%3Cprimitive%3A%20%27primSize%27%20module%3A%20%27SKString%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.String, unescape("at%3A"), "at_", function String__at_(anIndex){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKString.primAt(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "accessing", unescape("at%3A%20anIndex%0D%09%22%20Return%20the%20receiver%20at%20anIndex.%20%22%0D%0D%09%3Cprimitive%3A%20%27primAt%27%20module%3A%20%27SKString%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.String, unescape("at%3Aput%3A"), "at_put_", function String__at_put_(anIndex,anObject){
const self = this; return self.errorReadOnly();
}
, "accessing", unescape("at%3A%20anIndex%20put%3A%20anObject%0D%09%22%20Set%20the%20receiver%20at%20anIndex.%20%22%0D%0D%09%5Eself%20errorReadOnly"));
smalltalk.bind(smalltalk.String, unescape("at%3AifAbsent%3A"), "at_ifAbsent_", function String__at_ifAbsent_(anIndex,aBlock){
const self = this; return (function(){var $1$; $1$ = self.at_(anIndex); if (nil.isNil_($1$)) { return aBlock.value() } else { return $1$; }})();
}
, "accessing", unescape("at%3A%20anIndex%20ifAbsent%3A%20aBlock%0D%09%22%20Return%20the%20receiver%20at%20anIndex%20position%20or%20the%20result%20of%20evaluating%20aBlock.%20%22%0D%0D%09%5E%28self%20at%3A%20anIndex%29%20ifNil%3A%20aBlock"));
smalltalk.bind(smalltalk.String, unescape("do%3A"), "do_", function String__do_(aBlock){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKString.primDo(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "enumerating", unescape("do%3A%20aBlock%0D%09%22%20Evaluate%20aBlock%20with%20the%20contents%20of%20the%20receiver.%20%22%0D%0D%09%3Cprimitive%3A%27primDo%27%20module%3A%27SKString%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.String, unescape("detect%3AifNone%3A"), "detect_ifNone_", function String__detect_ifNone_(aBlock,anotherBlock){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKString.primDetectIfNone(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "enumerating", unescape("detect%3A%20aBlock%20ifNone%3A%20anotherBlock%0D%09%22%20Return%20the%20object%20in%20the%20receiver%20that%20return%20true%20when%20evaluated%20with%20aBlock%20or%20the%20result%20of%20evaluating%20anotherBlock.%20%22%0D%0D%09%3Cprimitive%3A%27primDetectIfNone%27%20module%3A%27SKString%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.String, unescape("includes%3A"), "includes_", function String__includes_(anObject){
const self = this; return (self.indexOf_(anObject))._gt((0));
}
, "testing", unescape("includes%3A%20anObject%0D%09%22%20Return%20true%20if%20anObject%20is%20in%20receiver%27s%20contents.%20%22%0D%0D%09%5E%28self%20indexOf%3A%20anObject%29%20%3E%200"));
smalltalk.bind(smalltalk.String, unescape("withIndexDo%3A"), "withIndexDo_", function String__withIndexDo_(aBlock){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKString.primWithIndexDo(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "enumerating", unescape("withIndexDo%3A%20aBlock%0D%09%22%20Evaluate%20aBlock%20with%20all%20the%20index%20positions%20in%20the%20receiver.%20%22%0D%0D%09%3Cprimitive%3A%20%27primWithIndexDo%27%20module%3A%20%27SKString%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.String, unescape("copyWithout%3A"), "copyWithout_", function String__copyWithout_(anObject){
const self = this; return self.replace_with_(anObject,"");
}
, "copying", unescape("copyWithout%3A%20anObject%0D%09%22%20Return%20a%20copy%20of%20the%20receiver%20excluding%20anObject%2C%20if%20any.%20%22%0D%0D%09%5Eself%20replace%3A%20anObject%20with%3A%20%27%27"));
smalltalk.bind(smalltalk.String, unescape("asSymbol"), "asSymbol", function String__asSymbol(){
const self = this; return self;
}
, "conversion", unescape("asSymbol%0D%09%22%20Return%20a%20symbol%20with%20the%20same%20characters%20as%20the%20receiver.%20%22%0D%0D%09%5Eself%20%22we%20do%20not%20discriminate%20singular%20strings%22"));
smalltalk.bind(smalltalk.String, unescape("argumentCount"), "argumentCount", function String__argumentCount(){
const self = this; if ((self.includes_(":")).valueOf()) {return self.occurrencesOf_(":")};
if ((self.match_(unescape("%5E%5B%5C%7C%5C%26%5C%5C%5C+%5C*%5C/%5C%3D%5C%3E%5C%3C%5C%2C%5C@%5C%25%5C%7E%5C-%5D"))).valueOf()) {return (1)};
return (0);
}
, "evaluating", unescape("argumentCount%0D%09%22%20Return%20the%20number%20of%20arguments%20required%20to%20evaluate%20the%20receiver.%20%22%0D%0D%09%28self%20includes%3A%20%27%3A%27%29%0D%09%09ifTrue%3A%5B%5E%28self%20occurrencesOf%3A%20%27%3A%27%29%5D.%0D%09%28self%20match%3A%20%27%5E%5B%5C%7C%5C%26%5C%5C%5C+%5C*%5C/%5C%3D%5C%3E%5C%3C%5C%2C%5C@%5C%25%5C%7E%5C-%5D%27%29%20%0D%09%09ifTrue%3A%20%5B%20%5E1%20%5D.%0D%09%5E0%20"));
smalltalk.bind(smalltalk.String, unescape("isLiteral"), "isLiteral", function String__isLiteral(){
const self = this; return (nil.isNil_((smalltalk.RegularExpression.fromString_(unescape("%5B%5Ea-zA-Z0-9_%3A%5D"))).exec_(self)));
}
, "testing", unescape("isLiteral%0D%09%22%20Return%20true%20if%20the%20receiver%20can%20be%20output%20using%20literal%20notation.%20%22%0D%0D%09%5E%28%28RegularExpression%20fromString%3A%20%27%5B%5Ea-zA-Z0-9_%3A%5D%27%29%20exec%3A%20self%29%20isNil"));
smalltalk.bind(smalltalk.String, unescape("asLiteral"), "asLiteral", function String__asLiteral(){
const self = this; if ((self.isLiteral()).valueOf()) {return unescape("%23")._comma(self)} else {return self.printString()};
}
, "converting", unescape("asLiteral%0D%09%22%20Return%20the%20receiver%20in%20literal%20notation.%20%22%0D%0D%09%5Eself%20isLiteral%20ifTrue%3A%20%5B%20%24%23%20%2Cself%20%5D%20ifFalse%3A%20%5B%20self%20printString%20%5D"));
smalltalk.bind(smalltalk.Object, unescape("asLiteral"), "asLiteral", function Object__asLiteral(){
const self = this; return self.printString();
}
, "converting", unescape("asLiteral%0D%09%22%20Return%20the%20receiver%20in%20literal%20notation.%20%22%0D%0D%09%5Eself%20printString"));
smalltalk.bind(smalltalk.String, unescape("primMatch%3A"), "primMatch_", function String__primMatch_(aString){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKString.primMatch(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "converting", unescape("primMatch%3A%20aString%0D%09%22%20Return%20the%20list%20of%20matches%20in%20the%20receiver%22%0D%0D%09%3Cprimitive%3A%20%27primMatch%27%20module%3A%20%27SKString%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.String, unescape("occurrencesOf%3A"), "occurrencesOf_", function String__occurrencesOf_(aString){
var result = nil;
var index = nil;
const self = this; if ((aString.isString()).not()) {result=self.primMatch_(aString);
if (((nil.isNil_(result))).valueOf()) {return (0)};
return (function(){var $1$; $1$ = result["length"]; return nil.isNil_($1$) ? nil : $1$})()};
if (((aString.size())._eq((1))).valueOf()) {result=self.primMatch_((smalltalk.RegularExpression.fromString_flag_(((unescape("%5B")._comma(aString))._comma(unescape("%5D"))),"g")));
if (((nil.isNil_(result))).valueOf()) {return (0)};
return (function(){var $2$; $2$ = result["length"]; return nil.isNil_($2$) ? nil : $2$})()};
result=(0);
index=(0);
while(((function String__(){
index=self.indexOf_startingAt_(aString,(index._plus((1))));
return index._gt((1));
}
)()).valueOf()){result=result._plus((1))};;
return result;
}
, "testing", unescape("occurrencesOf%3A%20aString%0D%09%22%20Return%20the%20times%20aString%20can%20be%20found%20in%20the%20receiver.%20%22%0D%0D%09%7C%20result%20index%20%7C%0D%09aString%20isString%20ifFalse%3A%20%5B%0D%09%09result%20%3A%3D%20self%20primMatch%3A%20aString.%0D%09%09result%20isNil%20ifTrue%3A%20%5B%20%5E0%20%5D.%0D%09%09%5Eresult%20basicAt%3A%20%27length%27%0D%09%5D.%0D%09aString%20size%20%3D%201%20ifTrue%3A%20%5B%0D%09%09result%20%3A%3D%20self%20primMatch%3A%20%28RegularExpression%0D%09%09%09%09fromString%3A%20%27%5B%27%2CaString%2C%27%5D%27%0D%09%09%09%09flag%3A%20%27g%27%29.%0D%09%09result%20isNil%20ifTrue%3A%20%5B%20%5E0%20%5D.%0D%09%09%5Eresult%20basicAt%3A%20%27length%27%0D%09%5D.%0D%09result%20%3A%3D%200.%20index%20%3A%3D%200.%0D%09%5B%09index%20%3A%3D%20self%20indexOf%3A%20aString%20startingAt%3A%20index%20+%201.%0D%09%09index%20%3E%201%20%5D%20whileTrue%3A%20%5B%20result%20%3A%3D%20result%20+%201%20%5D.%0D%09%5Eresult"));
smalltalk.bind(smalltalk.String, unescape("startsWith%3A"), "startsWith_", function String__startsWith_(aString){
const self = this; return self.beginsWith_(aString);
}
, "testing", unescape("startsWith%3A%20aString%0D%09%22%20Returns%20true%20if%20the%20receiver%20begins%20with%20the%20characters%20of%20aString.%20%22%0D%0D%09%5Eself%20beginsWith%3A%20aString"));
smalltalk.bind(smalltalk.String, unescape("escaped"), "escaped", function String__escaped(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKString.primEscaped(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "converting", unescape("escaped%0D%09%22%20Return%20the%20receiver%20with%20escape%20codes.%20%22%0D%0D%09%3Cprimitive%3A%20%27primEscaped%27%20module%3A%20%27SKString%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.String, unescape("unescaped"), "unescaped", function String__unescaped(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKString.primUnescaped(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "converting", unescape("unescaped%0D%09%22%20Return%20the%20receiver%20from%20escape%20codes.%20%22%0D%0D%09%3Cprimitive%3A%20%27primUnescaped%27%20module%3A%20%27SKString%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.String, unescape("escapedCode"), "escapedCode", function String__escapedCode(){
var escaped = nil;
const self = this; escaped=self.escaped();
if ((escaped._eq(self)).valueOf()) {return (unescape("%22")._comma(escaped))._comma(unescape("%22"))};
return (unescape("unescape%28%22")._comma(escaped))._comma(unescape("%22%29"));
}
, "converting", unescape("escapedCode%0D%09%22%20Return%20the%20code%20to%20reproduce%20receiver%20from%20%28javascript%29%20code.%20%22%0D%0D%09%7C%20escaped%20%7C%0D%09escaped%20%3A%3D%20self%20escaped.%0D%09escaped%20%3D%20self%20ifTrue%3A%20%5B%20%5E%24%22%20%2Cescaped%20%2C%24%22%20%5D.%0D%09%5E%27unescape%28%22%27%20%2Cescaped%20%2C%27%22%29%27"));
smalltalk.bind(smalltalk.String, unescape("asEncodedURI"), "asEncodedURI", function String__asEncodedURI(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKString.primURIEncode(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "converting", unescape("asEncodedURI%0D%09%22%20Return%20the%20receiver%20encoded%20as%20an%20URI%20component.%0D%09Encodes%20special%20characters%20and%20it%20encodes%20the%20following%20characters%3A%20%2C%20/%20%3F%20%3A%20@%20%26%20%3D%20+%20%24%20%23%22%0D%0D%09%3Cprimitive%3A%20%27primURIEncode%27%20module%3A%20%27SKString%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.String, unescape("asDecodedURI"), "asDecodedURI", function String__asDecodedURI(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKString.primURIDecode(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "converting", unescape("asDecodedURI%0D%09%22%20Return%20the%20receiver%20decoded%20as%20an%20URI%20component.%20%22%0D%0D%09%3Cprimitive%3A%20%27primURIDecode%27%20module%3A%20%27SKString%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.String, unescape("add%3A"), "add_", function String__add_(anObject){
const self = this; return self.errorReadOnly();
}
, "adding", unescape("add%3A%20anObject%0D%09%22%20Add%20anObject%20to%20the%20receiver.%20%22%0D%0D%09%5Eself%20errorReadOnly"));
smalltalk.bind(smalltalk.Object, unescape("--%3E"), "_minus_minus_gt", function Object___minus_minus_gt(anObject){
const self = this; return smalltalk.Association.key_value_((self.asArrayOfSubstringsSeparatedBy_(".")),anObject);
}
, "converting", unescape("--%3E%20anObject%0D%09%22%20Return%20a%20far-association%20of%20the%20receiver%20to%20anObject.%20%22%0D%0D%09%5EAssociation%20key%3A%20%28self%20asArrayOfSubstringsSeparatedBy%3A%20%24.%29%20value%3A%20anObject"));
smalltalk.bind(smalltalk.String, unescape("%2C"), "_comma", function String___comma(aString){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKString.primConcat(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "copying", unescape("%2C%20aString%0D%09%22%20Return%20a%20copy%20of%20the%20receiver%20with%20aString%20appended.%20%22%0D%0D%09%3Cprimitive%3A%27primConcat%27%20module%3A%27SKString%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.String, unescape("+"), "_plus", function String___plus(aString){
const self = this; return self._comma(aString);
}
, "copying", unescape("+%20aString%0D%0D%09%5Eself%2C%20aString"));
smalltalk.bind(smalltalk.String, unescape("copyWith%3A"), "copyWith_", function String__copyWith_(anObject){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKString.primCopyWith(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "copying", unescape("copyWith%3A%20anObject%0D%09%22%20Return%20a%20copy%20of%20the%20receiver%20with%20anObject.%20%22%0D%0D%09%3Cprimitive%3A%20%27primCopyWith%27%20module%3A%20%27SKString%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.String, unescape("copyFrom%3Ato%3A"), "copyFrom_to_", function String__copyFrom_to_(anIndex,anotherIndex){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKString.primCopyFromTo(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "copying", unescape("copyFrom%3A%20anIndex%20to%3A%20anotherIndex%0D%09%22%20Return%20the%20receiver%20between%20limits.%20%22%0D%0D%09%3Cprimitive%3A%27primCopyFromTo%27%20module%3A%27SKString%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.String, unescape("shallowCopy"), "shallowCopy", function String__shallowCopy(){
const self = this; return self;
}
, "copying", unescape("shallowCopy%0D%09%22%20Return%20a%20shallow%20copy%20of%20the%20receiver.%20%22%0D%0D%09%5Eself"));
smalltalk.bind(smalltalk.String, unescape("deepCopy"), "deepCopy", function String__deepCopy(){
const self = this; return self;
}
, "copying", unescape("deepCopy%0D%09%22%20Return%20a%20deep%20copy%20of%20the%20receiver.%20%22%0D%0D%09%5Eself"));
smalltalk.bind(smalltalk.String, unescape("reversed"), "reversed", function String__reversed(){
var result = nil;
const self = this; result="";
self.reverseDo_((function String__(c){
return result=result._comma(c);
}
));
return result;
}
, "copying", unescape("reversed%0D%09%22%20Return%20a%20string%20with%20the%20contents%20of%20the%20receiver%20in%20reverse%20order.%20%22%0D%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%20%27%27.%0D%09self%20reverseDo%3A%20%5B%3Ac%7C%20result%20%3A%3D%20result%20%2C%20c%20%5D.%0D%09%5Eresult"));
smalltalk.bind(smalltalk.String, unescape("indexOf%3A"), "indexOf_", function String__indexOf_(aString){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKString.primIndexOf(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "accessing", unescape("indexOf%3A%20aString%0D%09%22%20Return%20the%20position%20of%20first%20occurrence%20of%20aString%20%28or%200%20if%20not%20present%29.%20%22%0D%0D%09%3Cprimitive%3A%20%27primIndexOf%27%20module%3A%20%27SKString%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.String, unescape("indexOf%3AifAbsent%3A"), "indexOf_ifAbsent_", function String__indexOf_ifAbsent_(aString,aBlock){
var result = nil;
const self = this; result=self.indexOf_(aString);
if ((result._eq((0))).valueOf()) {return aBlock.value()} else {return result};
}
, "accessing", unescape("indexOf%3A%20aString%20ifAbsent%3A%20aBlock%0D%09%22%20Return%20the%20position%20of%20first%20occurrence%20of%20aString%20%28or%20the%20result%20of%20evaluating%20aBlock%29.%20%22%0D%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%20self%20indexOf%3A%20aString.%0D%09%5Eresult%20%3D%200%20ifTrue%3A%20aBlock%20ifFalse%3A%20%5B%20result%20%5D"));
smalltalk.bind(smalltalk.String, unescape("indexOf%3AstartingAt%3A"), "indexOf_startingAt_", function String__indexOf_startingAt_(aString,position){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKString.primIndexOfStartingAt(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "accessing", unescape("indexOf%3A%20aString%20startingAt%3A%20position%0D%09%22%20Return%20the%20position%20of%20first%20occurrence%20of%20aString%20after%20position%20%28or%200%20if%20not%20present%29.%20%22%0D%0D%09%3Cprimitive%3A%20%27primIndexOfStartingAt%27%20module%3A%20%27SKString%27%3E%0D%09%5Eself%20primitiveFailed."));
smalltalk.bind(smalltalk.String, unescape("lastIndexOf%3A"), "lastIndexOf_", function String__lastIndexOf_(aString){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKString.primLastIndexOf(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "accessing", unescape("lastIndexOf%3A%20aString%0D%09%22%20Return%20the%20position%20of%20last%20occurrence%20of%20aString%20%28or%200%20if%20not%20present%29.%20%22%0D%0D%09%3Cprimitive%3A%20%27primLastIndexOf%27%20module%3A%20%27SKString%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.String, unescape("lastIndexOf%3AifAbsent%3A"), "lastIndexOf_ifAbsent_", function String__lastIndexOf_ifAbsent_(aString,aBlock){
var result = nil;
const self = this; result=self.lastIndexOf_(aString);
if ((result._eq((0))).valueOf()) {return aBlock.value()} else {return result};
}
, "accessing", unescape("lastIndexOf%3A%20aString%20ifAbsent%3A%20aBlock%0D%09%22%20Return%20the%20position%20of%20last%20occurrence%20of%20aString%20%28or%20the%20result%20of%20evaluating%20aBlock%29.%20%22%0D%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%20self%20lastIndexOf%3A%20aString.%0D%09%5Eresult%20%3D%200%20ifTrue%3A%20aBlock%20ifFalse%3A%20%5B%20result%20%5D"));
smalltalk.bind(smalltalk.String, unescape("lastIndexOf%3AstartingAt%3A"), "lastIndexOf_startingAt_", function String__lastIndexOf_startingAt_(aString,position){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKString.primLastIndexOfStartingAt(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "accessing", unescape("lastIndexOf%3A%20aString%20startingAt%3A%20position%0D%09%22%20Return%20the%20position%20of%20last%20occurrence%20of%20aString%20before%20position%20%28or%200%20if%20not%20present%29.%20%22%0D%0D%09%3Cprimitive%3A%20%27primLastIndexOfStartingAt%27%20module%3A%20%27SKString%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.String, unescape("upTo%3AstartingAt%3A"), "upTo_startingAt_", function String__upTo_startingAt_(aString,position){
var index = nil;
const self = this; index=self.indexOf_startingAt_(aString,position);
index=(index._eq((0))).ifTrue_ifFalse_((function String__(){
return self.size();
}
),(function String__(){
return index._minus((1));
}
));
return self.copyFrom_to_(position,index);
}
, "accessing", unescape("upTo%3A%20aString%20startingAt%3A%20position%0D%09%22%20Return%20the%20receiver%20upto%20first%20occurrence%20of%20aString%20after%20position.%20%22%0D%0D%09%7C%20index%20%7C%0D%09index%20%3A%3D%20self%20indexOf%3A%20aString%20startingAt%3A%20position.%0D%09index%20%3A%3D%20index%20%3D%200%20ifTrue%3A%20%5B%20self%20size%20%5D%20ifFalse%3A%20%5B%20index%20-%201%20%5D.%0D%09%5Eself%20copyFrom%3A%20position%20to%3A%20index"));
smalltalk.bind(smalltalk.String, unescape("upTo%3A"), "upTo_", function String__upTo_(aCharacter){
const self = this; return self.upTo_startingAt_(aCharacter,(1));
}
, "accessing", unescape("upTo%3A%20aCharacter%0D%09%22%20Return%20the%20receiver%20upto%20first%20occurrence%20of%20aCharacter.%20%22%0D%0D%09%5Eself%20upTo%3A%20aCharacter%20startingAt%3A%201"));
smalltalk.bind(smalltalk.String, unescape("upToLast%3A"), "upToLast_", function String__upToLast_(aString){
var index = nil;
const self = this; var $early={name:"stReturn"};
try {
index=self.lastIndexOf_ifAbsent_(aString,(function String__(){
$early.result=self; throw ($early);
}
));
return self.copyFrom_to_((1),(index._minus((1))));
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "accessing", unescape("upToLast%3A%20aString%0D%09%22%20Return%20the%20receiver%20upto%20last%20occurrence%20of%20aString.%20%22%0D%0D%09%7C%20index%20%7C%0D%09index%20%3A%3D%20self%20lastIndexOf%3A%20aString%20ifAbsent%3A%20%5B%20%5Eself%20%5D.%0D%09%5Eself%20copyFrom%3A%201%20to%3A%20index%20-%201"));
smalltalk.bind(smalltalk.String, unescape("fromLast%3A"), "fromLast_", function String__fromLast_(aString){
var index = nil;
const self = this; var $early={name:"stReturn"};
try {
index=self.lastIndexOf_ifAbsent_(aString,(function String__(){
$early.result=self; throw ($early);
}
));
return self.copyFrom_to_((index._plus((aString.size()))),(self.size()));
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "accessing", unescape("fromLast%3A%20aString%0D%09%22%20Return%20the%20receiver%20contents%20from%20last%20occurrence%20of%20aString.%20%22%0D%0D%09%7C%20index%20%7C%0D%09index%20%3A%3D%20self%20lastIndexOf%3A%20aString%20ifAbsent%3A%20%5B%20%5Eself%20%5D.%0D%09%5Eself%20copyFrom%3A%20index%20+%20aString%20size%20to%3A%20self%20size"));
smalltalk.bind(smalltalk.String.$klass, unescape("reservedWords"), "reservedWords", function String_class__reservedWords(){
const self = this; return ["abstract", "as", "boolean", "break", "byte", "case", "catch", "char", "class", "continue", "const", "debugger", "default", "delete", "do", "double", "else", "enum", "export", "extends", false, "final", "finally", "float", "for", "function", "goto", "if", "implements", "import", "in", "instanceof", "int", "interface", "is", "long", "namespace", "native", "new", "null", "package", "private", "protected", "public", "return", "short", "static", "super", "switch", "synchronized", "this", "throw", "throws", "transient", true, "try", "typeof", "use", "var", "void", "volatile", "while", "with"];
}
, "private", unescape("reservedWords%0D%09%22%20Private%20-%20Return%20the%20reserved%20names%20of%20javascript%20language.%20%22%0D%0D%09%5E%23%28%0D%09abstract%09as%09%09boolean%09%09break%09%09byte%0D%09case%09%09catch%09%09char%09%09class%09%09continue%0D%09const%09%09debugger%09default%09%09delete%09%09do%0D%09double%09%09else%09%09enum%09%09export%09%09extends%0D%09false%09%09final%09%09finally%09%09float%09%09for%0D%09function%09goto%09%09if%09%09implements%09import%0D%09in%09%09instanceof%09int%09%09interface%09is%0D%09long%09%09namespace%09native%09%09new%09%09null%0D%09package%09%09private%09%09protected%09public%09%09return%0D%09short%09%09static%09%09super%09%09switch%09%09synchronized%0D%09this%09%09throw%09%09throws%09%09transient%09true%0D%09try%09%09typeof%09%09use%09%09var%09%09void%0D%09volatile%09while%09%09with%0D%09%29"));
smalltalk.bind(smalltalk.String, unescape("asJavascriptName"), "asJavascriptName", function String__asJavascriptName(){
const self = this; if (((self.first())._eq("_")).valueOf()) {return self};
if (((smalltalk.String.reservedWords()).includes_(self)).valueOf()) {return "$$"._comma(self)};
return self;
}
, "converting", unescape("asJavascriptName%0D%09%22%20Private%20-%20Return%20the%20receiver%20as%20a%20valid%20javascript%20name.%20%22%0D%0D%09self%20first%20%3D%20%24_%20ifTrue%3A%20%5B%20%5Eself%20%5D.%0D%09%28String%20reservedWords%20includes%3A%20self%29%20ifTrue%3A%20%5B%20%5E%27%24%24%27%2Cself%20%5D.%0D%09%5Eself"));
smalltalk.bind(smalltalk.String, unescape("asSelector"), "asSelector", function String__asSelector(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKString.primAsSelector(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "converting", unescape("asSelector%0D%09%22Private%20-%20Return%20the%20receiver%20as%20a%20valid%20javascript%20selector.%20%22%0D%0D%09%3Cprimitive%3A%20%27primAsSelector%27%20module%3A%20%27SKString%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.String, unescape("asJavascript"), "asJavascript", function String__asJavascript(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKString.primAsJavascript(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "converting", unescape("asJavascript%0D%09%22%20Return%20the%20javascript%20representation%20of%20the%20receiver.%20%22%0D%0D%09%3Cprimitive%3A%27primAsJavascript%27%20module%3A%20%27SKString%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.String, unescape("replace%3Awith%3A"), "replace_with_", function String__replace_with_(aString,anotherString){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKString.primReplaceWith(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "regular expressions", unescape("replace%3A%20aString%20with%3A%20anotherString%0D%09%22%20Return%20the%20result%20of%20replacement%20of%20aString%20with%20anotherString%20in%20the%20receiver.%20%22%0D%0D%09%3Cprimitive%3A%27primReplaceWith%27%20module%3A%27SKString%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.String, unescape("replaceAll%3Awith%3A"), "replaceAll_with_", function String__replaceAll_with_(aString,otherString){
const self = this; return self.replace_with_(aString,otherString);
}
, "regular expressions", unescape("replaceAll%3A%20aString%20with%3A%20otherString%0D%09%22%20Return%20the%20result%20of%20replacement%20of%20aString%20with%20anotherString%20in%20the%20receiver.%20%22%0D%0D%09%5Eself%0D%09%09replace%3A%20aString%0D%09%09with%3A%20otherString"));
smalltalk.bind(smalltalk.String, unescape("replaceRegexp%3Awith%3A"), "replaceRegexp_with_", function String__replaceRegexp_with_(aRegexp,aString){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKString.primReplaceRegExp(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; var $early={name:"stReturn"};
try {
(aRegexp.isRegExp()).ifFalse_ifFalse_((((function String__(){
$early.result=self.error_("First argument must be a Regular Expression"); throw ($early);
}
).aString()).isString()),(((function String__(){
$early.result=self.error_("Seconds argument must be a String"); throw ($early);
}
).self()).primitiveFailed()));
return self;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "regular expressions", unescape("replaceRegexp%3A%20aRegexp%20with%3A%20aString%0D%09%22%20Return%20the%20result%20of%20replacement%20of%20aRegexp%20with%20aString%20in%20the%20receiver.%20%22%0D%0D%09%3Cprimitive%3A%27primReplaceRegExp%27%20module%3A%20%27SKString%27%3E%0D%09aRegexp%20isRegExp%0D%09%09ifFalse%3A%5B%5Eself%20error%3A%20%27First%20argument%20must%20be%20a%20Regular%20Expression%27%5D%0D%09aString%20isString%0D%09%09ifFalse%3A%5B%5Eself%20error%3A%20%27Seconds%20argument%20must%20be%20a%20String%27%5D%0D%09self%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.String, unescape("asStream"), "asStream", function String__asStream(){
const self = this; return self.stream();
}
, "coverting", unescape("asStream%0D%09%22Answer%20the%20receiver%20as%20a%20Stream.%22%0D%0D%09%5Eself%20stream"));
smalltalk.bind(smalltalk.String, unescape("tokenize%3A"), "tokenize_", function String__tokenize_(aString){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKString.primTokenize(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "converting", unescape("tokenize%3A%20aString%0D%09%22%20Return%20the%20split%20tokenization%20of%20the%20receiver.%20%22%0D%0D%09%3Cprimitive%3A%27primTokenize%27%20module%3A%20%27SKString%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.String, unescape("asArrayOfSubstrings"), "asArrayOfSubstrings", function String__asArrayOfSubstrings(){
var result = nil;
var start = nil;
var i = nil;
const self = this; result=smalltalk.Array.$$new();
i=(1);
self.do_((function String__(c){
if (((nil.isNil_(start))).valueOf()) {if ((c.isSeparator()).not()) {start=i}} else {if ((c.isSeparator()).valueOf()) {result.add_((self.copyFrom_to_(start,(i._minus((1))))));
start=nil}};
return i=i._plus((1));
}
));
if (((nil.isNil_(start)===false)).valueOf()) {result.add_((self.copyFrom_to_(start,(self.size()))))};
return result;
}
, "converting", unescape("asArrayOfSubstrings%0D%09%22%20Return%20an%20array%20of%20substrings%20from%20the%20receiver.%0D%09The%20receiver%20is%20divided%20into%20substrings%20by%20one%20or%20more%20occurrences%20of%20separators.%0D%09%22%0D%0D%09%7C%20result%20start%20i%20%7C%0D%09result%20%3A%3D%20Array%20new.%20i%20%3A%3D%201.%0D%09self%20do%3A%20%5B%3Ac%7C%0D%09%09start%20isNil%20ifTrue%3A%20%5B%20%22in%20separator%22%0D%09%09%09c%20isSeparator%20ifFalse%3A%20%5B%20%22start%20of%20substring%22%0D%09%09%09%09start%20%3A%3D%20i.%0D%09%09%09%5D%0D%09%09%5D%20ifFalse%3A%20%5B%20%22in%20word%22%0D%09%09%09c%20isSeparator%20ifTrue%3A%20%5B%20%22end%20of%20substring%22%0D%09%09%09%09result%20add%3A%20%28self%20copyFrom%3A%20start%20to%3A%20i%20-%201%29.%0D%09%09%09%09start%20%3A%3D%20nil.%0D%09%09%09%5D.%0D%09%09%5D.%0D%09%09i%20%3A%3D%20i%20+%201.%0D%09%5D.%0D%09start%20notNil%20ifTrue%3A%20%5B%0D%09%09result%20add%3A%20%28self%20copyFrom%3A%20start%20to%3A%20self%20size%29%0D%09%5D.%0D%09%5Eresult"));
smalltalk.bind(smalltalk.String, unescape("asArrayOfSubstringsSeparatedBy%3A"), "asArrayOfSubstringsSeparatedBy_", function String__asArrayOfSubstringsSeparatedBy_(aCharacter){
const self = this; return self.tokenize_(aCharacter);
}
, "converting", unescape("asArrayOfSubstringsSeparatedBy%3A%20aCharacter%0D%09%22%20Return%20an%20array%20of%20substrings%20from%20the%20receiver.%0D%09The%20receiver%20is%20divided%20into%20substrings%20by%20one%20or%20more%20occurrences%20of%20aCharacter.%0D%09%22%0D%0D%09%5Eself%20tokenize%3A%20aCharacter"));
smalltalk.bind(smalltalk.String, unescape("match%3A"), "match_", function String__match_(aString){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKString.primMatchRegExp(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "regular expressions", unescape("match%3A%20aString%0D%09%22%20Return%20the%20whether%20a%20string%20matches.%20%22%0D%0D%09%3Cprimitive%3A%20%27primMatchRegExp%27%20module%3A%20%27SKString%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.String, unescape("asString"), "asString", function String__asString(){
const self = this; return self;
}
, "converting", unescape("asString%0D%09%22%20Return%20the%20text%20representation%20of%20the%20receiver.%20%22%0D%0D%09%5Eself"));
smalltalk.bind(smalltalk.String, unescape("between%3Aand%3A"), "between_and_", function String__between_and_(min,max){
const self = this; return (min._lt_eq(self)).and_((function String__(){
return self._lt_eq(max);
}
));
}
, "testing", unescape("between%3A%20min%20and%3A%20max%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20greater%20than%20or%20equal%20to%20min%20and%20less%20than%20or%20equal%20to%20max.%20%22%0D%0D%09%5Emin%20%3C%3D%20self%20and%3A%20%5B%20self%20%3C%3D%20max%20%5D"));
smalltalk.bind(smalltalk.String, unescape("isLetter"), "isLetter", function String__isLetter(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKString.primIsLetter(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "testing", unescape("isLetter%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20a%20one%20character%20letter.%20%22%0D%0D%09%3Cprimitive%3A%20%27primIsLetter%27%20module%3A%20%27SKString%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.String, unescape("isDigit"), "isDigit", function String__isDigit(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKString.primIsDigit(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "testing", unescape("isDigit%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20one%20character%20numeric%20digit.%20%22%0D%0D%09%3Cprimitive%3A%20%27primIsDigit%27%20module%3A%20%27SKString%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.String, unescape("isAlphaNumeric"), "isAlphaNumeric", function String__isAlphaNumeric(){
const self = this; return (self.isDigit()).or_((function String__(){
return self.isLetter();
}
));
}
, "testing", unescape("isAlphaNumeric%0D%09%22Answer%20true%20if%20the%20receiver%20is%20an%20alphanumeric%20character.%20%22%0D%0D%09%5Eself%20isDigit%20or%3A%20%5Bself%20isLetter%5D"));
smalltalk.bind(smalltalk.String, unescape("isUpperCase"), "isUpperCase", function String__isUpperCase(){
const self = this; return (self.match_(unescape("%5B%5EA-Z%5D"))).not();
}
, "testing", unescape("isUpperCase%0D%09%22%20Return%20true%20if%20all%20the%20receiver%20characters%20are%20uppercase.%20%22%0D%0D%09%5E%28self%20match%3A%20%27%5B%5EA-Z%5D%27%29%20not"));
smalltalk.bind(smalltalk.String, unescape("isLowerCase"), "isLowerCase", function String__isLowerCase(){
const self = this; return (self.match_(unescape("%5B%5Ea-z%5D"))).not();
}
, "testing", unescape("isLowerCase%0D%09%22%20Return%20true%20if%20all%20the%20receiver%20characters%20are%20lowercase.%20%22%0D%0D%09%5E%28self%20match%3A%20%27%5B%5Ea-z%5D%27%29%20not"));
smalltalk.bind(smalltalk.String, unescape("isUppercase"), "isUppercase", function String__isUppercase(){
const self = this; return self.isUpperCase();
}
, "testing", unescape("isUppercase%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20one%20character%20uppercase.%20%22%0D%0D%09%5Eself%20isUpperCase"));
smalltalk.bind(smalltalk.String, unescape("isLowercase"), "isLowercase", function String__isLowercase(){
const self = this; return self.isLowerCase();
}
, "testing", unescape("isLowercase%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20one%20character%20lowercase.%20%22%0D%0D%09%5Eself%20isLowerCase"));
smalltalk.bind(smalltalk.String, unescape("includesSubstring%3A"), "includesSubstring_", function String__includesSubstring_(aString){
const self = this; return (self.indexOf_(aString))._gt((0));
}
, "testing", unescape("includesSubstring%3A%20aString%0D%0D%09%5E%28self%20indexOf%3A%20aString%29%20%3E%200"));
smalltalk.bind(smalltalk.String, unescape("asUppercase"), "asUppercase", function String__asUppercase(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKString.primAsUppercase(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "converting", unescape("asUppercase%0D%09%22%20Return%20a%20copy%20of%20the%20receiver%20converted%20to%20uppercase.%20%22%0D%0D%09%3Cprimitive%3A%27primAsUppercase%27%20module%3A%27SKString%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.String, unescape("asUpperCase"), "asUpperCase", function String__asUpperCase(){
const self = this; return self.asUppercase();
}
, "converting", unescape("asUpperCase%0D%09%22%20Return%20a%20copy%20of%20the%20receiver%20converted%20to%20uppercase.%20%22%0D%0D%09%5Eself%20asUppercase"));
smalltalk.bind(smalltalk.String, unescape("asLowercase"), "asLowercase", function String__asLowercase(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKString.primAsLowercase(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "converting", unescape("asLowercase%0D%09%22%20Return%20a%20copy%20of%20the%20receiver%20converted%20to%20lowercase.%20%22%0D%0D%09%3Cprimitive%3A%20%27primAsLowercase%27%20module%3A%20%27SKString%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.String, unescape("asLowerCase"), "asLowerCase", function String__asLowerCase(){
const self = this; return self.asLowercase();
}
, "converting", unescape("asLowerCase%0D%09%22%20Return%20a%20copy%20of%20the%20receiver%20converted%20to%20lowercase.%20%22%0D%0D%09%5Eself%20asLowercase"));
smalltalk.bind(smalltalk.String, unescape("asSmalltalkName%3A"), "asSmalltalkName_", function String__asSmalltalkName_(upCase){
var up = nil;
var result = nil;
const self = this; if (((upCase.not()).and_((function String__(){
return (self.match_(unescape("%5Ba-z%5D"))).not();
}
))).valueOf()) {return (self.asLowercase()).asSmalltalkName_(upCase)};
up=upCase;
result=self.inject_into_("",(function String__(resultString,each){
if ((unescape("_%3A.%26%25%24%3F").includes_(each)).valueOf()) {up=true;
return resultString} else {return resultString._comma((up.ifTrue_ifFalse_((function String__(){
up=false;
return each.asUppercase();
}
),(function String__(){
return each;
}
))))};
}
));
if ((result.isEmpty()).valueOf()) {return "_"};
if ((upCase).valueOf()) {if (((result.first()).isLowercase()).valueOf()) {return ((result.first()).asUppercase())._comma((result.copyFrom_to_((2),(result.size()))))}} else {if (((result.first()).isUppercase()).valueOf()) {return ((result.first()).asLowercase())._comma((result.copyFrom_to_((2),(result.size()))))}};
return result;
}
, "converting", unescape("asSmalltalkName%3A%20upCase%0D%09%22%20Return%20a%20copy%20of%20the%20receiver%20converted%20to%20a%20smalltalk%20global%20name.%20%22%0D%0D%09%7C%20up%20result%20%7C%0D%09%28upCase%20not%20and%3A%20%5B%20%28self%20match%3A%20%27%5Ba-z%5D%27%29%20not%20%5D%29%20ifTrue%3A%20%5B%0D%09%09%5Eself%20asLowercase%20asSmalltalkName%3A%20upCase%0D%09%5D.%0D%09up%20%3A%3D%20upCase.%0D%09result%20%3A%3D%20self%20inject%3A%20%27%27%20into%3A%20%5B%3AresultString%20%3Aeach%7C%0D%09%09%28%27_%3A.%26%25%24%3F%27%20includes%3A%20each%29%20ifTrue%3A%20%5B%20up%20%3A%3D%20true.%20resultString%20%5D%0D%09%09ifFalse%3A%20%5B%20resultString%20%2C%20%28up%0D%09%09%09ifTrue%3A%20%5B%20%20up%20%3A%3D%20false.%20each%20asUppercase%20%5D%0D%09%09%09ifFalse%3A%20%5Beach%5D%29%0D%09%09%5D%0D%09%5D.%0D%09result%20isEmpty%20ifTrue%3A%20%5B%20%5E%24_%20%5D.%0D%09upCase%20ifTrue%3A%20%5B%0D%09%09result%20first%20isLowercase%20ifTrue%3A%20%5B%0D%09%09%09%5Eresult%20first%20asUppercase%20%2C%28result%20copyFrom%3A%202%20to%3A%20result%20size%29%0D%09%09%5D%0D%09%5D%20ifFalse%3A%20%5B%0D%09%09result%20first%20isUppercase%20ifTrue%3A%20%5B%0D%09%09%09%5Eresult%20first%20asLowercase%20%2C%28result%20copyFrom%3A%202%20to%3A%20result%20size%29%0D%09%09%5D%0D%09%5D.%0D%09%5Eresult"));
smalltalk.bind(smalltalk.String, unescape("asGlobalName"), "asGlobalName", function String__asGlobalName(){
const self = this; return self.asSmalltalkName_(true);
}
, "converting", unescape("asGlobalName%0D%09%22%20Return%20a%20copy%20of%20the%20receiver%20converted%20to%20a%20smalltalk%20global%20name.%20%22%0D%0D%09%5Eself%20asSmalltalkName%3A%20true"));
smalltalk.bind(smalltalk.String, unescape("asLocalName"), "asLocalName", function String__asLocalName(){
const self = this; return self.asSmalltalkName_(false);
}
, "converting", unescape("asLocalName%0D%09%22%20Return%20a%20copy%20of%20the%20receiver%20converted%20to%20a%20smalltalk%20local%20name.%20%22%0D%0D%09%5Eself%20asSmalltalkName%3A%20false"));
smalltalk.bind(smalltalk.String, unescape("digitValue"), "digitValue", function String__digitValue(){
const self = this; return (("0123456789ABCDEF".indexOf_(self))._minus((1))).max_(((0)._minus((1))));
}
, "converting", unescape("digitValue%0D%09%22%20Return%20the%20digit%20value%20of%20the%20receiver%20%28or%20-1%29.%20%22%0D%0D%09%5E%28%270123456789ABCDEF%27%20indexOf%3A%20self%29%20-%201%20max%3A%200%20-%201"));
smalltalk.bind(smalltalk.String, unescape("asNumber"), "asNumber", function String__asNumber(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKString.primAsNumber(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; if ((self.includes_("r")).valueOf()) {return smalltalk.Number.readFrom_((self.readStream()))};
return self.primitiveFailed();
}
, "converting", unescape("asNumber%0D%09%22%20Return%20the%20receiver%20as%20a%20Number.%20%22%0D%0D%09%3Cprimitive%3A%20%27primAsNumber%27%20module%3A%20%27SKString%27%3E%0D%09%28self%20includes%3A%20%22%24r%22%27r%27%29%20ifTrue%3A%20%5B%0D%09%09%5ENumber%20readFrom%3A%20self%20readStream%0D%09%5D.%0D%09%5Eself%20primitiveFailed%20"));
smalltalk.bind(smalltalk.String, unescape("errorReadOnly"), "errorReadOnly", function String__errorReadOnly(){
const self = this; return self.error_(((unescape("Strings%20are%20immutable.%20Attempt%20to%20change%20%22")._comma((self.printString())))._comma(unescape("%22"))));
}
, "error", unescape("errorReadOnly%0D%09%22%20Private%20-%20The%20receiver%20is%20read-only%20instance.%20%22%0D%0D%09%5Eself%20error%3A%20%27Strings%20are%20immutable.%20Attempt%20to%20change%20%22%27%2C%20self%20printString%20%2C%20%27%22%27"));
smalltalk.bind(smalltalk.String, unescape("printOn%3A"), "printOn_", function String__printOn_(aStream){
var escapedSelf = nil;
const self = this; escapedSelf=self.replaceAll_with_(unescape("%27"),unescape("%27%27"));
(function String__($1$){
$1$.nextPut_(unescape("%27"));
$1$.nextPutAll_(escapedSelf);
return $1$.nextPut_(unescape("%27"))}
)(aStream);
return self;
}
, "printing", unescape("printOn%3A%20aStream%0D%0D%09%7C%20escapedSelf%20%7C%0D%09escapedSelf%20%3A%3D%20self%20replaceAll%3A%20%27%27%27%27%20with%3A%20%27%27%27%27%27%27.%0D%09aStream%0D%09%09nextPut%3A%20%24%27%3B%0D%09%09nextPutAll%3A%20escapedSelf%3B%0D%09%09nextPut%3A%20%24%27"));
smalltalk.bind(smalltalk.String, unescape("isString"), "isString", function String__isString(){
const self = this; return true;
}
, "testing", unescape("isString%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20a%20String.%20%22%0D%0D%09%5Etrue"));
smalltalk.bind(smalltalk.String, unescape("isBackSlash"), "isBackSlash", function String__isBackSlash(){
const self = this; return self._eq(unescape("%5C"));
}
, "testing", unescape("isBackSlash%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20a%20back-slash%20string.%20%22%0D%0D%09%5Eself%20%3D%20%24%5C%20"));
smalltalk.bind(smalltalk.String, unescape("%3E"), "_gt", function String___gt(aString){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKString.primGreaterThan(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "comparing", unescape("%3E%20aString%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20greater%20than%20aString.%20%22%0D%0D%09%3Cprimitive%3A%20%27primGreaterThan%27%20module%3A%20%27SKString%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.String, unescape("%3C"), "_lt", function String___lt(aString){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKString.primLessThan(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "comparing", unescape("%3C%20aString%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20smaller%20than%20aString.%20%22%0D%0D%09%3Cprimitive%3A%20%27primLessThan%27%20module%3A%20%27SKString%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.String, unescape("%3E%3D"), "_gt_eq", function String___gt_eq(aString){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKString.primGreaterThanEqualTo(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "comparing", unescape("%3E%3D%20aString%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20greater%20than%20or%20equal%20to%20aString.%20%22%0D%0D%09%3Cprimitive%3A%20%27primGreaterThanEqualTo%27%20module%3A%20%27SKString%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.String, unescape("%3C%3D"), "_lt_eq", function String___lt_eq(aString){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKString.primLessThanEqualTo(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "comparing", unescape("%3C%3D%20aString%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20smaller%20than%20or%20equal%20to%20aString.%20%22%0D%0D%09%3Cprimitive%3A%27primLessThanEqualTo%27%20module%3A%27SKString%27%3E%0D%09%5Eself%20primitiveFailed."));
smalltalk.bind(smalltalk.String, unescape("equalsIgnoreCase%3A"), "equalsIgnoreCase_", function String__equalsIgnoreCase_(aString){
const self = this; return (self.asLowercase())._eq((aString.asLowercase()));
}
, "comparing", unescape("equalsIgnoreCase%3A%20aString%0D%0D%09%5Eself%20asLowercase%20%3D%20aString%20asLowercase"));
smalltalk.bind(smalltalk.String, unescape("remove%3AifAbsent%3A"), "remove_ifAbsent_", function String__remove_ifAbsent_(anObject,aBlock){
const self = this; return self.errorReadOnly();
}
, "removing", unescape("remove%3A%20anObject%20ifAbsent%3A%20aBlock%0D%09%22%20Remove%20anObject%20from%20the%20receiver.%20%22%0D%0D%09%5Eself%20errorReadOnly"));
smalltalk.bind(smalltalk.String, unescape("asJSONObject"), "asJSONObject", function String__asJSONObject(){
const self = this; return self._comma("");
}
, "converting", unescape("asJSONObject%0D%09%22%20Return%20the%20mapping%20of%20the%20receiver%20to%20JSON%20structure.%20%22%0D%0D%09%5Eself%20%2C%20%27%27%0D%22Note%3A%09we%20need%20to%20normalize%20result%20to%20do%20not%20destroy%20typeof%20checkings%0D%09Do%20NOT%20modify%20this%20method%20if%20you%20do%20not%20know%20what%20you%20are%20doing.%0D%09If%20you%20remove%20the%20%2C%27%27%20computation%2C%20the%20returned%20object%20will%20return%20%27object%27%20and%20not%20%27string%27%20as%20result%20of%20typeof%20operation.%0D%22"));
smalltalk.bind(smalltalk.Object, unescape("isCharacter"), "isCharacter", function Object__isCharacter(){
const self = this; return false;
}
, "testing", unescape("isCharacter%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20a%20character.%20%22%0D%0D%09%5Efalse"));
smalltalk.bind(smalltalk.String, unescape("isCharacter"), "isCharacter", function String__isCharacter(){
const self = this; return (self.size())._eq((1));
}
, "testing", unescape("isCharacter%0D%09%22%20Characters%20-%20Implemented%20to%20support%20Character%20protocoll%20for%20one-character%20Strings.%20%22%0D%0D%09%5Eself%20size%20%3D%201%20"));
smalltalk.bind(smalltalk.String, unescape("asciiValue"), "asciiValue", function String__asciiValue(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKString.primAsciiValue(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "testing", unescape("asciiValue%0D%09%22%20Characters%20-%20Return%20the%20number%20corresponding%20to%20the%20ASCII%20encoding%20of%20the%20first%20character%20of%20the%20receiver.%20%22%0D%0D%09%3Cprimitive%3A%20%27primAsciiValue%27%20module%3A%20%27SKString%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.String, unescape("isSeparator"), "isSeparator", function String__isSeparator(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKString.primIsSeparator(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "testing", unescape("isSeparator%0D%09%22%20Return%20true%20if%20the%20receiver%20character%20is%20either%20a%20space%2C%20tab%2C%20carriage-return%2C%20line-feed%2C%20form-feed%20character%2C%20or%20double-byte%20space%2C%20else%20answer%20false.%22%0D%0D%09%3Cprimitive%3A%20%27primIsSeparator%27%20module%3A%20%27SKString%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.String, unescape("asAsciiZ"), "asAsciiZ", function String__asAsciiZ(){
const self = this; return self._comma(((self.$klass).zero()));
}
, "converting", unescape("asAsciiZ%0D%09%22%20Return%20the%20receiver%20with%20ascii%20zero%20appended.%20%22%0D%0D%09%5Eself%20%2C%20self%20class%20zero"));
smalltalk.bind(smalltalk.String, unescape("trimFirst%3Alast%3A"), "trimFirst_last_", function String__trimFirst_last_(firstBlock,lastBlock){
var start = nil;
var stop = nil;
const self = this; var $early={name:"stReturn"};
try {
start=(1);
stop=self.size();
while(((function String__(){
if ((start._gt(stop)).valueOf()) {$early.result=smalltalk.String.$$new(); throw ($early)};
return firstBlock.value_((self.at_(start)));
}
)()).valueOf()){start=start._plus((1))};;
while(((function String__(){
if ((stop._lt(start)).valueOf()) {$early.result=smalltalk.String.$$new(); throw ($early)};
return lastBlock.value_((self.at_(stop)));
}
)()).valueOf()){stop=stop._minus((1))};;
return self.copyFrom_to_(start,stop);
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "selecting", unescape("trimFirst%3A%20firstBlock%20last%3A%20lastBlock%0D%09%22%20Return%20a%20String%20containing%20the%20result%20of%20trimming%20characters%20matching%20blocks%20from%20both%20sides%20of%20the%20receiver.%20%22%0D%0D%09%7C%20start%20stop%20%7C%0D%09start%20%3A%3D%201.%20stop%20%3A%3D%20self%20size.%0D%09%5B%09start%20%3E%20stop%20ifTrue%3A%20%5B%20%5EString%20new%20%5D.%0D%09%09firstBlock%20value%3A%20%28self%20at%3A%20start%29%0D%09%5D%20whileTrue%3A%20%5B%20start%20%3A%3D%20start%20+%201%20%5D.%0D%09%5B%09stop%20%3C%20start%20ifTrue%3A%20%5B%20%5EString%20new%20%5D.%0D%09%09lastBlock%20value%3A%20%28self%20at%3A%20stop%29%0D%09%5D%20whileTrue%3A%20%5B%20stop%20%3A%3D%20stop%20-%201%20%5D.%0D%09%5Eself%20copyFrom%3A%20start%20to%3A%20stop"));
smalltalk.bind(smalltalk.String, unescape("trim%3A"), "trim_", function String__trim_(aBlock){
const self = this; return self.trimFirst_last_(aBlock,aBlock);
}
, "selecting", unescape("trim%3A%20aBlock%0D%09%22%20Return%20a%20String%20containing%20the%20result%20of%20trimming%20characters%20matching%20aBlock%20from%20both%20sides%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20trimFirst%3A%20aBlock%20last%3A%20aBlock"));
smalltalk.bind(smalltalk.String, unescape("trimFirst%3A"), "trimFirst_", function String__trimFirst_(aBlock){
const self = this; return self.trimFirst_last_(aBlock,(function String__(c){
return false;
}
));
}
, "selecting", unescape("trimFirst%3A%20aBlock%0D%09%22%20Return%20a%20String%20containing%20the%20result%20of%20trimming%20characters%20matching%20aBlock%20from%20start%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20trimFirst%3A%20aBlock%20last%3A%20%5B%3Ac%7C%20false%20%5D"));
smalltalk.bind(smalltalk.String, unescape("trimLast%3A"), "trimLast_", function String__trimLast_(aBlock){
const self = this; return self.trimFirst_last_((function String__(c){
return false;
}
),aBlock);
}
, "selecting", unescape("trimLast%3A%20aBlock%0D%09%22%20Return%20a%20String%20containing%20the%20result%20of%20trimming%20characters%20matching%20aBlock%20from%20end%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20trimFirst%3A%20%5B%3Ac%7C%20false%20%5D%20last%3A%20aBlock"));
smalltalk.bind(smalltalk.String, unescape("trimBlanks"), "trimBlanks", function String__trimBlanks(){
const self = this; return self.trim_((function String__(c){
return c.isSeparator();
}
));
}
, "selecting", unescape("trimBlanks%0D%09%22%20Return%20a%20String%20containing%20the%20receiver%20string%20with%20leading%20and%20trailing%20blanks%20removed.%20%22%0D%0D%09%5Eself%20trim%3A%20%5B%3Ac%7C%20c%20isSeparator%20%5D"));
smalltalk.bind(smalltalk.String, unescape("trim%3A"), "trim_", function String__trim_(aBlock){
const self = this; if ((aBlock.isCharacter()).valueOf()) {return self.trim_((function String__(each){
return each._eq(aBlock);
}
))};
return self.trimFirst_last_(aBlock,aBlock);
}
, "selecting", unescape("trim%3A%20aBlock%0D%09%22%20Return%20a%20String%20containing%20the%20result%20of%20trimming%20characters%20matching%20aBlock%20from%20both%20sides%20of%20the%20receiver.%20%22%0D%0D%09aBlock%20isCharacter%0D%09%09ifTrue%3A%20%5B%5Eself%20trim%3A%20%5B%3Aeach%20%7C%20each%20%3D%20aBlock%5D%5D.%0D%09%5Eself%20trimFirst%3A%20aBlock%20last%3A%20aBlock"));
smalltalk.addClass("Array", smalltalk.SequenceableCollection, [], 'Kernel');
smalltalk.Array.$classVariableNames=("");
smalltalk.bind(smalltalk.Array.$klass, unescape("new"), "$$new", function Array_class__$$new(){
const self = this; return [];
}
, "instantiation", unescape("new%0D%09%22%20Return%20an%20instance%20of%20the%20receiver.%20%22%0D%0D%09%5E%23%28%29"));
smalltalk.bind(smalltalk.Array.$klass, unescape("basicNew%3A"), "basicNew_", function Array_class__basicNew_(size){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKArray.primBasicNew(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "instantiation", unescape("basicNew%3A%20size%0D%09%22%20Return%20an%20instance%20of%20the%20receiver%20of%20specified%20size.%20%22%0D%0D%09%3Cprimitive%3A%20%27primBasicNew%27%20module%3A%20%27SKArray%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.Array.$klass, unescape("new%3A"), "new_", function Array_class__new_(size){
const self = this; return self.basicNew_(size);
}
, "instantiation", unescape("new%3A%20size%0D%09%22%20Return%20an%20instance%20of%20the%20receiver%20of%20specified%20size.%20%22%0D%0D%09%5Eself%20basicNew%3A%20size%20"));
smalltalk.bind(smalltalk.Array.$klass, unescape("with%3A"), "with_", function Array_class__with_(anObject){
var arr = nil;
const self = this; arr=self.basicNew_((1));
arr.at_put_((1),anObject);
return arr;
}
, "instantiation", unescape("with%3A%20anObject%0D%09%22%20Return%20an%20instance%20of%20the%20receiver.%20%22%0D%0D%09%7C%20arr%20%7C%0D%09arr%20%3A%3D%20self%20basicNew%3A%201.%0D%09arr%20at%3A%201%20put%3A%20anObject.%0D%09%5Earr.%20"));
smalltalk.bind(smalltalk.Array.$klass, unescape("with%3Awith%3A"), "with_with_", function Array_class__with_with_(anObject,anotherObject){
var arr = nil;
const self = this; arr=self.basicNew_((2));
arr.at_put_((1),anObject);
arr.at_put_((2),anotherObject);
return arr;
}
, "instantiation", unescape("with%3A%20anObject%20with%3A%20anotherObject%0D%09%22%20Return%20an%20instance%20of%20the%20receiver.%20%22%0D%0D%09%7C%20arr%20%7C%0D%09arr%20%3A%3D%20self%20basicNew%3A%202.%0D%09arr%20at%3A%201%20put%3A%20anObject.%0D%09arr%20at%3A%202%20put%3A%20anotherObject.%0D%09%5Earr.%20"));
smalltalk.bind(smalltalk.Array.$klass, unescape("with%3Awith%3Awith%3A"), "with_with_with_", function Array_class__with_with_with_(firstObject,secondObject,thirdObject){
var arr = nil;
const self = this; arr=self.basicNew_((3));
arr.at_put_((1),firstObject);
arr.at_put_((2),secondObject);
arr.at_put_((3),thirdObject);
return arr;
}
, "instantiation", unescape("with%3A%20firstObject%20with%3A%20secondObject%20with%3A%20thirdObject%0D%09%22%20Return%20an%20instance%20of%20the%20receiver.%20%22%0D%0D%09%7C%20arr%20%7C%0D%09arr%20%3A%3D%20self%20basicNew%3A%203.%0D%09arr%20at%3A%201%20put%3A%20firstObject.%0D%09arr%20at%3A%202%20put%3A%20secondObject.%0D%09arr%20at%3A%203%20put%3A%20thirdObject.%0D%09%5Earr.%20"));
smalltalk.bind(smalltalk.Array.$klass, unescape("withAll%3A"), "withAll_", function Array_class__withAll_(aCollection){
var arr = nil;
var index = nil;
const self = this; index=(1);
arr=smalltalk.Array.basicNew_((aCollection.size()));
aCollection.do_((function Array_class__(each){
arr.at_put_(index,each);
return index=index._plus((1));
}
));
return arr;
}
, "instantiation", unescape("withAll%3A%20aCollection%0D%09%22%20Return%20an%20instance%20of%20the%20receiver.%20%22%0D%0D%09%7C%20arr%20index%20%7C%0D%09index%20%3A%3D%201.%0D%09arr%20%3A%3D%20Array%20basicNew%3A%20aCollection%20size.%0D%09aCollection%20do%3A%20%5B%20%3Aeach%20%7C%20%28arr%20at%3A%20index%20put%3A%20each%29.%20index%20%3A%3D%20index%20+%201%5D.%0D%09%5Earr.%20"));
smalltalk.bind(smalltalk.Array.$klass, unescape("with%3Awith%3Awith%3Awith%3A"), "with_with_with_with_", function Array_class__with_with_with_with_(firstObject,secondObject,thirdObject,fourthObject){
var arr = nil;
const self = this; arr=self.basicNew_((4));
arr.at_put_((1),firstObject);
arr.at_put_((2),secondObject);
arr.at_put_((3),thirdObject);
arr.at_put_((4),fourthObject);
return arr;
}
, "instantiation", unescape("with%3A%20firstObject%20with%3A%20secondObject%20with%3A%20thirdObject%20with%3A%20fourthObject%0D%09%22%20Return%20an%20instance%20of%20the%20receiver.%20%22%0D%0D%09%7C%20arr%20%7C%0D%09arr%20%3A%3D%20self%20basicNew%3A%204.%0D%09arr%20at%3A%201%20put%3A%20firstObject.%0D%09arr%20at%3A%202%20put%3A%20secondObject.%0D%09arr%20at%3A%203%20put%3A%20thirdObject.%0D%09arr%20at%3A%204%20put%3A%20fourthObject.%0D%09%5Earr.%20"));
smalltalk.bind(smalltalk.Array, unescape("size"), "size", function Array__size(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKArray.primSize(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "accessing", unescape("size%0D%09%22%20Return%20the%20size%20of%20the%20receiver.%20%22%0D%0D%09%3Cprimitive%3A%20%27primSize%27%20module%3A%20%27SKArray%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.Array, unescape("at%3Aput%3A"), "at_put_", function Array__at_put_(anIndex,anObject){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKArray.primAtPut(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "accessing", unescape("at%3A%20anIndex%20put%3A%20anObject%0D%09%22%20Set%20the%20contents%20of%20the%20receiver%20at%20anIndex.%20%22%0D%0D%09%3Cprimitive%3A%27primAtPut%27%20module%3A%27SKArray%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.Array, unescape("at%3A"), "at_", function Array__at_(anIndex){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKArray.primAt(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "accessing", unescape("at%3A%20anIndex%0D%09%22%20Return%20the%20contents%20of%20the%20receiver%20at%20anIndex.%20%22%0D%0D%09%3Cprimitive%3A%20%27primAt%27%20module%3A%20%27SKArray%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.Array, unescape("at%3AifAbsent%3A"), "at_ifAbsent_", function Array__at_ifAbsent_(anIndex,aBlock){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKArray.primAtIfAbsent(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "accessing", unescape("at%3A%20anIndex%20ifAbsent%3A%20aBlock%0D%09%22%20Return%20the%20contents%20of%20the%20receiver%20at%20anIndex%20or%20the%20result%20of%20evaluating%20aBlock.%20%22%0D%0D%09%3Cprimitive%3A%27primAtIfAbsent%27%20module%3A%27SKArray%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.Array, unescape("do%3A"), "do_", function Array__do_(aBlock){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKArray.primDo(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "enumerating", unescape("do%3A%20aBlock%0D%09%22%20Evaluate%20aBlock%20with%20the%20contents%20of%20the%20receiver.%20%22%0D%0D%09%3Cprimitive%3A%27primDo%27%20module%3A%27SKArray%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.Array, unescape("isArray"), "isArray", function Array__isArray(){
const self = this; return (nil.is_eqeq_(self.$klass,smalltalk.Array));
}
, "testing", unescape("isArray%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20an%20Array.%20%22%0D%0D%09%5Eself%20class%20%3D%3D%20Array"));
smalltalk.bind(smalltalk.Array, unescape("addAll%3A"), "addAll_", function Array__addAll_(aCollection){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKArray.primAddAll(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; if ((aCollection.isCollection()).valueOf()) {return self.addAll_((aCollection.asArray()))};
return self.primitiveFailed();
}
, "adding", unescape("addAll%3A%20aCollection%0D%09%22%20Add%20objects%20in%20aCollection%20to%20the%20receiver.%20%22%0D%0D%09%3Cprimitive%3A%27primAddAll%27%20module%3A%27SKArray%27%3E%0D%09aCollection%20isCollection%20ifTrue%3A%5B%5Eself%20addAll%3A%20aCollection%20asArray%5D.%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.Array, unescape("shallowCopy"), "shallowCopy", function Array__shallowCopy(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKArray.primShallowCopy(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "copying", unescape("shallowCopy%0D%09%22%20Return%20a%20shallow%20copy%20of%20the%20receiver.%20%22%0D%0D%09%3Cprimitive%3A%20%27primShallowCopy%27%20module%3A%20%27SKArray%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.Array, unescape("deepCopy"), "deepCopy", function Array__deepCopy(){
const self = this; return self.collect_((function Array__(each){
return each.deepCopy();
}
));
}
, "copying", unescape("deepCopy%0D%09%22%20Return%20a%20deep%20copy%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20collect%3A%20%5B%3Aeach%20%7C%20each%20deepCopy%20%5D"));
smalltalk.bind(smalltalk.Array, unescape("copyFrom%3Ato%3A"), "copyFrom_to_", function Array__copyFrom_to_(anIndex,anotherIndex){
var result = nil;
const self = this; result=(self.$klass).$$new();
anIndex.to_do_(anotherIndex,(function Array__(each){
return result.add_((self.at_(each)));
}
));
return result;
}
, "copying", unescape("copyFrom%3A%20anIndex%20to%3A%20anotherIndex%0D%09%22%20Return%20the%20receiver%20contents%20in%20the%20interval.%20%22%0D%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%20self%20class%20new.%0D%09anIndex%20to%3A%20anotherIndex%20do%3A%20%5B%3Aeach%20%7C%20result%20add%3A%20%28self%20at%3A%20each%29%20%5D.%0D%09%5Eresult"));
smalltalk.bind(smalltalk.Array, unescape("copyWithAll%3A"), "copyWithAll_", function Array__copyWithAll_(aCollection){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKArray.primCopyWithAll(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; if ((aCollection.isCollection()).valueOf()) {return self.copyWithAll_((aCollection.asArray()))};
return self.primitiveFailed();
}
, "copying", unescape("copyWithAll%3A%20aCollection%0D%09%22%20Return%20a%20copy%20of%20the%20receiver%20with%20all%20contents%20of%20aCollection.%20%22%0D%0D%09%3Cprimitive%3A%27primCopyWithAll%27%20module%3A%27SKArray%27%3E%0D%09aCollection%20isCollection%20ifTrue%3A%5B%5Eself%20copyWithAll%3A%20aCollection%20asArray%5D.%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.Array, unescape("%2C"), "_comma", function Array___comma(aCollection){
const self = this; return self.copyWithAll_(aCollection);
}
, "copying", unescape("%2C%20aCollection%0D%09%22%20Return%20a%20copy%20of%20the%20receiver%20with%20all%20contents%20of%20aCollection.%20%22%0D%0D%09%5Eself%20copyWithAll%3A%20aCollection.%20"));
smalltalk.bind(smalltalk.Array, unescape("join%3A"), "join_", function Array__join_(aString){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKArray.primJoin(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "enumerating", unescape("join%3A%20aString%0D%09%22%20Return%20a%20string%20with%20the%20receiver%27s%20contents%20separated%20by%20aString.%20%22%0D%0D%09%3Cprimitive%3A%20%27primJoin%27%20module%3A%20%27SKArray%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.Array, unescape("asJavascript"), "asJavascript", function Array__asJavascript(){
const self = this; return (unescape("%5B")._comma(((self.collect_((function Array__(each){
return each.asJavascript();
}
))).join_(unescape("%2C%20")))))._comma(unescape("%5D"));
}
, "converting", unescape("asJavascript%0D%09%22%20Return%20the%20javascript%20representation%20of%20the%20receiver.%20%22%0D%0D%09%5E%27%5B%27%2C%20%28%28self%20collect%3A%20%5B%3Aeach%20%7C%20each%20asJavascript%5D%29%20join%3A%20%27%2C%20%27%29%2C%20%20%27%5D%27"));
smalltalk.bind(smalltalk.Array, unescape("sort%3A"), "sort_", function Array__sort_(aBlock){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKArray.primSort(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "sorting", unescape("sort%3A%20aBlock%0D%09%22%20Sort%20%28inplace%29%20the%20receiver%27s%20contents%20with%20aBlock.%20%22%0D%0D%09%3Cprimitive%3A%20%27primSort%27%20module%3A%20%27SKArray%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.Array, unescape("asArray"), "asArray", function Array__asArray(){
const self = this; return self;
}
, "converting", unescape("asArray%0D%09%22%20Return%20an%20array%20with%20the%20contents%20of%20the%20receiver.%20%22%0D%0D%09%5Eself"));
smalltalk.bind(smalltalk.Array, unescape("remove%3AifAbsent%3A"), "remove_ifAbsent_", function Array__remove_ifAbsent_(anObject,aBlock){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKArray.primRemoveIfAbsent(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "removing", unescape("remove%3A%20anObject%20ifAbsent%3A%20aBlock%0D%09%22%20Remove%20anObject%20from%20the%20receiver.%0D%09Return%20the%20result%20of%20evaluating%20aBlock%20if%20anObject%20is%20not%20in%20the%20receiver.%22%0D%09%0D%09%3Cprimitive%3A%27primRemoveIfAbsent%27%20module%3A%27SKArray%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.Array, unescape("add%3A"), "add_", function Array__add_(anObject){
const self = this; return self.addLast_(anObject);
}
, "adding", unescape("add%3A%20anObject%0D%09%22%20Add%20anObject%20to%20the%20receiver.%20%22%0D%0D%09%5Eself%20addLast%3A%20anObject.%20"));
smalltalk.bind(smalltalk.Array, unescape("addLast%3A"), "addLast_", function Array__addLast_(anObject){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKArray.primAddLast(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "adding", unescape("addLast%3A%20anObject%0D%09%22%20Add%20anObject%20to%20the%20receiver.%20%22%0D%0D%09%3Cprimitive%3A%27primAddLast%27%20module%3A%27SKArray%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.Array, unescape("addFirst%3A"), "addFirst_", function Array__addFirst_(anObject){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKArray.primAddFirst(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "adding", unescape("addFirst%3A%20anObject%0D%09%22%20Add%20anObject%20to%20the%20receiver.%20%22%0D%0D%09%3Cprimitive%3A%27primAddFirst%27%20module%3A%27SKArray%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.Array, unescape("removeLast"), "removeLast", function Array__removeLast(){
const self = this; return self.pop();
}
, "removing", unescape("removeLast%0D%09%22%20Remove%20the%20last%20object%20in%20the%20receiver.%20%22%0D%0D%09%5Eself%20pop"));
smalltalk.bind(smalltalk.Array, unescape("removeFirst"), "removeFirst", function Array__removeFirst(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKArray.primRemoveFirst(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "removing", unescape("removeFirst%0D%09%22%20Remove%20the%20first%20object%20in%20the%20receiver.%20%22%0D%0D%09%3Cprimitive%3A%20%27primRemoveFirst%27%20module%3A%20%27SKArray%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.Array, unescape("removeAll"), "removeAll", function Array__removeAll(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKArray.primRemoveAll(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "removing", unescape("removeAll%0D%09%22%20Remove%20all%20the%20objects%20in%20the%20receiver.%20%22%0D%0D%09%3Cprimitive%3A%20%27primRemoveAll%27%20module%3A%20%27SKArray%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.Array, unescape("removeIndex%3A"), "removeIndex_", function Array__removeIndex_(index){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKArray.primRemoveIndex(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "removing", unescape("removeIndex%3A%20index%0D%09%22%20Remove%20the%20element%20at%20index.%20%22%0D%0D%09%3Cprimitive%3A%20%27primRemoveIndex%27%20module%3A%20%27SKArray%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.Array, unescape("sorted"), "sorted", function Array__sorted(){
const self = this; return (self.copy()).sort();
}
, "sorting", unescape("sorted%0D%09%22%20Return%20a%20sorted%20copy%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20copy%20sort"));
smalltalk.bind(smalltalk.Array, unescape("sorted%3A"), "sorted_", function Array__sorted_(aBlock){
const self = this; return (self.copy()).sort_(aBlock);
}
, "sorting", unescape("sorted%3A%20aBlock%0D%09%22%20Return%20a%20sorted%20copy%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20copy%20sort%3A%20aBlock"));
smalltalk.bind(smalltalk.Array, unescape("atAllPut%3A"), "atAllPut_", function Array__atAllPut_(anObject){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKArray.primAtAllPut(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "accessing", unescape("atAllPut%3A%20anObject%0D%09%22%20Replace%20all%20elements%20of%20the%20receiver%20with%20anObject.%20%22%0D%0D%09%3Cprimitive%3A%20%27primAtAllPut%27%20module%3A%20%27SKArray%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.Array, unescape("polyAt%3A"), "polyAt_", function Array__polyAt_(index){
const self = this; return (function(){var $1$; $1$ = (function(){var $2$; $2$ = self[index._minus((1))]; return nil.isNil_($2$) ? nil : $2$})(); if (typeof($1$) == "undefined") { return self.at_(index) } else { return $1$ }})();
}
, "accessing", unescape("polyAt%3A%20index%0D%09%22%20Return%20the%20object%20in%20the%20receiver%20for%20either%20JS%20or%20ST%20array%22%0D%0D%09%5E%28self%20basicAt%3A%20index-1%29%20ifUndefined%3A%20%5Bself%20at%3A%20index%5D"));
smalltalk.bind(smalltalk.Array, unescape("first"), "first", function Array__first(){
const self = this; return self.polyAt_((1));
}
, "accessing", unescape("first%0D%09%22%20Return%20the%20object%20in%20the%20receiver.%20%22%0D%0D%09%5Eself%20polyAt%3A%201"));
smalltalk.bind(smalltalk.Array, unescape("second"), "second", function Array__second(){
const self = this; return self.polyAt_((2));
}
, "accessing", unescape("second%0D%09%22%20Return%20the%20object%20in%20the%20receiver.%20%22%0D%0D%09%5Eself%20polyAt%3A%202"));
smalltalk.bind(smalltalk.Array, unescape("third"), "third", function Array__third(){
const self = this; return self.polyAt_((3));
}
, "accessing", unescape("third%0D%09%22%20Return%20the%20object%20in%20the%20receiver.%20%22%0D%0D%09%5Eself%20polyAt%3A%203"));
smalltalk.bind(smalltalk.Array, unescape("fourth"), "fourth", function Array__fourth(){
const self = this; return self.polyAt_((4));
}
, "accessing", unescape("fourth%0D%09%22%20Return%20the%20object%20in%20the%20receiver.%20%22%0D%0D%09%5Eself%20polyAt%3A%204"));
smalltalk.bind(smalltalk.Array, unescape("withIndexDo%3A"), "withIndexDo_", function Array__withIndexDo_(aBlock){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKArray.primWithIndexDo(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "enumerating", unescape("withIndexDo%3A%20aBlock%0D%09%22%20Evaluate%20aBlock%20with%20all%20the%20index%20positions%20in%20the%20receiver.%20%22%0D%0D%09%3Cprimitive%3A%20%27primWithIndexDo%27%20module%3A%20%27SKArray%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.Array, unescape("printString"), "printString", function Array__printString(){
var result = nil;
const self = this; var $early={name:"stReturn"};
try {
if ((self.isEmpty()).valueOf()) {return unescape("%23%28%29")};
result=unescape("%23%28%20");
self.do_((function Array__(each){
if (((result.size())._gt((10000))).valueOf()) {$early.result=result._comma(unescape("...%29")); throw ($early)};
return result=(result._comma(((self.isObject_(each)).ifTrue_ifFalse_((function Array__(){
return each.printString();
}
),(function Array__(){
return each;
}
)))))._comma(" ");
}
));
return result._comma(unescape("%29"));
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "printing", unescape("printString%0D%09%22%20DEBUG%20-%20Temporary%20printing%20method%20%28must%20check%20for%20recursion%29.%20%22%0D%0D%09%7C%20result%20%7C%0D%09self%20isEmpty%20ifTrue%3A%20%5B%20%5E%27%23%28%29%27%20%5D.%0D%09result%20%3A%3D%20%27%23%28%20%27.%0D%09self%20do%3A%20%5B%3Aeach%7C%0D%09%09result%20size%20%3E%2010000%20ifTrue%3A%20%5B%20%5Eresult%2C%27...%29%27%20%5D.%0D%09%09result%20%3A%3D%20result%20%2C%20%28%0D%09%09%09%28self%20isObject%3A%20each%29%0D%09%09%09ifTrue%3A%20%5B%20each%20printString%20%5D%0D%09%09%09ifFalse%3A%20%5B%20each%20%5D%29%20%2C%27%20%27%0D%09%5D.%0D%09%5Eresult%2C%27%29%27"));
smalltalk.bind(smalltalk.Array, unescape("asLiteral"), "asLiteral", function Array__asLiteral(){
var result = nil;
const self = this; if ((self.isEmpty()).valueOf()) {return unescape("%23%28%29")};
result=unescape("%23%28%20");
self.do_((function Array__(each){
return result=(result._comma(((self.isObject_(each)).ifTrue_ifFalse_((function Array__(){
return each.asLiteral();
}
),(function Array__(){
return each;
}
)))))._comma(" ");
}
));
return result._comma(unescape("%29"));
}
, "converting", unescape("asLiteral%0D%09%22%20Return%20the%20receiver%20in%20literal%20notation.%20%22%0D%0D%09%7C%20result%20%7C%0D%09self%20isEmpty%20ifTrue%3A%20%5B%20%5E%27%23%28%29%27%20%5D.%0D%09result%20%3A%3D%20%27%23%28%20%27.%0D%09self%20do%3A%20%5B%3Aeach%7C%0D%09%09result%20%3A%3D%20result%20%2C%20%28%0D%09%09%09%28self%20isObject%3A%20each%29%0D%09%09%09ifTrue%3A%20%5B%20each%20asLiteral%20%5D%0D%09%09%09ifFalse%3A%20%5B%20each%20%5D%29%20%2C%27%20%27%0D%09%5D.%0D%09%5Eresult%2C%27%29%27"));
smalltalk.bind(smalltalk.Array, unescape("asJSONObject"), "asJSONObject", function Array__asJSONObject(){
const self = this; return self.collect_((function Array__(each){
if ((self.isObject_(each)).valueOf()) {return each.asJSONObject()} else {return each};
}
));
}
, "converting", unescape("asJSONObject%0D%09%22%20Return%20an%20Array%20with%20the%20contents%20of%20the%20receiver%20converted%20to%20JSON%20structures.%20%22%0D%0D%09%5Eself%20collect%3A%20%5B%3Aeach%7C%0D%09%09%28self%20isObject%3A%20each%29%0D%09%09ifTrue%3A%20%5B%20each%20asJSONObject%20%5D%0D%09%09ifFalse%3A%20%5B%20each%20%5D%0D%09%5D"));
smalltalk.bind(smalltalk.Array, unescape("json"), "json", function Array__json(){
const self = this; return self.collect_((function Array__(each){
if ((self.isObject_(each)).valueOf()) {return each.json()} else {return each};
}
));
}
, "converting", unescape("json%0D%09%22%20Return%20an%20Array%20with%20the%20contents%20of%20the%20receiver%20converted%20to%20JSON%20structures.%20%22%0D%0D%09%5Eself%20collect%3A%20%5B%3Aeach%7C%0D%09%09%28self%20isObject%3A%20each%29%0D%09%09ifTrue%3A%20%5B%20each%20json%20%5D%0D%09%09ifFalse%3A%20%5B%20each%20%5D%0D%09%5D"));
smalltalk.addClass("RegularExpression", smalltalk.Object, [], 'Kernel');
smalltalk.RegularExpression.$classVariableNames=("");
smalltalk.bind(smalltalk.RegularExpression, unescape("isRegExp"), "isRegExp", function RegularExpression__isRegExp(){
const self = this; return true;
}
, "accessing", unescape("isRegExp%0D%0D%09%5Etrue%20"));
smalltalk.bind(smalltalk.RegularExpression, unescape("compile%3A"), "compile_", function RegularExpression__compile_(aString){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKRegularExpression.primCompile(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "evaluating", unescape("compile%3A%20aString%0D%09%22%20Return%20the%20result%20of%20compilation%20of%20aString.%20%22%0D%0D%09%3Cprimitive%3A%20%27primCompile%27%20module%3A%20%27SKRegularExpression%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.RegularExpression, unescape("exec%3A"), "exec_", function RegularExpression__exec_(aString){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKRegularExpression.primExec(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "evaluating", unescape("exec%3A%20aString%0D%09%22%20Return%20the%20result%20of%20excecution%20of%20aString.%20%22%0D%0D%09%3Cprimitive%3A%20%27primExec%27%20module%3A%20%27SKRegularExpression%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.RegularExpression, unescape("test%3A"), "test_", function RegularExpression__test_(aString){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKRegularExpression.primTest(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "evaluating", unescape("test%3A%20aString%0D%09%22%20Return%20the%20result%20of%20testing%20of%20aString.%20%22%0D%0D%09%3Cprimitive%3A%20%27primTest%27%20module%3A%20%27SKRegularExpression%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.RegularExpression.$klass, unescape("fromString%3Aflag%3A"), "fromString_flag_", function RegularExpression_class__fromString_flag_(aString,anotherString){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKRegularExpression.primFromString(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "instantiation", unescape("fromString%3A%20aString%20flag%3A%20anotherString%0D%09%22%20Return%20an%20instance%20of%20the%20receiver.%20%22%0D%0D%09%3Cprimitive%3A%27primFromString%27%20module%3A%27SKRegularExpression%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.bind(smalltalk.RegularExpression.$klass, unescape("fromString%3A"), "fromString_", function RegularExpression_class__fromString_(aString){
const self = this; return self.fromString_flag_(aString,"");
}
, "instantiation", unescape("fromString%3A%20aString%0D%09%22%20Return%20an%20instance%20of%20the%20receiver.%20%22%0D%0D%09%20%20%20%20%5Eself%20fromString%3A%20aString%20flag%3A%20%27%27"));
smalltalk.bind(smalltalk.RegularExpression, unescape("shallowCopy"), "shallowCopy", function RegularExpression__shallowCopy(){
const self = this; return self;
}
, "copying", unescape("shallowCopy%0D%09%22%20Return%20a%20shallow%20copy%20of%20the%20receiver.%20%22%0D%0D%09%5Eself"));
smalltalk.bind(smalltalk.RegularExpression, unescape("deepCopy"), "deepCopy", function RegularExpression__deepCopy(){
const self = this; return self;
}
, "copying", unescape("deepCopy%0D%09%22%20Return%20a%20deep%20copy%20of%20the%20receiver.%20%22%0D%0D%09%5Eself"));
smalltalk.bind(smalltalk.RegularExpression, unescape("asJSONObject"), "asJSONObject", function RegularExpression__asJSONObject(){
const self = this; return self;
}
, "converting", unescape("asJSONObject%0D%09%22%20Return%20the%20mapping%20of%20the%20receiver%20to%20JSON%20structure.%20%22%0D%0D%09%5Eself"));
smalltalk.bind(smalltalk.Exception.$klass, unescape("signal%3A"), "signal_", function Exception_class__signal_(aString){
const self = this; return (function Exception_class__($1$){
$1$.messageText_(aString);
return $1$.signal()}
)(self.$$new());
}
, "instantiation", unescape("signal%3A%20aString%0D%09%22%20Signal%20an%20instance%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20new%0D%09%09messageText%3A%20aString%3B%0D%09%09signal"));
smalltalk.bind(smalltalk.Exception.$klass, unescape("signal"), "signal", function Exception_class__signal(){
const self = this; return (self.$$new()).signal();
}
, "instantiation", unescape("signal%0D%0D%09%5Eself%20new%20signal"));
smalltalk.bind(smalltalk.Exception, unescape("messageText"), "messageText", function Exception__messageText(){
const self = this; return self['@messageText'];
}
, "accessing", unescape("messageText%0D%09%22%20Return%20the%20messageText%20of%20the%20receiver.%20%22%0D%0D%09%5EmessageText"));
smalltalk.bind(smalltalk.Exception, unescape("description"), "description", function Exception__description(){
const self = this; return (self.messageText()).asString();
}
, "accessing", unescape("description%0D%09%22%20Return%20the%20description%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20messageText%20asString"));
smalltalk.bind(smalltalk.Exception, unescape("messageText%3A"), "messageText_", function Exception__messageText_(aString){
const self = this; self['@messageText']=aString;
return self;
}
, "accessing", unescape("messageText%3A%20aString%0D%09%22%20set%20the%20messageText%20of%20the%20receiver.%20%22%0D%0D%09messageText%20%3A%3D%20aString"));
smalltalk.bind(smalltalk.Exception, unescape("signal"), "signal", function Exception__signal(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKException.primSignal(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "signaling", unescape("signal%0D%09%22%20Signal/throw%20the%20receiver.%20%22%0D%0D%09%3Cprimitive%3A%20%27primSignal%27%20module%3A%20%27SKException%27%3E%0D%09%5Eself%20primitiveFailed%20"));
smalltalk.addClass("Association", smalltalk.Object, ['key', 'value'], 'Kernel');
smalltalk.Association.$classVariableNames=("");
smalltalk.bind(smalltalk.Association.$klass, unescape("key%3A"), "key_", function Association_class__key_(aKey){
const self = this; return (self.$$new()).key_(aKey);
}
, "instantiation", unescape("key%3A%20aKey%0D%09%22%20Return%20an%20instance%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20new%20key%3A%20aKey"));
smalltalk.bind(smalltalk.Association.$klass, unescape("key%3Avalue%3A"), "key_value_", function Association_class__key_value_(aKey,aValue){
const self = this; return (self.key_(aKey)).value_(aValue);
}
, "instantiation", unescape("key%3A%20aKey%20value%3A%20aValue%0D%09%22%20Return%20an%20instance%20of%20the%20receiver.%20%22%0D%0D%09%5E%28self%20key%3A%20aKey%29%20value%3A%20aValue"));
smalltalk.bind(smalltalk.Association, unescape("%3D"), "_eq", function Association___eq(anAssociation){
const self = this; return ((self.$klass)._eq((anAssociation.$klass))).and_((function Association__(){
return ((self.key())._eq((anAssociation.key()))).and_((function Association__(){
return (self.value())._eq((anAssociation.value()));
}
));
}
));
}
, "comparing", unescape("%3D%20anAssociation%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20equal%20to%20anAssociation.%20%22%0D%0D%09%5Eself%20class%20%3D%20anAssociation%20class%20and%3A%20%5B%0D%09%20%20%20%20self%20key%20%3D%20anAssociation%20key%20and%3A%20%5B%0D%09%09self%20value%20%3D%20anAssociation%20value%5D%5D"));
smalltalk.bind(smalltalk.Association, unescape("key%3A"), "key_", function Association__key_(aKey){
const self = this; self['@key']=aKey;
return self;
}
, "accessing", unescape("key%3A%20aKey%0D%09%22%20Set%20the%20key%20of%20the%20receiver.%20%22%0D%0D%09key%20%3A%3D%20aKey"));
smalltalk.bind(smalltalk.Association, unescape("key"), "key", function Association__key(){
const self = this; return self['@key'];
}
, "accessing", unescape("key%0D%09%22%20Return%20the%20key%20of%20the%20receiver.%20%22%0D%0D%09%5Ekey"));
smalltalk.bind(smalltalk.Association, unescape("value%3A"), "value_", function Association__value_(aValue){
const self = this; self['@value']=aValue;
return self;
}
, "accessing", unescape("value%3A%20aValue%0D%09%22%20Set%20the%20value%20of%20the%20receiver.%20%22%0D%0D%09value%20%3A%3D%20aValue"));
smalltalk.bind(smalltalk.Association, unescape("value"), "value", function Association__value(){
const self = this; return self['@value'];
}
, "accessing", unescape("value%0D%09%22%20Return%20the%20value%20of%20the%20receiver.%20%22%0D%0D%09%5Evalue"));
smalltalk.bind(smalltalk.Association, unescape("isAssociation"), "isAssociation", function Association__isAssociation(){
const self = this; return true;
}
, "testing", unescape("isAssociation%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20anAssociation.%20%22%0D%0D%09%5Etrue"));
smalltalk.bind(smalltalk.Object, unescape("isAssociation"), "isAssociation", function Object__isAssociation(){
const self = this; return false;
}
, "testing", unescape("isAssociation%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20anAssociation.%20%22%0D%0D%09%5Efalse"));
smalltalk.bind(smalltalk.Association, unescape("toString"), "toString", function Association__toString(){
var literal = nil;
const self = this; literal=(self.isObject_((self.key()))).ifTrue_ifFalse_((function Association__(){
return (self.key()).asLiteral();
}
),(function Association__(){
return (self.key()).toString();
}
));
return (((unescape("%28")._comma(literal))._comma(unescape("%20-%3E%20")))._comma(((self.value()).toString())))._comma(unescape("%29"));
}
, "printing", unescape("toString%0D%09%22%20Return%20a%20printable%20representation%20of%20the%20receiver.%20%22%0D%0D%09%7C%20literal%20%7C%0D%09literal%20%3A%3D%20%28self%20isObject%3A%20self%20key%29%0D%09%09ifTrue%3A%20%5B%20self%20key%20asLiteral%20%5D%0D%09%09ifFalse%3A%20%5B%20self%20key%20toString%20%5D.%0D%09%5E%27%28%27%2C%20literal%20%2C%27%20-%3E%20%27%20%2Cself%20value%20toString%20%2C%27%29%27"));
smalltalk.addClass("KeyedCollection", smalltalk.Collection, [], 'Kernel');
smalltalk.KeyedCollection.$classVariableNames=("");
smalltalk.addClass("Dictionary", smalltalk.KeyedCollection, ['keys', 'values'], 'Kernel');
smalltalk.Dictionary.$classVariableNames=("");
smalltalk.bind(smalltalk.Object, unescape("isDictionary"), "isDictionary", function Object__isDictionary(){
const self = this; return false;
}
, "query", unescape("isDictionary%0D%09%22%20Returns%20true%20if%20the%20receiver%20is%20a%20dictionary.%20%22%0D%0D%09%5Efalse"));
smalltalk.bind(smalltalk.Dictionary.$klass, unescape("basicNew%3A"), "basicNew_", function Dictionary_class__basicNew_(size){
const self = this; return self.$$new();
}
, "instantiation", unescape("basicNew%3A%20size%0D%09%22%20Return%20an%20instance%20of%20the%20receiver%20of%20specified%20size.%20%22%0D%0D%09%5Eself%20new"));
smalltalk.bind(smalltalk.Dictionary.$klass, unescape("fromKeys%3Aand%3A"), "fromKeys_and_", function Dictionary_class__fromKeys_and_(keys,values){
const self = this; return (self.basicNew()).initializeKeys_values_(keys,values);
}
, "instantiation", unescape("fromKeys%3A%20keys%20and%3A%20values%0D%09%22%20Return%20an%20instance%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20basicNew%20initializeKeys%3A%20keys%20values%3A%20values"));
smalltalk.bind(smalltalk.Dictionary, unescape("initialize"), "initialize", function Dictionary__initialize(){
const self = this; smalltalk.superImplementor(smalltalk.Dictionary,'initialize').apply(self, []);
self['@keys']=smalltalk.Set.$$new();
self['@values']=[];
return self;
}
, "initialize", unescape("initialize%0D%09%22%20Private%20-%20Initialize%20the%20receiver.%20%22%0D%0D%09super%20initialize.%0D%09keys%20%3A%3D%20Set%20new.%0D%09values%20%3A%3D%20%23%28%29"));
smalltalk.bind(smalltalk.Dictionary, unescape("initializeKeys%3Avalues%3A"), "initializeKeys_values_", function Dictionary__initializeKeys_values_(privateKeys,privateValues){
const self = this; smalltalk.superImplementor(smalltalk.Dictionary,'initialize').apply(self, []);
self['@keys']=smalltalk.Set.newContents_(privateKeys);
self['@values']=privateValues.asArray();
return self;
}
, "initialize", unescape("initializeKeys%3A%20privateKeys%20values%3A%20privateValues%0D%09%22%20Private%20-%20Initialize%20the%20receiver.%20%22%0D%0D%09super%20initialize.%0D%09keys%20%3A%3D%20Set%20newContents%3A%20privateKeys.%0D%09values%20%3A%3D%20privateValues%20asArray"));
smalltalk.bind(smalltalk.Dictionary, unescape("size"), "size", function Dictionary__size(){
const self = this; return self['@keys'].size();
}
, "accessing", unescape("size%0D%09%22%20Return%20the%20size%20of%20the%20receiver.%20%22%0D%0D%09%5Ekeys%20size"));
smalltalk.bind(smalltalk.Dictionary, unescape("keys"), "keys", function Dictionary__keys(){
const self = this; return self['@keys'].asArray();
}
, "accessing", unescape("keys%0D%09%22%20Return%20the%20keys%20of%20the%20receiver.%20%22%0D%0D%09%5Ekeys%20asArray"));
smalltalk.bind(smalltalk.Dictionary, unescape("isEmpty"), "isEmpty", function Dictionary__isEmpty(){
const self = this; return self['@keys'].isEmpty();
}
, "testing", unescape("isEmpty%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20empty.%20%22%0D%0D%09%5Ekeys%20isEmpty"));
smalltalk.bind(smalltalk.Dictionary, unescape("lookUpKey%3A"), "lookUpKey_", function Dictionary__lookUpKey_(aKey){
const self = this; return self['@keys'].indexOf_ifAbsent_(aKey,(function Dictionary__(){
return nil;
}
));
}
, "private", unescape("lookUpKey%3A%20aKey%0D%09%22%20Private%20-%20Return%20the%20index%20where%20aKey%20is%20found%2C%20or%20nil.%20%22%0D%0D%09%5Ekeys%20indexOf%3A%20aKey%20ifAbsent%3A%20%5B%20nil%20%5D"));
smalltalk.bind(smalltalk.Dictionary, unescape("keysAndValuesDo%3A"), "keysAndValuesDo_", function Dictionary__keysAndValuesDo_(aBlock){
const self = this; (self['@keys'].contents()).withIndexDo_((function Dictionary__(aKey,index){
return aBlock.value_value_(aKey,(self['@values'].at_(index)));
}
));
return self;
}
, "enumerating", unescape("keysAndValuesDo%3A%20aBlock%0D%09%22%20Evaluate%20aBlock%20for%20key/value%20pairs%20of%20the%20receiver.%20%22%0D%0D%09keys%20contents%20withIndexDo%3A%20%5B%3AaKey%20%3Aindex%20%7C%20aBlock%20value%3A%20aKey%20value%3A%20%28values%20at%3A%20index%29%20%5D"));
smalltalk.bind(smalltalk.Dictionary, unescape("keys"), "keys", function Dictionary__keys(){
const self = this; return self['@keys'].copy();
}
, "accessing", unescape("keys%0D%09%22%20Return%20the%20keys%20of%20the%20receiver.%20%22%0D%0D%09%5Ekeys%20copy"));
smalltalk.bind(smalltalk.Dictionary, unescape("keysDo%3A"), "keysDo_", function Dictionary__keysDo_(aBlock){
const self = this; self['@keys'].do_(aBlock);
return self;
}
, "enumerating", unescape("keysDo%3A%20aBlock%0D%09%22%20Evaluate%20aBlock%20with%20the%20keys%20of%20the%20receiver.%20%22%0D%0D%09keys%20do%3A%20aBlock"));
smalltalk.bind(smalltalk.Dictionary, unescape("values"), "values", function Dictionary__values(){
const self = this; return self['@values'].copy();
}
, "accessing", unescape("values%0D%09%22%20Return%20the%20values%20of%20the%20receiver.%20%22%0D%0D%09%5Evalues%20copy"));
smalltalk.bind(smalltalk.Dictionary, unescape("at%3Aput%3A"), "at_put_", function Dictionary__at_put_(aKey,aValue){
var index = nil;
const self = this; index=self.lookUpKey_(aKey);
if (((nil.isNil_(index))).valueOf()) {self['@keys'].add_(aKey);
self['@values'].add_(aValue)} else {self['@values'].at_put_(index,aValue)};
return aValue;
}
, "accessing", unescape("at%3A%20aKey%20put%3A%20aValue%0D%09%22%20Set%20the%20value%20at%20aKey%20of%20the%20receiver.%20%22%0D%0D%09%7C%20index%20%7C%0D%09index%20%3A%3D%20self%20lookUpKey%3A%20aKey.%0D%09index%20isNil%0D%09%09ifTrue%3A%20%5B%20keys%20add%3A%20aKey.%20values%20add%3A%20aValue.%5D%0D%09%09ifFalse%3A%20%5B%20values%20at%3A%20index%20put%3A%20aValue%20%5D.%0D%09%5EaValue"));
smalltalk.bind(smalltalk.Dictionary, unescape("at%3AifAbsent%3A"), "at_ifAbsent_", function Dictionary__at_ifAbsent_(aKey,aBlock){
var index = nil;
const self = this; index=self.lookUpKey_(aKey);
if (((nil.isNil_(index))).valueOf()) {return aBlock.value()};
return self['@values'].at_(index);
}
, "accessing", unescape("at%3A%20aKey%20ifAbsent%3A%20aBlock%0D%09%22%20Return%20the%20value%20at%20aKey%20or%20the%20result%20of%20evaluating%20aBlock.%20%22%0D%0D%09%7C%20index%20%7C%0D%09index%20%3A%3D%20self%20lookUpKey%3A%20aKey.%0D%09index%20isNil%20ifTrue%3A%20%5B%20%5EaBlock%20value%20%5D.%0D%09%5Evalues%20at%3A%20index"));
smalltalk.bind(smalltalk.Dictionary, unescape("at%3AifAbsentPut%3A"), "at_ifAbsentPut_", function Dictionary__at_ifAbsentPut_(aKey,aBlock){
var index = nil;
const self = this; index=self.lookUpKey_(aKey);
if (((nil.isNil_(index))).valueOf()) {return self.at_put_(aKey,(aBlock.value()))};
return self['@values'].at_(index);
}
, "accessing", unescape("at%3A%20aKey%20ifAbsentPut%3A%20aBlock%0D%09%22%20Return%20the%20value%20at%20aKey%2C%20or%20add%20the%20result%20of%20evaluating%20aBlock%20to%20the%20receiver%20if%20it%20is%20absent.%20%22%0D%0D%09%7C%20index%20%7C%0D%09index%20%3A%3D%20self%20lookUpKey%3A%20aKey.%0D%09index%20isNil%20ifTrue%3A%20%5B%20%5Eself%20at%3A%20aKey%20put%3A%20aBlock%20value%20%5D.%0D%09%5Evalues%20at%3A%20index"));
smalltalk.bind(smalltalk.Dictionary, unescape("do%3A"), "do_", function Dictionary__do_(aBlock){
const self = this; return self['@values'].do_(aBlock);
}
, "enumerating", unescape("do%3A%20aBlock%0D%09%22%20Evaluates%20aBlock%20for%20all%20values%20in%20the%20receiver.%20%22%0D%0D%09%5Evalues%20do%3A%20aBlock"));
smalltalk.bind(smalltalk.Dictionary, unescape("detect%3AifNone%3A"), "detect_ifNone_", function Dictionary__detect_ifNone_(aBlock,anotherBlock){
const self = this; return self['@values'].detect_ifNone_(aBlock,anotherBlock);
}
, "enumerating", unescape("detect%3A%20aBlock%20ifNone%3A%20anotherBlock%0D%09%22%20Detect%20the%20value%20who%20matches%20aBlock.%0D%09Return%20the%20result%20of%20evaluating%20aBlock%20if%20no%20value%20matches%20detection%20block.%0D%09%22%0D%0D%09%5Evalues%20detect%3A%20aBlock%20ifNone%3A%20anotherBlock"));
smalltalk.bind(smalltalk.Dictionary, unescape("includes%3A"), "includes_", function Dictionary__includes_(anObject){
const self = this; return self['@values'].includes_(anObject);
}
, "testing", unescape("includes%3A%20anObject%0D%09%22%20Return%20true%20if%20the%20receiver%27s%20values%20include%20anObject.%20%22%0D%0D%09%5Evalues%20includes%3A%20anObject"));
smalltalk.bind(smalltalk.Dictionary, unescape("isDictionary"), "isDictionary", function Dictionary__isDictionary(){
const self = this; return true;
}
, "testing", unescape("isDictionary%0D%0D%09%5Etrue"));
smalltalk.bind(smalltalk.Dictionary, unescape("includesKey%3A"), "includesKey_", function Dictionary__includesKey_(aKey){
const self = this; return self['@keys'].includes_(aKey);
}
, "enumerating", unescape("includesKey%3A%20aKey%0D%09%22%20Return%20true%20if%20the%20receiver%27s%20keys%20include%20aKey.%20%22%0D%0D%09%5Ekeys%20includes%3A%20aKey"));
smalltalk.bind(smalltalk.Dictionary, unescape("removeKey%3AifAbsent%3A"), "removeKey_ifAbsent_", function Dictionary__removeKey_ifAbsent_(aKey,aBlock){
var index = nil;
const self = this; var $early={name:"stReturn"};
try {
index=self.lookUpKey_(aKey);
if (((nil.isNil_(index))).valueOf()) {return aBlock.value()};
self['@keys'].remove_ifAbsent_(aKey,(function Dictionary__(){
$early.result=aBlock.value(); throw ($early);
}
));
self['@values'].removeIndex_(index);
return self;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "removing", unescape("removeKey%3A%20aKey%20ifAbsent%3A%20aBlock%0D%09%22%20Remove%20the%20binding%20at%20aKey.%20%22%0D%0D%09%7C%20index%20%7C%0D%09index%20%3A%3D%20self%20lookUpKey%3A%20aKey.%0D%09index%20isNil%20ifTrue%3A%20%5B%20%5EaBlock%20value%20%5D.%0D%09keys%20remove%3A%20aKey%20ifAbsent%3A%20%5B%20%5EaBlock%20value%20%5D.%0D%09values%20removeIndex%3A%20index."));
smalltalk.bind(smalltalk.Dictionary, unescape("keyForValue%3AifAbsent%3A"), "keyForValue_ifAbsent_", function Dictionary__keyForValue_ifAbsent_(anObject,aBlock){
const self = this; var $early={name:"stReturn"};
try {
self.keysAndvaluesDo_((function Dictionary__(key,aValue){
if (((nil.is_eqeq_(anObject,aValue))).valueOf()) {$early.result=key; throw ($early)} else {return nil};
}
));
return aBlock.value();
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "accessing", unescape("keyForValue%3A%20anObject%20ifAbsent%3A%20aBlock%0D%09%22%20Return%20the%20key%20in%20the%20receiver%20for%20value%20anObject%2C%20or%20the%20result%20of%20evaluating%20aBlock.%20%22%0D%0D%09self%20keysAndvaluesDo%3A%20%5B%3Akey%20%3AaValue%7C%20anObject%20%3D%3D%20aValue%20ifTrue%3A%20%5B%20%5Ekey%20%5D%20%5D.%0D%09%5EaBlock%20value"));
smalltalk.bind(smalltalk.Dictionary, unescape("asJavascript"), "asJavascript", function Dictionary__asJavascript(){
const self = this; return ((((("smalltalk."._comma(((self.$klass).name())))._comma(unescape(".fromKeys_and_%28")))._comma(((self['@keys'].asArray()).asJavascript())))._comma(unescape("%2C")))._comma((self['@values'].asJavascript())))._comma(unescape("%29"));
}
, "converting", unescape("asJavascript%0D%09%22%20Return%20the%20javascript%20representation%20of%20the%20receiver.%20%22%0D%0D%09%5E%27smalltalk.%27%2Cself%20class%20name%0D%09%09%2C%27.fromKeys_and_%28%27%20%2Ckeys%20asArray%20asJavascript%0D%09%09%09%2C%27%2C%27%20%2Cvalues%20asJavascript%20%2C%27%29%27"));
smalltalk.addClass("PoolDictionary", smalltalk.KeyedCollection, ['size'], 'Kernel');
smalltalk.PoolDictionary.$classVariableNames=("");
smalltalk.addClass("ClassBuilder", smalltalk.Object, [], 'Kernel');
smalltalk.ClassBuilder.$classVariableNames=("");
smalltalk.bind(smalltalk.ClassBuilder, unescape("superclass%3Asubclass%3A"), "superclass_subclass_", function ClassBuilder__superclass_subclass_(aClass,aString){
const self = this; return self.superclass_subclass_instanceVariableNames_category_(aClass,aString,"",nil);
}
, "instantiation", unescape("superclass%3A%20aClass%20subclass%3A%20aString%0D%09%22%20Create/Register%20a%20new%20class%20in%20the%20system.%20%22%0D%0D%09%5Eself%0D%09%09superclass%3A%20aClass%0D%09%09subclass%3A%20aString%0D%09%09instanceVariableNames%3A%20%27%27%0D%09%09category%3A%20nil"));
smalltalk.bind(smalltalk.ClassBuilder, unescape("superclass%3Asubclass%3AinstanceVariableNames%3AclassVariableNames%3ApoolDictionaries%3Acategory%3A"), "superclass_subclass_instanceVariableNames_classVariableNames_poolDictionaries_category_", function ClassBuilder__superclass_subclass_instanceVariableNames_classVariableNames_poolDictionaries_category_(aClass,aString,aString2,classVarNames,poolVarNames,aString3){
var result = nil;
var aCategory = nil;
const self = this; aCategory=((nil.isNil_(aString3))).ifTrue_ifFalse_((function ClassBuilder__(){
if (((nil.isNil_(aClass))).valueOf()) {return "unclassified"} else {return aClass.category()};
}
),(function ClassBuilder__(){
return aString3;
}
));
result=self.addSubclassOf_named_instanceVariableNames_(aClass,aString,(self.instanceVariableNamesFor_(aString2)));
self.setupClass_(result);
(function ClassBuilder__($1$){
$1$.classVariableNames_(classVarNames);
$1$.poolDictionaryNames_(poolVarNames);
return $1$.category_(aCategory)}
)(result);
if ((((nil.isNil_(aClass)===false)).and_((function ClassBuilder__(){
return smalltalk.Smalltalk.includesKey_("Exporter");
}
))).valueOf()) {self.print_(((smalltalk.Exporter.$$new()).exportNew_(result)))};
return result;
}
, "instantiation", unescape("superclass%3A%20aClass%0D%09subclass%3A%20aString%0D%09instanceVariableNames%3A%20aString2%0D%09classVariableNames%3A%20classVarNames%0D%09poolDictionaries%3A%20poolVarNames%0D%09category%3A%20aString3%0D%09%22%20Create/Register%20a%20new%20class%20in%20the%20system.%20%22%0D%0D%09%7C%20result%20aCategory%20%7C%0D%09aCategory%20%3A%3D%20aString3%20isNil%20ifTrue%3A%20%5B%0D%09%09%09aClass%20isNil%20ifTrue%3A%20%5B%20%23unclassified%20%5D%0D%09%09%09ifFalse%3A%20%5B%20aClass%20category%20%5D%0D%09%09%5D%20ifFalse%3A%20%5B%20aString3%20%5D.%0D%09result%20%3A%3D%20self%0D%09%09addSubclassOf%3A%20aClass%20named%3A%20aString%0D%09%09instanceVariableNames%3A%20%28self%20instanceVariableNamesFor%3A%20aString2%29.%0D%09self%20setupClass%3A%20result.%0D%09result%0D%09%09classVariableNames%3A%20classVarNames%3B%0D%09%09poolDictionaryNames%3A%20poolVarNames%3B%0D%09%09category%3A%20aCategory.%0D%09%28aClass%20notNil%20and%3A%20%5B%20Smalltalk%20includesKey%3A%20%23Exporter%20%5D%29%20ifTrue%3A%20%5B%0D%09%09self%20print%3A%20%28Exporter%20new%20exportNew%3A%20result%29%0D%09%5D.%0D%09%5Eresult"));
smalltalk.bind(smalltalk.ClassBuilder, unescape("superclass%3Asubclass%3AinstanceVariableNames%3Acategory%3A"), "superclass_subclass_instanceVariableNames_category_", function ClassBuilder__superclass_subclass_instanceVariableNames_category_(aClass,aString,aString2,aString3){
const self = this; return self.superclass_subclass_instanceVariableNames_classVariableNames_poolDictionaries_category_(aClass,aString,aString2,"","",aString3);
}
, "instantiation", unescape("superclass%3A%20aClass%0D%09subclass%3A%20aString%0D%09instanceVariableNames%3A%20aString2%0D%09category%3A%20aString3%0D%09%22%20Create/Register%20a%20new%20class%20in%20the%20system.%20%22%0D%0D%09%5Eself%0D%09%09superclass%3A%20aClass%0D%09%09subclass%3A%20aString%0D%09%09instanceVariableNames%3A%20aString2%0D%09%09classVariableNames%3A%20%27%27%0D%09%09poolDictionaries%3A%20%27%27%0D%09%09category%3A%20aString3"));
smalltalk.bind(smalltalk.ClassBuilder, unescape("basicClass%3AinstanceVariableNames%3A"), "basicClass_instanceVariableNames_", function ClassBuilder__basicClass_instanceVariableNames_(aMetaClass,anArray){
const self = this; return (self.smalltalk()).metaVarNames_array_(aMetaClass,anArray);
}
, "private", unescape("basicClass%3A%20aMetaClass%20instanceVariableNames%3A%20anArray%0D%09%22%20Private%20-%20Register%20instance%20variables%20onto%20aMetaClass.%20%22%0D%0D%09%5Eself%20smalltalk%20metaVarNames%3A%20aMetaClass%20array%3A%20anArray"));
smalltalk.bind(smalltalk.ClassBuilder, unescape("class%3AinstanceVariableNames%3A"), "class_instanceVariableNames_", function ClassBuilder__class_instanceVariableNames_(aMetaClass,aString){
var varNames = nil;
const self = this; if ((aMetaClass.isMetaclass()).not()) {return self.error_(((aMetaClass.name())._comma(" is not a metaclass")))};
varNames=self.instanceVariableNamesFor_(aString);
if ((self.basicClass_instanceVariableNames_(aMetaClass,varNames)).not()) {return self};
self.setupClass_(aMetaClass);
if ((smalltalk.Smalltalk.includesKey_("Exporter")).valueOf()) {self.print_(((smalltalk.Exporter.$$new()).exportMetaDefinitionOf_((aMetaClass.instanceClass()))))};
return self;
}
, "metaclass", unescape("class%3A%20aMetaClass%20instanceVariableNames%3A%20aString%0D%09%22%20Register%20instance%20variable%20names%20onto%20aMetaClass.%20%22%0D%0D%09%7C%20varNames%20%7C%0D%09aMetaClass%20isMetaclass%20ifFalse%3A%20%5B%0D%09%09%5Eself%20error%3A%20aMetaClass%20name%2C%20%27%20is%20not%20a%20metaclass%27%0D%09%5D.%0D%09varNames%20%3A%3D%20self%20instanceVariableNamesFor%3A%20aString.%0D%09%28self%20basicClass%3A%20aMetaClass%20instanceVariableNames%3A%20varNames%29%20ifFalse%3A%20%5B%20%5Eself%20%5D.%0D%09self%20setupClass%3A%20aMetaClass.%0D%09%28Smalltalk%20includesKey%3A%20%23Exporter%29%20ifTrue%3A%20%5B%0D%09%09self%20print%3A%20%28Exporter%20new%20exportMetaDefinitionOf%3A%20aMetaClass%20instanceClass%29%0D%09%5D."));
smalltalk.bind(smalltalk.ClassBuilder, unescape("instanceVariableNamesFor%3A"), "instanceVariableNamesFor_", function ClassBuilder__instanceVariableNamesFor_(aString){
const self = this; return (aString.tokenize_(" ")).reject_((function ClassBuilder__(each){
return each.isEmpty();
}
));
}
, "private", unescape("instanceVariableNamesFor%3A%20aString%0D%09%22%20Private%20-%20Return%20the%20instance%20variable%20names%20string.%20%22%0D%0D%09%5E%28aString%20tokenize%3A%20%27%20%27%29%20reject%3A%20%5B%3Aeach%20%7C%20each%20isEmpty%20%5D"));
smalltalk.bind(smalltalk.ClassBuilder, unescape("addSubclassOf%3Anamed%3AinstanceVariableNames%3A"), "addSubclassOf_named_instanceVariableNames_", function ClassBuilder__addSubclassOf_named_instanceVariableNames_(aClass,aString,aCollection){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKClassBuilder.primAddSubclassOfNamedInstanceVariableNames(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "private", unescape("addSubclassOf%3A%20aClass%20named%3A%20aString%20instanceVariableNames%3A%20aCollection%0D%09%22%20Private%20-%20Add%20the%20subclass%20to%20system.%20%22%0D%0D%09%3Cprimitive%3A%20%27primAddSubclassOfNamedInstanceVariableNames%27%20module%3A%20%27SKClassBuilder%27%3E%0D%09%5Eself%20primitiveFailed%20"));
smalltalk.bind(smalltalk.ClassBuilder, unescape("setupClass%3A"), "setupClass_", function ClassBuilder__setupClass_(aClass){
const self = this; self;
return self;
}
, "private", unescape("setupClass%3A%20aClass%0D%09%22%20Private%20-%20Bind/initialize%20the%20class%20delegation%20chain.%20%22%0D%0D%22OBSOLETE%20-%09self%20smalltalk%20%23init%3A%20aClass%22"));
smalltalk.addClass("Stream", smalltalk.Object, ['collection', 'position', 'readLimit'], 'Kernel');
smalltalk.Stream.$classVariableNames=("");
smalltalk.bind(smalltalk.Stream, unescape("collection"), "collection", function Stream__collection(){
const self = this; return self['@collection'];
}
, "accessing", unescape("collection%0D%09%22%20Private%20-%20Return%20the%20collection%20of%20the%20receiver.%20%22%0D%0D%09%5Ecollection"));
smalltalk.bind(smalltalk.Stream, unescape("collection%3A"), "collection_", function Stream__collection_(aCollection){
const self = this; self['@collection']=aCollection;
return self;
}
, "accessing", unescape("collection%3A%20aCollection%0D%09%22%20Private%20-%20Set%20the%20collection%20of%20the%20receiver.%20%22%0D%0D%09collection%20%3A%3D%20aCollection"));
smalltalk.bind(smalltalk.Stream, unescape("setCollection%3A"), "setCollection_", function Stream__setCollection_(aCollection){
const self = this; self.collection_(aCollection);
return self;
}
, "accessing", unescape("setCollection%3A%20aCollection%0D%09%22%20Private%20-%20Set%20the%20receiver%20stream%20collection%20to%20aCollection.%20%22%0D%0D%09self%20collection%3A%20aCollection"));
smalltalk.bind(smalltalk.Stream, unescape("asStream"), "asStream", function Stream__asStream(){
const self = this; return self;
}
, "converting", unescape("asStream%0D%09%22Answer%20the%20receiver%20as%20a%20Stream.%22%0D%0D%09%5Eself"));
smalltalk.bind(smalltalk.Stream, unescape("initialize"), "initialize", function Stream__initialize(){
const self = this; smalltalk.superImplementor(smalltalk.Stream,'initialize').apply(self, []);
self['@position']=(0);
return self;
}
, "initialize", unescape("initialize%0D%09%22%20Private%20-%20Initialize%20the%20receiver.%20%22%0D%0D%09super%20initialize.%0D%09position%20%3A%3D%200."));
smalltalk.bind(smalltalk.Stream, unescape("position"), "position", function Stream__position(){
const self = this; return self['@position'];
}
, "accessing", unescape("position%0D%09%22%20Return%20the%20position%20of%20the%20receiver.%20%22%0D%0D%09%5Eposition"));
smalltalk.bind(smalltalk.Stream, unescape("position%3A"), "position_", function Stream__position_(anInteger){
const self = this; self['@position']=anInteger;
return self;
}
, "accessing", unescape("position%3A%20anInteger%0D%09%22%20Set%20the%20position%20of%20the%20receiver.%20%22%0D%0D%09position%20%3A%3D%20anInteger"));
smalltalk.bind(smalltalk.Stream, unescape("readLimit"), "readLimit", function Stream__readLimit(){
const self = this; if (((nil.is_eqeq_(self['@readLimit'],nil))).valueOf()) {self['@readLimit']=(self.collection()).size()};
return self['@readLimit'];
}
, "accessing", unescape("readLimit%0D%09%22%20Private%20-%20Return%20the%20read%20limit%20of%20the%20receiver.%20%22%0D%0D%09readLimit%20%3D%3D%20nil%20ifTrue%3A%20%5B%20readLimit%20%3A%3D%20self%20collection%20size%20%5D.%0D%09%5EreadLimit"));
smalltalk.bind(smalltalk.Stream, unescape("readLimit%3A"), "readLimit_", function Stream__readLimit_(anInteger){
const self = this; self['@readLimit']=anInteger;
return self;
}
, "accessing", unescape("readLimit%3A%20anInteger%0D%09%22%20Private%20-%20Set%20the%20stream%20size%20of%20the%20receiver.%20%22%0D%0D%09readLimit%20%3A%3D%20anInteger"));
smalltalk.bind(smalltalk.Stream, unescape("contents"), "contents", function Stream__contents(){
var result = nil;
const self = this; result=self.collection();
if (((self.readLimit())._eq((result.size()))).valueOf()) {return result};
return result.copyFrom_to_((1),(self.readLimit()));
}
, "accessing", unescape("contents%0D%09%22%20Return%20the%20contents%20of%20the%20receiver.%20%22%0D%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%20self%20collection.%0D%09self%20readLimit%20%3D%20result%20size%20ifTrue%3A%20%5B%20%5Eresult%20%5D.%0D%09%5Eresult%20copyFrom%3A%201%20to%3A%20self%20readLimit"));
smalltalk.bind(smalltalk.Stream, unescape("size"), "size", function Stream__size(){
const self = this; return self.readLimit();
}
, "accessing", unescape("size%0D%09%22%20Return%20the%20size%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20readLimit"));
smalltalk.bind(smalltalk.Stream, unescape("reset"), "reset", function Stream__reset(){
const self = this; self.position_((0));
return self;
}
, "actions", unescape("reset%0D%09%22%20Reset%20the%20receiver.%20%22%0D%0D%09self%20position%3A%200"));
smalltalk.bind(smalltalk.Stream, unescape("close"), "close", function Stream__close(){
const self = this; self;
return self;
}
, "actions", unescape("close%0D%09%22%20Close%20the%20receiver.%20%22"));
smalltalk.bind(smalltalk.Stream, unescape("flush"), "flush", function Stream__flush(){
const self = this; self;
return self;
}
, "io", unescape("flush%0D%09%22%20OBSOLETE%20-%20Flush%20the%20receiver.%20%22"));
smalltalk.bind(smalltalk.Stream, unescape("resetContents"), "resetContents", function Stream__resetContents(){
const self = this; (function Stream__($1$){
$1$.reset();
return $1$.readLimit_((0))}
)(self);
return self;
}
, "actions", unescape("resetContents%0D%09%22%20Reset%20the%20receiver%20contents.%20%22%0D%0D%09self%20reset%3B%20readLimit%3A%200"));
smalltalk.bind(smalltalk.Stream, unescape("do%3A"), "do_", function Stream__do_(aBlock){
const self = this; while((self.atEnd()).not()){aBlock.value_((self.next()))};;
return self;
}
, "enumerating", unescape("do%3A%20aBlock%0D%09%22%20Evaluates%20aBlock%20streaming%20on%20the%20receiver.%20%22%0D%0D%09%5B%20self%20atEnd%20%5D%20whileFalse%3A%20%5B%20aBlock%20value%3A%20self%20next%20%5D"));
smalltalk.bind(smalltalk.Stream, unescape("setToEnd"), "setToEnd", function Stream__setToEnd(){
const self = this; self.position_((self.size()));
return self;
}
, "positioning", unescape("setToEnd%0D%09%22%20Position%20the%20receiver%20at%20end.%20%22%0D%0D%09self%20position%3A%20self%20size"));
smalltalk.bind(smalltalk.Stream, unescape("skip%3A"), "skip_", function Stream__skip_(anInteger){
const self = this; self.position_((((anInteger._plus((self.position()))).min_((self.size()))).max_((0))));
return self;
}
, "positioning", unescape("skip%3A%20anInteger%0D%09%22%20Skip%20next%20anInteger%20readable%20elements%20in%20the%20receiver.%20%22%0D%0D%09self%20position%3A%20%28%28anInteger%20+%20self%20position%20min%3A%20self%20size%29%20max%3A%200%29"));
smalltalk.bind(smalltalk.Stream, unescape("next"), "next", function Stream__next(){
const self = this; self.position_(((self.position())._plus((1))));
return self['@collection'].at_((self.position()));
}
, "reading", unescape("next%0D%09%22%20Return%20the%20next%20readable%20element%20in%20the%20receiver.%20%22%0D%0D%09self%20position%3A%20self%20position%20+%201.%0D%09%5Ecollection%20at%3A%20self%20position"));
smalltalk.bind(smalltalk.Stream, unescape("next%3A"), "next_", function Stream__next_(anInteger){
var result = nil;
const self = this; var $early={name:"stReturn"};
try {
result=((self.collection()).$klass).$$new();
for(var $1$ = anInteger;$1$>0;$1$--){ if ((self.atEnd()).valueOf()) {$early.result=result; throw ($early)};
result.add_((self.next()))};;
return result;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "reading", unescape("next%3A%20anInteger%0D%09%22%20Return%20the%20next%20anInteger%20elements%20read%20from%20the%20receiver.%0D%09If%20the%20receiver%20reach%20its%20end%2C%20the%20returned%20collection%20has%20less%20elements.%0D%09%22%0D%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%20self%20collection%20class%20new.%0D%09anInteger%20timesRepeat%3A%20%5B%0D%09%09self%20atEnd%20ifTrue%3A%20%5B%20%5Eresult%20%5D.%0D%09%09result%20add%3A%20self%20next.%0D%09%5D.%0D%09%5Eresult"));
smalltalk.bind(smalltalk.Stream, unescape("isStream"), "isStream", function Stream__isStream(){
const self = this; return true;
}
, "testing", unescape("isStream%0D%09%22Answer%20true%20if%20receiver%20is%20a%20kind%20of%20Stream.%22%0D%0D%09%5Etrue"));
smalltalk.bind(smalltalk.Object, unescape("isStream"), "isStream", function Object__isStream(){
const self = this; return false;
}
, "testing", unescape("isStream%0D%09%22Answer%20true%20if%20the%20receiver%20is%20a%20kind%20of%20Stream.%22%0D%0D%09%5Efalse"));
smalltalk.bind(smalltalk.Stream, unescape("nextPut%3A"), "nextPut_", function Stream__nextPut_(anObject){
const self = this; self.position_(((self.position())._plus((1))));
(self.collection()).at_put_((self.position()),anObject);
self.readLimit_(((self.readLimit()).max_((self.position()))));
return self;
}
, "writing", unescape("nextPut%3A%20anObject%0D%09%22%20Put%20anObject%20onto%20the%20receiver.%20%22%0D%0D%09self%20position%3A%20self%20position%20+%201.%0D%09self%20collection%20at%3A%20self%20position%20put%3A%20anObject.%0D%09self%20readLimit%3A%20%28self%20readLimit%20max%3A%20self%20position%29"));
smalltalk.bind(smalltalk.Stream, unescape("nextPutAll%3A"), "nextPutAll_", function Stream__nextPutAll_(aCollection){
const self = this; aCollection.do_((function Stream__(each){
return self.nextPut_(each);
}
));
return self;
}
, "writing", unescape("nextPutAll%3A%20aCollection%0D%09%22%20Put%20aCollection%20onto%20the%20receiver.%20%22%0D%0D%09aCollection%20do%3A%20%5B%3Aeach%20%7C%20self%20nextPut%3A%20each%20%5D"));
smalltalk.bind(smalltalk.Stream, unescape("lf"), "lf", function Stream__lf(){
const self = this; self.nextPutAll_((smalltalk.String.lf()));
return self;
}
, "writing", unescape("lf%0D%09%22%20Put%20a%20line%20break%20sequence%20onto%20the%20receiver.%0D%09Note%3A%20this%20implementation%20MUST%20be%20consistent%20with%20%23nextLine%0D%09%22%0D%0D%09self%20nextPutAll%3A%20String%20lf"));
smalltalk.bind(smalltalk.Stream, unescape("cr"), "cr", function Stream__cr(){
const self = this; self.nextPutAll_((smalltalk.String.crlf()));
return self;
}
, "writing", unescape("cr%0D%09%22%20Put%20a%20line%20break%20sequence%20onto%20the%20receiver.%0D%09Note%3A%20this%20implementation%20MUST%20be%20consistent%20with%20%23nextLine%0D%09%22%0D%0D%09self%20nextPutAll%3A%20String%20crlf"));
smalltalk.bind(smalltalk.Stream, unescape("space"), "space", function Stream__space(){
const self = this; self.nextPutAll_((smalltalk.String.space()));
return self;
}
, "writing", unescape("space%0D%09%22%20Put%20a%20space%20sequence%20onto%20the%20receiver.%20%22%0D%0D%09self%20nextPutAll%3A%20String%20space"));
smalltalk.bind(smalltalk.Stream, unescape("tab"), "tab", function Stream__tab(){
const self = this; self.nextPutAll_((smalltalk.String.tab()));
return self;
}
, "writing", unescape("tab%0D%09%22%20Put%20a%20tab%20sequence%20onto%20the%20receiver.%20%22%0D%0D%09self%20nextPutAll%3A%20String%20tab"));
smalltalk.bind(smalltalk.Stream, unescape("peek"), "peek", function Stream__peek(){
const self = this; if ((self.atEnd()).not()) {return (self.collection()).at_(((self.position())._plus((1))))} else {return nil};
}
, "reading", unescape("peek%0D%09%22%20Return%20the%20next%20readable%20element%20from%20the%20receiver%20without%20advancing%20the%20receiver%3B%20or%20nil.%20%22%0D%0D%09%5Eself%20atEnd%20ifFalse%3A%20%5B%0D%09%20%20%20%20self%20collection%20at%3A%20self%20position%20+%201%0D%09%5D"));
smalltalk.bind(smalltalk.Stream, unescape("peekFor%3A"), "peekFor_", function Stream__peekFor_(anObject){
const self = this; return (anObject._eq((self.peek()))).and_((function Stream__(){
if ((self.atEnd()).not()) {self.next()};
return true;
}
));
}
, "reading", unescape("peekFor%3A%20anObject%0D%09%22%20Return%20true%20if%20the%20next%20readable%20element%20from%20the%20receiver%20equals%20anObject.%0D%09Advance%20the%20receiver%20if%20the%20result%20is%20true.%0D%09%22%0D%0D%09%5EanObject%20%3D%20self%20peek%20and%3A%20%5B%0D%09%09self%20atEnd%20ifFalse%3A%20%5B%20self%20next%20%5D.%0D%09%09true%0D%09%5D"));
smalltalk.bind(smalltalk.Stream, unescape("atEnd"), "atEnd", function Stream__atEnd(){
const self = this; return (self.position())._gt_eq((self.size()));
}
, "testing", unescape("atEnd%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20at%20end.%20%22%0D%0D%09%5Eself%20position%20%3E%3D%20self%20size"));
smalltalk.bind(smalltalk.Stream, unescape("atStart"), "atStart", function Stream__atStart(){
const self = this; return (self.position())._eq((0));
}
, "testing", unescape("atStart%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20at%20start%20position.%20%22%0D%0D%09%5Eself%20position%20%3D%200"));
smalltalk.bind(smalltalk.Stream, unescape("isEmpty"), "isEmpty", function Stream__isEmpty(){
const self = this; return (self.size())._eq((0));
}
, "testing", unescape("isEmpty%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20empty.%20%22%0D%0D%09%5Eself%20size%20%3D%200"));
smalltalk.bind(smalltalk.Stream, unescape("notEmpty"), "notEmpty", function Stream__notEmpty(){
const self = this; return (self.isEmpty()).not();
}
, "testing", unescape("notEmpty%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20not%20empty.%20%22%0D%0D%09%5Eself%20isEmpty%20not"));
smalltalk.bind(smalltalk.Stream, unescape("upTo%3A"), "upTo_", function Stream__upTo_(anObject){
var result = nil;
const self = this; result=((self.collection()).$klass).$$new();
while(((self.atEnd()).or_((function Stream__(){
return (self.peek())._eq(anObject);
}
))).not()){result.add_((self.next()))};;
if ((self.atEnd()).not()) {self.next()};
return result;
}
, "reading", unescape("upTo%3A%20anObject%0D%09%22%20Return%20the%20elements%20read%20from%20the%20receiver%20upto%20anObject%20%28or%20end%29.%20%22%0D%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%20self%20collection%20class%20new.%0D%09%5B%20self%20atEnd%20or%3A%20%5B%20self%20peek%20%3D%20anObject%20%5D%5D%20whileFalse%3A%20%5B%0D%09%20%20%20%20result%20add%3A%20self%20next%0D%09%5D.%0D%09self%20atEnd%20ifFalse%3A%20%5B%20self%20next%20%5D.%0D%09%5Eresult"));
smalltalk.bind(smalltalk.Stream, unescape("upToEnd"), "upToEnd", function Stream__upToEnd(){
const self = this; return self.upTo_((smalltalk.Object.$$new()));
}
, "reading", unescape("upToEnd%0D%09%22%20Return%20the%20contents%20of%20the%20receiver%20upto%20end.%20%22%0D%0D%09%5Eself%20upTo%3A%20Object%20new"));
smalltalk.bind(smalltalk.Stream, unescape("upToLineEnd"), "upToLineEnd", function Stream__upToLineEnd(){
var result = nil;
var lf = nil;
var cr = nil;
const self = this; lf=smalltalk.Character.lf();
cr=smalltalk.Character.cr();
result=((self.collection()).$klass).$$new();
while((((self.atEnd()).or_((function Stream__(){
return (self.peek())._eq(lf);
}
))).or_((function Stream__(){
return (self.peek())._eq(cr);
}
))).not()){result.add_((self.next()))};;
if ((self.atEnd()).not()) {var end = nil;
end=self.next();
if (((end._eq(cr)).and_(((function Stream__(){
return (self.atEnd()).not();
}
).and_((function Stream__(){
return (self.peek())._eq(lf);
}
))))).valueOf()) {self.next()}};
return result;
}
, "reading", unescape("upToLineEnd%0D%09%22%20Return%20the%20elements%20read%20from%20the%20receiver%20upto%20end%20of%20line%20%28or%20end%29.%20%22%0D%0D%09%7C%20result%20lf%20cr%20%7C%0D%09lf%20%3A%3D%20Character%20lf.%0D%09cr%20%3A%3D%20Character%20cr.%0D%09result%20%3A%3D%20self%20collection%20class%20new.%0D%09%5B%28self%20atEnd%20%0D%09%09or%3A%20%5Bself%20peek%20%3D%20lf%5D%29%0D%09%09or%3A%20%5Bself%20peek%20%3D%20cr%5D%5D%20whileFalse%3A%20%5B%0D%09%20%20%20%20result%20add%3A%20self%20next%0D%09%5D.%0D%09self%20atEnd%20ifFalse%3A%20%5B%0D%09%09%7C%20end%20%7C%0D%09%09end%20%3A%3D%20self%20next.%0D%09%09%28end%20%3D%20cr%0D%09%09%09and%3A%20%28%5Bself%20atEnd%20not%5D%0D%09%09%09and%3A%20%5Bself%20peek%20%3D%20lf%5D%29%29%0D%09%09%09ifTrue%3A%20%5Bself%20next%5D%5D.%0D%09%5Eresult"));
smalltalk.bind(smalltalk.Stream, unescape("nextLine"), "nextLine", function Stream__nextLine(){
var result = nil;
var start = nil;
const self = this; start=self.position();
result=self.upToLineEnd();
return result;
}
, "reading", unescape("nextLine%0D%09%22%20Return%20the%20characters%20read%20from%20the%20receiver%20up%20to%20the%20line%20delimiter.%20%22%0D%0D%09%7C%20result%20start%20%7C%0D%09start%20%3A%3D%20self%20position.%0D%09result%20%3A%3D%20self%20upToLineEnd.%0D%09%5Eresult"));
smalltalk.bind(smalltalk.Stream, unescape("skipTo%3A"), "skipTo_", function Stream__skipTo_(anObject){
const self = this; var $early={name:"stReturn"};
try {
while((self.atEnd()).not()){if (((self.next())._eq(anObject)).valueOf()) {$early.result=true; throw ($early)}};;
return false;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "reading", unescape("skipTo%3A%20anObject%0D%09%22%20Advance%20the%20receiver%20upto%20anObject%20%28or%20end%29.%20%22%0D%0D%09%5B%20self%20atEnd%20%5D%20whileFalse%3A%20%5B%0D%09%09self%20next%20%3D%20anObject%20ifTrue%3A%20%5B%20%5Etrue%20%5D.%0D%09%5D.%0D%09%5Efalse"));
smalltalk.bind(smalltalk.Stream, unescape("skipSeparators"), "skipSeparators", function Stream__skipSeparators(){
const self = this; var $early={name:"stReturn"};
try {
while(((function Stream__(){
if ((self.atEnd()).valueOf()) {$early.result=false; throw ($early)};
return (self.peek()).isSeparator();
}
)()).valueOf()){self.next()};;
return true;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "reading", unescape("skipSeparators%0D%09%22%20Advance%20the%20receiver%20upto%20a%20non-separator%20%28or%20end%29.%0D%09Return%20true%20%20if%20a%20non-separator%20contents%20is%20found%2C%0D%09return%20false%20if%20run%20upto%20end%20of%20stream.%0D%09%22%0D%0D%09%5B%20self%20atEnd%20ifTrue%3A%20%5B%20%5Efalse%20%5D.%0D%09%20%20self%20peek%20isSeparator%0D%09%5D%20whileTrue%3A%20%5B%20self%20next%20%5D.%0D%09%5Etrue"));
smalltalk.bind(smalltalk.Stream.$klass, unescape("on%3A"), "on_", function Stream_class__on_(aCollection){
const self = this; return (function Stream_class__($1$){
$1$.collection_(aCollection);
$1$.readLimit_((aCollection.size()));
return $1$.yourself()}
)(self.$$new());
}
, "instantiation", unescape("on%3A%20aCollection%0D%09%22%20Return%20an%20instance%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20new%0D%09%09collection%3A%20aCollection%3B%0D%09%09readLimit%3A%20aCollection%20size%3B%0D%09%09yourself"));
smalltalk.bind(smalltalk.Stream, unescape("upToEnd"), "upToEnd", function Stream__upToEnd(){
var result = nil;
const self = this; result=(self.collection()).copyFrom_to_(((self.position())._plus((1))),(self.readLimit()));
self.setToEnd();
return result;
}
, "reading", unescape("upToEnd%0D%09%22%20Return%20the%20contents%20of%20the%20receiver%20upto%20end.%20%22%0D%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%20self%20collection%20copyFrom%3A%20self%20position%20+%201%20to%3A%20self%20readLimit.%0D%09self%20setToEnd.%0D%09%5Eresult"));
smalltalk.addClass("StringStream", smalltalk.Stream, [], 'Kernel');
smalltalk.StringStream.$classVariableNames=("");
smalltalk.bind(smalltalk.StringStream, unescape("next%3A"), "next_", function StringStream__next_(anInteger){
var start = nil;
var result = nil;
var stop = nil;
const self = this; start=self.position();
stop=(start._plus(anInteger)).min_((self.readLimit()));
result=(self.collection()).copyFrom_to_((start._plus((1))),stop);
self.position_(stop);
return result;
}
, "reading", unescape("next%3A%20anInteger%0D%09%22%20Return%20the%20next%20anInteger%20elements%20read%20from%20the%20receiver.%0D%09If%20the%20receiver%20reach%20its%20end%2C%20the%20returned%20collection%20has%20less%20elements.%0D%09%22%0D%0D%09%7C%20start%20result%20stop%20%7C%0D%09start%20%3A%3D%20self%20position.%0D%09stop%20%3A%3D%20start%20+%20anInteger%20min%3A%20self%20readLimit.%0D%09result%20%3A%3D%20self%20collection%20copyFrom%3A%20start%20+%201%20to%3A%20stop.%0D%09self%20position%3A%20stop.%0D%09%5Eresult"));
smalltalk.bind(smalltalk.StringStream, unescape("nextPut%3A"), "nextPut_", function StringStream__nextPut_(aString){
const self = this; self.nextPutAll_(aString);
return self;
}
, "writing", unescape("nextPut%3A%20aString%0D%09%22%20Put%20aString%20onto%20the%20receiver.%20%22%0D%0D%09self%20nextPutAll%3A%20aString"));
smalltalk.bind(smalltalk.StringStream, unescape("nextPutAll%3A"), "nextPutAll_", function StringStream__nextPutAll_(aString){
var result = nil;
const self = this; if (((self.position())._eq(((self.collection()).size()))).valueOf()) {result=(self.collection())._comma(aString)} else {var substring = nil;
substring=(self.collection()).copyFrom_to_((1),(self.position()));
result=(substring.isEmpty()).ifTrue_ifFalse_((function StringStream__(){
return aString;
}
),(function StringStream__(){
return substring._comma(aString);
}
));
substring=(self.collection()).copyFrom_to_((((self.position())._plus((1)))._plus((aString.size()))),((self.collection()).size()));
result=(substring.isEmpty()).ifTrue_ifFalse_((function StringStream__(){
return result;
}
),(function StringStream__(){
return result._comma(substring);
}
))};
self.collection_(result);
self.position_(((self.position())._plus((aString.size()))));
self.readLimit_(((self.readLimit()).max_(self['@position'])));
return self;
}
, "writing", unescape("nextPutAll%3A%20aString%0D%09%22%20Put%20aString%20onto%20the%20receiver%20at%20current%20position%3B%20expanding%20internal%20contents.%20%22%0D%0D%09%7C%20result%20%7C%0D%09self%20position%20%3D%20self%20collection%20size%0D%09ifTrue%3A%20%5B%20result%20%3A%3D%20self%20collection%20%2C%20aString%20%5D%0D%09ifFalse%3A%20%5B%20%7C%20substring%20%7C%0D%09%09substring%20%3A%3D%20self%20collection%20copyFrom%3A%201%20to%3A%20self%20position.%0D%09%09result%20%3A%3D%20substring%20isEmpty%20ifTrue%3A%20%5B%20aString%20%5D%20ifFalse%3A%20%5B%20substring%20%2C%20aString%20%5D.%0D%09%09substring%20%3A%3D%20self%20collection%0D%09%09%09copyFrom%3A%20self%20position%20+%201%20+%20aString%20size%0D%09%09%09to%3A%20self%20collection%20size.%0D%09%09result%20%3A%3D%20substring%20isEmpty%20ifTrue%3A%20%5B%20result%20%5D%20ifFalse%3A%20%5B%20result%20%2C%20substring%20%5D.%0D%09%5D.%0D%09self%20collection%3A%20result.%0D%09self%20position%3A%20self%20position%20+%20aString%20size.%0D%09self%20readLimit%3A%20%28self%20readLimit%20max%3A%20position%29"));
smalltalk.bind(smalltalk.StringStream, unescape("print%3A"), "print_", function StringStream__print_(anObject){
const self = this; anObject.printOn_(self);
return self;
}
, "writing", unescape("print%3A%20anObject%0D%0D%09anObject%20printOn%3A%20self"));
smalltalk.bind(smalltalk.StringStream, unescape("skipTo%3A"), "skipTo_", function StringStream__skipTo_(anObject){
var index = nil;
const self = this; if ((anObject.isString()).not()) {self.setToEnd();
return false};
index=(self.collection()).indexOf_startingAt_(anObject,((self.position())._plus((1))));
if ((index.between_and_(((self.position())._plus((1))),(self.readLimit()))).valueOf()) {self.position_(((index._plus((anObject.size())))._minus((1))));
return true};
self.setToEnd();
return false;
}
, "reading", unescape("skipTo%3A%20anObject%0D%09%22%20Advance%20the%20receiver%20upto%20anObject%20%28or%20end%29.%20%22%0D%0D%09%7C%20index%20%7C%0D%09anObject%20isString%20ifFalse%3A%20%5B%20self%20setToEnd.%20%5Efalse%20%5D.%0D%09index%20%3A%3D%20self%20collection%20indexOf%3A%20anObject%20startingAt%3A%20self%20position%20+%201.%0D%09%28index%20between%3A%20self%20position%20+%201%20and%3A%20self%20readLimit%29%20ifTrue%3A%20%5B%0D%09%09self%20position%3A%20index%20+%20anObject%20size%20-%201.%0D%09%09%5Etrue%0D%09%5D.%0D%09self%20setToEnd.%0D%09%5Efalse"));
smalltalk.bind(smalltalk.StringStream, unescape("upTo%3A"), "upTo_", function StringStream__upTo_(anObject){
var start = nil;
var found = nil;
const self = this; if ((anObject.isString()).not()) {return self.upToEnd()};
start=(self.position())._plus((1));
found=(self.skipTo_(anObject)).ifTrue_ifFalse_((function StringStream__(){
return anObject.size();
}
),(function StringStream__(){
return (0);
}
));
return (self.collection()).copyFrom_to_(start,((self.position())._minus(found)));
}
, "reading", unescape("upTo%3A%20anObject%0D%09%22%20Return%20the%20elements%20read%20from%20the%20receiver%20upto%20anObject%20%28or%20end%29.%20%22%0D%0D%09%7C%20start%20found%20%7C%0D%09anObject%20isString%20ifFalse%3A%20%5B%20%5Eself%20upToEnd%20%5D.%0D%09start%20%3A%3D%20self%20position%20+%201.%0D%09found%20%3A%3D%20%28self%20skipTo%3A%20anObject%29%20ifTrue%3A%20%5B%20anObject%20size%20%5D%20ifFalse%3A%20%5B%200%20%5D.%0D%09%5Eself%20collection%20copyFrom%3A%20start%20to%3A%20self%20position%20-%20found"));
smalltalk.bind(smalltalk.StringStream, unescape("peek"), "peek", function StringStream__peek(){
const self = this; if (((self.position())._lt((self['@collection'].size()))).valueOf()) {return self['@collection'].at_(((self.position())._plus((1))))} else {return nil};
}
, "reading", unescape("peek%0D%09%22%20Return%20the%20next%20readable%20element%20from%20the%20receiver%20without%20advancing%20%28or%20nil%29.%20%22%0D%0D%09%5Eself%20position%20%3C%20collection%20size%0D%20%20%20%20%20%20%20%20ifTrue%3A%20%5Bcollection%20at%3A%20self%20position%20+%201%5D%0D%20%20%20%20%20%20%20%20ifFalse%3A%20%5Bnil%5D%20"));
smalltalk.bind(smalltalk.StringStream, unescape("next"), "next", function StringStream__next(){
var result = nil;
const self = this; result=self.peek();
if (((nil.isNil_(result)===false)).valueOf()) {self['@position']=self['@position']._plus((1))};
return result;
}
, "reading", unescape("next%0D%09%22%20Return%20the%20next%20readable%20element%20in%20the%20receiver%20%28or%20nil%29.%20%22%0D%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%20self%20peek.%0D%09result%20notNil%20ifTrue%3A%20%5B%20position%20%3A%3D%20position%20+%201%20%5D.%0D%09%5Eresult"));
smalltalk.bind(smalltalk.StringStream, unescape("upToLineEnd"), "upToLineEnd", function StringStream__upToLineEnd(){
var start = nil;
var cr = nil;
var lf = nil;
const self = this; start=(self.position())._plus((1));
lf=smalltalk.Character.lf();
cr=smalltalk.Character.cr();
while((((self.atEnd()).or_((function StringStream__(){
return (self.peek())._eq(lf);
}
))).or_((function StringStream__(){
return (self.peek())._eq(cr);
}
))).not()){self.next()};;
if ((self.atEnd()).not()) {var end = nil;
end=self.next();
if ((((self.atEnd()).not()).and_((function StringStream__(){
return (self.peek())._eq(lf);
}
))).valueOf()) {self.next()}};
return (self.collection()).copyFrom_to_(start,(self.position()));
}
, "reading", unescape("upToLineEnd%0D%09%22%20Return%20the%20elements%20read%20from%20the%20receiver%20upto%20line%20end%20%28or%20end%29.%20%22%0D%0D%09%7C%20start%20cr%20lf%20%7C%0D%09start%20%3A%3D%20self%20position%20+%201.%0D%09lf%20%3A%3D%20Character%20lf.%0D%09cr%20%3A%3D%20Character%20cr.%0D%09%5B%28self%20atEnd%20%0D%09%09or%3A%20%5Bself%20peek%20%3D%20lf%5D%29%0D%09%09or%3A%20%5Bself%20peek%20%3D%20cr%5D%5D%20whileFalse%3A%20%5B%0D%09%09self%20next%0D%09%5D.%0D%09self%20atEnd%20ifFalse%3A%20%5B%0D%09%09%7C%20end%20%7C%0D%09%09end%20%3A%3D%20self%20next.%0D%09%09%28self%20atEnd%20not%20and%3A%20%5Bself%20peek%20%3D%20lf%5D%29%0D%09%09%09ifTrue%3A%20%5Bself%20next%5D%5D.%0D%09%5Eself%20collection%20copyFrom%3A%20start%20to%3A%20self%20position"));
smalltalk.bind(smalltalk.StringStream, unescape("upToSeparator"), "upToSeparator", function StringStream__upToSeparator(){
var start = nil;
const self = this; start=(self.position())._plus((1));
while((((self.atEnd()).not()).and_((function StringStream__(){
return ((self.peek()).isSeparator()).not();
}
))).valueOf()){self.next()};;
return (self.collection()).copyFrom_to_(start,(self.position()));
}
, "reading", unescape("upToSeparator%0D%09%22%20Return%20the%20elements%20read%20from%20the%20receiver%20upto%20a%20separator%20%28or%20end%29.%20%22%0D%0D%09%7C%20start%20%7C%0D%09start%20%3A%3D%20self%20position%20+%201.%0D%09%5Bself%20atEnd%20not%20and%3A%20%5Bself%20peek%20isSeparator%20not%5D%5D%20whileTrue%3A%20%5B%0D%09%09self%20next%0D%09%5D.%0D%09%5Eself%20collection%20copyFrom%3A%20start%20to%3A%20self%20position"));
smalltalk.bind(smalltalk.StringStream, unescape("nextMessagePattern"), "nextMessagePattern", function StringStream__nextMessagePattern(){
var pattern = nil;
var selector = nil;
var args = nil;
const self = this; args=[];
self.skipSeparators();
selector=self.upToSeparator();
if ((selector.isEmpty()).valueOf()) {return nil};
if (((selector.argumentCount())._gt((0))).valueOf()) {var part = nil;
while(((function StringStream__(){
self.skipSeparators();
args.add_((self.upToSeparator()));
self.skipSeparators();
part=((self.peek())._eq(unescape("%22"))).ifTrue_ifFalse_((function StringStream__(){
return "";
}
),(function StringStream__(){
return self.upToSeparator();
}
));
return (part.notEmpty()).and_((function StringStream__(){
return (part.last())._eq(":");
}
));
}
)()).valueOf()){selector=selector._comma(part)};};
pattern=smalltalk.Message.selector_arguments_(selector,args);
self.skipSeparators();
if (((self.peek())._eq(unescape("%22"))).valueOf()) {pattern.comment_(((function StringStream__($1$){
$1$.next();
return $1$.upTo_(unescape("%22"))}
)(self).trimBlanks()))};
return pattern;
}
, "tools", unescape("nextMessagePattern%0D%09%22%20Return%20a%20message%20pattern%20read%20from%20the%20receiver%20%28or%20nil%29.%0D%09Note%3A%20it%20is%20assumed%20that%20there%20is%20a%20correct%20message%20header%20in%20the%20receiver.%0D%09%22%0D%0D%09%7C%20pattern%20selector%20args%20%7C%0D%09args%20%3A%3D%20%23%28%29.%0D%09self%20skipSeparators.%0D%09selector%20%3A%3D%20self%20upToSeparator.%0D%09selector%20isEmpty%20ifTrue%3A%20%5B%20%5Enil%20%5D.%0D%09selector%20argumentCount%20%3E%200%20ifTrue%3A%20%5B%0D%09%09%7C%20part%20%7C%0D%09%09%5Bself%20skipSeparators.%0D%09%09args%20add%3A%20self%20upToSeparator.%0D%09%09self%20skipSeparators.%0D%09%09part%20%3A%3D%20self%20peek%20%3D%20%24%22%0D%09%09%09ifTrue%3A%20%5B%20%27%27%20%5D%0D%09%09%09ifFalse%3A%20%5B%20self%20upToSeparator%20%5D.%0D%09%09part%20notEmpty%20and%3A%20%5B%20part%20last%20%3D%20%24%3A%20%5D%0D%09%09%5D%20whileTrue%3A%20%5Bselector%20%3A%3D%20selector%20%2C%20part%5D.%0D%09%5D.%0D%09pattern%20%3A%3D%20Message%20selector%3A%20selector%20arguments%3A%20args.%0D%09self%20skipSeparators.%0D%09self%20peek%20%3D%20%24%22%20ifTrue%3A%20%5B%0D%09%09pattern%20comment%3A%20%28self%20next%3B%20upTo%3A%20%24%22%29%20trimBlanks%0D%09%5D.%0D%09%5Epattern"));
smalltalk.addClass("Random", smalltalk.Object, [], 'Kernel');
smalltalk.Random.$classVariableNames=("");
smalltalk.bind(smalltalk.Random, unescape("next"), "next", function Random__next(){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKNumber.primRandom(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; self.primitiveFailed();
return self;
}
, "accessing", unescape("next%0D%09%22%20Return%20the%20next%20random%20number.%20%22%0D%0D%09%3Cprimitive%3A%20%27primRandom%27%20module%3A%20%27SKNumber%27%3E%0D%09self%20primitiveFailed"));
smalltalk.bind(smalltalk.Random, unescape("next%3A"), "next_", function Random__next_(anInteger){
const self = this; return ((1).to_(anInteger)).collect_((function Random__(each){
return self.next();
}
));
}
, "accessing", unescape("next%3A%20anInteger%0D%09%22%20Return%20the%20next%20anInteger%20random%20numbers.%20%22%0D%0D%09%5E%281%20to%3A%20anInteger%29%20collect%3A%20%5B%3Aeach%20%7C%20self%20next%20%5D"));
smalltalk.addClass("Point", smalltalk.Object, ['x', 'y'], 'Kernel');
smalltalk.Point.$classVariableNames=("");
smalltalk.bind(smalltalk.Point.$klass, unescape("x%3Ay%3A"), "x_y_", function Point_class__x_y_(x,y){
const self = this; return (function Point_class__($1$){
$1$.x_(x);
return $1$.y_(y)}
)(self.basicNew());
}
, "instantiation", unescape("x%3A%20x%20y%3A%20y%0D%09%22%20Return%20an%20instance%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20basicNew%20x%3A%20x%3B%20y%3A%20y"));
smalltalk.bind(smalltalk.Point.$klass, unescape("zero"), "zero", function Point_class__zero(){
const self = this; return (function Point_class__($1$){
$1$.x_((0));
return $1$.y_((0))}
)(self.basicNew());
}
, "instantiation", unescape("zero%0D%09%22%20Return%20an%20instance%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20basicNew%20x%3A%200%3B%20y%3A%200"));
smalltalk.bind(smalltalk.Point, unescape("x"), "x", function Point__x(){
const self = this; return self['@x'];
}
, "accessing", unescape("x%0D%09%22%20Return%20the%20x%20of%20the%20receiver.%20%22%0D%0D%09%5Ex"));
smalltalk.bind(smalltalk.Point, unescape("y"), "y", function Point__y(){
const self = this; return self['@y'];
}
, "accessing", unescape("y%0D%09%22%20Return%20the%20y%20of%20the%20receiver.%20%22%0D%0D%09%5Ey"));
smalltalk.bind(smalltalk.Point, unescape("y%3A"), "y_", function Point__y_(aNumber){
const self = this; self['@y']=((nil.isNil_(aNumber))).ifTrue_ifFalse_((function Point__(){
return (0);
}
),(function Point__(){
return aNumber;
}
));
return self;
}
, "accessing", unescape("y%3A%20aNumber%0D%09%22%20Set%20the%20y%20of%20the%20receiver.%20%22%0D%0D%09y%20%3A%3D%20aNumber%20isNil%20ifTrue%3A%20%5B%200%20%5D%20ifFalse%3A%20%5B%20aNumber%20%5D"));
smalltalk.bind(smalltalk.Point, unescape("x%3A"), "x_", function Point__x_(aNumber){
const self = this; self['@x']=((nil.isNil_(aNumber))).ifTrue_ifFalse_((function Point__(){
return (0);
}
),(function Point__(){
return aNumber;
}
));
return self;
}
, "accessing", unescape("x%3A%20aNumber%0D%09%22%20Set%20the%20x%20of%20the%20receiver.%20%22%0D%0D%09x%20%3A%3D%20aNumber%20isNil%20ifTrue%3A%20%5B%200%20%5D%20ifFalse%3A%20%5B%20aNumber%20%5D"));
smalltalk.bind(smalltalk.Point, unescape("*"), "_star", function Point___star(aPoint){
const self = this; if ((aPoint.isNumber()).valueOf()) {return (self['@x']._star(aPoint))._at((self['@y']._star(aPoint)))};
return smalltalk.Point.x_y_((self['@x']._star(((aPoint.asPoint()).x()))),(self['@y']._star(((aPoint.asPoint()).y()))));
}
, "arithmetic", unescape("*%20aPoint%0D%09%22%20Return%20the%20result%20of%20operation%20with%20aPoint.%20%22%0D%0D%09aPoint%20isNumber%20ifTrue%3A%20%5B%20%5Ex%20*%20aPoint%20@%20%28y%20*%20aPoint%29%20%5D.%0D%09%5EPoint%09x%3A%20x%20*%20aPoint%20asPoint%20x%0D%09%09y%3A%20y%20*%20aPoint%20asPoint%20y"));
smalltalk.bind(smalltalk.Point, unescape("+"), "_plus", function Point___plus(aPoint){
const self = this; if ((aPoint.isNumber()).valueOf()) {return (self['@x']._plus(aPoint))._at((self['@y']._plus(aPoint)))};
return smalltalk.Point.x_y_((self['@x']._plus(((aPoint.asPoint()).x()))),(self['@y']._plus(((aPoint.asPoint()).y()))));
}
, "arithmetic", unescape("+%20aPoint%0D%09%22%20Return%20the%20result%20of%20operation%20with%20aPoint.%20%22%0D%0D%09aPoint%20isNumber%20ifTrue%3A%20%5B%20%5Ex%20+%20aPoint%20@%20%28y%20+%20aPoint%29%20%5D.%0D%09%5EPoint%09x%3A%20x%20+%20aPoint%20asPoint%20x%0D%09%09y%3A%20y%20+%20aPoint%20asPoint%20y"));
smalltalk.bind(smalltalk.Point, unescape("-"), "_minus", function Point___minus(aPoint){
const self = this; if ((aPoint.isNumber()).valueOf()) {return (self['@x']._minus(aPoint))._at((self['@y']._minus(aPoint)))};
return smalltalk.Point.x_y_((self['@x']._minus(((aPoint.asPoint()).x()))),(self['@y']._minus(((aPoint.asPoint()).y()))));
}
, "arithmetic", unescape("-%20aPoint%0D%09%22%20Return%20the%20result%20of%20operation%20with%20aPoint.%20%22%0D%0D%09aPoint%20isNumber%20ifTrue%3A%20%5B%20%5Ex%20-%20aPoint%20@%20%28y%20-%20aPoint%29%20%5D.%0D%09%5EPoint%09x%3A%20x%20-%20aPoint%20asPoint%20x%0D%09%09y%3A%20y%20-%20aPoint%20asPoint%20y"));
smalltalk.bind(smalltalk.Point, unescape("/"), "_slash", function Point___slash(aPoint){
const self = this; if ((aPoint.isNumber()).valueOf()) {return (self['@x']._slash(aPoint))._at((self['@y']._slash(aPoint)))};
return smalltalk.Point.x_y_((self['@x']._slash(((aPoint.asPoint()).x()))),(self['@y']._slash(((aPoint.asPoint()).y()))));
}
, "arithmetic", unescape("/%20aPoint%0D%09%22%20Return%20the%20result%20of%20operation%20with%20aPoint.%20%22%0D%0D%09aPoint%20isNumber%20ifTrue%3A%20%5B%20%5Ex%20/%20aPoint%20@%20%28y%20/%20aPoint%29%20%5D.%0D%09%5EPoint%09x%3A%20x%20/%20aPoint%20asPoint%20x%0D%09%09y%3A%20y%20/%20aPoint%20asPoint%20y"));
smalltalk.bind(smalltalk.Point, unescape("//"), "_slash_slash", function Point___slash_slash(aPoint){
const self = this; if ((aPoint.isNumber()).valueOf()) {return (self['@x']._slash_slash(aPoint))._at((self['@y']._slash_slash(aPoint)))};
return smalltalk.Point.x_y_((self['@x']._slash_slash(((aPoint.asPoint()).x()))),(self['@y']._slash_slash(((aPoint.asPoint()).y()))));
}
, "arithmetic", unescape("//%20aPoint%0D%09%22%20Return%20the%20result%20of%20operation%20with%20aPoint.%20%22%0D%0D%09aPoint%20isNumber%20ifTrue%3A%20%5B%20%5Ex%20//%20aPoint%20@%20%28y%20//%20aPoint%29%20%5D.%0D%09%5EPoint%09x%3A%20x%20//%20aPoint%20asPoint%20x%0D%09%09y%3A%20y%20//%20aPoint%20asPoint%20y"));
smalltalk.bind(smalltalk.Point, unescape("%5C%5C"), "_bk_bk", function Point___bk_bk(aPoint){
const self = this; if ((aPoint.isNumber()).valueOf()) {return (self['@x']._bk_bk(aPoint))._at((self['@y']._bk_bk(aPoint)))};
return smalltalk.Point.x_y_((self['@x']._bk_bk(((aPoint.asPoint()).x()))),(self['@y']._bk_bk(((aPoint.asPoint()).y()))));
}
, "arithmetic", unescape("%5C%5C%20aPoint%0D%09%22%20Return%20the%20result%20of%20operation%20with%20aPoint.%20%22%0D%0D%09aPoint%20isNumber%20ifTrue%3A%20%5B%20%5Ex%20%5C%5C%20aPoint%20@%20%28y%20%5C%5C%20aPoint%29%20%5D.%0D%09%5EPoint%09x%3A%20x%20%5C%5C%20aPoint%20asPoint%20x%0D%09%09y%3A%20y%20%5C%5C%20aPoint%20asPoint%20y"));
smalltalk.bind(smalltalk.Point, unescape("%3C"), "_lt", function Point___lt(aPoint){
const self = this; if ((aPoint.isNumber()).valueOf()) {return self._lt((aPoint.asPoint()))};
return (self['@x']._lt((aPoint.x()))).and_((function Point__(){
return self['@y']._lt((aPoint.y()));
}
));
}
, "comparing", unescape("%3C%20aPoint%0D%09%22%20Return%20true%20if%20the%20x%20and%20y%20coordinates%20of%20the%20receiver%20are%20less%20than%20the%20x%20and%20y%20coordinates%20of%20aPoint%2C%20respectively.%20%22%0D%0D%09aPoint%20isNumber%20ifTrue%3A%20%5B%20%5Eself%20%3C%20aPoint%20asPoint%20%5D.%0D%09%5Ex%20%3C%20aPoint%20x%20and%3A%20%5B%20y%20%3C%20aPoint%20y%20%5D"));
smalltalk.bind(smalltalk.Point, unescape("%3C%3D"), "_lt_eq", function Point___lt_eq(aPoint){
const self = this; if ((aPoint.isNumber()).valueOf()) {return self._lt_eq((aPoint.asPoint()))};
return (self['@x']._lt_eq((aPoint.x()))).and_((function Point__(){
return self['@y']._lt_eq((aPoint.y()));
}
));
}
, "comparing", unescape("%3C%3D%20aPoint%0D%09%22%20Return%20true%20if%20the%20x%20and%20y%20coordinates%20of%20the%20receiver%20are%20less%20than%20or%20equal%20to%20the%20x%20and%20y%20coordinates%20of%20aPoint%2C%20respectively.%20%22%0D%0D%09aPoint%20isNumber%20ifTrue%3A%20%5B%20%5Eself%20%3C%3D%20aPoint%20asPoint%20%5D.%0D%09%5Ex%20%3C%3D%20aPoint%20x%20and%3A%20%5B%20y%20%3C%3D%20aPoint%20y%20%5D"));
smalltalk.bind(smalltalk.Point, unescape("%3E"), "_gt", function Point___gt(aPoint){
const self = this; if ((aPoint.isNumber()).valueOf()) {return self._gt((aPoint.asPoint()))};
return (self['@x']._gt((aPoint.x()))).and_((function Point__(){
return self['@y']._gt((aPoint.y()));
}
));
}
, "comparing", unescape("%3E%20aPoint%0D%09%22%20Return%20true%20if%20the%20x%20and%20y%20coordinates%20of%20the%20receiver%20are%20greater%20than%20the%20x%20and%20y%20coordinates%20of%20aPoint%2C%20respectively.%20%22%0D%0D%09aPoint%20isNumber%20ifTrue%3A%20%5B%20%5Eself%20%3E%20aPoint%20asPoint%20%5D.%0D%09%5Ex%20%3E%20aPoint%20x%20and%3A%20%5B%20y%20%3E%20aPoint%20y%20%5D"));
smalltalk.bind(smalltalk.Point, unescape("%3E%3D"), "_gt_eq", function Point___gt_eq(aPoint){
const self = this; if ((aPoint.isNumber()).valueOf()) {return self._gt_eq((aPoint.asPoint()))};
return (self['@x']._gt_eq((aPoint.x()))).and_((function Point__(){
return self['@y']._gt_eq((aPoint.y()));
}
));
}
, "comparing", unescape("%3E%3D%20aPoint%0D%09%22%20Return%20true%20if%20the%20x%20and%20y%20coordinates%20of%20the%20receiver%20are%20greater%20than%20or%20equal%20to%20the%20x%20and%20y%20coordinates%20of%20aPoint%2C%20respectively.%20%22%0D%0D%09aPoint%20isNumber%20ifTrue%3A%20%5B%20%5Eself%20%3E%3D%20aPoint%20asPoint%20%5D.%0D%09%5Ex%20%3E%3D%20aPoint%20x%20and%3A%20%5B%20y%20%3E%3D%20aPoint%20y%20%5D"));
smalltalk.bind(smalltalk.Point, unescape("rounded"), "rounded", function Point__rounded(){
const self = this; return (self['@x'].rounded())._at((self['@y'].rounded()));
}
, "converting", unescape("rounded%0D%09%22%20Return%20the%20receiver%20rounded.%20%22%0D%0D%09%5Ex%20rounded%20@%20y%20rounded"));
smalltalk.bind(smalltalk.Point, unescape("truncated"), "truncated", function Point__truncated(){
const self = this; return (self['@x'].truncated())._at((self['@y'].truncated()));
}
, "converting", unescape("truncated%0D%09%22%20Return%20the%20receiver%20truncated.%20%22%0D%0D%09%5Ex%20truncated%20@%20y%20truncated"));
smalltalk.bind(smalltalk.Point, unescape("asPoint"), "asPoint", function Point__asPoint(){
const self = this; return self;
}
, "converting", unescape("asPoint%0D%09%22%20Return%20the%20receiver%20as%20a%20Point.%20%22%0D%0D%09%5Eself"));
smalltalk.bind(smalltalk.Point, unescape("printString"), "printString", function Point__printString(){
const self = this; return ((self['@x'].asString())._comma(unescape("%20@%20")))._comma((self['@y'].asString()));
}
, "printing", unescape("printString%0D%09%22%20Return%20the%20printable%20representation%20of%20the%20receiver.%20%22%0D%0D%09%5Ex%20asString%20%2C%27%20@%20%27%20%2Cy%20asString"));
smalltalk.bind(smalltalk.Point, unescape("toString"), "toString", function Point__toString(){
const self = this; return ((self['@x'].toString())._comma(unescape("@")))._comma((self['@y'].toString()));
}
, "printing", unescape("toString%0D%09%22%20Return%20the%20printable%20representation%20of%20the%20receiver.%20%22%0D%0D%09%5Ex%20toString%20%2C%27@%27%20%2Cy%20toString"));
smalltalk.bind(smalltalk.Point, unescape("shallowCopy"), "shallowCopy", function Point__shallowCopy(){
const self = this; return (self.$klass).x_y_((self.x()),(self.y()));
}
, "copying", unescape("shallowCopy%0D%09%22%20Return%20a%20shallow%20copy%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20class%20x%3A%20self%20x%20y%3A%20self%20y"));
smalltalk.bind(smalltalk.Point, unescape("%3D"), "_eq", function Point___eq(aPoint){
const self = this; if (((nil.isNil_(aPoint))).valueOf()) {return false};
if ((aPoint.isMemberOf_((self.$klass))).not()) {return ((smalltalk.responds_to_(aPoint,"asPoint"))).and_((function Point__(){
return (aPoint.asPoint())._eq(self);
}
))};
return (self['@x']._eq((aPoint.x()))).and_((function Point__(){
return self['@y']._eq((aPoint.y()));
}
));
}
, "testing", unescape("%3D%20aPoint%0D%09%22%20Return%20the%20result%20of%20operation%20with%20aPoint.%20%22%0D%0D%09aPoint%20isNil%20ifTrue%3A%20%5B%20%5Efalse%20%5D.%0D%09%28aPoint%20isMemberOf%3A%20self%20class%29%20ifFalse%3A%20%5B%0D%09%09%5E%28aPoint%20respondsTo%3A%20%23asPoint%29%20and%3A%20%5B%0D%09%09%09aPoint%20asPoint%20%3D%20self%0D%09%09%5D%0D%09%5D.%0D%09%5Ex%20%3D%20aPoint%20x%20and%3A%20%5B%20y%20%3D%20aPoint%20y%20%5D"));
smalltalk.bind(smalltalk.Point, unescape("min%3A"), "min_", function Point__min_(aPoint){
const self = this; return (self['@x'].min_((aPoint.x())))._at((self['@y'].min_((aPoint.y()))));
}
, "magnitude", unescape("min%3A%20aPoint%0D%09%22%20Return%20the%20minimum%20of%20the%20receiver%20and%20aPoint.%20%22%0D%0D%09%5E%28x%20min%3A%20aPoint%20x%29%20@%20%28y%20min%3A%20aPoint%20y%29"));
smalltalk.bind(smalltalk.Point, unescape("max%3A"), "max_", function Point__max_(aPoint){
const self = this; return (self['@x'].max_((aPoint.x())))._at((self['@y'].max_((aPoint.y()))));
}
, "magnitude", unescape("max%3A%20aPoint%0D%09%22%20Return%20the%20maximum%20of%20the%20receiver%20and%20aPoint.%20%22%0D%0D%09%5E%28x%20max%3A%20aPoint%20x%29%20@%20%28y%20max%3A%20aPoint%20y%29"));
smalltalk.addClass("EvaluableAction", smalltalk.Object, [], 'Kernel');
smalltalk.EvaluableAction.$classVariableNames=("");
smalltalk.addClass("Message", smalltalk.EvaluableAction, ['selector', 'arguments', 'receiver'], 'Kernel');
smalltalk.Message.$classVariableNames=("");
smalltalk.bind(smalltalk.Message.$klass, unescape("receiver%3Aselector%3A"), "receiver_selector_", function Message_class__receiver_selector_(anObject,aSelector){
const self = this; return (function Message_class__($1$){
$1$.receiver_(anObject);
$1$.selector_(aSelector);
return $1$.yourself()}
)(self.$$new());
}
, "instantiation", unescape("receiver%3A%20anObject%0Dselector%3A%20aSelector%0D%09%22%20Return%20an%20instance%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20new%0D%09%09receiver%3A%20anObject%3B%0D%09%09selector%3A%20aSelector%3B%0D%09%09yourself"));
smalltalk.bind(smalltalk.Message.$klass, unescape("selector%3Aarguments%3A"), "selector_arguments_", function Message_class__selector_arguments_(aString,anArray){
const self = this; return (function Message_class__($1$){
$1$.selector_(aString);
$1$.arguments_(anArray);
return $1$.yourself()}
)(self.$$new());
}
, "instantiation", unescape("selector%3A%20aString%20arguments%3A%20anArray%0D%09%22%20Return%20an%20instance%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20new%0D%09%09selector%3A%20aString%3B%0D%09%09arguments%3A%20anArray%3B%0D%09%09yourself"));
smalltalk.bind(smalltalk.Message.$klass, unescape("receiver%3Aselector%3Aarguments%3A"), "receiver_selector_arguments_", function Message_class__receiver_selector_arguments_(anObject,aString,anArray){
const self = this; return (function Message_class__($1$){
$1$.receiver_(anObject);
$1$.selector_(aString);
$1$.arguments_(anArray);
return $1$.yourself()}
)(self.$$new());
}
, "instantiation", unescape("receiver%3A%20anObject%20selector%3A%20aString%20arguments%3A%20anArray%0D%09%22%20Return%20an%20instance%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20new%0D%09%09receiver%3A%20anObject%3B%0D%09%09selector%3A%20aString%3B%0D%09%09arguments%3A%20anArray%3B%0D%09%09yourself"));
smalltalk.bind(smalltalk.Message, unescape("selector"), "selector", function Message__selector(){
const self = this; return self['@selector'];
}
, "accessing", unescape("selector%0D%09%22%20Return%20the%20selector%20of%20the%20receiver.%20%22%0D%0D%09%5Eselector"));
smalltalk.bind(smalltalk.Message, unescape("selector%3A"), "selector_", function Message__selector_(aString){
const self = this; self['@selector']=aString;
return self;
}
, "accessing", unescape("selector%3A%20aString%0D%09%22%20Set%20the%20selector%20of%20the%20receiver.%20%22%0D%0D%09selector%20%3A%3D%20aString"));
smalltalk.bind(smalltalk.Message, unescape("arguments%3A"), "arguments_", function Message__arguments_(anArray){
const self = this; self['@arguments']=anArray;
return self;
}
, "accessing", unescape("arguments%3A%20anArray%0D%09%22%20Set%20the%20arguments%20of%20the%20receiver.%20%22%0D%0D%09arguments%20%3A%3D%20anArray"));
smalltalk.bind(smalltalk.Message, unescape("arguments"), "arguments", function Message__arguments(){
const self = this; return self['@arguments'];
}
, "accessing", unescape("arguments%0D%09%22%20Return%20the%20arguments%20of%20the%20receiver.%20%22%0D%0D%09%5Earguments"));
smalltalk.bind(smalltalk.Message, unescape("receiver"), "receiver", function Message__receiver(){
const self = this; return self['@receiver'];
}
, "accessing", unescape("receiver%0D%09%22%20Return%20the%20receiver%20of%20the%20receiver.%20%22%0D%0D%09%5Ereceiver"));
smalltalk.bind(smalltalk.Message, unescape("receiver%3A"), "receiver_", function Message__receiver_(anObject){
const self = this; self['@receiver']=anObject;
return self;
}
, "accessing", unescape("receiver%3A%20anObject%0D%09%22%20Set%20the%20receiver%20of%20the%20receiver.%20%22%0D%0D%09receiver%20%3A%3D%20anObject"));
smalltalk.bind(smalltalk.Message, unescape("comment"), "comment", function Message__comment(){
const self = this; return (function(){var $1$; $1$ = self[unescape("@comment")]; return nil.isNil_($1$) ? nil : $1$})();
}
, "accessing", unescape("comment%0D%09%22%20Return%20the%20comment%20of%20the%20receiver%20%28or%20nil%29.%20%22%0D%0D%09%5Eself%20basicAt%3A%20%27@comment%27"));
smalltalk.bind(smalltalk.Message, unescape("comment%3A"), "comment_", function Message__comment_(aString){
const self = this; if (((nil.isNil_(aString))).valueOf()) {return self.basicDelete_(unescape("@comment"))};
(self[unescape("@comment")]=aString);
return self;
}
, "accessing", unescape("comment%3A%20aString%0D%09%22%20Set%20the%20comment%20of%20the%20receiver.%20%22%0D%0D%09aString%20isNil%20ifTrue%3A%20%5B%20%5Eself%20basicDelete%3A%20%27@comment%27%20%5D.%0D%09self%20basicAt%3A%20%27@comment%27%20put%3A%20aString"));
smalltalk.bind(smalltalk.Message, unescape("receiver%3Aselector%3Aarguments%3A"), "receiver_selector_arguments_", function Message__receiver_selector_arguments_(anObject,aSelector,anArray){
const self = this; self['@receiver']=anObject;
self['@selector']=aSelector;
self['@arguments']=anArray;
return self;
}
, "accessing", unescape("receiver%3A%20anObject%0Dselector%3A%20aSelector%0Darguments%3A%20anArray%0D%09%22Set%20the%20receiver%2C%20selector%2C%20and%20arguments%20in%20self.%22%0D%0D%09receiver%20%3A%3D%20anObject.%0D%09selector%20%3A%3D%20aSelector.%0D%09arguments%20%3A%3D%20anArray"));
smalltalk.bind(smalltalk.Message, unescape("%3D"), "_eq", function Message___eq(aMessage){
const self = this; if (((nil.is_eqeq_(self,aMessage))).valueOf()) {return true};
return ((nil.is_eqeq_(self.$klass,aMessage.$klass))).and_((function Message__(){
return ((self.receiver())._eq((aMessage.receiver()))).and_((function Message__(){
return ((self.selector())._eq((aMessage.selector()))).and_((function Message__(){
return (self.arguments())._eq((aMessage.arguments()));
}
));
}
));
}
));
}
, "comparing", unescape("%3D%20aMessage%0D%0D%09self%20%3D%3D%20aMessage%0D%09%09ifTrue%3A%20%5B%5Etrue%5D.%0D%09%5Eself%20class%20%3D%3D%20aMessage%20class%0D%09%09and%3A%20%5Bself%20receiver%20%3D%20aMessage%20receiver%0D%09%09and%3A%20%5Bself%20selector%20%3D%20aMessage%20selector%0D%09%09and%3A%20%5Bself%20arguments%20%3D%20aMessage%20arguments%5D%5D%5D"));
smalltalk.bind(smalltalk.Message, unescape("perform"), "perform", function Message__perform(){
const self = this; return (self.receiver()).perform_withArguments_((self.selector()),(self.arguments()));
}
, "private", unescape("perform%0D%09%22%20Return%20the%20result%20of%20sending%20the%20receiver.%20%22%0D%0D%09%5Eself%20receiver%0D%09%09perform%3A%20self%20selector%0D%09%09withArguments%3A%20self%20arguments"));
smalltalk.bind(smalltalk.Message, unescape("performDeferred"), "performDeferred", function Message__performDeferred(){
const self = this; (function Message__(){
return self.perform();
}
).valueDeferred();
return self;
}
, "evaluating", unescape("performDeferred%0D%09%22%20Evaluate%20the%20receiver%20deferred%20in%20time.%0D%09Return%20the%20receiver.%0D%09%22%0D%0D%09%5B%20self%20perform%20%5D%20valueDeferred."));
smalltalk.bind(smalltalk.Message, unescape("evaluate"), "evaluate", function Message__evaluate(){
const self = this; return self.perform();
}
, "evaluating", unescape("evaluate%0D%09%22%20Return%20the%20result%20of%20evaluating%20the%20receiver.%20%22%0D%0D%09%5Eself%20perform"));
smalltalk.bind(smalltalk.Message, unescape("evaluateFor%3A"), "evaluateFor_", function Message__evaluateFor_(anObject){
const self = this; return self.evaluateWithArguments_((smalltalk.Array.with_(anObject)));
}
, "evaluating", unescape("evaluateFor%3A%20anObject%0D%09%22%20Return%20the%20result%20of%20evaluating%20the%20receiver%20with%20anObject.%20%22%0D%0D%09%5Eself%20evaluateWithArguments%3A%20%28Array%20with%3A%20anObject%29"));
smalltalk.bind(smalltalk.Message, unescape("evaluateWithArguments%3A"), "evaluateWithArguments_", function Message__evaluateWithArguments_(anArray){
const self = this; return (self.receiver()).perform_withArguments_((self.selector()),(self.collectArguments_(anArray)));
}
, "evaluating", unescape("evaluateWithArguments%3A%20anArray%0D%09%22%20Return%20the%20result%20of%20evaluating%20the%20receiver.%20%22%0D%0D%09%5Eself%20receiver%0D%09%09perform%3A%20self%20selector%0D%09%09withArguments%3A%20%28self%20collectArguments%3A%20anArray%29"));
smalltalk.bind(smalltalk.Message, unescape("initializeArguments"), "initializeArguments", function Message__initializeArguments(){
const self = this; self['@arguments']=smalltalk.Array.new_(((self.selector()).argumentCount()));
return self;
}
, "private", unescape("initializeArguments%0D%09%22%20Private%20-%20Initialize%20the%20arguments%20of%20the%20receiver.%20%22%0D%0D%09arguments%20%3A%3D%20Array%20new%3A%20self%20selector%20argumentCount"));
smalltalk.bind(smalltalk.Message, unescape("argumentCount"), "argumentCount", function Message__argumentCount(){
const self = this; if (((nil.isNil_(self['@arguments']))).valueOf()) {self.initializeArguments()};
return self['@arguments'].size();
}
, "private", unescape("argumentCount%0D%09%22%20Return%20the%20number%20of%20arguments%20required%20to%20evaluate%20the%20receiver.%20%22%0D%0D%09arguments%20isNil%20ifTrue%3A%20%5B%20self%20initializeArguments%20%5D.%0D%09%5Earguments%20size"));
smalltalk.bind(smalltalk.Message, unescape("collectArguments%3A"), "collectArguments_", function Message__collectArguments_(evaluationArguments){
const self = this; if (((self['@arguments'].size())._eq((evaluationArguments.size()))).valueOf()) {return evaluationArguments};
return evaluationArguments.copyFrom_to_((1),((self.argumentCount()).min_((evaluationArguments.size()))));
}
, "private", unescape("collectArguments%3A%20evaluationArguments%0D%09%22%20Private%20-%20Return%20the%20arguments%20to%20evaluate%20the%20receiver.%20%22%0D%0D%09arguments%20size%20%3D%20evaluationArguments%20size%20ifTrue%3A%20%5B%20%5EevaluationArguments%20%5D.%0D%09%5EevaluationArguments%20copyFrom%3A%201%20to%3A%20%28self%20argumentCount%20min%3A%20evaluationArguments%20size%29"));
smalltalk.bind(smalltalk.Message, unescape("printOn%3A"), "printOn_", function Message__printOn_(aStream){
const self = this; (function Message__($1$){
$1$.nextPutAll_(((self.$klass).name()));
$1$.nextPut_(unescape("%28"));
$1$.nextPutAll_((((self.receiver()).$klass).name()));
$1$.nextPutAll_(unescape("%3E%3E"));
$1$.nextPutAll_((self.selector()));
return $1$.nextPut_(unescape("%29"))}
)(aStream);
return self;
}
, "printing", unescape("printOn%3A%20aStream%0D%09%22Print%20the%20receiver%20on%20aStream.%22%0D%0D%09aStream%0D%09%09nextPutAll%3A%20self%20class%20name%3B%0D%09%09nextPut%3A%20%24%28%3B%0D%09%09nextPutAll%3A%20self%20receiver%20class%20name%3B%0D%09%09nextPutAll%3A%20%27%3E%3E%27%3B%0D%09%09nextPutAll%3A%20self%20selector%3B%0D%09%09nextPut%3A%20%24%29"));
smalltalk.bind(smalltalk.Message, unescape("isMessage"), "isMessage", function Message__isMessage(){
const self = this; return true;
}
, "testing", unescape("isMessage%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20a%20message.%20%22%0D%0D%09%5Etrue"));
smalltalk.bind(smalltalk.Object, unescape("isMessage"), "isMessage", function Object__isMessage(){
const self = this; return false;
}
, "testing", unescape("isMessage%0D%09%22%20Return%20true%20if%20the%20receiver%20is%20a%20message.%20%22%0D%0D%09%5Efalse"));
smalltalk.addClass("MessageNotUnderstood", smalltalk.Error, ['message', 'receiver'], 'Kernel');
smalltalk.MessageNotUnderstood.$classVariableNames=("");
smalltalk.bind(smalltalk.MessageNotUnderstood, unescape("message"), "message", function MessageNotUnderstood__message(){
const self = this; return self['@message'];
}
, "accessing", unescape("message%0D%09%22%20Return%20the%20message%20of%20the%20receiver.%20%22%0D%0D%09%5Emessage"));
smalltalk.bind(smalltalk.MessageNotUnderstood, unescape("message%3A"), "message_", function MessageNotUnderstood__message_(aMessage){
const self = this; self['@message']=aMessage;
return self;
}
, "accessing", unescape("message%3A%20aMessage%0D%09%22%20Set%20the%20message%20of%20the%20receiver.%20%22%0D%0D%09message%20%3A%3D%20aMessage"));
smalltalk.bind(smalltalk.MessageNotUnderstood, unescape("receiver"), "receiver", function MessageNotUnderstood__receiver(){
const self = this; return self['@receiver'];
}
, "accessing", unescape("receiver%0D%09%22%20Return%20the%20receiver%20of%20the%20receiver.%20%22%0D%0D%09%5Ereceiver"));
smalltalk.bind(smalltalk.MessageNotUnderstood, unescape("receiver%3A"), "receiver_", function MessageNotUnderstood__receiver_(anObject){
const self = this; self['@receiver']=anObject;
return self;
}
, "accessing", unescape("receiver%3A%20anObject%0D%09%22%20Set%20the%20receiver%20of%20the%20receiver.%20%22%0D%0D%09receiver%20%3A%3D%20anObject"));
smalltalk.bind(smalltalk.MessageNotUnderstood, unescape("messageText"), "messageText", function MessageNotUnderstood__messageText(){
const self = this; return (((self.receiver()).asString())._comma(unescape("%20does%20not%20understand%20%23")))._comma(((self.message()).selector()));
}
, "accessing", unescape("messageText%0D%09%22%20Return%20the%20message%20text%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20receiver%20asString%2C%20%27%20does%20not%20understand%20%23%27%2C%20self%20message%20selector"));
smalltalk.bind(smalltalk.BlockClosure, unescape("ms"), "ms", function BlockClosure__ms(){
const self = this; return smalltalk.DateTime.millisecondsToRun_(self);
}
, "timming", unescape("ms%0D%09%22%20Return%20the%20milliseconds%20taken%20to%20evaluate%20the%20receiver.%20%22%0D%0D%09%5EDateTime%20millisecondsToRun%3A%20self"));
smalltalk.bind(smalltalk.Class.$klass, unescape("categories"), "categories", function Class_class__categories(){
const self = this; return ((smalltalk.Smalltalk.classes()).collect_((function Class_class__(each){
return each.category();
}
))).asSet();
}
, "export", unescape("categories%0D%09%22%20Return%20a%20collection%20with%20all%20defined%20categories.%20%22%0D%0D%09%5E%28Smalltalk%20classes%20collect%3A%20%5B%3Aeach%20%7C%20each%20category%20%5D%29%20asSet"));
smalltalk.bind(smalltalk.Class.$klass, unescape("uncategorized"), "uncategorized", function Class_class__uncategorized(){
const self = this; return (smalltalk.Smalltalk.classes()).select_((function Class_class__(each){
return (each.category())._eq("unclassified");
}
));
}
, "export", unescape("uncategorized%0D%09%22%20Return%20a%20collection%20with%20classes%20without%20category.%20%22%0D%0D%09%5ESmalltalk%20classes%20select%3A%20%5B%3Aeach%20%7C%20each%20category%20%3D%20%23unclassified%20%5D"));
smalltalk.bind(smalltalk.Class, unescape("variableByteSubclass%3AclassVariableNames%3ApoolDictionaries%3A"), "variableByteSubclass_classVariableNames_poolDictionaries_", function Class__variableByteSubclass_classVariableNames_poolDictionaries_(aString,classVarNames,poolVarNames){
const self = this; self.print_(((unescape("//%20WARNING%3A%20")._comma(aString))._comma(" defined as variableByteSubclass:...")));
return self.subclass_instanceVariableNames_classVariableNames_poolDictionaries_(aString,"",classVarNames,poolVarNames);
}
, "instantiation", unescape("variableByteSubclass%3A%20aString%0D%09classVariableNames%3A%20classVarNames%0D%09poolDictionaries%3A%20poolVarNames%0D%09%22%20Create%20a%20new%20subclass%20of%20the%20receiver.%20%22%0D%0D%09self%20print%3A%20%27//%20WARNING%3A%20%27%2CaString%2C%27%20defined%20as%20variableByteSubclass%3A...%27.%0D%09%5Eself%0D%09%09subclass%3A%20aString%0D%09%09instanceVariableNames%3A%20%27%27%0D%09%09classVariableNames%3A%20classVarNames%0D%09%09poolDictionaries%3A%20poolVarNames"));
smalltalk.bind(smalltalk.Class, unescape("variableSubclass%3AinstanceVariableNames%3AclassVariableNames%3ApoolDictionaries%3A"), "variableSubclass_instanceVariableNames_classVariableNames_poolDictionaries_", function Class__variableSubclass_instanceVariableNames_classVariableNames_poolDictionaries_(aString,aString2,classVarNames,poolVarNames){
const self = this; self.print_(((unescape("//%20WARNING%3A%20")._comma(aString))._comma(" defined as variableSubclass:...")));
return self.subclass_instanceVariableNames_classVariableNames_poolDictionaries_(aString,aString2,classVarNames,poolVarNames);
}
, "instantiation", unescape("variableSubclass%3A%20aString%0D%09instanceVariableNames%3A%20aString2%0D%09classVariableNames%3A%20classVarNames%0D%09poolDictionaries%3A%20poolVarNames%0D%09%22%20Create%20a%20new%20subclass%20of%20the%20receiver.%20%22%0D%0D%09self%20print%3A%20%27//%20WARNING%3A%20%27%2CaString%2C%27%20defined%20as%20variableSubclass%3A...%27.%0D%09%5Eself%0D%09%09subclass%3A%20aString%0D%09%09instanceVariableNames%3A%20aString2%0D%09%09classVariableNames%3A%20classVarNames%0D%09%09poolDictionaries%3A%20poolVarNames"));
smalltalk.bind(smalltalk.Class, unescape("subclass%3AinstanceVariableNames%3AclassVariableNames%3ApoolDictionaries%3Acategory%3A"), "subclass_instanceVariableNames_classVariableNames_poolDictionaries_category_", function Class__subclass_instanceVariableNames_classVariableNames_poolDictionaries_category_(aString,aString2,classVarNames,poolVarNames,aCategory){
const self = this; if (((nil.isNil_((self.smalltalk()).globalAt_(aString))===false)).valueOf()) {self.print_((unescape("//%20WARNING%3A%20class%20REdefinition%20for%20")._comma(aString)))};
return (smalltalk.ClassBuilder.$$new()).superclass_subclass_instanceVariableNames_classVariableNames_poolDictionaries_category_(self,aString,aString2,classVarNames,poolVarNames,aCategory);
}
, "instantiation", unescape("subclass%3A%20aString%0D%09instanceVariableNames%3A%20aString2%0D%09classVariableNames%3A%20classVarNames%0D%09poolDictionaries%3A%20poolVarNames%0D%09category%3A%20aCategory%0D%09%22%20Create%20a%20new%20subclass%20of%20the%20receiver.%20%22%0D%0D%09%28self%20smalltalk%20globalAt%3A%20aString%29%20notNil%20ifTrue%3A%20%5B%0D%09%09self%20print%3A%20%27//%20WARNING%3A%20class%20REdefinition%20for%20%27%2CaString.%0D%09%09%22%5Eself%20smalltalk%20globalAt%3A%20aString%22%0D%09%5D.%0D%0D%09%22self%20print%3A%20%27//%20Creating%20%27%2CaString.%22%0D%09%5EClassBuilder%20new%0D%09%09superclass%3A%20self%0D%09%09subclass%3A%20aString%0D%09%09instanceVariableNames%3A%20aString2%0D%09%09classVariableNames%3A%20classVarNames%0D%09%09poolDictionaries%3A%20poolVarNames%0D%09%09category%3A%20aCategory"));
smalltalk.bind(smalltalk.Class, unescape("subclass%3AinstanceVariableNames%3AclassVariableNames%3Acategory%3A"), "subclass_instanceVariableNames_classVariableNames_category_", function Class__subclass_instanceVariableNames_classVariableNames_category_(aString,aString2,classVarNames,aCategory){
const self = this; return self.subclass_instanceVariableNames_classVariableNames_poolDictionaries_category_(aString,aString2,classVarNames,"",aCategory);
}
, "instantiation", unescape("subclass%3A%20aString%0D%09instanceVariableNames%3A%20aString2%0D%09classVariableNames%3A%20classVarNames%0D%09category%3A%20aCategory%0D%09%22%20Create%20a%20new%20subclass%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20subclass%3A%20aString%0D%09%09instanceVariableNames%3A%20aString2%0D%09%09classVariableNames%3A%20classVarNames%0D%09%09poolDictionaries%3A%20%27%27%0D%09%09category%3A%20aCategory"));
smalltalk.bind(smalltalk.Class, unescape("subclass%3AinstanceVariableNames%3AclassVariableNames%3ApoolDictionaries%3A"), "subclass_instanceVariableNames_classVariableNames_poolDictionaries_", function Class__subclass_instanceVariableNames_classVariableNames_poolDictionaries_(aString,aString2,classVarNames,poolVarNames){
const self = this; return self.subclass_instanceVariableNames_classVariableNames_poolDictionaries_category_(aString,aString2,classVarNames,poolVarNames,nil);
}
, "instantiation", unescape("subclass%3A%20aString%0D%09instanceVariableNames%3A%20aString2%0D%09classVariableNames%3A%20classVarNames%0D%09poolDictionaries%3A%20poolVarNames%0D%09%22%20Create%20a%20new%20subclass%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%0D%09%09subclass%3A%20aString%0D%09%09instanceVariableNames%3A%20aString2%0D%09%09classVariableNames%3A%20classVarNames%0D%09%09poolDictionaries%3A%20poolVarNames%0D%09%09category%3A%20nil"));
smalltalk.bind(smalltalk.Class, unescape("subclass%3AinstanceVariableNames%3ApoolDictionaries%3Acategory%3A"), "subclass_instanceVariableNames_poolDictionaries_category_", function Class__subclass_instanceVariableNames_poolDictionaries_category_(aString,aString2,poolVarNames,aCategory){
const self = this; return self.subclass_instanceVariableNames_classVariableNames_poolDictionaries_category_(aString,aString2,"",poolVarNames,aCategory);
}
, "instantiation", unescape("subclass%3A%20aString%0D%09instanceVariableNames%3A%20aString2%0D%09poolDictionaries%3A%20poolVarNames%0D%09category%3A%20aCategory%0D%09%22%20Create%20a%20new%20subclass%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%0D%09%09subclass%3A%20aString%0D%09%09instanceVariableNames%3A%20aString2%0D%09%09classVariableNames%3A%20%27%27%0D%09%09poolDictionaries%3A%20poolVarNames%0D%09%09category%3A%20aCategory"));
smalltalk.bind(smalltalk.Class, unescape("variableByteSubclass%3AclassVariableNames%3A"), "variableByteSubclass_classVariableNames_", function Class__variableByteSubclass_classVariableNames_(aString,classVarNames){
const self = this; return self.variableByteSubclass_classVariableNames_poolDictionaries_(aString,classVarNames,"");
}
, "instantiation", unescape("variableByteSubclass%3A%20aString%20classVariableNames%3A%20classVarNames%0D%09%22%20Create%20a%20new%20subclass%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%0D%09%09variableByteSubclass%3A%20aString%0D%09%09classVariableNames%3A%20classVarNames%0D%09%09poolDictionaries%3A%20%27%27"));
smalltalk.bind(smalltalk.Class, unescape("variableByteSubclass%3ApoolDictionaries%3A"), "variableByteSubclass_poolDictionaries_", function Class__variableByteSubclass_poolDictionaries_(aString,aString2){
const self = this; return self.variableByteSubclass_classVariableNames_poolDictionaries_(aString,"",aString2);
}
, "instantiation", unescape("variableByteSubclass%3A%20aString%20poolDictionaries%3A%20aString2%0D%09%22%20Create%20a%20new%20subclass%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%0D%09%09variableByteSubclass%3A%20aString%0D%09%09classVariableNames%3A%20%27%27%0D%09%09poolDictionaries%3A%20aString2"));
smalltalk.bind(smalltalk.Class, unescape("variableByteSubclass%3A"), "variableByteSubclass_", function Class__variableByteSubclass_(aString){
const self = this; return self.variableByteSubclass_classVariableNames_(aString,"");
}
, "instantiation", unescape("variableByteSubclass%3A%20aString%0D%09%22%20Create%20a%20new%20subclass%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%0D%09%09variableByteSubclass%3A%20aString%0D%09%09classVariableNames%3A%20%27%27"));
smalltalk.bind(smalltalk.Class, unescape("variableSubclass%3AinstanceVariableNames%3AclassVariableNames%3A"), "variableSubclass_instanceVariableNames_classVariableNames_", function Class__variableSubclass_instanceVariableNames_classVariableNames_(aString,aString2,classVarNames){
const self = this; return self.variableSubclass_instanceVariableNames_classVariableNames_poolDictionaries_(aString,aString2,classVarNames,"");
}
, "instantiation", unescape("variableSubclass%3A%20aString%0D%09instanceVariableNames%3A%20aString2%0D%09classVariableNames%3A%20classVarNames%0D%09%22%20Create%20a%20new%20subclass%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%0D%09%09variableSubclass%3A%20aString%0D%09%09instanceVariableNames%3A%20aString2%0D%09%09classVariableNames%3A%20classVarNames%0D%09%09poolDictionaries%3A%20%27%27"));
smalltalk.bind(smalltalk.Class, unescape("variableSubclass%3AinstanceVariableNames%3A"), "variableSubclass_instanceVariableNames_", function Class__variableSubclass_instanceVariableNames_(aString,aString2){
const self = this; return self.variableSubclass_instanceVariableNames_classVariableNames_(aString,aString2,"");
}
, "instantiation", unescape("variableSubclass%3A%20aString%20instanceVariableNames%3A%20aString2%0D%09%22%20Create%20a%20new%20subclass%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%0D%09%09variableSubclass%3A%20aString%0D%09%09instanceVariableNames%3A%20aString2%0D%09%09classVariableNames%3A%20%27%27"));
smalltalk.bind(smalltalk.Class, unescape("variableSubclass%3AclassVariableNames%3A"), "variableSubclass_classVariableNames_", function Class__variableSubclass_classVariableNames_(aString,aString2){
const self = this; return self.variableSubclass_instanceVariableNames_classVariableNames_(aString,"",aString2);
}
, "instantiation", unescape("variableSubclass%3A%20aString%20classVariableNames%3A%20aString2%0D%09%22%20Create%20a%20new%20subclass%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%0D%09%09variableSubclass%3A%20aString%0D%09%09instanceVariableNames%3A%20%27%27%0D%09%09classVariableNames%3A%20aString2"));
smalltalk.bind(smalltalk.Class, unescape("variableSubclass%3ApoolDictionaries%3A"), "variableSubclass_poolDictionaries_", function Class__variableSubclass_poolDictionaries_(aString,aString2){
const self = this; return self.variableSubclass_instanceVariableNames_classVariableNames_poolDictionaries_(aString,"","",aString2);
}
, "instantiation", unescape("variableSubclass%3A%20aString%20poolDictionaries%3A%20aString2%0D%09%22%20Create%20a%20new%20subclass%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%0D%09%09variableSubclass%3A%20aString%0D%09%09instanceVariableNames%3A%20%27%27%0D%09%09classVariableNames%3A%20%27%27%0D%09%09poolDictionaries%3A%20aString2"));
smalltalk.bind(smalltalk.Class, unescape("variableSubclass%3A"), "variableSubclass_", function Class__variableSubclass_(aString){
const self = this; return self.variableSubclass_instanceVariableNames_(aString,"");
}
, "instantiation", unescape("variableSubclass%3A%20aString%0D%09%22%20Create%20a%20new%20subclass%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%0D%09%09variableSubclass%3A%20aString%0D%09%09instanceVariableNames%3A%20%27%27"));
smalltalk.bind(smalltalk.Class, unescape("subclass%3AinstanceVariableNames%3AclassVariableNames%3A"), "subclass_instanceVariableNames_classVariableNames_", function Class__subclass_instanceVariableNames_classVariableNames_(aString,aString2,classVarNames){
const self = this; return self.subclass_instanceVariableNames_classVariableNames_poolDictionaries_(aString,aString2,classVarNames,"");
}
, "instantiation", unescape("subclass%3A%20aString%0D%09instanceVariableNames%3A%20aString2%0D%09classVariableNames%3A%20classVarNames%0D%09%22%20Create%20a%20new%20subclass%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%0D%09%09subclass%3A%20aString%0D%09%09instanceVariableNames%3A%20aString2%0D%09%09classVariableNames%3A%20classVarNames%0D%09%09poolDictionaries%3A%20%27%27"));
smalltalk.bind(smalltalk.Class, unescape("subclass%3AinstanceVariableNames%3ApoolDictionaries%3A"), "subclass_instanceVariableNames_poolDictionaries_", function Class__subclass_instanceVariableNames_poolDictionaries_(aString,aString2,aString3){
const self = this; return self.subclass_instanceVariableNames_classVariableNames_poolDictionaries_(aString,aString2,"",aString3);
}
, "instantiation", unescape("subclass%3A%20aString%0D%09instanceVariableNames%3A%20aString2%0D%09poolDictionaries%3A%20aString3%0D%09%22%20Create%20a%20new%20subclass%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%0D%09%09subclass%3A%20aString%0D%09%09instanceVariableNames%3A%20aString2%0D%09%09classVariableNames%3A%20%27%27%0D%09%09poolDictionaries%3A%20aString3"));
smalltalk.bind(smalltalk.Class, unescape("subclass%3AinstanceVariableNames%3A"), "subclass_instanceVariableNames_", function Class__subclass_instanceVariableNames_(aString,aString2){
const self = this; return self.subclass_instanceVariableNames_classVariableNames_(aString,aString2,"");
}
, "instantiation", unescape("subclass%3A%20aString%20instanceVariableNames%3A%20aString2%0D%09%22%20Create%20a%20new%20subclass%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%0D%09%09subclass%3A%20aString%0D%09%09instanceVariableNames%3A%20aString2%0D%09%09classVariableNames%3A%20%27%27"));
smalltalk.bind(smalltalk.Class, unescape("subclass%3AclassVariableNames%3A"), "subclass_classVariableNames_", function Class__subclass_classVariableNames_(aString,aString2){
const self = this; return self.subclass_instanceVariableNames_classVariableNames_poolDictionaries_(aString,"",aString2,"");
}
, "instantiation", unescape("subclass%3A%20aString%20classVariableNames%3A%20aString2%0D%09%22%20Create%20a%20new%20subclass%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%0D%09%09subclass%3A%20aString%0D%09%09instanceVariableNames%3A%20%27%27%0D%09%09classVariableNames%3A%20aString2%0D%09%09poolDictionaries%3A%20%27%27"));
smalltalk.bind(smalltalk.Class, unescape("subclass%3ApoolDictionaries%3A"), "subclass_poolDictionaries_", function Class__subclass_poolDictionaries_(aString,aString2){
const self = this; return self.subclass_instanceVariableNames_classVariableNames_poolDictionaries_(aString,"","",aString2);
}
, "instantiation", unescape("subclass%3A%20aString%20poolDictionaries%3A%20aString2%0D%09%22%20Create%20a%20new%20subclass%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%0D%09%09subclass%3A%20aString%0D%09%09instanceVariableNames%3A%20%27%27%0D%09%09classVariableNames%3A%20%27%27%0D%09%09poolDictionaries%3A%20aString2"));
smalltalk.bind(smalltalk.Class, unescape("subclass%3A"), "subclass_", function Class__subclass_(aString){
const self = this; return self.subclass_instanceVariableNames_(aString,"");
}
, "instantiation", unescape("subclass%3A%20aString%0D%09%22%20Create%20a%20new%20subclass%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%0D%09%09subclass%3A%20aString%0D%09%09instanceVariableNames%3A%20%27%27"));
smalltalk.bind(smalltalk.UndefinedObject, unescape("category%3A"), "category_", function UndefinedObject__category_(ignored){
const self = this; self;
return self;
}
, "instantiation", unescape("category%3A%20ignored%0D%09%22%20BUG%20-%20throw%20an%20error%20in%20ClassBuilder.%20%22%20"));
smalltalk.bind(smalltalk.UndefinedObject, unescape("subclass%3AinstanceVariableNames%3AclassVariableNames%3ApoolDictionaries%3Acategory%3A"), "subclass_instanceVariableNames_classVariableNames_poolDictionaries_category_", function UndefinedObject__subclass_instanceVariableNames_classVariableNames_poolDictionaries_category_(aString,aString2,classVarNames,poolVarNames,aCategory){
const self = this; if (((nil.isNil_((self.smalltalk()).globalAt_(aString))===false)).valueOf()) {self.print_((unescape("//%20WARNING%3A%20class%20REdefinition%20for%20")._comma(aString)))};
return (smalltalk.ClassBuilder.$$new()).superclass_subclass_instanceVariableNames_classVariableNames_poolDictionaries_category_(self,aString,aString2,classVarNames,poolVarNames,aCategory);
}
, "instantiation", unescape("subclass%3A%20aString%0D%09instanceVariableNames%3A%20aString2%0D%09classVariableNames%3A%20classVarNames%0D%09poolDictionaries%3A%20poolVarNames%0D%09category%3A%20aCategory%0D%09%22%20Create%20a%20new%20subclass%20of%20the%20receiver.%20%22%0D%0D%09%28self%20smalltalk%20globalAt%3A%20aString%29%20notNil%20ifTrue%3A%20%5B%0D%09%09self%20print%3A%20%27//%20WARNING%3A%20class%20REdefinition%20for%20%27%2CaString.%0D%09%09%22%5Eself%20smalltalk%20globalAt%3A%20aString%22%0D%09%5D.%0D%0D%09%22self%20print%3A%20%27//%20Creating%20ROOT%20class%20%27%2CaString.%22%0D%09%5EClassBuilder%20new%0D%09%09superclass%3A%20self%0D%09%09subclass%3A%20aString%0D%09%09instanceVariableNames%3A%20aString2%0D%09%09classVariableNames%3A%20classVarNames%0D%09%09poolDictionaries%3A%20poolVarNames%0D%09%09category%3A%20aCategory"));
smalltalk.bind(smalltalk.UndefinedObject, unescape("subclass%3AinstanceVariableNames%3AclassVariableNames%3ApoolDictionaries%3A"), "subclass_instanceVariableNames_classVariableNames_poolDictionaries_", function UndefinedObject__subclass_instanceVariableNames_classVariableNames_poolDictionaries_(aString,aString2,classVarNames,poolVarNames){
const self = this; return self.subclass_instanceVariableNames_classVariableNames_poolDictionaries_category_(aString,aString2,classVarNames,poolVarNames,nil);
}
, "instantiation", unescape("subclass%3A%20aString%0D%09instanceVariableNames%3A%20aString2%0D%09classVariableNames%3A%20classVarNames%0D%09poolDictionaries%3A%20poolVarNames%0D%09%22%20Create%20a%20new%20subclass%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%0D%09%09subclass%3A%20aString%0D%09%09instanceVariableNames%3A%20aString2%0D%09%09classVariableNames%3A%20classVarNames%0D%09%09poolDictionaries%3A%20poolVarNames%0D%09%09category%3A%20nil"));
smalltalk.bind(smalltalk.Object, unescape("argumentCount"), "argumentCount", function Object__argumentCount(){
const self = this; return (0);
}
, "evaluating", unescape("argumentCount%0D%09%22%20Return%20the%20number%20of%20arguments%20required%20to%20evaluate%20the%20receiver.%20%22%0D%0D%09%5E0"));
smalltalk.bind(smalltalk.Object, unescape("numberOfArguments"), "numberOfArguments", function Object__numberOfArguments(){
const self = this; return self.argumentCount();
}
, "evaluating", unescape("numberOfArguments%0D%09%22%20Return%20the%20number%20of%20arguments%20required%20to%20evaluate%20the%20receiver.%20%22%0D%0D%09%5Eself%20argumentCount"));
smalltalk.bind(smalltalk.Object, unescape("evaluate"), "evaluate", function Object__evaluate(){
const self = this; return self;
}
, "evaluating", unescape("evaluate%0D%09%22%20Return%20the%20result%20of%20evaluating%20the%20receiver.%20%22%0D%0D%09%5Eself"));
smalltalk.bind(smalltalk.Object, unescape("evaluateDeferred"), "evaluateDeferred", function Object__evaluateDeferred(){
const self = this; (function Object__(){
return self.evaluate();
}
).valueDeferred();
return self;
}
, "evaluating", unescape("evaluateDeferred%0D%09%22%20Evaluating%20the%20receiver%20deferred%20in%20time.%0D%09Return%20the%20receiver.%20%22%0D%0D%09%5B%20self%20evaluate%20%5D%20valueDeferred."));
smalltalk.bind(smalltalk.Object, unescape("evaluateWithArguments%3A"), "evaluateWithArguments_", function Object__evaluateWithArguments_(anArray){
const self = this; return self;
}
, "evaluating", unescape("evaluateWithArguments%3A%20anArray%0D%09%22%20Return%20the%20result%20of%20evaluating%20the%20receiver.%20%22%0D%0D%09%5Eself"));
smalltalk.bind(smalltalk.Object, unescape("evaluateWith%3A"), "evaluateWith_", function Object__evaluateWith_(anObject){
const self = this; return self.evaluateWithArguments_((smalltalk.Array.with_(anObject)));
}
, "evaluating", unescape("evaluateWith%3A%20anObject%0D%09%22%20Return%20the%20result%20of%20evaluating%20the%20receiver.%20%22%0D%0D%09%5Eself%20evaluateWithArguments%3A%20%28Array%20with%3A%20anObject%29"));
smalltalk.bind(smalltalk.Object, unescape("logEvaluate%3A"), "logEvaluate_", function Object__logEvaluate_(source){
const self = this; return self.evaluate();
}
, "evaluating", unescape("logEvaluate%3A%20source%0D%09%22%20Return%20the%20result%20of%20valuating%20the%20receiver.%0D%09This%20method%20should%20be%20refined/replaced%20to%20log%20the%20source%20expression%20as%20reference%20of%20evaluation.%0D%09%22%0D%0D%09%5Eself%20evaluate"));
smalltalk.bind(smalltalk.String, unescape("evaluateFor%3A"), "evaluateFor_", function String__evaluateFor_(anObject){
const self = this; return anObject.perform_(self);
}
, "evaluating", unescape("evaluateFor%3A%20anObject%0D%09%22%20Return%20the%20result%20of%20evaluating%20the%20receiver%20with%20anObject.%20%22%0D%0D%09%5EanObject%20perform%3A%20self"));
smalltalk.bind(smalltalk.BlockClosure, unescape("evaluateFor%3A"), "evaluateFor_", function BlockClosure__evaluateFor_(anObject){
const self = this; return self.value_(anObject);
}
, "evaluating", unescape("evaluateFor%3A%20anObject%0D%09%22%20Return%20the%20result%20of%20evaluating%20the%20receiver%20with%20anObject.%20%22%0D%0D%09%5Eself%20value%3A%20anObject%20"));
smalltalk.bind(smalltalk.BlockClosure, unescape("evaluate"), "evaluate", function BlockClosure__evaluate(){
const self = this; return self.value();
}
, "evaluating", unescape("evaluate%0D%09%22%20Return%20the%20result%20of%20evaluating%20the%20receiver.%20%22%0D%0D%09%5Eself%20value%20"));
smalltalk.bind(smalltalk.BlockClosure, unescape("evaluateWithArguments%3A"), "evaluateWithArguments_", function BlockClosure__evaluateWithArguments_(anArray){
const self = this; return self.valueWithArguments_(anArray);
}
, "evaluating", unescape("evaluateWithArguments%3A%20anArray%0D%09%22%20Return%20the%20result%20of%20evaluating%20the%20receiver.%20%22%0D%0D%09%5Eself%20valueWithArguments%3A%20anArray"));
smalltalk.bind(smalltalk.Object, unescape("printingWith%3Ado%3A"), "printingWith_do_", function Object__printingWith_do_(printBlock,aBlock){
var backup = nil;
var result = nil;
const self = this; backup=(function(){var $1$; $1$ = smalltalk.Smalltalk.global()["print"]; return nil.isNil_($1$) ? nil : $1$})();
(function Object__(){
printBlock.installAs_("print");
return result=aBlock.value();
}
).ensure_((function Object__(){
return backup.installAs_("print");
}
));
return result;
}
, "printing", unescape("printingWith%3A%20printBlock%20do%3A%20aBlock%0D%09%22%20Return%20the%20result%20of%20evaluating%20aBlock%2C%20redirecting%20output%20to%20printBlock.%20%22%0D%0D%09%7C%20backup%20result%20%7C%0D%09backup%20%3A%3D%20Smalltalk%20global%20basicAt%3A%20%23print.%0D%09%5B%09printBlock%20installAs%3A%20%23print.%0D%09%09result%20%3A%3D%20aBlock%20value.%0D%09%5D%20ensure%3A%20%5B%20backup%20installAs%3A%20%23print%20%5D.%0D%09%5Eresult"));
smalltalk.bind(smalltalk.Behavior, unescape("basicAddCompiledMethod%3A"), "basicAddCompiledMethod_", function Behavior__basicAddCompiledMethod_(aMethod){
const self = this; (self.smalltalk()).addMethod_method_to_(((aMethod.selector()).asSelector()),aMethod,self);
return self;
}
, "private", unescape("basicAddCompiledMethod%3A%20aMethod%0D%09%22%20Private%20-%20Register%20aMethod%20onto%20the%20receiver.%20%22%0D%0D%09self%20smalltalk%20addMethod%3A%20aMethod%20selector%20asSelector%20method%3A%20aMethod%20to%3A%20self"));
smalltalk.bind(smalltalk.Behavior, unescape("addCompiledMethod%3A"), "addCompiledMethod_", function Behavior__addCompiledMethod_(aMethod){
var isDoIt = nil;
const self = this; isDoIt=(aMethod.selector())._eq((smalltalk.String.doItSelector()));
if ((((nil.isNil_(smalltalk.Exporter)===false)).and_((function Behavior__(){
return isDoIt.not();
}
))).valueOf()) {self.print_(((smalltalk.Exporter.$$new()).export_method_(self,aMethod)))};
return self.basicAddCompiledMethod_(aMethod);
}
, "methods", unescape("addCompiledMethod%3A%20aMethod%0D%09%22%20Add%20the%20compiled%20method%2C%20if%20appropiate%2C%20and%20register%20the%20method%20in%20recent%20methods.%20%22%0D%0D%09%7C%20isDoIt%20%7C%0D%09isDoIt%20%3A%3D%20aMethod%20selector%20%3D%20String%20doItSelector.%0D%22%09%28OverwriteMethods%20ifNil%3A%20%5Btrue%5D%29%20ifFalse%3A%20%5B%0D%09%09%28self%20implements%3A%20aMethod%20selector%29%20ifTrue%3A%20%5B%0D%09%09%09isDoIt%20ifFalse%3A%20%5B%0D%09%09%09%09%28DumpOverwritenMethods%20notNil%0D%09%09%09%09and%3A%20%5B%20DumpOverwritenMethods%0D%09%09%09%09and%3A%20%5B%20Exporter%20notNil%20%5D%5D%29%20ifTrue%3A%20%5B%0D%09%09%09%09%09self%20print%3A%20%27//%3F%20%27%2Cself%20name%2C%27%3E%3E%23%27%2CaMethod%20selector.%0D%09%09%09%09%09self%20print%3A%20%28Exporter%20new%20export%3A%20self%20method%3A%20aMethod%29.%0D%09%09%09%09%5D%20ifFalse%3A%20%5B%0D%09%09%09%09%09self%20print%3A%20%27//-Overwrite%20Conflict-%20%27%2Cself%20name%2C%27%3E%3E%23%27%2CaMethod%20selector.%0D%09%09%09%09%5D.%0D%09%09%09%09%5Eself%0D%09%09%09%5D.%0D%09%09%5D.%0D%09%5D.%0D%22%0D%09%28Exporter%20notNil%20and%3A%20%5B%20isDoIt%20not%20%5D%29%20ifTrue%3A%20%5B%0D%22%20DEBUG%20-%09self%20print%3A%20%27//%20%27%2Cself%20name%2C%27%3E%3E%23%27%2CaMethod%20selector.%22%0D%09%09self%20print%3A%20%28Exporter%20new%20export%3A%20self%20method%3A%20aMethod%29.%0D%09%5D.%0D%09%5Eself%20basicAddCompiledMethod%3A%20aMethod"));
smalltalk.bind(smalltalk.Stream, unescape("peekForAll%3A"), "peekForAll_", function Stream__peekForAll_(aCollection){
var back = nil;
const self = this; var $early={name:"stReturn"};
try {
back=self.position();
aCollection.do_((function Stream__(each){
if ((self.peekFor_(each)).not()) {self.position_(back);
$early.result=false; throw ($early)} else {return nil};
}
));
return true;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "reading", unescape("peekForAll%3A%20aCollection%0D%09%22%20Return%20true%20if%20the%20next%20readable%20elements%20from%20the%20receiver%20matches%20aCollection.%0D%09Advance%20the%20receiver%20if%20the%20result%20is%20true.%0D%09%22%0D%0D%09%7C%20back%20%7C%0D%09back%20%3A%3D%20self%20position.%0D%09aCollection%20do%3A%20%5B%3Aeach%7C%0D%09%09%28self%20peekFor%3A%20each%29%20ifFalse%3A%20%5B%0D%09%09%09self%20position%3A%20back.%0D%09%09%09%5Efalse%0D%09%09%5D.%0D%09%5D.%0D%09%5Etrue"));
smalltalk.bind(smalltalk.StringStream, unescape("peekForAll%3A"), "peekForAll_", function StringStream__peekForAll_(aCollection){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKStream.primStringPeekForAll(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return smalltalk.superImplementor(smalltalk.StringStream,'peekForAll_').apply(self, [aCollection]);
}
, "reading", unescape("peekForAll%3A%20aCollection%0D%09%22Return%20true%20if%20the%20next%20readable%20elements%20from%20the%20receiver%20matches%20aCollection.%0D%09Advance%20the%20receiver%20if%20the%20result%20is%20true.%22%0D%0D%09%3Cprimitive%3A%20%27primStringPeekForAll%27%20module%3A%20%27SKStream%27%3E%0D%09%5Esuper%20peekForAll%3A%20aCollection"));
