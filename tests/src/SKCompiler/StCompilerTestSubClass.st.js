smalltalk.addClass("StCompilerTestSubClass", smalltalk.StCompilerTestClass, ['instVar4', 'value3'], 'Compiler-JS-Test');
smalltalk.StCompilerTestSubClass.$classVariableNames=("ClassVar4 lowercaseVar");
smalltalk.bind(smalltalk.StCompilerTestSubClass, unescape("lowercaseClassVar"), "lowercaseClassVar", function StCompilerTestSubClass__lowercaseClassVar(){
const self = this; smalltalk.StCompilerTestSubClass.classVariableAt_("lowercaseVar");
return self;
}
, "variables lower case", unescape("lowercaseClassVar%0D%09lowercaseVar"));
smalltalk.bind(smalltalk.StCompilerTestSubClass, unescape("lowercaseClassVar%3A"), "lowercaseClassVar_", function StCompilerTestSubClass__lowercaseClassVar_(aValue){
const self = this; smalltalk.StCompilerTestSubClass.classVariableAt_put_("lowercaseVar",aValue);
return self;
}
, "variables lower case", unescape("lowercaseClassVar%3A%20aValue%0D%09lowercaseVar%20%3A%3D%20aValue"));
smalltalk.bind(smalltalk.StCompilerTestSubClass, unescape("lowercaseClassVarReturn"), "lowercaseClassVarReturn", function StCompilerTestSubClass__lowercaseClassVarReturn(){
const self = this; return smalltalk.StCompilerTestSubClass.classVariableAt_("lowercaseVar");
}
, "variables lower case", unescape("lowercaseClassVarReturn%0D%09%5ElowercaseVar"));
smalltalk.bind(smalltalk.StCompilerTestSubClass, unescape("subClassVar"), "subClassVar", function StCompilerTestSubClass__subClassVar(){
const self = this; return smalltalk.StCompilerTestSubClass.classVariableAt_("ClassVar4");
}
, "variables class var", unescape("subClassVar%0D%09%5EClassVar4"));
smalltalk.bind(smalltalk.StCompilerTestSubClass, unescape("subClassVarAssignment"), "subClassVarAssignment", function StCompilerTestSubClass__subClassVarAssignment(){
const self = this; smalltalk.StCompilerTestSubClass.classVariableAt_put_("ClassVar4",self['@value1']);
return self;
}
, "variables class var", unescape("subClassVarAssignment%0D%09ClassVar4%20%3A%3D%20value1"));
smalltalk.bind(smalltalk.StCompilerTestSubClass, unescape("superClassVar"), "superClassVar", function StCompilerTestSubClass__superClassVar(){
const self = this; smalltalk.StCompilerTestSubClass.classVariableAt_("ClassVar1");
return self;
}
, "variables class var", unescape("superClassVar%0D%09ClassVar1"));
smalltalk.bind(smalltalk.StCompilerTestSubClass, unescape("superClassVarAssignment"), "superClassVarAssignment", function StCompilerTestSubClass__superClassVarAssignment(){
const self = this; smalltalk.StCompilerTestSubClass.classVariableAt_put_("ClassVar1",self['@value3']);
return self;
}
, "variables class var", unescape("superClassVarAssignment%0D%09ClassVar1%20%3A%3D%20value3"));
smalltalk.bind(smalltalk.StCompilerTestSubClass, unescape("superClassVarReturn"), "superClassVarReturn", function StCompilerTestSubClass__superClassVarReturn(){
const self = this; return smalltalk.StCompilerTestSubClass.classVariableAt_("ClassVar1");
}
, "variables class var", unescape("superClassVarReturn%0D%09%5EClassVar1"));
smalltalk.bind(smalltalk.StCompilerTestSubClass, unescape("initialize"), "initialize", function StCompilerTestSubClass__initialize(){
const self = this; smalltalk.superImplementor(smalltalk.StCompilerTestSubClass,'initialize').apply(self, []);
self['@instVar4']="instVar4"._comma(self['@instVar3']);
smalltalk.StCompilerTestSubClass.classVariableAt_put_("ClassVar4","classVar4");
smalltalk.StCompilerTestSubClass.classVariableAt_put_("lowercaseVar","l1");
return self;
}
, "initialize-release", unescape("initialize%0D%09super%20initialize.%0D%09instVar4%20%3A%3D%20%27instVar4%27%20%2C%20instVar3.%0D%09ClassVar4%20%3A%3D%20%27classVar4%27.%0D%09lowercaseVar%20%3A%3D%20%27l1%27"));
smalltalk.bind(smalltalk.StCompilerTestSubClass, unescape("value3%3A"), "value3_", function StCompilerTestSubClass__value3_(aValue){
const self = this; self['@value3']=aValue;
return self;
}
, "initialize-release", unescape("value3%3A%20aValue%0D%09value3%20%3A%3D%20aValue"));
smalltalk.StCompilerTestSubClass.$klass.$iVarNames = ['classInstVar3'];
smalltalk.bind(smalltalk.StCompilerTestSubClass.$klass, unescape("initialize"), "initialize", function StCompilerTestSubClass_class__initialize(){
const self = this; smalltalk.superImplementor(smalltalk.StCompilerTestSubClass.$klass,'initialize').apply(self, []);
smalltalk.StCompilerTestSubClass.classVariableAt_put_("ClassVar4","classVar4"._comma(smalltalk.StCompilerTestSubClass.classVariableAt_("ClassVar1")));
self['@classInstVar3']="classInstVar3"._comma(self['@classInstVar2']);
return self;
}
, "class initialization", unescape("initialize%0D%09super%20initialize.%0D%09ClassVar4%20%3A%3D%20%27classVar4%27%20%2C%20ClassVar1.%0D%09classInstVar3%20%3A%3D%20%27classInstVar3%27%20%2C%20classInstVar2"));
smalltalk.bind(smalltalk.StCompilerTestSubClass.$klass, unescape("tearDown"), "tearDown", function StCompilerTestSubClass_class__tearDown(){
const self = this; smalltalk.StCompilerTestSubClass.classVariableAt_put_("ClassVar4",nil);
self['@classInstVar3']=nil;
return self;
}
, "class initialization", unescape("tearDown%0D%09ClassVar4%20%3A%3D%20nil.%0D%09classInstVar3%20%3A%3D%20nil"));
