SequenceableCollection
	subclass: #OrderedCollection
	instanceVariableNames: 'contents'
	classVariableNames: ''
	poolDictionaries: ''!
OrderedCollection class instanceVariableNames: ''!

! OrderedCollection methods !
, aCollection

	^self copyWithAll: aCollection! !

! OrderedCollection methods !
add: anObject

	^self contents add: anObject! !

! OrderedCollection methods !
add: anObject
after: anotherObject

	^self contents
		add: anObject
		after: anotherObject! !

! OrderedCollection methods !
addAll: aCollection

	aCollection do: [:each | self add: each].
	^aCollection! !

! OrderedCollection methods !
addFirst: anObject

	^self contents addFirst: anObject! !

! OrderedCollection methods !
addLast: anObject

	^self contents addLast: anObject! !

! OrderedCollection methods !
asArray

	| array |
	array := Array new: self size.
	self doWithIndex: [:each :index | array at: index put: each].
	^array! !

! OrderedCollection methods !
asJSONObject

	^self contents asJSONObject! !

! OrderedCollection methods !
asJavascript

	^self contents asJavascript! !

! OrderedCollection methods !
at: anIndex
ifAbsent: aBlock

	^self contents
		at: anIndex
		ifAbsent: aBlock! !

! OrderedCollection methods !
atAllPut: anObject

	self contents atAllPut: anObject.
	^anObject! !

! OrderedCollection methods !
copyFrom: startIndex
to: endIndex

	| copiedContents |
	copiedContents := self contents copyFrom: startIndex to: endIndex.
	^self class contents: copiedContents! !

! OrderedCollection methods !
copyWithAll: aCollection

	^self class new
		addAll: self;
		addAll: aCollection;
		yourself! !

! OrderedCollection methods !
deepCopy

	^OrderedCollection contents: self contents deepCopy! !

! OrderedCollection methods !
reversed

	^OrderedCollection contents: self contents reversed! !

! OrderedCollection methods !
shallowCopy

	^OrderedCollection contents: self contents shallowCopy! !

! OrderedCollection methods !
do: aBlock

	self contents do: aBlock! !

! OrderedCollection methods !
detect: aBlock
ifNone: anotherBlock

	^self contents
		detect: aBlock
		ifNone: anotherBlock! !

! OrderedCollection methods !
reverseDo: aBlock

	self contents reverseDo: aBlock! !

! OrderedCollection methods !
isEmpty

	 ^self size = 0! !

! OrderedCollection methods !
includes: anObject

	^self contents includes: anObject! !

! OrderedCollection methods !
indexOf: anObject
ifAbsent: aBlock

	^self contents
		indexOf: anObject
		ifAbsent: aBlock! !

! OrderedCollection methods !
first

	^self contents first! !

! OrderedCollection methods !
fourth

	^self contents fourth! !

! OrderedCollection methods !
three

	^self third! !

! OrderedCollection methods !
two

	^self second! !

! OrderedCollection methods !
occurrencesOf: anObject

	 ^self contents occurrencesOf: anObject! !

! OrderedCollection methods !
printOn: aStream

	aStream
		nextPutAll: self class name;
		nextPut: $(.
	self
		do: [:each | each printOn: aStream]
		separatedBy: [aStream space].
	aStream nextPut: $)! !

! OrderedCollection methods !
remove: anObject
ifAbsent: aBlock

	^self contents
		remove: anObject
		ifAbsent: aBlock! !

! OrderedCollection methods !
removeAll

	self initializeContents! !

! OrderedCollection methods !
removeFirst

	^self contents removeFirst! !

! OrderedCollection methods !
removeIndex: anIndex

	^self contents removeIndex: anIndex! !

! OrderedCollection methods !
removeLast

	^self contents removeLast! !

! OrderedCollection methods !
second

	^self contents second! !

! OrderedCollection methods !
size

	^self contents size! !

! OrderedCollection methods !
sort: aBlock

	self contents sort: aBlock! !

! OrderedCollection methods !
sorted

	^OrderedCollection contents: self contents sorted! !

! OrderedCollection methods !
sorted: aBlock

	^OrderedCollection contents: (self contents sorted: aBlock)! !

! OrderedCollection methods !
third

	^self contents third! !

! OrderedCollection methods !
initializeContents

	contents := Array new! !

! OrderedCollection methods !
initialize

	super initialize.
	self initializeContents! !

! OrderedCollection methods !
contents

	^contents! !

! OrderedCollection methods !
contents: anArray

	contents := anArray! !

! OrderedCollection class methods !
contents: anArray

	^self new
		contents: anArray;
		yourself! !

! OrderedCollection class methods !
basicNew: anInteger

	^self new! !

! OrderedCollection methods !
at: anIndex

	^self contents at: anIndex! !

! OrderedCollection methods !
at: anIndex put: anObject

	^self contents at: anIndex put: anObject! !
