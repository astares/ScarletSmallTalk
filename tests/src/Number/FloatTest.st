TestCase subclass: #FloatTest
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	category: 'Tests'!

!FloatTest methodsFor: 'testing'!
testIsFloat
	self deny: 1 isFloat.
	self assert: 1.1 isFloat.
	self deny: 1.0 isFloat.
	self deny: 0.0 isFloat.
	self deny: -1.0 isFloat.
	self deny: true isFloat.
	self deny: nil isFloat.
	self deny: 1 isFloat.
	self deny: 0 isFloat.
	self deny: -1 isFloat.
! !

!FloatTest methodsFor: 'tests - arithmetic' stamp: 'GabrielOmarCotelli 6/6/2009 17:14'!
testDivide

	self assert: 1.5 / 2.0 = 0.75.

	self assert: 2.0 / 1 = 2.0.

	self should: [ 2.0 / 0 ] raise: Error.
	self should: [ 2.0 / 0.0 ] raise: Error.
	self should: [ 1.2 / Float negativeZero ] raise: Error.
	self should: [ 1.2 / (1.3 - 1.3) ] raise: Error
	! !

!FloatTest methodsFor: 'tests - zero behavior' stamp: 'sd 6/5/2005 08:33'!
testZero1
	"FloatTest new testZero1"

	self assert: Float negativeZero = 0 asFloat.

	"The negative zero has a bit representation that is different from the bit representation of the positive zero. Nevertheless, both values are defined to be equal."
! !

!FloatTest methodsFor: 'tests - zero behavior' stamp: 'md 4/16/2003 15:02'!
testIsZero
	self assert: 0.0 isZero.
	self deny:  0.1 isZero.! !

!FloatTest methodsFor: 'tests - zero behavior' stamp: 'nice 8/21/2010 22:30'!
testNegativeZeroSign
	"VSE behaviour differs from this
	self assert: Float negativeZero sign = -1"
	self assert: Float negativeZero sign = 0! !

!FloatTest methodsFor: 'tests - zero behavior' stamp: 'nice 8/21/2010 22:29'!
testNegativeZeroAbs
	self assert: Float negativeZero abs sign positive description: 'the absolute value of a negative zero is zero'! !

!FloatTest methodsFor: 'tests - NaN behavior' stamp: 'GabrielOmarCotelli 5/23/2009 20:38'!
testReciprocal

	self
		assert: 1.0 reciprocal = 1.0;
		assert: 2.0 reciprocal = 0.5;
		assert: -1.0 reciprocal = -1.0;
		assert: -2.0 reciprocal = -0.5.

	self should: [ 0.0 reciprocal ] raise: Error! !

!FloatTest methodsFor: 'tests - compare' stamp: 'nice 7/10/2009 22:27'!
testComparisonWhenPrimitiveFails
	"This is related to http://bugs.squeak.org/view.php?id=7361"

	self deny: 0.5 < (1/4).
	self deny: 0.5 < (1/2).
	self assert: 0.5 < (3/4).

	self deny: 0.5 <= (1/4).
	self assert: 0.5 <= (1/2).
	self assert: 0.5 <= (3/4).

	self assert: 0.5 > (1/4).
	self deny: 0.5 > (1/2).
	self deny: 0.5 > (3/4).

	self assert: 0.5 >= (1/4).
	self assert: 0.5 >= (1/2).
	self deny: 0.5 >= (3/4).

	self deny: 0.5 = (1/4).
	self assert: 0.5 = (1/2).
	self deny: 0.5 = (3/4).

	self assert: 0.5 ~= (1/4).
	self deny: 0.5 ~= (1/2).
	self assert: 0.5 ~= (3/4).! !

!FloatTest methodsFor: 'tests - compare' stamp: 'StephaneDucasse 2/13/2010 11:18'!
testSetOfFloat
      "Classical disagreement between hash and = did lead to a bug.
       This is a non regression test from http://bugs.squeak.org/view.php?id=3360"
	"self debug: #testSetOfFloat"

       | size3 size4 |
       size3 := (Set new: 3) add: 3; add: 3.0; size.
       size4 := (Set new: 4) add: 3; add: 3.0; size.
       self assert: size3 = size4 description: 'The size of a Set should not depend on its capacity.'! !

!FloatTest methodsFor: 'tests - rounding' stamp: 'GuillermoPolito 6/22/2012 14:44'!
testRounding
        "
        self debug: #testRounding
        "

        self assert: (10.1234 round: 2) = 10.12.
        self assert: (10.1234 round: 0) = 10! !


!FloatTest methodsFor: 'tests - conversion' stamp: 'nice 6/3/2011 21:28'!
testCeiling
	self assert: 1.0 ceiling = 1.
	self assert: 1.1 ceiling = 2.
	self assert: -2.0 ceiling = -2.
	self assert: -2.1 ceiling = -2.! !

!FloatTest methodsFor: 'tests - conversion' stamp: 'nice 4/26/2006 05:21'!
testFloatTruncated
	"(10 raisedTo: 16) asFloat has an exact representation (no round off error).
	It should convert back to integer without loosing bits.
	This is a no regression test on http://bugs.impara.de/view.php?id=3504"

	| x y int r |
	int := 10 raisedTo: 16.
	x := int asFloat.
"	y := (5 raisedTo: 16) asFloat timesTwoPower: 16.
	self assert: x = y.
"
	self assert: x asInteger = int! !

!FloatTest methodsFor: 'tests - conversion' stamp: 'dtl 9/18/2004 12:40'!
testStringAsNumber
	"This covers parsing in Number>>readFrom:"

	| aFloat |
	aFloat := '-12.3456' asNumber.
	self assert: -12.3456 = aFloat.
	aFloat := '-12.3456e2' asNumber.
	self assert: -1234.56 = aFloat.
	"
	aFloat := '-12.3456d2' asNumber.
	self assert: -1234.56 = aFloat.
	aFloat := '-12.3456q2' asNumber.
	self assert: -1234.56 = aFloat.
	aFloat := '-12.3456q2' asNumber.
	self assert: -1234.56 = aFloat.
	aFloat := '12.3456q2' asNumber.
	self assert: 1234.56 = aFloat.
	"
! !

!FloatTest methodsFor: 'tests - conversion' stamp: 'nice 6/3/2011 21:29'!
testFloor
	self assert: 1.0 floor = 1.
	self assert: 1.1 floor = 1.
	self assert: -2.0 floor = -2.
	self assert: -2.1 floor = -3.! !

!FloatTest methodsFor: 'tests - conversion' stamp: 'nice 6/3/2011 21:34'!
testTruncated
	self assert: 1.0 truncated = 1.
	self assert: 1.1 truncated = 1.
	self assert: -2.0 truncated = -2.
	self assert: -2.1 truncated = -2.! !

!FloatTest methodsFor: 'tests - conversion' stamp: 'nice 6/3/2011 21:37'!
testRounded
	self assert: 0.9 rounded = 1.
	self assert: 1.0 rounded = 1.
	self assert: 1.1 rounded = 1.
	self assert: -1.9 rounded = -2.
	self assert: -2.0 rounded = -2.
	self assert: -2.1 rounded = -2.

	"In case of tie, round to upper magnitude"
	self assert: 1.5 rounded = 2.
	self assert: -1.5 rounded = -2.! !

!FloatTest methodsFor: 'tests' stamp: 'nice 10/4/2009 23:13'!
testCopy
	"Elementary tests"
	self assert: 2.0 copy = 2.0.
	self assert: -0.5 copy = -0.5! !


!FloatTest methodsFor: 'tests - mathematical functions' stamp: 'CamilloBruni 8/31/2013 20:23'!
testDegreeCos
	45.0 degreeCos.	"Following tests use approximate equality, because cosine are generally evaluated using inexact Floating point arithmetic"
	self assert: (45.0 degreeCos squared - 0.5) abs <= Float epsilon.
	self assert: (60.0 degreeCos - 0.5) abs <= Float epsilon.
	self assert: (120.0 degreeCos + 0.5) abs <= Float epsilon.
	-360.0 to: 360.0 do: [ :i | self assert: (i degreeCos closeTo: i degreesToRadians cos) ].
	! !

!FloatTest methodsFor: 'tests - mathematical functions' stamp: 'nice 10/30/2009 22:23'!
testArcTan

	self assert: ((100 arcTan: 100) closeTo: Float pi / 4).
	self assert: ((-100 arcTan: 100) closeTo: Float pi / -4).
	self assert: ((100 arcTan: -100) closeTo: Float pi * 3 / 4).
	self assert: ((-100 arcTan: -100) closeTo: Float pi * -3 / 4).
	self assert: ((0 arcTan: 100) closeTo: 0).
	self assert: ((0 arcTan: -100) closeTo: Float pi).
	self assert: ((100 arcTan: 0) closeTo: Float pi / 2).
	self assert: ((-100 arcTan: 0) closeTo: Float pi / -2).

	self assert: ((Float negativeZero arcTan: 100) closeTo: 0).
	self assert: ((Float negativeZero arcTan: -100) closeTo: Float pi * -1).

	self assert: (0 arcTan: 0) = 0.
	self assert: (Float negativeZero arcTan: 0) = 0.
	self assert: ((0 arcTan: Float negativeZero) closeTo: Float pi).
	self assert: ((Float negativeZero arcTan: Float negativeZero) closeTo: Float pi negated). ! !

!FloatTest methodsFor: 'tests - mathematical functions' stamp: 'nice 10/31/2010 21:49'!
testDegreeCosForExceptionalValues
	self assert: Float infinity degreeCos isNaN.
	self assert: Float infinity negated degreeCos isNaN.! !

!FloatTest methodsFor: 'tests - mathematical functions' stamp: 'nice 10/31/2010 21:49'!
testDegreeSinForExceptionalValues
	self assert: Float infinity degreeSin isNaN.
	self assert: Float infinity negated degreeSin isNaN.! !

!FloatTest methodsFor: 'tests - mathematical functions' stamp: 'CamilloBruni 8/31/2013 20:23'!
testDegreeSin
	45.0 degreeSin.	"Following tests use approximate equality, because sine are generally evaluated using inexact Floating point arithmetic"
	self assert: (45.0 degreeSin squared - 0.5) abs <= Float epsilon.
	self assert: (30.0 degreeSin - 0.5) abs <= Float epsilon.
	self assert: (-30.0 degreeSin + 0.5) abs <= Float epsilon.
	-360.0 to: 360.0 do: [ :i | self assert: (i degreeSin closeTo: i degreesToRadians sin) ]! !

!FloatTest methodsFor: 'tests - mathematical functions' stamp: 'Janniklaval 10/23/2010 13:39'!
testSign

      "Set up"
      | negatives positives strictNegatives strictPositives zero |
      strictPositives := Array with: 2 with: 2.5 with: Float infinity.
      strictNegatives := Array with: -3 with: -3.25 with: Float negativeInfinity.
      zero := 0.0.
      positives := strictPositives copyWith: zero.
      negatives := strictNegatives.

      "The sign of non zeros"
      strictPositives do: [:aPositive | self assert: aPositive sign = 1].
      strictNegatives do: [:aNegative | self assert: aNegative sign = -1].

      "The sign of zeros"
      self assert: zero sign = 0.
     ! !


!FloatTest methodsFor: 'tests - infinity behavior' stamp: 'sd 6/5/2005 08:30'!
testInfinity1
	| i1  i2 |
	i1 := 10000 exp.
	i2 := 1000000000 exp.
	self assert: i1 isInfinite.
	self assert: i2 isInfinite.
	self assert: i1 = i2.
	"All infinities are equal. (This is a very substantial difference to NaN's, which are never equal."
! !

!FloatTest methodsFor: 'tests - infinity behavior' stamp: 'sd 6/5/2005 08:30'!
testInfinity2
   "FloatTest new testInfinity2"

	| i1  i2 |
	i1 := 10000 exp.
	i2 := 1000000000 exp.
	i2 := 0 - i2. " this is entirely ok. You can compute with infinite values."

	self assert: i1 isInfinite.
	self assert: i1 positive.
	self assert: i2 isInfinite.
	self assert: i2 negative.
	self deny: i1 = i2.
  	"All infinities are signed. Negative infinity is not equal to Infinity"
! !

!FloatTest methodsFor: 'tests - infinity behavior' stamp: 'nice 10/17/2007 23:54'!
testInfinityCloseTo
	"This is a test for bug http://bugs.squeak.org/view.php?id=6729:"

 	"FloatTest new testInfinityCloseTo"

	self deny: (Float infinity closeTo: Float infinity negated).
	self deny: (Float infinity negated closeTo: Float infinity).! !
