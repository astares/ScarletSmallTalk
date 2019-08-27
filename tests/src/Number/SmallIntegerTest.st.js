smalltalk.addClass("SmallIntegerTest", smalltalk.TestCase, [], 'Kernel-Tests-Numbers');
smalltalk.SmallIntegerTest.$classVariableNames=("");
smalltalk.bind(smalltalk.SmallIntegerTest, unescape("testMinVal"), "testMinVal", function SmallIntegerTest__testMinVal(){
const self = this; self.assert_(((smalltalk.SmallInteger.minVal())._eq((-1073741824))));
return self;
}
, "tests - Class Methods", unescape("testMinVal%0D%0D%09self%20assert%3A%20%28SmallInteger%20minVal%20%3D%20-1073741824%29."));
smalltalk.bind(smalltalk.SmallIntegerTest, unescape("testMaxVal"), "testMaxVal", function SmallIntegerTest__testMaxVal(){
const self = this; self.assert_(((smalltalk.SmallInteger.maxVal())._eq((1073741823))));
return self;
}
, "tests - Class Methods", unescape("testMaxVal%0D%0D%09self%20assert%3A%20%28SmallInteger%20maxVal%20%3D%2016r3FFFFFFF%29."));
smalltalk.bind(smalltalk.SmallIntegerTest, unescape("testDivide"), "testDivide", function SmallIntegerTest__testDivide(){
const self = this; self.assert_((((2)._slash((1)))._eq((2))));
self.assert_((((4)._slash((2)))._eq((2))));
self.should_raise_((function SmallIntegerTest__(){
return (1)._slash((0));
}
),smalltalk.Error);
return self;
}
, "tests - arithmetic", unescape("testDivide%0D%0D%09self%20assert%3A%202%20/%201%20%3D%202.%0D%22%09self%20assert%3A%20%283%20/%202%29%20isFraction.%22%0D%09self%20assert%3A%204%20/%202%20%3D%202.%0D%09self%20should%3A%20%5B%201%20/%200%20%5D%20raise%3A%20Error."));
smalltalk.bind(smalltalk.SmallIntegerTest, unescape("testPrintString"), "testPrintString", function SmallIntegerTest__testPrintString(){
const self = this; self.assert_((((1).printString())._eq("1")));
self.assert_((((-1).printString())._eq(unescape("-1"))));
self.assert_((((smalltalk.SmallInteger.minVal()).printString())._eq(unescape("-1073741824"))));
self.assert_((((smalltalk.SmallInteger.maxVal()).printString())._eq("1073741823")));
self.assert_((((12345).printString())._eq("12345")));
self.assert_((((-54321).printString())._eq(unescape("-54321"))));
return self;
}
, "tests - printing", unescape("testPrintString%0D%09self%20assert%3A%201%20printString%20%20%3D%20%271%27.%0D%09self%20assert%3A%20-1%20printString%20%20%3D%20%27-1%27.%0D%09self%20assert%3A%20SmallInteger%20minVal%20printString%20%20%3D%20%27-1073741824%27.%0D%09self%20assert%3A%20SmallInteger%20maxVal%20printString%20%20%3D%20%271073741823%27.%0D%09self%20assert%3A%2012345%20printString%20%20%3D%20%2712345%27.%0D%09self%20assert%3A%20-54321%20printString%20%20%3D%20%27-54321%27.%0D%0D%09"));
smalltalk.bind(smalltalk.SmallIntegerTest, unescape("testCeiling"), "testCeiling", function SmallIntegerTest__testCeiling(){
const self = this; self.assert_((((2).ceiling())._eq((2))));
self.assert_((((-2).ceiling())._eq((-2))));
self.assert_((((2.1).ceiling())._eq((3))));
self.assert_((((-2.1).ceiling())._eq((-2))));
return self;
}
, "tests - operations", unescape("testCeiling%0D%0D%09self%20assert%3A%202%20ceiling%20%3D%202.%0D%09self%20assert%3A%20-2%20ceiling%20%3D%20-2.%0D%09self%20assert%3A%202.1%20ceiling%20%3D%203.%0D%09self%20assert%3A%20-2.1%20ceiling%20%3D%20-2."));
