TestCase subclass: #ArrayTestCase !

! ArrayTestCase methodsFor: #running !

testBasicNew

	| testArray |
	testArray := Array basicNew: 3.
	self assert: testArray isArray.
	self
		assert: testArray size
		equals: 3.
	self
		assert: testArray
		equals: #(nil nil nil).
	self
		should: [Array basicNew: 3.5]
		raise: Error.
	self
		should: [Array basicNew: '3']
		raise: Error. !

testWith

	self
		assert: (Array with: 2)
		equals: #(2). !

testWithWith

	self
		assert: (Array with: 1 with: 2)
		equals: #(1 2). !

testWithWithWith

	self
		assert: (Array with: 1 with: 2 with: 3)
		equals: #(1 2 3). !

testWithWithWithWith

	self
		assert: (Array with: 1 with: 2 with: 3 with: 4)
		equals: #(1 2 3 4). !

testWithAll
	
	| testArray testSet testDictionary |
	testSet := #(1 2 3) asSet.
	testDictionary := Dictionary fromKeys: #('one' 'two' 'three') and: #(1 2 3).
	self
		assert: (Array withAll: '1234')
		equals: #('1' '2' '3' '4').
	self
		assert: (Array withAll: #(1 2 3 4 5))
		equals: #(1 2 3 4 5).
	testArray := Array withAll: testSet.
	self
		assert: testArray size
		equals: testSet size.
	testArray do:[ :each | self assert: (testSet includes: each)].
	testArray := Array withAll: testDictionary.
	self
		assert: testArray size
		equals: testDictionary size.
	testArray do:[ :each | self assert: (testDictionary includes: each)]. !

testSize

	self
		assert: #() size
		equals: 0.
	self
		assert: #(1 2 3) size
		equals: 3. !

testAtPut

	| testArray value tvalue isType|
	testArray := #(1 2 3 4 6).
	testArray at: 5 put: 5.
	self
		assert: testArray
		equals: #(1 2 3 4 5).
	testArray at: 5 put: '5'.
	value := testArray at: 5.
	self
		assert: value
		equals:  '5'.

	tvalue := DateTime new.
	testArray at: 5 put: tvalue.
	value := testArray at: 5.
	"this assertion is useless, as Javascript applies equality insanity"
	self
		assert: value
		equals:  tvalue.
	"make sure the object stays what it is/was"
	self assert: (self typeOf: tvalue) = (self typeOf: value).

	self 
		should: [testArray at: '' put: 3]
		raise: Error.
	self
		should: [testArray at: -1 put: 3]
		raise: Error. !

testAt

	self 
		assert: (#(5 4 3 2 1) at: 4)
		equals: 2.
	self
		should: [#(5 4 3 2 1) at: -1]
		raise: Error.
	self
		should: [#(5 4 3 2 1) at: 6]
		raise: Error. !

testAtIfAbsent

	| testValue |
	testValue := 0.
	testValue := #(1 2 3 4 10) at: 3 ifAbsent:[-3].
	self 
		assert: testValue 
		equals: 3.
	testValue := #(1 2 3 4 5) at: 10 ifAbsent:[-3].
	self
		assert: testValue
		equals: -3. !

testDo

	| result |
	result := 0.
	#(1 2 3 4) do: [:each | result := result + each].
	self
		assert: result
		equals: 10.
	self
		should: [#(1 2 3) do: 5]
		raise: Error. !

testAddAll

	| resultArray testSet testDictionary |
	testSet := #(4 5 6) asSet.
	testDictionary := Dictionary fromKeys: #('one' 'two' 'three') and: #(1 2 3).
	resultArray := #(1 2 3). 
	resultArray addAll: #(4 5 6).
	self
		assert: resultArray
		equals: #(1 2 3 4 5 6).
	resultArray := #(1 2 3).
	resultArray addAll: #('1' '2' '3').
	self
		assert: resultArray
		equals: #(1 2 3 '1' '2' '3').
	resultArray := #().
	resultArray addAll: testSet.
	self
		assert: resultArray size 
		equals: testSet size.
	resultArray do: [:each | self assert: (testSet includes: each)].
	resultArray := #().
	resultArray addAll: testDictionary.
	self
		assert: resultArray size
		equals: testDictionary size.
	resultArray do:[:each | self assert: (testDictionary includes: each)]. !

testShallowCopy

	| arrayOne copiedArray |
	arrayOne := #(1 2 3).
	copiedArray := arrayOne shallowCopy.
	self
		assert: copiedArray
		equals: arrayOne.
	self deny: arrayOne == copiedArray. !

testCopyWithAll

	| copiedArray testSet testDictionary|
	testSet := #(4 5 6) asSet.
	testDictionary := Dictionary fromKeys: #('one' 'two' 'three') and: #(1 2 3).
	copiedArray := #(1 2 3) copyWithAll: #(4 5 6 7 8).
	self
		assert: copiedArray
		equals: #(1 2 3 4 5 6 7 8).
	copiedArray := #() copyWithAll: testSet.
	self 
		assert: copiedArray size
		equals: testSet size.
	copiedArray do: [:each | self assert: (testSet includes: each)].
	self
		should: [#(1 2 3) copyWithAll: 4]
		raise: Error.
	copiedArray := #() copyWithAll: testDictionary.
	self
		assert: copiedArray size
		equals: testDictionary size.
	copiedArray do: [:each | self assert: (testDictionary includes: each)]. !

testConcat

	self
		assert: #(1 2 3) , #(1 2 3)
		equals: #(1 2 3 1 2 3).
	self 
		assert: #(1 2 3) , '123'
		equals: #(1 2 3 '1' '2' '3').
	self
		assert: #(1 2 3) , #()
		equals: #(1 2 3).
	self 
		should: [#(1 2 3), 4]
		raise: Error. !

testJoin

	self
		assert: (#(1 2 3) join: ',')
		equals: '1,2,3'.
	self
		should: [#(1 2 3) join: 4]
		raise: Error. !

testSort

	self
		assert: (#(4 5 3 1 2) sort: [ :a :b | b > a ])
		equals: #(1 2 3 4 5).
	self 
		assert: (#(4 5 3 1 2) sort: [ :a :b | a > b ])
		equals: #(5 4 3 2 1).
	self
		should: [(#(4 5 3 1 2) sort: 4)]
		raise: Error.
	self
		should: [(#(4 5 3 1 2) sort: [ :a | 1 > a ])]
		raise: Error. !

testRemoveIfAbsent

	| testArray removeValue |
	removeValue := 0.
	testArray := #(1 2 3 4 5).
	removeValue := testArray remove: 3 ifAbsent: [-1].
	self 
		assert: removeValue
		equals: 3.
	self
		assert: testArray
		equals: #(1 2 4 5).
	removeValue := testArray remove: 3 ifAbsent: [-1].
	self 
		assert: removeValue
		equals: -1.
	self 
		assert: testArray 
		equals: #(1 2 4 5). !

testAdd

	| testArray toAdd |
	testArray := #(1 2 3).
	toAdd := #(1 '1' #()).
	toAdd do: [:each | testArray add: each].
	self
		assert: testArray
		equals: #(1 2 3 1 '1' #()). !

testAddLast

	| testArray toAdd |
	testArray := #(1 2 3).
	toAdd := #(1 '1' #()).
	toAdd do: [:each | testArray addLast: each].
	self
		assert: testArray
		equals: #(1 2 3 1 '1' #()). !

testAddFirst

	| testArray toAdd |
	testArray := #(4 5 6).
	toAdd := #(3 2 1).
	toAdd do: [:each | testArray addFirst: each].
	self
		assert: testArray
		equals: #(1 2 3 4 5 6)!

testAddFirstEmpty

	| testArray |
	testArray := Array new.
	self assert: testArray size equals: 0.
	testArray addFirst: 1.
	self assert: testArray size equals: 1.
	self assert: (testArray at: 1) equals: 1!

testRemoveFirst

	| testArray removeVal |
	testArray := #(1 2 3 4 5 6).
	removeVal := testArray removeFirst.
	self
		assert: removeVal
		equals: 1.
	self 
		assert: testArray
		equals: #(2 3 4 5 6).
	self
		should: [#() removeFirst]
		raise: Error. !

testRemoveAll

	| testArray |
	testArray := #(1 2 3 4 5).
	testArray removeAll.
	self 
		assert: testArray
		equals: #().
	self
		assert: #() removeAll
		equals: #(). !

testRemoveIndex

	| testArray |
	testArray := #(1 2 3 4 5 6).
	testArray removeIndex: 5.
	self
		assert: testArray
		equals: #(1 2 3 4 6).
	self
		should: [ #(1 2 3) removeIndex: 4 ]
		raise: Error.
	self
		should: [ #(1 2 3) removeIndex: -1 ]
		raise: Error. !

testAtAllPut

	| testArray |
	testArray := #(1 2 3 4 5).
	testArray atAllPut: 7.
	self
		assert: testArray
		equals: #(7 7 7 7 7).
	testArray removeAll.
	testArray atAllPut: 1.
	self
		assert: testArray
		equals: #().
	self
		assert: (#(1 2 3 4) atAllPut: 5)
		equals: #(5 5 5 5). !

testWithIndexDo

	| testArray |
	testArray := #(5 4 3 2 1).
	testArray withIndexDo: [:x :y | self assert: 6 - x = y].
	self
		should: [testArray withIndexDo: [:x | x + 1]]
		raise: Error. !

testIndexOfIfAbsent

	| value |
	value := 0.
	value := #(5 4 3 2 1) indexOf: 4 ifAbsent: [-1].
	self 
		assert: value 
		equals: 2.
	value := #(5 4 3 2 1) indexOf: 6 ifAbsent: [-1].
	self
		assert: value
		equals: -1. !

testDetectIfNone

	| value |
	value := 0.
	value := #(1 2 3 4 5) detect: [:each | each > 4] ifNone: [-1].
	self 
		assert: value 
		equals: 5.
	value := #(1 2 3 4 5) detect: [:each | each > 5] ifNone: [-1].
	self
		assert: value
		equals: -1.
	self
		should: [#(1 2 3) detect: 3 ifNone: [-1]]
		raise: Error.
	self
		should: [#(1 2 3) detect: [:each | each > 2] ifNone: 4]
		raise: Error. !

testReversed

	self
		assert: #(1 2 3 4 5) reversed
		equals: #(5 4 3 2 1). !

testIsEmpty

	self
		assert: #() isEmpty;
		deny: #(1) isEmpty. !

testReverseDo

	| result |
	result := 0.
	#(1 2 3 4) reverseDo: [:each |  result := result + each].
	self 
		assert: result 
		equals: 10.
	result := ''.
	#('o' 'l' 'l' 'e' 'h') reverseDo: [:each | result := result,each].
	self
		assert: result
		equals: 'hello'.
	self
		should: [#('o' 'l' 'l' 'e' 'h') reverseDo: 5]
		raise: Error. !

testIncludes

	self
		assert: (#(1 2 3) includes: 3);
		assert: (#('1' 'hi') includes: 'hi');
		deny: (#('1' 'hi') includes: 'Hi');
		deny: (#(1 2 3) includes: 4);
		deny: (#() includes: 1). !

testOccurences

	self
		assert: (#(1 2 3 4 5 6 1 1 1) occurrencesOf: 1)
		equals: 4.
	self 
		assert: (#(1 2 3) occurrencesOf: 4)
		equals: 0. !

testNew

	| array |
	array := Array new: 0.
	self
		assert: array
		equals: #().
	array := Array new: 5.
	self
		assert: array
		equals: #( nil nil nil nil nil ) !

testAsArray

	self assert: #(1 2 3) asArray isArray.
	self
		assert: #(1 2 3) asArray
		equals: #(1 2 3) !

testAsSet

	| testSet expectedSet |
	testSet := #(1 2 3) asSet.
	expectedSet := Set with: 1 with: 2 with: 3.
	self 
		assert: testSet class
		equals: Set.
	self
		assert: testSet size
		equals: 3.
	self 
		assert: testSet
		equals: expectedSet !

testCollect

	self
		assert: (#(1 2 3 4) collect: [:each | each + 1])
		equals: #(2 3 4 5).
	self
		should: [#(1 2 3 4) collect: 3]
		raise: Error. !

testDetect

	self
		assert: (#(1 2 3) detect: [:each | each > 2])
		equals: 3.
	self
		should: [#(1 2 3) detect: [:each | each > 3]]
		raise: Error.
	self
		should: [#(1 2 3) detect: 3]
		raise: Error. !

testNotEmpty

	self 
		assert: #(1 2 3) notEmpty;
		deny: #() notEmpty. !

testSelect

	self
		assert: (#(1 2 3 4 5) select:[:each | each odd])
		equals: #(1 3 5).
	self
		assert: (#(1 2 3 4 5) select:[:each | each > 5])
		equals: #().
	self
		should: [#(1 2 3 4 5) select: 4]
		raise: Error. !

testReject

	self
		assert: (#(1 2 3 4 5) reject:[:each | each odd])
		equals: #(2 4).
	self
		assert: (#(1 2 3 4 5) reject:[:each | each > 0])
		equals: #().
	self
		should: [#(1 2 3 4 5) reject: 3]
		raise: Error. !

testInjectInto

	| result |
	result := #(1 2 3 4) inject: 0 into: [:sum :each | sum + each].
	self
		assert: result
		equals: 10.
	self
		should: [#(1 2 3 4) inject: 0 into: 2]
		raise: Error. !

testDoSeparatedBy

	| result |
	result := ''.
	#('1' '2' '3' '4' '5') do: [:each | result := result,each] separatedBy: [result := result,' '].
	self 
		assert: result 
		equals: '1 2 3 4 5'.
	self
		should: [#(1 2 3) do: 3 separatedBy: [4]]
		raise: Error.
	self
		shouldnt: [#(1 2 3) do: [:each | each + 1] separatedBy: ' ']
		raise: Error. !

testAsOrderedCollection

	| result  expectedCollection |
	result := #(2 1 3) asOrderedCollection.
	expectedCollection := OrderedCollection with: 2 with: 1 with: 3.
	self
		assert: result class 
		equals: OrderedCollection.
	self
		assert: result
		equals: expectedCollection. !

testAsSortedCollection

	| testArray result |
	testArray := #(2 1 3).
	result := testArray asSortedCollection.
	self
		assert: result class
		equals: SortedCollection. ! !