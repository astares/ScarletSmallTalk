TestCase subclass: #BooleanTestCase !

! BooleanTestCase methodsFor: #running !

testEquals

	| badVals |
	badVals := #(1 '' #() '2' #(2) nil).
	badVals do: [:each | self deny: true = badVals].
	self assert: (true = (1 = 1)).
	self assert: (false = (1 > 10)).
	self assert: true = true.
	self assert: false = false.
	self deny: true = false.
	self deny: false = true.
	self deny: (true yourself) = false.
	self assert: (true yourself) = true.
	self deny: (false yourself) = true. !

testIfTrue

	self
		assert: (true ifTrue: [3 + 2])
		equals: 5.
	self
		assert: (false ifTrue: [3 + 2])
		equals: nil.
	self
		assert: (true ifTrue: 4)
		equals: 4.
"	self
		assert: [(false ifTrue: 4)]
		equals: nil." !

testIfFalse

	self
		assert: (false ifFalse: [2 + 2])
		equals: 4.
	self
		assert: (true ifFalse: [2 + 2])
		equals: nil.
"	self
		assert: [(false ifFalse: 4)]
		equals: 4.
	self
		assert: [(false ifTrue: 4)]
		equals: nil. "!

testIfTrueIfFalse

	self
		assert: (true ifTrue: [1] ifFalse: [2])
		equals: 1.
	self
		assert: (false ifTrue: [1] ifFalse: [2])
		equals: 2.
"	self
		assert: [(false ifTrue: [1] ifFalse: 2)]
		equals: 2." !

testIfFalseIfTrue

	self
		assert: (true ifFalse: [1] ifTrue: [2])
		equals: 2.
"	self
		assert: (false ifFalse: [1] ifTrue: [2])
		equals: 1.
	self
		assert: [(false ifTrue: #() ifFalse: 2)]
		equals: 2. "!

testNot

	self assert: false not.
	self deny: true not !

testPrintString

	self
		assert: true printString
		equals: 'true'.
	self
		assert: false printString
		equals: 'false'. !

testAnd

	self 
		deny: (false and: [false]);
		deny: (false and: [true]);
		deny: (true and: [false]);
		assert: (true and: [true]).
	self
		should: [true and: true]
		raise: Error !

testOr

	self
		deny: (false or: [false]);
		assert: (false or: [true]);
		assert: (true or: [false]);
		assert: (true or: [true]).
	self
		should: [true or: true]
		raise: Error !

testAmpersand

	self
		deny: (false & false);
		deny: (false & true);
		deny: (true & false);
		assert: (true & true).
	self
		should: [true & [true]]
		raise: Error !

testPipeSymbol

	self
		deny: (false | false);
		assert: (false | true);
		assert: (true | false);
		assert: (true | true).
	self
		should: [true | [false]]
		raise: Error ! !