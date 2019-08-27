Object
	subclass: #MyClass
	instanceVariableNames: 'iVar'
	category: #Testing!

! MyClass class methodsFor: #classTesting !
classMethodOne

	^1 !

classMethodTwo

	^2 !

classMethodThree

	^3 ! !

! MyClass methodsFor: #testing !
testMethodOne

	^'this is test method one' !

testMethodTwo

	^5 !

testMethodThree

	^true ! !

TestCase subclass: #ObjectTestCase !

! ObjectTestCase methodsFor: 'running' !
testTypeOf

	| type |
	type := nil typeOf: ''.
	self
		assert: type
		equals: 'string'.
	type := nil typeOf: '' yourself.
	self
		assert: type
		equals: 'object'.
	type := nil typeOf: 42.
	self
		assert: type
		equals: 'number'.
	type := nil typeOf: 42 yourself.
	self
		assert: type
		equals: 'object'.
	type := nil typeOf: true.
	self
		assert: type
		equals: 'boolean'.
	type := nil typeOf: true yourself.
	self
		assert: type
		equals: 'object'.
	type := nil typeOf: false.
	self
		assert: type
		equals: 'boolean'.
	type := nil typeOf: false yourself.
	self
		assert: type
		equals: 'object'.
	type := nil typeOf: #().
	self
		assert: type
		equals: 'object'.
	type := nil typeOf: #() yourself.
	self
		assert: type
		equals: 'object'.
	type := nil typeOf: Object new.
	self
		assert: type
		equals: 'object' !

testBasicNew

	| allClasses |
	allClasses := Object withAllSubclasses.
 	allClasses do: [:each | self assert: each basicNew class equals: each] !

testJSPropertyNames

	| testObject |
	testObject := Object new.
	testObject basicAt: 'test'  put: 1.
	testObject basicAt: 'test2' put: 2.
	testObject basicAt: 'test3' put: 3.
	self
		assert: testObject jsPropertyNames asSet
		equals: #('test' 'test2' 'test3') asSet. !
	

testPropertyAtIfAbsent

	| testObject |
	testObject := Object new.
	testObject propertyAt: 'testProperty' put: 123.
	self 
		assert: (testObject propertyAt: 'testProperty' ifAbsent: [-2])
		equals: 123.
	self
		assert: (testObject propertyAt: 'noProperty' ifAbsent: [-2])
		equals: -2.
	self
		should: [testObject propertyAt: 'should throw exception' ifAbsent: 4]
		raise: Error.
	self
		should: [testObject propertyAt: true ifAbsent: [-2]]
		raise: Error. !

testPropertyAtPut

	| testObject |
	testObject := Object new.
	testObject propertyAt: 'propOne' put: 1.
	testObject propertyAt: 'propTwo' put: 2.
	self 
		assert: (testObject propertyAt: 'propOne' ifAbsent: [-2])
		equals: 1.
	self 
		assert: (testObject propertyAt: 'propTwo' ifAbsent: [-2])
		equals: 2.
	self
		should: [testObject propertAt: '' put: 3]
		raise: Error. !

testIsObject

	| testObject |
	testObject := Object new.
	self assert: (Object isObject: testObject).
	testObject := nil.
	self assert: (Object isObject: testObject). !

testBasicAt

	| testObject |
	testObject := Object new.
	self
		assert: (testObject basicAt: 'prop1' ifAbsent: [-1])
		equals: -1.
	testObject basicAt: 'prop1' put: 1.
	self
		assert: (testObject basicAt: 'prop1' ifAbsent: [-1])
		equals: 1.
	self
		assert: (testObject basicAt: 'prop2')
		equals: nil!

testBasicAtIfAbsent

	| testObject |
	testObject := Object new.
	testObject basicAt: 'prop1' put: 1.
	self
		assert: (testObject basicAt: 'prop1' ifAbsent: [-1])
		equals: 1.
	self
		assert: (testObject basicAt: 'prop2' ifAbsent: [-1])
		equals: -1!

testBasicAtIfAbsentPut

	| testObject result |
	testObject := Object new.
	testObject basicAt: 'prop1' put: 1.
	self
		assert: (testObject basicAt: 'prop1' ifAbsent: [-1])
		equals: 1.
	testObject basicAt: 'prop1' ifAbsentPut: [2].
	self
		assert: (testObject basicAt: 'prop1' ifAbsent: [-1])
		equals: 1.

	result := testObject basicAt: 'prop2' ifAbsentPut: [2].
	self
		assert: result
		equals: 2.
	self
		assert: (testObject basicAt: 'prop2' ifAbsent: [-1])
		equals: 2!

testBasicDelete

	| testObject |
	testObject := Object new.
	testObject basicAt: 'prop1' put: 1.
	self
		assert: (testObject basicAt: 'prop1' ifAbsent: [-1])
		equals: 1.
	testObject basicDelete: 'prop1'.
	self
		assert: (testObject basicAt: 'prop1' ifAbsent: [-1])
		equals: -1.
	self
		should: [testObject basicDelete: true]
		raise: Error. !

testMethodsDo

	| expectedSet resultSet |
	expectedSet := #('testMethodOne' 'testMethodTwo' 'testMethodThree') asSet.
	resultSet := #() asSet.
	MyClass methodsDo:  [ :method | (resultSet add: method selector) ].
	self
		assert: resultSet
		equals: expectedSet.
	expectedSet := #('classMethodOne' 'classMethodTwo' 'classMethodThree') asSet.
	resultSet := #() asSet.
	MyClass class methodsDo: [ :method | (resultSet add: method selector) ].
	self
		assert: resultSet
		equals: expectedSet. !

testSelectorsDo

	| expectedSet resultSet |
	expectedSet := #('testMethodOne' 'testMethodTwo' 'testMethodThree') asSet.
	resultSet := #() asSet.
	MyClass selectorsDo: [:selector | (resultSet add: selector)].
	self
		assert: resultSet
		equals: expectedSet.
	expectedSet := #('classMethodOne' 'classMethodTwo' 'classMethodThree') asSet.
	resultSet := #() asSet.
	MyClass class selectorsDo: [:selector | (resultSet add: selector)].
	self
		assert: resultSet
		equals: expectedSet. !

testImplements

	self 
		assert: (MyClass implements: #testMethodOne);
		deny: (MyClass implements: #madeUpMethod);
		assert: (MyClass class implements: #classMethodOne);
		deny: (MyClass class implements: #zmadeUpMethod).
	self
		should: [MyClass implements: 4]
		raise: Error !

testCompiledMethodAt

	self 
		assert: (MyClass compiledMethodAt: #testMethodOne) selector
		equals: 'testMethodOne'.
	self assert: (MyClass compiledMethodAt: #noMethod) isNil.
	self 
		should: [MyClass compiledMethodAt: 3]
		raise: Error !

testEquality

	| object anotherObject |
	object := Object new.
	anotherObject := Object new.
	self
		assert: object
		equals: object.
	self
		deny: anotherObject
		equals: object !

testIdentity

	| object anotherObject |
	object := Object new.
	anotherObject := Object new.
	self
		assert: object == object;
		deny: object == anotherObject !

testNotEqual

	| object anotherObject |
	object := Object new.
	anotherObject := Object new.
	self
		deny: object ~= object;
		assert: object ~= anotherObject !

testNotIdentical

	| object anotherObject |
	object := Object new.
	anotherObject := Object new.
	self
		deny: object ~~ object;
		assert: object ~~ anotherObject !

testClass

	self
		assert: Object new class
		equals: Object.
	self
		assert: String new class
		equals: String !

testYourself

	| object |
	object := Object new.
	self assert: object yourself == object !

testPrintString

	| str obj |
	obj := Object new.
	str :=  obj printString.
	self
		assert: str
		equals: 'a Object' !

testPrintOn

	| stream obj |
	obj := Object new.
	stream := '' stream.
	obj printOn: stream.
	self
		assert: stream contents
		equals: 'a Object' !

testError

	self
		should: [Object new error: 'test error']
		raise: Error !

testIsKindOf

	| obj |
	obj := Object new.
	self 
		assert: (obj isKindOf: Object);
		deny: (obj isKindOf: Array) !


testIsMemberOf

	self 
		assert: (Object new isMemberOf: Object);
		assert: (String new isMemberOf: String);
		deny: (String new isMemberOf: Object);
		deny: (Object new isMemberOf: String) !

testIsNil

	| obj |
	obj := Object new.
	self deny: obj isNil.
	obj := nil.
	self assert: obj isNil !

testNotNil

	| obj |
	obj := Object new.
	self assert: obj notNil.
	obj := nil.
	self deny: obj notNil !

testPerform

	self 
		assert: ('hello' perform: #size)
		equals: 5.
	self
		should: ['hello' perform: #basicAt:]
		raise: Error.
	self
		should: [nil perform: #xlerb] 
		raise: MessageNotUnderstood !

testPerformWith

	| obj |
	obj := Object new.
	obj basicAt: 'test' put: 1.
	self
		assert: (obj perform: #basicAt: with: 'test')
		equals: 1.
	self
		should: [obj perform: #size with: 'test']
		raise: Error.
	self
		should: [obj perform: #basicAt:put: with: 'test']
		raise: Error !

testPerformWithArguments

	| obj |
	obj := Object new.
	self assert: (obj basicAt: 'test') isNil.
	obj perform: #basicAt:put: withArguments: #('test' 1).
	self 
		assert: (obj basicAt: 'test') 
		equals: 1.
	self
		should: [obj perform: #basicAt:put: withArguments: #('test' 1 1)]
		raise: Error !

testRespondsTo

	| obj |
	obj := Object new.
	self 
		assert: (obj respondsTo: #basicAt:);
		deny: (obj respondsTo: #notAMessage) !

testCopy

	| obj |
	obj := MyClass copy.
	self
		assert: (obj instanceVariableNames)
		equals: #('iVar') ! !