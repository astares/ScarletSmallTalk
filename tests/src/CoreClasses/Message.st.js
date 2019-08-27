smalltalk.addClass("MessageTestCase", smalltalk.TestCase, [], 'nil');
smalltalk.MessageTestCase.$classVariableNames=("");
smalltalk.bind(smalltalk.MessageTestCase, unescape("testPrintOn"), "testPrintOn", function MessageTestCase__testPrintOn(){
var message = nil;
var stream = nil;
const self = this; message=smalltalk.Message.receiver_selector_((15),"doIt");
stream="".writeStream();
message.printOn_(stream);
self.assert_equals_((stream.contents()),unescape("Message%28Number%3E%3EdoIt%29"));
message=smalltalk.Message.receiver_selector_(smalltalk.Object,"new");
stream="".writeStream();
message.printOn_(stream);
self.assert_equals_((stream.contents()),unescape("Message%28Object%20class%3E%3Enew%29"));
return self;
}
, "running", unescape("testPrintOn%0D%0D%09%7C%20message%20stream%20%7C%0D%09message%20%3A%3D%20Message%0D%09%09receiver%3A%2015%0D%09%09selector%3A%20%23doIt.%0D%09stream%20%3A%3D%20%27%27%20writeStream.%0D%09message%20printOn%3A%20stream.%0D%09self%0D%09%09assert%3A%20stream%20contents%0D%09%09equals%3A%20%27Message%28Number%3E%3EdoIt%29%27.%0D%09message%20%3A%3D%20Message%0D%09%09receiver%3A%20Object%0D%09%09selector%3A%20%23new.%0D%09stream%20%3A%3D%20%27%27%20writeStream.%0D%09message%20printOn%3A%20stream.%0D%09self%0D%09%09assert%3A%20stream%20contents%0D%09%09equals%3A%20%27Message%28Object%20class%3E%3Enew%29%27"));
smalltalk.bind(smalltalk.MessageTestCase, unescape("testEquality"), "testEquality", function MessageTestCase__testEquality(){
var one = nil;
var two = nil;
var three = nil;
const self = this; one=smalltalk.Message.receiver_selector_arguments_((smalltalk.Object.$$new()),"doIt",[]);
two=smalltalk.Message.receiver_selector_arguments_("Hello","doIt:",[(3)]);
three=smalltalk.Message.receiver_selector_arguments_("Hello","doIt:",[(3)]);
self.assert_equals_(one,one);
self.assert_equals_(two,two);
self.assert_equals_(three,three);
self.deny_equals_(one,two);
self.assert_equals_(two,three);
return self;
}
, "running", unescape("testEquality%0D%0D%09%7C%20one%20two%20three%20%7C%0D%09one%20%3A%3D%20Message%0D%09%09receiver%3A%20Object%20new%0D%09%09selector%3A%20%23doIt%0D%09%09arguments%3A%20%23%28%29.%0D%09two%20%3A%3D%20Message%0D%09%09receiver%3A%20%23Hello%0D%09%09selector%3A%20%23doIt%3A%0D%09%09arguments%3A%20%23%28%203%20%29.%0D%09three%20%3A%3D%20Message%0D%09%09receiver%3A%20%23Hello%0D%09%09selector%3A%20%23doIt%3A%0D%09%09arguments%3A%20%23%28%203%20%29.%0D%09self%0D%09%09assert%3A%20one%0D%09%09equals%3A%20one.%0D%09self%0D%09%09assert%3A%20two%0D%09%09equals%3A%20two.%0D%09self%0D%09%09assert%3A%20three%0D%09%09equals%3A%20three.%0D%09self%0D%09%09deny%3A%20one%0D%09%09equals%3A%20two.%0D%09self%0D%09%09assert%3A%20two%0D%09%09equals%3A%20three"));
