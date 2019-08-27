Object
	subclass: #TestCase
	instanceVariableNames: 'assertCount'
	category: #SUnit !

Object
	subclass: #TestResult
	instanceVariableNames: 'runningInHudson timestamp runs passed errors failures total '
	category: #SUnit !

Error
	subclass: #TestFailure
	instanceVariableNames: ''
	category: #SUnit !

Object
	subclass: #TestRunner
	instanceVariableNames: ' result progress timeout notificationBlock '
	category: #SUnit !

! TestCase methodsFor: #accessing !
assertCount

	^assertCount!

assertCount: anInteger

	assertCount := anInteger! !

! TestCase methodsFor: #'record keeping' !
resetAssertCount

	self assertCount: 0!

incrementAssertionCount

	self assertCount: self assertCount + 1! !

 ! TestCase class methodsFor: #testing !
run
	" Run the test case selectors implemented by the receiver. "

	^TestRunner run: self! !

 ! TestCase class methodsFor: #testing !
runAll
	" Run the test case selectors implemented by the receiver and its subclasses. "

	^TestRunner runAll: self withAllSubclasses! !

 ! TestCase class methodsFor: #executing !
runCases: selectors for: aTestResult doing: aBlock
	" Run test case with selectors. "

	^self new runCases: selectors for: aTestResult doing: aBlock! !

 ! TestCase class methodsFor: #private !
ownedTestSelectors
	" Return the test selectors implemented by the receiver. "

	^self methodDictionary keys select: [:each | each match: '^test' ]! !

 ! TestCase class methodsFor: #private !
withTestSuperclasses
	" Return the receiver with all test superclasses. "

	| superclasses |
	superclasses := self allSuperclasses select: [:each | each inheritsFrom: TestCase].
	^(Array with: self), superclasses! !

 ! TestCase class methodsFor: #private !
selectorsForTest
	" Return the test selectors implemented by the receiver.
	The default action return the message selectors matching test pattern implemented by the receiver's class and its test superclasses.
	"

	^self withTestSuperclasses inject: Array new into: [:total :each| total , each ownedTestSelectors ]! !

 ! TestCase methodsFor: #private !
cleanUp
	" Private - CleanUp the instance variables of the receiver. "

	self class instanceVariableNames do: [:each|
		(#( #testSelector ) includes: each) ifFalse: [
			self instVarAt: each put: nil
		].
	]! !

 ! TestCase methodsFor: #private !
signalFailure: aString
	" Private - Signal a test failure. "

	TestFailure signal: aString! !

 ! TestCase methodsFor: #executing !
setUp
	" Setup the receiver to perform a test.
	This method can be refined by subclasses to ensure correct testing context.
	"
	self resetAssertCount! !

 ! TestCase methodsFor: #executing !
tearDown
	" Release the receiver's resources.
	The default action do nothing.
	This method can be refined by subclasses to clean up resources allocated for testing.
	"! !

 ! TestCase methodsFor: #executing !
selectorsForTest
	" Return the test selectors implemented by the receiver. "

	^self class selectorsForTest! !

 ! TestCase methodsFor: #executing !
runCaseFor: aTestResult
	" Run a test case. "

	self runCases: self selectorsForTest for: aTestResult doing: nil! !

 ! TestCase methodsFor: #executing !
runCases: selectors for: aTestResult doing: aBlock
	" Run test case with selectors. "

	self performTests: selectors for: aTestResult doing: aBlock! !

 ! TestCase methodsFor: #private !
performTests: selectors for: aResult doing: aBlock
	" Evaluate the tests defined by the receiver. "

	selectors
		do:  [:each|
			each == #testSelectors
				ifFalse: [
					[self setUp.
					self perform: each testFor: aResult doing: aBlock]
						ensure:
							[self
								tearDown;
								cleanUp]
					]]! !

 ! TestCase methodsFor: #private !
perform: selector testFor: aResult doing: aBlock
	" Evaluate the tests implemented as selector in the receiver. "

	| didPass |
	didPass := true.
	[[aBlock
		ifNotNil:
			[aBlock
				value: self
				value: selector].
	self perform: selector.]
		on: TestFailure
		do: [:failure|
			didPass := false.
			self
				print: '	Fail!!';
				print: '	', failure description.
			aResult addFailure: failure class: self class name test: selector.
			"aResult addFailure: failure at: self class name, '>>#', selector"]]
		on: Error
		do: [:error|
		didPass := false.
			self
				print: '	Fail!!';
				print: '	', error description.
			aResult addError: error class: self class name test: selector.
			"aResult addError: error at: self class name, '>>#', selector"].
	didPass
		ifTrue: [
			aResult addPassed: self class name test: selector.
			"aResult addPassed: self class name, '>>#', selector"].
	aResult finished.! !

 ! TestCase methodsFor: #testing !
assert: aBoolean
	" Test an assertion. "

	self incrementAssertionCount.
	aBoolean ifFalse: [ self signalFailure: 'Assertion ', self assertCount printString, ' failed!!' ]! !

! TestCase methodsFor: #testing !
assert: aBoolean message: message
   	" Test an assertion. "

   	aBoolean ifFalse: [ self signalFailure: 'Assertion failed: ', message ]! !

! TestCase methodsFor: #testing !
assert: aBoolean description: message
   	" Test an assertion. "
	self assert: aBoolean message: message! !

! TestCase methodsFor: #testing !
deny: aBoolean
	" Test a negative assertion. "

	self assert: aBoolean not! !

! TestCase methodsFor: #testing !
deny: aBoolean message: message
   	" Test an assertion. "

   	aBoolean ifTrue: [ self signalFailure: 'Assertion failed: ', message ]! !

 ! TestCase methodsFor: #testing !
assert: anObject
equals: bObject
	" Test an assertion. "

	self assert: anObject = bObject! !

 ! TestCase methodsFor: #testing !
deny: anObject
equals: bObject
	" Test an assertion. "

	self deny: anObject = bObject! !

! TestCase methodsFor: #asserting !
executeShould: aBlock
inScopeOf: anException

	aBlock
		on: anException
		do: [:ex | ^true].
	^false! !

! TestCase methodsFor: #asserting !
should: aBlock
raise: anException

	self assert: (self executeShould: aBlock inScopeOf: anException)!

shouldnt: aBlock
raise: anException

	self deny: (self executeShould: aBlock inScopeOf: anException)! !

 ! TestResult methodsFor: #accessing !
timestamp
	" Return the timestamp of the receiver. "

	^timestamp! !

 ! TestResult methodsFor: #accessing !
errors
	" Return the errors of the receiver. "

	^errors! !

 ! TestResult methodsFor: #accessing !
failures
	" Return the failures of the receiver. "

	^failures! !

! TestResult methodsFor: #accessing !
passed
	" Return the passed of the receiver. "

	^passed! !

 ! TestResult methodsFor: #accessing !
total
	" Return the total of the receiver. "

	^total! !

 ! TestResult methodsFor: #accessing !
total: aNumber
	" Set the total of the receiver. "

	total := aNumber! !

! TestResult methodsFor: #accessing !
addError: error class: className test: testSelector
	" Record the error at current test stage. "
	self errors add: (Array with: error with: self class name, '>>#', testSelector)! !

! TestResult methodsFor: #accessing !
addPassed: className test: testSelector
	" Record the pass at current test stage. "

	self passed add: (self class name, '>>#', testSelector)! !

! TestResult methodsFor: #accessing !
addFailure: failure class: className test: testSelector
	" Record the failure at current test stage. "

	self failures add: (Array with: failure with: self class name, '>>#', testSelector)! !


 ! TestResult methodsFor: #accessing !
runs
	" Return the run count of the receiver. "

	^runs! !

 ! TestResult methodsFor: #accessing !
finished
	" The test has finished. "

	runs := runs + 1! !

 ! TestResult methodsFor: #accessing !
status
	" Return the status of the receiver. "

	self errors notEmpty ifTrue: [ ^#error ].
	self failures isEmpty ifTrue: [ ^#success ].
	^#failure! !

 ! TestResult methodsFor: #accessing !
passes
	" Return the number of tests that run ok. "

	^self total - (self errors size + self failures size)! !

 ! TestResult methodsFor: #initialize !
initialize
	" Private - Initialize the receiver. "

	super initialize.
	timestamp := DateTime now.
	runs := total := 0.
	passed := Array new.
	errors := Array new.
	failures := Array new.! !

 ! TestResult methodsFor: #printing !
toString
	" Return the string representation of the receiver. "

	total isNil ifTrue: [ ^'a',self class name ].
	^self class name ,' [', self status,'] '
		,self passes asString,' ok, '
		,self failures size asString,' failed, '
		,self errors size asString,' errors'
		,'
'
		,self description! !

 ! TestResult methodsFor: #printing !
description
	" Return the description of the receiver. "

	| stream |
	stream := String new stream.
	stream nextPutAll: 'status=', self status;cr.
	stream cr; nextPutAll: 'failures:';cr.
	self failures do: [:tuple|
		stream cr;nextPutAll: '	',tuple last ,'	' ,tuple first description
	].
	stream cr; nextPutAll: 'errors:';cr.
	self errors do: [:tuple|
		stream cr;nextPutAll: '	',tuple last ,'	' ,tuple first description
	].
	stream cr; nextPutAll: 'passed:';cr.
	self passed do: [:stage|
		stream cr;nextPutAll: '	',stage
	].
	^stream contents! !

! TestRunner class methodsFor: #testing !
runAll
	" Run all test cases. "

	^self runAll: TestCase allSubclasses! !

 ! TestRunner class methodsFor: #testing !
runCategories: categories
	" Run all test cases defined in TestCase subclasses matching categories. "

	^self runAll: (TestCase allSubclasses
		select: [:each| categories includes: each category ])! !

 ! TestRunner class methodsFor: #testing !
runAll: aCollection
	" Run all test cases defined in aCollection (of TestCase subclasses). "

	^self new runClasses: aCollection! !

 ! TestRunner class methodsFor: #testing !
run: aTestCase
	" Run a test case. "

	^self new runAll: (Array with: aTestCase)! !

 ! TestRunner methodsFor: #accessing !
progress
	" Return the progress indicator of the receiver (or nil). "

	^progress! !

 ! TestRunner methodsFor: #accessing !
progress: aProgress
	" Set the progress indicator of the receiver. "

	progress := aProgress! !

 ! TestRunner methodsFor: #accessing !
timeout
	" Return the timeout of the receiver (or nil). "

	^timeout! !

 ! TestRunner methodsFor: #accessing !
percent
	" Return the percent of advance in the current test set. "
	| runs total |
	result isNil ifTrue: [ ^0 ].
	runs := result runs.
	total := result total.
	total == 0 ifTrue: [ ^0 ].
	"work around a fraction issue for now"
	^100.0 * runs / total! !

 ! TestRunner methodsFor: #accessing !
timeout: aNumber
	" Set the timeout of the receiver.
	WARNING: do not set the timeout if the platform do not support setTimeout().
	"

	timeout := aNumber! !

 ! TestRunner methodsFor: #accessing !
notificationBlock
	" Return the notificationBlock of the receiver (or default printing block). "

	notificationBlock isNil ifTrue: [
		^[:test :selector | self print: test class name,'>>#',selector ]
	].
	^notificationBlock! !

 ! TestRunner methodsFor: #accessing !
notificationBlock: aTwoArgumentBlock
	" Set the notificationBlock of the receiver. "

	notificationBlock := aTwoArgumentBlock! !

 ! TestRunner methodsFor: #testing !
runClasses: aCollection
	" Run all test cases defined in aCollection (of TestCase subclasses). "

	^self runTests: aCollection! !

! TestRunner methodsFor: #private !
initTestResult
	result := TestResult new! !

 ! TestRunner methodsFor: #testing !
runTests: specification
	" Run all test cases defined in specification.
	Return the result of testing.
	specification is a collection of TestCase subclass or tuples of (TestCaseSubclass selectors)
	"

	| tests |
	self percent: 0.
	tests := specification collect: [:each|
		each isClass
		ifTrue: [ Array with: each with: each selectorsForTest ]
		ifFalse: [ each ]
	].
	self initTestResult.
	result total: (tests inject: 0 into: [:total :tuple| total + tuple last size ]).
	tests do: [:tuple|
		self percent: self percent.
		self valueWithTimeout: [
			tuple first
				runCases: tuple last for: result
				doing: self notificationBlock
		].
	].
	^result! !

 ! TestRunner methodsFor: #private !
valueWithTimeout: aBlock
	" Private - Return the result of evaluating aBlock (with timeout). "

	self timeout isNil ifTrue: [ ^aBlock value ].
	^aBlock valueWithTimeout: self timeout! !

 ! TestRunner methodsFor: #private !
percent: aNumber
	" Private - Notify the percent of advance in the current test set. "

	self progress isNil ifTrue: [ ^self ].
	self progress value: aNumber! !
