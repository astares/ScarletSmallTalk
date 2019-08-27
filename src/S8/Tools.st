! String methodsFor: 'Snapshot-io' !
outputToFile: fileName
	" Save the receiver's contents onto a file at fileName. "

 	<primitive: 'primWriteToFile' module: 'SKTools'>
 	self primitiveFailed! !

! String methodsFor: 'Snapshot-io'  !
appendToFile: fileName
	" Append the receiver's contents onto a file at fileName. "

 	<primitive: 'primAppendToFile' module: 'SKTools'>
 	self primitiveFailed! !

! Object methodsFor: 'Builders-emmiting' !
isFile: fileName olderThan: referenceFileName
	"Return true if the file at pathName is older than file at referenceFileName."
 	<primitive: 'primFileOlderThan' module: 'SKTools'>
 	^true! !

! Object methodsFor: 'Builders-emmiting' !
fileContents: fileName

 	<primitive: 'primFileContents' module: 'SKTools'>
 	^false! !

! Object methodsFor: 'Builders-emmiting' !
emmit: fileName startingWith: initial
	" FileIn the contents of file at fileName redirecting output(emmited code) to a .js file. "

	| output cr jsFileName |
	jsFileName := fileName,'.js'.
	(self isFile: fileName olderThan: jsFileName) ifTrue: [
		self fileInJS: jsFileName.
		^self fileContents: jsFileName
	].
	output := initial.
	cr := '
'.
	self print: '// emmit("',fileName,'")'.
	[self printingWith: [:what|
		output := output isNil
			ifTrue: [what]
			ifFalse: [ output, cr ,what]
		] do: [self fileIn: fileName].
	output outputToFile: jsFileName.
	] on: Error do: [:ex|
		(output asString ,cr ,ex toString)
			outputToFile: fileName,'.error.txt'.
			self print: ex toString.
			^ex toString
	].
	^output! !

! Object methodsFor: 'Builders-emmiting' !
emmit: fileName
	" FileIn the contents of file at fileName redirecting output(emmited code) to a .js file. "

	fileName isString ifFalse: [ ^fileName asArray emmit ].
	^self emmit: fileName startingWith: nil! !

! Collection methodsFor: 'Builders-emmiting' !
emmit
	" Emmit(fileIn & save generated code of) the fileNames in the receiver. "

	^self inject: '' into: [:total :each| total ,(self emmit: each) ]! !

! Collection methodsFor: 'Builders-emmiting' !
emmitSt
	" Emmit the code of modules (.st files) in the receiver. "

	^(self collect: [:module| module ,'.st' ]) emmit! !

! Stream methodsFor: 'Tools-fileIn'!
nextChunk
	" FileIn - Return the next chunk read from the receiver.
	Trailing non-printing characters are skipped. "

	| result |
	result := self upTo: $!!.
	[ self peek = $!! ] whileTrue: [
		self next.
		result := result, '!!', (self upTo: $!!)
	].
	^result trimFirst: [:c| c asciiValue <= 32 ]! !

! Stream methodsFor: 'Tools-fileIn'!
fileInto: aReceiver
	" FileIn - FileIn the receiver's contents (in chunk format) using aReceiver as default scanner. "

	| scanner |
	[self atEnd] whileFalse: [
		scanner isNil ifTrue: [ scanner := aReceiver ].
		scanner := scanner scanFrom: self
	].
	^scanner! !

! Stream methodsFor: 'Tools-fileIn'!
fileIn
	" FileIn - FileIn the receiver's contents (in chunk format). "

	^self fileInto: nil! !

! Stream methodsFor: 'Tools-fileOut'!
nextChunkPut: aString
	" Output aString in chunk format. "

	| eoc parts |
	eoc := $!!.
	(aString notNil and: [aString notEmpty]) ifTrue: [
		(aString asArrayOfSubstringsSeparatedBy: eoc)
			do: [:each| self nextPutAll: each ]
			separatedBy: [ self nextPutAll: eoc,eoc ].
	] ifFalse: [ self nextPut: $ ].
	self nextPut: eoc.
	^aString! !

! Object methodsFor: 'Tools-fileIn'!
scanFrom: aStream
	" FileIn - Return the result of evaluating the next chunk of data from aStream.
	The method can be refined by chunk readers to support custom fileIn features.
	Must return the next reader to use for reading remaining contents from aStream.
	"

	| chunk |
	chunk := aStream nextChunk.
	chunk isEmpty ifTrue: [ ^nil ].
	^chunk evaluateIn: self! !

Object
 subclass: #FileInReader
 category: 'Tools-FileIn'!
FileInReader comment: '
	Perform sequential reading from aStream in chunk format.
	Instances implement #scanFrom: message, advancing aStream upto next reader instantiation chunk.'!

! FileInReader methodsFor: #fileIn !
scanFrom: aStream
	" FileIn - Return the result of evaluating the next chunk of data from aStream.
	The method must be implemented by chunk readers to support custom fileIn features.
	"

	^self subclassResponsibility: #scanFrom:! !

FileInReader
 subclass: #ChunkReader
 instanceVariableNames: 'actionBlock terminationBlock'
 category: 'Tools-FileIn'!

ChunkReader comment: '
	Pluggable FileInReader.
	actionBlock is evaluated with input stream as argument.
	Read chunks until empty chunk, terminationBlock is nil or evaluates to true.'!

! ChunkReader class methodsFor: #instantiation !
doing: aBlock until: terminationBlock
	" Return an instance of the receiver. "

	^self new
		actionBlock: aBlock;
		terminationBlock: terminationBlock;
		yourself! !

! ChunkReader class methodsFor: #instantiation !
doing: aBlock
	" Return an instance of the receiver. "

	^self doing: aBlock until: [ true ]! !

! ChunkReader class methodsFor: #instantiation !
until: terminationBlock
	" Return an instance of the receiver. "

	^self doing: nil until: terminationBlock! !

! ChunkReader class methodsFor: #instantiation !
ignore
	" Return an instance of the receiver.
	The returned reader will ignore/absorb next chunk.
	"

	^self new! !

! ChunkReader class methodsFor: #instantiation !
javascriptChunk
	" Return an instance of the receiver.
	The returned reader will evaluate next chunk as javascript code (in global context).
	"

	^self doing: [:aStream| Smalltalk current eval: aStream nextChunk ]! !

! ChunkReader class methodsFor: #instantiation !
javascript
	" Return an instance of the receiver.
	The returned reader will evaluate following contents as javascript code (in global context).
	The stream will be consumed up to end.
	"

	^self doing: [:aStream| Smalltalk current eval: aStream upToEnd ]! !

! ChunkReader methodsFor: #accessing !
actionBlock
	" Return the actionBlock of the receiver. "

	^actionBlock!

actionBlock: aBlock
	" Set the actionBlock of the receiver. "

	actionBlock := aBlock!

terminationBlock
	" Return the terminationBlock of the receiver. "

	^terminationBlock!

terminationBlock: aBlock
	" Set the terminationBlock of the receiver. "

	terminationBlock := aBlock! !

! ChunkReader methodsFor: #fileIn !
scanFrom: aStream
	" Scan the next chunk of data from aStream. "

	| chunk |
	self actionBlock isNil ifTrue: [
		chunk := aStream nextChunk.
		chunk isEmpty ifTrue: [ ^nil ].
	] ifFalse: [ self actionBlock value: aStream ].
	(self terminationBlock isNil
		or: [ true == self terminationBlock value ])
		ifTrue: [ ^nil ].
	^self! !

! Object methodsFor: 'Tools-fileIn' !
javascriptCodeFollows
	" FileIn - FileIn javascript code on current stream.
	Consume stream contents upto end of stream evaluating the contents as javascript code.
	"

	^ChunkReader javascript! !

FileInReader
 subclass: #ClassCategoryReader
 instanceVariableNames: 'class category'
 category: 'Tools-FileIn'!

! ClassCategoryReader methodsFor: #accessing !
class: aClass category: aString
	" Private - Set the class and category of the receiver. "

	class := aClass.
	category := aString! !

! ClassCategoryReader methodsFor: #fileIn !
scanFrom: aStream
	" Scan the next chunk of data from aStream. "

	| chunk |
	chunk := aStream nextChunk.
	^[ chunk isEmpty ifFalse: [ self compileMethod: chunk ]
	] logEvaluate: chunk! !

! ClassCategoryReader methodsFor: #private !
compileMethod: aString
	" Compile aString as a method source. "

	| method |
	method := class compiler load: aString forClass: class.
	method category: category.
	class addCompiledMethod: method! !

! Behavior methodsFor: 'Tools-fileIn' !
methodsFor: aString
	" FileIn - Return a chunk reader to fileIn methods onto the receiver. "

	^ClassCategoryReader new class: self category: aString! !

! Behavior methodsFor: 'Tools-fileIn' !
methodsFor: aString
stamp: aTimeStampString
	" FileIn - Return a chunk reader to fileIn methods onto the receiver. "

	^ClassCategoryReader new class: self category: aString! !

!Behavior methodsFor: 'Tools-fileIn'!
methods
	" FileIn - Return a chunk reader to fileIn methods onto the receiver. "

	^self methodsFor: #unclassified ! !

FileInReader
 subclass: #ClassCommentReader
 instanceVariableNames: #class
 category: 'Tools-FileIn'!

! ClassCommentReader methodsFor: #accessing !
class: aClass
	" Set the destination class of the receiver. "

	class := aClass! !

! ClassCommentReader methodsFor: #fileIn !
scanFrom: aStream
	" FileIn - Parse next chunk in aStream as a comment for target class. "

	self comment: aStream nextChunk.
	^nil! !

! ClassCommentReader methodsFor: #private !
comment: aString
	" Set the comment of target class. "

	class comment: (aString isEmpty ifFalse: [ aString ])! !

! Behavior methodsFor: 'Tools-fileIn' !
commentStamp
	" Return a comment reader for the receiver. "

	^ClassCommentReader new class: self! !

FileInReader
 subclass: #SkipFileInReader
 instanceVariableNames: #limit
 category: 'Tools-FileIn'!

! SkipFileInReader class methodsFor: #instantiation !
upTo: aToken
	" Return an instance of the receiver. "

	^self new limit: aToken! !

! SkipFileInReader methodsFor: #fileIn !
scanFrom: aStream
	" Consume/Ignore contents in aStream. "

	limit isNil
		ifTrue: [ aStream setToEnd ]
		ifFalse: [ aStream skipTo: limit ].
	^nil! !

! SkipFileInReader methodsFor: #accessing !
limit: aToken
	" Set the token limit. "

	limit := aToken! !

! Object methodsFor: 'Tools-fileIn' !
cancelFileIn
	" FileIn - Cancel fileIn on current stream. "

	^self ignoreFileInUpTo: nil! !

! Object methodsFor: 'Tools-fileIn' !
ignoreFileInUpTo: aToken
	" FileIn - Ignore fileIn on current stream upto token. "

	^SkipFileInReader upTo: aToken! !

FileInReader
 subclass: #AssociationsReader
 category: 'Tools-FileIn'!

! AssociationsReader methodsFor: #reading !
keyFrom: aStream
	" Private - Return the name of the current binding in aStream. "

	aStream peek = $# ifTrue: [ ^(aStream next; upTo: $ ) asSymbol ].
	aStream peek = $' ifTrue: [ ^aStream next; upTo: $' ].
	^aStream upTo: $ ! !

! AssociationsReader methodsFor: #reading !
valueFrom: aStream
	" Private - Return the value of the current binding in aStream. "

	^self compilerSupport evaluate: aStream upToEnd ! !

! AssociationsReader methodsFor: #evaluating !
compilerSupport
	" Private - Return compiler in use to get values from stream. "

	^self smalltalk compilerSupport! !

! AssociationsReader methodsFor: #binding !
bind: tuples
	" Private - Bind the filedIn tuples to target.
	Must return the result of the fileIn/binding process.
	"

	^self subclassResponsibility: #bind: ! !

! AssociationsReader methodsFor: #fileIn !
scanFrom: aStream
	" Consume chunks in aStream until empty chunk.
	The chunks are considered associative bindings with the syntax:
		<key> <expression>
	Where
		key is the keyword of the binding (name, string or symbol).
		expression is a valid smalltalk expression that will be evaluated to generate the value of the binding.
	"

	| chunk tuples |
	tuples := Array new.
	[ aStream atEnd not and: [
	  chunk := aStream nextChunk trimBlanks.
	  chunk notEmpty ]] whileTrue: [
	  chunk := chunk stream.
	  tuples add: (Array
		with: (self keyFrom: chunk)
		with: (self valueFrom: chunk)).
	].
	^self bind: tuples! !

AssociationsReader
 subclass: #PoolDictionaryReader
 instanceVariableNames: #scope
 category: 'Tools-FileIn'!

! PoolDictionaryReader methodsFor: #accessing !
scope: aScope
	" Set the scope where the read bindings will be stored. "

	scope := aScope! !

! PoolDictionaryReader methodsFor: #binding !
bind: tuples
	" Private - Bind the filedIn tuples to target.
	Must return the result of the fileIn/binding process.
	"

	scope isString ifTrue: [
		^Smalltalk definePool: scope with: tuples
	].
	scope isNil ifTrue: [ scope := PoolDictionary new ].
	tuples do: [:each| scope at: each first put: each last ].
	^scope! !

! PoolDictionaryReader methodsFor: #reading !
valueFrom: aStream
	" Private - Return the value of the current binding in aStream. "

	| code result word |
	code := aStream upToEnd.
	word := code trimBlanks.
	(word = #nil or: [ word isEmpty ]) ifTrue: [ ^nil ].
	result := word asNumber.
	result isNumber ifTrue: [ ^result ].
	^super valueFrom: code stream ! !

! Smalltalk class methodsFor: 'Tools-pool variables' !
bindingsFor: aScope
	" FileIn - Return a reader to fileIn bindings in a (global) scope.
	aScope can be a string or a dictionary.
	In case of aScope been a String, it will be considered a PoolDictionaryName
	See PoolDictionaryReader>>#scanFrom:
	"

	^PoolDictionaryReader new scope: aScope! !

AssociationsReader
 subclass: #JSReader
 instanceVariableNames: #object
 category: 'Tools-FileIn'!

! JSReader methodsFor: #binding !
bind: tuples
	" Private - Bind the filedIn tuples to target.
	Must return the result of the fileIn/binding process.
	"

	object isNil ifTrue: [ self initializeObject ].
	tuples do: [:each| object basicAt: each first put: each last ].
	^object! !

! JSReader methodsFor: #accessing !
object: anObject
	" Set the object where the bindings will be stored. "

	object := anObject! !

! JSReader methodsFor: #initialize !
initializeObject
	" Private - Initialize the object where the bindings will be stored. "

	object := Smalltalk emptyJSONObject! !

Object
 subclass: #Exporter
 category: 'Tools-FileOut'!

! Exporter class methodsFor: #fileOut !
fileOutCategories: categories
	" Return the result of fileOut all the classes in categories. "

	^self new fileOutCategories: categories! !

! Exporter class methodsFor: #fileOut !
fileOutCategory: aString
	" Return the result of fileOut all the classes in category aString. "

	^self new fileOutCategory: aString! !

! Exporter class methodsFor: #fileOut !
fileOutAll: elements
	" Return the result of fileOut elements (classes, methods and/or categories). "

	^self new fileOutAll: elements! !

! Exporter class methodsFor: #fileOut !
fileOutAll
	" Return the result of fileOut of all classes in the system. "

	^self fileOutAll: self allClasses! !

! Exporter class methodsFor: #fileOut !
fileOut: spec
	" Return the result of fileOut of literals in spec. "

	| aName |
	spec isNil ifTrue: [ ^'' ].
	spec isString ifFalse: [
		(spec isKindOf: Behavior) ifTrue: [ ^self new fileOut: spec ].
		^spec asArray fileOut
	].
	(spec includes: $,) ifTrue: [ ^self fileOut: (spec asArrayOfSubstringsSeparatedBy: $,) ].
	(spec includes: $ ) ifTrue: [ ^self fileOut: (spec asArrayOfSubstringsSeparatedBy: $ ) ].
	aName := spec trimBlanks.
	(Smalltalk includesKey: aName) ifTrue: [ ^self fileOut: (Smalltalk at: aName)].
	^self fileOutCategories: aName! !

! Exporter class methodsFor: #export !
exportCategories: categories
	" Return the result of exporting all the classes in categories. "

	^self new exportCategories: categories! !

! Exporter class methodsFor: #export !
exportCategory: aString
	" Return the result of exporting all the classes in category aString. "

	^self new exportCategory: aString! !

! Exporter class methodsFor: #export !
export: spec
	" Return the result of exporting literals in spec. "

	| aName |
	spec isNil ifTrue: [ ^'' ].
	spec isString ifFalse: [
		(spec isKindOf: Behavior) ifTrue: [ ^self new export: spec ].
		^spec asArray export
	].
	(spec includes: $,) ifTrue: [ ^self export: (spec asArrayOfSubstringsSeparatedBy: $,) ].
	(spec includes: $ ) ifTrue: [ ^self export: (spec asArrayOfSubstringsSeparatedBy: $ ) ].
	aName := spec trimBlanks.
	(Smalltalk includesKey: aName) ifTrue: [ ^self export: (Smalltalk at: aName)].
	^self exportCategories: aName! !

! Exporter class methodsFor: #export !
exportAll
	" Return the result of exporting all classes in the system. "

	^self new exportAll! !

! Exporter class methodsFor: #export !
exportAll: elements
	" Return the result of exporting all elements (classes, methods and/or categories). "

	^self new exportAll: elements! !

! Exporter class methodsFor: #private !
allClasses
	" Private - Return all the classes in the system (in fileIn order). "

	^Smalltalk rootClasses
		inject: Array new
		into: [:total :each| total , each withAllSubclasses ]! !

! Exporter methodsFor: #categories !
matchCategory: aString
	" Return the result of filtering all the classes (and orphan methods) in category aString. "

	^self matchCategory: aString from: Smalltalk rootClasses! !

! Exporter methodsFor: #categories !
matchCategory: aString from: rootClasses
	" Return the result of filtering all the classes (and orphan methods) in category aString. "

	| selection selected rejected orphanMethods fileOutMethods |
	selected := Array new.
	rejected := Array new.
	orphanMethods := Array new.
	selection := (aString includes: $-)
		ifTrue: [ [:each| each category asString = aString ] ]
		ifFalse: [ [:each| (each category asString upTo: $-) = aString ] ].
	rootClasses do: [:root|
		root instanceClass withAllSubclasses do: [:each|
			((selection value: each)
				ifTrue: [ selected ] ifFalse: [ rejected ])
				add: each
		]
	].
	fileOutMethods := [:cls|
		cls methodsDo: [:aMethod |
			(selection value: aMethod) ifTrue: [ orphanMethods add: aMethod ]
		].
	].
	rejected do: [:each| fileOutMethods value: each; value: each class ].
	^Array with: selected with: rejected with: orphanMethods! !

! Exporter methodsFor: #fileOut !
fileOutCategories: categories
	" Return the result of fileOut all the classes in categories. "

	categories isString ifTrue: [ ^self fileOutCategories: categories asArrayOfSubstrings ].
	^categories asArray inject: '' into: [:total :each|
		total, (self fileOutCategory: each)
	]! !

! Exporter methodsFor: #fileOut !
fileOutCategory: aString
	" Return the result of fileOut all the classes in category aString. "

	| stream match |
	stream := '' writeStream.
	match := self matchCategory: aString.
	self fileOutAll: match first on: stream.
	match last do: [:aMethod |
		self fileOutMethod: aMethod of: aMethod classField on: stream
	].
	^stream contents! !

! Exporter methodsFor: #fileOut !
fileOut: aClass
	" Return fileOut definition and code of a class. "

	| stream |
	stream := '' writeStream.
	self fileOut: aClass on: stream.
	^stream contents! !

! Exporter methodsFor: #fileOut !
fileOutClass: aClass
	" Return fileOut definition and code of a class. "

	^self fileOut: aClass! !

! Exporter methodsFor: #fileOut !
fileOutAll: elements
	" Return fileOut definition and code of elements (classes, methods and/or categories). "

	| stream |
	stream := '' writeStream.
	self fileOutAll: elements on: stream.
	^stream contents! !

! Exporter methodsFor: #fileOut !
fileOutMethod: aMethod of: aClass
	" Return fileOut method of a class. "

	| stream |
	stream := '' writeStream.
	self fileOutMethod: aMethod of: aClass on: stream.
	^stream contents! !

! Exporter methodsFor: #fileOut !
fileOutAllMethodsOf: aClass on: stream
	" FileOut all methods of aClass (and metaclass) onto stream. "

	self fileOutMethodsOf: aClass class on: stream.
	self fileOutMethodsOf: aClass on: stream.! !

! Exporter methodsFor: #fileOut !
fileOutDefinitionOfClass: aClass on: stream
	" FileOut definition of aClass (and metaclass) onto stream. "

	self fileOutDefinitionOf: aClass on: stream.
	self fileOutDefinitionOf: aClass class on: stream! !

! Exporter methodsFor: #fileOut !
fileOutAll: elements on: stream
	" FileOut definition and code of elements (classes, methods and/or categories) onto stream. "

	elements isString ifTrue: [ ^self fileOutAll: elements asArrayOfSubstrings on: stream ].
	elements do: [:each|
		(each isKindOf: Behavior) ifTrue: [
			self fileOutDefinitionOfClass: each on: stream
		].
	].	stream cr.
	elements do: [:each|
		(each isKindOf: Behavior) ifTrue: [
			self fileOutAllMethodsOf: each on: stream
		] ifFalse: [
			each isString
			ifTrue: [ stream nextPutAll: (self fileOutCategory: each);cr ]
			ifFalse: [ self fileOutAllMethod: each on: stream ]
		]
	].! !

! Exporter methodsFor: #fileOut !
fileOutDefinitionOf: aClass
	" Return the definition of a class. "

	| stream |
	stream := '' writeStream.
	self fileOutDefinitionOfClass: aClass instanceClass on: stream.
	^stream contents! !

! Exporter methodsFor: #fileOut !
fileOut: aClass on: stream
	" FileOut definition and code of a class onto stream. "

	self fileOutAll: (Array with: aClass) on: stream.! !

! Exporter methodsFor: #fileOut !
fileOutDefinitionOf: aClass on: stream
	" FileOut definition of a class onto stream. "

	aClass isMetaclass ifTrue: [
		(self fileOutStrings: #instanceVariableNames of: aClass on: stream) ifTrue: [
			stream nextChunkPut: '';cr.
		].
		(self fileOutArray: #propertyNames of: aClass on: stream) ifTrue: [
			stream nextChunkPut: '';cr.
		].
		^self
	].

	stream
		nextPutAll: aClass superclass name; cr;tab;
		nextPutAll: 'subclass: #'.
	(self fileOutStrings: #instanceVariableNames of: aClass on: stream) ifFalse: [
		stream
			nextPutAll: (self globalNameFor: aClass); cr;tab;
			nextPutAll: 'instanceVariableNames: ';
			nextPutAll: '' printString
	].
	aClass classVariables notNil ifTrue: [
	    stream	 cr;tab;
		nextPutAll: 'classVariableNames: ';
		nextPutAll: aClass classVariablesString printString
	].
	aClass poolDictionaries notNil ifTrue: [
	    stream	 cr;tab;
		nextPutAll: 'poolDictionaries: ';
		nextPutAll: aClass poolDictionariesString printString
	].
	stream cr;tab;
		nextPutAll: 'category: ';
		nextPutAll: aClass category asLiteral.
	stream nextChunkPut: '';cr.
	(self fileOutArray: #propertyNames of: aClass on: stream) ifTrue: [
		stream nextChunkPut: '';cr.
	].
	(aClass comment notNil and: [aClass comment notEmpty]) ifTrue: [
		stream nextPutAll: (self globalNameFor: aClass),' comment: ', aClass comment printString.
		stream nextChunkPut: '';cr.
	].! !

! Exporter methodsFor: #fileOut !
fileOutStrings: selector of: aClass on: stream
	" Private - FileOut selector strings of a class onto stream.
	Return true if code has been filedOut.
	"

	| strings |
	strings := aClass perform: selector.
	strings isEmpty ifTrue: [ ^false ].
	stream
		nextPutAll: (self globalNameFor: aClass); cr;tab;
		nextPutAll: selector,': '''.
	strings do: [:each| stream nextPutAll: ' ',each ].
	stream nextPutAll: ' '''.
	^true! !

! Exporter methodsFor: #fileOut !
fileOutArray: selector of: aClass on: stream
	" Private - FileOut selector arrayed strings of a class onto stream.
	Return true if code has been filedOut.
	"

	| strings |
	strings := aClass perform: selector.
	strings isEmpty ifTrue: [ ^false ].
	stream
		nextPutAll: (self globalNameFor: aClass);
		nextPutAll: ' ',selector,': ', strings asLiteral.
	^true! !

! Exporter methodsFor: #fileOut !
fileOutMethodsOf: aClass on: stream
	" FileOut methods of a class onto stream. "

	| selectors |
	selectors := aClass selectors.
	selectors isEmpty ifTrue: [ ^self ].
	stream cr.
	self
		fileOutSelectors: selectors
		of: aClass on: stream! !

! Exporter methodsFor: #private !
fileOutClusters
	" Private - Return the fileOut chustering dumpers of the receiver.
	A fileOutCluster is an object that potentially dump clustered actions for selectors implemented by aClass.
	The fileOut write (smalltalk)code for multiple selectors removing them from selectors collection.
	Note: the selectors collection is modified during fileOut.
	The default answer is an empty collection of custed or a collection with default APIBuilder.
	This method can be refined by the subclasses.
	"

	^(#( #APIBuilder )
		select: [:key| Smalltalk includesKey: key ])
		collect: [:each| (Smalltalk at: each) default ]! !

! Exporter methodsFor: #fileOut !
fileOutSelectors: selectors of: aClass on: stream
	" FileOut methods implementing selectors of a class onto stream. "

	self fileOutClusters do: [:each|
		each
			fileOut: self selectors: selectors
			of: aClass on: stream
	].
	selectors sorted do: [:each|
		self
			fileOutMethod: (aClass compiledMethodAt: each)
			of: aClass on: stream
	].! !

! Exporter methodsFor: #private !
isASymbol: aString
	" Private - Return true if aString can be output with symbol notation. "

	^((RegularExpression fromString: '[^a-zA-Z0-9_:]') exec: aString) isNil! !

! Exporter methodsFor: #fileOut !
fileOutMethod: aMethod
	" Return the fileOut of aMethod. "

	| stream |
	stream := '' writeStream.
	self fileOutMethod: aMethod of: aMethod classField on: stream.
	^stream contents! !

! Exporter methodsFor: #fileOut !
fileOutMethod: aMethod on: aStream
	" Return the fileOut of aMethod. "

	^self
		fileOutMethod: aMethod
		of: aMethod classField
		on: aStream! !

! Exporter methodsFor: #fileOut !
fileOutMethod: aMethod of: aClass on: stream
	" FileOut method of a class onto stream. "

	stream
		cr;nextChunkPut: '';
		nextChunkPut: ' ', (self globalNameFor: aClass), ' methodsFor: ', aMethod category asLiteral ,' '; cr;
		nextChunkPut: aMethod source;
		nextChunkPut: ' ';cr! !

! Exporter methodsFor: #export !
exportCategory: aString
	" Return the result of exporting all the classes in category aString. "

	| stream match |
	stream := '' writeStream.
	match := self matchCategory: aString.
	match first do: [:each| stream nextPutAll: (self export: each) ].
	match last do: [:aMethod |
		self export: aMethod classField method: aMethod on: stream
	].
	^stream contents! !

! Exporter methodsFor: #export !
exportCategories: categories
	" Return the result of exporting all the classes in categories. "

	categories isString ifTrue: [ ^self exportCategories: categories asArrayOfSubstrings ].
	^categories asArray inject: '' into: [:total :each|
		total, (self exportCategory: each)
	]! !

! Exporter methodsFor: #export !
exportAllMethodsOf: aClass on: stream
	" Export all methods of a class (and metaclass) onto stream. "

	self exportMethodsOf: aClass class on: stream.
	self exportMethodsOf: aClass on: stream.! !

! Exporter methodsFor: #export !
exportDefinitionOfClass: aClass on: stream
	" Export definition of aClass (and metaclass) onto stream. "

	self exportDefinitionOf: aClass on: stream.
	self exportMetaDefinitionOf: aClass on: stream.! !

! Exporter methodsFor: #export !
export: aClass
	" Return the result of exporting definition and source code of a class. "

	| stream |
	stream := '' writeStream.
	self exportDefinitionOfClass: aClass on: stream.
	self exportAllMethodsOf: aClass on: stream.
	^stream contents! !

! Exporter methodsFor: #export !
exportNew: aClass
	" Return the result of exporting definition of aClass. "

	^self exportDefinitionOf: aClass! !

! Exporter methodsFor: #requirements !
defaultRequirementsFor: aClass
	" Private - Return the default requirements to load aClass.
	Detect native bindings and generate code to rebind before class definition.
	"

	| constructorName code |
	constructorName := aClass constructorName.
	constructorName isNil ifTrue: [ ^#() ].
	^Array with:
		'if(',constructorName,' && !!'
		, (self smalltalkNameFor: aClass)
		,') smalltalk.mapClassName("'
		,(self globalNameFor: aClass) ,'","'
		,aClass category, '",'
		,constructorName, ','
		,(self smalltalkNameFor: aClass superclass)
		,');'! !

! Exporter methodsFor: #requirements !
loadRequirementsOf: aClass
	" Return the requirements to load aClass.
	It must be a collection of requirements.
	aRequirement must implement #fileOutOn: or must be a string with javascript code to execute just before defining aClass.
	"

	| requirements |
	requirements := self defaultRequirementsFor: aClass.
	aClass loadRequirementsInto: requirements.
	^requirements! !

! Exporter methodsFor: #private !
exportDefinitionOf: aClass on: aStream
	" Export definition of aClass onto aStream. "

	(self loadRequirementsOf: aClass) do: [:each|
		each isString
		ifTrue: [ aStream nextPutAll: each;cr ]
		ifFalse: [ aStream fileOutOn: aStream ].
	].
	aStream
	    nextPutAll: 'smalltalk.addClass("', (self globalNameFor: aClass), '",';
	    nextPutAll: (self smalltalkNameFor: aClass superclass);
	    nextPutAll: ', ['.
	aClass instanceVariableNames
	    do: [:each | aStream nextPutAll: '''', each, '''' ]
	    separatedBy: [ aStream nextPutAll: ', ' ].
	aStream
	    nextPutAll: '], ''';
	    nextPutAll: aClass category, '''';
	    nextPutAll: ');'; cr.
	(aClass comment notNil and: [aClass comment notEmpty]) ifTrue: [
	    aStream
		nextPutAll: (self smalltalkNameFor: aClass);
		nextPutAll: '.$comment=' ,aClass comment escapedCode;
		nextPutAll: ';'; cr
	].
	aClass classVariables notNil ifTrue: [
	    aStream
		nextPutAll: (self smalltalkNameFor: aClass);
		nextPutAll: '.$classVariableNames=' ,aClass classVariablesString escapedCode;
		nextPutAll: ';'; cr
	].
	aClass poolDictionaries notNil ifTrue: [
	    aStream
		nextPutAll: (self smalltalkNameFor: aClass);
		nextPutAll: '.$poolDictionaries=['.
	    aClass poolDictionaries
	    	do: [:each | aStream nextPutAll: '''', each, '''' ]
	    	separatedBy: [ aStream nextPutAll: ', ' ].
	    aStream  nextPutAll: '];'; cr
	].
	aClass propertyNames notEmpty ifTrue: [
	    aStream
		nextPutAll: (self smalltalkNameFor: aClass);
		nextPutAll: '.$propertyNames=['.
	    aClass propertyNames
	    	do: [:each | aStream nextPutAll: '''', each, '''' ]
	    	separatedBy: [ aStream nextPutAll: ', ' ].
	    aStream  nextPutAll: '];'; cr
	].! !

! Exporter methodsFor: #private !
exportMetaDefinitionOf: aClass on: aStream
	" Export class side definition of aClass onto aStream. "

	aClass class instanceVariableNames notEmpty ifTrue: [
		aStream
			nextPutAll: (self smalltalkNameFor: aClass class);
			nextPutAll: '.$iVarNames = ['.
		aClass class instanceVariableNames
			do: [:each | aStream nextPutAll: '''', each, '''' ]
			separatedBy: [ aStream nextPutAll: ',' ].
		aStream nextPutAll: '];'; cr.
	].

	aClass class propertyNames notEmpty ifTrue: [
		aStream
			nextPutAll: (self smalltalkNameFor: aClass class);
			nextPutAll: '.$propertyNames = ['.
		aClass class propertyNames
			do: [:each | aStream nextPutAll: '''', each, '''' ]
			separatedBy: [ aStream nextPutAll: ',' ].
		aStream nextPutAll: '];'; cr.
	].! !

! Exporter methodsFor: #private !
smalltalkNameFor: aClass
	" Private - Return the javascript reference expression of aClass (or nil). "

	aClass isNil ifTrue: [ ^#undefined ].
	^'smalltalk.', (aClass isMetaclass
	    ifTrue: [ aClass instanceClass name, '.$klass' ]
	    ifFalse: [ aClass name ])! !

! Exporter methodsFor: #private !
globalNameFor: aClass
	" Private - Return the smalltalk name of aClass (or nil). "

	^aClass isNil ifTrue: [ #nil ] ifFalse: [ aClass name ]! !

! Exporter methodsFor: #export !
exportAll
	" Return the result of exporting all classes in the system. "

	^self exportClasses: self class allClasses! !

! Exporter methodsFor: #export !
exportAllCategories
	" Return the result of exporting all categories in the system. "

	| categories |
	categories := Array new.
	self class allClasses do: [:each |
		(categories includes: each category) ifFalse: [
			categories add: each category
		]
	].
	^categories inject: '' into: [:total :each | total ,(self exportCategory: each) ]! !

! Exporter methodsFor: #export !
exportDefinitionOf: aClass
	" Return the result of exporting definition of aClass. "

	| stream |
	stream := String new writeStream.
	self exportDefinitionOf: aClass on: stream.
	^stream contents! !

! Exporter methodsFor: #export !
exportMetaDefinitionOf: aClass
	" Return the result of exporting class side definition of aClass. "

	| stream |
	stream := String new writeStream.
	self exportMetaDefinitionOf: aClass on: stream.
	^stream contents! !

! Exporter methodsFor: #export !
exportClasses: classes on: stream
	" Return the result of exporting class definitions onto stream. "

	^self exportAll: classes on: stream! !

! Exporter methodsFor: #export !
exportAll: elements on: stream
	" Return the result of exporting elements (classes, methods and/or categories) onto stream. "

	elements isString ifTrue: [ ^self exportAll: elements asArrayOfSubstrings on: stream ].
	elements do: [:each|
		(each isKindOf: Behavior) ifTrue: [
			self exportDefinitionOfClass: each on: stream
		].
	].
	stream cr.
	elements do: [:each|
		(each isKindOf: Behavior) ifTrue: [
			self exportAllMethodsOf: each on: stream
		] ifFalse: [
			each isString
			ifTrue: [ stream nextPutAll: (self exportCategory: each);cr ]
			ifFalse: [ self exportMethod: each on: stream ]
		]
	].! !

! Exporter methodsFor: #export !
exportAll: elements
	" Return the result of exporting elements (classes, methods and/or categories). "

	| stream |
	stream := String new writeStream.
	self exportAll: elements on: stream.
	^stream contents! !

! Exporter methodsFor: #export !
exportClasses: classes
	" Return the result of exporting classes. "

	| stream |
	stream := String new writeStream.
	self exportClasses: classes on: stream.
	^stream contents! !

! Exporter methodsFor: #export !
exportObject: anObject on: stream
	" Export a (javascript)literal representation of anObject onto stream. "

	stream nextPutAll: anObject asJavascript.! !

! Exporter methodsFor: #export !
exportObject: anObject
	" Return the result of exporting a literal representation of anObject. "

	| stream |
	stream := String new writeStream.
	self exportObject: anObject on: stream.
	^stream contents! !

! Exporter methodsFor: #export !
export: aClass method: aMethod
	" Return the result of exporting aClass method. "

	| stream |
	stream := String new writeStream.
	self export: aClass method: aMethod on: stream.
	^stream contents! !

! Exporter methodsFor: #export !
exportMethod: aMethod
	" Return the result of exporting aMethod. "

	^self export: aMethod classField method: aMethod! !

! Exporter methodsFor: #export !
exportMethod: aMethod on: aStream
	" Return the result of exporting aMethod on stream. "

	^self export: aMethod classField method: aMethod on: aStream! !

! Exporter methodsFor: #export !
exportMethods: aCollection on: aStream
	" Return the result of exporting aCollection of methods on stream. "

	aCollection do: [:each| self exportMethod: each on: aStream ]! !

! Exporter methodsFor: #export !
exportMethods: aCollection
	" Return the result of exporting aCollection of methods. "

	| stream |
	stream := String new writeStream.
	self exportMethods: aCollection on: stream.
	^stream contents! !

! Exporter methodsFor: #private !
exportMethodsOf: aClass on: aStream
	" Export methods of aClass onto aStream. "

	aClass methodsDo: [:each|
		self export: aClass method: each on: aStream
	]! !

! Exporter methodsFor: #private !
javascriptSourceFor: aMethod
	" Private - Return the code of javascript function implementing aMethod. "

	^aMethod fn compiledSource! !

! Exporter methodsFor: #export !
export: aClass method: aMethod on: aStream
	" Export a method definition of aClass onto aStream. "

	| functionName selectorName bar |
	bar := $" asString.
	functionName := aMethod selector.
	functionName first isBackSlash ifTrue: [
		selectorName := aMethod selector escapedCode.
		functionName := functionName asSelector escapedCode.
	] ifFalse: [
		selectorName := bar ,aMethod selector, bar.
		functionName asSelector = (aMethod selector replace: '\:' with: $_) ifTrue: [
			functionName := '0' "we exploit the fact that 0 isNil to signal a compact selector"
		] ifFalse: [
			functionName := bar ,functionName asSelector, bar
		].
	].
	aStream
		nextPutAll: 'smalltalk.bind(', (self smalltalkNameFor: aClass)
			,',', selectorName, ',', functionName ,'
,'			, (self javascriptSourceFor: aMethod).
	(aMethod source notNil and: [ aMethod source notEmpty ]) ifTrue: [
	    aStream cr; "warning: this cr is important for debugger"
		nextPutAll: ',', aMethod category escapedCode
			,',', aMethod source escapedCode.
	].
	aStream nextPutAll: ');
'! !

! String methodsFor: 'Tools-evaluating' !
showIt
	" Show/Print the result of evaluating the receiver. "

	^self print: self logEvaluate! !

! String methodsFor: 'Tools-evaluating' !
logEvaluate
	" Return the result of evaluating the receiver.
	The source of evaluation will be logged.
	"

	^[ self evaluate ] logEvaluate: self ! !

! String methodsFor: 'Tools-evaluating' !
evaluate
	" Return the result of evaluating the receiver. "

	^self smalltalk compilerSupport evaluate: self ! !

! String methodsFor: 'Tools-evaluating' !
evaluateIn: aReceiver
	" Return the result of evaluating the receiver in the context of aReceiver. "

	^self smalltalk compilerSupport evaluate: self to: aReceiver! !

! String methodsFor: 'Tools-evaluating' !
doIt
	" Return the result of evaluating the receiver or the error occurred during compilation or evaluation. "

	^self smalltalk compilerSupport doIt: self! !

! Smalltalk methodsFor: 'Tools-fileIn' !
fileInCode: code
	" FileIn the code into the receiver. "

	^code stream fileIn! !

! String methodsFor: 'Tools-fileIn' !
fileIn
	" FileIn the contents of the receiver. "

	^self stream fileIn! !

! String methodsFor: 'Tools-fileOut' !
fileOut
	" FileOut the classes/categories in the receiver. "

	^Exporter fileOut: self! !

! String methodsFor: 'Tools-fileOut' !
export
	" Export the classes/categories in the receiver. "

	^Exporter export: self! !

! Behavior methodsFor: 'Tools-fileOut' !
fileOut
	" Return fileOut definition and code of a class. "

	^Exporter fileOut: self instanceClass! !

! Behavior methodsFor: 'Tools-export' !
export
	" Return the result of exporting definition and source code of a class. "

	^Exporter export: self instanceClass! !

! Collection methodsFor: 'Tools-fileOut' !
fileOut
	" Return fileOut definition and code of classes in the receiver. "

	| cr |
	cr := '
'.	^self inject: '' into: [:total :each| total ,cr, each fileOut ]! !

! Collection methodsFor: 'Tools-export' !
export
	" Return the result of exporting definition and source code of classes in the receiver. "

	| cr |
	cr := '
'.	^self inject: '' into: [:total :each| total ,cr, each export ]! !


! String methodsFor: 'Tools-converting' !
asStSelector
	" Return a smalltalk selector from a javascript function name.
	Note: it must be the reverse operation of #asSelector
	"

	| operations |
	self = '$' ifTrue: [ ^'' ].
	self = '_bk' ifTrue: [ ^$\ ].
	(self match: '^[$][$]') ifTrue: [ ^(self copyFrom: 3 to: self size) asStSelector ].
	operations := #(
		#( $+ #_plus )
		#( $- #_minus )
		#( $* #_star )
		#( $/ #_slash )
		#( $| #_bar )
		#( $& #_amp )
		#( $> #_gt )
		#( $< #_lt )
		#( $= #_eq )
		#( $, #_comma )
		#( $@ #_at )
		#( $~ #_no )
		#( $\ #_bk )
	).
	operations do: [:tuple|
		(self match: $^ , tuple last) ifTrue: [
			^operations reversed inject: self into: [:result :each|
				result replace: each last with: each first
			]
		].
	].
	^self replace: $_ with: $:! !

! UndefinedObject methodsFor: 'Tools-printing' !
compiler
	" Return the compiler of the receiver. "

	^self smalltalk compilerSupport for: nil! !

! Object methodsFor: 'Tools-comparing' !
== anObject
	^anObject == self! !

! Object methodsFor: 'Tools-comparing' !
~~ anObject
	^(self == anObject) == false! !

! UndefinedObject methodsFor: 'Tools-comparing' !
== anObject
	^anObject isNil! !

! UndefinedObject methodsFor: 'Tools-comparing' !
~~ anObject
	^anObject notNil! !

