TestCase subclass: #IntervalTestCase !

! IntervalTestCase methodsFor: #running !
testCreation

	| interval |
	interval := Interval new.
	self 
		assert: interval class
		equals: Interval !

testInit

	| int |
	int := Interval from: 1 to: 5 by: 1.
	self
		assert: int start
		equals: 1.
	self 
		assert: int stop
		equals: 5.
	self
		assert: int step
		equals: 1.
	int := Interval from: 10 to: 20.
	self
		assert: int start
		equals: 10.
	self
		assert: int stop
		equals: 20.
	self
		assert: int step
		equals: 1 !

testSize

	self
		assert: (Interval from: 0 to: 10) size
		equals: 11.
	self
		assert: (Interval from: 1 to: 10) size
		equals: 10.
	self
		assert: (Interval from: 10 to: 2 by: -1) size
		equals: 9.
	self
		assert: (Interval from: -10 to: -1) size
		equals: 10.
	self 
		assert: (Interval from: -5 to: -10 by: -1) size
		equals: 6.
	self
		assert: (Interval from: 10 to: -10 by: -1) size
		equals: 21.
	self
		assert: (Interval from: -10 to: 10) size
		equals: 21.
	self
		assert: (Interval from: 1 to: 15 by: 3) size
		equals: 5.
	self
		assert: (Interval from: -8 to: 6 by: 4) size
		equals: 4 !

testDo

	| int results expected index |
	index := 1.
	results := Array new: 5.
	expected := #(1 2 3 4 5).
	int := Interval from: 1 to: 5 by: 1.
	int do: 
		[:each | results at: index put: each.
		 index := index + 1].
	self 
		assert: results
		equals: expected.
	results := Array new: 5.
	index := 1.
	expected := #(5 4 3 2 1).
	int := Interval from: 5 to: 1 by: -1.
	int do: 
		[:each | results at: index put: each. 
		index := index + 1].
	self
		assert: results
		equals: expected.
	results := Array new: 3.
	index := 1.
	expected := #(1 4 7).
	int := Interval from: 1 to: 8 by: 3.
	int do: 
		[:each | results at: index put: each. 
		index := index + 1].
	self
		assert: results
		equals: expected !

testAsArray

	| interval result expected |
	interval := Interval from: 1 to: 10 by: 1.
	expected := #(1 2 3 4 5 6 7 8 9 10).
	result := interval asArray.
	self 
		assert: result class
		equals: Array.
	self
		assert: result
		equals: expected !

testEquality

	| intervalOne intervalTwo |
	intervalOne := Interval from: 1 to: 5.
	intervalTwo := Interval from: 1 to: 5.
	self 
		assert: intervalOne 
		equals: intervalTwo.
	intervalTwo := Interval from: 1 to: 5 by: 2.
	self
		deny: intervalOne
		equals: intervalTwo !

testConcat

	self 
		assert: ((Interval from: 1 to: 3 by: 1) , (Interval from: 1 to: 2 by: 1)) asArray
		equals: #(1 2 3 1 2).
	self
		assert: ((Interval from: 1 to: 3), #(4 5)) asArray
		equals: #(1 2 3 4 5) ! 

testCollect

	| interval result expected |
	expected := #(2 3 4 5 6).
	interval := Interval from: 1 to: 5 by: 1.
	result := interval collect: [:x | x + 1].
	self
		assert: result 
		equals: expected.
	self
		should: [interval collect: 1]
		raise: Error !

testCopyFromTo

	| interval copyInterval |
	interval := Interval from: 1 to: 10 by: 1.
	copyInterval := interval copyFrom: 5 to: 10.
	self 
		assert: copyInterval class
		equals: Interval.
	self 
		assert: copyInterval start 
		equals: 5.
	self 
		assert: copyInterval stop 
		equals: 10.
	self
		assert: copyInterval step
		equals: 1.
	self
		should: [interval := copyInterval copyFrom: 1 to: 10]
		raise: Error.
	self
		should: [interval := copyInterval copyFrom: 5 to: 12]
		raise: Error.
	self
		should: [interval := copyInterval copyFrom: 10 to: 5]
		raise: Error !

testCopyReplaceAllWith

	| interval result expected |
	interval := Interval from: 1 to: 5 by: 1.
	expected := #(1 6 7 8 9 5).
	result := interval copyReplaceAll: #(2 3 4) with: #(6 7 8 9).
	self 
		assert: result
		equals: expected.
	self 
		assert: ((Interval from: 10 to: 1 by: -1) copyReplaceAll: #(2 3 4) with: #(5 6 7))
		equals: #(10 9 8 7 6 5 4 3 2 1) !

testCopyReplaceFromToWith

	| interval result expected |
	interval := Interval from: 1 to: 5.
	result := interval copyReplaceFrom: 4 to: 3 with: #(6 7 8 9).
	expected := #(1 2 3 6 7 8 9 4 5).
	self
		assert: result
		equals: expected.
	interval := Interval from: 1 to: 5.
	result := interval copyReplaceFrom: 6 to: 5 with: #(6 7 8 9 10).
	expected := (Interval from: 1 to: 10) asArray.
	self
		assert: result 
		equals: expected.	
	interval := Interval from: 20 to: 30.
	result := interval copyReplaceFrom: 1 to: 5 with: #(1 2 3 4 5).
	expected := #(1 2 3 4 5 25 26 27 28 29 30).
	self
		assert: result 
		equals: expected.
	self
		should: [interval copyReplaceFrom: 11 to: 22 with: #(1 2 3 4 5)]
		raise: Error !

testCopyReplaceFromToWithObject

	| interval result expected |
	interval := Interval from: 2 to: 5 by: 1.
	result := interval copyReplaceFrom: 1 to: 0 withObject: 1.
	expected := #(1 2 3 4 5).
	self
		assert: result 
		equals: expected.
	interval := Interval from: 1 to: 5 by: 2.
	result := interval copyReplaceFrom: 3 to: 2 withObject: 4.
	expected := #(1 3 4 5).
	self
		assert: result 
		equals: expected.
	interval := Interval from: 1 to: 5 by: 1.
	result := interval copyReplaceFrom: 6 to: 5 withObject: 6.
	expected := #(1 2 3 4 5 6).
	self 
		assert: result
		equals: expected. 
	self 
		assert: (interval copyReplaceFrom: 2 to: 4 withObject: 6) class
		equals: Array.
	self
		assert: (interval copyReplaceFrom: 2 to: 4 withObject: 6)
		equals: #(1 6 6 6 5).
	self
		should: [interval copyReplaceFrom: 3 to: 7 withObject: 9]
		raise: Error !

testCopyReplacingWithObject

	| interval result expected |
	interval := Interval from: 1 to: 5 by: 1.
	expected := #(1 2 9 4 5).
	result := interval copyReplacing: 3 withObject: 9.
	self
		assert: result
		equals: expected !

testCopyWith

	| interval result expected |
	interval := Interval from: 1 to: 3 by: 1.
	expected := #(1 2 3 4).
	result := interval copyWith: 4.
	self 
		assert: result
		equals: expected !

testCopyWithout

	| interval result expected |
	interval := Interval from: 1 to: 5 by: 1.
	expected := #(1 2 4 5).
	result := interval copyWithout: 3.
	self 
		assert: result
		equals: expected !

testReject

	| interval result expected |
	expected := #(2 4 6 8 10).
	interval := Interval from: 1 to: 10 by: 1.
	result := interval reject: [:x | x odd].
	self 
		assert: result
		equals: expected.
	self
		should: [result := interval reject: 4]
		raise: Error !
	
testReverse

	| interval result expected |
	interval := Interval from: 1 to: 5 by: 1.
	expected := Interval from: 5 to: 1 by: -1.
	result := interval reverse.
	self 
		assert: result
		equals: expected !

testSelect

	| interval result expected |
	interval := Interval from: 1 to: 10 by: 1.
	expected := #(1 3 5 7 9).
	result := interval select: [:each | each odd].
	self
		assert: result
		equals: expected.
	self
		should: [result := interval select: true]
		raise: Error ! !