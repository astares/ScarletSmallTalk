TestCase subclass: #NumberTest
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	category: 'Tests'!

!NumberTest methodsFor: 'tests'!
testAbs
	self assert: 4 abs = 4.
	self assert: -4 abs = 4
! !

!NumberTest methodsFor: 'tests'!
testAsNumber
	self assert: 3 asNumber = 3.
! !

!NumberTest methodsFor: 'tests'!
testBetweenAnd
	self assert: (4 between: 3 and: 5).
	self assert: (1 between: 5 and: 6) not.
	self assert: (90 between: 67 and: 87) not.
	self assert: (1 between: 1 and: 1).
! !

!NumberTest methodsFor: 'tests'!
testCopying
	self assert: 1 copy == 1.
	self assert: 1 deepCopy == 1
! !

!NumberTest methodsFor: 'tests'!
testDegreesToRadians
	self assert: (180 degreesToRadians - Number pi) abs <= 0.01.
! !

!NumberTest methodsFor: 'tests'!
testIdentity
	self assert: 1 == 1.
	self assert: 0 == 0.
	self deny: 1 == 0.

	self assert: 1 yourself == 1.
	self assert: 1 == 1 yourself.
	self assert: 1 yourself == 1 yourself.

	self deny: 1 == 2
! !


!NumberTest methodsFor: 'tests'!
testLog
	self assert: 10000 log = 4.
	self assert: (512 log: 2) = 9.
	self assert: Number e ln = 1.
! !

!NumberTest methodsFor: 'tests'!
testNegated
	self assert: 3 negated = -3.
	self assert: -3 negated = 3
! !

!NumberTest methodsFor: 'tests'!
testRadiansToDegrees
	self assert: (Number pi radiansToDegrees - 180) abs <= 0.01.
! !

!NumberTest methodsFor: 'tests'!
testSign
	self assert: 5 sign = 1.
	self assert: 0 sign = 0.
	self assert: -1.4 sign = -1.
! !

!NumberTest methodsFor: 'tests'!
testSquared
	self assert: 4 squared = 16
! !

!NumberTest methodsFor: 'tests'!
testTimesRepeat
	| i |
	i := 0.
	0 timesRepeat: [ i := i + 1 ].
	self assert: i = 0.

	5 timesRepeat: [ i := i + 1 ].
	self assert: i = 5
! !

!NumberTest methodsFor: 'tests'!
testTrigonometry
	self assert: 0 cos = 1.
	self assert: 0 sin = 0.
	self assert: 0 tan = 0.
	self assert: 1 arcCos = 0.
	self assert: 0 arcSin = 0.

! !

!NumberTest methodsFor: 'tests'!
testTruncated
	self assert: 3 truncated = 3.
	self assert: 3.212 truncated = 3.
	self assert: 3.51 truncated = 3
! !
