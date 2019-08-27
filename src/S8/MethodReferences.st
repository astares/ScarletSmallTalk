EventManager
 subclass: #MethodReferences
 instanceVariableNames: 'rootClasses results'
 category: 'Tools-References'!

! Smalltalk class methodsFor: 'Tools-query' !
sendersOf: selector
	" Return the senders of message selector. "

	^self current sendersOf: selector! !

! Smalltalk methodsFor: 'Tools-accessing' !
methodReferences
	" Return the methodReferences tool of the receiver. "

	^MethodReferences new! !

! Smalltalk methodsFor: 'Tools-query' !
sendersOf: selector
	" Return the senders of message selector. "

	^self methodReferences sendersOf: selector! !

! String methodsFor: 'Tools-query' !
senders
	" Return the senders of the receiver. "

	^Smalltalk sendersOf: self! !

! String methodsFor: 'Tools-query' !
implementors
	" Return the implementors of the receiver. "

	^Smalltalk implementorsOf: self! !

! MethodReferences class methodsFor: #events !
constructEventsTriggered
	" Private - Return the events managed by instances of the receiver. "

	^#(	#found: #found:pattern:in:
		#needsMethods
		#searchStarted #searchFinished
	) , super constructEventsTriggered! !

! MethodReferences class methodsFor: #testing !
of: selector
	" Return the references to selector. "

	^self new referencesOf: selector! !

! MethodReferences class methodsFor: #testing !
ofGlobal: globalName
	" Return the references to global globalName. "

	^self new referencesOfGlobal: globalName! !

! MethodReferences class methodsFor: #testing !
findClasses: what
	" Find classes in the system matching what. "

	^self new findClasses: what! !

! MethodReferences class methodsFor: #testing !
globals
	" Return the references to all global names. "

	| tool result |
"
	tool := self new.
	result := PoolDictionary new.
	tool when: #found:pattern:in: do: [:mth :mask :stream| | global |
		global := SmalltalkParser new globalNameParser parse: stream.
		global isParseFailure ifFalse: [
			(result at: global ifAbsentPut: [Array new]) add: mth
		].
	].
	tool searchGlobalReferences.
"
	^result! !

! MethodReferences class methodsFor: #testing !
methodOverwrites
	" Find the methods that are implemented/overwritten by subclasses. "

	^self new methodOverwrites! !

! MethodReferences class methodsFor: #testing !
variableOverwrites
	" Find the methods that has potential overwrite of variable names. "

	^self new variableOverwrites! !


! MethodReferences methodsFor: #initialize !
initializeResults
	" Private - Initialize the results of the receiver. "

	results := Array new! !

! MethodReferences methodsFor: #initialize !
reset
	" Reset the receiver. "

	self results: nil! !

! MethodReferences methodsFor: #accessing !
rootClasses: array
	" Set the rootClasses of the receiver. "

	rootClasses := array! !

! MethodReferences methodsFor: #accessing !
results
	" Return the results of the receiver. "

	results isNil ifTrue: [ self initializeResults ].
	^results! !

! MethodReferences methodsFor: #accessing !
results: array
	" Set the results of the receiver. "

	results := array! !

! MethodReferences methodsFor: #accessing !
rootClasses
	" Return the rootClasses of the receiver. "

	rootClasses isNil ifTrue: [ ^Smalltalk rootClasses ].
	^rootClasses! !

! MethodReferences methodsFor: #accessing !
allMethodsIn: aCollection
	" Return the methods defined by aCollection of classes. "

	| result |
	result := Array new.
	self rootClasses do: [:root|
		root instanceClass withAllSubclasses do: [:cls|
			cls methodsDo: [:each| result add: each ].
			cls class methodsDo: [:each| result add: each ].
		]
	].
	^result! !

! MethodReferences methodsFor: #accessing !
allMethods
	" Return the methods to search the receiver. "

	^self	triggerEvent: #needsMethods
		ifNotHandled: [ self allMethodsIn: self rootClasses ]! !

! MethodReferences methodsFor: #searching !
search: what with: targetBlock
	" Find what on target of selected methods. "

	| atoms |
	atoms := self allMethods.
	self triggerEvent: #searchStarted.
	atoms := atoms select: [:aMethod| | source |
		source := targetBlock value: aMethod.
		(source notNil and: [source toString includes: what]) ifTrue: [
			self results add: aMethod.
			self triggerEvent: #found: with: aMethod.
			(self hasActionForEvent: #found:pattern:in:) ifTrue: [ | stream args |
				stream := source toString stream.
				args := Array with: aMethod with: what with: stream.
				[ stream upTo: what; atEnd ] whileFalse: [
					self triggerEvent: #found:pattern:in: withArguments: args
				]
			].
			true
		] ifFalse: [ false ]
	].
	self triggerEvent: #searchFinished.
	^atoms! !

! MethodReferences methodsFor: #searching !
search: what
	" Find references to what in selected methods.
	Note: search is realized on javascript source of native code of methods.
	"

	^self search: what with: [:aMethod| aMethod fn ]! !

! MethodReferences methodsFor: #searching !
searchSource: what
	" Find what in source of selected methods. "

	^self search: what with: [:aMethod| aMethod source ]! !

! MethodReferences methodsFor: #searching !
inlines
	" Find javascript inlines in selected methods. "

	^self searchSource: '{'''! !

! MethodReferences methodsFor: #searching !
searchCategory: aName
	" Find (source) references to category starting from root classes. "

	| found |
	self triggerEvent: #searchStarted.
	found := Exporter new matchCategory: aName from: self rootClasses.
	found := found first , found last.
	found do: [:each|
			self results add: each.
			self triggerEvent: #found: with: each.
	].
	self triggerEvent: #searchFinished.
	^found! !

! MethodReferences methodsFor: #patterns !
sendPatternsOf: aSelector
	" Private - Return the search patterns for references of aSelector. "

	^Array
		with: (self normalSendPatternOf: aSelector)
		with: (self superSendPatternOf: aSelector)! !

! MethodReferences methodsFor: #patterns !
normalSendPatternOf: aSelector
	" Private - Return the search pattern for normal senders of aSelector. "

	^'.' ,aSelector asSelector ,'('! !

! MethodReferences methodsFor: #patterns !
superSendPatternOf: aSelector
	" Private - Return the search pattern for senders (to super) of aSelector. "

	^'.$superclass.$fn.prototype[''' ,aSelector asSelector ,'''].apply('! !

! MethodReferences methodsFor: #patterns !
instVarPatternOf: instVarName
	" Private - Return the search pattern for instance variable access. "

	^'self[''@' ,instVarName asJavascriptName ,''']'! !

! MethodReferences methodsFor: #patterns !
globalPatternOf: globalName
	" Private - Return the search pattern for global variable access. "

	^'smalltalk.' ,globalName! !

! MethodReferences methodsFor: #types !
types
	" Private - Return the types of search implemented by the receiver. "

	^#(	#referencesOf: #referencesOfGlobal:
		#referencesOfClassVariable:
		#referencesOfInstanceVariable:
		#findClasses: #findMessages:
		#searchCategory:
		#search: #searchSource:
		#globalReferences #missingGlobals #inlines
		#methodOverwrites #variableOverwrites
	)! !

! MethodReferences methodsFor: #searching !
search: aName type: typeSelector
	" Return the result of searching for aName as a search of specified type (or nil). "

	| selector |
	selector := (typeSelector includes: $:)
	ifTrue: [ (typeSelector upTo: $:) ,$: ]
	ifFalse: [ typeSelector upTo: $  ].
	^(self respondsTo: selector) ifTrue: [
		self perform: selector with: aName trimBlanks
	]! !

! MethodReferences methodsFor: #searching !
sendersOf: aSelector
	" Find the requested elements from root classes. "

	^(self sendPatternsOf: aSelector) inject: Array new into: [:total :each|
		total , (self search: each)
	]! !

! MethodReferences methodsFor: #searching !
referencesOf: aSelector
	" Find the references to message (aSelector). "

	self results
		add: '--- Implementors of #' ,aSelector ,' ---';
		addAll: (self implementorsOf: aSelector);
		add: '--- Senders of #' ,aSelector ,' ---'.
	self sendersOf: aSelector.
	^results! !

! MethodReferences methodsFor: #searching !
referencesOfInstanceVariable: instVarName
	" Find the requested elements from root classes. "

	^self search: (self instVarPatternOf: instVarName)! !

! MethodReferences methodsFor: #searching !
settersOfInstanceVariable: instVarName
	" Find the requested elements from root classes. "

	^self search: (self instVarPatternOf: instVarName) ,'='! !

! MethodReferences methodsFor: #searching !
referencesOfGlobal: globalName
	" Find the requested elements from root classes. "

	^self search: (self globalPatternOf: globalName)! !

! MethodReferences methodsFor: #searching !
searchGlobalReferences
	" Find the requested elements from root classes. "

	^self search: (self globalPatternOf: '')! !

! MethodReferences methodsFor: #searching !
settersOfGlobalVariable: globalName
	" Find the requested elements from root classes. "

	^self search: (self globalPatternOf: globalName) ,'='! !

! MethodReferences methodsFor: #searching !
referencesOfClassVariable: classVarName
	" Find the requested elements from root classes. "

	^self search: '.classVariableAt_("',classVarName,'")'! !

! MethodReferences methodsFor: #searching !
settersOfClassVariable: classVarName
	" Find the requested elements from root classes. "

	^self search: '.classVariableAt_put_("',classVarName,'",'! !

! MethodReferences methodsFor: #searching !
globalReferences
	" Find the references to globals. "

	| pool |
	pool := self class globals.
	pool keys sorted do: [:aName|
		self results
			add: '--- References to: ',aName,' ---';
			addAll: (pool at: aName)
	].
	^results! !

! MethodReferences methodsFor: #searching !
missingGlobals
	" Find the references to missing globals. "

	| pool |
	pool := self class globals.
	(pool keys sorted
		reject: [:key| (Smalltalk includesKey: key) ])
		do: [:aName|
			self results
				add: '--- Missing global: ',aName,' ---';
				addAll: (pool at: aName)
		].
	self results isEmpty ifTrue: [
		self results add: '--- All global references are bound to Smalltalk ---'
	].
	^results! !

! MethodReferences methodsFor: #private !
implementorsOf: aSelector
	" Private - Return the implementors of aSelector. "

	^Smalltalk current implementorsOf: aSelector! !

! MethodReferences methodsFor: #accessing !
messagesOf: aCompiledMethod
	" Return all the messages that can be sent during execution of aCompiledMethod. "

	| stream selectors string |
	stream := aCompiledMethod fn toString stream.
	stream upTo: ${.
	selectors := Set new.
	[stream atEnd] whileFalse: [
		selectors add: ((
			stream upTo: $.;upTo: $(
			) asArrayOfSubstringsSeparatedBy: $.)
			last asStSelector
	].
	selectors remove: '' ifAbsent: [].
	^(selectors asArray select: [:each| each isLiteral ]) sorted! !

! MethodReferences methodsFor: #accessing !
globalReferencesOf: aCompiledMethod
	" Return all the global reference names in aCompiledMethod. "

	| result |
	result := Set new.
"
	self
		when: #needsMethods do: [ Array with: aCompiledMethod ];
		when: #found:pattern:in: do: [:mth :mask :stream| | global |
			global := SmalltalkParser new globalNameParser parse: stream.
			global isParseFailure ifFalse: [ result add: global ].
		];
		yourself.
	self searchGlobalReferences.
"
	^result asArray sorted! !

! MethodReferences methodsFor: #searching !
findClasses: what
	" Find classes matching what. "

	| keys system |
	what isString ifTrue: [
		^self findClasses: what trimBlanks asArrayOfSubstrings
	].
	self triggerEvent: #searchStarted.
	keys := what collect: [:each| each asString asLowercase ].
	system := Smalltalk current.
	keys notEmpty ifTrue: [
		system classes do: [:aClass| | key |
			key := aClass name asLowercase.
			(keys detect: [:one| key includes: one ] ifNone: []) notNil ifTrue: [
				self results add: aClass.
				self triggerEvent: #found: with: aClass.
			]
		].
	].
	self triggerEvent: #searchFinished.
	^self results! !

! MethodReferences methodsFor: #private !
methodOverwritesOf: aClass
	" Private - Find the methods subimplemented by subclasses of aClass. "

	| map subclasses |
	subclasses := aClass allSubclasses.
	map := PoolDictionary new.
	subclasses isEmpty ifTrue: [ ^map ].
	aClass methodsDo: [:mth| | selector |
		selector := mth selector.
		map at: selector put: (Array with: mth).
		subclasses do: [:each|
			(each selectors includes: selector) ifTrue: [
				(map at: selector) add: each >> selector
			].
		].
	].
	subclasses do: [:each|
		(self methodOverwritesOf: each) keysAndValuesDo: [:key :value|
			(map at: key ifAbsentPut: [Array new]) addAll: value
		].
	].
	(map keys asArray
		select: [:key| (map at: key) size <= 1 ]
		) do: [:key| map removeKey: key ].
	^map! !

! MethodReferences methodsFor: #private !
addMethodOverwrites: map
	" Private - Register the methods overwrites in map. "

	map associationsDo: [:assoc|
		assoc value do: [:each|
			self triggerEvent: #found: with: each.
			self results add: each.
		]
	]! !

! MethodReferences methodsFor: #searching !
methodOverwrites
	" Find the methods that are implemented/overwritten by subclasses. "

	self triggerEvent: #searchStarted.
	Smalltalk rootClasses do: [:aClass|
		self addMethodOverwrites: (self methodOverwritesOf: aClass).
		self addMethodOverwrites: (self methodOverwritesOf: aClass class).
	].
	self triggerEvent: #searchFinished.
	^self results! !

! MethodReferences methodsFor: #private !
hasArgumentOverwrites: names in: stream
	" Private - Returns true if stream of code has argument name conflicts. "

	| args |
	args := (stream upTo: $(; upTo: $)) asArrayOfSubstringsSeparatedBy: $,.
	args do: [:each|
		(names includes: each) ifTrue: [ ^true ].
	].
	^false! !

! MethodReferences methodsFor: #private !
hasLocalOverwrites: names in: stream
	" Private - Returns true if stream of code has local name conflicts. "

	| candidate |
	[stream atEnd] whileFalse: [
		candidate := (stream upTo: 'var '; upTo: $=) trimBlanks.
		(names includes: candidate) ifTrue: [
			^true
		].
	].
	^false! !

! MethodReferences methodsFor: #private !
addVariableOverwrites: names in: mth
	" Private - Register the methods that has name overwrites. "

	| stream |
	stream := mth fn toString stream.
	((self hasArgumentOverwrites: names in: stream)
	or: [ self hasLocalOverwrites: names in: stream ])
	ifTrue: [
		self triggerEvent: #found: with: mth.
		self results add: mth.
	]! !

! MethodReferences methodsFor: #searching !
variableOverwrites
	" Find the methods that has potential overwrite of variable names. "

	self triggerEvent: #searchStarted.
	Smalltalk current classes do: [:aClass| | names |
		names := aClass allInstVarNames.
		aClass methodsDo: [:mth|
			self addVariableOverwrites: names in: mth.
		].
		names := aClass class allInstVarNames.
		aClass class methodsDo: [:mth|
			self addVariableOverwrites: names in: mth.
		].
	].
	self triggerEvent: #searchFinished.
	^self results! !

! MethodReferences class methodsFor: #testing !
findMessages: what
	" Find messages in the system matching what. "

	^self new findMessages: what! !

! MethodReferences methodsFor: #searching !
findMessages: what
	" Find messages matching what. "

	| keys |
	what isString ifTrue: [
		^self findMessages: what trimBlanks asArrayOfSubstrings
	].
	self triggerEvent: #searchStarted.
	keys := what collect: [:each| each asString "asLowercase" ].
	keys notEmpty ifTrue: [ | all collect |
		all := self allMethods.
		all do: [:mth| | current |
			current := mth selector "asLowercase".
			(keys detect: [:one| current includes: one ] ifNone: []) notNil ifTrue: [
				self results add: mth.
				self triggerEvent: #found: with: mth.
			].
		].
	].
	self triggerEvent: #searchFinished.
	^self results! !

