Number subclass: #Integer
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	category: 'Number'!

Integer subclass: #SmallInteger
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	category: 'Number'!

! SmallInteger class methodsFor: 'instance creation' !
maxVal
	"Answer the largest (positive) integer value that can be represented as a SmallInteger."
	"16r3FFFFFFF 1073741823"
	^( 1 bitShift: 30 ) - 1! !

! SmallInteger class methodsFor: 'instance creation' !
minVal
		"Answer the smallest (negative) integer value that can be
		represented as a SmallInteger."
		"C0000000 -1073741824"
	^(-1 bitShift: 30 )! !
