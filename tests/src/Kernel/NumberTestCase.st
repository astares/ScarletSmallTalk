TestCase subclass: #NumberTestCase !

! NumberTestCase methodsFor: #running !

testEquality

	self
		deny: 0
		equals: #().
	self
		deny: 0
		equals: #(0).
	self
		deny: 12
		equals: nil.
	self
		deny: 12
		equals: '12'.
	self
		deny: 12
		equals: #(12).
	self
		assert: 12
		equals: 12.
	self
		assert: 12 yourself
		equals: 12.
	self
		assert: 12
		equals: 12 yourself !

testGreaterThan

	| badValues |
	badValues := #(#() #(2) true false '' '2').
	badValues do: [ :each | self should: [3 > each] raise: Error ].
	self
		deny: 0 > 0;
		deny: 3 > 4;
		assert: 2 > 1;
		assert: -1 > -2.
	self
		should: [3 > Object new]
		raise: Error. !

testLessThan

	| badValues |
	badValues := #(#() #(2) true false '' '2').
	badValues do: [ :each | self should: [3 < each] raise: Error ].
	self
		deny: 3 < 3;
		deny: 3 < 2;
		assert: 3 < 4;
		assert: -2 < -1.
	self
		should: [3 < Object new]
		raise: Error. !

testGreaterThanEqualTo

	| badValues |
	badValues := #(#() #(2) true false '' '2').
	badValues do: [ :each | self should: [3 >= each] raise: Error ].
	self
		assert: 3 >= 2;
		assert: 3 >= 3;
		assert: -1 >= -2;
		deny: 3 >= 4.
	self
		should: [3 >= Object new]
		raise: Error. !

testLessThanEqualTo

	| badValues |
	badValues := #(#() #(2) true false '' '2').
	badValues do: [ :each | self should: [3 <= each] raise: Error ].
	self
		assert: 3 <= 4;
		assert: 3 <= 3;
		assert: -2 <= -1;
		deny: 3 <= 2.
	self
		should: [3 <= Object new]
		raise: Error. !

testAddition

	| badValues |
	badValues := #(#() #(2) true false '' '2').
	badValues do: [ :each | self should:[2 + each] raise: Error ].
	self
		assert: 1 + 2
		equals: 3.
	self
		assert: -1 + -2
		equals: -3.
	self
		assert: -1 + 2
		equals: 1.
	self
		assert: 1 + -1
		equals: 0.
	self
		assert: 0 + 0
		equals: 0.
	self
		should: [2 + Object new]
		raise: Error. !

testSubtraction

	| badValues |
	badValues := #(#() #(2) true false '' '2').
	badValues do: [ :each | self should: [2 - each] raise: Error].
	self
		assert: 2 - 1
		equals: 1.
	self
		assert: 2 - -1
		equals: 3.
	self
		assert: -2 - 3
		equals: -5.
	self
		assert: -2 - -2
		equals: 0.
	self
		should: [2 + Object new]
		raise: Error. !

testMultiply

	| badValues |
	badValues := #(#() #(2) true false '' '2').
	badValues do: [ :each | self should:[2 * each] raise: Error].
	self
		assert: 5 * 5
		equals: 25.
	self
		assert: 5 * -5
		equals: -25.
	self
		assert: -2 * 2
		equals: -4.
	self
		assert: -1 * -1
		equals: 1.
	self
		assert: 1 * 0
		equals: 0.
	self
		should: [2 * Object new]
		raise: Error. !

testDivide

	| badValues |
	badValues := #(#() #(2) true false '' '2').
	badValues do: [ :each | self should: [ 2 / each ] raise: Error ].
	self
		assert: 25 / 5
		equals: 5.
	self
		assert: 25 / -5
		equals: -5.
	self
		assert: -25 / 5
		equals: -5.
	self
		assert: -25 / -5
		equals: 5.
	self
		assert: 0 / 5
		equals: 0.
	self
		should: [2 / 0]
		raise: Error.
	self
		should: [2 / Object new]
		raise: Error. !

testBitAnd

	| badValues |
	badValues := #(#() '' true false #(1) '1' 1.01).
	badValues do:[ :each | self should:[(1 bitAnd: each)] raise: Error ].
	self
		should: [(1.01 bitAnd: 1)]
		raise: Error.
	self
		assert: (3 bitAnd: 9)
		equals: 1.
	self
		assert: (15 bitAnd: 0)
		equals: 0.
	self
		assert: (15 bitAnd: 5)
		equals: 5. !

testBitOr

	| badValues |
	badValues := #(#() '' true false #(1) '1' 1.01).
	badValues do:[ :each | self should:[(1 bitOr: each)] raise: Error ].
	self
		should: [(1.01 bitOr: 1)]
		raise: Error.
	self
		assert: (4 bitOr: 0)
		equals: 4.
	self
		assert: (9 bitOr: 6)
		equals: 15. !

testBitXor

	| badValues |
	badValues := #(#() '' true false #(1) '1' 1.01).
	badValues do:[ :each | self should:[(1 bitXor: each)] raise: Error ].
	self
		should: [(1.01 bitXor: 1)]
		raise: Error.
	self
		assert: (10 bitXor: 5)
		equals: 15.
	self
		assert: (15 bitXor: 15)
		equals: 0. !

testBitShiftLeft

	| badValues |
	badValues := #(#() '' true false #(1) '1' 1.01).
	badValues do:[ :each | self should: [1 << each] raise: Error ].
	self
		should: [1.01 << 1]
		raise: Error.
	self
		assert: 15 << 1
		equals: 30.
	self
		assert: 1 << 5
		equals: 32. !

testBitShiftRight

	| badValues |
	badValues := #(#() '' true false #(1) '1' 1.01).
	badValues do:[ :each | self should: [1 >> each] raise: Error ].
	self
		should: [1.01 >> 1]
		raise: Error.
	self
		assert: 15 >> 1
		equals: 7.
	self
		assert: 1 >> 5
		equals: 0. !

testFloor

	self
		assert: 3.2 floor
		equals: 3.
	self
		assert: -1.2 floor
		equals: -2.
	self
		assert: 0 floor
		equals: 0. !

testCeiling

	self
		assert: 3.2 ceiling
		equals: 4.
	self
		assert: -1.2 ceiling
		equals: -1.
	self
		assert: 0 ceiling
		equals: 0. !

testRaisedTo

	self
		assert: (2 raisedTo: 4)
		equals: 16.
	self
		assert: (2 raisedTo: 0)
		equals: 1.
	self
		assert: (2 raisedTo: -3)
		equals: 0.125.
	self
		assert: (4 raisedTo: 0.5)
		equals: 2.
	self
		assert: (-2 raisedTo: 2)
		equals: 4.
	self
		assert: (0 raisedTo: 1)
		equals: 0.
	self
		assert: (5 raisedTo: 0)
		equals: 1.
	self
		assert: (-5 raisedTo: 3)
		equals: -125. !

testLn

	self assert: (100 ln closeTo: 10 ln*2).
	self
		assert: 1 ln
		equals: 0.
	self
		should: [ -1 ln ]
		raise: Error. !

testSin

	self
		assert: ((Number pi / 2) sin)
		equals: 1.
	self
		assert: 0 sin
		equals: 0. !

testCos

	self assert: (((Number pi / 2) cos) closeTo: 0).
	self
		assert: 0 cos
		equals: 1. !

testTan

	self
		assert: (Number pi tan closeTo: 0).
	self
		assert: 0 tan
		equals: 0. !

testArcSin

	self
		assert: 0 arcSin
		equals: 0. !

testArcCos

	self
		assert: 1 arcCos
		equals: 0. !

testArcTan

	self
		assert: 0 arcTan
		equals: 0. !

testATan2

	self
		assert: (8 atan2: 4)
		equals: 1.1071487177940904.
	self
		assert: (-8 atan2: -4)
		equals: -2.0344439357957027.
	self
		assert: (0 atan2: 0)
		equals: 0. !

testSqrt

	self
		assert: 1 sqrt
		equals: 1.
	self
		assert: 144 sqrt
		equals: 12.
	self
		assert: 0 sqrt
		equals: 0.
	self
		should: [ -25 sqrt ]
		raise: Error. !

testMax

	self
		assert: (1 max: 2)
		equals: 2.
	self
		assert: (0 max: 1)
		equals: 1.
	self
		assert: (-2 max: 1)
		equals: 1.
	self
		assert: (-1 max: -5)
		equals: -1.
	self
		assert: (5 max: -10)
		equals: 5.
	self
		assert: (0 max: 0)
		equals: 0. !

testMin

	self
		assert: (1 min: 2)
		equals: 1.
	self
		assert: (-2 min: 1)
		equals: -2.
	self
		assert: (1 min: -5)
		equals: -5.
	self
		assert: (-1 min: -10)
		equals: -10.
	self
		assert: (0 min: 0)
		equals: 0.
	self
		assert: (0 min: 1)
		equals: 0. !

testToDo

	| result |
	result := 0.
	1 to: 4 do: [ :each | result := result + each ].
	self
		assert: result
		equals: 10.
	4 to: 1 do: [ :each | result := result - each ].
	self
		assert: result
		equals: 10. !

testIsNumber

	| nonNumbers validNumbers |
	nonNumbers := #(#() '' true false #(1) '1').
	nonNumbers do: [ :each | self deny: each isNumber ].
	validNumbers := #(100 1.5 -2 0).
	validNumbers do: [ :each | self assert: each isNumber]. !

testToByDo

	| result |
	result := 0.
	0 to: 10 by: 2 do: [ :each | result := result + each ].
	self
		assert: result
		equals: 30.
	4 to: 1 by: 2 do: [ :each | result := result - each ].
	self
		assert: result
		equals: 30. !

testPi

	self
		assert: ((Number pi) closeTo: 3.141592653589793). !

testIsInteger

	| nonIntegers |
	nonIntegers := #(#() '' true false 1.5 #(1) '1').
	nonIntegers do:[ :each | self deny: each isInteger ].
	self
		assert: 1 isInteger;
		assert: 0 isInteger;
		assert: -1 isInteger. !

testRounded

	self
		assert: 1.4 rounded
		equals: 1.
	self
		assert: 0 rounded
		equals: 0.
	self
		assert: 5 rounded
		equals: 5.
	self
		assert: 1.5 rounded
		equals: 2.
	self
		assert: -1.2 rounded
		equals: -1. !

testTo

	| expected result |
	expected := Interval from: 1 to: 5.
	result := 1 to: 5.
	self
		assert: result
		equals: expected !
	
testToBy
	
	| expected result |
	expected := Interval from: 4 to: 25 by: 4.
	result := 4 to: 25 by: 4.
	self
		assert: result
		equals: expected ! !