SequenceableCollection
 subclass: #ArrayedContents
 instanceVariableNames: ' contents '
 category: #Kernel!

! ArrayedContents methodsFor: #private !
contents
	" Private - Return the contents of the receiver. "

	contents isNil ifTrue: [ contents := Array new ].
	^contents! !

! ArrayedContents methodsFor: #adding !
add: anObject
	" Add anObject to the receiver. "

	^self contents add: anObject! !

! ArrayedContents methodsFor: #accessing !
at: anIndex ifAbsent: aBlock
	" Return the contents of the receiver at anIndex or the result of evaluating aBlock. "

	^self contents at: anIndex ifAbsent: aBlock! !

! ArrayedContents methodsFor: #accessing !
at: anIndex put: anObject
	" Set the contents of the receiver at anIndex. "

	^self contents at: anIndex put: anObject! !

! ArrayedContents methodsFor: #accessing !
atAllPut: anObject
	" Replace all elements of the receiver with anObject. "

	^self contents atAllPut: anObject! !

! ArrayedContents methodsFor: #copying !
copyFrom: anIndex to: anotherIndex
	" Return the receiver contents in the interval. "

	| result |
	result := self class new.
	anIndex to: anotherIndex do: [:each | result add: (self at: each) ].
	^result! !

! ArrayedContents methodsFor: #testing !
indexOf: anObject ifAbsent: aBlock
	" Return the position of anObject in the receiver, or the result of evaluating aBlock. "

	^self contents indexOf: anObject ifAbsent: aBlock! !

! ArrayedContents methodsFor: #enumerating !
detect: aBlock ifNone: anotherBlock
	" Return the object in the receiver that return true when evaluated with aBlock or the result of evaluating anotherBlock. "

	^self contents detect: aBlock ifNone: anotherBlock! !

! ArrayedContents methodsFor: #enumerating !
do: aBlock
	" Evaluate aBlock with the contents of the receiver. "

	^self contents do: aBlock! !

! ArrayedContents methodsFor: #testing !
includes: anObject
	" Return true if anObject is in receiver's contents. "

	^self contents includes: anObject! !

! ArrayedContents methodsFor: #testing !
isEmpty
	" Return true if the receiver is empty. "

	^self contents isEmpty! !

! ArrayedContents methodsFor: #counting !
occurrencesOf: anObject
	" Return the occurrences of anObject in the receiver. "

	^self contents occurrencesOf: anObject! !

! ArrayedContents methodsFor: #enumerating !
reverseDo: aBlock
	" Evaluate aBlock with the contents of the receiver in reverse order of iteration. "

	^self contents reverseDo: aBlock! !

! ArrayedContents methodsFor: #copying !
reversed
	" Return an array with the contents of the receiver in reverse order. "

	^self class withAll: self contents reversed! !

! ArrayedContents methodsFor: #enumerating !
detect: aBlock ifNone: anotherBlock
	" Return the object in the receiver that return true when evaluated with aBlock or the result of evaluating anotherBlock. "

	^self contents detect: aBlock ifNone: anotherBlock! !

! ArrayedContents methodsFor: #removing !
remove: anObject ifAbsent: aBlock
	" Remove anObject from the receiver.
	Return the result of evaluating aBlock if anObject is not in the receiver.
	"

	^self contents remove: anObject ifAbsent: aBlock! !

! ArrayedContents methodsFor: #removing !
removeAll
	" Remove all the objects in the receiver. "

	contents := nil! !

! ArrayedContents methodsFor: #removing !
removeFirst
	" Remove the first object in the receiver. "

	^self contents removeFirst! !

! ArrayedContents methodsFor: #removing !
removeLast
	" Remove the last object in the receiver. "

	^self contents removeLast! !

! ArrayedContents methodsFor: #removing !
removeIndex: index
	" Remove the element at index. "

	^self contents removeIndex: index! !

! ArrayedContents methodsFor: #accesing !
size
	" Return the size of the receiver. "

	^self contents size! !

! ArrayedContents methodsFor: #enumerating !
withIndexDo: aBlock
	" Evaluate aBlock with all the index positions in the receiver. "

	^self contents withIndexDo: aBlock! !

