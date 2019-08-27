
NativeSpecTestCase subclass: #NativeSpecNodeJSTestCase
	instanceVariableNames: ''
	category: #Primitives!

! NativeSpecNodeJSTestCase methodsFor: #initialization !	
setup
	super setup.
	RuntimePrimitiveManager setPlatformName: 'NodeJS'.! !

