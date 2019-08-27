! Collection methodsFor: #enumerating !
anySatisfy: aBlock

	self
		do:
			[:each |
			(aBlock value: each)
				ifTrue: [^true]].
	^false! !

SequenceableCollection
	subclass: #ByteArray
	instanceVariableNames: ''
	classVariableNames: '  '
	category: 'ByteArray' !

! ByteArray class methodsFor: 'instance creation' !
new

	^self new: 0!

new: aByteCount

	^self basicNew
		initialize: aByteCount;
		yourself! !

! ByteArray methodsFor: #initializing !
initializeStorage: aByteCount

	<primitive: 'primInitializeStorage' module: 'SKByteArray'>
	self primitiveFailed!

initialize: aByteCount

	self
		initialize;
		initializeStorage: aByteCount! !

! ByteArray methods !
size
	"return size of ByteArray"

	<primitive: 'primSize' module: 'SKByteArray'>
	self primitiveFailed! !

! ByteArray methods !
add: anObject 
	"Add anObject to the receiver.	This method reports
		 an error since fixed size collections cannot grow."

    ^self invalidMessage! !


! ByteArray methods !
do: aBlock
	" Evaluate aBlock with the contents of the receiver. "

	1
		to: self size
		do: [:i | aBlock value: (self at: i)]!

detect: aBlock ifNone: anotherBlock
	" Return the object in the receiver that return true when evaluated with aBlock or the result of evaluating anotherBlock. "

	self
		do:
			[:each |
			(aBlock value: each)
				ifTrue: [^each]].
	^anotherBlock value! !

! ByteArray methods !
includes: anObject
	" Return true if anObject is in the receiver."

	^self anySatisfy: [:each | each = anObject]! !

! ByteArray methods !
isEmpty

	^self size = 0! !

! ByteArray methods !
occurrencesOf: anObject
	" Return the occurrences of anObject in the receiver. "

	^self
		inject: 0
		into:
			[:count :each |
			(each = anObject)
				ifTrue: [count + 1]
				ifFalse: [count]]! !

! ByteArray methods !
reverseDo: aBlock
    " Evaluate aBlock with the contents of the receiver in reverse order of iteration. "

	| i |
	i := self size.
	[i > 0]
		whileTrue:
			[aBlock value: (self at: i).
			i := i - 1]! !

! ByteArray methods !
copy
	"make a shallowcopy of the receiver"

    ^self deepCopy! !

! ByteArray methods !
deepCopy
	"make a deep copy"

	^self
		copyFrom: 1
		to: self size! !

! ByteArray methods !
printOn: aStream 
	"print in hex"
	
    aStream
        nextPutAll: self class name;
        nextPut: $(.
    self do: [:each |
        each printOn: aStream base: 10 showRadix: false] separatedBy: [aStream space].
    aStream nextPut: $)! !

! ByteArray methods !
indexOf: anObject ifAbsent: aBlock
	" Return the position of anObject in the receiver, or the result of evaluating aBlock. "

	self
		doWithIndex:
			[:byte :i |
			(byte = anObject)
				ifTrue: [^i]].
	^aBlock value! !

! ByteArray methods !
asByteArray
	"I am who I am"

    ^self! !

! ByteArray methods !
at: anIndex
    "return item at indexed zero based location"

	<primitive: 'primAt' module: 'SKByteArray'>
	self primitiveFailed!

at: anIndex put: anObject 
    " Set the object in the receiver at anIndex position. "

	<primitive: 'primAtPut' module: 'SKByteArray'>
	self primitiveFailed! !

! ByteArray methods !
shallowCopy
	"make a shallowcopy of the receiver"

    ^self deepCopy! !

! ByteArray methods !
copyFrom: startIndex to: endIndex
	" Return a copy of the receiver. "

	| size copy |
	size := (endIndex - startIndex + 1) max: 0.
	copy := ByteArray new: size.
	copy
		replaceFrom: 1
		to: size
		with: self
		startingAt: startIndex.
	^copy! !

! ByteArray methods !
reversed
	" Return an array with the contents of the receiver in reverse order. "

	| size reversed |
	size := self size.
	reversed := ByteArray new: size.
	self
		doWithIndex:
			[:byte :i |
			reversed at: (size - i + 1) put: byte].
	^reversed! !

! ByteArray methods !
asString
	"return as String object"

	<primitive: 'primUTF8ToString' module: 'SKByteArray'>
	self primitiveFailed! !


! String methods !
asByteArray
	"Convert the string to a byte Array"

	<primitive: 'primAsByteArray' module: 'SKByteArray'>
	self primitiveFailed! !

! String methods !
asByteArrayWithNoEncoding
	 "Convert the string to a byte Array"

	 <primitive: 'primAsByteArrayNoEncoding' module: 'SKByteArray'>
	 self primitiveFailed! !

"Deprecated" !

! ByteArray class methodsFor: #deprecated !
contents: aUint8Array
	"This method is deprecated. Any primitive methods that need to return bytes
	should return a ByteArray instance instead of a Uint8Array."

	<primitive: 'primFromUint8Array' module: 'SKByteArray'>
	^self primitiveFailed! !

! ByteArray methodsFor: #deprecated !
contents

	<primitive: 'primContents' module: 'SKByteArray'>
	^self primitiveFailed! !