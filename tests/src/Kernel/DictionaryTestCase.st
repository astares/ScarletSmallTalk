TestCase subclass: #DictionaryTestCase !

! DictionaryTestCase methodsFor: #running !

testAsArray

	| td arr |
	td := Dictionary new.
	self 
		assert: td asArray 
		equals: #().
	td add: 'test1' -> 1.
	td add: 'test2' -> 2.
	td add: 'test3' -> 3.
	td add: 'test4' -> 4.
	arr := td asArray.
	self assert: arr isArray.
	self
		assert: arr asSet
		equals: #(1 2 3 4) asSet. !

testAsOrderedCollection

	| td oCollection |
	td := Dictionary new.
	td add: 'test1' -> 1.
	td add: 'test2' -> 2.
	oCollection := td asOrderedCollection.
	self
		assert: oCollection class
		equals: OrderedCollection.
	self
		assert: (oCollection includes: 1);
		assert: (oCollection includes: 2).
	self 
		assert: oCollection size 
		equals: 2 !

testAsSet

	| td set |
	td := Dictionary new.
	td add: 'test1' -> 1.
	td add: 'test2' -> 2.
	set := td asSet.
	self assert: set isSet.
	self 
		assert: set
		equals: #(1 2) asSet. !

testAsSortedCollection

	| td sc |
	td := Dictionary new.
	td add: 'test2' -> 2.
	td add: 'test1' -> 1.
	sc := td asSortedCollection!

testCollect

	| td resultD resultVals expectedVals |
	expectedVals := #(1 2 3 4) asSet.
	td := Dictionary new.
	td add: 'test1' -> 0.
	td add: 'test2' -> 1.
	td add: 'test3' -> 2.
	td add: 'test4' -> 3.
	resultD := td collect: [:each | each + 1].
	resultVals := resultD values asSet.
	self 
		assert: resultVals
		equals: expectedVals.
	self
		should: [td collect: 3]
		raise: Error. !

testDetect

	| td |
	td := Dictionary new.
	td add: 'test1' -> 4.
	self
		should:[td detect: [:each | each < 3]]
		raise: Error.
	td add: 'test2' -> 2.
	self
		assert: (td detect: [:each | each < 3])
		equals: 2.
	self
		should: [td detect: 4]
		raise: Error. !

testDetectIfNone

	| td |
	td := Dictionary new.
	td add: 'test1' -> 6.
	self 
		assert: (td detect: [:each | each < 6] ifNone: [-1])
		equals: -1.
	td add: 'test2' -> 5.
	self
		assert: (td detect: [:each | each < 6] ifNone: [-1])
		equals: 5.
	self
		should: [td detect: [:each | each < 6] ifNone: -1]
		raise: Error.
	self
		should: [td detect: 5 ifNone: [-1]]
		raise: Error ! 

testDo

	| td result |
	result := 0.
	td := Dictionary new.
	td add: 'test1' -> 1.
	td add: 'test2' -> 2.
	td add: 'test3' -> 3.
	td add: 'test4' -> 4.
	td do: [:each | result := result + each].
	self 
		assert: result 
		equals: 10.
	self
		should: [td do: 4]
		raise: Error !

testDoSeparatedBy

	| td result |
	td := Dictionary new.
	result := ''.
	td add: 'test1' -> '1'.
	td add: 'test2' -> '2'.
	td add: 'test3' -> '3'.
	td add: 'test4' -> '4'.
	td do: [:each | result := result,each] separatedBy: [result := result,' '].
	self 
		assert: result
		equals: '1 2 3 4'.
	self
		should: [td do: [:each | each + 1] separatedBy: 4]
		raise: Error.
	self
		should: [td do: 4 separatedBy: [4]]
		raise: Error !

testAdd

	| td |
	td := Dictionary new.
	self deny: (td includes: 1).
	self deny: (td includesKey: 'test1').
	self assert: td size = 0.
	td add: 'test1' -> 1.
	self assert: td size = 1.
	self assert: (td includes: 1).
	self assert: (td includesKey: 'test1').

	td add: 'test2' -> 2.
	self assert: td size = 2.
	self assert: (td includes: 2).
	self assert: (td includesKey: 'test2').

	td add: 'test1' -> 3.
	self assert: td size = 2.
	self deny: (td includes: 1).
	self assert: (td includes: 3).
	self assert: (td includesKey: 'test1') !

testRemoveKey

	| td |
	td := Dictionary new.
	self deny: (td includes: 1).
	self deny: (td includesKey: 'test1').
	self assert: td size = 0.
	td add: 'test1' -> 1.
	self assert: td size = 1.
	self assert: (td includes: 1).
	self assert: (td includesKey: 'test1').

	td add: 'test2' -> 2.
	self assert: td size = 2.
	self assert: (td includes: 2).
	self assert: (td includesKey: 'test2').

	td removeKey: 'test1'.
	self assert: td size = 1.
	self deny: (td includes: 1).
	self assert: (td includes: 2).
	self deny: (td includesKey: 'test1').

	td add: 'test3' -> 2.
	td add: 'test1' -> 5.
	td add: 'test4' -> 2.

	self assert: td size = 4.
	self assert: (td includes: 2).
	self assert: (td includes: 5).
	#('test1' 'test2' 'test3' 'test4') do: [ :each | self assert: (td includesKey: each)].
	
	td removeKey: 'test3'.
	self assert: td size = 3.
	#('test1' 'test2' 'test4') do: [ :each | self assert: (td includesKey: each) ].
	#('test2' 'test4') do: [:each | self assert: (td at: each ifAbsent:[^self]) equals: 2] !

testIncludes

	| td |
	td := Dictionary new.
	self deny: (td includes: 5).
	td add: 'test' -> 5.
	self assert: (td includes: 5). !

testInjectInto

	| td result |
	td := Dictionary new.
	td add: 'test1' -> 1.
	td add: 'test2' -> 2.
	td add: 'test3' -> 3.
	td add: 'test4' -> 4.
	result := td inject: 0 into: [:sum :each | sum + each].
	self 
		assert: result
		equals: 10.
	self
		should: [td inject: 0 into: 3]
		raise: Error !

testIsEmpty

	| td |
	td := Dictionary new.
	self assert: td isEmpty.
	td add: 'test' -> 1.
	self deny: td isEmpty. !

testNotEmpty

	| td |
	td := Dictionary new.
	self deny: td notEmpty.
	td add: 'test' -> 1.
	self assert: td notEmpty. !

testOccurrencesOf

	| td |
	td := Dictionary new.
	self 
		assert: (td occurrencesOf: 1)
		equals: 0.
	td add: 'test' -> 1.
	td add: 'test2' -> 1.
	td add: 'test3' -> 1.
	self
		assert: (td occurrencesOf: 1)
		equals: 3. !

testReject

	| td resultDictionary vals |
	td := Dictionary new.
	td add: 'test' ->  1.
	td add: 'test2' -> 2.
	td add: 'test3' -> 3.
	td add: 'test4' -> 4.
	resultDictionary:= td reject: [:each | each odd].
	vals := resultDictionary values asSet.
	self 
		assert: vals 
		equals: #(2 4) asSet.
	self
		should: [td reject: 4]
		raise: Error !

testSelect

	| td resultDictionary vals |
	td := Dictionary new.
	td add: 'test' ->  1.
	td add: 'test2' -> 2.
	td add: 'test3' -> 3.
	td add: 'test4' -> 4.
	resultDictionary:= td select: [:each | each odd].
	vals := resultDictionary values asSet.
	self 
		assert: vals 
		equals: #(1 3) asSet.
	self
		should: [td select: 4]
		raise: Error !

testSize

	| td |
	td := Dictionary new.
	self 
		assert: td size 
		equals: 0.
	td add: 'test' -> 5.
	td add: 'test2' -> 5.
	self 
		assert: td size 
		equals: 2. ! !