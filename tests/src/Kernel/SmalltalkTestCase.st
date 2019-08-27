TestCase subclass: #SmalltalkTestCase !

! SmalltalkTestCase methodsFor: #running !

testEval

	self 
		assert: [Smalltalk current eval: '5 + 5'] value
		equals: 10 ! !

! SmalltalkTestCase methodsFor: #running !

testEvaluate

	self 
		assert: [Smalltalk current compilerSupport evaluate: '5 + 5'] value
		equals: 10 ! !

! SmalltalkTestCase methodsFor: #running !

testDoIt

	self 
		assert: [Smalltalk current compilerSupport doIt: '5 + 5'] value
		equals: 10 ! !


