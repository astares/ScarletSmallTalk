TestResult
	subclass: #TestResultHudson
	instanceVariableNames: ' '
	category: #SUnit !

TestRunner
	subclass: #TestRunnerHudson
	instanceVariableNames: ' '
	category: #SUnit !

! TestRunnerHudson methodsFor: #private !
initTestResult
	result := TestResultHudson new! !

! TestRunnerHudson methodsFor: #accessing !
notificationBlock
   " Return the notificationBlock of the receiver (or default printing block). "

   notificationBlock isNil ifTrue: [
	   ^[:test :selector |  ]
   ].
   ^notificationBlock! !

! TestResultHudson methodsFor: #accessing !
addError: error class: className test: testSelector
	" Record the error at current test stage. "

	self errors add: (Array with: error with: className with: testSelector)! !

! TestResultHudson methodsFor: #accessing !
addPassed: className test: testSelector
	" Record the pass at current test stage. "

	self passed add: (Array with: className with: testSelector)! !

! TestResultHudson methodsFor: #accessing !
addFailure: failure class: className test: testSelector
	" Record the failure at current test stage. "

	self failures add: (Array with: failure with: className with: testSelector)! !

 ! TestResultHudson methodsFor: #printing !
toString
	" Return the string representation of the receiver. "

	^self junitXML! !

! TestResult methodsFor: #printing !
junitXML
 	"Return the test result in junit compatible format"

 	| stream nrOfTests |
 	stream := String new stream.
	nrOfTests := self passed size + self errors size + self failures size.
	stream
		nextPutAll: '<testsuite tests="';
		nextPutAll: nrOfTests printString;
		nextPutAll: '">';
		cr.

 	self passed do: [:stage|
	  	stream
	 		nextPutAll: '<testcase classname="';
	 		nextPutAll: 'kernel'; "TODO needs to be a parameter"
	 		nextPut: $.;
	 		nextPutAll: (stage at: 1);
	 		nextPutAll: '" name="';
	 		nextPutAll: (stage at: 2) asString;
	 		nextPutAll: '"/>';
	 		cr.
	].

	self failures do: [:stage|
	  	stream
	 		nextPutAll: '<testcase classname="';
	 		nextPutAll: 'kernel'; "TODO needs to be a parameter"
	 		nextPut: $.;
	 		nextPutAll: (stage at: 2);
	 		nextPutAll: '" name="';
	 		nextPutAll: (stage at: 3) asString;
	 		nextPutAll: '">';
	 		cr;
	 		nextPutAll: '<failure type="';
	 		nextPutAll: 'failed';
	 		nextPutAll: '">';
	 		nextPutAll: (stage at: 1) description;
	 		nextPutAll: '</failure>';
	 		cr;
	 		nextPutAll: '</testcase>';
	 		cr.
	].

 	self errors do: [:stage|
	  	stream
	 		nextPutAll: '<testcase classname="';
	 		nextPutAll: 'kernel'; "TODO needs to be a parameter"
	 		nextPut: $.;
	 		nextPutAll: (stage at: 2);
	 		nextPutAll: '" name="';
	 		nextPutAll: (stage at: 3) asString;
	 		nextPutAll: '">';
	 		cr;
	 		nextPutAll: '<failure type="';
	 		nextPutAll: 'error';
	 		nextPutAll: '">';
	 		nextPutAll: (stage at: 1) description;
"			nextPutAll: (stage at: 1) toString;"
	 		nextPutAll: '</failure>';
	 		cr;
	 		nextPutAll: '</testcase>';
	 		cr.
 	].

	stream
		nextPutAll: '</testsuite>';
		cr.

 	^stream contents! !
