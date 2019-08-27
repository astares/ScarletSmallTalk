
! Number class methodsFor: #math !
multiplicativeIdentity
		"Answer the multiplicative identity element for instances of
		the receiver: the number which, when multiplied by any other
		number yields the other number."
	^1! !

! Number class methodsFor: #instantiation !
e
	"Answer the floating point representation of pi."

	<primitive: 'primE' module: 'SKNumber'>
	^self primitiveFailed. ! !

! Number methodsFor: #arithmetic !
log
	"Return the log 10 of the receiver."

	^self ln / 10 ln! !


! Number methodsFor: #math !
reciprocal
		"Answer one divided by the receiver."
	^self class multiplicativeIdentity / self! !

! Number methodsFor: #converting !
asFloat

	^self valueOf! !

! Number methodsFor: #comparing !
hash
	^self! !

! Number methodsFor: #testing !
isZero

	^self asFloat = 0.0! !

! Number methodsFor: #testing !
isNaN

	<primitive: 'primIsNaN' module: 'SKNumber'>
	^self primitiveFailed! !

! Number methodsFor: #testing !
isInfinite

	<primitive: 'primIsInfinite' module: 'SKNumber'>
	^self primitiveFailed! !

! Number methodsFor: #testing !
isPowerOfTwo
	"Return true if the receiver is an integral power of two."
	^ self ~= 0 and: [(self bitAnd: self-1) = 0]! !

! Number methodsFor: 'comparing' !
closeTo: aNumber
	^(self abs - aNumber abs) <= Float epsilon ! !


! Number methodsFor: 'rounding' !
round: positions
	<primitive: 'primRound' module: 'SKNumber'>
	^self primitiveFailed! !

! Number methodsFor: 'math' !
gcd: anInteger
		"Answer the greatest common divisor
		 between the receiver and anInteger."
	| u v r |
	u := self abs.
	v := anInteger abs.
	u < v
		ifTrue: [
			r := u.
			u := v.
			v := r].
	[v = 0]
		whileFalse: [
			r := u \\ v.
			u := v.
			v := r].
	^u! !

! Number methodsFor: 'math' !
exp
	<primitive: 'primExp' module: 'SKNumber'>
	^self primitiveFailed! !

! Number methodsFor: 'math' !
radiansToDegrees
	"Answer the number of degrees the
	 receiver represents in radians."
	<primitive: 'primRadiansToDegrees' module: 'SKNumber'>
	^self primitiveFailed! !

! Number methodsFor: 'math' !
degreesToRadians
	"Answer the number of radians the
	 receiver represents in degrees."
	<primitive: 'primDegreesToRadians' module: 'SKNumber'>
	^self primitiveFailed! !

! Number methodsFor: 'math' !
degreeSin
	^self degreesToRadians sin! !

! Number methodsFor: 'math' !
degreeCos
	^self degreesToRadians cos! !

! Number methodsFor: 'math' !
arcTan: aNumber
	^self atan2: aNumber! !
