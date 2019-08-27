TestCase
	subclass: #DictionaryTestCase !

! DictionaryTestCase methodsFor: #running !
testAddObjectsWithTheSameJSToString

	| dict a b aValue bValue |
	dict := Dictionary new.
	self assert: dict isEmpty.
	a := Object new.
	aValue := 'a'.
	b := Object new.
	bValue := 'b'.
	self
		deny: a
		equals: b.
	dict add: a -> aValue.
	self
		assert: dict size
		equals: 1.
	self
		assert: (dict at: a)
		equals: aValue.
	dict add: b -> bValue.
	self
		assert: dict size
		equals: 2.
	self
		assert: (dict at: a)
		equals: aValue.
	self
		assert: (dict at: b)
		equals: bValue!

testAddKeyWhichMatchesJSPropertyName

	| dict toString triggerEvent |
	dict := Dictionary new.
	self assert: dict isEmpty.
	toString := 'toString'.
	triggerEvent := 'triggerEvent:'.
	dict
		add: toString -> toString;
		add: triggerEvent -> triggerEvent.
	self
		assert: dict size
		equals: 2.
	self
		assert: (dict at: toString)
		equals: toString.
	self
		assert: (dict at: triggerEvent)
		equals: triggerEvent! !