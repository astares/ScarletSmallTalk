TestCase subclass: #SmallIntegerTest
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	category: 'Kernel-Tests-Numbers'!

!SmallIntegerTest methodsFor: 'tests - Class Methods' stamp: 'sd 6/5/2005 08:59'!
testMinVal

	self assert: (SmallInteger minVal = -1073741824).! !

!SmallIntegerTest methodsFor: 'tests - Class Methods' stamp: 'sd 6/5/2005 08:59'!
testMaxVal

	self assert: (SmallInteger maxVal = 16r3FFFFFFF).! !


!SmallIntegerTest methodsFor: 'tests - arithmetic' stamp: 'sd 6/5/2005 08:59'!
testDivide

	self assert: 2 / 1 = 2.
"	self assert: (3 / 2) isFraction."
	self assert: 4 / 2 = 2.
	self should: [ 1 / 0 ] raise: Error.! !


!SmallIntegerTest methodsFor: 'tests - printing' stamp: 'al 7/21/2008 21:48'!
testPrintString
	self assert: 1 printString  = '1'.
	self assert: -1 printString  = '-1'.
	self assert: SmallInteger minVal printString  = '-1073741824'.
	self assert: SmallInteger maxVal printString  = '1073741823'.
	self assert: 12345 printString  = '12345'.
	self assert: -54321 printString  = '-54321'.

	! !


!SmallIntegerTest methodsFor: 'tests - operations' stamp: 'AlexandreBergel 8/21/2011 17:44'!
testCeiling

	self assert: 2 ceiling = 2.
	self assert: -2 ceiling = -2.
	self assert: 2.1 ceiling = 3.
	self assert: -2.1 ceiling = -2.! !
