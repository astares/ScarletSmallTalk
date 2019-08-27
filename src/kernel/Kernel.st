
nil
 subclass: #Object
 instanceVariableNames: ''
 category: #Kernel!

Object
 subclass: #Exception
 instanceVariableNames: 'messageText'
 category: #Kernel!

Exception
 subclass: #Error
 instanceVariableNames: ''
 category: #Kernel!

 ! Object methodsFor: #system !
 smalltalk
 	" Return the smalltalk system containing the receiver. "

 	<primitive: 'primSmalltalk' module: 'SKObject'>
 	self primitiveFailed! !

 ! Object methodsFor: #debug !
 halt
 	" Private - Halt execution entering debugger. "

 	<primitive: 'primHalt' module: 'SKObject'>
 	self primitiveFailed! !

! Object methodsFor: #development !
notImplementedYet
	" Private - Halt execution and/or generate an error reporting implementation incomplete. "

	self error: 'Not implemented. Yet' halt! !

! Object methodsFor: #development !
notYetImplemented
	"Error since a method has not yet been implemented."

	^self notImplementedYet! !


! Object methodsFor: #development !
notYetImplemented: aSelector
	"Error since a method has not yet been implemented."

	^self notImplementedYet: aSelector! !


! Object methodsFor: #development !
notImplementedYet: aSelector
	" Private - Halt execution and/or generate an error reporting implementation incomplete. "

	| message |
	message := self class name, '>>', aSelector asLiteral, ' is not yet implemented.'.
	self error: message! !

! Object methodsFor: #parserBug !
accept: what
	" Private - Report buggy send by compiler. "

	self print: '[bug] ',self asString,' accept: ',what asString.
	^self error: '#accept: out of control.'! !

! Object methodsFor: #comparing !
= anObject
	" Return true if the receiver is equal to anObject. "

	^self == anObject! !

! Object methodsFor: #comparing !
~= anObject
	" Return true if the receiver is not equal to anObject. "

	^(self = anObject) == false! !

! Object methodsFor: #initialize !
initialize
	" Private - Initialize the receiver.
	The default implementation do nothing.
	This method can be refined by subclasses to support creation time initialization of collaborators.
	"! !

! Object methodsFor: #accessing  !
value
	" Return the receiver. "

	^self! !

! Object methodsFor: #identity  !
yourself
	" Return the receiver. "

	^self! !

! Object methodsFor: #accessing !
class
	" Return the class of the receiver. "

	^self basicAt: '$klass'! !

! Object methodsFor: #accessing !
size
	" Return the size of the receiver.
	The default implementation return zero.
	This method can be refined by subclasses to support indexed access.
	"

	^0! !

! Object methodsFor: #copying !
copy
	" Return a copy of the receiver. "

	^self shallowCopy! !

! Object methodsFor: #copying !
shallowCopy
	" Return a deep copy of the receiver. "

	| result |
	result := self class basicNew.
	self class allInstVarNamesDo: [:instVarName|
		result	basicAt: $@,instVarName
			put: (self basicAt: $@,instVarName)
	].
	^result! !

! Object methodsFor: #copying !
deepCopyOf: what
	" Private - Returns a deep copy of what. "

	what isNil ifTrue: [ ^what ].
	(self isObject: what) ifTrue: [ ^what deepCopy ].
	^what! !

! Object methodsFor: #copying !
deepCopy
	" Return a deep copy of the receiver. "

	| result value |
	result := self class basicNew.
	self class allInstVarNamesDo: [:iv|
		value := self deepCopyOf: (self basicAt: $@,iv).
		result	basicAt: $@,iv put: value
	].
	^result! !

! Object methodsFor: #converting !
-> anObject
	" Return an association of the receiver to anObject. "

	^Association key: self value: anObject! !

! Object methodsFor: #converting !
asString
	" Return the receiver as a String. "

	^self printString! !

! Object methodsFor: #converting !
toString
	" Convert the receiver to a String. "

	^'{st:a',self class name,$}! !

! Object methodsFor: #converting !
asJavascript
	" Return the javascript representation of the receiver.
	The default implementation return the receiver as a String.
	This method must be refined by subclasses implementing literal representation in javascript.
	"

	^self asString! !

! Object methodsFor: #converting !
asJSON
	" JSON - Return the JSON representation of the receiver. "

	<primitive: 'primAsJSON' module: 'SKObject'>
	^self primitiveFailed! !

! Object methodsFor: #converting !
escapedCode
	" Return the code to reproduce receiver from (javascript) code. "

	^self asJavascript! !

! Object methodsFor: #private !
basicPerform: jsSelector withArguments: anArray
	" Private - Basic implementation of #perform... "
	<primitive: 'primPerform' module: 'SKObject'>
	^self primitiveFailed! !

! Object methodsFor: #perform !
perform: aSymbol
	" Return the result of sending message aSymbol to the receiver. "

	^self perform: aSymbol withArguments: #()! !

! Object methodsFor: #perform !
perform: aSymbol with: argument
	" Return the result of sending message aSymbol to the receiver. "

	^self perform: aSymbol withArguments: (Array with: argument)! !

! Object methodsFor: #perform !
perform: aSymbol withArguments: aCollection
	" Return the result of sending message aSymbol to the receiver. "

	aSymbol numberOfArguments = aCollection size ifFalse: [
		^self error: 'Invalid arguments size'
	].
	^self basicPerform: aSymbol asSelector withArguments: aCollection asArray! !

! Object methodsFor: #accessing !
basicAt: aString
	" Return the property of the receiver known as aString (or nil). "

	<primitive: 'primBasicAt' module: 'SKObject'>
	^self primitiveFailed! !

! Object methodsFor: #accessing !
basicAt: aString ifAbsent: aBlock
	" Return the property of the receiver known as aString (or the result of evaluating aBlock). "

	<primitive: 'primBasicAtIfAbsent' module: 'SKObject'>
	^self primitiveFailed! !

! Object methodsFor: #accessing !
basicAt: aString put: anObject
	" Set the property of the receiver known as aString. "

	<primitive: 'primBasicAtPut' module: 'SKObject'>
	^self primitiveFailed! !

! Object methodsFor: #accessing !
basicAt: aString ifAbsentPut: aBlock
	" Return the property of the receiver known as aString (or set it with the result of evaluating aBlock). "

	^self basicAt: aString ifAbsent: [ self basicAt: aString put: aBlock value ]! !

! Object methodsFor: #accessing !
instVarAt: instVarName
	" Return the internal collaborator of the receiver known as instVarName. "

	instVarName isNumber ifTrue: [
		^self instVarAt: (self class allInstVarNames at: instVarName)
	].
	^self basicAt: '@', instVarName! !

! Object methodsFor: #accessing !
instVarAt: instVarName put: anObject
	" Set the internal collaborator of the receiver known as instVarName to anObject. "

	instVarName isNumber ifTrue: [
		^self instVarAt: (self class allInstVarNames at: instVarName) put: anObject
	].
	^self basicAt: '@', instVarName put: anObject! !

! Object methodsFor: #accessing !
stPropertyPrefix
	"The prefix used to namespace Smalltalk properties."

	^'@property_'! !


! Object methodsFor: #accessing !
jsPropertyNames
	"Return the names of all of the javascript properties."

	<primitive:'primJsPropertyNames' module:'SKObject'>
	^self primitiveFailed. ! !

! Object methodsFor: #accessing !
propertyTable
	"Access a read-only copy of all of the
	properties of the receiver."

	| properties propertyNames table |
	properties := self jsPropertyNames
		select:
			[:each | each beginsWith: self stPropertyPrefix].
	propertyNames := properties
		collect:
			[:each | each copyFrom: self stPropertyPrefix size + 1 to: each size].
	table := Dictionary new.
	propertyNames do: [:each | table at: each put: (self propertyAt: each)].
	^table! !


! Object methodsFor: #accessing !
propertyAt: aString
	"Access a the specified property. Return nil if it
	does not exist."

	^self propertyAt: aString ifAbsent: [nil]! !


! Object methodsFor: #accessing !
propertyAt: aString ifAbsent: aBlock
	"Access a property value. If the property,
	does not exist, return the value of aBlock."

	<primitive: 'primPropertyAtIfAbsent' module: 'SKObject'>
	^self primitiveFailed. ! !

! Object methodsFor: #accessing !
propertyAt: aString put: aValue
	"Set the value of a property."

	<primitive: 'primPropertyAtPut' module: 'SKObject'>
	^self primitiveFailed. ! !

! Object methodsFor: #accessing !
propertyAt: aString ifAbsentPut: aBlock
	"Attempt to access an object property. If it does not exist,
	evalaute aBlock, setting the property to that value. Return the
	value of the property."

	^self
		propertyAt: aString
		ifAbsent: [self propertyAt: aString put: aBlock value]! !

! Object methodsFor: #error !
error: aString
	" Return the result of managing error(aString) in the receiver. "

	^Error signal: aString! !

! Object methodsFor: #error !
osError
	"An error has occurred related to the native operating system."

	^self error: 'OS Error'! !

! Object methodsFor: #error !
subclassResponsibility
	" Private - The concrete implementation on the receiver is not complete. "

	^self subclassResponsibility: nil! !

! Object methodsFor: #error !
implementedBySubclass
	" Private - The concrete implementation on the receiver is not complete. "

	^self subclassResponsibility! !

! Object methodsFor: #error !
shouldNotImplement
	" The receiver received a message that is not expected. "

	^self shouldNotImplement: nil! !

! Object methodsFor: #error !
invalidMessage
	" The receiver received a message that is invalid (not expected for this object). "

	^self invalidMessage: nil! !

! Object methodsFor: #error !
subclassResponsibility: aSelector
	" Private - The concrete implementation on the receiver is not complete. "

	^self error:
		 'Implementation of'
		,(aSelector isNil ifTrue: [' '] ifFalse: [' #',aSelector])
		,' is a responsibility of the subclass(',self class name,').'! !

! Object methodsFor: #error !
implementedBySubclass: aSelector
	" Private - The concrete implementation on the receiver is not complete. "

	^self subclassResponsibility: aSelector! !

! Object methodsFor: #error !
shouldNotImplement: aSelector
	" The receiver received a message that is not expected. "

	^self error:
		 'Message'
		,(aSelector isNil ifTrue: [' '] ifFalse: [' #',aSelector])
		,' should not be implemented for instances of ', self class name! !

! Object methodsFor: #error !
invalidMessage: aSelector
	" The receiver received a message that is invalid (not expected for this object). "

	^self error:
		 'Message'
		,(aSelector isNil ifTrue: [' '] ifFalse: [' #',aSelector])
		,' should not be sent to instances of ', self class name! !

! Object methodsFor: #private !
smalltalkErrorOf: aNativeException
	" Private, Internal - Return anException associated with a native(javascript) exception. "

	| result |
	(self isObject: aNativeException) ifTrue: [
		(aNativeException isKindOf: Exception) ifTrue: [ ^aNativeException ].
		^Error new messageText: aNativeException
	].
	result := aNativeException basicAt: #smalltalkError.
	result notNil ifTrue: [ ^result ].
	^Error new
		messageText: (aNativeException basicAt: #description) || (aNativeException basicAt: #message);
		nativeException: aNativeException;
		yourself! !

! Exception methodsFor: #private !
nativeException
	" Private, Internal - Return the native exception associated with the receiver (or nil). "

	^self basicAt: '@nativeException'! !

! Exception methodsFor: #private !
nativeException: native
	" Private, Internal - Set the native exception associated with the receiver. "

	^self basicAt: '@nativeException' put: native! !

! Exception methodsFor: #stack !
stack
	" Return a stack trace string. "

	| native |
	native := self nativeException.
	native isNil ifTrue: [ ^'' ].
	^(native basicAt: #stack) || ''! !

! Exception methodsFor: #converting !
toString
	" Convert the receiver to a String. "

	| txt stk |
	txt := self messageText. txt isNil ifTrue: [ txt := '' ].
	stk := self stack.
	stk isNil ifTrue: [ stk := '' ] ifFalse: [ stk := '
',stk ].
	^'{st:a' ,self class name ,' - ' ,txt ,$} ,stk! !

! Object methodsFor: #printing !
printOn: aStream
	"Print the receiver onto the provided Stream."

	aStream
		nextPutAll: 'a ';
		nextPutAll: self class name! !

! Object methodsFor: #printing !
printString
	" Return a printable representation of the receiver. "

	| stream |
	stream := '' stream.
	self printOn: stream.
	^stream contents! !

! Object methodsFor: #testing !
isKindOf: aClass
	" Return true if the receiver is kind of aClass. "

	^self class inheritsFrom: aClass! !

! Object methodsFor: #testing !
isMemberOf: aClass
	" Return true if the receiver is member of aClass. "

	^self class == aClass! !

! Object methodsFor: #testing !
ifNil: aBlock
	" Return the receiver if it is not nil, or the result of evaluating aBlock (if it is nil). "

	^self! !

! Object methodsFor: #testing !
ifNil: aBlock ifNotNil: anotherBlock
	" Return the result of evaluating aBlock if the receiver is nil or the result of evaluating anotherBlock (if not nil). "

	^anotherBlock value! !

! Object methodsFor: #testing !
ifNotNil: aBlock
	" Return the result of evaluating aBlock if the receiver is not nil, or nil if it is nil. "

	^aBlock value! !

! Object methodsFor: #testing !
ifNotNil: aBlock ifNil: anotherBlock
	" Return the result of evaluating aBlock if the receiver is not nil, or the result of evaluating anotherBlock if it is nil. "

	^aBlock value! !

! Object methodsFor: #testing !
isNil
	" Return true if the receiver is nil. "

	^false! !

! Object methodsFor: #testing !
notNil
	" Return true if the receiver is not nil. "

	^self isNil not! !

! Object methodsFor: #testing !
isClass
	" Return true if the receiver is a Class. "

	^false! !

! Object methodsFor: #testing !
isMetaclass
	" Return true if the receiver is a metaclass. "

	^false! !

! Object methodsFor: #testing !
isNumber
	" Return true if the receiver is a Number. "

	^false! !

! Object methodsFor: #testing !
isString
	" Return true if the receiver is a String. "

	^false! !

! Object methodsFor: #testing !
isArray
	" Return true if the receiver is an Array. "

	^false! !

! Object methodsFor: #testing !
isObject: anObject
	" Return true if anObject is a smalltalk object.
	Return false if the object is foreign (e.g. javascript) object."

	<primitive: 'primIsObject' module: 'SKObject'>
	^self primitiveFailed. ! !

! Object methodsFor: #testing !
isCollection
	"Return true if the receiver is a Collection."

	^false! !

 ! Object methodsFor: #testing !
isDateTime
	"Return true if the receiver is a DateTime."

	^false! !

! Object methodsFor: #testing !
isInteger
	"Return true if the receiver is an Integer."

	^false! !

! Object methodsFor: #testing !
isFloat
	"Return true if the receiver is a Float."

	^false! !

! Object methodsFor: #testing !
isBoolean
	"Return true if the receiver is a Boolean."

	^false! !

 ! Object methodsFor: #testing !
isMagnitude
	"Return true if the receiver is a Magnitude."

	^false! !

 ! Object methodsFor: #testing !
isDictionary
	"Return true if the receiver is a Float."

	^false! !

! Object methodsFor: #testing !
isSymbol
	"Return true if the receiver is a Symbol."

	^false! !

 ! Number methodsFor: #testing !
isFloat
	"Return whether the reciever is a Float."

	^self isInteger not! !

! Number methodsFor: #testing !
isInteger
	" Return true if the receiver is an Integer. "

	<primitive: 'primIsInteger' module: 'SKNumber'> ! !

! Number methodsFor: #testing !
isMagnitude
	" Return true if the receiver is a magnitude. "

	^true! !

! Number methodsFor: #testing !
positive
	"Return whether the receiver is >= 0."

	^self >= 0! !


! Number methodsFor: #testing !
strictlyPositive
	"Return whether the receiver is >0."

	^self > 0! !

! Object methodsFor: #utilities !
typeOf: jsObject
	" Return the type of (javascript)Object. "

	<primitive: 'primTypeOf' module: 'SKObject'>
	^self primitiveFailed ! !

! Object methodsFor: #messages !
methodFor: aSymbol
	" Return the method implementing aSymbol (or nil). "

	^self class >>> aSymbol! !

! Object methodsFor: #messages !
respondsTo: aSymbol
	" Return true if the receiver respond to message aSymbol. "

	^(self methodFor: aSymbol) notNil! !

! Object methodsFor: #accessing !
basicDelete: aString
	" Private - Basic implementation of deletion of property aString of the receiver. "

	<primitive: 'primBasicDelete' module: 'SKObject'>
	^self primitiveFailed. ! !

! Object methodsFor: #dnu !
doesNotUnderstand: aMessage
	" Private - Basic implementation of a message sent and not understood by the receiver. "

	^MessageNotUnderstood new
		receiver: self;
		message: aMessage;
		signal! !

! Object methodsFor: #dnu !
dnu: selector withArguments: anArray
	" Private - Basic implementation of a message sent and not understood by the receiver. "

	^self doesNotUnderstand: (Message
		selector: selector
		arguments: anArray)! !

! Object methodsFor: #converting !
json
	" Return the receiver as a hash object. "

	^self asJSONObject! !

! Object methodsFor: #converting !
asJson: anObject
	" Return anObject as a hash object. "

	anObject isNil ifTrue: [ ^nil json ].
	^(self isObject: anObject)
		ifTrue: [ anObject json ]
		ifFalse: [ anObject ]! !

! Object methodsFor: #converting !
asJSONObject
	" Return the mapping of the receiver to JSON structure. "

	| result |
	result := self smalltalk emptyJSONObject.
	self jsonFieldsDo: [:field :value|
		(value notNil or: [ self jsonExportNil ]) ifTrue: [
			result basicAt: field put: (self asJson: value)
		].
	]	ignoring: self jsonHiddenNames.
	^result! !

! Object methodsFor: #converting !
jsonHiddenNames
	" Private - Return the names of the fields to skip when mapping the receiver to JSON structure. "

	^#()! !

! Object methodsFor: #converting !
jsonFieldsDo: aBlock ignoring: ignored
	" Private - Evaluates a(TwoArguments)Block with the fields to map the receiver to JSON structure. "

	^self class allInstVarNamesDo: [:each|
		(ignored notNil and: [ ignored includes: each ]) ifFalse: [
			aBlock value: each value: (self instVarAt: each)
		].
	]! !

! Object methodsFor: #converting !
jsonExportNil
	" Private - Return true if the receiver export nil values. "

	^false! !

! Object methodsFor: #testing !
mustBeBoolean
	" Signal an error if the receiver is not a Boolean. "

	^self error: 'Must be boolean.'! !

! Boolean methodsFor: #testing !
mustBeBoolean
	" Signal an error if the receiver is not a Boolean. "

	^self! !

Object
 subclass: #Smalltalk
 instanceVariableNames: ''
 category: #Kernel!

! Smalltalk class methodsFor: #accessing !
current
	" Return the current smalltalk system instance. "

	^self smalltalk! !

! Smalltalk class methodsFor: #accessing !
at: aGlobalName ifAbsent: aBlock
	" Return the global known as aGlobalName in the receiver or the result of evaluating aBlock. "

	^self current basicAt: aGlobalName ifAbsent: aBlock! !

! Smalltalk class methodsFor: #accessing !
includesKey: aGlobalName
	" Returns true if the global aGlobalName is defined in the receiver. "

	^((Smalltalk current
		basicAt: aGlobalName ifAbsent: [nil])
		isNil) not! !

! Smalltalk class methodsFor: #accessing !
at: aGlobalName
	" Return the global known as aGlobalName in the receiver or nil. "

	^self current basicAt: aGlobalName ifAbsent: [ nil ]! !

! Smalltalk class methodsFor: #accessing !
at: aGlobalName put: anObject
	" Set the global known as aGlobalName in the receiver top anObject. "

	^self current basicAt: aGlobalName put: anObject! !

! Smalltalk class methodsFor: #accessing !
at: aGlobalName ifAbsentPut: aBlock
	" Return the global known as aGlobalName in the receiver or the result of evaluating aBlock.
	Set the global to return value if was absent.
	"

	^self at: aGlobalName ifAbsent: [
		self at: aGlobalName put: aBlock value
	]! !

! Smalltalk class methodsFor: #removing !
removeKey: aKey ifAbsent: aBlock
	" Remove the binding at aKey. "

	^self current removeKey: aKey ifAbsent: aBlock! !

! Smalltalk class methodsFor: #accessing !
@ aGlobalName
	" Return a collection with the objects bound to aGlobalName (or an empty collection if global is not defined).
	It is used in expressions like:
		Smalltalk @ #MyGlobal do: [:global| ... ]
	"

	| binding |
	binding := self at: aGlobalName ifAbsent: [ ^Array new ].
	^Array with: binding! !

! Smalltalk class methodsFor: #accessing !
definePool: poolName with: tuples
	" Define the pool dictionary from tuples specification. "

	^self current definePool: poolName with: tuples! !

! Smalltalk class methodsFor: #accessing !
poolDictionary: aPoolName ifAbsent: aBlock
	" Return the pool dictionary named aPoolName or the result of evaluating aBlock. "

	^self current poolDictionary: aPoolName ifAbsent: aBlock! !

! Smalltalk class methodsFor: #accessing !
objectAt: aName ifAbsent: aBlock
	" Return the (global scoped) smalltalk object at aName or the result of evaluating aBlock (if undefined or not an Object instance). "

	^self current objectAt: aName ifAbsent: aBlock! !

! Smalltalk class methodsFor: #accessing !
jsObjectAt: aName ifAbsent: aBlock
	" Return the (global scoped) javascript object at aName or the result of evaluating aBlock (if undefined). "

	^self current jsObjectAt: aName ifAbsent: aBlock! !

! Smalltalk class methodsFor: #accessing !
jsObjectAt: aName
	" Return the (global scoped) javascript object at aName. "

	^self jsObjectAt: aName ifAbsent: [ self error: 'Undefined ',aName ]! !

! Smalltalk class methodsFor: #accessing !
global
	" Return the global (javascript) object. "

	^self smalltalk jsGlobal! !

! Smalltalk class methodsFor: #accessing !
classes
	" Return the classes defined in current instance. "

	^self current classes! !

! Smalltalk class methodsFor: #accessing !
rootClasses
	" Return the collection of topLevel classes in the receiver. "

	^self current rootClasses! !

! Smalltalk class methodsFor: #tools !
implementorsOf: aSymbol
	" Return a collection of methods implementing aSymbol. "

	^self current implementorsOf: aSymbol! !

! Smalltalk class methodsFor: #tools !
gc
	" Collect garbage. "

	(self jsObjectAt: #gc ifAbsent: [ ^false ]) value.
	^true! !

! Smalltalk methodsFor: #accessing !
globalAt: aKey
	" Return the global at aKey (or nil). "

	^self basicAt: aKey! !

! Smalltalk methodsFor: #accessing !
globalAt: aKey ifAbsent: aBlock
	" Return the global at aKey (or the result of evaluating aBlock). "

	^self basicAt: aKey ifAbsent: aBlock! !

! Smalltalk methodsFor: #accessing !
rootClasses
	" Return the collection of topLevel classes in the receiver. "

	^self classes select: [:each| each superclass isNil ]! !

! Smalltalk methodsFor: #testing !
implementorsOf: aSymbol
	" Return a collection of methods implementing aSymbol. "

	^self rootClasses inject: #() into: [:total :each|
		total ,(each implementorsOf: aSymbol)
	]! !

! Smalltalk methodsFor: #accessing !
objectAt: aName ifAbsent: aBlock
	" Return the (global scoped) smalltalk object at aName or the result of evaluating aBlock (if undefined or not an Object instance). "

	| result |
	result := self jsObjectAt: aName ifAbsent: aBlock.
	^(result basicAt: #yourself) notNil ifTrue: [ result ]! !

! Smalltalk methodsFor: #accessing !
jsObjectAt: aName ifAbsent: aBlock
	" Return the (global scoped) javascript object at aName or the result of evaluating aBlock (if undefined). "

	^Smalltalk global basicAt: aName ifAbsent: aBlock! !

! Smalltalk methodsFor: #accessing !
jsObjectAt: aName
	" Return the (global scoped) javascript object at aName. "

	^self jsObjectAt: aName ifAbsent: [ self error: 'Undefined ',aName ]! !

! Smalltalk methodsFor: #removing !
removeKey: aKey ifAbsent: aBlock
	" Remove the binding at aKey. "

	self basicAt: aKey ifAbsent: [ ^aBlock value ].
	self basicDelete: aKey! !

! Smalltalk methodsFor: #accessing !
definePool: poolName
	" Define the pool dictionary (if it is not defined yet). "

	^self definePool: poolName with: Array new! !

! Smalltalk methodsFor: #accessing !
poolDictionary: aPoolName ifAbsent: aBlock
	" Return the pool dictionary named aPoolName or the result of evaluating aBlock. "

	^self basicAt: aPoolName ifAbsent: [ aBlock value ]! !

! Smalltalk methodsFor: #accessing !
poolDictionary: aPoolName
	" Return the pool dictionary named aPoolName. "

	^self poolDictionary: aPoolName ifAbsent: [
		"self error: 'Missing Pool dictionary: ',aPoolName. "
		self definePool: aPoolName
	]! !

! Smalltalk methodsFor: #compiling !
printDefinePool: poolName with: tuples
	" DEBUG - Dump definition of the pool dictionary. "

	self print: 'smalltalk.definePool_with_("',poolName,'",['.
	tuples do: [:tuple|
		tuple isArray ifTrue: [
			self print: '	[',tuple first printString,',',tuple last asJavascript,'],'
		] ifFalse: [
			self print: '	',tuple asJavascript ,','
		]
	].
	self print: '	]);'.! !

! Smalltalk methodsFor: #compiling !
definePool: poolName with: tuples
	" Define the pool dictionary. "

	| dictionary offset |
	dictionary := self basicAt: poolName ifAbsent: [
		self basicAt: poolName put: PoolDictionary new
	].
	offset := 0.
	tuples do: [:each|
		each isArray ifTrue: [
			dictionary at: each first put: each last.
			each last isNumber ifTrue: [ offset := each last + 1 ].
		] ifFalse: [
			each isNumber ifTrue: [ offset := each ]
			ifFalse: [
				dictionary at: each put: offset.
				offset := offset + 1.
			]
		]
	].
	^dictionary! !

! Smalltalk methodsFor: #accessing !
state
	" Return the state of the receiver (or nil). "

	^self basicAt: '$state'! !

! Smalltalk methodsFor: #accessing !
state: aState
	" Set the state of the receiver. "

	self basicAt: '$state' put: aState! !

! Smalltalk methodsFor: #accessing !
withState: aState do: aBlock
	" Set the state of the receiver to aState during execution of aBlock. "

	| old |
	old := self state.
	^[	self state: aState.
		aBlock value
	] ensure: [
		self state: old
	]! !

! Smalltalk methodsFor: #javascript !
eval: jsExpression
	" Return the result of evaluating a javascript expression in global context. "

	<primitive:'primEval' module:'SKSmalltalk'>
	^self primitiveFailed ! !

! Smalltalk methodsFor: #javascript !
eval: jsExpression as: aState
	" Return the result of evaluating a javascript expression in global context.
	The state of the system change to state while evaluating the expression.
	"

	^self withState: aState do: [ self eval: jsExpression ]! !

! Smalltalk methodsFor: #tools !
removeSources
	" Remove all development sources of the receiver. "

	self classes do: [:each | each removeSources ]! !

! Smalltalk methodsFor: #json !
readJSON: anObject
	" Return an object read from JSON map object anObject. "

	^self readJSObject: anObject! !

! Smalltalk methodsFor: #copying !
shallowCopy
	" Return a shallow copy of the receiver. "

	^self! !

! Smalltalk methodsFor: #copying !
deepCopy
	" Return a deep copy of the receiver. "

	^self! !

Object
 subclass: #Behavior
 instanceVariableNames: ''
 category: #Kernel!

! Behavior methodsFor: #instantiation !
new
	" Return an instance of the receiver. "

	^self basicNew initialize! !

! Behavior methodsFor: #instantiation !
new: size
	" Return an instance of the receiver of specified size. "

	^self basicNew: size! !

! Behavior methodsFor: #instantiation !
basicNew: size
	" Return an instance of the receiver of specified size. "

	^self invalidMessage: #basicNew:! !

! Behavior methodsFor: #instantiation !
basicNew
	" Return a new (non-initialized) instance of the receiver. "

	<primitive: 'primBasicNew' module: 'SKObject'>
	^self primitiveFailed ! !

! Behavior methodsFor: #accessing !
name
	" Return the name of the receiver. "

	^self basicAt: '$className'! !

! Behavior methodsFor: #accessing !
superclass
	" Return the superclass of the receiver. "

	^self basicAt: '$superclass'! !

! Behavior methodsFor: #accessing !
subclasses
	" Return the subclasses of the receiver. "

	^self smalltalk subclasses: self! !

!Behavior methodsFor: #testing !
allSubclasses
	" Return all the subclasses of the receiver. "

	| result |
	result := Array new.
	self allSubclassesDo: [:each| result add: each ].
	^result! !

!Behavior methodsFor: #testing !
allSubclassesDo: aBlock
	" Evaluates aBlock with all the subclasses of the receiver. "

	self smalltalk allSubclassesDo: self value: aBlock! !

!Behavior methodsFor: #testing !
withAllSubclassesDo: aBlock
	" Evaluates aBlock with the receiver and all the subclasses. "

	aBlock value: self.
	self allSubclassesDo: aBlock! !

! Behavior methodsFor: #accessing !
withAllSubclasses
	" Return a collection with the receiver and all subclasses. "

	| result |
	result := Array with: self.
	self allSubclassesDo: [:each| result add: each ].
	^result! !

!Behavior methodsFor: #accessing !
allSuperclassesDo: aBlock
	" Evaluate aBlock with the superclasses of the receiver.
	The superclasses are walked in inverse hierarchical order, i.e class Object is last.
	"

	| current |
	current := self superclass.
	[ current notNil ] whileTrue: [
	        aBlock value: current.
		current := current superclass.
	]! !

!Behavior methodsFor: #accessing !
withAllSuperclassesDo: aBlock
	" Evaluate aBlock with the receiver and it's superclasses.
	The superclasses are walked in inverse hierarchical order, i.e class Object is last.
	"

	aBlock value: self.
	^self allSuperclassesDo: aBlock! !

!Behavior methodsFor: #accessing !
withAllSuperclasses
	" Return a collection with the receiver and all superclasses. "

	^(Array with: self) , self allSuperclasses! !

!Behavior methodsFor: #accessing !
allSuperclasses
	" Return a collection of all the superclasses of the receiver.
	The superclasses are in inverse hierarchical order, i.e class Object is last.
	"

	| result |
	result := Array new.
	self allSuperclassesDo: [:each| result add: each ].
	^result! !

! Behavior methodsFor: #testing !
inheritsFrom: aClass
	" Return true if the receiver inherits from aClass. "

	self == aClass ifTrue: [ ^true ].
	self allSuperclassesDo: [:each|
		aClass == each ifTrue: [ ^true ]
	].
	^false! !

! Behavior methodsFor: #accessing !
prototype
	" Return the prototype of the receiver (or nil). "

	<primitive: 'primPrototype' module: 'SKBehavior'>
	self primitiveFailed! !

! Behavior methodsFor: #accessing !
primitiveConstructor
	" Return the prototype of the receiver (or nil). "

	<primitive: 'primConstructor' module: 'SKBehavior'>
	self primitiveFailed! !

! Behavior methodsFor: #accessing !
constructorName
	" Return the name of the constructor of the receiver (or nil). "

	| result fn |
	fn := self primitiveConstructor.
	result := fn basicAt: #name.
	result notNil ifTrue: [
		result isEmpty ifTrue: [ ^nil ].
		result = '$scarletConstructor' ifTrue: [ ^nil ].
		^result
	].
	result := (fn toString upTo: $() asArrayOfSubstrings.
	result size = 2 ifFalse: [ ^nil ].
	^result last! !

! Behavior methodsFor: #accessing !
methodsDo: aBlock
	" Evaluates aBlock for all the methods defined by the receiver. "

	<primitive: 'primMethodsDo' module: 'SKBehavior'>
	^self primitiveFailed. ! !

!Behavior methodsFor: #accessing !
selectorsDo: aBlock
	" Evaluate aBlock for all the selectors implemented by the receiver. "

	<primitive: 'primSelectorsDo' module: 'SKBehavior'>
	^self primitiveFailed. ! !

! Behavior methodsFor: #accessing !
methodDictionary
	" Return a dictionary with the methods implemented by the receiver. "

	| result |
	result := PoolDictionary new.
	self methodsDo: [:each| result at: each selector put: each ].
	^result! !

!Behavior methodsFor: #accessing !
selectors
	" Return the selectors implemented by the receiver. "

	| result |
	result := Array new.
	self selectorsDo: [:each| result add: each ].
	^result! !

!Behavior methodsFor: #testing !
implements: aSymbol
	" Return true if the receiver implements message aSymbol. "

	<primitive: 'primImplements' module: 'SKBehavior'>
	^self primitiveFailed. ! !

!Behavior methodsFor: #accessing !
compiledMethodAt: aSymbol
	" Return the compiled method at aSymbol implemented by the receiver (or nil). "

	<primitive: 'primCompiledMethodAt' module: 'SKBehavior'>
	^self primitiveFailed. ! !

!Behavior methodsFor: #accessing !
>> aSymbol
	" Return the method at aSymbol (or nil if not implemented by the receiver). "

	^self compiledMethodAt: aSymbol! !

!Behavior methodsFor: #accessing !
>>> aSymbol
	" Return the method at aSymbol searching up in receiver's hierarchy (or nil if not implemented by the receiver nor its superclasses). "

	| result |
	result := self compiledMethodAt: aSymbol.
	(result isNil and: [self superclass notNil]) ifTrue: [
		^self superclass >>> aSymbol
	].
	^result! !

!Behavior methodsFor: #accessing !
instVarNames
	" Return the instance variable names of the receiver. "

	^self basicAt: '$iVarNames'! !

!Behavior methodsFor: #accessing !
allInstVarNames
	" Return all of the instance variable names defined in the receiver and its superclasses. "

	| result |
	result := self instVarNames.
	self allSuperclassesDo: [ :each | result := each instVarNames , result ].
	^result! !

! Behavior methodsFor: #accessing !
instanceVariableNames
	" Return the instance variable names defined by the receiver. "

	^self basicAt: '$iVarNames'! !

!Behavior methodsFor: #accessing !
propertyNames
	" Return the property names of the receiver. "

	^self basicAt: '$propertyNames' ifAbsent: [ Array new ]! !

! Behavior methodsFor: #accessing !
propertyNames: anArray
	" Set the property names of the receiver. "

	anArray isNil ifTrue: [ ^self basicDelete: '$propertyNames' ].
	^self basicAt: '$propertyNames' put: anArray! !

! Behavior methodsFor: #accessing !
allPropertyNamesDo: aBlock
	" Evaluates aBlock for the property names defined in the receiver and its superclasses. "

	self propertyNames do: aBlock.
	self allSuperclassesDo: [ :each | each propertyNames do: aBlock ].! !

! Behavior methodsFor: #accessing !
allInstVarNamesDo: aBlock
	" Evaluates aBlock for the instance variable names defined in the receiver and its superclasses. "

	self instVarNames do: aBlock.
	self allSuperclassesDo: [ :each | each instVarNames do: aBlock ].! !

! Behavior methodsFor: #accessing !
comment
	" Return the comment of the receiver. "

	^self instanceClass basicAt: '$comment' ifAbsent: [ '' ]! !

! Behavior methodsFor: #accessing !
comment: aString
	" Set the comment of the receiver. "

	self instanceClass basicAt: '$comment' put: aString! !

! Behavior methodsFor: #tools !
removeSources
	" Remove all development sources of the receiver. "

	self instanceClass removeSources! !

! Behavior methodsFor: #accessing !
poolDictionaryNames
	" Return the shared pool names of the receiver. "

	^self instanceClass poolDictionaryNames! !

! Behavior methodsFor: #accessing !
sharedPoolsAndNamesDo: aBlock
	" Execute aBlock for the pool dictionaries known by the receiver. "

	| pool |
	self instanceClass withAllSuperclassesDo: [:each|
		each poolDictionaryNames do: [:aName|
			pool := Smalltalk poolDictionary: aName ifAbsent: [ nil ].
			pool notNil ifTrue: [ aBlock value: aName value: pool ]
		].
	]! !

! Behavior methodsFor: #accessing !
sharedPoolsDo: aBlock
	" Execute aBlock for the pool dictionaries known by the receiver. "

	self sharedPoolsAndNamesDo: [:aName :aPool| aBlock value: aPool ]! !

! Behavior methodsFor: #accessing !
classVariablesDo: aBlock
	" Execute aBlock for the classVariables bindings known by the receiver. "

	| bindings |
	^self instanceClass withAllSuperclassesDo: [:each|
		bindings := each classVariables.
		bindings notNil ifTrue: [
			bindings associationsDo: [:assoc| aBlock value: assoc ]
		]
	]! !

! Behavior methodsFor: #accessing !
classVariableNamesDo: aBlock
	" Execute aBlock for the classVariable names known by the receiver. "

	| bindings |
	^self instanceClass withAllSuperclassesDo: [:each|
		bindings := each classVariables.
		bindings notNil ifTrue: [
			bindings keysDo: [:aName| aBlock value: aName ]
		]
	]! !

! Behavior methodsFor: #accessing !
classVariableAt: aName put: anObject
	" Set the classVariable of the receiver (or one of its superclasses) to anObject. "

	| bindings |
	self instanceClass withAllSuperclassesDo: [:each|
		bindings := each classVariables.
		bindings ifNotNil: [
			(bindings includesKey: aName)
				ifTrue: [^bindings at: aName put: anObject].
		]
	].
	self error: 'Undefined class variable ', aName ,' in ' , self name! !

! Behavior methodsFor: #accessing !
classVariableAt: aName ifAbsent: aBlock
	" Return the value of classVariable named aName. "

	| bindings |
	self instanceClass withAllSuperclassesDo: [:each|
		bindings := each classVariables.
		bindings ifNotNil: [
			(bindings includesKey: aName) ifTrue: [
				^bindings at: aName
			]
		]
	].
	^aBlock evaluate! !

! Behavior methodsFor: #accessing !
classVariableAt: aName
	" Return the value of classVariable named aName or generates an error. "

	^self classVariableAt: aName ifAbsent: [
		self error: 'Undefined class variable ',aName ,' in ' ,self name
	]! !

! Behavior methodsFor: #accessing !
pool: poolName variableAt: aName put: anObject
	" Set the pool Variable of the receiver to anObject. "

	| pool |
	pool := Smalltalk
		poolDictionary: poolName
		ifAbsent: [ ^self error: 'Undefined pool variable ',poolName ,' in ' ,self name ].
	^pool at: aName put: anObject! !

! Behavior methodsFor: #loading !
loadRequirementsInto: aCollection
	" Add the requirements to load the receiver from sources to aCollection.
	Default action do nothing, this method can be refined by the subclasses.
	"

	^self! !

! Behavior methodsFor: #methods !
removeSelectors: aCollection
	" Remove the methods for messages in aCollection, implemented by the receiver. "

	aCollection do: [:each| self removeSelector: each ]! !

! Behavior methodsFor: #private !
removeCompiledMethod: aMethod
	" Remove aMethod from the receiver. "

	self smalltalk removeMethod: self method: aMethod! !

! Behavior methodsFor: #private !
missingImplementorFor: jsSelector
	" Private - Handle the situation where there is no implementor for jsSelector.
	This can happen when there is no implementation for jsSelector and the message
	 has been dispatched through a superSend.
	"

	^self error: 'Missing implementor for '
		, jsSelector asStSelector asLiteral
		,' in ',self name! !

! Behavior methodsFor: #methods !
removeSelector: aSelector
	" Remove the method for message aSelector implemented by the receiver. "

	| method |
	method := self compiledMethodAt: aSelector.
	method notNil ifTrue: [ self removeCompiledMethod: method ].! !

! Behavior methodsFor: #remove !
removeFromSystem
	" Remove the receiver from system. "

	self instanceClass removeFromSystem! !

! Behavior methodsFor: #testing !
implementorsOf: aSymbol
	" Return a collection of methods of the receiver and its subclasses that implement aSymbol. "

	| result method |
	result := Array new.
	self withAllSubclassesDo: [:each |
		method := each >> aSymbol.
		method notNil ifTrue: [ result add: method ].
		method := each class >> aSymbol.
		method notNil ifTrue: [ result add: method ].
	].
	^result! !

! Behavior methodsFor: #converting !
asJSONObject
	" Return the mapping of the receiver to JSON structure. "

	^self! !

! Behavior methodsFor: #copying !
shallowCopy
	" Return a shallow copy of the receiver. "

	^self! !

! Behavior methodsFor: #copying !
deepCopy
	" Return a deep copy of the receiver. "

	^self! !

! Behavior methodsFor: #converting !
toString
	" Convert the receiver to a String. "

	^'{st:',self name,$}! !

Behavior
 subclass: #Class
 instanceVariableNames: ''
 category: #Kernel!

! Class methodsFor: #accessing !
category
	" Return the category of the receiver. "

	^self basicAt: '$category'! !

! Class methodsFor: #accessing !
category: aString
	" Set the category of the receiver. "

	self basicAt: '$category' put: aString! !

! Class methodsFor: #accessing !
classVariables
	" Return the class variables of the receiver. "

	| names |
	names := self basicAt: '$classVariableNames' ifAbsent: [].
	names isNil ifTrue: [ ^self basicAt: '$classVariables' ].
	self basicDelete: '$classVariableNames'.
	self classVariableNames: names.
	^self basicAt: '$classVariables'! !

! Class methodsFor: #accessing !
classVariables: aDictionary
	" Set the class variables of the receiver. "

	(aDictionary isNil or: [ aDictionary isEmpty ]) ifTrue: [
		^self basicDelete: '$classVariables'
	].
	^self basicAt: '$classVariables' put: aDictionary! !

! Class methodsFor: #accessing !
poolDictionaries
	" Return the poolDictionaries of the receiver (anArray or nil). "

	^self basicAt: '$poolDictionaries'! !

! Class methodsFor: #accessing !
poolDictionaries: anArray
	" Set the poolDictionaries of the receiver. "

	(anArray notNil and: [ anArray isEmpty ]) ifTrue: [
		^self poolDictionaries: nil
	].
	^self basicAt: '$poolDictionaries' put: anArray! !

! Class methodsFor: #accessing !
classVariableNames
	" Return the class variable names of the receiver. "

	^self classVariables isNil
		ifTrue: [ Array new ]
		ifFalse: [ self classVariables keys ]! !

! Class methodsFor: #accessing !
classVariablesString
	" Return the class variable names of the receiver as aString. "

	^(self classVariableNames inject: ''
		into: [:total :each| total , each , ' ' ]
		) trimBlanks! !

! Class methodsFor: #accessing !
poolDictionaryNames
	" Return the pool dictionary names of the receiver. "

	^self poolDictionaries isNil
		ifTrue: [ Array new ]
		ifFalse: [ self poolDictionaries ]! !

! Class methodsFor: #accessing !
poolDictionariesString
	" Return the poolDictionary names of the receiver as aString. "

	^(self poolDictionaryNames inject: ''
		into: [:total :each| total , each , ' ' ]
		) trimBlanks! !

! Class methodsFor: #accessing !
classVariableNames: classVarNames
	" Set the variable names defined in the receiver. "

	| names dictionary old |
	classVarNames isNil ifTrue: [ ^self classVariables: nil ].
	names := classVarNames isString
		ifTrue: [ classVarNames asArrayOfSubstrings ]
		ifFalse: [ classVarNames ].
	dictionary := PoolDictionary new.
	old := self classVariables. old isNil ifTrue: [ old := dictionary ].
	names do: [:each|
		dictionary at: each put: (old at: each ifAbsent: [ nil ])
	].
	self classVariables: dictionary.! !

! Class methodsFor: #accessing !
poolDictionaryNames: poolVarNames
	" Set the pool dictionary names known to the receiver. "

	self poolDictionaries: (poolVarNames isString
		ifTrue: [ poolVarNames asArrayOfSubstrings ]
		ifFalse: [ poolVarNames ]).! !

! Class methodsFor: #instantiation !
subclass: aString instanceVariableNames: anotherString
	" Create a subclass of the receiver. "

	^self
		subclass: aString
		instanceVariableNames: anotherString
		category: nil! !

! Class methodsFor: #instantiation !
subclass: aString category: aCategory
	" Create a subclass of the receiver. "

	^self
		subclass: aString
		instanceVariableNames: ''
		category: aCategory! !

! Class methodsFor: #instantiation !
subclass: aString
instanceVariableNames: aString2
poolDictionaries: poolVarNames
category: aCategory
	" Create a new subclass of the receiver. "

	^self
		subclass: aString
		instanceVariableNames: aString2
		classVariableNames:''
		poolDictionaries: poolVarNames
		category: aCategory! !

! Class methodsFor: #instantiation !
subclass: aString instanceVariableNames: aString2 category: aString3
	" Create a subclass of the receiver. "

	^ClassBuilder new
		superclass: self
		subclass: aString
		instanceVariableNames: aString2
		category: aString3! !

! Class methodsFor: #testing !
isClass
	" Return true if the receiver is a Class. "

	^true! !

! Class methodsFor: #printing !
printString
	" Return a printable representation of the receiver. "

	^self name! !

! Class methodsFor: #accessing !
instanceClass
	" Return the receiver. "

	^self! !

! Class methodsFor: #renaming !
rename: aString
	" Rename the receiver to aString. "

	self smalltalk renameClass: self to: aString! !

! Class methodsFor: #remove !
removeFromSystem
	" Remove the receiver from system. "

	self subclasses do: [:each| each removeFromSystem ].
	self smalltalk removeClass: self! !

! Class methodsFor: #tools !
removeSources
	" Remove all development sources of the receiver. "

	self class methodsDo: [:each | each removeSources ].
	self methodsDo: [:each | each removeSources ].
	self comment: ''; category: #scarlet! !

Behavior
 subclass: #Metaclass
 instanceVariableNames: 'instanceClass'
 category: #Kernel!

! Metaclass methodsFor: #accessing !
instanceClass
	" Return the instance class of receiver. "

	^instanceClass! !

! Metaclass methodsFor: #accessing !
instanceVariableNames: aCollection
	" Set the instance variable names of the receiver. "

	ClassBuilder new
		class: self
		instanceVariableNames: aCollection! !

! Metaclass methodsFor: #testing !
isMetaclass
	" Return true if the receiver is a metaclass. "

	^true! !

! Metaclass methodsFor: #printing !
printString
	" Return a printable representation of the receiver. "

	^self instanceClass name, ' class'! !

! Metaclass methodsFor: #accessing !
poolDictionaries
	" Return the poolDictionaries of the receiver. "

	^self instanceClass poolDictionaries! !

! Metaclass methodsFor: #accessing !
classVariables
	" Return the class variables of the receiver. "

	^self instanceClass classVariables! !

Object
 subclass: #CompiledMethod
 instanceVariableNames: ' classField '
 category: #Kernel!

! CompiledMethod methodsFor: #accessing !
source
	" Return the source code of the receiver. "

	^self basicAt: '$source' ifAbsent: ['']! !

! CompiledMethod methodsFor: #accessing !
source: aString
	" Set the source code of the receiver. "

	self basicAt: '$source' put: aString! !

! CompiledMethod methodsFor: #accessing !
category
	" Return the category of the receiver. "

	^self basicAt: '$category' ifAbsent: ['']! !

! CompiledMethod methodsFor: #accessing !
category: aString
	" Set the category of the receiver. "

	self basicAt: '$category' put: aString! !

! CompiledMethod methodsFor: #accessing !
selector
	" Return the selector of the receiver. "

	^self basicAt: '$selector'! !

! CompiledMethod methodsFor: #accessing !
selector: aString
	" Set the selector of the receiver. "

	self basicAt: '$selector' put: aString! !

! CompiledMethod methodsFor: #accessing !
fn
	" Return the function of the receiver. "

	^self basicAt: '$fn'! !

! CompiledMethod methodsFor: #accessing !
fn: aBlock
	" Set the function of the receiver. "

	self basicAt: '$fn' put: aBlock! !

! CompiledMethod methodsFor: #accessing !
classField
	" Return the implementor of the receiver. "

	^classField! !

! CompiledMethod methodsFor: #accessing !
classField: aClass
	" Set the implementor of the receiver. "

	classField := aClass! !

! CompiledMethod methodsFor: #accessing !
generation
	" Returns the generation of the receiver. "

	^self basicAt: '$generation'! !

! CompiledMethod methodsFor: #accessing !
comment
	" Return the comment of the receiver. "

	^(self source stream upTo: $"; upTo: $") trimBlanks! !

! CompiledMethod methodsFor: #printing !
toString
	" Return the printable representation of the receiver. "

	^(classField isNil
		ifTrue: [classField toString]
		ifFalse: [classField name])
		,'>>#' ,self selector toString! !

! CompiledMethod methodsFor: #printing !
printString
	" Return the printable representation of the receiver. "

	^self toString! !

! CompiledMethod methodsFor: #converting !
asJSONObject
	" Return the mapping of the receiver to JSON structure. "

	^self! !

! CompiledMethod methodsFor: #copying !
shallowCopy
	" Return a shallow copy of the receiver. "

	^self! !

! CompiledMethod methodsFor: #copying !
deepCopy
	" Return a deep copy of the receiver. "

	^self! !

! CompiledMethod methodsFor: #tools !
removeSources
	" Remove all development sources of the receiver. "

	self source: ''; category: #scarlet! !

Object
 subclass: #Number
 instanceVariableNames: ''
 category: #Kernel!

! Number methodsFor: #comparing !
= anObject
    " Return true if the receiver is equal to anObject. "

	<primitive: 'primEquality' module: 'SKNumber'>
	^false! !

! Number methodsFor: #testing !
mustBeNumber
	" Signal an error if the receiver is not a Number.
	WARNING: this check impose a severe loss of perfomance (five times slower).
	If you are sure the operation/compare arguments are ok (a number),
	 comment the implementation of this method making the code empty.
	"

	"self isNaN ifTrue: [ super mustBeNumber ]"! !

! Object methodsFor: #testing !
mustBeNumber
	" Signal an error if the receiver is not a Number. "

	^self error: 'Must be a Number.'! !

! Number methodsFor: #comparing !
> aNumber
	" Return true if the receiver is greater to aNumber. "

	<primitive: 'primGreaterThan' module: 'SKNumber'>
	^self error: 'Must be a Number.' ! !

! Number methodsFor: #comparing !
< aNumber
	" Return true if the receiver is smaller to aNumber. "

	<primitive: 'primLessThan' module: 'SKNumber'>
	^self errror: 'Must be a Number.' ! !

! Number methodsFor: #comparing !
>= aNumber
	" Return true if the receiver is greater or equal to aNumber. "

	<primitive: 'primGreaterThanEqualTo' module: 'SKNumber'>
	^self error: 'Must be a Number.' ! !

! Number methodsFor: #comparing !
<= aNumber
	" Return true if the receiver is smaller or equal to aNumber. "

	<primitive: 'primLessThanEqualTo' module: 'SKNumber'>
	^self error: 'Must be a Number.'. ! !

! Number methodsFor: #accessing !
sign
	"Return 1 if the receiver is > 0.
	Return 0 if the receiver is 0.
	Return -1 if the receiver is < 0."

	self strictlyPositive
		ifTrue: [^1].
	self negative
		ifTrue: [^-1].
	^0! !

! Number methodsFor: #arithmetic !
+ aNumber
	" Return the result of operation on receiver and aNumber. "

	<primitive: 'primAddition' module: 'SKNumber'>
	^self error: 'Must be a Number.'. ! !

! Number methodsFor: #arithmetic !
- aNumber
	" Return the result of operation on receiver and aNumber. "

	<primitive: 'primSubtraction' module: 'SKNumber'>
	^self error: 'Must be a Number.'. ! !

! Number methodsFor: #arithmetic !
* aNumber
	" Return the result of operation on receiver and aNumber. "

	<primitive: 'primMultiplication' module: 'SKNumber'>
	^self error: 'Must be a Number.'. ! !

! Number methodsFor: #arithmetic !
/ aNumber
	" Return the result of operation on receiver and aNumber. "

	<primitive: 'primDivide' module: 'SKNumber'>
	^self error: 'Must be a Number'. ! !

! Number methodsFor: #signaling !
divideByZero
	" Signal divide by cero attempt. "

	^self error: 'Divide by Zero'! !

! Number methodsFor: #arithmetic !
\\ aNumber
	" Return the reminder of dividing the receiver by aNumber. "

	aNumber mustBeNumber.
	aNumber = 0 ifTrue: [ self divideByZero ].
	^self - (self // aNumber * aNumber)! !

! Number methodsFor: #arithmetic !
// aNumber
	" Return the result of operation on receiver and aNumber. "

	aNumber mustBeNumber.
	aNumber = 0 ifTrue: [ self divideByZero ].
	^(self / aNumber) floor! !

! Number methodsFor: #arithmetic !
sin

	<primitive: 'primSin' module: 'SKNumber'>
	^self primitiveFailed. ! !

! Number methodsFor: #arithmetic !
cos

	<primitive: 'primCos' module: 'SKNumber'>
	^self primitiveFailed. ! !

! Number methodsFor: #arithmetic !
tan

	<primitive: 'primTan' module: 'SKNumber'>
	^self primitiveFailed. ! !

! Number methodsFor: #arithmetic !
atan2: aNumber

	<primitive: 'primAtan2' module: 'SKNumber'>
	^self error: 'Argument must be a Number.'. ! !

! Number methodsFor: #arithmetic !
arcTan

	<primitive: 'primArctan' module: 'SKNumber'>
	^self primitiveFailed. ! !

! Number methodsFor: #arithmetic !
arcSin

	<primitive: 'primArcsin' module: 'SKNumber'>
	^self primitiveFailed. ! !

! Number methodsFor: #arithmetic !
arcCos

	<primitive: 'primArccos' module: 'SKNumber'>
	^self primitiveFailed. ! !

! Number methodsFor: #arithmetic !
negated
	^-1 * self ! !

! Number methodsFor: #arithmetic !
squared
	^self * self ! !

! Number methodsFor: #arithmetic !
sqrt

	<primitive: 'primSqrt' module: 'SKNumber'>
	^self error:'Must be a positive number.'. ! !

! Number methodsFor: #arithmetic !
<< aNumber
	" Return the receiver shifted aNumber of bits to the left. "

	<primitive: 'primBitShiftLeft' module: 'SKNumber'>
	^self error:'Must be a Number.'. ! !

! Number methodsFor: #arithmetic !
>> aNumber
	" Return the receiver shifted aNumber of bits to the right. "

	<primitive: 'primBitShiftRight' module: 'SKNumber'>
	^self error: 'Must be a Number.'. ! !

! Number methodsFor: #arithmetic !
bitShift: anInteger
	" Return the receiver shifted left anInteger number of bits if anInteger is positive, or shifted right for anInteger negated number of bits if anInteger is negative."

	anInteger < 0 ifTrue: [ ^self >> anInteger negated ].
	^self << anInteger! !

! Number methodsFor: #arithmetic !
max: aNumber
	" Return the result of operation on receiver and aNumber. "

	^self > aNumber
		ifTrue:[self]
		ifFalse:[aNumber]. ! !

! Number methodsFor: #arithmetic !
min: aNumber
	" Return the result of operation on receiver and aNumber. "

	^self < aNumber
		ifTrue:[self]
		ifFalse:[aNumber]. ! !

! Number methodsFor: #arithmetic !
truncated
	" Return the receiver truncated. "

	^self negative
		ifTrue: [self ceiling]
		ifFalse: [self floor]! !

! Number methodsFor: #arithmetic !
ln
	"Return the natural log of the receiver"

	<primitive: 'primLn' module: 'SKNumber'>
	^self error: 'Must be a positive Number.'. ! !

! Number methodsFor: #arithmetic !
log: aBaseNumber
	"Return the log of the receiver in the provided base."

	^self ln / aBaseNumber ln! !

! Number methodsFor: #arithmetic !
floor
	"Return the largest integer less than or equal to the receiver."

	<primitive: 'primFloor' module: 'SKNumber'>
	^self error: 'Must be a Number.'. ! !

! Number methodsFor: #arithmetic !
ceiling
	"Return the smallest integer greater than or equal to the receiver."

	<primitive: 'primCeiling' module: 'SKNumber'>
	^self error: 'Must be a Number.'. ! !

! Number methodsFor: #arithmetic !
raisedTo: aNumber
	"Raise the receiver to the power of aNumber."

	<primitive: 'primRaisedTo' module: 'SKNumber'>
	^self error:'Must be a Number.'. ! !

! Number methodsFor: #'bit operations' !
bitAt: anInteger
		"Answer 0 if the bit at index position anInteger
		 in the receiver is 0, else answer 1."
	1 > anInteger
		ifTrue: [ self error: 'bitAt: index must be greater than zero' ].
	^self >= 0
		ifTrue: [ 1 bitAnd: ( self bitShift: 1 - anInteger ) ]
		ifFalse: [ 1 - ( 1 bitAnd: ( self bitInvert bitShift: 1 - anInteger ) ) ]! !

! Number methodsFor: #'bit operations' !
bitInvert
	"Invert the bits of the receiver"

	^ -1 - self! !

! Number methodsFor: #'bit operations' !
bitAnd: anInteger
	"Bit and the receiver and the argument."

	<primitive: 'primBitAnd' module: 'SKNumber'>
	^self error: 'Argument and Receiver must be an integer.'. ! !

! Number methodsFor: #'bit operations' !
bitOr: anInteger
	"Bit or the receiver and the argument."

	<primitive: 'primBitOr' module: 'SKNumber'>
	^self error: 'Argument and Receiver must be an integer.'. ! !

! Number methodsFor: #'bit operations' !
bitXor: anInteger
	"Exclusive or the receiver with the argument."

	<primitive:'primBitXor' module:'SKNumber'>
	^self error: 'Argument and Receiver must be an integer.'. ! !

! Number methodsFor: #'bit operations' !
& anInteger
	"Bit and the receiver and the argument."

	^self bitAnd: anInteger! !

! Number methodsFor: #converting !
asNumber
	" Return the receiver as a Number. "

	^self + 0! !

! Number methodsFor: #converting !
abs
	" Return the absolute value of the receiver. "

	self < 0 ifTrue: [ ^self negated ].
	^self! !

! Number methodsFor: #converting !
rounded
	" Return the receiver rounded. "

	<primitive: 'primRounded' module: 'SKNumber'>
	^self primitiveFailed. ! !

! Number methodsFor: #converting !
asCharacter
	" Return the character with the receiver's code. "

	^String fromCharCode: self! !

! Number methodsFor: #converting !
to: aNumber
	" Return a collection of numbers from the receiver to aNumber. "

	^Interval from: self to: aNumber ! !

! Number methodsFor: #converting !
to: aNumber by: anotherNumber

	^Interval from: self to: aNumber by: anotherNumber ! !

! Number methodsFor: #enumerating !
timesRepeat: aBlock
	" Evaluates aBlock a number of times given by the receiver.
	Return the receiver.
	"

	| count |
	aBlock argumentCount = 1 ifTrue: [
		^1 to: self do: aBlock
	].
	count := 1.
	[ count > self ] whileFalse: [
		aBlock value.
		count := count + 1
	]! !

! Number methodsFor: #iterating !
to: aNumber do: aBlock
	" Evaluate aBlock from the receiver to aNumber.
	Return the receiver."

	<primitive: 'primToDo' module: 'SKNumber'>
	^self primitiveFailed. ! !

! Number methodsFor: #iterating !
to: aNumber by: increment do: aBlock
	" Evaluate aBlock for the numbers between the receiver and aNumber where each number is the previous number plus increment.
	Return the receiver."

	<primitive: 'primToByDo' module: 'SKNumber'>
	^self primitiveFailed. ! !

! Number methodsFor: #converting !
asString
	" Return the text representation of the receiver. "

	^self toString! !

! Number methodsFor: #converting !
asJavascript
	" Return the javascript representation of the receiver. "

	^'(', self printString, ')'! !

! Number methodsFor: #printing !
printOn: aStream
	"Print the receiver on aStream in base 10."

	aStream nextPutAll: self asString! !

! Number methodsFor: #testing !
isNumber
	" Return true if the receiver is a number. "

	<primitive: 'primIsNumber' module: 'SKNumber'>
	^false. ! !

! Number methodsFor: #converting !
atRandom
	" Return a random integer in the interval from 1 to the receiver. "

	^(Random new next * self) truncated + 1! !

! Number methodsFor: #converting !
@ aNumber
	" Return a Point with coordinates given by the receiver and aNumber. "

	^Point x: self y: (aNumber isNil ifTrue: [0] ifFalse: [aNumber])! !

! Number methodsFor: #converting !
asPoint
	" Return a Point with both coordinates given by the receiver. "

	^Point x: self y: self! !

! Number methodsFor: #converting !
asJSONObject
	" Return the mapping of the receiver to JSON structure. "

	^self + 0
"Note:	we need to normalize result to do not destroy typeof checkings
	Do NOT modify this method if you do not know what you are doing.
	If you remove the + 0 computation, the returned object will return 'object' and not 'number' as result of typeof operation.
"! !

! Number methodsFor: #converting !
asInteger
	" Return the receiver as an Integer. "

	^self rounded! !

! Number methodsFor: #testing !
between: min and: max
	" Answer true if the receiver is greater than or equal to min and less than or equal to max, else answer false. "

	^min <= self and: [ self <= max ]! !

! Number methodsFor: #testing !
even
	" Answer true if the receiver is an even number. "

	^self \\ 2 = 0! !

! Number methodsFor: #testing !
odd
	" Answer true if the receiver is an odd number. "

	^self \\ 2 = 1! !

! Number methodsFor: #testing !
negative
	"Return if the receiver is negative."

	^self < 0! !

! Number methodsFor: #copying !
shallowCopy
	" Return a shallow copy of the receiver. "

	^self! !

! Number methodsFor: #copying !
deepCopy
	" Return a deep copy of the receiver. "

	^self! !

! Number class methodsFor: #instantiation !
pi
	" Return the singular value PI. "

	<primitive: 'primPi' module: 'SKNumber'>
	^self primitiveFailed. ! !

! Number class methodsFor: #converting !
readFrom: aStringOrStream radix: radix
	" Private - Read an integer from <aStream> and return it. "

	| readStream value char |
	readStream := aStringOrStream asStream.
	value := 0.
	[	char := readStream peek.
		char notNil and: [ char isDigit or: [ char isUpperCase ] ]
	] whileTrue: [
		radix <  char digitValue ifTrue: [ ^value ].
		value := value * radix + char digitValue.
		readStream next
	].
	^value! !

! Number class methodsFor: #converting !
readFrom: aStringOrStream
	" Private - Read an integer from <aStream> and return it. "

	| readStream value char |
	readStream := aStringOrStream asStream.
	value := 0.
	[	char := readStream peek.
		char notNil and: [ char isDigit ]
	] whileTrue: [
		value := value * 10 + char digitValue.
		readStream next
	].
	char == "$r"'r' ifFalse: [ ^value ].
	readStream next. "skip the r"
	^self readFrom: readStream radix: value! !

Object
 subclass: #BlockClosure
 instanceVariableNames: ''
 category: #Kernel!

! BlockClosure methodsFor: #accessing !
compiledSource
	" Return the source code of the receiver. "

	^self toString! !

! BlockClosure methodsFor: #accesssing !
isBlock

	^ true ! !

! BlockClosure methodsFor: #iterating !
whileTrue: aBlock
	" Evaluate aBlock while the result of evaluating the receiver is true. "

	<primitive: 'primWhileTrue' module: 'SKBlockClosure'>
	self isBlock
		ifFalse: [^self error: 'Argument must be a Block'].
	^self primitiveFailed. ! !

! BlockClosure methodsFor: #iterating !
whileFalse: aBlock
	" Evaluate aBlock while the result of evaluating the receiver is false. "
	[self value not] whileTrue: aBlock.
	^nil. ! !

! BlockClosure methodsFor: #evaluating !
value
	" Return the result of evaluating the receiver. "

	<primitive: 'primValue' module: 'SKBlockClosure'>
	^self primitiveFailed. ! !

! BlockClosure methodsFor: #evaluating !
value: anObject
	" Return the result of evaluating the receiver with anObject. "

	<primitive: 'primValueWith' module: 'SKBlockClosure'>
	^self primitiveFailed. ! !

! BlockClosure methodsFor: #evaluating !
value: firstArgument value: secondArgument
	" Return the result of evaluating the receiver with arguments. "

	<primitive: 'primValueWith2Objects' module: 'SKBlockClosure'>
	^self primitiveFailed. ! !

! BlockClosure methodsFor: #evaluating !
value: firstArgument value: secondArgument value: thirdArgument
	" Return the result of evaluating the receiver with arguments. "

	<primitive: 'primValueWith3Objects' module: 'SKBlockClosure'>
	^self primitiveFailed. ! !

! BlockClosure methodsFor: #evaluating !
value: firstArgument value: secondArgument value: thirdArgument value: fourthArgument
	" Return the result of evaluating the receiver with arguments. "

	<primitive: 'primValueWith4Objects' module: 'SKBlockClosure'>
	^self primitiveFailed. ! !

! BlockClosure methodsFor: #evaluating !
valueWithArguments: aCollection
	" Return the result of evaluating the receiver with potential arguments. "

	<primitive:'primValueWithArguments' module:'SKBlockClosure'>
	aCollection isArray
		ifFalse: [^self error:'aCollection must be an Array'].
	aCollection argumentCount = self argumentCount
		ifFalse: [^self error:'Receiver requested ',self argumentCount toString,' Arguments given ', aCollection argumentCount toString].
	^self primitiveFailed. ! !

! BlockClosure methodsFor: #error !
on: anExceptionType do: aBlock
	" Return the result of evaluating the receiver catching exceptions. "

	^self try: self catch: [:error |
		(error isKindOf: anExceptionType)
		ifTrue: [ aBlock value: error ]
		ifFalse: [ error signal ]
	]! !

! BlockClosure methodsFor: #private !
try: aBlock catch: anotherBlock
	" Private - Try to evaluate aBlock catching exceptions with catchBlock. "

	<primitive:'primTryCatch' module:'SKBlockClosure'>
	^self primitiveFailed. ! !

! BlockClosure methodsFor: #evaluating !
valueDeferred: milliseconds
	" Evaluate the receiver deferred in time.
	Return the receiver."

	self valueWithTimeout: milliseconds! !

! BlockClosure methodsFor: #evaluating !
valueDeferred
	" Evaluate the receiver deferred in time.
	Return the receiver."

	self valueDeferred: 0! !

! BlockClosure methodsFor: #error !
ensure: aBlock
	" Returns the result of evaluating the receiver.
	Execute aBlock after the receiver is executed."

	<primitive: 'primEnsure' module: 'SKBlockClosure'>
	^self primitiveFailed. ! !

! BlockClosure methodsFor: #evaluating !
argumentCount
	" Return the number of arguments defined by the receiver. "

	<primitive: 'primArgumentsCount' module: 'SKBlockClosure'>
	^self primitiveFailed. ! !

! BlockClosure methodsFor: #installing !
installAs: functionName
	" Install the receiver as a function in global scope. "

	^Smalltalk global basicAt: functionName put: self! !

! BlockClosure methodsFor: #converting !
asJSONObject
	" Return the mapping of the receiver to JSON structure. "

	^self! !

! BlockClosure methodsFor: #copying !
shallowCopy
	" Return a shallow copy of the receiver. "

	^self! !

! BlockClosure methodsFor: #copying !
deepCopy
	" Return a deep copy of the receiver. "

	^self! !

Object
 subclass: #Boolean
 instanceVariableNames: ''
 category: #Kernel!

! Boolean methodsFor: #comparing !
= anObject
    " Return true if the receiver is equal to anObject. "

	<primitive: 'primEquals' module: 'SKBoolean'>
	^self primitiveFailed. ! !

! Boolean methodsFor: #accessing !
yourself
	^self! !

! Boolean methodsFor: #control !
ifTrue: aBlock

	<primitive: 'primIfTrue' module:'SKBoolean'>
	aBlock isBlock
		ifFalse:[^self error:'Argument must be a Block.'].
	^self primitiveFailed. !

ifFalse: aBlock

	<primitive: 'primIfFalse' module: 'SKBoolean'>
	aBlock isBlock
		ifFalse:[^self error:'Argument must be a Block.'].
	^self primitiveFailed. !

ifTrue: aBlock
ifFalse: anotherBlock

	<primitive:'primTrueFalse' module:'SKBoolean'>
	aBlock isBlock
		ifFalse:[^self error:'Argument must be a Block.'].
	anotherBlock isBlock
		ifFalse:[^self error:'Argument must be a Block.'].
	^self primitiveFailed. !

ifFalse: anotherBlock
ifTrue: aBlock

	<primitive:'primFalseTrue' module: 'SKBoolean'>
	aBlock isBlock
		ifFalse:[^self error:'Argument must be a Block.'].
	anotherBlock isBlock
		ifFalse:[^self error:'Argument must be a Block.'].
	^self primitiveFailed. ! !

! Boolean methodsFor: #control !
and: aBlock
	" Return true if the receiver is true and the result of evaluating aBlock is also true. "

	<primitive: 'primAnd' module: 'SKBoolean'>
	^self primitiveFailed ! !

! Boolean methodsFor: #control !
or: aBlock
	" Return true if the receiver is true or the result of evaluating aBlock is true. "

	<primitive: 'primOr' module: 'SKBoolean'>
	^self primitiveFailed ! !

! Boolean methodsFor: #control !
not
	" Return true if the receiver is false. "

	<primitive: 'primNot' module: 'SKBoolean'>
	^self primitiveFailed! !

! Boolean methodsFor: #printing !
printString
	" Return a printable representation of the receiver. "

	<primitive: 'primPrintString' module: 'SKBoolean'>
	^self primitiveFailed. ! !

! Boolean methodsFor: #converting !
asJSONObject
	" Return the mapping of the receiver to JSON structure. "

	^self and: [ true ]! !

! Boolean methodsFor: #copying !
shallowCopy
	" Return a shallow copy of the receiver. "

	^self! !

! Boolean methodsFor: #copying !
deepCopy
	" Return a deep copy of the receiver. "

	^self! !

! Boolean methodsFor: #logic !
& aBoolean
	" Return true if both the receiver and argument are true. False in any other case. "

	<primitive: 'primAmpersand' module: 'SKBoolean'>
	^self primitiveFailed ! !


 ! Boolean methodsFor: #logic !
| aBoolean
	" Return true if both the receiver and argument are true. False in any other case. "

	<primitive: 'primPipeSymbol' module: 'SKBoolean'>
	^self primitiveFailed ! !

! Boolean methodsFor: #testing !
isBoolean
	" Returns true if the receiver is a boolean. "

	^true! !

! Object methodsFor: #testing !
isBoolean
	" Returns true if the receiver is a boolean. "

	^false! !

Object
 subclass: #DateTime
 instanceVariableNames: ''
 category: #Kernel!

! DateTime class methodsFor: #accessing !
utcOffsetSeconds
	" Return the year of the receiver. "

	<primitive: 'primGetUtcOffsetSeconds' module: 'SKDateTime'>
	^self primitiveFailed. ! !

! DateTime methodsFor: #accessing !
year
	" Return the year of the receiver. "

	<primitive: 'primGetYear' module: 'SKDateTime'>
	^self primitiveFailed. ! !

! DateTime methodsFor: #accessing !
month
	" Return the month of the receiver. "

	<primitive: 'primGetMonth' module: 'SKDateTime'>
	^self primitiveFailed. ! !

! DateTime methodsFor: #accessing !
month: aNumber
	" Set the month of the receiver. "

	<primitive: 'primSetMonth' module: 'SKDateTime'>
	^self primitiveFailed. ! !

! DateTime methodsFor: #accessing !
day
	" Return the day of the receiver. "

	^self dayOfWeek! !

! DateTime methodsFor: #accessing !
dayOfWeek
	" Return the day of week of the receiver. "

	<primitive: 'primGetDayOfWeek' module: 'SKDateTime'>
	^self primitiveFailed. ! !

! DateTime methodsFor: #accessing !
year: aNumber
	" Set the year of the receiver. "

	<primitive: 'primSetYear' module: 'SKDateTime'>
	^self primitiveFailed. ! !

! DateTime methodsFor: #accessing !
dayOfMonth
	" Return the day of month of the receiver. "

	<primitive: 'primGetDayOfMonth' module: 'SKDateTime'>
	^self primitiveFailed. ! !

! DateTime methodsFor: #accessing !
dayOfMonth: aNumber
	" Set the day of month of the receiver. "

	<primitive:'primSetDayOfMonth' module:'SKDateTime'>
	^self primitiveFailed. ! !

! DateTime methodsFor: #converting !
asString
	" Return the text representation of the receiver. "

	<primitive: 'primAsString' module: 'SKDateTime'>
	^self primitiveFailed. ! !

! DateTime methodsFor: #printing !
printString
	" Return the printable representation of the receiver. "

	^self asString! !

! DateTime methodsFor: #converting !
asMilliseconds
	" Return the receiver as milliseconds. "

	<primitive: 'primGetTime' module: 'SKDateTime'>
	^self primitiveFailed. !

asSeconds
	"Return the receiver as seconds."

	^self asMilliseconds / 1000. ! !

! DateTime methodsFor: #accessing !
time
	" Return the time of the receiver. "

	^self asMilliseconds. ! !

! DateTime methodsFor: #accessing !
time: aNumber
	" Set the time of the receiver. "

	<primitive:'primSetTime' module:'SKDateTime'>
	^self primFailValue. ! !

! DateTime methodsFor: #converting !
asDateString
	" Return the date string of the receiver. "

	<primitive: 'primAsDateString' module: 'SKDateTime'>
	^self primitiveFailed. ! !

! DateTime methodsFor: #converting !
asTimeString
	" Return the time string of the receiver. "

	<primitive: 'primAsTimeString' module: 'SKDateTime'>
	^self primitiveFailed. ! !

! DateTime methodsFor: #converting !
asLocaleString
	" Return the locale string of the receiver. "

	<primitive:'primAsLocaleString' module:'SKDateTime'>
	^self primitiveFailed. ! !

! DateTime methodsFor: #converting !
asNumber
	" Return the receiver as a Number. "

	^self asMilliseconds! !

! DateTime methodsFor: #accessing !
hours: aNumber
	" Set the hours of the receiver. "

	<primitive: 'primSetHours' module: 'SKDateTime'>
	(aNumber > 23 or: aNumber < 0)
		ifTrue:[^self error:'argument must be an integer between 0 and 23. argument given: ', aNumber toString].
	^self primitiveFailed. ! !

! DateTime methodsFor: #accessing !
minutes: aNumber
	" Set the minutes of the receiver. "

	<primitive: 'primSetMinutes' module: 'SKDateTime'>
	(aNumber > 59 or: aNumber < 0)
		ifTrue:[^self error:'argument must be an integer between 0 and 59. argument given: ', aNumber toString].
	^self primitiveFailed. ! !

! DateTime methodsFor: #accessing !
seconds: aNumber
	" Set the seconds of the receiver. "

	<primitive: 'primSetSeconds' module: 'SKDateTime'>
	(aNumber > 59 or: aNumber < 0)
		ifTrue:[^self error:'argument must be an integer between 0 and 59. argument given: ', aNumber toString].
	^self primitiveFailed. ! !

! DateTime methodsFor: #accessing !
milliseconds: aNumber
	" Set the milliseconds of the receiver. "

	<primitive:'primSetMilliseconds' module:'SKDateTime'>
	(aNumber > 999 or: aNumber < 0)
		ifTrue:[^self error:'argument must be an integer between 0 and 999. argument given: ', aNumber toString].
	^self primitiveFailed. ! !

! DateTime methodsFor: #accessing !
hours
	" Return the hours of the receiver. "

	<primitive:'primGetHours' module:'SKDateTime'>
	^self primitiveFailed. ! !

! DateTime methodsFor: #accessing !
minutes
	" Return the minutes of the receiver. "

	^self getMinutes! !

! DateTime methodsFor: #accessing !
seconds
	" Return the seconds of the receiver. "

	<primitive: 'primGetSeconds' module: 'SKDateTime'>
	^self primitiveFailed. ! !

! DateTime methodsFor: #accessing !
milliseconds
	" Return the milliseconds of the receiver. "

	<primitive: 'primGetMilliseconds' module: 'SKDateTime'>
	^self primitiveFailed. ! !

! DateTime methodsFor: #comparing !
= aDateTime
	"Return true if the receiver is equivalent to aDateTime"

	<primitive: 'primEquality' module: 'SKDateTime'>
	^false! !

! DateTime methodsFor: #comparing !
< aDateTime
	" Return true if the receiver is previous to aDateTime. "

	<primitive: 'primLessThan' module: 'SKDateTime'>
	^self primitiveFailed. ! !

! DateTime methodsFor: #comparing !
> aDateTime
	" Return true if the receiver is later than aDateTime. "

	<primitive: 'primGreaterThan' module: 'SKDateTime'>
	^self primitiveFailed. ! !

! DateTime methodsFor: #comparing !
<= aDateTime
	" Return true if the receiver is previous or equal to aDateTime. "

	<primitive:'primLessThanEqualTo' module:'SKDateTime'>
	^self primitiveFailed. ! !

! DateTime methodsFor: #comparing !
>= aDateTime
	" Return true if the receiver is later or equal to aDateTime. "

	<primitive:'primGreaterThanEqualTo' module:'SKDateTime'>
	^self primitiveFailed. ! !

! DateTime methodsFor: #arithmetic !
- aDateTime
	" Return the result of operation with receiver and aDateTime in seconds. "

	^self asSeconds - aDateTime asSeconds. ! !

! DateTime methodsFor: #arithmetic !
+ aDateTime
	" Return the result of operation with receiver and aDateTime in seconds. "

	^self asSeconds + aDateTime asSeconds. ! !

! DateTime methodsFor: #testing !
isValid
	" Return true if the receiver is a valid instance. "

	<primitive:'primIsValid' module:'SKDateTime'>
	^self primitiveFailed. ! !

! DateTime methodsFor: #converting !
asJSONObject
	" Return the mapping of the receiver to JSON structure. "

	^self! !

! DateTime methodsFor: #converting !
asDateTime
	"Return a DateTime"

	^self! !

! DateTime class methodsFor: #instantiation !
fromString: aString
	" Return an instance of the receiver.
	DateTime fromString: '1962/12/15 01:40:00'"

	<primitive: 'primNew' module: 'SKDateTime'>
	^self primitiveFailed. ! !

! DateTime class methodsFor: #instantiation !
fromSeconds: aNumber
	" Return an instance of the receiver. "

	^self fromMilliseconds: aNumber * 1000! !

! DateTime class methodsFor: #instantiation !
fromMilliseconds: aNumber
	" Return an instance of the receiver. "

		<primitive: 'primNew' module: 'SKDateTime'>
		^self primitiveFailed. ! !

! DateTime class methodsFor: #instantiation !
today
	" Return an instance of the receiver. "

	^self new! !

! DateTime class methodsFor: #instantiation !
now
	" Return an instance of the receiver. "

	^self today! !

! DateTime class methodsFor: #instantiation !
millisecondsToRun: aBlock
	" Return the time elapsed during evaluation of aBlock. "

	| start |
	start := DateTime now.
	aBlock value.
	^DateTime now - start! !

! DateTime methodsFor: #testing !
isDateTime

	^true! !

Object
 subclass: #UndefinedObject
 instanceVariableNames: ''
 category: #Kernel!

! UndefinedObject class methodsFor: #instantiation !
new
	" Return an instance of the receiver. "

	^self error: 'UndefinedObject can''t be instantiated.'! !

! UndefinedObject methodsFor: #testing !
ifNil: aBlock
	" Return the receiver if it is not nil, or the result of evaluating aBlock (if it is nil). "

	^aBlock value! !

! UndefinedObject methodsFor: #testing !
ifNotNil: aBlock
	" Return the receiver if it is nil, or the result of evaluating aBlock. "

	^self! !

! UndefinedObject methodsFor: #testing !
ifNil: aBlock ifNotNil: anotherBlock
	" Return the receiver if it is nil, or the result of evaluating aBlock. "

	^aBlock value! !

! UndefinedObject methodsFor: #testing !
ifNotNil: aBlock ifNil: anotherBlock
	" Return the result of evaluating anotherBlock if teh receiver is nil, or the result of evaluating aBlock. "

	^anotherBlock value! !

! UndefinedObject methodsFor: #testing !
isNil
	" Return true if the receiver is nil. "

	^true! !

! UndefinedObject methodsFor: #testing !
notNil
	" Return true if the receiver is not nil. "

	^false! !

! UndefinedObject methodsFor: #printing !
printString
	" Return the text representation of the receiver. "

	^#nil! !

! UndefinedObject methodsFor: #printing !
printOn: aStream
	"Print the receiver onto aStream"

	aStream nextPutAll: 'nil'! !

! UndefinedObject methodsFor: #instantiation !
subclass: aString instanceVariableNames: anotherString
	" Create a subclass of the receiver. "

	^self
		subclass: aString
		instanceVariableNames: anotherString
		category: nil! !

! UndefinedObject methodsFor: #instantiation !
subclass: aString instanceVariableNames: aString2 category: aString3
	" Create a subclass of the receiver. "

	^ClassBuilder new
		superclass: self
		subclass: aString
		instanceVariableNames: aString2
		category: aString3! !

! UndefinedObject methodsFor: #converting !
asJSONObject
	" Return the mapping of the receiver to JSON structure. "

	<primitive: 'primAsJSONObject' module: 'SKUndefinedObject'>
	self primitiveFailed! !

! UndefinedObject methodsFor: #converting !
asJavascript
	"Return the Javascript "

	^'nil'! !

! UndefinedObject methodsFor: #copying !
shallowCopy
	" Return a shallow copy of the receiver. "

	^self! !

! UndefinedObject methodsFor: #copying !
deepCopy
	" Return a deep copy of the receiver. "

	^self! !

! UndefinedObject methodsFor: #evaluating !
value
	" Return the result of evaluating the receiver. "! !

! UndefinedObject methodsFor: #converting !
@ aNumber
	" Return a Point with coordinates given by the receiver and aNumber. "

	^Point x: 0 y: aNumber! !

! UndefinedObject methodsFor: #comparing !
= anObject
	" Return true if the receiver is equal to anObject. "

	^anObject isNil! !

! UndefinedObject methodsFor: #comparing !
~= anObject
	" Return true if the receiver is not equal to anObject. "

	^anObject notNil! !

Object
 subclass: #Collection
 instanceVariableNames: ''
 category: #Kernel!

! Collection methodsFor: #accessing !
size
	" Return the size of the receiver. "

	^self subclassResponsibility: #size! !

! Collection methodsFor: #accessing !
readStream
	" Return a read stream on the receiver. "

	^self stream! !

! Collection methodsFor: #accessing !
writeStream
	" Return a write stream on the receiver. "

	^self stream! !

! Collection methodsFor: #accessing !
stream
	" Return a stream on the receiver. "

	^self streamClass on: self! !

! Collection methodsFor: #accessing !
streamClass
	" Private - Return the support for streamming on the receiver. "

	^self class streamClass! !

! Collection methodsFor: #accessing !
intersection: aCollection

	^self select: [:each | aCollection includes: each]! !

! Collection methodsFor: #error !
errorNotFound
	" DEPRECATED - Generates an error.
	An object was not found in the receiver's contents.
	"

	^self objectNotFound! !

! Collection methodsFor: #error !
objectNotFound
	" Private - Generates an error.
	An object was not found in the receiver's contents.
	"

	^self error: 'Object is not in the collection'! !

! Collection methodsFor: #error !
objectNotFound: anObject
	" Private - Generates an error.
	anObject was not found in the receiver's contents.
	"

	^self error: 'Object not found: ',anObject toString! !

! Collection methodsFor: #error !
objectNotFoundAt: indexOrKey
	" Private - Generates an error.
	The object at key/index was not found in the receiver's contents.
	"

	^self error: 'Object not found at ',indexOrKey toString! !

! Collection methodsFor: #adding !
add: anObject
	" Add anObject to the receiver. "

	^self subclassResponsibility: #add:! !

! Collection methodsFor: #adding !
addAll: aCollection
	" Add objects in aCollection to the receiver. "

	aCollection do: [:each | self add: each ].
	^aCollection! !

! Collection methodsFor: #copying !
, aCollection
	" Return a copy of the receiver with all contents of aCollection. "

	^self copy
		addAll: aCollection;
		yourself! !

! Collection methodsFor: #copying !
copyWith: anObject
	" Return a copy of the receiver with anObject. "

	^self copy add: anObject; yourself! !

! Collection methodsFor: #copying !
copyWithAll: aCollection
	" Return a copy of the receiver with all contents of aCollection. "

	^self copy
		addAll: aCollection;
		yourself! !

! Collection methodsFor: #converting !
asArray
	" Return an array with the contents of the receiver. "

	| result index |
	result := Array new.
	index := 0.
	self do: [:each |
	    index := index + 1.
	    result at: index put: each
	].
	^result! !

! Collection methodsFor: #converting !
asSortedCollection
	"Answer a SortedCollection containing
	the elements of the receiver sorted
	in ascending order."

	^(SortedCollection new)
		addAll: self;
		yourself! !

! Collection methodsFor: #converting !
asOrderedCollection
	"Return an OrderedCollection containing the same contents as self."

	^OrderedCollection withAll: self! !

! Collection methodsFor: #enumerating !
do: aBlock
	" Evaluate aBlock with the contents of the receiver. "

	^self subclassResponsibility: #do:! !

! Collection methodsFor: #enumerating !
detect: aBlock ifNone: anotherBlock
	" Return the object in the receiver that return true when evaluated with aBlock or the result of evaluating anotherBlock. "

	^self subclassResponsibility: #detect:ifNone:! !

! Collection methodsFor: #enumerating !
reverseDo: aBlock
	" Evaluate aBlock with the contents of the receiver in reverse order of iteration. "

	^self subclassResponsibility: #reverseDo:! !

! Collection methodsFor: #enumerating !
collect: aBlock
	" Return a collection with the result of evaluating aBlock with the contents of the receiver. "

	| result |
	result := self class new.
	self do: [:each | result add: (aBlock value: each) ].
	^result! !

! Collection methodsFor: #enumerating !
select: aBlock
	" Return the contents of the receiver wich evaluates aBlock to true. "

	| stream |
	stream := self class new writeStream.
	self do: [:each |
	    (aBlock value: each) ifTrue: [ stream nextPut: each ]
	].
	^stream contents! !

! Collection methodsFor: #enumerating !
detect: aBlock
	" Return the object in the receiver that return true when evaluated with aBlock.
	Generates an error if there is no object that evaluates aBlock to true.
	"

	^self detect: aBlock ifNone: [ self objectNotFound ]! !

! Collection methodsFor: #enumerating !
do: aBlock separatedBy: anotherBlock
	" Evaluate aBlock for contents of the receiver evaluating anotherBlock inbetween aBlock evaluations. "

	| first |
	first := true.
	self do: [:each |
	    first
		ifTrue: [ first := false ]
		ifFalse: [ anotherBlock value ].
	    aBlock value: each
	]! !

! Collection methodsFor: #enumerating !
do: aDoBlock
andBetweenDo: aBetweenBlock
	"Evaluate aBlock for the contents. Between evaluations of aBlock, evaluate aBetweenBlock."

	^self
		do: aDoBlock
		separatedBy: aBetweenBlock! !

! Collection methodsFor: #enumerating !
inject: anObject into: aBlock
	" Evaluate aBlock for result of previous evaluation and contents of the receiver.
	On first evaluation anObject is used as first argument to evaluate aBlock.
	"

	| result |
	result := anObject.
	self do: [:each | result := aBlock value: result value: each ].
	^result! !

! Collection methodsFor: #enumerating !
reject: aBlock
	" Return the contents of the receiver wich evaluates aBlock to false. "

	^self select: [:each | (aBlock value: each) = false]! !

! Collection methodsFor: #enumerating !
select: selectBlock thenCollect: collectBlock
	" Return a new collection with the result of evaluating collectBlock on the contents of the receiver wich evaluates selectBlock to true. "

	^(self select: selectBlock) collect: collectBlock! !

! Collection methodsFor: #enumerating !
collect: collectBlock thenSelect: selectBlock
	" Return a new collection with the result of evaluating collectBlock on the contents of the receiver wich evaluates selectBlock to true. "

	^(self collect: collectBlock) select: selectBlock! !

! Collection methodsFor: #copying !
reversed
	" Return an array with the contents of the receiver in reverse order. "

	^self subclassResponsibility: #reversed! !

! Collection methodsFor: #testing !
includes: anObject
	" Return true if anObject is in the receiver. "

	^self subclassResponsibility: #includes:! !

! Collection methodsFor: #testing !
includesAll: aCollection
	"Return whether the receiver contains all of the elements from aCollection."

	aCollection
		do:
			[:each | | isPresent |
			isPresent := self includes: each.
			isPresent ifFalse: [^false]].
	^true! !

! Collection methodsFor: #testing !
isCollection
	"Return whether the receiver is a Collection."

	^true! !

! Collection methodsFor: #testing !
notEmpty
	" Return true if the receiver is not empty. "

	^self isEmpty not! !

! Collection methodsFor: #testing !
isEmpty
	" Return true if the receiver is empty. "

	^self size == 0! !

! Collection methodsFor: #removing !
remove: anObject
	" Remove anObject from receiver, return the removed object. "

	^self remove: anObject ifAbsent: [ self objectNotFound: anObject ]! !

! Collection methodsFor: #removing !
remove: anObject ifAbsent: aBlock
	" Remove anObject from receiver.
	Return the removed object or the result of evaluating aBlock (if the object is not found).
	"

	^self subclassResponsibility: #remove:ifAbsent:! !

! Collection methodsFor: #removing !
removeAll: aCollection
	" Remove aCollection from receiver. "

	aCollection do: [:each| self remove: each ].
	^aCollection! !

! Collection methodsFor: #removing !
removeAll
	" Remove all elements in the receiver. "

	self removeAll: self shallowCopy! !

! Collection methodsFor: #counting !
occurrencesOf: anObject
	" Return the occurrences of anObject in the receiver. "

	^self inject: 0 into: [:total :each|
		each = anObject ifTrue: [ total + 1 ] ifFalse: [total]
	]! !

! Collection methodsFor: #copying !
shallowCopy
	" Return a shallow copy of the receiver. "

	^self collect: [:each| each ]! !

! Collection methodsFor: #copying !
deepCopy
	" Return a deep copy of the receiver. "

	^self collect: [:each| each deepCopy ]! !

! Collection class methodsFor: #accessing !
streamClass
	" Private - Return the support for streamming on the receiver's instances. "

	^Stream! !

! Collection class methodsFor: #instantiation !
with: anObject
	" Return an instance of the receiver. "

	^self new
		add: anObject;
		yourself! !

! Collection class methodsFor: #instantiation !
with: anObject with: anotherObject
	" Return an instance of the receiver. "

	^self new
		add: anObject;
		add: anotherObject;
		yourself! !

! Collection class methodsFor: #instantiation !
with: firstObject with: secondObject with: thirdObject
	" Return an instance of the receiver. "

	^self new
		add: firstObject;
		add: secondObject;
		add: thirdObject;
		yourself! !

! Collection class methodsFor: #instantiation !
with: firstObject with: secondObject with: thirdObject with: fourthObject
	" Return an instance of the receiver. "

	^self new
		add: firstObject;
		add: secondObject;
		add: thirdObject;
		add: fourthObject;
		yourself! !

! Collection class methodsFor: #instantiation !
withAll: aCollection
	" Return an instance of the receiver. "

	^self new
		addAll: aCollection;
		yourself! !

! Collection class methodsFor: #instantiation !
basicNew: size
	" Return an instance of the receiver of specified size. "

	^self subclassResponsibility: #basicNew:! !

Collection
 subclass: #Set
 instanceVariableNames: 'contents'
 category: #Kernel!

! Collection methodsFor: #converting !
asSet
	" Return the receiver contents in a Set. "

	^Set withAll: self! !

! Set class methodsFor: #private !
newContents: contents
	" Return an instance of the receiver initialized from given contents. "

	^self basicNew initialize: contents! !

! Set class methodsFor: #instantiation !
basicNew: size
	" Return an instance of the receiver of specified size. "

	^self new! !

! Set methodsFor: #initialize !
initialize
	" Private - Initialize the receiver. "

	super initialize.
	contents := #().! !

! Set methodsFor: #initialize !
initialize: initializer
	" Private - Initialize the receiver. "

	contents := initializer.! !

! Set methodsFor: #accessing !
isSet

	^true ! !

! Set methodsFor: #accessing !
size
	" Return the size of the receiver. "

	^contents size! !

! Set methodsFor: #accessing !
contents

	^contents! !

! Set methodsFor: #private !
basicAdd: anObject
	" Private - Add anObject to the receiver's contents. "

	contents add: anObject.
	^anObject! !

! Set methodsFor: #testing !
includes: anObject
	" Return true if anObject is in receiver's contents. "

	^contents includes: anObject! !

! Set methodsFor: #adding !
add: anObject
	" Add anObject to the receiver. "

	(self includes: anObject) ifTrue: [ ^anObject ].
	^self basicAdd: anObject! !

! Set methodsFor: #removing !
remove: anObject ifAbsent: aBlock
	" Remove anObject from the receiver.
	Return the result of evaluating aBlock if anObject is not in the receiver.
	"

	^contents remove: anObject ifAbsent: aBlock! !

! Set methodsFor: #copying !
copyFrom: anIndex to: anotherIndex
	" Return a copy of the receiver from anIndex to anotherIndex. "

	^self shouldNotImplement: #copyFrom:to:! !

! Set methodsFor: #converting !
asJavascript
	" Return the javascript representation of the receiver. "

	^'smalltalk.',self class name
		,'.newContents_(', contents asJavascript ,')'! !

! Set methodsFor: #comparing !
= aSet
	" Return true if the receiver is equal to aSet. "

	self class = aSet class ifFalse: [^false].
	self size = aSet size ifFalse: [^false].
	self do: [:each | (aSet includes: each) ifFalse: [^false] ].
	^true! !

! Set methodsFor: #converting !
asArray
	" Return an array with the contents of the receiver. "

	^contents copy! !

! Set methodsFor: #converting !
toString
	" Convert the receiver to a String. "

	^self class name,' withAll: ',self asArray printString! !

! Set methodsFor: #sorting !
sorted
	" Return the contents of the receiver sorted. "

	^self asArray sort! !

! Set methodsFor: #sorting !
sorted: aBlock
	" Return a sorted copy of the receiver. "

	^self asArray sort: aBlock! !

! Set methodsFor: #enumerating !
do: aBlock
	" Evaluate aBlock with the contents of the receiver. "

	^contents do: aBlock! !

! Set methodsFor: #enumerating !
detect: aBlock ifNone: anotherBlock
	" Return the object in the receiver that return true when evaluated with aBlock or the result of evaluating anotherBlock. "

	^contents detect: aBlock ifNone: anotherBlock! !

! Set methodsFor: #enumerating !
reverseDo: aBlock
	" Evaluate aBlock with the contents of the receiver in reverse order of iteration. "

	^contents reverseDo: aBlock! !

! Set methodsFor: #enumerating !
collect: aBlock
	" Return a collection with the result of evaluating aBlock with the contents of the receiver. "

	^self class withAll: (contents collect: aBlock)! !

! Set methodsFor: #enumerating !
do: aBlock separatedBy: anotherBlock
	" Evaluate aBlock for contents of the receiver evaluating anotherBlock inbetween aBlock evaluations. "

	^contents do: aBlock separatedBy: anotherBlock! !

! Set methodsFor: #enumerating !
inject: anObject into: aBlock
	" Evaluate aBlock for result of previous evaluation and contents of the receiver.
	On first evaluation anObject is used as first argument to evaluate aBlock.
	"

	^contents inject: anObject into: aBlock! !

! Set methodsFor: #enumerating !
select: aBlock
	" Return a copy of the receiver with elements wich evaluates aBlock to true. "

	^self class withAll: (contents select: aBlock)! !

! Set methodsFor: #enumerating !
reject: aBlock
	" Return the contents of the receiver wich evaluates aBlock to false. "

	^self class withAll: (contents reject: aBlock)! !

! Set methodsFor: #copying !
reversed
	" Return an array with the contents of the receiver in reverse order. "

	^contents reversed! !

! Set methodsFor: #testing !
notEmpty
	" Return true if the receiver is not empty. "

	^contents notEmpty! !

! Set methodsFor: #testing !
isEmpty
	" Return true if the receiver is empty. "

	^contents isEmpty! !

! Set methodsFor: #counting !
occurrencesOf: anObject
	" Return the occurrences of anObject in the receiver. "

	^(self includes: anObject) ifTrue: [ 1 ] ifFalse: [ 0 ]! !

! Set methodsFor: #converting !
asSet
	" Return the receiver contents in a Set. "

	^self! !

! Set methodsFor: #copying !
shallowCopy
	" Return a shallow copy of the receiver. "

	^self class newContents: contents copy! !

! Set methodsFor: #copying !
deepCopy
	" Return a deep copy of the receiver. "

	^self class newContents: contents deepCopy! !

Collection
 subclass: #SequenceableCollection
 instanceVariableNames: ''
 category: #Kernel!

! SequenceableCollection methodsFor: #accessing !
at: anIndex
	" Return the object in the receiver at anIndex position. "

	^self at: anIndex ifAbsent: [ self objectNotFoundAt: anIndex ]! !

! SequenceableCollection methodsFor: #accessing !
at: anIndex ifAbsent: aBlock
	" Return the object in the receiver at anIndex position or the result of evaluating aBlock. "

	^self subclassResponsibility: #at:ifAbsent:! !

! SequenceableCollection methodsFor: #accessing !
at: anIndex put: anObject
	" Set the object in the receiver at anIndex position. "

	^self subclassResponsibility: #at:put:! !

! SequenceableCollection methodsFor: #accessing !
at: aKey ifAbsentPut: aBlock
	" Return the value at aKey, or add the result of evaluating aBlock to the receiver if it is absent. "

	^self at: aKey ifAbsent: [ self at: aKey put: aBlock value ]! !

! SequenceableCollection methodsFor: #copying !
copyFrom: anIndex to: anotherIndex
	" Return a copy of the receiver. "

	^self subclassResponsibility: #copyFrom:to:! !

! SequenceableCollection methodsFor: #testing !
indexOf: anObject
	" Return the position of anObject in the receiver, or 0. "

	^self indexOf: anObject ifAbsent: [ 0 ]! !

! SequenceableCollection methodsFor: #accessing !
indexOf: anObject ifAbsent: aBlock
	" Return the position of anObject in the receiver, or the result of evaluating aBlock. "

	<primitive:'primIndexOfIfAbsent' module:'SKSequenceableCollection'>
	^self primitiveFailed. ! !

! SequenceableCollection methodsFor: #enumerating !
do: aBlock
	" Evaluate aBlock with the contents of the receiver. "

	<primitive: 'primDo' module: 'SKSequenceableCollection'>
	^self primitiveFailed. ! !

! SequenceableCollection methodsFor: #enumerating !
detect: aBlock ifNone: anotherBlock
	" Return the object in the receiver that return true when evaluated with aBlock or the result of evaluating anotherBlock. "

	<primitive: 'primDetectIfNone' module: 'SKSequenceableCollection'>
	^self primitiveFailed. ! !

! SequenceableCollection methodsFor: #enumerating !
doWithIndex: aBlock
	" Evaluate aBlock with the contents of the receiver. "

	| element |
	1 to: self size
		do:
			[:index |
			aBlock
				value: (self at: index)
				value: index]! !

! SequenceableCollection methodsFor: #copying !
reversed
	" Return an array with the contents of the receiver in reverse order. "

	<primitive: 'primReversed' module: 'SKSequenceableCollection'>
	^self primitiveFailed. ! !

! SequenceableCollection methodsFor: #testing !
isEmpty
	" Return true if the receiver is empty.
	Note: ^self size = 0 is slower than inlined impl."

	<primitive: 'primIsEmpty' module: 'SKSequenceableCollection'>
	^self primitiveFailed. ! !

! SequenceableCollection methodsFor: #enumerating !
reverseDo: aBlock
	" Evaluate aBlock with the contents of the receiver in reverse order of iteration. "

	<primitive: 'primReverseDo' module: 'SKSequenceableCollection'>
	^self primitiveFailed. ! !

! SequenceableCollection methodsFor: #testing !
includes: anObject
	" Return true if anObject is in the receiver.
	Note: the indexOf() function fail to search in case of string literals in Array contents.
	"
	(self isObject: anObject)
		ifFalse: [self error: 'argument must be an object'].
	self do: [:each | anObject = each ifTrue:[^true]].
	^false. ! !

! SequenceableCollection methodsFor: #counting !
occurrencesOf: anObject
	" Return the occurrences of anObject in the receiver. "

	<primitive:'primOccurrencesOf' module: 'SKSequenceableCollection'>
	^self primitiveFailed. ! !

! SequenceableCollection methodsFor: #accessing !
first
	" Return the object in the receiver. "

	^self at: 1! !

! SequenceableCollection methodsFor: #accessing !
fourth
	" Return the object in the receiver. "

	^self at: 4! !

! SequenceableCollection methodsFor: #accessing !
last
	" Return the object in the receiver. "

	^self at: self size! !

! SequenceableCollection methodsFor: #accessing !
second
	" Return the object in the receiver. "

	^self at: 2! !

! SequenceableCollection methodsFor: #accessing !
third
	" Return the object in the receiver. "

	^self at: 3! !

! SequenceableCollection methodsFor: #removing !
removeLast
	" Remove the last object in the receiver. "

	^self remove: self last! !

! SequenceableCollection methodsFor: #removing !
removeFirst
	" Remove the first object in the receiver. "

	^self remove: self first! !

! SequenceableCollection methodsFor: #adding !
addLast: anObject
	" Add the object in the receiver (at end). "

	^self add: anObject! !

! SequenceableCollection methodsFor: #accessing !
atAll: indices put: anObject
	" Return the receiver after replacing those elements, indexed by the indices, with anObject. "

	indices do: [ :index | self at: index put: anObject ]! !

! SequenceableCollection methodsFor: #accessing !
atAllPut: anObject
	" Replace all elements of the receiver with anObject. "

	(1 to: self size) do: [ :index | self at: index put: anObject ]! !

! SequenceableCollection methodsFor: #enumerating !
withIndexDo: aBlock
	" Evaluate aBlock with all the index positions in the receiver. "

	(1 to: self size) do: [ :index |
		aBlock value: (self at: index) value: index
	]! !

! SequenceableCollection methodsFor: #testing !
= aCollection
	" Return true if the elements contained by the receiver are equal to the elements contained in aCollection. "

	| index |
	self == aCollection ifTrue: [ ^true ].
	self class == aCollection class ifFalse: [ ^false ].
	index := self size.
	index ~= aCollection size ifTrue: [ ^false ].
	[ index <= 0 ] whileFalse: [
		(self at: index) = (aCollection at: index) ifFalse: [ ^false ].
		index := index - 1
	].
	^true! !

! SequenceableCollection methodsFor: #testing !
beginsWith: aCollection
	" Return true if the receiver begins with aCollection. "

	self size < aCollection size ifTrue: [ ^false ].
	self size = aCollection size ifTrue: [ ^aCollection = self ].
	^aCollection = (self copyFrom: 1 to: aCollection size)! !

! SequenceableCollection methodsFor: #testing !
endsWith: aCollection
	" Return true if the receiver ends with aCollection. "

	self size < aCollection size ifTrue: [ ^false ].
	self size = aCollection size ifTrue: [ ^aCollection = self ].
	^aCollection = (self copyFrom: self size - aCollection size + 1 to: self size)! !

! SequenceableCollection methodsFor: #copying !
copyReplaceFrom: start to: stop with: aCollection
	" Return a collection containing a copy of the receiver with the elements at index positions from start through stop replaced with the elements of aCollection. "

	^(self copyFrom: 1 to: start - 1)
		, aCollection
		, (self copyFrom: stop + 1 to: self size)! !

! SequenceableCollection methodsFor: #copying !
copyWithout: anObject
	" Return a copy of the receiver excluding anObject, if any. "

	| index |
	index := self indexOf: anObject ifAbsent: [ ^self copy ].
	^(self copyFrom: 1 to: index - 1)
		,((self copyFrom: index + 1 to: self size)
			copyWithout: anObject)! !

! SequenceableCollection methodsFor: #copying !
copyWithAll: aCollection
	" Return a copy of the receiver with all contents of aCollection. "

	^self , aCollection ! !

! SequenceableCollection methodsFor: #searching !
findFirst: aBlock
	" Return the index of the first element of the receiver that causes aBlock to evaluate to true.
         If no such element is found, report an error.
	"

	^self findFirst: aBlock ifAbsent: [ self errorAbsentObject ]! !

! SequenceableCollection methodsFor: #searching !
findFirst: aBlock ifAbsent: absentBlock
	" Return the index of the first element of the receiver that causes aBlock to evaluate to true.
	If no such element is found, return the result of evaluating the argument block.
	"

	| index size |
	size := self size.
	index := 1.
	[ index <= size ] whileTrue: [
		(aBlock value: (self at: index)) ifTrue: [ ^index ].
		index := index + 1
	].
	^absentBlock value! !

! SequenceableCollection methodsFor: #searching !
findLast: aBlock
	" Return the index of the last element of the receiver that causes aBlock to evaluate to true.
	If no such element is found, report an error.
	"

	^self findLast: aBlock ifAbsent: [ self errorAbsentObject ]! !

! SequenceableCollection methodsFor: #searching !
findLast: aBlock ifAbsent: absentBlock
	" Return the index of the last element of the receiver that causes aBlock to evaluate to true.
	If no such element is found, return the result of evaluating the argument block.
	"

	| index |
	index := self size.
	[ index > 0 ] whileTrue: [
		(aBlock value: (self at: index)) ifTrue: [ ^index ].
		index := index - 1
	].
	^absentBlock value! !

! SequenceableCollection methodsFor: #indexing !
indexOfCollection: aCollection
	" Return the index position of the first occurrence of aCollection in the receiver (or 0). "

	| index1 index2 limit1 limit2 |
	limit2 := aCollection size.
	limit1 := self size - limit2 + 1.
	index1 := 1.
	[ index1 <= limit1 ] whileTrue: [
		(self at: index1) = (aCollection at: 1) ifTrue: [
			index2 := 2.
			[ index2 <= limit2 and: [
				(self at: index1 + index2 - 1) = (aCollection at: index2)
			] ] whileTrue: [ index2 := index2 + 1 ].
		index2 > limit2 ifTrue: [ ^index1 ]
		].
		index1 := index1 + 1
	].
	^0! !

! SequenceableCollection methodsFor: #replace !
replaceFrom: start to: stop with: aCollection
	" Return the receiver.
	Replace the elements of the receiver at index positions start through stop, with the elements of aCollection. "

	stop - start + 1 = aCollection size ifFalse: [
		^self error: 'Replacement has wrong size'
	].
	self
		replaceFrom: start
		to: stop
		with: aCollection
		startingAt: 1! !

! SequenceableCollection methodsFor: #replace !
replaceFrom: start
    to: stop
    with: aCollection
    startingAt: repStart
	" Return the receiver.
	Replace the elements of the receiver at index positions start through stop with consecutive
         elements of aCollection beginning at index position repStart.
	"

	| index1 index2 |
	(self == aCollection and: [ repStart < start ]) ifTrue: [ "do backward move for same object"
		index2 := repStart + stop - start.
		index1 := stop.
		[ start <= index1 ] whileTrue: [
			self at: index1 put: (aCollection at: index2).
			index1 := index1 - 1.
			index2 := index2 - 1
		].
		^self
	].
	index2 := repStart.
	index1 := start.
	[ index1 <= stop ] whileTrue: [
		self at: index1 put: (aCollection at: index2).
		index1 := index1 + 1.
		index2 := index2 + 1
	]! !

! SequenceableCollection methodsFor: #replace !
replaceFrom: start
    to: stop
    with: replacement
    startingWith: replacementStart
	" Replace the elements of the receiver. "

	^self
		replaceFrom: start
		to: stop
		with: replacement
		startingAt: replacementStart! !

! SequenceableCollection methodsFor: #replace !
replaceFrom: start to: stop withObject: anObject
	"Replace each of the elements of the receiver at index positions start through stop with anObject. "

	| index |
	index := start.
	[ index <= stop ] whileTrue: [
		self at: index put: anObject.
		index := index + 1
	].
	^anObject! !

! SequenceableCollection methodsFor: #iterating !
with: aCollection do: aBlock
	" For each pair of elements evaluate aBlock with those elements as the arguments. "

	| first second |
	first	:= self stream.
	second	:= aCollection stream.
	[ first atEnd or: [ second atEnd ] ] whileFalse: [
		aBlock value: first next value: second next
	].! !

SequenceableCollection
 subclass: #String
 instanceVariableNames: ''
 category: #Kernel!

! String class methodsFor: #accessing !
streamClass
	" Return the streamming support for the receiver's instances. "

	^StringStream! !

! String class methodsFor: #instantiation !
fromString: aString
	" Return an instance of the receiver. "

	<primitive: 'primFromString' module: 'SKString'>
	^self primitiveFailed. ! !

! String class methodsFor: #accessing !
cr
	" Return the singular instance. "

	^self fromCharCode: 13. ! !

! String class methodsFor: #accessing !
lf
	" Return the singular instance. "

	^self fromCharCode: 10. ! !

! String class methodsFor: #accessing !
crlf
	" Return the singular instance. "

	^self cr, self lf. ! !

! String class methodsFor: #accessing !
space
	" Return the singular instance. "

	^self fromCharCode: 32. ! !

! String class methodsFor: #accessing !
tab
	" Return the singular instance. "

	^self fromCharCode: 9. ! !

! String class methodsFor: #accessing !
zero
	" Return the singular instance. "

	^self fromCharCode: 0. ! !

! String class methodsFor: #instantiation !
with: aCharacter
	" Return an instance of the receiver. "

	^aCharacter!

with: aCharacter with: bCharacter
	" Return an instance of the receiver. "

	^aCharacter , bCharacter!

with: aCharacter with: bCharacter with: cCharacter
	" Return an instance of the receiver. "

	^aCharacter , bCharacter , cCharacter!

with: aCharacter with: bCharacter
	with: cCharacter with: dCharacter
	" Return an instance of the receiver. "

	^aCharacter , bCharacter , cCharacter , dCharacter! !

! String class methodsFor: #instantiation !
fromCharCode: anArrayOrNumber
	" Return an instance of the receiver. "

	<primitive: 'primFromCharCode' module: 'SKString'>
	^self primitiveFailed. ! !

! String class methodsFor: #'instance creation' !
streamContents: aBlock

	| stream |
	stream := '' writeStream.
	aBlock value: stream.
	^stream contents! !

! String class methodsFor: #doIt !
doItSelector
	" Return the selector to use for doIt evaluations.
	Warning: this selector will not be dump on image nor change log expressions.
	"

	^#skDoIt! !

! String methodsFor: #comparing !
= anObject
    " Return true if the receiver is equal to anObject. "

	<primitive:'primEquals' module:'SKString'>
	^false. ! !

! String methodsFor: #accessing !
size
	" Return the size of the receiver. "

	<primitive: 'primSize' module: 'SKString'>
	^self primitiveFailed. ! !

! String methodsFor: #accessing !
at: anIndex
	" Return the receiver at anIndex. "

	<primitive: 'primAt' module: 'SKString'>
	^self primitiveFailed. ! !

! String methodsFor: #accessing !
at: anIndex put: anObject
	" Set the receiver at anIndex. "

	^self errorReadOnly! !

! String methodsFor: #accessing !
at: anIndex ifAbsent: aBlock
	" Return the receiver at anIndex position or the result of evaluating aBlock. "

	^(self at: anIndex) ifNil: aBlock! !

! String methodsFor: #enumerating !
do: aBlock
	" Evaluate aBlock with the contents of the receiver. "

	<primitive:'primDo' module:'SKString'>
	^self primitiveFailed. ! !

! String methodsFor: #enumerating !
detect: aBlock ifNone: anotherBlock
	" Return the object in the receiver that return true when evaluated with aBlock or the result of evaluating anotherBlock. "

	<primitive:'primDetectIfNone' module:'SKString'>
	^self primitiveFailed. ! !

! String methodsFor: #testing !
includes: anObject
	" Return true if anObject is in receiver's contents. "

	^(self indexOf: anObject) > 0! !

! String methodsFor: #enumerating !
withIndexDo: aBlock
	" Evaluate aBlock with all the index positions in the receiver. "

	<primitive: 'primWithIndexDo' module: 'SKString'>
	^self primitiveFailed. ! !

! String methodsFor: #copying !
copyWithout: anObject
	" Return a copy of the receiver excluding anObject, if any. "

	^self replace: anObject with: ''! !

! String methodsFor: #conversion !
asSymbol
	" Return a symbol with the same characters as the receiver. "

	^self "we do not discriminate singular strings"! !

! String methodsFor: #evaluating !
argumentCount
	" Return the number of arguments required to evaluate the receiver. "

	(self includes: ':')
		ifTrue:[^(self occurrencesOf: ':')].
	(self match: '^[\|\&\\\+\*\/\=\>\<\,\@\%\~\-]') 
		ifTrue: [ ^1 ].
	^0 ! !

! String methodsFor: #testing !
isLiteral
	" Return true if the receiver can be output using literal notation. "

	^((RegularExpression fromString: '[^a-zA-Z0-9_:]') exec: self) isNil! !

! String methodsFor: #converting !
asLiteral
	" Return the receiver in literal notation. "

	^self isLiteral ifTrue: [ $# ,self ] ifFalse: [ self printString ]! !

! Object methodsFor: #converting !
asLiteral
	" Return the receiver in literal notation. "

	^self printString! !

! String methodsFor: #converting !
primMatch: aString
	" Return the list of matches in the receiver"

	<primitive: 'primMatch' module: 'SKString'>
	^self primitiveFailed. ! !

! String methodsFor: #testing !
occurrencesOf: aString
	" Return the times aString can be found in the receiver. "

	| result index |
	aString isString ifFalse: [
		result := self primMatch: aString.
		result isNil ifTrue: [ ^0 ].
		^result basicAt: 'length'
	].
	aString size = 1 ifTrue: [
		result := self primMatch: (RegularExpression
				fromString: '[',aString,']'
				flag: 'g').
		result isNil ifTrue: [ ^0 ].
		^result basicAt: 'length'
	].
	result := 0. index := 0.
	[	index := self indexOf: aString startingAt: index + 1.
		index > 1 ] whileTrue: [ result := result + 1 ].
	^result! !

! String methodsFor: #testing !
startsWith: aString
	" Returns true if the receiver begins with the characters of aString. "

	^self beginsWith: aString! !

! String methodsFor: #converting !
escaped
	" Return the receiver with escape codes. "

	<primitive: 'primEscaped' module: 'SKString'>
	^self primitiveFailed. ! !

! String methodsFor: #converting !
unescaped
	" Return the receiver from escape codes. "

	<primitive: 'primUnescaped' module: 'SKString'>
	^self primitiveFailed. ! !

! String methodsFor: #converting !
escapedCode
	" Return the code to reproduce receiver from (javascript) code. "

	| escaped |
	escaped := self escaped.
	escaped = self ifTrue: [ ^$" ,escaped ,$" ].
	^'unescape("' ,escaped ,'")'! !

! String methodsFor: #converting !
asEncodedURI
	" Return the receiver encoded as an URI component.
	Encodes special characters and it encodes the following characters: , / ? : @ & = + $ #"

	<primitive: 'primURIEncode' module: 'SKString'>
	^self primitiveFailed. ! !

! String methodsFor: #converting !
asDecodedURI
	" Return the receiver decoded as an URI component. "

	<primitive: 'primURIDecode' module: 'SKString'>
	^self primitiveFailed. ! !

! String methodsFor: #adding !
add: anObject
	" Add anObject to the receiver. "

	^self errorReadOnly! !

! Object methodsFor: #converting !
--> anObject
	" Return a far-association of the receiver to anObject. "

	^Association key: (self asArrayOfSubstringsSeparatedBy: $.) value: anObject! !

! String methodsFor: #copying !
, aString
	" Return a copy of the receiver with aString appended. "

	<primitive:'primConcat' module:'SKString'>
	^self primitiveFailed. ! !

! String methodsFor: #copying !
+ aString

	^self, aString! !

! String methodsFor: #copying !
copyWith: anObject
	" Return a copy of the receiver with anObject. "

	<primitive: 'primCopyWith' module: 'SKString'>
	^self primitiveFailed. ! !

! String methodsFor: #copying !
copyFrom: anIndex to: anotherIndex
	" Return the receiver between limits. "

	<primitive:'primCopyFromTo' module:'SKString'>
	^self primitiveFailed. ! !

! String methodsFor: #copying !
shallowCopy
	" Return a shallow copy of the receiver. "

	^self! !

! String methodsFor: #copying !
deepCopy
	" Return a deep copy of the receiver. "

	^self! !

! String methodsFor: #copying !
reversed
	" Return a string with the contents of the receiver in reverse order. "

	| result |
	result := ''.
	self reverseDo: [:c| result := result , c ].
	^result! !

! String methodsFor: #accessing !
indexOf: aString
	" Return the position of first occurrence of aString (or 0 if not present). "

	<primitive: 'primIndexOf' module: 'SKString'>
	^self primitiveFailed. ! !

! String methodsFor: #accessing !
indexOf: aString ifAbsent: aBlock
	" Return the position of first occurrence of aString (or the result of evaluating aBlock). "

	| result |
	result := self indexOf: aString.
	^result = 0 ifTrue: aBlock ifFalse: [ result ]! !

! String methodsFor: #accessing !
indexOf: aString startingAt: position
	" Return the position of first occurrence of aString after position (or 0 if not present). "

	<primitive: 'primIndexOfStartingAt' module: 'SKString'>
	^self primitiveFailed.! !

! String methodsFor: #accessing !
lastIndexOf: aString
	" Return the position of last occurrence of aString (or 0 if not present). "

	<primitive: 'primLastIndexOf' module: 'SKString'>
	^self primitiveFailed. ! !

! String methodsFor: #accessing !
lastIndexOf: aString ifAbsent: aBlock
	" Return the position of last occurrence of aString (or the result of evaluating aBlock). "

	| result |
	result := self lastIndexOf: aString.
	^result = 0 ifTrue: aBlock ifFalse: [ result ]! !

! String methodsFor: #accessing !
lastIndexOf: aString startingAt: position
	" Return the position of last occurrence of aString before position (or 0 if not present). "

	<primitive: 'primLastIndexOfStartingAt' module: 'SKString'>
	^self primitiveFailed. ! !

! String methodsFor: #accessing !
upTo: aString startingAt: position
	" Return the receiver upto first occurrence of aString after position. "

	| index |
	index := self indexOf: aString startingAt: position.
	index := index = 0 ifTrue: [ self size ] ifFalse: [ index - 1 ].
	^self copyFrom: position to: index! !

! String methodsFor: #accessing !
upTo: aCharacter
	" Return the receiver upto first occurrence of aCharacter. "

	^self upTo: aCharacter startingAt: 1! !

! String methodsFor: #accessing !
upToLast: aString
	" Return the receiver upto last occurrence of aString. "

	| index |
	index := self lastIndexOf: aString ifAbsent: [ ^self ].
	^self copyFrom: 1 to: index - 1! !

! String methodsFor: #accessing !
fromLast: aString
	" Return the receiver contents from last occurrence of aString. "

	| index |
	index := self lastIndexOf: aString ifAbsent: [ ^self ].
	^self copyFrom: index + aString size to: self size! !

! String class methodsFor: #private !
reservedWords
	" Private - Return the reserved names of javascript language. "

	^#(
	abstract	as		boolean		break		byte
	case		catch		char		class		continue
	const		debugger	default		delete		do
	double		else		enum		export		extends
	false		final		finally		float		for
	function	goto		if		implements	import
	in		instanceof	int		interface	is
	long		namespace	native		new		null
	package		private		protected	public		return
	short		static		super		switch		synchronized
	this		throw		throws		transient	true
	try		typeof		use		var		void
	volatile	while		with
	)! !

! String methodsFor: #converting !
asJavascriptName
	" Private - Return the receiver as a valid javascript name. "

	self first = $_ ifTrue: [ ^self ].
	(String reservedWords includes: self) ifTrue: [ ^'$$',self ].
	^self! !

! String methodsFor: #converting !
asSelector
	"Private - Return the receiver as a valid javascript selector. "

	<primitive: 'primAsSelector' module: 'SKString'>
	^self primitiveFailed. ! !
	
! String methodsFor: #converting !
asJavascript
	" Return the javascript representation of the receiver. "

	<primitive:'primAsJavascript' module: 'SKString'>
	^self primitiveFailed. ! !

! String methodsFor: 'regular expressions' !
replace: aString with: anotherString
	" Return the result of replacement of aString with anotherString in the receiver. "

	<primitive:'primReplaceWith' module:'SKString'>
	^self primitiveFailed. ! !

! String methodsFor: 'regular expressions' !
replaceAll: aString with: otherString
	" Return the result of replacement of aString with anotherString in the receiver. "

	^self
		replace: aString
		with: otherString! !

! String methodsFor: 'regular expressions' !
replaceRegexp: aRegexp with: aString
	" Return the result of replacement of aRegexp with aString in the receiver. "

	<primitive:'primReplaceRegExp' module: 'SKString'>
	aRegexp isRegExp
		ifFalse:[^self error: 'First argument must be a Regular Expression']
	aString isString
		ifFalse:[^self error: 'Seconds argument must be a String']
	self primitiveFailed. ! !

! String methodsFor: #coverting !
asStream
	"Answer the receiver as a Stream."

	^self stream! !

! String methodsFor: #converting !
tokenize: aString
	" Return the split tokenization of the receiver. "

	<primitive:'primTokenize' module: 'SKString'>
	^self primitiveFailed. ! !

! String methodsFor: #converting !
asArrayOfSubstrings
	" Return an array of substrings from the receiver.
	The receiver is divided into substrings by one or more occurrences of separators.
	"

	| result start i |
	result := Array new. i := 1.
	self do: [:c|
		start isNil ifTrue: [ "in separator"
			c isSeparator ifFalse: [ "start of substring"
				start := i.
			]
		] ifFalse: [ "in word"
			c isSeparator ifTrue: [ "end of substring"
				result add: (self copyFrom: start to: i - 1).
				start := nil.
			].
		].
		i := i + 1.
	].
	start notNil ifTrue: [
		result add: (self copyFrom: start to: self size)
	].
	^result! !

! String methodsFor: #converting !
asArrayOfSubstringsSeparatedBy: aCharacter
	" Return an array of substrings from the receiver.
	The receiver is divided into substrings by one or more occurrences of aCharacter.
	"

	^self tokenize: aCharacter! !

! String methodsFor: 'regular expressions' !
match: aString
	" Return the whether a string matches. "

	<primitive: 'primMatchRegExp' module: 'SKString'>
	^self primitiveFailed. ! !

! String methodsFor: #converting !
asString
	" Return the text representation of the receiver. "

	^self! !

! String methodsFor: #testing !
between: min and: max
	" Return true if the receiver is greater than or equal to min and less than or equal to max. "

	^min <= self and: [ self <= max ]! !

! String methodsFor: #testing !
isLetter
	" Return true if the receiver is a one character letter. "

	<primitive: 'primIsLetter' module: 'SKString'>
	^self primitiveFailed. ! !

! String methodsFor: #testing !
isDigit
	" Return true if the receiver is one character numeric digit. "

	<primitive: 'primIsDigit' module: 'SKString'>
	^self primitiveFailed. ! !

! String methodsFor: #testing !
isAlphaNumeric
	"Answer true if the receiver is an alphanumeric character. "

	^self isDigit or: [self isLetter]! !

! String methodsFor: #testing !
isUpperCase
	" Return true if all the receiver characters are uppercase. "

	^(self match: '[^A-Z]') not! !

! String methodsFor: #testing !
isLowerCase
	" Return true if all the receiver characters are lowercase. "

	^(self match: '[^a-z]') not! !

! String methodsFor: #testing !
isUppercase
	" Return true if the receiver is one character uppercase. "

	^self isUpperCase! !

! String methodsFor: #testing !
isLowercase
	" Return true if the receiver is one character lowercase. "

	^self isLowerCase! !

! String methodsFor: #testing !
includesSubstring: aString

	^(self indexOf: aString) > 0! !

! String methodsFor: #converting !
asUppercase
	" Return a copy of the receiver converted to uppercase. "

	<primitive:'primAsUppercase' module:'SKString'>
	^self primitiveFailed. ! !

! String methodsFor: #converting !
asUpperCase
	" Return a copy of the receiver converted to uppercase. "

	^self asUppercase! !

! String methodsFor: #converting !
asLowercase
	" Return a copy of the receiver converted to lowercase. "

	<primitive: 'primAsLowercase' module: 'SKString'>
	^self primitiveFailed. ! !

! String methodsFor: #converting !
asLowerCase
	" Return a copy of the receiver converted to lowercase. "

	^self asLowercase! !

! String methodsFor: #converting !
asSmalltalkName: upCase
	" Return a copy of the receiver converted to a smalltalk global name. "

	| up result |
	(upCase not and: [ (self match: '[a-z]') not ]) ifTrue: [
		^self asLowercase asSmalltalkName: upCase
	].
	up := upCase.
	result := self inject: '' into: [:resultString :each|
		('_:.&%$?' includes: each) ifTrue: [ up := true. resultString ]
		ifFalse: [ resultString , (up
			ifTrue: [  up := false. each asUppercase ]
			ifFalse: [each])
		]
	].
	result isEmpty ifTrue: [ ^$_ ].
	upCase ifTrue: [
		result first isLowercase ifTrue: [
			^result first asUppercase ,(result copyFrom: 2 to: result size)
		]
	] ifFalse: [
		result first isUppercase ifTrue: [
			^result first asLowercase ,(result copyFrom: 2 to: result size)
		]
	].
	^result! !

! String methodsFor: #converting !
asGlobalName
	" Return a copy of the receiver converted to a smalltalk global name. "

	^self asSmalltalkName: true! !

! String methodsFor: #converting !
asLocalName
	" Return a copy of the receiver converted to a smalltalk local name. "

	^self asSmalltalkName: false! !

! String methodsFor: #converting !
digitValue
	" Return the digit value of the receiver (or -1). "

	^('0123456789ABCDEF' indexOf: self) - 1 max: 0 - 1! !

! String methodsFor: #converting !
asNumber
	" Return the receiver as a Number. "

	<primitive: 'primAsNumber' module: 'SKString'>
	(self includes: "$r"'r') ifTrue: [
		^Number readFrom: self readStream
	].
	^self primitiveFailed ! !

! String methodsFor: #error !
errorReadOnly
	" Private - The receiver is read-only instance. "

	^self error: 'Strings are immutable. Attempt to change "', self printString , '"'! !

! String methodsFor: #printing !
printOn: aStream

	| escapedSelf |
	escapedSelf := self replaceAll: '''' with: ''''''.
	aStream
		nextPut: $';
		nextPutAll: escapedSelf;
		nextPut: $'! !

! String methodsFor: #testing !
isString
	" Return true if the receiver is a String. "

	^true! !

! String methodsFor: #testing !
isBackSlash
	" Return true if the receiver is a back-slash string. "

	^self = $\ ! !

! String methodsFor: #comparing !
> aString
	" Return true if the receiver is greater than aString. "

	<primitive: 'primGreaterThan' module: 'SKString'>
	^self primitiveFailed. ! !

! String methodsFor: #comparing !
< aString
	" Return true if the receiver is smaller than aString. "

	<primitive: 'primLessThan' module: 'SKString'>
	^self primitiveFailed. ! !

! String methodsFor: #comparing !
>= aString
	" Return true if the receiver is greater than or equal to aString. "

	<primitive: 'primGreaterThanEqualTo' module: 'SKString'>
	^self primitiveFailed. ! !

! String methodsFor: #comparing !
<= aString
	" Return true if the receiver is smaller than or equal to aString. "

	<primitive:'primLessThanEqualTo' module:'SKString'>
	^self primitiveFailed.! !

! String methodsFor: #comparing !
equalsIgnoreCase: aString

	^self asLowercase = aString asLowercase! !

! String methodsFor: #removing !
remove: anObject ifAbsent: aBlock
	" Remove anObject from the receiver. "

	^self errorReadOnly! !

! String methodsFor: #converting !
asJSONObject
	" Return the mapping of the receiver to JSON structure. "

	^self , ''
"Note:	we need to normalize result to do not destroy typeof checkings
	Do NOT modify this method if you do not know what you are doing.
	If you remove the ,'' computation, the returned object will return 'object' and not 'string' as result of typeof operation.
"! !

! Object methodsFor: #testing !
isCharacter
	" Return true if the receiver is a character. "

	^false! !

! String methodsFor: #testing !
isCharacter
	" Characters - Implemented to support Character protocoll for one-character Strings. "

	^self size = 1 !

asciiValue
	" Characters - Return the number corresponding to the ASCII encoding of the first character of the receiver. "

	<primitive: 'primAsciiValue' module: 'SKString'>
	^self primitiveFailed. ! !

! String methodsFor: #testing !
isSeparator
	" Return true if the receiver character is either a space, tab, carriage-return, line-feed, form-feed character, or double-byte space, else answer false."

	<primitive: 'primIsSeparator' module: 'SKString'>
	^self primitiveFailed. ! !

! String methodsFor: #converting !
asAsciiZ
	" Return the receiver with ascii zero appended. "

	^self , self class zero! !

! String methodsFor: #selecting !
trimFirst: firstBlock last: lastBlock
	" Return a String containing the result of trimming characters matching blocks from both sides of the receiver. "

	| start stop |
	start := 1. stop := self size.
	[	start > stop ifTrue: [ ^String new ].
		firstBlock value: (self at: start)
	] whileTrue: [ start := start + 1 ].
	[	stop < start ifTrue: [ ^String new ].
		lastBlock value: (self at: stop)
	] whileTrue: [ stop := stop - 1 ].
	^self copyFrom: start to: stop!

trim: aBlock
	" Return a String containing the result of trimming characters matching aBlock from both sides of the receiver. "

	^self trimFirst: aBlock last: aBlock!

trimFirst: aBlock
	" Return a String containing the result of trimming characters matching aBlock from start of the receiver. "

	^self trimFirst: aBlock last: [:c| false ]!

trimLast: aBlock
	" Return a String containing the result of trimming characters matching aBlock from end of the receiver. "

	^self trimFirst: [:c| false ] last: aBlock!

trimBlanks
	" Return a String containing the receiver string with leading and trailing blanks removed. "

	^self trim: [:c| c isSeparator ]! !

! String methodsFor: #selecting !
trim: aBlock
	" Return a String containing the result of trimming characters matching aBlock from both sides of the receiver. "

	aBlock isCharacter
		ifTrue: [^self trim: [:each | each = aBlock]].
	^self trimFirst: aBlock last: aBlock! !

SequenceableCollection
 subclass: #Array
 instanceVariableNames: ''
 category: #Kernel!

! Array class methodsFor: #instantiation !
new
	" Return an instance of the receiver. "

	^#()! !

! Array class methodsFor: #instantiation !
basicNew: size
	" Return an instance of the receiver of specified size. "

	<primitive: 'primBasicNew' module: 'SKArray'>
	^self primitiveFailed. ! !

! Array class methodsFor: #instantiation !
new: size
	" Return an instance of the receiver of specified size. "

	^self basicNew: size ! !

! Array class methodsFor: #instantiation !
with: anObject
	" Return an instance of the receiver. "

	| arr |
	arr := self basicNew: 1.
	arr at: 1 put: anObject.
	^arr. ! !

! Array class methodsFor: #instantiation !
with: anObject with: anotherObject
	" Return an instance of the receiver. "

	| arr |
	arr := self basicNew: 2.
	arr at: 1 put: anObject.
	arr at: 2 put: anotherObject.
	^arr. ! !

! Array class methodsFor: #instantiation !
with: firstObject with: secondObject with: thirdObject
	" Return an instance of the receiver. "

	| arr |
	arr := self basicNew: 3.
	arr at: 1 put: firstObject.
	arr at: 2 put: secondObject.
	arr at: 3 put: thirdObject.
	^arr. ! !

! Array class methodsFor: #instantiation !
withAll: aCollection
	" Return an instance of the receiver. "

	| arr index |
	index := 1.
	arr := Array basicNew: aCollection size.
	aCollection do: [ :each | (arr at: index put: each). index := index + 1].
	^arr. ! !

! Array class methodsFor: #instantiation !
with: firstObject with: secondObject with: thirdObject with: fourthObject
	" Return an instance of the receiver. "

	| arr |
	arr := self basicNew: 4.
	arr at: 1 put: firstObject.
	arr at: 2 put: secondObject.
	arr at: 3 put: thirdObject.
	arr at: 4 put: fourthObject.
	^arr. ! !

! Array methodsFor: #accessing !
size
	" Return the size of the receiver. "

	<primitive: 'primSize' module: 'SKArray'>
	^self primitiveFailed. ! !

! Array methodsFor: #accessing !
at: anIndex put: anObject
	" Set the contents of the receiver at anIndex. "

	<primitive:'primAtPut' module:'SKArray'>
	^self primitiveFailed. ! !

! Array methodsFor: #accessing !
at: anIndex
	" Return the contents of the receiver at anIndex. "

	<primitive: 'primAt' module: 'SKArray'>
	^self primitiveFailed. ! !

! Array methodsFor: #accessing !
at: anIndex ifAbsent: aBlock
	" Return the contents of the receiver at anIndex or the result of evaluating aBlock. "

	<primitive:'primAtIfAbsent' module:'SKArray'>
	^self primitiveFailed. ! !

! Array methodsFor: #enumerating !
do: aBlock
	" Evaluate aBlock with the contents of the receiver. "

	<primitive:'primDo' module:'SKArray'>
	^self primitiveFailed. ! !

! Array methodsFor: #testing !
isArray
	" Return true if the receiver is an Array. "

	^self class == Array! !

! Array methodsFor: #adding !
addAll: aCollection
	" Add objects in aCollection to the receiver. "

	<primitive:'primAddAll' module:'SKArray'>
	aCollection isCollection ifTrue:[^self addAll: aCollection asArray].
	^self primitiveFailed. ! !

! Array methodsFor: #copying !
shallowCopy
	" Return a shallow copy of the receiver. "

	<primitive: 'primShallowCopy' module: 'SKArray'>
	^self primitiveFailed. ! !

! Array methodsFor: #copying !
deepCopy
	" Return a deep copy of the receiver. "

	^self collect: [:each | each deepCopy ]! !

! Array methodsFor: #copying !
copyFrom: anIndex to: anotherIndex
	" Return the receiver contents in the interval. "

	| result |
	result := self class new.
	anIndex to: anotherIndex do: [:each | result add: (self at: each) ].
	^result! !

! Array methodsFor: #copying !
copyWithAll: aCollection
	" Return a copy of the receiver with all contents of aCollection. "

	<primitive:'primCopyWithAll' module:'SKArray'>
	aCollection isCollection ifTrue:[^self copyWithAll: aCollection asArray].
	^self primitiveFailed. ! !

! Array methodsFor: #copying !
, aCollection
	" Return a copy of the receiver with all contents of aCollection. "

	^self copyWithAll: aCollection. ! !

! Array methodsFor: #enumerating !
join: aString
	" Return a string with the receiver's contents separated by aString. "

	<primitive: 'primJoin' module: 'SKArray'>
	^self primitiveFailed. ! !

! Array methodsFor: #converting !
asJavascript
	" Return the javascript representation of the receiver. "

	^'[', ((self collect: [:each | each asJavascript]) join: ', '),  ']'! !

! Array methodsFor: #sorting !
sort: aBlock
	" Sort (inplace) the receiver's contents with aBlock. "

	<primitive: 'primSort' module: 'SKArray'>
	^self primitiveFailed. ! !

! Array methodsFor: #converting !
asArray
	" Return an array with the contents of the receiver. "

	^self! !

! Array methodsFor: #removing !
remove: anObject ifAbsent: aBlock
	" Remove anObject from the receiver.
	Return the result of evaluating aBlock if anObject is not in the receiver."
	
	<primitive:'primRemoveIfAbsent' module:'SKArray'>
	^self primitiveFailed. ! !

! Array methodsFor: #adding !
add: anObject
	" Add anObject to the receiver. "

	^self addLast: anObject. ! !

! Array methodsFor: #adding !
addLast: anObject
	" Add anObject to the receiver. "

	<primitive:'primAddLast' module:'SKArray'>
	^self primitiveFailed. ! !

! Array methodsFor: #adding !
addFirst: anObject
	" Add anObject to the receiver. "

	<primitive:'primAddFirst' module:'SKArray'>
	^self primitiveFailed. ! !

! Array methodsFor: #removing !
removeLast
	" Remove the last object in the receiver. "

	^self pop! !

! Array methodsFor: #removing !
removeFirst
	" Remove the first object in the receiver. "

	<primitive: 'primRemoveFirst' module: 'SKArray'>
	^self primitiveFailed. ! !

! Array methodsFor: #removing !
removeAll
	" Remove all the objects in the receiver. "

	<primitive: 'primRemoveAll' module: 'SKArray'>
	^self primitiveFailed. ! !

! Array methodsFor: #removing !
removeIndex: index
	" Remove the element at index. "

	<primitive: 'primRemoveIndex' module: 'SKArray'>
	^self primitiveFailed. ! !

! Array methodsFor: #sorting !
sorted
	" Return a sorted copy of the receiver. "

	^self copy sort! !

! Array methodsFor: #sorting !
sorted: aBlock
	" Return a sorted copy of the receiver. "

	^self copy sort: aBlock! !

! Array methodsFor: #accessing !
atAllPut: anObject
	" Replace all elements of the receiver with anObject. "

	<primitive: 'primAtAllPut' module: 'SKArray'>
	^self primitiveFailed. ! !

! Array methodsFor: #accessing !
polyAt: index
	" Return the object in the receiver for either JS or ST array"

	^(self basicAt: index-1) ifUndefined: [self at: index]! !


! Array methodsFor: #accessing !
first
	" Return the object in the receiver. "

	^self polyAt: 1! !

! Array methodsFor: #accessing !
second
	" Return the object in the receiver. "

	^self polyAt: 2! !

! Array methodsFor: #accessing !
third
	" Return the object in the receiver. "

	^self polyAt: 3! !

! Array methodsFor: #accessing !
fourth
	" Return the object in the receiver. "

	^self polyAt: 4! !

! Array methodsFor: #enumerating !
withIndexDo: aBlock
	" Evaluate aBlock with all the index positions in the receiver. "

	<primitive: 'primWithIndexDo' module: 'SKArray'>
	^self primitiveFailed. ! !

! Array methodsFor: #printing !
printString
	" DEBUG - Temporary printing method (must check for recursion). "

	| result |
	self isEmpty ifTrue: [ ^'#()' ].
	result := '#( '.
	self do: [:each|
		result size > 10000 ifTrue: [ ^result,'...)' ].
		result := result , (
			(self isObject: each)
			ifTrue: [ each printString ]
			ifFalse: [ each ]) ,' '
	].
	^result,')'! !

! Array methodsFor: #converting !
asLiteral
	" Return the receiver in literal notation. "

	| result |
	self isEmpty ifTrue: [ ^'#()' ].
	result := '#( '.
	self do: [:each|
		result := result , (
			(self isObject: each)
			ifTrue: [ each asLiteral ]
			ifFalse: [ each ]) ,' '
	].
	^result,')'! !

! Array methodsFor: #converting !
asJSONObject
	" Return an Array with the contents of the receiver converted to JSON structures. "

	^self collect: [:each|
		(self isObject: each)
		ifTrue: [ each asJSONObject ]
		ifFalse: [ each ]
	]! !

! Array methodsFor: #converting !
json
	" Return an Array with the contents of the receiver converted to JSON structures. "

	^self collect: [:each|
		(self isObject: each)
		ifTrue: [ each json ]
		ifFalse: [ each ]
	]! !

Object
 subclass: #RegularExpression
 instanceVariableNames: ''
 category: #Kernel!

! RegularExpression methodsFor: #accessing !
isRegExp

	^true ! !

! RegularExpression methodsFor: #evaluating !
compile: aString
	" Return the result of compilation of aString. "

	<primitive: 'primCompile' module: 'SKRegularExpression'>
	^self primitiveFailed. ! !

! RegularExpression methodsFor: #evaluating !
exec: aString
	" Return the result of excecution of aString. "

	<primitive: 'primExec' module: 'SKRegularExpression'>
	^self primitiveFailed. ! !

! RegularExpression methodsFor: #evaluating !
test: aString
	" Return the result of testing of aString. "

	<primitive: 'primTest' module: 'SKRegularExpression'>
	^self primitiveFailed. ! !

! RegularExpression class methodsFor: #instantiation !
fromString: aString flag: anotherString
	" Return an instance of the receiver. "

	<primitive:'primFromString' module:'SKRegularExpression'>
	^self primitiveFailed. ! !

! RegularExpression class methodsFor: #instantiation !
fromString: aString
	" Return an instance of the receiver. "

	    ^self fromString: aString flag: ''! !

! RegularExpression methodsFor: #copying !
shallowCopy
	" Return a shallow copy of the receiver. "

	^self! !

! RegularExpression methodsFor: #copying !
deepCopy
	" Return a deep copy of the receiver. "

	^self! !

! RegularExpression methodsFor: #converting !
asJSONObject
	" Return the mapping of the receiver to JSON structure. "

	^self! !

! Exception class methodsFor: #instantiation !
signal: aString
	" Signal an instance of the receiver. "

	^self new
		messageText: aString;
		signal!

signal

	^self new signal! !

! Exception methodsFor: #accessing !
messageText
	" Return the messageText of the receiver. "

	^messageText! !

! Exception methodsFor: #accessing !
description
	" Return the description of the receiver. "

	^self messageText asString! !

! Exception methodsFor: #accessing !
messageText: aString
	" set the messageText of the receiver. "

	messageText := aString! !

! Exception methodsFor: #signaling !
signal
	" Signal/throw the receiver. "

	<primitive: 'primSignal' module: 'SKException'>
	^self primitiveFailed ! !


Object
 subclass: #Association
 instanceVariableNames: 'key value'
 category: #Kernel!

! Association class methodsFor: #instantiation !
key: aKey
	" Return an instance of the receiver. "

	^self new key: aKey! !

! Association class methodsFor: #instantiation !
key: aKey value: aValue
	" Return an instance of the receiver. "

	^(self key: aKey) value: aValue! !

! Association methodsFor: #comparing !
= anAssociation
	" Return true if the receiver is equal to anAssociation. "

	^self class = anAssociation class and: [
	    self key = anAssociation key and: [
		self value = anAssociation value]]! !

! Association methodsFor: #accessing !
key: aKey
	" Set the key of the receiver. "

	key := aKey! !

! Association methodsFor: #accessing !
key
	" Return the key of the receiver. "

	^key! !

! Association methodsFor: #accessing !
value: aValue
	" Set the value of the receiver. "

	value := aValue! !

! Association methodsFor: #accessing !
value
	" Return the value of the receiver. "

	^value! !

! Association methodsFor: #testing !
isAssociation
	" Return true if the receiver is anAssociation. "

	^true! !

! Object methodsFor: #testing !
isAssociation
	" Return true if the receiver is anAssociation. "

	^false! !

! Association methodsFor: #printing !
toString
	" Return a printable representation of the receiver. "

	| literal |
	literal := (self isObject: self key)
		ifTrue: [ self key asLiteral ]
		ifFalse: [ self key toString ].
	^'(', literal ,' -> ' ,self value toString ,')'! !

Collection
 subclass: #KeyedCollection
 instanceVariableNames: ''
 category: #Kernel!

KeyedCollection
 subclass: #Dictionary
 instanceVariableNames: 'keys values'
 category: #Kernel!

! Object methodsFor: #query !
isDictionary
	" Returns true if the receiver is a dictionary. "

	^false! !

! Dictionary class methodsFor: #instantiation !
basicNew: size
	" Return an instance of the receiver of specified size. "

	^self new! !

! Dictionary class methodsFor: #instantiation !
fromKeys: keys and: values
	" Return an instance of the receiver. "

	^self basicNew initializeKeys: keys values: values! !

! Dictionary methodsFor: #initialize !
initialize
	" Private - Initialize the receiver. "

	super initialize.
	keys := Set new.
	values := #()! !

! Dictionary methodsFor: #initialize !
initializeKeys: privateKeys values: privateValues
	" Private - Initialize the receiver. "

	super initialize.
	keys := Set newContents: privateKeys.
	values := privateValues asArray! !

! Dictionary methodsFor: #accessing !
size
	" Return the size of the receiver. "

	^keys size! !

! Dictionary methodsFor: #accessing !
keys
	" Return the keys of the receiver. "

	^keys asArray! !

! Dictionary methodsFor: #testing !
isEmpty
	" Return true if the receiver is empty. "

	^keys isEmpty! !

! Dictionary methodsFor: #private !
lookUpKey: aKey
	" Private - Return the index where aKey is found, or nil. "

	^keys indexOf: aKey ifAbsent: [ nil ]! !

! Dictionary methodsFor: #enumerating !
keysAndValuesDo: aBlock
	" Evaluate aBlock for key/value pairs of the receiver. "

	keys contents withIndexDo: [:aKey :index | aBlock value: aKey value: (values at: index) ]! !

! Dictionary methodsFor: #accessing !
keys
	" Return the keys of the receiver. "

	^keys copy! !

! Dictionary methodsFor: #enumerating !
keysDo: aBlock
	" Evaluate aBlock with the keys of the receiver. "

	keys do: aBlock! !

! Dictionary methodsFor: #accessing !
values
	" Return the values of the receiver. "

	^values copy! !

! Dictionary methodsFor: #accessing !
at: aKey put: aValue
	" Set the value at aKey of the receiver. "

	| index |
	index := self lookUpKey: aKey.
	index isNil
		ifTrue: [ keys add: aKey. values add: aValue.]
		ifFalse: [ values at: index put: aValue ].
	^aValue! !

! Dictionary methodsFor: #accessing !
at: aKey ifAbsent: aBlock
	" Return the value at aKey or the result of evaluating aBlock. "

	| index |
	index := self lookUpKey: aKey.
	index isNil ifTrue: [ ^aBlock value ].
	^values at: index! !

! Dictionary methodsFor: #accessing !
at: aKey ifAbsentPut: aBlock
	" Return the value at aKey, or add the result of evaluating aBlock to the receiver if it is absent. "

	| index |
	index := self lookUpKey: aKey.
	index isNil ifTrue: [ ^self at: aKey put: aBlock value ].
	^values at: index! !

! Dictionary methodsFor: #enumerating !
do: aBlock
	" Evaluates aBlock for all values in the receiver. "

	^values do: aBlock! !

! Dictionary methodsFor: #enumerating !
detect: aBlock ifNone: anotherBlock
	" Detect the value who matches aBlock.
	Return the result of evaluating aBlock if no value matches detection block.
	"

	^values detect: aBlock ifNone: anotherBlock! !

! Dictionary methodsFor: #testing !
includes: anObject
	" Return true if the receiver's values include anObject. "

	^values includes: anObject! !

! Dictionary methodsFor: #testing !
isDictionary

	^true! !

! Dictionary methodsFor: #enumerating !
includesKey: aKey
	" Return true if the receiver's keys include aKey. "

	^keys includes: aKey! !

! Dictionary methodsFor: #removing !
removeKey: aKey ifAbsent: aBlock
	" Remove the binding at aKey. "

	| index |
	index := self lookUpKey: aKey.
	index isNil ifTrue: [ ^aBlock value ].
	keys remove: aKey ifAbsent: [ ^aBlock value ].
	values removeIndex: index.! !

! Dictionary methodsFor: #accessing !
keyForValue: anObject ifAbsent: aBlock
	" Return the key in the receiver for value anObject, or the result of evaluating aBlock. "

	self keysAndvaluesDo: [:key :aValue| anObject == aValue ifTrue: [ ^key ] ].
	^aBlock value! !

! Dictionary methodsFor: #converting !
asJavascript
	" Return the javascript representation of the receiver. "

	^'smalltalk.',self class name
		,'.fromKeys_and_(' ,keys asArray asJavascript
			,',' ,values asJavascript ,')'! !

KeyedCollection
	subclass: #PoolDictionary
	instanceVariableNames: ' size '
	category: #Kernel !

Object
 subclass: #ClassBuilder
 instanceVariableNames: ''
 category: #Kernel!

! ClassBuilder methodsFor: #instantiation !
superclass: aClass subclass: aString
	" Create/Register a new class in the system. "

	^self
		superclass: aClass
		subclass: aString
		instanceVariableNames: ''
		category: nil! !

!ClassBuilder methodsFor: #instantiation!
superclass: aClass
	subclass: aString
	instanceVariableNames: aString2
	classVariableNames: classVarNames
	poolDictionaries: poolVarNames
	category: aString3
	" Create/Register a new class in the system. "

	| result aCategory |
	aCategory := aString3 isNil ifTrue: [
			aClass isNil ifTrue: [ #unclassified ]
			ifFalse: [ aClass category ]
		] ifFalse: [ aString3 ].
	result := self
		addSubclassOf: aClass named: aString
		instanceVariableNames: (self instanceVariableNamesFor: aString2).
	self setupClass: result.
	result
		classVariableNames: classVarNames;
		poolDictionaryNames: poolVarNames;
		category: aCategory.
	(aClass notNil and: [ Smalltalk includesKey: #Exporter ]) ifTrue: [
		self print: (Exporter new exportNew: result)
	].
	^result! !

!ClassBuilder methodsFor: #instantiation!
superclass: aClass
	subclass: aString
	instanceVariableNames: aString2
	category: aString3
	" Create/Register a new class in the system. "

	^self
		superclass: aClass
		subclass: aString
		instanceVariableNames: aString2
		classVariableNames: ''
		poolDictionaries: ''
		category: aString3! !

!ClassBuilder methodsFor: #private !
basicClass: aMetaClass instanceVariableNames: anArray
	" Private - Register instance variables onto aMetaClass. "

	^self smalltalk metaVarNames: aMetaClass array: anArray! !

!ClassBuilder methodsFor: #metaclass !
class: aMetaClass instanceVariableNames: aString
	" Register instance variable names onto aMetaClass. "

	| varNames |
	aMetaClass isMetaclass ifFalse: [
		^self error: aMetaClass name, ' is not a metaclass'
	].
	varNames := self instanceVariableNamesFor: aString.
	(self basicClass: aMetaClass instanceVariableNames: varNames) ifFalse: [ ^self ].
	self setupClass: aMetaClass.
	(Smalltalk includesKey: #Exporter) ifTrue: [
		self print: (Exporter new exportMetaDefinitionOf: aMetaClass instanceClass)
	].! !

! ClassBuilder methodsFor: #private !
instanceVariableNamesFor: aString
	" Private - Return the instance variable names string. "

	^(aString tokenize: ' ') reject: [:each | each isEmpty ]! !

! ClassBuilder methodsFor: #private !
addSubclassOf: aClass named: aString instanceVariableNames: aCollection
	" Private - Add the subclass to system. "

	<primitive: 'primAddSubclassOfNamedInstanceVariableNames' module: 'SKClassBuilder'>
	^self primitiveFailed ! !

! ClassBuilder methodsFor: #private !
setupClass: aClass
	" Private - Bind/initialize the class delegation chain. "

"OBSOLETE -	self smalltalk #init: aClass"! !

Object
 subclass: #Stream
 instanceVariableNames: 'collection position readLimit'
 category: #Kernel!

! Stream methodsFor: #accessing !
collection
	" Private - Return the collection of the receiver. "

	^collection! !

! Stream methodsFor: #accessing !
collection: aCollection
	" Private - Set the collection of the receiver. "

	collection := aCollection! !

! Stream methodsFor: #accessing !
setCollection: aCollection
	" Private - Set the receiver stream collection to aCollection. "

	self collection: aCollection! !

! Stream methodsFor: #converting !
asStream
	"Answer the receiver as a Stream."

	^self! !

! Stream methodsFor: #initialize !
initialize
	" Private - Initialize the receiver. "

	super initialize.
	position := 0.! !

! Stream methodsFor: #accessing !
position
	" Return the position of the receiver. "

	^position! !

! Stream methodsFor: #accessing !
position: anInteger
	" Set the position of the receiver. "

	position := anInteger! !

! Stream methodsFor: #accessing !
readLimit
	" Private - Return the read limit of the receiver. "

	readLimit == nil ifTrue: [ readLimit := self collection size ].
	^readLimit! !

! Stream methodsFor: #accessing !
readLimit: anInteger
	" Private - Set the stream size of the receiver. "

	readLimit := anInteger! !

! Stream methodsFor: #accessing !
contents
	" Return the contents of the receiver. "

	| result |
	result := self collection.
	self readLimit = result size ifTrue: [ ^result ].
	^result copyFrom: 1 to: self readLimit! !

! Stream methodsFor: #accessing !
size
	" Return the size of the receiver. "

	^self readLimit! !

! Stream methodsFor: #actions !
reset
	" Reset the receiver. "

	self position: 0! !

! Stream methodsFor: #actions !
close
	" Close the receiver. "! !

! Stream methodsFor: #io !
flush
	" OBSOLETE - Flush the receiver. "! !

! Stream methodsFor: #actions !
resetContents
	" Reset the receiver contents. "

	self reset; readLimit: 0! !

! Stream methodsFor: #enumerating !
do: aBlock
	" Evaluates aBlock streaming on the receiver. "

	[ self atEnd ] whileFalse: [ aBlock value: self next ]! !

! Stream methodsFor: #positioning !
setToEnd
	" Position the receiver at end. "

	self position: self size! !

! Stream methodsFor: #positioning !
skip: anInteger
	" Skip next anInteger readable elements in the receiver. "

	self position: ((anInteger + self position min: self size) max: 0)! !

! Stream methodsFor: #reading !
next
	" Return the next readable element in the receiver. "

	self position: self position + 1.
	^collection at: self position! !

! Stream methodsFor: #reading !
next: anInteger
	" Return the next anInteger elements read from the receiver.
	If the receiver reach its end, the returned collection has less elements.
	"

	| result |
	result := self collection class new.
	anInteger timesRepeat: [
		self atEnd ifTrue: [ ^result ].
		result add: self next.
	].
	^result! !

! Stream methodsFor: #testing !
isStream
	"Answer true if receiver is a kind of Stream."

	^true! !

! Object methodsFor: #testing !
isStream
	"Answer true if the receiver is a kind of Stream."

	^false! !

! Stream methodsFor: #writing !
nextPut: anObject
	" Put anObject onto the receiver. "

	self position: self position + 1.
	self collection at: self position put: anObject.
	self readLimit: (self readLimit max: self position)! !

! Stream methodsFor: #writing !
nextPutAll: aCollection
	" Put aCollection onto the receiver. "

	aCollection do: [:each | self nextPut: each ]! !


! Stream methodsFor: #writing !
lf
	" Put a line break sequence onto the receiver.
	Note: this implementation MUST be consistent with #nextLine
	"

	self nextPutAll: String lf! !

! Stream methodsFor: #writing !
cr
	" Put a line break sequence onto the receiver.
	Note: this implementation MUST be consistent with #nextLine
	"

	self nextPutAll: String crlf! !

! Stream methodsFor: #writing !
space
	" Put a space sequence onto the receiver. "

	self nextPutAll: String space! !

! Stream methodsFor: #writing !
tab
	" Put a tab sequence onto the receiver. "

	self nextPutAll: String tab! !

! Stream methodsFor: #reading !
peek
	" Return the next readable element from the receiver without advancing the receiver; or nil. "

	^self atEnd ifFalse: [
	    self collection at: self position + 1
	]! !

! Stream methodsFor: #reading !
peekFor: anObject
	" Return true if the next readable element from the receiver equals anObject.
	Advance the receiver if the result is true.
	"

	^anObject = self peek and: [
		self atEnd ifFalse: [ self next ].
		true
	]! !

! Stream methodsFor: #testing !
atEnd
	" Return true if the receiver is at end. "

	^self position >= self size! !

! Stream methodsFor: #testing !
atStart
	" Return true if the receiver is at start position. "

	^self position = 0! !

! Stream methodsFor: #testing !
isEmpty
	" Return true if the receiver is empty. "

	^self size = 0! !

! Stream methodsFor: #testing !
notEmpty
	" Return true if the receiver is not empty. "

	^self isEmpty not! !

! Stream methodsFor: #reading !
upTo: anObject
	" Return the elements read from the receiver upto anObject (or end). "

	| result |
	result := self collection class new.
	[ self atEnd or: [ self peek = anObject ]] whileFalse: [
	    result add: self next
	].
	self atEnd ifFalse: [ self next ].
	^result! !

! Stream methodsFor: #reading !
upToEnd
	" Return the contents of the receiver upto end. "

	^self upTo: Object new! !

! Stream methodsFor: #reading !
upToLineEnd
	" Return the elements read from the receiver upto end of line (or end). "

	| result lf cr |
	lf := Character lf.
	cr := Character cr.
	result := self collection class new.
	[(self atEnd 
		or: [self peek = lf])
		or: [self peek = cr]] whileFalse: [
	    result add: self next
	].
	self atEnd ifFalse: [
		| end |
		end := self next.
		(end = cr
			and: ([self atEnd not]
			and: [self peek = lf]))
			ifTrue: [self next]].
	^result! !

! Stream methodsFor: #reading !
nextLine
	" Return the characters read from the receiver up to the line delimiter. "

	| result start |
	start := self position.
	result := self upToLineEnd.
	^result! !

! Stream methodsFor: #reading !
skipTo: anObject
	" Advance the receiver upto anObject (or end). "

	[ self atEnd ] whileFalse: [
		self next = anObject ifTrue: [ ^true ].
	].
	^false! !

! Stream methodsFor: #reading !
skipSeparators
	" Advance the receiver upto a non-separator (or end).
	Return true  if a non-separator contents is found,
	return false if run upto end of stream.
	"

	[ self atEnd ifTrue: [ ^false ].
	  self peek isSeparator
	] whileTrue: [ self next ].
	^true! !

! Stream class methodsFor: #instantiation !
on: aCollection
	" Return an instance of the receiver. "

	^self new
		collection: aCollection;
		readLimit: aCollection size;
		yourself! !

! Stream methodsFor: #reading !
upToEnd
	" Return the contents of the receiver upto end. "

	| result |
	result := self collection copyFrom: self position + 1 to: self readLimit.
	self setToEnd.
	^result! !

Stream
 subclass: #StringStream
 instanceVariableNames: ''
 category: #Kernel!

! StringStream methodsFor: #reading !
next: anInteger
	" Return the next anInteger elements read from the receiver.
	If the receiver reach its end, the returned collection has less elements.
	"

	| start result stop |
	start := self position.
	stop := start + anInteger min: self readLimit.
	result := self collection copyFrom: start + 1 to: stop.
	self position: stop.
	^result! !

! StringStream methodsFor: #writing !
nextPut: aString
	" Put aString onto the receiver. "

	self nextPutAll: aString! !

! StringStream methodsFor: #writing !
nextPutAll: aString
	" Put aString onto the receiver at current position; expanding internal contents. "

	| result |
	self position = self collection size
	ifTrue: [ result := self collection , aString ]
	ifFalse: [ | substring |
		substring := self collection copyFrom: 1 to: self position.
		result := substring isEmpty ifTrue: [ aString ] ifFalse: [ substring , aString ].
		substring := self collection
			copyFrom: self position + 1 + aString size
			to: self collection size.
		result := substring isEmpty ifTrue: [ result ] ifFalse: [ result , substring ].
	].
	self collection: result.
	self position: self position + aString size.
	self readLimit: (self readLimit max: position)! !

! StringStream methodsFor: #writing !
print: anObject

	anObject printOn: self! !

! StringStream methodsFor: #reading !
skipTo: anObject
	" Advance the receiver upto anObject (or end). "

	| index |
	anObject isString ifFalse: [ self setToEnd. ^false ].
	index := self collection indexOf: anObject startingAt: self position + 1.
	(index between: self position + 1 and: self readLimit) ifTrue: [
		self position: index + anObject size - 1.
		^true
	].
	self setToEnd.
	^false! !

! StringStream methodsFor: #reading !
upTo: anObject
	" Return the elements read from the receiver upto anObject (or end). "

	| start found |
	anObject isString ifFalse: [ ^self upToEnd ].
	start := self position + 1.
	found := (self skipTo: anObject) ifTrue: [ anObject size ] ifFalse: [ 0 ].
	^self collection copyFrom: start to: self position - found! !

! StringStream methodsFor: #reading !
peek
	" Return the next readable element from the receiver without advancing (or nil). "

	^self position < collection size
        ifTrue: [collection at: self position + 1]
        ifFalse: [nil] ! !

! StringStream methodsFor: #reading !
next
	" Return the next readable element in the receiver (or nil). "

	| result |
	result := self peek.
	result notNil ifTrue: [ position := position + 1 ].
	^result! !

! StringStream methodsFor: #reading !
upToLineEnd
	" Return the elements read from the receiver upto line end (or end). "

	| start cr lf |
	start := self position + 1.
	lf := Character lf.
	cr := Character cr.
	[(self atEnd 
		or: [self peek = lf])
		or: [self peek = cr]] whileFalse: [
		self next
	].
	self atEnd ifFalse: [
		| end |
		end := self next.
		(self atEnd not and: [self peek = lf])
			ifTrue: [self next]].
	^self collection copyFrom: start to: self position! !

! StringStream methodsFor: #reading !
upToSeparator
	" Return the elements read from the receiver upto a separator (or end). "

	| start |
	start := self position + 1.
	[self atEnd not and: [self peek isSeparator not]] whileTrue: [
		self next
	].
	^self collection copyFrom: start to: self position! !

! StringStream methodsFor: #tools !
nextMessagePattern
	" Return a message pattern read from the receiver (or nil).
	Note: it is assumed that there is a correct message header in the receiver.
	"

	| pattern selector args |
	args := #().
	self skipSeparators.
	selector := self upToSeparator.
	selector isEmpty ifTrue: [ ^nil ].
	selector argumentCount > 0 ifTrue: [
		| part |
		[self skipSeparators.
		args add: self upToSeparator.
		self skipSeparators.
		part := self peek = $"
			ifTrue: [ '' ]
			ifFalse: [ self upToSeparator ].
		part notEmpty and: [ part last = $: ]
		] whileTrue: [selector := selector , part].
	].
	pattern := Message selector: selector arguments: args.
	self skipSeparators.
	self peek = $" ifTrue: [
		pattern comment: (self next; upTo: $") trimBlanks
	].
	^pattern! !

Object
 subclass: #Random
 instanceVariableNames: ''
 category: #Kernel!

! Random methodsFor: #accessing !
next
	" Return the next random number. "

	<primitive: 'primRandom' module: 'SKNumber'>
	self primitiveFailed! !

! Random methodsFor: #accessing !
next: anInteger
	" Return the next anInteger random numbers. "

	^(1 to: anInteger) collect: [:each | self next ]! !

Object
 subclass: #Point
 instanceVariableNames: 'x y'
 category: #Kernel!

! Point class methodsFor: #instantiation !
x: x y: y
	" Return an instance of the receiver. "

	^self basicNew x: x; y: y! !

! Point class methodsFor: #instantiation !
zero
	" Return an instance of the receiver. "

	^self basicNew x: 0; y: 0! !

! Point methodsFor: #accessing !
x
	" Return the x of the receiver. "

	^x! !

! Point methodsFor: #accessing !
y
	" Return the y of the receiver. "

	^y! !

! Point methodsFor: #accessing !
y: aNumber
	" Set the y of the receiver. "

	y := aNumber isNil ifTrue: [ 0 ] ifFalse: [ aNumber ]! !

! Point methodsFor: #accessing !
x: aNumber
	" Set the x of the receiver. "

	x := aNumber isNil ifTrue: [ 0 ] ifFalse: [ aNumber ]! !

! Point methodsFor: #arithmetic !
* aPoint
	" Return the result of operation with aPoint. "

	aPoint isNumber ifTrue: [ ^x * aPoint @ (y * aPoint) ].
	^Point	x: x * aPoint asPoint x
		y: y * aPoint asPoint y! !

! Point methodsFor: #arithmetic !
+ aPoint
	" Return the result of operation with aPoint. "

	aPoint isNumber ifTrue: [ ^x + aPoint @ (y + aPoint) ].
	^Point	x: x + aPoint asPoint x
		y: y + aPoint asPoint y! !

! Point methodsFor: #arithmetic !
- aPoint
	" Return the result of operation with aPoint. "

	aPoint isNumber ifTrue: [ ^x - aPoint @ (y - aPoint) ].
	^Point	x: x - aPoint asPoint x
		y: y - aPoint asPoint y! !

! Point methodsFor: #arithmetic !
/ aPoint
	" Return the result of operation with aPoint. "

	aPoint isNumber ifTrue: [ ^x / aPoint @ (y / aPoint) ].
	^Point	x: x / aPoint asPoint x
		y: y / aPoint asPoint y! !

! Point methodsFor: #arithmetic !
// aPoint
	" Return the result of operation with aPoint. "

	aPoint isNumber ifTrue: [ ^x // aPoint @ (y // aPoint) ].
	^Point	x: x // aPoint asPoint x
		y: y // aPoint asPoint y! !

! Point methodsFor: #arithmetic !
\\ aPoint
	" Return the result of operation with aPoint. "

	aPoint isNumber ifTrue: [ ^x \\ aPoint @ (y \\ aPoint) ].
	^Point	x: x \\ aPoint asPoint x
		y: y \\ aPoint asPoint y! !

! Point methodsFor: #comparing !
< aPoint
	" Return true if the x and y coordinates of the receiver are less than the x and y coordinates of aPoint, respectively. "

	aPoint isNumber ifTrue: [ ^self < aPoint asPoint ].
	^x < aPoint x and: [ y < aPoint y ]! !

! Point methodsFor: #comparing !
<= aPoint
	" Return true if the x and y coordinates of the receiver are less than or equal to the x and y coordinates of aPoint, respectively. "

	aPoint isNumber ifTrue: [ ^self <= aPoint asPoint ].
	^x <= aPoint x and: [ y <= aPoint y ]! !

! Point methodsFor: #comparing !
> aPoint
	" Return true if the x and y coordinates of the receiver are greater than the x and y coordinates of aPoint, respectively. "

	aPoint isNumber ifTrue: [ ^self > aPoint asPoint ].
	^x > aPoint x and: [ y > aPoint y ]! !

! Point methodsFor: #comparing !
>= aPoint
	" Return true if the x and y coordinates of the receiver are greater than or equal to the x and y coordinates of aPoint, respectively. "

	aPoint isNumber ifTrue: [ ^self >= aPoint asPoint ].
	^x >= aPoint x and: [ y >= aPoint y ]! !

! Point methodsFor: #converting !
rounded
	" Return the receiver rounded. "

	^x rounded @ y rounded! !

! Point methodsFor: #converting !
truncated
	" Return the receiver truncated. "

	^x truncated @ y truncated! !

! Point methodsFor: #converting !
asPoint
	" Return the receiver as a Point. "

	^self! !

! Point methodsFor: #printing !
printString
	" Return the printable representation of the receiver. "

	^x asString ,' @ ' ,y asString! !

! Point methodsFor: #printing !
toString
	" Return the printable representation of the receiver. "

	^x toString ,'@' ,y toString! !

! Point methodsFor: #copying !
shallowCopy
	" Return a shallow copy of the receiver. "

	^self class x: self x y: self y! !

! Point methodsFor: #testing !
= aPoint
	" Return the result of operation with aPoint. "

	aPoint isNil ifTrue: [ ^false ].
	(aPoint isMemberOf: self class) ifFalse: [
		^(aPoint respondsTo: #asPoint) and: [
			aPoint asPoint = self
		]
	].
	^x = aPoint x and: [ y = aPoint y ]! !

! Point methodsFor: #magnitude !
min: aPoint
	" Return the minimum of the receiver and aPoint. "

	^(x min: aPoint x) @ (y min: aPoint y)! !

! Point methodsFor: #magnitude !
max: aPoint
	" Return the maximum of the receiver and aPoint. "

	^(x max: aPoint x) @ (y max: aPoint y)! !

Object
 subclass: #EvaluableAction
 instanceVariableNames: ''
 category: #Kernel!

EvaluableAction
 subclass: #Message
 instanceVariableNames: 'selector arguments receiver'
 category: #Kernel!

! Message class methodsFor: #instantiation !
receiver: anObject
selector: aSelector
	" Return an instance of the receiver. "

	^self new
		receiver: anObject;
		selector: aSelector;
		yourself! !

! Message class methodsFor: #instantiation !
selector: aString arguments: anArray
	" Return an instance of the receiver. "

	^self new
		selector: aString;
		arguments: anArray;
		yourself! !

! Message class methodsFor: #instantiation !
receiver: anObject selector: aString arguments: anArray
	" Return an instance of the receiver. "

	^self new
		receiver: anObject;
		selector: aString;
		arguments: anArray;
		yourself! !

! Message methodsFor: #accessing !
selector
	" Return the selector of the receiver. "

	^selector! !

! Message methodsFor: #accessing !
selector: aString
	" Set the selector of the receiver. "

	selector := aString! !

! Message methodsFor: #accessing !
arguments: anArray
	" Set the arguments of the receiver. "

	arguments := anArray! !

! Message methodsFor: #accessing !
arguments
	" Return the arguments of the receiver. "

	^arguments! !

! Message methodsFor: #accessing !
receiver
	" Return the receiver of the receiver. "

	^receiver! !

! Message methodsFor: #accessing !
receiver: anObject
	" Set the receiver of the receiver. "

	receiver := anObject! !

! Message methodsFor: #accessing !
comment
	" Return the comment of the receiver (or nil). "

	^self basicAt: '@comment'! !

! Message methodsFor: #accessing !
comment: aString
	" Set the comment of the receiver. "

	aString isNil ifTrue: [ ^self basicDelete: '@comment' ].
	self basicAt: '@comment' put: aString! !

! Message methodsFor: #accessing !
receiver: anObject
selector: aSelector
arguments: anArray
	"Set the receiver, selector, and arguments in self."

	receiver := anObject.
	selector := aSelector.
	arguments := anArray! !

! Message methodsFor: #comparing !
= aMessage

	self == aMessage
		ifTrue: [^true].
	^self class == aMessage class
		and: [self receiver = aMessage receiver
		and: [self selector = aMessage selector
		and: [self arguments = aMessage arguments]]]! !

! Message methodsFor: #private !
perform
	" Return the result of sending the receiver. "

	^self receiver
		perform: self selector
		withArguments: self arguments! !

! Message methodsFor: #evaluating !
performDeferred
	" Evaluate the receiver deferred in time.
	Return the receiver.
	"

	[ self perform ] valueDeferred.! !

! Message methodsFor: #evaluating !
evaluate
	" Return the result of evaluating the receiver. "

	^self perform! !

! Message methodsFor: #evaluating !
evaluateFor: anObject
	" Return the result of evaluating the receiver with anObject. "

	^self evaluateWithArguments: (Array with: anObject)! !

! Message methodsFor: #evaluating !
evaluateWithArguments: anArray
	" Return the result of evaluating the receiver. "

	^self receiver
		perform: self selector
		withArguments: (self collectArguments: anArray)! !

! Message methodsFor: #private !
initializeArguments
	" Private - Initialize the arguments of the receiver. "

	arguments := Array new: self selector argumentCount! !

! Message methodsFor: #private !
argumentCount
	" Return the number of arguments required to evaluate the receiver. "

	arguments isNil ifTrue: [ self initializeArguments ].
	^arguments size! !

! Message methodsFor: #private !
collectArguments: evaluationArguments
	" Private - Return the arguments to evaluate the receiver. "

	arguments size = evaluationArguments size ifTrue: [ ^evaluationArguments ].
	^evaluationArguments copyFrom: 1 to: (self argumentCount min: evaluationArguments size)! !

! Message methodsFor: #printing !
printOn: aStream
	"Print the receiver on aStream."

	aStream
		nextPutAll: self class name;
		nextPut: $(;
		nextPutAll: self receiver class name;
		nextPutAll: '>>';
		nextPutAll: self selector;
		nextPut: $)! !

! Message methodsFor: #testing !
isMessage
	" Return true if the receiver is a message. "

	^true! !

! Object methodsFor: #testing !
isMessage
	" Return true if the receiver is a message. "

	^false! !

Error
 subclass: #MessageNotUnderstood
 instanceVariableNames: 'message receiver'
 category: #Kernel!

! MessageNotUnderstood methodsFor: #accessing !
message
	" Return the message of the receiver. "

	^message! !

! MessageNotUnderstood methodsFor: #accessing !
message: aMessage
	" Set the message of the receiver. "

	message := aMessage! !

! MessageNotUnderstood methodsFor: #accessing !
receiver
	" Return the receiver of the receiver. "

	^receiver! !

! MessageNotUnderstood methodsFor: #accessing !
receiver: anObject
	" Set the receiver of the receiver. "

	receiver := anObject! !

! MessageNotUnderstood methodsFor: #accessing !
messageText
	" Return the message text of the receiver. "

	^self receiver asString, ' does not understand #', self message selector! !

! BlockClosure methodsFor: #timming !
ms
	" Return the milliseconds taken to evaluate the receiver. "

	^DateTime millisecondsToRun: self! !

! Class class methodsFor: #export !
categories
	" Return a collection with all defined categories. "

	^(Smalltalk classes collect: [:each | each category ]) asSet! !

! Class class methodsFor: #export !
uncategorized
	" Return a collection with classes without category. "

	^Smalltalk classes select: [:each | each category = #unclassified ]! !

! Class methodsFor: #instantiation !
variableByteSubclass: aString
	classVariableNames: classVarNames
	poolDictionaries: poolVarNames
	" Create a new subclass of the receiver. "

	self print: '// WARNING: ',aString,' defined as variableByteSubclass:...'.
	^self
		subclass: aString
		instanceVariableNames: ''
		classVariableNames: classVarNames
		poolDictionaries: poolVarNames!

variableSubclass: aString
	instanceVariableNames: aString2
	classVariableNames: classVarNames
	poolDictionaries: poolVarNames
	" Create a new subclass of the receiver. "

	self print: '// WARNING: ',aString,' defined as variableSubclass:...'.
	^self
		subclass: aString
		instanceVariableNames: aString2
		classVariableNames: classVarNames
		poolDictionaries: poolVarNames!

subclass: aString
	instanceVariableNames: aString2
	classVariableNames: classVarNames
	poolDictionaries: poolVarNames
	category: aCategory
	" Create a new subclass of the receiver. "

	(self smalltalk globalAt: aString) notNil ifTrue: [
		self print: '// WARNING: class REdefinition for ',aString.
		"^self smalltalk globalAt: aString"
	].

	"self print: '// Creating ',aString."
	^ClassBuilder new
		superclass: self
		subclass: aString
		instanceVariableNames: aString2
		classVariableNames: classVarNames
		poolDictionaries: poolVarNames
		category: aCategory!

subclass: aString
	instanceVariableNames: aString2
	classVariableNames: classVarNames
	category: aCategory
	" Create a new subclass of the receiver. "

	^self subclass: aString
		instanceVariableNames: aString2
		classVariableNames: classVarNames
		poolDictionaries: ''
		category: aCategory!

subclass: aString
	instanceVariableNames: aString2
	classVariableNames: classVarNames
	poolDictionaries: poolVarNames
	" Create a new subclass of the receiver. "

	^self
		subclass: aString
		instanceVariableNames: aString2
		classVariableNames: classVarNames
		poolDictionaries: poolVarNames
		category: nil!

subclass: aString
	instanceVariableNames: aString2
	poolDictionaries: poolVarNames
	category: aCategory
	" Create a new subclass of the receiver. "

	^self
		subclass: aString
		instanceVariableNames: aString2
		classVariableNames: ''
		poolDictionaries: poolVarNames
		category: aCategory!

variableByteSubclass: aString classVariableNames: classVarNames
	" Create a new subclass of the receiver. "

	^self
		variableByteSubclass: aString
		classVariableNames: classVarNames
		poolDictionaries: ''!

variableByteSubclass: aString poolDictionaries: aString2
	" Create a new subclass of the receiver. "

	^self
		variableByteSubclass: aString
		classVariableNames: ''
		poolDictionaries: aString2!

variableByteSubclass: aString
	" Create a new subclass of the receiver. "

	^self
		variableByteSubclass: aString
		classVariableNames: ''!

variableSubclass: aString
	instanceVariableNames: aString2
	classVariableNames: classVarNames
	" Create a new subclass of the receiver. "

	^self
		variableSubclass: aString
		instanceVariableNames: aString2
		classVariableNames: classVarNames
		poolDictionaries: ''!

variableSubclass: aString instanceVariableNames: aString2
	" Create a new subclass of the receiver. "

	^self
		variableSubclass: aString
		instanceVariableNames: aString2
		classVariableNames: ''!

variableSubclass: aString classVariableNames: aString2
	" Create a new subclass of the receiver. "

	^self
		variableSubclass: aString
		instanceVariableNames: ''
		classVariableNames: aString2!

variableSubclass: aString poolDictionaries: aString2
	" Create a new subclass of the receiver. "

	^self
		variableSubclass: aString
		instanceVariableNames: ''
		classVariableNames: ''
		poolDictionaries: aString2!

variableSubclass: aString
	" Create a new subclass of the receiver. "

	^self
		variableSubclass: aString
		instanceVariableNames: ''!

subclass: aString
	instanceVariableNames: aString2
	classVariableNames: classVarNames
	" Create a new subclass of the receiver. "

	^self
		subclass: aString
		instanceVariableNames: aString2
		classVariableNames: classVarNames
		poolDictionaries: ''!

subclass: aString
	instanceVariableNames: aString2
	poolDictionaries: aString3
	" Create a new subclass of the receiver. "

	^self
		subclass: aString
		instanceVariableNames: aString2
		classVariableNames: ''
		poolDictionaries: aString3!

subclass: aString instanceVariableNames: aString2
	" Create a new subclass of the receiver. "

	^self
		subclass: aString
		instanceVariableNames: aString2
		classVariableNames: ''!

subclass: aString classVariableNames: aString2
	" Create a new subclass of the receiver. "

	^self
		subclass: aString
		instanceVariableNames: ''
		classVariableNames: aString2
		poolDictionaries: ''!

subclass: aString poolDictionaries: aString2
	" Create a new subclass of the receiver. "

	^self
		subclass: aString
		instanceVariableNames: ''
		classVariableNames: ''
		poolDictionaries: aString2!

subclass: aString
	" Create a new subclass of the receiver. "

	^self
		subclass: aString
		instanceVariableNames: ''! !

! UndefinedObject methodsFor: #instantiation!
category: ignored
	" BUG - throw an error in ClassBuilder. " ! !

! UndefinedObject methodsFor: #instantiation!
subclass: aString
	instanceVariableNames: aString2
	classVariableNames: classVarNames
	poolDictionaries: poolVarNames
	category: aCategory
	" Create a new subclass of the receiver. "

	(self smalltalk globalAt: aString) notNil ifTrue: [
		self print: '// WARNING: class REdefinition for ',aString.
		"^self smalltalk globalAt: aString"
	].

	"self print: '// Creating ROOT class ',aString."
	^ClassBuilder new
		superclass: self
		subclass: aString
		instanceVariableNames: aString2
		classVariableNames: classVarNames
		poolDictionaries: poolVarNames
		category: aCategory! !

! UndefinedObject methodsFor: #instantiation!
subclass: aString
	instanceVariableNames: aString2
	classVariableNames: classVarNames
	poolDictionaries: poolVarNames
	" Create a new subclass of the receiver. "

	^self
		subclass: aString
		instanceVariableNames: aString2
		classVariableNames: classVarNames
		poolDictionaries: poolVarNames
		category: nil! !

! Object methodsFor: #evaluating !
argumentCount
	" Return the number of arguments required to evaluate the receiver. "

	^0! !

! Object methodsFor: #evaluating !
numberOfArguments
	" Return the number of arguments required to evaluate the receiver. "

	^self argumentCount! !

! Object methodsFor: #evaluating !
evaluate
	" Return the result of evaluating the receiver. "

	^self! !

! Object methodsFor: #evaluating !
evaluateDeferred
	" Evaluating the receiver deferred in time.
	Return the receiver. "

	[ self evaluate ] valueDeferred.! !

! Object methodsFor: #evaluating !
evaluateWithArguments: anArray
	" Return the result of evaluating the receiver. "

	^self! !

! Object methodsFor: #evaluating !
evaluateWith: anObject
	" Return the result of evaluating the receiver. "

	^self evaluateWithArguments: (Array with: anObject)! !

! Object methodsFor: #evaluating !
logEvaluate: source
	" Return the result of valuating the receiver.
	This method should be refined/replaced to log the source expression as reference of evaluation.
	"

	^self evaluate! !

! String methodsFor: #evaluating !
evaluateFor: anObject
	" Return the result of evaluating the receiver with anObject. "

	^anObject perform: self! !

! BlockClosure methodsFor: #evaluating !
evaluateFor: anObject
	" Return the result of evaluating the receiver with anObject. "

	^self value: anObject ! !

! BlockClosure methodsFor: #evaluating !
evaluate
	" Return the result of evaluating the receiver. "

	^self value ! !

! BlockClosure methodsFor: #evaluating !
evaluateWithArguments: anArray
	" Return the result of evaluating the receiver. "

	^self valueWithArguments: anArray! !

! Object methodsFor: #printing !
printingWith: printBlock do: aBlock
	" Return the result of evaluating aBlock, redirecting output to printBlock. "

	| backup result |
	backup := Smalltalk global basicAt: #print.
	[	printBlock installAs: #print.
		result := aBlock value.
	] ensure: [ backup installAs: #print ].
	^result! !

! Behavior methodsFor: #private !
basicAddCompiledMethod: aMethod
	" Private - Register aMethod onto the receiver. "

	self smalltalk addMethod: aMethod selector asSelector method: aMethod to: self! !

! Behavior methodsFor: #methods !
addCompiledMethod: aMethod
	" Add the compiled method, if appropiate, and register the method in recent methods. "

	| isDoIt |
	isDoIt := aMethod selector = String doItSelector.
"	(OverwriteMethods ifNil: [true]) ifFalse: [
		(self implements: aMethod selector) ifTrue: [
			isDoIt ifFalse: [
				(DumpOverwritenMethods notNil
				and: [ DumpOverwritenMethods
				and: [ Exporter notNil ]]) ifTrue: [
					self print: '//? ',self name,'>>#',aMethod selector.
					self print: (Exporter new export: self method: aMethod).
				] ifFalse: [
					self print: '//-Overwrite Conflict- ',self name,'>>#',aMethod selector.
				].
				^self
			].
		].
	].
"
	(Exporter notNil and: [ isDoIt not ]) ifTrue: [
" DEBUG -	self print: '// ',self name,'>>#',aMethod selector."
		self print: (Exporter new export: self method: aMethod).
	].
	^self basicAddCompiledMethod: aMethod! !


! Stream methodsFor: #reading !
peekForAll: aCollection
	" Return true if the next readable elements from the receiver matches aCollection.
	Advance the receiver if the result is true.
	"

	| back |
	back := self position.
	aCollection do: [:each|
		(self peekFor: each) ifFalse: [
			self position: back.
			^false
		].
	].
	^true! !

! StringStream methodsFor: #reading !
peekForAll: aCollection
	"Return true if the next readable elements from the receiver matches aCollection.
	Advance the receiver if the result is true."

	<primitive: 'primStringPeekForAll' module: 'SKStream'>
	^super peekForAll: aCollection! !
