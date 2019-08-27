TestCase subclass: #PoolDictionaryTestCase !

! PoolDictionaryTestCase methodsFor: #running !

testRemoveKeyIfAbsent

	| poolD testValue |
	testValue := 0.
	poolD := PoolDictionary new.
	self
		assert: poolD size 
		equals: 0.
	poolD add: 'test' -> 5.
	self
		assert: poolD size
		equals: 1.
	poolD removeKey: 'test' ifAbsent: [testValue := -1].
	self 
		assert: poolD size
		equals: 0.
	self 
		deny: testValue
		equals: -1.
	poolD add: 'test2' -> 5.
	poolD removeKey: 'test' ifAbsent: [testValue := -1].
	self 
		assert: testValue 
		equals: -1.
	poolD removeKey: 5 ifAbsent: [testValue := -2].
	self
		assert: testValue
		equals: -2.
	self 
		assert: (poolD removeKey: true ifAbsent: [-5])
		equals: -5.
	self
		should: [poolD removeKey: 'test' ifAbsent: -1]
		raise: Error. !

testAtKeyIfAbsent

	| poolD failValue |
	poolD := PoolDictionary new.
	poolD add: 'test' -> 10.
	self
		assert: (poolD at: 'test' ifAbsent: [-1])
		equals: 10.
	self
		assert: (poolD at: 'test2' ifAbsent: [-1])
		equals: -1.
	self
		assert: (poolD at: true ifAbsent: [-1])
		equals: -1.
	self
		should: [poolD at: 'test2' ifAbsent: -1]
		raise: Error. !

testKeys

	| poolD expected results |
	poolD := PoolDictionary new.
	expected := #('test1' 'test2') asSet.
	self
		assert: poolD keys
		equals: #().
	poolD add: 'test1' -> 1.
	poolD add: 'test2' -> 2.
	self 
		assert: poolD keys asSet 
		equals: expected.
	poolD removeKey: 'test1' ifAbsent: [].
	self 
		assert: poolD keys asSet 
		equals: #('test2') asSet. !

testAtPut

	| pd |
	pd := PoolDictionary new.
	self 
		assert: pd size 
		equals: 0.
	pd at: 'test' put: 5.
	self
		assert: pd size
		equals: 1.
	self
		assert: (pd at: 'test' ifAbsent: [-1])
		equals: 5.
	self
		should: [pd at: true put: 'this should raise an error.']
		raise: Error. !

testKeysAndValuesDo

	| pd stringResults numberResults expectedStrings expectedNums |
	expectedNums := #(1 2 3 4) asSet.
	expectedStrings := #('test1' 'test2' 'test3' 'test4') asSet.
	pd := PoolDictionary new.
	stringResults := Set new.
	numberResults := Set new.
	pd at: 'test1' put: 1.
	pd at: 'test2' put: 2.
	pd at: 'test3' put: 3.
	pd at: 'test4' put: 4.
	pd keysAndValuesDo: [:key :value | stringResults add: key. numberResults add: value].
	self 
		assert: numberResults
		equals: expectedNums.
	self
		assert: stringResults
		equals: expectedStrings. !

testValues

	| pd expectedValues result |
	expectedValues := #(1 2 'test') asSet.
	pd := PoolDictionary new.
	pd at: 'test' put: 1.
	pd at: 'test2' put: 2.
	pd at: 'test3' put: 'test'.
	result := pd values asSet.
	self 
		assert: result
		equals: expectedValues. ! !