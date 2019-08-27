
NativeSpecTestCase subclass: #NativeSpecAndroidTestCase
	instanceVariableNames: ''
	category: #Primitives!

! NativeSpecAndroidTestCase methodsFor: #initialization !	
setup
	super setup.
	RuntimePrimitiveManager setPlatformName: 'Android'.! !

