TestCase subclass: #DateTimeTestCase !

! DateTimeTestCase methodsFor: #running !

dateForTest
	^ DateTime fromSeconds: 1530810916 + DateTime utcOffsetSeconds!

testYear

	| testTime |
	testTime := self dateForTest.
	self
		assert: testTime year
		equals: 2018.
	testTime year: 2017 yourself.
	self
		should: [testTime year: 2016.5]
		raise: Error.
	self
		should: [testTime year: 'December 25th, 2017']
		raise: Error.
	self
		assert: testTime year
		equals: 2017. !

testMonth

	| testTime badMonths |
	testTime := self dateForTest.
	self
		assert: testTime month
		equals: 7.
	testTime month: 6 yourself.
	self
		assert: testTime month
		equals: 6.
	badMonths := #(-1 0 4.3 13).
	badMonths do:[ :each | self should:[testTime month: each] raise: Error]. !

testDayOfWeek

	| testTime |
	testTime := self dateForTest.
	self
		assert: testTime dayOfWeek
		equals: 5. !

testDayOfMonth

	| testTime badDays |
	testTime := self dateForTest.
	self
		assert: testTime dayOfMonth
		equals: 5.
	testTime dayOfMonth: 1 yourself.
	self
		assert: testTime dayOfMonth
		equals: 1.
	badDays := #(-1 0 15.7 32).
	badDays do:[ :each | self should:[testTime dayOfMonth: each] raise: Error]. !

testTime

	| testTime |
	testTime := DateTime fromSeconds: 1530810916.
	self
		assert: testTime time
		equals: 1530810916000.
	testTime time: 1 yourself.
	self
		assert: testTime time
		equals: 1. !

testMinutes

	| testTime badMinutes|
	testTime := self dateForTest.
	testTime minutes: 45 yourself.
	self
		assert: testTime minutes
		equals: 45.
	badMinutes := #(#() -1 60 true false '43').
	badMinutes do: [ :each | self should:[testTime minutes: each] raise: Error]. !

testSeconds

	| testTime badSeconds |
	testTime := self dateForTest.
	self
		assert: testTime seconds
		equals: 16.
	self
		should:[testTime seconds: 87]
		raise: Error.
	testTime seconds: 10 yourself.
	self
		assert: testTime seconds
		equals: 10.
	badSeconds := #(-1 50.4 60 61).
	badSeconds do:[ :each | self should:[testTime seconds: each] raise: Error].
	testTime := DateTime fromSeconds: 12345.
	self
		assert: testTime asSeconds
		equals: 12345. !

testMilliseconds

	| testTime badMilliseconds |
	testTime := self dateForTest.
	self
		assert: testTime milliseconds
		equals: 0.
	testTime milliseconds: 6 yourself.
	self
		assert: testTime milliseconds
		equals: 6.
	badMilliseconds := #(-1 1000.1 1001).
	badMilliseconds do:[ :each | self should:[testTime milliseconds: each] raise: Error]. !

testLessThanaDateTime

	| testTime prevTime |
	testTime := self dateForTest.
	prevTime := DateTime fromSeconds: self dateForTest seconds - 1.
	self assert: prevTime < testTime.
	self deny: DateTime now < testTime.
	self
		should: [testTime < 1]
		raise: Error. !

testGreaterThanaDateTime

	| testTime prevTime |
	testTime := self dateForTest.
	prevTime := DateTime fromSeconds: self dateForTest seconds - 1.
	self deny: prevTime > testTime.
	self assert: DateTime now > testTime.
	self
		should: [testTime > 1]
		raise: Error. !

testLessThanEqualaDateTime

	| testTime prevTime |
	testTime := self dateForTest.
	prevTime := DateTime fromSeconds: self dateForTest seconds - 1.
	self assert: prevTime <= testTime.
	self deny: DateTime now <= testTime.
	prevTime := DateTime fromSeconds: self dateForTest seconds.
	self assert: prevTime <= testTime.
	self
		should: [testTime <= 1]
		raise: Error. !

testGreaterThanEqualaDateTime

	| testTime prevTime |
	testTime := self dateForTest.
	prevTime := DateTime fromSeconds: self dateForTest seconds - 1.
	self deny: prevTime >= testTime.
	self assert: DateTime now >= testTime.
	prevTime := self dateForTest.
	self assert: prevTime >= testTime.
	self
		should: [testTime >= 1]
		raise: Error. !

testSubtractaDateTime

	| currentTime futureTime elapsed |
	currentTime := DateTime fromSeconds: 1530899240.
	futureTime  := DateTime fromSeconds: 1530899279.
	elapsed := futureTime - currentTime.
	self
		assert: elapsed
		equals: 39. !


testAddaDateTime

	| currentTime futureTime elapsed |
	currentTime := DateTime fromSeconds: 150.
	futureTime  := DateTime fromSeconds: 150.
	elapsed := futureTime + currentTime.
	self
		assert: elapsed
		equals: 300. !

testIsValid

	self assert: DateTime now isValid. !

testNewFromString

	| testDate |
	testDate := DateTime fromString: '1962/12/15 01:40:00'.
	self
		assert: testDate toDateString
		equals: 'Sat Dec 15 1962'.
	self
		assert: testDate hours
		equals: 1.
	self
		assert: testDate minutes
		equals: 40.
	self
		assert: testDate seconds
		equals: 0. !

testNewFromMilliseconds

	| testDate |
	testDate := DateTime fromMilliseconds: 1531142162000 yourself.
	self
		should: [testDate := DateTime fromMilliseconds: true]
		raise: Error.
	self
		assert: testDate time
		equals: 1531142162000!

testEqualityIdentityCoercionRegression
	"Ensure DateTime does not coerce to
	a Number during comparison"

	| dt ms |
	dt := DateTime now.
	ms := dt asMilliseconds.
	self
		assert: ms class
		equals: Number.
	self
		assert: dt = dt;
		assert: dt == dt;
		deny: dt = ms;
		deny: ms = dt;
		deny: dt == ms;
		deny: ms == dt!

testEqualityIdentityRegression

	| seconds dt1 dt2 dt3 |
	seconds := 1551991364.
	dt1 := DateTime fromSeconds: seconds.
	dt2 := DateTime fromSeconds: seconds.
	dt3 := DateTime fromSeconds: seconds + 60.
	self
		assert: dt1 = dt1;
		assert: dt1 == dt1;
		assert: dt1 = dt2;
		assert: dt2 = dt1;
		deny: dt1 == dt2;
		deny: dt2 == dt1;
		deny: dt1 = dt3;
		deny: dt3 = dt1;
		deny: dt1 == dt3;
		deny: dt3 == dt1!

testAddToOrderedCollectionRegression
	"Ensure that adding a DateTime
	to an OrderedCollection results
	in the DateTime getting stored
	instead of a Number."

	| dt oc assertBlock |
	dt := DateTime now.
	oc := OrderedCollection new.
	assertBlock := 
		[:element |
		self
			assert: element class
			equals: DateTime.
		self assert: dt == element].
	"#add:"
	oc add: dt.
	self
		assert: oc size
		equals: 1.
	oc do: assertBlock.
	"#addFirst:"
	oc addFirst: dt.
	self
		assert: oc size
		equals: 2.
	oc do: assertBlock.
	"#addLast:"
	oc addLast: dt.
	self
		assert: oc size
		equals: 3.
	oc do: assertBlock!

testPropertiesRegression

	| host dt propertyName extractedDt |
	host := Object new.
	dt := DateTime now.
	propertyName := #dateTime.
	host
		propertyAt: propertyName
		put: dt.
	extractedDt := host propertyAt: propertyName.
	self
		assert: extractedDt class
		equals: DateTime.
	self assert: dt == extractedDt! !