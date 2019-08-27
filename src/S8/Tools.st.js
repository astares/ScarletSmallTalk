smalltalk.bind(smalltalk.String, unescape("outputToFile%3A"), "outputToFile_", function String__outputToFile_(fileName){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKTools.primWriteToFile(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; self.primitiveFailed();
return self;
}
, "Snapshot-io", unescape("outputToFile%3A%20fileName%0D%09%22%20Save%20the%20receiver%27s%20contents%20onto%20a%20file%20at%20fileName.%20%22%0D%0D%20%09%3Cprimitive%3A%20%27primWriteToFile%27%20module%3A%20%27SKTools%27%3E%0D%20%09self%20primitiveFailed"));
smalltalk.bind(smalltalk.String, unescape("appendToFile%3A"), "appendToFile_", function String__appendToFile_(fileName){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKTools.primAppendToFile(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; self.primitiveFailed();
return self;
}
, "Snapshot-io", unescape("appendToFile%3A%20fileName%0D%09%22%20Append%20the%20receiver%27s%20contents%20onto%20a%20file%20at%20fileName.%20%22%0D%0D%20%09%3Cprimitive%3A%20%27primAppendToFile%27%20module%3A%20%27SKTools%27%3E%0D%20%09self%20primitiveFailed"));
smalltalk.bind(smalltalk.Object, unescape("isFile%3AolderThan%3A"), "isFile_olderThan_", function Object__isFile_olderThan_(fileName,referenceFileName){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKTools.primFileOlderThan(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return true;
}
, "Builders-emmiting", unescape("isFile%3A%20fileName%20olderThan%3A%20referenceFileName%0D%09%22Return%20true%20if%20the%20file%20at%20pathName%20is%20older%20than%20file%20at%20referenceFileName.%22%0D%20%09%3Cprimitive%3A%20%27primFileOlderThan%27%20module%3A%20%27SKTools%27%3E%0D%20%09%5Etrue"));
smalltalk.bind(smalltalk.Object, unescape("fileContents%3A"), "fileContents_", function Object__fileContents_(fileName){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKTools.primFileContents(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; return false;
}
, "Builders-emmiting", unescape("fileContents%3A%20fileName%0D%0D%20%09%3Cprimitive%3A%20%27primFileContents%27%20module%3A%20%27SKTools%27%3E%0D%20%09%5Efalse"));
smalltalk.bind(smalltalk.Object, unescape("emmit%3AstartingWith%3A"), "emmit_startingWith_", function Object__emmit_startingWith_(fileName,initial){
var output = nil;
var cr = nil;
var jsFileName = nil;
const self = this; var $early={name:"stReturn"};
try {
jsFileName=fileName._comma(".js");
if ((self.isFile_olderThan_(fileName,jsFileName)).valueOf()) {self.fileInJS_(jsFileName);
return self.fileContents_(jsFileName)};
output=initial;
cr=unescape("%0D");
self.print_(((unescape("//%20emmit%28%22")._comma(fileName))._comma(unescape("%22%29"))));
(function Object__(){
self.printingWith_do_((function Object__(what){
return output=((nil.isNil_(output))).ifTrue_ifFalse_((function Object__(){
return what;
}
),(function Object__(){
return (output._comma(cr))._comma(what);
}
));
}
),(function Object__(){
return self.fileIn_(fileName);
}
));
return output.outputToFile_(jsFileName);
}
).on_do_(smalltalk.Error,(function Object__(ex){
(((output.asString())._comma(cr))._comma((ex.toString()))).outputToFile_((fileName._comma(".error.txt")));
self.print_((ex.toString()));
$early.result=ex.toString(); throw ($early);
}
));
return output;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "Builders-emmiting", unescape("emmit%3A%20fileName%20startingWith%3A%20initial%0D%09%22%20FileIn%20the%20contents%20of%20file%20at%20fileName%20redirecting%20output%28emmited%20code%29%20to%20a%20.js%20file.%20%22%0D%0D%09%7C%20output%20cr%20jsFileName%20%7C%0D%09jsFileName%20%3A%3D%20fileName%2C%27.js%27.%0D%09%28self%20isFile%3A%20fileName%20olderThan%3A%20jsFileName%29%20ifTrue%3A%20%5B%0D%09%09self%20fileInJS%3A%20jsFileName.%0D%09%09%5Eself%20fileContents%3A%20jsFileName%0D%09%5D.%0D%09output%20%3A%3D%20initial.%0D%09cr%20%3A%3D%20%27%0D%27.%0D%09self%20print%3A%20%27//%20emmit%28%22%27%2CfileName%2C%27%22%29%27.%0D%09%5Bself%20printingWith%3A%20%5B%3Awhat%7C%0D%09%09output%20%3A%3D%20output%20isNil%0D%09%09%09ifTrue%3A%20%5Bwhat%5D%0D%09%09%09ifFalse%3A%20%5B%20output%2C%20cr%20%2Cwhat%5D%0D%09%09%5D%20do%3A%20%5Bself%20fileIn%3A%20fileName%5D.%0D%09output%20outputToFile%3A%20jsFileName.%0D%09%5D%20on%3A%20Error%20do%3A%20%5B%3Aex%7C%0D%09%09%28output%20asString%20%2Ccr%20%2Cex%20toString%29%0D%09%09%09outputToFile%3A%20fileName%2C%27.error.txt%27.%0D%09%09%09self%20print%3A%20ex%20toString.%0D%09%09%09%5Eex%20toString%0D%09%5D.%0D%09%5Eoutput"));
smalltalk.bind(smalltalk.Object, unescape("emmit%3A"), "emmit_", function Object__emmit_(fileName){
const self = this; if ((fileName.isString()).not()) {return (fileName.asArray()).emmit()};
return self.emmit_startingWith_(fileName,nil);
}
, "Builders-emmiting", unescape("emmit%3A%20fileName%0D%09%22%20FileIn%20the%20contents%20of%20file%20at%20fileName%20redirecting%20output%28emmited%20code%29%20to%20a%20.js%20file.%20%22%0D%0D%09fileName%20isString%20ifFalse%3A%20%5B%20%5EfileName%20asArray%20emmit%20%5D.%0D%09%5Eself%20emmit%3A%20fileName%20startingWith%3A%20nil"));
smalltalk.bind(smalltalk.Collection, unescape("emmit"), "emmit", function Collection__emmit(){
const self = this; return self.inject_into_("",(function Collection__(total,each){
return total._comma((self.emmit_(each)));
}
));
}
, "Builders-emmiting", unescape("emmit%0D%09%22%20Emmit%28fileIn%20%26%20save%20generated%20code%20of%29%20the%20fileNames%20in%20the%20receiver.%20%22%0D%0D%09%5Eself%20inject%3A%20%27%27%20into%3A%20%5B%3Atotal%20%3Aeach%7C%20total%20%2C%28self%20emmit%3A%20each%29%20%5D"));
smalltalk.bind(smalltalk.Collection, unescape("emmitSt"), "emmitSt", function Collection__emmitSt(){
const self = this; return (self.collect_((function Collection__(module){
return module._comma(".st");
}
))).emmit();
}
, "Builders-emmiting", unescape("emmitSt%0D%09%22%20Emmit%20the%20code%20of%20modules%20%28.st%20files%29%20in%20the%20receiver.%20%22%0D%0D%09%5E%28self%20collect%3A%20%5B%3Amodule%7C%20module%20%2C%27.st%27%20%5D%29%20emmit"));
smalltalk.bind(smalltalk.Stream, unescape("nextChunk"), "nextChunk", function Stream__nextChunk(){
var result = nil;
const self = this; result=self.upTo_(unescape("%21"));
while(((self.peek())._eq(unescape("%21"))).valueOf()){self.next();
result=(result._comma(unescape("%21")))._comma((self.upTo_(unescape("%21"))))};;
return result.trimFirst_((function Stream__(c){
return (c.asciiValue())._lt_eq((32));
}
));
}
, "Tools-fileIn", unescape("nextChunk%0D%09%22%20FileIn%20-%20Return%20the%20next%20chunk%20read%20from%20the%20receiver.%0D%09Trailing%20non-printing%20characters%20are%20skipped.%20%22%0D%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%20self%20upTo%3A%20%24%21.%0D%09%5B%20self%20peek%20%3D%20%24%21%20%5D%20whileTrue%3A%20%5B%0D%09%09self%20next.%0D%09%09result%20%3A%3D%20result%2C%20%27%21%27%2C%20%28self%20upTo%3A%20%24%21%29%0D%09%5D.%0D%09%5Eresult%20trimFirst%3A%20%5B%3Ac%7C%20c%20asciiValue%20%3C%3D%2032%20%5D"));
smalltalk.bind(smalltalk.Stream, unescape("fileInto%3A"), "fileInto_", function Stream__fileInto_(aReceiver){
var scanner = nil;
const self = this; while((self.atEnd()).not()){if (((nil.isNil_(scanner))).valueOf()) {scanner=aReceiver};
scanner=scanner.scanFrom_(self)};;
return scanner;
}
, "Tools-fileIn", unescape("fileInto%3A%20aReceiver%0D%09%22%20FileIn%20-%20FileIn%20the%20receiver%27s%20contents%20%28in%20chunk%20format%29%20using%20aReceiver%20as%20default%20scanner.%20%22%0D%0D%09%7C%20scanner%20%7C%0D%09%5Bself%20atEnd%5D%20whileFalse%3A%20%5B%0D%09%09scanner%20isNil%20ifTrue%3A%20%5B%20scanner%20%3A%3D%20aReceiver%20%5D.%0D%09%09scanner%20%3A%3D%20scanner%20scanFrom%3A%20self%0D%09%5D.%0D%09%5Escanner"));
smalltalk.bind(smalltalk.Stream, unescape("fileIn"), "fileIn", function Stream__fileIn(){
const self = this; return self.fileInto_(nil);
}
, "Tools-fileIn", unescape("fileIn%0D%09%22%20FileIn%20-%20FileIn%20the%20receiver%27s%20contents%20%28in%20chunk%20format%29.%20%22%0D%0D%09%5Eself%20fileInto%3A%20nil"));
smalltalk.bind(smalltalk.Stream, unescape("nextChunkPut%3A"), "nextChunkPut_", function Stream__nextChunkPut_(aString){
var eoc = nil;
var parts = nil;
const self = this; eoc=unescape("%21");
if ((((nil.isNil_(aString)===false)).and_((function Stream__(){
return aString.notEmpty();
}
))).valueOf()) {(aString.asArrayOfSubstringsSeparatedBy_(eoc)).do_separatedBy_((function Stream__(each){
return self.nextPutAll_(each);
}
),(function Stream__(){
return self.nextPutAll_((eoc._comma(eoc)));
}
))} else {self.nextPut_(" ")};
self.nextPut_(eoc);
return aString;
}
, "Tools-fileOut", unescape("nextChunkPut%3A%20aString%0D%09%22%20Output%20aString%20in%20chunk%20format.%20%22%0D%0D%09%7C%20eoc%20parts%20%7C%0D%09eoc%20%3A%3D%20%24%21.%0D%09%28aString%20notNil%20and%3A%20%5BaString%20notEmpty%5D%29%20ifTrue%3A%20%5B%0D%09%09%28aString%20asArrayOfSubstringsSeparatedBy%3A%20eoc%29%0D%09%09%09do%3A%20%5B%3Aeach%7C%20self%20nextPutAll%3A%20each%20%5D%0D%09%09%09separatedBy%3A%20%5B%20self%20nextPutAll%3A%20eoc%2Ceoc%20%5D.%0D%09%5D%20ifFalse%3A%20%5B%20self%20nextPut%3A%20%24%20%5D.%0D%09self%20nextPut%3A%20eoc.%0D%09%5EaString"));
smalltalk.bind(smalltalk.Object, unescape("scanFrom%3A"), "scanFrom_", function Object__scanFrom_(aStream){
var chunk = nil;
const self = this; chunk=aStream.nextChunk();
if ((chunk.isEmpty()).valueOf()) {return nil};
return chunk.evaluateIn_(self);
}
, "Tools-fileIn", unescape("scanFrom%3A%20aStream%0D%09%22%20FileIn%20-%20Return%20the%20result%20of%20evaluating%20the%20next%20chunk%20of%20data%20from%20aStream.%0D%09The%20method%20can%20be%20refined%20by%20chunk%20readers%20to%20support%20custom%20fileIn%20features.%0D%09Must%20return%20the%20next%20reader%20to%20use%20for%20reading%20remaining%20contents%20from%20aStream.%0D%09%22%0D%0D%09%7C%20chunk%20%7C%0D%09chunk%20%3A%3D%20aStream%20nextChunk.%0D%09chunk%20isEmpty%20ifTrue%3A%20%5B%20%5Enil%20%5D.%0D%09%5Echunk%20evaluateIn%3A%20self"));
smalltalk.addClass("FileInReader", smalltalk.Object, [], 'nil');
smalltalk.FileInReader.$classVariableNames=("");
smalltalk.bind(smalltalk.FileInReader, unescape("scanFrom%3A"), "scanFrom_", function FileInReader__scanFrom_(aStream){
const self = this; return self.subclassResponsibility_("scanFrom:");
}
, "fileIn", unescape("scanFrom%3A%20aStream%0D%09%22%20FileIn%20-%20Return%20the%20result%20of%20evaluating%20the%20next%20chunk%20of%20data%20from%20aStream.%0D%09The%20method%20must%20be%20implemented%20by%20chunk%20readers%20to%20support%20custom%20fileIn%20features.%0D%09%22%0D%0D%09%5Eself%20subclassResponsibility%3A%20%23scanFrom%3A"));
smalltalk.addClass("ChunkReader", smalltalk.FileInReader, ['actionBlock', 'terminationBlock'], 'Tools-FileIn');
smalltalk.ChunkReader.$classVariableNames=("");
smalltalk.bind(smalltalk.ChunkReader.$klass, unescape("doing%3Auntil%3A"), "doing_until_", function ChunkReader_class__doing_until_(aBlock,terminationBlock){
const self = this; return (function ChunkReader_class__($1$){
$1$.actionBlock_(aBlock);
$1$.terminationBlock_(terminationBlock);
return $1$.yourself()}
)(self.$$new());
}
, "instantiation", unescape("doing%3A%20aBlock%20until%3A%20terminationBlock%0D%09%22%20Return%20an%20instance%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20new%0D%09%09actionBlock%3A%20aBlock%3B%0D%09%09terminationBlock%3A%20terminationBlock%3B%0D%09%09yourself"));
smalltalk.bind(smalltalk.ChunkReader.$klass, unescape("doing%3A"), "doing_", function ChunkReader_class__doing_(aBlock){
const self = this; return self.doing_until_(aBlock,(function ChunkReader_class__(){
return true;
}
));
}
, "instantiation", unescape("doing%3A%20aBlock%0D%09%22%20Return%20an%20instance%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20doing%3A%20aBlock%20until%3A%20%5B%20true%20%5D"));
smalltalk.bind(smalltalk.ChunkReader.$klass, unescape("until%3A"), "until_", function ChunkReader_class__until_(terminationBlock){
const self = this; return self.doing_until_(nil,terminationBlock);
}
, "instantiation", unescape("until%3A%20terminationBlock%0D%09%22%20Return%20an%20instance%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20doing%3A%20nil%20until%3A%20terminationBlock"));
smalltalk.bind(smalltalk.ChunkReader.$klass, unescape("ignore"), "ignore", function ChunkReader_class__ignore(){
const self = this; return self.$$new();
}
, "instantiation", unescape("ignore%0D%09%22%20Return%20an%20instance%20of%20the%20receiver.%0D%09The%20returned%20reader%20will%20ignore/absorb%20next%20chunk.%0D%09%22%0D%0D%09%5Eself%20new"));
smalltalk.bind(smalltalk.ChunkReader.$klass, unescape("javascriptChunk"), "javascriptChunk", function ChunkReader_class__javascriptChunk(){
const self = this; return self.doing_((function ChunkReader_class__(aStream){
return (smalltalk.Smalltalk.current()).eval_((aStream.nextChunk()));
}
));
}
, "instantiation", unescape("javascriptChunk%0D%09%22%20Return%20an%20instance%20of%20the%20receiver.%0D%09The%20returned%20reader%20will%20evaluate%20next%20chunk%20as%20javascript%20code%20%28in%20global%20context%29.%0D%09%22%0D%0D%09%5Eself%20doing%3A%20%5B%3AaStream%7C%20Smalltalk%20current%20eval%3A%20aStream%20nextChunk%20%5D"));
smalltalk.bind(smalltalk.ChunkReader.$klass, unescape("javascript"), "javascript", function ChunkReader_class__javascript(){
const self = this; return self.doing_((function ChunkReader_class__(aStream){
return (smalltalk.Smalltalk.current()).eval_((aStream.upToEnd()));
}
));
}
, "instantiation", unescape("javascript%0D%09%22%20Return%20an%20instance%20of%20the%20receiver.%0D%09The%20returned%20reader%20will%20evaluate%20following%20contents%20as%20javascript%20code%20%28in%20global%20context%29.%0D%09The%20stream%20will%20be%20consumed%20up%20to%20end.%0D%09%22%0D%0D%09%5Eself%20doing%3A%20%5B%3AaStream%7C%20Smalltalk%20current%20eval%3A%20aStream%20upToEnd%20%5D"));
smalltalk.bind(smalltalk.ChunkReader, unescape("actionBlock"), "actionBlock", function ChunkReader__actionBlock(){
const self = this; return self['@actionBlock'];
}
, "accessing", unescape("actionBlock%0D%09%22%20Return%20the%20actionBlock%20of%20the%20receiver.%20%22%0D%0D%09%5EactionBlock"));
smalltalk.bind(smalltalk.ChunkReader, unescape("actionBlock%3A"), "actionBlock_", function ChunkReader__actionBlock_(aBlock){
const self = this; self['@actionBlock']=aBlock;
return self;
}
, "accessing", unescape("actionBlock%3A%20aBlock%0D%09%22%20Set%20the%20actionBlock%20of%20the%20receiver.%20%22%0D%0D%09actionBlock%20%3A%3D%20aBlock"));
smalltalk.bind(smalltalk.ChunkReader, unescape("terminationBlock"), "terminationBlock", function ChunkReader__terminationBlock(){
const self = this; return self['@terminationBlock'];
}
, "accessing", unescape("terminationBlock%0D%09%22%20Return%20the%20terminationBlock%20of%20the%20receiver.%20%22%0D%0D%09%5EterminationBlock"));
smalltalk.bind(smalltalk.ChunkReader, unescape("terminationBlock%3A"), "terminationBlock_", function ChunkReader__terminationBlock_(aBlock){
const self = this; self['@terminationBlock']=aBlock;
return self;
}
, "accessing", unescape("terminationBlock%3A%20aBlock%0D%09%22%20Set%20the%20terminationBlock%20of%20the%20receiver.%20%22%0D%0D%09terminationBlock%20%3A%3D%20aBlock"));
smalltalk.bind(smalltalk.ChunkReader, unescape("scanFrom%3A"), "scanFrom_", function ChunkReader__scanFrom_(aStream){
var chunk = nil;
const self = this; if (((nil.isNil_(self.actionBlock()))).valueOf()) {chunk=aStream.nextChunk();
if ((chunk.isEmpty()).valueOf()) {return nil}} else {(self.actionBlock()).value_(aStream)};
if ((((nil.isNil_(self.terminationBlock()))).or_((function ChunkReader__(){
return (nil.is_eqeq_(true,(self.terminationBlock()).value()));
}
))).valueOf()) {return nil};
return self;
}
, "fileIn", unescape("scanFrom%3A%20aStream%0D%09%22%20Scan%20the%20next%20chunk%20of%20data%20from%20aStream.%20%22%0D%0D%09%7C%20chunk%20%7C%0D%09self%20actionBlock%20isNil%20ifTrue%3A%20%5B%0D%09%09chunk%20%3A%3D%20aStream%20nextChunk.%0D%09%09chunk%20isEmpty%20ifTrue%3A%20%5B%20%5Enil%20%5D.%0D%09%5D%20ifFalse%3A%20%5B%20self%20actionBlock%20value%3A%20aStream%20%5D.%0D%09%28self%20terminationBlock%20isNil%0D%09%09or%3A%20%5B%20true%20%3D%3D%20self%20terminationBlock%20value%20%5D%29%0D%09%09ifTrue%3A%20%5B%20%5Enil%20%5D.%0D%09%5Eself"));
smalltalk.bind(smalltalk.Object, unescape("javascriptCodeFollows"), "javascriptCodeFollows", function Object__javascriptCodeFollows(){
const self = this; return smalltalk.ChunkReader.javascript();
}
, "Tools-fileIn", unescape("javascriptCodeFollows%0D%09%22%20FileIn%20-%20FileIn%20javascript%20code%20on%20current%20stream.%0D%09Consume%20stream%20contents%20upto%20end%20of%20stream%20evaluating%20the%20contents%20as%20javascript%20code.%0D%09%22%0D%0D%09%5EChunkReader%20javascript"));
smalltalk.addClass("ClassCategoryReader", smalltalk.FileInReader, ['class', 'category'], 'Tools-FileIn');
smalltalk.ClassCategoryReader.$classVariableNames=("");
smalltalk.bind(smalltalk.ClassCategoryReader, unescape("class%3Acategory%3A"), "class_category_", function ClassCategoryReader__class_category_(aClass,aString){
const self = this; self['@class']=aClass;
self['@category']=aString;
return self;
}
, "accessing", unescape("class%3A%20aClass%20category%3A%20aString%0D%09%22%20Private%20-%20Set%20the%20class%20and%20category%20of%20the%20receiver.%20%22%0D%0D%09class%20%3A%3D%20aClass.%0D%09category%20%3A%3D%20aString"));
smalltalk.bind(smalltalk.ClassCategoryReader, unescape("scanFrom%3A"), "scanFrom_", function ClassCategoryReader__scanFrom_(aStream){
var chunk = nil;
const self = this; chunk=aStream.nextChunk();
return (function ClassCategoryReader__(){
if ((chunk.isEmpty()).not()) {return self.compileMethod_(chunk)} else {return nil};
}
).logEvaluate_(chunk);
}
, "fileIn", unescape("scanFrom%3A%20aStream%0D%09%22%20Scan%20the%20next%20chunk%20of%20data%20from%20aStream.%20%22%0D%0D%09%7C%20chunk%20%7C%0D%09chunk%20%3A%3D%20aStream%20nextChunk.%0D%09%5E%5B%20chunk%20isEmpty%20ifFalse%3A%20%5B%20self%20compileMethod%3A%20chunk%20%5D%0D%09%5D%20logEvaluate%3A%20chunk"));
smalltalk.bind(smalltalk.ClassCategoryReader, unescape("compileMethod%3A"), "compileMethod_", function ClassCategoryReader__compileMethod_(aString){
var method = nil;
const self = this; method=(self['@class'].compiler()).load_forClass_(aString,self['@class']);
method.category_(self['@category']);
self['@class'].addCompiledMethod_(method);
return self;
}
, "private", unescape("compileMethod%3A%20aString%0D%09%22%20Compile%20aString%20as%20a%20method%20source.%20%22%0D%0D%09%7C%20method%20%7C%0D%09method%20%3A%3D%20class%20compiler%20load%3A%20aString%20forClass%3A%20class.%0D%09method%20category%3A%20category.%0D%09class%20addCompiledMethod%3A%20method"));
smalltalk.bind(smalltalk.Behavior, unescape("methodsFor%3A"), "methodsFor_", function Behavior__methodsFor_(aString){
const self = this; return (smalltalk.ClassCategoryReader.$$new()).class_category_(self,aString);
}
, "Tools-fileIn", unescape("methodsFor%3A%20aString%0D%09%22%20FileIn%20-%20Return%20a%20chunk%20reader%20to%20fileIn%20methods%20onto%20the%20receiver.%20%22%0D%0D%09%5EClassCategoryReader%20new%20class%3A%20self%20category%3A%20aString"));
smalltalk.bind(smalltalk.Behavior, unescape("methodsFor%3Astamp%3A"), "methodsFor_stamp_", function Behavior__methodsFor_stamp_(aString,aTimeStampString){
const self = this; return (smalltalk.ClassCategoryReader.$$new()).class_category_(self,aString);
}
, "Tools-fileIn", unescape("methodsFor%3A%20aString%0Dstamp%3A%20aTimeStampString%0D%09%22%20FileIn%20-%20Return%20a%20chunk%20reader%20to%20fileIn%20methods%20onto%20the%20receiver.%20%22%0D%0D%09%5EClassCategoryReader%20new%20class%3A%20self%20category%3A%20aString"));
smalltalk.bind(smalltalk.Behavior, unescape("methods"), "methods", function Behavior__methods(){
const self = this; return self.methodsFor_("unclassified");
}
, "Tools-fileIn", unescape("methods%0D%09%22%20FileIn%20-%20Return%20a%20chunk%20reader%20to%20fileIn%20methods%20onto%20the%20receiver.%20%22%0D%0D%09%5Eself%20methodsFor%3A%20%23unclassified%20"));
smalltalk.addClass("ClassCommentReader", smalltalk.FileInReader, ['class'], 'Tools-FileIn');
smalltalk.ClassCommentReader.$classVariableNames=("");
smalltalk.bind(smalltalk.ClassCommentReader, unescape("class%3A"), "class_", function ClassCommentReader__class_(aClass){
const self = this; self['@class']=aClass;
return self;
}
, "accessing", unescape("class%3A%20aClass%0D%09%22%20Set%20the%20destination%20class%20of%20the%20receiver.%20%22%0D%0D%09class%20%3A%3D%20aClass"));
smalltalk.bind(smalltalk.ClassCommentReader, unescape("scanFrom%3A"), "scanFrom_", function ClassCommentReader__scanFrom_(aStream){
const self = this; self.comment_((aStream.nextChunk()));
return nil;
}
, "fileIn", unescape("scanFrom%3A%20aStream%0D%09%22%20FileIn%20-%20Parse%20next%20chunk%20in%20aStream%20as%20a%20comment%20for%20target%20class.%20%22%0D%0D%09self%20comment%3A%20aStream%20nextChunk.%0D%09%5Enil"));
smalltalk.bind(smalltalk.ClassCommentReader, unescape("comment%3A"), "comment_", function ClassCommentReader__comment_(aString){
const self = this; self['@class'].comment_(((aString.isEmpty()).ifFalse_((function ClassCommentReader__(){
return aString;
}
))));
return self;
}
, "private", unescape("comment%3A%20aString%0D%09%22%20Set%20the%20comment%20of%20target%20class.%20%22%0D%0D%09class%20comment%3A%20%28aString%20isEmpty%20ifFalse%3A%20%5B%20aString%20%5D%29"));
smalltalk.bind(smalltalk.Behavior, unescape("commentStamp"), "commentStamp", function Behavior__commentStamp(){
const self = this; return (smalltalk.ClassCommentReader.$$new()).class_(self);
}
, "Tools-fileIn", unescape("commentStamp%0D%09%22%20Return%20a%20comment%20reader%20for%20the%20receiver.%20%22%0D%0D%09%5EClassCommentReader%20new%20class%3A%20self"));
smalltalk.addClass("SkipFileInReader", smalltalk.FileInReader, ['limit'], 'Tools-FileIn');
smalltalk.SkipFileInReader.$classVariableNames=("");
smalltalk.bind(smalltalk.SkipFileInReader.$klass, unescape("upTo%3A"), "upTo_", function SkipFileInReader_class__upTo_(aToken){
const self = this; return (self.$$new()).limit_(aToken);
}
, "instantiation", unescape("upTo%3A%20aToken%0D%09%22%20Return%20an%20instance%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20new%20limit%3A%20aToken"));
smalltalk.bind(smalltalk.SkipFileInReader, unescape("scanFrom%3A"), "scanFrom_", function SkipFileInReader__scanFrom_(aStream){
const self = this; if (((nil.isNil_(self['@limit']))).valueOf()) {aStream.setToEnd()} else {aStream.skipTo_(self['@limit'])};
return nil;
}
, "fileIn", unescape("scanFrom%3A%20aStream%0D%09%22%20Consume/Ignore%20contents%20in%20aStream.%20%22%0D%0D%09limit%20isNil%0D%09%09ifTrue%3A%20%5B%20aStream%20setToEnd%20%5D%0D%09%09ifFalse%3A%20%5B%20aStream%20skipTo%3A%20limit%20%5D.%0D%09%5Enil"));
smalltalk.bind(smalltalk.SkipFileInReader, unescape("limit%3A"), "limit_", function SkipFileInReader__limit_(aToken){
const self = this; self['@limit']=aToken;
return self;
}
, "accessing", unescape("limit%3A%20aToken%0D%09%22%20Set%20the%20token%20limit.%20%22%0D%0D%09limit%20%3A%3D%20aToken"));
smalltalk.bind(smalltalk.Object, unescape("cancelFileIn"), "cancelFileIn", function Object__cancelFileIn(){
const self = this; return self.ignoreFileInUpTo_(nil);
}
, "Tools-fileIn", unescape("cancelFileIn%0D%09%22%20FileIn%20-%20Cancel%20fileIn%20on%20current%20stream.%20%22%0D%0D%09%5Eself%20ignoreFileInUpTo%3A%20nil"));
smalltalk.bind(smalltalk.Object, unescape("ignoreFileInUpTo%3A"), "ignoreFileInUpTo_", function Object__ignoreFileInUpTo_(aToken){
const self = this; return smalltalk.SkipFileInReader.upTo_(aToken);
}
, "Tools-fileIn", unescape("ignoreFileInUpTo%3A%20aToken%0D%09%22%20FileIn%20-%20Ignore%20fileIn%20on%20current%20stream%20upto%20token.%20%22%0D%0D%09%5ESkipFileInReader%20upTo%3A%20aToken"));
smalltalk.addClass("AssociationsReader", smalltalk.FileInReader, [], 'nil');
smalltalk.AssociationsReader.$classVariableNames=("");
smalltalk.bind(smalltalk.AssociationsReader, unescape("keyFrom%3A"), "keyFrom_", function AssociationsReader__keyFrom_(aStream){
const self = this; if (((aStream.peek())._eq(unescape("%23"))).valueOf()) {return (function AssociationsReader__($1$){
$1$.next();
return $1$.upTo_(" ")}
)(aStream).asSymbol()};
if (((aStream.peek())._eq(unescape("%27"))).valueOf()) {return (function AssociationsReader__($2$){
$2$.next();
return $2$.upTo_(unescape("%27"))}
)(aStream)};
return aStream.upTo_(" ");
}
, "reading", unescape("keyFrom%3A%20aStream%0D%09%22%20Private%20-%20Return%20the%20name%20of%20the%20current%20binding%20in%20aStream.%20%22%0D%0D%09aStream%20peek%20%3D%20%24%23%20ifTrue%3A%20%5B%20%5E%28aStream%20next%3B%20upTo%3A%20%24%20%29%20asSymbol%20%5D.%0D%09aStream%20peek%20%3D%20%24%27%20ifTrue%3A%20%5B%20%5EaStream%20next%3B%20upTo%3A%20%24%27%20%5D.%0D%09%5EaStream%20upTo%3A%20%24%20"));
smalltalk.bind(smalltalk.AssociationsReader, unescape("valueFrom%3A"), "valueFrom_", function AssociationsReader__valueFrom_(aStream){
const self = this; return (self.compilerSupport()).evaluate_((aStream.upToEnd()));
}
, "reading", unescape("valueFrom%3A%20aStream%0D%09%22%20Private%20-%20Return%20the%20value%20of%20the%20current%20binding%20in%20aStream.%20%22%0D%0D%09%5Eself%20compilerSupport%20evaluate%3A%20aStream%20upToEnd%20"));
smalltalk.bind(smalltalk.AssociationsReader, unescape("compilerSupport"), "compilerSupport", function AssociationsReader__compilerSupport(){
const self = this; return (self.smalltalk()).compilerSupport();
}
, "evaluating", unescape("compilerSupport%0D%09%22%20Private%20-%20Return%20compiler%20in%20use%20to%20get%20values%20from%20stream.%20%22%0D%0D%09%5Eself%20smalltalk%20compilerSupport"));
smalltalk.bind(smalltalk.AssociationsReader, unescape("bind%3A"), "bind_", function AssociationsReader__bind_(tuples){
const self = this; return self.subclassResponsibility_("bind:");
}
, "binding", unescape("bind%3A%20tuples%0D%09%22%20Private%20-%20Bind%20the%20filedIn%20tuples%20to%20target.%0D%09Must%20return%20the%20result%20of%20the%20fileIn/binding%20process.%0D%09%22%0D%0D%09%5Eself%20subclassResponsibility%3A%20%23bind%3A%20"));
smalltalk.bind(smalltalk.AssociationsReader, unescape("scanFrom%3A"), "scanFrom_", function AssociationsReader__scanFrom_(aStream){
var chunk = nil;
var tuples = nil;
const self = this; tuples=smalltalk.Array.$$new();
while((((aStream.atEnd()).not()).and_((function AssociationsReader__(){
chunk=(aStream.nextChunk()).trimBlanks();
return chunk.notEmpty();
}
))).valueOf()){chunk=chunk.stream();
tuples.add_((smalltalk.Array.with_with_((self.keyFrom_(chunk)),(self.valueFrom_(chunk)))))};;
return self.bind_(tuples);
}
, "fileIn", unescape("scanFrom%3A%20aStream%0D%09%22%20Consume%20chunks%20in%20aStream%20until%20empty%20chunk.%0D%09The%20chunks%20are%20considered%20associative%20bindings%20with%20the%20syntax%3A%0D%09%09%3Ckey%3E%20%3Cexpression%3E%0D%09Where%0D%09%09key%20is%20the%20keyword%20of%20the%20binding%20%28name%2C%20string%20or%20symbol%29.%0D%09%09expression%20is%20a%20valid%20smalltalk%20expression%20that%20will%20be%20evaluated%20to%20generate%20the%20value%20of%20the%20binding.%0D%09%22%0D%0D%09%7C%20chunk%20tuples%20%7C%0D%09tuples%20%3A%3D%20Array%20new.%0D%09%5B%20aStream%20atEnd%20not%20and%3A%20%5B%0D%09%20%20chunk%20%3A%3D%20aStream%20nextChunk%20trimBlanks.%0D%09%20%20chunk%20notEmpty%20%5D%5D%20whileTrue%3A%20%5B%0D%09%20%20chunk%20%3A%3D%20chunk%20stream.%0D%09%20%20tuples%20add%3A%20%28Array%0D%09%09with%3A%20%28self%20keyFrom%3A%20chunk%29%0D%09%09with%3A%20%28self%20valueFrom%3A%20chunk%29%29.%0D%09%5D.%0D%09%5Eself%20bind%3A%20tuples"));
smalltalk.addClass("PoolDictionaryReader", smalltalk.AssociationsReader, ['scope'], 'Tools-FileIn');
smalltalk.PoolDictionaryReader.$classVariableNames=("");
smalltalk.bind(smalltalk.PoolDictionaryReader, unescape("scope%3A"), "scope_", function PoolDictionaryReader__scope_(aScope){
const self = this; self['@scope']=aScope;
return self;
}
, "accessing", unescape("scope%3A%20aScope%0D%09%22%20Set%20the%20scope%20where%20the%20read%20bindings%20will%20be%20stored.%20%22%0D%0D%09scope%20%3A%3D%20aScope"));
smalltalk.bind(smalltalk.PoolDictionaryReader, unescape("bind%3A"), "bind_", function PoolDictionaryReader__bind_(tuples){
const self = this; if ((self['@scope'].isString()).valueOf()) {return smalltalk.Smalltalk.definePool_with_(self['@scope'],tuples)};
if (((nil.isNil_(self['@scope']))).valueOf()) {self['@scope']=smalltalk.PoolDictionary.$$new()};
tuples.do_((function PoolDictionaryReader__(each){
return self['@scope'].at_put_((each.first()),(each.last()));
}
));
return self['@scope'];
}
, "binding", unescape("bind%3A%20tuples%0D%09%22%20Private%20-%20Bind%20the%20filedIn%20tuples%20to%20target.%0D%09Must%20return%20the%20result%20of%20the%20fileIn/binding%20process.%0D%09%22%0D%0D%09scope%20isString%20ifTrue%3A%20%5B%0D%09%09%5ESmalltalk%20definePool%3A%20scope%20with%3A%20tuples%0D%09%5D.%0D%09scope%20isNil%20ifTrue%3A%20%5B%20scope%20%3A%3D%20PoolDictionary%20new%20%5D.%0D%09tuples%20do%3A%20%5B%3Aeach%7C%20scope%20at%3A%20each%20first%20put%3A%20each%20last%20%5D.%0D%09%5Escope"));
smalltalk.bind(smalltalk.PoolDictionaryReader, unescape("valueFrom%3A"), "valueFrom_", function PoolDictionaryReader__valueFrom_(aStream){
var code = nil;
var result = nil;
var word = nil;
const self = this; code=aStream.upToEnd();
word=code.trimBlanks();
if (((word._eq("nil")).or_((function PoolDictionaryReader__(){
return word.isEmpty();
}
))).valueOf()) {return nil};
result=word.asNumber();
if ((result.isNumber()).valueOf()) {return result};
return smalltalk.superImplementor(smalltalk.PoolDictionaryReader,'valueFrom_').apply(self, [code.stream()]);
}
, "reading", unescape("valueFrom%3A%20aStream%0D%09%22%20Private%20-%20Return%20the%20value%20of%20the%20current%20binding%20in%20aStream.%20%22%0D%0D%09%7C%20code%20result%20word%20%7C%0D%09code%20%3A%3D%20aStream%20upToEnd.%0D%09word%20%3A%3D%20code%20trimBlanks.%0D%09%28word%20%3D%20%23nil%20or%3A%20%5B%20word%20isEmpty%20%5D%29%20ifTrue%3A%20%5B%20%5Enil%20%5D.%0D%09result%20%3A%3D%20word%20asNumber.%0D%09result%20isNumber%20ifTrue%3A%20%5B%20%5Eresult%20%5D.%0D%09%5Esuper%20valueFrom%3A%20code%20stream%20"));
smalltalk.bind(smalltalk.Smalltalk.$klass, unescape("bindingsFor%3A"), "bindingsFor_", function Smalltalk_class__bindingsFor_(aScope){
const self = this; return (smalltalk.PoolDictionaryReader.$$new()).scope_(aScope);
}
, "Tools-pool variables", unescape("bindingsFor%3A%20aScope%0D%09%22%20FileIn%20-%20Return%20a%20reader%20to%20fileIn%20bindings%20in%20a%20%28global%29%20scope.%0D%09aScope%20can%20be%20a%20string%20or%20a%20dictionary.%0D%09In%20case%20of%20aScope%20been%20a%20String%2C%20it%20will%20be%20considered%20a%20PoolDictionaryName%0D%09See%20PoolDictionaryReader%3E%3E%23scanFrom%3A%0D%09%22%0D%0D%09%5EPoolDictionaryReader%20new%20scope%3A%20aScope"));
smalltalk.addClass("JSReader", smalltalk.AssociationsReader, ['object'], 'Tools-FileIn');
smalltalk.JSReader.$classVariableNames=("");
smalltalk.bind(smalltalk.JSReader, unescape("bind%3A"), "bind_", function JSReader__bind_(tuples){
const self = this; if (((nil.isNil_(self['@object']))).valueOf()) {self.initializeObject()};
tuples.do_((function JSReader__(each){
return (self['@object'][each.first()]=each.last());
}
));
return self['@object'];
}
, "binding", unescape("bind%3A%20tuples%0D%09%22%20Private%20-%20Bind%20the%20filedIn%20tuples%20to%20target.%0D%09Must%20return%20the%20result%20of%20the%20fileIn/binding%20process.%0D%09%22%0D%0D%09object%20isNil%20ifTrue%3A%20%5B%20self%20initializeObject%20%5D.%0D%09tuples%20do%3A%20%5B%3Aeach%7C%20object%20basicAt%3A%20each%20first%20put%3A%20each%20last%20%5D.%0D%09%5Eobject"));
smalltalk.bind(smalltalk.JSReader, unescape("object%3A"), "object_", function JSReader__object_(anObject){
const self = this; self['@object']=anObject;
return self;
}
, "accessing", unescape("object%3A%20anObject%0D%09%22%20Set%20the%20object%20where%20the%20bindings%20will%20be%20stored.%20%22%0D%0D%09object%20%3A%3D%20anObject"));
smalltalk.bind(smalltalk.JSReader, unescape("initializeObject"), "initializeObject", function JSReader__initializeObject(){
const self = this; self['@object']=smalltalk.Smalltalk.emptyJSONObject();
return self;
}
, "initialize", unescape("initializeObject%0D%09%22%20Private%20-%20Initialize%20the%20object%20where%20the%20bindings%20will%20be%20stored.%20%22%0D%0D%09object%20%3A%3D%20Smalltalk%20emptyJSONObject"));
smalltalk.addClass("Exporter", smalltalk.Object, [], 'nil');
smalltalk.Exporter.$classVariableNames=("");
smalltalk.bind(smalltalk.Exporter.$klass, unescape("fileOutCategories%3A"), "fileOutCategories_", function Exporter_class__fileOutCategories_(categories){
const self = this; return (self.$$new()).fileOutCategories_(categories);
}
, "fileOut", unescape("fileOutCategories%3A%20categories%0D%09%22%20Return%20the%20result%20of%20fileOut%20all%20the%20classes%20in%20categories.%20%22%0D%0D%09%5Eself%20new%20fileOutCategories%3A%20categories"));
smalltalk.bind(smalltalk.Exporter.$klass, unescape("fileOutCategory%3A"), "fileOutCategory_", function Exporter_class__fileOutCategory_(aString){
const self = this; return (self.$$new()).fileOutCategory_(aString);
}
, "fileOut", unescape("fileOutCategory%3A%20aString%0D%09%22%20Return%20the%20result%20of%20fileOut%20all%20the%20classes%20in%20category%20aString.%20%22%0D%0D%09%5Eself%20new%20fileOutCategory%3A%20aString"));
smalltalk.bind(smalltalk.Exporter.$klass, unescape("fileOutAll%3A"), "fileOutAll_", function Exporter_class__fileOutAll_(elements){
const self = this; return (self.$$new()).fileOutAll_(elements);
}
, "fileOut", unescape("fileOutAll%3A%20elements%0D%09%22%20Return%20the%20result%20of%20fileOut%20elements%20%28classes%2C%20methods%20and/or%20categories%29.%20%22%0D%0D%09%5Eself%20new%20fileOutAll%3A%20elements"));
smalltalk.bind(smalltalk.Exporter.$klass, unescape("fileOutAll"), "fileOutAll", function Exporter_class__fileOutAll(){
const self = this; return self.fileOutAll_((self.allClasses()));
}
, "fileOut", unescape("fileOutAll%0D%09%22%20Return%20the%20result%20of%20fileOut%20of%20all%20classes%20in%20the%20system.%20%22%0D%0D%09%5Eself%20fileOutAll%3A%20self%20allClasses"));
smalltalk.bind(smalltalk.Exporter.$klass, unescape("fileOut%3A"), "fileOut_", function Exporter_class__fileOut_(spec){
var aName = nil;
const self = this; if (((nil.isNil_(spec))).valueOf()) {return ""};
if ((spec.isString()).not()) {if (((smalltalk.is_kindOf_(spec,smalltalk.Behavior))).valueOf()) {return (self.$$new()).fileOut_(spec)};
return (spec.asArray()).fileOut()};
if ((spec.includes_(unescape("%2C"))).valueOf()) {return self.fileOut_((spec.asArrayOfSubstringsSeparatedBy_(unescape("%2C"))))};
if ((spec.includes_(" ")).valueOf()) {return self.fileOut_((spec.asArrayOfSubstringsSeparatedBy_(" ")))};
aName=spec.trimBlanks();
if ((smalltalk.Smalltalk.includesKey_(aName)).valueOf()) {return self.fileOut_((smalltalk.Smalltalk.at_(aName)))};
return self.fileOutCategories_(aName);
}
, "fileOut", unescape("fileOut%3A%20spec%0D%09%22%20Return%20the%20result%20of%20fileOut%20of%20literals%20in%20spec.%20%22%0D%0D%09%7C%20aName%20%7C%0D%09spec%20isNil%20ifTrue%3A%20%5B%20%5E%27%27%20%5D.%0D%09spec%20isString%20ifFalse%3A%20%5B%0D%09%09%28spec%20isKindOf%3A%20Behavior%29%20ifTrue%3A%20%5B%20%5Eself%20new%20fileOut%3A%20spec%20%5D.%0D%09%09%5Espec%20asArray%20fileOut%0D%09%5D.%0D%09%28spec%20includes%3A%20%24%2C%29%20ifTrue%3A%20%5B%20%5Eself%20fileOut%3A%20%28spec%20asArrayOfSubstringsSeparatedBy%3A%20%24%2C%29%20%5D.%0D%09%28spec%20includes%3A%20%24%20%29%20ifTrue%3A%20%5B%20%5Eself%20fileOut%3A%20%28spec%20asArrayOfSubstringsSeparatedBy%3A%20%24%20%29%20%5D.%0D%09aName%20%3A%3D%20spec%20trimBlanks.%0D%09%28Smalltalk%20includesKey%3A%20aName%29%20ifTrue%3A%20%5B%20%5Eself%20fileOut%3A%20%28Smalltalk%20at%3A%20aName%29%5D.%0D%09%5Eself%20fileOutCategories%3A%20aName"));
smalltalk.bind(smalltalk.Exporter.$klass, unescape("exportCategories%3A"), "exportCategories_", function Exporter_class__exportCategories_(categories){
const self = this; return (self.$$new()).exportCategories_(categories);
}
, "export", unescape("exportCategories%3A%20categories%0D%09%22%20Return%20the%20result%20of%20exporting%20all%20the%20classes%20in%20categories.%20%22%0D%0D%09%5Eself%20new%20exportCategories%3A%20categories"));
smalltalk.bind(smalltalk.Exporter.$klass, unescape("exportCategory%3A"), "exportCategory_", function Exporter_class__exportCategory_(aString){
const self = this; return (self.$$new()).exportCategory_(aString);
}
, "export", unescape("exportCategory%3A%20aString%0D%09%22%20Return%20the%20result%20of%20exporting%20all%20the%20classes%20in%20category%20aString.%20%22%0D%0D%09%5Eself%20new%20exportCategory%3A%20aString"));
smalltalk.bind(smalltalk.Exporter.$klass, unescape("export%3A"), "export_", function Exporter_class__export_(spec){
var aName = nil;
const self = this; if (((nil.isNil_(spec))).valueOf()) {return ""};
if ((spec.isString()).not()) {if (((smalltalk.is_kindOf_(spec,smalltalk.Behavior))).valueOf()) {return (self.$$new()).export_(spec)};
return (spec.asArray()).$$export()};
if ((spec.includes_(unescape("%2C"))).valueOf()) {return self.export_((spec.asArrayOfSubstringsSeparatedBy_(unescape("%2C"))))};
if ((spec.includes_(" ")).valueOf()) {return self.export_((spec.asArrayOfSubstringsSeparatedBy_(" ")))};
aName=spec.trimBlanks();
if ((smalltalk.Smalltalk.includesKey_(aName)).valueOf()) {return self.export_((smalltalk.Smalltalk.at_(aName)))};
return self.exportCategories_(aName);
}
, "export", unescape("export%3A%20spec%0D%09%22%20Return%20the%20result%20of%20exporting%20literals%20in%20spec.%20%22%0D%0D%09%7C%20aName%20%7C%0D%09spec%20isNil%20ifTrue%3A%20%5B%20%5E%27%27%20%5D.%0D%09spec%20isString%20ifFalse%3A%20%5B%0D%09%09%28spec%20isKindOf%3A%20Behavior%29%20ifTrue%3A%20%5B%20%5Eself%20new%20export%3A%20spec%20%5D.%0D%09%09%5Espec%20asArray%20export%0D%09%5D.%0D%09%28spec%20includes%3A%20%24%2C%29%20ifTrue%3A%20%5B%20%5Eself%20export%3A%20%28spec%20asArrayOfSubstringsSeparatedBy%3A%20%24%2C%29%20%5D.%0D%09%28spec%20includes%3A%20%24%20%29%20ifTrue%3A%20%5B%20%5Eself%20export%3A%20%28spec%20asArrayOfSubstringsSeparatedBy%3A%20%24%20%29%20%5D.%0D%09aName%20%3A%3D%20spec%20trimBlanks.%0D%09%28Smalltalk%20includesKey%3A%20aName%29%20ifTrue%3A%20%5B%20%5Eself%20export%3A%20%28Smalltalk%20at%3A%20aName%29%5D.%0D%09%5Eself%20exportCategories%3A%20aName"));
smalltalk.bind(smalltalk.Exporter.$klass, unescape("exportAll"), "exportAll", function Exporter_class__exportAll(){
const self = this; return (self.$$new()).exportAll();
}
, "export", unescape("exportAll%0D%09%22%20Return%20the%20result%20of%20exporting%20all%20classes%20in%20the%20system.%20%22%0D%0D%09%5Eself%20new%20exportAll"));
smalltalk.bind(smalltalk.Exporter.$klass, unescape("exportAll%3A"), "exportAll_", function Exporter_class__exportAll_(elements){
const self = this; return (self.$$new()).exportAll_(elements);
}
, "export", unescape("exportAll%3A%20elements%0D%09%22%20Return%20the%20result%20of%20exporting%20all%20elements%20%28classes%2C%20methods%20and/or%20categories%29.%20%22%0D%0D%09%5Eself%20new%20exportAll%3A%20elements"));
smalltalk.bind(smalltalk.Exporter.$klass, unescape("allClasses"), "allClasses", function Exporter_class__allClasses(){
const self = this; return (smalltalk.Smalltalk.rootClasses()).inject_into_((smalltalk.Array.$$new()),(function Exporter_class__(total,each){
return total._comma((each.withAllSubclasses()));
}
));
}
, "private", unescape("allClasses%0D%09%22%20Private%20-%20Return%20all%20the%20classes%20in%20the%20system%20%28in%20fileIn%20order%29.%20%22%0D%0D%09%5ESmalltalk%20rootClasses%0D%09%09inject%3A%20Array%20new%0D%09%09into%3A%20%5B%3Atotal%20%3Aeach%7C%20total%20%2C%20each%20withAllSubclasses%20%5D"));
smalltalk.bind(smalltalk.Exporter, unescape("matchCategory%3A"), "matchCategory_", function Exporter__matchCategory_(aString){
const self = this; return self.matchCategory_from_(aString,(smalltalk.Smalltalk.rootClasses()));
}
, "categories", unescape("matchCategory%3A%20aString%0D%09%22%20Return%20the%20result%20of%20filtering%20all%20the%20classes%20%28and%20orphan%20methods%29%20in%20category%20aString.%20%22%0D%0D%09%5Eself%20matchCategory%3A%20aString%20from%3A%20Smalltalk%20rootClasses"));
smalltalk.bind(smalltalk.Exporter, unescape("matchCategory%3Afrom%3A"), "matchCategory_from_", function Exporter__matchCategory_from_(aString,rootClasses){
var selection = nil;
var selected = nil;
var rejected = nil;
var orphanMethods = nil;
var fileOutMethods = nil;
const self = this; selected=smalltalk.Array.$$new();
rejected=smalltalk.Array.$$new();
orphanMethods=smalltalk.Array.$$new();
selection=(aString.includes_(unescape("-"))).ifTrue_ifFalse_((function Exporter__(){
return (function Exporter__(each){
return ((each.category()).asString())._eq(aString);
}
);
}
),(function Exporter__(){
return (function Exporter__(each){
return (((each.category()).asString()).upTo_(unescape("-")))._eq(aString);
}
);
}
));
rootClasses.do_((function Exporter__(root){
return ((root.instanceClass()).withAllSubclasses()).do_((function Exporter__(each){
return ((selection.value_(each)).ifTrue_ifFalse_((function Exporter__(){
return selected;
}
),(function Exporter__(){
return rejected;
}
))).add_(each);
}
));
}
));
fileOutMethods=(function Exporter__(cls){
return cls.methodsDo_((function Exporter__(aMethod){
if ((selection.value_(aMethod)).valueOf()) {return orphanMethods.add_(aMethod)} else {return nil};
}
));
}
);
rejected.do_((function Exporter__(each){
return (function Exporter__($1$){
$1$.value_(each);
return $1$.value_((each.$klass))}
)(fileOutMethods);
}
));
return smalltalk.Array.with_with_with_(selected,rejected,orphanMethods);
}
, "categories", unescape("matchCategory%3A%20aString%20from%3A%20rootClasses%0D%09%22%20Return%20the%20result%20of%20filtering%20all%20the%20classes%20%28and%20orphan%20methods%29%20in%20category%20aString.%20%22%0D%0D%09%7C%20selection%20selected%20rejected%20orphanMethods%20fileOutMethods%20%7C%0D%09selected%20%3A%3D%20Array%20new.%0D%09rejected%20%3A%3D%20Array%20new.%0D%09orphanMethods%20%3A%3D%20Array%20new.%0D%09selection%20%3A%3D%20%28aString%20includes%3A%20%24-%29%0D%09%09ifTrue%3A%20%5B%20%5B%3Aeach%7C%20each%20category%20asString%20%3D%20aString%20%5D%20%5D%0D%09%09ifFalse%3A%20%5B%20%5B%3Aeach%7C%20%28each%20category%20asString%20upTo%3A%20%24-%29%20%3D%20aString%20%5D%20%5D.%0D%09rootClasses%20do%3A%20%5B%3Aroot%7C%0D%09%09root%20instanceClass%20withAllSubclasses%20do%3A%20%5B%3Aeach%7C%0D%09%09%09%28%28selection%20value%3A%20each%29%0D%09%09%09%09ifTrue%3A%20%5B%20selected%20%5D%20ifFalse%3A%20%5B%20rejected%20%5D%29%0D%09%09%09%09add%3A%20each%0D%09%09%5D%0D%09%5D.%0D%09fileOutMethods%20%3A%3D%20%5B%3Acls%7C%0D%09%09cls%20methodsDo%3A%20%5B%3AaMethod%20%7C%0D%09%09%09%28selection%20value%3A%20aMethod%29%20ifTrue%3A%20%5B%20orphanMethods%20add%3A%20aMethod%20%5D%0D%09%09%5D.%0D%09%5D.%0D%09rejected%20do%3A%20%5B%3Aeach%7C%20fileOutMethods%20value%3A%20each%3B%20value%3A%20each%20class%20%5D.%0D%09%5EArray%20with%3A%20selected%20with%3A%20rejected%20with%3A%20orphanMethods"));
smalltalk.bind(smalltalk.Exporter, unescape("fileOutCategories%3A"), "fileOutCategories_", function Exporter__fileOutCategories_(categories){
const self = this; if ((categories.isString()).valueOf()) {return self.fileOutCategories_((categories.asArrayOfSubstrings()))};
return (categories.asArray()).inject_into_("",(function Exporter__(total,each){
return total._comma((self.fileOutCategory_(each)));
}
));
}
, "fileOut", unescape("fileOutCategories%3A%20categories%0D%09%22%20Return%20the%20result%20of%20fileOut%20all%20the%20classes%20in%20categories.%20%22%0D%0D%09categories%20isString%20ifTrue%3A%20%5B%20%5Eself%20fileOutCategories%3A%20categories%20asArrayOfSubstrings%20%5D.%0D%09%5Ecategories%20asArray%20inject%3A%20%27%27%20into%3A%20%5B%3Atotal%20%3Aeach%7C%0D%09%09total%2C%20%28self%20fileOutCategory%3A%20each%29%0D%09%5D"));
smalltalk.bind(smalltalk.Exporter, unescape("fileOutCategory%3A"), "fileOutCategory_", function Exporter__fileOutCategory_(aString){
var stream = nil;
var match = nil;
const self = this; stream="".writeStream();
match=self.matchCategory_(aString);
self.fileOutAll_on_((match.first()),stream);
(match.last()).do_((function Exporter__(aMethod){
return self.fileOutMethod_of_on_(aMethod,(aMethod.classField()),stream);
}
));
return stream.contents();
}
, "fileOut", unescape("fileOutCategory%3A%20aString%0D%09%22%20Return%20the%20result%20of%20fileOut%20all%20the%20classes%20in%20category%20aString.%20%22%0D%0D%09%7C%20stream%20match%20%7C%0D%09stream%20%3A%3D%20%27%27%20writeStream.%0D%09match%20%3A%3D%20self%20matchCategory%3A%20aString.%0D%09self%20fileOutAll%3A%20match%20first%20on%3A%20stream.%0D%09match%20last%20do%3A%20%5B%3AaMethod%20%7C%0D%09%09self%20fileOutMethod%3A%20aMethod%20of%3A%20aMethod%20classField%20on%3A%20stream%0D%09%5D.%0D%09%5Estream%20contents"));
smalltalk.bind(smalltalk.Exporter, unescape("fileOut%3A"), "fileOut_", function Exporter__fileOut_(aClass){
var stream = nil;
const self = this; stream="".writeStream();
self.fileOut_on_(aClass,stream);
return stream.contents();
}
, "fileOut", unescape("fileOut%3A%20aClass%0D%09%22%20Return%20fileOut%20definition%20and%20code%20of%20a%20class.%20%22%0D%0D%09%7C%20stream%20%7C%0D%09stream%20%3A%3D%20%27%27%20writeStream.%0D%09self%20fileOut%3A%20aClass%20on%3A%20stream.%0D%09%5Estream%20contents"));
smalltalk.bind(smalltalk.Exporter, unescape("fileOutClass%3A"), "fileOutClass_", function Exporter__fileOutClass_(aClass){
const self = this; return self.fileOut_(aClass);
}
, "fileOut", unescape("fileOutClass%3A%20aClass%0D%09%22%20Return%20fileOut%20definition%20and%20code%20of%20a%20class.%20%22%0D%0D%09%5Eself%20fileOut%3A%20aClass"));
smalltalk.bind(smalltalk.Exporter, unescape("fileOutAll%3A"), "fileOutAll_", function Exporter__fileOutAll_(elements){
var stream = nil;
const self = this; stream="".writeStream();
self.fileOutAll_on_(elements,stream);
return stream.contents();
}
, "fileOut", unescape("fileOutAll%3A%20elements%0D%09%22%20Return%20fileOut%20definition%20and%20code%20of%20elements%20%28classes%2C%20methods%20and/or%20categories%29.%20%22%0D%0D%09%7C%20stream%20%7C%0D%09stream%20%3A%3D%20%27%27%20writeStream.%0D%09self%20fileOutAll%3A%20elements%20on%3A%20stream.%0D%09%5Estream%20contents"));
smalltalk.bind(smalltalk.Exporter, unescape("fileOutMethod%3Aof%3A"), "fileOutMethod_of_", function Exporter__fileOutMethod_of_(aMethod,aClass){
var stream = nil;
const self = this; stream="".writeStream();
self.fileOutMethod_of_on_(aMethod,aClass,stream);
return stream.contents();
}
, "fileOut", unescape("fileOutMethod%3A%20aMethod%20of%3A%20aClass%0D%09%22%20Return%20fileOut%20method%20of%20a%20class.%20%22%0D%0D%09%7C%20stream%20%7C%0D%09stream%20%3A%3D%20%27%27%20writeStream.%0D%09self%20fileOutMethod%3A%20aMethod%20of%3A%20aClass%20on%3A%20stream.%0D%09%5Estream%20contents"));
smalltalk.bind(smalltalk.Exporter, unescape("fileOutAllMethodsOf%3Aon%3A"), "fileOutAllMethodsOf_on_", function Exporter__fileOutAllMethodsOf_on_(aClass,stream){
const self = this; self.fileOutMethodsOf_on_((aClass.$klass),stream);
self.fileOutMethodsOf_on_(aClass,stream);
return self;
}
, "fileOut", unescape("fileOutAllMethodsOf%3A%20aClass%20on%3A%20stream%0D%09%22%20FileOut%20all%20methods%20of%20aClass%20%28and%20metaclass%29%20onto%20stream.%20%22%0D%0D%09self%20fileOutMethodsOf%3A%20aClass%20class%20on%3A%20stream.%0D%09self%20fileOutMethodsOf%3A%20aClass%20on%3A%20stream."));
smalltalk.bind(smalltalk.Exporter, unescape("fileOutDefinitionOfClass%3Aon%3A"), "fileOutDefinitionOfClass_on_", function Exporter__fileOutDefinitionOfClass_on_(aClass,stream){
const self = this; self.fileOutDefinitionOf_on_(aClass,stream);
self.fileOutDefinitionOf_on_((aClass.$klass),stream);
return self;
}
, "fileOut", unescape("fileOutDefinitionOfClass%3A%20aClass%20on%3A%20stream%0D%09%22%20FileOut%20definition%20of%20aClass%20%28and%20metaclass%29%20onto%20stream.%20%22%0D%0D%09self%20fileOutDefinitionOf%3A%20aClass%20on%3A%20stream.%0D%09self%20fileOutDefinitionOf%3A%20aClass%20class%20on%3A%20stream"));
smalltalk.bind(smalltalk.Exporter, unescape("fileOutAll%3Aon%3A"), "fileOutAll_on_", function Exporter__fileOutAll_on_(elements,stream){
const self = this; if ((elements.isString()).valueOf()) {return self.fileOutAll_on_((elements.asArrayOfSubstrings()),stream)};
elements.do_((function Exporter__(each){
if (((smalltalk.is_kindOf_(each,smalltalk.Behavior))).valueOf()) {return self.fileOutDefinitionOfClass_on_(each,stream)} else {return nil};
}
));
stream.cr();
elements.do_((function Exporter__(each){
if (((smalltalk.is_kindOf_(each,smalltalk.Behavior))).valueOf()) {return self.fileOutAllMethodsOf_on_(each,stream)} else {if ((each.isString()).valueOf()) {return (function Exporter__($1$){
$1$.nextPutAll_((self.fileOutCategory_(each)));
return $1$.cr()}
)(stream)} else {return self.fileOutAllMethod_on_(each,stream)}};
}
));
return self;
}
, "fileOut", unescape("fileOutAll%3A%20elements%20on%3A%20stream%0D%09%22%20FileOut%20definition%20and%20code%20of%20elements%20%28classes%2C%20methods%20and/or%20categories%29%20onto%20stream.%20%22%0D%0D%09elements%20isString%20ifTrue%3A%20%5B%20%5Eself%20fileOutAll%3A%20elements%20asArrayOfSubstrings%20on%3A%20stream%20%5D.%0D%09elements%20do%3A%20%5B%3Aeach%7C%0D%09%09%28each%20isKindOf%3A%20Behavior%29%20ifTrue%3A%20%5B%0D%09%09%09self%20fileOutDefinitionOfClass%3A%20each%20on%3A%20stream%0D%09%09%5D.%0D%09%5D.%09stream%20cr.%0D%09elements%20do%3A%20%5B%3Aeach%7C%0D%09%09%28each%20isKindOf%3A%20Behavior%29%20ifTrue%3A%20%5B%0D%09%09%09self%20fileOutAllMethodsOf%3A%20each%20on%3A%20stream%0D%09%09%5D%20ifFalse%3A%20%5B%0D%09%09%09each%20isString%0D%09%09%09ifTrue%3A%20%5B%20stream%20nextPutAll%3A%20%28self%20fileOutCategory%3A%20each%29%3Bcr%20%5D%0D%09%09%09ifFalse%3A%20%5B%20self%20fileOutAllMethod%3A%20each%20on%3A%20stream%20%5D%0D%09%09%5D%0D%09%5D."));
smalltalk.bind(smalltalk.Exporter, unescape("fileOutDefinitionOf%3A"), "fileOutDefinitionOf_", function Exporter__fileOutDefinitionOf_(aClass){
var stream = nil;
const self = this; stream="".writeStream();
self.fileOutDefinitionOfClass_on_((aClass.instanceClass()),stream);
return stream.contents();
}
, "fileOut", unescape("fileOutDefinitionOf%3A%20aClass%0D%09%22%20Return%20the%20definition%20of%20a%20class.%20%22%0D%0D%09%7C%20stream%20%7C%0D%09stream%20%3A%3D%20%27%27%20writeStream.%0D%09self%20fileOutDefinitionOfClass%3A%20aClass%20instanceClass%20on%3A%20stream.%0D%09%5Estream%20contents"));
smalltalk.bind(smalltalk.Exporter, unescape("fileOut%3Aon%3A"), "fileOut_on_", function Exporter__fileOut_on_(aClass,stream){
const self = this; self.fileOutAll_on_((smalltalk.Array.with_(aClass)),stream);
return self;
}
, "fileOut", unescape("fileOut%3A%20aClass%20on%3A%20stream%0D%09%22%20FileOut%20definition%20and%20code%20of%20a%20class%20onto%20stream.%20%22%0D%0D%09self%20fileOutAll%3A%20%28Array%20with%3A%20aClass%29%20on%3A%20stream."));
smalltalk.bind(smalltalk.Exporter, unescape("fileOutDefinitionOf%3Aon%3A"), "fileOutDefinitionOf_on_", function Exporter__fileOutDefinitionOf_on_(aClass,stream){
const self = this; if ((aClass.isMetaclass()).valueOf()) {if ((self.fileOutStrings_of_on_("instanceVariableNames",aClass,stream)).valueOf()) {(function Exporter__($1$){
$1$.nextChunkPut_("");
return $1$.cr()}
)(stream)};
if ((self.fileOutArray_of_on_("propertyNames",aClass,stream)).valueOf()) {(function Exporter__($2$){
$2$.nextChunkPut_("");
return $2$.cr()}
)(stream)};
return self};
(function Exporter__($3$){
$3$.nextPutAll_(((aClass.superclass()).name()));
$3$.cr();
$3$.tab();
return $3$.nextPutAll_(unescape("subclass%3A%20%23"))}
)(stream);
if ((self.fileOutStrings_of_on_("instanceVariableNames",aClass,stream)).not()) {(function Exporter__($4$){
$4$.nextPutAll_((self.globalNameFor_(aClass)));
$4$.cr();
$4$.tab();
$4$.nextPutAll_("instanceVariableNames: ");
return $4$.nextPutAll_(("".printString()))}
)(stream)};
if (((nil.isNil_(aClass.classVariables())===false)).valueOf()) {(function Exporter__($5$){
$5$.cr();
$5$.tab();
$5$.nextPutAll_("classVariableNames: ");
return $5$.nextPutAll_(((aClass.classVariablesString()).printString()))}
)(stream)};
if (((nil.isNil_(aClass.poolDictionaries())===false)).valueOf()) {(function Exporter__($6$){
$6$.cr();
$6$.tab();
$6$.nextPutAll_("poolDictionaries: ");
return $6$.nextPutAll_(((aClass.poolDictionariesString()).printString()))}
)(stream)};
(function Exporter__($7$){
$7$.cr();
$7$.tab();
$7$.nextPutAll_("category: ");
return $7$.nextPutAll_(((aClass.category()).asLiteral()))}
)(stream);
(function Exporter__($8$){
$8$.nextChunkPut_("");
return $8$.cr()}
)(stream);
if ((self.fileOutArray_of_on_("propertyNames",aClass,stream)).valueOf()) {(function Exporter__($9$){
$9$.nextChunkPut_("");
return $9$.cr()}
)(stream)};
if ((((nil.isNil_(aClass.comment())===false)).and_((function Exporter__(){
return (aClass.comment()).notEmpty();
}
))).valueOf()) {stream.nextPutAll_((((self.globalNameFor_(aClass))._comma(" comment: "))._comma(((aClass.comment()).printString()))));
(function Exporter__($10$){
$10$.nextChunkPut_("");
return $10$.cr()}
)(stream)};
return self;
}
, "fileOut", unescape("fileOutDefinitionOf%3A%20aClass%20on%3A%20stream%0D%09%22%20FileOut%20definition%20of%20a%20class%20onto%20stream.%20%22%0D%0D%09aClass%20isMetaclass%20ifTrue%3A%20%5B%0D%09%09%28self%20fileOutStrings%3A%20%23instanceVariableNames%20of%3A%20aClass%20on%3A%20stream%29%20ifTrue%3A%20%5B%0D%09%09%09stream%20nextChunkPut%3A%20%27%27%3Bcr.%0D%09%09%5D.%0D%09%09%28self%20fileOutArray%3A%20%23propertyNames%20of%3A%20aClass%20on%3A%20stream%29%20ifTrue%3A%20%5B%0D%09%09%09stream%20nextChunkPut%3A%20%27%27%3Bcr.%0D%09%09%5D.%0D%09%09%5Eself%0D%09%5D.%0D%0D%09stream%0D%09%09nextPutAll%3A%20aClass%20superclass%20name%3B%20cr%3Btab%3B%0D%09%09nextPutAll%3A%20%27subclass%3A%20%23%27.%0D%09%28self%20fileOutStrings%3A%20%23instanceVariableNames%20of%3A%20aClass%20on%3A%20stream%29%20ifFalse%3A%20%5B%0D%09%09stream%0D%09%09%09nextPutAll%3A%20%28self%20globalNameFor%3A%20aClass%29%3B%20cr%3Btab%3B%0D%09%09%09nextPutAll%3A%20%27instanceVariableNames%3A%20%27%3B%0D%09%09%09nextPutAll%3A%20%27%27%20printString%0D%09%5D.%0D%09aClass%20classVariables%20notNil%20ifTrue%3A%20%5B%0D%09%20%20%20%20stream%09%20cr%3Btab%3B%0D%09%09nextPutAll%3A%20%27classVariableNames%3A%20%27%3B%0D%09%09nextPutAll%3A%20aClass%20classVariablesString%20printString%0D%09%5D.%0D%09aClass%20poolDictionaries%20notNil%20ifTrue%3A%20%5B%0D%09%20%20%20%20stream%09%20cr%3Btab%3B%0D%09%09nextPutAll%3A%20%27poolDictionaries%3A%20%27%3B%0D%09%09nextPutAll%3A%20aClass%20poolDictionariesString%20printString%0D%09%5D.%0D%09stream%20cr%3Btab%3B%0D%09%09nextPutAll%3A%20%27category%3A%20%27%3B%0D%09%09nextPutAll%3A%20aClass%20category%20asLiteral.%0D%09stream%20nextChunkPut%3A%20%27%27%3Bcr.%0D%09%28self%20fileOutArray%3A%20%23propertyNames%20of%3A%20aClass%20on%3A%20stream%29%20ifTrue%3A%20%5B%0D%09%09stream%20nextChunkPut%3A%20%27%27%3Bcr.%0D%09%5D.%0D%09%28aClass%20comment%20notNil%20and%3A%20%5BaClass%20comment%20notEmpty%5D%29%20ifTrue%3A%20%5B%0D%09%09stream%20nextPutAll%3A%20%28self%20globalNameFor%3A%20aClass%29%2C%27%20comment%3A%20%27%2C%20aClass%20comment%20printString.%0D%09%09stream%20nextChunkPut%3A%20%27%27%3Bcr.%0D%09%5D."));
smalltalk.bind(smalltalk.Exporter, unescape("fileOutStrings%3Aof%3Aon%3A"), "fileOutStrings_of_on_", function Exporter__fileOutStrings_of_on_(selector,aClass,stream){
var strings = nil;
const self = this; strings=aClass.perform_(selector);
if ((strings.isEmpty()).valueOf()) {return false};
(function Exporter__($1$){
$1$.nextPutAll_((self.globalNameFor_(aClass)));
$1$.cr();
$1$.tab();
return $1$.nextPutAll_((selector._comma(unescape("%3A%20%27"))))}
)(stream);
strings.do_((function Exporter__(each){
return stream.nextPutAll_((" "._comma(each)));
}
));
stream.nextPutAll_(unescape("%20%27"));
return true;
}
, "fileOut", unescape("fileOutStrings%3A%20selector%20of%3A%20aClass%20on%3A%20stream%0D%09%22%20Private%20-%20FileOut%20selector%20strings%20of%20a%20class%20onto%20stream.%0D%09Return%20true%20if%20code%20has%20been%20filedOut.%0D%09%22%0D%0D%09%7C%20strings%20%7C%0D%09strings%20%3A%3D%20aClass%20perform%3A%20selector.%0D%09strings%20isEmpty%20ifTrue%3A%20%5B%20%5Efalse%20%5D.%0D%09stream%0D%09%09nextPutAll%3A%20%28self%20globalNameFor%3A%20aClass%29%3B%20cr%3Btab%3B%0D%09%09nextPutAll%3A%20selector%2C%27%3A%20%27%27%27.%0D%09strings%20do%3A%20%5B%3Aeach%7C%20stream%20nextPutAll%3A%20%27%20%27%2Ceach%20%5D.%0D%09stream%20nextPutAll%3A%20%27%20%27%27%27.%0D%09%5Etrue"));
smalltalk.bind(smalltalk.Exporter, unescape("fileOutArray%3Aof%3Aon%3A"), "fileOutArray_of_on_", function Exporter__fileOutArray_of_on_(selector,aClass,stream){
var strings = nil;
const self = this; strings=aClass.perform_(selector);
if ((strings.isEmpty()).valueOf()) {return false};
(function Exporter__($1$){
$1$.nextPutAll_((self.globalNameFor_(aClass)));
return $1$.nextPutAll_((((" "._comma(selector))._comma(": "))._comma((strings.asLiteral()))))}
)(stream);
return true;
}
, "fileOut", unescape("fileOutArray%3A%20selector%20of%3A%20aClass%20on%3A%20stream%0D%09%22%20Private%20-%20FileOut%20selector%20arrayed%20strings%20of%20a%20class%20onto%20stream.%0D%09Return%20true%20if%20code%20has%20been%20filedOut.%0D%09%22%0D%0D%09%7C%20strings%20%7C%0D%09strings%20%3A%3D%20aClass%20perform%3A%20selector.%0D%09strings%20isEmpty%20ifTrue%3A%20%5B%20%5Efalse%20%5D.%0D%09stream%0D%09%09nextPutAll%3A%20%28self%20globalNameFor%3A%20aClass%29%3B%0D%09%09nextPutAll%3A%20%27%20%27%2Cselector%2C%27%3A%20%27%2C%20strings%20asLiteral.%0D%09%5Etrue"));
smalltalk.bind(smalltalk.Exporter, unescape("fileOutMethodsOf%3Aon%3A"), "fileOutMethodsOf_on_", function Exporter__fileOutMethodsOf_on_(aClass,stream){
var selectors = nil;
const self = this; selectors=aClass.selectors();
if ((selectors.isEmpty()).valueOf()) {return self};
stream.cr();
self.fileOutSelectors_of_on_(selectors,aClass,stream);
return self;
}
, "fileOut", unescape("fileOutMethodsOf%3A%20aClass%20on%3A%20stream%0D%09%22%20FileOut%20methods%20of%20a%20class%20onto%20stream.%20%22%0D%0D%09%7C%20selectors%20%7C%0D%09selectors%20%3A%3D%20aClass%20selectors.%0D%09selectors%20isEmpty%20ifTrue%3A%20%5B%20%5Eself%20%5D.%0D%09stream%20cr.%0D%09self%0D%09%09fileOutSelectors%3A%20selectors%0D%09%09of%3A%20aClass%20on%3A%20stream"));
smalltalk.bind(smalltalk.Exporter, unescape("fileOutClusters"), "fileOutClusters", function Exporter__fileOutClusters(){
const self = this; return (["APIBuilder"].select_((function Exporter__(key){
return smalltalk.Smalltalk.includesKey_(key);
}
))).collect_((function Exporter__(each){
return (smalltalk.Smalltalk.at_(each)).$$default();
}
));
}
, "private", unescape("fileOutClusters%0D%09%22%20Private%20-%20Return%20the%20fileOut%20chustering%20dumpers%20of%20the%20receiver.%0D%09A%20fileOutCluster%20is%20an%20object%20that%20potentially%20dump%20clustered%20actions%20for%20selectors%20implemented%20by%20aClass.%0D%09The%20fileOut%20write%20%28smalltalk%29code%20for%20multiple%20selectors%20removing%20them%20from%20selectors%20collection.%0D%09Note%3A%20the%20selectors%20collection%20is%20modified%20during%20fileOut.%0D%09The%20default%20answer%20is%20an%20empty%20collection%20of%20custed%20or%20a%20collection%20with%20default%20APIBuilder.%0D%09This%20method%20can%20be%20refined%20by%20the%20subclasses.%0D%09%22%0D%0D%09%5E%28%23%28%20%23APIBuilder%20%29%0D%09%09select%3A%20%5B%3Akey%7C%20Smalltalk%20includesKey%3A%20key%20%5D%29%0D%09%09collect%3A%20%5B%3Aeach%7C%20%28Smalltalk%20at%3A%20each%29%20default%20%5D"));
smalltalk.bind(smalltalk.Exporter, unescape("fileOutSelectors%3Aof%3Aon%3A"), "fileOutSelectors_of_on_", function Exporter__fileOutSelectors_of_on_(selectors,aClass,stream){
const self = this; (self.fileOutClusters()).do_((function Exporter__(each){
return each.fileOut_selectors_of_on_(self,selectors,aClass,stream);
}
));
(selectors.sorted()).do_((function Exporter__(each){
return self.fileOutMethod_of_on_((aClass.compiledMethodAt_(each)),aClass,stream);
}
));
return self;
}
, "fileOut", unescape("fileOutSelectors%3A%20selectors%20of%3A%20aClass%20on%3A%20stream%0D%09%22%20FileOut%20methods%20implementing%20selectors%20of%20a%20class%20onto%20stream.%20%22%0D%0D%09self%20fileOutClusters%20do%3A%20%5B%3Aeach%7C%0D%09%09each%0D%09%09%09fileOut%3A%20self%20selectors%3A%20selectors%0D%09%09%09of%3A%20aClass%20on%3A%20stream%0D%09%5D.%0D%09selectors%20sorted%20do%3A%20%5B%3Aeach%7C%0D%09%09self%0D%09%09%09fileOutMethod%3A%20%28aClass%20compiledMethodAt%3A%20each%29%0D%09%09%09of%3A%20aClass%20on%3A%20stream%0D%09%5D."));
smalltalk.bind(smalltalk.Exporter, unescape("isASymbol%3A"), "isASymbol_", function Exporter__isASymbol_(aString){
const self = this; return (nil.isNil_((smalltalk.RegularExpression.fromString_(unescape("%5B%5Ea-zA-Z0-9_%3A%5D"))).exec_(aString)));
}
, "private", unescape("isASymbol%3A%20aString%0D%09%22%20Private%20-%20Return%20true%20if%20aString%20can%20be%20output%20with%20symbol%20notation.%20%22%0D%0D%09%5E%28%28RegularExpression%20fromString%3A%20%27%5B%5Ea-zA-Z0-9_%3A%5D%27%29%20exec%3A%20aString%29%20isNil"));
smalltalk.bind(smalltalk.Exporter, unescape("fileOutMethod%3A"), "fileOutMethod_", function Exporter__fileOutMethod_(aMethod){
var stream = nil;
const self = this; stream="".writeStream();
self.fileOutMethod_of_on_(aMethod,(aMethod.classField()),stream);
return stream.contents();
}
, "fileOut", unescape("fileOutMethod%3A%20aMethod%0D%09%22%20Return%20the%20fileOut%20of%20aMethod.%20%22%0D%0D%09%7C%20stream%20%7C%0D%09stream%20%3A%3D%20%27%27%20writeStream.%0D%09self%20fileOutMethod%3A%20aMethod%20of%3A%20aMethod%20classField%20on%3A%20stream.%0D%09%5Estream%20contents"));
smalltalk.bind(smalltalk.Exporter, unescape("fileOutMethod%3Aon%3A"), "fileOutMethod_on_", function Exporter__fileOutMethod_on_(aMethod,aStream){
const self = this; return self.fileOutMethod_of_on_(aMethod,(aMethod.classField()),aStream);
}
, "fileOut", unescape("fileOutMethod%3A%20aMethod%20on%3A%20aStream%0D%09%22%20Return%20the%20fileOut%20of%20aMethod.%20%22%0D%0D%09%5Eself%0D%09%09fileOutMethod%3A%20aMethod%0D%09%09of%3A%20aMethod%20classField%0D%09%09on%3A%20aStream"));
smalltalk.bind(smalltalk.Exporter, unescape("fileOutMethod%3Aof%3Aon%3A"), "fileOutMethod_of_on_", function Exporter__fileOutMethod_of_on_(aMethod,aClass,stream){
const self = this; (function Exporter__($1$){
$1$.cr();
$1$.nextChunkPut_("");
$1$.nextChunkPut_(((((" "._comma((self.globalNameFor_(aClass))))._comma(" methodsFor: "))._comma(((aMethod.category()).asLiteral())))._comma(" ")));
$1$.cr();
$1$.nextChunkPut_((aMethod.source()));
$1$.nextChunkPut_(" ");
return $1$.cr()}
)(stream);
return self;
}
, "fileOut", unescape("fileOutMethod%3A%20aMethod%20of%3A%20aClass%20on%3A%20stream%0D%09%22%20FileOut%20method%20of%20a%20class%20onto%20stream.%20%22%0D%0D%09stream%0D%09%09cr%3BnextChunkPut%3A%20%27%27%3B%0D%09%09nextChunkPut%3A%20%27%20%27%2C%20%28self%20globalNameFor%3A%20aClass%29%2C%20%27%20methodsFor%3A%20%27%2C%20aMethod%20category%20asLiteral%20%2C%27%20%27%3B%20cr%3B%0D%09%09nextChunkPut%3A%20aMethod%20source%3B%0D%09%09nextChunkPut%3A%20%27%20%27%3Bcr"));
smalltalk.bind(smalltalk.Exporter, unescape("exportCategory%3A"), "exportCategory_", function Exporter__exportCategory_(aString){
var stream = nil;
var match = nil;
const self = this; stream="".writeStream();
match=self.matchCategory_(aString);
(match.first()).do_((function Exporter__(each){
return stream.nextPutAll_((self.export_(each)));
}
));
(match.last()).do_((function Exporter__(aMethod){
return self.export_method_on_((aMethod.classField()),aMethod,stream);
}
));
return stream.contents();
}
, "export", unescape("exportCategory%3A%20aString%0D%09%22%20Return%20the%20result%20of%20exporting%20all%20the%20classes%20in%20category%20aString.%20%22%0D%0D%09%7C%20stream%20match%20%7C%0D%09stream%20%3A%3D%20%27%27%20writeStream.%0D%09match%20%3A%3D%20self%20matchCategory%3A%20aString.%0D%09match%20first%20do%3A%20%5B%3Aeach%7C%20stream%20nextPutAll%3A%20%28self%20export%3A%20each%29%20%5D.%0D%09match%20last%20do%3A%20%5B%3AaMethod%20%7C%0D%09%09self%20export%3A%20aMethod%20classField%20method%3A%20aMethod%20on%3A%20stream%0D%09%5D.%0D%09%5Estream%20contents"));
smalltalk.bind(smalltalk.Exporter, unescape("exportCategories%3A"), "exportCategories_", function Exporter__exportCategories_(categories){
const self = this; if ((categories.isString()).valueOf()) {return self.exportCategories_((categories.asArrayOfSubstrings()))};
return (categories.asArray()).inject_into_("",(function Exporter__(total,each){
return total._comma((self.exportCategory_(each)));
}
));
}
, "export", unescape("exportCategories%3A%20categories%0D%09%22%20Return%20the%20result%20of%20exporting%20all%20the%20classes%20in%20categories.%20%22%0D%0D%09categories%20isString%20ifTrue%3A%20%5B%20%5Eself%20exportCategories%3A%20categories%20asArrayOfSubstrings%20%5D.%0D%09%5Ecategories%20asArray%20inject%3A%20%27%27%20into%3A%20%5B%3Atotal%20%3Aeach%7C%0D%09%09total%2C%20%28self%20exportCategory%3A%20each%29%0D%09%5D"));
smalltalk.bind(smalltalk.Exporter, unescape("exportAllMethodsOf%3Aon%3A"), "exportAllMethodsOf_on_", function Exporter__exportAllMethodsOf_on_(aClass,stream){
const self = this; self.exportMethodsOf_on_((aClass.$klass),stream);
self.exportMethodsOf_on_(aClass,stream);
return self;
}
, "export", unescape("exportAllMethodsOf%3A%20aClass%20on%3A%20stream%0D%09%22%20Export%20all%20methods%20of%20a%20class%20%28and%20metaclass%29%20onto%20stream.%20%22%0D%0D%09self%20exportMethodsOf%3A%20aClass%20class%20on%3A%20stream.%0D%09self%20exportMethodsOf%3A%20aClass%20on%3A%20stream."));
smalltalk.bind(smalltalk.Exporter, unescape("exportDefinitionOfClass%3Aon%3A"), "exportDefinitionOfClass_on_", function Exporter__exportDefinitionOfClass_on_(aClass,stream){
const self = this; self.exportDefinitionOf_on_(aClass,stream);
self.exportMetaDefinitionOf_on_(aClass,stream);
return self;
}
, "export", unescape("exportDefinitionOfClass%3A%20aClass%20on%3A%20stream%0D%09%22%20Export%20definition%20of%20aClass%20%28and%20metaclass%29%20onto%20stream.%20%22%0D%0D%09self%20exportDefinitionOf%3A%20aClass%20on%3A%20stream.%0D%09self%20exportMetaDefinitionOf%3A%20aClass%20on%3A%20stream."));
smalltalk.bind(smalltalk.Exporter, unescape("export%3A"), "export_", function Exporter__export_(aClass){
var stream = nil;
const self = this; stream="".writeStream();
self.exportDefinitionOfClass_on_(aClass,stream);
self.exportAllMethodsOf_on_(aClass,stream);
return stream.contents();
}
, "export", unescape("export%3A%20aClass%0D%09%22%20Return%20the%20result%20of%20exporting%20definition%20and%20source%20code%20of%20a%20class.%20%22%0D%0D%09%7C%20stream%20%7C%0D%09stream%20%3A%3D%20%27%27%20writeStream.%0D%09self%20exportDefinitionOfClass%3A%20aClass%20on%3A%20stream.%0D%09self%20exportAllMethodsOf%3A%20aClass%20on%3A%20stream.%0D%09%5Estream%20contents"));
smalltalk.bind(smalltalk.Exporter, unescape("exportNew%3A"), "exportNew_", function Exporter__exportNew_(aClass){
const self = this; return self.exportDefinitionOf_(aClass);
}
, "export", unescape("exportNew%3A%20aClass%0D%09%22%20Return%20the%20result%20of%20exporting%20definition%20of%20aClass.%20%22%0D%0D%09%5Eself%20exportDefinitionOf%3A%20aClass"));
smalltalk.bind(smalltalk.Exporter, unescape("defaultRequirementsFor%3A"), "defaultRequirementsFor_", function Exporter__defaultRequirementsFor_(aClass){
var constructorName = nil;
var code = nil;
const self = this; constructorName=aClass.constructorName();
if (((nil.isNil_(constructorName))).valueOf()) {return []};
return smalltalk.Array.with_(((((((((((((unescape("if%28")._comma(constructorName))._comma(unescape("%20%26%26%20%21")))._comma((self.smalltalkNameFor_(aClass))))._comma(unescape("%29%20smalltalk.mapClassName%28%22")))._comma((self.globalNameFor_(aClass))))._comma(unescape("%22%2C%22")))._comma((aClass.category())))._comma(unescape("%22%2C")))._comma(constructorName))._comma(unescape("%2C")))._comma((self.smalltalkNameFor_((aClass.superclass())))))._comma(unescape("%29%3B"))));
}
, "requirements", unescape("defaultRequirementsFor%3A%20aClass%0D%09%22%20Private%20-%20Return%20the%20default%20requirements%20to%20load%20aClass.%0D%09Detect%20native%20bindings%20and%20generate%20code%20to%20rebind%20before%20class%20definition.%0D%09%22%0D%0D%09%7C%20constructorName%20code%20%7C%0D%09constructorName%20%3A%3D%20aClass%20constructorName.%0D%09constructorName%20isNil%20ifTrue%3A%20%5B%20%5E%23%28%29%20%5D.%0D%09%5EArray%20with%3A%0D%09%09%27if%28%27%2CconstructorName%2C%27%20%26%26%20%21%27%0D%09%09%2C%20%28self%20smalltalkNameFor%3A%20aClass%29%0D%09%09%2C%27%29%20smalltalk.mapClassName%28%22%27%0D%09%09%2C%28self%20globalNameFor%3A%20aClass%29%20%2C%27%22%2C%22%27%0D%09%09%2CaClass%20category%2C%20%27%22%2C%27%0D%09%09%2CconstructorName%2C%20%27%2C%27%0D%09%09%2C%28self%20smalltalkNameFor%3A%20aClass%20superclass%29%0D%09%09%2C%27%29%3B%27"));
smalltalk.bind(smalltalk.Exporter, unescape("loadRequirementsOf%3A"), "loadRequirementsOf_", function Exporter__loadRequirementsOf_(aClass){
var requirements = nil;
const self = this; requirements=self.defaultRequirementsFor_(aClass);
aClass.loadRequirementsInto_(requirements);
return requirements;
}
, "requirements", unescape("loadRequirementsOf%3A%20aClass%0D%09%22%20Return%20the%20requirements%20to%20load%20aClass.%0D%09It%20must%20be%20a%20collection%20of%20requirements.%0D%09aRequirement%20must%20implement%20%23fileOutOn%3A%20or%20must%20be%20a%20string%20with%20javascript%20code%20to%20execute%20just%20before%20defining%20aClass.%0D%09%22%0D%0D%09%7C%20requirements%20%7C%0D%09requirements%20%3A%3D%20self%20defaultRequirementsFor%3A%20aClass.%0D%09aClass%20loadRequirementsInto%3A%20requirements.%0D%09%5Erequirements"));
smalltalk.bind(smalltalk.Exporter, unescape("exportDefinitionOf%3Aon%3A"), "exportDefinitionOf_on_", function Exporter__exportDefinitionOf_on_(aClass,aStream){
const self = this; (self.loadRequirementsOf_(aClass)).do_((function Exporter__(each){
if ((each.isString()).valueOf()) {return (function Exporter__($1$){
$1$.nextPutAll_(each);
return $1$.cr()}
)(aStream)} else {return aStream.fileOutOn_(aStream)};
}
));
(function Exporter__($2$){
$2$.nextPutAll_(((unescape("smalltalk.addClass%28%22")._comma((self.globalNameFor_(aClass))))._comma(unescape("%22%2C"))));
$2$.nextPutAll_((self.smalltalkNameFor_((aClass.superclass()))));
return $2$.nextPutAll_(unescape("%2C%20%5B"))}
)(aStream);
(aClass.instanceVariableNames()).do_separatedBy_((function Exporter__(each){
return aStream.nextPutAll_(((unescape("%27")._comma(each))._comma(unescape("%27"))));
}
),(function Exporter__(){
return aStream.nextPutAll_(unescape("%2C%20"));
}
));
(function Exporter__($3$){
$3$.nextPutAll_(unescape("%5D%2C%20%27"));
$3$.nextPutAll_(((aClass.category())._comma(unescape("%27"))));
$3$.nextPutAll_(unescape("%29%3B"));
return $3$.cr()}
)(aStream);
if ((((nil.isNil_(aClass.comment())===false)).and_((function Exporter__(){
return (aClass.comment()).notEmpty();
}
))).valueOf()) {(function Exporter__($4$){
$4$.nextPutAll_((self.smalltalkNameFor_(aClass)));
$4$.nextPutAll_((unescape(".%24comment%3D")._comma(((aClass.comment()).escapedCode()))));
$4$.nextPutAll_(unescape("%3B"));
return $4$.cr()}
)(aStream)};
if (((nil.isNil_(aClass.classVariables())===false)).valueOf()) {(function Exporter__($5$){
$5$.nextPutAll_((self.smalltalkNameFor_(aClass)));
$5$.nextPutAll_((unescape(".%24classVariableNames%3D")._comma(((aClass.classVariablesString()).escapedCode()))));
$5$.nextPutAll_(unescape("%3B"));
return $5$.cr()}
)(aStream)};
if (((nil.isNil_(aClass.poolDictionaries())===false)).valueOf()) {(function Exporter__($6$){
$6$.nextPutAll_((self.smalltalkNameFor_(aClass)));
return $6$.nextPutAll_(unescape(".%24poolDictionaries%3D%5B"))}
)(aStream);
(aClass.poolDictionaries()).do_separatedBy_((function Exporter__(each){
return aStream.nextPutAll_(((unescape("%27")._comma(each))._comma(unescape("%27"))));
}
),(function Exporter__(){
return aStream.nextPutAll_(unescape("%2C%20"));
}
));
(function Exporter__($7$){
$7$.nextPutAll_(unescape("%5D%3B"));
return $7$.cr()}
)(aStream)};
if (((aClass.propertyNames()).notEmpty()).valueOf()) {(function Exporter__($8$){
$8$.nextPutAll_((self.smalltalkNameFor_(aClass)));
return $8$.nextPutAll_(unescape(".%24propertyNames%3D%5B"))}
)(aStream);
(aClass.propertyNames()).do_separatedBy_((function Exporter__(each){
return aStream.nextPutAll_(((unescape("%27")._comma(each))._comma(unescape("%27"))));
}
),(function Exporter__(){
return aStream.nextPutAll_(unescape("%2C%20"));
}
));
(function Exporter__($9$){
$9$.nextPutAll_(unescape("%5D%3B"));
return $9$.cr()}
)(aStream)};
return self;
}
, "private", unescape("exportDefinitionOf%3A%20aClass%20on%3A%20aStream%0D%09%22%20Export%20definition%20of%20aClass%20onto%20aStream.%20%22%0D%0D%09%28self%20loadRequirementsOf%3A%20aClass%29%20do%3A%20%5B%3Aeach%7C%0D%09%09each%20isString%0D%09%09ifTrue%3A%20%5B%20aStream%20nextPutAll%3A%20each%3Bcr%20%5D%0D%09%09ifFalse%3A%20%5B%20aStream%20fileOutOn%3A%20aStream%20%5D.%0D%09%5D.%0D%09aStream%0D%09%20%20%20%20nextPutAll%3A%20%27smalltalk.addClass%28%22%27%2C%20%28self%20globalNameFor%3A%20aClass%29%2C%20%27%22%2C%27%3B%0D%09%20%20%20%20nextPutAll%3A%20%28self%20smalltalkNameFor%3A%20aClass%20superclass%29%3B%0D%09%20%20%20%20nextPutAll%3A%20%27%2C%20%5B%27.%0D%09aClass%20instanceVariableNames%0D%09%20%20%20%20do%3A%20%5B%3Aeach%20%7C%20aStream%20nextPutAll%3A%20%27%27%27%27%2C%20each%2C%20%27%27%27%27%20%5D%0D%09%20%20%20%20separatedBy%3A%20%5B%20aStream%20nextPutAll%3A%20%27%2C%20%27%20%5D.%0D%09aStream%0D%09%20%20%20%20nextPutAll%3A%20%27%5D%2C%20%27%27%27%3B%0D%09%20%20%20%20nextPutAll%3A%20aClass%20category%2C%20%27%27%27%27%3B%0D%09%20%20%20%20nextPutAll%3A%20%27%29%3B%27%3B%20cr.%0D%09%28aClass%20comment%20notNil%20and%3A%20%5BaClass%20comment%20notEmpty%5D%29%20ifTrue%3A%20%5B%0D%09%20%20%20%20aStream%0D%09%09nextPutAll%3A%20%28self%20smalltalkNameFor%3A%20aClass%29%3B%0D%09%09nextPutAll%3A%20%27.%24comment%3D%27%20%2CaClass%20comment%20escapedCode%3B%0D%09%09nextPutAll%3A%20%27%3B%27%3B%20cr%0D%09%5D.%0D%09aClass%20classVariables%20notNil%20ifTrue%3A%20%5B%0D%09%20%20%20%20aStream%0D%09%09nextPutAll%3A%20%28self%20smalltalkNameFor%3A%20aClass%29%3B%0D%09%09nextPutAll%3A%20%27.%24classVariableNames%3D%27%20%2CaClass%20classVariablesString%20escapedCode%3B%0D%09%09nextPutAll%3A%20%27%3B%27%3B%20cr%0D%09%5D.%0D%09aClass%20poolDictionaries%20notNil%20ifTrue%3A%20%5B%0D%09%20%20%20%20aStream%0D%09%09nextPutAll%3A%20%28self%20smalltalkNameFor%3A%20aClass%29%3B%0D%09%09nextPutAll%3A%20%27.%24poolDictionaries%3D%5B%27.%0D%09%20%20%20%20aClass%20poolDictionaries%0D%09%20%20%20%20%09do%3A%20%5B%3Aeach%20%7C%20aStream%20nextPutAll%3A%20%27%27%27%27%2C%20each%2C%20%27%27%27%27%20%5D%0D%09%20%20%20%20%09separatedBy%3A%20%5B%20aStream%20nextPutAll%3A%20%27%2C%20%27%20%5D.%0D%09%20%20%20%20aStream%20%20nextPutAll%3A%20%27%5D%3B%27%3B%20cr%0D%09%5D.%0D%09aClass%20propertyNames%20notEmpty%20ifTrue%3A%20%5B%0D%09%20%20%20%20aStream%0D%09%09nextPutAll%3A%20%28self%20smalltalkNameFor%3A%20aClass%29%3B%0D%09%09nextPutAll%3A%20%27.%24propertyNames%3D%5B%27.%0D%09%20%20%20%20aClass%20propertyNames%0D%09%20%20%20%20%09do%3A%20%5B%3Aeach%20%7C%20aStream%20nextPutAll%3A%20%27%27%27%27%2C%20each%2C%20%27%27%27%27%20%5D%0D%09%20%20%20%20%09separatedBy%3A%20%5B%20aStream%20nextPutAll%3A%20%27%2C%20%27%20%5D.%0D%09%20%20%20%20aStream%20%20nextPutAll%3A%20%27%5D%3B%27%3B%20cr%0D%09%5D."));
smalltalk.bind(smalltalk.Exporter, unescape("exportMetaDefinitionOf%3Aon%3A"), "exportMetaDefinitionOf_on_", function Exporter__exportMetaDefinitionOf_on_(aClass,aStream){
const self = this; if ((((aClass.$klass).instanceVariableNames()).notEmpty()).valueOf()) {(function Exporter__($1$){
$1$.nextPutAll_((self.smalltalkNameFor_((aClass.$klass))));
return $1$.nextPutAll_(unescape(".%24iVarNames%20%3D%20%5B"))}
)(aStream);
((aClass.$klass).instanceVariableNames()).do_separatedBy_((function Exporter__(each){
return aStream.nextPutAll_(((unescape("%27")._comma(each))._comma(unescape("%27"))));
}
),(function Exporter__(){
return aStream.nextPutAll_(unescape("%2C"));
}
));
(function Exporter__($2$){
$2$.nextPutAll_(unescape("%5D%3B"));
return $2$.cr()}
)(aStream)};
if ((((aClass.$klass).propertyNames()).notEmpty()).valueOf()) {(function Exporter__($3$){
$3$.nextPutAll_((self.smalltalkNameFor_((aClass.$klass))));
return $3$.nextPutAll_(unescape(".%24propertyNames%20%3D%20%5B"))}
)(aStream);
((aClass.$klass).propertyNames()).do_separatedBy_((function Exporter__(each){
return aStream.nextPutAll_(((unescape("%27")._comma(each))._comma(unescape("%27"))));
}
),(function Exporter__(){
return aStream.nextPutAll_(unescape("%2C"));
}
));
(function Exporter__($4$){
$4$.nextPutAll_(unescape("%5D%3B"));
return $4$.cr()}
)(aStream)};
return self;
}
, "private", unescape("exportMetaDefinitionOf%3A%20aClass%20on%3A%20aStream%0D%09%22%20Export%20class%20side%20definition%20of%20aClass%20onto%20aStream.%20%22%0D%0D%09aClass%20class%20instanceVariableNames%20notEmpty%20ifTrue%3A%20%5B%0D%09%09aStream%0D%09%09%09nextPutAll%3A%20%28self%20smalltalkNameFor%3A%20aClass%20class%29%3B%0D%09%09%09nextPutAll%3A%20%27.%24iVarNames%20%3D%20%5B%27.%0D%09%09aClass%20class%20instanceVariableNames%0D%09%09%09do%3A%20%5B%3Aeach%20%7C%20aStream%20nextPutAll%3A%20%27%27%27%27%2C%20each%2C%20%27%27%27%27%20%5D%0D%09%09%09separatedBy%3A%20%5B%20aStream%20nextPutAll%3A%20%27%2C%27%20%5D.%0D%09%09aStream%20nextPutAll%3A%20%27%5D%3B%27%3B%20cr.%0D%09%5D.%0D%0D%09aClass%20class%20propertyNames%20notEmpty%20ifTrue%3A%20%5B%0D%09%09aStream%0D%09%09%09nextPutAll%3A%20%28self%20smalltalkNameFor%3A%20aClass%20class%29%3B%0D%09%09%09nextPutAll%3A%20%27.%24propertyNames%20%3D%20%5B%27.%0D%09%09aClass%20class%20propertyNames%0D%09%09%09do%3A%20%5B%3Aeach%20%7C%20aStream%20nextPutAll%3A%20%27%27%27%27%2C%20each%2C%20%27%27%27%27%20%5D%0D%09%09%09separatedBy%3A%20%5B%20aStream%20nextPutAll%3A%20%27%2C%27%20%5D.%0D%09%09aStream%20nextPutAll%3A%20%27%5D%3B%27%3B%20cr.%0D%09%5D."));
smalltalk.bind(smalltalk.Exporter, unescape("smalltalkNameFor%3A"), "smalltalkNameFor_", function Exporter__smalltalkNameFor_(aClass){
const self = this; if (((nil.isNil_(aClass))).valueOf()) {return "undefined"};
return "smalltalk."._comma(((aClass.isMetaclass()).ifTrue_ifFalse_((function Exporter__(){
return ((aClass.instanceClass()).name())._comma(".$klass");
}
),(function Exporter__(){
return aClass.name();
}
))));
}
, "private", unescape("smalltalkNameFor%3A%20aClass%0D%09%22%20Private%20-%20Return%20the%20javascript%20reference%20expression%20of%20aClass%20%28or%20nil%29.%20%22%0D%0D%09aClass%20isNil%20ifTrue%3A%20%5B%20%5E%23undefined%20%5D.%0D%09%5E%27smalltalk.%27%2C%20%28aClass%20isMetaclass%0D%09%20%20%20%20ifTrue%3A%20%5B%20aClass%20instanceClass%20name%2C%20%27.%24klass%27%20%5D%0D%09%20%20%20%20ifFalse%3A%20%5B%20aClass%20name%20%5D%29"));
smalltalk.bind(smalltalk.Exporter, unescape("globalNameFor%3A"), "globalNameFor_", function Exporter__globalNameFor_(aClass){
const self = this; if (((nil.isNil_(aClass))).valueOf()) {return "nil"} else {return aClass.name()};
}
, "private", unescape("globalNameFor%3A%20aClass%0D%09%22%20Private%20-%20Return%20the%20smalltalk%20name%20of%20aClass%20%28or%20nil%29.%20%22%0D%0D%09%5EaClass%20isNil%20ifTrue%3A%20%5B%20%23nil%20%5D%20ifFalse%3A%20%5B%20aClass%20name%20%5D"));
smalltalk.bind(smalltalk.Exporter, unescape("exportAll"), "exportAll", function Exporter__exportAll(){
const self = this; return self.exportClasses_(((self.$klass).allClasses()));
}
, "export", unescape("exportAll%0D%09%22%20Return%20the%20result%20of%20exporting%20all%20classes%20in%20the%20system.%20%22%0D%0D%09%5Eself%20exportClasses%3A%20self%20class%20allClasses"));
smalltalk.bind(smalltalk.Exporter, unescape("exportAllCategories"), "exportAllCategories", function Exporter__exportAllCategories(){
var categories = nil;
const self = this; categories=smalltalk.Array.$$new();
((self.$klass).allClasses()).do_((function Exporter__(each){
if ((categories.includes_((each.category()))).not()) {return categories.add_((each.category()))} else {return nil};
}
));
return categories.inject_into_("",(function Exporter__(total,each){
return total._comma((self.exportCategory_(each)));
}
));
}
, "export", unescape("exportAllCategories%0D%09%22%20Return%20the%20result%20of%20exporting%20all%20categories%20in%20the%20system.%20%22%0D%0D%09%7C%20categories%20%7C%0D%09categories%20%3A%3D%20Array%20new.%0D%09self%20class%20allClasses%20do%3A%20%5B%3Aeach%20%7C%0D%09%09%28categories%20includes%3A%20each%20category%29%20ifFalse%3A%20%5B%0D%09%09%09categories%20add%3A%20each%20category%0D%09%09%5D%0D%09%5D.%0D%09%5Ecategories%20inject%3A%20%27%27%20into%3A%20%5B%3Atotal%20%3Aeach%20%7C%20total%20%2C%28self%20exportCategory%3A%20each%29%20%5D"));
smalltalk.bind(smalltalk.Exporter, unescape("exportDefinitionOf%3A"), "exportDefinitionOf_", function Exporter__exportDefinitionOf_(aClass){
var stream = nil;
const self = this; stream=(smalltalk.String.$$new()).writeStream();
self.exportDefinitionOf_on_(aClass,stream);
return stream.contents();
}
, "export", unescape("exportDefinitionOf%3A%20aClass%0D%09%22%20Return%20the%20result%20of%20exporting%20definition%20of%20aClass.%20%22%0D%0D%09%7C%20stream%20%7C%0D%09stream%20%3A%3D%20String%20new%20writeStream.%0D%09self%20exportDefinitionOf%3A%20aClass%20on%3A%20stream.%0D%09%5Estream%20contents"));
smalltalk.bind(smalltalk.Exporter, unescape("exportMetaDefinitionOf%3A"), "exportMetaDefinitionOf_", function Exporter__exportMetaDefinitionOf_(aClass){
var stream = nil;
const self = this; stream=(smalltalk.String.$$new()).writeStream();
self.exportMetaDefinitionOf_on_(aClass,stream);
return stream.contents();
}
, "export", unescape("exportMetaDefinitionOf%3A%20aClass%0D%09%22%20Return%20the%20result%20of%20exporting%20class%20side%20definition%20of%20aClass.%20%22%0D%0D%09%7C%20stream%20%7C%0D%09stream%20%3A%3D%20String%20new%20writeStream.%0D%09self%20exportMetaDefinitionOf%3A%20aClass%20on%3A%20stream.%0D%09%5Estream%20contents"));
smalltalk.bind(smalltalk.Exporter, unescape("exportClasses%3Aon%3A"), "exportClasses_on_", function Exporter__exportClasses_on_(classes,stream){
const self = this; return self.exportAll_on_(classes,stream);
}
, "export", unescape("exportClasses%3A%20classes%20on%3A%20stream%0D%09%22%20Return%20the%20result%20of%20exporting%20class%20definitions%20onto%20stream.%20%22%0D%0D%09%5Eself%20exportAll%3A%20classes%20on%3A%20stream"));
smalltalk.bind(smalltalk.Exporter, unescape("exportAll%3Aon%3A"), "exportAll_on_", function Exporter__exportAll_on_(elements,stream){
const self = this; if ((elements.isString()).valueOf()) {return self.exportAll_on_((elements.asArrayOfSubstrings()),stream)};
elements.do_((function Exporter__(each){
if (((smalltalk.is_kindOf_(each,smalltalk.Behavior))).valueOf()) {return self.exportDefinitionOfClass_on_(each,stream)} else {return nil};
}
));
stream.cr();
elements.do_((function Exporter__(each){
if (((smalltalk.is_kindOf_(each,smalltalk.Behavior))).valueOf()) {return self.exportAllMethodsOf_on_(each,stream)} else {if ((each.isString()).valueOf()) {return (function Exporter__($1$){
$1$.nextPutAll_((self.exportCategory_(each)));
return $1$.cr()}
)(stream)} else {return self.exportMethod_on_(each,stream)}};
}
));
return self;
}
, "export", unescape("exportAll%3A%20elements%20on%3A%20stream%0D%09%22%20Return%20the%20result%20of%20exporting%20elements%20%28classes%2C%20methods%20and/or%20categories%29%20onto%20stream.%20%22%0D%0D%09elements%20isString%20ifTrue%3A%20%5B%20%5Eself%20exportAll%3A%20elements%20asArrayOfSubstrings%20on%3A%20stream%20%5D.%0D%09elements%20do%3A%20%5B%3Aeach%7C%0D%09%09%28each%20isKindOf%3A%20Behavior%29%20ifTrue%3A%20%5B%0D%09%09%09self%20exportDefinitionOfClass%3A%20each%20on%3A%20stream%0D%09%09%5D.%0D%09%5D.%0D%09stream%20cr.%0D%09elements%20do%3A%20%5B%3Aeach%7C%0D%09%09%28each%20isKindOf%3A%20Behavior%29%20ifTrue%3A%20%5B%0D%09%09%09self%20exportAllMethodsOf%3A%20each%20on%3A%20stream%0D%09%09%5D%20ifFalse%3A%20%5B%0D%09%09%09each%20isString%0D%09%09%09ifTrue%3A%20%5B%20stream%20nextPutAll%3A%20%28self%20exportCategory%3A%20each%29%3Bcr%20%5D%0D%09%09%09ifFalse%3A%20%5B%20self%20exportMethod%3A%20each%20on%3A%20stream%20%5D%0D%09%09%5D%0D%09%5D."));
smalltalk.bind(smalltalk.Exporter, unescape("exportAll%3A"), "exportAll_", function Exporter__exportAll_(elements){
var stream = nil;
const self = this; stream=(smalltalk.String.$$new()).writeStream();
self.exportAll_on_(elements,stream);
return stream.contents();
}
, "export", unescape("exportAll%3A%20elements%0D%09%22%20Return%20the%20result%20of%20exporting%20elements%20%28classes%2C%20methods%20and/or%20categories%29.%20%22%0D%0D%09%7C%20stream%20%7C%0D%09stream%20%3A%3D%20String%20new%20writeStream.%0D%09self%20exportAll%3A%20elements%20on%3A%20stream.%0D%09%5Estream%20contents"));
smalltalk.bind(smalltalk.Exporter, unescape("exportClasses%3A"), "exportClasses_", function Exporter__exportClasses_(classes){
var stream = nil;
const self = this; stream=(smalltalk.String.$$new()).writeStream();
self.exportClasses_on_(classes,stream);
return stream.contents();
}
, "export", unescape("exportClasses%3A%20classes%0D%09%22%20Return%20the%20result%20of%20exporting%20classes.%20%22%0D%0D%09%7C%20stream%20%7C%0D%09stream%20%3A%3D%20String%20new%20writeStream.%0D%09self%20exportClasses%3A%20classes%20on%3A%20stream.%0D%09%5Estream%20contents"));
smalltalk.bind(smalltalk.Exporter, unescape("exportObject%3Aon%3A"), "exportObject_on_", function Exporter__exportObject_on_(anObject,stream){
const self = this; stream.nextPutAll_((anObject.asJavascript()));
return self;
}
, "export", unescape("exportObject%3A%20anObject%20on%3A%20stream%0D%09%22%20Export%20a%20%28javascript%29literal%20representation%20of%20anObject%20onto%20stream.%20%22%0D%0D%09stream%20nextPutAll%3A%20anObject%20asJavascript."));
smalltalk.bind(smalltalk.Exporter, unescape("exportObject%3A"), "exportObject_", function Exporter__exportObject_(anObject){
var stream = nil;
const self = this; stream=(smalltalk.String.$$new()).writeStream();
self.exportObject_on_(anObject,stream);
return stream.contents();
}
, "export", unescape("exportObject%3A%20anObject%0D%09%22%20Return%20the%20result%20of%20exporting%20a%20literal%20representation%20of%20anObject.%20%22%0D%0D%09%7C%20stream%20%7C%0D%09stream%20%3A%3D%20String%20new%20writeStream.%0D%09self%20exportObject%3A%20anObject%20on%3A%20stream.%0D%09%5Estream%20contents"));
smalltalk.bind(smalltalk.Exporter, unescape("export%3Amethod%3A"), "export_method_", function Exporter__export_method_(aClass,aMethod){
var stream = nil;
const self = this; stream=(smalltalk.String.$$new()).writeStream();
self.export_method_on_(aClass,aMethod,stream);
return stream.contents();
}
, "export", unescape("export%3A%20aClass%20method%3A%20aMethod%0D%09%22%20Return%20the%20result%20of%20exporting%20aClass%20method.%20%22%0D%0D%09%7C%20stream%20%7C%0D%09stream%20%3A%3D%20String%20new%20writeStream.%0D%09self%20export%3A%20aClass%20method%3A%20aMethod%20on%3A%20stream.%0D%09%5Estream%20contents"));
smalltalk.bind(smalltalk.Exporter, unescape("exportMethod%3A"), "exportMethod_", function Exporter__exportMethod_(aMethod){
const self = this; return self.export_method_((aMethod.classField()),aMethod);
}
, "export", unescape("exportMethod%3A%20aMethod%0D%09%22%20Return%20the%20result%20of%20exporting%20aMethod.%20%22%0D%0D%09%5Eself%20export%3A%20aMethod%20classField%20method%3A%20aMethod"));
smalltalk.bind(smalltalk.Exporter, unescape("exportMethod%3Aon%3A"), "exportMethod_on_", function Exporter__exportMethod_on_(aMethod,aStream){
const self = this; return self.export_method_on_((aMethod.classField()),aMethod,aStream);
}
, "export", unescape("exportMethod%3A%20aMethod%20on%3A%20aStream%0D%09%22%20Return%20the%20result%20of%20exporting%20aMethod%20on%20stream.%20%22%0D%0D%09%5Eself%20export%3A%20aMethod%20classField%20method%3A%20aMethod%20on%3A%20aStream"));
smalltalk.bind(smalltalk.Exporter, unescape("exportMethods%3Aon%3A"), "exportMethods_on_", function Exporter__exportMethods_on_(aCollection,aStream){
const self = this; aCollection.do_((function Exporter__(each){
return self.exportMethod_on_(each,aStream);
}
));
return self;
}
, "export", unescape("exportMethods%3A%20aCollection%20on%3A%20aStream%0D%09%22%20Return%20the%20result%20of%20exporting%20aCollection%20of%20methods%20on%20stream.%20%22%0D%0D%09aCollection%20do%3A%20%5B%3Aeach%7C%20self%20exportMethod%3A%20each%20on%3A%20aStream%20%5D"));
smalltalk.bind(smalltalk.Exporter, unescape("exportMethods%3A"), "exportMethods_", function Exporter__exportMethods_(aCollection){
var stream = nil;
const self = this; stream=(smalltalk.String.$$new()).writeStream();
self.exportMethods_on_(aCollection,stream);
return stream.contents();
}
, "export", unescape("exportMethods%3A%20aCollection%0D%09%22%20Return%20the%20result%20of%20exporting%20aCollection%20of%20methods.%20%22%0D%0D%09%7C%20stream%20%7C%0D%09stream%20%3A%3D%20String%20new%20writeStream.%0D%09self%20exportMethods%3A%20aCollection%20on%3A%20stream.%0D%09%5Estream%20contents"));
smalltalk.bind(smalltalk.Exporter, unescape("exportMethodsOf%3Aon%3A"), "exportMethodsOf_on_", function Exporter__exportMethodsOf_on_(aClass,aStream){
const self = this; aClass.methodsDo_((function Exporter__(each){
return self.export_method_on_(aClass,each,aStream);
}
));
return self;
}
, "private", unescape("exportMethodsOf%3A%20aClass%20on%3A%20aStream%0D%09%22%20Export%20methods%20of%20aClass%20onto%20aStream.%20%22%0D%0D%09aClass%20methodsDo%3A%20%5B%3Aeach%7C%0D%09%09self%20export%3A%20aClass%20method%3A%20each%20on%3A%20aStream%0D%09%5D"));
smalltalk.bind(smalltalk.Exporter, unescape("javascriptSourceFor%3A"), "javascriptSourceFor_", function Exporter__javascriptSourceFor_(aMethod){
const self = this; return (aMethod.fn()).compiledSource();
}
, "private", unescape("javascriptSourceFor%3A%20aMethod%0D%09%22%20Private%20-%20Return%20the%20code%20of%20javascript%20function%20implementing%20aMethod.%20%22%0D%0D%09%5EaMethod%20fn%20compiledSource"));
smalltalk.bind(smalltalk.Exporter, unescape("export%3Amethod%3Aon%3A"), "export_method_on_", function Exporter__export_method_on_(aClass,aMethod,aStream){
var functionName = nil;
var selectorName = nil;
var bar = nil;
const self = this; bar=unescape("%22").asString();
functionName=aMethod.selector();
if (((functionName.first()).isBackSlash()).valueOf()) {selectorName=(aMethod.selector()).escapedCode();
functionName=(functionName.asSelector()).escapedCode()} else {selectorName=(bar._comma((aMethod.selector())))._comma(bar);
if (((functionName.asSelector())._eq(((aMethod.selector()).replace_with_(unescape("%5C%3A"),"_")))).valueOf()) {functionName="0"} else {functionName=(bar._comma((functionName.asSelector())))._comma(bar)}};
aStream.nextPutAll_((((((((unescape("smalltalk.bind%28")._comma((self.smalltalkNameFor_(aClass))))._comma(unescape("%2C")))._comma(selectorName))._comma(unescape("%2C")))._comma(functionName))._comma(unescape("%0D%2C")))._comma((self.javascriptSourceFor_(aMethod)))));
if ((((nil.isNil_(aMethod.source())===false)).and_((function Exporter__(){
return (aMethod.source()).notEmpty();
}
))).valueOf()) {(function Exporter__($1$){
$1$.cr();
return $1$.nextPutAll_((((unescape("%2C")._comma(((aMethod.category()).escapedCode())))._comma(unescape("%2C")))._comma(((aMethod.source()).escapedCode()))))}
)(aStream)};
aStream.nextPutAll_(unescape("%29%3B%0D"));
return self;
}
, "export", unescape("export%3A%20aClass%20method%3A%20aMethod%20on%3A%20aStream%0D%09%22%20Export%20a%20method%20definition%20of%20aClass%20onto%20aStream.%20%22%0D%0D%09%7C%20functionName%20selectorName%20bar%20%7C%0D%09bar%20%3A%3D%20%24%22%20asString.%0D%09functionName%20%3A%3D%20aMethod%20selector.%0D%09functionName%20first%20isBackSlash%20ifTrue%3A%20%5B%0D%09%09selectorName%20%3A%3D%20aMethod%20selector%20escapedCode.%0D%09%09functionName%20%3A%3D%20functionName%20asSelector%20escapedCode.%0D%09%5D%20ifFalse%3A%20%5B%0D%09%09selectorName%20%3A%3D%20bar%20%2CaMethod%20selector%2C%20bar.%0D%09%09functionName%20asSelector%20%3D%20%28aMethod%20selector%20replace%3A%20%27%5C%3A%27%20with%3A%20%24_%29%20ifTrue%3A%20%5B%0D%09%09%09functionName%20%3A%3D%20%270%27%20%22we%20exploit%20the%20fact%20that%200%20isNil%20to%20signal%20a%20compact%20selector%22%0D%09%09%5D%20ifFalse%3A%20%5B%0D%09%09%09functionName%20%3A%3D%20bar%20%2CfunctionName%20asSelector%2C%20bar%0D%09%09%5D.%0D%09%5D.%0D%09aStream%0D%09%09nextPutAll%3A%20%27smalltalk.bind%28%27%2C%20%28self%20smalltalkNameFor%3A%20aClass%29%0D%09%09%09%2C%27%2C%27%2C%20selectorName%2C%20%27%2C%27%2C%20functionName%20%2C%27%0D%2C%27%09%09%09%2C%20%28self%20javascriptSourceFor%3A%20aMethod%29.%0D%09%28aMethod%20source%20notNil%20and%3A%20%5B%20aMethod%20source%20notEmpty%20%5D%29%20ifTrue%3A%20%5B%0D%09%20%20%20%20aStream%20cr%3B%20%22warning%3A%20this%20cr%20is%20important%20for%20debugger%22%0D%09%09nextPutAll%3A%20%27%2C%27%2C%20aMethod%20category%20escapedCode%0D%09%09%09%2C%27%2C%27%2C%20aMethod%20source%20escapedCode.%0D%09%5D.%0D%09aStream%20nextPutAll%3A%20%27%29%3B%0D%27"));
smalltalk.bind(smalltalk.String, unescape("showIt"), "showIt", function String__showIt(){
const self = this; return self.print_((self.logEvaluate()));
}
, "Tools-evaluating", unescape("showIt%0D%09%22%20Show/Print%20the%20result%20of%20evaluating%20the%20receiver.%20%22%0D%0D%09%5Eself%20print%3A%20self%20logEvaluate"));
smalltalk.bind(smalltalk.String, unescape("logEvaluate"), "logEvaluate", function String__logEvaluate(){
const self = this; return (function String__(){
return self.evaluate();
}
).logEvaluate_(self);
}
, "Tools-evaluating", unescape("logEvaluate%0D%09%22%20Return%20the%20result%20of%20evaluating%20the%20receiver.%0D%09The%20source%20of%20evaluation%20will%20be%20logged.%0D%09%22%0D%0D%09%5E%5B%20self%20evaluate%20%5D%20logEvaluate%3A%20self%20"));
smalltalk.bind(smalltalk.String, unescape("evaluate"), "evaluate", function String__evaluate(){
const self = this; return ((self.smalltalk()).compilerSupport()).evaluate_(self);
}
, "Tools-evaluating", unescape("evaluate%0D%09%22%20Return%20the%20result%20of%20evaluating%20the%20receiver.%20%22%0D%0D%09%5Eself%20smalltalk%20compilerSupport%20evaluate%3A%20self%20"));
smalltalk.bind(smalltalk.String, unescape("evaluateIn%3A"), "evaluateIn_", function String__evaluateIn_(aReceiver){
const self = this; return ((self.smalltalk()).compilerSupport()).evaluate_to_(self,aReceiver);
}
, "Tools-evaluating", unescape("evaluateIn%3A%20aReceiver%0D%09%22%20Return%20the%20result%20of%20evaluating%20the%20receiver%20in%20the%20context%20of%20aReceiver.%20%22%0D%0D%09%5Eself%20smalltalk%20compilerSupport%20evaluate%3A%20self%20to%3A%20aReceiver"));
smalltalk.bind(smalltalk.String, unescape("doIt"), "doIt", function String__doIt(){
const self = this; return ((self.smalltalk()).compilerSupport()).doIt_(self);
}
, "Tools-evaluating", unescape("doIt%0D%09%22%20Return%20the%20result%20of%20evaluating%20the%20receiver%20or%20the%20error%20occurred%20during%20compilation%20or%20evaluation.%20%22%0D%0D%09%5Eself%20smalltalk%20compilerSupport%20doIt%3A%20self"));
smalltalk.bind(smalltalk.Smalltalk, unescape("fileInCode%3A"), "fileInCode_", function Smalltalk__fileInCode_(code){
const self = this; return (code.stream()).fileIn();
}
, "Tools-fileIn", unescape("fileInCode%3A%20code%0D%09%22%20FileIn%20the%20code%20into%20the%20receiver.%20%22%0D%0D%09%5Ecode%20stream%20fileIn"));
smalltalk.bind(smalltalk.String, unescape("fileIn"), "fileIn", function String__fileIn(){
const self = this; return (self.stream()).fileIn();
}
, "Tools-fileIn", unescape("fileIn%0D%09%22%20FileIn%20the%20contents%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20stream%20fileIn"));
smalltalk.bind(smalltalk.String, unescape("fileOut"), "fileOut", function String__fileOut(){
const self = this; return smalltalk.Exporter.fileOut_(self);
}
, "Tools-fileOut", unescape("fileOut%0D%09%22%20FileOut%20the%20classes/categories%20in%20the%20receiver.%20%22%0D%0D%09%5EExporter%20fileOut%3A%20self"));
smalltalk.bind(smalltalk.String, unescape("export"), "$$export", function String__$$export(){
const self = this; return smalltalk.Exporter.export_(self);
}
, "Tools-fileOut", unescape("export%0D%09%22%20Export%20the%20classes/categories%20in%20the%20receiver.%20%22%0D%0D%09%5EExporter%20export%3A%20self"));
smalltalk.bind(smalltalk.Behavior, unescape("fileOut"), "fileOut", function Behavior__fileOut(){
const self = this; return smalltalk.Exporter.fileOut_((self.instanceClass()));
}
, "Tools-fileOut", unescape("fileOut%0D%09%22%20Return%20fileOut%20definition%20and%20code%20of%20a%20class.%20%22%0D%0D%09%5EExporter%20fileOut%3A%20self%20instanceClass"));
smalltalk.bind(smalltalk.Behavior, unescape("export"), "$$export", function Behavior__$$export(){
const self = this; return smalltalk.Exporter.export_((self.instanceClass()));
}
, "Tools-export", unescape("export%0D%09%22%20Return%20the%20result%20of%20exporting%20definition%20and%20source%20code%20of%20a%20class.%20%22%0D%0D%09%5EExporter%20export%3A%20self%20instanceClass"));
smalltalk.bind(smalltalk.Collection, unescape("fileOut"), "fileOut", function Collection__fileOut(){
var cr = nil;
const self = this; cr=unescape("%0D");
return self.inject_into_("",(function Collection__(total,each){
return (total._comma(cr))._comma((each.fileOut()));
}
));
}
, "Tools-fileOut", unescape("fileOut%0D%09%22%20Return%20fileOut%20definition%20and%20code%20of%20classes%20in%20the%20receiver.%20%22%0D%0D%09%7C%20cr%20%7C%0D%09cr%20%3A%3D%20%27%0D%27.%09%5Eself%20inject%3A%20%27%27%20into%3A%20%5B%3Atotal%20%3Aeach%7C%20total%20%2Ccr%2C%20each%20fileOut%20%5D"));
smalltalk.bind(smalltalk.Collection, unescape("export"), "$$export", function Collection__$$export(){
var cr = nil;
const self = this; cr=unescape("%0D");
return self.inject_into_("",(function Collection__(total,each){
return (total._comma(cr))._comma((each.$$export()));
}
));
}
, "Tools-export", unescape("export%0D%09%22%20Return%20the%20result%20of%20exporting%20definition%20and%20source%20code%20of%20classes%20in%20the%20receiver.%20%22%0D%0D%09%7C%20cr%20%7C%0D%09cr%20%3A%3D%20%27%0D%27.%09%5Eself%20inject%3A%20%27%27%20into%3A%20%5B%3Atotal%20%3Aeach%7C%20total%20%2Ccr%2C%20each%20export%20%5D"));
smalltalk.bind(smalltalk.String, unescape("asStSelector"), "asStSelector", function String__asStSelector(){
var operations = nil;
const self = this; var $early={name:"stReturn"};
try {
if ((self._eq("$")).valueOf()) {return ""};
if ((self._eq("_bk")).valueOf()) {return unescape("%5C")};
if ((self.match_(unescape("%5E%5B%24%5D%5B%24%5D"))).valueOf()) {return (self.copyFrom_to_((3),(self.size()))).asStSelector()};
operations=[[unescape("+"), "_plus"], [unescape("-"), "_minus"], [unescape("*"), "_star"], [unescape("/"), "_slash"], [unescape("%7C"), "_bar"], [unescape("%26"), "_amp"], [unescape("%3E"), "_gt"], [unescape("%3C"), "_lt"], [unescape("%3D"), "_eq"], [unescape("%2C"), "_comma"], [unescape("@"), "_at"], [unescape("%7E"), "_no"], [unescape("%5C"), "_bk"]];
operations.do_((function String__(tuple){
if ((self.match_((unescape("%5E")._comma((tuple.last()))))).valueOf()) {$early.result=(operations.reversed()).inject_into_(self,(function String__(result,each){
return result.replace_with_((each.last()),(each.first()));
}
)); throw ($early)} else {return nil};
}
));
return self.replace_with_("_",":");
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "Tools-converting", unescape("asStSelector%0D%09%22%20Return%20a%20smalltalk%20selector%20from%20a%20javascript%20function%20name.%0D%09Note%3A%20it%20must%20be%20the%20reverse%20operation%20of%20%23asSelector%0D%09%22%0D%0D%09%7C%20operations%20%7C%0D%09self%20%3D%20%27%24%27%20ifTrue%3A%20%5B%20%5E%27%27%20%5D.%0D%09self%20%3D%20%27_bk%27%20ifTrue%3A%20%5B%20%5E%24%5C%20%5D.%0D%09%28self%20match%3A%20%27%5E%5B%24%5D%5B%24%5D%27%29%20ifTrue%3A%20%5B%20%5E%28self%20copyFrom%3A%203%20to%3A%20self%20size%29%20asStSelector%20%5D.%0D%09operations%20%3A%3D%20%23%28%0D%09%09%23%28%20%24+%20%23_plus%20%29%0D%09%09%23%28%20%24-%20%23_minus%20%29%0D%09%09%23%28%20%24*%20%23_star%20%29%0D%09%09%23%28%20%24/%20%23_slash%20%29%0D%09%09%23%28%20%24%7C%20%23_bar%20%29%0D%09%09%23%28%20%24%26%20%23_amp%20%29%0D%09%09%23%28%20%24%3E%20%23_gt%20%29%0D%09%09%23%28%20%24%3C%20%23_lt%20%29%0D%09%09%23%28%20%24%3D%20%23_eq%20%29%0D%09%09%23%28%20%24%2C%20%23_comma%20%29%0D%09%09%23%28%20%24@%20%23_at%20%29%0D%09%09%23%28%20%24%7E%20%23_no%20%29%0D%09%09%23%28%20%24%5C%20%23_bk%20%29%0D%09%29.%0D%09operations%20do%3A%20%5B%3Atuple%7C%0D%09%09%28self%20match%3A%20%24%5E%20%2C%20tuple%20last%29%20ifTrue%3A%20%5B%0D%09%09%09%5Eoperations%20reversed%20inject%3A%20self%20into%3A%20%5B%3Aresult%20%3Aeach%7C%0D%09%09%09%09result%20replace%3A%20each%20last%20with%3A%20each%20first%0D%09%09%09%5D%0D%09%09%5D.%0D%09%5D.%0D%09%5Eself%20replace%3A%20%24_%20with%3A%20%24%3A"));
smalltalk.bind(smalltalk.UndefinedObject, unescape("compiler"), "compiler", function UndefinedObject__compiler(){
const self = this; return ((self.smalltalk()).compilerSupport()).for_(nil);
}
, "Tools-printing", unescape("compiler%0D%09%22%20Return%20the%20compiler%20of%20the%20receiver.%20%22%0D%0D%09%5Eself%20smalltalk%20compilerSupport%20for%3A%20nil"));
smalltalk.bind(smalltalk.Object, unescape("%3D%3D"), "_eq_eq", function Object___eq_eq(anObject){
const self = this; return (nil.is_eqeq_(anObject,self));
}
, "Tools-comparing", unescape("%3D%3D%20anObject%0D%09%5EanObject%20%3D%3D%20self"));
smalltalk.bind(smalltalk.Object, unescape("%7E%7E"), "_no_no", function Object___no_no(anObject){
const self = this; return (nil.is_eqeq_((nil.is_eqeq_(self,anObject)),false));
}
, "Tools-comparing", unescape("%7E%7E%20anObject%0D%09%5E%28self%20%3D%3D%20anObject%29%20%3D%3D%20false"));
smalltalk.bind(smalltalk.UndefinedObject, unescape("%3D%3D"), "_eq_eq", function UndefinedObject___eq_eq(anObject){
const self = this; return (nil.isNil_(anObject));
}
, "Tools-comparing", unescape("%3D%3D%20anObject%0D%09%5EanObject%20isNil"));
smalltalk.bind(smalltalk.UndefinedObject, unescape("%7E%7E"), "_no_no", function UndefinedObject___no_no(anObject){
const self = this; return (nil.isNil_(anObject)===false);
}
, "Tools-comparing", unescape("%7E%7E%20anObject%0D%09%5EanObject%20notNil"));
