! PoolDictionary methodsFor: #initialize !
initialize
	" Private - Initialize the receiver. "

	super initialize.
	self initializeHash. ! !

! PoolDictionary methodsFor: #initialization !
initializeHash

	<primitive: 'primInitializeHash' module: 'SKPoolDictionary'>
	^self primitiveFailed. ! !

! PoolDictionary methodsFor: #accessing !
at: aKey put: value
	" Set the value at aKey of the receiver. "

	<primitive: 'primAtPut' module: 'SKPoolDictionary'>
	^self primitiveFailed. ! !

! PoolDictionary methodsFor: #removing !
removeKey: aKey ifAbsent: aBlock
	" Remove the binding at aKey. "

	<primitive: 'primRemoveKeyIfAbsent' module: 'SKPoolDictionary'>
	^self primitiveFailed. ! !

! PoolDictionary methodsFor: #accessing !
size
	" Return the size of the receiver. "

	size isNil ifTrue: [ size := self keys size ].
	^size! !

! PoolDictionary methodsFor: #accessing !
at: aKey ifAbsent: aBlock
	" Return the value at aKey or the result of evaluating aBlock. "

	<primitive:'primAtIfAbsent' module:'SKPoolDictionary'>
	^self primitiveFailed. ! !

! PoolDictionary methodsFor: #testing !
includesKey: aKey
	" Return true if the receiver's keys include aKey. "

	self at: aKey ifAbsent: [ ^false ].
	^true! !

! PoolDictionary methodsFor: #enumerating !
keysAndValuesDo: aBlock
	" Evaluate aBlock for key/value pairs of the receiver. "

	self keys do: [:key | aBlock value: key value: (self at: key ifAbsent: [^self error: 'Key not found in dictionary']) ]! !

! PoolDictionary methodsFor: #accessing !
keys
	" Return the keys of the receiver. "

	<primitive:'primKeys' module: 'SKPoolDictionary'>
	^self primitiveFailed. ! !

! PoolDictionary methodsFor: #accessing !
values
	" Return the values of the receiver. "

	^self keys collect: [:key| self at: key ifAbsent: [^self error: 'Key not found in dictionary'] ]! !

! PoolDictionary methodsFor: #converting !
asJavascript
	" Return the javascript representation of the receiver. "

	^'smalltalk.',self class name
		,'.fromTuples_(' ,self tuples asJavascript ,')'! !

! PoolDictionary methodsFor: #enumerating !
detect: aBlock ifNone: anotherBlock
	" Detect the value who matches aBlock.
	Return the result of evaluating aBlock if no value matches detection block.
	"

	self keysAndValuesDo: [:key :value |
		(aBlock value: value) ifTrue: [ ^value ]
	].
	^anotherBlock value! !

! PoolDictionary methodsFor: #enumerating !
do: aBlock
	" Evaluates aBlock for all values in the receiver. "

	self keysAndValuesDo: [:key :value | aBlock value: value ]! !

! PoolDictionary methodsFor: #testing !
includes: anObject
	" Return true if the receiver's values include anObject. "

	self keysAndValuesDo: [:key :value |
		anObject = value ifTrue: [ ^true ].
	].
	^false! !

! PoolDictionary methodsFor: #enumerating !
keysDo: aBlock
	" Evaluate aBlock with the keys of the receiver. "

	self keys do: aBlock! !
