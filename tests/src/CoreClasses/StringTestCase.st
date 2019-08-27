TestCase
	subclass: #StringTestCase!

! StringTestCase methodsFor: #running !
testReplaceAllWith

	| result |
	result := '4.1' replaceAll: '.' with: ','.
	self
		assert: result
		equals: '4,1'.
	result := 'Hello, World!!' replaceAll: 'Hello' with: 'Goodbye'.
	self
		assert: result
		equals: 'Goodbye, World!!'.
	result := '....' replaceAll: '.' with: '*'.
	self
		assert: result
		equals: '****'.
	result := 'labware' replaceAll: 'Z' with: 'y'.
	self
		assert: result
		equals: 'labware'.
	result := '' replaceAll: 'a' with: 'b'.
	self
		assert: result
		equals: ''.
	result := 'aaa' replaceAll: 'a' with: ''.
	self
		assert: result
		equals: ''.
	result := 'abab' replaceAll: 'a' with: 'c'.
	self
		assert: result
		equals: 'cbcb'! !