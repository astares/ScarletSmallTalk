TestCase subclass: #ByteArrayTestCase
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	category: 'Tests'!

!ByteArrayTestCase methodsFor: 'running' !
testCreate

	| x y |
	x := ByteArray new.
	self assert: x isEmpty.
	y := x asByteArray.
	self assert: x == y.
	! !
	
!ByteArrayTestCase methodsFor: 'as yet unclassified' stamp: 'JohnMMcIntosh 10/27/2017 09:02'!
testCreateSize

	| x |
	x := ByteArray new: 1.
	self deny: x isEmpty.
	self assert: x size = 1.
	self assert: (x at: 1) = 0.
	x := ByteArray new: 2.
	self assert: x size = 2.
	self assert: (x at: 1) = 0.
	self assert: (x at: 2) = 0.
	x := ByteArray new: 3.
	self assert: x size = 3.
	self assert: (x at: 1) = 0.
	self assert: (x at: 2) = 0.
	self assert: (x at: 3) = 0.
	! !


!ByteArrayTestCase methodsFor: 'as yet unclassified' stamp: 'JohnMMcIntosh 10/27/2017 09:02'!
testByteAccess

	| x  y |

	x := ByteArray new: 1.
	self deny: x isEmpty.
	self assert: x size = 1.
	self assert: (x at: 1) = 0.
	self
		should: [x add: 2]
		raise: Error.
	self
		should: [y := x at: 2]
		raise: Error.
		
	"self assert: (x at: 999 ifAbsent: [42]) = 42."
	
	1 to: 255 do: [:i | 
		x at: 1 put: i.
		self assert: (x at: 1) = i].
		
	
	self should: [x at: 1 put: 256.]
		raise: Error.
	self should: [x at: 1 put: -1.]
		raise: Error.
		
	! !

!ByteArrayTestCase methodsFor: 'as yet unclassified' stamp: 'JohnMMcIntosh 10/27/2017 09:02'!
testEquality
	| x y |
	
	x := ByteArray new: 1.
	x at: 1 put: 42.
	y := ByteArray new: 1.
	y at: 1 put: 42. 
	self assert: x = y.
	self deny: x == y
		! ! 

!ByteArrayTestCase methodsFor: 'as yet unclassified' stamp: 'JohnMMcIntosh 10/27/2017 09:02'!
testCopy
	|x y|
	
    x := (ByteArray new: 1).
    x at: 1 put: 99.
    y := x shallowCopy.
    x at: 1 put: 42.
    self deny: (y at: 1) = (x at: 1).
    
    x := (ByteArray new: 1).
    x at: 1 put: 99.
    y := x copy.
    x at: 1 put: 42.
    self deny: (y at: 1) = (x at: 1).
    
        
    x := (ByteArray new: 1).
    x at: 1 put: 99.
    y := x deepCopy.
    x at: 1 put: 42.
    self deny: (y at: 1) = (x at: 1)
    	
    ! !
    
!ByteArrayTestCase methodsFor: 'as yet unclassified' stamp: 'JohnMMcIntosh 10/27/2017 09:02'!
testCopyFrom
	|x y|

    x := ByteArray new: 1.
    x at: 1 put: 99.
  
	self should: [ x copyFrom: 99 to: 101]
		raise: Error.
	
	y := x copyFrom: 1 to: 1.
	self assert: (y at: 1) = 99.
	
	x := ByteArray new: 3.
	x at: 1 put: 1.
	x at: 2 put: 2.
	x at: 3 put: 3.
	y := x copyFrom: 1 to: 2.
	self assert: y size = 2.
	self assert: (y at: 1) = 1.
	self assert: (y at: 2) = 2.
	y := x copyFrom: 2 to: 3.
	self assert: y size = 2.
	self assert: (y at: 1) = 2.
	self assert: (y at: 2) = 3.
    	
    ! !

!ByteArrayTestCase methodsFor: 'as yet unclassified' stamp: 'JohnMMcIntosh 10/27/2017 09:02'!
testDetectIncludesIndexOf
		|x y|
	x := ByteArray new: 3.
	x at: 1 put: 1.
	x at: 2 put: 2.
	x at: 3 put: 3.

	self assert: (x detect: [:a | a = 2] ifNone: [42]) = 2.
	self assert: (x detect: [:a | a = 4] ifNone: [42]) = 42.
	self assert: (x includes: 1).
	self assert: (x includes: 2).
	self assert: (x includes: 3).
	self deny: (x includes: 4).
	self assert: (x indexOf: 1) = 1.
	self assert: (x indexOf: 2) = 2.
	self assert: (x indexOf: 3) = 3.
	self assert: (x indexOf: 4) = 0.
	"self assert: (x indexOf: 4 ifAbsent: [42]) = 42."
	! !
	
!ByteArrayTestCase methodsFor: 'as yet unclassified' stamp: 'JohnMMcIntosh 10/27/2017 09:02'!
testDo
		|x y|
	x := ByteArray new: 3.
	x at: 1 put: 1.
	x at: 2 put: 2.
	x at: 3 put: 3.

	y := 0.
	x do: [:a | y := y + a].
	self assert: y = 6
	! !
	
!ByteArrayTestCase methodsFor: 'as yet unclassified' stamp: 'JohnMMcIntosh 10/27/2017 09:02'!
testOccurrencesOf
		|x |
	x := ByteArray new: 3.
	x at: 1 put: 1.
	x at: 2 put: 2.
	x at: 3 put: 2.

	self assert: (x occurrencesOf: 1) = 1.
	self assert: (x occurrencesOf: 2) = 2.
	
	! !
	
!ByteArrayTestCase methodsFor: 'as yet unclassified' stamp: 'JohnMMcIntosh 10/27/2017 09:02'!
testReversed
		|x y z rcheck|
		
	x := ByteArray new: 3.
	x at: 1 put: 1.
	x at: 2 put: 2.
	x at: 3 put: 3.
	y := x reversed.
	
	self assert: (y at: 1) = 3.
	self assert: (y at: 2) = 2.
	self assert: (y at: 3) = 1.
	self assert: (x at: 1) = 1.
	self assert: (x at: 2) = 2.
	self assert: (x at: 3) = 3.

	z := Array new.
	
	x reverseDo: [:a | z add: a].
	self assert: (z at: 1) = 3.
	self assert: (z at: 2) = 2.
	self assert: (z at: 3) = 1.
	! !
	
!ByteArrayTestCase methodsFor: 'as yet unclassified' stamp: 'JohnMMcIntosh 10/27/2017 09:02'!
testConversions
	| c x | 
	
	c := String fromCharCode: 255.
	x := c asByteArray. 
	self assert: x size = 2.
	self assert: (x at: 1) = 16rC3.
	self assert: (x at: 2) = 16rBF.
	self assert: x asString = c.! !
	
