smalltalk.addClass("StringTestCase", smalltalk.TestCase, [], 'nil');
smalltalk.StringTestCase.$classVariableNames=("");
smalltalk.bind(smalltalk.StringTestCase, unescape("testReplaceAllWith"), "testReplaceAllWith", function StringTestCase__testReplaceAllWith(){
var result = nil;
const self = this; result="4.1".replaceAll_with_(".",unescape("%2C"));
self.assert_equals_(result,unescape("4%2C1"));
result=unescape("Hello%2C%20World%21").replaceAll_with_("Hello","Goodbye");
self.assert_equals_(result,unescape("Goodbye%2C%20World%21"));
result="....".replaceAll_with_(".",unescape("*"));
self.assert_equals_(result,unescape("****"));
result="labware".replaceAll_with_("Z","y");
self.assert_equals_(result,"labware");
result="".replaceAll_with_("a","b");
self.assert_equals_(result,"");
result="aaa".replaceAll_with_("a","");
self.assert_equals_(result,"");
result="abab".replaceAll_with_("a","c");
self.assert_equals_(result,"cbcb");
return self;
}
, "running", unescape("testReplaceAllWith%0D%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%20%274.1%27%20replaceAll%3A%20%27.%27%20with%3A%20%27%2C%27.%0D%09self%0D%09%09assert%3A%20result%0D%09%09equals%3A%20%274%2C1%27.%0D%09result%20%3A%3D%20%27Hello%2C%20World%21%27%20replaceAll%3A%20%27Hello%27%20with%3A%20%27Goodbye%27.%0D%09self%0D%09%09assert%3A%20result%0D%09%09equals%3A%20%27Goodbye%2C%20World%21%27.%0D%09result%20%3A%3D%20%27....%27%20replaceAll%3A%20%27.%27%20with%3A%20%27*%27.%0D%09self%0D%09%09assert%3A%20result%0D%09%09equals%3A%20%27****%27.%0D%09result%20%3A%3D%20%27labware%27%20replaceAll%3A%20%27Z%27%20with%3A%20%27y%27.%0D%09self%0D%09%09assert%3A%20result%0D%09%09equals%3A%20%27labware%27.%0D%09result%20%3A%3D%20%27%27%20replaceAll%3A%20%27a%27%20with%3A%20%27b%27.%0D%09self%0D%09%09assert%3A%20result%0D%09%09equals%3A%20%27%27.%0D%09result%20%3A%3D%20%27aaa%27%20replaceAll%3A%20%27a%27%20with%3A%20%27%27.%0D%09self%0D%09%09assert%3A%20result%0D%09%09equals%3A%20%27%27.%0D%09result%20%3A%3D%20%27abab%27%20replaceAll%3A%20%27a%27%20with%3A%20%27c%27.%0D%09self%0D%09%09assert%3A%20result%0D%09%09equals%3A%20%27cbcb%27"));
