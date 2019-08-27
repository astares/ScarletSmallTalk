smalltalk.addClass("Transcript", smalltalk.Object, [], 'Transcript');
smalltalk.Transcript.$classVariableNames=("");
smalltalk.bind(smalltalk.Transcript.$klass, unescape("cr"), "cr", function Transcript_class__cr(){
const self = this; self.nextPutAll_((smalltalk.Character.cr()));
return self;
}
, "io", unescape("cr%0D%09%22%20Put%20a%20line%20break%20sequence%20onto%20the%20receiver.%20%22%0D%09self%20nextPutAll%3A%20Character%20cr"));
smalltalk.bind(smalltalk.Transcript.$klass, unescape("show%3A"), "show_", function Transcript_class__show_(aString){
const self = this; self.nextPutAll_((aString.asString()));
return self;
}
, "io", unescape("show%3A%20aString%0D%09self%20nextPutAll%3A%20aString%20asString."));
smalltalk.bind(smalltalk.Transcript.$klass, unescape("nextPutAll%3A"), "nextPutAll_", function Transcript_class__nextPutAll_(aCollection){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKTranscript.primNextPutAll(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; self.primitiveFailed();
return self;
}
, "io", unescape("nextPutAll%3A%20aCollection%0D%09%22%20Put%20aCollection%20onto%20the%20receiver.%20%22%0D%0D%20%09%3Cprimitive%3A%20%27primNextPutAll%27%20module%3A%20%27SKTranscript%27%3E%0D%20%09self%20primitiveFailed"));
