! KeyedCollection class methodsFor: #instantiation !
basicNew: size
	" Return an instance of the receiver of specified size. "

	^self new! !

! KeyedCollection class methodsFor: #instantiation !
@ jsObject
	" Return an instance of the receiver with the properties owned by jsObject. "

	| result |
	result := self new.
	jsObject jsPropertyNames do: [:key|
		result at: key put: (jsObject basicAt: key)
	].
	^result! !

! KeyedCollection class methodsFor: #instantiation !
fromTuples: tuples
	" Return an instance of the receiver. "

	^tuples inject: self new into: [:result :tuple|
		result at: tuple first put: tuple last.
		result
	]! !

! KeyedCollection methodsFor: #copying !
, aCollection
	" Return a copy of the receiver with aCollection appended. "

	^self shouldNotImplement: #,! !

! KeyedCollection methodsFor: #comparing !
= anObject
	" Return true if the receiver is equal to anObject. "

	self class = anObject class ifFalse: [^false].
	self size = anObject size ifFalse: [^false].
	self keysAndValuesDo: [:key :value |
		(anObject at: key ifAbsent: [^false])
			= value ifFalse: [^false]
	].
	^true! !

! KeyedCollection methodsFor: #adding !
add: anAssociation
	" Bind anAssociation to the receiver. "

	self at: anAssociation key put: anAssociation value.
	^anAssociation! !

! KeyedCollection methodsFor: #adding !
addAll: aKeyedCollection
	" Bind all associations in aKeyedCollection to the receiver. "

	super addAll: aKeyedCollection associations.
	^aKeyedCollection! !

! KeyedCollection methodsFor: #converting !
asJSONObject
	" Return the mapping of the receiver to JSON structure. "

	| result value |
	result := self smalltalk emptyJSONObject.
	self keysAndValuesDo: [:key :aValue |
		value := (self isObject: aValue)
			ifTrue: [ aValue asJSONObject ]
			ifFalse: [ aValue ].
		result basicAt: key put: value
	].
	^result! !

! KeyedCollection methodsFor: #accessing !
associations
	" Return the associations of the receiver. "

	| result |
	result := Array new.
	self associationsDo: [:each| result add: each ].
	^result! !

! KeyedCollection methodsFor: #enumerating !
associationsDo: aBlock
	" Evaluate aBlock for all the receiver's associations. "

	self keysAndValuesDo: [:key :value|
		aBlock value: (Association key: key value: value)
	].! !

! KeyedCollection methodsFor: #accessing !
at: aKey
	" Return the value at aKey.
	Signal an error if the key is not present.
	"

	^self at: aKey ifAbsent: [ self objectNotFoundAt: aKey ]! !

! KeyedCollection methodsFor: #accessing !
at: aKey ifAbsent: aBlock
	" Return the value at aKey or the result of evaluating aBlock. "

	^self implementedBySubclass: #at:ifAbsent:! !

! KeyedCollection methodsFor: #accessing !
values
	" Return the values of the receiver. "

	^self implementedBySubclass: #values! !

! KeyedCollection methodsFor: #accessing !
at: aKey ifAbsentPut: aBlock
	" Return the value at aKey, or add the result of evaluating aBlock to the receiver if it is absent. "

	^self at: aKey ifAbsent: [ self at: aKey put: aBlock value ]! !

! KeyedCollection methodsFor: #accessing !
at: aKey put: aValue
	" Set the value at aKey of the receiver. "

	^self implementedBySubclass: #at:put:! !

! KeyedCollection methodsFor: #enumerating !
detect: aBlock ifNone: anotherBlock
	" Detect the value who matches aBlock.
	Return the result of evaluating aBlock if no value matches detection block.
	"

	^self implementedBySubclass: #detect:ifNone:! !

! KeyedCollection methodsFor: #enumerating !
do: aBlock
	" Evaluates aBlock for all values in the receiver. "

	^self implementedBySubclass: #do:! !

! KeyedCollection methodsFor: #testing !
includes: anObject
	" Return true if the receiver's values include anObject. "

	^self implementedBySubclass: #includes:! !

! KeyedCollection methodsFor: #accessing !
keyForValue: anObject ifAbsent: aBlock
	" Return the key in the receiver for value anObject, or the result of evaluating aBlock. "

	self keysAndvaluesDo: [:key :value| anObject = value ifTrue: [ ^key ] ].
	^aBlock value! !

! KeyedCollection methodsFor: #accessing !
keys
	" Return the keys of the receiver. "

	^self implementedBySubclass: #keys! !

! KeyedCollection methodsFor: #enumerating !
keysAndValuesDo: aBlock
	" Evaluate aBlock for key/value pairs of the receiver. "

	^self implementedBySubclass: #keysAndValuesDo:! !

! KeyedCollection methodsFor: #enumerating !
keysDo: aBlock
	" Evaluate aBlock with the keys of the receiver. "

	^self implementedBySubclass: #keysDo:! !

! KeyedCollection methodsFor: #testing !
includesKey: aKey
	" Return true if the receiver's keys include aKey. "

	^self implementedBySubclass: #includesKey:! !

! KeyedCollection methodsFor: #removing !
removeKey: aKey ifAbsent: aBlock
	" Remove the binding at aKey. "

	^self implementedBySubclass: #removeKey:ifAbsent:! !

! KeyedCollection methodsFor: #testing !
isEmpty
	" Return true if the receiver is empty. "

	^self size = 0! !

! KeyedCollection methodsFor: #accessing !
at: aKey ifPresent: aBlock
	" Return the result of evaluating aBlock if there is a value at aKey (or nil). "

	| aValue |
	aValue := self at: aKey ifAbsent: [ ^nil ].
	^aBlock value: aValue! !

! KeyedCollection methodsFor: #accessing !
at: aKey ifPresent: aBlock ifAbsent: anotherBlock
	" Return the result of evaluating aBlock if there is a value at aKey (or the result of evaluating anotherBlock). "

	| aValue |
	aValue := self at: aKey ifAbsent: [ ^anotherBlock value ].
	^aBlock value: aValue! !

! KeyedCollection methodsFor: #enumerating !
collect: aBlock
	" Return aKeyedCollection with keys and result of evaluating aBlock with value. "

	| result |
	result := self class new.
	self keysAndValuesDo: [:key :value |
		result at: key put: (aBlock value: value)
	].
	^result! !

! KeyedCollection methodsFor: #enumerating !
select: aBlock
	" Return the contents of the receiver wich evaluates aBlock to true. "

	| result |
	result := self class new.
	self keysAndValuesDo: [:key :value |
		(aBlock value: value) ifTrue: [ result at: key put: value ]
	].
	^result! !

! KeyedCollection methodsFor: #copying !
shallowCopy
	" Return a shallow copy of the receiver. "

	| result |
	result := self class new.
	self keysAndValuesDo: [:key :value | result at: key put: value ].
	^result! !

! KeyedCollection methodsFor: #accessing !
tuples
	" Return an array of tuples built from the receiver's contents. "

	| result |
	result := Array new.
	self keysAndValuesDo: [:key :value|
		result add: (Array with: key with: value)
	].
	^result! !

! KeyedCollection methodsFor: #copying !
copyFrom: anIndex to: anotherIndex
	" Return a copy of the receiver from anIndex to anotherIndex. "

	^self shouldNotImplement: #copyFrom:to:! !

! KeyedCollection methodsFor: #copying !
deepCopy
	" Return a deep copy of the receiver. "

	| result |
	result := self class new.
	self keysAndValuesDo: [:key :value |
		result at: key put: value deepCopy
	].
	^result! !

! KeyedCollection methodsFor: #removing !
remove: aKey
	" Remove the binding at aKey. "

	self removeKey: aKey! !

! KeyedCollection methodsFor: #removing !
removeKey: aKey
	" Remove the binding at aKey.
	Signal an error if the key is not present.
	"

	^self removeKey: aKey ifAbsent: [ self objectNotFoundAt: aKey ]! !

! KeyedCollection methodsFor: #query !
isDictionary
	" Returns true if the receiver is a dictionary. "

	^true! !

