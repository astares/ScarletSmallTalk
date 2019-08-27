smalltalk.bind(smalltalk.Object, unescape("print%3A"), "print_", function Object__print_(what){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKObject.primPrint(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; self;
return self;
}
, "printing", unescape("print%3A%20what%0D%09%22%20Output%20what%20to%20console.%20%22%0D%0D%09%3Cprimitive%3A%20%27primPrint%27%20module%3A%20%27SKObject%27%3E"));
smalltalk.bind(smalltalk.Object, unescape("fileIn%3A"), "fileIn_", function Object__fileIn_(fileName){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKObject.primFileIn(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; self.primitiveFailed();
return self;
}
, "fileIn", unescape("fileIn%3A%20fileName%0D%09%22%20FileIn%20contents%20of%20file%20at%20fileName.%20%22%0D%0D%09%3Cprimitive%3A%20%27primFileIn%27%20module%3A%20%27SKObject%27%3E%0D%09self%20primitiveFailed"));
smalltalk.bind(smalltalk.Object, unescape("fileInJS%3A"), "fileInJS_", function Object__fileInJS_(fileName){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKObject.primFileInJS(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)		return $$primitiveResult;
const self = this; self.primitiveFailed();
return self;
}
, "fileIn", unescape("fileInJS%3A%20fileName%0D%09%22%20FileIn%20javascript%20code%20from%20file%20at%20fileName.%20%22%0D%0D%09%3Cprimitive%3A%20%27primFileInJS%27%20module%3A%20%27SKObject%27%3E%0D%09self%20primitiveFailed"));
