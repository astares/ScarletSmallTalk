Object
	subclass: #RuntimePrimitiveManager
	category: 'Primitive Support'!

Object
	subclass: #PrimitiveModule
	instanceVariableNames: 'primFailValue'
	category: 'Primitive Support'!

Error
	subclass: #PrimitiveFailed
	category: 'Primitive Support'!


PrimitiveModule comment: '
	what is a primitive'!

! Object methods !
primitiveFailed
	| stk |
	"Private - Initiate a walkback with label
	 containing primitive failed message."
 
 	" enable this if you need the primitive failed stack"
	"
	{'stk = (new Error()).stack;
	console.log(stk);
	'}.
	^PrimitiveFailed signal: stk
	"
	^PrimitiveFailed signal: 'Primitve failed'!

primitiveFailed: aString
	
	" enable this if you need the primitive failed stack"
	"
	{'stk = (new Error()).stack;
	console.log(aString);
	console.log(stk);
	'}.
	"
	^PrimitiveFailed signal: aString! !

! RuntimePrimitiveManager class methodsFor: #registration !
setPlatformName: aString

	<primitive: 'primSetPlatformName' module: 'RuntimePrimitiveManager'>! 

registerModule: aPrimitiveModule

	self
		registerModule: aPrimitiveModule
		named: aPrimitiveModule moduleName
		with: aPrimitiveModule primitiveMap!

newPrimitiveSpec

	<primitive: 'primNewPrimitiveSpec' module: 'RuntimePrimitiveManager'>! 

registerSpec: aSpec
named: aString

	<primitive: 'primRegisterSpec' module: 'RuntimePrimitiveManager'>! 

registerModule: aPrimitiveModule
named: aString
with: aDictionary

	<primitive: 'primRegisterSmalltalkModule' module: 'RuntimePrimitiveManager'>!

deregisterModule: aModule

	<primitive: 'primDeregisterSmalltalkModule' module: 'RuntimePrimitiveManager'>! !

! PrimitiveModule methodsFor: #accessing !
primitiveMap
	"This method should return a mapping between the primitive name
	and the selector that should be performed.
	A Smalltalk primitive should take two arguments.
	1. Primitive receiver.
	2. Array of arguments to the primitive method."

	^Dictionary new!

primFailValue

	^primFailValue ifNil: [primFailValue := Object new]!

moduleName
	^self class name! !

! PrimitiveModule methodsFor: 'initialize-release' !
register

	RuntimePrimitiveManager registerModule: self.!

deregister

	RuntimePrimitiveManager deregisterModule: self! !

! PrimitiveModule methodsFor: 'error handling' !
primitiveFailed

	^self primFailValue!

primitiveFailed: message

	^self primFailValue! !
