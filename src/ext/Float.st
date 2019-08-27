Number subclass: #Float
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	category: 'Number'!

! Float class methodsFor: 'instance creation' !
emax
	"Answer exponent of maximal representable value"

	^1023! !

! Float class methodsFor: 'instance creation' !
negativeInfinity
	<primitive: 'primNegativeInfinity' module: 'SKNumber'>
	^self primitiveFailed! !

! Float class methodsFor: 'instance creation' !
infinity
	<primitive: 'primInfinity' module: 'SKNumber'>
	^self primitiveFailed! !

! Float class methodsFor: 'instance creation' !
nan
	<primitive: 'primNaN' module: 'SKNumber'>
	^self primitiveFailed! !

! Float class methodsFor: 'instance creation' !
negativeZero
	^-0.0! !

! Float class methodsFor: 'instance creation' !
epsilon
	^0.001! !

! Float class methodsFor: 'math' !
multiplicativeIdentity
	"Answer the multiplicative identity element for instances of
	the receiver: the number which, when multiplied by any other
	number yields the other number."

	^1.0! !
