TestCase subclass: #MessageTestCase !

! MessageTestCase methodsFor: #running !
testPrintOn

	| message stream |
	message := Message
		receiver: 15
		selector: #doIt.
	stream := '' writeStream.
	message printOn: stream.
	self
		assert: stream contents
		equals: 'Message(Number>>doIt)'.
	message := Message
		receiver: Object
		selector: #new.
	stream := '' writeStream.
	message printOn: stream.
	self
		assert: stream contents
		equals: 'Message(Object class>>new)'!

testEquality

	| one two three |
	one := Message
		receiver: Object new
		selector: #doIt
		arguments: #().
	two := Message
		receiver: #Hello
		selector: #doIt:
		arguments: #( 3 ).
	three := Message
		receiver: #Hello
		selector: #doIt:
		arguments: #( 3 ).
	self
		assert: one
		equals: one.
	self
		assert: two
		equals: two.
	self
		assert: three
		equals: three.
	self
		deny: one
		equals: two.
	self
		assert: two
		equals: three! !