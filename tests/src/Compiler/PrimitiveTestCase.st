PrimitiveModule subclass: #PrimitiveTestModule
	instanceVariableNames: ''
	category: #Primitives!

! PrimitiveTestModule methodsFor: #accessing !
primitiveMap

	^Dictionary new
		at: #primReturnFortyTwo put: #primReturnFortyTwo:arguments:;
		at: #primReturnReceiver put: #primReturnReceiver:arguments:;
		at: #primReturnArguments put: #primReturnArguments:arguments:;
		at: #primReturnNil put: #primReturnNil:arguments:;
		at: #primFail put: #primFail:arguments:;
		at: #primAppendTo put: #primAppendTo:arguments:;
		yourself! !

! PrimitiveTestModule methodsFor: #running !
primReturnFortyTwo: receiver
arguments: anArray

	^42! !

! PrimitiveTestModule methodsFor: #running !
primReturnReceiver: receiver
arguments: anArray

	^receiver! !

! PrimitiveTestModule methodsFor: #running !
primReturnNil: receiver
arguments: anArray

	^nil! !

! PrimitiveTestModule methodsFor: #running !
primReturnArguments: receiver
arguments: anArray

	^anArray! !

! PrimitiveTestModule methodsFor: #running !
primFail: receiver
arguments: anArray

	^self primFailValue! !

! PrimitiveTestModule methodsFor: #running !
primAppendTo: receiver
arguments: anArray

	anArray size = 2
		ifFalse: [^self primFailValue].
	^(anArray at: 2), (anArray at: 1)! !

TestCase subclass: #PrimitiveTestCase
	instanceVariableNames: 'testValue'
	category: #Primitives!

! PrimitiveTestCase methodsFor: #primitives !
primReturnFortyTwo

	<primitive: 'primReturnFortyTwo' module: 'PrimitiveTestModule'>
	self primitiveFailed! !

! PrimitiveTestCase methodsFor: #primitives !
primReturnReceiver

	<primitive: 'primReturnReceiver' module: 'PrimitiveTestModule'>
	self primitiveFailed! !

! PrimitiveTestCase methodsFor: #primitives !
primReturnNil

	<primitive: 'primReturnNil' module: 'PrimitiveTestModule'>
	self primitiveFailed! !

! PrimitiveTestCase methodsFor: #primitives !
zero

	<primitive: 'primReturnArguments' module: 'PrimitiveTestModule'>
	self primitiveFailed! !

! PrimitiveTestCase methodsFor: #primitives !
one: anObject

	<primitive: 'primReturnArguments' module: 'PrimitiveTestModule'>
	self primitiveFailed! !

! PrimitiveTestCase methodsFor: #primitives !
one: anObject
two: bObject

	<primitive: 'primReturnArguments' module: 'PrimitiveTestModule'>
	self primitiveFailed! !

! PrimitiveTestCase methodsFor: #primitives !
primFail

	<primitive: 'primFail' module: 'PrimitiveTestModule'>
	testValue := testValue + 1! !

! PrimitiveTestCase methodsFor: #primitives !
append: aString
to: anotherString

	<primitive: 'primAppendTo' module: 'PrimitiveTestModule'>
	self primitiveFailed! !

! PrimitiveTestCase methodsFor: #initializing !
setUp

	super setUp.
	PrimitiveTestModule new register! !

! PrimitiveTestCase methodsFor: #running !
testPrimReturnFortyTwo

	| result |
	result := self primReturnFortyTwo.
	self
		assert: result
		equals: 42! !

! PrimitiveTestCase methodsFor: #running !
testPrimReturnReceiver

	| result |
	result := self primReturnReceiver.
	self
		assert: result
		equals: self! !

! PrimitiveTestCase methodsFor: #running !
testReturnNil

	self
		assert: self primReturnNil
		equals: nil! !

! PrimitiveTestCase methodsFor: #running !
testReturnArguments

	| identity result |
	self
		assert: self zero
		equals: #().
	self
		assert: (self one: 42)
		equals: #( 42 ).
	self
		assert: (self one: 42 two: 52)
		equals: #( 42 52 ).
	identity := Object new.
	result := self one: identity.
	self assert: (result at: 1) == identity! !

! PrimitiveTestCase methodsFor: #running !
testPrimAppendTo

	| result |
	result := self
		append: 'World!!'
		to: 'Hello, '.
	self
		assert: result
		equals: 'Hello, World!!'! !

! PrimitiveTestCase methodsFor: #running !
testPrimFail

	testValue := 0.
	self primFail. "Smalltalk failure code increments testValue."
	self
		assert: testValue
		equals: 1! !

! PrimitiveTestCase methodsFor: #running !
testPrimitiveFailed

	self
		should: [self primitiveFailed]
		raise: PrimitiveFailed.
	self
		should: [self primitiveFailed: 'Test']
		raise: PrimitiveFailed! !

PrimitiveTestCase subclass: #NativeTestCase
	instanceVariableNames: ''
	category: #Primitives!

! NativeTestCase methodsFor: #primitives !
primReturnFortyTwo

	<primitive: 'primReturnFortyTwo' module: 'NativeTestModule'>
	self primitiveFailed! !

! NativeTestCase methodsFor: #primitives !
primReturnReceiver

	<primitive: 'primReturnReceiver' module: 'NativeTestModule'>
	self primitiveFailed! !

! NativeTestCase methodsFor: #primitives !
primReturnNil

	<primitive: 'primReturnNil' module: 'NativeTestModule'>
	self primitiveFailed! !

! NativeTestCase methodsFor: #primitives !
zero

	<primitive: 'primReturnArguments' module: 'NativeTestModule'>
	self primitiveFailed! !

! NativeTestCase methodsFor: #primitives !
one: anObject

	<primitive: 'primReturnArguments' module: 'NativeTestModule'>
	self primitiveFailed! !

! NativeTestCase methodsFor: #primitives !
one: anObject
two: bObject

	<primitive: 'primReturnArguments' module: 'NativeTestModule'>
	self primitiveFailed! !

! NativeTestCase methodsFor: #primitives !
primFail

	<primitive: 'primFail' module: 'NativeTestModule'>
	testValue := testValue + 1! !

! NativeTestCase methodsFor: #primitives !
append: aString
to: anotherString

	<primitive: 'primAppendTo' module: 'NativeTestModule'>
	self primitiveFailed! !