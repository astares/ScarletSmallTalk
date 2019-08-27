TestCase subclass: #ExceptionTestCase !

! ExceptionTestCase methodsFor: #running !

testSignal

	self
		should: [Exception signal]
		raise: Exception !

testOnDoWithNonLocalReturn

    [^true]
        on: Error
        do: [:ex | self assert: false]! !