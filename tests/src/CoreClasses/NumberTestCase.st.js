smalltalk.addClass("NumberTestCase", smalltalk.TestCase, [], 'Kernel-Test');
smalltalk.NumberTestCase.$classVariableNames=("");
smalltalk.bind(smalltalk.NumberTestCase, unescape("testAddition"), "testAddition", function NumberTestCase__testAddition(){
var numberTemp = nil;
const self = this; numberTemp=(15);
self.assert_equals_(((1)._plus((1))),(2));
self.assert_equals_(((1)._plus((-1))),(0));
self.should_raise_((function NumberTestCase__(){
return (1)._plus((smalltalk.Array.$$new()));
}
),smalltalk.Error);
self.should_raise_((function NumberTestCase__(){
return (smalltalk.Array.$$new())._plus((1));
}
),smalltalk.Error);
self.should_raise_((function NumberTestCase__(){
return (1)._plus(nil);
}
),smalltalk.Error);
self.should_raise_((function NumberTestCase__(){
return nil._plus((1));
}
),smalltalk.Error);
self.should_raise_((function NumberTestCase__(){
return (1)._plus(true);
}
),smalltalk.Error);
self.should_raise_((function NumberTestCase__(){
return true._plus((1));
}
),smalltalk.Error);
self.should_raise_((function NumberTestCase__(){
return (1)._plus(false);
}
),smalltalk.Error);
self.should_raise_((function NumberTestCase__(){
return false._plus((1));
}
),smalltalk.Error);
self.assert_equals_(((15)._plus((15))),(30));
self.assert_equals_((numberTemp._plus(numberTemp)),(30));
return self;
}
, "running", unescape("testAddition%0D%0D%09%7C%20numberTemp%20%7C%0D%09numberTemp%20%3A%3D%2015.%0D%09self%0D%09%09assert%3A%201%20+%201%0D%09%09equals%3A%202.%0D%09self%0D%09%09assert%3A%201%20+%20%28-1%29%0D%09%09equals%3A%200.%0D%09self%0D%09%09should%3A%20%5B1%20+%20Array%20new%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09should%3A%20%5BArray%20new%20+%201%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09should%3A%20%5B1%20+%20nil%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09should%3A%20%5Bnil%20+%201%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09should%3A%20%5B1%20+%20true%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09should%3A%20%5Btrue%20+%201%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09should%3A%20%5B1%20+%20false%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09should%3A%20%5Bfalse%20+%201%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09assert%3A%2015%20+%2015%0D%09%09equals%3A%2030.%0D%09self%0D%09%09assert%3A%20numberTemp%20+%20numberTemp%0D%09%09equals%3A%2030"));
smalltalk.bind(smalltalk.NumberTestCase, unescape("testSubtraction"), "testSubtraction", function NumberTestCase__testSubtraction(){
var numberTemp = nil;
const self = this; numberTemp=(15);
self.assert_equals_(((1)._minus((1))),(0));
self.assert_equals_(((1)._minus((-1))),(2));
self.should_raise_((function NumberTestCase__(){
return (1)._minus((smalltalk.Array.$$new()));
}
),smalltalk.Error);
self.should_raise_((function NumberTestCase__(){
return (smalltalk.Array.$$new())._minus((1));
}
),smalltalk.Error);
self.should_raise_((function NumberTestCase__(){
return (1)._minus(nil);
}
),smalltalk.Error);
self.should_raise_((function NumberTestCase__(){
return nil._minus((1));
}
),smalltalk.Error);
self.should_raise_((function NumberTestCase__(){
return (1)._minus(true);
}
),smalltalk.Error);
self.should_raise_((function NumberTestCase__(){
return true._minus((1));
}
),smalltalk.Error);
self.should_raise_((function NumberTestCase__(){
return (1)._minus(false);
}
),smalltalk.Error);
self.should_raise_((function NumberTestCase__(){
return false._minus((1));
}
),smalltalk.Error);
self.assert_equals_(((15)._minus((15))),(0));
self.assert_equals_((numberTemp._minus(numberTemp)),(0));
return self;
}
, "running", unescape("testSubtraction%0D%0D%09%7C%20numberTemp%20%7C%0D%09numberTemp%20%3A%3D%2015.%0D%09self%0D%09%09assert%3A%201%20-%201%0D%09%09equals%3A%200.%0D%09self%0D%09%09assert%3A%201%20-%20%28-1%29%0D%09%09equals%3A%202.%0D%09self%0D%09%09should%3A%20%5B1%20-%20Array%20new%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09should%3A%20%5BArray%20new%20-%201%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09should%3A%20%5B1%20-%20nil%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09should%3A%20%5Bnil%20-%201%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09should%3A%20%5B1%20-%20true%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09should%3A%20%5Btrue%20-%201%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09should%3A%20%5B1%20-%20false%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09should%3A%20%5Bfalse%20-%201%5D%0D%09%09raise%3A%20Error.%0D%09self%0D%09%09assert%3A%2015%20-%2015%0D%09%09equals%3A%200.%0D%09self%0D%09%09assert%3A%20numberTemp%20-%20numberTemp%0D%09%09equals%3A%200"));
