
TestCase subclass: #IntegerTest
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	category: 'Kernel-Tests-Numbers'!

!IntegerTest methodsFor: 'testing'!
testIsInteger
	self assert: 1 isInteger.
	self assert: 0 isInteger.
	self assert: -1 isInteger.
	self deny: true isInteger.
	self deny: nil isInteger.
	self deny: 1.1 isInteger.
	self assert: 1.0 isInteger.
	self assert: 0.0 isInteger.
	self assert: -1.0 isInteger.
! !

!IntegerTest methodsFor: 'test - rounding' stamp: 'GuillermoPolito 6/22/2012 14:52'!
testRounding
        "
        self debug: #testRounding
        "

        self assert: (5 round: 2) equals: 5! !


!IntegerTest methodsFor: 'tests - instance creation' stamp: 'GuillermoPolito 8/24/2010 19:08'!
testIntegerReadsOkFromString
	self assert: (Integer readFrom: '123') = 123.
	"VSE doesn't know negativity
	self assert: (Integer readFrom: '-123') = -123."
	self assert: (Integer readFrom: 'A3' radix: 16) = 163.
	"VSE doesn't know negativity
	self assert: (Integer readFrom: '-A3' radix: 16) = -163."! !


!IntegerTest methodsFor: 'tests - instance creation' stamp: 'GuillermoPolito 8/24/2010 19:14'!
testIntegerReadsNotOkFromString
	self assert: ((Integer readFrom: 'A23' readStream) = 0).
	"self assert: ((Integer readFrom: '-A23' readStream) = 0)."
	self assert: ((Integer readFrom: 'A3' readStream radix: 8) = 0).
	"self assert: ((Integer readFrom: '-A3' readStream radix: 8) = 0)."
	! !

!IntegerTest methodsFor: 'tests - instance creation' stamp: 'StephaneDucasse 5/28/2011 13:40'!
testStringAsNumber
	"This covers parsing in Number>>readFrom:
	Trailing decimal points should be ignored."

	self assert: ('123' asNumber = 123).
	"self assert: ('-123' asNumber = -123)."
	self assert: ('123.' asNumber = 123).
	"self assert: ('-123.' asNumber = -123)."
	self assert: ('123This is not to be read' asNumber = 123).
	"self assert: ('123e could be confused with a Float' asNumber = 123) message: '123e' asNumber printString."
	! !

!IntegerTest methodsFor: 'tests - mathematical functions' stamp: 'jmv 10/13/2011 21:45'!
testRaisedToErrorConditions
	"
	IntegerTest new testRaisedToErrorConditions
	"

	self assert: (-2 raisedTo: 1/4) isNaN.
	self assert: (-2 raisedTo: 1.24) isNaN! !

!IntegerTest methodsFor: 'tests - mathematical functions' stamp: 'CamilloBruni 8/31/2013 20:23'!
testDegreeSin
	"self run: #testDegreeSin"

	45 degreeSin.	"Following tests use approximate equality, because sine are generally evaluated using inexact Floating point arithmetic"
	self assert: (45 degreeSin squared - (1 / 2)) abs <= Float epsilon.
	self assert: (30 degreeSin - (1 / 2)) abs <= Float epsilon.
	self assert: (-30 degreeSin + (1 / 2)) abs <= Float epsilon.
	-360 to: 360 do: [ :i |
		self assert: (i degreeSin closeTo: i degreesToRadians sin)].
	"Following tests use strict equality which is a requested property of degreeSin
	Not here obviously"
	-10 to: 10 do: [ :k |
		self assert: ((k * 360 + 90) degreeSin - 1) <= Float epsilon.
		self assert: ((k * 360 - 90) degreeSin + 1) <= Float epsilon.
		self assert: ((k * 360 + 180) degreeSin) <= Float epsilon.
		self assert: ((k * 360) degreeSin) <= Float epsilon
		]! !

!IntegerTest methodsFor: 'tests - mathematical functions' stamp: 'nice 6/12/2010 00:37'!
testLog
	self assert: (100 log closeTo: 2).
	! !

!IntegerTest methodsFor: 'tests - mathematical functions' stamp: 'nice 5/28/2010 21:28'!
testLn
	self assert: (100 ln closeTo: 10 ln*2).
	! !

!IntegerTest methodsFor: 'tests - mathematical functions' stamp: 'CamilloBruni 8/31/2013 20:23'!
testDegreeCos
	"self run: #testDegreeCos"

	45 degreeCos.	"Following tests use approximate equality, because cosine are generally evaluated using inexact Floating point arithmetic"
	self assert: (45 degreeCos squared - (1 / 2)) abs <= Float epsilon.
	self assert: (60 degreeCos - (1 / 2)) abs <= Float epsilon.
	self assert: (120 degreeCos + (1 / 2)) abs <= Float epsilon.
	-360 to: 360 do: [ :i | self assert: (i degreeCos closeTo: i degreesToRadians cos) ].
	"Following tests use strict equality which is a requested property of degreeCos
	Not here obviously"
	-10 to: 10 do: [ :k |
		self assert: (k * 360 + 90) degreeCos <= Float epsilon.
		self assert: (k * 360 - 90) degreeCos <= Float epsilon.
		self assert: (k * 360 + 180) degreeCos + 1 <= Float epsilon.
		self assert: (k * 360) degreeCos - 1 <= Float epsilon
		]! !

!IntegerTest methodsFor: 'tests - bitLogic' stamp: 'SeanDeNigris 5/16/2012 21:08'!
testBitLogic
	"This little suite of tests is designed to verify correct operation of most of Pharo's bit manipulation code, including two's complement representation of negative values.  It was written in a hurry and is probably lacking several important checks."
	"self run: #testBitLogic"

	| count n |
	"Pharo test uses 100"
	count := 30.

	"Shift 1 bit left then right and test for 1"
	1 to: count do: [:i | self assert: ((1 bitShift: i) bitShift: i negated) = 1].

	"Shift -1 left then right and test for 1"
	1 to: count do: [:i | self assert: ((-1 bitShift: i) bitShift: i negated) = -1].

	"And a single bit with -1 and test for same value"
	1 to: count do: [:i | self assert: ((1 bitShift: i) bitAnd: -1) = (1 bitShift: i)].

	"Verify that (n bitAnd: n negated) = n for single bits"
	1 to: count do: [:i |  n := 1 bitShift: i. self assert: (n bitAnd: n negated) = n].

	"Verify that n negated = (n complemented + 1) for single bits"
	1 to: count do: [:i |
					n := 1 bitShift: i.
					self assert: n negated = ((n bitXor: -1) + 1)].

	"Verify that (n + n complemented) = -1 for single bits"
	1 to: count do: [:i |
					n := 1 bitShift: i.
					self assert: (n + (n bitXor: -1)) = -1].

	"Verify that n negated = (n complemented +1) for single bits"
	1 to: count do: [:i |
					n := 1 bitShift: i.
					self assert: n negated = ((n bitXor: -1) + 1)].! !

!IntegerTest methodsFor: 'tests - bitLogic' stamp: 'SeanDeNigris 5/16/2012 20:26'!
testBitShift

	self assert: 2r11 << 2 equals: 2r1100.
	self assert: (2r11 bitShift: 2) equals: 2r1100.
	self assert: 2r1011 >> 2 equals: 2r10.
	self assert: (2r1011 bitShift: -2) equals: 2r10.! !

!IntegerTest methodsFor: 'tests - bitLogic' stamp: 'SeanDeNigris 5/16/2012 20:20'!
testBitOr

	"self assert: (2r0101 | 2r1010) equals: 2r1111."
	self assert: (2r0101 bitOr: 2r1010) equals: 2r1111.! !

!IntegerTest methodsFor: 'tests - bitLogic' stamp: 'SeanDeNigris 5/16/2012 20:42'!
testBitXor

	self assert: (2r1100 bitXor: 2r1010) equals: 2r0110.! !



!IntegerTest methodsFor: 'tests - bitLogic' stamp: 'SeanDeNigris 5/16/2012 20:17'!
testBitAt

	self assert: (2r10 bitAt: 1) equals: 0.
	self assert: (2r10 bitAt: 2) equals: 1.

	self
		assert: ((1 to: 100) allSatisfy: [:i | (0 bitAt: i) = 0])
		description: 'all bits of zero are set to zero'.

	self
		assert: ((1 to: 100) allSatisfy: [:i | (-1 bitAt: i) = 1])
		description: 'In two complements, all bits of -1 are set to 1'.
	! !


!IntegerTest methodsFor: 'tests - bitLogic' stamp: 'SeanDeNigris 5/16/2012 20:21'!
testBitAnd

	self assert: (2r1100 bitAnd: 2r1010) equals: 2r1000.
	self assert: (2r1100 & 2r1010) equals: 2r1000.
"	self assert: (-2 bitAnd: 16rFFFFFFFF) equals: 16rFFFFFFFE.
	self assert: (-2 & 16rFFFFFFFF) equals: 16rFFFFFFFE."
	! !

!IntegerTest methodsFor: 'tests - basic' stamp: 'md 4/21/2003 16:17'!
testEven

	self deny: (1073741825 even).
	self assert: (1073741824  even).
	! !

!IntegerTest methodsFor: 'private' stamp: 'jmv 10/11/2011 08:14'!
assert: a classAndValueEquals: b
	self assert: a class = b class.
	self assert: a = b! !
