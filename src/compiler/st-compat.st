!Behavior methodsFor: 'fileIn/Out' stamp: 'tk 12/13/97 14:21'!
commentStamp: changeStamp prior: indexAndOffset
	"Prior source link ignored when filing in."
	^self commentStamp
	! !

Exception subclass: #OutOfScopeNotification
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	category: #Kernel!

! Class methodsFor: #instantiation !
variableSubclass: aString
instanceVariableNames: aString2
classVariableNames: aString3
poolDictionaries: poolVarNames
category: aCategory
	" Create a new subclass of the receiver. "

	^self
		subclass: aString
		instanceVariableNames: aString2
		classVariableNames:aString3
		poolDictionaries: poolVarNames
		category: aCategory! !

!SequenceableCollection methodsFor: 'accessing' stamp: 'sma 4/22/2000 17:45'!
atAllPut: anObject 
	"Put anObject at every one of the receiver's indices."

	1 to: self size do: [:index | self at: index put: anObject]! !

!SequenceableCollection methodsFor: 'enumerating' stamp: ' 8/6/2002 15:01'!
allButLastDo: block

	1 to: self size - 1 do:
		[:index | block value: (self at: index)]! !

!SequenceableCollection methodsFor: 'copying' stamp: ' 11/6/2002 15:01'!
copyUpTo: anElement 
	"Answer all elements up to but not including anObject. If there
	is no such object, answer a copy of the receiver."

	| index |
	index := self indexOf: anElement.
	index = 0 ifTrue: [ ^self copy ].
	^self first: index - 1! !

!SequenceableCollection methodsFor: 'copying' stamp: ' 11/6/2002 15:01'!
first: n
	"Answer the first n elements of the receiver.
	Raise an error if there are not enough elements."

	^ self copyFrom: 1 to: n! !
	
!SequenceableCollection methodsFor: 'accessing' stamp: 'mir 8/9/2018 08:53'!
replaceAllOccurencesOf: oldObject with: newObject 
	"Replace all occurences of oldObject with newObject"
	^self replaceAll: oldObject with: newObject! !

!Array class methodsFor: 'instance creation'!
new: size withAll: value 
	"Answer an instance of me, with number of elements equal to size, each 
	of which refers to the argument, value."

	^(self new: size) atAllPut: value! !

!Array class methodsFor: 'instance creation'!
blockVariableEval
	^[:x | x] value: 2! !

!Array methodsFor: #accessing !
writeStream
	^Stream on: Array new! !

!Stream methodsFor: 'positioning'!
resetToStart
	self resetContents! !

!String methodsFor: 'converting'!
subStrings
	^self asArrayOfSubstrings! !

!String methodsFor: 'converting'!
charCode
	^self asciiValue! !

!String methodsFor: 'converting'!
isSymbol
	^true! !

!String methodsFor: 'testing'!
isBinary
	| first |
	first := self at: 1.
	^(first == $_ or: [first isLetter]) not! !

! Number class methodsFor: #parsing !
primParseFrom: aString
	" Return the receiver as a Number. "
	<primitive: 'primNumberFrom' module: 'SKNumber'>
	^self primitiveFailed! !

! Number class methodsFor: #parsing !
parseFrom: aString
	" Return the receiver as a Number. "

	(aString includes: "$r"'r') ifTrue: [
		^Number readFrom: aString readStream
	].
	^self primParseFrom: aString! !

