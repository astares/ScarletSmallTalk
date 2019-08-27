Object subclass: #StChunk
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	category: 'Compiler-JS-Support'!

!StChunk methodsFor: 'chunk processing' stamp: 'mir 4/28/2018 13:14'!
readChunksThrough: chunkReader! !


!StChunk methodsFor: 'static compiling' stamp: 'mir 5/31/2018 12:10'!
applyTo: stEnvironment! !

!StChunk methodsFor: 'static compiling' stamp: 'mir 4/28/2018 08:59'!
generateOn: generator! !

"-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- "!

StChunk class
	instanceVariableNames: ''!

!StChunk class methodsFor: 'instance creation' stamp: 'mir 8/23/2018 17:14'!
from: aString receiver: receiver selector: selector arguments: args
	(selector beginsWith: 'methods')
		ifTrue: [^StMethodsChunk receiver: receiver selector: selector arguments: args].
	(selector beginsWith: 'subclass')
		ifTrue: [^StSubclassChunk receiver: receiver selector: selector arguments: args].
	(selector beginsWith: 'variableSubclass')
		ifTrue: [^StSubclassChunk receiver: receiver selector: selector arguments: args].
	(selector beginsWith: 'commentStamp')
		ifTrue: [^StCommentChunk receiver: receiver selector: selector arguments: args].
	(selector beginsWith: 'instanceVar')
		ifTrue: [^StMetaClassChunk receiver: receiver selector: selector arguments: args].
	^StDoItChunk source: aString! !

!StChunk class methodsFor: 'instance creation' stamp: 'mir 6/8/2018 18:46'!
receiver: receiver selector: selector arguments: args
	^self new receiver: receiver selector: selector arguments: args! !


Object subclass: #StChunkReader
	instanceVariableNames: 'readStream line'
	classVariableNames: ''
	poolDictionaries: ''
	category: 'Compiler-JS-Support'!

!StChunkReader methodsFor: 'private reading' stamp: 'mir 6/8/2018 18:50'!
handleNextChunk
	"(Compiler evaluate: self nextChunk for: client logged: false) scanFrom: self"
	| chunk |
	chunk := self nextChunk.
	chunk isEmpty ifFalse: [self handleChunk: chunk]! !

!StChunkReader methodsFor: 'private reading' stamp: 'mir 5/16/2019 10:31'!
nextChunk
	"Answer the contents of the receiver, up to the next terminator character.
	Doubled terminators indicate an embedded terminator character."
	| terminator out ch |
	terminator := $!!.
	out := '' writeStream.
	self skipSeparators.
	[readStream atEnd or: [(ch := readStream next) == nil]] whileFalse: [
		self updateFilePosition: ch.
		(ch == terminator) ifTrue: [
			readStream peek == terminator ifTrue: [
				readStream next.  "skip doubled terminator"
			] ifFalse: [
				^out contents  "terminator is not doubled; we're done!!"
			].
		].
		out nextPut: ch.
	].
	^out contents! !

!StChunkReader methodsFor: 'private reading' stamp: 'mir 4/28/2018 09:04'!
processNextChunk
	self processChunk: self nextChunk! !

!StChunkReader methodsFor: 'private reading' stamp: 'mir 4/28/2018 14:01'!
skipSeparators
	[readStream atEnd]
		whileFalse: [
			| c |
			c := readStream next.
			c isSeparator
				ifTrue: [self updateFilePosition: c]
				ifFalse: [^readStream position: readStream position-1]]! !

!StChunkReader methodsFor: 'private reading' stamp: 'mir 4/27/2018 16:48'!
skipStyleChunk! !

!StChunkReader methodsFor: 'private reading' stamp: 'mir 4/28/2018 14:10'!
updateFilePosition: c
	c = Character cr
		ifTrue: [
			line := line + 1.
			readStream peek = Character lf ifTrue: [readStream next]]
		ifFalse: [c = Character lf ifTrue: [line := line + 1]]! !


!StChunkReader methodsFor: 'chunk processing' stamp: 'mir 4/28/2018 09:04'!
handleChunk: chunk! !

!StChunkReader methodsFor: 'chunk processing' stamp: 'mir 4/28/2018 09:04'!
processChunk: chunk
	self halt! !

!StChunkReader methodsFor: 'chunk processing' stamp: 'mir 4/29/2018 12:54'!
processMethodChunk: methodText class: methodClass protocol: methodProtocol
! !

!StChunkReader methodsFor: 'chunk processing' stamp: 'mir 4/28/2018 13:26'!
processMethodChunks: methodClass protocol: methodProtocol
	"Process methods chunks for current category in readStream"
	| methodText |
	[methodText := self nextChunk.
	 methodText size > 0]
		whileTrue: [self processMethodChunk: methodText class: methodClass protocol: methodProtocol]! !


!StChunkReader methodsFor: 'reading' stamp: 'mir 8/10/2018 14:52'!
readAllChunks
	[[readStream atEnd]
		whileFalse: [
			self skipSeparators.
			[(readStream peekFor: $!!)
				ifTrue: [self handleNextChunk]
				ifFalse: [self processNextChunk]]
				on: StCompileException
				do: [:exception | 
					exception line: self line.
					exception signal].
			readStream atEnd
				ifFalse: [ self skipStyleChunk ]]]
		ensure: [readStream close]! !


!StChunkReader methodsFor: 'initialize-release' stamp: 'mir 4/28/2018 13:59'!
readStream: aStream
	readStream := aStream.
	line := 1! !


!StChunkReader methodsFor: 'accessing' stamp: 'mir 8/10/2018 14:52'!
line
	^line! !

"-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- "!

StChunkReader class
	instanceVariableNames: ''!

!StChunkReader class methodsFor: 'instance creation' stamp: 'mir 4/26/2018 21:20'!
new
	^super new initialize! !

!StChunkReader class methodsFor: 'instance creation' stamp: 'mir 4/28/2018 09:01'!
on: stream
	^self new readStream: stream! !

!StChunkReader class methodsFor: 'instance creation' stamp: 'mir 5/2/2018 18:18'!
onFileNamed: fileName
	| file |
	file := StandardFileStream oldFileNamed: fileName.
	^self on: file! !


Object subclass: #StClassDefinition
	instanceVariableNames: 'name superclass metaClass variables allVariables classVariables pools category comment'
	classVariableNames: ''
	poolDictionaries: ''
	category: 'Compiler-JS-Support'!

!StClassDefinition methodsFor: 'accessing' stamp: 'mir 4/27/2018 17:00'!
allInstVarNames
	^variables! !

!StClassDefinition methodsFor: 'accessing' stamp: 'mir 4/27/2018 14:09'!
className
	^name! !

!StClassDefinition methodsFor: 'accessing' stamp: 'mir 4/27/2018 17:01'!
key
	^name! !

!StClassDefinition methodsFor: 'accessing' stamp: 'mir 5/31/2018 17:37'!
metaClass
	^metaClass! !

!StClassDefinition methodsFor: 'accessing' stamp: 'mir 4/29/2018 13:28'!
metaClassName
	^self className , ' class'! !

!StClassDefinition methodsFor: 'accessing' stamp: 'mir 4/27/2018 16:34'!
name
	^name! !

!StClassDefinition methodsFor: 'accessing' stamp: 'mir 4/27/2018 16:45'!
sharedPools
	^pools! !

!StClassDefinition methodsFor: 'accessing' stamp: 'mir 5/31/2018 17:37'!
superMeta
	^superclass
		ifNotNil: [superclass metaClass]! !


!StClassDefinition methodsFor: 'decompiler' stamp: 'mir 5/1/2018 17:10'!
decompilerClass
	^#Decompiler asClass! !

!StClassDefinition methodsFor: 'decompiler' stamp: 'mir 5/1/2018 17:13'!
newParser
	^#Parser new! !

!StClassDefinition methodsFor: 'decompiler' stamp: 'mir 5/1/2018 17:13'!
shoutParserClass
	^#Parser! !

!StClassDefinition methodsFor: 'decompiler' stamp: 'mir 4/27/2018 17:05'!
theNonMetaClass
	^self! !


!StClassDefinition methodsFor: 'generate' stamp: 'mir 5/15/2018 15:55'!
generateOn: generator
	generator smalltalkClassBinding: self! !


!StClassDefinition methodsFor: 'testing' stamp: 'mir 8/23/2018 15:00'!
canAssign
	^true! !

!StClassDefinition methodsFor: 'testing' stamp: 'mir 4/29/2018 13:06'!
isMeta
	^false! !

!StClassDefinition methodsFor: 'testing' stamp: 'mir 5/25/2018 18:33'!
isVariableBinding
	^true! !


!StClassDefinition methodsFor: 'printing' stamp: 'mir 4/27/2018 17:30'!
printOn: stream
	stream
		nextPutAll: 'StClassDefinition(';
		nextPutAll: name;
		nextPut: $)! !


!StClassDefinition methodsFor: 'initialize-release' stamp: 'mir 5/31/2018 17:37'!
metaClass: metaClassDefinition
	metaClass := metaClassDefinition! !

!StClassDefinition methodsFor: 'initialize-release' stamp: 'mir 5/1/2018 17:27'!
name: className superclass: aSuperclass instanceVariableNames: instVarNames classVariableNames: classVarNames poolDictionaries: poolVarNames category: aCategory
	name := className asSymbol.
	superclass := aSuperclass.
	variables := instVarNames subStrings.
	classVariables := classVarNames subStrings.
	pools := poolVarNames subStrings.
	category := aCategory! !


!StClassDefinition methodsFor: 'fileIn' stamp: 'mir 5/12/2018 19:40'!
subclass: subclassName instanceVariableNames: instVarNames classVariableNames: classVarNames poolDictionaries: poolVarNames category: aCategory
	| classDef |
	self halt.
	classDef := StClassDefinition new.
	classDef name: subclassName superclass: self name instanceVariableNames: instVarNames classVariableNames: classVarNames poolDictionaries: poolVarNames category: aCategory.
	^classDef! !


!StClassDefinition methodsFor: 'compiling' stamp: 'mir 5/31/2018 16:56'!
asVariableIn: encoder
	^encoder global: self name: name! !

!StClassDefinition methodsFor: 'compiling' stamp: 'mir 6/12/2018 17:20'!
bindingOf: varName environment: environment
	"Answer the binding of some variable resolved in the scope of the receiver"
	| aSymbol binding |
	aSymbol := varName asSymbol.

	"First look in classVar dictionary."
	(self classThatDefinesClassVariable: aSymbol in: environment) ifNotNil:
		[:x | ^StClassVarDefinition class: self name: aSymbol asString].

	"Next look in shared pools."
	"TODO support pools"
" sharedPools do:[:pool | 
		binding := pool bindingOf: aSymbol.
		binding ifNotNil:[^binding].
	].
"
	"Next look in declared environment."
	binding := environment bindingOf: aSymbol ifAbsent: [nil].
	binding ifNotNil:[^binding].

	"Finally look higher up the superclass chain and fail at the end."
	^superclass
		ifNil: [nil]
		ifNotNil: [superclass bindingOf: aSymbol environment: environment]
! !

!StClassDefinition methodsFor: 'compiling' stamp: 'mir 5/31/2018 16:27'!
classBindingOf: varName environment: environment
	^self bindingOf: varName environment: environment! !

!StClassDefinition methodsFor: 'compiling' stamp: 'mir 5/31/2018 16:09'!
classThatDefinesClassVariable: classVarName in: environment
	(classVariables includes: classVarName)
		ifTrue: [^self]. 
	^superclass ifNotNil: [
		superclass classThatDefinesClassVariable: classVarName in: environment]! !

!StClassDefinition methodsFor: 'compiling' stamp: 'mir 5/31/2018 17:16'!
gatherVariables
	allVariables := OrderedCollection new.
	superclass ifNotNil: [
		superclass variablesDo: [:varName | allVariables add: varName]].
	variables do: [:varName | allVariables add: varName]! !

!StClassDefinition methodsFor: 'compiling' stamp: 'mir 5/1/2018 21:22'!
literalScannedAs: anObject environment: environment notifying: anEncoder
self halt.
	^anObject! !

!StClassDefinition methodsFor: 'compiling' stamp: 'mir 5/31/2018 17:18'!
variablesDo: aBlock
	allVariables ifNil: [self gatherVariables].
	allVariables do: aBlock! !

"-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- "!

StClassDefinition class
	instanceVariableNames: ''!

!StClassDefinition class methodsFor: 'bootstrap' stamp: 'mir 6/8/2018 12:41'!
object
	^self name: 'Object' superclass: nil category: 'Kernel-Objects'! !

!StClassDefinition class methodsFor: 'bootstrap' stamp: 'mir 5/25/2018 18:48'!
undeclared: aString
	^self name: aString superclass: nil category: nil! !

!StClassDefinition class methodsFor: 'bootstrap' stamp: 'mir 4/26/2018 21:17'!
undefined
	^self name: 'UndefinedObject' superclassName: 'Object' category: 'Kernel-Objects'! !


!StClassDefinition class methodsFor: 'instance creation' stamp: 'mir 5/1/2018 17:26'!
name: className superclass: aSuperclass category: aCategory
	^self
		name: className
		superclass: aSuperclass
		instanceVariableNames: ''
		classVariableNames: ''
		poolDictionaries: ''
		category: aCategory! !

!StClassDefinition class methodsFor: 'instance creation' stamp: 'mir 5/1/2018 17:25'!
name: className superclass: aSuperclass instanceVariableNames: instVarNames classVariableNames: classVarNames poolDictionaries: poolVarNames category: aCategory
	^self new
		name: className
		superclass: aSuperclass
		instanceVariableNames: instVarNames
		classVariableNames: classVarNames
		poolDictionaries: poolVarNames
		category: aCategory! !


Object subclass: #StClassVarDefinition
	instanceVariableNames: 'nonMetaClass name'
	classVariableNames: ''
	poolDictionaries: ''
	category: 'Compiler-JS-Support'!

!StClassVarDefinition methodsFor: 'accessing' stamp: 'mir 5/31/2018 16:37'!
name
	^name! !

!StClassVarDefinition methodsFor: 'accessing' stamp: 'mir 5/31/2018 16:34'!
nonMetaClass
	^nonMetaClass! !




!StClassVarDefinition methodsFor: 'testing' stamp: 'mir 5/31/2018 17:01'!
asVariableIn: encoder
	^encoder classVariable: self name: name! !

!StClassVarDefinition methodsFor: 'testing' stamp: 'mir 5/31/2018 16:36'!
canAssign
	^true! !

!StClassVarDefinition methodsFor: 'testing' stamp: 'mir 5/31/2018 16:29'!
isVariableBinding
	^true! !


!StClassVarDefinition methodsFor: 'initialize-release' stamp: 'mir 5/31/2018 16:10'!
class: aNonMetaClass name: classVarName
	nonMetaClass := aNonMetaClass.
	name := classVarName! !

"-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- "!

StClassVarDefinition class
	instanceVariableNames: ''!

!StClassVarDefinition class methodsFor: 'instance creation' stamp: 'mir 5/31/2018 16:10'!
class: nonMetaClass name: classVarName
	^self new class: nonMetaClass name: classVarName! !


StChunk subclass: #StCommentChunk
	instanceVariableNames: 'comment commentStamp prior'
	classVariableNames: ''
	poolDictionaries: ''
	category: 'Compiler-JS-Support'!

!StCommentChunk methodsFor: 'initialize-release' stamp: 'mir 6/8/2018 18:47'!
receiver: receiver selector: selector arguments: args
	selector == #commentStamp:
		ifTrue: [
			commentStamp := args at: 1.
			prior := 0].
	selector == #commentStamp:prior:
		ifTrue: [
			commentStamp := args at: 1.
			prior := args at: 2].

	
! !


!StCommentChunk methodsFor: 'chunk processing' stamp: 'mir 4/29/2018 12:49'!
readChunksThrough: chunkReader
	comment := chunkReader nextChunk! !


Error subclass: #StCompileException
	instanceVariableNames: 'line linePosition'
	classVariableNames: ''
	poolDictionaries: ''
	category: 'Compiler-JS-Support'!

!StCompileException methodsFor: 'priv handling' stamp: 'mir 6/25/2018 17:46'!
defaultAction
	Transcript show: self messageText; cr.
	super defaultAction! !


!StCompileException methodsFor: 'accessing' stamp: 'mir 8/10/2018 15:40'!
line: lineInt
	line := lineInt.
	messageText := '
line: ' , line asString ,'
' , messageText! !

!StCompileException methodsFor: 'accessing' stamp: 'mir 5/12/2018 12:48'!
line: lineInt linePositition: positionInt
	line := lineInt.
	linePosition := positionInt.
	messageText := ' line: ' , line asString , ',' , linePosition asString , messageText! !


StChunk subclass: #StDoItChunk
	instanceVariableNames: 'source'
	classVariableNames: ''
	poolDictionaries: ''
	category: 'Compiler-JS-Support'!


!StDoItChunk methodsFor: 'as yet unclassified' stamp: 'mir 4/29/2018 13:57'!
source: sourceText
	source := sourceText! !

"-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- "!

StDoItChunk class
	instanceVariableNames: ''!


!StDoItChunk class methodsFor: 'as yet unclassified' stamp: 'mir 4/29/2018 13:56'!
source: sourceText
	^self new source: sourceText! !


Object subclass: #StEnvironment
	instanceVariableNames: 'bindings undeclared allowUndeclared'
	classVariableNames: ''
	poolDictionaries: ''
	category: 'Compiler-JS-Support'!

!StEnvironment methodsFor: 'initialize-release' stamp: 'mir 4/10/2019 09:52'!
initialize
	bindings := Dictionary new.
	undeclared := Dictionary new.
	allowUndeclared := false! !


!StEnvironment methodsFor: 'binding' stamp: 'mir 8/23/2018 11:32'!
addAllFrom: environment
	environment bindingsKeyAndValuesDo: [:key :value |
		self bindingsAt: key put: value]! !

!StEnvironment methodsFor: 'binding' stamp: 'mir 8/23/2018 11:32'!
addClassDefinition: classDefinition
	| className metaClass |
	className := classDefinition className asSymbol.
"	allow overwriting class definitions	
	(bindings includesKey: className)
		ifTrue: [^self].
"	(undeclared includesKey: className)
		ifTrue: [undeclared removeKey: className].
	self bindingsAt: className put: classDefinition.

	metaClass := StMetaClassDefinition nonMetaClass: classDefinition.
	self 
		bindingsAt: classDefinition metaClassName
		put: [metaClass].
	classDefinition metaClass: metaClass! !

!StEnvironment methodsFor: 'binding' stamp: 'mir 8/23/2018 11:33'!
addMetaClassDefinition: classDefinition
	| className |
	className := classDefinition className asSymbol.
	(undeclared includesKey: className)
		ifTrue: [undeclared removeKey: className].
	self bindingsAt: className put: classDefinition.

	classDefinition theNonMetaClass metaClass: classDefinition! !

!StEnvironment methodsFor: 'binding' stamp: 'mir 8/24/2018 15:28'!
allowUndeclared: aBoolean
	allowUndeclared := aBoolean! !

!StEnvironment methodsFor: 'binding' stamp: 'mir 4/10/2019 14:13'!
bindingOf: aSymbolOrString
	^self
		bindingOf: aSymbolOrString asSymbol
		ifAbsent: [
			allowUndeclared
				ifTrue: [nil]
				ifFalse: [StCompileException signal: 'No binding for ' , aSymbolOrString]]! !

!StEnvironment methodsFor: 'binding' stamp: 'mir 5/25/2018 18:32'!
bindingOf: aSymbolOrString ifAbsent: aBlock
	^bindings
		at: aSymbolOrString asSymbol
		ifAbsent: aBlock! !

!StEnvironment methodsFor: 'binding' stamp: 'mir 8/23/2018 11:32'!
bindingsAt: key put: value
	bindings at: key put: value! !

!StEnvironment methodsFor: 'binding' stamp: 'mir 4/26/2018 20:30'!
bindingsKeyAndValuesDo: aBlock
	bindings keysAndValuesDo: aBlock! !

!StEnvironment methodsFor: 'binding' stamp: 'mir 4/10/2019 14:13'!
undeclare: aSymbol
	"we allow globals to be undeclared"
	^(allowUndeclared or: [aSymbol first isUppercase])
		ifTrue: [
			undeclared
				at: aSymbol
				ifAbsentPut: [
					undeclared at: aSymbol put: (StClassDefinition undeclared: aSymbol).
					undeclared at: aSymbol]]
		ifFalse: [nil]! !



!StEnvironment methodsFor: 'reading' stamp: 'mir 5/15/2018 16:11'!
readBindings: environmentBuilder fromFileNamed: fileName
	| chunkReader |
	chunkReader := environmentBuilder onFileNamed: fileName environment: self.
	chunkReader readAllChunks! !

!StEnvironment methodsFor: 'reading' stamp: 'mir 4/28/2018 14:15'!
readBindingsFrom: readStream
	| chunkReader |
	chunkReader := StEnvironmentBuilder on: readStream environment: self.
	chunkReader readAllChunks! !

!StEnvironment methodsFor: 'reading' stamp: 'mir 4/28/2018 14:17'!
readBindingsFromFileNamed: fileName
	| chunkReader |
	chunkReader := StEnvironmentBuilder onFileNamed: fileName environment: self.
	chunkReader readAllChunks! !


!StEnvironment methodsFor: 'storing' stamp: 'mir 4/26/2018 20:24'!
storeOn: stream! !

"-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- "!

StEnvironment class
	instanceVariableNames: ''!

!StEnvironment class methodsFor: 'instance creation' stamp: 'mir 5/1/2018 17:48'!
bootstrap
	| stEnvironment object |
	object := StClassDefinition name: 'Object' superclass: nil category: 'Kernel'.
	stEnvironment := self new.
	stEnvironment
		addClassDefinition: object;
		addClassDefinition: (StClassDefinition name: 'UndefinedObject' superclass: object category: 'Kernel');
"		addClassDefinition: StClassDefinition object;
		addClassDefinition: StClassDefinition undefined;
		addClassDefinition: StClassDefinition exception;
		addClassDefinition: StClassDefinition error;
		addClassDefinition: StClassDefinition collection;
		addClassDefinition: StClassDefinition sequenceableCollection;
		addClassDefinition: StClassDefinition orderedCollection;
		addClassDefinition: StClassDefinition string;
		addClassDefinition: StClassDefinition character;
		addClassDefinition: StClassDefinition stream;
		addClassDefinition: StClassDefinition fileStream;
"		yourself.
	^stEnvironment! !

!StEnvironment class methodsFor: 'instance creation' stamp: 'mir 8/10/2018 14:16'!
fromEnvironment
	"Initialize the environment from the current live (JS) environment"

	| stEnvironment |
	stEnvironment := self new.
	Object withAllSubclassesDo: [:each | 
		| superDef instVarNames |
		superDef := each superclass ifNotNil: [stEnvironment bindingOf: each superclass name].
		instVarNames := String streamContents: [ :stream | 
		each instVarNames
			do: [ :varName | stream nextPutAll: varName ]
			andBetweenDo: [ stream space ] ].
		stEnvironment
			addClassDefinition: (StClassDefinition 
				name: each name
				superclass: superDef
				instanceVariableNames: instVarNames
				classVariableNames: each classVariablesString
				poolDictionaries: each poolDictionaryNames asJavascript
				category: each category)
			"name: each name superclass: superDef category: 'Kernel')"].
	^stEnvironment! !

!StEnvironment class methodsFor: 'instance creation' stamp: 'mir 4/26/2018 20:25'!
new
	^super new initialize! !

!StEnvironment class methodsFor: 'instance creation' stamp: 'mir 8/22/2018 20:47'!
readBindingsFrom: sourceString
	| stEnvironment |
	stEnvironment := StEnvironment bootstrap.
	stEnvironment readBindingsFrom: sourceString asStream.
	^stEnvironment
! !

!StEnvironment class methodsFor: 'instance creation' stamp: 'mir 4/10/2019 10:15'!
readFromFilesNamed: listOfFileNames
	| stEnvironment |
	stEnvironment := StEnvironment bootstrap.
	stEnvironment allowUndeclared: true.
	listOfFileNames do: [:fileName |
		stEnvironment readBindingsFromFileNamed: fileName].
	^stEnvironment
! !


StChunkReader subclass: #StEnvironmentBuilder
	instanceVariableNames: 'environment'
	classVariableNames: ''
	poolDictionaries: ''
	category: 'Compiler-JS-Support'!

!StEnvironmentBuilder methodsFor: 'private' stamp: 'mir 4/27/2018 17:49'!
compilerClass
	^StCompiler! !

!StEnvironmentBuilder methodsFor: 'private' stamp: 'mir 4/3/2019 22:09'!
updateFilePosition: c
! !


!StEnvironmentBuilder methodsFor: 'chunk processing' stamp: 'mir 4/3/2019 22:10'!
handleChunk: chunk
	"process an expression delimited by !!"
	| result |
	result := self compilerClass environment: environment parseChunk: chunk.
	result readChunksThrough: self! !

!StEnvironmentBuilder methodsFor: 'chunk processing' stamp: 'mir 4/3/2019 22:10'!
processChunk: chunk
	"process an expression ending in !!"
	| result |
	chunk isEmpty ifTrue: [^nil].
	result := self compilerClass environment: environment parseChunk: chunk.
	result ifNil: [^nil].
	result applyTo: environment.
	^result! !

!StEnvironmentBuilder methodsFor: 'chunk processing' stamp: 'mir 4/3/2019 22:12'!
processMethodChunks: methodClass protocol: methodProtocol
	"Process methods chunks for current category in readStream"
	| methodText |
	[methodText := self nextChunk.
	 methodText size > 0]
		whileTrue: []! !


!StEnvironmentBuilder methodsFor: 'initialize-release' stamp: 'mir 4/28/2018 14:15'!
environment: anEnvironment
	environment := anEnvironment! !

"-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- "!

StEnvironmentBuilder class
	instanceVariableNames: ''!

!StEnvironmentBuilder class methodsFor: 'instance creation' stamp: 'mir 4/28/2018 14:15'!
on: readStream environment: environment
	| builder |
	builder := super on: readStream.
	builder environment: environment.
	^builder! !

!StEnvironmentBuilder class methodsFor: 'instance creation' stamp: 'mir 4/30/2018 14:10'!
onFileNamed: fileName environment: stEnvironment
	| builder |
	builder := super onFileNamed: fileName.
	builder environment: stEnvironment.
	^builder! !


StChunk subclass: #StMetaClassChunk
	instanceVariableNames: 'classDefinition variables'
	classVariableNames: ''
	poolDictionaries: ''
	category: 'Compiler-JS-Support'!

!StMetaClassChunk methodsFor: 'static compiling' stamp: 'mir 5/31/2018 17:41'!
applyTo: stEnvironment
	classDefinition instanceVariableNames: variables.
	stEnvironment addMetaClassDefinition: classDefinition! !

!StMetaClassChunk methodsFor: 'static compiling' stamp: 'mir 5/31/2018 12:13'!
generateOn: generator
	generator generateMeta: classDefinition instanceVariableNames: variables subStrings
! !


!StMetaClassChunk methodsFor: 'initialize-release' stamp: 'mir 6/8/2018 18:47'!
receiver: receiver selector: selector arguments: args
	selector == #instanceVariableNames:
		ifTrue: [
			classDefinition := receiver.
			variables := args at: 1]
! !


Object subclass: #StMetaClassDefinition
	instanceVariableNames: 'nonMetaClass variables allVariables'
	classVariableNames: ''
	poolDictionaries: ''
	category: 'Compiler-JS-Support'!

!StMetaClassDefinition methodsFor: 'compiling' stamp: 'mir 5/31/2018 17:43'!
gatherVariables
	allVariables := OrderedCollection new.
	nonMetaClass superMeta ifNotNil: [
		nonMetaClass superMeta variablesDo: [:varName | allVariables add: varName]].
	variables do: [:varName | allVariables add: varName]! !

!StMetaClassDefinition methodsFor: 'compiling' stamp: 'mir 5/31/2018 17:20'!
variablesDo: aBlock
	allVariables ifNil: [self gatherVariables].
	allVariables do: aBlock! !


!StMetaClassDefinition methodsFor: 'testing' stamp: 'mir 6/11/2018 22:00'!
canAssign
	^false! !

!StMetaClassDefinition methodsFor: 'testing' stamp: 'mir 4/29/2018 13:08'!
isMeta
	^true! !

!StMetaClassDefinition methodsFor: 'testing' stamp: 'mir 5/25/2018 18:33'!
isVariableBinding
	^true! !


!StMetaClassDefinition methodsFor: 'initialize-release' stamp: 'mir 5/31/2018 12:20'!
instanceVariableNames: instVarNames 
	variables := instVarNames subStrings! !

!StMetaClassDefinition methodsFor: 'initialize-release' stamp: 'mir 5/31/2018 11:59'!
nonMetaClass: classDefinition instanceVariableNames: instVarNames 
	nonMetaClass := classDefinition.
	self instanceVariableNames: instVarNames! !


!StMetaClassDefinition methodsFor: 'accessing' stamp: 'mir 5/31/2018 16:28'!
bindingOf: varName environment: stEnvironment
	"Answer the binding of some variable resolved in the scope of the receiver"
	^nonMetaClass bindingOf: varName environment: stEnvironment! !

!StMetaClassDefinition methodsFor: 'accessing' stamp: 'mir 4/29/2018 13:28'!
className
	^nonMetaClass metaClassName! !

!StMetaClassDefinition methodsFor: 'accessing' stamp: 'mir 4/30/2018 21:26'!
theNonMetaClass
	^nonMetaClass! !

"-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- "!

StMetaClassDefinition class
	instanceVariableNames: ''!

!StMetaClassDefinition class methodsFor: 'instance creation' stamp: 'mir 4/29/2018 13:38'!
nonMetaClass: classDefinition
	^self nonMetaClass: classDefinition instanceVariableNames: '' ! !

!StMetaClassDefinition class methodsFor: 'instance creation' stamp: 'mir 4/29/2018 13:09'!
nonMetaClass: classDefinition instanceVariableNames: instVarNames 
	^self new nonMetaClass: classDefinition instanceVariableNames: instVarNames ! !


StChunk subclass: #StMethodsChunk
	instanceVariableNames: 'className isMeta protocol timeStamp'
	classVariableNames: ''
	poolDictionaries: ''
	category: 'Compiler-JS-Support'!

!StMethodsChunk methodsFor: 'chunk processing' stamp: 'mir 4/28/2018 13:23'!
readChunksThrough: chunkReader
	chunkReader processMethodChunks: className protocol: protocol! !


!StMethodsChunk methodsFor: 'initialize-release' stamp: 'mir 6/25/2018 16:58'!
receiver: receiver selector: selector arguments: args
	isMeta := false.
	selector = #methods
		ifTrue: [
			className := receiver.
			^self].
	selector = #methodsFor:
		ifTrue: [
			className := receiver.
			protocol := args at: 1.
			^self].
	selector = #methodsFor:stamp:
		ifTrue: [
			className := receiver.
			protocol := args at: 1.
			timeStamp := args at: 2.
			^self].
	self halt
	
! !


StChunkReader subclass: #StStreamCompiler
	instanceVariableNames: 'environment writeStream generator includeSource'
	classVariableNames: ''
	poolDictionaries: ''
	category: 'Compiler-JS-Support'!

!StStreamCompiler methodsFor: 'accessing' stamp: 'mir 4/10/2019 12:01'!
compilerClass
	^StCompiler! !


!StStreamCompiler methodsFor: 'initialize-release' stamp: 'mir 4/10/2019 10:38'!
environment: anEnvironment
	environment := anEnvironment! !

!StStreamCompiler methodsFor: 'initialize-release' stamp: 'mir 4/10/2019 10:40'!
writeStream: aStream
	writeStream := aStream.
	generator := JSGenerator on: writeStream! !


!StStreamCompiler methodsFor: 'compiling' stamp: 'mir 9/4/2018 16:48'!
includeSource: aBoolean
	includeSource := aBoolean! !


!StStreamCompiler methodsFor: 'chunk processing' stamp: 'mir 4/10/2019 10:57'!
compile
"
	| environmentBuilder |
	environmentBuilder := StEnvironmentBuilder on: readStream environment: environment.
	environmentBuilder writeStream: writeStream.
	environmentBuilder readAllChunks.
"
	readStream reset.
	[self readAllChunks] ensure: [writeStream close]! !

!StStreamCompiler methodsFor: 'chunk processing' stamp: 'mir 4/10/2019 12:07'!
handleChunk: chunk
	"process an expression delimited by !!"
	| result |
	result := self compilerClass environment: environment parseChunk: chunk.
	result readChunksThrough: self! !

!StStreamCompiler methodsFor: 'chunk processing' stamp: 'mir 4/10/2019 12:04'!
processChunk: chunk
	| result |
	chunk isEmpty ifTrue: [^nil].
	result := self compilerClass environment: environment parseChunk: chunk.
	result ifNil: [^nil].
	result applyTo: environment.
	generator ifNotNil: [result generateOn: generator].
	result! !

!StStreamCompiler methodsFor: 'chunk processing' stamp: 'mir 5/16/2019 11:23'!
processMethodChunk: methodText class: methodClass protocol: methodProtocol
	self compilerClass new
		compileMethodChunk: methodText
		protocol: methodProtocol
		class: methodClass
		environment: environment
		includeSource: includeSource
		generateOn: generator! !

"-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- "!

StStreamCompiler class
	instanceVariableNames: ''!

!StStreamCompiler class methodsFor: 'instance creation' stamp: 'mir 4/10/2019 10:28'!
on: readStream environment: environment
	| builder |
	builder := super on: readStream.
	builder environment: environment.
	^builder! !

!StStreamCompiler class methodsFor: 'instance creation' stamp: 'mir 4/12/2019 18:27'!
onFileNamed: fileName environment: stEnvironment
	| builder |
	builder := super onFileNamed: fileName.
	builder environment: stEnvironment.
	^builder! !


!StStreamCompiler class methodsFor: 'compiling' stamp: 'mir 4/10/2019 11:58'!
compile: sourceString in: stEnvironment
	| compiler readStream writeStream |
	readStream := sourceString readStream.
	compiler := self on: readStream environment: stEnvironment.
	compiler includeSource: true.
	writeStream := '' writeStream.
	compiler writeStream: writeStream.
	compiler compile.
	^writeStream contents! !

!StStreamCompiler class methodsFor: 'compiling' stamp: 'mir 9/4/2018 16:48'!
compile: sourceString in: stEnvironment includeSource: aBoolean
	| compiler readStream writeStream |
	readStream := sourceString asStream.
	compiler := self on: readStream environment: stEnvironment.
	compiler includeSource: aBoolean.
	writeStream := '' writeStream.
	compiler writeStream: writeStream.
	compiler compile.
	^writeStream contents! !


StChunk subclass: #StSubclassChunk
	instanceVariableNames: 'className isMeta superclassName instVarNames classVarNames pools category'
	classVariableNames: ''
	poolDictionaries: ''
	category: 'Compiler-JS-Support'!

!StSubclassChunk methodsFor: 'static compiling' stamp: 'mir 5/12/2018 19:29'!
applyTo: stEnvironment
	| classDefinition superclass |
	superclass := superclassName ifNotNil: [stEnvironment bindingOf: superclassName].
	classDefinition := StClassDefinition
		name: className
		superclass: superclass
		instanceVariableNames: instVarNames
		classVariableNames: classVarNames
		poolDictionaries: pools
		category: category.
	stEnvironment addClassDefinition: classDefinition! !

!StSubclassChunk methodsFor: 'static compiling' stamp: 'mir 5/15/2018 17:44'!
generateOn: generator
	superclassName ifNil: [^self].
	isMeta
		ifTrue: [generator generateMetaFor: className asString instanceVariableNames: instVarNames subStrings]
		ifFalse: [
			generator
				generate: className asString
				superclass: superclassName asString
				instanceVariableNames: instVarNames subStrings
				classVariableNames: classVarNames subStrings
				poolDictionaries: pools subStrings
				category: category asString]! !


!StSubclassChunk methodsFor: 'initialize-release' stamp: 'mir 8/23/2018 14:59'!
receiver: receiver selector: selector arguments: args
	instVarNames := ''.
	classVarNames := ''.
	pools := ''.
	isMeta := false.
	className := args at: 1.
	superclassName := receiver ifNotNil: [receiver className].
	selector == #subclass:
		ifTrue: [
			^self].
	selector == #subclass:instanceVariableNames:
		ifTrue: [
			instVarNames := args at: 2.
			^self].
	selector == #subclass:category:
		ifTrue: [
			^self].
	selector == #subclass:instanceVariableNames:category:
		ifTrue: [
			instVarNames := args at: 2.
			category := args at: 3.
			^self].
	selector == #subclass:instanceVariableNames:classVariableNames:category:
		ifTrue: [
			instVarNames := args at: 2.
			classVarNames := args at: 3.
			category := args at: 4.
			^self].
	selector == #subclass:instanceVariableNames:classVariableNames:poolDictionaries:
		ifTrue: [
			instVarNames := args at: 2.
			classVarNames := args at: 3.
			pools := args at: 4.
			^self].
	(selector == #subclass:instanceVariableNames:classVariableNames:poolDictionaries:category:
		or: [selector == #variableSubclass:instanceVariableNames:classVariableNames:poolDictionaries:category:])
		ifTrue: [
			instVarNames := args at: 2.
			classVarNames := args at: 3.
			pools := args at: 4.
			category := args at: 5.
			^self].
	self halt
! !
