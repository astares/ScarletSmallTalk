TestCase subclass: #ClassBuilderTestCase !

! ClassBuilderTestCase methodsFor: #running !
testAddSubclassOf

	self
		assert: (Smalltalk at: #ClassBuilderTestObject ifAbsent: [nil])
		equals: nil.

	ClassBuilder new
		superclass: Object
		subclass: #ClassBuilderTestObject
		instanceVariableNames: 'iVar'
		classVariableNames: 'cVar'
		poolDictionaries: 'pVar'
		category: #Testing.

	self
		assert: (Smalltalk at: #ClassBuilderTestObject ifAbsent: [nil])
		equals: ClassBuilderTestObject.
	self 
		assert: ClassBuilderTestObject classVariableNames
		equals: #('cVar').
	self
		assert: ClassBuilderTestObject instanceVariableNames
		equals: #('iVar').
	self
		assert: ClassBuilderTestObject poolDictionaries
		equals: #('pVar') ! !