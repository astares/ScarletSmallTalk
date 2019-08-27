PrimitiveTestModule subclass: #NativeSpecTestModule
	instanceVariableNames: ''
	category: #Primitives!

PrimitiveTestCase subclass: #NativeSpecTestCase
	instanceVariableNames: ''
	category: #Primitives!

! NativeSpecTestCase methodsFor: #primitives !
setup
	super setup.
    RuntimePrimitiveManager setPlatformName: 'common'.! !

! NativeSpecTestCase methodsFor: #primitives !
primReturnPlatformName

	<primitive: 'primReturnPlatformName' module: 'NativeSpecTestModule'>
	self primitiveFailed! !

! NativeSpecTestCase methodsFor: #primitives !
primReturnFortyTwo

	<primitive: 'primReturnFortyTwo' module: 'NativeSpecTestModule'>
	self primitiveFailed! !

! NativeSpecTestCase methodsFor: #primitives !
primReturnReceiver

	<primitive: 'primReturnReceiver' module: 'NativeSpecTestModule'>
	self primitiveFailed! !

! NativeSpecTestCase methodsFor: #primitives !
primReturnNil

	<primitive: 'primReturnNil' module: 'NativeSpecTestModule'>
	self primitiveFailed! !

! NativeSpecTestCase methodsFor: #primitives !
zero

	<primitive: 'primReturnArguments' module: 'NativeSpecTestModule'>
	self primitiveFailed! !

! NativeSpecTestCase methodsFor: #primitives !
one: anObject

	<primitive: 'primReturnArguments' module: 'NativeSpecTestModule'>
	self primitiveFailed! !

! NativeSpecTestCase methodsFor: #primitives !
one: anObject
two: bObject

	<primitive: 'primReturnArguments' module: 'NativeSpecTestModule'>
	self primitiveFailed! !

! NativeSpecTestCase methodsFor: #primitives !
primFail

	<primitive: 'primFail' module: 'NativeSpecTestModule'>
	testValue := testValue + 1! !

! NativeSpecTestCase methodsFor: #primitives !
append: aString
to: anotherString

	<primitive: 'primAppendTo' module: 'NativeSpecTestModule'>
	self primitiveFailed! !

! NativeSpecTestCase methodsFor: #running !
testPrimReturnPlatformName

	| result |
	result := self primReturnPlatformName.
	self
		assert: result
		equals: 'common'.

	RuntimePrimitiveManager setPlatformName: 'iOS'.

	result := self primReturnPlatformName.
	self
		assert: result
		equals: 'iOS'.
		
	RuntimePrimitiveManager setPlatformName: 'Android'.

	result := self primReturnPlatformName.
	self
		assert: result
		equals: 'Android'.
		
	RuntimePrimitiveManager setPlatformName: 'NodeJS'.

	result := self primReturnPlatformName.
	self
		assert: result
		equals: 'NodeJS'.
		
	RuntimePrimitiveManager setPlatformName: 'common'.

	result := self primReturnPlatformName.
	self
		assert: result
		equals: 'common'.! !