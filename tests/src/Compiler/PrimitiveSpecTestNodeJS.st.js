smalltalk.addClass("NativeSpecNodeJSTestCase", smalltalk.NativeSpecTestCase, [], 'Primitives');
smalltalk.NativeSpecNodeJSTestCase.$classVariableNames=("");
smalltalk.bind(smalltalk.NativeSpecNodeJSTestCase, unescape("setup"), "setup", function NativeSpecNodeJSTestCase__setup(){
const self = this; smalltalk.superImplementor(smalltalk.NativeSpecNodeJSTestCase,'setup').apply(self, []);
smalltalk.RuntimePrimitiveManager.setPlatformName_("NodeJS");
return self;
}
, "initialization", unescape("setup%0D%09super%20setup.%0D%09RuntimePrimitiveManager%20setPlatformName%3A%20%27NodeJS%27."));
