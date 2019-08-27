smalltalk.addClass("StCompilerSubClassTest", smalltalk.TestCase, ['testClass', 'testSubClass'], 'Compiler-JS-Test');
smalltalk.StCompilerSubClassTest.$classVariableNames=("");
smalltalk.bind(smalltalk.StCompilerSubClassTest, unescape("testClassVarAssignmentInSub"), "testClassVarAssignmentInSub", function StCompilerSubClassTest__testClassVarAssignmentInSub(){
const self = this; self.assert_(((self['@testSubClass'].classVarReturn())._eq("classVar1")));
self['@testSubClass'].value1_("one");
self['@testSubClass'].classVarAssignment();
self.assert_(((self['@testSubClass'].classVarReturn())._eq("one")));
return self;
}
, "test vars", unescape("testClassVarAssignmentInSub%0D%09self%20assert%3A%20testSubClass%20classVarReturn%20%3D%20%27classVar1%27.%0D%09testSubClass%20value1%3A%20%27one%27.%0D%09testSubClass%20classVarAssignment.%0D%09self%20assert%3A%20testSubClass%20classVarReturn%20%3D%20%27one%27"));
smalltalk.bind(smalltalk.StCompilerSubClassTest, unescape("testClassVarReturnInSub"), "testClassVarReturnInSub", function StCompilerSubClassTest__testClassVarReturnInSub(){
const self = this; self.assert_(((self['@testSubClass'].classVarReturn())._eq("classVar1")));
return self;
}
, "test vars", unescape("testClassVarReturnInSub%0D%09self%20assert%3A%20testSubClass%20classVarReturn%20%3D%20%27classVar1%27"));
smalltalk.bind(smalltalk.StCompilerSubClassTest, unescape("testLowerCaseClassVarAssignment"), "testLowerCaseClassVarAssignment", function StCompilerSubClassTest__testLowerCaseClassVarAssignment(){
const self = this; self.assert_(((self['@testSubClass'].lowercaseClassVarReturn())._eq("l1")));
self['@testSubClass'].lowercaseClassVar_("l12");
self.assert_(((self['@testSubClass'].lowercaseClassVarReturn())._eq("l12")));
return self;
}
, "test vars", unescape("testLowerCaseClassVarAssignment%0D%09self%20assert%3A%20testSubClass%20lowercaseClassVarReturn%20%3D%20%27l1%27.%0D%09testSubClass%20lowercaseClassVar%3A%20%27l12%27.%0D%09self%20assert%3A%20testSubClass%20lowercaseClassVarReturn%20%3D%20%27l12%27"));
smalltalk.bind(smalltalk.StCompilerSubClassTest, unescape("testSubClassVarAssignment"), "testSubClassVarAssignment", function StCompilerSubClassTest__testSubClassVarAssignment(){
const self = this; self.assert_(((self['@testSubClass'].subClassVar())._eq("classVar4")));
self['@testSubClass'].value1_("one");
self['@testSubClass'].subClassVarAssignment();
self.assert_(((self['@testSubClass'].subClassVar())._eq("one")));
return self;
}
, "test vars", unescape("testSubClassVarAssignment%0D%09self%20assert%3A%20testSubClass%20subClassVar%20%3D%20%27classVar4%27.%0D%09testSubClass%20value1%3A%20%27one%27.%0D%09testSubClass%20subClassVarAssignment.%0D%09self%20assert%3A%20testSubClass%20subClassVar%20%3D%20%27one%27"));
smalltalk.bind(smalltalk.StCompilerSubClassTest, unescape("testSubClassVarReturn"), "testSubClassVarReturn", function StCompilerSubClassTest__testSubClassVarReturn(){
const self = this; self.assert_(((self['@testSubClass'].subClassVar())._eq("classVar4")));
return self;
}
, "test vars", unescape("testSubClassVarReturn%0D%09self%20assert%3A%20testSubClass%20subClassVar%20%3D%20%27classVar4%27"));
smalltalk.bind(smalltalk.StCompilerSubClassTest, unescape("testSuperClassVarAssignment"), "testSuperClassVarAssignment", function StCompilerSubClassTest__testSuperClassVarAssignment(){
const self = this; self.assert_(((self['@testSubClass'].classVarReturn())._eq("classVar1")));
self['@testSubClass'].value3_("three");
self['@testSubClass'].superClassVarAssignment();
self.assert_description_(((self['@testSubClass'].superClassVarReturn())._eq("three")),("superClassVarReturn "._comma((self['@testSubClass'].superClassVarReturn()))));
self.assert_description_(((self['@testSubClass'].classVarReturn())._eq((self['@testSubClass'].superClassVarReturn()))),(unescape("%3D%20classVarReturn%20")._comma((self['@testSubClass'].classVarReturn()))));
return self;
}
, "test vars", unescape("testSuperClassVarAssignment%0D%09self%20assert%3A%20testSubClass%20classVarReturn%20%3D%20%27classVar1%27.%0D%09testSubClass%20value3%3A%20%27three%27.%0D%09testSubClass%20superClassVarAssignment.%0D%09self%20assert%3A%20testSubClass%20superClassVarReturn%20%3D%20%27three%27%20description%3A%20%27superClassVarReturn%20%27%20%2C%20testSubClass%20superClassVarReturn.%0D%09self%20assert%3A%20testSubClass%20classVarReturn%20%3D%20testSubClass%20superClassVarReturn%20description%3A%20%27%3D%20classVarReturn%20%27%20%2C%20testSubClass%20classVarReturn"));
smalltalk.bind(smalltalk.StCompilerSubClassTest, unescape("testSuperClassVarReturn"), "testSuperClassVarReturn", function StCompilerSubClassTest__testSuperClassVarReturn(){
const self = this; self.assert_description_(((self['@testSubClass'].superClassVarReturn())._eq("classVar1")),("superClassVarReturn "._comma((self['@testSubClass'].superClassVarReturn()))));
self.assert_description_(((self['@testSubClass'].superClassVarReturn())._eq((self['@testSubClass'].classVarReturn()))),(unescape("%3DclassVarReturn%20")._comma((self['@testSubClass'].classVarReturn()))));
return self;
}
, "test vars", unescape("testSuperClassVarReturn%0D%09self%20assert%3A%20testSubClass%20superClassVarReturn%20%3D%20%27classVar1%27%20description%3A%20%27superClassVarReturn%20%27%20%2C%20testSubClass%20superClassVarReturn.%0D%09self%20assert%3A%20testSubClass%20superClassVarReturn%20%3D%20testSubClass%20classVarReturn%20description%3A%20%27%3DclassVarReturn%20%27%20%2C%20testSubClass%20classVarReturn"));
smalltalk.bind(smalltalk.StCompilerSubClassTest, unescape("setUp"), "setUp", function StCompilerSubClassTest__setUp(){
const self = this; smalltalk.superImplementor(smalltalk.StCompilerSubClassTest,'setUp').apply(self, []);
smalltalk.StCompilerTestClass.initialize();
self.assert_(((smalltalk.StCompilerTestClass.classInstVar1())._eq("classInstVar1")));
self.assert_(((smalltalk.StCompilerTestClass.classVar1())._eq("classVar1")));
self['@testClass']=smalltalk.StCompilerTestClass.$$new();
self.assert_(((nil.isNil_(self['@testClass'])===false)));
smalltalk.StCompilerTestSubClass.initialize();
self['@testSubClass']=smalltalk.StCompilerTestSubClass.$$new();
self.assert_(((nil.isNil_(self['@testSubClass'])===false)));
return self;
}
, "running", unescape("setUp%0D%09super%20setUp.%0D%09StCompilerTestClass%20initialize.%0D%09self%20assert%3A%20StCompilerTestClass%20classInstVar1%20%3D%20%27classInstVar1%27.%0D%09self%20assert%3A%20StCompilerTestClass%20classVar1%20%3D%20%27classVar1%27.%0D%0D%09testClass%20%3A%3D%20StCompilerTestClass%20new.%0D%09self%20assert%3A%20testClass%20notNil.%0D%0D%09StCompilerTestSubClass%20initialize.%0D%09testSubClass%20%3A%3D%20StCompilerTestSubClass%20new.%0D%09self%20assert%3A%20testSubClass%20notNil"));
