smalltalk.addClass("JSGenerator", smalltalk.Object, ['methodClass', 'stream', 'environment', 'idCounter'], 'Compiler-JS');
smalltalk.JSGenerator.$classVariableNames=("BinaryMap InlineFunctionSet ReservedWords RewriteMap RewriteValueMap");
smalltalk.bind(smalltalk.JSGenerator, unescape("environment%3A"), "environment_", function JSGenerator__environment_(stEnvironment){
const self = this; self['@environment']=stEnvironment;
return self;
}
, "initialize-release", unescape("environment%3A%20stEnvironment%0D%09environment%20%3A%3D%20stEnvironment"));
smalltalk.bind(smalltalk.JSGenerator, unescape("initialize"), "initialize", function JSGenerator__initialize(){
const self = this; self['@idCounter']=(0);
return self;
}
, "initialize-release", unescape("initialize%0D%09%22counter%20is%20reset%20for%20every%20new%20method%22%0D%09idCounter%20%3A%3D%200"));
smalltalk.bind(smalltalk.JSGenerator, unescape("release"), "release", function JSGenerator__release(){
const self = this; self['@stream'].close();
return self;
}
, "initialize-release", unescape("release%0D%09stream%20close"));
smalltalk.bind(smalltalk.JSGenerator, unescape("stream%3A"), "stream_", function JSGenerator__stream_(aStream){
const self = this; self['@stream']=aStream;
return self;
}
, "initialize-release", unescape("stream%3A%20aStream%0D%09stream%20%3A%3D%20aStream"));
smalltalk.bind(smalltalk.JSGenerator, unescape("canBeRewritten%3A"), "canBeRewritten_", function JSGenerator__canBeRewritten_(selector){
const self = this; return (smalltalk.JSGenerator.classVariableAt_("RewriteMap").includesKey_(selector)).or_((function JSGenerator__(){
return smalltalk.JSGenerator.classVariableAt_("RewriteValueMap").includesKey_(selector);
}
));
}
, "testing", unescape("canBeRewritten%3A%20selector%0D%09%5E%28RewriteMap%20includesKey%3A%20selector%29%0D%09%09or%3A%20%5B%28RewriteValueMap%20includesKey%3A%20selector%29%5D"));
smalltalk.bind(smalltalk.JSGenerator, unescape("canBeValueRewritten%3A"), "canBeValueRewritten_", function JSGenerator__canBeValueRewritten_(selector){
const self = this; return smalltalk.JSGenerator.classVariableAt_("RewriteValueMap").includesKey_(selector);
}
, "testing", unescape("canBeValueRewritten%3A%20selector%0D%09%5ERewriteValueMap%20includesKey%3A%20selector"));
smalltalk.bind(smalltalk.JSGenerator, unescape("hasInlinedFunction%3A"), "hasInlinedFunction_", function JSGenerator__hasInlinedFunction_(selector){
const self = this; return smalltalk.JSGenerator.classVariableAt_("InlineFunctionSet").includes_(selector);
}
, "testing", unescape("hasInlinedFunction%3A%20selector%0D%09%5EInlineFunctionSet%20includes%3A%20selector"));
smalltalk.bind(smalltalk.JSGenerator, unescape("methodClassIsPrimitive"), "methodClassIsPrimitive", function JSGenerator__methodClassIsPrimitive(){
var className = nil;
const self = this; var $early={name:"stReturn"};
try {
(function(){var $1$; $1$ = self['@methodClass']; if (nil.isNil_($1$)) { return (function JSGenerator__(){
$early.result=false; throw ($early);
}
)() } else { return $1$; }})();
className=self['@methodClass'].className();
return (className._eq("Number")).or_((function JSGenerator__(){
return (className._eq("String")).or_((function JSGenerator__(){
return (className._eq("Boolean")).or_((function JSGenerator__(){
return className._eq("BlockClosure");
}
));
}
));
}
));
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "testing", unescape("methodClassIsPrimitive%0D%09%22Return%20whether%20the%20method%20class%20%28aka%20receiver%29%20is%20a%20Javascript%20primitive%20type%2C%0D%09Number%2C%20Boolean%2C%20Function%20%28Block%29%2C%20String%22%0D%09%7C%20className%20%7C%0D%09methodClass%20ifNil%3A%20%5B%5Efalse%5D.%0D%09className%20%3A%3D%20methodClass%20className.%0D%09%5EclassName%20%3D%20%27Number%27%0D%09%09or%3A%20%5BclassName%20%3D%20%27String%27%0D%09%09or%3A%20%5BclassName%20%3D%20%27Boolean%27%0D%09%09or%3A%20%5BclassName%20%3D%20%27BlockClosure%27%5D%5D%5D"));
smalltalk.bind(smalltalk.JSGenerator, unescape("eol"), "eol", function JSGenerator__eol(){
const self = this; self['@stream'].lf();
return self;
}
, "private javascript", unescape("eol%0D%09stream%20lf"));
smalltalk.bind(smalltalk.JSGenerator, unescape("generateArgumentListFor%3A"), "generateArgumentListFor_", function JSGenerator__generateArgumentListFor_(methodNode){
const self = this; (methodNode.arguments()).do_andBetweenDo_((function JSGenerator__(arg){
return self['@stream'].nextPutAll_((arg.name()));
}
),(function JSGenerator__(){
return self['@stream'].nextPut_(unescape("%2C"));
}
));
return self;
}
, "private javascript", unescape("generateArgumentListFor%3A%20methodNode%0D%09methodNode%20arguments%0D%09%09do%3A%20%5B%3Aarg%20%7C%20stream%20nextPutAll%3A%20arg%20name%5D%20%0D%09%09andBetweenDo%3A%20%5Bstream%20nextPut%3A%20%24%2C%5D%0D"));
smalltalk.bind(smalltalk.JSGenerator, unescape("endSmalltalkMethodBinding%3Aselector%3A"), "endSmalltalkMethodBinding_selector_", function JSGenerator__endSmalltalkMethodBinding_selector_(aClass,aSelector){
const self = this; self['@stream'].nextPutAll_(unescape("%29%3B"));
self.eol();
return self;
}
, "generate method", unescape("endSmalltalkMethodBinding%3A%20aClass%20selector%3A%20aSelector%0D%09stream%20nextPutAll%3A%20%27%29%3B%27.%0D%09self%20eol%0D"));
smalltalk.bind(smalltalk.JSGenerator, unescape("methodClass%3Aselector%3A"), "methodClass_selector_", function JSGenerator__methodClass_selector_(aClass,aSelector){
const self = this; self['@idCounter']=(0);
self['@methodClass']=aClass;
self['@stream'].nextPutAll_("function ");
self.classFunctionName_(self['@methodClass']);
self['@stream'].nextPutAll_("__");
self.selector_(aSelector);
return self;
}
, "generate method", unescape("methodClass%3A%20aClass%20selector%3A%20aSelector%0D%09%22counter%20is%20reset%20for%20every%20new%20method%22%0D%09idCounter%20%3A%3D%200.%0D%09methodClass%20%3A%3D%20aClass.%0D%09stream%20nextPutAll%3A%20%27function%20%27.%0D%09self%20classFunctionName%3A%20methodClass.%0D%09stream%0D%09%09nextPutAll%3A%20%27__%27.%0D%09self%20selector%3A%20aSelector"));
smalltalk.bind(smalltalk.JSGenerator, unescape("methodProtocol%3A"), "methodProtocol_", function JSGenerator__methodProtocol_(protocol){
const self = this; self['@stream'].nextPutAll_(unescape("%2C%20%22"));
(function(){var $1$; $1$ = protocol; if (!nil.isNil_($1$)) { return self['@stream'].nextPutAll_(protocol) } else { return $1$; }})();
self['@stream'].nextPutAll_(unescape("%22"));
return self;
}
, "generate method", unescape("methodProtocol%3A%20protocol%0D%09stream%20nextPutAll%3A%20%27%2C%20%22%27.%0D%09protocol%20ifNotNil%3A%20%5Bstream%20nextPutAll%3A%20protocol%5D.%0D%09stream%20nextPutAll%3A%20%27%22%27"));
smalltalk.bind(smalltalk.JSGenerator, unescape("methodSource%3A"), "methodSource_", function JSGenerator__methodSource_(methodSource){
const self = this; (function(){var $1$; $1$ = methodSource; if (!nil.isNil_($1$)) { return (function JSGenerator__(){
return (function JSGenerator__($2$){
$2$.nextPutAll_(unescape("%2C%20"));
return $2$.nextPutAll_((methodSource.asJavascript()))}
)(self['@stream']);
}
)() } else { return $1$; }})();
return self;
}
, "generate method", unescape("methodSource%3A%20methodSource%0D%09methodSource%20%0D%09%09ifNotNil%3A%20%5B%0D%09%09%09stream%0D%09%09%09%09nextPutAll%3A%20%27%2C%20%27%3B%0D%09%09%09%09nextPutAll%3A%20methodSource%20asJavascript%5D%0D"));
smalltalk.bind(smalltalk.JSGenerator, unescape("startSmalltalkMethodBinding%3Aselector%3A"), "startSmalltalkMethodBinding_selector_", function JSGenerator__startSmalltalkMethodBinding_selector_(aClass,aSelector){
const self = this; self['@stream'].nextPutAll_(unescape("smalltalk.bind%28"));
self.smalltalkClassBinding_(aClass);
(function JSGenerator__($1$){
$1$.nextPutAll_(unescape("%2C%20unescape%28%22"));
$1$.nextPutAll_((aSelector.escaped()));
return $1$.nextPutAll_(unescape("%22%29%2C%20%22"))}
)(self['@stream']);
self.selector_(aSelector);
self['@stream'].nextPutAll_(unescape("%22%2C%20"));
return self;
}
, "generate method", unescape("startSmalltalkMethodBinding%3A%20aClass%20selector%3A%20aSelector%0D%09stream%20nextPutAll%3A%20%27smalltalk.bind%28%27.%0D%09self%20smalltalkClassBinding%3A%20aClass.%0D%09stream%20nextPutAll%3A%20%27%2C%20unescape%28%22%27%3B%20nextPutAll%3A%20aSelector%20escaped%3B%20nextPutAll%3A%20%27%22%29%2C%20%22%27.%0D%09self%20selector%3A%20aSelector.%0D%09stream%20nextPutAll%3A%20%27%22%2C%20%27.%0D"));
smalltalk.bind(smalltalk.JSGenerator, unescape("argumentList%3A"), "argumentList_", function JSGenerator__argumentList_(args){
const self = this; self['@stream'].nextPut_(unescape("%28"));
args.do_andBetweenDo_((function JSGenerator__(arg){
return arg.generateAsReceiverOn_(self);
}
),(function JSGenerator__(){
return self['@stream'].nextPut_(unescape("%2C"));
}
));
self['@stream'].nextPut_(unescape("%29"));
return self;
}
, "generate callbacks", unescape("argumentList%3A%20args%0D%09stream%20nextPut%3A%20%24%28.%0D%09args%0D%09%09do%3A%20%5B%3Aarg%20%7C%20arg%20generateAsReceiverOn%3A%20self%5D%20%0D%09%09andBetweenDo%3A%20%5Bstream%20nextPut%3A%20%24%2C%5D.%0D%09stream%20nextPut%3A%20%24%29"));
smalltalk.bind(smalltalk.JSGenerator, unescape("asLocalFunctionInvocation%3Awith%3A"), "asLocalFunctionInvocation_with_", function JSGenerator__asLocalFunctionInvocation_with_(statements,argument){
var argumentVariable = nil;
const self = this; (function JSGenerator__($1$){
$1$.nextPut_(unescape("%28"));
return $1$.nextPutAll_("function ")}
)(self['@stream']);
self.classFunctionName_(self['@methodClass']);
self['@stream'].nextPutAll_("__");
argumentVariable=(smalltalk.StVariableNode.$$new()).name_((self.uniqueVarName()));
self.argumentList_((smalltalk.Array.with_(argumentVariable)));
self.startBlock();
statements.allButLastDo_((function JSGenerator__(message){
self.startStatement();
message.receiver_(argumentVariable);
message.generateOn_(self);
return self.endStatement();
}
));
(statements.last()).receiver_(argumentVariable);
((statements.last()).asReturnNode()).generateOn_(self);
self.endBlock();
self['@stream'].nextPutAll_(unescape("%29%28"));
argument.generateInlinedValueOn_(self);
self['@stream'].nextPut_(unescape("%29"));
return self;
}
, "generate callbacks", unescape("asLocalFunctionInvocation%3A%20statements%20with%3A%20argument%0D%09%7C%20argumentVariable%20%7C%0D%09stream%0D%09%09nextPut%3A%20%24%28%3B%0D%09%09nextPutAll%3A%20%27function%20%27.%0D%09self%20classFunctionName%3A%20methodClass.%0D%09stream%20nextPutAll%3A%20%27__%27.%0D%09argumentVariable%20%3A%3D%20StVariableNode%20new%20name%3A%20self%20uniqueVarName.%0D%09self%20argumentList%3A%20%28Array%20with%3A%20argumentVariable%29.%0D%09self%20startBlock.%0D%09statements%20allButLastDo%3A%20%5B%3Amessage%20%7C%0D%09%09%09self%20startStatement.%0D%09%09%09message%20receiver%3A%20argumentVariable.%0D%09%09%09message%20generateOn%3A%20self.%0D%09%09%09self%20endStatement%5D.%0D%09statements%20last%20receiver%3A%20argumentVariable.%0D%09statements%20last%20asReturnNode%20generateOn%3A%20self.%0D%09self%20endBlock.%0D%09stream%20nextPutAll%3A%20%27%29%28%27.%0D%09argument%20generateInlinedValueOn%3A%20self.%0D%09stream%20nextPut%3A%20%24%29"));
smalltalk.bind(smalltalk.JSGenerator, unescape("asReceiverWith%3A"), "asReceiverWith_", function JSGenerator__asReceiverWith_(aBlock){
const self = this; self['@stream'].nextPut_(unescape("%28"));
aBlock.value();
self['@stream'].nextPut_(unescape("%29"));
return self;
}
, "generate callbacks", unescape("asReceiverWith%3A%20aBlock%0D%09%22%20wrap%20in%20%28%29%22%0D%09stream%20nextPut%3A%20%24%28.%0D%09aBlock%20value.%0D%09stream%20nextPut%3A%20%24%29"));
smalltalk.bind(smalltalk.JSGenerator, unescape("blockFunction%3A"), "blockFunction_", function JSGenerator__blockFunction_(args){
const self = this; self['@stream'].nextPutAll_("function ");
self.classFunctionName_(self['@methodClass']);
self['@stream'].nextPutAll_("__");
self.argumentList_(args);
return self;
}
, "generate callbacks", unescape("blockFunction%3A%20args%0D%09stream%20nextPutAll%3A%20%27function%20%27.%0D%09self%20classFunctionName%3A%20methodClass.%0D%09stream%20nextPutAll%3A%20%27__%27.%0D%09self%20argumentList%3A%20args"));
smalltalk.bind(smalltalk.JSGenerator, unescape("blockInvocation"), "blockInvocation", function JSGenerator__blockInvocation(){
const self = this; self['@stream'].nextPutAll_(unescape("%28%29"));
return self;
}
, "generate callbacks", unescape("blockInvocation%0D%09stream%20nextPutAll%3A%20%27%28%29%27"));
smalltalk.bind(smalltalk.JSGenerator, unescape("blockVariableInvocation"), "blockVariableInvocation", function JSGenerator__blockVariableInvocation(){
const self = this; self.methodCall();
self['@stream'].nextPutAll_(unescape("value%28%29"));
return self;
}
, "generate callbacks", unescape("blockVariableInvocation%0D%09self%20methodCall.%0D%09stream%20nextPutAll%3A%20%27value%28%29%27"));
smalltalk.bind(smalltalk.JSGenerator, unescape("classFunctionName%3A"), "classFunctionName_", function JSGenerator__classFunctionName_(aClass){
const self = this; if ((aClass.isMeta()).valueOf()) {self['@stream'].nextPutAll_(((aClass.theNonMetaClass()).name()));
self['@stream'].nextPutAll_("_class")} else {self['@stream'].nextPutAll_((aClass.name()))};
return self;
}
, "generate callbacks", unescape("classFunctionName%3A%20aClass%0D%09aClass%20isMeta%0D%09%09ifTrue%3A%20%5B%0D%09%09%09stream%20nextPutAll%3A%20aClass%20theNonMetaClass%20name.%0D%09%09%09stream%20nextPutAll%3A%20%27_class%27%5D%0D%09%09ifFalse%3A%20%5Bstream%20nextPutAll%3A%20aClass%20name%5D"));
smalltalk.bind(smalltalk.JSGenerator, unescape("className%3A"), "className_", function JSGenerator__className_(aClass){
const self = this; if ((aClass.isMeta()).valueOf()) {self['@stream'].nextPutAll_(((aClass.theNonMetaClass()).name()));
self['@stream'].nextPutAll_(".$klass")} else {self['@stream'].nextPutAll_((aClass.name()))};
return self;
}
, "generate callbacks", unescape("className%3A%20aClass%0D%09aClass%20isMeta%0D%09%09ifTrue%3A%20%5B%0D%09%09%09stream%20nextPutAll%3A%20aClass%20theNonMetaClass%20name.%0D%09%09%09stream%20nextPutAll%3A%20%27.%24klass%27%5D%0D%09%09ifFalse%3A%20%5Bstream%20nextPutAll%3A%20aClass%20name%5D"));
smalltalk.bind(smalltalk.JSGenerator, unescape("defineSelf"), "defineSelf", function JSGenerator__defineSelf(){
const self = this; self['@stream'].nextPutAll_(unescape("const%20self%20%3D%20this%3B%20"));
return self;
}
, "generate callbacks", unescape("defineSelf%0D%09stream%20nextPutAll%3A%20%27const%20self%20%3D%20this%3B%20%27"));
smalltalk.bind(smalltalk.JSGenerator, unescape("endBlock"), "endBlock", function JSGenerator__endBlock(){
const self = this; self['@stream'].nextPut_(unescape("%7D"));
self.eol();
return self;
}
, "generate callbacks", unescape("endBlock%0D%09stream%20nextPut%3A%20%24%7D.%0D%09self%20eol"));
smalltalk.bind(smalltalk.JSGenerator, unescape("endStatement"), "endStatement", function JSGenerator__endStatement(){
const self = this; self['@stream'].nextPutAll_(unescape("%3B"));
self.eol();
return self;
}
, "generate callbacks", unescape("endStatement%0D%09stream%20nextPutAll%3A%20%27%3B%27.%0D%09self%20eol"));
smalltalk.bind(smalltalk.JSGenerator, unescape("generateArrayLiteral%3A"), "generateArrayLiteral_", function JSGenerator__generateArrayLiteral_(anArray){
const self = this; self['@stream'].nextPut_(unescape("%5B"));
anArray.do_andBetweenDo_((function JSGenerator__(element){
return element.generateOn_(self);
}
),(function JSGenerator__(){
return (function JSGenerator__($1$){
$1$.nextPut_(unescape("%2C"));
return $1$.space()}
)(self['@stream']);
}
));
self['@stream'].nextPut_(unescape("%5D"));
return self;
}
, "generate callbacks", unescape("generateArrayLiteral%3A%20anArray%0D%09%22%5B%281%29%2C%20%282%29%2C%20%283%29%5D%22%0D%09stream%20nextPut%3A%20%24%5B.%0D%09anArray%0D%09%09do%3A%20%5B%3Aelement%20%7C%20element%20generateOn%3A%20self%5D%20%0D%09%09andBetweenDo%3A%20%5Bstream%20nextPut%3A%20%24%2C%3B%20space%5D.%0D%09stream%20nextPut%3A%20%24%5D"));
smalltalk.bind(smalltalk.JSGenerator, unescape("generateAssignment"), "generateAssignment", function JSGenerator__generateAssignment(){
const self = this; self['@stream'].nextPutAll_(unescape("%3D"));
return self;
}
, "generate callbacks", unescape("generateAssignment%0D%09stream%20nextPutAll%3A%20%27%3D%27"));
smalltalk.bind(smalltalk.JSGenerator, unescape("generateBooleanLiteral%3A"), "generateBooleanLiteral_", function JSGenerator__generateBooleanLiteral_(aBoolean){
const self = this; self['@stream'].nextPutAll_((aBoolean.asString()));
return self;
}
, "generate callbacks", unescape("generateBooleanLiteral%3A%20aBoolean%0D%09stream%20nextPutAll%3A%20aBoolean%20asString"));
smalltalk.bind(smalltalk.JSGenerator, unescape("generateCharacterLiteral%3A"), "generateCharacterLiteral_", function JSGenerator__generateCharacterLiteral_(aCharacter){
const self = this; self.generateStringLiteral_((aCharacter.asString()));
return self;
}
, "generate callbacks", unescape("generateCharacterLiteral%3A%20aCharacter%0D%09self%20generateStringLiteral%3A%20aCharacter%20asString"));
smalltalk.bind(smalltalk.JSGenerator, unescape("generateClassVariableAt%3A"), "generateClassVariableAt_", function JSGenerator__generateClassVariableAt_(classVarNode){
const self = this; self.smalltalkClassBinding_(((classVarNode.key()).nonMetaClass()));
(function JSGenerator__($1$){
$1$.nextPutAll_(unescape(".classVariableAt_%28%22"));
$1$.nextPutAll_((classVarNode.name()));
return $1$.nextPutAll_(unescape("%22%29"))}
)(self['@stream']);
return self;
}
, "generate callbacks", unescape("generateClassVariableAt%3A%20classVarNode%0D%09%22smalltalk.StCompilerTestClass.classVariableAt_%28%22%22ClassVar2%22%22%29%22%0D%09self%20smalltalkClassBinding%3A%20classVarNode%20key%20nonMetaClass.%0D%09stream%0D%09%09nextPutAll%3A%20%27.classVariableAt_%28%22%27%3B%0D%09%09nextPutAll%3A%20classVarNode%20name%3B%0D%09%09nextPutAll%3A%20%27%22%29%27"));
smalltalk.bind(smalltalk.JSGenerator, unescape("generateClassVariableAt%3Aput%3A"), "generateClassVariableAt_put_", function JSGenerator__generateClassVariableAt_put_(classVarNode,valueNode){
var classVarDefinition = nil;
const self = this; classVarDefinition=classVarNode.key();
self.smalltalkClassBinding_((classVarDefinition.nonMetaClass()));
(function JSGenerator__($1$){
$1$.nextPutAll_(unescape(".classVariableAt_put_%28%22"));
$1$.nextPutAll_((classVarDefinition.name()));
return $1$.nextPutAll_(unescape("%22%2C"))}
)(self['@stream']);
valueNode.generateInlinedValueOn_(self);
self['@stream'].nextPutAll_(unescape("%29"));
return self;
}
, "generate callbacks", unescape("generateClassVariableAt%3A%20classVarNode%20put%3A%20valueNode%0D%09%22smalltalk.StCompilerTestClass.classVariableAt_put_%28%22%22ClassVar2%22%22%2C%22%22classVar2%22%22%29%3B%22%0D%09%7C%20classVarDefinition%20%7C%0D%09classVarDefinition%20%3A%3D%20classVarNode%20key.%0D%09self%20smalltalkClassBinding%3A%20classVarDefinition%20nonMetaClass.%0D%09stream%0D%09%09nextPutAll%3A%20%27.classVariableAt_put_%28%22%27%3B%0D%09%09nextPutAll%3A%20classVarDefinition%20name%3B%0D%09%09nextPutAll%3A%20%27%22%2C%27.%0D%09valueNode%20generateInlinedValueOn%3A%20self.%0D%09stream%20nextPutAll%3A%20%27%29%27"));
smalltalk.bind(smalltalk.JSGenerator, unescape("generateInstVarAccess%3Aon%3A"), "generateInstVarAccess_on_", function JSGenerator__generateInstVarAccess_on_(varName,objectNode){
var objName = nil;
const self = this; objName=objectNode.name();
if ((smalltalk.JSGenerator.classVariableAt_("ReservedWords").includes_(objName)).valueOf()) {self['@stream'].nextPutAll_("$$")};
(function JSGenerator__($1$){
$1$.nextPutAll_(objName);
$1$.nextPut_(".");
return $1$.nextPutAll_(varName)}
)(self['@stream']);
return self;
}
, "generate callbacks", unescape("generateInstVarAccess%3A%20varName%20on%3A%20objectNode%0D%09%7C%20objName%20%7C%0D%09objName%20%3A%3D%20objectNode%20name.%0D%09%28ReservedWords%20includes%3A%20objName%29%0D%09%09ifTrue%3A%20%5Bstream%20nextPutAll%3A%20%27%24%24%27%5D.%0D%09stream%0D%09%09nextPutAll%3A%20objName%3B%0D%09%09nextPut%3A%20%24.%20%3B%0D%09%09nextPutAll%3A%20varName"));
smalltalk.bind(smalltalk.JSGenerator, unescape("generateInstanceVariable%3A"), "generateInstanceVariable_", function JSGenerator__generateInstanceVariable_(variableNode){
const self = this; (function JSGenerator__($1$){
$1$.nextPutAll_(unescape("self%5B%27@"));
$1$.nextPutAll_((variableNode.name()));
return $1$.nextPutAll_(unescape("%27%5D"))}
)(self['@stream']);
return self;
}
, "generate callbacks", unescape("generateInstanceVariable%3A%20variableNode%0D%09%22self%5B%27@value1%27%5D%22%0D%09stream%0D%09%09nextPutAll%3A%20%27self%5B%27%27@%27%3B%0D%09%09nextPutAll%3A%20variableNode%20name%3B%0D%09%09nextPutAll%3A%20%27%27%27%5D%27"));
smalltalk.bind(smalltalk.JSGenerator, unescape("generateNilLiteral%3A"), "generateNilLiteral_", function JSGenerator__generateNilLiteral_(anUndefinedObject){
const self = this; self['@stream'].nextPutAll_((anUndefinedObject.asString()));
return self;
}
, "generate callbacks", unescape("generateNilLiteral%3A%20anUndefinedObject%0D%09stream%20nextPutAll%3A%20anUndefinedObject%20asString"));
smalltalk.bind(smalltalk.JSGenerator, unescape("generateNumberLiteral%3A"), "generateNumberLiteral_", function JSGenerator__generateNumberLiteral_(aNumber){
const self = this; self['@stream'].nextPut_(unescape("%28"));
aNumber.printOn_(self['@stream']);
self['@stream'].nextPut_(unescape("%29"));
return self;
}
, "generate callbacks", unescape("generateNumberLiteral%3A%20aNumber%0D%09%22%281%29%22%0D%09stream%20nextPut%3A%20%24%28.%0D%09aNumber%20printOn%3A%20stream.%0D%09stream%20nextPut%3A%20%24%29"));
smalltalk.bind(smalltalk.JSGenerator, unescape("generatePrimitive%3Amodule%3A"), "generatePrimitive_module_", function JSGenerator__generatePrimitive_module_(primitiveName,moduleName){
const self = this; (function JSGenerator__($1$){
$1$.nextPutAll_(unescape("var%20%24%24primitiveResult%20%3D%20smalltalk.primitiveManager.callPrimitive%28%22"));
$1$.nextPutAll_(moduleName);
$1$.nextPutAll_(unescape("%22%2C%20%22"));
$1$.nextPutAll_(primitiveName);
return $1$.nextPutAll_(unescape("%22%2C%20this"))}
)(self['@stream']);
if ((self.methodClassIsPrimitive()).valueOf()) {self['@stream'].nextPutAll_(unescape(".valueOf%28%29"))};
self['@stream'].nextPutAll_(unescape("%2C%20arguments%29%3B"));
self.eol();
self['@stream'].nextPutAll_(unescape("if%20%28%24%24primitiveResult%20%21%3D%3D%20smalltalk.primitiveManager.primFailValue%29%0D%09%09return%20%24%24primitiveResult%3B"));
self.eol();
return self;
}
, "generate callbacks", unescape("generatePrimitive%3A%20primitiveName%20module%3A%20moduleName%0D%09%22Create%20named%20primitive.%22%0D%09%22%3Cprimitive%3A%20%27primScan%27%20module%3A%20%27NKBarcodeScanner%27%3E%0D%0D%09var%20%24%24primitiveResult%20%3D%20smalltalk.primitiveManager.callPrimitive%28%22%22NKBarcodeScanner%22%22%2C%20%22%22primScan%22%22%2C%20this%2C%20arguments%29%3B%0D%09if%20%28%24%24primitiveResult%20%21%3D%3D%20smalltalk.primitiveManager.primFailValue%29%0D%09%09return%20%24%24primitiveResult%3B%0D%0D%09var%20%24%24primitiveResult%20%3D%20NKBarcodeScanner.primScan%28this%2C%20arguments%29%3B%0D%09if%20%28%24%24primitiveResult%20%21%3D%3D%20smalltalk.primitiveManager.primFailValue%29%0D%09%09return%20%24%24primitiveResult%3B%0D%09%22%0D%09stream%0D%09%09nextPutAll%3A%20%27var%20%24%24primitiveResult%20%3D%20smalltalk.primitiveManager.callPrimitive%28%22%27%3B%0D%09%09nextPutAll%3A%20moduleName%3B%0D%09%09nextPutAll%3A%20%27%22%2C%20%22%27%3B%0D%09%09nextPutAll%3A%20primitiveName%3B%0D%09%09nextPutAll%3A%20%27%22%2C%20this%27.%0D%09self%20methodClassIsPrimitive%0D%09%09ifTrue%3A%20%5Bstream%20nextPutAll%3A%20%27.valueOf%28%29%27%5D.%0D%09stream%0D%09%09nextPutAll%3A%20%27%2C%20arguments%29%3B%27.%0D%09self%20eol.%0D%09stream%0D%09%09nextPutAll%3A%20%27if%20%28%24%24primitiveResult%20%21%3D%3D%20smalltalk.primitiveManager.primFailValue%29%0D%09%09return%20%24%24primitiveResult%3B%27.%0D%09self%20eol"));
smalltalk.bind(smalltalk.JSGenerator, unescape("generatePrimitiveArgumentCopy"), "generatePrimitiveArgumentCopy", function JSGenerator__generatePrimitiveArgumentCopy(){
const self = this; self['@stream'].nextPutAll_(unescape("const%20args%20%3D%20%5B%5D%3B%0D%09const%20length%20%3D%20arguments.length%3B%0D%09for%20%28var%20i%20%3D%200%3B%20i%20%3C%20length%3B%20++i%29%20%7B%0D%09%09args%5Bi%5D%20%3D%20arguments%5Bi%5D%3B%0D%09%7D"));
self.eol();
return self;
}
, "generate callbacks", unescape("generatePrimitiveArgumentCopy%0D%09%22Generate%20the%20code%20to%20copy%20the%20arguments.%22%0D%09%22%09const%20args%20%3D%20%5B%5D%3B%0D%09const%20length%20%3D%20arguments.length%3B%0D%09for%20%28var%20i%20%3D%200%3B%20i%20%3C%20length%3B%20++i%29%20%7B%0D%09%09args%5Bi%5D%20%3D%20arguments%5Bi%5D%3B%0D%09%7D%22%0D%09stream%0D%09%09nextPutAll%3A%20%27const%20args%20%3D%20%5B%5D%3B%0D%09const%20length%20%3D%20arguments.length%3B%0D%09for%20%28var%20i%20%3D%200%3B%20i%20%3C%20length%3B%20++i%29%20%7B%0D%09%09args%5Bi%5D%20%3D%20arguments%5Bi%5D%3B%0D%09%7D%27.%0D%09self%20eol"));
smalltalk.bind(smalltalk.JSGenerator, unescape("generatePrimitiveDirect%3Amodule%3A"), "generatePrimitiveDirect_module_", function JSGenerator__generatePrimitiveDirect_module_(primitiveName,moduleName){
const self = this; (function JSGenerator__($1$){
$1$.nextPutAll_(unescape("var%20%24%24primitiveResult%20%3D%20smalltalk.primitiveManager.modules."));
$1$.nextPutAll_(moduleName);
$1$.nextPutAll_(".");
$1$.nextPutAll_(primitiveName);
return $1$.nextPutAll_(unescape("%28this"))}
)(self['@stream']);
self['@stream'].nextPutAll_(unescape("%2C%20arguments%29%3B"));
self.eol();
self['@stream'].nextPutAll_(unescape("if%20%28%24%24primitiveResult%20%21%3D%3D%20smalltalk.primitiveManager.primFailValue%29%0D%09%09return%20%24%24primitiveResult%3B"));
self.eol();
return self;
}
, "generate callbacks", unescape("generatePrimitiveDirect%3A%20primitiveName%20module%3A%20moduleName%0D%09%22Create%20named%20primitive.%22%0D%09%22%3Cprimitive%3A%20%27primScan%27%20module%3A%20%27NKBarcodeScanner%27%3E%0D%0D%09var%20%24%24primitiveResult%20%3D%20smalltalk.NKBarcodeScanner.primScan%28this%2C%20arguments%29%3B%0D%09if%20%28%24%24primitiveResult%20%21%3D%3D%20smalltalk.primitiveManager.primFailValue%29%0D%09%09return%20%24%24primitiveResult%3B%0D%09%22%0D%09%22self%20generatePrimitiveArgumentCopy.%22%0D%09stream%0D%09%09nextPutAll%3A%20%27var%20%24%24primitiveResult%20%3D%20smalltalk.primitiveManager.modules.%27%3B%0D%09%09nextPutAll%3A%20moduleName%3B%0D%09%09nextPutAll%3A%20%27.%27%3B%0D%09%09nextPutAll%3A%20primitiveName%3B%0D%09%09nextPutAll%3A%20%27%28this%27.%0D%22%09self%20methodClassIsPrimitive%0D%09%09ifTrue%3A%20%5Bstream%20nextPutAll%3A%20%27.valueOf%28%29%27%5D.%0D%22%09stream%0D%09%09nextPutAll%3A%20%27%2C%20arguments%29%3B%27.%0D%09self%20eol.%0D%09stream%0D%09%09nextPutAll%3A%20%27if%20%28%24%24primitiveResult%20%21%3D%3D%20smalltalk.primitiveManager.primFailValue%29%0D%09%09return%20%24%24primitiveResult%3B%27.%0D%09self%20eol"));
smalltalk.bind(smalltalk.JSGenerator, unescape("generatePropertyAccess%3Aon%3A"), "generatePropertyAccess_on_", function JSGenerator__generatePropertyAccess_on_(propertyName,objectNode){
const self = this; (function JSGenerator__($1$){
$1$.nextPutAll_((objectNode.name()));
$1$.nextPut_(unescape("%5B"));
$1$.nextPutAll_((propertyName.asString()));
return $1$.nextPut_(unescape("%5D"))}
)(self['@stream']);
return self;
}
, "generate callbacks", unescape("generatePropertyAccess%3A%20propertyName%20on%3A%20objectNode%0D%09stream%0D%09%09nextPutAll%3A%20objectNode%20name%3B%0D%09%09nextPut%3A%20%24%5B%20%3B%0D%09%09nextPutAll%3A%20propertyName%20asString%3B%0D%09%09nextPut%3A%20%24%5D"));
smalltalk.bind(smalltalk.JSGenerator, unescape("generateStringLiteral%3A"), "generateStringLiteral_", function JSGenerator__generateStringLiteral_(aString){
const self = this; self['@stream'].nextPutAll_((aString.asJavascript()));
return self;
}
, "generate callbacks", unescape("generateStringLiteral%3A%20aString%0D%09%22Escape%20the%20string%2C%20but%20only%20if%20needed.%20%0D%09Magic%20is%20done%20in%20String%20class%2C%20depending%20on%20platform%22%0D%09stream%20nextPutAll%3A%20aString%20asJavascript"));
smalltalk.bind(smalltalk.JSGenerator, unescape("generateTemporaries%3A"), "generateTemporaries_", function JSGenerator__generateTemporaries_(tempVars){
const self = this; self.toDo();
tempVars.do_((function JSGenerator__(tempVar){
self['@stream'].nextPutAll_("var ");
tempVar.generateOn_(self);
self['@stream'].nextPutAll_(unescape("%20%3D%20nil%3B"));
return self.eol();
}
));
return self;
}
, "generate callbacks", unescape("generateTemporaries%3A%20tempVars%0D%09self%20toDo.%0D%09%22%20should%20later%20use%20nilReadBeforeWrittenTemps%20to%20avoid%20unnecessary%20inits%22%0D%09tempVars%0D%09%09do%3A%20%5B%3AtempVar%20%7C%20%0D%09%09%09stream%20nextPutAll%3A%20%27var%20%27.%0D%09%09%09tempVar%20generateOn%3A%20self.%0D%09%09%09stream%20nextPutAll%3A%20%27%20%3D%20nil%3B%27.%0D%09%09%09self%20eol%5D"));
smalltalk.bind(smalltalk.JSGenerator, unescape("generateUndeclaredVariable%3A"), "generateUndeclaredVariable_", function JSGenerator__generateUndeclaredVariable_(variableNode){
var varName = nil;
const self = this; varName=variableNode.name();
self['@stream'].nextPutAll_("smalltalk.");
self['@stream'].nextPutAll_(varName);
return self;
}
, "generate callbacks", unescape("generateUndeclaredVariable%3A%20variableNode%0D%09%22assume%20this%20is%20a%20global%20variable%22%0D%09%7C%20varName%20%7C%0D%09varName%20%3A%3D%20variableNode%20name.%0D%09stream%20nextPutAll%3A%20%27smalltalk.%27.%0D%09stream%20nextPutAll%3A%20varName"));
smalltalk.bind(smalltalk.JSGenerator, unescape("generateVariable%3A"), "generateVariable_", function JSGenerator__generateVariable_(variableNode){
const self = this; if ((variableNode.isSelfPseudoVariable()).valueOf()) {self['@stream'].nextPutAll_("self")} else {var varName = nil;
varName=variableNode.name();
if ((smalltalk.JSGenerator.classVariableAt_("ReservedWords").includes_(varName)).valueOf()) {self['@stream'].nextPutAll_("$$")};
self['@stream'].nextPutAll_(varName)};
return self;
}
, "generate callbacks", unescape("generateVariable%3A%20variableNode%0D%09variableNode%20isSelfPseudoVariable%0D%09%09ifTrue%3A%20%5Bstream%20nextPutAll%3A%20%27self%27%5D%0D%09%09ifFalse%3A%20%5B%0D%09%09%09%7C%20varName%20%7C%0D%09%09%09varName%20%3A%3D%20variableNode%20name.%0D%09%09%09%28ReservedWords%20includes%3A%20varName%29%0D%09%09%09%09ifTrue%3A%20%5Bstream%20nextPutAll%3A%20%27%24%24%27%5D.%0D%09%09%09stream%20nextPutAll%3A%20varName%5D"));
smalltalk.bind(smalltalk.JSGenerator, unescape("inlineJS%3A"), "inlineJS_", function JSGenerator__inlineJS_(aString){
const self = this; self['@stream'].nextPutAll_(aString);
return self;
}
, "generate callbacks", unescape("inlineJS%3A%20aString%0D%09stream%20nextPutAll%3A%20aString"));
smalltalk.bind(smalltalk.JSGenerator, unescape("literalVariable%3A"), "literalVariable_", function JSGenerator__literalVariable_(variableNode){
const self = this; self['@stream'].nextPutAll_((variableNode.name()));
return self;
}
, "generate callbacks", unescape("literalVariable%3A%20variableNode%0D%09stream%20nextPutAll%3A%20variableNode%20name"));
smalltalk.bind(smalltalk.JSGenerator, unescape("methodCall"), "methodCall", function JSGenerator__methodCall(){
const self = this; self['@stream'].nextPut_(".");
return self;
}
, "generate callbacks", unescape("methodCall%0D%09stream%20nextPut%3A%20%24."));
smalltalk.bind(smalltalk.JSGenerator, unescape("nonLocalReturnWith%3A"), "nonLocalReturnWith_", function JSGenerator__nonLocalReturnWith_(aBlock){
const self = this; self['@stream'].nextPutAll_(unescape("%24early.result%3D"));
aBlock.value();
self['@stream'].nextPutAll_(unescape("%3B%20throw%20%28%24early%29"));
return self;
}
, "generate callbacks", unescape("nonLocalReturnWith%3A%20aBlock%0D%09%22%24early.result%3D%3Cexpression%3E%3B%20throw%20%28%24early%29%3B%22%0D%09stream%0D%09%09nextPutAll%3A%20%27%24early.result%3D%27.%0D%09aBlock%20value.%0D%09stream%0D%09%09nextPutAll%3A%20%27%3B%20throw%20%28%24early%29%27"));
smalltalk.bind(smalltalk.JSGenerator, unescape("nonLocalReturnWrapperEnd"), "nonLocalReturnWrapperEnd", function JSGenerator__nonLocalReturnWrapperEnd(){
const self = this; self['@stream'].nextPutAll_(unescape("%7D%20catch%28%24ex%29%20%7B"));
self.eol();
(function JSGenerator__($1$){
$1$.tab();
return $1$.nextPutAll_(unescape("if%28%24ex%3D%3D%3D%24early%29%20%7B%20return%20%24ex.result%3B%7D"))}
)(self['@stream']);
self.eol();
(function JSGenerator__($2$){
$2$.tab();
return $2$.nextPutAll_("throw $ex")}
)(self['@stream']);
self.eol();
self['@stream'].nextPutAll_(unescape("%7D"));
self.eol();
return self;
}
, "generate callbacks", unescape("nonLocalReturnWrapperEnd%0D%09%22%7D%20catch%28e%29%20%7B%0D%09%09if%28e%3D%3D%3D%24early%29%20return%20e.result%3B%20%0D%09%09throw%20e%0D%09%7D%22%0D%09stream%20nextPutAll%3A%20%27%7D%20catch%28%24ex%29%20%7B%27.%0D%09self%20eol.%0D%09stream%20tab%3B%20nextPutAll%3A%20%27if%28%24ex%3D%3D%3D%24early%29%20%7B%20return%20%24ex.result%3B%7D%27.%0D%09self%20eol.%0D%09stream%20tab%3B%20nextPutAll%3A%20%27throw%20%24ex%27.%0D%09self%20eol.%0D%09stream%20nextPutAll%3A%20%27%7D%27.%0D%09self%20eol"));
smalltalk.bind(smalltalk.JSGenerator, unescape("nonLocalReturnWrapperStart"), "nonLocalReturnWrapperStart", function JSGenerator__nonLocalReturnWrapperStart(){
const self = this; self['@stream'].nextPutAll_(unescape("var%20%24early%3D%7Bname%3A%22stReturn%22%7D%3B"));
self.eol();
self['@stream'].nextPutAll_(unescape("try%20%7B"));
self.eol();
return self;
}
, "generate callbacks", unescape("nonLocalReturnWrapperStart%0D%09%22var%20%24early%3D%7B%7D%3B%0D%09try%20%7B%22%0D%09stream%20nextPutAll%3A%20%27var%20%24early%3D%7Bname%3A%22stReturn%22%7D%3B%27.%0D%09self%20eol.%0D%09stream%20nextPutAll%3A%20%27try%20%7B%27.%0D%09self%20eol"));
smalltalk.bind(smalltalk.JSGenerator, unescape("return"), "$$return", function JSGenerator__$$return(){
const self = this; self['@stream'].nextPutAll_("return ");
return self;
}
, "generate callbacks", unescape("return%0D%09stream%20nextPutAll%3A%20%27return%20%27"));
smalltalk.bind(smalltalk.JSGenerator, unescape("selector%3A"), "selector_", function JSGenerator__selector_(selectorSymbol){
var selector = nil;
const self = this; selector=selectorSymbol.asString();
self.toDo();
if (((selectorSymbol.asSymbol()).isBinary()).valueOf()) {selector.do_((function JSGenerator__(c){
return self['@stream'].nextPutAll_((smalltalk.JSGenerator.classVariableAt_("BinaryMap").at_ifAbsent_(c,(function JSGenerator__(){
return c.asString();
}
))));
}
))} else {var mapped = nil;
mapped=selector.replaceAllOccurencesOf_with_(":","_");
if ((smalltalk.JSGenerator.classVariableAt_("ReservedWords").includes_(mapped)).valueOf()) {self['@stream'].nextPutAll_("$$")};
self['@stream'].nextPutAll_(mapped)};
return self;
}
, "generate callbacks", unescape("selector%3A%20selectorSymbol%0D%09%7C%20selector%20%7C%0D%09selector%20%3A%3D%20selectorSymbol%20asString.%0D%09self%20toDo.%20%22this%20would%20get%20around%20the%20reserved%20words%22%0D%22%09stream%20nextPut%3A%20%24_.%22%0D%09selectorSymbol%20asSymbol%20isBinary%0D%09%09ifTrue%3A%20%5B%0D%09%09%09selector%0D%09%09%09%09do%3A%20%5B%3Ac%20%7C%20stream%20nextPutAll%3A%20%28BinaryMap%20at%3A%20c%20ifAbsent%3A%20%5Bc%20asString%5D%29%5D%0D%09%09%09%09%22separatedBy%3A%20%5Bstream%20nextPut%3A%20%24_%5D%22%5D%0D%09%09ifFalse%3A%20%5B%0D%09%09%09%7C%20mapped%20%7C%0D%09%09%09mapped%20%3A%3D%20selector%20replaceAllOccurencesOf%3A%20%24%3A%20with%3A%20%24_.%0D%09%09%09%28ReservedWords%20includes%3A%20mapped%29%0D%09%09%09%09ifTrue%3A%20%5Bstream%20nextPutAll%3A%20%27%24%24%27%5D.%0D%09%09%09stream%20nextPutAll%3A%20mapped%5D"));
smalltalk.bind(smalltalk.JSGenerator, unescape("selfPseudoVariable%3A"), "selfPseudoVariable_", function JSGenerator__selfPseudoVariable_(variableNode){
const self = this; self['@stream'].nextPutAll_("self");
return self;
}
, "generate callbacks", unescape("selfPseudoVariable%3A%20variableNode%0D%09stream%20nextPutAll%3A%20%27self%27"));
smalltalk.bind(smalltalk.JSGenerator, unescape("smalltalkClassBinding%3A"), "smalltalkClassBinding_", function JSGenerator__smalltalkClassBinding_(aClass){
const self = this; self['@stream'].nextPutAll_("smalltalk.");
self.className_(aClass);
return self;
}
, "generate callbacks", unescape("smalltalkClassBinding%3A%20aClass%0D%09stream%20nextPutAll%3A%20%27smalltalk.%27.%0D%09self%20className%3A%20aClass"));
smalltalk.bind(smalltalk.JSGenerator, unescape("startBlock"), "startBlock", function JSGenerator__startBlock(){
const self = this; self['@stream'].nextPut_(unescape("%7B"));
self.eol();
return self;
}
, "generate callbacks", unescape("startBlock%0D%09stream%20nextPut%3A%20%24%7B.%0D%09self%20eol"));
smalltalk.bind(smalltalk.JSGenerator, unescape("startStatement"), "startStatement", function JSGenerator__startStatement(){
const self = this; self;
return self;
}
, "generate callbacks", unescape("startStatement%0D"));
smalltalk.bind(smalltalk.JSGenerator, unescape("superImplementor%3AargumentList%3A"), "superImplementor_argumentList_", function JSGenerator__superImplementor_argumentList_(selector,argList){
const self = this; self['@stream'].nextPutAll_(unescape("smalltalk.superImplementor%28"));
self.smalltalkClassBinding_(self['@methodClass']);
self['@stream'].nextPutAll_(unescape("%2C%27"));
self.selector_(selector);
self['@stream'].nextPutAll_(unescape("%27%29.apply%28self%2C%20"));
self['@stream'].nextPut_(unescape("%5B"));
argList.do_andBetweenDo_((function JSGenerator__(arg){
return arg.generateOn_(self);
}
),(function JSGenerator__(){
return self['@stream'].nextPut_(unescape("%2C"));
}
));
self['@stream'].nextPutAll_(unescape("%5D%29"));
return self;
}
, "generate callbacks", unescape("superImplementor%3A%20selector%20argumentList%3A%20argList%0D%09%22smalltalk.superImplementor%28smalltalk.StCompilerTestClass.%24klass%2C%27%24%24new%27%29.apply%28self%2C%20%5B%5D%29%22%0D%09stream%20nextPutAll%3A%20%27smalltalk.superImplementor%28%27.%0D%09self%20smalltalkClassBinding%3A%20methodClass.%0D%09stream%20nextPutAll%3A%20%27%2C%27%27%27.%0D%09self%20selector%3A%20selector.%0D%09stream%20nextPutAll%3A%20%27%27%27%29.apply%28self%2C%20%27.%0D%0D%09stream%20nextPut%3A%20%24%5B.%0D%09argList%0D%09%09do%3A%20%5B%3Aarg%20%7C%20arg%20generateOn%3A%20self%5D%20%0D%09%09andBetweenDo%3A%20%5Bstream%20nextPut%3A%20%24%2C%5D.%0D%09stream%20nextPutAll%3A%20%27%5D%29%27"));
smalltalk.bind(smalltalk.JSGenerator, unescape("toDo"), "toDo", function JSGenerator__toDo(){
const self = this; self;
return self;
}
, "annotations", "toDo");
smalltalk.bind(smalltalk.JSGenerator, unescape("addDefinition%3Asuperclass%3AinstanceVariableNames%3AclassVariableNames%3ApoolDictionaries%3Acategory%3A"), "addDefinition_superclass_instanceVariableNames_classVariableNames_poolDictionaries_category_", function JSGenerator__addDefinition_superclass_instanceVariableNames_classVariableNames_poolDictionaries_category_(subclass,superClass,instVarNames,classVarNames,poolVars,category){
var classDefinition = nil;
const self = this; classDefinition=smalltalk.StClassDefinition.name_superclass_instanceVariableNames_classVariableNames_poolDictionaries_category_(subclass,superClass,instVarNames,classVarNames,poolVars,category);
self['@environment'].addClassDefinition_(classDefinition);
return self;
}
, "generate", unescape("addDefinition%3A%20subclass%20superclass%3A%20superClass%20instanceVariableNames%3A%20instVarNames%20classVariableNames%3A%20classVarNames%20poolDictionaries%3A%20poolVars%20category%3A%20category%0D%09%7C%20classDefinition%20%7C%0D%09classDefinition%20%3A%3D%20StClassDefinition%0D%09%09name%3A%20subclass%0D%09%09superclass%3A%20superClass%0D%09%09instanceVariableNames%3A%20instVarNames%0D%09%09classVariableNames%3A%20classVarNames%0D%09%09poolDictionaries%3A%20poolVars%0D%09%09category%3A%20category.%0D%09environment%20addClassDefinition%3A%20classDefinition"));
smalltalk.bind(smalltalk.JSGenerator, unescape("environment"), "environment", function JSGenerator__environment(){
const self = this; return self['@environment'];
}
, "generate", unescape("environment%0D%09%5Eenvironment"));
smalltalk.bind(smalltalk.JSGenerator, unescape("generate%3AclassVariableNames%3A"), "generate_classVariableNames_", function JSGenerator__generate_classVariableNames_(subclass,classVars){
const self = this; (function JSGenerator__($1$){
$1$.nextPutAll_("smalltalk.");
$1$.nextPutAll_(subclass);
return $1$.nextPutAll_(unescape(".%24classVariableNames%3D%28%22"))}
)(self['@stream']);
classVars.do_andBetweenDo_((function JSGenerator__(classVar){
return self['@stream'].nextPutAll_((classVar.asString()));
}
),(function JSGenerator__(){
return self['@stream'].space();
}
));
self['@stream'].nextPutAll_(unescape("%22%29%3B"));
self.eol();
return self;
}
, "generate", unescape("generate%3A%20subclass%20classVariableNames%3A%20classVars%0D%0D%09%22smalltalk.StCompilerTestClass.%24classVariableNames%3D%22%22ClassVar1%20ClassVar2%20ClassVar3%22%22%29%3B%22%0D%09stream%0D%09%09nextPutAll%3A%20%27smalltalk.%27%3B%0D%09%09nextPutAll%3A%20subclass%3B%20%0D%09%09nextPutAll%3A%20%27.%24classVariableNames%3D%28%22%27.%0D%0D%09classVars%0D%09%09do%3A%20%5B%3AclassVar%20%7C%20stream%20nextPutAll%3A%20classVar%20asString%5D%20%0D%09%09andBetweenDo%3A%20%5Bstream%20space%5D.%0D%0D%09stream%20nextPutAll%3A%20%27%22%29%3B%27.%0D%09self%20eol"));
smalltalk.bind(smalltalk.JSGenerator, unescape("generate%3Asuperclass%3AinstanceVariableNames%3AclassVariableNames%3ApoolDictionaries%3Acategory%3A"), "generate_superclass_instanceVariableNames_classVariableNames_poolDictionaries_category_", function JSGenerator__generate_superclass_instanceVariableNames_classVariableNames_poolDictionaries_category_(subclass,superClass,instVars,classVars,poolVars,category){
const self = this; (function JSGenerator__($1$){
$1$.nextPutAll_(unescape("smalltalk.addClass%28%22"));
$1$.nextPutAll_(subclass);
$1$.nextPutAll_(unescape("%22%2C%20"));
$1$.nextPutAll_("smalltalk.");
$1$.nextPutAll_(superClass);
$1$.nextPut_(unescape("%2C"));
$1$.space();
return $1$.nextPut_(unescape("%5B"))}
)(self['@stream']);
instVars.do_andBetweenDo_((function JSGenerator__(instVar){
return instVar.printOn_(self['@stream']);
}
),(function JSGenerator__(){
return (function JSGenerator__($2$){
$2$.nextPut_(unescape("%2C"));
return $2$.space()}
)(self['@stream']);
}
));
self['@stream'].nextPutAll_(unescape("%5D%2C%20"));
category.printOn_(self['@stream']);
self['@stream'].nextPutAll_(unescape("%29%3B"));
self.eol();
self.generate_classVariableNames_(subclass,classVars);
return self;
}
, "generate", unescape("generate%3A%20subclass%20superclass%3A%20superClass%20instanceVariableNames%3A%20instVars%20classVariableNames%3A%20classVars%20poolDictionaries%3A%20poolVars%20category%3A%20category%0D%0D%09%22smalltalk.addClass%28%22%22StCompilerTestClass%22%22%2Csmalltalk.Object%2C%20%5B%27instVar1%27%2C%20%27instVar2%27%2C%20%27instVar3%27%5D%2C%20%27Compiler-JS-Test%27%29%3B%0D%09smalltalk.StCompilerTestClass.%24classVariableNames%3D%22%22ClassVar1%20ClassVar2%20ClassVar3%22%22%29%3B%22%0D%22%09self%20addDefinition%3A%20subclass%20superclass%3A%20superClass%20instanceVariableNames%3A%20instVars%20classVariableNames%3A%20classVars%20poolDictionaries%3A%20poolVars%20category%3A%20category.%0D%22%0D%09stream%0D%09%09nextPutAll%3A%20%27smalltalk.addClass%28%22%27%3B%0D%09%09nextPutAll%3A%20subclass%3B%20nextPutAll%3A%20%27%22%2C%20%27%20%3B%0D%09%09nextPutAll%3A%20%27smalltalk.%27%3B%20nextPutAll%3A%20superClass%3B%20nextPut%3A%20%24%2C%20%3B%20space%3B%0D%09%09nextPut%3A%20%24%5B%20.%0D%0D%09instVars%0D%09%09do%3A%20%5B%3AinstVar%20%7C%20instVar%20printOn%3A%20stream%5D%20%0D%09%09andBetweenDo%3A%20%5Bstream%20nextPut%3A%20%24%2C%3B%20space%5D.%0D%09stream%20%0D%09%09nextPutAll%3A%20%27%5D%2C%20%27.%0D%09category%20printOn%3A%20stream.%0D%09stream%20nextPutAll%3A%20%27%29%3B%27.%0D%09self%20eol.%0D%09self%20generate%3A%20subclass%20classVariableNames%3A%20classVars"));
smalltalk.bind(smalltalk.JSGenerator, unescape("generateMeta%3AinstanceVariableNames%3A"), "generateMeta_instanceVariableNames_", function JSGenerator__generateMeta_instanceVariableNames_(metaClassDefinition,instVarNames){
const self = this; (function JSGenerator__($1$){
$1$.nextPutAll_("smalltalk.");
$1$.nextPutAll_(((metaClassDefinition.theNonMetaClass()).className()));
return $1$.nextPutAll_(unescape(".%24klass.%24iVarNames%20%3D%20%5B"))}
)(self['@stream']);
instVarNames.do_andBetweenDo_((function JSGenerator__(instVar){
return instVar.printOn_(self['@stream']);
}
),(function JSGenerator__(){
return (function JSGenerator__($2$){
$2$.nextPut_(unescape("%2C"));
return $2$.space()}
)(self['@stream']);
}
));
self['@stream'].nextPutAll_(unescape("%5D%3B"));
self.eol();
return self;
}
, "generate", unescape("generateMeta%3A%20metaClassDefinition%20instanceVariableNames%3A%20instVarNames%0D%0D%09%22EventManager%20class%20instanceVariableNames%3A%20%27%20eventsTriggered%20%27%21%0D%09smalltalk.EventManager.%24klass.%24iVarNames%20%3D%20%5B%27eventsTriggered%27%5D%3B%22%0D%09stream%0D%09%09nextPutAll%3A%20%27smalltalk.%27%3B%0D%09%09nextPutAll%3A%20metaClassDefinition%20theNonMetaClass%20className%3B%20%0D%09%09nextPutAll%3A%20%27.%24klass.%24iVarNames%20%3D%20%5B%27.%0D%09instVarNames%0D%09%09do%3A%20%5B%3AinstVar%20%7C%20instVar%20printOn%3A%20stream%5D%20%0D%09%09andBetweenDo%3A%20%5Bstream%20nextPut%3A%20%24%2C%3B%20space%5D.%0D%09stream%20nextPutAll%3A%20%27%5D%3B%27.%0D%09self%20eol"));
smalltalk.bind(smalltalk.JSGenerator, unescape("generateMetaFor%3AinstanceVariableNames%3A"), "generateMetaFor_instanceVariableNames_", function JSGenerator__generateMetaFor_instanceVariableNames_(className,instVarNames){
const self = this; (self.halt()).generateMeta_instanceVariableNames_((self['@environment'].bindingOf_(className)),instVarNames);
return self;
}
, "generate", unescape("generateMetaFor%3A%20className%20instanceVariableNames%3A%20instVarNames%0D%0D%09self%20halt%0D%09%09generateMeta%3A%20%28environment%20bindingOf%3A%20className%29%0D%09%09instanceVariableNames%3A%20instVarNames"));
smalltalk.bind(smalltalk.JSGenerator, unescape("uniqueVarName"), "uniqueVarName", function JSGenerator__uniqueVarName(){
const self = this; self['@idCounter']=self['@idCounter']._plus((1));
return ("$"._comma((self['@idCounter'].asString())))._comma("$");
}
, "generate", unescape("uniqueVarName%0D%09idCounter%20%3A%3D%20idCounter%20+%201.%0D%09%5E%27%24%27%20%2C%20idCounter%20asString%20%2C%20%27%24%27"));
smalltalk.bind(smalltalk.JSGenerator, unescape("source"), "source", function JSGenerator__source(){
const self = this; return self['@stream'].contents();
}
, "accessing", unescape("source%0D%09%5Estream%20contents"));
smalltalk.bind(smalltalk.JSGenerator, unescape("rewriteValueTimesRepeat%3A"), "rewriteValueTimesRepeat_", function JSGenerator__rewriteValueTimesRepeat_(messageNode){
var varName = nil;
const self = this; varName=self.uniqueVarName();
(function JSGenerator__($1$){
$1$.nextPutAll_(unescape("%28function%28%29%7Bfor%28var%20"));
$1$.nextPutAll_(varName);
return $1$.nextPutAll_(unescape("%20%3D%20"))}
)(self['@stream']);
(messageNode.receiver()).generateInlinedValueOn_(self);
(function JSGenerator__($2$){
$2$.nextPutAll_(unescape("%3B"));
$2$.nextPutAll_(varName);
$2$.nextPutAll_(unescape("%3E0%3B"));
$2$.nextPutAll_(varName);
return $2$.nextPutAll_(unescape("--%29%7B%20"))}
)(self['@stream']);
(messageNode.firstArgument()).generateInlinedOn_(self);
self['@stream'].nextPutAll_(unescape("%7D%3Breturn%20nil%7D%29%28%29"));
return self;
}
, "generate rewrite value", unescape("rewriteValueTimesRepeat%3A%20messageNode%0D%09%22%28function%28%29%7Bfor%28var%20%241%24%3D%25receiver%25%3B%241%24%3E0%3B%241%24--%29%7B%25arg1%25%28%29%7D%3Breturn%20nil%7D%29%28%29%22%0D%09%7C%20varName%20%7C%0D%09varName%20%3A%3D%20self%20uniqueVarName.%0D%09stream%0D%09%09nextPutAll%3A%20%27%28function%28%29%7Bfor%28var%20%27%3B%0D%09%09nextPutAll%3A%20varName%3B%0D%09%09nextPutAll%3A%20%27%20%3D%20%27.%0D%09messageNode%20receiver%20generateInlinedValueOn%3A%20self.%0D%0D%09stream%0D%09%09nextPutAll%3A%20%27%3B%27%3B%0D%09%09nextPutAll%3A%20varName%3B%0D%09%09nextPutAll%3A%20%27%3E0%3B%27%3B%0D%09%09nextPutAll%3A%20varName%3B%0D%09%09nextPutAll%3A%20%20%27--%29%7B%20%27.%0D%0D%09messageNode%20firstArgument%20generateInlinedOn%3A%20self.%0D%09stream%20nextPutAll%3A%20%27%7D%3Breturn%20nil%7D%29%28%29%27"));
smalltalk.bind(smalltalk.JSGenerator, unescape("rewriteValueWhileFalse%3A"), "rewriteValueWhileFalse_", function JSGenerator__rewriteValueWhileFalse_(messageNode){
const self = this; self['@stream'].nextPutAll_(unescape("%28function%28%29%7Bwhile%28%21"));
(messageNode.receiver()).generateInlinedBlockValueOn_(self);
self['@stream'].nextPutAll_(unescape("%29%7B%7D%3Breturn%20nil%7D%29%28%29"));
return self;
}
, "generate rewrite value", unescape("rewriteValueWhileFalse%3A%20messageNode%0D%09%22%28function%28%29%7Bwhile%28%21%25receiver%25%28%29%29%7B%7D%3Breturn%20nil%7D%29%28%29%22%0D%09stream%20nextPutAll%3A%20%27%28function%28%29%7Bwhile%28%21%27.%0D%09messageNode%20receiver%20generateInlinedBlockValueOn%3A%20self.%0D%09stream%20nextPutAll%3A%20%27%29%7B%7D%3Breturn%20nil%7D%29%28%29%27"));
smalltalk.bind(smalltalk.JSGenerator, unescape("rewriteValueWhileFalseDo%3A"), "rewriteValueWhileFalseDo_", function JSGenerator__rewriteValueWhileFalseDo_(messageNode){
const self = this; self['@stream'].nextPutAll_(unescape("%28function%28%29%7Bwhile%28%21"));
(messageNode.receiver()).generateInlinedBlockValueOn_(self);
self['@stream'].nextPutAll_(unescape("%29%7B"));
(messageNode.firstArgument()).generateBlockBodyOn_(self);
self['@stream'].nextPutAll_(unescape("%7D%3Breturn%20nil%7D%29%28%29"));
return self;
}
, "generate rewrite value", unescape("rewriteValueWhileFalseDo%3A%20messageNode%0D%09%22%28function%28%29%7Bwhile%28%21%25receiver%25%28%29%29%7B%25arg1%25%28%29%7D%3Breturn%20nil%7D%29%28%29%22%0D%09stream%20nextPutAll%3A%20%27%28function%28%29%7Bwhile%28%21%27.%0D%09messageNode%20receiver%20generateInlinedBlockValueOn%3A%20self.%0D%09stream%20nextPutAll%3A%20%27%29%7B%27.%0D%09messageNode%20firstArgument%20generateBlockBodyOn%3A%20self.%0D%09stream%20nextPutAll%3A%20%27%7D%3Breturn%20nil%7D%29%28%29%27"));
smalltalk.bind(smalltalk.JSGenerator, unescape("rewriteValueWhileTrue%3A"), "rewriteValueWhileTrue_", function JSGenerator__rewriteValueWhileTrue_(messageNode){
const self = this; self['@stream'].nextPutAll_(unescape("%28function%28%29%7Bwhile%28"));
(messageNode.receiver()).generateInlinedBlockValueOn_(self);
self['@stream'].nextPutAll_(unescape("%29%7B%7D%3Breturn%20nil%7D%29%28%29"));
return self;
}
, "generate rewrite value", unescape("rewriteValueWhileTrue%3A%20messageNode%0D%09%22%28function%28%29%7Bwhile%28%25receiver%25%28%29%29%7B%7D%3Breturn%20nil%7D%29%28%29%22%0D%09stream%20nextPutAll%3A%20%27%28function%28%29%7Bwhile%28%27.%0D%09messageNode%20receiver%20generateInlinedBlockValueOn%3A%20self.%0D%09stream%20nextPutAll%3A%20%27%29%7B%7D%3Breturn%20nil%7D%29%28%29%27"));
smalltalk.bind(smalltalk.JSGenerator, unescape("rewriteValueWhileTrueDo%3A"), "rewriteValueWhileTrueDo_", function JSGenerator__rewriteValueWhileTrueDo_(messageNode){
const self = this; self['@stream'].nextPutAll_(unescape("%28function%28%29%7Bwhile%28"));
(messageNode.receiver()).generateInlinedBlockValueOn_(self);
self['@stream'].nextPutAll_(unescape("%29%7B"));
(messageNode.firstArgument()).generateBlockBodyOn_(self);
self['@stream'].nextPutAll_(unescape("%7D%3Breturn%20nil%7D%29%28%29"));
return self;
}
, "generate rewrite value", unescape("rewriteValueWhileTrueDo%3A%20messageNode%0D%09%22%28function%28%29%7Bwhile%28%25receiver%25%28%29%29%7B%25arg1%25%28%29%7D%3Breturn%20nil%7D%29%28%29%22%0D%09stream%20nextPutAll%3A%20%27%28function%28%29%7Bwhile%28%27.%0D%09messageNode%20receiver%20generateInlinedBlockValueOn%3A%20self.%0D%09stream%20nextPutAll%3A%20%27%29%7B%27.%0D%09messageNode%20firstArgument%20generateBlockBodyOn%3A%20self.%0D%09stream%20nextPutAll%3A%20%27%7D%3Breturn%20nil%7D%29%28%29%27"));
smalltalk.bind(smalltalk.JSGenerator, unescape("rewrite%3A"), "rewrite_", function JSGenerator__rewrite_(messageNode){
var rewriteRule = nil;
const self = this; rewriteRule=smalltalk.JSGenerator.classVariableAt_("RewriteMap").at_ifAbsent_(((messageNode.selector()).key()),(function JSGenerator__(){
return (smalltalk.StCompileException.$$new()).signal_((("rewrite selector "._comma(((messageNode.selector()).key())))._comma(" missing")));
}
));
self.perform_with_(rewriteRule,messageNode);
return self;
}
, "generate rewrites", unescape("rewrite%3A%20messageNode%0D%09%7C%20rewriteRule%20%7C%0D%09rewriteRule%20%3A%3D%20RewriteMap%20at%3A%20messageNode%20selector%20key%20ifAbsent%3A%20%5BStCompileException%20new%20signal%3A%20%27rewrite%20selector%20%27%20%2C%20messageNode%20selector%20key%20%2C%20%27%20missing%27%5D.%0D%09self%20perform%3A%20rewriteRule%20with%3A%20messageNode"));
smalltalk.bind(smalltalk.JSGenerator, unescape("rewriteBasicAt%3A"), "rewriteBasicAt_", function JSGenerator__rewriteBasicAt_(messageNode){
var varName = nil;
const self = this; varName=self.uniqueVarName();
(function JSGenerator__($1$){
$1$.nextPutAll_(unescape("%28function%28%29%7Bvar%20"));
$1$.nextPutAll_(varName);
$1$.nextPutAll_(unescape("%3B%20"));
$1$.nextPutAll_(varName);
return $1$.nextPutAll_(unescape("%20%3D%20"))}
)(self['@stream']);
(messageNode.receiver()).generateInlinedValueOn_(self);
self['@stream'].nextPutAll_(unescape("%5B"));
(messageNode.firstArgument()).generateInlinedValueOn_(self);
(function JSGenerator__($2$){
$2$.nextPutAll_(unescape("%5D%3B%20return%20nil.isNil_%28"));
$2$.nextPutAll_(varName);
$2$.nextPutAll_(unescape("%29%20%3F%20nil%20%3A%20"));
$2$.nextPutAll_(varName);
return $2$.nextPutAll_(unescape("%7D%29%28%29"))}
)(self['@stream']);
return self;
}
, "generate rewrites", unescape("rewriteBasicAt%3A%20messageNode%0D%09%22%28%28function%28%29%7Bvar%20%241%24%3D%25receiver%25%5B%25arg1%25%5D%3Bif%28nil.isNil_%28%241%24%29%29return%20nil%3Breturn%20%241%24%3B%7D%29%28%29%29%22%0D%09%22%28function%28%29%7Bvar%20%241%24%3B%20%241%24%20%3D%20%25receiver%25%5B%25arg1%25%5D%3B%20return%20nil.isNil_%28%241%24%29%29%20%3F%20nil%20%3A%20%241%24%3B%7D%29%28%29%22%0D%09%7C%20varName%20%7C%0D%09varName%20%3A%3D%20self%20uniqueVarName.%0D%09stream%0D%09%09nextPutAll%3A%20%27%28function%28%29%7Bvar%20%27%3B%0D%09%09nextPutAll%3A%20varName%3B%0D%09%09nextPutAll%3A%20%27%3B%20%27%3B%0D%09%09nextPutAll%3A%20varName%3B%0D%09%09nextPutAll%3A%20%27%20%3D%20%27.%0D%09messageNode%20receiver%20generateInlinedValueOn%3A%20self.%0D%09stream%20%0D%09%09nextPutAll%3A%20%27%5B%27.%0D%09messageNode%20firstArgument%20generateInlinedValueOn%3A%20self.%0D%09stream%0D%09%09nextPutAll%3A%20%27%5D%3B%20return%20nil.isNil_%28%27%3B%0D%09%09nextPutAll%3A%20varName%3B%0D%09%09nextPutAll%3A%20%20%27%29%20%3F%20nil%20%3A%20%27%3B%0D%09%09nextPutAll%3A%20varName%3B%0D%09%09nextPutAll%3A%20%27%7D%29%28%29%27"));
smalltalk.bind(smalltalk.JSGenerator, unescape("rewriteBasicAtIfAbsent%3A"), "rewriteBasicAtIfAbsent_", function JSGenerator__rewriteBasicAtIfAbsent_(messageNode){
var varName = nil;
const self = this; varName=self.uniqueVarName();
(function JSGenerator__($1$){
$1$.nextPutAll_(unescape("%28function%28%29%7Bvar%20"));
$1$.nextPutAll_(varName);
$1$.nextPutAll_(unescape("%3B%20"));
$1$.nextPutAll_(varName);
return $1$.nextPutAll_(unescape("%20%3D%20"))}
)(self['@stream']);
(messageNode.receiver()).generateInlinedValueOn_(self);
self['@stream'].nextPutAll_(unescape("%5B"));
(messageNode.firstArgument()).generateInlinedValueOn_(self);
(function JSGenerator__($2$){
$2$.nextPutAll_(unescape("%5D%3B%20return%20nil.isNil_%28"));
$2$.nextPutAll_(varName);
return $2$.nextPutAll_(unescape("%29%20%3F%20"))}
)(self['@stream']);
(messageNode.secondArgument()).generateInlinedBlockValueOn_(self);
(function JSGenerator__($3$){
$3$.nextPutAll_(" : ");
$3$.nextPutAll_(varName);
return $3$.nextPutAll_(unescape("%7D%29%28%29"))}
)(self['@stream']);
return self;
}
, "generate rewrites", unescape("rewriteBasicAtIfAbsent%3A%20messageNode%0D%09%22%28%28function%28%29%7Bvar%20%241%24%3D%25receiver%25%5B%25arg1%25%5D%3Bif%28nil.isNil_%28%241%24%29%29return%20%28%25arg2%25.value%28%29%29%3Breturn%20%241%24%3B%7D%29%28%29%29%22%0D%09%7C%20varName%20%7C%0D%09varName%20%3A%3D%20self%20uniqueVarName.%0D%09stream%0D%09%09nextPutAll%3A%20%27%28function%28%29%7Bvar%20%27%3B%0D%09%09nextPutAll%3A%20varName%3B%0D%09%09nextPutAll%3A%20%27%3B%20%27%3B%0D%09%09nextPutAll%3A%20varName%3B%0D%09%09nextPutAll%3A%20%27%20%3D%20%27.%0D%09messageNode%20receiver%20generateInlinedValueOn%3A%20self.%0D%09stream%20%0D%09%09nextPutAll%3A%20%27%5B%27.%0D%09messageNode%20firstArgument%20generateInlinedValueOn%3A%20self.%0D%09stream%0D%09%09nextPutAll%3A%20%27%5D%3B%20return%20nil.isNil_%28%27%3B%0D%09%09nextPutAll%3A%20varName%3B%0D%09%09nextPutAll%3A%20%20%27%29%20%3F%20%27.%0D%09messageNode%20secondArgument%20generateInlinedBlockValueOn%3A%20self.%0D%09stream%0D%09%09nextPutAll%3A%20%20%27%20%3A%20%27%3B%0D%09%09nextPutAll%3A%20varName%3B%0D%09%09nextPutAll%3A%20%27%7D%29%28%29%27"));
smalltalk.bind(smalltalk.JSGenerator, unescape("rewriteBasicAtPut%3A"), "rewriteBasicAtPut_", function JSGenerator__rewriteBasicAtPut_(messageNode){
const self = this; self['@stream'].nextPutAll_(unescape("%28"));
(messageNode.receiver()).generateAsReceiverOn_(self);
self['@stream'].nextPutAll_(unescape("%5B"));
(messageNode.firstArgument()).generateInlinedValueOn_(self);
self['@stream'].nextPutAll_(unescape("%5D%3D"));
(messageNode.secondArgument()).generateInlinedValueOn_(self);
self['@stream'].nextPutAll_(unescape("%29"));
return self;
}
, "generate rewrites", unescape("rewriteBasicAtPut%3A%20messageNode%0D%09%22%28%25receiver%25%5B%25arg1%25%5D%3D%28%25arg2%25%29%29%22%0D%09stream%20nextPutAll%3A%20%27%28%27.%0D%09messageNode%20receiver%20generateAsReceiverOn%3A%20self.%0D%09stream%20nextPutAll%3A%20%27%5B%27.%0D%09messageNode%20firstArgument%20generateInlinedValueOn%3A%20self.%0D%09stream%20nextPutAll%3A%20%27%5D%3D%27.%0D%09messageNode%20secondArgument%20generateInlinedValueOn%3A%20self.%0D%09stream%20nextPutAll%3A%20%27%29%27"));
smalltalk.bind(smalltalk.JSGenerator, unescape("rewriteBasicValueOrNil%3A"), "rewriteBasicValueOrNil_", function JSGenerator__rewriteBasicValueOrNil_(messageNode){
const self = this; self['@stream'].nextPutAll_(unescape("%28function%28%29%7Bvar%20%241%24%3Breturn%20%28nil.isNil_%28%241%24%20%3D%20"));
(messageNode.receiver()).generateInlinedValueOn_(self);
self['@stream'].nextPutAll_(unescape("%29%29%20%3F%20nil%20%3A%20%241%24%3B%7D%29%28%29"));
return self;
}
, "generate rewrites", unescape("rewriteBasicValueOrNil%3A%20messageNode%0D%09%22%28function%28%29%7Bvar%20%241%24%3Breturn%20%28nil.isNil_%28%241%24%20%3D%20%25receiver%25%29%29%20%3F%20nil%20%3A%20%241%24%3B%7D%29%28%29%22%0D%09stream%20nextPutAll%3A%20%27%28function%28%29%7Bvar%20%241%24%3Breturn%20%28nil.isNil_%28%241%24%20%3D%20%27.%0D%09%09messageNode%20receiver%20generateInlinedValueOn%3A%20self.%0D%09stream%20nextPutAll%3A%20%27%29%29%20%3F%20nil%20%3A%20%241%24%3B%7D%29%28%29%27"));
smalltalk.bind(smalltalk.JSGenerator, unescape("rewriteClass%3A"), "rewriteClass_", function JSGenerator__rewriteClass_(messageNode){
const self = this; (messageNode.receiver()).generateAsReceiverOn_(self);
self['@stream'].nextPutAll_(".$klass");
return self;
}
, "generate rewrites", unescape("rewriteClass%3A%20messageNode%0D%09%22%25receiver%25.%24klass%22%0D%09messageNode%20receiver%20generateAsReceiverOn%3A%20self.%0D%09stream%20nextPutAll%3A%20%27.%24klass%27"));
smalltalk.bind(smalltalk.JSGenerator, unescape("rewriteEqEq%3A"), "rewriteEqEq_", function JSGenerator__rewriteEqEq_(messageNode){
const self = this; self['@stream'].nextPutAll_(unescape("%28nil.is_eqeq_%28"));
(messageNode.receiver()).generateInlinedValueOn_(self);
self['@stream'].nextPutAll_(unescape("%2C"));
(messageNode.firstArgument()).generateInlinedValueOn_(self);
self['@stream'].nextPutAll_(unescape("%29%29"));
return self;
}
, "generate rewrites", unescape("rewriteEqEq%3A%20messageNode%0D%09%22%28nil.is_eqeq_%28%25receiver%25%2C%25arg1%25%29%29%22%0D%09stream%20nextPutAll%3A%20%27%28nil.is_eqeq_%28%27.%0D%09messageNode%20receiver%20generateInlinedValueOn%3A%20self.%0D%09stream%20nextPutAll%3A%20%27%2C%27.%0D%09messageNode%20firstArgument%20generateInlinedValueOn%3A%20self.%0D%09stream%20nextPutAll%3A%20%27%29%29%27"));
smalltalk.bind(smalltalk.JSGenerator, unescape("rewriteEqEqEq%3A"), "rewriteEqEqEq_", function JSGenerator__rewriteEqEqEq_(messageNode){
const self = this; self['@stream'].nextPutAll_(unescape("%28"));
(messageNode.receiver()).generateInlinedValueOn_(self);
self['@stream'].nextPutAll_(unescape("%20%3D%3D%3D%20"));
(messageNode.firstArgument()).generateInlinedValueOn_(self);
self['@stream'].nextPutAll_(unescape("%29"));
return self;
}
, "generate rewrites", unescape("rewriteEqEqEq%3A%20messageNode%0D%09%22%28%25receiver%25%20%3D%3D%3D%20%25arg1%25%29%22%0D%09stream%20nextPutAll%3A%20%27%28%27.%0D%09messageNode%20receiver%20generateInlinedValueOn%3A%20self.%0D%09stream%20nextPutAll%3A%20%27%20%3D%3D%3D%20%27.%0D%09messageNode%20firstArgument%20generateInlinedValueOn%3A%20self.%0D%09stream%20nextPutAll%3A%20%27%29%27.%0D"));
smalltalk.bind(smalltalk.JSGenerator, unescape("rewriteFalseCondition%3A"), "rewriteFalseCondition_", function JSGenerator__rewriteFalseCondition_(receiverNode){
const self = this; self.asReceiverWith_((function JSGenerator__(){
return receiverNode.generateInlinedValueOn_(self);
}
));
self['@stream'].nextPutAll_(unescape(".not%28%29"));
return self;
}
, "generate rewrites", unescape("rewriteFalseCondition%3A%20receiverNode%0D%09self%20asReceiverWith%3A%20%5BreceiverNode%20generateInlinedValueOn%3A%20self%5D.%0D%09stream%20nextPutAll%3A%20%27.not%28%29%27"));
smalltalk.bind(smalltalk.JSGenerator, unescape("rewriteIfFalse%3A"), "rewriteIfFalse_", function JSGenerator__rewriteIfFalse_(messageNode){
var args = nil;
const self = this; args=messageNode.arguments();
self['@stream'].nextPutAll_(unescape("if%20%28"));
self.rewriteFalseCondition_((messageNode.receiver()));
self['@stream'].nextPutAll_(unescape("%29%20%7B"));
(args.at_((1))).generateBlockBodyOn_(self);
self['@stream'].nextPutAll_(unescape("%7D"));
if (((args.size())._gt((1))).valueOf()) {self['@stream'].nextPutAll_(unescape("%20else%20%7B"));
(args.at_((2))).generateBlockBodyOn_(self);
self['@stream'].nextPutAll_(unescape("%7D"))};
return self;
}
, "generate rewrites", unescape("rewriteIfFalse%3A%20messageNode%0D%09%22if%20%28%21%25receiver%25%29%20%7B%20%25arg1%25%28%29%7D%22%0D%09%22if%20%28%21%25receiver%25%29%20%7B%20return%20%25arg1%25%28%29%7D%20else%20%7B%20return%20nil%20%7D%22%0D%09%7C%20args%20%7C%0D%09args%20%3A%3D%20messageNode%20arguments.%0D%09stream%20nextPutAll%3A%20%27if%20%28%27.%0D%09self%20rewriteFalseCondition%3A%20messageNode%20receiver.%0D%09stream%20nextPutAll%3A%20%27%29%20%7B%27.%0D%09%28args%20at%3A%201%29%20generateBlockBodyOn%3A%20self.%0D%09stream%20nextPutAll%3A%20%27%7D%27.%0D%09args%20size%20%3E%201%0D%09%09ifTrue%3A%20%5B%0D%09%09%09stream%20nextPutAll%3A%20%27%20else%20%7B%27.%0D%09%09%09%28args%20at%3A%202%29%20generateBlockBodyOn%3A%20self.%0D%09%09%09stream%20nextPutAll%3A%20%27%7D%27%5D"));
smalltalk.bind(smalltalk.JSGenerator, unescape("rewriteIfFalseIfTrue%3A"), "rewriteIfFalseIfTrue_", function JSGenerator__rewriteIfFalseIfTrue_(messageNode){
var args = nil;
const self = this; args=messageNode.arguments();
self['@stream'].nextPutAll_(unescape("if%20%28"));
self.rewriteFalseCondition_((messageNode.receiver()));
self['@stream'].nextPutAll_(unescape("%29%20%7B"));
(args.at_((1))).generateBlockBodyOn_(self);
self['@stream'].nextPutAll_(unescape("%7D%20else%20%7B"));
(args.at_((2))).generateBlockBodyOn_(self);
self['@stream'].nextPutAll_(unescape("%7D"));
return self;
}
, "generate rewrites", unescape("rewriteIfFalseIfTrue%3A%20messageNode%0D%09%22if%20%28%21%25receiver%25%29%20%7B%20%25arg1%25%28%29%7D%20else%20%7B%20%25arg2%25%28%29%20%7D%22%0D%09%7C%20args%20%7C%0D%09args%20%3A%3D%20messageNode%20arguments.%0D%09stream%20nextPutAll%3A%20%27if%20%28%27.%0D%09self%20rewriteFalseCondition%3A%20messageNode%20receiver.%0D%09stream%20nextPutAll%3A%20%27%29%20%7B%27.%0D%09%28args%20at%3A%201%29%20generateBlockBodyOn%3A%20self.%0D%09stream%20nextPutAll%3A%20%27%7D%20else%20%7B%27.%0D%09%28args%20at%3A%202%29%20generateBlockBodyOn%3A%20self.%0D%09stream%20nextPutAll%3A%20%27%7D%27"));
smalltalk.bind(smalltalk.JSGenerator, unescape("rewriteIfNil%3A"), "rewriteIfNil_", function JSGenerator__rewriteIfNil_(messageNode){
var varName = nil;
const self = this; varName=self.uniqueVarName();
(function JSGenerator__($1$){
$1$.nextPutAll_(unescape("%28function%28%29%7Bvar%20"));
$1$.nextPutAll_(varName);
$1$.nextPutAll_(unescape("%3B%20"));
$1$.nextPutAll_(varName);
return $1$.nextPutAll_(unescape("%20%3D%20"))}
)(self['@stream']);
(messageNode.receiver()).generateInlinedValueOn_(self);
(function JSGenerator__($2$){
$2$.nextPutAll_(unescape("%3B%20if%20%28nil.isNil_%28"));
$2$.nextPutAll_(varName);
return $2$.nextPutAll_(unescape("%29%29%20%7B%20return%20"))}
)(self['@stream']);
(messageNode.firstArgument()).generateInlinedBlockValueOn_(self);
(function JSGenerator__($3$){
$3$.nextPutAll_(unescape("%20%7D%20else%20%7B%20return%20"));
$3$.nextPutAll_(varName);
return $3$.nextPutAll_(unescape("%3B%20%7D%7D%29%28%29"))}
)(self['@stream']);
return self;
}
, "generate rewrites", unescape("rewriteIfNil%3A%20messageNode%0D%09%22%28function%28%29%7Bvar%20%241%24%3Breturn%20%28nil.isNil_%28%241%24%20%3D%20%25receiver%25%29%29%20%3F%20%25arg1%25%28%29%20%3A%20%241%24%3B%7D%29%28%29%22%0D%09%22%28function%28%29%7Bvar%20%241%24%3B%20%241%24%20%3D%20%25receiver%25%3B%20if%20%28nil.isNil_%28%241%24%29%29%20%7B%20return%20%25arg1%25%28%29%20%7D%20else%20%7B%20return%20%241%24%3B%7D%7D%29%28%29%22%0D%09%7C%20varName%20%7C%0D%09varName%20%3A%3D%20self%20uniqueVarName.%0D%09stream%0D%09%09nextPutAll%3A%20%27%28function%28%29%7Bvar%20%27%3B%0D%09%09nextPutAll%3A%20varName%3B%0D%09%09nextPutAll%3A%20%27%3B%20%27%3B%0D%09%09nextPutAll%3A%20varName%3B%0D%09%09nextPutAll%3A%20%27%20%3D%20%27.%0D%09messageNode%20receiver%20generateInlinedValueOn%3A%20self.%0D%09stream%20%0D%09%09nextPutAll%3A%20%27%3B%20if%20%28nil.isNil_%28%27%3B%0D%09%09nextPutAll%3A%20varName%3B%0D%09%09nextPutAll%3A%20%20%27%29%29%20%7B%20return%20%27.%0D%09messageNode%20firstArgument%20generateInlinedBlockValueOn%3A%20self.%0D%09stream%0D%09%09nextPutAll%3A%20%27%20%7D%20else%20%7B%20return%20%27%3B%0D%09%09nextPutAll%3A%20varName%3B%0D%09%09nextPutAll%3A%20%27%3B%20%7D%7D%29%28%29%27"));
smalltalk.bind(smalltalk.JSGenerator, unescape("rewriteIfNilIfNotNil%3A"), "rewriteIfNilIfNotNil_", function JSGenerator__rewriteIfNilIfNotNil_(messageNode){
const self = this; self['@stream'].nextPutAll_(unescape("%28nil.isNil_%28"));
(messageNode.receiver()).generateInlinedValueOn_(self);
self['@stream'].nextPutAll_(unescape("%29%20%3F%20"));
(messageNode.firstArgument()).generateInlinedBlockValueOn_(self);
self['@stream'].nextPutAll_(" : ");
(messageNode.secondArgument()).generateInlinedBlockValueOn_(self);
self['@stream'].nextPutAll_(unescape("%29"));
return self;
}
, "generate rewrites", unescape("rewriteIfNilIfNotNil%3A%20messageNode%0D%09%22%28nil.isNil_%28%25receiver%25%29%29%20%3F%20%25arg1%25%28%29%20%3A%20%25arg2%25%28%29%22%0D%09stream%20nextPutAll%3A%20%27%28nil.isNil_%28%27.%0D%09messageNode%20receiver%20generateInlinedValueOn%3A%20self.%0D%09stream%20nextPutAll%3A%20%27%29%20%3F%20%27.%0D%09messageNode%20firstArgument%20generateInlinedBlockValueOn%3A%20self.%0D%09stream%20nextPutAll%3A%20%27%20%3A%20%27.%0D%09messageNode%20secondArgument%20generateInlinedBlockValueOn%3A%20self.%0D%09stream%20nextPutAll%3A%20%27%29%27"));
smalltalk.bind(smalltalk.JSGenerator, unescape("rewriteIfNotNil%3A"), "rewriteIfNotNil_", function JSGenerator__rewriteIfNotNil_(messageNode){
var varName = nil;
const self = this; varName=self.uniqueVarName();
(function JSGenerator__($1$){
$1$.nextPutAll_(unescape("%28function%28%29%7Bvar%20"));
$1$.nextPutAll_(varName);
$1$.nextPutAll_(unescape("%3B%20"));
$1$.nextPutAll_(varName);
return $1$.nextPutAll_(unescape("%20%3D%20"))}
)(self['@stream']);
(messageNode.receiver()).generateInlinedValueOn_(self);
(function JSGenerator__($2$){
$2$.nextPutAll_(unescape("%3B%20if%20%28%21nil.isNil_%28"));
$2$.nextPutAll_(varName);
return $2$.nextPutAll_(unescape("%29%29%20%7B%20return%20"))}
)(self['@stream']);
(messageNode.firstArgument()).generateInlinedBlockValueOn_(self);
(function JSGenerator__($3$){
$3$.nextPutAll_(unescape("%20%7D%20else%20%7B%20return%20"));
$3$.nextPutAll_(varName);
return $3$.nextPutAll_(unescape("%3B%20%7D%7D%29%28%29"))}
)(self['@stream']);
return self;
}
, "generate rewrites", unescape("rewriteIfNotNil%3A%20messageNode%0D%09%22%28function%28%29%7Bvar%20%241%24%3Breturn%20%28nil.isNil_%28%241%24%20%3D%20%25receiver%25%29%3D%3D%3Dfalse%29%20%3F%20%25arg1%25%28%29%20%3A%20%241%24%3B%7D%29%28%29%22%0D%09%22%28function%28%29%7Bvar%20%241%24%3B%20%241%24%20%3D%20%25receiver%25%3B%20if%20%28%21nil.isNil_%28%241%24%29%29%20%7B%20return%20%25arg1%25%28%29%20%7D%20else%20%7B%20return%20%241%24%3B%7D%7D%29%28%29%22%0D%09%7C%20varName%20%7C%0D%09varName%20%3A%3D%20self%20uniqueVarName.%0D%09stream%0D%09%09nextPutAll%3A%20%27%28function%28%29%7Bvar%20%27%3B%0D%09%09nextPutAll%3A%20varName%3B%0D%09%09nextPutAll%3A%20%27%3B%20%27%3B%0D%09%09nextPutAll%3A%20varName%3B%0D%09%09nextPutAll%3A%20%27%20%3D%20%27.%0D%09messageNode%20receiver%20generateInlinedValueOn%3A%20self.%0D%09stream%20%0D%09%09nextPutAll%3A%20%27%3B%20if%20%28%21nil.isNil_%28%27%3B%0D%09%09nextPutAll%3A%20varName%3B%0D%09%09nextPutAll%3A%20%20%27%29%29%20%7B%20return%20%27.%0D%09messageNode%20firstArgument%20generateInlinedBlockValueOn%3A%20self.%0D%09stream%0D%09%09nextPutAll%3A%20%27%20%7D%20else%20%7B%20return%20%27%3B%0D%09%09nextPutAll%3A%20varName%3B%0D%09%09nextPutAll%3A%20%27%3B%20%7D%7D%29%28%29%27"));
smalltalk.bind(smalltalk.JSGenerator, unescape("rewriteIfNotNilIfNil%3A"), "rewriteIfNotNilIfNil_", function JSGenerator__rewriteIfNotNilIfNil_(messageNode){
const self = this; self['@stream'].nextPutAll_(unescape("%28%21nil.isNil_%28"));
(messageNode.receiver()).generateInlinedValueOn_(self);
self['@stream'].nextPutAll_(unescape("%29%20%3F%20"));
(messageNode.firstArgument()).generateInlinedBlockValueOn_(self);
self['@stream'].nextPutAll_(" : ");
(messageNode.secondArgument()).generateInlinedBlockValueOn_(self);
self['@stream'].nextPutAll_(unescape("%29"));
return self;
}
, "generate rewrites", unescape("rewriteIfNotNilIfNil%3A%20messageNode%0D%09%22%28nil.isNil_%28%25receiver%25%29%3D%3D%3Dfalse%29%20%3F%20%25arg1%25%28%29%20%3A%20%25arg2%25%28%29%22%0D%09stream%20nextPutAll%3A%20%27%28%21nil.isNil_%28%27.%0D%09messageNode%20receiver%20generateInlinedValueOn%3A%20self.%0D%09stream%20nextPutAll%3A%20%27%29%20%3F%20%27.%0D%09messageNode%20firstArgument%20generateInlinedBlockValueOn%3A%20self.%0D%09stream%20nextPutAll%3A%20%27%20%3A%20%27.%0D%09messageNode%20secondArgument%20generateInlinedBlockValueOn%3A%20self.%0D%09stream%20nextPutAll%3A%20%27%29%27"));
smalltalk.bind(smalltalk.JSGenerator, unescape("rewriteIfTrue%3A"), "rewriteIfTrue_", function JSGenerator__rewriteIfTrue_(messageNode){
var args = nil;
const self = this; args=messageNode.arguments();
self['@stream'].nextPutAll_(unescape("if%20%28"));
self.rewriteTrueCondition_((messageNode.receiver()));
self['@stream'].nextPutAll_(unescape("%29%20%7B"));
(args.at_((1))).generateBlockBodyOn_(self);
self['@stream'].nextPutAll_(unescape("%7D"));
if (((args.size())._gt((1))).valueOf()) {self['@stream'].nextPutAll_(unescape("%20else%20%7B"));
(args.at_((2))).generateBlockBodyOn_(self);
self['@stream'].nextPutAll_(unescape("%7D"))};
return self;
}
, "generate rewrites", unescape("rewriteIfTrue%3A%20messageNode%0D%09%22if%20%28%25receiver%25%29%20%7B%20%25arg1%25%28%29%7D%22%0D%09%22if%20%28%25receiver%25%29%20%7B%20return%20%25arg1%25%28%29%7D%20else%20%7B%20return%20nil%20%7D%22%0D%09%7C%20args%20%7C%0D%09args%20%3A%3D%20messageNode%20arguments.%0D%09stream%20nextPutAll%3A%20%27if%20%28%27.%0D%09self%20rewriteTrueCondition%3A%20messageNode%20receiver.%0D%09stream%20nextPutAll%3A%20%27%29%20%7B%27.%0D%09%28args%20at%3A%201%29%20generateBlockBodyOn%3A%20self.%0D%09stream%20nextPutAll%3A%20%27%7D%27.%0D%09args%20size%20%3E%201%0D%09%09ifTrue%3A%20%5B%0D%09%09%09stream%20nextPutAll%3A%20%27%20else%20%7B%27.%0D%09%09%09%28args%20at%3A%202%29%20generateBlockBodyOn%3A%20self.%0D%09%09%09stream%20nextPutAll%3A%20%27%7D%27%5D"));
smalltalk.bind(smalltalk.JSGenerator, unescape("rewriteIfTrueIfFalse%3A"), "rewriteIfTrueIfFalse_", function JSGenerator__rewriteIfTrueIfFalse_(messageNode){
var args = nil;
const self = this; args=messageNode.arguments();
self['@stream'].nextPutAll_(unescape("if%20%28"));
self.rewriteTrueCondition_((messageNode.receiver()));
self['@stream'].nextPutAll_(unescape("%29%20%7B"));
(args.at_((1))).generateBlockBodyOn_(self);
self['@stream'].nextPutAll_(unescape("%7D%20else%20%7B"));
(args.at_((2))).generateBlockBodyOn_(self);
self['@stream'].nextPutAll_(unescape("%7D"));
return self;
}
, "generate rewrites", unescape("rewriteIfTrueIfFalse%3A%20messageNode%0D%09%22if%20%28%25receiver%25%29%20%7B%20%25arg1%25%28%29%7D%20else%20%7B%20%25arg2%25%28%29%20%7D%22%0D%09%7C%20args%20%7C%0D%09args%20%3A%3D%20messageNode%20arguments.%0D%09stream%20nextPutAll%3A%20%27if%20%28%27.%0D%09self%20rewriteTrueCondition%3A%20messageNode%20receiver.%0D%09stream%20nextPutAll%3A%20%27%29%20%7B%27.%0D%09%28args%20at%3A%201%29%20generateBlockBodyOn%3A%20self.%0D%09stream%20nextPutAll%3A%20%27%7D%20else%20%7B%27.%0D%09%28args%20at%3A%202%29%20generateBlockBodyOn%3A%20self.%0D%09stream%20nextPutAll%3A%20%27%7D%27"));
smalltalk.bind(smalltalk.JSGenerator, unescape("rewriteIfUndefined%3A"), "rewriteIfUndefined_", function JSGenerator__rewriteIfUndefined_(messageNode){
var varName = nil;
const self = this; varName=self.uniqueVarName();
(function JSGenerator__($1$){
$1$.nextPutAll_(unescape("%28function%28%29%7Bvar%20"));
$1$.nextPutAll_(varName);
$1$.nextPutAll_(unescape("%3B%20"));
$1$.nextPutAll_(varName);
return $1$.nextPutAll_(unescape("%20%3D%20"))}
)(self['@stream']);
(messageNode.receiver()).generateInlinedValueOn_(self);
(function JSGenerator__($2$){
$2$.nextPutAll_(unescape("%3B%20if%20%28typeof%28"));
$2$.nextPutAll_(varName);
return $2$.nextPutAll_(unescape("%29%20%3D%3D%20%22undefined%22%29%20%7B%20return%20"))}
)(self['@stream']);
(messageNode.firstArgument()).generateInlinedBlockValueOn_(self);
(function JSGenerator__($3$){
$3$.nextPutAll_(unescape("%20%7D%20else%20%7B%20return%20"));
$3$.nextPutAll_(varName);
return $3$.nextPutAll_(unescape("%20%7D%7D%29%28%29"))}
)(self['@stream']);
return self;
}
, "generate rewrites", unescape("rewriteIfUndefined%3A%20messageNode%0D%09%22%28function%28%29%7Bvar%20%241%24%20%3D%20%25receiver%25%3Bif%20%28typeof%20%28%241%24%29%20%3D%3D%20%22%22undefined%22%22%29%20return%20%25arg1%25%28%29%3B%20return%20%241%24%3B%7D%29%28%29%22%0D%09%7C%20varName%20%7C%0D%09varName%20%3A%3D%20self%20uniqueVarName.%0D%09stream%0D%09%09nextPutAll%3A%20%27%28function%28%29%7Bvar%20%27%3B%0D%09%09nextPutAll%3A%20varName%3B%0D%09%09nextPutAll%3A%20%27%3B%20%27%3B%0D%09%09nextPutAll%3A%20varName%3B%0D%09%09nextPutAll%3A%20%27%20%3D%20%27.%0D%09messageNode%20receiver%20generateInlinedValueOn%3A%20self.%0D%09stream%20%0D%09%09nextPutAll%3A%20%27%3B%20if%20%28typeof%28%27%3B%0D%09%09nextPutAll%3A%20varName%3B%0D%09%09nextPutAll%3A%20%20%27%29%20%3D%3D%20%22undefined%22%29%20%7B%20return%20%27.%0D%09messageNode%20firstArgument%20generateInlinedBlockValueOn%3A%20self.%0D%09stream%0D%09%09nextPutAll%3A%20%27%20%7D%20else%20%7B%20return%20%27%3B%0D%09%09nextPutAll%3A%20varName%3B%0D%09%09nextPutAll%3A%20%27%20%7D%7D%29%28%29%27"));
smalltalk.bind(smalltalk.JSGenerator, unescape("rewriteIsKindOf%3A"), "rewriteIsKindOf_", function JSGenerator__rewriteIsKindOf_(messageNode){
const self = this; self['@stream'].nextPutAll_(unescape("%28smalltalk.is_kindOf_%28"));
(messageNode.receiver()).generateInlinedValueOn_(self);
self['@stream'].nextPutAll_(unescape("%2C"));
(messageNode.firstArgument()).generateInlinedValueOn_(self);
self['@stream'].nextPutAll_(unescape("%29%29"));
return self;
}
, "generate rewrites", unescape("rewriteIsKindOf%3A%20messageNode%0D%09%22smalltalk.is_kindOf_%28%25receiver%25%2C%28%25arg1%25%29%29%22%0D%09stream%20nextPutAll%3A%20%27%28smalltalk.is_kindOf_%28%27.%0D%09messageNode%20receiver%20generateInlinedValueOn%3A%20self.%0D%09stream%20nextPutAll%3A%20%27%2C%27.%0D%09messageNode%20firstArgument%20generateInlinedValueOn%3A%20self.%0D%09stream%20nextPutAll%3A%20%27%29%29%27"));
smalltalk.bind(smalltalk.JSGenerator, unescape("rewriteIsNil%3A"), "rewriteIsNil_", function JSGenerator__rewriteIsNil_(messageNode){
const self = this; self['@stream'].nextPutAll_(unescape("%28nil.isNil_%28"));
(messageNode.receiver()).generateInlinedValueOn_(self);
self['@stream'].nextPutAll_(unescape("%29%29"));
return self;
}
, "generate rewrites", unescape("rewriteIsNil%3A%20messageNode%0D%09%22%28nil.isNil_%28%25receiver%25%29%29%22%0D%09stream%20nextPutAll%3A%20%27%28nil.isNil_%28%27.%0D%09messageNode%20receiver%20generateInlinedValueOn%3A%20self.%0D%09stream%20nextPutAll%3A%20%27%29%29%27"));
smalltalk.bind(smalltalk.JSGenerator, unescape("rewriteNotNil%3A"), "rewriteNotNil_", function JSGenerator__rewriteNotNil_(messageNode){
const self = this; self['@stream'].nextPutAll_(unescape("%28nil.isNil_%28"));
(messageNode.receiver()).generateInlinedValueOn_(self);
self['@stream'].nextPutAll_(unescape("%29%3D%3D%3Dfalse%29"));
return self;
}
, "generate rewrites", unescape("rewriteNotNil%3A%20messageNode%0D%09%22%28nil.isNil_%28%25receiver%25%29%3D%3D%3Dfalse%29%22%0D%09stream%20nextPutAll%3A%20%27%28nil.isNil_%28%27.%0D%09messageNode%20receiver%20generateInlinedValueOn%3A%20self.%0D%09stream%20nextPutAll%3A%20%27%29%3D%3D%3Dfalse%29%27"));
smalltalk.bind(smalltalk.JSGenerator, unescape("rewriteOr%3A"), "rewriteOr_", function JSGenerator__rewriteOr_(messageNode){
const self = this; self['@stream'].nextPutAll_(unescape("%28"));
(messageNode.receiver()).generateInlinedValueOn_(self);
self['@stream'].nextPutAll_(unescape("%20%7C%7C%20"));
(messageNode.firstArgument()).generateInlinedValueOn_(self);
self['@stream'].nextPutAll_(unescape("%29"));
return self;
}
, "generate rewrites", unescape("rewriteOr%3A%20messageNode%0D%09%22%28%25receiver%25%20%7C%7C%20%25arg1%25%29%22%0D%09stream%20nextPutAll%3A%20%27%28%27.%0D%09messageNode%20receiver%20generateInlinedValueOn%3A%20self.%0D%09stream%20nextPutAll%3A%20%27%20%7C%7C%20%27.%0D%09messageNode%20firstArgument%20generateInlinedValueOn%3A%20self.%0D%09stream%20nextPutAll%3A%20%27%29%27"));
smalltalk.bind(smalltalk.JSGenerator, unescape("rewriteRespondsTo%3A"), "rewriteRespondsTo_", function JSGenerator__rewriteRespondsTo_(messageNode){
const self = this; self['@stream'].nextPutAll_(unescape("%28smalltalk.responds_to_%28"));
(messageNode.receiver()).generateInlinedValueOn_(self);
self['@stream'].nextPutAll_(unescape("%2C"));
(messageNode.firstArgument()).generateInlinedValueOn_(self);
self['@stream'].nextPutAll_(unescape("%29%29"));
return self;
}
, "generate rewrites", unescape("rewriteRespondsTo%3A%20messageNode%0D%09%22smalltalk.responds_to_%28%25receiver%25%2C%28%25arg1%25%29%29%22%0D%09stream%20nextPutAll%3A%20%27%28smalltalk.responds_to_%28%27.%0D%09messageNode%20receiver%20generateInlinedValueOn%3A%20self.%0D%09stream%20nextPutAll%3A%20%27%2C%27.%0D%09messageNode%20firstArgument%20generateInlinedValueOn%3A%20self.%0D%09stream%20nextPutAll%3A%20%27%29%29%27"));
smalltalk.bind(smalltalk.JSGenerator, unescape("rewriteTimesRepeat%3A"), "rewriteTimesRepeat_", function JSGenerator__rewriteTimesRepeat_(messageNode){
var varName = nil;
const self = this; varName=self.uniqueVarName();
(function JSGenerator__($1$){
$1$.nextPutAll_(unescape("for%28var%20"));
$1$.nextPutAll_(varName);
return $1$.nextPutAll_(unescape("%20%3D%20"))}
)(self['@stream']);
(messageNode.receiver()).generateInlinedValueOn_(self);
(function JSGenerator__($2$){
$2$.nextPutAll_(unescape("%3B"));
$2$.nextPutAll_(varName);
$2$.nextPutAll_(unescape("%3E0%3B"));
$2$.nextPutAll_(varName);
return $2$.nextPutAll_(unescape("--%29%7B%20"))}
)(self['@stream']);
(messageNode.firstArgument()).generateInlinedOn_(self);
self['@stream'].nextPutAll_(unescape("%7D%3B"));
return self;
}
, "generate rewrites", unescape("rewriteTimesRepeat%3A%20messageNode%0D%09%22for%28var%20%241%24%3D%25receiver%25%3B%241%24%3E0%3B%241%24--%29%7B%25arg1%25%28%29%7D%3B%22%0D%09%7C%20varName%20%7C%0D%09varName%20%3A%3D%20self%20uniqueVarName.%0D%09stream%0D%09%09nextPutAll%3A%20%27for%28var%20%27%3B%0D%09%09nextPutAll%3A%20varName%3B%0D%09%09nextPutAll%3A%20%27%20%3D%20%27.%0D%09messageNode%20receiver%20generateInlinedValueOn%3A%20self.%0D%0D%09stream%0D%09%09nextPutAll%3A%20%27%3B%27%3B%0D%09%09nextPutAll%3A%20varName%3B%0D%09%09nextPutAll%3A%20%27%3E0%3B%27%3B%0D%09%09nextPutAll%3A%20varName%3B%0D%09%09nextPutAll%3A%20%20%27--%29%7B%20%27.%0D%0D%09messageNode%20firstArgument%20generateInlinedOn%3A%20self.%0D%09stream%20nextPutAll%3A%20%27%7D%3B%27"));
smalltalk.bind(smalltalk.JSGenerator, unescape("rewriteTrueCondition%3A"), "rewriteTrueCondition_", function JSGenerator__rewriteTrueCondition_(receiverNode){
const self = this; self.asReceiverWith_((function JSGenerator__(){
return receiverNode.generateInlinedValueOn_(self);
}
));
self['@stream'].nextPutAll_(unescape(".valueOf%28%29"));
return self;
}
, "generate rewrites", unescape("rewriteTrueCondition%3A%20receiverNode%0D%09self%20asReceiverWith%3A%20%5BreceiverNode%20generateInlinedValueOn%3A%20self%5D.%0D%09stream%20nextPutAll%3A%20%27.valueOf%28%29%27"));
smalltalk.bind(smalltalk.JSGenerator, unescape("rewriteValue%3A"), "rewriteValue_", function JSGenerator__rewriteValue_(messageNode){
var rewriteRule = nil;
const self = this; rewriteRule=smalltalk.JSGenerator.classVariableAt_("RewriteValueMap").at_ifAbsent_(((messageNode.selector()).key()),(function JSGenerator__(){
return (smalltalk.StCompileException.$$new()).signal_((("rewrite selector "._comma(((messageNode.selector()).key())))._comma(" missing")));
}
));
self.perform_with_(rewriteRule,messageNode);
return self;
}
, "generate rewrites", unescape("rewriteValue%3A%20messageNode%0D%09%7C%20rewriteRule%20%7C%0D%09rewriteRule%20%3A%3D%20RewriteValueMap%20at%3A%20messageNode%20selector%20key%20ifAbsent%3A%20%5BStCompileException%20new%20signal%3A%20%27rewrite%20selector%20%27%20%2C%20messageNode%20selector%20key%20%2C%20%27%20missing%27%5D.%0D%09self%20perform%3A%20rewriteRule%20with%3A%20messageNode"));
smalltalk.bind(smalltalk.JSGenerator, unescape("rewriteWhileFalse%3A"), "rewriteWhileFalse_", function JSGenerator__rewriteWhileFalse_(messageNode){
const self = this; self['@stream'].nextPutAll_(unescape("while%28"));
self.asReceiverWith_((function JSGenerator__(){
return (messageNode.receiver()).generateInlinedBlockValueOn_(self);
}
));
self['@stream'].nextPutAll_(unescape(".not%28%29%29%7B%7D"));
return self;
}
, "generate rewrites", unescape("rewriteWhileFalse%3A%20messageNode%0D%09%22while%28%21%25receiver%25%28%29%29%7B%7D%3B%22%0D%09stream%20nextPutAll%3A%20%27while%28%27.%0D%09self%20asReceiverWith%3A%20%5BmessageNode%20receiver%20generateInlinedBlockValueOn%3A%20self%5D.%0D%09stream%20nextPutAll%3A%20%27.not%28%29%29%7B%7D%27"));
smalltalk.bind(smalltalk.JSGenerator, unescape("rewriteWhileFalseDo%3A"), "rewriteWhileFalseDo_", function JSGenerator__rewriteWhileFalseDo_(messageNode){
const self = this; self['@stream'].nextPutAll_(unescape("while%28"));
self.asReceiverWith_((function JSGenerator__(){
return (messageNode.receiver()).generateInlinedBlockValueOn_(self);
}
));
self['@stream'].nextPutAll_(unescape(".not%28%29%29%7B"));
(messageNode.firstArgument()).generateBlockBodyOn_(self);
self['@stream'].nextPutAll_(unescape("%7D%3B"));
return self;
}
, "generate rewrites", unescape("rewriteWhileFalseDo%3A%20messageNode%0D%09%22while%28%21%25receiver%25%28%29%29%7B%25arg1%25%28%29%7D%3B%22%0D%09stream%20nextPutAll%3A%20%27while%28%27.%0D%09self%20asReceiverWith%3A%20%5BmessageNode%20receiver%20generateInlinedBlockValueOn%3A%20self%5D.%0D%09stream%20nextPutAll%3A%20%27.not%28%29%29%7B%27.%0D%09messageNode%20firstArgument%20generateBlockBodyOn%3A%20self.%0D%09stream%20nextPutAll%3A%20%27%7D%3B%27"));
smalltalk.bind(smalltalk.JSGenerator, unescape("rewriteWhileTrue%3A"), "rewriteWhileTrue_", function JSGenerator__rewriteWhileTrue_(messageNode){
const self = this; self['@stream'].nextPutAll_(unescape("while%28"));
self.asReceiverWith_((function JSGenerator__(){
return (messageNode.receiver()).generateInlinedBlockValueOn_(self);
}
));
self['@stream'].nextPutAll_(unescape(".valueOf%28%29%29%7B%7D%3B"));
return self;
}
, "generate rewrites", unescape("rewriteWhileTrue%3A%20messageNode%0D%09%22while%28%25receiver%25%28%29%29%7B%7D%22%0D%09stream%20nextPutAll%3A%20%27while%28%27.%0D%09self%20asReceiverWith%3A%20%5BmessageNode%20receiver%20generateInlinedBlockValueOn%3A%20self%5D.%0D%09stream%20nextPutAll%3A%20%27.valueOf%28%29%29%7B%7D%3B%27"));
smalltalk.bind(smalltalk.JSGenerator, unescape("rewriteWhileTrueDo%3A"), "rewriteWhileTrueDo_", function JSGenerator__rewriteWhileTrueDo_(messageNode){
const self = this; self['@stream'].nextPutAll_(unescape("while%28"));
self.asReceiverWith_((function JSGenerator__(){
return (messageNode.receiver()).generateInlinedBlockValueOn_(self);
}
));
self['@stream'].nextPutAll_(unescape(".valueOf%28%29%29%7B"));
(messageNode.firstArgument()).generateBlockBodyOn_(self);
self['@stream'].nextPutAll_(unescape("%7D%3B"));
return self;
}
, "generate rewrites", unescape("rewriteWhileTrueDo%3A%20messageNode%0D%09%22while%28%25receiver%25%28%29%29%7B%25arg1%25%28%29%7D%3B%22%0D%09stream%20nextPutAll%3A%20%27while%28%27.%0D%09self%20asReceiverWith%3A%20%5BmessageNode%20receiver%20generateInlinedBlockValueOn%3A%20self%5D.%0D%09stream%20nextPutAll%3A%20%27.valueOf%28%29%29%7B%27.%0D%09messageNode%20firstArgument%20generateBlockBodyOn%3A%20self.%0D%09stream%20nextPutAll%3A%20%27%7D%3B%27"));
smalltalk.JSGenerator.$klass.$iVarNames = [];
smalltalk.bind(smalltalk.JSGenerator.$klass, unescape("generateClass%3Ain%3A"), "generateClass_in_", function JSGenerator_class__generateClass_in_(aClass,directoryNamed){
const self = this; self.generateClass_into_environment_(aClass,directoryNamed,(smalltalk.StEnvironment.bootstrap()));
return self;
}
, "file-out", unescape("generateClass%3A%20aClass%20in%3A%20directoryNamed%0D%09self%20generateClass%3A%20aClass%20into%3A%20directoryNamed%20environment%3A%20StEnvironment%20bootstrap"));
smalltalk.bind(smalltalk.JSGenerator.$klass, unescape("generateClass%3Ainto%3Aenvironment%3A"), "generateClass_into_environment_", function JSGenerator_class__generateClass_into_environment_(aClass,directoryNamed,stEnvironment){
var generator = nil;
const self = this; generator=self.onFileNamed_(((directoryNamed._comma((aClass.name())))._comma(".st.js")));
generator.environment_(stEnvironment);
aClass.generateOn_(generator);
(aClass.$klass).generateOn_(generator);
generator.release();
return self;
}
, "file-out", unescape("generateClass%3A%20aClass%20into%3A%20directoryNamed%20environment%3A%20stEnvironment%0D%09%7C%20generator%20%7C%0D%09generator%20%3A%3D%20self%20onFileNamed%3A%20directoryNamed%20%2C%20aClass%20name%20%2C%20%27.st.js%27.%0D%09generator%20environment%3A%20stEnvironment.%0D%09aClass%20generateOn%3A%20generator.%0D%09aClass%20class%20generateOn%3A%20generator.%0D%09generator%20release"));
smalltalk.bind(smalltalk.JSGenerator.$klass, unescape("initialize"), "initialize", function JSGenerator_class__initialize(){
const self = this; self.initializeBinaryMap();
self.initializeInlineFunctionSet();
self.initializeReservedWords();
self.initializeRewriteMap();
self.initializeRewriteValueMap();
return self;
}
, "class initialization", unescape("initialize%0D%09%22JSGenerator%20initialize%22%0D%0D%09self%20initializeBinaryMap.%0D%09self%20initializeInlineFunctionSet.%0D%09self%20initializeReservedWords.%0D%09self%20initializeRewriteMap.%0D%09self%20initializeRewriteValueMap"));
smalltalk.bind(smalltalk.JSGenerator.$klass, unescape("initializeBinaryMap"), "initializeBinaryMap", function JSGenerator_class__initializeBinaryMap(){
const self = this; smalltalk.JSGenerator.classVariableAt_put_("BinaryMap",(function JSGenerator_class__($1$){
$1$.at_put_(unescape("%7C"),"_bar");
$1$.at_put_(unescape("%26"),"_amp");
$1$.at_put_(unescape("%5C"),"_bk");
$1$.at_put_(unescape("+"),"_plus");
$1$.at_put_(unescape("*"),"_star");
$1$.at_put_(unescape("/"),"_slash");
$1$.at_put_(unescape("%3D"),"_eq");
$1$.at_put_(unescape("%3E"),"_gt");
$1$.at_put_(unescape("%3C"),"_lt");
$1$.at_put_(unescape("%2C"),"_comma");
$1$.at_put_(unescape("@"),"_at");
$1$.at_put_(unescape("%25"),"_mod");
$1$.at_put_(unescape("%7E"),"_no");
$1$.at_put_(unescape("-"),"_minus");
return $1$.yourself()}
)(smalltalk.Dictionary.new_((128))));
return self;
}
, "class initialization", unescape("initializeBinaryMap%0D%09%22JSGenerator%20initializeBinaryMap%22%0D%22%09%09.replace%28/%3A/g%2C%27_%27%29%0D%09%09.replace%28/%5B+%5D/g%2C%27_plus%27%29%0D%09%09.replace%28/-/g%2C%27_minus%27%29%0D%09%09.replace%28/%5B*%5D/g%2C%27_star%27%29%0D%09%09.replace%28/%5B/%5D/g%2C%27_slash%27%29%0D%09%09.replace%28/%5B%7C%5D/g%2C%27_bar%27%29%0D%09%09.replace%28/%5B%26%5D/g%2C%27_amp%27%29%0D%09%09.replace%28/%3E/g%2C%27_gt%27%29%0D%09%09.replace%28/%3C/g%2C%27_lt%27%29%0D%09%09.replace%28/%3D/g%2C%27_eq%27%29%0D%09%09.replace%28/%2C/g%2C%27_comma%27%29%0D%09%09.replace%28/%5B@%5D/g%2C%27_at%27%29%0D%09%09.replace%28/%7E/g%2C%27_no%27%29%0D%09%09.replace%28/%5C%5C/g%2C%27_bk%27%29%22%0D%0D%09BinaryMap%20%3A%3D%20%28Dictionary%20new%3A%20128%29%0D%22%09%09at%3A%20%24%7C%20%20put%3A%20%27or%27%3B%0D%09%09at%3A%20%24%26%20put%3A%20%27and%27%3B%22%0D%09%09at%3A%20%24%7C%20%20put%3A%20%27_bar%27%3B%0D%09%09at%3A%20%24%26%20put%3A%20%27_amp%27%3B%0D%09%09at%3A%20%24%5C%20put%3A%20%27_bk%27%3B%0D%09%09at%3A%20%24+%20put%3A%20%27_plus%27%3B%0D%09%09at%3A%20%24*%20put%3A%20%27_star%27%3B%0D%09%09at%3A%20%24/%20put%3A%20%27_slash%27%3B%0D%09%09at%3A%20%24%3D%20put%3A%20%27_eq%27%3B%0D%09%09at%3A%20%24%3E%20put%3A%20%27_gt%27%3B%0D%09%09at%3A%20%24%3C%20put%3A%20%27_lt%27%3B%0D%09%09at%3A%20%24%2C%20put%3A%20%27_comma%27%3B%0D%09%09at%3A%20%24@%20put%3A%20%27_at%27%3B%0D%09%09at%3A%20%24%25%20put%3A%20%27_mod%27%3B%0D%09%09at%3A%20%24%7E%20put%3A%20%27_no%27%3B%0D%09%09at%3A%20%24-%20put%3A%20%27_minus%27%3B%0D%09%09yourself"));
smalltalk.bind(smalltalk.JSGenerator.$klass, unescape("initializeInlineFunctionSet"), "initializeInlineFunctionSet", function JSGenerator_class__initializeInlineFunctionSet(){
const self = this; smalltalk.JSGenerator.classVariableAt_put_("InlineFunctionSet",smalltalk.Set.$$new());
(function JSGenerator_class__($1$){
$1$.add_("whileTrue");
$1$.add_("whileFalse");
$1$.add_("basicValueOrNil");
$1$.add_("whileTrue:");
$1$.add_("whileFalse:");
$1$.add_("ifNil:");
$1$.add_("ifNotNil:");
$1$.add_("basicAt:");
$1$.add_("ifUndefined:");
$1$.add_("timesRepeat:");
$1$.add_("basicAt:ifAbsent:");
return $1$.yourself()}
)(smalltalk.JSGenerator.classVariableAt_("InlineFunctionSet"));
return self;
}
, "class initialization", unescape("initializeInlineFunctionSet%0D%09%22JSGenerator%20initializeInlineFunctionSet%22%0D%0D%09InlineFunctionSet%20%3A%3D%20Set%20new.%0D%09InlineFunctionSet%0D%09%09add%3A%20%23whileTrue%3B%0D%09%09add%3A%20%23whileFalse%3B%0D%09%09add%3A%20%23basicValueOrNil%3B%0D%0D%09%09add%3A%20%23whileTrue%3A%3B%0D%09%09add%3A%20%23whileFalse%3A%3B%0D%09%09add%3A%20%23ifNil%3A%3B%0D%09%09add%3A%20%23ifNotNil%3A%3B%0D%0D%09%09add%3A%20%23basicAt%3A%3B%0D%09%09add%3A%20%23ifUndefined%3A%3B%0D%09%09add%3A%20%23timesRepeat%3A%3B%0D%0D%09%09add%3A%20%23basicAt%3AifAbsent%3A%3B%0D%0D%09%09yourself"));
smalltalk.bind(smalltalk.JSGenerator.$klass, unescape("initializeReservedWords"), "initializeReservedWords", function JSGenerator_class__initializeReservedWords(){
const self = this; smalltalk.JSGenerator.classVariableAt_put_("ReservedWords",smalltalk.Set.new_((197)));
smalltalk.JSGenerator.classVariableAt_("ReservedWords").addAll_(["abstract", unescape("%2C"), "as", unescape("%2C"), "boolean", unescape("%2C"), "break", unescape("%2C"), "byte", unescape("%2C"), "case", unescape("%2C"), "catch", unescape("%2C"), "char", unescape("%2C"), "class", unescape("%2C"), "continue", unescape("%2C"), "const", unescape("%2C"), "debugger", unescape("%2C"), "default", unescape("%2C"), "delete", unescape("%2C"), "do", unescape("%2C"), "double", unescape("%2C"), "else", unescape("%2C"), "enum", unescape("%2C"), "export", unescape("%2C"), "extends", unescape("%2C"), "false", unescape("%2C"), "final", unescape("%2C"), "finally", unescape("%2C"), "float", unescape("%2C"), "for", unescape("%2C"), "function", unescape("%2C"), "goto", unescape("%2C"), "if", unescape("%2C"), "implements", unescape("%2C"), "import", unescape("%2C"), "in", unescape("%2C"), "instanceof", unescape("%2C"), "int", unescape("%2C"), "interface", unescape("%2C"), "is", unescape("%2C"), "long", unescape("%2C"), "namespace", unescape("%2C"), "native", unescape("%2C"), "new", unescape("%2C"), "null", unescape("%2C"), "package", unescape("%2C"), "private", unescape("%2C"), "protected", unescape("%2C"), "public", unescape("%2C"), "return", unescape("%2C"), "short", unescape("%2C"), "static", unescape("%2C"), "super", unescape("%2C"), "switch", unescape("%2C"), "synchronized", unescape("%2C"), "this", unescape("%2C"), "throw", unescape("%2C"), "throws", unescape("%2C"), "transient", unescape("%2C"), "true", unescape("%2C"), "try", unescape("%2C"), "typeof", unescape("%2C"), "use", unescape("%2C"), "var", unescape("%2C"), "void", unescape("%2C"), "volatile", unescape("%2C"), "while", unescape("%2C"), "with"]);
return self;
}
, "class initialization", unescape("initializeReservedWords%0D%09%22JSGenerator%20initializeReservedWords%22%0D%0D%09ReservedWords%20%3A%3D%20Set%20new%3A%20197.%0D%09ReservedWords%20addAll%3A%0D%09%23%28%27abstract%27%2C%20%27as%27%2C%20%27boolean%27%2C%20%27break%27%2C%20%27byte%27%2C%20%27case%27%2C%20%27catch%27%2C%20%27char%27%2C%20%27class%27%2C%20%27continue%27%2C%20%27const%27%2C%20%27debugger%27%2C%20%27default%27%2C%20%27delete%27%2C%20%27do%27%2C%20%27double%27%2C%20%27else%27%2C%20%27enum%27%2C%20%27export%27%2C%20%27extends%27%2C%20%27false%27%2C%20%27final%27%2C%20%27finally%27%2C%20%27float%27%2C%20%27for%27%2C%20%27function%27%2C%20%27goto%27%2C%20%27if%27%2C%20%27implements%27%2C%20%27import%27%2C%20%27in%27%2C%20%27instanceof%27%2C%20%27int%27%2C%20%27interface%27%2C%20%27is%27%2C%20%27long%27%2C%20%27namespace%27%2C%20%27native%27%2C%20%27new%27%2C%20%27null%27%2C%20%27package%27%2C%20%27private%27%2C%20%27protected%27%2C%20%27public%27%2C%20%27return%27%2C%20%27short%27%2C%20%27static%27%2C%20%27super%27%2C%20%27switch%27%2C%20%27synchronized%27%2C%20%27this%27%2C%20%27throw%27%2C%20%27throws%27%2C%20%27transient%27%2C%20%27true%27%2C%20%27try%27%2C%20%27typeof%27%2C%20%27use%27%2C%20%27var%27%2C%20%27void%27%2C%20%27volatile%27%2C%20%27while%27%2C%20%27with%27%29"));
smalltalk.bind(smalltalk.JSGenerator.$klass, unescape("initializeRewriteMap"), "initializeRewriteMap", function JSGenerator_class__initializeRewriteMap(){
const self = this; smalltalk.JSGenerator.classVariableAt_put_("RewriteMap",(function JSGenerator_class__($1$){
$1$.at_put_("class","rewriteClass:");
$1$.at_put_("isNil","rewriteIsNil:");
$1$.at_put_("notNil","rewriteNotNil:");
$1$.at_put_("whileTrue","rewriteWhileTrue:");
$1$.at_put_("whileFalse","rewriteWhileFalse:");
$1$.at_put_("basicValueOrNil","rewriteBasicValueOrNil:");
$1$.at_put_("whileTrue:","rewriteWhileTrueDo:");
$1$.at_put_("whileFalse:","rewriteWhileFalseDo:");
$1$.at_put_("ifNil:","rewriteIfNil:");
$1$.at_put_("ifNotNil:","rewriteIfNotNil:");
$1$.at_put_("ifTrue:","rewriteIfTrue:");
$1$.at_put_("ifFalse:","rewriteIfFalse:");
$1$.at_put_("ifTrue:ifFalse:","rewriteIfTrueIfFalse:");
$1$.at_put_("ifFalse:ifTrue:","rewriteIfFalseIfTrue:");
$1$.at_put_(unescape("%3D%3D"),"rewriteEqEq:");
$1$.at_put_(unescape("%3D%3D%3D"),"rewriteEqEqEq:");
$1$.at_put_(unescape("%7C%7C"),"rewriteOr:");
$1$.at_put_("basicAt:","rewriteBasicAt:");
$1$.at_put_("ifUndefined:","rewriteIfUndefined:");
$1$.at_put_("timesRepeat:","rewriteTimesRepeat:");
$1$.at_put_("isKindOf:","rewriteIsKindOf:");
$1$.at_put_("respondsTo:","rewriteRespondsTo:");
$1$.at_put_("ifNil:ifNotNil:","rewriteIfNilIfNotNil:");
$1$.at_put_("ifNotNil:ifNil:","rewriteIfNotNilIfNil:");
$1$.at_put_("basicAt:ifAbsent:","rewriteBasicAtIfAbsent:");
$1$.at_put_("basicAt:put:","rewriteBasicAtPut:");
return $1$.yourself()}
)(smalltalk.Dictionary.new_((128))));
return self;
}
, "class initialization", unescape("initializeRewriteMap%0D%09%22JSGenerator%20initializeRewriteMap%22%0D%0D%09RewriteMap%20%3A%3D%20%28Dictionary%20new%3A%20128%29%0D%09%09at%3A%20%23class%20put%3A%20%23rewriteClass%3A%20%3B%0D%09%09at%3A%20%23isNil%20put%3A%20%23rewriteIsNil%3A%20%3B%0D%09%09at%3A%20%23notNil%20put%3A%20%23rewriteNotNil%3A%20%3B%0D%09%09at%3A%20%23whileTrue%20put%3A%20%23rewriteWhileTrue%3A%20%3B%0D%09%09at%3A%20%23whileFalse%20put%3A%20%23rewriteWhileFalse%3A%20%3B%0D%09%09at%3A%20%23basicValueOrNil%20put%3A%20%23rewriteBasicValueOrNil%3A%20%3B%20%22not%20sure%20this%20is%20actually%20used%22%0D%09%09%0D%09%09at%3A%20%23whileTrue%3A%20put%3A%20%23rewriteWhileTrueDo%3A%20%3B%20%22basic%20need%20this%20as%20a%20call%22%0D%09%09at%3A%20%23whileFalse%3A%20put%3A%20%23rewriteWhileFalseDo%3A%20%3B%0D%09%09at%3A%20%23ifNil%3A%20put%3A%20%23rewriteIfNil%3A%20%3B%0D%09%09at%3A%20%23ifNotNil%3A%20put%3A%20%23rewriteIfNotNil%3A%20%3B%0D%0D%09%09at%3A%20%23ifTrue%3A%20put%3A%20%23rewriteIfTrue%3A%20%3B%0D%09%09at%3A%20%23ifFalse%3A%20put%3A%20%23rewriteIfFalse%3A%20%3B%0D%09%09at%3A%20%23ifTrue%3AifFalse%3A%20put%3A%20%23rewriteIfTrueIfFalse%3A%20%3B%0D%09%09at%3A%20%23ifFalse%3AifTrue%3A%20put%3A%20%23rewriteIfFalseIfTrue%3A%20%3B%0D%0D%09%09at%3A%20%23%3D%3D%20put%3A%20%23rewriteEqEq%3A%20%3B%0D%09%09at%3A%20%23%27%3D%3D%3D%27%20put%3A%20%23rewriteEqEqEq%3A%20%3B%0D%09%09at%3A%20%23%27%7C%7C%27%20put%3A%20%23rewriteOr%3A%20%3B%0D%0D%09%09at%3A%20%23basicAt%3A%20put%3A%20%23rewriteBasicAt%3A%20%3B%0D%09%09at%3A%20%23ifUndefined%3A%20put%3A%20%23rewriteIfUndefined%3A%20%3B%0D%09%09at%3A%20%23timesRepeat%3A%20put%3A%20%23rewriteTimesRepeat%3A%20%3B%0D%09%09at%3A%20%23isKindOf%3A%20put%3A%20%23rewriteIsKindOf%3A%20%3B%0D%09%09at%3A%20%23respondsTo%3A%20put%3A%20%23rewriteRespondsTo%3A%20%3B%0D%0D%09%09at%3A%20%23ifNil%3AifNotNil%3A%20put%3A%20%23rewriteIfNilIfNotNil%3A%20%3B%0D%09%09at%3A%20%23ifNotNil%3AifNil%3A%20put%3A%20%23rewriteIfNotNilIfNil%3A%20%3B%0D%09%09at%3A%20%23basicAt%3AifAbsent%3A%20put%3A%20%23rewriteBasicAtIfAbsent%3A%20%3B%0D%09%09at%3A%20%23basicAt%3Aput%3A%20put%3A%20%23rewriteBasicAtPut%3A%20%3B%0D%0D%09%09yourself"));
smalltalk.bind(smalltalk.JSGenerator.$klass, unescape("initializeRewriteValueMap"), "initializeRewriteValueMap", function JSGenerator_class__initializeRewriteValueMap(){
const self = this; smalltalk.JSGenerator.classVariableAt_put_("RewriteValueMap",(function JSGenerator_class__($1$){
$1$.at_put_("class","rewriteClass:");
$1$.at_put_("isNil","rewriteIsNil:");
$1$.at_put_("notNil","rewriteNotNil:");
$1$.at_put_("whileTrue","rewriteValueWhileTrue:");
$1$.at_put_("whileFalse","rewriteValueWhileFalse:");
$1$.at_put_("basicValueOrNil","rewriteBasicValueOrNil:");
$1$.at_put_("whileTrue:","rewriteValueWhileTrueDo:");
$1$.at_put_("whileFalse:","rewriteValueWhileFalseDo:");
$1$.at_put_("ifNil:","rewriteIfNil:");
$1$.at_put_("ifNotNil:","rewriteIfNotNil:");
$1$.at_put_(unescape("%3D%3D"),"rewriteEqEq:");
$1$.at_put_(unescape("%3D%3D%3D"),"rewriteEqEqEq:");
$1$.at_put_(unescape("%7C%7C"),"rewriteOr:");
$1$.at_put_("basicAt:","rewriteBasicAt:");
$1$.at_put_("ifUndefined:","rewriteIfUndefined:");
$1$.at_put_("timesRepeat:","rewriteValueTimesRepeat:");
$1$.at_put_("isKindOf:","rewriteIsKindOf:");
$1$.at_put_("respondsTo:","rewriteRespondsTo:");
$1$.at_put_("ifNil:ifNotNil:","rewriteIfNilIfNotNil:");
$1$.at_put_("ifNotNil:ifNil:","rewriteIfNotNilIfNil:");
$1$.at_put_("basicAt:ifAbsent:","rewriteBasicAtIfAbsent:");
$1$.at_put_("basicAt:put:","rewriteBasicAtPut:");
return $1$.yourself()}
)(smalltalk.Dictionary.new_((128))));
return self;
}
, "class initialization", unescape("initializeRewriteValueMap%0D%09%22JSGenerator%20initializeRewriteValueMap%22%0D%0D%09RewriteValueMap%20%3A%3D%20%28Dictionary%20new%3A%20128%29%0D%09%09at%3A%20%23class%20put%3A%20%23rewriteClass%3A%20%3B%0D%09%09at%3A%20%23isNil%20put%3A%20%23rewriteIsNil%3A%20%3B%0D%09%09at%3A%20%23notNil%20put%3A%20%23rewriteNotNil%3A%20%3B%0D%09%09at%3A%20%23whileTrue%20put%3A%20%23rewriteValueWhileTrue%3A%20%3B%0D%09%09at%3A%20%23whileFalse%20put%3A%20%23rewriteValueWhileFalse%3A%20%3B%0D%09%09at%3A%20%23basicValueOrNil%20put%3A%20%23rewriteBasicValueOrNil%3A%20%3B%20%22not%20sure%20this%20is%20actually%20used%22%0D%09%09%0D%09%09at%3A%20%23whileTrue%3A%20put%3A%20%23rewriteValueWhileTrueDo%3A%20%3B%20%22basic%20need%20this%20as%20a%20call%22%0D%09%09at%3A%20%23whileFalse%3A%20put%3A%20%23rewriteValueWhileFalseDo%3A%20%3B%0D%09%09at%3A%20%23ifNil%3A%20put%3A%20%23rewriteIfNil%3A%20%3B%0D%09%09at%3A%20%23ifNotNil%3A%20put%3A%20%23rewriteIfNotNil%3A%20%3B%0D%22%0D%09%09at%3A%20%23ifTrue%3A%20put%3A%20%23rewriteValueIfTrue%3A%20%3B%0D%09%09at%3A%20%23ifFalse%3A%20put%3A%20%23rewriteValueIfFalse%3A%20%3B%0D%09%09at%3A%20%23ifTrue%3AifFalse%3A%20put%3A%20%23rewriteValueIfTrueIfFalse%3A%20%3B%0D%09%09at%3A%20%23ifFalse%3AifTrue%3A%20put%3A%20%23rewriteValueIfFalseIfTrue%3A%20%3B%0D%22%0D%09%09at%3A%20%23%3D%3D%20put%3A%20%23rewriteEqEq%3A%20%3B%0D%09%09at%3A%20%23%27%3D%3D%3D%27%20put%3A%20%23rewriteEqEqEq%3A%20%3B%0D%09%09at%3A%20%23%27%7C%7C%27%20put%3A%20%23rewriteOr%3A%20%3B%0D%0D%09%09at%3A%20%23basicAt%3A%20put%3A%20%23rewriteBasicAt%3A%20%3B%0D%09%09at%3A%20%23ifUndefined%3A%20put%3A%20%23rewriteIfUndefined%3A%20%3B%0D%09%09at%3A%20%23timesRepeat%3A%20put%3A%20%23rewriteValueTimesRepeat%3A%20%3B%0D%09%09at%3A%20%23isKindOf%3A%20put%3A%20%23rewriteIsKindOf%3A%20%3B%0D%09%09at%3A%20%23respondsTo%3A%20put%3A%20%23rewriteRespondsTo%3A%20%3B%0D%0D%09%09at%3A%20%23ifNil%3AifNotNil%3A%20put%3A%20%23rewriteIfNilIfNotNil%3A%20%3B%0D%09%09at%3A%20%23ifNotNil%3AifNil%3A%20put%3A%20%23rewriteIfNotNilIfNil%3A%20%3B%0D%09%09at%3A%20%23basicAt%3AifAbsent%3A%20put%3A%20%23rewriteBasicAtIfAbsent%3A%20%3B%0D%09%09at%3A%20%23basicAt%3Aput%3A%20put%3A%20%23rewriteBasicAtPut%3A%20%3B%0D%0D%09%09yourself"));
smalltalk.bind(smalltalk.JSGenerator.$klass, unescape("internal"), "internal", function JSGenerator_class__internal(){
const self = this; return smalltalk.JSGenerator.on_(("".writeStream()));
}
, "instance creation", unescape("internal%0D%09%5EJSGenerator%20on%3A%20%27%27%20writeStream"));
smalltalk.bind(smalltalk.JSGenerator.$klass, unescape("on%3A"), "on_", function JSGenerator_class__on_(aStream){
var generator = nil;
const self = this; generator=(self.$$new()).initialize();
generator.stream_(aStream);
return generator;
}
, "instance creation", unescape("on%3A%20aStream%0D%09%7C%20generator%20%7C%0D%09generator%20%3A%3D%20self%20new%20initialize.%0D%09generator%20stream%3A%20aStream.%0D%09%5Egenerator"));
smalltalk.addClass("StCompilationCue", smalltalk.Object, ['source', 'context', 'receiver', 'class', 'environment'], 'Compiler-JS');
smalltalk.StCompilationCue.$classVariableNames=("");
smalltalk.bind(smalltalk.StCompilationCue, unescape("bindingOf%3A"), "bindingOf_", function StCompilationCue__bindingOf_(aSymbol){
const self = this; return self['@class'].bindingOf_environment_(aSymbol,self['@environment']);
}
, "binding", unescape("bindingOf%3A%20aSymbol%0D%09%5Eclass%20bindingOf%3A%20aSymbol%20environment%3A%20environment"));
smalltalk.bind(smalltalk.StCompilationCue, unescape("literalScannedAs%3Anotifying%3A"), "literalScannedAs_notifying_", function StCompilationCue__literalScannedAs_notifying_(scannedLiteral,anEncoder){
var key = nil;
var value = nil;
const self = this; var $early={name:"stReturn"};
try {
if ((scannedLiteral.isVariableBinding()).not()) {return scannedLiteral};
self.halt();
key=scannedLiteral.key();
value=scannedLiteral.value();
if (((nil.isNil_(key))).valueOf()) {(function(){var $1$; $1$ = self.bindingOf_(value); if (!nil.isNil_($1$)) { return ((smalltalk.is_kindOf_(assoc.value(),smalltalk.Behavior))).ifTrue_((function StCompilationCue__(){
$early.result=nil._minus_gt(((assoc.value()).$klass)); throw ($early);
}
)) } else { return $1$; }})();
anEncoder.notify_("No such metaclass");
$early.result=false; throw ($early)};
if ((key.isSymbol()).valueOf()) {return (function(){var $2$; $2$ = self.bindingOf_(key); if (nil.isNil_($2$)) { return (self.environment()).undeclare_(key) } else { return $2$; }})()};
anEncoder.notify_(unescape("%23%23%20must%20be%20followed%20by%20a%20non-local%20variable%20name"));
return false;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "binding", unescape("literalScannedAs%3A%20scannedLiteral%20notifying%3A%20anEncoder%0D%09%7C%20key%20value%20%7C%0D%09%28scannedLiteral%20isVariableBinding%29%0D%09%09ifFalse%3A%20%5B%5E%20scannedLiteral%5D.%0Dself%20halt.%0D%09key%20%3A%3D%20scannedLiteral%20key.%0D%09value%20%3A%3D%20scannedLiteral%20value.%0D%09key%20isNil%20%0D%09%09ifTrue%3A%20%22%23%23%23%3Cmetaclass%20soleInstance%20name%3E%22%0D%09%09%09%5B%28self%20bindingOf%3A%20value%29%20ifNotNil%3A%5B%3Aassoc%7C%0D%09%09%09%09%20%28assoc%20value%20isKindOf%3A%20Behavior%29%0D%09%09%09%09%09ifTrue%3A%20%5B%5E%20nil-%3Eassoc%20value%20class%5D%5D.%0D%09%09%09%20anEncoder%20notify%3A%20%27No%20such%20metaclass%27.%0D%09%09%09%20%5Efalse%5D.%0D%09%28key%20isSymbol%29%0D%09%09ifTrue%3A%20%22%23%23%3Cglobal%20var%20name%3E%22%0D%09%09%09%5B%5E%20%28self%20bindingOf%3A%20key%29%20ifNil%3A%0D%09%09%09%09%5Bself%20environment%20undeclare%3A%20key%5D%5D.%0D%09anEncoder%20notify%3A%20%27%23%23%20must%20be%20followed%20by%20a%20non-local%20variable%20name%27.%0D%09%5Efalse%0D"));
smalltalk.bind(smalltalk.StCompilationCue, unescape("context"), "context", function StCompilationCue__context(){
const self = this; return self['@context'];
}
, "accessing", unescape("context%0D%09%5E%20context"));
smalltalk.bind(smalltalk.StCompilationCue, unescape("environment"), "environment", function StCompilationCue__environment(){
const self = this; return self['@environment'];
}
, "accessing", unescape("environment%0D%09%5E%20environment"));
smalltalk.bind(smalltalk.StCompilationCue, unescape("getClass"), "getClass", function StCompilationCue__getClass(){
const self = this; return self['@class'];
}
, "accessing", unescape("getClass%0D%09%5E%20class"));
smalltalk.bind(smalltalk.StCompilationCue, unescape("receiver"), "receiver", function StCompilationCue__receiver(){
const self = this; return self['@receiver'];
}
, "accessing", unescape("receiver%0D%09%5E%20receiver"));
smalltalk.bind(smalltalk.StCompilationCue, unescape("requestor"), "requestor", function StCompilationCue__requestor(){
const self = this; return nil;
}
, "accessing", unescape("requestor%0D%09%5Enil"));
smalltalk.bind(smalltalk.StCompilationCue, unescape("sourceStream"), "sourceStream", function StCompilationCue__sourceStream(){
const self = this; return self['@source'];
}
, "accessing", unescape("sourceStream%0D%09%5Esource"));
smalltalk.bind(smalltalk.StCompilationCue, unescape("initializeWithSource%3Acontext%3Areceiver%3Aclass%3Aenvironment%3A"), "initializeWithSource_context_receiver_class_environment_", function StCompilationCue__initializeWithSource_context_receiver_class_environment_(aString,aContext,recObject,aClass,stEnvironment){
const self = this; self.initialize();
self['@source']=aString.readStream();
self['@context']=aContext;
self['@receiver']=recObject;
self['@class']=aClass;
self['@environment']=stEnvironment;
return self;
}
, "initialization", unescape("initializeWithSource%3A%20aString%20context%3A%20aContext%20receiver%3A%20recObject%20class%3A%20aClass%20environment%3A%20stEnvironment%0D%09self%20initialize.%0D%09source%20%3A%3D%20aString%20readStream.%0D%09context%20%3A%3D%20aContext.%0D%09receiver%20%3A%3D%20recObject.%0D%09class%20%3A%3D%20aClass.%0D%09environment%20%3A%3D%20stEnvironment"));
smalltalk.StCompilationCue.$klass.$iVarNames = [];
smalltalk.bind(smalltalk.StCompilationCue.$klass, unescape("environment%3Aevaluate%3A"), "environment_evaluate_", function StCompilationCue_class__environment_evaluate_(stEnvironment,aTextOrStream){
const self = this; return (self.basicNew()).initializeWithSource_context_receiver_class_environment_(aTextOrStream,nil,nil,(stEnvironment.bindingOf_("UndefinedObject")),stEnvironment);
}
, "static compile", unescape("environment%3A%20stEnvironment%20evaluate%3A%20aTextOrStream%0D%09%5E%20self%20basicNew%0D%09%09initializeWithSource%3A%20aTextOrStream%20%0D%09%09context%3A%20nil%20%0D%09%09receiver%3A%20nil%0D%09%09class%3A%20%28stEnvironment%20bindingOf%3A%20%23UndefinedObject%29%20%0D%09%09environment%3A%20stEnvironment"));
smalltalk.bind(smalltalk.StCompilationCue.$klass, unescape("source%3Aclass%3A"), "source_class_", function StCompilationCue_class__source_class_(aTextOrStream,aClass){
const self = this; return (self.basicNew()).initializeWithSource_context_receiver_class_environment_(aTextOrStream,nil,nil,aClass,((function(){var $1$; $1$ = aClass; if (!nil.isNil_($1$)) { return aClass.environment() } else { return $1$; }})()));
}
, "instance creation", unescape("source%3A%20aTextOrStream%20class%3A%20aClass%0D%09%5E%20self%20basicNew%0D%09%09initializeWithSource%3A%20aTextOrStream%20%0D%09%09context%3A%20nil%20%0D%09%09receiver%3A%20nil%0D%09%09class%3A%20aClass%20%0D%09%09environment%3A%20%28aClass%20ifNotNil%3A%20%5BaClass%20environment%5D%29"));
smalltalk.bind(smalltalk.StCompilationCue.$klass, unescape("source%3Aclass%3Aenvironment%3A"), "source_class_environment_", function StCompilationCue_class__source_class_environment_(aTextOrStream,aClass,stEnvironment){
const self = this; return (self.basicNew()).initializeWithSource_context_receiver_class_environment_(aTextOrStream,nil,nil,aClass,stEnvironment);
}
, "instance creation", unescape("source%3A%20aTextOrStream%20class%3A%20aClass%20environment%3A%20stEnvironment%0D%09%5E%20self%20basicNew%0D%09%09initializeWithSource%3A%20aTextOrStream%20%0D%09%09context%3A%20nil%20%0D%09%09receiver%3A%20nil%0D%09%09class%3A%20aClass%20%0D%09%09environment%3A%20stEnvironment"));
smalltalk.addClass("StCompiler", smalltalk.Object, ['parser', 'cue'], 'Compiler-JS');
smalltalk.StCompiler.$classVariableNames=("");
smalltalk.bind(smalltalk.StCompiler, unescape("evaluate%3Ain%3AifFail%3A"), "evaluate_in_ifFail_", function StCompiler__evaluate_in_ifFail_(textOrStream,stEnvironment,failBlock){
const self = this; return self.evaluateCue_ifFail_((smalltalk.StCompilationCue.environment_evaluate_(stEnvironment,textOrStream)),failBlock);
}
, "evaluate", unescape("evaluate%3A%20textOrStream%20in%3A%20stEnvironment%20ifFail%3A%20failBlock%0D%09%22Compiles%20the%20sourceStream%20into%20a%20parse%20tree%2C%20then%20generates%20code%20into%0D%09%20a%20method.%20%22%0D%09%0D%09%5Eself%0D%09%09evaluateCue%3A%20%28StCompilationCue%20environment%3A%20stEnvironment%20evaluate%3A%20textOrStream%29%0D%09%09ifFail%3A%20failBlock"));
smalltalk.bind(smalltalk.StCompiler, unescape("evaluateCue%3AifFail%3A"), "evaluateCue_ifFail_", function StCompiler__evaluateCue_ifFail_(aCue,failBlock){
var methodNode = nil;
var method = nil;
var generator = nil;
const self = this; var $early={name:"stReturn"};
try {
self['@cue']=aCue;
methodNode=(self.parser()).parseDoItCue_ifFail_(self['@cue'],(function StCompiler__(){
$early.result=failBlock.value(); throw ($early);
}
));
generator=smalltalk.JSGenerator.internal();
generator.asReceiverWith_((function StCompiler__(){
return methodNode.generateOn_(generator);
}
));
generator.blockInvocation();
method=generator.source();
return method;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "evaluate", unescape("evaluateCue%3A%20aCue%20ifFail%3A%20failBlock%0D%09%22Compiles%20the%20cue%20source%20into%20a%20parse%20tree%2C%20then%20generates%20code%20into%0D%09a%20method.%20Finally%2C%20the%20compiled%20method%20is%20invoked%20from%20here%20via%20%09withArgs%3AexecuteMethod%3A%2C%20hence%20the%20system%20no%20longer%20creates%20Doit%20method%0D%09litter%20on%20errors.%22%0D%0D%09%7C%20methodNode%20method%20generator%20%7C%0D%09cue%20%3A%3D%20aCue.%0D%09methodNode%20%3A%3D%20self%20parser%20parseDoItCue%3A%20cue%20%20ifFail%3A%20%5B%5EfailBlock%20value%5D.%0D%0D%09generator%20%3A%3D%20JSGenerator%20internal.%0D%09generator%20asReceiverWith%3A%20%5B%0D%09%09methodNode%20generateOn%3A%20generator%5D.%0D%09generator%20blockInvocation.%0D%09method%20%3A%3D%20generator%20source.%0D%09%5Emethod"));
smalltalk.bind(smalltalk.StCompiler, unescape("analyze%3Achunk%3A"), "analyze_chunk_", function StCompiler__analyze_chunk_(messageNode,aString){
var args = nil;
const self = this; if ((messageNode.isVariableNode()).valueOf()) {return nil};
args=(messageNode.arguments()).collect_((function StCompiler__(arg){
return arg.key();
}
));
return smalltalk.StChunk.from_receiver_selector_arguments_(aString,(self.extractChunkReceiver_((messageNode.receiver()))),((messageNode.selector()).key()),(args.asArray()));
}
, "chunk processing", unescape("analyze%3A%20messageNode%20chunk%3A%20aString%0D%09%7C%20args%20%7C%0D%09messageNode%20isVariableNode%0D%09%09ifTrue%3A%20%5B%5Enil%5D.%0D%09args%20%3A%3D%20messageNode%20arguments%20collect%3A%20%5B%3Aarg%20%7C%20arg%20key%5D.%0D%09%5EStChunk%0D%09%09from%3A%20aString%0D%09%09receiver%3A%20%28self%20extractChunkReceiver%3A%20messageNode%20receiver%29%0D%09%09selector%3A%20messageNode%20selector%20key%0D%09%09arguments%3A%20args%20asArray"));
smalltalk.bind(smalltalk.StCompiler, unescape("extractChunkReceiver%3A"), "extractChunkReceiver_", function StCompiler__extractChunkReceiver_(node){
var receiver = nil;
const self = this; if ((node.isMessageNode()).not()) {if (((node.key())._eq("nil")).valueOf()) {return nil} else {return node.key()}};
receiver=(node.receiver()).key();
if ((((node.selector()).key())._eq("class")).valueOf()) {return receiver.metaClass()} else {self.error_("no idea")};
return self;
}
, "chunk processing", unescape("extractChunkReceiver%3A%20node%0D%09%7C%20receiver%20%7C%0D%09node%20isMessageNode%0D%09%09ifFalse%3A%20%5B%0D%09%09%09%5Enode%20key%20%3D%20%27nil%27%0D%09%09%09%09ifTrue%3A%20%5Bnil%5D%0D%09%09%09%09ifFalse%3A%20%5Bnode%20key%5D%5D.%0D%09%22we%20are%20likely%20dealing%20with%20a%20metaclass%20reference%22%0D%09receiver%20%3A%3D%20node%20receiver%20key.%0D%09node%20selector%20key%20%3D%20%27class%27%0D%09%09ifTrue%3A%20%5B%5Ereceiver%20metaClass%5D%0D%09%09ifFalse%3A%20%5Bself%20error%3A%20%27no%20idea%27%5D"));
smalltalk.bind(smalltalk.StCompiler, unescape("parseChunk%3Ain%3AifFail%3A"), "parseChunk_in_ifFail_", function StCompiler__parseChunk_in_ifFail_(aString,stEnvironment,failBlock){
var methodNode = nil;
var messageNode = nil;
const self = this; var $early={name:"stReturn"};
try {
self['@cue']=smalltalk.StCompilationCue.environment_evaluate_(stEnvironment,aString);
methodNode=(self.parser()).parseDoItCue_ifFail_(self['@cue'],(function StCompiler__(){
$early.result=failBlock.value(); throw ($early);
}
));
messageNode=methodNode.doitStatement();
return self.analyze_chunk_(messageNode,aString);
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "chunk processing", unescape("parseChunk%3A%20aString%20in%3A%20stEnvironment%20ifFail%3A%20failBlock%0D%09%22Compiles%20the%20sourceStream%20into%20a%20parse%20tree%2C%20then%20generates%20code%20into%0D%09%20a%20method.%20%22%0D%09%0D%09%7C%20methodNode%20messageNode%20%7C%0D%09cue%20%3A%3D%20%28StCompilationCue%20environment%3A%20stEnvironment%20evaluate%3A%20aString%29.%0D%09methodNode%20%3A%3D%20self%20parser%20parseDoItCue%3A%20cue%20%20ifFail%3A%20%5B%5EfailBlock%20value%5D.%0D%09messageNode%20%3A%3D%20methodNode%20doitStatement.%0D%09%5Eself%20analyze%3A%20messageNode%20chunk%3A%20aString"));
smalltalk.bind(smalltalk.StCompiler, unescape("parser"), "parser", function StCompiler__parser(){
const self = this; (function(){var $1$; $1$ = self['@parser']; if (nil.isNil_($1$)) { return self['@parser']=smalltalk.StParser.$$new() } else { return $1$; }})();
return self['@parser'];
}
, "accessing", unescape("parser%0D%0D%22%09parser%20ifNil%3A%20%5Bparser%20%3A%3D%20%28cue%20getClass%20ifNil%3A%20%5Bself%20class%5D%29%20newParser%5D.%22%0D%09parser%20ifNil%3A%20%5Bparser%20%3A%3D%20StParser%20new%5D.%0D%09%5Eparser"));
smalltalk.bind(smalltalk.StCompiler, unescape("parser%3A"), "parser_", function StCompiler__parser_(aParser){
const self = this; self['@parser']=aParser;
return self;
}
, "accessing", unescape("parser%3A%20aParser%0D%0D%09parser%20%3A%3D%20aParser"));
smalltalk.bind(smalltalk.StCompiler, unescape("compile%3Ain%3AgenerateOn%3A"), "compile_in_generateOn_", function StCompiler__compile_in_generateOn_(textOrStream,aClass,generator){
var methodNode = nil;
const self = this; methodNode=self.compileCue_noPattern_ifFail_((smalltalk.StCompilationCue.source_class_environment_(textOrStream,aClass,(smalltalk.StEnvironment.bootstrap()))),false,(function StCompiler__(){
return self.halt();
}
));
methodNode.generateOn_(generator);
return self;
}
, "compile", unescape("compile%3A%20textOrStream%20in%3A%20aClass%20generateOn%3A%20generator%0D%09%22Answer%20a%20MethodNode%20for%20the%20argument%2C%20textOrStream.%20If%20the%20%0D%09MethodNode%20can%20not%20be%20created%2C%20evaluate%20failBlock.%20%0D%09The%20MethodNode%20is%20the%20root%20a%20parse%20tree.%22%0D%0D%09%7C%20methodNode%20%7C%0D%09methodNode%20%3A%3D%20self%0D%09%09compileCue%3A%20%28StCompilationCue%0D%09%09%09source%3A%20textOrStream%0D%09%09%09class%3A%20aClass%0D%09%09%09environment%3A%20StEnvironment%20bootstrap%29%0D%09%09noPattern%3A%20false%0D%09%09ifFail%3A%20%5Bself%20halt%5D.%0D%09methodNode%20generateOn%3A%20generator%0D"));
smalltalk.bind(smalltalk.StCompiler, unescape("compileMethod%3Aclass%3Aenvironment%3AgenerateOn%3A"), "compileMethod_class_environment_generateOn_", function StCompiler__compileMethod_class_environment_generateOn_(methodSource,aClass,stEnvironment,generator){
var methodNode = nil;
const self = this; methodNode=self.compileCue_noPattern_ifFail_((smalltalk.StCompilationCue.source_class_environment_(methodSource,aClass,stEnvironment)),false,(function StCompiler__(){
return self.halt();
}
));
methodNode.generateOn_(generator);
return self;
}
, "compile", unescape("compileMethod%3A%20methodSource%20class%3A%20aClass%20environment%3A%20stEnvironment%20generateOn%3A%20generator%0D%09%22Answer%20a%20MethodNode%20for%20the%20argument%2C%20textOrStream.%20If%20the%20%0D%09MethodNode%20can%20not%20be%20created%2C%20evaluate%20failBlock.%20%0D%09The%20MethodNode%20is%20the%20root%20a%20parse%20tree.%22%0D%0D%09%7C%20methodNode%20%7C%0D%09methodNode%20%3A%3D%20self%0D%09%09compileCue%3A%20%28StCompilationCue%0D%09%09%09source%3A%20methodSource%0D%09%09%09class%3A%20aClass%0D%09%09%09environment%3A%20stEnvironment%29%0D%09%09noPattern%3A%20false%0D%09%09ifFail%3A%20%5Bself%20halt%5D.%0D%09methodNode%20generateOn%3A%20generator%0D"));
smalltalk.bind(smalltalk.StCompiler, unescape("compileMethodChunk%3Aprotocol%3Aclass%3Aenvironment%3AincludeSource%3AgenerateOn%3A"), "compileMethodChunk_protocol_class_environment_includeSource_generateOn_", function StCompiler__compileMethodChunk_protocol_class_environment_includeSource_generateOn_(methodSource,protocol,aClass,stEnvironment,includeSource,generator){
var methodNode = nil;
var selector = nil;
const self = this; methodNode=self.compileCue_noPattern_ifFail_((smalltalk.StCompilationCue.source_class_environment_(methodSource,aClass,stEnvironment)),false,(function StCompiler__(){
return self.halt();
}
));
selector=methodNode.selector();
generator.startSmalltalkMethodBinding_selector_(aClass,selector);
methodNode.generateOn_(generator);
generator.methodProtocol_(protocol);
if ((includeSource).valueOf()) {generator.methodSource_(methodSource)};
generator.endSmalltalkMethodBinding_selector_(aClass,selector);
return self;
}
, "compile", unescape("compileMethodChunk%3A%20methodSource%20protocol%3A%20protocol%20class%3A%20aClass%20environment%3A%20stEnvironment%20includeSource%3A%20includeSource%20generateOn%3A%20generator%0D%09%22Answer%20a%20MethodNode%20for%20the%20argument%2C%20textOrStream.%20If%20the%20%0D%09MethodNode%20can%20not%20be%20created%2C%20evaluate%20failBlock.%20%0D%09The%20MethodNode%20is%20the%20root%20a%20parse%20tree.%22%0D%0D%09%7C%20methodNode%20selector%20%7C%0D%09methodNode%20%3A%3D%20self%0D%09%09compileCue%3A%20%28StCompilationCue%0D%09%09%09source%3A%20methodSource%0D%09%09%09class%3A%20aClass%0D%09%09%09environment%3A%20stEnvironment%29%0D%09%09noPattern%3A%20false%0D%09%09ifFail%3A%20%5Bself%20halt%5D.%0D%09selector%20%3A%3D%20methodNode%20selector.%0D%09generator%20startSmalltalkMethodBinding%3A%20aClass%20selector%3A%20selector.%0D%09methodNode%20generateOn%3A%20generator.%0D%09generator%20methodProtocol%3A%20protocol.%0D%09includeSource%0D%09%09ifTrue%3A%20%5Bgenerator%20methodSource%3A%20methodSource%5D.%0D%09generator%20endSmalltalkMethodBinding%3A%20aClass%20selector%3A%20selector"));
smalltalk.bind(smalltalk.StCompiler, unescape("compileCue%3AnoPattern%3AifFail%3A"), "compileCue_noPattern_ifFail_", function StCompiler__compileCue_noPattern_ifFail_(aCue,noPattern,failBlock){
const self = this; var $early={name:"stReturn"};
try {
self.setCue_(aCue);
return (self.parser()).parseCue_noPattern_ifFail_(self['@cue'],noPattern,(function StCompiler__(){
$early.result=failBlock.value(); throw ($early);
}
));
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "private", unescape("compileCue%3A%20aCue%20noPattern%3A%20noPattern%20ifFail%3A%20failBlock%20%0D%09%22Answer%20a%20MethodNode%20corresponding%20to%20cue%20source.%0D%09If%20the%20MethodNode%20can%20not%20be%20created%2C%20evaluate%20failBlock.%0D%09The%20MethodNode%20is%20the%20root%20%20of%20a%20parse%20tree.%22%0D%09%0D%09self%20setCue%3A%20aCue.%0D%09%5Eself%20parser%0D%09%09parseCue%3A%20cue%20%0D%09%09noPattern%3A%20noPattern%0D%09%09ifFail%3A%20%5B%5EfailBlock%20value%5D"));
smalltalk.bind(smalltalk.StCompiler, unescape("setCue%3A"), "setCue_", function StCompiler__setCue_(aCue){
const self = this; self['@cue']=aCue;
return self;
}
, "private", unescape("setCue%3A%20aCue%0D%09cue%20%3A%3D%20aCue"));
smalltalk.StCompiler.$klass.$iVarNames = [];
smalltalk.bind(smalltalk.StCompiler.$klass, unescape("new"), "$$new", function StCompiler_class__$$new(){
var compiler = nil;
const self = this; compiler=smalltalk.superImplementor(smalltalk.StCompiler.$klass,'$$new').apply(self, []);
compiler.parser_((smalltalk.StParser.$$new()));
return compiler;
}
, "instance creation", unescape("new%0D%09%7C%20compiler%20%7C%0D%09compiler%20%3A%3D%20super%20new.%0D%09compiler%20parser%3A%20StParser%20new.%0D%09%5Ecompiler"));
smalltalk.bind(smalltalk.StCompiler.$klass, unescape("compileExpression%3A"), "compileExpression_", function StCompiler_class__compileExpression_(textOrString){
const self = this; return self.compileExpression_environment_(textOrString,(smalltalk.StEnvironment.fromEnvironment()));
}
, "compiling", unescape("compileExpression%3A%20textOrString%20%0D%09%5Eself%20compileExpression%3A%20textOrString%20environment%3A%20StEnvironment%20fromEnvironment"));
smalltalk.bind(smalltalk.StCompiler.$klass, unescape("compileExpression%3Aenvironment%3A"), "compileExpression_environment_", function StCompiler_class__compileExpression_environment_(textOrString,env){
const self = this; return (self.$$new()).evaluateCue_ifFail_((smalltalk.StCompilationCue.source_class_environment_(textOrString,(env.bindingOf_("UndefinedObject")),env)),(function StCompiler_class__(){
return nil;
}
));
}
, "compiling", unescape("compileExpression%3A%20textOrString%20environment%3A%20env%0D%09%5Eself%20new%0D%09%09evaluateCue%3A%20%28StCompilationCue%0D%09%09%09source%3A%20textOrString%0D%09%09%09class%3A%20%28env%20bindingOf%3A%20%23UndefinedObject%29%0D%09%09%09environment%3A%20env%29%0D%09%09ifFail%3A%20%5Bnil%5D"));
smalltalk.bind(smalltalk.StCompiler.$klass, unescape("doIt%3A"), "doIt_", function StCompiler_class__doIt_(textOrString){
const self = this; return self.evaluate_(textOrString);
}
, "compiling", unescape("doIt%3A%20textOrString%20%0D%09%5Eself%20evaluate%3A%20textOrString"));
smalltalk.bind(smalltalk.StCompiler.$klass, unescape("environment%3AparseChunk%3A"), "environment_parseChunk_", function StCompiler_class__environment_parseChunk_(environment,textOrStream){
const self = this; var $early={name:"stReturn"};
try {
return (self.$$new()).parseChunk_in_ifFail_(textOrStream,environment,(function StCompiler_class__(){
$early.result=nil; throw ($early);
}
));
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "compiling", unescape("environment%3A%20environment%20parseChunk%3A%20textOrStream%0D%09%5E%20self%20new%0D%09%09parseChunk%3A%20textOrStream%0D%09%09in%3A%20environment%0D%09%09ifFail%3A%20%5B%5Enil%5D"));
smalltalk.bind(smalltalk.StCompiler.$klass, unescape("evaluate%3A"), "evaluate_", function StCompiler_class__evaluate_(textOrString){
var jsDoIt = nil;
const self = this; jsDoIt=self.compileExpression_(textOrString);
return self.jsEvaluate_(jsDoIt);
}
, "compiling", unescape("evaluate%3A%20textOrString%20%0D%09%7C%20jsDoIt%20%7C%0D%09jsDoIt%20%3A%3D%20self%20compileExpression%3A%20textOrString.%0D%09%5Eself%20jsEvaluate%3A%20jsDoIt"));
smalltalk.bind(smalltalk.StCompiler.$klass, unescape("jsEvaluate%3A"), "jsEvaluate_", function StCompiler_class__jsEvaluate_(jsDoItString){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKSmalltalk.primEval(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return self.primitiveFailed();
}
, "compiling", unescape("jsEvaluate%3A%20jsDoItString%0D%09%3Cprimitive%3A%27primEval%27%20module%3A%27SKSmalltalk%27%3E%0D%09%5Eself%20primitiveFailed.%20"));
smalltalk.addClass("StParseNode", smalltalk.Object, ['comment'], 'Compiler-JS');
smalltalk.StParseNode.$classVariableNames=("NodeFalse NodeNil NodeSelf NodeSuper NodeThisContext NodeTrue StdVariables");
smalltalk.bind(smalltalk.StParseNode, unescape("comment"), "comment", function StParseNode__comment(){
const self = this; return self['@comment'];
}
, "comment", unescape("comment%0D%0D%09%5Ecomment"));
smalltalk.bind(smalltalk.StParseNode, unescape("comment%3A"), "comment_", function StParseNode__comment_(newComment){
const self = this; self['@comment']=newComment;
return self;
}
, "comment", unescape("comment%3A%20newComment%0D%0D%09comment%20%3A%3D%20newComment"));
smalltalk.bind(smalltalk.StParseNode, unescape("asReturnNode"), "asReturnNode", function StParseNode__asReturnNode(){
const self = this; return (smalltalk.StReturnNode.$$new()).expr_(self);
}
, "converting", unescape("asReturnNode%0D%09%5EStReturnNode%20new%20expr%3A%20self"));
smalltalk.bind(smalltalk.StParseNode, unescape("inlineReturns"), "inlineReturns", function StParseNode__inlineReturns(){
const self = this; self.error_("should not get here");
return self;
}
, "converting", unescape("inlineReturns%0D%09self%20error%3A%20%27should%20not%20get%20here%27"));
smalltalk.bind(smalltalk.StParseNode, unescape("returnLast"), "returnLast", function StParseNode__returnLast(){
const self = this; return self.asReturnNode();
}
, "converting", unescape("returnLast%0D%09%5Eself%20asReturnNode"));
smalltalk.bind(smalltalk.StParseNode, unescape("encodeSelector%3A"), "encodeSelector_", function StParseNode__encodeSelector_(selector){
const self = this; return nil;
}
, "encoding", unescape("encodeSelector%3A%20selector%0D%0D%09%5Enil"));
smalltalk.bind(smalltalk.StParseNode, unescape("assignmentCheck%3Aat%3A"), "assignmentCheck_at_", function StParseNode__assignmentCheck_at_(encoder,location){
const self = this; return (-1);
}
, "testing", unescape("assignmentCheck%3A%20encoder%20at%3A%20location%0D%09%22For%20StMessageNodes%20masquerading%20as%20variables%20for%20the%20debugger.%0D%09For%20now%20we%20let%20this%20through%20-%20ie%20we%20allow%20stores%20ev%0D%09into%20args.%20%20Should%20check%20against%20numArgs%2C%20though.%22%0D%09%5E%20-1"));
smalltalk.bind(smalltalk.StParseNode, unescape("canBeInlinedBlockValue"), "canBeInlinedBlockValue", function StParseNode__canBeInlinedBlockValue(){
const self = this; return false;
}
, "testing", unescape("canBeInlinedBlockValue%0D%09%5Efalse"));
smalltalk.bind(smalltalk.StParseNode, unescape("canCascade"), "canCascade", function StParseNode__canCascade(){
const self = this; return false;
}
, "testing", unescape("canCascade%0D%0D%09%5Efalse"));
smalltalk.bind(smalltalk.StParseNode, unescape("ensureCanCascade%3A"), "ensureCanCascade_", function StParseNode__ensureCanCascade_(encoder){
const self = this; self;
return self;
}
, "testing", "ensureCanCascade: encoder");
smalltalk.bind(smalltalk.StParseNode, unescape("hasNonLocalBlockReturn%3A"), "hasNonLocalBlockReturn_", function StParseNode__hasNonLocalBlockReturn_(generator){
const self = this; return false;
}
, "testing", unescape("hasNonLocalBlockReturn%3A%20generator%0D%09%5Efalse"));
smalltalk.bind(smalltalk.StParseNode, unescape("hasNonLocalBlockReturn%3Aoptimized%3A"), "hasNonLocalBlockReturn_optimized_", function StParseNode__hasNonLocalBlockReturn_optimized_(generator,parentOptimized){
const self = this; return false;
}
, "testing", unescape("hasNonLocalBlockReturn%3A%20generator%20optimized%3A%20parentOptimized%0D%09%5Efalse"));
smalltalk.bind(smalltalk.StParseNode, unescape("isBlockNode"), "isBlockNode", function StParseNode__isBlockNode(){
const self = this; return false;
}
, "testing", unescape("isBlockNode%0D%09%5Efalse"));
smalltalk.bind(smalltalk.StParseNode, unescape("isComplex"), "isComplex", function StParseNode__isComplex(){
const self = this; return false;
}
, "testing", unescape("isComplex%0D%09%22Used%20for%20pretty%20printing%20to%20determine%20whether%20to%20start%20a%20new%20line%22%0D%0D%09%5Efalse"));
smalltalk.bind(smalltalk.StParseNode, unescape("isConstantNumber"), "isConstantNumber", function StParseNode__isConstantNumber(){
const self = this; return false;
}
, "testing", unescape("isConstantNumber%20%20%22Overridden%20in%20StLiteralNode%22%0D%09%5Efalse"));
smalltalk.bind(smalltalk.StParseNode, unescape("isExpression"), "isExpression", function StParseNode__isExpression(){
const self = this; return false;
}
, "testing", unescape("isExpression%0D%09%5Efalse"));
smalltalk.bind(smalltalk.StParseNode, unescape("isIf"), "isIf", function StParseNode__isIf(){
const self = this; return false;
}
, "testing", unescape("isIf%0D%0D%09%5Efalse"));
smalltalk.bind(smalltalk.StParseNode, unescape("isJust%3A"), "isJust_", function StParseNode__isJust_(node){
const self = this; return false;
}
, "testing", unescape("isJust%3A%20node%0D%09%5Efalse"));
smalltalk.bind(smalltalk.StParseNode, unescape("isMessageNode"), "isMessageNode", function StParseNode__isMessageNode(){
const self = this; return false;
}
, "testing", unescape("isMessageNode%0D%09%5Efalse"));
smalltalk.bind(smalltalk.StParseNode, unescape("isReturnSelf"), "isReturnSelf", function StParseNode__isReturnSelf(){
const self = this; return false;
}
, "testing", unescape("isReturnSelf%0D%0D%09%5Efalse"));
smalltalk.bind(smalltalk.StParseNode, unescape("isReturningIf"), "isReturningIf", function StParseNode__isReturningIf(){
const self = this; return false;
}
, "testing", unescape("isReturningIf%0D%0D%09%5Efalse"));
smalltalk.bind(smalltalk.StParseNode, unescape("isSelfPseudoVariable"), "isSelfPseudoVariable", function StParseNode__isSelfPseudoVariable(){
const self = this; return false;
}
, "testing", unescape("isSelfPseudoVariable%09%0D%09%22Overridden%20in%20StVariableNode.%22%0D%09%5Efalse"));
smalltalk.bind(smalltalk.StParseNode, unescape("isSuperPseudoVariable"), "isSuperPseudoVariable", function StParseNode__isSuperPseudoVariable(){
const self = this; return false;
}
, "testing", unescape("isSuperPseudoVariable%09%0D%09%22Overridden%20in%20StVariableNode.%22%0D%09%5Efalse"));
smalltalk.bind(smalltalk.StParseNode, unescape("isTemp"), "isTemp", function StParseNode__isTemp(){
const self = this; return false;
}
, "testing", unescape("isTemp%0D%09%5E%20false"));
smalltalk.bind(smalltalk.StParseNode, unescape("isUndefTemp"), "isUndefTemp", function StParseNode__isUndefTemp(){
const self = this; return false;
}
, "testing", unescape("isUndefTemp%0D%09%5E%20false"));
smalltalk.bind(smalltalk.StParseNode, unescape("isUnusedTemp"), "isUnusedTemp", function StParseNode__isUnusedTemp(){
const self = this; return false;
}
, "testing", unescape("isUnusedTemp%0D%09%5E%20false"));
smalltalk.bind(smalltalk.StParseNode, unescape("isVariableNode"), "isVariableNode", function StParseNode__isVariableNode(){
const self = this; return false;
}
, "testing", unescape("isVariableNode%0D%09%5Efalse"));
smalltalk.bind(smalltalk.StParseNode, unescape("markNonLocalReturns"), "markNonLocalReturns", function StParseNode__markNonLocalReturns(){
const self = this; self;
return self;
}
, "testing", "markNonLocalReturns");
smalltalk.bind(smalltalk.StParseNode, unescape("nowHasDef"), "nowHasDef", function StParseNode__nowHasDef(){
const self = this; self;
return self;
}
, "testing", unescape("nowHasDef%20%20%22Ignored%20in%20all%20but%20StVariableNode%22"));
smalltalk.bind(smalltalk.StParseNode, unescape("nowHasRef"), "nowHasRef", function StParseNode__nowHasRef(){
const self = this; self;
return self;
}
, "testing", unescape("nowHasRef%20%20%22Ignored%20in%20all%20but%20StVariableNode%22"));
smalltalk.bind(smalltalk.StParseNode, unescape("returns"), "returns", function StParseNode__returns(){
const self = this; return false;
}
, "testing", unescape("returns%0D%09%5Efalse"));
smalltalk.bind(smalltalk.StParseNode, unescape("toDoIncrement%3A"), "toDoIncrement_", function StParseNode__toDoIncrement_(ignored){
const self = this; return nil;
}
, "testing", unescape("toDoIncrement%3A%20ignored%0D%09%22Only%20meant%20for%20Messages%20or%20Assignments%20-%20else%20return%20nil%22%0D%09%5E%20nil"));
smalltalk.bind(smalltalk.StParseNode, unescape("ifNilReceiver"), "ifNilReceiver", function StParseNode__ifNilReceiver(){
const self = this; return self;
}
, "private", unescape("ifNilReceiver%0D%09%22assuming%20this%20object%20is%20the%20receiver%20of%20an%20ifNil%3A%2C%20what%20object%20is%20being%20asked%20about%3F%22%0D%09%5Eself"));
smalltalk.bind(smalltalk.StParseNode, unescape("nextWordFrom%3AsetCharacter%3A"), "nextWordFrom_setCharacter_", function StParseNode__nextWordFrom_setCharacter_(aStream,aBlock){
var outStream = nil;
var $$char = nil;
const self = this; outStream="".writeStream();
while(((aStream.peekFor_((smalltalk.Character.space()))).or_((function StParseNode__(){
return aStream.peekFor_((smalltalk.Character.tab()));
}
))).valueOf()){};;
while(((aStream.atEnd()).or_((function StParseNode__(){
$$char=aStream.next();
return ($$char._eq((smalltalk.Character.cr()))).or_((function StParseNode__(){
return $$char._eq((smalltalk.Character.space()));
}
));
}
))).not()){outStream.nextPut_($$char)};;
aBlock.value_($$char);
return outStream.contents();
}
, "private", unescape("nextWordFrom%3A%20aStream%20setCharacter%3A%20aBlock%0D%09%7C%20outStream%20char%20%7C%0D%09outStream%20%3A%3D%20%27%27%20writeStream.%0D%09%5B%28aStream%20peekFor%3A%20Character%20space%29%20%0D%09%09or%3A%20%5BaStream%20peekFor%3A%20Character%20tab%5D%5D%20whileTrue.%0D%09%5BaStream%20atEnd%0D%09%09or%3A%0D%09%09%09%5Bchar%20%3A%3D%20aStream%20next.%0D%09%09%09char%20%3D%20Character%20cr%20or%3A%20%5Bchar%20%3D%20Character%20space%5D%5D%5D%0D%09%09whileFalse%3A%20%5BoutStream%20nextPut%3A%20char%5D.%0D%09aBlock%20value%3A%20char.%0D%09%5E%20outStream%20contents"));
smalltalk.bind(smalltalk.StParseNode, unescape("generateAsReceiverOn%3A"), "generateAsReceiverOn_", function StParseNode__generateAsReceiverOn_(generator){
const self = this; self.generateOn_(generator);
return self;
}
, "generate", unescape("generateAsReceiverOn%3A%20generator%0D%09self%20generateOn%3A%20generator"));
smalltalk.bind(smalltalk.StParseNode, unescape("generateBlockBodyOn%3A"), "generateBlockBodyOn_", function StParseNode__generateBlockBodyOn_(generator){
const self = this; self.generateInlinedBlockValueOn_(generator);
return self;
}
, "generate", unescape("generateBlockBodyOn%3A%20generator%0D%09%22StCompileException%20signal%3A%20%27Invalid%20code%20generation%20%27%20%2C%20self%20printString%22%0D%09%22self%20shouldNotImplement%22%0D%09self%20generateInlinedBlockValueOn%3A%20generator"));
smalltalk.bind(smalltalk.StParseNode, unescape("generateInlinedBlockValueOn%3A"), "generateInlinedBlockValueOn_", function StParseNode__generateInlinedBlockValueOn_(generator){
const self = this; self.generateAsReceiverOn_(generator);
generator.blockVariableInvocation();
return self;
}
, "generate", unescape("generateInlinedBlockValueOn%3A%20generator%0D%09%22we%20have%20a%20variable%20or%20parameter%20containing%20a%20block%20%28we%20assume%29%22%0D%09self%20generateAsReceiverOn%3A%20generator.%0D%09generator%20blockVariableInvocation"));
smalltalk.bind(smalltalk.StParseNode, unescape("generateInlinedOn%3A"), "generateInlinedOn_", function StParseNode__generateInlinedOn_(generator){
const self = this; self.generateOn_(generator);
return self;
}
, "generate", unescape("generateInlinedOn%3A%20generator%0D%09self%20generateOn%3A%20generator"));
smalltalk.bind(smalltalk.StParseNode, unescape("generateInlinedValueOn%3A"), "generateInlinedValueOn_", function StParseNode__generateInlinedValueOn_(generator){
const self = this; self.generateOn_(generator);
return self;
}
, "generate", unescape("generateInlinedValueOn%3A%20generator%0D%09self%20generateOn%3A%20generator"));
smalltalk.bind(smalltalk.StParseNode, unescape("generateOn%3A"), "generateOn_", function StParseNode__generateOn_(generator){
const self = this; self.subclassResponsibility();
return self;
}
, "generate", unescape("generateOn%3A%20generator%0D%09self%20subclassResponsibility"));
smalltalk.StParseNode.$klass.$iVarNames = [];
smalltalk.bind(smalltalk.StParseNode.$klass, unescape("initialize"), "initialize", function StParseNode_class__initialize(){
var encoder = nil;
const self = this; smalltalk.StParseNode.classVariableAt_put_("StdVariables",smalltalk.Dictionary.new_((16)));
(function StParseNode_class__($1$){
$1$.at_put_("self",((smalltalk.StLiteralVariableNode.$$new()).name_key_("self","self")));
$1$.at_put_("super",((smalltalk.StLiteralVariableNode.$$new()).name_key_("super","super")));
$1$.at_put_("nil",((smalltalk.StLiteralVariableNode.$$new()).name_key_("nil","nil")));
$1$.at_put_("false",((smalltalk.StLiteralVariableNode.$$new()).name_key_("false","false")));
return $1$.at_put_("true",((smalltalk.StLiteralVariableNode.$$new()).name_key_("true","true")))}
)(smalltalk.StParseNode.classVariableAt_("StdVariables"));
encoder=smalltalk.StEncoder.$$new();
encoder.initScopeAndLiteralTables();
smalltalk.StParseNode.classVariableAt_put_("NodeNil",encoder.encodeVariable_("nil"));
smalltalk.StParseNode.classVariableAt_put_("NodeTrue",encoder.encodeVariable_("true"));
smalltalk.StParseNode.classVariableAt_put_("NodeFalse",encoder.encodeVariable_("false"));
smalltalk.StParseNode.classVariableAt_put_("NodeSelf",encoder.encodeVariable_("self"));
smalltalk.StParseNode.classVariableAt_put_("NodeSuper",encoder.encodeVariable_("super"));
return self;
}
, "class initialization", unescape("initialize%0D%09%22StParseNode%20initialize%22%0D%09%7C%20encoder%20%7C%0D%09StdVariables%20%3A%3D%20Dictionary%20new%3A%2016.%0D%09StdVariables%0D%09%09at%3A%20%27self%27%20put%3A%20%20%28StLiteralVariableNode%20new%20name%3A%20%20%27self%27%20key%3A%20%20%27self%27%29%3B%0D%09%09at%3A%20%27super%27%20put%3A%20%20%28StLiteralVariableNode%20new%20name%3A%20%20%27super%27%20key%3A%20%20%27super%27%29%3B%0D%09%09at%3A%20%27nil%27%20put%3A%20%20%28StLiteralVariableNode%20new%20name%3A%20%20%27nil%27%20key%3A%20%20%27nil%27%29%3B%0D%09%09at%3A%20%27false%27%20put%3A%20%20%28StLiteralVariableNode%20new%20name%3A%20%20%27false%27%20key%3A%20%20%27false%27%29%3B%0D%09%09at%3A%20%27true%27%20put%3A%20%20%28StLiteralVariableNode%20new%20name%3A%20%20%27true%27%20key%3A%20%20%27true%27%29.%0D%0D%09encoder%20%3A%3D%20StEncoder%20new.%0D%09encoder%20initScopeAndLiteralTables.%0D%0D%09NodeNil%20%3A%3D%20encoder%20encodeVariable%3A%20%27nil%27.%0D%09NodeTrue%20%3A%3D%20encoder%20encodeVariable%3A%20%27true%27.%0D%09NodeFalse%20%3A%3D%20encoder%20encodeVariable%3A%20%27false%27.%0D%09NodeSelf%20%3A%3D%20encoder%20encodeVariable%3A%20%27self%27.%0D%09NodeSuper%20%3A%3D%20encoder%20encodeVariable%3A%20%27super%27%0D%09"));
smalltalk.bind(smalltalk.StParseNode.$klass, unescape("tempSortBlock"), "tempSortBlock", function StParseNode_class__tempSortBlock(){
const self = this; return (function StParseNode_class__(t1,t2){
var be1 = nil;
var be2 = nil;
var bs1 = nil;
var bs2 = nil;
return ((t1.index())._lt((t2.index()))).or_((function StParseNode_class__(){
return ((t1.index())._eq((t2.index()))).and_((function StParseNode_class__(){
if (((t1.isRemote())._no_eq((t2.isRemote()))).valueOf()) {return t2.isRemote()} else {if ((((nil.isNil_(be1=(t1.definingScope()).blockExtent()))).or_((function StParseNode_class__(){
return (nil.isNil_(be2=(t2.definingScope()).blockExtent()));
}
))).valueOf()) {return (t1.name())._lt((t2.name()))} else {return ((bs1=be1.first())._lt((bs2=be2.first()))).or_((function StParseNode_class__(){
return (bs1._eq(bs2)).and_((function StParseNode_class__(){
return (t1.name())._lt((t2.name()));
}
));
}
))}};
}
));
}
));
}
);
}
, "accessing", unescape("tempSortBlock%0D%09%22Answer%20a%20block%20that%20can%20sort%20a%20set%20of%20temporaries%20into%20a%20stable%0D%09%20order%20so%20that%20different%20compilations%20produce%20the%20same%20results.%22%0D%09%5E%5B%3At1%20%3At2%7C%20%7C%20be1%20be2%20bs1%20bs2%20%7C%0D%09%20%20%20t1%20index%20%3C%20t2%20index%20%22simple%20sort%20by%20index.%22%0D%09%20%20%20or%3A%20%5Bt1%20index%20%3D%20t2%20index%20%22complex%20tie%20break%22%20%0D%09%09%20%20and%3A%20%5Bt1%20isRemote%20%7E%3D%20t2%20isRemote%0D%09%09%09%09ifTrue%3A%20%5Bt2%20isRemote%5D%20%22put%20direct%20temps%20before%20indirect%20temps%22%0D%09%09%09%09ifFalse%3A%20%0D%09%09%09%09%09%5B%28%28be1%20%3A%3D%20t1%20definingScope%20blockExtent%29%20isNil%0D%09%09%09%09%09%20%20or%3A%20%5B%28be2%20%3A%3D%20t2%20definingScope%20blockExtent%29%20isNil%5D%29%0D%09%09%09%09%09%09ifTrue%3A%20%5Bt1%20name%20%3C%20t2%20name%5D%20%22only%20have%20the%20name%20left%20to%20go%20on%22%0D%09%09%09%09%09%09ifFalse%3A%20%22put%20temps%20from%20outer%20scopes%20before%20those%20from%20inner%20scopes%22%0D%09%09%09%09%09%09%09%5B%28bs1%20%3A%3D%20be1%20first%29%20%3C%20%28bs2%20%3A%3D%20be2%20first%29%0D%09%09%09%09%09%09%09%20or%3A%20%5Bbs1%20%3D%20bs2%20and%3A%20%5Bt1%20name%20%3C%20t2%20name%5D%5D%5D%5D%5D%5D%5D%20%22only%20have%20the%20name%20left%20to%20go%20on%22"));
smalltalk.addClass("StAssignmentNode", smalltalk.StParseNode, ['variable', 'value'], 'Compiler-JS');
smalltalk.StAssignmentNode.$classVariableNames=("");
smalltalk.bind(smalltalk.StAssignmentNode, unescape("variable"), "variable", function StAssignmentNode__variable(){
const self = this; return self['@variable'];
}
, "equation translation", unescape("variable%0D%09%5Evariable"));
smalltalk.bind(smalltalk.StAssignmentNode, unescape("toDoIncrement%3A"), "toDoIncrement_", function StAssignmentNode__toDoIncrement_($$var){
const self = this; if (($$var._eq(self['@variable'])).not()) {return nil};
if ((self['@value'].isMemberOf_(smalltalk.StMessageNode)).valueOf()) {return self['@value'].toDoIncrement_($$var)} else {return nil};
}
, "initialize-release", unescape("toDoIncrement%3A%20var%0D%09var%20%3D%20variable%20ifFalse%3A%20%5B%5E%20nil%5D.%0D%09%28value%20isMemberOf%3A%20StMessageNode%29%20%0D%09%09ifTrue%3A%20%5B%5E%20value%20toDoIncrement%3A%20var%5D%0D%09%09ifFalse%3A%20%5B%5E%20nil%5D"));
smalltalk.bind(smalltalk.StAssignmentNode, unescape("value"), "value", function StAssignmentNode__value(){
const self = this; return self['@value'];
}
, "initialize-release", unescape("value%0D%09%5E%20value"));
smalltalk.bind(smalltalk.StAssignmentNode, unescape("variable%3Avalue%3A"), "variable_value_", function StAssignmentNode__variable_value_(aVariable,expression){
const self = this; self['@variable']=aVariable;
self['@value']=expression;
return self;
}
, "initialize-release", unescape("variable%3A%20aVariable%20value%3A%20expression%0D%0D%09variable%20%3A%3D%20aVariable.%0D%09value%20%3A%3D%20expression"));
smalltalk.bind(smalltalk.StAssignmentNode, unescape("generateAsReceiverOn%3A"), "generateAsReceiverOn_", function StAssignmentNode__generateAsReceiverOn_(generator){
const self = this; generator.asReceiverWith_((function StAssignmentNode__(){
return self.generateOn_(generator);
}
));
return self;
}
, "generate", unescape("generateAsReceiverOn%3A%20generator%0D%09generator%20asReceiverWith%3A%20%5B%0D%09%09self%20generateOn%3A%20generator%5D"));
smalltalk.bind(smalltalk.StAssignmentNode, unescape("generateOn%3A"), "generateOn_", function StAssignmentNode__generateOn_(generator){
const self = this; self['@variable'].generateAssignment_on_(self['@value'],generator);
return self;
}
, "generate", unescape("generateOn%3A%20generator%0D%09variable%20generateAssignment%3A%20value%20on%3A%20generator"));
smalltalk.bind(smalltalk.StAssignmentNode, unescape("hasNonLocalBlockReturn%3A"), "hasNonLocalBlockReturn_", function StAssignmentNode__hasNonLocalBlockReturn_(generator){
const self = this; return self['@value'].hasNonLocalBlockReturn_(generator);
}
, "testing", unescape("hasNonLocalBlockReturn%3A%20generator%0D%09%5Evalue%20hasNonLocalBlockReturn%3A%20generator"));
smalltalk.bind(smalltalk.StAssignmentNode, unescape("hasNonLocalBlockReturn%3Aoptimized%3A"), "hasNonLocalBlockReturn_optimized_", function StAssignmentNode__hasNonLocalBlockReturn_optimized_(generator,parentOptimized){
const self = this; return self['@value'].hasNonLocalBlockReturn_optimized_(generator,parentOptimized);
}
, "testing", unescape("hasNonLocalBlockReturn%3A%20generator%20optimized%3A%20parentOptimized%0D%09%5Evalue%20hasNonLocalBlockReturn%3A%20generator%20optimized%3A%20parentOptimized"));
smalltalk.bind(smalltalk.StAssignmentNode, unescape("isExpression"), "isExpression", function StAssignmentNode__isExpression(){
const self = this; return self['@value'].isExpression();
}
, "testing", unescape("isExpression%0D%09%5Evalue%20isExpression"));
smalltalk.bind(smalltalk.StAssignmentNode, unescape("markNonLocalReturns"), "markNonLocalReturns", function StAssignmentNode__markNonLocalReturns(){
const self = this; self['@value'].markNonLocalReturns();
return self;
}
, "testing", unescape("markNonLocalReturns%0D%09value%20markNonLocalReturns"));
smalltalk.addClass("StBlockNode", smalltalk.StParseNode, ['args', 'statements', 'returns', 'temporaries'], 'Compiler-JS');
smalltalk.StBlockNode.$classVariableNames=("");
smalltalk.bind(smalltalk.StBlockNode, unescape("addArgument%3A"), "addArgument_", function StBlockNode__addArgument_(aStTempVariableNode){
const self = this; self['@temporaries']=self['@temporaries'].copyWith_(aStTempVariableNode);
return self;
}
, "accessing", unescape("addArgument%3A%20aStTempVariableNode%0D%09temporaries%20%3A%3D%20temporaries%20copyWith%3A%20aStTempVariableNode"));
smalltalk.bind(smalltalk.StBlockNode, unescape("arguments"), "arguments", function StBlockNode__arguments(){
const self = this; return (function(){var $1$; $1$ = self['@args']; if (nil.isNil_($1$)) { return [] } else { return $1$; }})();
}
, "accessing", unescape("arguments%0D%09%5Eargs%20ifNil%3A%20%5B%23%28%29%5D"));
smalltalk.bind(smalltalk.StBlockNode, unescape("arguments%3A"), "arguments_", function StBlockNode__arguments_(argNodes){
const self = this; self['@args']=argNodes;
return self;
}
, "accessing", unescape("arguments%3A%20argNodes%20%0D%09%22Decompile.%22%0D%0D%09args%20%3A%3D%20argNodes"));
smalltalk.bind(smalltalk.StBlockNode, unescape("block"), "block", function StBlockNode__block(){
const self = this; return self;
}
, "accessing", unescape("block%0D%09%5E%20self"));
smalltalk.bind(smalltalk.StBlockNode, unescape("firstArgument"), "firstArgument", function StBlockNode__firstArgument(){
const self = this; return self['@args'].first();
}
, "accessing", unescape("firstArgument%0D%09%5E%20args%20first"));
smalltalk.bind(smalltalk.StBlockNode, unescape("numberOfArguments"), "numberOfArguments", function StBlockNode__numberOfArguments(){
const self = this; return self['@args'].size();
}
, "accessing", unescape("numberOfArguments%0D%0D%09%5Eargs%20size"));
smalltalk.bind(smalltalk.StBlockNode, unescape("returnLast"), "returnLast", function StBlockNode__returnLast(){
const self = this; if ((self.returns()).not()) {self['@statements'].at_put_((self['@statements'].size()),((self['@statements'].last()).asReturnNode()))};
return self;
}
, "accessing", unescape("returnLast%0D%09self%20returns%0D%09%09ifFalse%3A%20%0D%09%09%09%5B%22returns%20%3A%3D%20true.%22%0D%09%09%09statements%20at%3A%20statements%20size%20put%3A%20statements%20last%20asReturnNode%5D"));
smalltalk.bind(smalltalk.StBlockNode, unescape("returnSelfIfNoOther%3A"), "returnSelfIfNoOther_", function StBlockNode__returnSelfIfNoOther_(encoder){
const self = this; if ((self.returns()).valueOf()) {return self};
if (((nil.is_eqeq_(self['@statements'].last(),smalltalk.StBlockNode.classVariableAt_("NodeSelf")))).not()) {self['@statements']=self['@statements'].copyWith_((encoder.encodeVariable_("self")))};
self.returnLast();
return self;
}
, "accessing", unescape("returnSelfIfNoOther%3A%20encoder%0D%09self%20returns%20ifTrue%3A%5B%5Eself%5D.%0D%09statements%20last%20%3D%3D%20NodeSelf%20ifFalse%3A%20%5B%0D%09%09statements%20%3A%3D%20statements%20copyWith%3A%20%28encoder%20encodeVariable%3A%20%27self%27%29.%0D%09%5D.%0D%09self%20returnLast.%0D"));
smalltalk.bind(smalltalk.StBlockNode, unescape("statements"), "statements", function StBlockNode__statements(){
const self = this; return self['@statements'];
}
, "accessing", unescape("statements%0D%09%5Estatements"));
smalltalk.bind(smalltalk.StBlockNode, unescape("temporaries"), "temporaries", function StBlockNode__temporaries(){
const self = this; return (function(){var $1$; $1$ = self['@temporaries']; if (nil.isNil_($1$)) { return [] } else { return $1$; }})();
}
, "accessing", unescape("temporaries%0D%09%5Etemporaries%20ifNil%3A%20%5B%23%28%29%5D"));
smalltalk.bind(smalltalk.StBlockNode, unescape("temporaries%3A"), "temporaries_", function StBlockNode__temporaries_(aCollection){
const self = this; self['@temporaries']=aCollection;
return self;
}
, "accessing", unescape("temporaries%3A%20aCollection%0D%09temporaries%20%3A%3D%20aCollection"));
smalltalk.bind(smalltalk.StBlockNode, unescape("arguments%3Astatements%3Areturns%3Afrom%3A"), "arguments_statements_returns_from_", function StBlockNode__arguments_statements_returns_from_(argNodes,statementsCollection,returnBool,encoder){
const self = this; self['@args']=argNodes;
self['@statements']=((statementsCollection.size())._gt((0))).ifTrue_ifFalse_((function StBlockNode__(){
return statementsCollection;
}
),(function StBlockNode__(){
return smalltalk.Array.with_(smalltalk.StBlockNode.classVariableAt_("NodeNil"));
}
));
self['@returns']=returnBool;
return self;
}
, "initialize-release", unescape("arguments%3A%20argNodes%20statements%3A%20statementsCollection%20returns%3A%20returnBool%20from%3A%20encoder%0D%09%22Compile.%22%0D%09args%20%3A%3D%20argNodes.%0D%09statements%20%3A%3D%20statementsCollection%20size%20%3E%200%0D%09%09%09%09%09ifTrue%3A%20%5BstatementsCollection%5D%0D%09%09%09%09%09ifFalse%3A%20%5BArray%20with%3A%20NodeNil%5D.%0D%09returns%20%3A%3D%20returnBool"));
smalltalk.bind(smalltalk.StBlockNode, unescape("returnNil"), "returnNil", function StBlockNode__returnNil(){
const self = this; self['@returns']=false;
self['@temporaries']=smalltalk.OrderedCollection.$$new();
self['@args']=smalltalk.OrderedCollection.$$new();
self['@statements']=smalltalk.Array.with_(smalltalk.StBlockNode.classVariableAt_("NodeNil"));
self.returnLast();
return self;
}
, "initialize-release", unescape("returnNil%0D%09returns%20%3A%3D%20false.%0D%09temporaries%20%3A%3D%20OrderedCollection%20new.%0D%09args%20%3A%3D%20OrderedCollection%20new.%0D%09statements%20%3A%3D%20Array%20with%3A%20NodeNil.%0D%09self%20returnLast"));
smalltalk.bind(smalltalk.StBlockNode, unescape("generateAsReceiverOn%3A"), "generateAsReceiverOn_", function StBlockNode__generateAsReceiverOn_(generator){
const self = this; generator.asReceiverWith_((function StBlockNode__(){
return self.generateOn_(generator);
}
));
return self;
}
, "generate", unescape("generateAsReceiverOn%3A%20generator%0D%09generator%20asReceiverWith%3A%20%5B%0D%09%09self%20generateOn%3A%20generator%5D%0D%09%0D"));
smalltalk.bind(smalltalk.StBlockNode, unescape("generateBlockBodyOn%3A"), "generateBlockBodyOn_", function StBlockNode__generateBlockBodyOn_(generator){
const self = this; self.generateInlinedOn_(generator);
return self;
}
, "generate", unescape("generateBlockBodyOn%3A%20generator%0D%09self%20generateInlinedOn%3A%20generator"));
smalltalk.bind(smalltalk.StBlockNode, unescape("generateInlinedBlockValueOn%3A"), "generateInlinedBlockValueOn_", function StBlockNode__generateInlinedBlockValueOn_(generator){
const self = this; if ((self.canBeInlinedBlockValue()).valueOf()) {(self['@statements'].first()).generateInlinedValueOn_(generator)} else {self.generateAsReceiverOn_(generator);
generator.blockInvocation()};
return self;
}
, "generate", unescape("generateInlinedBlockValueOn%3A%20generator%0D%09self%20canBeInlinedBlockValue%0D%09%09ifTrue%3A%20%5Bstatements%20first%20generateInlinedValueOn%3A%20generator%5D%0D%09%09ifFalse%3A%20%5B%0D%09%09%09self%20generateAsReceiverOn%3A%20generator.%0D%09%09%09generator%20blockInvocation%5D"));
smalltalk.bind(smalltalk.StBlockNode, unescape("generateInlinedOn%3A"), "generateInlinedOn_", function StBlockNode__generateInlinedOn_(generator){
const self = this; generator.generateTemporaries_(self['@temporaries']);
self['@statements'].do_andBetweenDo_((function StBlockNode__(statement){
generator.startStatement();
return statement.generateOn_(generator);
}
),(function StBlockNode__(){
return generator.endStatement();
}
));
return self;
}
, "generate", unescape("generateInlinedOn%3A%20generator%0D%09generator%20generateTemporaries%3A%20temporaries.%0D%09statements%0D%09%09do%3A%20%5B%3Astatement%20%7C%20%0D%09%09%09%09generator%20startStatement.%0D%09%09%09%09statement%20generateOn%3A%20generator%5D%0D%09%09andBetweenDo%3A%20%5Bgenerator%20endStatement%5D"));
smalltalk.bind(smalltalk.StBlockNode, unescape("generateInlinedValueOn%3A"), "generateInlinedValueOn_", function StBlockNode__generateInlinedValueOn_(generator){
const self = this; self.generateAsReceiverOn_(generator);
return self;
}
, "generate", unescape("generateInlinedValueOn%3A%20generator%0D%09self%20generateAsReceiverOn%3A%20generator"));
smalltalk.bind(smalltalk.StBlockNode, unescape("generateMethodBody%3A"), "generateMethodBody_", function StBlockNode__generateMethodBody_(generator){
const self = this; if ((self.methodBodyHasNonLocalBlockReturn_(generator)).valueOf()) {generator.nonLocalReturnWrapperStart();
self['@statements'].do_((function StBlockNode__(statement){
generator.startStatement();
statement.generateOn_(generator);
return generator.endStatement();
}
));
generator.nonLocalReturnWrapperEnd()} else {self['@statements'].do_((function StBlockNode__(statement){
generator.startStatement();
statement.generateOn_(generator);
return generator.endStatement();
}
))};
return self;
}
, "generate", unescape("generateMethodBody%3A%20generator%0D%09%28self%20methodBodyHasNonLocalBlockReturn%3A%20generator%29%0D%09%09ifTrue%3A%20%5B%0D%09%09%09generator%20nonLocalReturnWrapperStart.%0D%09%09%09statements%20do%3A%0D%09%09%09%09%5B%3Astatement%20%7C%20%0D%09%09%09%09%09generator%20startStatement.%0D%09%09%09%09%09statement%20generateOn%3A%20generator.%0D%09%09%09%09%09generator%20endStatement%5D.%0D%09%09%09generator%20nonLocalReturnWrapperEnd%5D%0D%09%09ifFalse%3A%20%5B%0D%09%09%09statements%20do%3A%0D%09%09%09%09%5B%3Astatement%20%7C%20%0D%09%09%09%09%09generator%20startStatement.%0D%09%09%09%09%09statement%20generateOn%3A%20generator.%0D%09%09%09%09%09generator%20endStatement%5D%5D"));
smalltalk.bind(smalltalk.StBlockNode, unescape("generateOn%3A"), "generateOn_", function StBlockNode__generateOn_(generator){
const self = this; if ((self.returns()).not()) {self.returnLast()};
generator.blockFunction_((self.arguments()));
generator.startBlock();
generator.generateTemporaries_(self['@temporaries']);
self['@statements'].do_((function StBlockNode__(statement){
generator.startStatement();
statement.generateOn_(generator);
return generator.endStatement();
}
));
generator.endBlock();
return self;
}
, "generate", unescape("generateOn%3A%20generator%0D%09%28self%20returns%29%0D%09%09ifFalse%3A%20%5Bself%20returnLast%5D.%0D%09generator%20blockFunction%3A%20self%20arguments.%0D%09generator%20startBlock.%0D%09generator%20generateTemporaries%3A%20temporaries.%0D%09statements%20do%3A%0D%09%09%5B%3Astatement%20%7C%20%0D%09%09%09generator%20startStatement.%0D%09%09%09statement%20generateOn%3A%20generator.%0D%09%09%09generator%20endStatement%5D.%0D%09generator%20endBlock"));
smalltalk.bind(smalltalk.StBlockNode, unescape("bodyHasNonLocalBlockReturn%3A"), "bodyHasNonLocalBlockReturn_", function StBlockNode__bodyHasNonLocalBlockReturn_(generator){
var hasNonLocal = nil;
const self = this; hasNonLocal=false;
self['@statements'].do_((function StBlockNode__(each){
return hasNonLocal=(each.hasNonLocalBlockReturn_optimized_(generator,false)).or_((function StBlockNode__(){
return hasNonLocal;
}
));
}
));
return hasNonLocal;
}
, "testing", unescape("bodyHasNonLocalBlockReturn%3A%20generator%0D%09%22as%20we%20are%20now%20in%20a%20block%2C%20any%20return%20is%20non-local%22%0D%09%7C%20hasNonLocal%20%7C%0D%09hasNonLocal%20%3A%3D%20false.%0D%09statements%20do%3A%20%5B%3Aeach%20%7C%0D%09%09hasNonLocal%20%3A%3D%0D%09%09%09%28each%20hasNonLocalBlockReturn%3A%20generator%20optimized%3A%20false%29%0D%09%09%09%09or%3A%20%5BhasNonLocal%5D%5D.%0D%09%5EhasNonLocal"));
smalltalk.bind(smalltalk.StBlockNode, unescape("bodyHasNonLocalBlockReturn%3Aoptimized%3A"), "bodyHasNonLocalBlockReturn_optimized_", function StBlockNode__bodyHasNonLocalBlockReturn_optimized_(generator,optimized){
var hasNonLocal = nil;
const self = this; hasNonLocal=false;
self['@statements'].do_((function StBlockNode__(each){
return hasNonLocal=(each.hasNonLocalBlockReturn_optimized_(generator,optimized)).or_((function StBlockNode__(){
return hasNonLocal;
}
));
}
));
return hasNonLocal;
}
, "testing", unescape("bodyHasNonLocalBlockReturn%3A%20generator%20optimized%3A%20optimized%0D%09%7C%20hasNonLocal%20%7C%0D%09hasNonLocal%20%3A%3D%20false.%0D%09statements%20do%3A%20%5B%3Aeach%20%7C%0D%09%09hasNonLocal%20%3A%3D%0D%09%09%09%28each%20hasNonLocalBlockReturn%3A%20generator%20optimized%3A%20optimized%29%0D%09%09%09%09or%3A%20%5BhasNonLocal%5D%5D.%0D%09%5EhasNonLocal"));
smalltalk.bind(smalltalk.StBlockNode, unescape("canBeInlinedBlockValue"), "canBeInlinedBlockValue", function StBlockNode__canBeInlinedBlockValue(){
const self = this; return ((nil.is_eqeq_(self['@statements'].size(),(1)))).and_((function StBlockNode__(){
return (self['@statements'].first()).isExpression();
}
));
}
, "testing", unescape("canBeInlinedBlockValue%0D%09%5Estatements%20size%20%3D%3D%201%0D%09%09and%3A%20%5Bstatements%20first%20isExpression%5D"));
smalltalk.bind(smalltalk.StBlockNode, unescape("hasNonLocalBlockReturn%3A"), "hasNonLocalBlockReturn_", function StBlockNode__hasNonLocalBlockReturn_(generator){
var hasNonLocal = nil;
const self = this; if ((self.returns()).valueOf()) {hasNonLocal=true} else {hasNonLocal=self.bodyHasNonLocalBlockReturn_(generator)};
if ((hasNonLocal).valueOf()) {self.markNonLocalReturns()};
return hasNonLocal;
}
, "testing", unescape("hasNonLocalBlockReturn%3A%20generator%0D%09%22we%20are%20in%20a%20generic%20context%2C%20optimization%20has%20neither%20been%20confirmed%2C%20nor%20denied%22%0D%09%7C%20hasNonLocal%20%7C%0D%09%22We%20are%20not%20explicitely%20optimized%2C%20so%20any%20return%20is%20non-local%22%0D%09self%20returns%0D%09%09ifTrue%3A%20%5BhasNonLocal%20%3A%3D%20true%5D%0D%09%09ifFalse%3A%20%5BhasNonLocal%20%3A%3D%20self%20bodyHasNonLocalBlockReturn%3A%20generator%5D.%0D%09hasNonLocal%20ifTrue%3A%20%5Bself%20markNonLocalReturns%5D.%0D%09%5EhasNonLocal"));
smalltalk.bind(smalltalk.StBlockNode, unescape("hasNonLocalBlockReturn%3Aoptimized%3A"), "hasNonLocalBlockReturn_optimized_", function StBlockNode__hasNonLocalBlockReturn_optimized_(generator,optimized){
var hasNonLocal = nil;
const self = this; hasNonLocal=((self.returns()).and_((function StBlockNode__(){
return optimized.not();
}
))).or_((function StBlockNode__(){
return self.bodyHasNonLocalBlockReturn_optimized_(generator,optimized);
}
));
if ((hasNonLocal).valueOf()) {self.markNonLocalReturns()};
return hasNonLocal;
}
, "testing", unescape("hasNonLocalBlockReturn%3A%20generator%20optimized%3A%20optimized%0D%09%7C%20hasNonLocal%20%7C%0D%09hasNonLocal%20%3A%3D%20%28self%20returns%20and%3A%20%5Boptimized%20not%5D%29%0D%09%09or%3A%20%5Bself%20bodyHasNonLocalBlockReturn%3A%20generator%20optimized%3A%20optimized%5D.%0D%09hasNonLocal%20ifTrue%3A%20%5Bself%20markNonLocalReturns%5D.%0D%09%5EhasNonLocal"));
smalltalk.bind(smalltalk.StBlockNode, unescape("isBlockNode"), "isBlockNode", function StBlockNode__isBlockNode(){
const self = this; return true;
}
, "testing", unescape("isBlockNode%0D%09%5Etrue"));
smalltalk.bind(smalltalk.StBlockNode, unescape("isComplex"), "isComplex", function StBlockNode__isComplex(){
const self = this; self.halt();
return ((self['@statements'].size())._gt((1))).or_((function StBlockNode__(){
return ((self['@statements'].size())._eq((1))).and_((function StBlockNode__(){
return (self['@statements'].first()).isComplex();
}
));
}
));
}
, "testing", unescape("isComplex%0D%09self%20halt.%0D%09%5Estatements%20size%20%3E%201%20or%3A%20%5Bstatements%20size%20%3D%201%20and%3A%20%5Bstatements%20first%20isComplex%5D%5D"));
smalltalk.bind(smalltalk.StBlockNode, unescape("isExpression"), "isExpression", function StBlockNode__isExpression(){
const self = this; return false;
}
, "testing", unescape("isExpression%0D%09%22only%20an%20expression%20if%20invoked%2C%20not%20in%20optimized%20form%22%0D%09%5Efalse"));
smalltalk.bind(smalltalk.StBlockNode, unescape("isJust%3A"), "isJust_", function StBlockNode__isJust_(node){
const self = this; if ((self['@returns']).valueOf()) {return false};
return ((self['@statements'].size())._eq((1))).and_((function StBlockNode__(){
return (nil.is_eqeq_(self['@statements'].first(),node));
}
));
}
, "testing", unescape("isJust%3A%20node%0D%0D%09returns%20ifTrue%3A%20%5B%5Efalse%5D.%0D%09%5Estatements%20size%20%3D%201%20and%3A%20%5Bstatements%20first%20%3D%3D%20node%5D"));
smalltalk.bind(smalltalk.StBlockNode, unescape("markNonLocalReturns"), "markNonLocalReturns", function StBlockNode__markNonLocalReturns(){
const self = this; self['@statements'].do_((function StBlockNode__(each){
return each.markNonLocalReturns();
}
));
return self;
}
, "testing", unescape("markNonLocalReturns%0D%09statements%20do%3A%20%5B%3Aeach%20%7C%20each%20markNonLocalReturns%5D"));
smalltalk.bind(smalltalk.StBlockNode, unescape("methodBodyHasNonLocalBlockReturn%3A"), "methodBodyHasNonLocalBlockReturn_", function StBlockNode__methodBodyHasNonLocalBlockReturn_(generator){
var hasNonLocal = nil;
const self = this; hasNonLocal=false;
self['@statements'].do_((function StBlockNode__(each){
return hasNonLocal=(each.hasNonLocalBlockReturn_(generator)).or_((function StBlockNode__(){
return hasNonLocal;
}
));
}
));
return hasNonLocal;
}
, "testing", unescape("methodBodyHasNonLocalBlockReturn%3A%20generator%0D%09%22we%20are%20in%20a%20generic%20context%2C%20optimization%20has%20neither%20been%20confirmed%2C%20nor%20denied%22%0D%09%7C%20hasNonLocal%20%7C%0D%09hasNonLocal%20%3A%3D%20false.%0D%09statements%20do%3A%20%5B%3Aeach%20%7C%0D%09%09hasNonLocal%20%3A%3D%0D%09%09%09%28each%20hasNonLocalBlockReturn%3A%20generator%29%0D%09%09%09%09or%3A%20%5BhasNonLocal%5D%5D.%0D%09%5EhasNonLocal"));
smalltalk.bind(smalltalk.StBlockNode, unescape("returns"), "returns", function StBlockNode__returns(){
const self = this; return self['@returns'].or_((function StBlockNode__(){
return (self['@statements'].last()).isReturningIf();
}
));
}
, "testing", unescape("returns%0D%0D%09%5Ereturns%20or%3A%20%5Bstatements%20last%20isReturningIf%5D"));
smalltalk.StBlockNode.$klass.$iVarNames = [];
smalltalk.bind(smalltalk.StBlockNode.$klass, unescape("returnNil"), "returnNil", function StBlockNode_class__returnNil(){
const self = this; return (self.$$new()).returnNil();
}
, "instance creation", unescape("returnNil%0D%09%5E%20self%20new%20returnNil"));
smalltalk.bind(smalltalk.StBlockNode.$klass, unescape("withJust%3A"), "withJust_", function StBlockNode_class__withJust_(aNode){
const self = this; return (self.$$new()).statements_returns_((smalltalk.Array.with_(aNode)),false);
}
, "instance creation", unescape("withJust%3A%20aNode%0D%09%5E%20self%20new%20statements%3A%20%28Array%20with%3A%20aNode%29%20returns%3A%20false"));
smalltalk.addClass("StCascadeNode", smalltalk.StParseNode, ['receiver', 'messages'], 'Compiler-JS');
smalltalk.StCascadeNode.$classVariableNames=("");
smalltalk.bind(smalltalk.StCascadeNode, unescape("messages"), "messages", function StCascadeNode__messages(){
const self = this; return self['@messages'];
}
, "accessing", unescape("messages%0D%09%5Emessages"));
smalltalk.bind(smalltalk.StCascadeNode, unescape("receiver"), "receiver", function StCascadeNode__receiver(){
const self = this; return self['@receiver'];
}
, "accessing", unescape("receiver%0D%09%5Ereceiver"));
smalltalk.bind(smalltalk.StCascadeNode, unescape("hasNonLocalBlockReturn%3A"), "hasNonLocalBlockReturn_", function StCascadeNode__hasNonLocalBlockReturn_(generator){
var hasNonLocal = nil;
const self = this; hasNonLocal=self['@receiver'].hasNonLocalBlockReturn_(generator);
self['@messages'].do_((function StCascadeNode__(each){
return hasNonLocal=(each.hasNonLocalBlockReturn_(generator)).or_((function StCascadeNode__(){
return hasNonLocal;
}
));
}
));
if ((hasNonLocal).valueOf()) {self.markNonLocalReturns()};
return hasNonLocal;
}
, "testing", unescape("hasNonLocalBlockReturn%3A%20generator%0D%09%22we%20are%20in%20a%20generic%20context%2C%20optimization%20has%20neither%20been%20confirmed%2C%20nor%20denied%22%0D%09%7C%20hasNonLocal%20%7C%0D%09hasNonLocal%20%3A%3D%20receiver%20hasNonLocalBlockReturn%3A%20generator.%0D%09messages%20do%3A%20%5B%3Aeach%20%7C%20%0D%09%09hasNonLocal%20%3A%3D%20%28each%20hasNonLocalBlockReturn%3A%20generator%29%20or%3A%20%5BhasNonLocal%5D%5D.%0D%09hasNonLocal%20ifTrue%3A%20%5Bself%20markNonLocalReturns%5D.%0D%09%5EhasNonLocal"));
smalltalk.bind(smalltalk.StCascadeNode, unescape("hasNonLocalBlockReturn%3Aoptimized%3A"), "hasNonLocalBlockReturn_optimized_", function StCascadeNode__hasNonLocalBlockReturn_optimized_(generator,parentOptimized){
var hasNonLocal = nil;
const self = this; hasNonLocal=self['@receiver'].hasNonLocalBlockReturn_optimized_(generator,parentOptimized);
self['@messages'].do_((function StCascadeNode__(each){
return hasNonLocal=(each.hasNonLocalBlockReturn_optimized_(generator,parentOptimized)).or_((function StCascadeNode__(){
return hasNonLocal;
}
));
}
));
if ((hasNonLocal).valueOf()) {self.markNonLocalReturns()};
return hasNonLocal;
}
, "testing", unescape("hasNonLocalBlockReturn%3A%20generator%20optimized%3A%20parentOptimized%0D%09%22we%20are%20in%20a%20generic%20context%2C%20optimization%20has%20neither%20been%20confirmed%2C%20nor%20denied%22%0D%09%7C%20hasNonLocal%20%7C%0D%09hasNonLocal%20%3A%3D%20receiver%20hasNonLocalBlockReturn%3A%20generator%20optimized%3A%20parentOptimized.%0D%09messages%20do%3A%20%5B%3Aeach%20%7C%20%0D%09%09hasNonLocal%20%3A%3D%20%28each%20hasNonLocalBlockReturn%3A%20generator%20optimized%3A%20parentOptimized%29%20or%3A%20%5BhasNonLocal%5D%5D.%0D%09hasNonLocal%20ifTrue%3A%20%5Bself%20markNonLocalReturns%5D.%0D%09%5EhasNonLocal"));
smalltalk.bind(smalltalk.StCascadeNode, unescape("markNonLocalReturns"), "markNonLocalReturns", function StCascadeNode__markNonLocalReturns(){
const self = this; self['@receiver'].markNonLocalReturns();
self['@messages'].do_((function StCascadeNode__(each){
return each.markNonLocalReturns();
}
));
return self;
}
, "testing", unescape("markNonLocalReturns%0D%09receiver%20markNonLocalReturns.%0D%09messages%20do%3A%20%5B%3Aeach%20%7C%20each%20markNonLocalReturns%5D"));
smalltalk.bind(smalltalk.StCascadeNode, unescape("receiver%3Amessages%3A"), "receiver_messages_", function StCascadeNode__receiver_messages_(receivingObject,msgs){
const self = this; self['@receiver']=receivingObject;
self['@messages']=msgs;
return self;
}
, "initialize-release", unescape("receiver%3A%20receivingObject%20messages%3A%20msgs%0D%09%22%20Transcript%20show%3A%20%27abc%27%3B%20cr%3B%20show%3A%20%27def%27%20%22%0D%0D%09receiver%20%3A%3D%20receivingObject.%0D%09messages%20%3A%3D%20msgs"));
smalltalk.bind(smalltalk.StCascadeNode, unescape("generateOn%3A"), "generateOn_", function StCascadeNode__generateOn_(generator){
const self = this; generator.asLocalFunctionInvocation_with_(self['@messages'],self['@receiver']);
return self;
}
, "generate", unescape("generateOn%3A%20generator%0D%09generator%20asLocalFunctionInvocation%3A%20messages%20with%3A%20receiver"));
smalltalk.addClass("StCommentNode", smalltalk.StParseNode, [], 'Compiler-JS');
smalltalk.StCommentNode.$classVariableNames=("");
smalltalk.addClass("StEncoder", smalltalk.StParseNode, ['scopeTable', 'nTemps', 'supered', 'requestor', 'selector', 'sourceRanges', 'globalSourceRanges', 'cue'], 'Compiler-JS');
smalltalk.StEncoder.$classVariableNames=("");
smalltalk.bind(smalltalk.StEncoder, unescape("cantStoreInto%3A"), "cantStoreInto_", function StEncoder__cantStoreInto_(varName){
const self = this; return smalltalk.StEncoder.classVariableAt_("StdVariables").includesKey_(varName);
}
, "encoding", unescape("cantStoreInto%3A%20varName%0D%0D%09%5EStdVariables%20includesKey%3A%20varName"));
smalltalk.bind(smalltalk.StEncoder, unescape("doItInContextName"), "doItInContextName", function StEncoder__doItInContextName(){
const self = this; return "ThisContext";
}
, "encoding", unescape("doItInContextName%0D%09%5E%27ThisContext%27"));
smalltalk.bind(smalltalk.StEncoder, unescape("encodeCharacterLiteral%3A"), "encodeCharacterLiteral_", function StEncoder__encodeCharacterLiteral_(object){
const self = this; return (smalltalk.StLiteralNode.$$new()).name_key_(object,(self['@cue'].literalScannedAs_notifying_(object,self)));
}
, "encoding", unescape("encodeCharacterLiteral%3A%20object%0D%09%5EStLiteralNode%20new%0D%09%09name%3A%20object%0D%09%09key%3A%20%28cue%20%20literalScannedAs%3A%20object%20notifying%3A%20self%29"));
smalltalk.bind(smalltalk.StEncoder, unescape("encodeLiteral%3A"), "encodeLiteral_", function StEncoder__encodeLiteral_(object){
const self = this; return (smalltalk.StLiteralNode.$$new()).name_key_(object,(self['@cue'].literalScannedAs_notifying_(object,self)));
}
, "encoding", unescape("encodeLiteral%3A%20object%0D%09%5EStLiteralNode%20new%0D%09%09name%3A%20object%0D%09%09key%3A%20%28cue%20%20literalScannedAs%3A%20object%20notifying%3A%20self%29"));
smalltalk.bind(smalltalk.StEncoder, unescape("encodeLiteralLiteral%3A"), "encodeLiteralLiteral_", function StEncoder__encodeLiteralLiteral_(object){
const self = this; return (smalltalk.StLiteralNode.$$new()).name_key_(object,object);
}
, "encoding", unescape("encodeLiteralLiteral%3A%20object%0D%09%5EStLiteralNode%20new%0D%09%09name%3A%20object%0D%09%09key%3A%20object"));
smalltalk.bind(smalltalk.StEncoder, unescape("encodeNumberLiteral%3A"), "encodeNumberLiteral_", function StEncoder__encodeNumberLiteral_(object){
const self = this; return (smalltalk.StLiteralNode.$$new()).name_key_(object,object);
}
, "encoding", unescape("encodeNumberLiteral%3A%20object%0D%09%5EStLiteralNode%20new%0D%09%09name%3A%20object%0D%09%09key%3A%20object"));
smalltalk.bind(smalltalk.StEncoder, unescape("encodeSelector%3A"), "encodeSelector_", function StEncoder__encodeSelector_(aSelector){
const self = this; return (smalltalk.StSelectorNode.$$new()).name_key_(aSelector,aSelector);
}
, "encoding", unescape("encodeSelector%3A%20aSelector%0D%09%5EStSelectorNode%20new%20%0D%09%09name%3A%20aSelector%0D%09%09key%3A%20aSelector"));
smalltalk.bind(smalltalk.StEncoder, unescape("encodeStringLiteral%3A"), "encodeStringLiteral_", function StEncoder__encodeStringLiteral_(object){
const self = this; return (smalltalk.StLiteralNode.$$new()).name_key_(object,object);
}
, "encoding", unescape("encodeStringLiteral%3A%20object%0D%09%5EStLiteralNode%20new%0D%09%09name%3A%20object%0D%09%09key%3A%20object"));
smalltalk.bind(smalltalk.StEncoder, unescape("encodeVariable%3A"), "encodeVariable_", function StEncoder__encodeVariable_(name){
const self = this; return self.encodeVariable_sourceRange_ifUnknown_(name,nil,(function StEncoder__(){
return self.undeclared_(name);
}
));
}
, "encoding", unescape("encodeVariable%3A%20name%0D%09%5E%20self%20encodeVariable%3A%20name%20sourceRange%3A%20nil%20ifUnknown%3A%20%5B%20self%20undeclared%3A%20name%20%5D"));
smalltalk.bind(smalltalk.StEncoder, unescape("encodeVariable%3AifUnknown%3A"), "encodeVariable_ifUnknown_", function StEncoder__encodeVariable_ifUnknown_(name,action){
const self = this; return self.encodeVariable_sourceRange_ifUnknown_(name,nil,action);
}
, "encoding", unescape("encodeVariable%3A%20name%20ifUnknown%3A%20action%0D%09%5Eself%20encodeVariable%3A%20name%20sourceRange%3A%20nil%20ifUnknown%3A%20action"));
smalltalk.bind(smalltalk.StEncoder, unescape("encodeVariable%3AsourceRange%3AifUnknown%3A"), "encodeVariable_sourceRange_ifUnknown_", function StEncoder__encodeVariable_sourceRange_ifUnknown_(name,range,action){
var varNode = nil;
const self = this; var $early={name:"stReturn"};
try {
varNode=self['@scopeTable'].at_ifAbsent_(name,(function StEncoder__(){
return self.lookupInPools_(name);
}
));
(function(){var $1$; $1$ = varNode; if (nil.isNil_($1$)) { return (function StEncoder__(){
$early.result=action.value(); throw ($early);
}
)() } else { return $1$; }})();
(function(){var $2$; $2$ = range; if (!nil.isNil_($2$)) { return ((name.first()).isUppercase()).ifTrue_((function StEncoder__(){
return self['@globalSourceRanges'].addLast_((smalltalk.Array.with_with_with_(name,range,false)));
}
)) } else { return $2$; }})();
if (((varNode.isTemp()).and_((function StEncoder__(){
return (varNode.scope())._lt((0));
}
))).valueOf()) {if ((smalltalk.StCompileException.signal()).valueOf()) {return action.value()} else {return self.notify_("out of scope")}};
return varNode;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "encoding", unescape("encodeVariable%3A%20name%20sourceRange%3A%20range%20ifUnknown%3A%20action%0D%09%7C%20varNode%20%7C%0D%22%09varNode%20%3A%3D%20scopeTable%0D%09%09%09%09%09at%3A%20name%0D%09%09%09%09%09ifAbsent%3A%20%0D%09%09%09%09%09%09%5B%28self%20lookupInPools%3A%20name%20%0D%09%09%09%09%09%09%09ifFound%3A%20%5B%3Aassoc%20%7C%20varNode%20%3A%3D%20self%20global%3A%20assoc%20name%3A%20name%5D%29%0D%09%09%09%09%09%09%09ifTrue%3A%20%5BvarNode%5D%0D%09%09%09%09%09%09%09ifFalse%3A%20%5B%5Eaction%20value%5D%5D.%22%0D%09varNode%20%3A%3D%20scopeTable%20at%3A%20name%20ifAbsent%3A%20%5Bself%20lookupInPools%3A%20name%5D.%0D%09varNode%20ifNil%3A%20%5B%5Eaction%20value%5D.%0D%0D%09range%20ifNotNil%3A%0D%09%09%5Bname%20first%20isUppercase%20ifTrue%3A%0D%09%09%09%5BglobalSourceRanges%20addLast%3A%20%28Array%20with%3A%20name%20with%3A%20range%20with%3A%20false%29%5D%5D.%0D%0D%09%28varNode%20isTemp%20and%3A%20%5BvarNode%20scope%20%3C%200%5D%29%20ifTrue%3A%0D%09%09%5B%5E%22OutOfScopeNotification%22%20StCompileException%20signal%0D%09%09%09ifTrue%3A%20%5Baction%20value%5D%0D%09%09%09ifFalse%3A%20%5Bself%20notify%3A%20%27out%20of%20scope%27%5D%5D.%0D%09%5EvarNode"));
smalltalk.bind(smalltalk.StEncoder, unescape("environment"), "environment", function StEncoder__environment(){
const self = this; return self['@cue'].environment();
}
, "encoding", unescape("environment%0D%09%22Answer%20the%20environment%20of%20the%20current%20compilation%20context%2C%0D%09%20be%20it%20in%20a%20class%20or%20global%20%28e.g.%20a%20workspace%29%22%0D%09%5Ecue%20environment"));
smalltalk.bind(smalltalk.StEncoder, unescape("undeclared%3A"), "undeclared_", function StEncoder__undeclared_(name){
var undeclared = nil;
var symbol = nil;
const self = this; symbol=name.asSymbol();
undeclared=(self['@cue'].environment()).undeclare_((name.asSymbol()));
(function(){var $1$; $1$ = undeclared; if (nil.isNil_($1$)) { return self.notify_(("Undeclared variable: "._comma(name))) } else { return $1$; }})();
return (smalltalk.StUndeclaredVariableNode.$$new()).name_key_(symbol,undeclared);
}
, "encoding", unescape("undeclared%3A%20name%20%0D%09%7C%20undeclared%20symbol%20%7C%0D%09symbol%20%3A%3D%20name%20asSymbol.%0D%09undeclared%20%3A%3D%20cue%20environment%20undeclare%3A%20name%20asSymbol.%0D%09undeclared%20ifNil%3A%20%5Bself%20notify%3A%20%27Undeclared%20variable%3A%20%27%20%2C%20name%5D.%0D%09%5EStUndeclaredVariableNode%20new%0D%09%09name%3A%20symbol%0D%09%09key%3A%20undeclared"));
smalltalk.bind(smalltalk.StEncoder, unescape("notify%3A"), "notify_", function StEncoder__notify_(string){
const self = this; smalltalk.StCompileException.signal_(string);
return self;
}
, "error handling", unescape("notify%3A%20string%0D%09%22Put%20a%20separate%20notifier%20on%20top%20of%20the%20requestor%27s%20window%22%0D%09StCompileException%20signal%3A%20string"));
smalltalk.bind(smalltalk.StEncoder, unescape("notify%3Aat%3A"), "notify_at_", function StEncoder__notify_at_(string,location){
var req = nil;
const self = this; self.halt();
if (((nil.is_eqeq_(self['@requestor'],nil))).not()) {req=self['@requestor'];
self.release();
req.notify_at_(string,location)};
return false;
}
, "error handling", unescape("notify%3A%20string%20at%3A%20location%0D%0D%09%7C%20req%20%7C%0D%09self%20halt.%0D%09requestor%20%3D%3D%20nil%0D%09%09ifFalse%3A%20%0D%09%09%09%5Breq%20%3A%3D%20requestor.%0D%09%09%09self%20release.%0D%09%09%09req%20notify%3A%20string%20at%3A%20location%5D.%0D%09%5Efalse"));
smalltalk.bind(smalltalk.StEncoder, unescape("init%3Anotifying%3A"), "init_notifying_", function StEncoder__init_notifying_(aCue,anObject){
const self = this; self.setCue_(aCue);
self['@nTemps']=(0);
self['@supered']=false;
self.initScopeAndLiteralTables();
(self['@cue'].getClass()).variablesDo_((function StEncoder__(variableName){
return self['@scopeTable'].at_put_(variableName,((smalltalk.StInstanceVariableNode.$$new()).name_(variableName)));
}
));
self['@sourceRanges']=smalltalk.Dictionary.new_((32));
self['@globalSourceRanges']=smalltalk.OrderedCollection.new_((32));
return self;
}
, "initialize-release", unescape("init%3A%20aCue%20notifying%3A%20anObject%0D%0D%09self%20setCue%3A%20aCue.%0D%09nTemps%20%3A%3D%200.%0D%09supered%20%3A%3D%20false.%0D%09self%20initScopeAndLiteralTables.%0D%09cue%20getClass%20variablesDo%3A%0D%09%09%5B%3AvariableName%7C%0D%09%09scopeTable%0D%09%09%09at%3A%20variableName%0D%09%09%09put%3A%20%28StInstanceVariableNode%20new%20name%3A%20variableName%29%5D.%0D%09sourceRanges%20%3A%3D%20Dictionary%20new%3A%2032.%0D%09globalSourceRanges%20%3A%3D%20OrderedCollection%20new%3A%2032%0D"));
smalltalk.bind(smalltalk.StEncoder, unescape("initScopeAndLiteralTables"), "initScopeAndLiteralTables", function StEncoder__initScopeAndLiteralTables(){
const self = this; self['@scopeTable']=smalltalk.StEncoder.classVariableAt_("StdVariables").deepCopy();
self['@scopeTable'].do_((function StEncoder__(varNode){
return varNode.comment_(nil);
}
));
return self;
}
, "initialize-release", unescape("initScopeAndLiteralTables%0D%0D%09scopeTable%20%3A%3D%20StdVariables%20deepCopy.%0D%09%22comments%20can%20be%20left%20hanging%20on%20nodes%20from%20previous%20compilations.%0D%09%20probably%20better%20than%20this%20hack%20fix%20is%20to%20create%20the%20nodes%20afresh%20on%20each%20compilation.%22%0D%09scopeTable%20do%3A%0D%09%09%5B%3AvarNode%7C%20varNode%20comment%3A%20nil%5D"));
smalltalk.bind(smalltalk.StEncoder, unescape("noteSuper"), "noteSuper", function StEncoder__noteSuper(){
const self = this; self['@supered']=true;
return self;
}
, "initialize-release", unescape("noteSuper%0D%0D%09supered%20%3A%3D%20true"));
smalltalk.bind(smalltalk.StEncoder, unescape("release"), "release", function StEncoder__release(){
const self = this; self['@requestor']=nil;
return self;
}
, "initialize-release", unescape("release%0D%0D%09requestor%20%3A%3D%20nil"));
smalltalk.bind(smalltalk.StEncoder, unescape("tempsAndBlockArgs"), "tempsAndBlockArgs", function StEncoder__tempsAndBlockArgs(){
var tempNodes = nil;
const self = this; tempNodes=smalltalk.OrderedCollection.$$new();
self['@scopeTable'].associationsDo_((function StEncoder__(assn){
var $$var = nil;
$$var=assn.value();
if ((($$var.isTemp()).and_((function StEncoder__(){
return (($$var.isMethodArg()).not()).and_((function StEncoder__(){
return (($$var.scope())._eq((0))).or_((function StEncoder__(){
return ($$var.scope())._eq((-1));
}
));
}
));
}
))).valueOf()) {return tempNodes.add_($$var)} else {return nil};
}
));
return tempNodes;
}
, "results", unescape("tempsAndBlockArgs%0D%09%7C%20tempNodes%20%7C%0D%09tempNodes%20%3A%3D%20OrderedCollection%20new.%0D%09scopeTable%20associationsDo%3A%0D%09%09%5B%3Aassn%20%7C%20%7C%20var%20%7C%0D%09%09var%20%3A%3D%20assn%20value.%0D%09%09%28var%20isTemp%0D%09%09%20and%3A%20%5Bvar%20isMethodArg%20not%0D%09%09%20and%3A%20%5Bvar%20scope%20%3D%200%20or%3A%20%5Bvar%20scope%20%3D%20-1%5D%5D%5D%29%20ifTrue%3A%0D%09%09%09%5BtempNodes%20add%3A%20var%5D%5D.%0D%09%5EtempNodes"));
smalltalk.bind(smalltalk.StEncoder, unescape("undeclaredTemps"), "undeclaredTemps", function StEncoder__undeclaredTemps(){
const self = this; return (self['@scopeTable'].select_((function StEncoder__($$var){
return ($$var.isVariableNode()).and_((function StEncoder__(){
return $$var.isUndeclared();
}
));
}
))).values();
}
, "results", unescape("undeclaredTemps%20%0D%09%5E%28scopeTable%20select%3A%20%5B%3Avar%20%7C%20var%20isVariableNode%20and%3A%20%5Bvar%20isUndeclared%5D%5D%29%20values"));
smalltalk.bind(smalltalk.StEncoder, unescape("unusedTempNames"), "unusedTempNames", function StEncoder__unusedTempNames(){
var unused = nil;
const self = this; unused=smalltalk.OrderedCollection.$$new();
self['@scopeTable'].associationsDo_((function StEncoder__(assn){
var name = nil;
if (((assn.value()).isUnusedTemp()).valueOf()) {name=(assn.value()).key();
if ((name._no_eq((self.doItInContextName()))).valueOf()) {return unused.add_(name)} else {return nil}} else {return nil};
}
));
return unused;
}
, "results", unescape("unusedTempNames%20%0D%09%7C%20unused%20%7C%0D%09unused%20%3A%3D%20OrderedCollection%20new.%0D%09scopeTable%20associationsDo%3A%0D%09%09%5B%3Aassn%20%7C%20%7C%20name%20%7C%0D%09%09%28assn%20value%20isUnusedTemp%29%20ifTrue%3A%0D%09%09%09%5Bname%20%3A%3D%20assn%20value%20key.%0D%09%09%09%20name%20%7E%3D%20self%20doItInContextName%20ifTrue%3A%20%5Bunused%20add%3A%20name%5D%5D%5D.%0D%09%5E%20unused"));
smalltalk.bind(smalltalk.StEncoder, unescape("globalSourceRanges"), "globalSourceRanges", function StEncoder__globalSourceRanges(){
const self = this; return self['@globalSourceRanges'];
}
, "source mapping", unescape("globalSourceRanges%0D%0D%09%5E%20globalSourceRanges"));
smalltalk.bind(smalltalk.StEncoder, unescape("noteSourceRange%3AforNode%3A"), "noteSourceRange_forNode_", function StEncoder__noteSourceRange_forNode_(range,node){
const self = this; self['@sourceRanges'].at_put_(node,range);
return self;
}
, "source mapping", unescape("noteSourceRange%3A%20range%20forNode%3A%20node%0D%0D%09sourceRanges%20at%3A%20node%20put%3A%20range"));
smalltalk.bind(smalltalk.StEncoder, unescape("rawSourceRanges"), "rawSourceRanges", function StEncoder__rawSourceRanges(){
const self = this; return self['@sourceRanges'];
}
, "source mapping", unescape("rawSourceRanges%0D%0D%09%5E%20sourceRanges%20"));
smalltalk.bind(smalltalk.StEncoder, unescape("sourceMap"), "sourceMap", function StEncoder__sourceMap(){
const self = this; return ((self['@sourceRanges'].keys()).collect_((function StEncoder__(key){
return smalltalk.Association.key_value_((key.pc()),(self['@sourceRanges'].at_(key)));
}
))).asSortedCollection();
}
, "source mapping", unescape("sourceMap%0D%09%22Answer%20with%20a%20sorted%20set%20of%20associations%20%28pc%20range%29.%22%0D%0D%09%5E%20%28sourceRanges%20keys%20collect%3A%20%0D%09%09%5B%3Akey%20%7C%20%20Association%20key%3A%20key%20pc%20value%3A%20%28sourceRanges%20at%3A%20key%29%5D%29%0D%09%09%09asSortedCollection"));
smalltalk.bind(smalltalk.StEncoder, unescape("sourceRangeFor%3A"), "sourceRangeFor_", function StEncoder__sourceRangeFor_(node){
const self = this; return self['@sourceRanges'].at_(node);
}
, "source mapping", unescape("sourceRangeFor%3A%20node%0D%0D%09%5EsourceRanges%20at%3A%20node"));
smalltalk.bind(smalltalk.StEncoder, unescape("autoBind%3A"), "autoBind_", function StEncoder__autoBind_(name){
var node = nil;
const self = this; var $early={name:"stReturn"};
try {
node=self['@scopeTable'].at_ifAbsent_(name,(function StEncoder__(){
if ((self.lookupInPools_ifFound_(name,(function StEncoder__(assoc){
return assoc;
}
))).valueOf()) {self.warnAboutShadowed_(name)};
$early.result=(((self.reallyBind_(name)).nowHasDef()).nowHasRef()).scope_((1)); throw ($early);
}
));
if ((node.isTemp()).valueOf()) {if (((node.scope())._gt_eq((0))).valueOf()) {return self.notify_((((((unescape("Name%20%22")._comma(name))._comma(unescape("%22already%20used%20in%20this%20method%3A%20")))._comma(((self['@cue'].getClass()).name())))._comma(unescape("%3E%3E")))._comma(self['@selector'])))};
((node.nowHasDef()).nowHasRef()).scope_((1))} else {return self.notify_(((unescape("Name%20%22")._comma(name))._comma(unescape("%22%20already%20used%20in%20this%20class"))))};
return node;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "temps", unescape("autoBind%3A%20name%20%0D%09%22Declare%20a%20block%20argument%20as%20a%20temp%20if%20not%20already%20declared.%22%0D%09%7C%20node%20%7C%0D%09node%20%3A%3D%20scopeTable%20%0D%09%09%09at%3A%20name%0D%09%09%09ifAbsent%3A%20%0D%09%09%09%09%5B%28self%20lookupInPools%3A%20name%20ifFound%3A%20%5B%3Aassoc%20%7C%20assoc%5D%29%0D%09%09%09%09%09ifTrue%3A%20%5Bself%20warnAboutShadowed%3A%20name%5D.%0D%09%09%09%09%5E%20%28self%20reallyBind%3A%20name%29%20nowHasDef%20nowHasRef%20scope%3A%201%5D.%0D%09node%20isTemp%0D%09%09ifTrue%3A%20%5Bnode%20scope%20%3E%3D%200%20ifTrue%3A%0D%09%09%09%09%09%5B%5E%20self%20notify%3A%20%27Name%20%22%27%2C%20name%20%2C%20%27%22already%20used%20in%20this%20method%3A%20%27%20%2C%20cue%20getClass%20name%20%2C%20%27%3E%3E%27%2C%20selector%5D.%0D%09%09%09%09node%20nowHasDef%20nowHasRef%20scope%3A%201%5D%0D%09%09ifFalse%3A%20%5B%5E%20self%20notify%3A%20%27Name%20%22%27%20%2C%20name%20%2C%20%27%22%20already%20used%20in%20this%20class%27%5D.%0D%09%5Enode"));
smalltalk.bind(smalltalk.StEncoder, unescape("bindArg%3A"), "bindArg_", function StEncoder__bindArg_(name){
var node = nil;
const self = this; if ((self['@nTemps']._gt_eq((15))).valueOf()) {return self.notify_("Too many arguments")};
node=self.bindTemp_(name);
return (node.nowHasDef()).nowHasRef();
}
, "temps", unescape("bindArg%3A%20name%20%0D%09%22Declare%20an%20argument.%22%0D%09%7C%20node%20%7C%0D%09nTemps%20%3E%3D%2015%0D%09%09ifTrue%3A%20%5B%5Eself%20notify%3A%20%27Too%20many%20arguments%27%5D.%0D%09node%20%3A%3D%20self%20bindTemp%3A%20name.%0D%09%5E%20node%20nowHasDef%20nowHasRef"));
smalltalk.bind(smalltalk.StEncoder, unescape("bindBlockArg%3Awithin%3A"), "bindBlockArg_within_", function StEncoder__bindBlockArg_within_(name,aBlockNode){
const self = this; return self.autoBind_(name);
}
, "temps", unescape("bindBlockArg%3A%20name%20within%3A%20aBlockNode%0D%09%22With%20standard%20Smalltalk-80%20%28BlueBook%29%20blocks%20it%20used%20to%20be%20legal%20to%20use%20a%0D%09%20method%20temp%20as%20a%20block%20argument.%20%20This%20shouldn%27t%20be%20the%20case%20with%20the%0D%09%20current%20compiler%2C%20which%20checks%20for%20temp%20names%20already%20being%20used%20as%0D%09%20block%20arguments.%20%20But%20it%20is%20easily%20fooled%20by%20local%20block%20temps%20in%20optimized%0D%09%20blocks%2C%20e.g.%0D%09%09false%0D%09%09%09ifTrue%3A%20%5B%7C%20temp%20%7C%5D%0D%09%09%09ifFalse%3A%5B%5B%3Atemp%7C%5D%5D%0D%09Rather%20than%20fix%20this%20we%20keep%20the%20semantics%20and%20fix%20it%20in%20the%20closure%20compiler.%22%0D%09%5Eself%20autoBind%3A%20name"));
smalltalk.bind(smalltalk.StEncoder, unescape("bindBlockTemp%3A"), "bindBlockTemp_", function StEncoder__bindBlockTemp_(name){
var node = nil;
const self = this; var $early={name:"stReturn"};
try {
node=self['@scopeTable'].at_ifAbsent_(name,(function StEncoder__(){
$early.result=self.reallyBind_(name); throw ($early);
}
));
if ((node.isTemp()).valueOf()) {if (((node.scope())._gt_eq((0))).valueOf()) {return self.notify_(((unescape("Name%20%22")._comma(name))._comma(unescape("%22%20already%20used%20in%20this%20method"))))};
node.scope_((0))} else {return self.notify_(((unescape("Name%20%22")._comma(name))._comma(unescape("%22%20already%20used%20in%20this%20class"))))};
return node;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "temps", unescape("bindBlockTemp%3A%20name%20%0D%09%22Declare%20a%20temporary%20block%20variable%3B%20complain%20if%20it%27s%20not%20a%20field%20or%20class%20variable.%22%0D%0D%09%7C%20node%20%7C%0D%0D%09node%20%3A%3D%20scopeTable%20at%3A%20name%20ifAbsent%3A%20%5B%5Eself%20reallyBind%3A%20name%5D.%0D%09node%20isTemp%0D%09%09ifTrue%3A%20%5B%0D%09%09%09node%20scope%20%3E%3D%200%20ifTrue%3A%20%5B%5E%20self%20notify%3A%20%27Name%20%22%27%20%2C%20name%20%2C%20%27%22%20already%20used%20in%20this%20method%27%5D.%0D%09%09%09node%20scope%3A%200%5D%0D%09%09ifFalse%3A%20%5B%5Eself%20notify%3A%20%27Name%20%22%27%20%2C%20name%20%2C%20%27%22%20already%20used%20in%20this%20class%27%5D.%0D%09%5Enode%0D"));
smalltalk.bind(smalltalk.StEncoder, unescape("bindBlockTemp%3Awithin%3A"), "bindBlockTemp_within_", function StEncoder__bindBlockTemp_within_(name,aBlockNode){
const self = this; return self.bindBlockTemp_(name);
}
, "temps", unescape("bindBlockTemp%3A%20name%20within%3A%20aBlockNode%0D%09%22The%20BlockContext%20compiler%20%28the%20Smalltalk-80%20BlueBook%20compiler%29%0D%09%20does%20provide%20support%20for%20ANSI%20block%20syntax%2C%20but%20not%20for%20ANSI%20block%0D%09%20semantics.%20%20Here%20all%20temps%20live%20at%20the%20same%20level%2C%20the%20method%20level.%0D%09%20The%20approach%20taken%20to%20two%20block-local%20temps%20in%20different%20blocks%20is%20to%0D%09%20merge%20them%20into%20a%20single%20temp.%20%20e.g.%0D%09%09expr%0D%09%09%09ifTrue%3A%20%5B%7Ctemp%7C%20self%20statementOne%5D%0D%09%09%09ifFalse%3A%20%5B%7Ctemp%7C%20self%20statementTwo%5D%0D%09%20is%20effectvely%20transformed%20into%0D%09%09%7C%20temp%20%7C%0D%09%09expr%0D%09%09%09ifTrue%3A%20%5Bself%20statementOne%5D%0D%09%09%09ifFalse%3A%20%5Bself%20statementTwo%5D%0D%09%20and%0D%09%09expr%20do%3A%20%5B%3Aeach%7C%20%7C%20temp%20%7C%20...%5D.%0D%09%09expr%20do%3A%20%5B%3Aeach%7C%20%7C%20temp%20%7C%20...%5D.%0D%09%20is%20also%20effectively%20transformed%20into%0D%09%09%7C%20temp%20%7C%0D%09%09expr%20do%3A%20%5B%3Aeach%7C%20%20...%5D.%0D%09%09expr%20do%3A%20%5B%3Aeach%7C%20...%5D.%0D%0D%09%20The%20closure%20compiler%20treats%20the%20former%20similarly%2C%20but%20not%20the%20latter.%0D%09%20The%20indirection%20through%20%23bindBlockTemp%3Awithin%3A%20allows%20the%20closure%20StEncoder%20to%20do%20this.%22%0D%09%5Eself%20bindBlockTemp%3A%20name"));
smalltalk.bind(smalltalk.StEncoder, unescape("bindTemp%3A"), "bindTemp_", function StEncoder__bindTemp_(name){
const self = this; var $early={name:"stReturn"};
try {
self['@scopeTable'].at_ifPresent_(name,(function StEncoder__(node){
if ((node.isTemp()).valueOf()) {$early.result=self.notify_(((unescape("Name%20%22")._comma(name))._comma(unescape("%22%20already%20used%20in%20this%20method")))); throw ($early)} else {return self.warnAboutShadowed_(name)};
}
));
return self.reallyBind_(name);
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "temps", unescape("bindTemp%3A%20name%20%0D%09%22Declare%20a%20temporary%3B%20error%20not%20if%20a%20field%20or%20class%20variable.%22%0D%09scopeTable%20at%3A%20name%20ifPresent%3A%5B%3Anode%7C%0D%09%09%22When%20non-interactive%20raise%20the%20error%20only%20if%20its%20a%20duplicate%22%0D%09%09node%20isTemp%0D%09%09%09ifTrue%3A%5B%5Eself%20notify%3A%20%27Name%20%22%27%20%2C%20name%20%2C%20%27%22%20already%20used%20in%20this%20method%27%5D%0D%09%09%09ifFalse%3A%5Bself%20warnAboutShadowed%3A%20name%5D%5D.%0D%09%5Eself%20reallyBind%3A%20name"));
smalltalk.bind(smalltalk.StEncoder, unescape("bindTemp%3Ain%3A"), "bindTemp_in_", function StEncoder__bindTemp_in_(name,methodSelector){
const self = this; var $early={name:"stReturn"};
try {
self['@scopeTable'].at_ifPresent_(name,(function StEncoder__(node){
if ((node.isTemp()).valueOf()) {$early.result=self.notify_(((unescape("Name%20%22")._comma(name))._comma(unescape("%22%20already%20used%20in%20this%20method")))); throw ($early)} else {return smalltalk.Transcript.show_(((((((unescape("%28")._comma(name))._comma(unescape("%20is%20shadowed%20in%20%22")))._comma(((self['@cue'].getClass()).printString())))._comma(unescape("%3E%3E")))._comma((methodSelector.printString())))._comma(unescape("%22%29"))))};
}
));
return self.reallyBind_(name);
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "temps", unescape("bindTemp%3A%20name%20in%3A%20methodSelector%0D%09%22Declare%20a%20temporary%3B%20error%20not%20if%20a%20field%20or%20class%20variable.%22%0D%09scopeTable%20at%3A%20name%20ifPresent%3A%5B%3Anode%7C%0D%09%09%22When%20non-interactive%20raise%20the%20error%20only%20if%20its%20a%20duplicate%22%0D%09%09%28node%20isTemp%29%0D%09%09%09ifTrue%3A%5B%5Eself%20notify%3A%27Name%20%22%27%20%2C%20name%20%2C%20%27%22%20already%20used%20in%20this%20method%27%5D%0D%09%09%09ifFalse%3A%5BTranscript%20%0D%09%09%09%09show%3A%20%27%28%27%2C%20name%2C%20%27%20is%20shadowed%20in%20%22%27%20%2C%20cue%20getClass%20printString%20%2C%20%27%3E%3E%27%20%2C%20methodSelector%20printString%20%2C%20%27%22%29%27%5D%5D.%0D%09%5Eself%20reallyBind%3A%20name"));
smalltalk.bind(smalltalk.StEncoder, unescape("fixTemp%3A"), "fixTemp_", function StEncoder__fixTemp_(name){
var node = nil;
const self = this; node=self['@scopeTable'].at_ifAbsent_(name,(function StEncoder__(){
return nil;
}
));
if (((node.$klass)._no_no(smalltalk.StTempVariableNode)).valueOf()) {self.error_("can only fix a floating temp var")};
node.index_(self['@nTemps']);
self['@nTemps']=self['@nTemps']._plus((1));
return node;
}
, "temps", unescape("fixTemp%3A%20name%0D%09%7C%20node%20%7C%0D%09node%20%3A%3D%20scopeTable%20at%3A%20name%20ifAbsent%3A%20%5B%5D.%0D%09node%20class%20%7E%7E%20StTempVariableNode%20ifTrue%3A%0D%09%09%5Bself%20error%3A%20%27can%20only%20fix%20a%20floating%20temp%20var%27%5D.%0D%09node%20index%3A%20nTemps.%0D%09nTemps%20%3A%3D%20nTemps%20+%201.%0D%09%5Enode"));
smalltalk.bind(smalltalk.StEncoder, unescape("maxTemp"), "maxTemp", function StEncoder__maxTemp(){
const self = this; return self['@nTemps'];
}
, "temps", unescape("maxTemp%0D%0D%09%5EnTemps"));
smalltalk.bind(smalltalk.StEncoder, unescape("newTemp%3A"), "newTemp_", function StEncoder__newTemp_(name){
const self = this; self['@nTemps']=self['@nTemps']._plus((1));
return (smalltalk.StTempVariableNode.$$new()).name_scope_(name,(0));
}
, "temps", unescape("newTemp%3A%20name%0D%0D%09nTemps%20%3A%3D%20nTemps%20+%201.%0D%09%5E%20StTempVariableNode%20new%0D%09%09name%3A%20name%0D%09%09scope%3A%200"));
smalltalk.bind(smalltalk.StEncoder, unescape("newUndeclaredTemp%3A"), "newUndeclaredTemp_", function StEncoder__newUndeclaredTemp_(name){
const self = this; return (smalltalk.StUndeclaredVariableNode.$$new()).name_(name);
}
, "temps", unescape("newUndeclaredTemp%3A%20name%0D%09%5EStUndeclaredVariableNode%20new%20name%3A%20name"));
smalltalk.bind(smalltalk.StEncoder, unescape("bindUndeclaredTemp%3A"), "bindUndeclaredTemp_", function StEncoder__bindUndeclaredTemp_(name){
const self = this; return self['@scopeTable'].at_put_(name,(self.newUndeclaredTemp_(name)));
}
, "private", unescape("bindUndeclaredTemp%3A%20name%0D%09%5EscopeTable%20at%3A%20name%20put%3A%20%28self%20newUndeclaredTemp%3A%20name%29"));
smalltalk.bind(smalltalk.StEncoder, unescape("classEncoding"), "classEncoding", function StEncoder__classEncoding(){
const self = this; return self['@cue'].getClass();
}
, "private", unescape("classEncoding%0D%09%22This%20is%20a%20hack%20so%20that%20the%20parser%20may%20findout%20what%20class%20it%20was%20parsing%20for%20when%20it%20wants%20to%20create%20a%20syntax%20error%20view.%22%0D%09%5E%20cue%20getClass"));
smalltalk.bind(smalltalk.StEncoder, unescape("classVariable%3Aname%3A"), "classVariable_name_", function StEncoder__classVariable_name_(ref,name){
const self = this; return (smalltalk.StClassVariableNode.$$new()).name_key_(name,ref);
}
, "private", unescape("classVariable%3A%20ref%20name%3A%20name%0D%09%5EStClassVariableNode%20new%0D%09%09name%3A%20name%0D%09%09key%3A%20ref"));
smalltalk.bind(smalltalk.StEncoder, unescape("global%3Aname%3A"), "global_name_", function StEncoder__global_name_(ref,name){
const self = this; return (smalltalk.StLiteralVariableNode.$$new()).name_key_(name,ref);
}
, "private", unescape("global%3A%20ref%20name%3A%20name%0D%09%5EStLiteralVariableNode%20new%0D%09%09name%3A%20name%0D%09%09key%3A%20ref"));
smalltalk.bind(smalltalk.StEncoder, unescape("lookupInPools%3A"), "lookupInPools_", function StEncoder__lookupInPools_(varName){
var binding = nil;
const self = this; binding=self['@cue'].bindingOf_((varName.asSymbol()));
return (function(){var $1$; $1$ = binding; if (!nil.isNil_($1$)) { return binding.asVariableIn_(self) } else { return $1$; }})();
}
, "private", unescape("lookupInPools%3A%20varName%0D%09%7C%20binding%20%7C%0D%09%22we%20don%27t%20really%20have%20Symbol%20in%20JS%2C%0D%09but%20let%27s%20go%20through%20the%20motions%20when%20running%20in%20ST%22%0D%09binding%20%3A%3D%20cue%20bindingOf%3A%20varName%20asSymbol.%0D%09%5Ebinding%0D%09%09ifNotNil%3A%20%5Bbinding%20asVariableIn%3A%20self%5D"));
smalltalk.bind(smalltalk.StEncoder, unescape("lookupInPools%3AifFound%3A"), "lookupInPools_ifFound_", function StEncoder__lookupInPools_ifFound_(varName,assocBlock){
const self = this; return (nil.isNil_(self['@cue'].bindingOf_(varName)) ? false : assocBlock.value_(assoc));
}
, "private", unescape("lookupInPools%3A%20varName%20ifFound%3A%20assocBlock%0D%0D%09%5E%28cue%20bindingOf%3A%20varName%29%0D%09%09ifNil%3A%20%5Bfalse%5D%0D%09%09ifNotNil%3A%20%5B%3Aassoc%7C%20assocBlock%20value%3A%20assoc%5D"));
smalltalk.bind(smalltalk.StEncoder, unescape("possibleNamesFor%3A"), "possibleNamesFor_", function StEncoder__possibleNamesFor_(proposedName){
var results = nil;
const self = this; results=(self['@cue'].getClass()).possibleVariablesFor_continuedFrom_(proposedName,nil);
return proposedName.correctAgainst_continuedFrom_(nil,results);
}
, "private", unescape("possibleNamesFor%3A%20proposedName%0D%09%7C%20results%20%7C%0D%09results%20%3A%3D%20cue%20getClass%20%0D%09%09possibleVariablesFor%3A%20proposedName%20%0D%09%09continuedFrom%3A%20nil.%0D%09%5E%20proposedName%20correctAgainst%3A%20nil%20continuedFrom%3A%20results.%0D"));
smalltalk.bind(smalltalk.StEncoder, unescape("reallyBind%3A"), "reallyBind_", function StEncoder__reallyBind_(name){
var node = nil;
const self = this; node=self.newTemp_(name);
self['@scopeTable'].at_put_(name,node);
return node;
}
, "private", unescape("reallyBind%3A%20name%0D%0D%09%7C%20node%20%7C%0D%09node%20%3A%3D%20self%20newTemp%3A%20name.%0D%09scopeTable%20at%3A%20name%20put%3A%20node.%0D%09%5Enode"));
smalltalk.bind(smalltalk.StEncoder, unescape("setCue%3A"), "setCue_", function StEncoder__setCue_(aCue){
const self = this; self['@cue']=aCue;
return self;
}
, "private", unescape("setCue%3A%20aCue%0D%09cue%20%3A%3D%20aCue"));
smalltalk.bind(smalltalk.StEncoder, unescape("warnAboutShadowed%3A"), "warnAboutShadowed_", function StEncoder__warnAboutShadowed_(name){
const self = this; (function(){var $1$; $1$ = self['@selector']; if (!nil.isNil_($1$)) { return (function StEncoder__(){
return (function StEncoder__($2$){
$2$.cr();
return $2$.show_((((((((self['@cue'].getClass()).name())._comma(unescape("%3E%3E")))._comma(self['@selector']))._comma(unescape("%28")))._comma(name))._comma(unescape("%20is%20shadowed%29"))))}
)(smalltalk.Transcript);
}
)() } else { return $1$; }})();
return self;
}
, "private", unescape("warnAboutShadowed%3A%20name%0D%22%09requestor%20addWarning%3A%20name%2C%27%20is%20shadowed%27.%22%0D%09selector%20ifNotNil%3A%0D%09%09%5BTranscript%20cr%3B%20show%3A%20cue%20getClass%20name%2C%27%3E%3E%27%2C%20selector%2C%20%27%28%27%2C%20name%2C%27%20is%20shadowed%29%27%5D"));
smalltalk.bind(smalltalk.StEncoder, unescape("maxIndexableLiterals"), "maxIndexableLiterals", function StEncoder__maxIndexableLiterals(){
const self = this; return (63);
}
, "accessing", unescape("maxIndexableLiterals%0D%09%22Answer%20the%20maximum%20number%20of%20literals%20supported%20by%20the%20receiver%27s%0D%09%20bytecode%20set.%20This%20is%20a%20nominal%20value%20based%20on%20the%20Blue%20Book%20bytecode%0D%09%20set%3B%20subclasses%20answer%20a%20more%20accurate%20value.%22%0D%09%5E63"));
smalltalk.bind(smalltalk.StEncoder, unescape("maxNumLiterals"), "maxNumLiterals", function StEncoder__maxNumLiterals(){
const self = this; return (smalltalk.CompiledMethod.maxNumLiterals()).min_((self.maxIndexableLiterals()));
}
, "accessing", unescape("maxNumLiterals%0D%09%5ECompiledMethod%20maxNumLiterals%20min%3A%20self%20maxIndexableLiterals"));
smalltalk.bind(smalltalk.StEncoder, unescape("methodNodeClass"), "methodNodeClass", function StEncoder__methodNodeClass(){
const self = this; return smalltalk.StMethodNode;
}
, "accessing", unescape("methodNodeClass%0D%09%5EStMethodNode"));
smalltalk.bind(smalltalk.StEncoder, unescape("selector"), "selector", function StEncoder__selector(){
const self = this; return self['@selector'];
}
, "accessing", unescape("selector%0D%09%5Eselector"));
smalltalk.bind(smalltalk.StEncoder, unescape("selector%3A"), "selector_", function StEncoder__selector_(aSymbol){
const self = this; self['@selector']=aSymbol;
return self;
}
, "accessing", unescape("selector%3A%20aSymbol%0D%09selector%20%3A%3D%20aSymbol"));
smalltalk.addClass("StLeafNode", smalltalk.StParseNode, ['key'], 'Compiler-JS');
smalltalk.StLeafNode.$classVariableNames=("");
smalltalk.bind(smalltalk.StLeafNode, unescape("key"), "key", function StLeafNode__key(){
const self = this; return self['@key'];
}
, "accessing", unescape("key%0D%0D%09%5Ekey"));
smalltalk.bind(smalltalk.StLeafNode, unescape("key%3A"), "key_", function StLeafNode__key_(object){
const self = this; self['@key']=object;
return self;
}
, "initialize-release", unescape("key%3A%20object%0D%0D%09key%20%3A%3D%20object"));
smalltalk.bind(smalltalk.StLeafNode, unescape("printOn%3A"), "printOn_", function StLeafNode__printOn_(stream){
const self = this; smalltalk.superImplementor(smalltalk.StLeafNode,'printOn_').apply(self, [stream]);
(function StLeafNode__($1$){
$1$.nextPut_(unescape("%28"));
$1$.nextPutAll_((self['@key'].asString()));
return $1$.nextPut_(unescape("%29"))}
)(stream);
return self;
}
, "printing", unescape("printOn%3A%20stream%0D%09super%20printOn%3A%20stream.%0D%09stream%0D%09%09nextPut%3A%20%24%28%3B%0D%09%09nextPutAll%3A%20key%20asString%3B%0D%09%09nextPut%3A%20%24%29"));
smalltalk.bind(smalltalk.StLeafNode, unescape("isExpression"), "isExpression", function StLeafNode__isExpression(){
const self = this; return true;
}
, "private", unescape("isExpression%0D%09%5Etrue"));
smalltalk.addClass("StLiteralNode", smalltalk.StLeafNode, [], 'Compiler-JS');
smalltalk.StLiteralNode.$classVariableNames=("");
smalltalk.bind(smalltalk.StLiteralNode, unescape("isConstantNumber"), "isConstantNumber", function StLiteralNode__isConstantNumber(){
const self = this; return self['@key'].isNumber();
}
, "testing", unescape("isConstantNumber%0D%09%5E%20key%20isNumber"));
smalltalk.bind(smalltalk.StLiteralNode, unescape("isLiteralNode"), "isLiteralNode", function StLiteralNode__isLiteralNode(){
const self = this; return true;
}
, "testing", unescape("isLiteralNode%0D%0D%09%5E%20true"));
smalltalk.bind(smalltalk.StLiteralNode, unescape("literalValue"), "literalValue", function StLiteralNode__literalValue(){
const self = this; return self['@key'];
}
, "testing", unescape("literalValue%0D%0D%09%5Ekey"));
smalltalk.bind(smalltalk.StLiteralNode, unescape("generateOn%3A"), "generateOn_", function StLiteralNode__generateOn_(generator){
const self = this; self['@key'].generateOn_(generator);
return self;
}
, "generate", unescape("generateOn%3A%20generator%0D%09key%20generateOn%3A%20generator"));
smalltalk.bind(smalltalk.StLiteralNode, unescape("name%3Akey%3A"), "name_key_", function StLiteralNode__name_key_(literal,object){
const self = this; return self.key_(object);
}
, "initialize-release", unescape("name%3A%20literal%20key%3A%20object%0D%09%22For%20compatibility%20with%20Encoder%3E%3Ename%3Akey%3Aclass%3Atype%3Aset%3A%22%0D%09%5Eself%20key%3A%20object"));
smalltalk.addClass("StMessageNode", smalltalk.StParseNode, ['receiver', 'selector', 'precedence', 'args'], 'Compiler-JS');
smalltalk.StMessageNode.$classVariableNames=("");
smalltalk.bind(smalltalk.StMessageNode, unescape("receiver%3Aselector%3Aarguments%3Aprecedence%3Afrom%3A"), "receiver_selector_arguments_precedence_from_", function StMessageNode__receiver_selector_arguments_precedence_from_(rcvr,aSelector,argList,p,encoder){
const self = this; self['@receiver']=rcvr;
self['@args']=argList;
self['@precedence']=p;
self['@selector']=encoder.encodeSelector_(aSelector);
return self;
}
, "initialize-release", unescape("receiver%3A%20rcvr%20selector%3A%20aSelector%20arguments%3A%20argList%20precedence%3A%20p%20from%3A%20encoder%20%0D%09receiver%20%3A%3D%20rcvr.%0D%09args%20%3A%3D%20argList.%0D%09precedence%20%3A%3D%20p.%0D%09selector%20%3A%3D%20encoder%20encodeSelector%3A%20aSelector"));
smalltalk.bind(smalltalk.StMessageNode, unescape("asReturnNode"), "asReturnNode", function StMessageNode__asReturnNode(){
const self = this; return (smalltalk.StReturnNode.$$new()).expr_(self);
}
, "converting", unescape("asReturnNode%0D%09%5EStReturnNode%20new%20expr%3A%20self"));
smalltalk.bind(smalltalk.StMessageNode, unescape("arguments"), "arguments", function StMessageNode__arguments(){
const self = this; return self['@args'];
}
, "accessing", unescape("arguments%0D%09%5Eargs"));
smalltalk.bind(smalltalk.StMessageNode, unescape("firstArgument"), "firstArgument", function StMessageNode__firstArgument(){
const self = this; return self['@args'].first();
}
, "accessing", unescape("firstArgument%0D%09%5Eargs%20first"));
smalltalk.bind(smalltalk.StMessageNode, unescape("receiver"), "receiver", function StMessageNode__receiver(){
const self = this; return self['@receiver'];
}
, "accessing", unescape("receiver%0D%09%5Ereceiver"));
smalltalk.bind(smalltalk.StMessageNode, unescape("receiver%3A"), "receiver_", function StMessageNode__receiver_(aNode){
const self = this; self['@receiver']=aNode;
return self;
}
, "accessing", unescape("receiver%3A%20aNode%0D%09receiver%20%3A%3D%20aNode"));
smalltalk.bind(smalltalk.StMessageNode, unescape("secondArgument"), "secondArgument", function StMessageNode__secondArgument(){
const self = this; return self['@args'].second();
}
, "accessing", unescape("secondArgument%0D%09%5Eargs%20second"));
smalltalk.bind(smalltalk.StMessageNode, unescape("selector"), "selector", function StMessageNode__selector(){
const self = this; return self['@selector'];
}
, "accessing", unescape("selector%0D%09%5Eselector"));
smalltalk.bind(smalltalk.StMessageNode, unescape("canBeRewritten%3A"), "canBeRewritten_", function StMessageNode__canBeRewritten_(generator){
const self = this; if ((["whileTrue", "whileTrue:", "whileFalse", "whileFalse"].includes_((self['@selector'].key()))).valueOf()) {return self['@receiver'].isBlockNode()} else {return generator.canBeRewritten_((self['@selector'].key()))};
}
, "testing", unescape("canBeRewritten%3A%20generator%0D%09%28%23%28%20%23whileTrue%20%23whileTrue%3A%20%23whileFalse%20%23whileFalse%29%20includes%3A%20selector%20key%29%0D%09%09ifTrue%3A%20%5B%5Ereceiver%20isBlockNode%5D%0D%09%09ifFalse%3A%20%5B%5Egenerator%20canBeRewritten%3A%20selector%20key%5D%0D%09"));
smalltalk.bind(smalltalk.StMessageNode, unescape("canBeValueRewritten%3A"), "canBeValueRewritten_", function StMessageNode__canBeValueRewritten_(generator){
const self = this; return generator.canBeValueRewritten_((self['@selector'].key()));
}
, "testing", unescape("canBeValueRewritten%3A%20generator%0D%09%5Egenerator%20canBeValueRewritten%3A%20selector%20key%0D%09"));
smalltalk.bind(smalltalk.StMessageNode, unescape("canCascade"), "canCascade", function StMessageNode__canCascade(){
const self = this; return self['@receiver']._no_no(smalltalk.StMessageNode.classVariableAt_("NodeSuper"));
}
, "testing", unescape("canCascade%0D%09%5Ereceiver%20%7E%7E%20NodeSuper"));
smalltalk.bind(smalltalk.StMessageNode, unescape("hasInlinedFunction%3A"), "hasInlinedFunction_", function StMessageNode__hasInlinedFunction_(generator){
const self = this; if ((["whileTrue", "whileTrue:", "whileFalse", "whileFalse"].includes_((self['@selector'].key()))).valueOf()) {return (self['@receiver'].canBeInlinedBlockValue()).not()} else {return generator.hasInlinedFunction_((self['@selector'].key()))};
}
, "testing", unescape("hasInlinedFunction%3A%20generator%0D%09%22we%20need%20to%20treat%20whileTrue/False%28%3A%29%20differently%20here%20depending%20on%20%0D%09whether%20we%20know%20the%20receiver%20is%20a%20block%20which%20can%20be%20inlined.%0D%09The%20message%20might%20otherwise%20be%20overriden%20by%20the%20receiver%20class%20and%20can%27t%20be%20inlined%20here%22%0D%0D%09%28%23%28%20%23whileTrue%20%23whileTrue%3A%20%23whileFalse%20%23whileFalse%29%20includes%3A%20selector%20key%29%0D%09%09ifTrue%3A%20%5B%5Ereceiver%20canBeInlinedBlockValue%20not%5D%0D%09%09ifFalse%3A%20%5B%5Egenerator%20hasInlinedFunction%3A%20selector%20key%5D%0D%09"));
smalltalk.bind(smalltalk.StMessageNode, unescape("hasNonLocalBlockReturn%3A"), "hasNonLocalBlockReturn_", function StMessageNode__hasNonLocalBlockReturn_(generator){
var optimized = nil;
var hasNonLocal = nil;
const self = this; if ((self.canBeRewritten_(generator)).valueOf()) {optimized=(self.hasInlinedFunction_(generator)).not();
if ((self['@receiver'].hasNonLocalBlockReturn_optimized_(generator,optimized)).valueOf()) {return true};
hasNonLocal=false;
self['@args'].do_((function StMessageNode__(each){
return hasNonLocal=(each.hasNonLocalBlockReturn_optimized_(generator,optimized)).or_((function StMessageNode__(){
return hasNonLocal;
}
));
}
));
return hasNonLocal} else {if ((self['@receiver'].hasNonLocalBlockReturn_(generator)).valueOf()) {return true};
hasNonLocal=false;
self['@args'].do_((function StMessageNode__(each){
return hasNonLocal=(each.hasNonLocalBlockReturn_(generator)).or_((function StMessageNode__(){
return hasNonLocal;
}
));
}
));
return hasNonLocal};
}
, "testing", unescape("hasNonLocalBlockReturn%3A%20generator%0D%09%22we%20are%20in%20a%20generic%20context%2C%20optimization%20has%20neither%20been%20confirmed%2C%20nor%20denied%22%0D%09%7C%20optimized%20hasNonLocal%20%7C%0D%09%28self%20canBeRewritten%3A%20generator%29%0D%09%09ifTrue%3A%20%5B%0D%09%09%09%22now%20we%20need%20to%20confirm%20or%20deny%20optimization%22%0D%09%09%09optimized%20%3A%3D%20%28self%20hasInlinedFunction%3A%20generator%29%20not.%0D%09%09%09%28receiver%20hasNonLocalBlockReturn%3A%20generator%20optimized%3A%20optimized%29%0D%09%09%09%09ifTrue%3A%20%5B%5Etrue%5D.%0D%09%09%09hasNonLocal%20%3A%3D%20false.%0D%09%09%09args%20do%3A%20%5B%3Aeach%20%7C%20%0D%09%09%09%09hasNonLocal%20%3A%3D%20%28each%20hasNonLocalBlockReturn%3A%20generator%20optimized%3A%20optimized%29%0D%09%09%09%09%09or%3A%20%5BhasNonLocal%5D%5D.%0D%09%09%09%5EhasNonLocal%5D%0D%09%09ifFalse%3A%20%5B%0D%09%09%09%22We%20continue%20to%20be%20in%20blissful%20ingnorance%22%0D%09%09%09%28receiver%20hasNonLocalBlockReturn%3A%20generator%29%0D%09%09%09%09ifTrue%3A%20%5B%5Etrue%5D.%0D%09%09%09hasNonLocal%20%3A%3D%20false.%0D%09%09%09args%20do%3A%20%5B%3Aeach%20%7C%20%0D%09%09%09%09hasNonLocal%20%3A%3D%20%28each%20hasNonLocalBlockReturn%3A%20generator%29%0D%09%09%09%09%09or%3A%20%5BhasNonLocal%5D%5D.%0D%09%09%09%5EhasNonLocal%5D%0D"));
smalltalk.bind(smalltalk.StMessageNode, unescape("hasNonLocalBlockReturn%3Aoptimized%3A"), "hasNonLocalBlockReturn_optimized_", function StMessageNode__hasNonLocalBlockReturn_optimized_(generator,parentOptimized){
var optimized = nil;
var hasNonLocal = nil;
const self = this; optimized=parentOptimized.and_((function StMessageNode__(){
return (self.canBeRewritten_(generator)).and_((function StMessageNode__(){
return (self.hasInlinedFunction_(generator)).not();
}
));
}
));
if ((self['@receiver'].hasNonLocalBlockReturn_optimized_(generator,optimized)).valueOf()) {return true};
hasNonLocal=false;
self['@args'].do_((function StMessageNode__(each){
return hasNonLocal=(each.hasNonLocalBlockReturn_optimized_(generator,optimized)).or_((function StMessageNode__(){
return hasNonLocal;
}
));
}
));
return hasNonLocal;
}
, "testing", unescape("hasNonLocalBlockReturn%3A%20generator%20optimized%3A%20parentOptimized%0D%09%7C%20optimized%20hasNonLocal%20%7C%0D%09optimized%20%3A%3D%20parentOptimized%0D%09%09and%3A%20%5B%28self%20canBeRewritten%3A%20generator%29%20and%3A%20%5B%28self%20hasInlinedFunction%3A%20generator%29%20not%5D%5D.%0D%09%28receiver%20hasNonLocalBlockReturn%3A%20generator%20optimized%3A%20optimized%29%0D%09%09ifTrue%3A%20%5B%5Etrue%5D.%0D%09hasNonLocal%20%3A%3D%20false.%0D%09args%20do%3A%20%5B%3Aeach%20%7C%20%0D%09%09%09hasNonLocal%20%3A%3D%20%28each%20hasNonLocalBlockReturn%3A%20generator%20optimized%3A%20optimized%29%0D%09%09%09%09or%3A%20%5BhasNonLocal%5D%5D.%0D%09%5EhasNonLocal"));
smalltalk.bind(smalltalk.StMessageNode, unescape("isExpression"), "isExpression", function StMessageNode__isExpression(){
const self = this; return true;
}
, "testing", unescape("isExpression%0D%09%5Etrue"));
smalltalk.bind(smalltalk.StMessageNode, unescape("isIf"), "isIf", function StMessageNode__isIf(){
const self = this; return ["ifTrue:", "ifFalse:", "ifTrue:ifFalse:", "ifFalse:ifTrue:"].includes_((self['@selector'].key()));
}
, "testing", unescape("isIf%0D%09%22todo%3A%20needs%20to%20be%20a%20set%22%0D%09%5E%23%28%20%0D%09%09ifTrue%3A%20ifFalse%3A%20ifTrue%3AifFalse%3A%20ifFalse%3AifTrue%3A%20%0D%09%09%22ifNil%3A%20ifNotNil%3A%20ifNil%3AifNotNil%3A%20ifNotNil%3AifNil%3A%22%29%20includes%3A%20selector%20key"));
smalltalk.bind(smalltalk.StMessageNode, unescape("isMessageNode"), "isMessageNode", function StMessageNode__isMessageNode(){
const self = this; return true;
}
, "testing", unescape("isMessageNode%0D%09%5Etrue"));
smalltalk.bind(smalltalk.StMessageNode, unescape("isNilIf"), "isNilIf", function StMessageNode__isNilIf(){
const self = this; return ["ifNil:", "ifNotNil:", "ifNil:ifNotNil:", "ifNotNil:ifNil:"].includes_((self['@selector'].key()));
}
, "testing", unescape("isNilIf%0D%09%5E%23%28ifNil%3A%20ifNotNil%3A%20ifNil%3AifNotNil%3A%20ifNotNil%3AifNil%3A%29%20includes%3A%20selector%20key"));
smalltalk.bind(smalltalk.StMessageNode, unescape("isReturningIf"), "isReturningIf", function StMessageNode__isReturningIf(){
const self = this; return (self.isIf()).and_((function StMessageNode__(){
return ((self['@args'].first()).returns()).and_((function StMessageNode__(){
return ((self['@args'].size())._gt((1))).and_((function StMessageNode__(){
return (self['@args'].last()).returns();
}
));
}
));
}
));
}
, "testing", unescape("isReturningIf%0D%09%5Eself%20isIf%0D%09%09and%3A%20%5Bargs%20first%20returns%0D%09%09%09and%3A%20%5Bargs%20size%20%3E%201%0D%09%09%09%09and%3A%20%5Bargs%20last%20returns%5D%5D%5D"));
smalltalk.bind(smalltalk.StMessageNode, unescape("markNonLocalReturns"), "markNonLocalReturns", function StMessageNode__markNonLocalReturns(){
const self = this; self['@receiver'].markNonLocalReturns();
self['@args'].do_((function StMessageNode__(each){
return each.markNonLocalReturns();
}
));
return self;
}
, "testing", unescape("markNonLocalReturns%0D%09receiver%20markNonLocalReturns.%0D%09args%20do%3A%20%5B%3Aeach%20%7C%20each%20markNonLocalReturns%5D"));
smalltalk.bind(smalltalk.StMessageNode, unescape("toDoIncrement%3A"), "toDoIncrement_", function StMessageNode__toDoIncrement_(variable){
const self = this; if (((self['@receiver']._eq(variable)).and_((function StMessageNode__(){
return (self['@selector'].key())._eq(unescape("+"));
}
))).not()) {return nil};
if (((self['@args'].first()).isConstantNumber()).valueOf()) {return self['@args'].first()} else {return nil};
}
, "testing", unescape("toDoIncrement%3A%20variable%0D%09%28receiver%20%3D%20variable%20and%3A%20%5Bselector%20key%20%3D%20%23+%5D%29%20%0D%09%09ifFalse%3A%20%5B%5E%20nil%5D.%0D%09args%20first%20isConstantNumber%0D%09%09ifTrue%3A%20%5B%5E%20args%20first%5D%0D%09%09ifFalse%3A%20%5B%5E%20nil%5D"));
smalltalk.bind(smalltalk.StMessageNode, unescape("toDoLimit%3A"), "toDoLimit_", function StMessageNode__toDoLimit_(variable){
const self = this; if (((self['@receiver']._eq(variable)).and_((function StMessageNode__(){
return ((self['@selector'].key())._eq(unescape("%3C%3D"))).or_((function StMessageNode__(){
return (self['@selector'].key())._eq(unescape("%3E%3D"));
}
));
}
))).valueOf()) {return self['@args'].first()} else {return nil};
}
, "testing", unescape("toDoLimit%3A%20variable%0D%09%28receiver%20%3D%20variable%20and%3A%20%5Bselector%20key%20%3D%20%23%3C%3D%20or%3A%20%5Bselector%20key%20%3D%20%23%3E%3D%5D%5D%29%20%0D%09%09ifTrue%3A%20%5B%5E%20args%20first%5D%0D%09%09ifFalse%3A%20%5B%5E%20nil%5D"));
smalltalk.bind(smalltalk.StMessageNode, unescape("checkBlock%3Aas%3Afrom%3AmaxArgs%3A"), "checkBlock_as_from_maxArgs_", function StMessageNode__checkBlock_as_from_maxArgs_(node,nodeName,encoder,maxArgs){
const self = this; if ((node.isBlockNode()).not()) {return false};
if (((node.numberOfArguments())._lt_eq(maxArgs)).valueOf()) {return true};
return encoder.notify_(((((unescape("%3C-%20")._comma(nodeName))._comma(" of "))._comma((self['@selector'].key())))._comma(" has too many arguments")));
}
, "private", unescape("checkBlock%3A%20node%20as%3A%20nodeName%20from%3A%20encoder%20maxArgs%3A%20maxArgs%0D%09%22Answer%20true%20if%20node%20is%20a%20StBlockNode%20with%20at%20most%20maxArgs%20arguments.%0D%09This%20check%20is%20required%20in%20order%20to%20inline%20some%20special%20messages.%0D%09Notify%20some%20undue%20usage%20of%20these%20special%20messages.%22%0D%0D%09node%20isBlockNode%20ifFalse%3A%20%5B%20%5Efalse%20%5D.%0D%09node%20numberOfArguments%20%3C%3D%20maxArgs%20ifTrue%3A%20%5B%20%5Etrue%20%5D.%0D%09%5Eencoder%20notify%3A%20%27%3C-%20%27%2C%20nodeName%20%2C%20%27%20of%20%27%20%2C%20selector%20key%20%2C%20%27%20has%20too%20many%20arguments%27"));
smalltalk.bind(smalltalk.StMessageNode, unescape("ifNilReceiver"), "ifNilReceiver", function StMessageNode__ifNilReceiver(){
const self = this; return self['@receiver'];
}
, "private", unescape("ifNilReceiver%0D%0D%09%5Ereceiver"));
smalltalk.bind(smalltalk.StMessageNode, unescape("inlineReturns"), "inlineReturns", function StMessageNode__inlineReturns(){
const self = this; self['@args'].at_put_((1),((self['@args'].first()).returnLast()));
if (((self['@args'].size())._lt((2))).valueOf()) {self['@args'].add_((smalltalk.StBlockNode.returnNil()))} else {self['@args'].at_put_((2),((self['@args'].second()).returnLast()))};
return self;
}
, "private", unescape("inlineReturns%0D%09%22block%20arguments%20might%20be%20variables%20holding%20a%20block%22%0D%09args%20at%3A%201%20put%3A%20args%20first%20returnLast.%0D%09args%20size%20%3C%202%0D%09%09ifTrue%3A%20%5Bargs%20add%3A%20%28StBlockNode%20returnNil%29%5D%0D%09%09ifFalse%3A%20%5Bargs%20at%3A%202%20put%3A%20args%20second%20returnLast%5D"));
smalltalk.bind(smalltalk.StMessageNode, unescape("precedence"), "precedence", function StMessageNode__precedence(){
const self = this; return self['@precedence'];
}
, "private", unescape("precedence%0D%0D%09%5Eprecedence"));
smalltalk.bind(smalltalk.StMessageNode, unescape("argumentsInEvaluationOrder"), "argumentsInEvaluationOrder", function StMessageNode__argumentsInEvaluationOrder(){
const self = this; return self['@args'];
}
, "generate", unescape("argumentsInEvaluationOrder%0D%09%5Eargs"));
smalltalk.bind(smalltalk.StMessageNode, unescape("generateAsReceiverOn%3A"), "generateAsReceiverOn_", function StMessageNode__generateAsReceiverOn_(generator){
const self = this; generator.asReceiverWith_((function StMessageNode__(){
return self.generateInlinedValueOn_(generator);
}
));
return self;
}
, "generate", unescape("generateAsReceiverOn%3A%20generator%0D%09generator%20asReceiverWith%3A%20%5B%0D%09%09self%20generateInlinedValueOn%3A%20generator%5D%0D"));
smalltalk.bind(smalltalk.StMessageNode, unescape("generateInlinedOn%3A"), "generateInlinedOn_", function StMessageNode__generateInlinedOn_(generator){
const self = this; if ((self.canBeRewritten_(generator)).valueOf()) {generator.rewrite_(self)} else {self.generateOn_(generator)};
return self;
}
, "generate", unescape("generateInlinedOn%3A%20generator%0D%09%28self%20canBeRewritten%3A%20generator%29%0D%09%09ifTrue%3A%20%5B%09generator%20rewrite%3A%20self%5D%0D%09%09ifFalse%3A%20%5Bself%20generateOn%3A%20generator%5D"));
smalltalk.bind(smalltalk.StMessageNode, unescape("generateInlinedValueOn%3A"), "generateInlinedValueOn_", function StMessageNode__generateInlinedValueOn_(generator){
const self = this; if ((self.canBeValueRewritten_(generator)).valueOf()) {return generator.rewriteValue_(self)};
if ((self['@receiver'].isSuperPseudoVariable()).valueOf()) {self.generateSuperSendOn_(generator)} else {self['@receiver'].generateAsReceiverOn_(generator);
generator.methodCall();
generator.selector_((self['@selector'].key()));
generator.argumentList_((self.argumentsInEvaluationOrder()))};
return self;
}
, "generate", unescape("generateInlinedValueOn%3A%20generator%0D%09%28self%20canBeValueRewritten%3A%20generator%29%0D%09%09ifTrue%3A%20%5B%0D%09%09%09%5Egenerator%20rewriteValue%3A%20self%5D.%0D%09%22we%20can%27t%20inline%20optimize%20in%20this%20case%22%0D%09receiver%20isSuperPseudoVariable%0D%09%09ifTrue%3A%20%5Bself%20generateSuperSendOn%3A%20generator%5D%0D%09%09ifFalse%3A%20%5B%0D%09%09%09receiver%20generateAsReceiverOn%3A%20generator.%0D%09%09%09generator%20methodCall.%0D%09%09%09generator%20selector%3A%20selector%20key.%0D%09%09%09generator%20argumentList%3A%20self%20argumentsInEvaluationOrder%5D"));
smalltalk.bind(smalltalk.StMessageNode, unescape("generateOn%3A"), "generateOn_", function StMessageNode__generateOn_(generator){
const self = this; if ((self['@receiver'].isSuperPseudoVariable()).valueOf()) {self.generateSuperSendOn_(generator)} else {if ((self.canBeRewritten_(generator)).valueOf()) {generator.rewrite_(self)} else {self['@receiver'].generateAsReceiverOn_(generator);
generator.methodCall();
generator.selector_((self['@selector'].key()));
generator.argumentList_((self.argumentsInEvaluationOrder()))}};
return self;
}
, "generate", unescape("generateOn%3A%20generator%0D%09%22receiver%20is%20nil%20cascades%22%0D%09receiver%20isSuperPseudoVariable%0D%09%09ifTrue%3A%20%5Bself%20generateSuperSendOn%3A%20generator%5D%0D%09%09ifFalse%3A%20%5B%0D%09%09%09%28self%20canBeRewritten%3A%20generator%29%0D%09%09%09%09ifTrue%3A%20%5B%09generator%20rewrite%3A%20self%5D%0D%09%09%09%09ifFalse%3A%20%5B%0D%09%09%09%09%09receiver%20generateAsReceiverOn%3A%20generator.%0D%09%09%09%09%09generator%20methodCall.%0D%09%09%09%09%09generator%20selector%3A%20selector%20key.%0D%09%09%09%09%09generator%20argumentList%3A%20self%20argumentsInEvaluationOrder%5D%5D"));
smalltalk.bind(smalltalk.StMessageNode, unescape("generateSuperSendOn%3A"), "generateSuperSendOn_", function StMessageNode__generateSuperSendOn_(generator){
const self = this; generator.superImplementor_argumentList_((self['@selector'].key()),(self.argumentsInEvaluationOrder()));
return self;
}
, "generate", unescape("generateSuperSendOn%3A%20generator%0D%09%22smalltalk.superImplementor%28smalltalk.StCompilerTestClass.%24klass%2C%27%24%24new%27%29.apply%28self%2C%20%5B%5D%29%22%0D%09generator%20superImplementor%3A%20selector%20key%20argumentList%3A%20self%20argumentsInEvaluationOrder"));
smalltalk.StMessageNode.$klass.$iVarNames = [];
smalltalk.bind(smalltalk.StMessageNode.$klass, unescape("defaultOptimizationMap"), "defaultOptimizationMap", function StMessageNode_class__defaultOptimizationMap(){
const self = this; return [[(0), [["class", unescape("%25receiver%25.%24klass")], ["isNil", unescape("%28nil.isNil_%28%25receiver%25%29%29")], ["notNil", unescape("%28nil.isNil_%28%25receiver%25%29%3D%3D%3Dfalse%29")], ["whileTrue", "receiverIsBlockNoArguments:", unescape("%28function%28%29%7Bwhile%28%25receiver%25%28%29%29%7B%7D%3Breturn%20nil%7D%29%28%29")], ["whileFalse", "receiverIsBlockNoArguments:", unescape("%28function%28%29%7Bwhile%28%21%21%25receiver%25%28%29%29%7B%7D%3Breturn%20nil%7D%29%28%29")], ["basicValueOrNil", unescape("%28function%28%29%7Bvar%20%241%24%3Breturn%20%28nil.isNil_%28%241%24%20%3D%20%25receiver%25%29%29%20%3F%20nil%20%3A%20%241%24%3B%7D%29%28%29")]]], [(1), [["whileTrue:", "allBlockNoArguments:", unescape("%28function%28%29%7Bwhile%28%25receiver%25%28%29%29%7B%25arg1%25%28%29%7D%3Breturn%20nil%7D%29%28%29")], ["whileFalse:", "allBlockNoArguments:", unescape("%28function%28%29%7Bwhile%28%21%21%25receiver%25%28%29%29%7B%25arg1%25%28%29%7D%3Breturn%20nil%7D%29%28%29")], ["ifNil:", "hasBlockArguments:", unescape("%28function%28%29%7Bvar%20%241%24%3Breturn%20%28nil.isNil_%28%241%24%20%3D%20%25receiver%25%29%29%20%3F%20%25arg1%25%28%29%20%3A%20%241%24%3B%7D%29%28%29")], ["ifNotNil:", "hasBlockArguments:", unescape("%28function%28%29%7Bvar%20%241%24%3Breturn%20%28nil.isNil_%28%241%24%20%3D%20%25receiver%25%29%3D%3D%3Dfalse%29%20%3F%20%25arg1%25%28%29%20%3A%20%241%24%3B%7D%29%28%29")], [unescape("%3D%3D"), unescape("%28nil.is_eqeq_%28%25receiver%25%2C%25arg1%25%29%29")], [unescape("%3D%3D%3D"), unescape("%28%25receiver%25%20%3D%3D%3D%20%25arg1%25%29")], [unescape("%7C"), unescape("%7C"), unescape("%28%25receiver%25%20%7C%7C%20%25arg1%25%29")], ["basicAt:", unescape("%28%28function%28%29%7Bvar%20%241%24%3D%25receiver%25%5B%25arg1%25%5D%3Bif%28nil.isNil_%28%241%24%29%29return%20nil%3Breturn%20%241%24%3B%7D%29%28%29%29")], ["ifUndefined:", "hasBlockNoArguments:", unescape("%28function%28%29%7Bvar%20%241%24%20%3D%20%25receiver%25%3Bif%20%28typeof%20%28%241%24%29%20%3D%3D%20%22undefined%22%29%20return%20%25arg1%25%28%29%3B%20return%20%241%24%3B%7D%29%28%29")], ["timesRepeat:", "hasBlockNoArguments:", unescape("%28function%28%29%7Bfor%28var%20%241%24%3D%25receiver%25%3B%241%24%3E0%3B%241%24--%29%7B%25arg1%25%28%29%7D%3Breturn%20nil%7D%29%28%29")], ["isKindOf:", unescape("smalltalk.is_kindOf_%28%25receiver%25%2C%28%25arg1%25%29%29")], ["respondsTo:", unescape("smalltalk.responds_to_%28%25receiver%25%2C%28%25arg1%25%29%29")]]], [(2), [["ifNil:ifNotNil:", "hasBlockNoArguments:", unescape("%28nil.isNil_%28%25receiver%25%29%29%20%3F%20%25arg1%25%28%29%20%3A%20%25arg2%25%28%29")], ["ifNotNil:ifNil:", "hasBlockNoArguments:", unescape("%28nil.isNil_%28%25receiver%25%29%3D%3D%3Dfalse%29%20%3F%20%25arg1%25%28%29%20%3A%20%25arg2%25%28%29")], ["basicAt:ifAbsent:", unescape("%28%28function%28%29%7Bvar%20%241%24%3D%25receiver%25%5B%25arg1%25%5D%3Bif%28nil.isNil_%28%241%24%29%29return%20%28%25arg2%25.value%28%29%29%3Breturn%20%241%24%3B%7D%29%28%29%29")], ["basicAt:put:", unescape("%28%25receiver%25%5B%25arg1%25%5D%3D%28%25arg2%25%29%29")]]]];
}
, "class initialization", unescape("defaultOptimizationMap%0D%09%22compiler%20optimization%20map%22%0D%0D%09%5E%23%28%0D%09%09%23%28%200%20%23%28%20%22selectors%20without%20arguments%22%0D%09%09%09%23%28%20%23class%09%27%25receiver%25.%24klass%27%20%29%0D%09%09%09%23%28%20%23isNil%09%27%28nil.isNil_%28%25receiver%25%29%29%27%20%29%0D%09%09%09%23%28%20%23notNil%09%27%28nil.isNil_%28%25receiver%25%29%3D%3D%3Dfalse%29%27%20%29%0D%09%09%09%23%28%20%23whileTrue%20%23receiverIsBlockNoArguments%3A%20%27%28function%28%29%7Bwhile%28%25receiver%25%28%29%29%7B%7D%3Breturn%20nil%7D%29%28%29%27%20%29%0D%09%09%09%23%28%20%23whileFalse%20%23receiverIsBlockNoArguments%3A%20%27%28function%28%29%7Bwhile%28%21%21%25receiver%25%28%29%29%7B%7D%3Breturn%20nil%7D%29%28%29%27%20%29%0D%09%09%09%23%28%20%23basicValueOrNil%20%27%28function%28%29%7Bvar%20%241%24%3Breturn%20%28nil.isNil_%28%241%24%20%3D%20%25receiver%25%29%29%20%3F%20nil%20%3A%20%241%24%3B%7D%29%28%29%27%20%29%0D%09%09%29%20%29%0D%09%09%23%28%201%20%23%28%20%22one%20argument%20selectors%20and%20operations%22%0D%09%09%09%23%28%20%23whileTrue%3A%20%23allBlockNoArguments%3A%20%27%28function%28%29%7Bwhile%28%25receiver%25%28%29%29%7B%25arg1%25%28%29%7D%3Breturn%20nil%7D%29%28%29%27%20%29%0D%09%09%09%23%28%20%23whileFalse%3A%20%23allBlockNoArguments%3A%20%27%28function%28%29%7Bwhile%28%21%21%25receiver%25%28%29%29%7B%25arg1%25%28%29%7D%3Breturn%20nil%7D%29%28%29%27%20%29%0D%09%09%09%23%28%20%23ifNil%3A%20%23hasBlockArguments%3A%20%27%28function%28%29%7Bvar%20%241%24%3Breturn%20%28nil.isNil_%28%241%24%20%3D%20%25receiver%25%29%29%20%3F%20%25arg1%25%28%29%20%3A%20%241%24%3B%7D%29%28%29%27%20%29%0D%09%09%09%23%28%20%23ifNotNil%3A%20%23hasBlockArguments%3A%20%27%28function%28%29%7Bvar%20%241%24%3Breturn%20%28nil.isNil_%28%241%24%20%3D%20%25receiver%25%29%3D%3D%3Dfalse%29%20%3F%20%25arg1%25%28%29%20%3A%20%241%24%3B%7D%29%28%29%27%20%29%0D%09%09%09%23%28%20%23%3D%3D%09%27%28nil.is_eqeq_%28%25receiver%25%2C%25arg1%25%29%29%27%20%29%0D%09%09%09%23%28%20%23%3D%3D%3D%09%27%28%25receiver%25%20%3D%3D%3D%20%25arg1%25%29%27%20%29%0D%09%09%09%23%28%20%23%7C%7C%09%27%28%25receiver%25%20%7C%7C%20%25arg1%25%29%27%20%29%0D%09%09%09%23%28%20%23basicAt%3A%09%27%28%28function%28%29%7Bvar%20%241%24%3D%25receiver%25%5B%25arg1%25%5D%3Bif%28nil.isNil_%28%241%24%29%29return%20nil%3Breturn%20%241%24%3B%7D%29%28%29%29%27%20%29%0D%09%09%09%23%28%20%23ifUndefined%3A%20%23hasBlockNoArguments%3A%20%27%28function%28%29%7Bvar%20%241%24%20%3D%20%25receiver%25%3Bif%20%28typeof%20%28%241%24%29%20%3D%3D%20%22undefined%22%29%20return%20%25arg1%25%28%29%3B%20return%20%241%24%3B%7D%29%28%29%27%20%29%0D%09%09%09%23%28%20%23timesRepeat%3A%20%23hasBlockNoArguments%3A%20%27%28function%28%29%7Bfor%28var%20%241%24%3D%25receiver%25%3B%241%24%3E0%3B%241%24--%29%7B%25arg1%25%28%29%7D%3Breturn%20nil%7D%29%28%29%27%20%29%0D%09%09%09%23%28%20%23isKindOf%3A%20%27smalltalk.is_kindOf_%28%25receiver%25%2C%28%25arg1%25%29%29%27%20%29%0D%09%09%09%23%28%20%23respondsTo%3A%20%27smalltalk.responds_to_%28%25receiver%25%2C%28%25arg1%25%29%29%27%20%29%0D%09%09%29%20%29%0D%09%09%23%28%202%20%23%28%20%22two%20argument%20messages%20and%20operations%22%0D%09%09%09%23%28%20%23ifNil%3AifNotNil%3A%20%23hasBlockNoArguments%3A%20%27%28nil.isNil_%28%25receiver%25%29%29%20%3F%20%25arg1%25%28%29%20%3A%20%25arg2%25%28%29%27%20%29%0D%09%09%09%23%28%20%23ifNotNil%3AifNil%3A%20%23hasBlockNoArguments%3A%20%27%28nil.isNil_%28%25receiver%25%29%3D%3D%3Dfalse%29%20%3F%20%25arg1%25%28%29%20%3A%20%25arg2%25%28%29%27%20%29%0D%09%09%09%23%28%20%23basicAt%3AifAbsent%3A%20%27%28%28function%28%29%7Bvar%20%241%24%3D%25receiver%25%5B%25arg1%25%5D%3Bif%28nil.isNil_%28%241%24%29%29return%20%28%25arg2%25.value%28%29%29%3Breturn%20%241%24%3B%7D%29%28%29%29%27%20%29%0D%09%09%09%23%28%20%23basicAt%3Aput%3A%20%27%28%25receiver%25%5B%25arg1%25%5D%3D%28%25arg2%25%29%29%27%20%29%0D%09%09%29%20%29%0D%29"));
smalltalk.bind(smalltalk.StMessageNode.$klass, unescape("initialize"), "initialize", function StMessageNode_class__initialize(){
const self = this; self;
return self;
}
, "class initialization", unescape("initialize%0D%09%22StMessageNode%20initialize%22%0D"));
smalltalk.addClass("StMethodNode", smalltalk.StParseNode, ['selectorOrFalse', 'precedence', 'args', 'block', 'primitive', 'encoder', 'temporaries', 'sourceText', 'locationCounter', 'localsPool'], 'Compiler-JS');
smalltalk.StMethodNode.$classVariableNames=("");
smalltalk.bind(smalltalk.StMethodNode, unescape("block"), "block", function StMethodNode__block(){
const self = this; return self['@block'];
}
, "initialize-release", unescape("block%0D%09%5E%20block"));
smalltalk.bind(smalltalk.StMethodNode, unescape("selector%3Aarguments%3Aprecedence%3Atemporaries%3Ablock%3Aencoder%3Aprimitive%3A"), "selector_arguments_precedence_temporaries_block_encoder_primitive_", function StMethodNode__selector_arguments_precedence_temporaries_block_encoder_primitive_(selOrFalse,argList,p,temps,blk,anEncoder,prim){
const self = this; self['@encoder']=anEncoder;
self['@selectorOrFalse']=selOrFalse;
self['@precedence']=p;
self['@args']=argList;
self['@temporaries']=temps;
self['@block']=blk;
self['@primitive']=prim;
return self;
}
, "initialize-release", unescape("selector%3A%20selOrFalse%20arguments%3A%20argList%20precedence%3A%20p%20temporaries%3A%20temps%20block%3A%20blk%20encoder%3A%20anEncoder%20primitive%3A%20prim%0D%09%22Initialize%20the%20receiver%20with%20respect%20to%20the%20arguments%20given.%22%0D%0D%09encoder%20%3A%3D%20anEncoder.%0D%09selectorOrFalse%20%3A%3D%20selOrFalse.%0D%09precedence%20%3A%3D%20p.%0D%09args%20%3A%3D%20argList.%0D%09temporaries%20%3A%3D%20temps.%0D%09block%20%3A%3D%20blk.%0D%09primitive%20%3A%3D%20prim"));
smalltalk.bind(smalltalk.StMethodNode, unescape("sourceText%3A"), "sourceText_", function StMethodNode__sourceText_(stringOrText){
const self = this; self['@sourceText']=stringOrText;
return self;
}
, "initialize-release", unescape("sourceText%3A%20stringOrText%0D%0D%09sourceText%20%3A%3D%20stringOrText"));
smalltalk.bind(smalltalk.StMethodNode, unescape("arguments"), "arguments", function StMethodNode__arguments(){
const self = this; return self['@args'];
}
, "accessing", unescape("arguments%0D%09%22For%20transformations%20etc%2C%20not%20used%20in%20compilation%22%0D%09%5Eargs"));
smalltalk.bind(smalltalk.StMethodNode, unescape("arguments%3A"), "arguments_", function StMethodNode__arguments_(aSequence){
const self = this; self['@args']=aSequence;
return self;
}
, "accessing", unescape("arguments%3A%20aSequence%0D%09%22For%20transformations%20etc%2C%20not%20used%20in%20compilation%22%0D%09args%20%3A%3D%20aSequence"));
smalltalk.bind(smalltalk.StMethodNode, unescape("body"), "body", function StMethodNode__body(){
const self = this; return self['@block'];
}
, "accessing", unescape("body%0D%09%5Eblock"));
smalltalk.bind(smalltalk.StMethodNode, unescape("doitStatement"), "doitStatement", function StMethodNode__doitStatement(){
var statements = nil;
var returnNode = nil;
const self = this; var $early={name:"stReturn"};
try {
if (((nil.is_eqeq_(self.selector(),"doIt"))).not()) {return nil};
(function(){var $1$; $1$ = self['@block']; if (nil.isNil_($1$)) { return (function StMethodNode__(){
$early.result=nil; throw ($early);
}
)() } else { return $1$; }})();
statements=self['@block'].statements();
if (((nil.is_eqeq_(statements.size(),(1)))).not()) {return nil};
returnNode=statements.first();
return returnNode.expr();
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "accessing", unescape("doitStatement%0D%09%22Assume%20this%20is%20a%20doit%2C%20find%20the%20the%20first%20statement%20and%20return%20the%20message%20node%22%0D%09%7C%20statements%20returnNode%20%7C%0D%09self%20selector%20%3D%3D%20%23doIt%20ifFalse%3A%20%5B%5Enil%5D.%0D%09block%20ifNil%3A%20%5B%5Enil%5D.%0D%09statements%20%3A%3D%20block%20statements.%0D%09statements%20size%20%3D%3D%201%20ifFalse%3A%20%5B%5Enil%5D.%0D%09returnNode%20%3A%3D%20statements%20first.%0D%09%5EreturnNode%20expr"));
smalltalk.bind(smalltalk.StMethodNode, unescape("methodClass"), "methodClass", function StMethodNode__methodClass(){
const self = this; return self['@encoder'].classEncoding();
}
, "accessing", unescape("methodClass%0D%0D%09%5E%20encoder%20classEncoding"));
smalltalk.bind(smalltalk.StMethodNode, unescape("selector"), "selector", function StMethodNode__selector(){
const self = this; if ((self['@selectorOrFalse'].isSymbol()).valueOf()) {return self['@selectorOrFalse']};
return self['@selectorOrFalse'].key();
}
, "accessing", unescape("selector%20%0D%09%22Answer%20the%20message%20selector%20for%20the%20method%20represented%20by%20the%20receiver.%22%0D%0D%09%28selectorOrFalse%20isSymbol%29%0D%09%09ifTrue%3A%20%5B%5EselectorOrFalse%5D.%0D%09%5EselectorOrFalse%20key"));
smalltalk.bind(smalltalk.StMethodNode, unescape("selector%3A"), "selector_", function StMethodNode__selector_(symbol){
const self = this; self['@selectorOrFalse']=symbol;
return self;
}
, "accessing", unescape("selector%3A%20symbol%0D%0D%09selectorOrFalse%20%3A%3D%20symbol"));
smalltalk.bind(smalltalk.StMethodNode, unescape("selectorNode"), "selectorNode", function StMethodNode__selectorNode(){
const self = this; if (((smalltalk.is_kindOf_(self['@selectorOrFalse'],smalltalk.StSelectorNode))).valueOf()) {return self['@selectorOrFalse']} else {return (smalltalk.StSelectorNode.$$new()).key_(self['@selectorOrFalse'])};
}
, "accessing", unescape("selectorNode%0D%09%22Answer%20a%20SelectorNode%20for%20the%20message%20selector%20of%20the%20method%20represented%20by%20the%20receiver.%22%0D%0D%09%5E%28selectorOrFalse%20isKindOf%3A%20StSelectorNode%29%0D%09%09ifTrue%3A%20%5BselectorOrFalse%5D%0D%09%09ifFalse%3A%20%5BStSelectorNode%20new%20key%3A%20selectorOrFalse%5D"));
smalltalk.bind(smalltalk.StMethodNode, unescape("sourceText"), "sourceText", function StMethodNode__sourceText(){
const self = this; return (function(){var $1$; $1$ = self['@sourceText']; if (nil.isNil_($1$)) { return self.printString() } else { return $1$; }})();
}
, "accessing", unescape("sourceText%0D%0D%09%5E%20sourceText%20ifNil%3A%20%5Bself%20printString%5D"));
smalltalk.bind(smalltalk.StMethodNode, unescape("temporaries"), "temporaries", function StMethodNode__temporaries(){
const self = this; return self['@temporaries'];
}
, "accessing", unescape("temporaries%0D%09%22For%20transformations%20etc%2C%20not%20used%20in%20compilation%22%0D%09%5Etemporaries"));
smalltalk.bind(smalltalk.StMethodNode, unescape("temporaries%3A"), "temporaries_", function StMethodNode__temporaries_(aSequence){
const self = this; self['@temporaries']=aSequence;
return self;
}
, "accessing", unescape("temporaries%3A%20aSequence%0D%09%22For%20transformations%20etc%2C%20not%20used%20in%20compilation%22%0D%09temporaries%20%3A%3D%20aSequence"));
smalltalk.bind(smalltalk.StMethodNode, unescape("decompileString"), "decompileString", function StMethodNode__decompileString(){
const self = this; return self.fullPrintString();
}
, "converting", unescape("decompileString%20%0D%09%22Answer%20a%20string%20description%20of%20the%20parse%20tree%20whose%20root%20is%20the%20receiver.%22%0D%0D%09%5Eself%20fullPrintString%0D"));
smalltalk.bind(smalltalk.StMethodNode, unescape("decompileText"), "decompileText", function StMethodNode__decompileText(){
const self = this; return self.asColorizedSmalltalk80Text();
}
, "converting", unescape("decompileText%20%0D%09%22Answer%20a%20string%20description%20of%20the%20parse%20tree%20whose%20root%20is%20the%20receiver.%22%0D%0D%09%5Eself%20asColorizedSmalltalk80Text"));
smalltalk.bind(smalltalk.StMethodNode, unescape("ensureNotQuick"), "ensureNotQuick", function StMethodNode__ensureNotQuick(){
const self = this; return self['@block'].ensureNotQuick_(self['@encoder']);
}
, "converting", unescape("ensureNotQuick%0D%09%22If%20the%20receiver%20is%20quick%20%28can%20be%20generated%20as%20a%20Quick%20method%2C%20%5Eself%2C%5Einst%20var%20or%20%5E%20special%20constant%29%0D%09%20make%20it%20not%20so.%20%20This%20is%20used%20to%20create%20break-pointable%20versions%20of%20quick%20methods.%20%20%20Answer%20if%20the%0D%09%20receiver%20was%20quick.%22%0D%09%5Eblock%20ensureNotQuick%3A%20encoder"));
smalltalk.bind(smalltalk.StMethodNode, unescape("rawSourceRanges"), "rawSourceRanges", function StMethodNode__rawSourceRanges(){
const self = this; return self.rawSourceRangesAndMethodDo_((function StMethodNode__(rawSourceRanges,method){
return rawSourceRanges;
}
));
}
, "source mapping", unescape("rawSourceRanges%0D%0D%09%5Eself%20rawSourceRangesAndMethodDo%3A%20%5B%3ArawSourceRanges%20%3Amethod%7C%20rawSourceRanges%5D"));
smalltalk.bind(smalltalk.StMethodNode, unescape("rawSourceRangesAndMethodDo%3A"), "rawSourceRangesAndMethodDo_", function StMethodNode__rawSourceRangesAndMethodDo_(aBinaryBlock){
var methNode = nil;
var method = nil;
const self = this; methNode=(function StMethodNode__($1$){
$1$.encoderClass_((self['@encoder'].$klass));
return $1$.parse_class_(((nil.isNil_(self['@sourceText']) ? self.decompileString() : self['@sourceText'])),(self.methodClass()))}
)((self['@encoder'].classEncoding()).newParser());
method=methNode.generate();
return aBinaryBlock.value_value_(((methNode.encoder()).rawSourceRanges()),method);
}
, "source mapping", unescape("rawSourceRangesAndMethodDo%3A%20aBinaryBlock%0D%09%22Evaluate%20aBinaryBlock%20with%20the%20rawSourceRanges%20and%20method%20generated%20from%20the%20receiver.%22%0D%0D%09%7C%20methNode%20method%20%7C%0D%09methNode%20%3A%3D%20encoder%20classEncoding%20newParser%0D%09%09%09%09%09encoderClass%3A%20encoder%20class%3B%0D%09%09%09%09%09parse%3A%20%28sourceText%20%22If%20no%20source%2C%20use%20decompile%20string%20as%20source%20to%20map%20from%22%0D%09%09%09%09%09%09%09ifNil%3A%20%5Bself%20decompileString%5D%0D%09%09%09%09%09%09%09ifNotNil%3A%20%5BsourceText%5D%29%0D%09%09%09%09%09class%3A%20self%20methodClass.%0D%09method%20%3A%3D%20methNode%20generate.%20%20%22set%20bytecodes%20to%20map%20to%22%0D%09%5EaBinaryBlock%0D%09%09value%3A%20methNode%20encoder%20rawSourceRanges%0D%09%09value%3A%20method"));
smalltalk.bind(smalltalk.StMethodNode, unescape("generateOn%3A"), "generateOn_", function StMethodNode__generateOn_(generator){
const self = this; (function StMethodNode__(){
generator.methodClass_selector_((self.methodClass()),(self.selector()));
generator.argumentList_((self.arguments()));
generator.startBlock();
generator.generateTemporaries_(self['@temporaries']);
(function(){var $1$; $1$ = self['@primitive']; if (!nil.isNil_($1$)) { return self['@primitive'].generateOn_(generator) } else { return $1$; }})();
generator.defineSelf();
self['@block'].generateMethodBody_(generator);
return generator.endBlock();
}
).on_do_(smalltalk.StCompileException,(function StMethodNode__(ex){
return smalltalk.StCompileException.signal_((ex.messageText()));
}
));
return self;
}
, "generate", unescape("generateOn%3A%20generator%0D%09%5B%0D%09generator%20methodClass%3A%20self%20methodClass%20selector%3A%20self%20selector.%0D%09generator%20argumentList%3A%20self%20arguments.%0D%0D%09generator%20startBlock.%0D%09generator%20generateTemporaries%3A%20temporaries.%0D%09primitive%20ifNotNil%3A%20%5Bprimitive%20generateOn%3A%20generator%5D.%0D%09generator%20defineSelf.%0D%09block%20generateMethodBody%3A%20generator.%0D%09generator%20endBlock%5D%0D%09%09on%3A%20StCompileException%0D%09%09do%3A%20%5B%3Aex%20%7C%20StCompileException%20signal%3A%20ex%20messageText%5D"));
smalltalk.addClass("StPragma", smalltalk.Object, ['method', 'keyword', 'args'], 'Compiler-JS');
smalltalk.StPragma.$classVariableNames=("");
smalltalk.bind(smalltalk.StPragma, unescape("method"), "method", function StPragma__method(){
const self = this; return self['@method'];
}
, "accessing-method", unescape("method%0D%09%22Answer%20the%20compiled-method%20containing%20the%20pragma.%22%0D%09%0D%09%5E%20method"));
smalltalk.bind(smalltalk.StPragma, unescape("methodClass"), "methodClass", function StPragma__methodClass(){
const self = this; return self['@method'].methodClass();
}
, "accessing-method", unescape("methodClass%0D%09%22Answer%20the%20class%20of%20the%20method%20containing%20the%20pragma.%22%0D%09%0D%09%5E%20method%20methodClass"));
smalltalk.bind(smalltalk.StPragma, unescape("selector"), "selector", function StPragma__selector(){
const self = this; return self['@method'].selector();
}
, "accessing-method", unescape("selector%0D%09%22Answer%20the%20selector%20of%20the%20method%20containing%20the%20pragma.%0D%09%20Do%20not%20confuse%20this%20with%20the%20selector%20of%20the%20pragma%27s%20message%20pattern.%22%0D%09%0D%09%5Emethod%20selector"));
smalltalk.bind(smalltalk.StPragma, unescape("setArguments%3A"), "setArguments_", function StPragma__setArguments_(anArray){
const self = this; self['@args']=anArray;
return self;
}
, "initialization", unescape("setArguments%3A%20anArray%0D%09args%20%3A%3D%20anArray"));
smalltalk.bind(smalltalk.StPragma, unescape("setKeyword%3A"), "setKeyword_", function StPragma__setKeyword_(aSymbol){
const self = this; self['@keyword']=aSymbol;
return self;
}
, "initialization", unescape("setKeyword%3A%20aSymbol%0D%09keyword%20%3A%3D%20aSymbol"));
smalltalk.bind(smalltalk.StPragma, unescape("setMethod%3A"), "setMethod_", function StPragma__setMethod_(aCompiledMethod){
const self = this; self['@method']=aCompiledMethod;
return self;
}
, "initialization", unescape("setMethod%3A%20aCompiledMethod%0D%09method%20%3A%3D%20aCompiledMethod"));
smalltalk.bind(smalltalk.StPragma, unescape("hasLiteral%3A"), "hasLiteral_", function StPragma__hasLiteral_(aLiteral){
const self = this; return ((nil.is_eqeq_(self['@keyword'],aLiteral))).or_((function StPragma__(){
return (self['@args'].hasLiteral_(aLiteral)).or_((function StPragma__(){
return ((nil.is_eqeq_(self['@keyword'],"hasLiteralTest:"))).and_((function StPragma__(){
return ((self.methodClass()).theNonMetaClass()).perform_with_((self['@args'].first()),aLiteral);
}
));
}
));
}
));
}
, "testing", unescape("hasLiteral%3A%20aLiteral%0D%09%5Ekeyword%20%3D%3D%20aLiteral%20%0D%09%20%20%20or%3A%20%5B%28args%20hasLiteral%3A%20aLiteral%29%0D%09%09or%3A%20%5Bkeyword%20%3D%3D%20%23hasLiteralTest%3A%20and%3A%20%5B%0D%09%09%09self%20methodClass%20theNonMetaClass%20perform%3A%20args%20first%20with%3A%20aLiteral%5D%5D%5D"));
smalltalk.bind(smalltalk.StPragma, unescape("hasLiteralSuchThat%3A"), "hasLiteralSuchThat_", function StPragma__hasLiteralSuchThat_(aBlock){
const self = this; return (aBlock.value_(self['@keyword'])).or_((function StPragma__(){
return self['@args'].hasLiteralSuchThat_(aBlock);
}
));
}
, "testing", unescape("hasLiteralSuchThat%3A%20aBlock%0D%09%22Answer%20true%20if%20litBlock%20returns%20true%20for%20any%20literal%20in%20the%20receiver%2C%20even%20if%20embedded%20in%20further%20array%20structure.%0D%09%20This%20method%20is%20only%20intended%20for%20private%20use%20by%20CompiledMethod%20hasLiteralSuchThat%3A%22%0D%09%5E%28aBlock%20value%3A%20keyword%29%0D%09%20%20%20or%3A%20%5Bargs%20hasLiteralSuchThat%3A%20aBlock%5D"));
smalltalk.bind(smalltalk.StPragma, unescape("%3D"), "_eq", function StPragma___eq(anObject){
const self = this; return ((nil.is_eqeq_(self.$klass,anObject.$klass))).and_((function StPragma__(){
return ((nil.is_eqeq_(self['@keyword'],anObject.keyword()))).and_((function StPragma__(){
return self['@args']._eq((anObject.arguments()));
}
));
}
));
}
, "comparing", unescape("%3D%20anObject%20%0D%09%5Eself%20class%20%3D%3D%20anObject%20class%0D%09%20%20and%3A%20%5Bkeyword%20%3D%3D%20anObject%20keyword%0D%09%20%20and%3A%20%5Bargs%20%3D%20anObject%20arguments%5D%5D"));
smalltalk.bind(smalltalk.StPragma, unescape("analogousCodeTo%3A"), "analogousCodeTo_", function StPragma__analogousCodeTo_(anObject){
const self = this; return ((nil.is_eqeq_(self.$klass,anObject.$klass))).and_((function StPragma__(){
return ((nil.is_eqeq_(self['@keyword'],anObject.keyword()))).and_((function StPragma__(){
return self['@args']._eq((anObject.arguments()));
}
));
}
));
}
, "comparing", unescape("analogousCodeTo%3A%20anObject%20%0D%09%5Eself%20class%20%3D%3D%20anObject%20class%0D%09%20%20and%3A%20%5Bkeyword%20%3D%3D%20anObject%20keyword%0D%09%20%20and%3A%20%5Bargs%20%3D%20anObject%20arguments%5D%5D"));
smalltalk.bind(smalltalk.StPragma, unescape("hash"), "hash", function StPragma__hash(){
const self = this; return (self['@keyword'].hash())._plus((self['@args'].hash()));
}
, "comparing", unescape("hash%0D%09%5Ekeyword%20hash%20+%20args%20hash"));
smalltalk.bind(smalltalk.StPragma, unescape("argumentAt%3A"), "argumentAt_", function StPragma__argumentAt_(anInteger){
const self = this; return (self.arguments()).at_(anInteger);
}
, "accessing-pragma", unescape("argumentAt%3A%20anInteger%0D%09%22Answer%20one%20of%20the%20arguments%20of%20the%20pragma.%22%0D%09%0D%09%5E%20self%20arguments%20at%3A%20anInteger."));
smalltalk.bind(smalltalk.StPragma, unescape("arguments"), "arguments", function StPragma__arguments(){
const self = this; return self['@args'];
}
, "accessing-pragma", unescape("arguments%0D%09%22Answer%20the%20arguments%20of%20the%20receiving%20pragma.%20For%20a%20pragma%20defined%20as%20%3Ckey1%3A%20val1%20key2%3A%20val2%3E%20this%20will%20answer%20%23%28val1%20val2%29.%22%0D%09%0D%09%5E%20args"));
smalltalk.bind(smalltalk.StPragma, unescape("key"), "key", function StPragma__key(){
const self = this; return self['@keyword'];
}
, "accessing-pragma", unescape("key%0D%09%22Answer%20the%20keyword%20of%20the%20pragma%20%28the%20selector%20of%20its%20message%20pattern%29.%0D%09%20This%20accessor%20provides%20polymorphism%20with%20Associations%20used%20for%20properties.%22%0D%09%5Ekeyword"));
smalltalk.bind(smalltalk.StPragma, unescape("keyword"), "keyword", function StPragma__keyword(){
const self = this; return self['@keyword'];
}
, "accessing-pragma", unescape("keyword%0D%09%22Answer%20the%20keyword%20of%20the%20pragma%20%28the%20selector%20of%20its%20message%20pattern%29.%0D%09%20For%20a%20pragma%20defined%20as%20%3Ckey1%3A%20val1%20key2%3A%20val2%3E%20this%20will%20answer%20%23key1%3Akey2%3A.%22%0D%09%0D%09%5E%20keyword"));
smalltalk.bind(smalltalk.StPragma, unescape("message"), "message", function StPragma__message(){
const self = this; return smalltalk.Message.selector_arguments_((self.keyword()),(self.arguments()));
}
, "accessing-pragma", unescape("message%0D%09%22Answer%20the%20message%20of%20the%20receiving%20pragma.%22%0D%09%0D%09%5E%20Message%20selector%3A%20self%20keyword%20arguments%3A%20self%20arguments.%20"));
smalltalk.bind(smalltalk.StPragma, unescape("numArgs"), "numArgs", function StPragma__numArgs(){
const self = this; return (self.arguments()).size();
}
, "accessing-pragma", unescape("numArgs%0D%09%22Answer%20the%20number%20of%20arguments%20in%20the%20pragma.%22%0D%0D%09%5E%20self%20arguments%20size."));
smalltalk.StPragma.$klass.$iVarNames = [];
smalltalk.bind(smalltalk.StPragma.$klass, unescape("keyword%3Aarguments%3A"), "keyword_arguments_", function StPragma_class__keyword_arguments_(aSymbol,anArray){
const self = this; return (function StPragma_class__($1$){
$1$.setKeyword_(aSymbol);
$1$.setArguments_(anArray);
return $1$.yourself()}
)(self.$$new());
}
, "private", unescape("keyword%3A%20aSymbol%20arguments%3A%20anArray%0D%09%5E%20self%20new%0D%09%09setKeyword%3A%20aSymbol%3B%0D%09%09setArguments%3A%20anArray%3B%0D%09%09yourself."));
smalltalk.bind(smalltalk.StPragma.$klass, unescape("withPragmasIn%3Ado%3A"), "withPragmasIn_do_", function StPragma_class__withPragmasIn_do_(aClass,aBlock){
const self = this; aClass.selectorsAndMethodsDo_((function StPragma_class__(selector,method){
return (method.pragmas()).do_(aBlock);
}
));
return self;
}
, "private", unescape("withPragmasIn%3A%20aClass%20do%3A%20aBlock%0D%09aClass%20selectorsAndMethodsDo%3A%20%5B%20%3Aselector%20%3Amethod%20%7C%20method%20pragmas%20do%3A%20aBlock%20%5D."));
smalltalk.bind(smalltalk.StPragma.$klass, unescape("withStPragmasIn%3Ado%3A"), "withStPragmasIn_do_", function StPragma_class__withStPragmasIn_do_(aClass,aBlock){
const self = this; aClass.selectorsAndMethodsDo_((function StPragma_class__(selector,method){
return (method.pragmas()).do_(aBlock);
}
));
return self;
}
, "private", unescape("withStPragmasIn%3A%20aClass%20do%3A%20aBlock%0D%09aClass%20selectorsAndMethodsDo%3A%20%5B%20%3Aselector%20%3Amethod%20%7C%20method%20pragmas%20do%3A%20aBlock%20%5D."));
smalltalk.bind(smalltalk.StPragma.$klass, unescape("for%3Aselector%3Aarguments%3A"), "for_selector_arguments_", function StPragma_class__for_selector_arguments_(aMethod,aSelector,anArray){
const self = this; return (function StPragma_class__($1$){
$1$.setMethod_(aMethod);
$1$.setKeyword_(aSelector);
$1$.setArguments_(anArray);
return $1$.yourself()}
)(self.$$new());
}
, "instance creation", unescape("for%3A%20aMethod%20selector%3A%20aSelector%20arguments%3A%20anArray%0D%09%5Eself%20new%0D%09%09setMethod%3A%20aMethod%3B%0D%09%09setKeyword%3A%20aSelector%3B%0D%09%09setArguments%3A%20anArray%3B%0D%09%09yourself"));
smalltalk.addClass("StPrimitiveNode", smalltalk.StParseNode, ['module', 'primitive'], 'Compiler-JS');
smalltalk.StPrimitiveNode.$classVariableNames=("");
smalltalk.bind(smalltalk.StPrimitiveNode, unescape("generateOn%3A"), "generateOn_", function StPrimitiveNode__generateOn_(generator){
const self = this; generator.generatePrimitiveDirect_module_(self['@primitive'],self['@module']);
return self;
}
, "generate", unescape("generateOn%3A%20generator%0D%09generator%20generatePrimitiveDirect%3A%20primitive%20module%3A%20module"));
smalltalk.bind(smalltalk.StPrimitiveNode, unescape("module%3Aprimitive%3A"), "module_primitive_", function StPrimitiveNode__module_primitive_(moduleName,primitiveName){
const self = this; self['@module']=moduleName;
self['@primitive']=primitiveName;
return self;
}
, "initialize-release", unescape("module%3A%20moduleName%20primitive%3A%20primitiveName%0D%09module%20%3A%3D%20moduleName.%0D%09primitive%20%3A%3D%20primitiveName"));
smalltalk.addClass("StReturnNode", smalltalk.StParseNode, ['expr', 'nonLocal'], 'Compiler-JS');
smalltalk.StReturnNode.$classVariableNames=("");
smalltalk.bind(smalltalk.StReturnNode, unescape("asReturnNode"), "asReturnNode", function StReturnNode__asReturnNode(){
const self = this; self;
return self;
}
, "converting", "asReturnNode");
smalltalk.bind(smalltalk.StReturnNode, unescape("expr%3A"), "expr_", function StReturnNode__expr_(e){
const self = this; self['@nonLocal']=false;
self['@expr']=e;
return self;
}
, "initialize-release", unescape("expr%3A%20e%0D%09nonLocal%20%3A%3D%20false.%0D%09expr%20%3A%3D%20e"));
smalltalk.bind(smalltalk.StReturnNode, unescape("generateBlockBodyOn%3A"), "generateBlockBodyOn_", function StReturnNode__generateBlockBodyOn_(generator){
const self = this; if ((self['@nonLocal']).valueOf()) {generator.nonLocalReturnWith_((function StReturnNode__(){
return self['@expr'].generateBlockBodyOn_(generator);
}
))} else {generator.$$return();
self['@expr'].generateBlockBodyOn_(generator)};
return self;
}
, "generate", unescape("generateBlockBodyOn%3A%20generator%0D%09nonLocal%0D%09%09ifTrue%3A%20%5Bgenerator%20nonLocalReturnWith%3A%20%5Bexpr%20generateBlockBodyOn%3A%20generator%5D%5D%0D%09%09ifFalse%3A%20%5B%0D%09%09%09generator%20return.%0D%09%09%09expr%20generateBlockBodyOn%3A%20generator%5D"));
smalltalk.bind(smalltalk.StReturnNode, unescape("generateInlinedBlockValueOn%3A"), "generateInlinedBlockValueOn_", function StReturnNode__generateInlinedBlockValueOn_(generator){
const self = this; if ((self['@nonLocal']).valueOf()) {generator.nonLocalReturnWith_((function StReturnNode__(){
return self['@expr'].generateInlinedBlockValueOn_(generator);
}
))} else {generator.$$return();
self['@expr'].generateInlinedBlockValueOn_(generator)};
return self;
}
, "generate", unescape("generateInlinedBlockValueOn%3A%20generator%0D%09nonLocal%0D%09%09ifTrue%3A%20%5Bgenerator%20nonLocalReturnWith%3A%20%5Bexpr%20generateInlinedBlockValueOn%3A%20generator%5D%5D%0D%09%09ifFalse%3A%20%5B%0D%09%09%09generator%20return.%0D%09%09%09expr%20generateInlinedBlockValueOn%3A%20generator%5D"));
smalltalk.bind(smalltalk.StReturnNode, unescape("generateOn%3A"), "generateOn_", function StReturnNode__generateOn_(generator){
const self = this; if ((self['@nonLocal']).valueOf()) {generator.nonLocalReturnWith_((function StReturnNode__(){
return self['@expr'].generateInlinedValueOn_(generator);
}
))} else {if ((self['@expr'].isIf()).valueOf()) {self['@expr'].inlineReturns();
self['@expr'].generateOn_(generator)} else {generator.$$return();
self['@expr'].generateInlinedValueOn_(generator)}};
return self;
}
, "generate", unescape("generateOn%3A%20generator%0D%09nonLocal%0D%09%09ifTrue%3A%20%5Bgenerator%20nonLocalReturnWith%3A%20%5Bexpr%20generateInlinedValueOn%3A%20generator%5D%5D%0D%09%09ifFalse%3A%20%5B%0D%09%09%09expr%20isIf%0D%09%09%09%09ifTrue%3A%20%5B%0D%09%09%09%09%09expr%20inlineReturns.%0D%09%09%09%09%09expr%20generateOn%3A%20generator%5D%0D%09%09%09%09ifFalse%3A%20%5B%0D%09%09%09%09%09generator%20return.%0D%09%09%09%09%09expr%20generateInlinedValueOn%3A%20generator%5D%5D"));
smalltalk.bind(smalltalk.StReturnNode, unescape("expr"), "expr", function StReturnNode__expr(){
const self = this; return self['@expr'];
}
, "private", unescape("expr%0D%0D%09%5E%20expr.%0D"));
smalltalk.bind(smalltalk.StReturnNode, unescape("hasNonLocalBlockReturn%3A"), "hasNonLocalBlockReturn_", function StReturnNode__hasNonLocalBlockReturn_(generator){
const self = this; return self['@expr'].hasNonLocalBlockReturn_(generator);
}
, "testing", unescape("hasNonLocalBlockReturn%3A%20generator%0D%09%5Eexpr%20hasNonLocalBlockReturn%3A%20generator"));
smalltalk.bind(smalltalk.StReturnNode, unescape("hasNonLocalBlockReturn%3Aoptimized%3A"), "hasNonLocalBlockReturn_optimized_", function StReturnNode__hasNonLocalBlockReturn_optimized_(generator,parentOptimized){
const self = this; return self['@expr'].hasNonLocalBlockReturn_optimized_(generator,parentOptimized);
}
, "testing", unescape("hasNonLocalBlockReturn%3A%20generator%20optimized%3A%20parentOptimized%0D%09%5Eexpr%20hasNonLocalBlockReturn%3A%20generator%20optimized%3A%20parentOptimized"));
smalltalk.bind(smalltalk.StReturnNode, unescape("isExpression"), "isExpression", function StReturnNode__isExpression(){
const self = this; return self['@nonLocal'].not();
}
, "testing", unescape("isExpression%0D%09%5EnonLocal%20not"));
smalltalk.bind(smalltalk.StReturnNode, unescape("isReturnSelf"), "isReturnSelf", function StReturnNode__isReturnSelf(){
const self = this; return (nil.is_eqeq_(self['@expr'],smalltalk.StReturnNode.classVariableAt_("NodeSelf")));
}
, "testing", unescape("isReturnSelf%0D%0D%09%5Eexpr%20%3D%3D%20NodeSelf"));
smalltalk.bind(smalltalk.StReturnNode, unescape("markNonLocalReturns"), "markNonLocalReturns", function StReturnNode__markNonLocalReturns(){
const self = this; self['@nonLocal']=true;
self['@expr'].markNonLocalReturns();
return self;
}
, "testing", unescape("markNonLocalReturns%0D%09nonLocal%20%3A%3D%20true.%0D%09expr%20markNonLocalReturns"));
smalltalk.addClass("StScanner", smalltalk.Object, ['source', 'mark', 'hereChar', 'aheadChar', 'token', 'tokenType', 'currentComment', 'buffer', 'typeTable'], 'Compiler-JS');
smalltalk.StScanner.$classVariableNames=("AllowBlockArgumentAssignment AllowUnderscoreAssignments AllowUnderscoreSelectors AllowUnicharSymbol DoItCharacter TypeTable");
smalltalk.bind(smalltalk.StScanner, unescape("ambiguousSelector%3AinRange%3A"), "ambiguousSelector_inRange_", function StScanner__ambiguousSelector_inRange_(aString,anInterval){
const self = this; self['@token']=self['@token'].asSymbol();
return self;
}
, "error handling", unescape("ambiguousSelector%3A%20aString%20inRange%3A%20anInterval%0D%09%22Compile%20with%20backward%20compatibility%3A%20%24-%20is%20part%20of%20literal%20argument..%22%0D%09%0D%09token%20%3A%3D%20token%20asSymbol.%0D%09%5Eself"));
smalltalk.bind(smalltalk.StScanner, unescape("notify%3A"), "notify_", function StScanner__notify_(string){
const self = this; self.error_(string);
return self;
}
, "error handling", unescape("notify%3A%20string%20%0D%09%22Refer%20to%20the%20comment%20in%20Object%7Cnotify%3A.%22%20%0D%09self%20error%3A%20string"));
smalltalk.bind(smalltalk.StScanner, unescape("notify%3Aat%3A"), "notify_at_", function StScanner__notify_at_(string,posiiton){
const self = this; return self.notify_(string);
}
, "error handling", unescape("notify%3A%20string%20at%3A%20posiiton%0D%09%22Parser%20compatible%20message%22%0D%09%20%0D%09%5Eself%20notify%3A%20string%20"));
smalltalk.bind(smalltalk.StScanner, unescape("offEnd%3A"), "offEnd_", function StScanner__offEnd_(aString){
const self = this; return self.notify_(aString);
}
, "error handling", unescape("offEnd%3A%20aString%20%0D%09%22Parser%20overrides%20this%22%0D%0D%09%5Eself%20notify%3A%20aString"));
smalltalk.bind(smalltalk.StScanner, unescape("advance"), "advance", function StScanner__advance(){
var prevToken = nil;
const self = this; prevToken=self['@token'];
self.scanToken();
return prevToken;
}
, "expression types", unescape("advance%0D%0D%09%7C%20prevToken%20%7C%0D%09prevToken%20%3A%3D%20token.%0D%09self%20scanToken.%0D%09%5EprevToken"));
smalltalk.bind(smalltalk.StScanner, unescape("scanAllTokenPositionsInto%3A"), "scanAllTokenPositionsInto_", function StScanner__scanAllTokenPositionsInto_(aBlock){
var lastMark = nil;
const self = this; var $early={name:"stReturn"};
try {
lastMark=(1);
(function StScanner__(){
(function(){var $1$; $1$ = self['@currentComment']; if (!nil.isNil_($1$)) { return (function StScanner__(){
self['@currentComment'].do_((function StScanner__(cmnt){
var idx = nil;
idx=(self['@source'].originalContents()).indexOfSubCollection_startingAt_(cmnt,lastMark);
if (((idx._gt((0))).and_((function StScanner__(){
return idx._lt(self['@mark']);
}
))).valueOf()) {return aBlock.value_value_((idx._minus((1))),(lastMark=idx._plus((cmnt.size()))))} else {return nil};
}
));
return self['@currentComment']=nil;
}
)() } else { return $1$; }})();
(function(){var $2$; $2$ = self['@mark']; if (!nil.isNil_($2$)) { return (function StScanner__(){
if ((((nil.is_eqeq_(self['@token'],unescape("-")))).and_((function StScanner__(){
return (nil.is_eqeq_(self.typeTableAt_(self['@hereChar']),"xDigit"));
}
))).valueOf()) {var savedMark = nil;
savedMark=self['@mark'];
self.scanToken();
self['@token']=self['@token'].negated();
self['@mark']=savedMark};
return aBlock.value_value_(self['@mark'],((self['@source'].position())._minus((((nil.is_eqeq_(self['@aheadChar'],smalltalk.StScanner.classVariableAt_("DoItCharacter")))).ifTrue_ifFalse_((function StScanner__(){
if (((nil.is_eqeq_(self['@hereChar'],smalltalk.StScanner.classVariableAt_("DoItCharacter")))).valueOf()) {return (0)} else {return (1)};
}
),(function StScanner__(){
return (2);
}
))))));
}
)() } else { return $2$; }})();
if ((((nil.is_eqeq_(self['@tokenType'],"rightParenthesis"))).or_((function StScanner__(){
return (nil.is_eqeq_(self['@tokenType'],"doIt"));
}
))).valueOf()) {$early.result=self; throw ($early)};
if (((nil.is_eqeq_(self['@tokenType'],"leftParenthesis"))).valueOf()) {(function StScanner__($3$){
$3$.scanToken();
return $3$.scanAllTokenPositionsInto_(aBlock)}
)(self)} else {if ((((nil.is_eqeq_(self['@tokenType'],"word"))).or_((function StScanner__(){
return ((nil.is_eqeq_(self['@tokenType'],"keyword"))).or_((function StScanner__(){
return (nil.is_eqeq_(self['@tokenType'],"colon"));
}
));
}
))).valueOf()) {self.scanLitWord();
if (((nil.is_eqeq_(self['@token'],"true"))).valueOf()) {self['@token']=true};
if (((nil.is_eqeq_(self['@token'],"false"))).valueOf()) {self['@token']=false};
if (((nil.is_eqeq_(self['@token'],"nil"))).valueOf()) {self['@token']=nil}} else {if ((((nil.is_eqeq_(self['@token'],unescape("-")))).and_((function StScanner__(){
return (nil.is_eqeq_(self.typeTableAt_(self['@hereChar']),"xDigit"));
}
))).valueOf()) {self.scanToken();
self['@token']=self['@token'].negated()}}};
return self.scanToken();
}
).repeat();
return self;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "expression types", unescape("scanAllTokenPositionsInto%3A%20aBlock%0D%09%22Evaluate%20aBlock%20with%20the%20start%20and%20end%20positions%20of%20all%20separate%20non-white-space%20tokens%2C%20including%20comments.%22%0D%0D%09%7C%20lastMark%20%7C%0D%09lastMark%20%3A%3D%201.%0D%09%5BcurrentComment%20ifNotNil%3A%0D%09%09%5BcurrentComment%20do%3A%0D%09%09%09%5B%3Acmnt%7C%20%7C%20idx%20%7C%0D%09%09%09%20idx%20%3A%3D%20source%20originalContents%20indexOfSubCollection%3A%20cmnt%20startingAt%3A%20lastMark.%0D%09%09%09%20%28idx%20%3E%200%20and%3A%20%5Bidx%20%3C%20mark%5D%29%20ifTrue%3A%0D%09%09%09%09%5BaBlock%20value%3A%20idx%20-%201%20value%3A%20%28lastMark%20%3A%3D%20idx%20+%20cmnt%20size%29%5D%5D.%0D%09%09%20currentComment%20%3A%3D%20nil%5D.%0D%09mark%20ifNotNil%3A%0D%09%09%5B%28token%20%3D%3D%20%23-%20%0D%09%09%20%20and%3A%20%5B%28self%20typeTableAt%3A%20hereChar%29%20%3D%3D%20%23xDigit%5D%29%20ifTrue%3A%0D%09%09%09%5B%7C%20savedMark%20%7C%0D%09%09%09%20savedMark%20%3A%3D%20mark.%0D%09%09%09%20self%20scanToken.%0D%09%09%09%20token%20%3A%3D%20token%20negated.%0D%09%09%09%20mark%20%3A%3D%20savedMark%5D.%0D%09%09%22Compensate%20for%20the%20fact%20that%20the%20parser%20uses%20two%20character%20lookahead.%20%20Normally%20we%20must%0D%09%09%20%20remove%20the%20extra%20two%20characters.%20%20But%20this%20mustn%27t%20happen%20for%20the%20last%20token%20at%20the%20end%20of%20stream.%22%0D%09%09%20aBlock%0D%09%09%09value%3A%20mark%0D%09%09%09value%3A%20source%20position%20-%20%28aheadChar%20%3D%3D%20DoItCharacter%0D%09%09%09%09ifTrue%3A%20%5BhereChar%20%3D%3D%20DoItCharacter%0D%09%09%09%09%09ifTrue%3A%20%5B0%5D%0D%09%09%09%09%09ifFalse%3A%20%5B1%5D%5D%0D%09%09%09%09ifFalse%3A%20%5B2%5D%29%5D.%0D%09%20%28tokenType%20%3D%3D%20%23rightParenthesis%0D%09%20%20or%3A%20%5BtokenType%20%3D%3D%20%23doIt%5D%29%20ifTrue%3A%0D%09%09%5B%5Eself%5D.%0D%09tokenType%20%3D%3D%20%23leftParenthesis%0D%09%09ifTrue%3A%20%0D%09%09%09%5Bself%20scanToken%3B%20scanAllTokenPositionsInto%3A%20aBlock%5D%0D%09%09ifFalse%3A%20%0D%09%09%09%5B%28tokenType%20%3D%3D%20%23word%20or%3A%20%5BtokenType%20%3D%3D%20%23keyword%20or%3A%20%5BtokenType%20%3D%3D%20%23colon%5D%5D%29%0D%09%09%09%09ifTrue%3A%20%0D%09%09%09%09%09%5Bself%20scanLitWord.%0D%09%09%09%09%09%20token%20%3D%3D%20%23true%20ifTrue%3A%20%5Btoken%20%3A%3D%20true%5D.%0D%09%09%09%09%09%20token%20%3D%3D%20%23false%20ifTrue%3A%20%5Btoken%20%3A%3D%20false%5D.%0D%09%09%09%09%09%20token%20%3D%3D%20%23nil%20ifTrue%3A%20%5Btoken%20%3A%3D%20nil%5D%5D%0D%09%09%09%09ifFalse%3A%0D%09%09%09%09%09%5B%28token%20%3D%3D%20%23-%20%0D%09%09%09%09%09%20%20and%3A%20%5B%28self%20typeTableAt%3A%20hereChar%29%20%3D%3D%20%23xDigit%5D%29%0D%09%09%09%09%09%09ifTrue%3A%20%0D%09%09%09%09%09%09%09%5Bself%20scanToken.%0D%09%09%09%09%09%09%09%20token%20%3A%3D%20token%20negated%5D%5D%5D.%0D%09%09self%20scanToken%20%5D%20repeat"));
smalltalk.bind(smalltalk.StScanner, unescape("scanLitByteVec"), "scanLitByteVec", function StScanner__scanLitByteVec(){
var stream = nil;
const self = this; var $early={name:"stReturn"};
try {
stream=(smalltalk.ByteArray.new_((16))).writeStream();
while((((nil.is_eqeq_(self['@tokenType'],"rightBracket"))).or_((function StScanner__(){
return (nil.is_eqeq_(self['@tokenType'],"doIt"));
}
))).not()){if (((nil.is_eqeq_(self['@tokenType'],"word"))).valueOf()) {self.scanLitWord()};
if (((self['@token'].isInteger()).and_((function StScanner__(){
return self['@token'].between_and_((0),(255));
}
))).not()) {$early.result=self.offEnd_(unescape("8-bit%20integer%20or%20right%20bracket%20expected")); throw ($early)};
stream.nextPut_(self['@token']);
self.scanToken()};;
self['@token']=stream.contents();
return self;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "expression types", unescape("scanLitByteVec%0D%09%7C%20stream%20%7C%0D%09stream%20%3A%3D%20%28ByteArray%20new%3A%2016%29%20writeStream.%0D%09%5B%20tokenType%20%3D%3D%20%23rightBracket%20or%3A%20%5B%20tokenType%20%3D%3D%20%23doIt%20%5D%20%5D%20whileFalse%3A%20%5B%0D%09%09tokenType%20%3D%3D%20%23word%0D%09%09%09ifTrue%3A%20%5B%20self%20scanLitWord%20%5D.%0D%09%09%28token%20isInteger%20and%3A%20%5B%20token%20between%3A%200%20and%3A%20255%20%5D%29%0D%09%09%09ifFalse%3A%20%5B%20%5E%20self%20offEnd%3A%20%278-bit%20integer%20or%20right%20bracket%20expected%27%20%5D.%0D%09%09stream%20nextPut%3A%20token.%0D%09%09self%20scanToken%20%5D.%0D%09token%20%3A%3D%20stream%20contents"));
smalltalk.bind(smalltalk.StScanner, unescape("scanLitVec"), "scanLitVec", function StScanner__scanLitVec(){
var s = nil;
const self = this; s=(smalltalk.Array.new_((16))).writeStream();
while((((nil.is_eqeq_(self['@tokenType'],"rightParenthesis"))).or_((function StScanner__(){
return (nil.is_eqeq_(self['@tokenType'],"doIt"));
}
))).not()){if (((nil.is_eqeq_(self['@tokenType'],"leftParenthesis"))).valueOf()) {(function StScanner__($1$){
$1$.scanToken();
return $1$.scanLitVec()}
)(self)} else {if ((((nil.is_eqeq_(self['@tokenType'],"word"))).or_((function StScanner__(){
return ((nil.is_eqeq_(self['@tokenType'],"keyword"))).or_((function StScanner__(){
return (nil.is_eqeq_(self['@tokenType'],"colon"));
}
));
}
))).valueOf()) {self.scanLitWord();
if (((nil.is_eqeq_(self['@token'],"true"))).valueOf()) {self['@token']=true};
if (((nil.is_eqeq_(self['@token'],"false"))).valueOf()) {self['@token']=false};
if (((nil.is_eqeq_(self['@token'],"nil"))).valueOf()) {self['@token']=nil}} else {if (((self['@token']._eq(unescape("-"))).and_((function StScanner__(){
return (nil.is_eqeq_(self.typeTableAt_(self['@hereChar']),"xDigit"));
}
))).valueOf()) {self.scanToken();
self['@token']=self['@token'].negated()} else {if (((self['@token'].isCharacter()).and_((function StScanner__(){
return self['@tokenType']._no_no("character");
}
))).valueOf()) {self['@token']=self['@token'].asSymbol()} else {nil}}}};
s.nextPut_(self['@token']);
self.scanToken()};;
self['@token']=s.contents();
return self;
}
, "expression types", unescape("scanLitVec%0D%09%7C%20s%20%7C%0D%09s%20%3A%3D%20%28Array%20new%3A%2016%29%20writeStream.%0D%09%5BtokenType%20%3D%3D%20%23rightParenthesis%20or%3A%20%5BtokenType%20%3D%3D%20%23doIt%5D%5D%20whileFalse%3A%0D%09%09%5BtokenType%20%3D%3D%20%23leftParenthesis%0D%09%09%09ifTrue%3A%20%0D%09%09%09%09%5Bself%20scanToken%3B%20scanLitVec%5D%0D%09%09%09ifFalse%3A%20%0D%09%09%09%09%5B%28tokenType%20%3D%3D%20%23word%20or%3A%20%5BtokenType%20%3D%3D%20%23keyword%20or%3A%20%5BtokenType%20%3D%3D%20%23colon%5D%5D%29%0D%09%09%09%09%09ifTrue%3A%20%0D%09%09%09%09%09%09%5Bself%20scanLitWord.%0D%09%09%09%09%09%09token%20%3D%3D%20%23true%20ifTrue%3A%20%5Btoken%20%3A%3D%20true%5D.%0D%09%09%09%09%09%09token%20%3D%3D%20%23false%20ifTrue%3A%20%5Btoken%20%3A%3D%20false%5D.%0D%09%09%09%09%09%09token%20%3D%3D%20%23nil%20ifTrue%3A%20%5Btoken%20%3A%3D%20nil%5D%5D%0D%09%09%09%09%09ifFalse%3A%20%5B%0D%09%09%09%09%09%09%28token%20%3D%20%23-%20%0D%09%09%09%09%09%09and%3A%20%5B%28self%20typeTableAt%3A%20hereChar%29%20%3D%3D%20%23xDigit%5D%29%0D%09%09%09%09%09%09ifTrue%3A%20%5B%0D%09%09%09%09%09%09%09self%20scanToken.%0D%09%09%09%09%09%09%09%20token%20%3A%3D%20token%20negated%5D%0D%09%09%09%09%09%09ifFalse%3A%20%5B%28token%20isCharacter%20and%3A%20%5BtokenType%20%7E%7E%20%23character%5D%29%0D%09%09%09%09%09%09%09ifTrue%3A%20%5Btoken%20%3A%3D%20token%20asSymbol%5D%0D%09%09%09%09%09%09%09ifFalse%3A%20%5B%5D%5D%5D%5D.%0D%09%09s%20nextPut%3A%20token.%0D%09%09self%20scanToken%5D.%0D%09token%20%3A%3D%20s%20contents"));
smalltalk.bind(smalltalk.StScanner, unescape("scanLitWord"), "scanLitWord", function StScanner__scanLitWord(){
const self = this; self['@token']=(smalltalk.String.streamContents_((function StScanner__(stream){
stream.nextPutAll_(self['@token']);
return (function(){while((nil.is_eqeq_(self.typeTableAt_(self['@hereChar']),"xLetter"))){self.xLetter();
stream.nextPutAll_(self['@token'])};return nil})();
}
))).asSymbol();
return self;
}
, "expression types", unescape("scanLitWord%0D%09%22Accumulate%20keywords%20and%20asSymbol%20the%20result.%22%0D%0D%09token%20%3A%3D%20%28String%20streamContents%3A%20%5B%20%3Astream%20%7C%0D%09%09stream%20nextPutAll%3A%20token.%0D%09%09%5B%20%28self%20typeTableAt%3A%20hereChar%29%20%3D%3D%20%23xLetter%20%5D%20whileTrue%3A%20%5B%0D%09%09%09self%20xLetter.%0D%09%09%09stream%20nextPutAll%3A%20token%20%5D%20%5D%29%20asSymbol"));
smalltalk.bind(smalltalk.StScanner, unescape("scanStringStruct"), "scanStringStruct", function StScanner__scanStringStruct(){
var s = nil;
const self = this; var $early={name:"stReturn"};
try {
s=(smalltalk.Array.new_((16))).writeStream();
while((((nil.is_eqeq_(self['@tokenType'],"rightParenthesis"))).or_((function StScanner__(){
return (nil.is_eqeq_(self['@tokenType'],"doIt"));
}
))).not()){if (((nil.is_eqeq_(self['@tokenType'],"leftParenthesis"))).valueOf()) {(function StScanner__($1$){
$1$.scanToken();
return $1$.scanStringStruct()}
)(self)} else {if (((nil.is_eqeq_(self['@tokenType'],"word"))).not()) {$early.result=self.error_("only words and parens allowed"); throw ($early)}};
s.nextPut_(self['@token']);
self.scanToken()};;
self['@token']=s.contents();
return self;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "expression types", unescape("scanStringStruct%0D%0D%09%7C%20s%20%7C%0D%09s%20%3A%3D%20%28Array%20new%3A%2016%29%20writeStream.%0D%09%5BtokenType%20%3D%3D%20%23rightParenthesis%20or%3A%20%5BtokenType%20%3D%3D%20%23doIt%5D%5D%0D%09%09whileFalse%3A%20%0D%09%09%09%5BtokenType%20%3D%3D%20%23leftParenthesis%0D%09%09%09%09ifTrue%3A%20%0D%09%09%09%09%09%5Bself%20scanToken%3B%20scanStringStruct%5D%0D%09%09%09%09ifFalse%3A%20%0D%09%09%09%09%09%5BtokenType%20%3D%3D%20%23word%20ifFalse%3A%0D%09%09%09%09%09%09%5B%5Eself%20error%3A%20%27only%20words%20and%20parens%20allowed%27%5D%5D.%0D%09%09%09s%20nextPut%3A%20token.%0D%09%09%09self%20scanToken%5D.%0D%09token%20%3A%3D%20s%20contents"));
smalltalk.bind(smalltalk.StScanner, unescape("scanToken"), "scanToken", function StScanner__scanToken(){
const self = this; while(((nil.is_eqeq_(self['@tokenType']=self.typeTableAt_(self['@hereChar']),"xDelimiter"))).valueOf()){self.step()};;
self['@mark']=((nil.is_eqeq_(self['@aheadChar'],smalltalk.StScanner.classVariableAt_("DoItCharacter")))).ifTrue_ifFalse_((function StScanner__(){
if (((nil.is_eqeq_(self['@hereChar'],smalltalk.StScanner.classVariableAt_("DoItCharacter")))).valueOf()) {return (self['@source'].position())._plus((1))} else {return self['@source'].position()};
}
),(function StScanner__(){
return (self['@source'].position())._minus((1));
}
));
if (((nil.is_eqeq_(self['@tokenType'].at_((1)),"x"))).valueOf()) {self.perform_(self['@tokenType'])} else {self['@token']=self.step()};
return self['@token'];
}
, "expression types", unescape("scanToken%0D%0D%09%5B%28tokenType%20%3A%3D%20self%20typeTableAt%3A%20hereChar%29%20%3D%3D%20%23xDelimiter%5D%0D%09%09whileTrue%3A%20%5Bself%20step%5D.%20%20%22Skip%20delimiters%20fast%2C%20there%20almost%20always%20is%20one.%22%0D%09mark%20%3A%3D%20aheadChar%20%3D%3D%20DoItCharacter%0D%09%09ifTrue%3A%20%5BhereChar%20%3D%3D%20DoItCharacter%0D%09%09%09ifTrue%3A%20%5Bsource%20position%20+%201%5D%0D%09%09%09ifFalse%3A%20%5Bsource%20position%5D%5D%0D%09%09ifFalse%3A%20%5Bsource%20position%20-%201%5D.%0D%09%28tokenType%20at%3A%201%29%20%3D%3D%20%24x%20%22x%20as%20first%20letter%22%0D%09%09ifTrue%3A%20%5Bself%20perform%3A%20tokenType%20%22means%20perform%20to%20compute%20token%20%26%20type%22%5D%0D%09%09ifFalse%3A%20%5Btoken%20%3A%3D%20self%20step%20%22else%20just%20unique%20the%20first%20char%22%5D.%0D%09%5Etoken"));
smalltalk.bind(smalltalk.StScanner, unescape("step"), "step", function StScanner__step(){
var c = nil;
const self = this; c=self['@hereChar'];
self['@hereChar']=self['@aheadChar'];
if ((self['@source'].atEnd()).valueOf()) {self['@aheadChar']=smalltalk.StScanner.classVariableAt_("DoItCharacter")} else {self['@aheadChar']=self['@source'].next()};
return c;
}
, "expression types", unescape("step%0D%0D%09%7C%20c%20%7C%0D%09c%20%3A%3D%20hereChar.%0D%09hereChar%20%3A%3D%20aheadChar.%0D%09source%20atEnd%0D%09%09ifTrue%3A%20%5BaheadChar%20%3A%3D%20DoItCharacter%5D%0D%09%09ifFalse%3A%20%5BaheadChar%20%3A%3D%20source%20next%5D.%0D%09%5Ec"));
smalltalk.bind(smalltalk.StScanner, unescape("initStScannerForTokenization"), "initStScannerForTokenization", function StScanner__initStScannerForTokenization(){
var underscoreIndex = nil;
const self = this; var $early={name:"stReturn"};
try {
underscoreIndex=self['@typeTable'].identityIndexOf_ifAbsent_("xUnderscore",(function StScanner__(){
$early.result=self; throw ($early);
}
));
self['@typeTable']=self['@typeTable'].copy();
self['@typeTable'].at_put_(underscoreIndex,"xUnderscoreForTokenization");
return self;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "initialize-release", unescape("initStScannerForTokenization%0D%09%22Use%20a%20version%20of%20typeTable%20that%20doesn%27t%20raise%20xIllegal%20when%20enocuntering%20an%20_%22%0D%09%7C%20underscoreIndex%20%7C%0D%09underscoreIndex%20%3A%3D%20typeTable%20identityIndexOf%3A%20%23xUnderscore%20ifAbsent%3A%20%5B%5Eself%5D.%0D%09typeTable%20%3A%3D%20typeTable%20copy.%0D%09typeTable%20at%3A%20underscoreIndex%20put%3A%20%23xUnderscoreForTokenization"));
smalltalk.bind(smalltalk.StScanner, unescape("initialize"), "initialize", function StScanner__initialize(){
const self = this; smalltalk.superImplementor(smalltalk.StScanner,'initialize').apply(self, []);
self['@buffer']="".writeStream();
self['@typeTable']=smalltalk.StScanner.classVariableAt_("TypeTable");
return self;
}
, "initialize-release", unescape("initialize%0D%0D%09super%20initialize.%0D%09buffer%20%3A%3D%20%27%27%20writeStream.%0D%09typeTable%20%3A%3D%20TypeTable"));
smalltalk.bind(smalltalk.StScanner, unescape("scan%3A"), "scan_", function StScanner__scan_(inputStream){
const self = this; self['@source']=inputStream;
self.step();
self.step();
self.scanToken();
return self;
}
, "initialize-release", unescape("scan%3A%20inputStream%20%0D%09%22Bind%20the%20input%20stream%2C%20fill%20the%20character%20buffers%20and%20first%20token%20buffer.%22%0D%0D%09source%20%3A%3D%20inputStream.%0D%09self%20step.%0D%09self%20step.%0D%09self%20scanToken"));
smalltalk.bind(smalltalk.StScanner, unescape("typeTableAt%3A"), "typeTableAt_", function StScanner__typeTableAt_(aCharacter){
const self = this; return self['@typeTable'].at_ifAbsent_((aCharacter.charCode()),(function StScanner__(){
if (((nil.is_eqeq_(aCharacter,smalltalk.StScanner.classVariableAt_("DoItCharacter")))).valueOf()) {return "doIt"} else {return "xLetter"};
}
));
}
, "multi-character scans", unescape("typeTableAt%3A%20aCharacter%0D%09%5EtypeTable%0D%09%09at%3A%20aCharacter%20charCode%0D%09%09ifAbsent%3A%0D%09%09%09%5BaCharacter%20%3D%3D%20DoItCharacter%0D%09%09%09%09ifTrue%3A%20%5B%23doIt%5D%0D%09%09%09%09ifFalse%3A%20%5B%23xLetter%5D%5D"));
smalltalk.bind(smalltalk.StScanner, unescape("xBinary"), "xBinary", function StScanner__xBinary(){
var startOfToken = nil;
const self = this; self['@tokenType']="binary";
startOfToken=self['@mark'];
self['@token']=smalltalk.String.with_((self.step()));
while((((nil.is_eqeq_(self.typeTableAt_(self['@hereChar']),"xBinary"))).or_((function StScanner__(){
return (nil.is_eqeq_(self.typeTableAt_(self['@hereChar']),"verticalBar"));
}
))).valueOf()){if ((((nil.is_eqeq_(self['@hereChar'],unescape("-")))).and_((function StScanner__(){
return (nil.is_eqeq_(self.typeTableAt_(self['@aheadChar']),"xDigit"));
}
))).valueOf()) {return self.ambiguousSelector_inRange_((self['@token']._comma(unescape("-"))),(startOfToken.to_(((self['@source'].position())._minus((1))))))};
self['@token']=self['@token']._comma((smalltalk.String.with_((self.step()))))};;
if ((self['@token']._eq((unescape("%255C%255C%255C%255C").unescaped()))).valueOf()) {self['@token']=unescape("%255C%255C").unescaped()};
self['@token']=self['@token'].asSymbol();
return self;
}
, "multi-character scans", unescape("xBinary%0D%0D%09%7C%20startOfToken%20%7C%0D%09tokenType%20%3A%3D%20%23binary.%0D%09startOfToken%20%3A%3D%20mark.%0D%09token%20%3A%3D%20String%20with%3A%20self%20step.%0D%09%5B%28self%20typeTableAt%3A%20hereChar%29%20%3D%3D%20%23xBinary%20or%3A%20%5B%28self%20typeTableAt%3A%20hereChar%29%20%3D%3D%20%23verticalBar%5D%5D%20whileTrue%3A%0D%09%09%5B%28hereChar%20%3D%3D%20%24-%20and%3A%20%5B%28self%20typeTableAt%3A%20aheadChar%29%20%3D%3D%20%23xDigit%5D%29%0D%09%09%09ifTrue%3A%20%5B%5Eself%20ambiguousSelector%3A%20%28token%20%2C%20%27-%27%29%0D%09%09%09%09%09inRange%3A%20%28startOfToken%20to%3A%20source%20position%20-%201%29.%5D.%0D%09%09token%20%3A%3D%20token%2C%20%28String%20with%3A%20self%20step%29%5D.%0D%09%22ugly%20hack%20to%20make%20%5C%5C%5C%5C%20selector%20parsing%20work%20in%20JS%22%0D%09token%20%3D%20%27%255C%255C%255C%255C%27%20unescaped%0D%09%09ifTrue%3A%20%5Btoken%20%3A%3D%20%27%255C%255C%27%20unescaped%5D.%0D%09token%20%3A%3D%20token%20asSymbol"));
smalltalk.bind(smalltalk.StScanner, unescape("xColon"), "xColon", function StScanner__xColon(){
const self = this; if (((nil.is_eqeq_(self['@aheadChar'],unescape("%3D")))).valueOf()) {self.step();
self['@tokenType']="leftArrow";
self.step();
return self['@token']=unescape("%3A%3D")};
self['@tokenType']="colon";
return self['@token']=(self.step()).asSymbol();
}
, "multi-character scans", unescape("xColon%0D%09%22Allow%20%3A%3D%20for%20assignment%22%0D%09%0D%09aheadChar%20%3D%3D%20%24%3D%20ifTrue%3A%0D%09%09%5Bself%20step.%0D%09%09tokenType%20%3A%3D%20%23leftArrow.%0D%09%09self%20step.%0D%09%09%5E%20token%20%3A%3D%20%23%27%3A%3D%27%5D.%0D%09%22Otherwise%2C%20just%20do%20what%20normal%20scan%20of%20colon%20would%20do%22%0D%09tokenType%20%3A%3D%20%23colon.%0D%09%5E%20token%20%3A%3D%20self%20step%20asSymbol"));
smalltalk.bind(smalltalk.StScanner, unescape("xDelimiter"), "xDelimiter", function StScanner__xDelimiter(){
const self = this; self.scanToken();
return self;
}
, "multi-character scans", unescape("xDelimiter%0D%09%22Ignore%20blanks%2C%20etc.%22%0D%0D%09self%20scanToken"));
smalltalk.bind(smalltalk.StScanner, unescape("xDigit"), "xDigit", function StScanner__xDigit(){
var numberString = nil;
const self = this; self['@tokenType']="number";
if (((nil.is_eqeq_(self['@aheadChar'],smalltalk.StScanner.classVariableAt_("DoItCharacter")))).valueOf()) {self['@source'].skip_((-1))} else {self['@source'].skip_((-2))};
numberString=self.scanNumberString_(self['@source']);
self['@token']=numberString.asNumber();
(function StScanner__($1$){
$1$.step();
return $1$.step()}
)(self);
return self;
}
, "multi-character scans", unescape("xDigit%0D%09%22Form%20a%20number.%22%0D%09%7C%20numberString%20%7C%0D%09tokenType%20%3A%3D%20%23number.%0D%09aheadChar%20%3D%3D%20DoItCharacter%0D%09%09ifTrue%3A%20%5Bsource%20skip%3A%20-1%20%22Read%20off%20the%20end%20last%20time%22%5D%0D%09%09ifFalse%3A%20%5Bsource%20skip%3A%20-2%5D.%0D%09numberString%20%3A%3D%20self%20scanNumberString%3A%20source.%0D%09token%20%3A%3D%20numberString%20asNumber.%0D%22%09%5Btoken%20%3A%3D%20Number%20readFrom%3A%20source%5D%20on%3A%20Error%20do%3A%20%5B%20%3Aex%20%7C%20self%20notify%3A%20ex%20description%5D.%0D%22%0D%22%09token%20%3A%3D%20%28SqNumberParser%20on%3A%20source%29%0D%09%09failBlock%3A%20%5B%3AerrorString%20%3Aposition%20%7C%20self%20notify%3A%20errorString%20at%3Aposition%5D%3B%0D%09%09nextNumber.%0D%22%0D%09self%20step%3B%20step"));
smalltalk.bind(smalltalk.StScanner, unescape("xDollar"), "xDollar", function StScanner__xDollar(){
const self = this; if (((nil.is_eqeq_(self['@aheadChar'],smalltalk.StScanner.classVariableAt_("DoItCharacter")))).valueOf()) {self['@mark']=self['@mark']._plus((1));
return self.offEnd_("A Character was expected")};
self.step();
self['@token']=self.step();
self['@tokenType']="character";
return self;
}
, "multi-character scans", unescape("xDollar%0D%09%22Form%20a%20Character%20literal.%22%0D%0D%09aheadChar%20%3D%3D%20DoItCharacter%0D%09%09ifTrue%3A%0D%09%09%09%5Bmark%20%3A%3D%20mark%20+%201.%20%22Let%20the%20notification%20lie%20behind%20the%20dollar%22%0D%09%09%09%5Eself%20offEnd%3A%20%27A%20Character%20was%20expected%27%5D.%0D%09self%20step.%20%22pass%20over%20%24%22%0D%09token%20%3A%3D%20self%20step.%0D%09tokenType%20%3A%3D%20%23character"));
smalltalk.bind(smalltalk.StScanner, unescape("xDoubleQuote"), "xDoubleQuote", function StScanner__xDoubleQuote(){
const self = this; var $early={name:"stReturn"};
try {
self['@buffer'].resetToStart();
self.step();
while(((nil.is_eqeq_(self['@hereChar'],unescape("%22")))).not()){if (((nil.is_eqeq_(self['@hereChar'],smalltalk.StScanner.classVariableAt_("DoItCharacter")))).valueOf()) {$early.result=self.offEnd_("Unmatched comment quote"); throw ($early)};
self['@buffer'].nextPut_((self.step()))};;
self.step();
((function(){var $1$; $1$ = self['@currentComment']; if (nil.isNil_($1$)) { return self['@currentComment']=smalltalk.OrderedCollection.$$new() } else { return $1$; }})()).add_((self['@buffer'].contents()));
self.scanToken();
return self;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "multi-character scans", unescape("xDoubleQuote%0D%20%20%20%20%22Collect%20a%20comment.%22%0D%0D%09buffer%20resetToStart.%0D%09self%20step.%0D%09%5B%20hereChar%20%3D%3D%20%24%22%20%5D%20whileFalse%3A%20%5B%0D%09%09hereChar%20%3D%3D%20DoItCharacter%20ifTrue%3A%20%5B%0D%09%09%09%5Eself%20offEnd%3A%20%27Unmatched%20comment%20quote%27%20%5D.%0D%09%09buffer%20nextPut%3A%20self%20step%20%5D.%0D%09self%20step.%0D%09%28currentComment%20ifNil%3A%20%5B%20%0D%09%09currentComment%20%3A%3D%20OrderedCollection%20new%20%5D%29%0D%09%09%09add%3A%20buffer%20contents.%0D%09self%20scanToken"));
smalltalk.bind(smalltalk.StScanner, unescape("xIllegal"), "xIllegal", function StScanner__xIllegal(){
const self = this; self.notify_at_(((((unescape("Illegal%20character%20%28char%20code%20")._comma((self['@hereChar'].charCode())))._comma(" "))._comma(((self['@hereChar'].charCode()).storeStringHex())))._comma(unescape("%29"))),self['@mark']);
return self;
}
, "multi-character scans", unescape("xIllegal%0D%09%22An%20illegal%20character%20was%20encountered%22%0D%09self%20notify%3A%20%27Illegal%20character%20%28char%20code%20%27%20%2C%20hereChar%20charCode%20%2C%20%27%20%27%20%2C%20hereChar%20charCode%20storeStringHex%20%2C%20%27%29%27%20at%3A%20mark"));
smalltalk.bind(smalltalk.StScanner, unescape("xLetter"), "xLetter", function StScanner__xLetter(){
var type = nil;
const self = this; self['@buffer'].resetToStart();
while((((nil.is_eqeq_(type=self.typeTableAt_(self['@hereChar']),"xLetter"))).or_((function StScanner__(){
return ((nil.is_eqeq_(type,"xDigit"))).or_((function StScanner__(){
return ((nil.is_eqeq_(type,"xUnderscore"))).and_((function StScanner__(){
return self.allowUnderscoreSelectors();
}
));
}
));
}
))).valueOf()){self['@buffer'].nextPut_(self['@hereChar']);
self['@hereChar']=self['@aheadChar'];
self['@aheadChar']=(self['@source'].atEnd()).ifTrue_ifFalse_((function StScanner__(){
return smalltalk.StScanner.classVariableAt_("DoItCharacter");
}
),(function StScanner__(){
return self['@source'].next();
}
))};;
self['@tokenType']=(((nil.is_eqeq_(type,"xColon"))).and_((function StScanner__(){
return self['@aheadChar']._no_no(unescape("%3D"));
}
))).ifTrue_ifFalse_((function StScanner__(){
self['@buffer'].nextPut_((self.step()));
while(((nil.is_eqeq_(self.typeTableAt_(self['@hereChar']),"xColon"))).valueOf()){self['@buffer'].nextPut_((self.step()))};;
return "keyword";
}
),(function StScanner__(){
return "word";
}
));
self['@token']=self['@buffer'].contents();
return self;
}
, "multi-character scans", unescape("xLetter%0D%09%22Form%20a%20word%20or%20keyword.%22%0D%0D%09%7C%20type%20%7C%0D%09buffer%20resetToStart.%0D%09%5B%28type%20%3A%3D%20self%20typeTableAt%3A%20hereChar%29%20%3D%3D%20%23xLetter%0D%09%09or%3A%20%5Btype%20%3D%3D%20%23xDigit%0D%09%09or%3A%20%5Btype%20%3D%3D%20%23xUnderscore%20and%3A%5Bself%20allowUnderscoreSelectors%5D%5D%5D%5D%20whileTrue%3A%0D%09%09%09%5B%22open%20code%20step%20for%20speed%22%0D%09%09%09buffer%20nextPut%3A%20hereChar.%0D%09%09%09hereChar%20%3A%3D%20aheadChar.%0D%09%09%09aheadChar%20%3A%3D%20source%20atEnd%0D%09%09%09%09%09%09%09ifTrue%3A%20%5BDoItCharacter%5D%0D%09%09%09%09%09%09%09ifFalse%3A%20%5Bsource%20next%5D%5D.%0D%09tokenType%20%3A%3D%20%28type%20%3D%3D%20%23xColon%20and%3A%20%5BaheadChar%20%7E%7E%20%24%3D%5D%29%0D%09%09%09%09%09ifTrue%3A%20%0D%09%09%09%09%09%09%5Bbuffer%20nextPut%3A%20self%20step.%0D%09%09%09%09%09%09%22Allow%20any%20number%20of%20embedded%20colons%20in%20literal%20symbols%22%0D%09%09%09%09%09%09%5B%28self%20typeTableAt%3A%20hereChar%29%20%3D%3D%20%23xColon%5D%20whileTrue%3A%0D%09%09%09%09%09%09%09%5Bbuffer%20nextPut%3A%20self%20step%5D.%0D%09%09%09%09%09%09%23keyword%5D%0D%09%09%09%09%09ifFalse%3A%20%0D%09%09%09%09%09%09%5B%23word%5D.%0D%09token%20%3A%3D%20buffer%20contents"));
smalltalk.bind(smalltalk.StScanner, unescape("xLitQuote"), "xLitQuote", function StScanner__xLitQuote(){
var start = nil;
const self = this; start=self['@mark'];
self.step();
self.scanToken();
if (((nil.is_eqeq_(self['@tokenType'],"leftParenthesis"))).valueOf()) {(function StScanner__($1$){
$1$.scanToken();
return $1$.scanLitVec()}
)(self);
self['@mark']=start._plus((1));
if (((nil.is_eqeq_(self['@tokenType'],"doIt"))).valueOf()) {self.offEnd_("Unmatched parenthesis")}} else {if (((nil.is_eqeq_(self['@tokenType'],"leftBracket"))).valueOf()) {(function StScanner__($2$){
$2$.scanToken();
return $2$.scanLitByteVec()}
)(self);
self['@mark']=start._plus((1));
if (((nil.is_eqeq_(self['@tokenType'],"doIt"))).valueOf()) {self.offEnd_("Unmatched bracket")}} else {if ((((nil.is_eqeq_(self['@tokenType'],"word"))).or_((function StScanner__(){
return ((nil.is_eqeq_(self['@tokenType'],"keyword"))).or_((function StScanner__(){
return (nil.is_eqeq_(self['@tokenType'],"colon"));
}
));
}
))).valueOf()) {self.scanLitWord()} else {if ((((nil.is_eqeq_(self['@tokenType'],"string"))).or_((function StScanner__(){
return (nil.is_eqeq_(self['@tokenType'],"verticalBar"));
}
))).valueOf()) {self['@token']=self['@token'].asSymbol()} else {if (((nil.is_eqeq_(self['@tokenType'],"binary"))).not()) {if (((self['@token'].isCharacter()).and_((function StScanner__(){
return (self['@tokenType']._no_no("character")).and_((function StScanner__(){
return (self.$klass).prefAllowUnicharSymbol();
}
));
}
))).valueOf()) {self['@token']=self['@token'].asSymbol()} else {self.notify_at_("Invalid literal character",(start._plus((1))))}}}}}};
self['@mark']=start;
self['@tokenType']="literal";
return self;
}
, "multi-character scans", unescape("xLitQuote%0D%09%22Symbols%20and%20vectors%3A%20%23%281%20%284%205%29%202%203%29%20%23ifTrue%3AifFalse%3A%20%23%27abc%27.%22%0D%09%7C%20start%20%7C%0D%09start%20%3A%3D%20mark.%0D%09self%20step.%20%22litQuote%22%0D%09self%20scanToken.%0D%09tokenType%20%3D%3D%20%23leftParenthesis%0D%09%09ifTrue%3A%20%5Bself%20scanToken%3B%20scanLitVec.%0D%09%09%09mark%20%3A%3D%20start%20+%201.%0D%09%09%09tokenType%20%3D%3D%20%23doIt%0D%09%09%09%09ifTrue%3A%20%5Bself%20offEnd%3A%20%27Unmatched%20parenthesis%27%5D%5D%0D%09%09ifFalse%3A%20%5BtokenType%20%3D%3D%20%23leftBracket%0D%09%09%09%09ifTrue%3A%20%5Bself%20scanToken%3B%20scanLitByteVec.%0D%09%09%09%09%09mark%20%3A%3D%20start%20+%201.%0D%09%09%09%09%09tokenType%20%3D%3D%20%23doIt%0D%09%09%09%09%09%09ifTrue%3A%20%5Bself%20offEnd%3A%20%27Unmatched%20bracket%27%5D%5D%0D%09%09%09%09ifFalse%3A%20%5B%28tokenType%20%3D%3D%20%23word%20or%3A%20%5BtokenType%20%3D%3D%20%23keyword%20or%3A%20%5BtokenType%20%3D%3D%20%23colon%5D%5D%29%0D%09%09%09%09%09%09ifTrue%3A%20%5Bself%20scanLitWord%5D%0D%09%09%09%09%09%09ifFalse%3A%20%5B%28tokenType%20%3D%3D%20%23string%20or%3A%20%5B%20tokenType%20%3D%3D%20%23verticalBar%20%5D%29%0D%09%09%09%09%09%09%09ifTrue%3A%20%5Btoken%20%3A%3D%20token%20asSymbol%5D%0D%09%09%09%09%09%09%09ifFalse%3A%20%5BtokenType%20%3D%3D%20%23binary%20%0D%09%09%09%09%09%09%09%09ifFalse%3A%20%5B%28token%20isCharacter%20and%3A%20%5BtokenType%20%7E%7E%20%23character%20and%3A%20%5Bself%20class%20prefAllowUnicharSymbol%5D%5D%29%0D%09%09%09%09%09%09%09%09%09ifTrue%3A%20%5Btoken%20%3A%3D%20token%20asSymbol%5D%0D%09%09%09%09%09%09%09%09%09ifFalse%3A%20%5Bself%20notify%3A%20%27Invalid%20literal%20character%27%20at%3A%20start%20+%201%5D%5D%5D%5D%5D%5D.%0D%09mark%20%3A%3D%20start.%0D%09tokenType%20%3A%3D%20%23literal%0D%0D%09%22%23%28Pen%29%0D%09%23Pen%0D%09%23%27Pen%27%0D%09%22"));
smalltalk.bind(smalltalk.StScanner, unescape("xSingleQuote"), "xSingleQuote", function StScanner__xSingleQuote(){
const self = this; var $early={name:"stReturn"};
try {
self.step();
self['@buffer'].resetToStart();
while((((nil.is_eqeq_(self['@hereChar'],unescape("%27")))).and_((function StScanner__(){
if (((nil.is_eqeq_(self['@aheadChar'],unescape("%27")))).valueOf()) {self.step();
return false} else {return true};
}
))).not()){if (((nil.is_eqeq_(self['@hereChar'],smalltalk.StScanner.classVariableAt_("DoItCharacter")))).valueOf()) {$early.result=self.offEnd_("Unmatched string quote"); throw ($early)};
self['@buffer'].nextPut_((self.step()))};;
self.step();
self['@token']=self['@buffer'].contents();
self['@tokenType']="string";
return self;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "multi-character scans", unescape("xSingleQuote%0D%09%22String.%22%0D%0D%09self%20step.%0D%09buffer%20resetToStart.%0D%09%5BhereChar%20%3D%3D%20%24%27%20%0D%09%09and%3A%20%5BaheadChar%20%3D%3D%20%24%27%20%0D%09%09%09%09ifTrue%3A%20%5Bself%20step.%20false%5D%0D%09%09%09%09ifFalse%3A%20%5Btrue%5D%5D%5D%0D%09%09whileFalse%3A%20%0D%09%09%09%5BhereChar%20%3D%3D%20DoItCharacter%0D%09%09%09%09ifTrue%3A%20%5B%5Eself%20offEnd%3A%20%27Unmatched%20string%20quote%27%5D.%0D%09%09%09buffer%20nextPut%3A%20self%20step%5D.%0D%09self%20step.%0D%09token%20%3A%3D%20buffer%20contents.%0D%09tokenType%20%3A%3D%20%23string"));
smalltalk.bind(smalltalk.StScanner, unescape("xUnderscore"), "xUnderscore", function StScanner__xUnderscore(){
const self = this; if ((self.allowUnderscoreAssignments()).valueOf()) {var type = nil;
if (((((nil.is_eqeq_(type=self.typeTableAt_(self['@aheadChar']),"xLetter"))).or_((function StScanner__(){
return ((nil.is_eqeq_(type,"xDigit"))).or_((function StScanner__(){
return (nil.is_eqeq_(type,"xUnderscore"));
}
));
}
))).and_((function StScanner__(){
return self.allowUnderscoreSelectors();
}
))).not()) {self.step();
self['@tokenType']="leftArrow";
return self['@token']="_"}};
if ((self.allowUnderscoreSelectors()).valueOf()) {return self.xLetter()};
return self.xIllegal();
}
, "multi-character scans", unescape("xUnderscore%0D%09self%20allowUnderscoreAssignments%20ifTrue%3A%5B%20%7C%20type%20%7C%0D%09%09%22Figure%20out%20if%20x%20_foo%20%28no%20space%20between%20_%20and%20foo%29%20%0D%09%09should%20be%20a%20selector%20or%20assignment%22%0D%09%09%28%28%28type%20%3A%3D%20self%20typeTableAt%3A%20aheadChar%29%20%3D%3D%20%23xLetter%0D%09%09%09or%3A%5Btype%20%3D%3D%20%23xDigit%20or%3A%5Btype%20%3D%3D%20%23xUnderscore%5D%5D%29%20%0D%09%09%09and%3A%5Bself%20allowUnderscoreSelectors%5D%29%20ifFalse%3A%5B%0D%09%09%09%09self%20step.%0D%09%09%09%09tokenType%20%3A%3D%20%23leftArrow.%0D%09%09%09%09%5Etoken%20%3A%3D%20%23%27_%27%0D%09%09%5D.%0D%09%5D.%0D%09self%20allowUnderscoreSelectors%20ifTrue%3A%5B%5Eself%20xLetter%5D.%0D%09%5Eself%20xIllegal"));
smalltalk.bind(smalltalk.StScanner, unescape("xUnderscoreForTokenization"), "xUnderscoreForTokenization", function StScanner__xUnderscoreForTokenization(){
const self = this; self.step();
self['@tokenType']="leftArrow";
return self['@token']="_";
}
, "multi-character scans", unescape("xUnderscoreForTokenization%0D%09self%20step.%0D%09tokenType%20%3A%3D%20%23leftArrow.%0D%09%5Etoken%20%3A%3D%20%23%27_%27"));
smalltalk.bind(smalltalk.StScanner, unescape("scanFieldNames%3A"), "scanFieldNames_", function StScanner__scanFieldNames_(stringOrArray){
var strm = nil;
const self = this; if ((stringOrArray.isArray()).valueOf()) {return stringOrArray};
self.scan_(((stringOrArray.asString()).readStream()));
strm=(smalltalk.Array.new_((10))).writeStream();
while(((nil.is_eqeq_(self['@tokenType'],"doIt"))).not()){if (((nil.is_eqeq_(self['@tokenType'],"word"))).valueOf()) {strm.nextPut_(self['@token'])};
self.scanToken()};;
return strm.contents();
}
, "public access", unescape("scanFieldNames%3A%20stringOrArray%0D%09%22Answer%20an%20Array%20of%20Strings%20that%20are%20the%20identifiers%20in%20the%20input%20string%2C%20%0D%09stringOrArray.%20If%20passed%20an%20Array%2C%20just%20answer%20with%20that%20Array%2C%20i.e.%2C%20%0D%09assume%20it%20has%20already%20been%20scanned.%22%0D%0D%09%7C%20strm%20%7C%0D%09stringOrArray%20isArray%0D%09%09ifTrue%3A%20%5B%5EstringOrArray%5D.%0D%09self%20scan%3A%20%28stringOrArray%20asString%20readStream%29.%0D%09strm%20%3A%3D%20%28Array%20new%3A%2010%29%20writeStream.%0D%09%5BtokenType%20%3D%3D%20%23doIt%5D%0D%09%09whileFalse%3A%20%0D%09%09%09%5BtokenType%20%3D%3D%20%23word%20ifTrue%3A%20%5Bstrm%20nextPut%3A%20token%5D.%0D%09%09%09self%20scanToken%5D.%0D%09%5Estrm%20contents%0D%0D%09%22StScanner%20new%20scanFieldNames%3A%20%27abc%20%20def%20ghi%27%20%28%27abc%27%20%27def%27%20%27ghi%27%20%29%22"));
smalltalk.bind(smalltalk.StScanner, unescape("scanStringStruct%3A"), "scanStringStruct_", function StScanner__scanStringStruct_(textOrString){
const self = this; self.scan_(((textOrString.asString()).readStream()));
self.scanStringStruct();
return self['@token'];
}
, "public access", unescape("scanStringStruct%3A%20textOrString%20%0D%09%22The%20input%20is%20a%20string%20whose%20elements%20are%20identifiers%20and%20parenthesized%0D%09%20groups%20of%20identifiers.%20%20Answer%20an%20array%20reflecting%20that%20structure%2C%20representing%0D%09%20each%20identifier%20by%20an%20uninterned%20string.%22%0D%0D%09self%20scan%3A%20textOrString%20asString%20readStream.%0D%09self%20scanStringStruct.%0D%09%5Etoken%0D%0D%09%22StScanner%20new%20scanStringStruct%3A%20%27a%20b%20%28c%20d%29%20%28e%20f%20g%29%27%22"));
smalltalk.bind(smalltalk.StScanner, unescape("scanTokenPositionsIn%3Ainto%3A"), "scanTokenPositionsIn_into_", function StScanner__scanTokenPositionsIn_into_(textOrString,aBlock){
const self = this; self.initStScannerForTokenization();
self['@source']=(textOrString.asString()).readStream();
self.step();
self.step();
self.scanAllTokenPositionsInto_(aBlock);
return self;
}
, "public access", unescape("scanTokenPositionsIn%3A%20textOrString%20into%3A%20aBlock%0D%09%22Evaluate%20aBlock%20with%20the%20start%20and%20end%20positions%20of%20all%20separate%20non-white-space%20tokens%2C%20including%20comments%2C%20in%20textOrString.%22%0D%0D%09self%20initStScannerForTokenization.%0D%09source%20%3A%3D%20textOrString%20asString%20readStream.%0D%09self%20step.%0D%09self%20step.%0D%09self%20scanAllTokenPositionsInto%3A%20aBlock%0D%0D%09%22%7C%20code%20%7C%0D%09code%20%3A%3D%20%27%20%20%20%20%20%20%20%23%28%201%202%20%23%28%203%204%20%29%29%20%2016r123%20123%20123.0%20%20%27%2C%20%28StScanner%20sourceCodeAt%3A%20%23scanTokenPositionsIn%3Ainto%3A%29.%0D%09StScanner%20new%20scanTokenPositionsIn%3A%20code%20into%3A%20%5B%3Astart%20%3Aend%7C%20Transcript%20cr%3B%20nextPut%3A%20%24_%3B%20nextPutAll%3A%20%28code%20copyFrom%3A%20start%20to%3A%20end%29%3B%20nextPut%3A%20%24_%3B%20endEntry%5D%22%0D%0D%09%22CodeDiffBuilder%20buildDisplayPatchFrom%3A%20%20%28StScanner%20sourceCodeAt%3A%20%23scanTokenPositionsIn%3Ainto%3A%29%20to%3A%20%20%28%28StScanner%20sourceCodeAt%3A%20%23scanTokenPositionsIn%3Ainto%3A%29%20copyReplaceAll%3A%20%28String%20with%3A%20Character%20cr%29%20with%3A%20%27%27%29%22%0D%0D%09%22CodeDiffBuilder%20buildDisplayPatchFrom%3A%20%20%27colorTable%20%5EcolorTable%20ifNil%3A%20%5BcolorTable%20_%20ST80ColorTable%5D%27%20to%3A%27colorTable%20%5EcolorTable%20ifNil%3A%20%5BcolorTable%20_%20ST80ColorTable%5D%27%22"));
smalltalk.bind(smalltalk.StScanner, unescape("scanTokens%3A"), "scanTokens_", function StScanner__scanTokens_(textOrString){
const self = this; self.scan_(((textOrString.asString()).readStream()));
self.scanLitVec();
return self['@token'];
}
, "public access", unescape("scanTokens%3A%20textOrString%20%0D%09%22Answer%20an%20Array%20that%20has%20been%20tokenized%20as%20though%20the%20input%20text%2C%20%0D%09textOrString%2C%20had%20appeared%20between%20the%20array%20delimitors%20%23%28%20and%20%29%20in%20a%20%0D%09Smalltalk%20literal%20expression.%22%0D%0D%09self%20scan%3A%20textOrString%20asString%20readStream.%0D%09self%20scanLitVec.%0D%09%5Etoken%0D%0D%09%22StScanner%20new%20scanTokens%3A%20%27identifier%20keyword%3A%208r31%20%27%27string%27%27%20.%27%22"));
smalltalk.bind(smalltalk.StScanner, unescape("typedScan%3Ado%3A"), "typedScan_do_", function StScanner__typedScan_do_(textOrString,aBinaryBlock){
var theTokensType = nil;
var atNumber = nil;
var theToken = nil;
const self = this; self.initStScannerForTokenization();
self.scan_(((textOrString.asString()).readStream()));
atNumber=((nil.isNil_(self['@hereChar'])===false)).and_((function StScanner__(){
return self['@hereChar'].isDigit();
}
));
theTokensType=self['@tokenType'];
theToken=self.advance();
if ((((nil.is_eqeq_(theToken,unescape("-")))).and_((function StScanner__(){
return atNumber.and_((function StScanner__(){
return self['@token'].isNumber();
}
));
}
))).valueOf()) {theToken=(self.advance()).negated()};
if ((theToken.isNumber()).valueOf()) {theTokensType="number"};
return aBinaryBlock.value_value_(theToken,((["number", "string", "literal"].includes_(theTokensType)).ifTrue_ifFalse_((function StScanner__(){
return "literal";
}
),(function StScanner__(){
return "word";
}
))));
}
, "public access", unescape("typedScan%3A%20textOrString%20do%3A%20aBinaryBlock%0D%09%22Evaluate%20aBinaryBlock%20with%20the%20token%20and%20its%20type%20for%20the%20first%20token%20in%20input%2C%0D%09%20mapping%20literals%20to%20type%20%23literal%20and%20anything%20else%20to%20type%20%23word.%22%0D%09%7C%20theTokensType%20atNumber%20theToken%20%7C%0D%09self%20initStScannerForTokenization.%0D%09self%20scan%3A%20textOrString%20asString%20readStream.%0D%09atNumber%20%3A%3D%20hereChar%20notNil%20and%3A%20%5BhereChar%20isDigit%5D.%0D%09theTokensType%20%3A%3D%20tokenType.%0D%09theToken%20%3A%3D%20self%20advance.%0D%09%28theToken%20%3D%3D%20%23-%20and%3A%20%5BatNumber%20and%3A%20%5Btoken%20isNumber%5D%5D%29%20ifTrue%3A%0D%09%09%5BtheToken%20%3A%3D%20self%20advance%20negated%5D.%0D%09theToken%20isNumber%20ifTrue%3A%20%5BtheTokensType%20%3A%3D%20%23number%5D.%0D%09%5EaBinaryBlock%0D%09%09value%3A%20theToken%0D%09%09value%3A%20%28%28%23%28number%20string%20literal%29%20includes%3A%20theTokensType%29%0D%09%09%09%09ifTrue%3A%20%5B%23literal%5D%0D%09%09%09%09ifFalse%3A%20%5B%23word%5D%29"));
smalltalk.bind(smalltalk.StScanner, unescape("typedScanTokens%3A"), "typedScanTokens_", function StScanner__typedScanTokens_(textOrString){
var s = nil;
const self = this; self.initStScannerForTokenization();
self.scan_(((textOrString.asString()).readStream()));
s=(smalltalk.Array.new_((16))).writeStream();
while(((nil.is_eqeq_(self['@tokenType'],"doIt"))).not()){if ((((nil.is_eqeq_(self['@token'],unescape("-")))).and_((function StScanner__(){
return (nil.is_eqeq_(self.typeTableAt_(self['@hereChar']),"xDigit"));
}
))).valueOf()) {self.scanToken();
self['@token']=self['@token'].negated()};
s.nextPut_(self['@token']);
self.scanToken()};;
return s.contents();
}
, "public access", unescape("typedScanTokens%3A%20textOrString%20%0D%09%22Answer%20an%20Array%20that%20has%20been%20tokenized%20with%20literals%20mapped%20to%20literals%2C%0D%09%20special%20characters%20mapped%20to%20symbols%20and%20variable%20names%20and%20keywords%0D%09%20to%20strings.%20This%20methiod%20accepts%20_%20%28underscore%29%20as%20an%20assignment%20token%0D%09%20irrespective%20of%20whether%20the%20system%20prefers%20%3A%3D%20as%20the%20assignment%20token.%22%0D%09%7C%20s%20%7C%0D%09self%20initStScannerForTokenization.%0D%09self%20scan%3A%20textOrString%20asString%20readStream.%0D%09s%20%3A%3D%20%28Array%20new%3A%2016%29%20writeStream.%0D%09%5BtokenType%20%3D%3D%20%23doIt%5D%20whileFalse%3A%0D%09%09%5B%28token%20%3D%3D%20%23-%20%0D%09%09%20%20and%3A%20%5B%28self%20typeTableAt%3A%20hereChar%29%20%3D%3D%20%23xDigit%5D%29%20ifTrue%3A%20%0D%09%09%09%5Bself%20scanToken.%0D%09%09%09%20token%20%3A%3D%20token%20negated%5D.%0D%09%09s%20nextPut%3A%20token.%0D%09%09self%20scanToken%5D.%0D%09%5Es%20contents%0D%0D%09%22StScanner%20new%20typedScanTokens%3A%20%28StScanner%20sourceCodeAt%3A%20%23typedScanTokens%3A%29%22"));
smalltalk.bind(smalltalk.StScanner, unescape("allowUnderscoreAssignments"), "allowUnderscoreAssignments", function StScanner__allowUnderscoreAssignments(){
const self = this; return (self.$klass).allowUnderscoreAsAssignment();
}
, "private", unescape("allowUnderscoreAssignments%0D%09%22Query%20preference%22%0D%09%5Eself%20class%20allowUnderscoreAsAssignment"));
smalltalk.bind(smalltalk.StScanner, unescape("allowUnderscoreSelectors"), "allowUnderscoreSelectors", function StScanner__allowUnderscoreSelectors(){
const self = this; return true;
}
, "private", unescape("allowUnderscoreSelectors%0D%09%5Etrue"));
smalltalk.bind(smalltalk.StScanner, unescape("scanDigitString%3A"), "scanDigitString_", function StScanner__scanDigitString_(stream){
var numberString = nil;
var $$char = nil;
var seenPeriod = nil;
var seenRadix = nil;
const self = this; seenPeriod=false;
seenRadix=false;
numberString="".writeStream();
while(((function StScanner__(){
$$char=stream.peek();
return (nil.isNil_($$char) ? false : ($$char.isDigit()).or_((function StScanner__(){
return $$char.isUppercase();
}
)));
}
)()).valueOf()){numberString.nextPut_((stream.next()))};;
return numberString.contents();
}
, "private", unescape("scanDigitString%3A%20stream%0D%09%22we%20need%20to%20do%20this%20roundabout%20way%20to%20cope%20with%20broken%20number%20parsing%20on%20the%20JS%20side%22%0D%09%7C%20numberString%20char%20seenPeriod%20seenRadix%20%7C%0D%09seenPeriod%20%3A%3D%20false.%0D%09seenRadix%20%3A%3D%20false.%0D%09numberString%20%3A%3D%20%27%27%20writeStream.%0D%09%5Bchar%20%3A%3D%20stream%20peek.%0D%09char%20%0D%09%09ifNil%3A%20%5Bfalse%5D%0D%09%09ifNotNil%3A%20%5B%28char%20isDigit%20or%3A%20%5Bchar%20isUppercase%5D%29%5D%0D%09%5D%20whileTrue%3A%20%5BnumberString%20nextPut%3A%20stream%20next%5D.%0D%09%5EnumberString%20contents"));
smalltalk.bind(smalltalk.StScanner, unescape("scanNumberString%3A"), "scanNumberString_", function StScanner__scanNumberString_(stream){
var digitString = nil;
var numberString = nil;
var $$char = nil;
var seenPeriod = nil;
var seenRadix = nil;
const self = this; var $early={name:"stReturn"};
try {
seenPeriod=false;
seenRadix=false;
digitString=self.scanDigitString_(stream);
if ((digitString.isEmpty()).valueOf()) {return ""};
numberString="".writeStream();
$$char=stream.peek();
(function(){var $1$; $1$ = $$char; if (nil.isNil_($1$)) { return (function StScanner__(){
$early.result=digitString; throw ($early);
}
)() } else { return $1$; }})();
if (($$char._eq(".")).valueOf()) {numberString.nextPutAll_(digitString);
stream.next();
digitString=self.scanDigitString_(stream);
if ((digitString.isEmpty()).valueOf()) {stream.skip_((-1))} else {numberString.nextPut_(".");
numberString.nextPutAll_(digitString)};
return numberString.contents()};
if (($$char._eq("r")).valueOf()) {numberString.nextPutAll_(digitString);
stream.next();
digitString=self.scanDigitString_(stream);
if ((digitString.isEmpty()).valueOf()) {stream.skip_((-1))} else {numberString.nextPut_("r");
numberString.nextPutAll_(digitString)};
return numberString.contents()} else {return digitString};
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "private", unescape("scanNumberString%3A%20stream%0D%09%22we%20need%20to%20do%20this%20roundabout%20way%20to%20cope%20with%20broken%20number%20parsing%20on%20the%20JS%20side%22%0D%09%7C%20digitString%20numberString%20char%20seenPeriod%20seenRadix%20%7C%0D%09seenPeriod%20%3A%3D%20false.%0D%09seenRadix%20%3A%3D%20false.%0D%09digitString%20%3A%3D%20self%20scanDigitString%3A%20stream.%0D%09digitString%20isEmpty%20ifTrue%3A%20%5B%5E%27%27%5D.%0D%0D%09numberString%20%3A%3D%20%27%27%20writeStream.%0D%09char%20%3A%3D%20stream%20peek.%0D%09char%20ifNil%3A%20%5B%5EdigitString%5D.%0D%09%09%0D%09char%20%3D%20%24.%20%0D%09%09ifTrue%3A%20%5B%0D%09%09%09numberString%20nextPutAll%3A%20digitString.%0D%09%09%09stream%20next.%0D%09%09%09digitString%20%3A%3D%20self%20scanDigitString%3A%20stream.%0D%09%09%09digitString%20isEmpty%0D%09%09%09%09ifTrue%3A%20%5B%0D%09%09%09%09%09stream%20skip%3A%20-1.%20%22put%20the%20.%20back%22%5D%0D%09%09%09%09ifFalse%3A%20%5B%0D%09%09%09%09%09numberString%20nextPut%3A%20%24.%20.%0D%09%09%09%09%09numberString%20nextPutAll%3A%20digitString%5D.%0D%09%09%09%5EnumberString%20contents%5D.%0D%09%5Echar%20%3D%20%24r%0D%09%09ifTrue%3A%20%5B%0D%09%09%09numberString%20nextPutAll%3A%20digitString.%0D%09%09%09stream%20next.%0D%09%09%09digitString%20%3A%3D%20self%20scanDigitString%3A%20stream.%0D%09%09%09digitString%20isEmpty%0D%09%09%09%09ifTrue%3A%20%5B%0D%09%09%09%09%09stream%20skip%3A%20-1.%20%22put%20the%20r%20back%22%5D%0D%09%09%09%09ifFalse%3A%20%5B%0D%09%09%09%09%09numberString%20nextPut%3A%20%24r%20.%0D%09%09%09%09%09numberString%20nextPutAll%3A%20digitString%5D.%0D%09%09%09numberString%20contents%5D%0D%09%09ifFalse%3A%20%5BdigitString%5D%0D"));
smalltalk.StScanner.$klass.$iVarNames = [];
smalltalk.bind(smalltalk.StScanner.$klass, unescape("inviolateInstanceVariableNames"), "inviolateInstanceVariableNames", function StScanner_class__inviolateInstanceVariableNames(){
const self = this; return ["thisContext", "self"];
}
, "testing", unescape("inviolateInstanceVariableNames%0D%09%22Answer%20a%20list%20of%20instance%20variable%20names%20not%20to%20be%20used.%20%20%28Place%20holder%20for%20real%20list%29%22%0D%09%5E%20%23%28%27thisContext%27%20%27self%27%29"));
smalltalk.bind(smalltalk.StScanner.$klass, unescape("isLegalInstVarName%3A"), "isLegalInstVarName_", function StScanner_class__isLegalInstVarName_(aString){
const self = this; return ((self.isLiteralSymbol_(aString)).and_((function StScanner_class__(){
return (aString.includes_(":")).not();
}
))).and_((function StScanner_class__(){
return ((self.inviolateInstanceVariableNames()).includes_(aString)).not();
}
));
}
, "testing", unescape("isLegalInstVarName%3A%20aString%0D%09%22Answer%20whether%20aString%20is%20a%20legal%20instance%20variable%20name.%22%0D%0D%09%5E%20%28%28self%20isLiteralSymbol%3A%20aString%29%20and%3A%20%5B%28aString%20includes%3A%20%24%3A%29%20not%5D%29%20and%3A%0D%09%09%5B%28self%20inviolateInstanceVariableNames%20includes%3A%20%20aString%29%20not%5D"));
smalltalk.bind(smalltalk.StScanner.$klass, unescape("isLiteralSymbol%3A"), "isLiteralSymbol_", function StScanner_class__isLiteralSymbol_(aSymbol){
var i = nil;
var ascii = nil;
var type = nil;
var next = nil;
var last = nil;
const self = this; var $early={name:"stReturn"};
try {
i=aSymbol.size();
if ((i._eq((0))).valueOf()) {return false};
ascii=(aSymbol.at_((1))).asciiValue();
type=smalltalk.StScanner.classVariableAt_("TypeTable").at_ifAbsent_(ascii,(function StScanner_class__(){
$early.result=false; throw ($early);
}
));
if (((nil.is_eqeq_(type,"xLetter"))).valueOf()) {next=last=nil;
while((i._gt((1))).valueOf()){ascii=(aSymbol.at_(i)).asciiValue();
type=smalltalk.StScanner.classVariableAt_("TypeTable").at_ifAbsent_(ascii,(function StScanner_class__(){
$early.result=false; throw ($early);
}
));
if ((((nil.is_eqeq_(type,"xLetter"))).or_((function StScanner_class__(){
return ((nil.is_eqeq_(type,"xDigit"))).or_((function StScanner_class__(){
return ((nil.is_eqeq_(type,"xColon"))).and_((function StScanner_class__(){
if (((nil.is_eqeq_(next,nil))).valueOf()) {last="xColon";
return true} else {return ((nil.is_eqeq_(last,"xColon"))).and_((function StScanner_class__(){
return (next._no_no("xDigit")).and_((function StScanner_class__(){
return next._no_no("xColon");
}
));
}
))};
}
));
}
));
}
))).not()) {$early.result=false; throw ($early)};
next=type;
i=i._minus((1))};;
$early.result=true; throw ($early)};
if (((nil.is_eqeq_(type,"xBinary"))).valueOf()) {return ((2).to_(i)).allSatisfy_((function StScanner_class__(j){
ascii=(aSymbol.at_(j)).asciiValue();
return (nil.is_eqeq_(smalltalk.StScanner.classVariableAt_("TypeTable").at_ifAbsent_(ascii,(function StScanner_class__(){
return nil;
}
)),"xBinary"));
}
))};
if (((nil.is_eqeq_(type,"verticalBar"))).valueOf()) {return i._eq((1))};
return false;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "testing", unescape("isLiteralSymbol%3A%20aSymbol%20%0D%09%22Test%20whether%20a%20symbol%20can%20be%20stored%20as%20%23%20followed%20by%20its%20characters.%20%20%0D%09Symbols%20created%20internally%20with%20asSymbol%20may%20not%20have%20this%20property%2C%20%0D%09e.g.%20%273%27%20asSymbol.%22%0D%0D%09%7C%20i%20ascii%20type%20next%20last%20%7C%0D%09i%20%3A%3D%20aSymbol%20size.%0D%09i%20%3D%200%20ifTrue%3A%20%5B%5E%20false%5D.%0D%0D%09%22TypeTable%20should%20have%20been%20origined%20at%200%20rather%20than%201%20...%22%0D%09ascii%20%3A%3D%20%28aSymbol%20at%3A%201%29%20asciiValue.%0D%09type%20%3A%3D%20TypeTable%20at%3A%20ascii%20ifAbsent%3A%20%5B%5Efalse%5D.%0D%09type%20%3D%3D%20%23xLetter%20ifTrue%3A%20%5B%0D%09%09next%20%3A%3D%20last%20%3A%3D%20nil.%0D%09%09%5Bi%20%3E%201%5D%0D%09%09%09%09whileTrue%3A%20%0D%09%09%09%09%09%5Bascii%20%3A%3D%20%28aSymbol%20at%3A%20i%29%20asciiValue.%0D%09%09%09%09%09type%20%3A%3D%20TypeTable%20at%3A%20ascii%20ifAbsent%3A%20%5B%5Efalse%5D.%0D%09%09%09%09%09%28type%20%3D%3D%20%23xLetter%20or%3A%20%5Btype%20%3D%3D%20%23xDigit%20or%3A%20%5Btype%20%3D%3D%20%23xColon%0D%09%09%09%09%09%09%09and%3A%20%5B%0D%09%09%09%09%09%09%09%09next%20%3D%3D%20nil%0D%09%09%09%09%09%09%09%09%09ifTrue%3A%20%5Blast%20%3A%3D%20%23xColon.%20true%5D%20%0D%09%09%09%09%09%09%09%09%09ifFalse%3A%20%5Blast%20%3D%3D%20%23xColon%20and%3A%20%5Bnext%20%7E%7E%20%23xDigit%20and%3A%20%5Bnext%20%7E%7E%20%23xColon%5D%5D%5D%5D%5D%5D%29%0D%09%09%09%09%09%09ifFalse%3A%20%5B%5E%20false%5D.%0D%09%09%09%09%09next%20%3A%3D%20type.%0D%09%09%09%09%09i%20%3A%3D%20i%20-%201%5D.%0D%09%09%09%5E%20true%5D.%0D%09type%20%3D%3D%20%23xBinary%20ifTrue%3A%0D%09%09%5B%5E%282%20to%3A%20i%29%20allSatisfy%3A%20%5B%3Aj%20%7C%0D%09%09%09ascii%20%3A%3D%20%28aSymbol%20at%3A%20j%29%20asciiValue.%0D%09%09%09%28TypeTable%20at%3A%20ascii%20ifAbsent%3A%20%5B%5D%29%20%3D%3D%20%23xBinary%5D%5D.%0D%09type%20%3D%3D%20%23verticalBar%20ifTrue%3A%20%5B%5Ei%20%3D%201%5D.%0D%09%5Efalse"));
smalltalk.bind(smalltalk.StScanner.$klass, unescape("wellFormedInstanceVariableNameFrom%3A"), "wellFormedInstanceVariableNameFrom_", function StScanner_class__wellFormedInstanceVariableNameFrom_(aString){
var cleansedString = nil;
const self = this; cleansedString=aString.select_((function StScanner_class__(ch){
return (ch.isDigit()).or_((function StScanner_class__(){
return ch.isLetter();
}
));
}
));
if (((cleansedString.isEmpty()).or_((function StScanner_class__(){
return (cleansedString.first()).isDigit();
}
))).valueOf()) {cleansedString="a"._comma(cleansedString)} else {cleansedString=cleansedString.withFirstCharacterDownshifted()};
while((self.isLegalInstVarName_(cleansedString)).not()){cleansedString=cleansedString._comma("x")};;
return cleansedString;
}
, "testing", unescape("wellFormedInstanceVariableNameFrom%3A%20aString%0D%09%22Answer%20a%20legal%20instance%20variable%20name%2C%20derived%20from%20aString%22%0D%0D%09%7C%20cleansedString%20%7C%0D%09cleansedString%20%3A%3D%20aString%20select%3A%20%5B%3Ach%20%7C%20ch%20isDigit%20or%3A%20%5Bch%20isLetter%5D%5D.%0D%09%28cleansedString%20isEmpty%20or%3A%20%5BcleansedString%20first%20isDigit%5D%29%0D%09%09ifTrue%3A%20%5BcleansedString%20%3A%3D%20%27a%27%2C%20cleansedString%5D%0D%09%09ifFalse%3A%09%5BcleansedString%20%3A%3D%20cleansedString%20withFirstCharacterDownshifted%5D.%0D%0D%09%5Bself%20isLegalInstVarName%3A%20cleansedString%5D%20whileFalse%3A%0D%09%09%5BcleansedString%20%3A%3D%20cleansedString%2C%20%27x%27%5D.%0D%09%5E%20cleansedString%0D%0D%22StScanner%20wellFormedInstanceVariableNameFrom%3A%20%20%27234%20xx%5C%20Uml%20/ler42342380-4%27%22"));
smalltalk.bind(smalltalk.StScanner.$klass, unescape("initialize"), "initialize", function StScanner_class__initialize(){
const self = this; self.initializeTypeTable();
smalltalk.StScanner.classVariableAt_put_("DoItCharacter",(1114111).asCharacter());
return self;
}
, "initialization", unescape("initialize%0D%09%22StScanner%20initialize%22%0D%09self%20initializeTypeTable.%0D%09%22The%20unicode%20ending%20with%20FFFE%20or%20FFFF%20are%20non%20characters%20and%20can%20be%20used%20by%20applications%20if%20they%20wish.%0D%09We%20use%20last%20legal%20unicode%2016r10FFFF%20to%20encode%20the%20end%20of%20source%20stream%22%0D%09DoItCharacter%20%3A%3D%2016r10FFFF%20asCharacter"));
smalltalk.bind(smalltalk.StScanner.$klass, unescape("initializeTypeTable"), "initializeTypeTable", function StScanner_class__initializeTypeTable(){
var newTable = nil;
const self = this; newTable=(smalltalk.Array.new_((256))).atAllPut_("xBinary");
newTable.atAll_put_([(9), (10), (12), (13), (32)],"xDelimiter");
newTable.atAll_put_((("0".asciiValue()).to_(("9".asciiValue()))),"xDigit");
(1).to_do_((255),(function StScanner_class__(index){
if (((index.asCharacter()).isLetter()).valueOf()) {return newTable.at_put_(index,"xLetter")} else {return nil};
}
));
newTable.at_put_((unescape("%22").asciiValue()),"xDoubleQuote");
newTable.at_put_((unescape("%23").asciiValue()),"xLitQuote");
newTable.at_put_(("$".asciiValue()),"xDollar");
newTable.at_put_((unescape("%27").asciiValue()),"xSingleQuote");
newTable.at_put_((":".asciiValue()),"xColon");
newTable.at_put_((unescape("%28").asciiValue()),"leftParenthesis");
newTable.at_put_((unescape("%29").asciiValue()),"rightParenthesis");
newTable.at_put_((".".asciiValue()),"period");
newTable.at_put_((unescape("%3B").asciiValue()),"semicolon");
newTable.at_put_((unescape("%5B").asciiValue()),"leftBracket");
newTable.at_put_((unescape("%5D").asciiValue()),"rightBracket");
newTable.at_put_((unescape("%7B").asciiValue()),"leftBrace");
newTable.at_put_((unescape("%7D").asciiValue()),"rightBrace");
newTable.at_put_((unescape("%5E").asciiValue()),"upArrow");
newTable.at_put_(("_".asciiValue()),"xUnderscore");
newTable.at_put_((unescape("%7C").asciiValue()),"verticalBar");
smalltalk.StScanner.classVariableAt_put_("TypeTable",newTable);
return self;
}
, "initialization", unescape("initializeTypeTable%0D%09%22self%20initializeTypeTable%22%0D%0D%09%7C%20newTable%20%7C%0D%09newTable%20%3A%3D%20%28Array%20new%3A%20256%29%20atAllPut%3A%20%23xBinary.%20%22default%22%0D%09newTable%20atAll%3A%20%23%289%2010%2012%2013%2032%20%29%20put%3A%20%23xDelimiter.%20%22tab%20lf%20ff%20cr%20space%22%0D%09newTable%20atAll%3A%20%28%240%20asciiValue%20to%3A%20%249%20asciiValue%29%20put%3A%20%23xDigit.%0D%0D%091%20to%3A%20255%0D%09%09do%3A%20%5B%3Aindex%20%7C%0D%09%09%09index%20asCharacter%20isLetter%0D%09%09%09%09ifTrue%3A%20%5BnewTable%20at%3A%20index%20put%3A%20%23xLetter%5D%5D.%0D%0D%09newTable%20at%3A%20%24%22%20asciiValue%20put%3A%20%23xDoubleQuote.%0D%09newTable%20at%3A%20%24%23%20asciiValue%20put%3A%20%23xLitQuote.%0D%09newTable%20at%3A%20%24%24%20asciiValue%20put%3A%20%23xDollar.%0D%09newTable%20at%3A%20%24%27%20asciiValue%20put%3A%20%23xSingleQuote.%0D%09newTable%20at%3A%20%24%3A%20asciiValue%20put%3A%20%23xColon.%0D%09newTable%20at%3A%20%24%28%20asciiValue%20put%3A%20%23leftParenthesis.%0D%09newTable%20at%3A%20%24%29%20asciiValue%20put%3A%20%23rightParenthesis.%0D%09newTable%20at%3A%20%24.%20asciiValue%20put%3A%20%23period.%0D%09newTable%20at%3A%20%24%3B%20asciiValue%20put%3A%20%23semicolon.%0D%09newTable%20at%3A%20%24%5B%20asciiValue%20put%3A%20%23leftBracket.%0D%09newTable%20at%3A%20%24%5D%20asciiValue%20put%3A%20%23rightBracket.%0D%09newTable%20at%3A%20%24%7B%20asciiValue%20put%3A%20%23leftBrace.%0D%09newTable%20at%3A%20%24%7D%20asciiValue%20put%3A%20%23rightBrace.%0D%09newTable%20at%3A%20%24%5E%20asciiValue%20put%3A%20%23upArrow.%0D%09newTable%20at%3A%20%24_%20asciiValue%20put%3A%20%23xUnderscore.%0D%09newTable%20at%3A%20%24%7C%20asciiValue%20put%3A%20%23verticalBar.%0D%09TypeTable%20%3A%3D%20newTable%20%22bon%20voyage%21%22"));
smalltalk.bind(smalltalk.StScanner.$klass, unescape("allowBlockArgumentAssignment"), "allowBlockArgumentAssignment", function StScanner_class__allowBlockArgumentAssignment(){
const self = this; return (function(){var $1$; $1$ = smalltalk.StScanner.classVariableAt_("AllowBlockArgumentAssignment"); if (nil.isNil_($1$)) { return false } else { return $1$; }})();
}
, "preferences", unescape("allowBlockArgumentAssignment%0D%09%22Accessor%20for%20the%20system-wide%20preference%22%0D%09%0D%09%22%3Cpreference%3A%20%27Allow%20block%20argument%20assignment.%27%0D%09%09category%3A%20%27Compiler%27%0D%09%09description%3A%20%27If%20enabled%2C%20the%20compiler%20will%20allow%20assignment%20into%20block%20arguments.%0DThis%20provides%20backward%20compatibility%20with%20the%20pre-closure%20compiler.%27%0D%09%09type%3A%20%23Boolean%3E%22%0D%09%5EAllowBlockArgumentAssignment%20ifNil%3A%20%5B%20false%20%5D"));
smalltalk.bind(smalltalk.StScanner.$klass, unescape("allowBlockArgumentAssignment%3A"), "allowBlockArgumentAssignment_", function StScanner_class__allowBlockArgumentAssignment_(aBoolean){
const self = this; smalltalk.StScanner.classVariableAt_put_("AllowBlockArgumentAssignment",aBoolean);
return self;
}
, "preferences", unescape("allowBlockArgumentAssignment%3A%20aBoolean%0D%09%22Accessor%20for%20the%20system-wide%20preference%22%0D%09%0D%09AllowBlockArgumentAssignment%20%3A%3D%20aBoolean"));
smalltalk.bind(smalltalk.StScanner.$klass, unescape("allowUnderscoreAsAssignment"), "allowUnderscoreAsAssignment", function StScanner_class__allowUnderscoreAsAssignment(){
const self = this; return (function(){var $1$; $1$ = smalltalk.StScanner.classVariableAt_("AllowUnderscoreAssignments"); if (nil.isNil_($1$)) { return true } else { return $1$; }})();
}
, "preferences", unescape("allowUnderscoreAsAssignment%0D%09%22Accessor%20for%20the%20system-wide%20preference%22%0D%09%22%3Cpreference%3A%20%27Allow%20underscore%20assignments%27%0D%09%09category%3A%20%27Compiler%27%0D%09%09description%3A%20%27When%20true%2C%20underscore%20can%20be%20used%20as%20assignment%20operator%27%0D%09%09type%3A%20%23Boolean%3E%22%0D%09%5EAllowUnderscoreAssignments%20ifNil%3A%5Btrue%5D"));
smalltalk.bind(smalltalk.StScanner.$klass, unescape("allowUnderscoreAsAssignment%3A"), "allowUnderscoreAsAssignment_", function StScanner_class__allowUnderscoreAsAssignment_(aBool){
const self = this; smalltalk.StScanner.classVariableAt_put_("AllowUnderscoreAssignments",aBool);
return self;
}
, "preferences", unescape("allowUnderscoreAsAssignment%3A%20aBool%0D%09%22Accessor%20for%20the%20system-wide%20preference%22%0D%09AllowUnderscoreAssignments%20%3A%3D%20aBool"));
smalltalk.bind(smalltalk.StScanner.$klass, unescape("prefAllowUnderscoreAssignments"), "prefAllowUnderscoreAssignments", function StScanner_class__prefAllowUnderscoreAssignments(){
const self = this; self.deprecated_(unescape("Use%20%23allowUnderscoreAsAssignment"));
return self.allowUnderscoreAsAssignment();
}
, "preferences", unescape("prefAllowUnderscoreAssignments%0D%09%22Accessor%20for%20the%20system-wide%20preference%22%0D%09%0D%09self%20deprecated%3A%20%27Use%20%23allowUnderscoreAsAssignment%27.%0D%09%5Eself%20allowUnderscoreAsAssignment"));
smalltalk.bind(smalltalk.StScanner.$klass, unescape("prefAllowUnderscoreAssignments%3A"), "prefAllowUnderscoreAssignments_", function StScanner_class__prefAllowUnderscoreAssignments_(aBool){
const self = this; self.deprecated_(unescape("Use%20%23allowUnderscoreAsAssignment%3A"));
self.allowUnderscoreAsAssignment_(aBool);
return self;
}
, "preferences", unescape("prefAllowUnderscoreAssignments%3A%20aBool%0D%09%22Accessor%20for%20the%20system-wide%20preference%22%0D%09%0D%09self%20deprecated%3A%20%27Use%20%23allowUnderscoreAsAssignment%3A%27.%0D%09self%20allowUnderscoreAsAssignment%3A%20aBool"));
smalltalk.bind(smalltalk.StScanner.$klass, unescape("prefAllowUnderscoreSelectors"), "prefAllowUnderscoreSelectors", function StScanner_class__prefAllowUnderscoreSelectors(){
const self = this; return (function(){var $1$; $1$ = smalltalk.StScanner.classVariableAt_("AllowUnderscoreSelectors"); if (nil.isNil_($1$)) { return false } else { return $1$; }})();
}
, "preferences", unescape("prefAllowUnderscoreSelectors%0D%09%22Accessor%20for%20the%20system-wide%20preference%22%0D%09%22%3Cpreference%3A%20%27Allow%20underscore%20selectors%27%0D%09%09category%3A%20%27Compiler%27%0D%09%09description%3A%20%27When%20true%2C%20underscore%20can%20be%20used%20in%20selectors%20and%20varibable%20names%27%0D%09%09type%3A%20%23Boolean%3E%22%0D%09%5EAllowUnderscoreSelectors%20ifNil%3A%5Bfalse%5D"));
smalltalk.bind(smalltalk.StScanner.$klass, unescape("prefAllowUnderscoreSelectors%3A"), "prefAllowUnderscoreSelectors_", function StScanner_class__prefAllowUnderscoreSelectors_(aBool){
const self = this; smalltalk.StScanner.classVariableAt_put_("AllowUnderscoreSelectors",aBool);
smalltalk.String.initialize();
return self;
}
, "preferences", unescape("prefAllowUnderscoreSelectors%3A%20aBool%0D%09%22Accessor%20for%20the%20system-wide%20preference%22%0D%09AllowUnderscoreSelectors%20%3A%3D%20aBool.%0D%09%0D%09%22Reinitialize%20String%27s%20tokenish%20character%20map%22%0D%09String%20initialize"));
smalltalk.bind(smalltalk.StScanner.$klass, unescape("prefAllowUnicharSymbol"), "prefAllowUnicharSymbol", function StScanner_class__prefAllowUnicharSymbol(){
const self = this; return (function(){var $1$; $1$ = smalltalk.StScanner.classVariableAt_("AllowUnicharSymbol"); if (nil.isNil_($1$)) { return true } else { return $1$; }})();
}
, "preferences", unescape("prefAllowUnicharSymbol%0D%09%22Accessor%20for%20the%20system-wide%20preference%22%0D%09%22%3Cpreference%3A%20%27Allow%20symbols%20with%20unique%20character%20like%20%23%2C%27%0D%09%09category%3A%20%27Compiler%27%0D%09%09description%3A%20%27When%20true%2C%20the%20historical%20syntax%20%23%2C%20%23%3B%20or%20%23.%20is%20allowed.%27%0D%09%09type%3A%20%23Boolean%3E%22%0D%09%5EAllowUnicharSymbol%20ifNil%3A%20%5Btrue%5D"));
smalltalk.bind(smalltalk.StScanner.$klass, unescape("prefAllowUnicharSymbol%3A"), "prefAllowUnicharSymbol_", function StScanner_class__prefAllowUnicharSymbol_(aBoolean){
const self = this; smalltalk.StScanner.classVariableAt_put_("AllowUnicharSymbol",aBoolean);
return self;
}
, "preferences", unescape("prefAllowUnicharSymbol%3A%20aBoolean%0D%09%22Accessor%20for%20the%20system-wide%20preference%22%0D%09AllowUnicharSymbol%20%3A%3D%20aBoolean"));
smalltalk.addClass("StParser", smalltalk.StScanner, ['here', 'hereType', 'hereMark', 'hereEnd', 'prevMark', 'prevEnd', 'encoder', 'parseNode', 'failBlock', 'requestorOffset', 'tempsMark', 'doitFlag', 'queriedUnusedTemporaries', 'cue', 'pragmas'], 'Compiler-JS');
smalltalk.StParser.$classVariableNames=("");
smalltalk.bind(smalltalk.StParser, unescape("ambiguousSelector%3AinRange%3A"), "ambiguousSelector_inRange_", function StParser__ambiguousSelector_inRange_(aString,anInterval){
const self = this; (function StParser__($1$){
$1$.cr();
$1$.store_((self['@encoder'].classEncoding()));
$1$.nextPutAll_(unescape("%3E%3E"));
$1$.store_((self['@encoder'].selector()));
return $1$.show_(((" would send "._comma(self['@token']))._comma(unescape("-"))))}
)(smalltalk.Transcript);
return smalltalk.superImplementor(smalltalk.StParser,'ambiguousSelector_inRange_').apply(self, [aString,anInterval]);
}
, "error correction", unescape("ambiguousSelector%3A%20aString%20inRange%3A%20anInterval%0D%09%0D%09%22In%20non%20interactive%20mode%2C%20compile%20with%20backward%20comapatibility%3A%20%24-%20is%20part%20of%20literal%20argument%22%0D%09Transcript%20cr%3B%20store%3A%20encoder%20classEncoding%3B%20nextPutAll%3A%23%27%3E%3E%27%3Bstore%3A%20encoder%20selector%3B%20show%3A%20%27%20would%20send%20%27%20%2C%20token%20%2C%20%27-%27.%0D%09%5Esuper%20ambiguousSelector%3A%20aString%20inRange%3A%20anInterval.%0D"));
smalltalk.bind(smalltalk.StParser, unescape("canDeclareClassVariable"), "canDeclareClassVariable", function StParser__canDeclareClassVariable(){
const self = this; return (self['@encoder'].classEncoding())._no_no(smalltalk.UndefinedObject);
}
, "error correction", unescape("canDeclareClassVariable%0D%09%5Eencoder%20classEncoding%20%7E%7E%20UndefinedObject"));
smalltalk.bind(smalltalk.StParser, unescape("canDeclareInstanceVariable"), "canDeclareInstanceVariable", function StParser__canDeclareInstanceVariable(){
const self = this; return (self['@encoder'].classEncoding())._no_no(smalltalk.UndefinedObject);
}
, "error correction", unescape("canDeclareInstanceVariable%0D%09%5Eencoder%20classEncoding%20%7E%7E%20UndefinedObject"));
smalltalk.bind(smalltalk.StParser, unescape("correctSelector%3AwordIntervals%3AexprInterval%3AifAbort%3A"), "correctSelector_wordIntervals_exprInterval_ifAbort_", function StParser__correctSelector_wordIntervals_exprInterval_ifAbort_(proposedKeyword,spots,expInt,abortAction){
const self = this; return proposedKeyword.asSymbol();
}
, "error correction", unescape("correctSelector%3A%20proposedKeyword%20wordIntervals%3A%20spots%20exprInterval%3A%20expInt%20ifAbort%3A%20abortAction%0D%09%22Correct%20the%20proposedKeyword%20to%20some%20selector%20symbol%2C%20correcting%20the%20original%20text%20if%20such%20action%20is%20indicated.%20%20abortAction%20is%20invoked%20if%20the%20proposedKeyword%20couldn%27t%20be%20converted%20into%20a%20valid%20selector.%20%20Spots%20is%20an%20ordered%20collection%20of%20intervals%20within%20the%20test%20stream%20of%20the%20for%20each%20of%20the%20keyword%20parts.%22%0D%0D%09%5EproposedKeyword%20asSymbol"));
smalltalk.bind(smalltalk.StParser, unescape("declareTemp%3Aat%3A"), "declareTemp_at_", function StParser__declareTemp_at_(name,levelTag){
const self = this; return (function StParser__($1$){
$1$.tag_(levelTag);
return $1$.yourself()}
)(self['@encoder'].bindUndeclaredTemp_(name));
}
, "error correction", unescape("declareTemp%3A%20name%20at%3A%20levelTag%0D%09%22Defer%20declaring%20the%20temp%20until%20the%20parse%20has%20completed.%20%20This%20allows%0D%09%20the%20StParser%20to%20declare%20the%20temp%20in%20the%20minimum%20enclosing%20block%20instead%0D%09%20of%20always%20at%20method%20level.%20%20See%20StParser%3E%3EdeclareUndeclaredTemps%3A%22%0D%09%5E%28encoder%20bindUndeclaredTemp%3A%20name%29%0D%09%09tag%3A%20levelTag%3B%0D%09%09yourself"));
smalltalk.bind(smalltalk.StParser, unescape("declareTempAndPaste%3A"), "declareTempAndPaste_", function StParser__declareTempAndPaste_(name){
const self = this; return self['@encoder'].bindUndeclaredTemp_(name);
}
, "error correction", unescape("declareTempAndPaste%3A%20name%0D%09%22Defer%20declaring%20the%20temp%20until%20the%20parse%20has%20completed.%20%20This%20allows%0D%09%20the%20StParser%20to%20declare%20the%20temp%20in%20the%20minimum%20enclosing%20block%20instead%0D%09%20of%20always%20at%20method%20level.%20%20See%20StParser%3E%3EdeclareUndeclaredTemps%3A%22%0D%09%5Eencoder%20bindUndeclaredTemp%3A%20name"));
smalltalk.bind(smalltalk.StParser, unescape("substituteSelector%3AwordIntervals%3A"), "substituteSelector_wordIntervals_", function StParser__substituteSelector_wordIntervals_(selectorParts,spots){
var offset = nil;
const self = this; offset=(0);
selectorParts.with_do_(spots,(function StParser__(word,interval){
return offset=self.substituteWord_wordInterval_offset_(word,interval,offset);
}
));
return self;
}
, "error correction", unescape("substituteSelector%3A%20selectorParts%20wordIntervals%3A%20spots%0D%09%22Substitute%20the%20correctSelector%20into%20the%20%28presuamed%20interactive%29%20receiver.%22%0D%09%7C%20offset%20%7C%0D%09offset%20%3A%3D%200.%0D%09selectorParts%20with%3A%20spots%20do%3A%0D%09%09%5B%20%3Aword%20%3Ainterval%20%7C%0D%09%09offset%20%3A%3D%20self%20substituteWord%3A%20word%20wordInterval%3A%20interval%20offset%3A%20offset%20%5D%0D"));
smalltalk.bind(smalltalk.StParser, unescape("substituteVariable%3AatInterval%3A"), "substituteVariable_atInterval_", function StParser__substituteVariable_atInterval_(each,anInterval){
const self = this; self.substituteWord_wordInterval_offset_(each,anInterval,(0));
return self['@encoder'].encodeVariable_(each);
}
, "error correction", unescape("substituteVariable%3A%20each%20atInterval%3A%20anInterval%20%0D%09self%20%0D%09%09substituteWord%3A%20each%0D%09%09wordInterval%3A%20anInterval%0D%09%09offset%3A%200.%0D%09%5Eencoder%20encodeVariable%3A%20each"));
smalltalk.bind(smalltalk.StParser, unescape("addWarning%3A"), "addWarning_", function StParser__addWarning_(aString){
const self = this; self;
return self;
}
, "error handling", unescape("addWarning%3A%20aString%0D%09%22ignored%20by%20the%20default%20compiler.%22"));
smalltalk.bind(smalltalk.StParser, unescape("expected%3A"), "expected_", function StParser__expected_(aString){
const self = this; return self.notify_at_((aString._comma(" expected")),(self['@hereMark']._plus(self['@requestorOffset'])));
}
, "error handling", unescape("expected%3A%20aString%20%0D%09%22Notify%20a%20problem%20at%20token%20%27here%27.%22%0D%0D%09%5E%20self%20notify%3A%20aString%20%2C%20%27%20expected%27%20at%3A%20hereMark%20+%20requestorOffset"));
smalltalk.bind(smalltalk.StParser, unescape("fail"), "fail", function StParser__fail(){
var exitBlock = nil;
const self = this; if ((((nil.is_eqeq_(self['@encoder'],nil))).or_((function StParser__(){
return (nil.is_eqeq_(self['@encoder'],self));
}
))).not()) {self['@encoder'].release();
self['@encoder']=nil};
exitBlock=self['@failBlock'];
self['@failBlock']=nil;
return exitBlock.value();
}
, "error handling", unescape("fail%0D%0D%09%7C%20exitBlock%20%7C%0D%09%28encoder%20%3D%3D%20nil%20or%3A%20%5Bencoder%20%3D%3D%20self%5D%29%0D%09%09ifFalse%3A%20%5Bencoder%20release.%20encoder%20%3A%3D%20nil%5D.%20%22break%20cycle%22%0D%09exitBlock%20%3A%3D%20failBlock.%0D%09failBlock%20%3A%3D%20nil.%0D%09%5EexitBlock%20value"));
smalltalk.bind(smalltalk.StParser, unescape("interactive"), "interactive", function StParser__interactive(){
const self = this; return ((nil.isNil_(self['@cue'].requestor())===false)).and_((function StParser__(){
return (((smalltalk.responds_to_(self['@cue'].requestor(),"wantsInteractiveErrorCorrection"))).not()).or_((function StParser__(){
return (self['@cue'].requestor()).perform_("wantsInteractiveErrorCorrection");
}
));
}
));
}
, "error handling", unescape("interactive%0D%09%22The%20compilation%20is%20interactive%20if%20there%20is%20a%20requestor%20and%20that%20requestor%20does%20either%20not%20care%20or%20explicitly%20allow%20interactive%20error%20correction.%22%0D%0D%09%5E%20cue%20requestor%20notNil%0D%09%09and%3A%20%5B%28cue%20requestor%20respondsTo%3A%20%23wantsInteractiveErrorCorrection%29%20not%0D%09%09%09or%3A%20%5Bcue%20requestor%20perform%3A%20%23wantsInteractiveErrorCorrection%5D%5D"));
smalltalk.bind(smalltalk.StParser, unescape("notify%3A"), "notify_", function StParser__notify_(aString){
const self = this; return self.notify_at_(aString,(self['@prevMark']._plus(self['@requestorOffset'])));
}
, "error handling", unescape("notify%3A%20aString%20%0D%09%22Notify%20problem%20at%20token%20before%20%27here%27.%22%0D%0D%09%5Eself%20notify%3A%20aString%20at%3A%20prevMark%20+%20requestorOffset"));
smalltalk.bind(smalltalk.StParser, unescape("notify%3Aat%3A"), "notify_at_", function StParser__notify_at_(string,location){
var errorString = nil;
const self = this; errorString=(self['@source'].contents()).copyReplaceFrom_to_with_(location,(location._minus((1))),((((smalltalk.Character.lf()).asString())._comma(string))._comma(unescape("%20-%3E"))));
smalltalk.StCompileException.signal_(errorString);
return self;
}
, "error handling", unescape("notify%3A%20string%20at%3A%20location%0D%09%7C%20errorString%20%7C%0D%09errorString%20%3A%3D%20source%20contents%0D%09%09copyReplaceFrom%3A%20location%0D%09%09to%3A%20location%20-%201%0D%09%09with%3A%20%28Character%20lf%20asString%20%2C%20string%20%2C%20%27%20-%3E%27%29.%0D%09StCompileException%20signal%3A%20errorString%0D"));
smalltalk.bind(smalltalk.StParser, unescape("offEnd%3A"), "offEnd_", function StParser__offEnd_(aString){
const self = this; if (((nil.is_eqeq_(self['@requestorOffset'],nil))).valueOf()) {return self.notify_at_(aString,self['@mark'])} else {return self.notify_at_(aString,(self['@mark']._plus(self['@requestorOffset'])))};
}
, "error handling", unescape("offEnd%3A%20aString%20%0D%09%22Notify%20a%20problem%20beyond%20%27here%27%20%28in%20lookAhead%20token%29.%20Don%27t%20be%20offEnded%21%22%0D%0D%09requestorOffset%20%3D%3D%20nil%0D%09%09ifTrue%3A%20%5B%5E%20self%20notify%3A%20aString%20at%3A%20mark%5D%0D%09%09ifFalse%3A%20%5B%5E%20self%20notify%3A%20aString%20at%3A%20mark%20+%20requestorOffset%5D%0D"));
smalltalk.bind(smalltalk.StParser, unescape("argumentName"), "argumentName", function StParser__argumentName(){
const self = this; if (((nil.is_eqeq_(self['@hereType'],"word"))).not()) {return self.expected_("Argument name")};
return self.advance();
}
, "expression types", unescape("argumentName%0D%0D%09hereType%20%3D%3D%20%23word%0D%09%09ifFalse%3A%20%5B%5Eself%20expected%3A%20%27Argument%20name%27%5D.%0D%09%5Eself%20advance"));
smalltalk.bind(smalltalk.StParser, unescape("assignment%3A"), "assignment_", function StParser__assignment_(varNode){
var loc = nil;
var start = nil;
const self = this; if (((loc=varNode.assignmentCheck_at_(self['@encoder'],(self['@prevMark']._plus(self['@requestorOffset']))))._gt_eq((0))).valueOf()) {return self.notify_at_((((unescape("Cannot%20store%20into%20%22")._comma(((varNode.$klass).name())))._comma((varNode.asString())))._comma(unescape("%22"))),loc)};
start=self.startOfNextToken();
self.advance();
if ((self.expression()).not()) {return self.expected_("Expression")};
self['@parseNode']=(smalltalk.StAssignmentNode.$$new()).variable_value_(varNode,self['@parseNode']);
varNode.nowHasDef();
return true;
}
, "expression types", unescape("assignment%3A%20varNode%0D%09%22%20var%20%27%3A%3D%27%20expression%20%3D%3E%20AssignmentNode.%22%0D%09%7C%20loc%20start%20%7C%0D%09%28loc%20%3A%3D%20varNode%20assignmentCheck%3A%20encoder%20at%3A%20prevMark%20+%20requestorOffset%29%20%3E%3D%200%0D%09%09ifTrue%3A%20%5B%5Eself%20notify%3A%20%27Cannot%20store%20into%20%22%27%20%2C%20varNode%20class%20name%20%2C%20varNode%20asString%20%2C%20%27%22%27%20at%3A%20loc%5D.%0D%09start%20%3A%3D%20self%20startOfNextToken.%0D%09self%20advance.%0D%09self%20expression%20ifFalse%3A%20%5B%5Eself%20expected%3A%20%27Expression%27%5D.%0D%09parseNode%20%3A%3D%20StAssignmentNode%20new%0D%09%09%09%09variable%3A%20varNode%0D%09%09%09%09value%3A%20parseNode.%0D%09varNode%20nowHasDef.%0D%09%5Etrue"));
smalltalk.bind(smalltalk.StParser, unescape("blockExpression"), "blockExpression", function StParser__blockExpression(){
var blockNode = nil;
var variableNodes = nil;
var temporaryBlockVariables = nil;
var start = nil;
const self = this; blockNode=smalltalk.StBlockNode.$$new();
variableNodes=smalltalk.OrderedCollection.$$new();
start=self['@prevMark']._plus(self['@requestorOffset']);
while((self.match_("colon")).valueOf()){variableNodes.addLast_((self['@encoder'].bindBlockArg_within_((self.argumentName()),blockNode)))};;
if (((((variableNodes.size())._gt((0)))._amp((self['@hereType']._no_no("rightBracket")))).and_((function StParser__(){
return (self.match_("verticalBar")).not();
}
))).valueOf()) {return self.expected_("Vertical bar")};
temporaryBlockVariables=self.temporaryBlockVariablesFor_(blockNode);
self.statements_innerBlock_blockNode_(variableNodes,true,blockNode);
blockNode.temporaries_(temporaryBlockVariables);
if ((self.match_("rightBracket")).not()) {return self.expected_("Period or right bracket")};
temporaryBlockVariables.do_((function StParser__(variable){
return variable.scope_((-1));
}
));
variableNodes.do_((function StParser__(variable){
return variable.scope_((-1));
}
));
return self;
}
, "expression types", unescape("blockExpression%0D%09%22%5B%20%28%7B%3Avar%7D%20%7C%29%20%28%7C%20%7Btemps%7D%20%7C%29%20%28statements%29%20%5D%20%3D%3E%20BlockNode.%22%0D%0D%09%7C%20blockNode%20variableNodes%20temporaryBlockVariables%20start%20%7C%0D%09blockNode%20%3A%3D%20StBlockNode%20new.%0D%09variableNodes%20%3A%3D%20OrderedCollection%20new.%0D%09start%20%3A%3D%20prevMark%20+%20requestorOffset.%0D%09%22Gather%20parameters.%22%0D%09%5Bself%20match%3A%20%23colon%5D%20whileTrue%3A%0D%09%09%5BvariableNodes%20addLast%3A%20%28encoder%20bindBlockArg%3A%20self%20argumentName%20within%3A%20blockNode%29%5D.%0D%09%28variableNodes%20size%20%3E%200%20%26%20%28hereType%20%7E%7E%20%23rightBracket%29%20and%3A%20%5B%28self%20match%3A%20%23verticalBar%29%20not%5D%29%20ifTrue%3A%0D%09%09%5B%5Eself%20expected%3A%20%27Vertical%20bar%27%5D.%0D%0D%09temporaryBlockVariables%20%3A%3D%20self%20temporaryBlockVariablesFor%3A%20blockNode.%0D%09self%20statements%3A%20variableNodes%20innerBlock%3A%20true%20blockNode%3A%20blockNode.%0D%09blockNode%20temporaries%3A%20temporaryBlockVariables.%0D%0D%09%28self%20match%3A%20%23rightBracket%29%20ifFalse%3A%20%5B%5Eself%20expected%3A%20%27Period%20or%20right%20bracket%27%5D.%0D%0D%09%22The%20scope%20of%20the%20parameters%20and%20temporary%20block%20variables%20is%20no%20longer%20active.%22%0D%09temporaryBlockVariables%20do%3A%20%5B%3Avariable%20%7C%20variable%20scope%3A%20-1%5D.%0D%09variableNodes%20do%3A%20%5B%3Avariable%20%7C%20variable%20scope%3A%20-1%5D"));
smalltalk.bind(smalltalk.StParser, unescape("braceExpression"), "braceExpression", function StParser__braceExpression(){
const self = this; self.notify_("Brace expressions not supported");
return self;
}
, "expression types", unescape("braceExpression%0D%09self%20notify%3A%20%27Brace%20expressions%20not%20supported%27"));
smalltalk.bind(smalltalk.StParser, unescape("cascade"), "cascade", function StParser__cascade(){
var rcvr = nil;
var msgs = nil;
const self = this; if ((self['@parseNode'].canCascade()).not()) {return self.expected_("Cascading not")};
rcvr=self['@parseNode'].receiver();
msgs=smalltalk.OrderedCollection.with_(self['@parseNode']);
while((self.match_("semicolon")).valueOf()){self['@parseNode']=rcvr;
if ((self.messagePart_repeat_((3),false)).not()) {return self.expected_("Cascade")};
if ((self['@parseNode'].canCascade()).not()) {return self.expected_(unescape("%3C-%20No%20special%20messages"))};
self['@parseNode'].ensureCanCascade_(self['@encoder']);
msgs.addLast_(self['@parseNode'])};;
self['@parseNode']=(smalltalk.StCascadeNode.$$new()).receiver_messages_(rcvr,msgs);
return self;
}
, "expression types", unescape("cascade%0D%09%22%20%7B%3B%20message%7D%20%3D%3E%20CascadeNode.%22%0D%0D%09%7C%20rcvr%20msgs%20%7C%0D%09parseNode%20canCascade%20ifFalse%3A%0D%09%09%5B%5Eself%20expected%3A%20%27Cascading%20not%27%5D.%0D%09rcvr%20%3A%3D%20parseNode%20receiver.%0D%09msgs%20%3A%3D%20OrderedCollection%20with%3A%20parseNode.%0D%09%5Bself%20match%3A%20%23semicolon%5D%0D%09%09whileTrue%3A%20%0D%09%09%09%5BparseNode%20%3A%3D%20rcvr.%0D%09%09%09%28self%20messagePart%3A%203%20repeat%3A%20false%29%0D%09%09%09%09ifFalse%3A%20%5B%5Eself%20expected%3A%20%27Cascade%27%5D.%0D%09%09%09parseNode%20canCascade%20ifFalse%3A%0D%09%09%09%09%5B%5Eself%20expected%3A%20%27%3C-%20No%20special%20messages%27%5D.%0D%09%09%09parseNode%20ensureCanCascade%3A%20encoder.%0D%09%09%09msgs%20addLast%3A%20parseNode%5D.%0D%09parseNode%20%3A%3D%20StCascadeNode%20new%20receiver%3A%20rcvr%20messages%3A%20msgs"));
smalltalk.bind(smalltalk.StParser, unescape("doIt%3Aarguments%3Aprecedence%3A"), "doIt_arguments_precedence_", function StParser__doIt_arguments_precedence_(selector,args,precedence){
var blk = nil;
var prim = nil;
var temps = nil;
var messageComment = nil;
var methodNode = nil;
const self = this; self['@encoder'].selector_(selector);
args.do_((function StParser__(argNode){
return argNode.beMethodArg();
}
));
temps=self.temporaries();
messageComment=self['@currentComment'];
self['@currentComment']=nil;
prim=self.pragmaPrimitives();
self.statements_innerBlock_([],true);
blk=self['@parseNode'];
blk.returnLast();
if (((nil.is_eqeq_(self['@hereType'],"doIt"))).not()) {return self.expected_("Nothing more")};
methodNode=(self.newMethodNode()).comment_(messageComment);
methodNode.selector_arguments_precedence_temporaries_block_encoder_primitive_(selector,args,precedence,temps,blk,self['@encoder'],prim);
return methodNode;
}
, "expression types", unescape("doIt%3A%20selector%20arguments%3A%20args%20precedence%3A%20precedence%0D%09%22%20pattern%20%5B%20%7C%20temporaries%20%5D%20block%20%3D%3E%20MethodNode.%22%0D%0D%09%7C%20blk%20prim%20temps%20messageComment%20methodNode%20%7C%0D%09encoder%20selector%3A%20selector.%0D%09args%20do%3A%20%5B%3AargNode%20%7C%20argNode%20beMethodArg%5D.%0D%09temps%20%3A%3D%20self%20temporaries.%0D%09messageComment%20%3A%3D%20currentComment.%0D%09currentComment%20%3A%3D%20nil.%0D%09prim%20%3A%3D%20self%20pragmaPrimitives.%0D%09self%20statements%3A%20%23%28%29%20innerBlock%3A%20true.%0D%09blk%20%3A%3D%20parseNode.%0D%09blk%20returnLast.%0D%09hereType%20%3D%3D%20%23doIt%20ifFalse%3A%20%5B%5Eself%20expected%3A%20%27Nothing%20more%27%5D.%0D%09methodNode%20%3A%3D%20self%20newMethodNode%20comment%3A%20messageComment.%0D%09methodNode%0D%09%09selector%3A%20selector%0D%09%09arguments%3A%20args%0D%09%09precedence%3A%20precedence%0D%09%09temporaries%3A%20temps%0D%09%09block%3A%20blk%0D%09%09encoder%3A%20encoder%0D%09%09primitive%3A%20prim.%0D%09%5EmethodNode"));
smalltalk.bind(smalltalk.StParser, unescape("expression"), "expression", function StParser__expression(){
const self = this; if ((((nil.is_eqeq_(self['@hereType'],"word"))).and_((function StParser__(){
return (nil.is_eqeq_(self['@tokenType'],"leftArrow"));
}
))).valueOf()) {return self.assignment_((self.variable()))};
if ((self.primaryExpression()).not()) {return false};
if (((self.messagePart_repeat_((3),true)).and_((function StParser__(){
return (nil.is_eqeq_(self['@hereType'],"semicolon"));
}
))).valueOf()) {self.cascade()};
return true;
}
, "expression types", unescape("expression%0D%09%28hereType%20%3D%3D%20%23word%0D%09%20and%3A%20%5BtokenType%20%3D%3D%20%23leftArrow%5D%29%20ifTrue%3A%0D%09%09%5B%5Eself%20assignment%3A%20self%20variable%5D.%0D%09self%20primaryExpression%20ifFalse%3A%0D%09%09%5B%5Efalse%5D.%0D%09%28%28self%20messagePart%3A%203%20repeat%3A%20true%29%0D%09%20and%3A%20%5BhereType%20%3D%3D%20%23semicolon%5D%29%20ifTrue%3A%0D%09%09%5Bself%20cascade%5D.%0D%09%5Etrue"));
smalltalk.bind(smalltalk.StParser, unescape("messagePart%3Arepeat%3A"), "messagePart_repeat_", function StParser__messagePart_repeat_(level,repeat){
var start = nil;
var receiver = nil;
var selector = nil;
var args = nil;
var precedence = nil;
var words = nil;
var keywordStart = nil;
const self = this; var $early={name:"stReturn"};
try {
while(((function StParser__(){
receiver=self['@parseNode'];
if ((((nil.is_eqeq_(self['@hereType'],"keyword"))).and_((function StParser__(){
return level._gt_eq((3));
}
))).valueOf()) {start=self.startOfNextToken();
selector="".writeStream();
args=smalltalk.OrderedCollection.$$new();
words=smalltalk.OrderedCollection.$$new();
while(((nil.is_eqeq_(self['@hereType'],"keyword"))).valueOf()){keywordStart=(self.startOfNextToken())._plus(self['@requestorOffset']);
selector.nextPutAll_((self.advance()));
words.addLast_((keywordStart.to_(((self.endOfLastToken())._plus(self['@requestorOffset'])))));
if ((self.primaryExpression()).not()) {$early.result=self.expected_("Argument"); throw ($early)};
self.messagePart_repeat_((2),true);
args.addLast_(self['@parseNode'])};;
selector=(selector.contents()).asSymbol();
precedence=(3)} else {if (((level._gt_eq((2))).and_((function StParser__(){
return (nil.is_eqeq_(self['@hereType'],"verticalBar"));
}
))).valueOf()) {self.transformAVerticalBarIntoABinarySelector()};
if ((((nil.is_eqeq_(self['@hereType'],"binary"))).and_((function StParser__(){
return level._gt_eq((2));
}
))).valueOf()) {start=self.startOfNextToken();
selector=(self.advance()).asSymbol();
if ((self.primaryExpression()).not()) {$early.result=self.expected_("Argument"); throw ($early)};
self.messagePart_repeat_((1),true);
args=smalltalk.Array.with_(self['@parseNode']);
precedence=(2)} else {if (((nil.is_eqeq_(self['@hereType'],"word"))).valueOf()) {start=self.startOfNextToken();
selector=(self.advance()).asSymbol();
args=[];
words=smalltalk.OrderedCollection.with_(((start._plus(self['@requestorOffset'])).to_(((self.endOfLastToken())._plus(self['@requestorOffset'])))));
precedence=(1)} else {$early.result=(nil.isNil_(args)===false); throw ($early)}}};
self['@parseNode']=(smalltalk.StMessageNode.$$new()).receiver_selector_arguments_precedence_from_(receiver,selector,args,precedence,self['@encoder']);
return repeat;
}
)()).valueOf()){nil};;
return true;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "expression types", unescape("messagePart%3A%20level%20repeat%3A%20repeat%0D%0D%09%7C%20start%20receiver%20selector%20args%20precedence%20words%20keywordStart%20%7C%0D%09%5Breceiver%20%3A%3D%20parseNode.%0D%09%28hereType%20%3D%3D%20%23keyword%20and%3A%20%5Blevel%20%3E%3D%203%5D%29%0D%09%09ifTrue%3A%20%0D%09%09%09%5Bstart%20%3A%3D%20self%20startOfNextToken.%0D%09%09%09selector%20%3A%3D%20%27%27%20writeStream.%0D%09%09%09args%20%3A%3D%20OrderedCollection%20new.%0D%09%09%09words%20%3A%3D%20OrderedCollection%20new.%0D%09%09%09%5BhereType%20%3D%3D%20%23keyword%5D%0D%09%09%09%09whileTrue%3A%20%0D%09%09%09%09%09%5BkeywordStart%20%3A%3D%20self%20startOfNextToken%20+%20requestorOffset.%0D%09%09%09%09%09selector%20nextPutAll%3A%20self%20advance.%0D%09%09%09%09%09words%20addLast%3A%20%28keywordStart%20to%3A%20self%20endOfLastToken%20+%20requestorOffset%29.%0D%09%09%09%09%09self%20primaryExpression%20ifFalse%3A%20%5B%5Eself%20expected%3A%20%27Argument%27%5D.%0D%09%09%09%09%09self%20messagePart%3A%202%20repeat%3A%20true.%0D%09%09%09%09%09args%20addLast%3A%20parseNode%5D.%0D%09%09%09selector%20%3A%3D%20selector%20contents%20asSymbol.%0D%09%09%09precedence%20%3A%3D%203%5D%0D%09%09ifFalse%3A%20%5B%0D%09%09%09%28level%20%3E%3D%202%20and%3A%20%5BhereType%20%3D%3D%20%23verticalBar%5D%29%20ifTrue%3A%20%5Bself%20transformAVerticalBarIntoABinarySelector%5D.%0D%09%09%09%28hereType%20%3D%3D%20%23binary%20and%3A%20%5Blevel%20%3E%3D%202%5D%29%0D%09%09%09%09ifTrue%3A%20%0D%09%09%09%09%09%5Bstart%20%3A%3D%20self%20startOfNextToken.%0D%09%09%09%09%09selector%20%3A%3D%20self%20advance%20asSymbol.%0D%09%09%09%09%09self%20primaryExpression%20ifFalse%3A%20%5B%5Eself%20expected%3A%20%27Argument%27%5D.%0D%09%09%09%09%09self%20messagePart%3A%201%20repeat%3A%20true.%0D%09%09%09%09%09args%20%3A%3D%20Array%20with%3A%20parseNode.%0D%09%09%09%09%09precedence%20%3A%3D%202%5D%0D%09%09%09%09ifFalse%3A%20%5BhereType%20%3D%3D%20%23word%0D%09%09%09%09%09%09ifTrue%3A%20%0D%09%09%09%09%09%09%09%5Bstart%20%3A%3D%20self%20startOfNextToken.%0D%09%09%09%09%09%09%09selector%20%3A%3D%20self%20advance%20asSymbol.%0D%09%09%09%09%09%09%09args%20%3A%3D%20%23%28%29.%0D%09%09%09%09%09%09%09words%20%3A%3D%20OrderedCollection%20with%3A%20%28start%20%20+%20requestorOffset%20to%3A%20self%20endOfLastToken%20+%20requestorOffset%29.%0D%09%09%09%09%09%09%09precedence%20%3A%3D%201%5D%0D%09%09%09%09%09%09ifFalse%3A%20%5B%5Eargs%20notNil%5D%5D%5D.%0D%09parseNode%20%3A%3D%20StMessageNode%20new%0D%09%09%09%09receiver%3A%20receiver%0D%09%09%09%09selector%3A%20selector%0D%09%09%09%09arguments%3A%20args%0D%09%09%09%09precedence%3A%20precedence%0D%09%09%09%09from%3A%20encoder.%0D%09repeat%5D%0D%09%09whileTrue%3A%20%5B%5D.%0D%09%5Etrue"));
smalltalk.bind(smalltalk.StParser, unescape("method%3Acontext%3A"), "method_context_", function StParser__method_context_(doit,ctxt){
var sap = nil;
var blk = nil;
var prim = nil;
var temps = nil;
var messageComment = nil;
var methodNode = nil;
const self = this; sap=self.pattern_inContext_(doit,ctxt);
self['@encoder'].selector_((sap.at_((1))));
(sap.at_((2))).do_((function StParser__(argNode){
return argNode.beMethodArg();
}
));
if ((doit).not()) {self.pragmaSequence()};
temps=self.temporaries();
messageComment=self['@currentComment'];
self['@currentComment']=nil;
if ((doit).not()) {self.pragmaSequence()};
prim=self.pragmaPrimitives();
self.statements_innerBlock_([],doit);
blk=self['@parseNode'];
if ((doit).valueOf()) {blk.returnLast()} else {blk.returnSelfIfNoOther_(self['@encoder'])};
if (((nil.is_eqeq_(self['@hereType'],"doIt"))).not()) {return self.expected_("Nothing more")};
methodNode=(self.newMethodNode()).comment_(messageComment);
methodNode.selector_arguments_precedence_temporaries_block_encoder_primitive_((sap.at_((1))),(sap.at_((2))),(sap.at_((3))),temps,blk,self['@encoder'],prim);
return methodNode;
}
, "expression types", unescape("method%3A%20doit%20context%3A%20ctxt%20%0D%09%22%20pattern%20%5B%20%7C%20temporaries%20%5D%20block%20%3D%3E%20MethodNode.%22%0D%0D%09%7C%20sap%20blk%20prim%20temps%20messageComment%20methodNode%20%7C%0D%09sap%20%3A%3D%20self%20pattern%3A%20doit%20inContext%3A%20ctxt.%0D%09%22sap%3D%7Bselector%2C%20arguments%2C%20precedence%7D%22%0D%09encoder%20selector%3A%20%28sap%20at%3A%201%29.%0D%09%28sap%20at%3A%202%29%20do%3A%20%5B%3AargNode%20%7C%20argNode%20beMethodArg%5D.%0D%09doit%20ifFalse%3A%20%5Bself%20pragmaSequence%5D.%0D%09temps%20%3A%3D%20self%20temporaries.%0D%09messageComment%20%3A%3D%20currentComment.%0D%09currentComment%20%3A%3D%20nil.%0D%09doit%20ifFalse%3A%20%5Bself%20pragmaSequence%5D.%0D%09prim%20%3A%3D%20self%20pragmaPrimitives.%0D%09self%20statements%3A%20%23%28%29%20innerBlock%3A%20doit.%0D%09blk%20%3A%3D%20parseNode.%0D%09doit%20ifTrue%3A%20%5Bblk%20returnLast%5D%0D%09%09ifFalse%3A%20%5Bblk%20returnSelfIfNoOther%3A%20encoder%5D.%0D%09hereType%20%3D%3D%20%23doIt%20ifFalse%3A%20%5B%5Eself%20expected%3A%20%27Nothing%20more%27%5D.%0D%09methodNode%20%3A%3D%20self%20newMethodNode%20comment%3A%20messageComment.%0D%09methodNode%0D%09%09selector%3A%20%28sap%20at%3A%201%29%0D%09%09arguments%3A%20%28sap%20at%3A%202%29%0D%09%09precedence%3A%20%28sap%20at%3A%203%29%0D%09%09temporaries%3A%20temps%0D%09%09block%3A%20blk%0D%09%09encoder%3A%20encoder%0D%09%09primitive%3A%20prim.%0D%09%5EmethodNode"));
smalltalk.bind(smalltalk.StParser, unescape("newMethodNode"), "newMethodNode", function StParser__newMethodNode(){
const self = this; return ((self.encoder()).methodNodeClass()).$$new();
}
, "expression types", unescape("newMethodNode%0D%09%5Eself%20encoder%20methodNodeClass%20new"));
smalltalk.bind(smalltalk.StParser, unescape("pattern%3AinContext%3A"), "pattern_inContext_", function StParser__pattern_inContext_(fromDoit,ctxt){
var args = nil;
var selector = nil;
const self = this; self['@doitFlag']=fromDoit;
if ((fromDoit).valueOf()) {if (((nil.is_eqeq_(ctxt,nil))).valueOf()) {return smalltalk.Array.with_with_with_("DoIt",(smalltalk.Array.$$new()),(1))} else {return smalltalk.Array.with_with_with_("DoItIn:",(smalltalk.Array.with_((self['@encoder'].encodeVariable_((self['@encoder'].doItInContextName()))))),(3))}};
if (((nil.is_eqeq_(self['@hereType'],"word"))).valueOf()) {return smalltalk.Array.with_with_with_(((self.advance()).asSymbol()),(smalltalk.Array.$$new()),(1))};
if ((((nil.is_eqeq_(self['@hereType'],"binary"))).or_((function StParser__(){
return (nil.is_eqeq_(self['@hereType'],"verticalBar"));
}
))).valueOf()) {selector=(self.advance()).asSymbol();
args=smalltalk.Array.with_((self['@encoder'].bindArg_((self.argumentName()))));
return smalltalk.Array.with_with_with_(selector,args,(2))};
if (((nil.is_eqeq_(self['@hereType'],"keyword"))).valueOf()) {selector="".writeStream();
args=smalltalk.OrderedCollection.$$new();
while(((nil.is_eqeq_(self['@hereType'],"keyword"))).valueOf()){selector.nextPutAll_((self.advance()));
args.addLast_((self['@encoder'].bindArg_((self.argumentName()))))};;
return smalltalk.Array.with_with_with_(((selector.contents()).asSymbol()),args,(3))};
return self.expected_("Message pattern");
}
, "expression types", unescape("pattern%3A%20fromDoit%20inContext%3A%20ctxt%0D%09%22%20unarySelector%20%7C%20binarySelector%20arg%20%7C%20keyword%20arg%20%7Bkeyword%20arg%7D%20%3D%3E%0D%09%7Bselector%2C%20arguments%2C%20precedence%7D.%22%0D%09%7C%20args%20selector%20%7C%0D%09doitFlag%20%3A%3D%20fromDoit.%0D%09fromDoit%20ifTrue%3A%0D%09%09%5B%5Ectxt%20%3D%3D%20nil%0D%09%09%09ifTrue%3A%20%5BArray%20with%3A%20%23DoIt%20with%3A%20Array%20new%20with%3A%201%5D%0D%09%09%09ifFalse%3A%20%5BArray%20with%3A%20%23DoItIn%3A%20with%3A%20%28Array%20with%3A%20%28encoder%20encodeVariable%3A%20encoder%20doItInContextName%29%29%20with%3A%203%5D%5D.%0D%0D%09hereType%20%3D%3D%20%23word%20ifTrue%3A%20%5B%5E%20Array%20with%3A%20self%20advance%20asSymbol%20with%3A%20Array%20new%20with%3A%201%5D.%0D%0D%09%28hereType%20%3D%3D%20%23binary%20or%3A%20%5BhereType%20%3D%3D%20%23verticalBar%5D%29%20ifTrue%3A%20%0D%09%09%5Bselector%20%3A%3D%20self%20advance%20asSymbol.%0D%09%09args%20%3A%3D%20Array%20with%3A%20%28encoder%20bindArg%3A%20self%20argumentName%29.%0D%09%09%5E%20Array%20with%3A%20selector%20with%3A%20args%20with%3A%202%5D.%0D%0D%09hereType%20%3D%3D%20%23keyword%20ifTrue%3A%20%0D%09%09%5Bselector%20%3A%3D%20%27%27%20writeStream.%0D%09%09args%20%3A%3D%20OrderedCollection%20new.%0D%09%09%5BhereType%20%3D%3D%20%23keyword%5D%20whileTrue%3A%5B%0D%09%09%09selector%20nextPutAll%3A%20self%20advance.%0D%09%09%09args%20addLast%3A%20%28encoder%20bindArg%3A%20self%20argumentName%29.%0D%09%09%5D.%0D%09%09%5E%20Array%20with%3A%20selector%20contents%20asSymbol%20with%3A%20args%20with%3A%203%5D.%0D%09%5Eself%20expected%3A%20%27Message%20pattern%27"));
smalltalk.bind(smalltalk.StParser, unescape("primaryExpression"), "primaryExpression", function StParser__primaryExpression(){
const self = this; if (((nil.is_eqeq_(self['@hereType'],"word"))).valueOf()) {self['@parseNode']=self.variable();
self['@parseNode'].nowHasRef();
return true};
if (((nil.is_eqeq_(self['@hereType'],"leftBracket"))).valueOf()) {self.advance();
self.blockExpression();
return true};
if (((nil.is_eqeq_(self['@hereType'],"leftBrace"))).valueOf()) {self.braceExpression();
return true};
if (((nil.is_eqeq_(self['@hereType'],"leftParenthesis"))).valueOf()) {self.advance();
if ((self.expression()).not()) {return self.expected_("expression")};
if ((self.match_("rightParenthesis")).not()) {return self.expected_("right parenthesis")};
return true};
if ((((nil.is_eqeq_(self['@hereType'],"string"))).or_((function StParser__(){
return ((nil.is_eqeq_(self['@hereType'],"number"))).or_((function StParser__(){
return ((nil.is_eqeq_(self['@hereType'],"literal"))).or_((function StParser__(){
return (nil.is_eqeq_(self['@hereType'],"character"));
}
));
}
));
}
))).valueOf()) {self['@parseNode']=self['@encoder'].encodeLiteral_((self.advance()));
return true};
if ((((nil.is_eqeq_(self['@here'],unescape("-")))).and_((function StParser__(){
return ((nil.is_eqeq_(self['@tokenType'],"number"))).and_((function StParser__(){
return ((1)._plus(self['@hereEnd']))._eq(self['@mark']);
}
));
}
))).valueOf()) {self.advance();
self['@parseNode']=self['@encoder'].encodeLiteral_(((self.advance()).negated()));
return true};
return false;
}
, "expression types", unescape("primaryExpression%20%0D%09hereType%20%3D%3D%20%23word%20%0D%09%09ifTrue%3A%20%0D%09%09%09%5BparseNode%20%3A%3D%20self%20variable.%0D%09%09%09parseNode%20nowHasRef.%0D%09%09%09%5E%20true%5D.%0D%09hereType%20%3D%3D%20%23leftBracket%0D%09%09ifTrue%3A%20%0D%09%09%09%5Bself%20advance.%0D%09%09%09self%20blockExpression.%0D%09%09%09%5Etrue%5D.%0D%09hereType%20%3D%3D%20%23leftBrace%0D%09%09ifTrue%3A%20%5B%0D%09%09%09self%20braceExpression.%0D%09%09%09%5Etrue%5D.%0D%09hereType%20%3D%3D%20%23leftParenthesis%0D%09%09ifTrue%3A%20%0D%09%09%09%5Bself%20advance.%0D%09%09%09self%20expression%20ifFalse%3A%20%5B%5Eself%20expected%3A%20%27expression%27%5D.%0D%09%09%09%28self%20match%3A%20%23rightParenthesis%29%0D%09%09%09%09ifFalse%3A%20%5B%5Eself%20expected%3A%20%27right%20parenthesis%27%5D.%0D%09%09%09%5Etrue%5D.%0D%09%28hereType%20%3D%3D%20%23string%20or%3A%20%5BhereType%20%3D%3D%20%23number%20or%3A%20%5BhereType%20%3D%3D%20%23literal%20or%3A%20%5BhereType%20%3D%3D%20%23character%5D%5D%5D%29%0D%09%09ifTrue%3A%20%0D%09%09%09%5BparseNode%20%3A%3D%20encoder%20encodeLiteral%3A%20self%20advance.%0D%09%09%09%5Etrue%5D.%0D%09%28here%20%3D%3D%20%23-%20and%3A%20%5BtokenType%20%3D%3D%20%23number%20and%3A%20%5B1%20+%20hereEnd%20%3D%20mark%5D%5D%29%0D%09%09ifTrue%3A%20%0D%09%09%09%5Bself%20advance.%0D%09%09%09parseNode%20%3A%3D%20encoder%20encodeLiteral%3A%20self%20advance%20negated.%0D%09%09%09%5Etrue%5D.%0D%09%5Efalse"));
smalltalk.bind(smalltalk.StParser, unescape("selector%3Aarguments%3Aprecedence%3A"), "selector_arguments_precedence_", function StParser__selector_arguments_precedence_(selector,args,precedence){
var blk = nil;
var prim = nil;
var temps = nil;
var messageComment = nil;
var methodNode = nil;
const self = this; self['@encoder'].selector_(selector);
args.do_((function StParser__(argNode){
return argNode.beMethodArg();
}
));
self.pragmaSequence();
temps=self.temporaries();
messageComment=self['@currentComment'];
self['@currentComment']=nil;
self.pragmaSequence();
prim=self.pragmaPrimitives();
self.statements_innerBlock_([],false);
blk=self['@parseNode'];
blk.returnSelfIfNoOther_(self['@encoder']);
if (((nil.is_eqeq_(self['@hereType'],"doIt"))).not()) {return self.expected_("Nothing more")};
methodNode=(self.newMethodNode()).comment_(messageComment);
methodNode.selector_arguments_precedence_temporaries_block_encoder_primitive_(selector,args,precedence,temps,blk,self['@encoder'],prim);
return methodNode;
}
, "expression types", unescape("selector%3A%20selector%20arguments%3A%20args%20precedence%3A%20precedence%0D%09%22%20pattern%20%5B%20%7C%20temporaries%20%5D%20block%20%3D%3E%20MethodNode.%22%0D%0D%09%7C%20blk%20prim%20temps%20messageComment%20methodNode%20%7C%0D%09encoder%20selector%3A%20selector.%0D%09args%20do%3A%20%5B%3AargNode%20%7C%20argNode%20beMethodArg%5D.%0D%09self%20pragmaSequence.%0D%09temps%20%3A%3D%20self%20temporaries.%0D%09messageComment%20%3A%3D%20currentComment.%0D%09currentComment%20%3A%3D%20nil.%0D%09self%20pragmaSequence.%0D%09prim%20%3A%3D%20self%20pragmaPrimitives.%0D%09self%20statements%3A%20%23%28%29%20innerBlock%3A%20false.%0D%09blk%20%3A%3D%20parseNode.%0D%09blk%20returnSelfIfNoOther%3A%20encoder.%0D%09hereType%20%3D%3D%20%23doIt%20ifFalse%3A%20%5B%5Eself%20expected%3A%20%27Nothing%20more%27%5D.%0D%09methodNode%20%3A%3D%20self%20newMethodNode%20comment%3A%20messageComment.%0D%09methodNode%0D%09%09selector%3A%20selector%0D%09%09arguments%3A%20args%0D%09%09precedence%3A%20precedence%0D%09%09temporaries%3A%20temps%0D%09%09block%3A%20blk%0D%09%09encoder%3A%20encoder%0D%09%09primitive%3A%20prim.%0D%09%5EmethodNode"));
smalltalk.bind(smalltalk.StParser, unescape("statements%3AinnerBlock%3A"), "statements_innerBlock_", function StParser__statements_innerBlock_(argNodes,inner){
const self = this; return self.statements_innerBlock_blockNode_(argNodes,inner,(smalltalk.StBlockNode.$$new()));
}
, "expression types", unescape("statements%3A%20argNodes%20innerBlock%3A%20inner%0D%0D%09%5Eself%20statements%3A%20argNodes%20innerBlock%3A%20inner%20blockNode%3A%20StBlockNode%20new"));
smalltalk.bind(smalltalk.StParser, unescape("statements%3AinnerBlock%3AblockNode%3A"), "statements_innerBlock_blockNode_", function StParser__statements_innerBlock_blockNode_(argNodes,inner,theBlockNode){
var stmts = nil;
var returns = nil;
var start = nil;
const self = this; var $early={name:"stReturn"};
try {
theBlockNode.comment_(self['@currentComment']);
self['@currentComment']=nil;
stmts=smalltalk.OrderedCollection.$$new();
returns=false;
if ((self['@hereType']._no_no("rightBracket")).valueOf()) {while(((function StParser__(){
start=self.startOfNextToken();
if ((returns=self.matchReturn()).valueOf()) {if ((self.expression()).not()) {$early.result=self.expected_("Expression to return"); throw ($early)};
self.addComment();
stmts.addLast_(((self['@parseNode'].isReturningIf()).ifTrue_ifFalse_((function StParser__(){
return self['@parseNode'];
}
),(function StParser__(){
return (smalltalk.StReturnNode.$$new()).expr_(self['@parseNode']);
}
))))} else {if ((self.expression()).valueOf()) {self.addComment();
stmts.addLast_(self['@parseNode'])} else {self.addComment();
if (((stmts.size())._eq((0))).valueOf()) {stmts.addLast_((self['@encoder'].encodeVariable_((inner.ifTrue_ifFalse_((function StParser__(){
return "nil";
}
),(function StParser__(){
return "self";
}
))))))}}};
if ((returns).valueOf()) {self.match_("period");
if ((((nil.is_eqeq_(self['@hereType'],"rightBracket"))).or_((function StParser__(){
return (nil.is_eqeq_(self['@hereType'],"doIt"));
}
))).not()) {$early.result=self.expected_("End of block"); throw ($early)}};
return (returns.not()).and_((function StParser__(){
return self.match_("period");
}
));
}
)()).valueOf()){};};
theBlockNode.arguments_statements_returns_from_(argNodes,stmts,returns,self['@encoder']);
self['@parseNode']=theBlockNode;
return true;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "expression types", unescape("statements%3A%20argNodes%20innerBlock%3A%20inner%20blockNode%3A%20theBlockNode%0D%0D%09%7C%20stmts%20returns%20start%20%7C%0D%09%22give%20initial%20comment%20to%20block%2C%20since%20others%20trail%20statements%22%0D%09theBlockNode%20comment%3A%20currentComment.%0D%09currentComment%20%3A%3D%20nil.%0D%09stmts%20%3A%3D%20OrderedCollection%20new.%0D%09returns%20%3A%3D%20false.%0D%09hereType%20%7E%7E%20%23rightBracket%20ifTrue%3A%0D%09%09%5B%5Bstart%20%3A%3D%20self%20startOfNextToken.%0D%09%09%20%20%28returns%20%3A%3D%20self%20matchReturn%29%0D%09%09%09ifTrue%3A%20%0D%09%09%09%09%5Bself%20expression%20ifFalse%3A%0D%09%09%09%09%09%5B%5Eself%20expected%3A%20%27Expression%20to%20return%27%5D.%0D%09%09%09%09%20self%20addComment.%0D%09%09%09%09%20stmts%20addLast%3A%20%28parseNode%20isReturningIf%0D%09%09%09%09%09%09%09%09ifTrue%3A%20%5BparseNode%5D%0D%09%09%09%09%09%09%09%09ifFalse%3A%20%5BStReturnNode%20new%20expr%3A%20parseNode%0D%09%09%09%09%09%09%09%09%09%22parseNode%20isIf%0D%09%09%09%09%09%09%09%09%09%09ifTrue%3A%20%5B%0D%09%09%09%09%09%09%09%09%09%09%09returns%20%3A%3D%20false.%0D%09%09%09%09%09%09%09%09%09%09%09parseNode%20inlineReturns%5D%0D%09%09%09%09%09%09%09%09%09%09ifFalse%3A%20%5BStReturnNode%20new%20expr%3A%20parseNode%5D%22%5D%29%5D%0D%09%09%09ifFalse%3A%20%0D%09%09%09%09%5Bself%20expression%0D%09%09%09%09%09ifTrue%3A%20%0D%09%09%09%09%09%09%5Bself%20addComment.%0D%09%09%09%09%09%09%20stmts%20addLast%3A%20parseNode%5D%0D%09%09%09%09%09ifFalse%3A%20%0D%09%09%09%09%09%09%5Bself%20addComment.%0D%09%09%09%09%09%09%20stmts%20size%20%3D%200%20ifTrue%3A%20%0D%09%09%09%09%09%09%09%5Bstmts%20addLast%3A%20%0D%09%09%09%09%09%09%09%09%28encoder%20encodeVariable%3A%0D%09%09%09%09%09%09%09%09%09%28inner%20ifTrue%3A%20%5B%27nil%27%5D%20ifFalse%3A%20%5B%27self%27%5D%29%29%5D%5D%5D.%0D%09%09%20%20returns%20ifTrue%3A%20%0D%09%09%09%5Bself%20match%3A%20%23period.%0D%09%09%09%20%28hereType%20%3D%3D%20%23rightBracket%20or%3A%20%5BhereType%20%3D%3D%20%23doIt%5D%29%20ifFalse%3A%0D%09%09%09%09%5B%5Eself%20expected%3A%20%27End%20of%20block%27%5D%5D.%0D%09%09%20%20returns%20not%20and%3A%20%5Bself%20match%3A%20%23period%5D%5D%20whileTrue%5D.%0D%09theBlockNode%0D%09%09arguments%3A%20argNodes%0D%09%09statements%3A%20stmts%0D%09%09returns%3A%20returns%0D%09%09from%3A%20encoder.%0D%09parseNode%20%3A%3D%20theBlockNode.%0D%09%5Etrue"));
smalltalk.bind(smalltalk.StParser, unescape("temporaries"), "temporaries", function StParser__temporaries(){
var vars = nil;
var theActualText = nil;
const self = this; if ((self.match_("verticalBar")).not()) {if ((self['@doitFlag']).valueOf()) {self['@tempsMark']=(1);
return []};
self['@tempsMark']=self['@hereMark'];
if ((self['@tempsMark']._gt((0))).valueOf()) {theActualText=self['@source'].contents();
while(((self['@tempsMark']._lt((theActualText.size()))).and_((function StParser__(){
return (theActualText.at_(self['@tempsMark'])).isSeparator();
}
))).valueOf()){self['@tempsMark']=self['@tempsMark']._plus((1))};};
return []};
vars=smalltalk.OrderedCollection.$$new();
while(((nil.is_eqeq_(self['@hereType'],"word"))).valueOf()){vars.addLast_((self['@encoder'].bindTemp_((self.advance()))))};;
if ((self.match_("verticalBar")).valueOf()) {self['@tempsMark']=self['@prevMark'];
return vars};
return self.expected_("Vertical bar");
}
, "expression types", unescape("temporaries%0D%09%22%20%5B%20%27%7C%27%20%28variable%29*%20%27%7C%27%20%5D%22%0D%09%7C%20vars%20theActualText%20%7C%0D%09%28self%20match%3A%20%23verticalBar%29%20ifFalse%3A%20%0D%09%09%5B%22no%20temps%22%0D%09%09doitFlag%20ifTrue%3A%0D%09%09%09%5BtempsMark%20%3A%3D%201.%0D%09%09%09%5E%20%23%28%29%5D.%0D%09%09tempsMark%20%3A%3D%20hereMark%09%22formerly%20--%3E%20prevMark%20+%20prevToken%22.%0D%09%09tempsMark%20%3E%200%20ifTrue%3A%0D%09%09%09%5BtheActualText%20%3A%3D%20source%20contents.%0D%09%09%09%5BtempsMark%20%3C%20theActualText%20size%20and%3A%20%5B%28theActualText%20at%3A%20tempsMark%29%20isSeparator%5D%5D%0D%09%09%09%09whileTrue%3A%20%5BtempsMark%20%3A%3D%20tempsMark%20+%201%5D%5D.%0D%09%09%09%5E%20%23%28%29%5D.%0D%09vars%20%3A%3D%20OrderedCollection%20new.%0D%09%5BhereType%20%3D%3D%20%23word%5D%0D%09%09whileTrue%3A%20%5Bvars%20addLast%3A%20%28encoder%20bindTemp%3A%20self%20advance%29%5D.%0D%09%28self%20match%3A%20%23verticalBar%29%20ifTrue%3A%20%0D%09%09%5BtempsMark%20%3A%3D%20prevMark.%0D%09%09%5E%20vars%5D.%0D%09%5E%20self%20expected%3A%20%27Vertical%20bar%27%0D"));
smalltalk.bind(smalltalk.StParser, unescape("temporariesIn%3A"), "temporariesIn_", function StParser__temporariesIn_(methodSelector){
var vars = nil;
var theActualText = nil;
const self = this; if ((self.match_("verticalBar")).not()) {if ((self['@doitFlag']).valueOf()) {self['@tempsMark']=(1);
return []};
self['@tempsMark']=self['@hereMark'];
if ((self['@tempsMark']._gt((0))).valueOf()) {theActualText=self['@source'].contents();
while(((self['@tempsMark']._lt((theActualText.size()))).and_((function StParser__(){
return (theActualText.at_(self['@tempsMark'])).isSeparator();
}
))).valueOf()){self['@tempsMark']=self['@tempsMark']._plus((1))};};
return []};
vars=smalltalk.OrderedCollection.$$new();
while(((nil.is_eqeq_(self['@hereType'],"word"))).valueOf()){vars.addLast_((self['@encoder'].bindTemp_in_((self.advance()),methodSelector)))};;
if ((self.match_("verticalBar")).valueOf()) {self['@tempsMark']=self['@prevMark'];
return vars};
return self.expected_("Vertical bar");
}
, "expression types", unescape("temporariesIn%3A%20methodSelector%0D%09%22%20%5B%20%27%7C%27%20%28variable%29*%20%27%7C%27%20%5D%22%0D%09%7C%20vars%20theActualText%20%7C%0D%09%28self%20match%3A%20%23verticalBar%29%20ifFalse%3A%20%0D%09%09%5B%22no%20temps%22%0D%09%09doitFlag%20ifTrue%3A%0D%09%09%09%5BtempsMark%20%3A%3D%201.%0D%09%09%09%5E%20%23%28%29%5D.%0D%09%09tempsMark%20%3A%3D%20hereMark%09%22formerly%20--%3E%20prevMark%20+%20prevToken%22.%0D%09%09tempsMark%20%3E%200%20ifTrue%3A%0D%09%09%09%5BtheActualText%20%3A%3D%20source%20contents.%0D%09%09%09%5BtempsMark%20%3C%20theActualText%20size%20and%3A%20%5B%28theActualText%20at%3A%20tempsMark%29%20isSeparator%5D%5D%0D%09%09%09%09whileTrue%3A%20%5BtempsMark%20%3A%3D%20tempsMark%20+%201%5D%5D.%0D%09%09%09%5E%20%23%28%29%5D.%0D%09vars%20%3A%3D%20OrderedCollection%20new.%0D%09%5BhereType%20%3D%3D%20%23word%5D%0D%09%09whileTrue%3A%20%5Bvars%20addLast%3A%20%28encoder%20bindTemp%3A%20self%20advance%20in%3A%20methodSelector%29%5D.%0D%09%28self%20match%3A%20%23verticalBar%29%20ifTrue%3A%20%0D%09%09%5BtempsMark%20%3A%3D%20prevMark.%0D%09%09%5E%20vars%5D.%0D%09%5E%20self%20expected%3A%20%27Vertical%20bar%27"));
smalltalk.bind(smalltalk.StParser, unescape("temporaryBlockVariablesFor%3A"), "temporaryBlockVariablesFor_", function StParser__temporaryBlockVariablesFor_(aBlockNode){
var variables = nil;
const self = this; if ((self.match_("verticalBar")).not()) {return []};
variables=smalltalk.OrderedCollection.$$new();
while(((nil.is_eqeq_(self['@hereType'],"word"))).valueOf()){variables.addLast_((self['@encoder'].bindBlockTemp_within_((self.advance()),aBlockNode)))};;
if ((self.match_("verticalBar")).not()) {return self.expected_("Vertical bar")};
return variables;
}
, "expression types", unescape("temporaryBlockVariablesFor%3A%20aBlockNode%0D%09%22Scan%20and%20answer%20temporary%20block%20variables.%22%0D%0D%09%7C%20variables%20%7C%0D%09%28self%20match%3A%20%23verticalBar%29%20ifFalse%3A%0D%09%09%22There%20are%27t%20any%20temporary%20variables.%22%0D%09%09%5B%5E%23%28%29%5D.%0D%0D%09variables%20%3A%3D%20OrderedCollection%20new.%0D%09%5BhereType%20%3D%3D%20%23word%5D%20whileTrue%3A%0D%09%09%5Bvariables%20addLast%3A%20%28encoder%20bindBlockTemp%3A%20self%20advance%20within%3A%20aBlockNode%29%5D.%0D%09%28self%20match%3A%20%23verticalBar%29%20ifFalse%3A%0D%09%09%5B%5Eself%20expected%3A%20%27Vertical%20bar%27%5D.%0D%09%5Evariables"));
smalltalk.bind(smalltalk.StParser, unescape("variable"), "variable", function StParser__variable(){
var varName = nil;
var varStart = nil;
var varEnd = nil;
const self = this; varStart=(self.startOfNextToken())._plus(self['@requestorOffset']);
varName=self.advance();
varEnd=(self.endOfLastToken())._plus(self['@requestorOffset']);
return (function StParser__(){
return self['@encoder'].encodeVariable_sourceRange_ifUnknown_(varName,(varStart.to_(varEnd)),(function StParser__(){
return self['@encoder'].undeclared_(varName);
}
));
}
).on_do_(smalltalk.StCompileException,(function StParser__(exception){
return self.notify_((exception.messageText()));
}
));
}
, "expression types", unescape("variable%0D%0D%09%7C%20varName%20varStart%20varEnd%20%7C%0D%09varStart%20%3A%3D%20self%20startOfNextToken%20+%20requestorOffset.%0D%09varName%20%3A%3D%20self%20advance.%0D%09varEnd%20%3A%3D%20self%20endOfLastToken%20+%20requestorOffset.%0D%09%5E%5Bencoder%20encodeVariable%3A%20varName%0D%09%09sourceRange%3A%20%28varStart%20to%3A%20varEnd%29%0D%09%09ifUnknown%3A%20%5Bencoder%20undeclared%3A%20varName%5D%5D%0D%09%09on%3A%20StCompileException%0D%09%09%09%09do%3A%20%5B%3Aexception%20%7C%20%0D%09%09%09%09%09self%20notify%3A%20exception%20messageText%5D."));
smalltalk.bind(smalltalk.StParser, unescape("addPragma%3A"), "addPragma_", function StParser__addPragma_(aPragma){
const self = this; (self.pragmas()).add_(aPragma);
return self;
}
, "pragmas", unescape("addPragma%3A%20aPragma%0D%09self%20pragmas%20add%3A%20aPragma"));
smalltalk.bind(smalltalk.StParser, unescape("pragmaLiteral%3A"), "pragmaLiteral_", function StParser__pragmaLiteral_(selectorSoFar){
const self = this; if ((((nil.is_eqeq_(self['@hereType'],"string"))).or_((function StParser__(){
return ((nil.is_eqeq_(self['@hereType'],"literal"))).or_((function StParser__(){
return ((nil.is_eqeq_(self['@hereType'],"number"))).or_((function StParser__(){
return (nil.is_eqeq_(self['@hereType'],"character"));
}
));
}
));
}
))).valueOf()) {return self.advance()};
if ((((nil.is_eqeq_(self['@here'],unescape("%23")))).and_((function StParser__(){
return (nil.is_eqeq_(self['@tokenType'],"word"));
}
))).valueOf()) {return self.advance()};
if ((((nil.is_eqeq_(self['@here'],unescape("-")))).and_((function StParser__(){
return (nil.is_eqeq_(self['@tokenType'],"number"));
}
))).valueOf()) {return (function StParser__($1$){
$1$.advance();
return $1$.advance()}
)(self).negated()};
if (((self['@here']._eq("true")).or_((function StParser__(){
return (self['@here']._eq("false")).or_((function StParser__(){
return self['@here']._eq("nil");
}
));
}
))).valueOf()) {return ((smalltalk.StScanner.$$new()).scanTokens_((self.advance()))).first()};
return self.expected_("Literal constant");
}
, "pragmas", unescape("pragmaLiteral%3A%20selectorSoFar%0D%09%22Read%20a%20pragma%20literal.%20%20As%20a%20nicety%20we%20allow%20a%20variable%20name%20%28rather%0D%09%20than%20a%20literal%20string%29%20as%20the%20second%20argument%20to%20primitive%3Aerror%3A%22%0D%0D%09%28hereType%20%3D%3D%20%23string%20or%3A%20%5B%20hereType%20%3D%3D%20%23literal%20or%3A%20%5B%20hereType%20%3D%3D%20%23number%20or%3A%20%5B%20hereType%20%3D%3D%20%23character%20%5D%20%5D%20%5D%29%0D%09%09ifTrue%3A%20%5B%20%5E%20self%20advance%20%5D.%0D%09%28here%20%3D%3D%20%24%23%20and%3A%20%5B%20tokenType%20%3D%3D%20%23word%20%5D%29%0D%09%09ifTrue%3A%20%5B%20%5E%20self%20advance%20%5D.%0D%09%28here%20%3D%3D%20%23-%20and%3A%20%5B%20tokenType%20%3D%3D%20%23number%20%5D%29%0D%09%09ifTrue%3A%20%5B%20%5E%20%28self%20advance%3B%20advance%29%20negated%20%5D.%0D%09%28here%20%3D%20%27true%27%20or%3A%20%5B%20here%20%3D%20%27false%27%20or%3A%20%5B%20here%20%3D%20%27nil%27%20%5D%20%5D%29%0D%09%09ifTrue%3A%20%5B%20%5E%20%28StScanner%20new%20scanTokens%3A%20self%20advance%29%20first%20%5D.%0D%09%5Eself%20expected%3A%20%27Literal%20constant%27"));
smalltalk.bind(smalltalk.StParser, unescape("pragmaPrimitives"), "pragmaPrimitives", function StParser__pragmaPrimitives(){
var primitives = nil;
const self = this; if (((self.pragmas()).isEmpty()).valueOf()) {return nil};
primitives=self['@pragmas'].select_((function StParser__(pragma){
return ((self.$klass).primitivePragmaSelectors()).includes_((pragma.keyword()));
}
));
if ((primitives.isEmpty()).valueOf()) {return nil};
if (((primitives.size())._gt((1))).valueOf()) {return self.notify_("Ambigous primitives")};
return self.perform_withArguments_(((primitives.first()).keyword()),((primitives.first()).arguments()));
}
, "pragmas", unescape("pragmaPrimitives%0D%09%7C%20primitives%20%7C%0D%09self%20pragmas%20isEmpty%20ifTrue%3A%0D%09%09%5B%5Enil%5D.%0D%09primitives%20%3A%3D%20pragmas%20select%3A%0D%09%09%09%09%09%5B%3Apragma%7C%0D%09%09%09%09%09self%20class%20primitivePragmaSelectors%20includes%3A%20pragma%20keyword%5D.%0D%09primitives%20isEmpty%20ifTrue%3A%0D%09%09%5B%5Enil%5D.%0D%09primitives%20size%20%3E%201%20ifTrue%3A%0D%09%09%5B%5Eself%20notify%3A%20%27Ambigous%20primitives%27%5D.%0D%09%5Eself%20perform%3A%20primitives%20first%20keyword%20withArguments%3A%20primitives%20first%20arguments"));
smalltalk.bind(smalltalk.StParser, unescape("pragmaSequence"), "pragmaSequence", function StParser__pragmaSequence(){
const self = this; var $early={name:"stReturn"};
try {
while(((function StParser__(){
if ((self.matchToken_(unescape("%3C"))).not()) {$early.result=self; throw ($early)};
self.pragmaStatement();
if ((self.matchToken_(unescape("%3E"))).not()) {$early.result=self.expected_(unescape("%3E")); throw ($early)};
return true;
}
)()).valueOf()){};;
return self;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "pragmas", unescape("pragmaSequence%0D%09%22Parse%20a%20sequence%20of%20method%20pragmas.%22%0D%09%0D%09%5B%0D%09%09%28self%20matchToken%3A%20%23%3C%29%0D%09%09%09ifFalse%3A%20%5B%20%5E%20self%20%5D.%0D%09%09self%20pragmaStatement.%0D%09%09%28self%20matchToken%3A%20%23%3E%29%0D%09%09%09ifFalse%3A%20%5B%20%5E%20self%20expected%3A%20%27%3E%27%20%5D.%0D%09%09true%5D%20whileTrue"));
smalltalk.bind(smalltalk.StParser, unescape("pragmaStatement"), "pragmaStatement", function StParser__pragmaStatement(){
var selector = nil;
var args = nil;
var words = nil;
var index = nil;
var keyword = nil;
const self = this; if (((self['@hereType']._eq("keyword")).or_((function StParser__(){
return (self['@hereType']._eq("word")).or_((function StParser__(){
return self['@hereType']._eq("binary");
}
));
}
))).not()) {return self.expected_("pragma declaration")};
selector="";
args=smalltalk.OrderedCollection.$$new();
words=smalltalk.OrderedCollection.$$new();
while(((self['@hereType']._eq("keyword")).or_((function StParser__(){
return ((self['@hereType']._eq("word")).or_((function StParser__(){
return self['@hereType']._eq("binary");
}
))).and_((function StParser__(){
return selector.isEmpty();
}
));
}
))).valueOf()){index=(self.startOfNextToken())._plus(self['@requestorOffset']);
selector=selector._comma((self.advance()));
words.add_((index.to_(((self.endOfLastToken())._plus(self['@requestorOffset'])))));
if ((((selector.last())._eq(":")).or_((function StParser__(){
return ((selector.first()).isLetter()).not();
}
))).valueOf()) {args.add_((self.pragmaLiteral_(selector)))}};;
keyword=selector.asSymbol();
self.addPragma_((smalltalk.StPragma.keyword_arguments_(keyword,(args.asArray()))));
return true;
}
, "pragmas", unescape("pragmaStatement%0D%09%22Read%20a%20single%20pragma%20statement.%20Parse%20all%20generic%20pragmas%20in%20the%20form%20of%3A%20%3Ckey1%3A%20val1%20key2%3A%20val2%20...%3E%20and%20remember%20them%2C%20including%20primitives.%22%0D%09%0D%09%7C%20selector%20args%20words%20index%20keyword%20%7C%0D%09%28hereType%20%3D%20%23keyword%20or%3A%20%5B%20hereType%20%3D%20%23word%20or%3A%20%5B%20hereType%20%3D%20%23binary%20%5D%20%5D%29%0D%09%09ifFalse%3A%20%5B%20%20%5E%20self%20expected%3A%20%27pragma%20declaration%27%20%5D.%0D%0D%09selector%20%3A%3D%20%27%27.%0D%09args%20%3A%3D%20OrderedCollection%20new.%0D%09words%20%3A%3D%20OrderedCollection%20new.%0D%09%5B%20hereType%20%3D%20%23keyword%20or%3A%20%5B%20%28hereType%20%3D%20%23word%20or%3A%20%5B%20hereType%20%3D%20%23binary%20%5D%29%20and%3A%20%5B%20selector%20isEmpty%20%5D%20%5D%20%5D%20whileTrue%3A%20%5B%0D%09%09index%20%3A%3D%20self%20startOfNextToken%20+%20requestorOffset.%0D%09%09selector%20%3A%3D%20selector%20%2C%20self%20advance.%0D%09%09words%20add%3A%20%28index%20to%3A%20self%20endOfLastToken%20+%20requestorOffset%29.%0D%09%09%28selector%20last%20%3D%20%24%3A%20or%3A%20%5B%20selector%20first%20isLetter%20not%20%5D%29%0D%09%09%09ifTrue%3A%20%5B%20args%20add%3A%20%28self%20pragmaLiteral%3A%20selector%29%20%5D%20%5D.%0D%22%09selector%20numArgs%20%7E%3D%20args%20size%0D%09%09ifTrue%3A%20%5B%20%5E%20self%20expected%3A%20%27pragma%20argument%27%20%5D.%22%0D%09keyword%20%3A%3D%20selector%20asSymbol.%0D%09self%20addPragma%3A%20%28StPragma%20keyword%3A%20keyword%20arguments%3A%20args%20asArray%29.%0D%09%5E%20true"));
smalltalk.bind(smalltalk.StParser, unescape("pragmas"), "pragmas", function StParser__pragmas(){
const self = this; return (function(){var $1$; $1$ = self['@pragmas']; if (nil.isNil_($1$)) { return self['@pragmas']=smalltalk.OrderedCollection.$$new() } else { return $1$; }})();
}
, "pragmas", unescape("pragmas%0D%09%5Epragmas%20ifNil%3A%20%5Bpragmas%20%3A%3D%20OrderedCollection%20new%5D"));
smalltalk.bind(smalltalk.StParser, unescape("primitive%3Amodule%3A"), "primitive_module_", function StParser__primitive_module_(primitiveName,moduleName){
const self = this; return (smalltalk.StPrimitiveNode.$$new()).module_primitive_(moduleName,primitiveName);
}
, "primitives", unescape("primitive%3A%20primitiveName%20module%3A%20moduleName%0D%09%22Create%20named%20primitive.%22%0D%09%22%09%3Cprimitive%3A%20%27primScan%27%20module%3A%20%27NKBarcodeScanner%27%3E%22%0D%09%5EStPrimitiveNode%20new%20module%3A%20moduleName%20primitive%3A%20primitiveName"));
smalltalk.bind(smalltalk.StParser, unescape("encoder"), "encoder", function StParser__encoder(){
const self = this; return (function(){var $1$; $1$ = self['@encoder']; if (nil.isNil_($1$)) { return self['@encoder']=smalltalk.StEncoder.$$new() } else { return $1$; }})();
}
, "public access", unescape("encoder%0D%09%5Eencoder%20ifNil%3A%0D%09%09%5Bencoder%20%3A%3D%20StEncoder%20new%5D"));
smalltalk.bind(smalltalk.StParser, unescape("encoderClass%3A"), "encoderClass_", function StParser__encoderClass_(anEncoderClass){
const self = this; (function(){var $1$; $1$ = self['@encoder']; if (!nil.isNil_($1$)) { return self.error_("encoder already set") } else { return $1$; }})();
self['@encoder']=anEncoderClass.$$new();
return self;
}
, "public access", unescape("encoderClass%3A%20anEncoderClass%0D%09encoder%20ifNotNil%3A%20%5B%0D%09%09self%20error%3A%20%27encoder%20already%20set%27%5D.%0D%09encoder%20%3A%3D%20anEncoderClass%20new"));
smalltalk.bind(smalltalk.StParser, unescape("parse%3Aclass%3A"), "parse_class_", function StParser__parse_class_(sourceStreamOrString,behavior){
const self = this; var $early={name:"stReturn"};
try {
return self.parse_class_noPattern_notifying_ifFail_((sourceStreamOrString.readStream()),behavior,false,nil,(function StParser__(){
$early.result=nil; throw ($early);
}
));
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "public access", unescape("parse%3A%20sourceStreamOrString%20class%3A%20behavior%0D%0D%09%5E%20self%20parse%3A%20sourceStreamOrString%20readStream%20class%3A%20behavior%0D%09%09noPattern%3A%20false%20notifying%3A%20nil%20ifFail%3A%20%5B%5Enil%5D"));
smalltalk.bind(smalltalk.StParser, unescape("parse%3Aclass%3AnoPattern%3Anotifying%3AifFail%3A"), "parse_class_noPattern_notifying_ifFail_", function StParser__parse_class_noPattern_notifying_ifFail_(sourceStream,$$class,noPattern,req,aBlock){
var c = nil;
const self = this; c=smalltalk.StCompilationCue.source_class_(sourceStream,$$class);
return self.parseCue_noPattern_ifFail_(c,noPattern,aBlock);
}
, "public access", unescape("parse%3A%20sourceStream%20class%3A%20class%20noPattern%3A%20noPattern%20notifying%3A%20req%20ifFail%3A%20aBlock%20%0D%09%7C%20c%20%7C%0D%09c%20%3A%3D%20StCompilationCue%0D%09%09%09source%3A%20sourceStream%0D%09%09%09class%3A%20class.%0D%09%5E%20self%20%0D%09%09parseCue%3A%20c%20%0D%09%09noPattern%3A%20noPattern%20%0D%09%09ifFail%3A%20aBlock"));
smalltalk.bind(smalltalk.StParser, unescape("parseArgsAndTemps%3A"), "parseArgsAndTemps_", function StParser__parseArgsAndTemps_(aString){
const self = this; if (((nil.is_eqeq_(aString,nil))).valueOf()) {return []};
self['@doitFlag']=false;
return self.initPattern_return_(aString,(function StParser__(pattern){
return (pattern.at_((2)))._comma((self.temporariesIn_((pattern.at_((1))))));
}
));
}
, "public access", unescape("parseArgsAndTemps%3A%20aString%20%0D%20%20%20%20%20%20%20%20%22Parse%20the%20argument%2C%20aString%2C%20answer%20nil%20if%20an%20error%20occurs.%20Otherwise%2C%20%0D%20%20%20%20%20%20%20%20answer%20an%20Array%20of%20strings%20%28the%20argument%20names%20and%20temporary%20variable%20names%29.%22%0D%0D%20%20%20%20%20%20%20%20aString%20%3D%3D%20nil%20ifTrue%3A%20%5B%5E%23%28%29%5D.%0D%20%20%20%20%20%20%20%20doitFlag%20%3A%3D%20false.%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22Don%27t%20really%20know%20if%20a%20doit%20or%20not%21%22%0D%20%20%20%20%20%20%20%20%5Eself%20initPattern%3A%20aString%0D%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%3A%20%5B%3Apattern%20%7C%20%28pattern%20at%3A%202%29%20%2C%20%28self%20temporariesIn%3A%20%28pattern%20at%3A%201%29%29%5D"));
smalltalk.bind(smalltalk.StParser, unescape("parseCue%3AnoPattern%3AifFail%3A"), "parseCue_noPattern_ifFail_", function StParser__parseCue_noPattern_ifFail_(aCue,noPattern,aBlock){
var methNode = nil;
var myStream = nil;
var s = nil;
var p = nil;
const self = this; var $early={name:"stReturn"};
try {
myStream=aCue.sourceStream();
p=myStream.position();
s=myStream.upToEnd();
myStream.position_(p);
(self.encoder()).init_notifying_(aCue,self);
self.init_cue_failBlock_(myStream,aCue,(function StParser__(){
$early.result=aBlock.value(); throw ($early);
}
));
self['@doitFlag']=noPattern;
self['@failBlock']=aBlock;
methNode=self.method_context_(noPattern,(self['@cue'].context()));
methNode.sourceText_(s);
return methNode;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "public access", unescape("parseCue%3A%20aCue%20noPattern%3A%20noPattern%20ifFail%3A%20aBlock%20%0D%09%22Answer%20a%20MethodNode%20for%20the%20argument%2C%20sourceStream%2C%20that%20is%20the%20root%20of%0D%09%20a%20parse%20tree.%20Parsing%20is%20done%20with%20respect%20to%20the%20CompilationCue%20to%20%0D%09%20resolve%20variables.%20Errors%20in%20parsing%20are%20reported%20to%20the%20cue%27s%20requestor%3B%20%0D%09%20otherwise%20aBlock%20is%20evaluated.%20The%20argument%20noPattern%20is%20a%20Boolean%20that%20is%0D%09%20true%20if%20the%20the%20sourceStream%20does%20not%20contain%20a%20method%20header%20%28i.e.%2C%20for%20DoIts%29.%22%0D%0D%09%7C%20methNode%20myStream%20s%20p%20%7C%0D%09myStream%20%3A%3D%20aCue%20sourceStream.%0D%09%20p%20%3A%3D%20myStream%20position.%0D%09%20s%20%3A%3D%20myStream%20upToEnd.%0D%09%20myStream%20position%3A%20p.%0D%09%0D%09%20self%20encoder%20init%3A%20aCue%20notifying%3A%20self.%0D%09%20self%20init%3A%20myStream%20cue%3A%20aCue%20failBlock%3A%20%5B%5E%20aBlock%20value%5D.%0D%09%0D%09%20doitFlag%20%3A%3D%20noPattern.%0D%09%20failBlock%3A%3D%20aBlock.%0D%09%20methNode%20%3A%3D%20self%20method%3A%20noPattern%20context%3A%20cue%20context.%0D%09methNode%20sourceText%3A%20s.%0D%09%5EmethNode%0D"));
smalltalk.bind(smalltalk.StParser, unescape("parseDoItCue%3AifFail%3A"), "parseDoItCue_ifFail_", function StParser__parseDoItCue_ifFail_(aCue,aBlock){
var methNode = nil;
var myStream = nil;
var s = nil;
var p = nil;
const self = this; var $early={name:"stReturn"};
try {
myStream=aCue.sourceStream();
p=myStream.position();
s=myStream.upToEnd();
myStream.position_(p);
(self.encoder()).init_notifying_(aCue,self);
self.init_cue_failBlock_(myStream,aCue,(function StParser__(){
$early.result=aBlock.value(); throw ($early);
}
));
self['@failBlock']=aBlock;
methNode=self.doIt_arguments_precedence_("doIt",[],(1));
methNode.sourceText_(s);
return methNode;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "public access", unescape("parseDoItCue%3A%20aCue%20ifFail%3A%20aBlock%20%0D%09%22Answer%20a%20MethodNode%20for%20the%20argument%2C%20sourceStream%2C%20that%20is%20the%20root%20of%0D%09%20a%20parse%20tree.%20Parsing%20is%20done%20with%20respect%20to%20the%20CompilationCue%20to%20%0D%09%20resolve%20variables.%20Errors%20in%20parsing%20are%20reported%20to%20the%20cue%27s%20requestor%3B%20%0D%09%20otherwise%20aBlock%20is%20evaluated.%22%0D%0D%09%7C%20methNode%20myStream%20s%20p%20%7C%0D%09myStream%20%3A%3D%20aCue%20sourceStream.%0D%09%20p%20%3A%3D%20myStream%20position.%0D%09%20s%20%3A%3D%20myStream%20upToEnd.%0D%09%20myStream%20position%3A%20p.%0D%09%0D%09%20self%20encoder%20init%3A%20aCue%20notifying%3A%20self.%0D%09%20self%20init%3A%20myStream%20cue%3A%20aCue%20failBlock%3A%20%5B%5E%20aBlock%20value%5D.%0D%09%0D%09%20failBlock%3A%3D%20aBlock.%0D%09%20methNode%20%3A%3D%20self%20doIt%3A%20%23doIt%20arguments%3A%20%23%28%29%20precedence%3A%201.%0D%09methNode%20sourceText%3A%20s.%0D%09%5EmethNode%0D"));
smalltalk.bind(smalltalk.StParser, unescape("parseMethodComment%3AsetPattern%3A"), "parseMethodComment_setPattern_", function StParser__parseMethodComment_setPattern_(aString,aBlock){
const self = this; self.initPattern_return_(aString,aBlock);
if (((nil.is_eqeq_(self['@currentComment'],nil))).valueOf()) {return smalltalk.OrderedCollection.$$new()} else {return self['@currentComment']};
}
, "public access", unescape("parseMethodComment%3A%20aString%20setPattern%3A%20aBlock%0D%09%22Answer%20the%20method%20comment%20for%20the%20argument%2C%20aString.%20Evaluate%20aBlock%20%0D%09with%20the%20message%20pattern%20in%20the%20form%20%23%28selector%2C%20arguments%2C%20precedence%29.%22%0D%0D%09self%0D%09%09initPattern%3A%20aString%0D%09%09return%3A%20aBlock.%0D%09currentComment%3D%3Dnil%0D%09%09ifTrue%3A%09%5B%5EOrderedCollection%20new%5D%0D%09%09ifFalse%3A%09%5B%5EcurrentComment%5D"));
smalltalk.bind(smalltalk.StParser, unescape("parseParameterNames%3A"), "parseParameterNames_", function StParser__parseParameterNames_(aString){
const self = this; self.initScannerForTokenization();
return self.initPattern_return_(aString,(function StParser__(pattern){
return pattern.at_((2));
}
));
}
, "public access", unescape("parseParameterNames%3A%20aString%20%0D%09%22Answer%20the%20parameter%20names%20for%20the%20argument%2C%20aString%2C%20which%20should%20%0D%09%20parse%20successfully%20up%20to%20the%20temporary%20declaration%20or%20the%20end%20of%20the%20%0D%09%20method%20header.%22%0D%0D%09self%20initScannerForTokenization.%0D%09%5Eself%0D%09%09initPattern%3A%20aString%0D%09%09return%3A%20%5B%3Apattern%20%7C%20pattern%20at%3A%202%5D"));
smalltalk.bind(smalltalk.StParser, unescape("parseSelector%3A"), "parseSelector_", function StParser__parseSelector_(aString){
const self = this; if ((self.allowUnderscoreSelectors()).not()) {self.initScannerForTokenization()};
return self.initPattern_return_(aString,(function StParser__(pattern){
return pattern.at_((1));
}
));
}
, "public access", unescape("parseSelector%3A%20aString%20%0D%09%22Answer%20the%20message%20selector%20for%20the%20argument%2C%20aString%2C%20which%20should%20%0D%09%20parse%20successfully%20up%20to%20the%20temporary%20declaration%20or%20the%20end%20of%20the%20%0D%09%20method%20header.%22%0D%0D%09self%20allowUnderscoreSelectors%20ifFalse%3A%20%5Bself%20initScannerForTokenization%5D.%0D%09%5Eself%0D%09%09initPattern%3A%20aString%0D%09%09return%3A%20%5B%3Apattern%20%7C%20pattern%20at%3A%201%5D"));
smalltalk.bind(smalltalk.StParser, unescape("advance"), "advance", function StParser__advance(){
var $$this = nil;
const self = this; self['@prevMark']=self['@hereMark'];
self['@prevEnd']=self['@hereEnd'];
$$this=self['@here'];
self['@here']=self['@token'];
self['@hereType']=self['@tokenType'];
self['@hereMark']=self['@mark'];
self['@hereEnd']=(self['@source'].position())._minus((((nil.is_eqeq_(self['@aheadChar'],smalltalk.StParser.classVariableAt_("DoItCharacter")))).ifTrue_ifFalse_((function StParser__(){
if (((nil.is_eqeq_(self['@hereChar'],smalltalk.StParser.classVariableAt_("DoItCharacter")))).valueOf()) {return (0)} else {return (1)};
}
),(function StParser__(){
return (2);
}
))));
self.scanToken();
return $$this;
}
, "scanning", unescape("advance%0D%09%7C%20this%20%7C%0D%09prevMark%20%3A%3D%20hereMark.%0D%09prevEnd%20%3A%3D%20hereEnd.%0D%09this%20%3A%3D%20here.%0D%09here%20%3A%3D%20token.%0D%09hereType%20%3A%3D%20tokenType.%0D%09hereMark%20%3A%3D%20mark.%0D%09hereEnd%20%3A%3D%20source%20position%20-%20%28aheadChar%20%3D%3D%20DoItCharacter%0D%09%09ifTrue%3A%20%5BhereChar%20%3D%3D%20DoItCharacter%0D%09%09%09ifTrue%3A%20%5B0%5D%0D%09%09%09ifFalse%3A%20%5B1%5D%5D%0D%09%09ifFalse%3A%20%5B2%5D%29.%0D%09self%20scanToken.%0D%09%22Transcript%20show%3A%20%27here%3A%20%27%2C%20here%20printString%2C%20%27%20mark%3A%20%27%2C%20hereMark%20printString%2C%20%27%20end%3A%20%27%2C%20hereEnd%20printString%3B%20cr.%22%0D%09%5Ethis"));
smalltalk.bind(smalltalk.StParser, unescape("endOfLastToken"), "endOfLastToken", function StParser__endOfLastToken(){
const self = this; return (function(){var $1$; $1$ = self['@prevEnd']; if (nil.isNil_($1$)) { return self['@mark'] } else { return $1$; }})();
}
, "scanning", unescape("endOfLastToken%0D%0D%09%5E%20prevEnd%20ifNil%3A%20%5Bmark%5D"));
smalltalk.bind(smalltalk.StParser, unescape("match%3A"), "match_", function StParser__match_(type){
const self = this; if (((nil.is_eqeq_(self['@hereType'],type))).valueOf()) {self.advance();
return true};
return false;
}
, "scanning", unescape("match%3A%20type%20%0D%09%22Answer%20with%20true%20if%20next%20tokens%20type%20matches.%22%0D%0D%09hereType%20%3D%3D%20type%0D%09%09ifTrue%3A%20%0D%09%09%09%5Bself%20advance.%0D%09%09%09%5Etrue%5D.%0D%09%5Efalse"));
smalltalk.bind(smalltalk.StParser, unescape("matchReturn"), "matchReturn", function StParser__matchReturn(){
const self = this; return self.match_("upArrow");
}
, "scanning", unescape("matchReturn%0D%0D%09%5E%20self%20match%3A%20%23upArrow"));
smalltalk.bind(smalltalk.StParser, unescape("matchToken%3A"), "matchToken_", function StParser__matchToken_(thing){
const self = this; if ((self['@here']._eq(thing)).valueOf()) {self.advance();
return true};
return false;
}
, "scanning", unescape("matchToken%3A%20thing%20%0D%09%22Matches%20the%20token%2C%20not%20its%20type.%22%0D%0D%09here%20%3D%20thing%20ifTrue%3A%20%5Bself%20advance.%20%5Etrue%5D.%0D%09%5Efalse"));
smalltalk.bind(smalltalk.StParser, unescape("startOfNextToken"), "startOfNextToken", function StParser__startOfNextToken(){
const self = this; if (((nil.is_eqeq_(self['@hereType'],"doIt"))).valueOf()) {return (self['@source'].position())._plus((1))};
return self['@hereMark'];
}
, "scanning", unescape("startOfNextToken%0D%09%22Return%20starting%20position%20in%20source%20of%20next%20token.%22%0D%0D%09hereType%20%3D%3D%20%23doIt%20ifTrue%3A%20%5B%5Esource%20position%20+%201%5D.%0D%09%5EhereMark"));
smalltalk.bind(smalltalk.StParser, unescape("transformAVerticalBarIntoABinarySelector"), "transformAVerticalBarIntoABinarySelector", function StParser__transformAVerticalBarIntoABinarySelector(){
const self = this; self['@here']=unescape("%7C");
self['@hereType']="binary";
while((((nil.is_eqeq_(self['@tokenType'],"verticalBar"))).and_((function StParser__(){
return (self['@hereMark']._plus((self['@here'].size())))._eq(self['@mark']);
}
))).valueOf()){self['@here']=self['@here']._comma(unescape("%7C"));
self['@hereEnd']=self['@hereEnd']._plus((1));
self.scanToken()};;
if ((((nil.is_eqeq_(self['@tokenType'],"binary"))).and_((function StParser__(){
return (self['@hereMark']._plus((self['@here'].size())))._eq(self['@mark']);
}
))).valueOf()) {self['@here']=(self['@here'].asString())._comma(self['@token']);
self['@hereType']="binary";
self['@hereEnd']=self['@hereEnd']._plus((self['@token'].size()));
self.scanToken()};
return self;
}
, "scanning", unescape("transformAVerticalBarIntoABinarySelector%0D%09%22Transform%20a%20vertical%20bar%20into%20a%20binary%20selector.%0D%09Eventually%20aggregate%20a%20serie%20of%20immediately%20following%20vertical%20bars%20and%20a%20binary%20selector.%0D%09Note%20that%20this%20aggregation%20cannot%20occur%20at%20scan%20time%2C%20because%20a%20pair%20of%20vertical%20bars%20can%20be%20encountered%20in%20two%20valid%20constructs%3A%0D%09-%20either%20as%20an%20empty%20temporaries%20specification%2C%0D%09-%20or%20as%20a%20local%20temporaries%20specification%20in%20a%20block%20of%20arity%20%3E%200%22%0D%09here%20%3A%3D%20%27%7C%27.%0D%09hereType%20%3A%3D%20%23binary.%0D%09%5BtokenType%20%3D%3D%20%23verticalBar%20and%3A%20%5BhereMark%20+%20here%20size%20%3D%20mark%5D%5D%0D%09%09whileTrue%3A%20%5B%0D%09%09%09here%20%3A%3D%20here%20%2C%20%27%7C%27.%0D%09%09%09hereEnd%20%3A%3D%20hereEnd%20+%201.%0D%09%09%09self%20scanToken%5D.%0D%09%28tokenType%20%3D%3D%20%23binary%20and%3A%20%5BhereMark%20+%20here%20size%20%3D%20mark%5D%29%0D%09%09ifTrue%3A%20%5B%0D%09%09%09here%20%3A%3D%20here%20asString%20%2C%20token.%0D%09%09%09hereType%20%3A%3D%20%23binary.%0D%09%09%09hereEnd%20%3A%3D%20hereEnd%20+%20token%20size.%0D%09%09%09self%20scanToken%5D."));
smalltalk.bind(smalltalk.StParser, unescape("bindArg%3A"), "bindArg_", function StParser__bindArg_(name){
const self = this; return self.bindTemp_(name);
}
, "temps", unescape("bindArg%3A%20name%0D%0D%09%5E%20self%20bindTemp%3A%20name"));
smalltalk.bind(smalltalk.StParser, unescape("bindTemp%3A"), "bindTemp_", function StParser__bindTemp_(name){
const self = this; return name;
}
, "temps", unescape("bindTemp%3A%20name%0D%0D%09%5Ename"));
smalltalk.bind(smalltalk.StParser, unescape("bindTemp%3Ain%3A"), "bindTemp_in_", function StParser__bindTemp_in_(name,methodSelector){
const self = this; return name;
}
, "temps", unescape("bindTemp%3A%20name%20in%3A%20methodSelector%0D%0D%09%5Ename"));
smalltalk.bind(smalltalk.StParser, unescape("addComment"), "addComment", function StParser__addComment(){
const self = this; if ((self['@parseNode']._no_no(nil)).valueOf()) {self['@parseNode'].comment_(self['@currentComment']);
self['@currentComment']=nil};
return self;
}
, "private", unescape("addComment%0D%0D%09parseNode%20%7E%7E%20nil%0D%09%09ifTrue%3A%20%0D%09%09%09%5BparseNode%20comment%3A%20currentComment.%0D%09%09%09currentComment%20%3A%3D%20nil%5D"));
smalltalk.bind(smalltalk.StParser, unescape("allowUnderscoreAssignments"), "allowUnderscoreAssignments", function StParser__allowUnderscoreAssignments(){
const self = this; return false;
}
, "private", unescape("allowUnderscoreAssignments%0D%09%5Efalse"));
smalltalk.bind(smalltalk.StParser, unescape("init%3Acue%3AfailBlock%3A"), "init_cue_failBlock_", function StParser__init_cue_failBlock_(sourceStream,aCue,aBlock){
const self = this; self['@doitFlag']=false;
self.setCue_(aCue);
self['@failBlock']=aBlock;
self['@requestorOffset']=(0);
smalltalk.superImplementor(smalltalk.StParser,'scan_').apply(self, [sourceStream]);
self['@prevMark']=self['@hereMark']=self['@mark'];
self.advance();
return self;
}
, "private", unescape("init%3A%20sourceStream%20cue%3A%20aCue%20failBlock%3A%20aBlock%0D%09doitFlag%20%3A%3D%20false.%0D%0D%09self%20setCue%3A%20aCue.%0D%09failBlock%20%3A%3D%20aBlock.%0D%09requestorOffset%20%3A%3D%200.%0D%09super%20scan%3A%20sourceStream.%0D%09prevMark%20%3A%3D%20hereMark%20%3A%3D%20mark.%0D%09self%20advance%0D"));
smalltalk.bind(smalltalk.StParser, unescape("initPattern%3Areturn%3A"), "initPattern_return_", function StParser__initPattern_return_(aString,aBlock){
var result = nil;
const self = this; var $early={name:"stReturn"};
try {
self.init_cue_failBlock_(((aString.asString()).readStream()),(smalltalk.StCompilationCue.source_(aString)),(function StParser__(){
$early.result=nil; throw ($early);
}
));
self['@encoder']=self;
result=aBlock.value_((self.pattern_inContext_(false,nil)));
self['@encoder']=self['@failBlock']=nil;
return result;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "private", unescape("initPattern%3A%20aString%20return%3A%20aBlock%0D%0D%09%7C%20result%20%7C%0D%09self%0D%09%09init%3A%20%28aString%20asString%20readStream%29%0D%09%09cue%3A%20%28StCompilationCue%20source%3A%20aString%29%0D%09%09failBlock%3A%20%5B%5Enil%5D.%0D%09encoder%20%3A%3D%20self.%0D%09result%20%3A%3D%20aBlock%20value%3A%20%28self%20pattern%3A%20false%20inContext%3A%20nil%29.%0D%09encoder%20%3A%3D%20failBlock%20%3A%3D%20nil.%20%20%22break%20cycles%22%0D%09%5Eresult"));
smalltalk.bind(smalltalk.StParser, unescape("setCue%3A"), "setCue_", function StParser__setCue_(aCue){
const self = this; self['@cue']=aCue;
return self;
}
, "private", unescape("setCue%3A%20aCue%0D%09cue%20%3A%3D%20aCue"));
smalltalk.bind(smalltalk.StParser, unescape("queriedUnusedTemporaries"), "queriedUnusedTemporaries", function StParser__queriedUnusedTemporaries(){
const self = this; (function(){var $1$; $1$ = self['@queriedUnusedTemporaries']; if (nil.isNil_($1$)) { return self['@queriedUnusedTemporaries']=smalltalk.Dictionary.$$new() } else { return $1$; }})();
return self['@queriedUnusedTemporaries'];
}
, "accessing", unescape("queriedUnusedTemporaries%0D%0D%09queriedUnusedTemporaries%20ifNil%3A%20%0D%09%09%5BqueriedUnusedTemporaries%20%3A%3D%20Dictionary%20new%5D.%0D%09%5EqueriedUnusedTemporaries"));
smalltalk.bind(smalltalk.StParser, unescape("tempsMark"), "tempsMark", function StParser__tempsMark(){
const self = this; return self['@tempsMark'];
}
, "accessing", unescape("tempsMark%0D%09%5E%20tempsMark"));
smalltalk.bind(smalltalk.StParser, unescape("tempsMark%3A"), "tempsMark_", function StParser__tempsMark_(aNumber){
const self = this; self['@tempsMark']=aNumber;
return self;
}
, "accessing", unescape("tempsMark%3A%20aNumber%0DtempsMark%20%3A%3D%20aNumber"));
smalltalk.StParser.$klass.$iVarNames = [];
smalltalk.bind(smalltalk.StParser.$klass, unescape("primitivePragmaSelectors"), "primitivePragmaSelectors", function StParser_class__primitivePragmaSelectors(){
const self = this; return ["primitive:", "primitive:error:", "primitive:error:module:", "primitive:module:", "primitive:module:error:"];
}
, "accessing", unescape("primitivePragmaSelectors%0D%09%22Answer%20the%20selectors%20of%20pragmas%20that%20specify%20VM%20primitives.%0D%09%20Needed%20for%20compile%20and%20decomple.%22%0D%09%5E%23%28primitive%3A%0D%09%09primitive%3Aerror%3A%0D%09%09primitive%3Aerror%3Amodule%3A%0D%09%09primitive%3Amodule%3A%0D%09%09primitive%3Amodule%3Aerror%3A%29"));
smalltalk.addClass("StSelectorNode", smalltalk.StLeafNode, [], 'Compiler-JS');
smalltalk.StSelectorNode.$classVariableNames=("");
smalltalk.bind(smalltalk.StSelectorNode, unescape("key%3A"), "key_", function StSelectorNode__key_(aSelector){
const self = this; self['@key']=aSelector;
return self;
}
, "initialize-release", unescape("key%3A%20aSelector%0D%09%22This%20is%20for%20printing%20of%20FFI%20selectors.%22%0D%09key%20%3A%3D%20aSelector"));
smalltalk.bind(smalltalk.StSelectorNode, unescape("name%3Akey%3A"), "name_key_", function StSelectorNode__name_key_(literal,object){
const self = this; return self.key_(object);
}
, "initialize-release", unescape("name%3A%20literal%20key%3A%20object%20%0D%09%22For%20compatibility%20with%20Encoder%3E%3Ename%3Akey%3Aclass%3Atype%3Aset%3A%22%0D%09%5Eself%20key%3A%20object"));
smalltalk.addClass("StSpecialSelectorNode", smalltalk.StSelectorNode, [], 'Compiler-JS');
smalltalk.StSpecialSelectorNode.$classVariableNames=("");
smalltalk.addClass("StVariableNode", smalltalk.StLeafNode, ['name'], 'Compiler-JS');
smalltalk.StVariableNode.$classVariableNames=("");
smalltalk.bind(smalltalk.StVariableNode, unescape("name"), "name", function StVariableNode__name(){
const self = this; return self['@name'];
}
, "accessing", unescape("name%0D%09%5E%20name"));
smalltalk.bind(smalltalk.StVariableNode, unescape("asStorableNode%3A"), "asStorableNode_", function StVariableNode__asStorableNode_(encoder){
const self = this; return self;
}
, "initialize-release", unescape("asStorableNode%3A%20encoder%0D%09%5E%20self"));
smalltalk.bind(smalltalk.StVariableNode, unescape("name%3A"), "name_", function StVariableNode__name_(string){
const self = this; self['@name']=string;
return self;
}
, "initialize-release", unescape("name%3A%20string%0D%09%22Change%20name%22%0D%0D%09name%20%3A%3D%20string"));
smalltalk.bind(smalltalk.StVariableNode, unescape("name%3Akey%3A"), "name_key_", function StVariableNode__name_key_(string,object){
const self = this; self['@name']=string;
self['@key']=object;
return self;
}
, "initialize-release", unescape("name%3A%20string%20key%3A%20object%0D%09%22Only%20used%20for%20std%20variables%2C%20nil%2C%20true%2C%20false%2C%20self%2C%20etc.%22%0D%09name%20%3A%3D%20string.%0D%09key%20%3A%3D%20object"));
smalltalk.bind(smalltalk.StVariableNode, unescape("generateAssignment%3Aon%3A"), "generateAssignment_on_", function StVariableNode__generateAssignment_on_(valueNode,generator){
const self = this; self.generateOn_(generator);
generator.generateAssignment();
valueNode.generateInlinedValueOn_(generator);
return self;
}
, "generate", unescape("generateAssignment%3A%20valueNode%20on%3A%20generator%0D%09self%20generateOn%3A%20generator.%0D%09generator%20generateAssignment.%0D%09valueNode%20generateInlinedValueOn%3A%20generator"));
smalltalk.bind(smalltalk.StVariableNode, unescape("generateBlockBodyOn%3A"), "generateBlockBodyOn_", function StVariableNode__generateBlockBodyOn_(generator){
const self = this; self.generateAsReceiverOn_(generator);
generator.blockVariableInvocation();
return self;
}
, "generate", unescape("generateBlockBodyOn%3A%20generator%0D%09self%20generateAsReceiverOn%3A%20generator.%0D%09generator%20blockVariableInvocation"));
smalltalk.bind(smalltalk.StVariableNode, unescape("generateOn%3A"), "generateOn_", function StVariableNode__generateOn_(generator){
const self = this; generator.generateVariable_(self);
return self;
}
, "generate", unescape("generateOn%3A%20generator%0D%09generator%20generateVariable%3A%20self"));
smalltalk.bind(smalltalk.StVariableNode, unescape("assignmentCheck%3Aat%3A"), "assignmentCheck_at_", function StVariableNode__assignmentCheck_at_(encoder,location){
const self = this; if ((encoder.cantStoreInto_(self['@name'])).valueOf()) {return location} else {return (-1)};
}
, "testing", unescape("assignmentCheck%3A%20encoder%20at%3A%20location%0D%09%5E%28encoder%20cantStoreInto%3A%20name%29%20ifTrue%3A%20%5Blocation%5D%20ifFalse%3A%20%5B-1%5D"));
smalltalk.bind(smalltalk.StVariableNode, unescape("isSelfPseudoVariable"), "isSelfPseudoVariable", function StVariableNode__isSelfPseudoVariable(){
const self = this; return (self['@key']._eq("self")).or_((function StVariableNode__(){
return self['@name']._eq(unescape("%7B%7Bself%7D%7D"));
}
));
}
, "testing", unescape("isSelfPseudoVariable%0D%09%22Answer%20if%20this%20StParseNode%20represents%20the%20%27self%27%20pseudo-variable.%22%0D%0D%09%5E%20key%20%3D%20%27self%27%20or%3A%20%5Bname%20%3D%20%27%7B%7Bself%7D%7D%27%5D"));
smalltalk.bind(smalltalk.StVariableNode, unescape("isSuperPseudoVariable"), "isSuperPseudoVariable", function StVariableNode__isSuperPseudoVariable(){
const self = this; return (self['@key']._eq("super")).or_((function StVariableNode__(){
return self['@name']._eq(unescape("%7B%7Bsuper%7D%7D"));
}
));
}
, "testing", unescape("isSuperPseudoVariable%0D%09%5Ekey%20%3D%20%27super%27%20or%3A%20%5Bname%20%3D%20%27%7B%7Bsuper%7D%7D%27%5D"));
smalltalk.bind(smalltalk.StVariableNode, unescape("isUndeclared"), "isUndeclared", function StVariableNode__isUndeclared(){
const self = this; return false;
}
, "testing", unescape("isUndeclared%0D%09%5Efalse"));
smalltalk.bind(smalltalk.StVariableNode, unescape("isVariableNode"), "isVariableNode", function StVariableNode__isVariableNode(){
const self = this; return true;
}
, "testing", unescape("isVariableNode%0D%09%5Etrue"));
smalltalk.bind(smalltalk.StVariableNode, unescape("isVariableReference"), "isVariableReference", function StVariableNode__isVariableReference(){
const self = this; return true;
}
, "testing", unescape("isVariableReference%0D%0D%09%5Etrue"));
smalltalk.addClass("StClassVariableNode", smalltalk.StVariableNode, [], 'Compiler-JS');
smalltalk.StClassVariableNode.$classVariableNames=("");
smalltalk.bind(smalltalk.StClassVariableNode, unescape("generateAssignment%3Aon%3A"), "generateAssignment_on_", function StClassVariableNode__generateAssignment_on_(valueNode,generator){
const self = this; generator.generateClassVariableAt_put_(self,valueNode);
return self;
}
, "generate", unescape("generateAssignment%3A%20valueNode%20on%3A%20generator%0D%09generator%20generateClassVariableAt%3A%20self%20put%3A%20valueNode"));
smalltalk.bind(smalltalk.StClassVariableNode, unescape("generateOn%3A"), "generateOn_", function StClassVariableNode__generateOn_(generator){
const self = this; generator.generateClassVariableAt_(self);
return self;
}
, "generate", unescape("generateOn%3A%20generator%0D%09generator%20generateClassVariableAt%3A%20self"));
smalltalk.addClass("StInstanceVariableNode", smalltalk.StVariableNode, [], 'Compiler-JS');
smalltalk.StInstanceVariableNode.$classVariableNames=("");
smalltalk.bind(smalltalk.StInstanceVariableNode, unescape("generateOn%3A"), "generateOn_", function StInstanceVariableNode__generateOn_(generator){
const self = this; generator.generateInstanceVariable_(self);
return self;
}
, "generate", unescape("generateOn%3A%20generator%0D%09generator%20generateInstanceVariable%3A%20self"));
smalltalk.addClass("StLiteralVariableNode", smalltalk.StVariableNode, ['readNode', 'writeNode'], 'Compiler-JS');
smalltalk.StLiteralVariableNode.$classVariableNames=("");
smalltalk.bind(smalltalk.StLiteralVariableNode, unescape("generateOn%3A"), "generateOn_", function StLiteralVariableNode__generateOn_(generator){
const self = this; if ((self.isSelfPseudoVariable()).valueOf()) {generator.selfPseudoVariable_(self)} else {if (((self.key()).isVariableBinding()).valueOf()) {self['@key'].generateOn_(generator)} else {generator.literalVariable_(self)}};
return self;
}
, "generate", unescape("generateOn%3A%20generator%0D%09self%20isSelfPseudoVariable%0D%09%09ifTrue%3A%20%5Bgenerator%20selfPseudoVariable%3A%20self%5D%0D%09%09ifFalse%3A%20%5B%0D%09%09%09self%20key%20isVariableBinding%0D%09%09%09%09ifTrue%3A%20%5Bkey%20generateOn%3A%20generator%5D%0D%09%09%09%09ifFalse%3A%20%5Bgenerator%20literalVariable%3A%20self%5D%5D"));
smalltalk.bind(smalltalk.StLiteralVariableNode, unescape("assignmentCheck%3Aat%3A"), "assignmentCheck_at_", function StLiteralVariableNode__assignmentCheck_at_(encoder,location){
const self = this; if (((self['@key'].isVariableBinding()).and_((function StLiteralVariableNode__(){
return (self['@key'].canAssign()).not();
}
))).valueOf()) {return location} else {return (-1)};
}
, "testing", unescape("assignmentCheck%3A%20encoder%20at%3A%20location%0D%09%5E%28key%20isVariableBinding%20and%3A%20%5Bkey%20canAssign%20not%5D%29%0D%09%09ifTrue%3A%20%5Blocation%5D%0D%09%09ifFalse%3A%20%5B-1%5D"));
smalltalk.addClass("StTempVariableNode", smalltalk.StVariableNode, ['argType', 'hasRefs', 'hasDefs', 'scope', 'definingScope', 'readingScopes', 'writingScopes', 'remoteNode'], 'Compiler-JS');
smalltalk.StTempVariableNode.$classVariableNames=("");
smalltalk.bind(smalltalk.StTempVariableNode, unescape("name%3Aindex%3Atype%3Ascope%3A"), "name_index_type_scope_", function StTempVariableNode__name_index_type_scope_(varName,i,type,level){
const self = this; self.halt();
self['@hasDefs']=self['@hasRefs']=false;
self['@scope']=level;
return smalltalk.superImplementor(smalltalk.StTempVariableNode,'name_key_').apply(self, [varName,varName]);
}
, "initialize-release", unescape("name%3A%20varName%20index%3A%20i%20type%3A%20type%20scope%3A%20level%0D%09%22Only%20used%20for%20initting%20temporary%20variables%22%0D%09self%20halt.%0D%09hasDefs%20%3A%3D%20hasRefs%20%3A%3D%20false.%0D%09scope%20%3A%3D%20level.%0D%09%5Esuper%20name%3A%20varName%20key%3A%20varName"));
smalltalk.bind(smalltalk.StTempVariableNode, unescape("name%3Ascope%3A"), "name_scope_", function StTempVariableNode__name_scope_(varName,level){
const self = this; self['@hasDefs']=self['@hasRefs']=false;
self['@scope']=level;
return smalltalk.superImplementor(smalltalk.StTempVariableNode,'name_key_').apply(self, [varName,varName]);
}
, "initialize-release", unescape("name%3A%20varName%20scope%3A%20level%0D%09%22Only%20used%20for%20initting%20temporary%20variables%22%0D%09hasDefs%20%3A%3D%20hasRefs%20%3A%3D%20false.%0D%09scope%20%3A%3D%20level.%0D%09%5Esuper%20name%3A%20varName%20key%3A%20varName"));
smalltalk.bind(smalltalk.StTempVariableNode, unescape("nowHasDef"), "nowHasDef", function StTempVariableNode__nowHasDef(){
const self = this; self['@hasDefs']=true;
return self;
}
, "initialize-release", unescape("nowHasDef%0D%09hasDefs%20%3A%3D%20true"));
smalltalk.bind(smalltalk.StTempVariableNode, unescape("nowHasRef"), "nowHasRef", function StTempVariableNode__nowHasRef(){
const self = this; self['@hasRefs']=true;
return self;
}
, "initialize-release", unescape("nowHasRef%0D%09hasRefs%20%3A%3D%20true"));
smalltalk.bind(smalltalk.StTempVariableNode, unescape("scope%3A"), "scope_", function StTempVariableNode__scope_(level){
const self = this; self['@scope']=level;
return self;
}
, "initialize-release", unescape("scope%3A%20level%0D%09%22Note%20scope%20of%20temporary%20variables.%0D%09Currently%20only%20the%20following%20distinctions%20are%20made%3A%0D%09%090%09outer%20level%3A%20args%20and%20user-declared%20temps%0D%09%091%09block%20args%20and%20doLimiT%20temps%0D%09%09-1%09a%20block%20temp%20that%20is%20no%20longer%20active%0D%09%09-2%09a%20block%20temp%20that%20held%20limit%20of%20to%3Ado%3A%22%0D%09scope%20%3A%3D%20level"));
smalltalk.bind(smalltalk.StTempVariableNode, unescape("assignmentCheck%3Aat%3A"), "assignmentCheck_at_", function StTempVariableNode__assignmentCheck_at_(encoder,location){
const self = this; if ((((self.isBlockArg()).and_((function StTempVariableNode__(){
return (smalltalk.StScanner.allowBlockArgumentAssignment()).not();
}
))).or_((function StTempVariableNode__(){
return self.isMethodArg();
}
))).valueOf()) {return location} else {return (-1)};
}
, "testing", unescape("assignmentCheck%3A%20encoder%20at%3A%20location%0D%09%5E%28%28self%20isBlockArg%20and%3A%20%5BStScanner%20allowBlockArgumentAssignment%20not%5D%29%0D%09%20%20%20%20or%3A%20%5Bself%20isMethodArg%5D%29%0D%09%09%09ifTrue%3A%20%5Blocation%5D%0D%09%09%09ifFalse%3A%20%5B-1%5D"));
smalltalk.bind(smalltalk.StTempVariableNode, unescape("beBlockArg"), "beBlockArg", function StTempVariableNode__beBlockArg(){
const self = this; self['@argType']="block";
return self;
}
, "testing", unescape("beBlockArg%0D%09argType%20%3A%3D%20%23block"));
smalltalk.bind(smalltalk.StTempVariableNode, unescape("beMethodArg"), "beMethodArg", function StTempVariableNode__beMethodArg(){
const self = this; self['@argType']="method";
return self;
}
, "testing", unescape("beMethodArg%0D%09argType%20%3A%3D%20%23method"));
smalltalk.bind(smalltalk.StTempVariableNode, unescape("isArg"), "isArg", function StTempVariableNode__isArg(){
const self = this; return (nil.isNil_(self['@argType'])===false);
}
, "testing", unescape("isArg%0D%09%5EargType%20notNil"));
smalltalk.bind(smalltalk.StTempVariableNode, unescape("isBlockArg"), "isBlockArg", function StTempVariableNode__isBlockArg(){
const self = this; return (nil.is_eqeq_("block",self['@argType']));
}
, "testing", unescape("isBlockArg%0D%09%5E%23block%20%3D%3D%20argType"));
smalltalk.bind(smalltalk.StTempVariableNode, unescape("isDeclaredAtMethodLevel"), "isDeclaredAtMethodLevel", function StTempVariableNode__isDeclaredAtMethodLevel(){
const self = this; return self['@scope']._eq((0));
}
, "testing", unescape("isDeclaredAtMethodLevel%0D%09%22For%20the%20explainer.%22%0D%09%5Escope%20%3D%200"));
smalltalk.bind(smalltalk.StTempVariableNode, unescape("isMethodArg"), "isMethodArg", function StTempVariableNode__isMethodArg(){
const self = this; return (nil.is_eqeq_("method",self['@argType']));
}
, "testing", unescape("isMethodArg%0D%09%5E%23method%20%3D%3D%20argType"));
smalltalk.bind(smalltalk.StTempVariableNode, unescape("isRemote"), "isRemote", function StTempVariableNode__isRemote(){
const self = this; return (nil.isNil_(self['@remoteNode'])===false);
}
, "testing", unescape("isRemote%0D%09%5EremoteNode%20notNil"));
smalltalk.bind(smalltalk.StTempVariableNode, unescape("isTemp"), "isTemp", function StTempVariableNode__isTemp(){
const self = this; return true;
}
, "testing", unescape("isTemp%0D%09%5E%20true"));
smalltalk.bind(smalltalk.StTempVariableNode, unescape("isUndefTemp"), "isUndefTemp", function StTempVariableNode__isUndefTemp(){
const self = this; return self['@hasDefs'].not();
}
, "testing", unescape("isUndefTemp%0D%09%5E%20hasDefs%20not"));
smalltalk.bind(smalltalk.StTempVariableNode, unescape("isUnusedTemp"), "isUnusedTemp", function StTempVariableNode__isUnusedTemp(){
const self = this; return self['@hasRefs'].not();
}
, "testing", unescape("isUnusedTemp%0D%09%5E%20hasRefs%20not"));
smalltalk.bind(smalltalk.StTempVariableNode, unescape("remoteNode"), "remoteNode", function StTempVariableNode__remoteNode(){
const self = this; return self['@remoteNode'];
}
, "testing", unescape("remoteNode%0D%09%5EremoteNode"));
smalltalk.bind(smalltalk.StTempVariableNode, unescape("scope"), "scope", function StTempVariableNode__scope(){
const self = this; return self['@scope'];
}
, "testing", unescape("scope%0D%09%22Answer%20scope%20of%20temporary%20variables.%0D%09%20Currently%20only%20the%20following%20distinctions%20are%20made%3A%0D%09%09%200%09outer%20level%3A%20args%20and%20user-declared%20temps%0D%09%09%201%09block%20args%20and%20doLimiT%20temps%0D%09%09-1%09a%20block%20temp%20that%20is%20no%20longer%20active%0D%09%09-2%09a%20block%20temp%20that%20held%20limit%20of%20to%3Ado%3A%22%0D%09%5Escope"));
smalltalk.addClass("StUndeclaredVariableNode", smalltalk.StVariableNode, ['tag'], 'Compiler-JS');
smalltalk.StUndeclaredVariableNode.$classVariableNames=("");
smalltalk.bind(smalltalk.StUndeclaredVariableNode, unescape("generateOn%3A"), "generateOn_", function StUndeclaredVariableNode__generateOn_(generator){
const self = this; generator.generateUndeclaredVariable_(self);
return self;
}
, "generate", unescape("generateOn%3A%20generator%0D%09generator%20generateUndeclaredVariable%3A%20self"));
smalltalk.bind(smalltalk.StUndeclaredVariableNode, unescape("isUndeclared"), "isUndeclared", function StUndeclaredVariableNode__isUndeclared(){
const self = this; return true;
}
, "testing", unescape("isUndeclared%0D%09%5Etrue"));
smalltalk.bind(smalltalk.StUndeclaredVariableNode, unescape("tag"), "tag", function StUndeclaredVariableNode__tag(){
const self = this; return self['@tag'];
}
, "accessing", unescape("tag%0D%09%22Tag%20can%20be%20whatever%20one%20wants%20it%20to%20be%3B%20used%20by%20Parser%20to%20tag%0D%09%20%20undeclared%20temps%20with%20the%20user%27s%20desired%20declaration%20level.%22%0D%0D%09%5Etag"));
smalltalk.bind(smalltalk.StUndeclaredVariableNode, unescape("tag%3A"), "tag_", function StUndeclaredVariableNode__tag_(anObject){
const self = this; self['@tag']=anObject;
return self;
}
, "accessing", unescape("tag%3A%20anObject%0D%09%22Tag%20can%20be%20whatever%20one%20wants%20it%20to%20be%3B%20used%20by%20Parser%20to%20tag%0D%09%20%20undeclared%20temps%20with%20the%20user%27s%20desired%20declaration%20level.%22%0D%0D%09tag%20%3A%3D%20anObject"));
