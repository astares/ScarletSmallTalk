smalltalk.addClass("OrderedCollectionTestCase", smalltalk.TestCase, [], 'Tests');
smalltalk.OrderedCollectionTestCase.$classVariableNames=("");
smalltalk.bind(smalltalk.OrderedCollectionTestCase, unescape("testAdd"), "testAdd", function OrderedCollectionTestCase__testAdd(){
var oc = nil;
const self = this; oc=smalltalk.OrderedCollection.$$new();
self.assert_(((oc.size())._eq((0))));
oc.add_((1));
self.assert_(((oc.size())._eq((1))));
self.assert_(((oc.at_((1)))._eq((1))));
oc.add_((2));
self.assert_(((oc.size())._eq((2))));
self.assert_(((oc.at_((2)))._eq((2))));
return self;
}
, "tests", unescape("testAdd%0D%09%7C%20oc%20%7C%0D%09oc%20%3A%3D%20OrderedCollection%20new.%0D%09self%20assert%3A%20oc%20size%20%3D%200.%0D%09oc%20add%3A%201.%0D%09self%20assert%3A%20oc%20size%20%3D%201.%0D%09self%20assert%3A%20%28oc%20at%3A%201%29%20%3D%201.%0D%09oc%20add%3A%202.%0D%09self%20assert%3A%20oc%20size%20%3D%202.%0D%09self%20assert%3A%20%28oc%20at%3A%202%29%20%3D%202%0D"));
smalltalk.bind(smalltalk.OrderedCollectionTestCase, unescape("testAddFirst"), "testAddFirst", function OrderedCollectionTestCase__testAddFirst(){
var oc = nil;
const self = this; oc=smalltalk.OrderedCollection.$$new();
self.assert_(((oc.size())._eq((0))));
oc.add_((1));
self.assert_(((oc.size())._eq((1))));
self.assert_(((oc.at_((1)))._eq((1))));
oc.addFirst_((2));
self.assert_(((oc.size())._eq((2))));
self.assert_(((oc.at_((1)))._eq((2))));
return self;
}
, "tests", unescape("testAddFirst%0D%09%7C%20oc%20%7C%0D%09oc%20%3A%3D%20OrderedCollection%20new.%0D%09self%20assert%3A%20oc%20size%20%3D%200.%0D%09oc%20add%3A%201.%0D%09self%20assert%3A%20oc%20size%20%3D%201.%0D%09self%20assert%3A%20%28oc%20at%3A%201%29%20%3D%201.%0D%09oc%20addFirst%3A%202.%0D%09self%20assert%3A%20oc%20size%20%3D%202.%0D%09self%20assert%3A%20%28oc%20at%3A%201%29%20%3D%202%0D"));
smalltalk.bind(smalltalk.OrderedCollectionTestCase, unescape("testAddFirstEmpty"), "testAddFirstEmpty", function OrderedCollectionTestCase__testAddFirstEmpty(){
var oc = nil;
const self = this; oc=smalltalk.OrderedCollection.$$new();
self.assert_(((oc.size())._eq((0))));
oc.addFirst_((1));
self.assert_(((oc.size())._eq((1))));
self.assert_(((oc.at_((1)))._eq((1))));
oc.addFirst_((2));
self.assert_(((oc.size())._eq((2))));
self.assert_(((oc.at_((1)))._eq((2))));
return self;
}
, "tests", unescape("testAddFirstEmpty%0D%09%7C%20oc%20%7C%0D%09oc%20%3A%3D%20OrderedCollection%20new.%0D%09self%20assert%3A%20oc%20size%20%3D%200.%0D%09oc%20addFirst%3A%201.%0D%09self%20assert%3A%20oc%20size%20%3D%201.%0D%09self%20assert%3A%20%28oc%20at%3A%201%29%20%3D%201.%0D%09oc%20addFirst%3A%202.%0D%09self%20assert%3A%20oc%20size%20%3D%202.%0D%09self%20assert%3A%20%28oc%20at%3A%201%29%20%3D%202%0D"));
smalltalk.bind(smalltalk.OrderedCollectionTestCase, unescape("testAddLast"), "testAddLast", function OrderedCollectionTestCase__testAddLast(){
var oc = nil;
const self = this; oc=smalltalk.OrderedCollection.$$new();
self.assert_(((oc.size())._eq((0))));
oc.add_((1));
self.assert_(((oc.size())._eq((1))));
self.assert_(((oc.at_((1)))._eq((1))));
oc.addLast_((2));
self.assert_(((oc.size())._eq((2))));
self.assert_(((oc.at_((2)))._eq((2))));
return self;
}
, "tests", unescape("testAddLast%0D%09%7C%20oc%20%7C%0D%09oc%20%3A%3D%20OrderedCollection%20new.%0D%09self%20assert%3A%20oc%20size%20%3D%200.%0D%09oc%20add%3A%201.%0D%09self%20assert%3A%20oc%20size%20%3D%201.%0D%09self%20assert%3A%20%28oc%20at%3A%201%29%20%3D%201.%0D%09oc%20addLast%3A%202.%0D%09self%20assert%3A%20oc%20size%20%3D%202.%0D%09self%20assert%3A%20%28oc%20at%3A%202%29%20%3D%202%0D"));
smalltalk.bind(smalltalk.OrderedCollectionTestCase, unescape("testAddLastEmpty"), "testAddLastEmpty", function OrderedCollectionTestCase__testAddLastEmpty(){
var oc = nil;
const self = this; oc=smalltalk.OrderedCollection.$$new();
self.assert_(((oc.size())._eq((0))));
oc.addLast_((1));
self.assert_(((oc.size())._eq((1))));
self.assert_(((oc.at_((1)))._eq((1))));
oc.addLast_((2));
self.assert_(((oc.size())._eq((2))));
self.assert_(((oc.at_((2)))._eq((2))));
return self;
}
, "tests", unescape("testAddLastEmpty%0D%09%7C%20oc%20%7C%0D%09oc%20%3A%3D%20OrderedCollection%20new.%0D%09self%20assert%3A%20oc%20size%20%3D%200.%0D%09oc%20addLast%3A%201.%0D%09self%20assert%3A%20oc%20size%20%3D%201.%0D%09self%20assert%3A%20%28oc%20at%3A%201%29%20%3D%201.%0D%09oc%20addLast%3A%202.%0D%09self%20assert%3A%20oc%20size%20%3D%202.%0D%09self%20assert%3A%20%28oc%20at%3A%202%29%20%3D%202%0D"));
smalltalk.bind(smalltalk.OrderedCollectionTestCase, unescape("testCompare"), "testCompare", function OrderedCollectionTestCase__testCompare(){
const self = this; self.deny_(((smalltalk.Array.with_((1)))._eq((smalltalk.OrderedCollection.with_((1))))));
return self;
}
, "tests", unescape("testCompare%0D%0D%09self%20deny%3A%20%28Array%20with%3A%201%29%20%3D%20%28OrderedCollection%20with%3A%201%29%0D%09"));
smalltalk.bind(smalltalk.OrderedCollectionTestCase, unescape("testAsCollection"), "testAsCollection", function OrderedCollectionTestCase__testAsCollection(){
const self = this; self.assert_((((["TEXT_COLUMN", "INT_COLUMN", "REAL_COLUMN"].asOrderedCollection()).$klass)._eq(smalltalk.OrderedCollection)));
self.assert_(((((smalltalk.Array.with_((1))).asOrderedCollection()).$klass)._eq(smalltalk.OrderedCollection)));
self.assert_(((((smalltalk.SortedCollection.with_("a")).asOrderedCollection()).$klass)._eq(smalltalk.OrderedCollection)));
self.assert_(((((smalltalk.OrderedCollection.with_("a")).asOrderedCollection()).$klass)._eq(smalltalk.OrderedCollection)));
self.assert_(((((smalltalk.OrderedSet.with_("a")).asOrderedCollection()).$klass)._eq(smalltalk.OrderedCollection)));
return self;
}
, "tests", unescape("testAsCollection%0D%0D%09self%20assert%3A%20%28%23%28%27TEXT_COLUMN%27%20%27INT_COLUMN%27%20%27REAL_COLUMN%27%20%29%20asOrderedCollection%29%20class%20%3D%20OrderedCollection.%0D%09self%20assert%3A%20%28Array%20with%3A%201%29%20asOrderedCollection%20class%20%3D%20OrderedCollection.%0D%09self%20assert%3A%20%28SortedCollection%20with%3A%20%27a%27%29%20%20asOrderedCollection%20class%20%3D%20%20OrderedCollection.%0D%09self%20assert%3A%20%28OrderedCollection%20with%3A%20%27a%27%29%20%20asOrderedCollection%20class%20%3D%20%20OrderedCollection.%0D%09self%20assert%3A%20%28OrderedSet%20with%3A%20%27a%27%29%20%20asOrderedCollection%20class%20%3D%20%20OrderedCollection.%0D%09"));
