TestCase subclass: #BlockClosureTestCase !

! BlockClosureTestCase methodsFor: #running !

testWhileTrue

	| val |
	val := 0.
	[val < 10]
		whileTrue: [val := val + 1].
	self
		assert: val
		equals: 10.
"	self
		should: [[val < 11] whileTrue: nil]
		raise: Error.
"	[false yourself] whileTrue: [self assert: false]. !

testWhileFalse

	| val |
	val := 0.
	[val = 10]
		whileFalse: [val := val + 1].
	self
		assert:val
		equals:10.
"	self
		should: [[val > 11] whileFalse: nil]
		raise: Error." !

testValue

	self
		assert: [2 + 2] value
		equals: 4. !

testValueWithObject

	self
		assert: ([ :x | x + 2] value: 3)
		equals: 5.
	self
		should: [([:x | x + 2] value)]
		raise: Error. !
testValueWith2Objects

	self
		should: [[:x :y | x + y] value]
		raise: Error.
	self
		should: [[:a :b| a + b] value: 1]
		raise: Error.
	self
		assert: ([:x :y | x + y] value: 3 value: 2)
		equals: 5. !

testValueWith3Objects

	self
		should: [[:x :y :z | x + y + z] value]
		raise: Error.
	self
		should: [[:a :b :c| a + b + c] value: 1 value: 2]
		raise: Error.
	self
		assert: ([ :x :y :z | x + y + z] value: 1 value: 2 value: 3)
		equals: 6. !

testValueWith4Objects

	self
		should: [[:a :b :c :d | a + b + c + d] value]
		raise: Error.
	self
		should: [[:a :b :c :d | a + b + c + d] value: 1 value: 2 value: 3]
		raise: Error.
	self
		assert: ([ :a :b :c :d | a + b + c + d] value: 25 value: 50 value: 20 value: 5)
		equals: 100. !

testValueWithArguments

	self
		should: [([:x :y | x + y] valueWithArguments: #(1))]
		raise: Error.
	self
		should: [([:x :y | x + y] valueWithArguments: '')]
		raise: Error.
	self
		should: [([4] valueWithArguments: #(1 2 3))]
		raise: Error.
	self
		assert: ([4] valueWithArguments: #())
		equals: 4.
	self
		assert: ([ :x :y :z | x + y +z + 4] valueWithArguments: #(1 2 3))
		equals: 10. !

testOnDo
	| val |
	val := 0.
	self
		assert: ([1] on:[Error new Signal] do: [2 + 2])
		equals: 1.
	([self error:'123'] on: Error do: [val := 2]).
	self
		assert: val
		equals: 2. !

testEnsure
	| val |
	([3/4] ensure: [val := 1/2]).
	self
		assert: val
		equals: 1/2.
	val := 0.
	self
		should: [ [Error new signal ] ensure: [ val := 3 ]]
		raise: Error.
		self
			assert: val
			equals: 3. !

testArguementCount

	self
		assert: [] argumentCount
		equals: 0.
	self
		assert: [2] argumentCount
		equals: 0.
	self
		assert: [:x | x] argumentCount
		equals: 1.
	self
		assert: [:x :y :z | x + y + z] argumentCount
		equals: 3. !

testEquality

	| generateBlock aBlock |
	generateBlock := [[]].
	self 
		assert: generateBlock
		equals: generateBlock.
	self
		deny: generateBlock value
		equals: generateBlock value.
	self
		deny: [[]]
		equals: generateBlock !

testDoubleEquality

	| generateBlock |
	generateBlock := [[]].
	self
		assert: generateBlock == generateBlock;
		deny: generateBlock value == generateBlock value;
		deny: generateBlock == [[]] !

testNotEquals

	| generateBlock |
	generateBlock := [[]].
	self 
		deny: generateBlock ~= generateBlock;
		assert: generateBlock value ~= generateBlock value;
		assert: generateBlock ~= [[]] !

testDoubleNotEqual

	| generateBlock |
	generateBlock := [[]].
	self 
		deny: generateBlock ~~ generateBlock;
		assert: generateBlock value ~~ generateBlock value;
		assert: generateBlock ~~ [[]] !

testPrintString

	| str |
	str := [1] printString.
	self
		assert: str
		equals: 'a BlockClosure' !

testPrintOn

	| stream |
	stream := '' stream.
	[] printOn: stream.
	self 
		assert: stream contents
		equals: 'a BlockClosure' !

testEvaluateFor

	self 
		assert: ([:x | x + 1] evaluateFor: 1)
		equals: 2 !

testEvaluate

	self
		assert: [1] evaluate
		equals: 1 ! !