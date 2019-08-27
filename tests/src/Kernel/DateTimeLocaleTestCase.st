TestCase subclass: #DateTimeLocaleTestCase !

! DateTimeLocaleTestCase methodsFor: #running !

dateForTest
	^ DateTime fromSeconds: 1530810916 + DateTime utcOffsetSeconds!

testAsDateString

	| testTime |
	testTime := self dateForTest.
	self
		assert: testTime asDateString
		equals: 'Thu Jul 05 2018'. !

testAsTimeString

	| testTime |
	testTime := self dateForTest.
	self
		assert: testTime asTimeString
		equals: '13:15:16 GMT-0400 (EDT)'. !

testAsLocaleString

	| testTime |
	testTime := self dateForTest.
	self
		assert: testTime asLocaleString
		equals: '2018-7-5 13:15:16'. !

testHours

	| testTime badHours |
	testTime := self dateForTest.
	self
		assert: testTime hours
		equals: 17.
	testTime hours: 5 yourself.
	self
		assert: testTime hours
		equals: 5.
	badHours := #(-1 24 13.2).
	badHours do:[ :each | self should:[testTime hours: each] raise: Error]. !

