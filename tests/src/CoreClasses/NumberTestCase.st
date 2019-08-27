TestCase 
	subclass: #NumberTestCase
	instanceVariableNames: ''
	category: 'Kernel-Test'!

! NumberTestCase methodsFor: #running !
testAddition

	| numberTemp |
	numberTemp := 15.
	self
		assert: 1 + 1
		equals: 2.
	self
		assert: 1 + (-1)
		equals: 0.
	self
		should: [1 + Array new]
		raise: Error.
	self
		should: [Array new + 1]
		raise: Error.
	self
		should: [1 + nil]
		raise: Error.
	self
		should: [nil + 1]
		raise: Error.
	self
		should: [1 + true]
		raise: Error.
	self
		should: [true + 1]
		raise: Error.
	self
		should: [1 + false]
		raise: Error.
	self
		should: [false + 1]
		raise: Error.
	self
		assert: 15 + 15
		equals: 30.
	self
		assert: numberTemp + numberTemp
		equals: 30! !

! NumberTestCase methodsFor: #running !
testSubtraction

	| numberTemp |
	numberTemp := 15.
	self
		assert: 1 - 1
		equals: 0.
	self
		assert: 1 - (-1)
		equals: 2.
	self
		should: [1 - Array new]
		raise: Error.
	self
		should: [Array new - 1]
		raise: Error.
	self
		should: [1 - nil]
		raise: Error.
	self
		should: [nil - 1]
		raise: Error.
	self
		should: [1 - true]
		raise: Error.
	self
		should: [true - 1]
		raise: Error.
	self
		should: [1 - false]
		raise: Error.
	self
		should: [false - 1]
		raise: Error.
	self
		assert: 15 - 15
		equals: 0.
	self
		assert: numberTemp - numberTemp
		equals: 0! !