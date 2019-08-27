TestCase subclass: #SetTestCase !

! SetTestCase methodsFor: #running !

testAsArray

	| set resultArray |
	set := Set with: 1 with: 2 with: 3.
	resultArray := set asArray.
	self 
		assert: resultArray class
		equals: Array.
	#(1 2 3) do: [:each | self assert: (resultArray includes: each)].
	self
		assert: resultArray size
		equals: 3 !

testAsOrderedCollection

	| ts oCollection |
	ts := Set with: 1 with: 2.
	oCollection := ts asOrderedCollection.
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

	| testSet resultSet |
	testSet := Set with: 1 with: 2.
	resultSet := testSet asSet.
	self assert: resultSet isSet.
	self
		assert: resultSet
		equals: #(1 2) asSet. !

testAsSortedCollection

	| testSet sortedCollection |
	testSet := Set with: 2 with: 1.
	sortedCollection := testSet asSortedCollection.
	self
		assert: sortedCollection class
		equals: SortedCollection. !

testCollect

	| testSet resultSet expectedSet |
	expectedSet := #(1 2 3 4) asSet.
	testSet := #(0 1 2 3) asSet.
	resultSet := testSet collect: [:each | each + 1].
	self
		assert: resultSet
		equals: expectedSet !

testDetect

	| testSet |
	testSet := Set with: 2.
	self
		should: [testSet detect: [:each | each < 2]]
		raise: Error.
	testSet add: 1.
	self
		assert: (testSet detect: [:each | each < 2])
		equals: 1. !

testDetectIfNone

	| testSet |
	testSet := Set with: 2.
	self
		assert: (testSet detect: [:each | each < 2] ifNone:[-1])
		equals: -1.
	testSet add: 1.
	self
		assert: (testSet detect: [:each | each < 2] ifNone:[-1])
		equals: 1. !

testDo

	| testSet result |
	result := 0.
	testSet := #(1 2 3 4) asSet.
	testSet do: [:each | result := result + each].
	self
		assert: result
		equals: 10.
	self
		should: [testSet do: 4]
		raise: Error !

testDoSeparatedBy

	| testSet result |
	testSet := #(1 2 3 4) asSet.
	result := 0.
	testSet do: [:each | result := result + each] separatedBy: [result := result + 10].
	self
		assert: result
		equals: 40.
	self
		shouldnt: [testSet do: [:each | each + 1] separatedBy: 4]
		raise: Error.
	self
		should: [testSet do: 4 separatedBy: [result := result,'']]
		raise: Error !

testAdd

	| testSet |
	testSet := Set new.
	self assert: testSet size = 0.
	testSet add: 1.
	self assert: testSet size = 1.
	self assert: (testSet includes: 1).
	testSet add: 2.
	self assert: testSet size = 2.
	self assert: (testSet includes: 2).
	testSet add: 1.
	self assert: testSet size = 2 !

testRemove

	| testSet |
	testSet := Set new.
	self assert: testSet size = 0.
	testSet add: 1.
	self assert: testSet size = 1.
	self assert: (testSet includes: 1).
	testSet add: 2.
	self assert: testSet size = 2.
	self assert: (testSet includes: 2).
	testSet remove: 1.
	self assert: testSet size = 1.
	self deny: (testSet includes: 1).
	self assert: (testSet includes: 2) !

testIncludes

	| testSet |
	testSet := Set new.
	self deny: (testSet includes: 1).
	testSet add: 1.
	self assert: (testSet includes: 1) !

testInjectInto

	| testSet result |
	testSet := Set withAll: #(1 2 3 4).
	result := testSet inject: 0 into: [:sum :each | sum + each].
	self 
		assert: result
		equals: 10.
	self 
		should: [testSet inject: 0 into: 1]
		raise: Error. !

testIsEmpty

	| testSet |
	testSet := Set new.
	self assert: testSet isEmpty.
	testSet add: 1.
	self deny: testSet isEmpty !

testNotEmpty

	| testSet |
	testSet := Set new.
	self deny: testSet notEmpty.
	testSet add: 1.
	self assert: testSet notEmpty !

testOccurrencesOf

	| testSet |
	testSet := Set new.
	self
		assert: (testSet occurrencesOf: 1)
		equals: 0.
	testSet add: 1.
	self
		assert: (testSet occurrencesOf: 1)
		equals: 1.
	testSet add: 1.
	self
		assert: (testSet occurrencesOf: 1)
		equals: 1 !

testReject

	| testSet resultSet |
	testSet := Set withAll: #(1 2 3 4).
	
	resultSet := testSet reject: [:each | each odd].
	self 
		assert: resultSet
		equals: #(2 4) asSet.
	self
		should: [testSet reject: 1]
		raise: Error !

testSelect

	| testSet resultSet |
	testSet := Set withAll: #(1 2 3 4).
	resultSet := testSet select: [:each | each odd].
	self
		assert: resultSet
		equals: #(1 3) asSet.
	self
		should: [testSet collect: 1]
		raise: Error !

testSize

	| testSet |
	testSet := Set new.
	self 
		assert: testSet size
		equals: 0.
	testSet add: 1.	
	self
		assert: testSet size
		equals: 1.
	testSet add: 1.
	self
		assert: testSet size
		equals: 1 ! !