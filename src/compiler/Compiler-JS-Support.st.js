smalltalk.addClass("StChunk", smalltalk.Object, [], 'Compiler-JS-Support');
smalltalk.StChunk.$classVariableNames=("");
smalltalk.bind(smalltalk.StChunk, unescape("readChunksThrough%3A"), "readChunksThrough_", function StChunk__readChunksThrough_(chunkReader){
const self = this; self;
return self;
}
, "chunk processing", "readChunksThrough: chunkReader");
smalltalk.bind(smalltalk.StChunk, unescape("applyTo%3A"), "applyTo_", function StChunk__applyTo_(stEnvironment){
const self = this; self;
return self;
}
, "static compiling", "applyTo: stEnvironment");
smalltalk.bind(smalltalk.StChunk, unescape("generateOn%3A"), "generateOn_", function StChunk__generateOn_(generator){
const self = this; self;
return self;
}
, "static compiling", "generateOn: generator");
smalltalk.StChunk.$klass.$iVarNames = [];
smalltalk.bind(smalltalk.StChunk.$klass, unescape("from%3Areceiver%3Aselector%3Aarguments%3A"), "from_receiver_selector_arguments_", function StChunk_class__from_receiver_selector_arguments_(aString,receiver,selector,args){
const self = this; if ((selector.beginsWith_("methods")).valueOf()) {return smalltalk.StMethodsChunk.receiver_selector_arguments_(receiver,selector,args)};
if ((selector.beginsWith_("subclass")).valueOf()) {return smalltalk.StSubclassChunk.receiver_selector_arguments_(receiver,selector,args)};
if ((selector.beginsWith_("variableSubclass")).valueOf()) {return smalltalk.StSubclassChunk.receiver_selector_arguments_(receiver,selector,args)};
if ((selector.beginsWith_("commentStamp")).valueOf()) {return smalltalk.StCommentChunk.receiver_selector_arguments_(receiver,selector,args)};
if ((selector.beginsWith_("instanceVar")).valueOf()) {return smalltalk.StMetaClassChunk.receiver_selector_arguments_(receiver,selector,args)};
return smalltalk.StDoItChunk.source_(aString);
}
, "instance creation", unescape("from%3A%20aString%20receiver%3A%20receiver%20selector%3A%20selector%20arguments%3A%20args%0D%09%28selector%20beginsWith%3A%20%27methods%27%29%0D%09%09ifTrue%3A%20%5B%5EStMethodsChunk%20receiver%3A%20receiver%20selector%3A%20selector%20arguments%3A%20args%5D.%0D%09%28selector%20beginsWith%3A%20%27subclass%27%29%0D%09%09ifTrue%3A%20%5B%5EStSubclassChunk%20receiver%3A%20receiver%20selector%3A%20selector%20arguments%3A%20args%5D.%0D%09%28selector%20beginsWith%3A%20%27variableSubclass%27%29%0D%09%09ifTrue%3A%20%5B%5EStSubclassChunk%20receiver%3A%20receiver%20selector%3A%20selector%20arguments%3A%20args%5D.%0D%09%28selector%20beginsWith%3A%20%27commentStamp%27%29%0D%09%09ifTrue%3A%20%5B%5EStCommentChunk%20receiver%3A%20receiver%20selector%3A%20selector%20arguments%3A%20args%5D.%0D%09%28selector%20beginsWith%3A%20%27instanceVar%27%29%0D%09%09ifTrue%3A%20%5B%5EStMetaClassChunk%20receiver%3A%20receiver%20selector%3A%20selector%20arguments%3A%20args%5D.%0D%09%5EStDoItChunk%20source%3A%20aString"));
smalltalk.bind(smalltalk.StChunk.$klass, unescape("receiver%3Aselector%3Aarguments%3A"), "receiver_selector_arguments_", function StChunk_class__receiver_selector_arguments_(receiver,selector,args){
const self = this; return (self.$$new()).receiver_selector_arguments_(receiver,selector,args);
}
, "instance creation", unescape("receiver%3A%20receiver%20selector%3A%20selector%20arguments%3A%20args%0D%09%5Eself%20new%20receiver%3A%20receiver%20selector%3A%20selector%20arguments%3A%20args"));
smalltalk.addClass("StChunkReader", smalltalk.Object, ['readStream', 'line'], 'Compiler-JS-Support');
smalltalk.StChunkReader.$classVariableNames=("");
smalltalk.bind(smalltalk.StChunkReader, unescape("handleNextChunk"), "handleNextChunk", function StChunkReader__handleNextChunk(){
var chunk = nil;
const self = this; chunk=self.nextChunk();
if ((chunk.isEmpty()).not()) {self.handleChunk_(chunk)};
return self;
}
, "private reading", unescape("handleNextChunk%0D%09%22%28Compiler%20evaluate%3A%20self%20nextChunk%20for%3A%20client%20logged%3A%20false%29%20scanFrom%3A%20self%22%0D%09%7C%20chunk%20%7C%0D%09chunk%20%3A%3D%20self%20nextChunk.%0D%09chunk%20isEmpty%20ifFalse%3A%20%5Bself%20handleChunk%3A%20chunk%5D"));
smalltalk.bind(smalltalk.StChunkReader, unescape("nextChunk"), "nextChunk", function StChunkReader__nextChunk(){
var terminator = nil;
var out = nil;
var ch = nil;
const self = this; var $early={name:"stReturn"};
try {
terminator=unescape("%21");
out="".writeStream();
self.skipSeparators();
while(((self['@readStream'].atEnd()).or_((function StChunkReader__(){
return (nil.is_eqeq_(ch=self['@readStream'].next(),nil));
}
))).not()){self.updateFilePosition_(ch);
if (((nil.is_eqeq_(ch,terminator))).valueOf()) {if (((nil.is_eqeq_(self['@readStream'].peek(),terminator))).valueOf()) {self['@readStream'].next()} else {$early.result=out.contents(); throw ($early)}};
out.nextPut_(ch)};;
return out.contents();
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "private reading", unescape("nextChunk%0D%09%22Answer%20the%20contents%20of%20the%20receiver%2C%20up%20to%20the%20next%20terminator%20character.%0D%09Doubled%20terminators%20indicate%20an%20embedded%20terminator%20character.%22%0D%09%7C%20terminator%20out%20ch%20%7C%0D%09terminator%20%3A%3D%20%24%21.%0D%09out%20%3A%3D%20%27%27%20writeStream.%0D%09self%20skipSeparators.%0D%09%5BreadStream%20atEnd%20or%3A%20%5B%28ch%20%3A%3D%20readStream%20next%29%20%3D%3D%20nil%5D%5D%20whileFalse%3A%20%5B%0D%09%09self%20updateFilePosition%3A%20ch.%0D%09%09%28ch%20%3D%3D%20terminator%29%20ifTrue%3A%20%5B%0D%09%09%09readStream%20peek%20%3D%3D%20terminator%20ifTrue%3A%20%5B%0D%09%09%09%09readStream%20next.%20%20%22skip%20doubled%20terminator%22%0D%09%09%09%5D%20ifFalse%3A%20%5B%0D%09%09%09%09%5Eout%20contents%20%20%22terminator%20is%20not%20doubled%3B%20we%27re%20done%21%22%0D%09%09%09%5D.%0D%09%09%5D.%0D%09%09out%20nextPut%3A%20ch.%0D%09%5D.%0D%09%5Eout%20contents"));
smalltalk.bind(smalltalk.StChunkReader, unescape("processNextChunk"), "processNextChunk", function StChunkReader__processNextChunk(){
const self = this; self.processChunk_((self.nextChunk()));
return self;
}
, "private reading", unescape("processNextChunk%0D%09self%20processChunk%3A%20self%20nextChunk"));
smalltalk.bind(smalltalk.StChunkReader, unescape("skipSeparators"), "skipSeparators", function StChunkReader__skipSeparators(){
const self = this; var $early={name:"stReturn"};
try {
while((self['@readStream'].atEnd()).not()){var c = nil;
c=self['@readStream'].next();
if ((c.isSeparator()).valueOf()) {self.updateFilePosition_(c)} else {$early.result=self['@readStream'].position_(((self['@readStream'].position())._minus((1)))); throw ($early)}};;
return self;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "private reading", unescape("skipSeparators%0D%09%5BreadStream%20atEnd%5D%0D%09%09whileFalse%3A%20%5B%0D%09%09%09%7C%20c%20%7C%0D%09%09%09c%20%3A%3D%20readStream%20next.%0D%09%09%09c%20isSeparator%0D%09%09%09%09ifTrue%3A%20%5Bself%20updateFilePosition%3A%20c%5D%0D%09%09%09%09ifFalse%3A%20%5B%5EreadStream%20position%3A%20readStream%20position-1%5D%5D"));
smalltalk.bind(smalltalk.StChunkReader, unescape("skipStyleChunk"), "skipStyleChunk", function StChunkReader__skipStyleChunk(){
const self = this; self;
return self;
}
, "private reading", "skipStyleChunk");
smalltalk.bind(smalltalk.StChunkReader, unescape("updateFilePosition%3A"), "updateFilePosition_", function StChunkReader__updateFilePosition_(c){
const self = this; if ((c._eq((smalltalk.Character.cr()))).valueOf()) {self['@line']=self['@line']._plus((1));
if (((self['@readStream'].peek())._eq((smalltalk.Character.lf()))).valueOf()) {self['@readStream'].next()}} else {if ((c._eq((smalltalk.Character.lf()))).valueOf()) {self['@line']=self['@line']._plus((1))}};
return self;
}
, "private reading", unescape("updateFilePosition%3A%20c%0D%09c%20%3D%20Character%20cr%0D%09%09ifTrue%3A%20%5B%0D%09%09%09line%20%3A%3D%20line%20+%201.%0D%09%09%09readStream%20peek%20%3D%20Character%20lf%20ifTrue%3A%20%5BreadStream%20next%5D%5D%0D%09%09ifFalse%3A%20%5Bc%20%3D%20Character%20lf%20ifTrue%3A%20%5Bline%20%3A%3D%20line%20+%201%5D%5D"));
smalltalk.bind(smalltalk.StChunkReader, unescape("handleChunk%3A"), "handleChunk_", function StChunkReader__handleChunk_(chunk){
const self = this; self;
return self;
}
, "chunk processing", "handleChunk: chunk");
smalltalk.bind(smalltalk.StChunkReader, unescape("processChunk%3A"), "processChunk_", function StChunkReader__processChunk_(chunk){
const self = this; self.halt();
return self;
}
, "chunk processing", unescape("processChunk%3A%20chunk%0D%09self%20halt"));
smalltalk.bind(smalltalk.StChunkReader, unescape("processMethodChunk%3Aclass%3Aprotocol%3A"), "processMethodChunk_class_protocol_", function StChunkReader__processMethodChunk_class_protocol_(methodText,methodClass,methodProtocol){
const self = this; self;
return self;
}
, "chunk processing", unescape("processMethodChunk%3A%20methodText%20class%3A%20methodClass%20protocol%3A%20methodProtocol%0D"));
smalltalk.bind(smalltalk.StChunkReader, unescape("processMethodChunks%3Aprotocol%3A"), "processMethodChunks_protocol_", function StChunkReader__processMethodChunks_protocol_(methodClass,methodProtocol){
var methodText = nil;
const self = this; while(((function StChunkReader__(){
methodText=self.nextChunk();
return (methodText.size())._gt((0));
}
)()).valueOf()){self.processMethodChunk_class_protocol_(methodText,methodClass,methodProtocol)};;
return self;
}
, "chunk processing", unescape("processMethodChunks%3A%20methodClass%20protocol%3A%20methodProtocol%0D%09%22Process%20methods%20chunks%20for%20current%20category%20in%20readStream%22%0D%09%7C%20methodText%20%7C%0D%09%5BmethodText%20%3A%3D%20self%20nextChunk.%0D%09%20methodText%20size%20%3E%200%5D%0D%09%09whileTrue%3A%20%5Bself%20processMethodChunk%3A%20methodText%20class%3A%20methodClass%20protocol%3A%20methodProtocol%5D"));
smalltalk.bind(smalltalk.StChunkReader, unescape("readAllChunks"), "readAllChunks", function StChunkReader__readAllChunks(){
const self = this; (function StChunkReader__(){
return (function(){while(!self['@readStream'].atEnd()){self.skipSeparators();
(function StChunkReader__(){
if ((self['@readStream'].peekFor_(unescape("%21"))).valueOf()) {return self.handleNextChunk()} else {return self.processNextChunk()};
}
).on_do_(smalltalk.StCompileException,(function StChunkReader__(exception){
exception.line_((self.line()));
return exception.signal();
}
));
if ((self['@readStream'].atEnd()).not()) {self.skipStyleChunk()}};return nil})();
}
).ensure_((function StChunkReader__(){
return self['@readStream'].close();
}
));
return self;
}
, "reading", unescape("readAllChunks%0D%09%5B%5BreadStream%20atEnd%5D%0D%09%09whileFalse%3A%20%5B%0D%09%09%09self%20skipSeparators.%0D%09%09%09%5B%28readStream%20peekFor%3A%20%24%21%29%0D%09%09%09%09ifTrue%3A%20%5Bself%20handleNextChunk%5D%0D%09%09%09%09ifFalse%3A%20%5Bself%20processNextChunk%5D%5D%0D%09%09%09%09on%3A%20StCompileException%0D%09%09%09%09do%3A%20%5B%3Aexception%20%7C%20%0D%09%09%09%09%09exception%20line%3A%20self%20line.%0D%09%09%09%09%09exception%20signal%5D.%0D%09%09%09readStream%20atEnd%0D%09%09%09%09ifFalse%3A%20%5B%20self%20skipStyleChunk%20%5D%5D%5D%0D%09%09ensure%3A%20%5BreadStream%20close%5D"));
smalltalk.bind(smalltalk.StChunkReader, unescape("readStream%3A"), "readStream_", function StChunkReader__readStream_(aStream){
const self = this; self['@readStream']=aStream;
self['@line']=(1);
return self;
}
, "initialize-release", unescape("readStream%3A%20aStream%0D%09readStream%20%3A%3D%20aStream.%0D%09line%20%3A%3D%201"));
smalltalk.bind(smalltalk.StChunkReader, unescape("line"), "line", function StChunkReader__line(){
const self = this; return self['@line'];
}
, "accessing", unescape("line%0D%09%5Eline"));
smalltalk.StChunkReader.$klass.$iVarNames = [];
smalltalk.bind(smalltalk.StChunkReader.$klass, unescape("new"), "$$new", function StChunkReader_class__$$new(){
const self = this; return (smalltalk.superImplementor(smalltalk.StChunkReader.$klass,'$$new').apply(self, [])).initialize();
}
, "instance creation", unescape("new%0D%09%5Esuper%20new%20initialize"));
smalltalk.bind(smalltalk.StChunkReader.$klass, unescape("on%3A"), "on_", function StChunkReader_class__on_(stream){
const self = this; return (self.$$new()).readStream_(stream);
}
, "instance creation", unescape("on%3A%20stream%0D%09%5Eself%20new%20readStream%3A%20stream"));
smalltalk.bind(smalltalk.StChunkReader.$klass, unescape("onFileNamed%3A"), "onFileNamed_", function StChunkReader_class__onFileNamed_(fileName){
var file = nil;
const self = this; file=smalltalk.StandardFileStream.oldFileNamed_(fileName);
return self.on_(file);
}
, "instance creation", unescape("onFileNamed%3A%20fileName%0D%09%7C%20file%20%7C%0D%09file%20%3A%3D%20StandardFileStream%20oldFileNamed%3A%20fileName.%0D%09%5Eself%20on%3A%20file"));
smalltalk.addClass("StClassDefinition", smalltalk.Object, ['name', 'superclass', 'metaClass', 'variables', 'allVariables', 'classVariables', 'pools', 'category', 'comment'], 'Compiler-JS-Support');
smalltalk.StClassDefinition.$classVariableNames=("");
smalltalk.bind(smalltalk.StClassDefinition, unescape("allInstVarNames"), "allInstVarNames", function StClassDefinition__allInstVarNames(){
const self = this; return self['@variables'];
}
, "accessing", unescape("allInstVarNames%0D%09%5Evariables"));
smalltalk.bind(smalltalk.StClassDefinition, unescape("className"), "className", function StClassDefinition__className(){
const self = this; return self['@name'];
}
, "accessing", unescape("className%0D%09%5Ename"));
smalltalk.bind(smalltalk.StClassDefinition, unescape("key"), "key", function StClassDefinition__key(){
const self = this; return self['@name'];
}
, "accessing", unescape("key%0D%09%5Ename"));
smalltalk.bind(smalltalk.StClassDefinition, unescape("metaClass"), "metaClass", function StClassDefinition__metaClass(){
const self = this; return self['@metaClass'];
}
, "accessing", unescape("metaClass%0D%09%5EmetaClass"));
smalltalk.bind(smalltalk.StClassDefinition, unescape("metaClassName"), "metaClassName", function StClassDefinition__metaClassName(){
const self = this; return (self.className())._comma(" class");
}
, "accessing", unescape("metaClassName%0D%09%5Eself%20className%20%2C%20%27%20class%27"));
smalltalk.bind(smalltalk.StClassDefinition, unescape("name"), "name", function StClassDefinition__name(){
const self = this; return self['@name'];
}
, "accessing", unescape("name%0D%09%5Ename"));
smalltalk.bind(smalltalk.StClassDefinition, unescape("sharedPools"), "sharedPools", function StClassDefinition__sharedPools(){
const self = this; return self['@pools'];
}
, "accessing", unescape("sharedPools%0D%09%5Epools"));
smalltalk.bind(smalltalk.StClassDefinition, unescape("superMeta"), "superMeta", function StClassDefinition__superMeta(){
const self = this; return (function(){var $1$; $1$ = self['@superclass']; if (!nil.isNil_($1$)) { return self['@superclass'].metaClass() } else { return $1$; }})();
}
, "accessing", unescape("superMeta%0D%09%5Esuperclass%0D%09%09ifNotNil%3A%20%5Bsuperclass%20metaClass%5D"));
smalltalk.bind(smalltalk.StClassDefinition, unescape("decompilerClass"), "decompilerClass", function StClassDefinition__decompilerClass(){
const self = this; return "Decompiler".asClass();
}
, "decompiler", unescape("decompilerClass%0D%09%5E%23Decompiler%20asClass"));
smalltalk.bind(smalltalk.StClassDefinition, unescape("newParser"), "newParser", function StClassDefinition__newParser(){
const self = this; return "Parser".$$new();
}
, "decompiler", unescape("newParser%0D%09%5E%23Parser%20new"));
smalltalk.bind(smalltalk.StClassDefinition, unescape("shoutParserClass"), "shoutParserClass", function StClassDefinition__shoutParserClass(){
const self = this; return "Parser";
}
, "decompiler", unescape("shoutParserClass%0D%09%5E%23Parser"));
smalltalk.bind(smalltalk.StClassDefinition, unescape("theNonMetaClass"), "theNonMetaClass", function StClassDefinition__theNonMetaClass(){
const self = this; return self;
}
, "decompiler", unescape("theNonMetaClass%0D%09%5Eself"));
smalltalk.bind(smalltalk.StClassDefinition, unescape("generateOn%3A"), "generateOn_", function StClassDefinition__generateOn_(generator){
const self = this; generator.smalltalkClassBinding_(self);
return self;
}
, "generate", unescape("generateOn%3A%20generator%0D%09generator%20smalltalkClassBinding%3A%20self"));
smalltalk.bind(smalltalk.StClassDefinition, unescape("canAssign"), "canAssign", function StClassDefinition__canAssign(){
const self = this; return true;
}
, "testing", unescape("canAssign%0D%09%5Etrue"));
smalltalk.bind(smalltalk.StClassDefinition, unescape("isMeta"), "isMeta", function StClassDefinition__isMeta(){
const self = this; return false;
}
, "testing", unescape("isMeta%0D%09%5Efalse"));
smalltalk.bind(smalltalk.StClassDefinition, unescape("isVariableBinding"), "isVariableBinding", function StClassDefinition__isVariableBinding(){
const self = this; return true;
}
, "testing", unescape("isVariableBinding%0D%09%5Etrue"));
smalltalk.bind(smalltalk.StClassDefinition, unescape("printOn%3A"), "printOn_", function StClassDefinition__printOn_(stream){
const self = this; (function StClassDefinition__($1$){
$1$.nextPutAll_(unescape("StClassDefinition%28"));
$1$.nextPutAll_(self['@name']);
return $1$.nextPut_(unescape("%29"))}
)(stream);
return self;
}
, "printing", unescape("printOn%3A%20stream%0D%09stream%0D%09%09nextPutAll%3A%20%27StClassDefinition%28%27%3B%0D%09%09nextPutAll%3A%20name%3B%0D%09%09nextPut%3A%20%24%29"));
smalltalk.bind(smalltalk.StClassDefinition, unescape("metaClass%3A"), "metaClass_", function StClassDefinition__metaClass_(metaClassDefinition){
const self = this; self['@metaClass']=metaClassDefinition;
return self;
}
, "initialize-release", unescape("metaClass%3A%20metaClassDefinition%0D%09metaClass%20%3A%3D%20metaClassDefinition"));
smalltalk.bind(smalltalk.StClassDefinition, unescape("name%3Asuperclass%3AinstanceVariableNames%3AclassVariableNames%3ApoolDictionaries%3Acategory%3A"), "name_superclass_instanceVariableNames_classVariableNames_poolDictionaries_category_", function StClassDefinition__name_superclass_instanceVariableNames_classVariableNames_poolDictionaries_category_(className,aSuperclass,instVarNames,classVarNames,poolVarNames,aCategory){
const self = this; self['@name']=className.asSymbol();
self['@superclass']=aSuperclass;
self['@variables']=instVarNames.subStrings();
self['@classVariables']=classVarNames.subStrings();
self['@pools']=poolVarNames.subStrings();
self['@category']=aCategory;
return self;
}
, "initialize-release", unescape("name%3A%20className%20superclass%3A%20aSuperclass%20instanceVariableNames%3A%20instVarNames%20classVariableNames%3A%20classVarNames%20poolDictionaries%3A%20poolVarNames%20category%3A%20aCategory%0D%09name%20%3A%3D%20className%20asSymbol.%0D%09superclass%20%3A%3D%20aSuperclass.%0D%09variables%20%3A%3D%20instVarNames%20subStrings.%0D%09classVariables%20%3A%3D%20classVarNames%20subStrings.%0D%09pools%20%3A%3D%20poolVarNames%20subStrings.%0D%09category%20%3A%3D%20aCategory"));
smalltalk.bind(smalltalk.StClassDefinition, unescape("subclass%3AinstanceVariableNames%3AclassVariableNames%3ApoolDictionaries%3Acategory%3A"), "subclass_instanceVariableNames_classVariableNames_poolDictionaries_category_", function StClassDefinition__subclass_instanceVariableNames_classVariableNames_poolDictionaries_category_(subclassName,instVarNames,classVarNames,poolVarNames,aCategory){
var classDef = nil;
const self = this; self.halt();
classDef=smalltalk.StClassDefinition.$$new();
classDef.name_superclass_instanceVariableNames_classVariableNames_poolDictionaries_category_(subclassName,(self.name()),instVarNames,classVarNames,poolVarNames,aCategory);
return classDef;
}
, "fileIn", unescape("subclass%3A%20subclassName%20instanceVariableNames%3A%20instVarNames%20classVariableNames%3A%20classVarNames%20poolDictionaries%3A%20poolVarNames%20category%3A%20aCategory%0D%09%7C%20classDef%20%7C%0D%09self%20halt.%0D%09classDef%20%3A%3D%20StClassDefinition%20new.%0D%09classDef%20name%3A%20subclassName%20superclass%3A%20self%20name%20instanceVariableNames%3A%20instVarNames%20classVariableNames%3A%20classVarNames%20poolDictionaries%3A%20poolVarNames%20category%3A%20aCategory.%0D%09%5EclassDef"));
smalltalk.bind(smalltalk.StClassDefinition, unescape("asVariableIn%3A"), "asVariableIn_", function StClassDefinition__asVariableIn_(encoder){
const self = this; return encoder.global_name_(self,self['@name']);
}
, "compiling", unescape("asVariableIn%3A%20encoder%0D%09%5Eencoder%20global%3A%20self%20name%3A%20name"));
smalltalk.bind(smalltalk.StClassDefinition, unescape("bindingOf%3Aenvironment%3A"), "bindingOf_environment_", function StClassDefinition__bindingOf_environment_(varName,environment){
var aSymbol = nil;
var binding = nil;
const self = this; var $early={name:"stReturn"};
try {
aSymbol=varName.asSymbol();
(function(){var $1$; $1$ = self.classThatDefinesClassVariable_in_(aSymbol,environment); if (!nil.isNil_($1$)) { return (function StClassDefinition__(x){
$early.result=smalltalk.StClassVarDefinition.class_name_(self,(aSymbol.asString())); throw ($early);
}
)() } else { return $1$; }})();
binding=environment.bindingOf_ifAbsent_(aSymbol,(function StClassDefinition__(){
return nil;
}
));
(function(){var $2$; $2$ = binding; if (!nil.isNil_($2$)) { return (function StClassDefinition__(){
$early.result=binding; throw ($early);
}
)() } else { return $2$; }})();
return (nil.isNil_(self['@superclass']) ? nil : self['@superclass'].bindingOf_environment_(aSymbol,environment));
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "compiling", unescape("bindingOf%3A%20varName%20environment%3A%20environment%0D%09%22Answer%20the%20binding%20of%20some%20variable%20resolved%20in%20the%20scope%20of%20the%20receiver%22%0D%09%7C%20aSymbol%20binding%20%7C%0D%09aSymbol%20%3A%3D%20varName%20asSymbol.%0D%0D%09%22First%20look%20in%20classVar%20dictionary.%22%0D%09%28self%20classThatDefinesClassVariable%3A%20aSymbol%20in%3A%20environment%29%20ifNotNil%3A%0D%09%09%5B%3Ax%20%7C%20%5EStClassVarDefinition%20class%3A%20self%20name%3A%20aSymbol%20asString%5D.%0D%0D%09%22Next%20look%20in%20shared%20pools.%22%0D%09%22TODO%20support%20pools%22%0D%22%20sharedPools%20do%3A%5B%3Apool%20%7C%20%0D%09%09binding%20%3A%3D%20pool%20bindingOf%3A%20aSymbol.%0D%09%09binding%20ifNotNil%3A%5B%5Ebinding%5D.%0D%09%5D.%0D%22%0D%09%22Next%20look%20in%20declared%20environment.%22%0D%09binding%20%3A%3D%20environment%20bindingOf%3A%20aSymbol%20ifAbsent%3A%20%5Bnil%5D.%0D%09binding%20ifNotNil%3A%5B%5Ebinding%5D.%0D%0D%09%22Finally%20look%20higher%20up%20the%20superclass%20chain%20and%20fail%20at%20the%20end.%22%0D%09%5Esuperclass%0D%09%09ifNil%3A%20%5Bnil%5D%0D%09%09ifNotNil%3A%20%5Bsuperclass%20bindingOf%3A%20aSymbol%20environment%3A%20environment%5D%0D"));
smalltalk.bind(smalltalk.StClassDefinition, unescape("classBindingOf%3Aenvironment%3A"), "classBindingOf_environment_", function StClassDefinition__classBindingOf_environment_(varName,environment){
const self = this; return self.bindingOf_environment_(varName,environment);
}
, "compiling", unescape("classBindingOf%3A%20varName%20environment%3A%20environment%0D%09%5Eself%20bindingOf%3A%20varName%20environment%3A%20environment"));
smalltalk.bind(smalltalk.StClassDefinition, unescape("classThatDefinesClassVariable%3Ain%3A"), "classThatDefinesClassVariable_in_", function StClassDefinition__classThatDefinesClassVariable_in_(classVarName,environment){
const self = this; if ((self['@classVariables'].includes_(classVarName)).valueOf()) {return self};
return (function(){var $1$; $1$ = self['@superclass']; if (!nil.isNil_($1$)) { return self['@superclass'].classThatDefinesClassVariable_in_(classVarName,environment) } else { return $1$; }})();
}
, "compiling", unescape("classThatDefinesClassVariable%3A%20classVarName%20in%3A%20environment%0D%09%28classVariables%20includes%3A%20classVarName%29%0D%09%09ifTrue%3A%20%5B%5Eself%5D.%20%0D%09%5Esuperclass%20ifNotNil%3A%20%5B%0D%09%09superclass%20classThatDefinesClassVariable%3A%20classVarName%20in%3A%20environment%5D"));
smalltalk.bind(smalltalk.StClassDefinition, unescape("gatherVariables"), "gatherVariables", function StClassDefinition__gatherVariables(){
const self = this; self['@allVariables']=smalltalk.OrderedCollection.$$new();
(function(){var $1$; $1$ = self['@superclass']; if (!nil.isNil_($1$)) { return self['@superclass'].variablesDo_((function StClassDefinition__(varName){
return self['@allVariables'].add_(varName);
}
)) } else { return $1$; }})();
self['@variables'].do_((function StClassDefinition__(varName){
return self['@allVariables'].add_(varName);
}
));
return self;
}
, "compiling", unescape("gatherVariables%0D%09allVariables%20%3A%3D%20OrderedCollection%20new.%0D%09superclass%20ifNotNil%3A%20%5B%0D%09%09superclass%20variablesDo%3A%20%5B%3AvarName%20%7C%20allVariables%20add%3A%20varName%5D%5D.%0D%09variables%20do%3A%20%5B%3AvarName%20%7C%20allVariables%20add%3A%20varName%5D"));
smalltalk.bind(smalltalk.StClassDefinition, unescape("literalScannedAs%3Aenvironment%3Anotifying%3A"), "literalScannedAs_environment_notifying_", function StClassDefinition__literalScannedAs_environment_notifying_(anObject,environment,anEncoder){
const self = this; self.halt();
return anObject;
}
, "compiling", unescape("literalScannedAs%3A%20anObject%20environment%3A%20environment%20notifying%3A%20anEncoder%0Dself%20halt.%0D%09%5EanObject"));
smalltalk.bind(smalltalk.StClassDefinition, unescape("variablesDo%3A"), "variablesDo_", function StClassDefinition__variablesDo_(aBlock){
const self = this; (function(){var $1$; $1$ = self['@allVariables']; if (nil.isNil_($1$)) { return self.gatherVariables() } else { return $1$; }})();
self['@allVariables'].do_(aBlock);
return self;
}
, "compiling", unescape("variablesDo%3A%20aBlock%0D%09allVariables%20ifNil%3A%20%5Bself%20gatherVariables%5D.%0D%09allVariables%20do%3A%20aBlock"));
smalltalk.StClassDefinition.$klass.$iVarNames = [];
smalltalk.bind(smalltalk.StClassDefinition.$klass, unescape("object"), "object", function StClassDefinition_class__object(){
const self = this; return self.name_superclass_category_("Object",nil,unescape("Kernel-Objects"));
}
, "bootstrap", unescape("object%0D%09%5Eself%20name%3A%20%27Object%27%20superclass%3A%20nil%20category%3A%20%27Kernel-Objects%27"));
smalltalk.bind(smalltalk.StClassDefinition.$klass, unescape("undeclared%3A"), "undeclared_", function StClassDefinition_class__undeclared_(aString){
const self = this; return self.name_superclass_category_(aString,nil,nil);
}
, "bootstrap", unescape("undeclared%3A%20aString%0D%09%5Eself%20name%3A%20aString%20superclass%3A%20nil%20category%3A%20nil"));
smalltalk.bind(smalltalk.StClassDefinition.$klass, unescape("undefined"), "undefined", function StClassDefinition_class__undefined(){
const self = this; return self.name_superclassName_category_("UndefinedObject","Object",unescape("Kernel-Objects"));
}
, "bootstrap", unescape("undefined%0D%09%5Eself%20name%3A%20%27UndefinedObject%27%20superclassName%3A%20%27Object%27%20category%3A%20%27Kernel-Objects%27"));
smalltalk.bind(smalltalk.StClassDefinition.$klass, unescape("name%3Asuperclass%3Acategory%3A"), "name_superclass_category_", function StClassDefinition_class__name_superclass_category_(className,aSuperclass,aCategory){
const self = this; return self.name_superclass_instanceVariableNames_classVariableNames_poolDictionaries_category_(className,aSuperclass,"","","",aCategory);
}
, "instance creation", unescape("name%3A%20className%20superclass%3A%20aSuperclass%20category%3A%20aCategory%0D%09%5Eself%0D%09%09name%3A%20className%0D%09%09superclass%3A%20aSuperclass%0D%09%09instanceVariableNames%3A%20%27%27%0D%09%09classVariableNames%3A%20%27%27%0D%09%09poolDictionaries%3A%20%27%27%0D%09%09category%3A%20aCategory"));
smalltalk.bind(smalltalk.StClassDefinition.$klass, unescape("name%3Asuperclass%3AinstanceVariableNames%3AclassVariableNames%3ApoolDictionaries%3Acategory%3A"), "name_superclass_instanceVariableNames_classVariableNames_poolDictionaries_category_", function StClassDefinition_class__name_superclass_instanceVariableNames_classVariableNames_poolDictionaries_category_(className,aSuperclass,instVarNames,classVarNames,poolVarNames,aCategory){
const self = this; return (self.$$new()).name_superclass_instanceVariableNames_classVariableNames_poolDictionaries_category_(className,aSuperclass,instVarNames,classVarNames,poolVarNames,aCategory);
}
, "instance creation", unescape("name%3A%20className%20superclass%3A%20aSuperclass%20instanceVariableNames%3A%20instVarNames%20classVariableNames%3A%20classVarNames%20poolDictionaries%3A%20poolVarNames%20category%3A%20aCategory%0D%09%5Eself%20new%0D%09%09name%3A%20className%0D%09%09superclass%3A%20aSuperclass%0D%09%09instanceVariableNames%3A%20instVarNames%0D%09%09classVariableNames%3A%20classVarNames%0D%09%09poolDictionaries%3A%20poolVarNames%0D%09%09category%3A%20aCategory"));
smalltalk.addClass("StClassVarDefinition", smalltalk.Object, ['nonMetaClass', 'name'], 'Compiler-JS-Support');
smalltalk.StClassVarDefinition.$classVariableNames=("");
smalltalk.bind(smalltalk.StClassVarDefinition, unescape("name"), "name", function StClassVarDefinition__name(){
const self = this; return self['@name'];
}
, "accessing", unescape("name%0D%09%5Ename"));
smalltalk.bind(smalltalk.StClassVarDefinition, unescape("nonMetaClass"), "nonMetaClass", function StClassVarDefinition__nonMetaClass(){
const self = this; return self['@nonMetaClass'];
}
, "accessing", unescape("nonMetaClass%0D%09%5EnonMetaClass"));
smalltalk.bind(smalltalk.StClassVarDefinition, unescape("asVariableIn%3A"), "asVariableIn_", function StClassVarDefinition__asVariableIn_(encoder){
const self = this; return encoder.classVariable_name_(self,self['@name']);
}
, "testing", unescape("asVariableIn%3A%20encoder%0D%09%5Eencoder%20classVariable%3A%20self%20name%3A%20name"));
smalltalk.bind(smalltalk.StClassVarDefinition, unescape("canAssign"), "canAssign", function StClassVarDefinition__canAssign(){
const self = this; return true;
}
, "testing", unescape("canAssign%0D%09%5Etrue"));
smalltalk.bind(smalltalk.StClassVarDefinition, unescape("isVariableBinding"), "isVariableBinding", function StClassVarDefinition__isVariableBinding(){
const self = this; return true;
}
, "testing", unescape("isVariableBinding%0D%09%5Etrue"));
smalltalk.bind(smalltalk.StClassVarDefinition, unescape("class%3Aname%3A"), "class_name_", function StClassVarDefinition__class_name_(aNonMetaClass,classVarName){
const self = this; self['@nonMetaClass']=aNonMetaClass;
self['@name']=classVarName;
return self;
}
, "initialize-release", unescape("class%3A%20aNonMetaClass%20name%3A%20classVarName%0D%09nonMetaClass%20%3A%3D%20aNonMetaClass.%0D%09name%20%3A%3D%20classVarName"));
smalltalk.StClassVarDefinition.$klass.$iVarNames = [];
smalltalk.bind(smalltalk.StClassVarDefinition.$klass, unescape("class%3Aname%3A"), "class_name_", function StClassVarDefinition_class__class_name_(nonMetaClass,classVarName){
const self = this; return (self.$$new()).class_name_(nonMetaClass,classVarName);
}
, "instance creation", unescape("class%3A%20nonMetaClass%20name%3A%20classVarName%0D%09%5Eself%20new%20class%3A%20nonMetaClass%20name%3A%20classVarName"));
smalltalk.addClass("StCommentChunk", smalltalk.StChunk, ['comment', 'commentStamp', 'prior'], 'Compiler-JS-Support');
smalltalk.StCommentChunk.$classVariableNames=("");
smalltalk.bind(smalltalk.StCommentChunk, unescape("receiver%3Aselector%3Aarguments%3A"), "receiver_selector_arguments_", function StCommentChunk__receiver_selector_arguments_(receiver,selector,args){
const self = this; if (((nil.is_eqeq_(selector,"commentStamp:"))).valueOf()) {self['@commentStamp']=args.at_((1));
self['@prior']=(0)};
if (((nil.is_eqeq_(selector,"commentStamp:prior:"))).valueOf()) {self['@commentStamp']=args.at_((1));
self['@prior']=args.at_((2))};
return self;
}
, "initialize-release", unescape("receiver%3A%20receiver%20selector%3A%20selector%20arguments%3A%20args%0D%09selector%20%3D%3D%20%23commentStamp%3A%0D%09%09ifTrue%3A%20%5B%0D%09%09%09commentStamp%20%3A%3D%20args%20at%3A%201.%0D%09%09%09prior%20%3A%3D%200%5D.%0D%09selector%20%3D%3D%20%23commentStamp%3Aprior%3A%0D%09%09ifTrue%3A%20%5B%0D%09%09%09commentStamp%20%3A%3D%20args%20at%3A%201.%0D%09%09%09prior%20%3A%3D%20args%20at%3A%202%5D.%0D%0D%09%0D"));
smalltalk.bind(smalltalk.StCommentChunk, unescape("readChunksThrough%3A"), "readChunksThrough_", function StCommentChunk__readChunksThrough_(chunkReader){
const self = this; self['@comment']=chunkReader.nextChunk();
return self;
}
, "chunk processing", unescape("readChunksThrough%3A%20chunkReader%0D%09comment%20%3A%3D%20chunkReader%20nextChunk"));
smalltalk.addClass("StCompileException", smalltalk.Error, ['line', 'linePosition'], 'Compiler-JS-Support');
smalltalk.StCompileException.$classVariableNames=("");
smalltalk.bind(smalltalk.StCompileException, unescape("defaultAction"), "defaultAction", function StCompileException__defaultAction(){
const self = this; (function StCompileException__($1$){
$1$.show_((self.messageText()));
return $1$.cr()}
)(smalltalk.Transcript);
smalltalk.superImplementor(smalltalk.StCompileException,'defaultAction').apply(self, []);
return self;
}
, "priv handling", unescape("defaultAction%0D%09Transcript%20show%3A%20self%20messageText%3B%20cr.%0D%09super%20defaultAction"));
smalltalk.bind(smalltalk.StCompileException, unescape("line%3A"), "line_", function StCompileException__line_(lineInt){
const self = this; self['@line']=lineInt;
self['@messageText']=((unescape("%0Dline%3A%20")._comma((self['@line'].asString())))._comma(unescape("%0D")))._comma(self['@messageText']);
return self;
}
, "accessing", unescape("line%3A%20lineInt%0D%09line%20%3A%3D%20lineInt.%0D%09messageText%20%3A%3D%20%27%0Dline%3A%20%27%20%2C%20line%20asString%20%2C%27%0D%27%20%2C%20messageText"));
smalltalk.bind(smalltalk.StCompileException, unescape("line%3AlinePositition%3A"), "line_linePositition_", function StCompileException__line_linePositition_(lineInt,positionInt){
const self = this; self['@line']=lineInt;
self['@linePosition']=positionInt;
self['@messageText']=(((" line: "._comma((self['@line'].asString())))._comma(unescape("%2C")))._comma((self['@linePosition'].asString())))._comma(self['@messageText']);
return self;
}
, "accessing", unescape("line%3A%20lineInt%20linePositition%3A%20positionInt%0D%09line%20%3A%3D%20lineInt.%0D%09linePosition%20%3A%3D%20positionInt.%0D%09messageText%20%3A%3D%20%27%20line%3A%20%27%20%2C%20line%20asString%20%2C%20%27%2C%27%20%2C%20linePosition%20asString%20%2C%20messageText"));
smalltalk.addClass("StDoItChunk", smalltalk.StChunk, ['source'], 'Compiler-JS-Support');
smalltalk.StDoItChunk.$classVariableNames=("");
smalltalk.bind(smalltalk.StDoItChunk, unescape("source%3A"), "source_", function StDoItChunk__source_(sourceText){
const self = this; self['@source']=sourceText;
return self;
}
, "as yet unclassified", unescape("source%3A%20sourceText%0D%09source%20%3A%3D%20sourceText"));
smalltalk.StDoItChunk.$klass.$iVarNames = [];
smalltalk.bind(smalltalk.StDoItChunk.$klass, unescape("source%3A"), "source_", function StDoItChunk_class__source_(sourceText){
const self = this; return (self.$$new()).source_(sourceText);
}
, "as yet unclassified", unescape("source%3A%20sourceText%0D%09%5Eself%20new%20source%3A%20sourceText"));
smalltalk.addClass("StEnvironment", smalltalk.Object, ['bindings', 'undeclared', 'allowUndeclared'], 'Compiler-JS-Support');
smalltalk.StEnvironment.$classVariableNames=("");
smalltalk.bind(smalltalk.StEnvironment, unescape("initialize"), "initialize", function StEnvironment__initialize(){
const self = this; self['@bindings']=smalltalk.Dictionary.$$new();
self['@undeclared']=smalltalk.Dictionary.$$new();
self['@allowUndeclared']=false;
return self;
}
, "initialize-release", unescape("initialize%0D%09bindings%20%3A%3D%20Dictionary%20new.%0D%09undeclared%20%3A%3D%20Dictionary%20new.%0D%09allowUndeclared%20%3A%3D%20false"));
smalltalk.bind(smalltalk.StEnvironment, unescape("addAllFrom%3A"), "addAllFrom_", function StEnvironment__addAllFrom_(environment){
const self = this; environment.bindingsKeyAndValuesDo_((function StEnvironment__(key,value){
return self.bindingsAt_put_(key,value);
}
));
return self;
}
, "binding", unescape("addAllFrom%3A%20environment%0D%09environment%20bindingsKeyAndValuesDo%3A%20%5B%3Akey%20%3Avalue%20%7C%0D%09%09self%20bindingsAt%3A%20key%20put%3A%20value%5D"));
smalltalk.bind(smalltalk.StEnvironment, unescape("addClassDefinition%3A"), "addClassDefinition_", function StEnvironment__addClassDefinition_(classDefinition){
var className = nil;
var metaClass = nil;
const self = this; className=(classDefinition.className()).asSymbol();
if ((self['@undeclared'].includesKey_(className)).valueOf()) {self['@undeclared'].removeKey_(className)};
self.bindingsAt_put_(className,classDefinition);
metaClass=smalltalk.StMetaClassDefinition.nonMetaClass_(classDefinition);
self.bindingsAt_put_((classDefinition.metaClassName()),(function StEnvironment__(){
return metaClass;
}
));
classDefinition.metaClass_(metaClass);
return self;
}
, "binding", unescape("addClassDefinition%3A%20classDefinition%0D%09%7C%20className%20metaClass%20%7C%0D%09className%20%3A%3D%20classDefinition%20className%20asSymbol.%0D%22%09allow%20overwriting%20class%20definitions%09%0D%09%28bindings%20includesKey%3A%20className%29%0D%09%09ifTrue%3A%20%5B%5Eself%5D.%0D%22%09%28undeclared%20includesKey%3A%20className%29%0D%09%09ifTrue%3A%20%5Bundeclared%20removeKey%3A%20className%5D.%0D%09self%20bindingsAt%3A%20className%20put%3A%20classDefinition.%0D%0D%09metaClass%20%3A%3D%20StMetaClassDefinition%20nonMetaClass%3A%20classDefinition.%0D%09self%20%0D%09%09bindingsAt%3A%20classDefinition%20metaClassName%0D%09%09put%3A%20%5BmetaClass%5D.%0D%09classDefinition%20metaClass%3A%20metaClass"));
smalltalk.bind(smalltalk.StEnvironment, unescape("addMetaClassDefinition%3A"), "addMetaClassDefinition_", function StEnvironment__addMetaClassDefinition_(classDefinition){
var className = nil;
const self = this; className=(classDefinition.className()).asSymbol();
if ((self['@undeclared'].includesKey_(className)).valueOf()) {self['@undeclared'].removeKey_(className)};
self.bindingsAt_put_(className,classDefinition);
(classDefinition.theNonMetaClass()).metaClass_(classDefinition);
return self;
}
, "binding", unescape("addMetaClassDefinition%3A%20classDefinition%0D%09%7C%20className%20%7C%0D%09className%20%3A%3D%20classDefinition%20className%20asSymbol.%0D%09%28undeclared%20includesKey%3A%20className%29%0D%09%09ifTrue%3A%20%5Bundeclared%20removeKey%3A%20className%5D.%0D%09self%20bindingsAt%3A%20className%20put%3A%20classDefinition.%0D%0D%09classDefinition%20theNonMetaClass%20metaClass%3A%20classDefinition"));
smalltalk.bind(smalltalk.StEnvironment, unescape("allowUndeclared%3A"), "allowUndeclared_", function StEnvironment__allowUndeclared_(aBoolean){
const self = this; self['@allowUndeclared']=aBoolean;
return self;
}
, "binding", unescape("allowUndeclared%3A%20aBoolean%0D%09allowUndeclared%20%3A%3D%20aBoolean"));
smalltalk.bind(smalltalk.StEnvironment, unescape("bindingOf%3A"), "bindingOf_", function StEnvironment__bindingOf_(aSymbolOrString){
const self = this; return self.bindingOf_ifAbsent_((aSymbolOrString.asSymbol()),(function StEnvironment__(){
if ((self['@allowUndeclared']).valueOf()) {return nil} else {return smalltalk.StCompileException.signal_(("No binding for "._comma(aSymbolOrString)))};
}
));
}
, "binding", unescape("bindingOf%3A%20aSymbolOrString%0D%09%5Eself%0D%09%09bindingOf%3A%20aSymbolOrString%20asSymbol%0D%09%09ifAbsent%3A%20%5B%0D%09%09%09allowUndeclared%0D%09%09%09%09ifTrue%3A%20%5Bnil%5D%0D%09%09%09%09ifFalse%3A%20%5BStCompileException%20signal%3A%20%27No%20binding%20for%20%27%20%2C%20aSymbolOrString%5D%5D"));
smalltalk.bind(smalltalk.StEnvironment, unescape("bindingOf%3AifAbsent%3A"), "bindingOf_ifAbsent_", function StEnvironment__bindingOf_ifAbsent_(aSymbolOrString,aBlock){
const self = this; return self['@bindings'].at_ifAbsent_((aSymbolOrString.asSymbol()),aBlock);
}
, "binding", unescape("bindingOf%3A%20aSymbolOrString%20ifAbsent%3A%20aBlock%0D%09%5Ebindings%0D%09%09at%3A%20aSymbolOrString%20asSymbol%0D%09%09ifAbsent%3A%20aBlock"));
smalltalk.bind(smalltalk.StEnvironment, unescape("bindingsAt%3Aput%3A"), "bindingsAt_put_", function StEnvironment__bindingsAt_put_(key,value){
const self = this; self['@bindings'].at_put_(key,value);
return self;
}
, "binding", unescape("bindingsAt%3A%20key%20put%3A%20value%0D%09bindings%20at%3A%20key%20put%3A%20value"));
smalltalk.bind(smalltalk.StEnvironment, unescape("bindingsKeyAndValuesDo%3A"), "bindingsKeyAndValuesDo_", function StEnvironment__bindingsKeyAndValuesDo_(aBlock){
const self = this; self['@bindings'].keysAndValuesDo_(aBlock);
return self;
}
, "binding", unescape("bindingsKeyAndValuesDo%3A%20aBlock%0D%09bindings%20keysAndValuesDo%3A%20aBlock"));
smalltalk.bind(smalltalk.StEnvironment, unescape("undeclare%3A"), "undeclare_", function StEnvironment__undeclare_(aSymbol){
const self = this; if ((self['@allowUndeclared'].or_((function StEnvironment__(){
return (aSymbol.first()).isUppercase();
}
))).valueOf()) {return self['@undeclared'].at_ifAbsentPut_(aSymbol,(function StEnvironment__(){
self['@undeclared'].at_put_(aSymbol,(smalltalk.StClassDefinition.undeclared_(aSymbol)));
return self['@undeclared'].at_(aSymbol);
}
))} else {return nil};
}
, "binding", unescape("undeclare%3A%20aSymbol%0D%09%22we%20allow%20globals%20to%20be%20undeclared%22%0D%09%5E%28allowUndeclared%20or%3A%20%5BaSymbol%20first%20isUppercase%5D%29%0D%09%09ifTrue%3A%20%5B%0D%09%09%09undeclared%0D%09%09%09%09at%3A%20aSymbol%0D%09%09%09%09ifAbsentPut%3A%20%5B%0D%09%09%09%09%09undeclared%20at%3A%20aSymbol%20put%3A%20%28StClassDefinition%20undeclared%3A%20aSymbol%29.%0D%09%09%09%09%09undeclared%20at%3A%20aSymbol%5D%5D%0D%09%09ifFalse%3A%20%5Bnil%5D"));
smalltalk.bind(smalltalk.StEnvironment, unescape("readBindings%3AfromFileNamed%3A"), "readBindings_fromFileNamed_", function StEnvironment__readBindings_fromFileNamed_(environmentBuilder,fileName){
var chunkReader = nil;
const self = this; chunkReader=environmentBuilder.onFileNamed_environment_(fileName,self);
chunkReader.readAllChunks();
return self;
}
, "reading", unescape("readBindings%3A%20environmentBuilder%20fromFileNamed%3A%20fileName%0D%09%7C%20chunkReader%20%7C%0D%09chunkReader%20%3A%3D%20environmentBuilder%20onFileNamed%3A%20fileName%20environment%3A%20self.%0D%09chunkReader%20readAllChunks"));
smalltalk.bind(smalltalk.StEnvironment, unescape("readBindingsFrom%3A"), "readBindingsFrom_", function StEnvironment__readBindingsFrom_(readStream){
var chunkReader = nil;
const self = this; chunkReader=smalltalk.StEnvironmentBuilder.on_environment_(readStream,self);
chunkReader.readAllChunks();
return self;
}
, "reading", unescape("readBindingsFrom%3A%20readStream%0D%09%7C%20chunkReader%20%7C%0D%09chunkReader%20%3A%3D%20StEnvironmentBuilder%20on%3A%20readStream%20environment%3A%20self.%0D%09chunkReader%20readAllChunks"));
smalltalk.bind(smalltalk.StEnvironment, unescape("readBindingsFromFileNamed%3A"), "readBindingsFromFileNamed_", function StEnvironment__readBindingsFromFileNamed_(fileName){
var chunkReader = nil;
const self = this; chunkReader=smalltalk.StEnvironmentBuilder.onFileNamed_environment_(fileName,self);
chunkReader.readAllChunks();
return self;
}
, "reading", unescape("readBindingsFromFileNamed%3A%20fileName%0D%09%7C%20chunkReader%20%7C%0D%09chunkReader%20%3A%3D%20StEnvironmentBuilder%20onFileNamed%3A%20fileName%20environment%3A%20self.%0D%09chunkReader%20readAllChunks"));
smalltalk.bind(smalltalk.StEnvironment, unescape("storeOn%3A"), "storeOn_", function StEnvironment__storeOn_(stream){
const self = this; self;
return self;
}
, "storing", "storeOn: stream");
smalltalk.StEnvironment.$klass.$iVarNames = [];
smalltalk.bind(smalltalk.StEnvironment.$klass, unescape("bootstrap"), "bootstrap", function StEnvironment_class__bootstrap(){
var stEnvironment = nil;
var object = nil;
const self = this; object=smalltalk.StClassDefinition.name_superclass_category_("Object",nil,"Kernel");
stEnvironment=self.$$new();
(function StEnvironment_class__($1$){
$1$.addClassDefinition_(object);
$1$.addClassDefinition_((smalltalk.StClassDefinition.name_superclass_category_("UndefinedObject",object,"Kernel")));
return $1$.yourself()}
)(stEnvironment);
return stEnvironment;
}
, "instance creation", unescape("bootstrap%0D%09%7C%20stEnvironment%20object%20%7C%0D%09object%20%3A%3D%20StClassDefinition%20name%3A%20%27Object%27%20superclass%3A%20nil%20category%3A%20%27Kernel%27.%0D%09stEnvironment%20%3A%3D%20self%20new.%0D%09stEnvironment%0D%09%09addClassDefinition%3A%20object%3B%0D%09%09addClassDefinition%3A%20%28StClassDefinition%20name%3A%20%27UndefinedObject%27%20superclass%3A%20object%20category%3A%20%27Kernel%27%29%3B%0D%22%09%09addClassDefinition%3A%20StClassDefinition%20object%3B%0D%09%09addClassDefinition%3A%20StClassDefinition%20undefined%3B%0D%09%09addClassDefinition%3A%20StClassDefinition%20exception%3B%0D%09%09addClassDefinition%3A%20StClassDefinition%20error%3B%0D%09%09addClassDefinition%3A%20StClassDefinition%20collection%3B%0D%09%09addClassDefinition%3A%20StClassDefinition%20sequenceableCollection%3B%0D%09%09addClassDefinition%3A%20StClassDefinition%20orderedCollection%3B%0D%09%09addClassDefinition%3A%20StClassDefinition%20string%3B%0D%09%09addClassDefinition%3A%20StClassDefinition%20character%3B%0D%09%09addClassDefinition%3A%20StClassDefinition%20stream%3B%0D%09%09addClassDefinition%3A%20StClassDefinition%20fileStream%3B%0D%22%09%09yourself.%0D%09%5EstEnvironment"));
smalltalk.bind(smalltalk.StEnvironment.$klass, unescape("fromEnvironment"), "fromEnvironment", function StEnvironment_class__fromEnvironment(){
var stEnvironment = nil;
const self = this; stEnvironment=self.$$new();
smalltalk.Object.withAllSubclassesDo_((function StEnvironment_class__(each){
var superDef = nil;
var instVarNames = nil;
superDef=(function(){var $1$; $1$ = each.superclass(); if (!nil.isNil_($1$)) { return stEnvironment.bindingOf_(((each.superclass()).name())) } else { return $1$; }})();
instVarNames=smalltalk.String.streamContents_((function StEnvironment_class__(stream){
return (each.instVarNames()).do_andBetweenDo_((function StEnvironment_class__(varName){
return stream.nextPutAll_(varName);
}
),(function StEnvironment_class__(){
return stream.space();
}
));
}
));
return stEnvironment.addClassDefinition_((smalltalk.StClassDefinition.name_superclass_instanceVariableNames_classVariableNames_poolDictionaries_category_((each.name()),superDef,instVarNames,(each.classVariablesString()),((each.poolDictionaryNames()).asJavascript()),(each.category()))));
}
));
return stEnvironment;
}
, "instance creation", unescape("fromEnvironment%0D%09%22Initialize%20the%20environment%20from%20the%20current%20live%20%28JS%29%20environment%22%0D%0D%09%7C%20stEnvironment%20%7C%0D%09stEnvironment%20%3A%3D%20self%20new.%0D%09Object%20withAllSubclassesDo%3A%20%5B%3Aeach%20%7C%20%0D%09%09%7C%20superDef%20instVarNames%20%7C%0D%09%09superDef%20%3A%3D%20each%20superclass%20ifNotNil%3A%20%5BstEnvironment%20bindingOf%3A%20each%20superclass%20name%5D.%0D%09%09instVarNames%20%3A%3D%20String%20streamContents%3A%20%5B%20%3Astream%20%7C%20%0D%09%09each%20instVarNames%0D%09%09%09do%3A%20%5B%20%3AvarName%20%7C%20stream%20nextPutAll%3A%20varName%20%5D%0D%09%09%09andBetweenDo%3A%20%5B%20stream%20space%20%5D%20%5D.%0D%09%09stEnvironment%0D%09%09%09addClassDefinition%3A%20%28StClassDefinition%20%0D%09%09%09%09name%3A%20each%20name%0D%09%09%09%09superclass%3A%20superDef%0D%09%09%09%09instanceVariableNames%3A%20instVarNames%0D%09%09%09%09classVariableNames%3A%20each%20classVariablesString%0D%09%09%09%09poolDictionaries%3A%20each%20poolDictionaryNames%20asJavascript%0D%09%09%09%09category%3A%20each%20category%29%0D%09%09%09%22name%3A%20each%20name%20superclass%3A%20superDef%20category%3A%20%27Kernel%27%29%22%5D.%0D%09%5EstEnvironment"));
smalltalk.bind(smalltalk.StEnvironment.$klass, unescape("new"), "$$new", function StEnvironment_class__$$new(){
const self = this; return (smalltalk.superImplementor(smalltalk.StEnvironment.$klass,'$$new').apply(self, [])).initialize();
}
, "instance creation", unescape("new%0D%09%5Esuper%20new%20initialize"));
smalltalk.bind(smalltalk.StEnvironment.$klass, unescape("readBindingsFrom%3A"), "readBindingsFrom_", function StEnvironment_class__readBindingsFrom_(sourceString){
var stEnvironment = nil;
const self = this; stEnvironment=smalltalk.StEnvironment.bootstrap();
stEnvironment.readBindingsFrom_((sourceString.asStream()));
return stEnvironment;
}
, "instance creation", unescape("readBindingsFrom%3A%20sourceString%0D%09%7C%20stEnvironment%20%7C%0D%09stEnvironment%20%3A%3D%20StEnvironment%20bootstrap.%0D%09stEnvironment%20readBindingsFrom%3A%20sourceString%20asStream.%0D%09%5EstEnvironment%0D"));
smalltalk.bind(smalltalk.StEnvironment.$klass, unescape("readFromFilesNamed%3A"), "readFromFilesNamed_", function StEnvironment_class__readFromFilesNamed_(listOfFileNames){
var stEnvironment = nil;
const self = this; stEnvironment=smalltalk.StEnvironment.bootstrap();
stEnvironment.allowUndeclared_(true);
listOfFileNames.do_((function StEnvironment_class__(fileName){
return stEnvironment.readBindingsFromFileNamed_(fileName);
}
));
return stEnvironment;
}
, "instance creation", unescape("readFromFilesNamed%3A%20listOfFileNames%0D%09%7C%20stEnvironment%20%7C%0D%09stEnvironment%20%3A%3D%20StEnvironment%20bootstrap.%0D%09stEnvironment%20allowUndeclared%3A%20true.%0D%09listOfFileNames%20do%3A%20%5B%3AfileName%20%7C%0D%09%09stEnvironment%20readBindingsFromFileNamed%3A%20fileName%5D.%0D%09%5EstEnvironment%0D"));
smalltalk.addClass("StEnvironmentBuilder", smalltalk.StChunkReader, ['environment'], 'Compiler-JS-Support');
smalltalk.StEnvironmentBuilder.$classVariableNames=("");
smalltalk.bind(smalltalk.StEnvironmentBuilder, unescape("compilerClass"), "compilerClass", function StEnvironmentBuilder__compilerClass(){
const self = this; return smalltalk.StCompiler;
}
, "private", unescape("compilerClass%0D%09%5EStCompiler"));
smalltalk.bind(smalltalk.StEnvironmentBuilder, unescape("updateFilePosition%3A"), "updateFilePosition_", function StEnvironmentBuilder__updateFilePosition_(c){
const self = this; self;
return self;
}
, "private", unescape("updateFilePosition%3A%20c%0D"));
smalltalk.bind(smalltalk.StEnvironmentBuilder, unescape("handleChunk%3A"), "handleChunk_", function StEnvironmentBuilder__handleChunk_(chunk){
var result = nil;
const self = this; result=(self.compilerClass()).environment_parseChunk_(self['@environment'],chunk);
result.readChunksThrough_(self);
return self;
}
, "chunk processing", unescape("handleChunk%3A%20chunk%0D%09%22process%20an%20expression%20delimited%20by%20%21%22%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%20self%20compilerClass%20environment%3A%20environment%20parseChunk%3A%20chunk.%0D%09result%20readChunksThrough%3A%20self"));
smalltalk.bind(smalltalk.StEnvironmentBuilder, unescape("processChunk%3A"), "processChunk_", function StEnvironmentBuilder__processChunk_(chunk){
var result = nil;
const self = this; var $early={name:"stReturn"};
try {
if ((chunk.isEmpty()).valueOf()) {return nil};
result=(self.compilerClass()).environment_parseChunk_(self['@environment'],chunk);
(function(){var $1$; $1$ = result; if (nil.isNil_($1$)) { return (function StEnvironmentBuilder__(){
$early.result=nil; throw ($early);
}
)() } else { return $1$; }})();
result.applyTo_(self['@environment']);
return result;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "chunk processing", unescape("processChunk%3A%20chunk%0D%09%22process%20an%20expression%20ending%20in%20%21%22%0D%09%7C%20result%20%7C%0D%09chunk%20isEmpty%20ifTrue%3A%20%5B%5Enil%5D.%0D%09result%20%3A%3D%20self%20compilerClass%20environment%3A%20environment%20parseChunk%3A%20chunk.%0D%09result%20ifNil%3A%20%5B%5Enil%5D.%0D%09result%20applyTo%3A%20environment.%0D%09%5Eresult"));
smalltalk.bind(smalltalk.StEnvironmentBuilder, unescape("processMethodChunks%3Aprotocol%3A"), "processMethodChunks_protocol_", function StEnvironmentBuilder__processMethodChunks_protocol_(methodClass,methodProtocol){
var methodText = nil;
const self = this; while(((function StEnvironmentBuilder__(){
methodText=self.nextChunk();
return (methodText.size())._gt((0));
}
)()).valueOf()){nil};;
return self;
}
, "chunk processing", unescape("processMethodChunks%3A%20methodClass%20protocol%3A%20methodProtocol%0D%09%22Process%20methods%20chunks%20for%20current%20category%20in%20readStream%22%0D%09%7C%20methodText%20%7C%0D%09%5BmethodText%20%3A%3D%20self%20nextChunk.%0D%09%20methodText%20size%20%3E%200%5D%0D%09%09whileTrue%3A%20%5B%5D"));
smalltalk.bind(smalltalk.StEnvironmentBuilder, unescape("environment%3A"), "environment_", function StEnvironmentBuilder__environment_(anEnvironment){
const self = this; self['@environment']=anEnvironment;
return self;
}
, "initialize-release", unescape("environment%3A%20anEnvironment%0D%09environment%20%3A%3D%20anEnvironment"));
smalltalk.StEnvironmentBuilder.$klass.$iVarNames = [];
smalltalk.bind(smalltalk.StEnvironmentBuilder.$klass, unescape("on%3Aenvironment%3A"), "on_environment_", function StEnvironmentBuilder_class__on_environment_(readStream,environment){
var builder = nil;
const self = this; builder=smalltalk.superImplementor(smalltalk.StEnvironmentBuilder.$klass,'on_').apply(self, [readStream]);
builder.environment_(environment);
return builder;
}
, "instance creation", unescape("on%3A%20readStream%20environment%3A%20environment%0D%09%7C%20builder%20%7C%0D%09builder%20%3A%3D%20super%20on%3A%20readStream.%0D%09builder%20environment%3A%20environment.%0D%09%5Ebuilder"));
smalltalk.bind(smalltalk.StEnvironmentBuilder.$klass, unescape("onFileNamed%3Aenvironment%3A"), "onFileNamed_environment_", function StEnvironmentBuilder_class__onFileNamed_environment_(fileName,stEnvironment){
var builder = nil;
const self = this; builder=smalltalk.superImplementor(smalltalk.StEnvironmentBuilder.$klass,'onFileNamed_').apply(self, [fileName]);
builder.environment_(stEnvironment);
return builder;
}
, "instance creation", unescape("onFileNamed%3A%20fileName%20environment%3A%20stEnvironment%0D%09%7C%20builder%20%7C%0D%09builder%20%3A%3D%20super%20onFileNamed%3A%20fileName.%0D%09builder%20environment%3A%20stEnvironment.%0D%09%5Ebuilder"));
smalltalk.addClass("StMetaClassChunk", smalltalk.StChunk, ['classDefinition', 'variables'], 'Compiler-JS-Support');
smalltalk.StMetaClassChunk.$classVariableNames=("");
smalltalk.bind(smalltalk.StMetaClassChunk, unescape("applyTo%3A"), "applyTo_", function StMetaClassChunk__applyTo_(stEnvironment){
const self = this; self['@classDefinition'].instanceVariableNames_(self['@variables']);
stEnvironment.addMetaClassDefinition_(self['@classDefinition']);
return self;
}
, "static compiling", unescape("applyTo%3A%20stEnvironment%0D%09classDefinition%20instanceVariableNames%3A%20variables.%0D%09stEnvironment%20addMetaClassDefinition%3A%20classDefinition"));
smalltalk.bind(smalltalk.StMetaClassChunk, unescape("generateOn%3A"), "generateOn_", function StMetaClassChunk__generateOn_(generator){
const self = this; generator.generateMeta_instanceVariableNames_(self['@classDefinition'],(self['@variables'].subStrings()));
return self;
}
, "static compiling", unescape("generateOn%3A%20generator%0D%09generator%20generateMeta%3A%20classDefinition%20instanceVariableNames%3A%20variables%20subStrings%0D"));
smalltalk.bind(smalltalk.StMetaClassChunk, unescape("receiver%3Aselector%3Aarguments%3A"), "receiver_selector_arguments_", function StMetaClassChunk__receiver_selector_arguments_(receiver,selector,args){
const self = this; if (((nil.is_eqeq_(selector,"instanceVariableNames:"))).valueOf()) {self['@classDefinition']=receiver;
self['@variables']=args.at_((1))};
return self;
}
, "initialize-release", unescape("receiver%3A%20receiver%20selector%3A%20selector%20arguments%3A%20args%0D%09selector%20%3D%3D%20%23instanceVariableNames%3A%0D%09%09ifTrue%3A%20%5B%0D%09%09%09classDefinition%20%3A%3D%20receiver.%0D%09%09%09variables%20%3A%3D%20args%20at%3A%201%5D%0D"));
smalltalk.addClass("StMetaClassDefinition", smalltalk.Object, ['nonMetaClass', 'variables', 'allVariables'], 'Compiler-JS-Support');
smalltalk.StMetaClassDefinition.$classVariableNames=("");
smalltalk.bind(smalltalk.StMetaClassDefinition, unescape("gatherVariables"), "gatherVariables", function StMetaClassDefinition__gatherVariables(){
const self = this; self['@allVariables']=smalltalk.OrderedCollection.$$new();
(function(){var $1$; $1$ = self['@nonMetaClass'].superMeta(); if (!nil.isNil_($1$)) { return (self['@nonMetaClass'].superMeta()).variablesDo_((function StMetaClassDefinition__(varName){
return self['@allVariables'].add_(varName);
}
)) } else { return $1$; }})();
self['@variables'].do_((function StMetaClassDefinition__(varName){
return self['@allVariables'].add_(varName);
}
));
return self;
}
, "compiling", unescape("gatherVariables%0D%09allVariables%20%3A%3D%20OrderedCollection%20new.%0D%09nonMetaClass%20superMeta%20ifNotNil%3A%20%5B%0D%09%09nonMetaClass%20superMeta%20variablesDo%3A%20%5B%3AvarName%20%7C%20allVariables%20add%3A%20varName%5D%5D.%0D%09variables%20do%3A%20%5B%3AvarName%20%7C%20allVariables%20add%3A%20varName%5D"));
smalltalk.bind(smalltalk.StMetaClassDefinition, unescape("variablesDo%3A"), "variablesDo_", function StMetaClassDefinition__variablesDo_(aBlock){
const self = this; (function(){var $1$; $1$ = self['@allVariables']; if (nil.isNil_($1$)) { return self.gatherVariables() } else { return $1$; }})();
self['@allVariables'].do_(aBlock);
return self;
}
, "compiling", unescape("variablesDo%3A%20aBlock%0D%09allVariables%20ifNil%3A%20%5Bself%20gatherVariables%5D.%0D%09allVariables%20do%3A%20aBlock"));
smalltalk.bind(smalltalk.StMetaClassDefinition, unescape("canAssign"), "canAssign", function StMetaClassDefinition__canAssign(){
const self = this; return false;
}
, "testing", unescape("canAssign%0D%09%5Efalse"));
smalltalk.bind(smalltalk.StMetaClassDefinition, unescape("isMeta"), "isMeta", function StMetaClassDefinition__isMeta(){
const self = this; return true;
}
, "testing", unescape("isMeta%0D%09%5Etrue"));
smalltalk.bind(smalltalk.StMetaClassDefinition, unescape("isVariableBinding"), "isVariableBinding", function StMetaClassDefinition__isVariableBinding(){
const self = this; return true;
}
, "testing", unescape("isVariableBinding%0D%09%5Etrue"));
smalltalk.bind(smalltalk.StMetaClassDefinition, unescape("instanceVariableNames%3A"), "instanceVariableNames_", function StMetaClassDefinition__instanceVariableNames_(instVarNames){
const self = this; self['@variables']=instVarNames.subStrings();
return self;
}
, "initialize-release", unescape("instanceVariableNames%3A%20instVarNames%20%0D%09variables%20%3A%3D%20instVarNames%20subStrings"));
smalltalk.bind(smalltalk.StMetaClassDefinition, unescape("nonMetaClass%3AinstanceVariableNames%3A"), "nonMetaClass_instanceVariableNames_", function StMetaClassDefinition__nonMetaClass_instanceVariableNames_(classDefinition,instVarNames){
const self = this; self['@nonMetaClass']=classDefinition;
self.instanceVariableNames_(instVarNames);
return self;
}
, "initialize-release", unescape("nonMetaClass%3A%20classDefinition%20instanceVariableNames%3A%20instVarNames%20%0D%09nonMetaClass%20%3A%3D%20classDefinition.%0D%09self%20instanceVariableNames%3A%20instVarNames"));
smalltalk.bind(smalltalk.StMetaClassDefinition, unescape("bindingOf%3Aenvironment%3A"), "bindingOf_environment_", function StMetaClassDefinition__bindingOf_environment_(varName,stEnvironment){
const self = this; return self['@nonMetaClass'].bindingOf_environment_(varName,stEnvironment);
}
, "accessing", unescape("bindingOf%3A%20varName%20environment%3A%20stEnvironment%0D%09%22Answer%20the%20binding%20of%20some%20variable%20resolved%20in%20the%20scope%20of%20the%20receiver%22%0D%09%5EnonMetaClass%20bindingOf%3A%20varName%20environment%3A%20stEnvironment"));
smalltalk.bind(smalltalk.StMetaClassDefinition, unescape("className"), "className", function StMetaClassDefinition__className(){
const self = this; return self['@nonMetaClass'].metaClassName();
}
, "accessing", unescape("className%0D%09%5EnonMetaClass%20metaClassName"));
smalltalk.bind(smalltalk.StMetaClassDefinition, unescape("theNonMetaClass"), "theNonMetaClass", function StMetaClassDefinition__theNonMetaClass(){
const self = this; return self['@nonMetaClass'];
}
, "accessing", unescape("theNonMetaClass%0D%09%5EnonMetaClass"));
smalltalk.StMetaClassDefinition.$klass.$iVarNames = [];
smalltalk.bind(smalltalk.StMetaClassDefinition.$klass, unescape("nonMetaClass%3A"), "nonMetaClass_", function StMetaClassDefinition_class__nonMetaClass_(classDefinition){
const self = this; return self.nonMetaClass_instanceVariableNames_(classDefinition,"");
}
, "instance creation", unescape("nonMetaClass%3A%20classDefinition%0D%09%5Eself%20nonMetaClass%3A%20classDefinition%20instanceVariableNames%3A%20%27%27%20"));
smalltalk.bind(smalltalk.StMetaClassDefinition.$klass, unescape("nonMetaClass%3AinstanceVariableNames%3A"), "nonMetaClass_instanceVariableNames_", function StMetaClassDefinition_class__nonMetaClass_instanceVariableNames_(classDefinition,instVarNames){
const self = this; return (self.$$new()).nonMetaClass_instanceVariableNames_(classDefinition,instVarNames);
}
, "instance creation", unescape("nonMetaClass%3A%20classDefinition%20instanceVariableNames%3A%20instVarNames%20%0D%09%5Eself%20new%20nonMetaClass%3A%20classDefinition%20instanceVariableNames%3A%20instVarNames%20"));
smalltalk.addClass("StMethodsChunk", smalltalk.StChunk, ['className', 'isMeta', 'protocol', 'timeStamp'], 'Compiler-JS-Support');
smalltalk.StMethodsChunk.$classVariableNames=("");
smalltalk.bind(smalltalk.StMethodsChunk, unescape("readChunksThrough%3A"), "readChunksThrough_", function StMethodsChunk__readChunksThrough_(chunkReader){
const self = this; chunkReader.processMethodChunks_protocol_(self['@className'],self['@protocol']);
return self;
}
, "chunk processing", unescape("readChunksThrough%3A%20chunkReader%0D%09chunkReader%20processMethodChunks%3A%20className%20protocol%3A%20protocol"));
smalltalk.bind(smalltalk.StMethodsChunk, unescape("receiver%3Aselector%3Aarguments%3A"), "receiver_selector_arguments_", function StMethodsChunk__receiver_selector_arguments_(receiver,selector,args){
const self = this; self['@isMeta']=false;
if ((selector._eq("methods")).valueOf()) {self['@className']=receiver;
return self};
if ((selector._eq("methodsFor:")).valueOf()) {self['@className']=receiver;
self['@protocol']=args.at_((1));
return self};
if ((selector._eq("methodsFor:stamp:")).valueOf()) {self['@className']=receiver;
self['@protocol']=args.at_((1));
self['@timeStamp']=args.at_((2));
return self};
self.halt();
return self;
}
, "initialize-release", unescape("receiver%3A%20receiver%20selector%3A%20selector%20arguments%3A%20args%0D%09isMeta%20%3A%3D%20false.%0D%09selector%20%3D%20%23methods%0D%09%09ifTrue%3A%20%5B%0D%09%09%09className%20%3A%3D%20receiver.%0D%09%09%09%5Eself%5D.%0D%09selector%20%3D%20%23methodsFor%3A%0D%09%09ifTrue%3A%20%5B%0D%09%09%09className%20%3A%3D%20receiver.%0D%09%09%09protocol%20%3A%3D%20args%20at%3A%201.%0D%09%09%09%5Eself%5D.%0D%09selector%20%3D%20%23methodsFor%3Astamp%3A%0D%09%09ifTrue%3A%20%5B%0D%09%09%09className%20%3A%3D%20receiver.%0D%09%09%09protocol%20%3A%3D%20args%20at%3A%201.%0D%09%09%09timeStamp%20%3A%3D%20args%20at%3A%202.%0D%09%09%09%5Eself%5D.%0D%09self%20halt%0D%09%0D"));
smalltalk.addClass("StStreamCompiler", smalltalk.StChunkReader, ['environment', 'writeStream', 'generator', 'includeSource'], 'Compiler-JS-Support');
smalltalk.StStreamCompiler.$classVariableNames=("");
smalltalk.bind(smalltalk.StStreamCompiler, unescape("compilerClass"), "compilerClass", function StStreamCompiler__compilerClass(){
const self = this; return smalltalk.StCompiler;
}
, "accessing", unescape("compilerClass%0D%09%5EStCompiler"));
smalltalk.bind(smalltalk.StStreamCompiler, unescape("environment%3A"), "environment_", function StStreamCompiler__environment_(anEnvironment){
const self = this; self['@environment']=anEnvironment;
return self;
}
, "initialize-release", unescape("environment%3A%20anEnvironment%0D%09environment%20%3A%3D%20anEnvironment"));
smalltalk.bind(smalltalk.StStreamCompiler, unescape("writeStream%3A"), "writeStream_", function StStreamCompiler__writeStream_(aStream){
const self = this; self['@writeStream']=aStream;
self['@generator']=smalltalk.JSGenerator.on_(self['@writeStream']);
return self;
}
, "initialize-release", unescape("writeStream%3A%20aStream%0D%09writeStream%20%3A%3D%20aStream.%0D%09generator%20%3A%3D%20JSGenerator%20on%3A%20writeStream"));
smalltalk.bind(smalltalk.StStreamCompiler, unescape("includeSource%3A"), "includeSource_", function StStreamCompiler__includeSource_(aBoolean){
const self = this; self['@includeSource']=aBoolean;
return self;
}
, "compiling", unescape("includeSource%3A%20aBoolean%0D%09includeSource%20%3A%3D%20aBoolean"));
smalltalk.bind(smalltalk.StStreamCompiler, unescape("compile"), "compile", function StStreamCompiler__compile(){
const self = this; self['@readStream'].reset();
(function StStreamCompiler__(){
return self.readAllChunks();
}
).ensure_((function StStreamCompiler__(){
return self['@writeStream'].close();
}
));
return self;
}
, "chunk processing", unescape("compile%0D%22%0D%09%7C%20environmentBuilder%20%7C%0D%09environmentBuilder%20%3A%3D%20StEnvironmentBuilder%20on%3A%20readStream%20environment%3A%20environment.%0D%09environmentBuilder%20writeStream%3A%20writeStream.%0D%09environmentBuilder%20readAllChunks.%0D%22%0D%09readStream%20reset.%0D%09%5Bself%20readAllChunks%5D%20ensure%3A%20%5BwriteStream%20close%5D"));
smalltalk.bind(smalltalk.StStreamCompiler, unescape("handleChunk%3A"), "handleChunk_", function StStreamCompiler__handleChunk_(chunk){
var result = nil;
const self = this; result=(self.compilerClass()).environment_parseChunk_(self['@environment'],chunk);
result.readChunksThrough_(self);
return self;
}
, "chunk processing", unescape("handleChunk%3A%20chunk%0D%09%22process%20an%20expression%20delimited%20by%20%21%22%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%20self%20compilerClass%20environment%3A%20environment%20parseChunk%3A%20chunk.%0D%09result%20readChunksThrough%3A%20self"));
smalltalk.bind(smalltalk.StStreamCompiler, unescape("processChunk%3A"), "processChunk_", function StStreamCompiler__processChunk_(chunk){
var result = nil;
const self = this; var $early={name:"stReturn"};
try {
if ((chunk.isEmpty()).valueOf()) {return nil};
result=(self.compilerClass()).environment_parseChunk_(self['@environment'],chunk);
(function(){var $1$; $1$ = result; if (nil.isNil_($1$)) { return (function StStreamCompiler__(){
$early.result=nil; throw ($early);
}
)() } else { return $1$; }})();
result.applyTo_(self['@environment']);
(function(){var $2$; $2$ = self['@generator']; if (!nil.isNil_($2$)) { return result.generateOn_(self['@generator']) } else { return $2$; }})();
result;
return self;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "chunk processing", unescape("processChunk%3A%20chunk%0D%09%7C%20result%20%7C%0D%09chunk%20isEmpty%20ifTrue%3A%20%5B%5Enil%5D.%0D%09result%20%3A%3D%20self%20compilerClass%20environment%3A%20environment%20parseChunk%3A%20chunk.%0D%09result%20ifNil%3A%20%5B%5Enil%5D.%0D%09result%20applyTo%3A%20environment.%0D%09generator%20ifNotNil%3A%20%5Bresult%20generateOn%3A%20generator%5D.%0D%09result"));
smalltalk.bind(smalltalk.StStreamCompiler, unescape("processMethodChunk%3Aclass%3Aprotocol%3A"), "processMethodChunk_class_protocol_", function StStreamCompiler__processMethodChunk_class_protocol_(methodText,methodClass,methodProtocol){
const self = this; ((self.compilerClass()).$$new()).compileMethodChunk_protocol_class_environment_includeSource_generateOn_(methodText,methodProtocol,methodClass,self['@environment'],self['@includeSource'],self['@generator']);
return self;
}
, "chunk processing", unescape("processMethodChunk%3A%20methodText%20class%3A%20methodClass%20protocol%3A%20methodProtocol%0D%09self%20compilerClass%20new%0D%09%09compileMethodChunk%3A%20methodText%0D%09%09protocol%3A%20methodProtocol%0D%09%09class%3A%20methodClass%0D%09%09environment%3A%20environment%0D%09%09includeSource%3A%20includeSource%0D%09%09generateOn%3A%20generator"));
smalltalk.StStreamCompiler.$klass.$iVarNames = [];
smalltalk.bind(smalltalk.StStreamCompiler.$klass, unescape("on%3Aenvironment%3A"), "on_environment_", function StStreamCompiler_class__on_environment_(readStream,environment){
var builder = nil;
const self = this; builder=smalltalk.superImplementor(smalltalk.StStreamCompiler.$klass,'on_').apply(self, [readStream]);
builder.environment_(environment);
return builder;
}
, "instance creation", unescape("on%3A%20readStream%20environment%3A%20environment%0D%09%7C%20builder%20%7C%0D%09builder%20%3A%3D%20super%20on%3A%20readStream.%0D%09builder%20environment%3A%20environment.%0D%09%5Ebuilder"));
smalltalk.bind(smalltalk.StStreamCompiler.$klass, unescape("onFileNamed%3Aenvironment%3A"), "onFileNamed_environment_", function StStreamCompiler_class__onFileNamed_environment_(fileName,stEnvironment){
var builder = nil;
const self = this; builder=smalltalk.superImplementor(smalltalk.StStreamCompiler.$klass,'onFileNamed_').apply(self, [fileName]);
builder.environment_(stEnvironment);
return builder;
}
, "instance creation", unescape("onFileNamed%3A%20fileName%20environment%3A%20stEnvironment%0D%09%7C%20builder%20%7C%0D%09builder%20%3A%3D%20super%20onFileNamed%3A%20fileName.%0D%09builder%20environment%3A%20stEnvironment.%0D%09%5Ebuilder"));
smalltalk.bind(smalltalk.StStreamCompiler.$klass, unescape("compile%3Ain%3A"), "compile_in_", function StStreamCompiler_class__compile_in_(sourceString,stEnvironment){
var compiler = nil;
var readStream = nil;
var writeStream = nil;
const self = this; readStream=sourceString.readStream();
compiler=self.on_environment_(readStream,stEnvironment);
compiler.includeSource_(true);
writeStream="".writeStream();
compiler.writeStream_(writeStream);
compiler.compile();
return writeStream.contents();
}
, "compiling", unescape("compile%3A%20sourceString%20in%3A%20stEnvironment%0D%09%7C%20compiler%20readStream%20writeStream%20%7C%0D%09readStream%20%3A%3D%20sourceString%20readStream.%0D%09compiler%20%3A%3D%20self%20on%3A%20readStream%20environment%3A%20stEnvironment.%0D%09compiler%20includeSource%3A%20true.%0D%09writeStream%20%3A%3D%20%27%27%20writeStream.%0D%09compiler%20writeStream%3A%20writeStream.%0D%09compiler%20compile.%0D%09%5EwriteStream%20contents"));
smalltalk.bind(smalltalk.StStreamCompiler.$klass, unescape("compile%3Ain%3AincludeSource%3A"), "compile_in_includeSource_", function StStreamCompiler_class__compile_in_includeSource_(sourceString,stEnvironment,aBoolean){
var compiler = nil;
var readStream = nil;
var writeStream = nil;
const self = this; readStream=sourceString.asStream();
compiler=self.on_environment_(readStream,stEnvironment);
compiler.includeSource_(aBoolean);
writeStream="".writeStream();
compiler.writeStream_(writeStream);
compiler.compile();
return writeStream.contents();
}
, "compiling", unescape("compile%3A%20sourceString%20in%3A%20stEnvironment%20includeSource%3A%20aBoolean%0D%09%7C%20compiler%20readStream%20writeStream%20%7C%0D%09readStream%20%3A%3D%20sourceString%20asStream.%0D%09compiler%20%3A%3D%20self%20on%3A%20readStream%20environment%3A%20stEnvironment.%0D%09compiler%20includeSource%3A%20aBoolean.%0D%09writeStream%20%3A%3D%20%27%27%20writeStream.%0D%09compiler%20writeStream%3A%20writeStream.%0D%09compiler%20compile.%0D%09%5EwriteStream%20contents"));
smalltalk.addClass("StSubclassChunk", smalltalk.StChunk, ['className', 'isMeta', 'superclassName', 'instVarNames', 'classVarNames', 'pools', 'category'], 'Compiler-JS-Support');
smalltalk.StSubclassChunk.$classVariableNames=("");
smalltalk.bind(smalltalk.StSubclassChunk, unescape("applyTo%3A"), "applyTo_", function StSubclassChunk__applyTo_(stEnvironment){
var classDefinition = nil;
var superclass = nil;
const self = this; superclass=(function(){var $1$; $1$ = self['@superclassName']; if (!nil.isNil_($1$)) { return stEnvironment.bindingOf_(self['@superclassName']) } else { return $1$; }})();
classDefinition=smalltalk.StClassDefinition.name_superclass_instanceVariableNames_classVariableNames_poolDictionaries_category_(self['@className'],superclass,self['@instVarNames'],self['@classVarNames'],self['@pools'],self['@category']);
stEnvironment.addClassDefinition_(classDefinition);
return self;
}
, "static compiling", unescape("applyTo%3A%20stEnvironment%0D%09%7C%20classDefinition%20superclass%20%7C%0D%09superclass%20%3A%3D%20superclassName%20ifNotNil%3A%20%5BstEnvironment%20bindingOf%3A%20superclassName%5D.%0D%09classDefinition%20%3A%3D%20StClassDefinition%0D%09%09name%3A%20className%0D%09%09superclass%3A%20superclass%0D%09%09instanceVariableNames%3A%20instVarNames%0D%09%09classVariableNames%3A%20classVarNames%0D%09%09poolDictionaries%3A%20pools%0D%09%09category%3A%20category.%0D%09stEnvironment%20addClassDefinition%3A%20classDefinition"));
smalltalk.bind(smalltalk.StSubclassChunk, unescape("generateOn%3A"), "generateOn_", function StSubclassChunk__generateOn_(generator){
const self = this; var $early={name:"stReturn"};
try {
(function(){var $1$; $1$ = self['@superclassName']; if (nil.isNil_($1$)) { return (function StSubclassChunk__(){
$early.result=self; throw ($early);
}
)() } else { return $1$; }})();
if ((self['@isMeta']).valueOf()) {generator.generateMetaFor_instanceVariableNames_((self['@className'].asString()),(self['@instVarNames'].subStrings()))} else {generator.generate_superclass_instanceVariableNames_classVariableNames_poolDictionaries_category_((self['@className'].asString()),(self['@superclassName'].asString()),(self['@instVarNames'].subStrings()),(self['@classVarNames'].subStrings()),(self['@pools'].subStrings()),(self['@category'].asString()))};
return self;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "static compiling", unescape("generateOn%3A%20generator%0D%09superclassName%20ifNil%3A%20%5B%5Eself%5D.%0D%09isMeta%0D%09%09ifTrue%3A%20%5Bgenerator%20generateMetaFor%3A%20className%20asString%20instanceVariableNames%3A%20instVarNames%20subStrings%5D%0D%09%09ifFalse%3A%20%5B%0D%09%09%09generator%0D%09%09%09%09generate%3A%20className%20asString%0D%09%09%09%09superclass%3A%20superclassName%20asString%0D%09%09%09%09instanceVariableNames%3A%20instVarNames%20subStrings%0D%09%09%09%09classVariableNames%3A%20classVarNames%20subStrings%0D%09%09%09%09poolDictionaries%3A%20pools%20subStrings%0D%09%09%09%09category%3A%20category%20asString%5D"));
smalltalk.bind(smalltalk.StSubclassChunk, unescape("receiver%3Aselector%3Aarguments%3A"), "receiver_selector_arguments_", function StSubclassChunk__receiver_selector_arguments_(receiver,selector,args){
const self = this; self['@instVarNames']="";
self['@classVarNames']="";
self['@pools']="";
self['@isMeta']=false;
self['@className']=args.at_((1));
self['@superclassName']=(function(){var $1$; $1$ = receiver; if (!nil.isNil_($1$)) { return receiver.className() } else { return $1$; }})();
if (((nil.is_eqeq_(selector,"subclass:"))).valueOf()) {return self};
if (((nil.is_eqeq_(selector,"subclass:instanceVariableNames:"))).valueOf()) {self['@instVarNames']=args.at_((2));
return self};
if (((nil.is_eqeq_(selector,"subclass:category:"))).valueOf()) {return self};
if (((nil.is_eqeq_(selector,"subclass:instanceVariableNames:category:"))).valueOf()) {self['@instVarNames']=args.at_((2));
self['@category']=args.at_((3));
return self};
if (((nil.is_eqeq_(selector,"subclass:instanceVariableNames:classVariableNames:category:"))).valueOf()) {self['@instVarNames']=args.at_((2));
self['@classVarNames']=args.at_((3));
self['@category']=args.at_((4));
return self};
if (((nil.is_eqeq_(selector,"subclass:instanceVariableNames:classVariableNames:poolDictionaries:"))).valueOf()) {self['@instVarNames']=args.at_((2));
self['@classVarNames']=args.at_((3));
self['@pools']=args.at_((4));
return self};
if ((((nil.is_eqeq_(selector,"subclass:instanceVariableNames:classVariableNames:poolDictionaries:category:"))).or_((function StSubclassChunk__(){
return (nil.is_eqeq_(selector,"variableSubclass:instanceVariableNames:classVariableNames:poolDictionaries:category:"));
}
))).valueOf()) {self['@instVarNames']=args.at_((2));
self['@classVarNames']=args.at_((3));
self['@pools']=args.at_((4));
self['@category']=args.at_((5));
return self};
self.halt();
return self;
}
, "initialize-release", unescape("receiver%3A%20receiver%20selector%3A%20selector%20arguments%3A%20args%0D%09instVarNames%20%3A%3D%20%27%27.%0D%09classVarNames%20%3A%3D%20%27%27.%0D%09pools%20%3A%3D%20%27%27.%0D%09isMeta%20%3A%3D%20false.%0D%09className%20%3A%3D%20args%20at%3A%201.%0D%09superclassName%20%3A%3D%20receiver%20ifNotNil%3A%20%5Breceiver%20className%5D.%0D%09selector%20%3D%3D%20%23subclass%3A%0D%09%09ifTrue%3A%20%5B%0D%09%09%09%5Eself%5D.%0D%09selector%20%3D%3D%20%23subclass%3AinstanceVariableNames%3A%0D%09%09ifTrue%3A%20%5B%0D%09%09%09instVarNames%20%3A%3D%20args%20at%3A%202.%0D%09%09%09%5Eself%5D.%0D%09selector%20%3D%3D%20%23subclass%3Acategory%3A%0D%09%09ifTrue%3A%20%5B%0D%09%09%09%5Eself%5D.%0D%09selector%20%3D%3D%20%23subclass%3AinstanceVariableNames%3Acategory%3A%0D%09%09ifTrue%3A%20%5B%0D%09%09%09instVarNames%20%3A%3D%20args%20at%3A%202.%0D%09%09%09category%20%3A%3D%20args%20at%3A%203.%0D%09%09%09%5Eself%5D.%0D%09selector%20%3D%3D%20%23subclass%3AinstanceVariableNames%3AclassVariableNames%3Acategory%3A%0D%09%09ifTrue%3A%20%5B%0D%09%09%09instVarNames%20%3A%3D%20args%20at%3A%202.%0D%09%09%09classVarNames%20%3A%3D%20args%20at%3A%203.%0D%09%09%09category%20%3A%3D%20args%20at%3A%204.%0D%09%09%09%5Eself%5D.%0D%09selector%20%3D%3D%20%23subclass%3AinstanceVariableNames%3AclassVariableNames%3ApoolDictionaries%3A%0D%09%09ifTrue%3A%20%5B%0D%09%09%09instVarNames%20%3A%3D%20args%20at%3A%202.%0D%09%09%09classVarNames%20%3A%3D%20args%20at%3A%203.%0D%09%09%09pools%20%3A%3D%20args%20at%3A%204.%0D%09%09%09%5Eself%5D.%0D%09%28selector%20%3D%3D%20%23subclass%3AinstanceVariableNames%3AclassVariableNames%3ApoolDictionaries%3Acategory%3A%0D%09%09or%3A%20%5Bselector%20%3D%3D%20%23variableSubclass%3AinstanceVariableNames%3AclassVariableNames%3ApoolDictionaries%3Acategory%3A%5D%29%0D%09%09ifTrue%3A%20%5B%0D%09%09%09instVarNames%20%3A%3D%20args%20at%3A%202.%0D%09%09%09classVarNames%20%3A%3D%20args%20at%3A%203.%0D%09%09%09pools%20%3A%3D%20args%20at%3A%204.%0D%09%09%09category%20%3A%3D%20args%20at%3A%205.%0D%09%09%09%5Eself%5D.%0D%09self%20halt%0D"));
