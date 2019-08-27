Object subclass: #JSGenerator
	instanceVariableNames: 'methodClass stream environment idCounter'
	classVariableNames: 'BinaryMap InlineFunctionSet ReservedWords RewriteMap RewriteValueMap'
	poolDictionaries: ''
	category: 'Compiler-JS'!
!JSGenerator commentStamp: 'mir 6/26/2018 17:16' prior: 0!
!


!JSGenerator methodsFor: 'initialize-release' stamp: 'mir 4/30/2018 18:19'!
environment: stEnvironment
	environment := stEnvironment! !

!JSGenerator methodsFor: 'initialize-release' stamp: 'mir 5/31/2018 10:10'!
initialize
	"counter is reset for every new method"
	idCounter := 0! !

!JSGenerator methodsFor: 'initialize-release' stamp: 'mir 4/7/2018 13:52'!
release
	stream close! !

!JSGenerator methodsFor: 'initialize-release' stamp: 'mir 3/15/2018 08:30'!
stream: aStream
	stream := aStream! !


!JSGenerator methodsFor: 'testing' stamp: 'mir 5/30/2018 10:01'!
canBeRewritten: selector
	^(RewriteMap includesKey: selector)
		or: [(RewriteValueMap includesKey: selector)]! !

!JSGenerator methodsFor: 'testing' stamp: 'mir 5/30/2018 10:02'!
canBeValueRewritten: selector
	^RewriteValueMap includesKey: selector! !

!JSGenerator methodsFor: 'testing' stamp: 'mir 5/30/2018 15:16'!
hasInlinedFunction: selector
	^InlineFunctionSet includes: selector! !

!JSGenerator methodsFor: 'testing' stamp: 'mir 10/24/2018 21:07'!
methodClassIsPrimitive
	"Return whether the method class (aka receiver) is a Javascript primitive type,
	Number, Boolean, Function (Block), String"
	| className |
	methodClass ifNil: [^false].
	className := methodClass className.
	^className = 'Number'
		or: [className = 'String'
		or: [className = 'Boolean'
		or: [className = 'BlockClosure']]]! !


!JSGenerator methodsFor: 'private javascript' stamp: 'mir 6/21/2019 10:09'!
eol
	stream lf! !

!JSGenerator methodsFor: 'private javascript' stamp: 'mir 8/9/2018 09:10'!
generateArgumentListFor: methodNode
	methodNode arguments
		do: [:arg | stream nextPutAll: arg name] 
		andBetweenDo: [stream nextPut: $,]
! !


!JSGenerator methodsFor: 'generate method' stamp: 'mir 6/26/2018 17:19'!
endSmalltalkMethodBinding: aClass selector: aSelector
	stream nextPutAll: ');'.
	self eol
! !

!JSGenerator methodsFor: 'generate method' stamp: 'mir 5/31/2018 10:10'!
methodClass: aClass selector: aSelector
	"counter is reset for every new method"
	idCounter := 0.
	methodClass := aClass.
	stream nextPutAll: 'function '.
	self classFunctionName: methodClass.
	stream
		nextPutAll: '__'.
	self selector: aSelector! !

!JSGenerator methodsFor: 'generate method' stamp: 'mir 8/28/2018 11:27'!
methodProtocol: protocol
	stream nextPutAll: ', "'.
	protocol ifNotNil: [stream nextPutAll: protocol].
	stream nextPutAll: '"'! !

!JSGenerator methodsFor: 'generate method' stamp: 'mir 8/28/2018 12:23'!
methodSource: methodSource
	methodSource 
		ifNotNil: [
			stream
				nextPutAll: ', ';
				nextPutAll: methodSource asJavascript]
! !

!JSGenerator methodsFor: 'generate method' stamp: 'mir 5/6/2019 09:42'!
startSmalltalkMethodBinding: aClass selector: aSelector
	stream nextPutAll: 'smalltalk.bind('.
	self smalltalkClassBinding: aClass.
	stream nextPutAll: ', unescape("'; nextPutAll: aSelector escaped; nextPutAll: '"), "'.
	self selector: aSelector.
	stream nextPutAll: '", '.
! !


!JSGenerator methodsFor: 'generate callbacks' stamp: 'mir 8/9/2018 09:10'!
argumentList: args
	stream nextPut: $(.
	args
		do: [:arg | arg generateAsReceiverOn: self] 
		andBetweenDo: [stream nextPut: $,].
	stream nextPut: $)! !

!JSGenerator methodsFor: 'generate callbacks' stamp: 'mir 6/1/2018 17:26'!
asLocalFunctionInvocation: statements with: argument
	| argumentVariable |
	stream
		nextPut: $(;
		nextPutAll: 'function '.
	self classFunctionName: methodClass.
	stream nextPutAll: '__'.
	argumentVariable := StVariableNode new name: self uniqueVarName.
	self argumentList: (Array with: argumentVariable).
	self startBlock.
	statements allButLastDo: [:message |
			self startStatement.
			message receiver: argumentVariable.
			message generateOn: self.
			self endStatement].
	statements last receiver: argumentVariable.
	statements last asReturnNode generateOn: self.
	self endBlock.
	stream nextPutAll: ')('.
	argument generateInlinedValueOn: self.
	stream nextPut: $)! !

!JSGenerator methodsFor: 'generate callbacks' stamp: 'mir 4/25/2018 13:34'!
asReceiverWith: aBlock
	" wrap in ()"
	stream nextPut: $(.
	aBlock value.
	stream nextPut: $)! !

!JSGenerator methodsFor: 'generate callbacks' stamp: 'mir 6/8/2018 18:31'!
blockFunction: args
	stream nextPutAll: 'function '.
	self classFunctionName: methodClass.
	stream nextPutAll: '__'.
	self argumentList: args! !

!JSGenerator methodsFor: 'generate callbacks' stamp: 'mir 5/29/2018 13:35'!
blockInvocation
	stream nextPutAll: '()'! !

!JSGenerator methodsFor: 'generate callbacks' stamp: 'mir 7/16/2018 18:38'!
blockVariableInvocation
	self methodCall.
	stream nextPutAll: 'value()'! !

!JSGenerator methodsFor: 'generate callbacks' stamp: 'mir 4/10/2018 19:32'!
classFunctionName: aClass
	aClass isMeta
		ifTrue: [
			stream nextPutAll: aClass theNonMetaClass name.
			stream nextPutAll: '_class']
		ifFalse: [stream nextPutAll: aClass name]! !

!JSGenerator methodsFor: 'generate callbacks' stamp: 'mir 5/24/2018 11:39'!
className: aClass
	aClass isMeta
		ifTrue: [
			stream nextPutAll: aClass theNonMetaClass name.
			stream nextPutAll: '.$klass']
		ifFalse: [stream nextPutAll: aClass name]! !

!JSGenerator methodsFor: 'generate callbacks' stamp: 'mir 11/7/2018 14:46'!
defineSelf
	stream nextPutAll: 'const self = this; '! !

!JSGenerator methodsFor: 'generate callbacks' stamp: 'mir 6/8/2018 15:32'!
endBlock
	stream nextPut: $}.
	self eol! !

!JSGenerator methodsFor: 'generate callbacks' stamp: 'mir 6/8/2018 15:32'!
endStatement
	stream nextPutAll: ';'.
	self eol! !

!JSGenerator methodsFor: 'generate callbacks' stamp: 'mir 8/9/2018 09:10'!
generateArrayLiteral: anArray
	"[(1), (2), (3)]"
	stream nextPut: $[.
	anArray
		do: [:element | element generateOn: self] 
		andBetweenDo: [stream nextPut: $,; space].
	stream nextPut: $]! !

!JSGenerator methodsFor: 'generate callbacks' stamp: 'mir 4/7/2018 12:00'!
generateAssignment
	stream nextPutAll: '='! !

!JSGenerator methodsFor: 'generate callbacks' stamp: 'mir 8/14/2018 21:32'!
generateBooleanLiteral: aBoolean
	stream nextPutAll: aBoolean asString! !

!JSGenerator methodsFor: 'generate callbacks' stamp: 'mir 5/15/2018 14:48'!
generateCharacterLiteral: aCharacter
	self generateStringLiteral: aCharacter asString! !

!JSGenerator methodsFor: 'generate callbacks' stamp: 'mir 5/31/2018 19:43'!
generateClassVariableAt: classVarNode
	"smalltalk.StCompilerTestClass.classVariableAt_(""ClassVar2"")"
	self smalltalkClassBinding: classVarNode key nonMetaClass.
	stream
		nextPutAll: '.classVariableAt_("';
		nextPutAll: classVarNode name;
		nextPutAll: '")'! !

!JSGenerator methodsFor: 'generate callbacks' stamp: 'mir 5/31/2018 17:07'!
generateClassVariableAt: classVarNode put: valueNode
	"smalltalk.StCompilerTestClass.classVariableAt_put_(""ClassVar2"",""classVar2"");"
	| classVarDefinition |
	classVarDefinition := classVarNode key.
	self smalltalkClassBinding: classVarDefinition nonMetaClass.
	stream
		nextPutAll: '.classVariableAt_put_("';
		nextPutAll: classVarDefinition name;
		nextPutAll: '",'.
	valueNode generateInlinedValueOn: self.
	stream nextPutAll: ')'! !

!JSGenerator methodsFor: 'generate callbacks' stamp: 'mir 1/25/2019 10:07'!
generateInstVarAccess: varName on: objectNode
	| objName |
	objName := objectNode name.
	(ReservedWords includes: objName)
		ifTrue: [stream nextPutAll: '$$'].
	stream
		nextPutAll: objName;
		nextPut: $. ;
		nextPutAll: varName! !

!JSGenerator methodsFor: 'generate callbacks' stamp: 'mir 5/30/2018 16:20'!
generateInstanceVariable: variableNode
	"self['@value1']"
	stream
		nextPutAll: 'self[''@';
		nextPutAll: variableNode name;
		nextPutAll: ''']'! !

!JSGenerator methodsFor: 'generate callbacks' stamp: 'mir 8/14/2018 22:27'!
generateNilLiteral: anUndefinedObject
	stream nextPutAll: anUndefinedObject asString! !

!JSGenerator methodsFor: 'generate callbacks' stamp: 'mir 4/9/2018 20:26'!
generateNumberLiteral: aNumber
	"(1)"
	stream nextPut: $(.
	aNumber printOn: stream.
	stream nextPut: $)! !

!JSGenerator methodsFor: 'generate callbacks' stamp: 'mir 11/7/2018 08:07'!
generatePrimitive: primitiveName module: moduleName
	"Create named primitive."
	"<primitive: 'primScan' module: 'NKBarcodeScanner'>

	var $$primitiveResult = smalltalk.primitiveManager.callPrimitive(""NKBarcodeScanner"", ""primScan"", this, arguments);
	if ($$primitiveResult !!== smalltalk.primitiveManager.primFailValue)
		return $$primitiveResult;

	var $$primitiveResult = NKBarcodeScanner.primScan(this, arguments);
	if ($$primitiveResult !!== smalltalk.primitiveManager.primFailValue)
		return $$primitiveResult;
	"
	stream
		nextPutAll: 'var $$primitiveResult = smalltalk.primitiveManager.callPrimitive("';
		nextPutAll: moduleName;
		nextPutAll: '", "';
		nextPutAll: primitiveName;
		nextPutAll: '", this'.
	self methodClassIsPrimitive
		ifTrue: [stream nextPutAll: '.valueOf()'].
	stream
		nextPutAll: ', arguments);'.
	self eol.
	stream
		nextPutAll: 'if ($$primitiveResult !!== smalltalk.primitiveManager.primFailValue)
		return $$primitiveResult;'.
	self eol! !

!JSGenerator methodsFor: 'generate callbacks' stamp: 'mir 11/7/2018 14:15'!
generatePrimitiveArgumentCopy
	"Generate the code to copy the arguments."
	"	const args = [];
	const length = arguments.length;
	for (var i = 0; i < length; ++i) {
		args[i] = arguments[i];
	}"
	stream
		nextPutAll: 'const args = [];
	const length = arguments.length;
	for (var i = 0; i < length; ++i) {
		args[i] = arguments[i];
	}'.
	self eol! !

!JSGenerator methodsFor: 'generate callbacks' stamp: 'mir 1/23/2019 16:43'!
generatePrimitiveDirect: primitiveName module: moduleName
	"Create named primitive."
	"<primitive: 'primScan' module: 'NKBarcodeScanner'>

	var $$primitiveResult = smalltalk.NKBarcodeScanner.primScan(this, arguments);
	if ($$primitiveResult !!== smalltalk.primitiveManager.primFailValue)
		return $$primitiveResult;
	"
	"self generatePrimitiveArgumentCopy."
	stream
		nextPutAll: 'var $$primitiveResult = smalltalk.primitiveManager.modules.';
		nextPutAll: moduleName;
		nextPutAll: '.';
		nextPutAll: primitiveName;
		nextPutAll: '(this'.
"	self methodClassIsPrimitive
		ifTrue: [stream nextPutAll: '.valueOf()'].
"	stream
		nextPutAll: ', arguments);'.
	self eol.
	stream
		nextPutAll: 'if ($$primitiveResult !!== smalltalk.primitiveManager.primFailValue)
		return $$primitiveResult;'.
	self eol! !

!JSGenerator methodsFor: 'generate callbacks' stamp: 'mir 5/15/2018 15:09'!
generatePropertyAccess: propertyName on: objectNode
	stream
		nextPutAll: objectNode name;
		nextPut: $[ ;
		nextPutAll: propertyName asString;
		nextPut: $]! !

!JSGenerator methodsFor: 'generate callbacks' stamp: 'mir 5/24/2018 17:16'!
generateStringLiteral: aString
	"Escape the string, but only if needed. 
	Magic is done in String class, depending on platform"
	stream nextPutAll: aString asJavascript! !

!JSGenerator methodsFor: 'generate callbacks' stamp: 'mir 6/8/2018 15:34'!
generateTemporaries: tempVars
	self toDo.
	" should later use nilReadBeforeWrittenTemps to avoid unnecessary inits"
	tempVars
		do: [:tempVar | 
			stream nextPutAll: 'var '.
			tempVar generateOn: self.
			stream nextPutAll: ' = nil;'.
			self eol]! !

!JSGenerator methodsFor: 'generate callbacks' stamp: 'mir 7/5/2018 21:59'!
generateUndeclaredVariable: variableNode
	"assume this is a global variable"
	| varName |
	varName := variableNode name.
	stream nextPutAll: 'smalltalk.'.
	stream nextPutAll: varName! !

!JSGenerator methodsFor: 'generate callbacks' stamp: 'mir 8/9/2018 15:22'!
generateVariable: variableNode
	variableNode isSelfPseudoVariable
		ifTrue: [stream nextPutAll: 'self']
		ifFalse: [
			| varName |
			varName := variableNode name.
			(ReservedWords includes: varName)
				ifTrue: [stream nextPutAll: '$$'].
			stream nextPutAll: varName]! !

!JSGenerator methodsFor: 'generate callbacks' stamp: 'mir 5/12/2018 12:41'!
inlineJS: aString
	stream nextPutAll: aString! !

!JSGenerator methodsFor: 'generate callbacks' stamp: 'mir 5/25/2018 16:39'!
literalVariable: variableNode
	stream nextPutAll: variableNode name! !

!JSGenerator methodsFor: 'generate callbacks' stamp: 'mir 3/16/2018 10:57'!
methodCall
	stream nextPut: $.! !

!JSGenerator methodsFor: 'generate callbacks' stamp: 'mir 9/5/2018 16:43'!
nonLocalReturnWith: aBlock
	"$early.result=<expression>; throw ($early);"
	stream
		nextPutAll: '$early.result='.
	aBlock value.
	stream
		nextPutAll: '; throw ($early)'! !

!JSGenerator methodsFor: 'generate callbacks' stamp: 'mir 9/5/2018 16:43'!
nonLocalReturnWrapperEnd
	"} catch(e) {
		if(e===$early) return e.result; 
		throw e
	}"
	stream nextPutAll: '} catch($ex) {'.
	self eol.
	stream tab; nextPutAll: 'if($ex===$early) { return $ex.result;}'.
	self eol.
	stream tab; nextPutAll: 'throw $ex'.
	self eol.
	stream nextPutAll: '}'.
	self eol! !

!JSGenerator methodsFor: 'generate callbacks' stamp: 'mir 9/5/2018 16:15'!
nonLocalReturnWrapperStart
	"var $early={};
	try {"
	stream nextPutAll: 'var $early={name:"stReturn"};'.
	self eol.
	stream nextPutAll: 'try {'.
	self eol! !

!JSGenerator methodsFor: 'generate callbacks' stamp: 'mir 3/16/2018 11:14'!
return
	stream nextPutAll: 'return '! !

!JSGenerator methodsFor: 'generate callbacks' stamp: 'mir 8/9/2018 08:54'!
selector: selectorSymbol
	| selector |
	selector := selectorSymbol asString.
	self toDo. "this would get around the reserved words"
"	stream nextPut: $_."
	selectorSymbol asSymbol isBinary
		ifTrue: [
			selector
				do: [:c | stream nextPutAll: (BinaryMap at: c ifAbsent: [c asString])]
				"separatedBy: [stream nextPut: $_]"]
		ifFalse: [
			| mapped |
			mapped := selector replaceAllOccurencesOf: $: with: $_.
			(ReservedWords includes: mapped)
				ifTrue: [stream nextPutAll: '$$'].
			stream nextPutAll: mapped]! !

!JSGenerator methodsFor: 'generate callbacks' stamp: 'mir 5/29/2018 15:03'!
selfPseudoVariable: variableNode
	stream nextPutAll: 'self'! !

!JSGenerator methodsFor: 'generate callbacks' stamp: 'mir 4/10/2018 18:49'!
smalltalkClassBinding: aClass
	stream nextPutAll: 'smalltalk.'.
	self className: aClass! !

!JSGenerator methodsFor: 'generate callbacks' stamp: 'mir 6/21/2019 11:46'!
startBlock
	stream nextPut: ${.
	self eol! !

!JSGenerator methodsFor: 'generate callbacks' stamp: 'mir 3/16/2018 11:09'!
startStatement
! !

!JSGenerator methodsFor: 'generate callbacks' stamp: 'mir 9/3/2018 11:09'!
superImplementor: selector argumentList: argList
	"smalltalk.superImplementor(smalltalk.StCompilerTestClass.$klass,'$$new').apply(self, [])"
	stream nextPutAll: 'smalltalk.superImplementor('.
	self smalltalkClassBinding: methodClass.
	stream nextPutAll: ','''.
	self selector: selector.
	stream nextPutAll: ''').apply(self, '.

	stream nextPut: $[.
	argList
		do: [:arg | arg generateOn: self] 
		andBetweenDo: [stream nextPut: $,].
	stream nextPutAll: '])'! !


!JSGenerator methodsFor: 'annotations' stamp: 'mir 4/9/2018 17:24'!
toDo! !


!JSGenerator methodsFor: 'generate' stamp: 'mir 5/1/2018 17:29'!
addDefinition: subclass superclass: superClass instanceVariableNames: instVarNames classVariableNames: classVarNames poolDictionaries: poolVars category: category
	| classDefinition |
	classDefinition := StClassDefinition
		name: subclass
		superclass: superClass
		instanceVariableNames: instVarNames
		classVariableNames: classVarNames
		poolDictionaries: poolVars
		category: category.
	environment addClassDefinition: classDefinition! !

!JSGenerator methodsFor: 'generate' stamp: 'mir 4/30/2018 18:31'!
environment
	^environment! !

!JSGenerator methodsFor: 'generate' stamp: 'mir 8/9/2018 09:10'!
generate: subclass classVariableNames: classVars

	"smalltalk.StCompilerTestClass.$classVariableNames=""ClassVar1 ClassVar2 ClassVar3"");"
	stream
		nextPutAll: 'smalltalk.';
		nextPutAll: subclass; 
		nextPutAll: '.$classVariableNames=("'.

	classVars
		do: [:classVar | stream nextPutAll: classVar asString] 
		andBetweenDo: [stream space].

	stream nextPutAll: '");'.
	self eol! !

!JSGenerator methodsFor: 'generate' stamp: 'mir 8/9/2018 09:10'!
generate: subclass superclass: superClass instanceVariableNames: instVars classVariableNames: classVars poolDictionaries: poolVars category: category

	"smalltalk.addClass(""StCompilerTestClass"",smalltalk.Object, ['instVar1', 'instVar2', 'instVar3'], 'Compiler-JS-Test');
	smalltalk.StCompilerTestClass.$classVariableNames=""ClassVar1 ClassVar2 ClassVar3"");"
"	self addDefinition: subclass superclass: superClass instanceVariableNames: instVars classVariableNames: classVars poolDictionaries: poolVars category: category.
"
	stream
		nextPutAll: 'smalltalk.addClass("';
		nextPutAll: subclass; nextPutAll: '", ' ;
		nextPutAll: 'smalltalk.'; nextPutAll: superClass; nextPut: $, ; space;
		nextPut: $[ .

	instVars
		do: [:instVar | instVar printOn: stream] 
		andBetweenDo: [stream nextPut: $,; space].
	stream 
		nextPutAll: '], '.
	category printOn: stream.
	stream nextPutAll: ');'.
	self eol.
	self generate: subclass classVariableNames: classVars! !

!JSGenerator methodsFor: 'generate' stamp: 'mir 8/9/2018 09:10'!
generateMeta: metaClassDefinition instanceVariableNames: instVarNames

	"EventManager class instanceVariableNames: ' eventsTriggered '!!
	smalltalk.EventManager.$klass.$iVarNames = ['eventsTriggered'];"
	stream
		nextPutAll: 'smalltalk.';
		nextPutAll: metaClassDefinition theNonMetaClass className; 
		nextPutAll: '.$klass.$iVarNames = ['.
	instVarNames
		do: [:instVar | instVar printOn: stream] 
		andBetweenDo: [stream nextPut: $,; space].
	stream nextPutAll: '];'.
	self eol! !

!JSGenerator methodsFor: 'generate' stamp: 'mir 5/31/2018 12:24'!
generateMetaFor: className instanceVariableNames: instVarNames

	self halt
		generateMeta: (environment bindingOf: className)
		instanceVariableNames: instVarNames! !

!JSGenerator methodsFor: 'generate' stamp: 'mir 5/28/2018 13:27'!
uniqueVarName
	idCounter := idCounter + 1.
	^'$' , idCounter asString , '$'! !


!JSGenerator methodsFor: 'accessing' stamp: 'mir 4/27/2018 14:47'!
source
	^stream contents! !


!JSGenerator methodsFor: 'generate rewrite value' stamp: 'mir 5/30/2018 10:48'!
rewriteValueTimesRepeat: messageNode
	"(function(){for(var $1$=%receiver%;$1$>0;$1$--){%arg1%()};return nil})()"
	| varName |
	varName := self uniqueVarName.
	stream
		nextPutAll: '(function(){for(var ';
		nextPutAll: varName;
		nextPutAll: ' = '.
	messageNode receiver generateInlinedValueOn: self.

	stream
		nextPutAll: ';';
		nextPutAll: varName;
		nextPutAll: '>0;';
		nextPutAll: varName;
		nextPutAll:  '--){ '.

	messageNode firstArgument generateInlinedOn: self.
	stream nextPutAll: '};return nil})()'! !

!JSGenerator methodsFor: 'generate rewrite value' stamp: 'mir 5/30/2018 16:45'!
rewriteValueWhileFalse: messageNode
	"(function(){while(!!%receiver%()){};return nil})()"
	stream nextPutAll: '(function(){while(!!'.
	messageNode receiver generateInlinedBlockValueOn: self.
	stream nextPutAll: '){};return nil})()'! !

!JSGenerator methodsFor: 'generate rewrite value' stamp: 'mir 9/4/2018 09:24'!
rewriteValueWhileFalseDo: messageNode
	"(function(){while(!!%receiver%()){%arg1%()};return nil})()"
	stream nextPutAll: '(function(){while(!!'.
	messageNode receiver generateInlinedBlockValueOn: self.
	stream nextPutAll: '){'.
	messageNode firstArgument generateBlockBodyOn: self.
	stream nextPutAll: '};return nil})()'! !

!JSGenerator methodsFor: 'generate rewrite value' stamp: 'mir 5/30/2018 16:46'!
rewriteValueWhileTrue: messageNode
	"(function(){while(%receiver%()){};return nil})()"
	stream nextPutAll: '(function(){while('.
	messageNode receiver generateInlinedBlockValueOn: self.
	stream nextPutAll: '){};return nil})()'! !

!JSGenerator methodsFor: 'generate rewrite value' stamp: 'mir 9/4/2018 09:41'!
rewriteValueWhileTrueDo: messageNode
	"(function(){while(%receiver%()){%arg1%()};return nil})()"
	stream nextPutAll: '(function(){while('.
	messageNode receiver generateInlinedBlockValueOn: self.
	stream nextPutAll: '){'.
	messageNode firstArgument generateBlockBodyOn: self.
	stream nextPutAll: '};return nil})()'! !


!JSGenerator methodsFor: 'generate rewrites' stamp: 'mir 5/25/2018 13:28'!
rewrite: messageNode
	| rewriteRule |
	rewriteRule := RewriteMap at: messageNode selector key ifAbsent: [StCompileException new signal: 'rewrite selector ' , messageNode selector key , ' missing'].
	self perform: rewriteRule with: messageNode! !

!JSGenerator methodsFor: 'generate rewrites' stamp: 'mir 5/30/2018 16:33'!
rewriteBasicAt: messageNode
	"((function(){var $1$=%receiver%[%arg1%];if(nil.isNil_($1$))return nil;return $1$;})())"
	"(function(){var $1$; $1$ = %receiver%[%arg1%]; return nil.isNil_($1$)) ? nil : $1$;})()"
	| varName |
	varName := self uniqueVarName.
	stream
		nextPutAll: '(function(){var ';
		nextPutAll: varName;
		nextPutAll: '; ';
		nextPutAll: varName;
		nextPutAll: ' = '.
	messageNode receiver generateInlinedValueOn: self.
	stream 
		nextPutAll: '['.
	messageNode firstArgument generateInlinedValueOn: self.
	stream
		nextPutAll: ']; return nil.isNil_(';
		nextPutAll: varName;
		nextPutAll:  ') ? nil : ';
		nextPutAll: varName;
		nextPutAll: '})()'! !

!JSGenerator methodsFor: 'generate rewrites' stamp: 'mir 5/30/2018 16:46'!
rewriteBasicAtIfAbsent: messageNode
	"((function(){var $1$=%receiver%[%arg1%];if(nil.isNil_($1$))return (%arg2%.value());return $1$;})())"
	| varName |
	varName := self uniqueVarName.
	stream
		nextPutAll: '(function(){var ';
		nextPutAll: varName;
		nextPutAll: '; ';
		nextPutAll: varName;
		nextPutAll: ' = '.
	messageNode receiver generateInlinedValueOn: self.
	stream 
		nextPutAll: '['.
	messageNode firstArgument generateInlinedValueOn: self.
	stream
		nextPutAll: ']; return nil.isNil_(';
		nextPutAll: varName;
		nextPutAll:  ') ? '.
	messageNode secondArgument generateInlinedBlockValueOn: self.
	stream
		nextPutAll:  ' : ';
		nextPutAll: varName;
		nextPutAll: '})()'! !

!JSGenerator methodsFor: 'generate rewrites' stamp: 'mir 5/30/2018 13:44'!
rewriteBasicAtPut: messageNode
	"(%receiver%[%arg1%]=(%arg2%))"
	stream nextPutAll: '('.
	messageNode receiver generateAsReceiverOn: self.
	stream nextPutAll: '['.
	messageNode firstArgument generateInlinedValueOn: self.
	stream nextPutAll: ']='.
	messageNode secondArgument generateInlinedValueOn: self.
	stream nextPutAll: ')'! !

!JSGenerator methodsFor: 'generate rewrites' stamp: 'mir 5/30/2018 10:18'!
rewriteBasicValueOrNil: messageNode
	"(function(){var $1$;return (nil.isNil_($1$ = %receiver%)) ? nil : $1$;})()"
	stream nextPutAll: '(function(){var $1$;return (nil.isNil_($1$ = '.
		messageNode receiver generateInlinedValueOn: self.
	stream nextPutAll: ')) ? nil : $1$;})()'! !

!JSGenerator methodsFor: 'generate rewrites' stamp: 'mir 5/23/2018 17:47'!
rewriteClass: messageNode
	"%receiver%.$klass"
	messageNode receiver generateAsReceiverOn: self.
	stream nextPutAll: '.$klass'! !

!JSGenerator methodsFor: 'generate rewrites' stamp: 'mir 5/30/2018 10:50'!
rewriteEqEq: messageNode
	"(nil.is_eqeq_(%receiver%,%arg1%))"
	stream nextPutAll: '(nil.is_eqeq_('.
	messageNode receiver generateInlinedValueOn: self.
	stream nextPutAll: ','.
	messageNode firstArgument generateInlinedValueOn: self.
	stream nextPutAll: '))'! !

!JSGenerator methodsFor: 'generate rewrites' stamp: 'mir 5/30/2018 13:50'!
rewriteEqEqEq: messageNode
	"(%receiver% === %arg1%)"
	stream nextPutAll: '('.
	messageNode receiver generateInlinedValueOn: self.
	stream nextPutAll: ' === '.
	messageNode firstArgument generateInlinedValueOn: self.
	stream nextPutAll: ')'.
! !

!JSGenerator methodsFor: 'generate rewrites' stamp: 'mir 8/21/2018 11:39'!
rewriteFalseCondition: receiverNode
	self asReceiverWith: [receiverNode generateInlinedValueOn: self].
	stream nextPutAll: '.not()'! !

!JSGenerator methodsFor: 'generate rewrites' stamp: 'mir 8/21/2018 11:40'!
rewriteIfFalse: messageNode
	"if (!!%receiver%) { %arg1%()}"
	"if (!!%receiver%) { return %arg1%()} else { return nil }"
	| args |
	args := messageNode arguments.
	stream nextPutAll: 'if ('.
	self rewriteFalseCondition: messageNode receiver.
	stream nextPutAll: ') {'.
	(args at: 1) generateBlockBodyOn: self.
	stream nextPutAll: '}'.
	args size > 1
		ifTrue: [
			stream nextPutAll: ' else {'.
			(args at: 2) generateBlockBodyOn: self.
			stream nextPutAll: '}']! !

!JSGenerator methodsFor: 'generate rewrites' stamp: 'mir 8/21/2018 11:40'!
rewriteIfFalseIfTrue: messageNode
	"if (!!%receiver%) { %arg1%()} else { %arg2%() }"
	| args |
	args := messageNode arguments.
	stream nextPutAll: 'if ('.
	self rewriteFalseCondition: messageNode receiver.
	stream nextPutAll: ') {'.
	(args at: 1) generateBlockBodyOn: self.
	stream nextPutAll: '} else {'.
	(args at: 2) generateBlockBodyOn: self.
	stream nextPutAll: '}'! !

!JSGenerator methodsFor: 'generate rewrites' stamp: 'mir 5/31/2018 08:56'!
rewriteIfNil: messageNode
	"(function(){var $1$;return (nil.isNil_($1$ = %receiver%)) ? %arg1%() : $1$;})()"
	"(function(){var $1$; $1$ = %receiver%; if (nil.isNil_($1$)) { return %arg1%() } else { return $1$;}})()"
	| varName |
	varName := self uniqueVarName.
	stream
		nextPutAll: '(function(){var ';
		nextPutAll: varName;
		nextPutAll: '; ';
		nextPutAll: varName;
		nextPutAll: ' = '.
	messageNode receiver generateInlinedValueOn: self.
	stream 
		nextPutAll: '; if (nil.isNil_(';
		nextPutAll: varName;
		nextPutAll:  ')) { return '.
	messageNode firstArgument generateInlinedBlockValueOn: self.
	stream
		nextPutAll: ' } else { return ';
		nextPutAll: varName;
		nextPutAll: '; }})()'! !

!JSGenerator methodsFor: 'generate rewrites' stamp: 'mir 5/30/2018 16:44'!
rewriteIfNilIfNotNil: messageNode
	"(nil.isNil_(%receiver%)) ? %arg1%() : %arg2%()"
	stream nextPutAll: '(nil.isNil_('.
	messageNode receiver generateInlinedValueOn: self.
	stream nextPutAll: ') ? '.
	messageNode firstArgument generateInlinedBlockValueOn: self.
	stream nextPutAll: ' : '.
	messageNode secondArgument generateInlinedBlockValueOn: self.
	stream nextPutAll: ')'! !

!JSGenerator methodsFor: 'generate rewrites' stamp: 'mir 5/31/2018 08:56'!
rewriteIfNotNil: messageNode
	"(function(){var $1$;return (nil.isNil_($1$ = %receiver%)===false) ? %arg1%() : $1$;})()"
	"(function(){var $1$; $1$ = %receiver%; if (!!nil.isNil_($1$)) { return %arg1%() } else { return $1$;}})()"
	| varName |
	varName := self uniqueVarName.
	stream
		nextPutAll: '(function(){var ';
		nextPutAll: varName;
		nextPutAll: '; ';
		nextPutAll: varName;
		nextPutAll: ' = '.
	messageNode receiver generateInlinedValueOn: self.
	stream 
		nextPutAll: '; if (!!nil.isNil_(';
		nextPutAll: varName;
		nextPutAll:  ')) { return '.
	messageNode firstArgument generateInlinedBlockValueOn: self.
	stream
		nextPutAll: ' } else { return ';
		nextPutAll: varName;
		nextPutAll: '; }})()'! !

!JSGenerator methodsFor: 'generate rewrites' stamp: 'mir 5/30/2018 16:44'!
rewriteIfNotNilIfNil: messageNode
	"(nil.isNil_(%receiver%)===false) ? %arg1%() : %arg2%()"
	stream nextPutAll: '(!!nil.isNil_('.
	messageNode receiver generateInlinedValueOn: self.
	stream nextPutAll: ') ? '.
	messageNode firstArgument generateInlinedBlockValueOn: self.
	stream nextPutAll: ' : '.
	messageNode secondArgument generateInlinedBlockValueOn: self.
	stream nextPutAll: ')'! !

!JSGenerator methodsFor: 'generate rewrites' stamp: 'mir 8/21/2018 11:39'!
rewriteIfTrue: messageNode
	"if (%receiver%) { %arg1%()}"
	"if (%receiver%) { return %arg1%()} else { return nil }"
	| args |
	args := messageNode arguments.
	stream nextPutAll: 'if ('.
	self rewriteTrueCondition: messageNode receiver.
	stream nextPutAll: ') {'.
	(args at: 1) generateBlockBodyOn: self.
	stream nextPutAll: '}'.
	args size > 1
		ifTrue: [
			stream nextPutAll: ' else {'.
			(args at: 2) generateBlockBodyOn: self.
			stream nextPutAll: '}']! !

!JSGenerator methodsFor: 'generate rewrites' stamp: 'mir 8/21/2018 11:39'!
rewriteIfTrueIfFalse: messageNode
	"if (%receiver%) { %arg1%()} else { %arg2%() }"
	| args |
	args := messageNode arguments.
	stream nextPutAll: 'if ('.
	self rewriteTrueCondition: messageNode receiver.
	stream nextPutAll: ') {'.
	(args at: 1) generateBlockBodyOn: self.
	stream nextPutAll: '} else {'.
	(args at: 2) generateBlockBodyOn: self.
	stream nextPutAll: '}'! !

!JSGenerator methodsFor: 'generate rewrites' stamp: 'mir 5/30/2018 16:45'!
rewriteIfUndefined: messageNode
	"(function(){var $1$ = %receiver%;if (typeof ($1$) == ""undefined"") return %arg1%(); return $1$;})()"
	| varName |
	varName := self uniqueVarName.
	stream
		nextPutAll: '(function(){var ';
		nextPutAll: varName;
		nextPutAll: '; ';
		nextPutAll: varName;
		nextPutAll: ' = '.
	messageNode receiver generateInlinedValueOn: self.
	stream 
		nextPutAll: '; if (typeof(';
		nextPutAll: varName;
		nextPutAll:  ') == "undefined") { return '.
	messageNode firstArgument generateInlinedBlockValueOn: self.
	stream
		nextPutAll: ' } else { return ';
		nextPutAll: varName;
		nextPutAll: ' }})()'! !

!JSGenerator methodsFor: 'generate rewrites' stamp: 'mir 5/30/2018 14:56'!
rewriteIsKindOf: messageNode
	"smalltalk.is_kindOf_(%receiver%,(%arg1%))"
	stream nextPutAll: '(smalltalk.is_kindOf_('.
	messageNode receiver generateInlinedValueOn: self.
	stream nextPutAll: ','.
	messageNode firstArgument generateInlinedValueOn: self.
	stream nextPutAll: '))'! !

!JSGenerator methodsFor: 'generate rewrites' stamp: 'mir 5/30/2018 10:21'!
rewriteIsNil: messageNode
	"(nil.isNil_(%receiver%))"
	stream nextPutAll: '(nil.isNil_('.
	messageNode receiver generateInlinedValueOn: self.
	stream nextPutAll: '))'! !

!JSGenerator methodsFor: 'generate rewrites' stamp: 'mir 5/30/2018 10:21'!
rewriteNotNil: messageNode
	"(nil.isNil_(%receiver%)===false)"
	stream nextPutAll: '(nil.isNil_('.
	messageNode receiver generateInlinedValueOn: self.
	stream nextPutAll: ')===false)'! !

!JSGenerator methodsFor: 'generate rewrites' stamp: 'mir 5/31/2018 11:15'!
rewriteOr: messageNode
	"(%receiver% || %arg1%)"
	stream nextPutAll: '('.
	messageNode receiver generateInlinedValueOn: self.
	stream nextPutAll: ' || '.
	messageNode firstArgument generateInlinedValueOn: self.
	stream nextPutAll: ')'! !

!JSGenerator methodsFor: 'generate rewrites' stamp: 'mir 5/31/2018 11:38'!
rewriteRespondsTo: messageNode
	"smalltalk.responds_to_(%receiver%,(%arg1%))"
	stream nextPutAll: '(smalltalk.responds_to_('.
	messageNode receiver generateInlinedValueOn: self.
	stream nextPutAll: ','.
	messageNode firstArgument generateInlinedValueOn: self.
	stream nextPutAll: '))'! !

!JSGenerator methodsFor: 'generate rewrites' stamp: 'mir 5/30/2018 10:48'!
rewriteTimesRepeat: messageNode
	"for(var $1$=%receiver%;$1$>0;$1$--){%arg1%()};"
	| varName |
	varName := self uniqueVarName.
	stream
		nextPutAll: 'for(var ';
		nextPutAll: varName;
		nextPutAll: ' = '.
	messageNode receiver generateInlinedValueOn: self.

	stream
		nextPutAll: ';';
		nextPutAll: varName;
		nextPutAll: '>0;';
		nextPutAll: varName;
		nextPutAll:  '--){ '.

	messageNode firstArgument generateInlinedOn: self.
	stream nextPutAll: '};'! !

!JSGenerator methodsFor: 'generate rewrites' stamp: 'mir 8/21/2018 11:38'!
rewriteTrueCondition: receiverNode
	self asReceiverWith: [receiverNode generateInlinedValueOn: self].
	stream nextPutAll: '.valueOf()'! !

!JSGenerator methodsFor: 'generate rewrites' stamp: 'mir 5/30/2018 10:15'!
rewriteValue: messageNode
	| rewriteRule |
	rewriteRule := RewriteValueMap at: messageNode selector key ifAbsent: [StCompileException new signal: 'rewrite selector ' , messageNode selector key , ' missing'].
	self perform: rewriteRule with: messageNode! !

!JSGenerator methodsFor: 'generate rewrites' stamp: 'mir 8/21/2018 12:00'!
rewriteWhileFalse: messageNode
	"while(!!%receiver%()){};"
	stream nextPutAll: 'while('.
	self asReceiverWith: [messageNode receiver generateInlinedBlockValueOn: self].
	stream nextPutAll: '.not()){}'! !

!JSGenerator methodsFor: 'generate rewrites' stamp: 'mir 9/4/2018 09:41'!
rewriteWhileFalseDo: messageNode
	"while(!!%receiver%()){%arg1%()};"
	stream nextPutAll: 'while('.
	self asReceiverWith: [messageNode receiver generateInlinedBlockValueOn: self].
	stream nextPutAll: '.not()){'.
	messageNode firstArgument generateBlockBodyOn: self.
	stream nextPutAll: '};'! !

!JSGenerator methodsFor: 'generate rewrites' stamp: 'mir 8/21/2018 11:49'!
rewriteWhileTrue: messageNode
	"while(%receiver%()){}"
	stream nextPutAll: 'while('.
	self asReceiverWith: [messageNode receiver generateInlinedBlockValueOn: self].
	stream nextPutAll: '.valueOf()){};'! !

!JSGenerator methodsFor: 'generate rewrites' stamp: 'mir 9/4/2018 09:23'!
rewriteWhileTrueDo: messageNode
	"while(%receiver%()){%arg1%()};"
	stream nextPutAll: 'while('.
	self asReceiverWith: [messageNode receiver generateInlinedBlockValueOn: self].
	stream nextPutAll: '.valueOf()){'.
	messageNode firstArgument generateBlockBodyOn: self.
	stream nextPutAll: '};'! !

"-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- "!

JSGenerator class
	instanceVariableNames: ''!

!JSGenerator class methodsFor: 'file-out' stamp: 'mir 4/30/2018 18:20'!
generateClass: aClass in: directoryNamed
	self generateClass: aClass into: directoryNamed environment: StEnvironment bootstrap! !

!JSGenerator class methodsFor: 'file-out' stamp: 'mir 4/30/2018 18:19'!
generateClass: aClass into: directoryNamed environment: stEnvironment
	| generator |
	generator := self onFileNamed: directoryNamed , aClass name , '.st.js'.
	generator environment: stEnvironment.
	aClass generateOn: generator.
	aClass class generateOn: generator.
	generator release! !


!JSGenerator class methodsFor: 'class initialization' stamp: 'mir 6/11/2018 18:00'!
initialize
	"JSGenerator initialize"

	self initializeBinaryMap.
	self initializeInlineFunctionSet.
	self initializeReservedWords.
	self initializeRewriteMap.
	self initializeRewriteValueMap! !

!JSGenerator class methodsFor: 'class initialization' stamp: 'mir 4/13/2018 16:38'!
initializeBinaryMap
	"JSGenerator initializeBinaryMap"
"		.replace(/:/g,'_')
		.replace(/[+]/g,'_plus')
		.replace(/-/g,'_minus')
		.replace(/[*]/g,'_star')
		.replace(/[/]/g,'_slash')
		.replace(/[|]/g,'_bar')
		.replace(/[&]/g,'_amp')
		.replace(/>/g,'_gt')
		.replace(/</g,'_lt')
		.replace(/=/g,'_eq')
		.replace(/,/g,'_comma')
		.replace(/[@]/g,'_at')
		.replace(/~/g,'_no')
		.replace(/\\/g,'_bk')"

	BinaryMap := (Dictionary new: 128)
"		at: $|  put: 'or';
		at: $& put: 'and';"
		at: $|  put: '_bar';
		at: $& put: '_amp';
		at: $\ put: '_bk';
		at: $+ put: '_plus';
		at: $* put: '_star';
		at: $/ put: '_slash';
		at: $= put: '_eq';
		at: $> put: '_gt';
		at: $< put: '_lt';
		at: $, put: '_comma';
		at: $@ put: '_at';
		at: $% put: '_mod';
		at: $~ put: '_no';
		at: $- put: '_minus';
		yourself! !

!JSGenerator class methodsFor: 'class initialization' stamp: 'mir 9/3/2018 15:00'!
initializeInlineFunctionSet
	"JSGenerator initializeInlineFunctionSet"

	InlineFunctionSet := Set new.
	InlineFunctionSet
		add: #whileTrue;
		add: #whileFalse;
		add: #basicValueOrNil;

		add: #whileTrue:;
		add: #whileFalse:;
		add: #ifNil:;
		add: #ifNotNil:;

		add: #basicAt:;
		add: #ifUndefined:;
		add: #timesRepeat:;

		add: #basicAt:ifAbsent:;

		yourself! !

!JSGenerator class methodsFor: 'class initialization' stamp: 'mir 4/10/2018 20:19'!
initializeReservedWords
	"JSGenerator initializeReservedWords"

	ReservedWords := Set new: 197.
	ReservedWords addAll:
	#('abstract', 'as', 'boolean', 'break', 'byte', 'case', 'catch', 'char', 'class', 'continue', 'const', 'debugger', 'default', 'delete', 'do', 'double', 'else', 'enum', 'export', 'extends', 'false', 'final', 'finally', 'float', 'for', 'function', 'goto', 'if', 'implements', 'import', 'in', 'instanceof', 'int', 'interface', 'is', 'long', 'namespace', 'native', 'new', 'null', 'package', 'private', 'protected', 'public', 'return', 'short', 'static', 'super', 'switch', 'synchronized', 'this', 'throw', 'throws', 'transient', 'true', 'try', 'typeof', 'use', 'var', 'void', 'volatile', 'while', 'with')! !

!JSGenerator class methodsFor: 'class initialization' stamp: 'mir 9/4/2018 09:05'!
initializeRewriteMap
	"JSGenerator initializeRewriteMap"

	RewriteMap := (Dictionary new: 128)
		at: #class put: #rewriteClass: ;
		at: #isNil put: #rewriteIsNil: ;
		at: #notNil put: #rewriteNotNil: ;
		at: #whileTrue put: #rewriteWhileTrue: ;
		at: #whileFalse put: #rewriteWhileFalse: ;
		at: #basicValueOrNil put: #rewriteBasicValueOrNil: ; "not sure this is actually used"
		
		at: #whileTrue: put: #rewriteWhileTrueDo: ; "basic need this as a call"
		at: #whileFalse: put: #rewriteWhileFalseDo: ;
		at: #ifNil: put: #rewriteIfNil: ;
		at: #ifNotNil: put: #rewriteIfNotNil: ;

		at: #ifTrue: put: #rewriteIfTrue: ;
		at: #ifFalse: put: #rewriteIfFalse: ;
		at: #ifTrue:ifFalse: put: #rewriteIfTrueIfFalse: ;
		at: #ifFalse:ifTrue: put: #rewriteIfFalseIfTrue: ;

		at: #== put: #rewriteEqEq: ;
		at: #'===' put: #rewriteEqEqEq: ;
		at: #'||' put: #rewriteOr: ;

		at: #basicAt: put: #rewriteBasicAt: ;
		at: #ifUndefined: put: #rewriteIfUndefined: ;
		at: #timesRepeat: put: #rewriteTimesRepeat: ;
		at: #isKindOf: put: #rewriteIsKindOf: ;
		at: #respondsTo: put: #rewriteRespondsTo: ;

		at: #ifNil:ifNotNil: put: #rewriteIfNilIfNotNil: ;
		at: #ifNotNil:ifNil: put: #rewriteIfNotNilIfNil: ;
		at: #basicAt:ifAbsent: put: #rewriteBasicAtIfAbsent: ;
		at: #basicAt:put: put: #rewriteBasicAtPut: ;

		yourself! !

!JSGenerator class methodsFor: 'class initialization' stamp: 'mir 9/4/2018 09:06'!
initializeRewriteValueMap
	"JSGenerator initializeRewriteValueMap"

	RewriteValueMap := (Dictionary new: 128)
		at: #class put: #rewriteClass: ;
		at: #isNil put: #rewriteIsNil: ;
		at: #notNil put: #rewriteNotNil: ;
		at: #whileTrue put: #rewriteValueWhileTrue: ;
		at: #whileFalse put: #rewriteValueWhileFalse: ;
		at: #basicValueOrNil put: #rewriteBasicValueOrNil: ; "not sure this is actually used"
		
		at: #whileTrue: put: #rewriteValueWhileTrueDo: ; "basic need this as a call"
		at: #whileFalse: put: #rewriteValueWhileFalseDo: ;
		at: #ifNil: put: #rewriteIfNil: ;
		at: #ifNotNil: put: #rewriteIfNotNil: ;
"
		at: #ifTrue: put: #rewriteValueIfTrue: ;
		at: #ifFalse: put: #rewriteValueIfFalse: ;
		at: #ifTrue:ifFalse: put: #rewriteValueIfTrueIfFalse: ;
		at: #ifFalse:ifTrue: put: #rewriteValueIfFalseIfTrue: ;
"
		at: #== put: #rewriteEqEq: ;
		at: #'===' put: #rewriteEqEqEq: ;
		at: #'||' put: #rewriteOr: ;

		at: #basicAt: put: #rewriteBasicAt: ;
		at: #ifUndefined: put: #rewriteIfUndefined: ;
		at: #timesRepeat: put: #rewriteValueTimesRepeat: ;
		at: #isKindOf: put: #rewriteIsKindOf: ;
		at: #respondsTo: put: #rewriteRespondsTo: ;

		at: #ifNil:ifNotNil: put: #rewriteIfNilIfNotNil: ;
		at: #ifNotNil:ifNil: put: #rewriteIfNotNilIfNil: ;
		at: #basicAt:ifAbsent: put: #rewriteBasicAtIfAbsent: ;
		at: #basicAt:put: put: #rewriteBasicAtPut: ;

		yourself! !


!JSGenerator class methodsFor: 'instance creation' stamp: 'mir 4/27/2018 14:45'!
internal
	^JSGenerator on: '' writeStream! !

!JSGenerator class methodsFor: 'instance creation' stamp: 'mir 3/16/2018 10:39'!
on: aStream
	| generator |
	generator := self new initialize.
	generator stream: aStream.
	^generator! !


Object subclass: #StCompilationCue
	instanceVariableNames: 'source context receiver class environment'
	classVariableNames: ''
	poolDictionaries: ''
	category: 'Compiler-JS'!
!StCompilationCue commentStamp: 'mir 6/26/2018 21:14' prior: 0!
!


!StCompilationCue methodsFor: 'binding' stamp: 'mir 4/30/2018 17:06'!
bindingOf: aSymbol
	^class bindingOf: aSymbol environment: environment! !

!StCompilationCue methodsFor: 'binding' stamp: 'mir 6/8/2018 17:48'!
literalScannedAs: scannedLiteral notifying: anEncoder
	| key value |
	(scannedLiteral isVariableBinding)
		ifFalse: [^ scannedLiteral].
self halt.
	key := scannedLiteral key.
	value := scannedLiteral value.
	key isNil 
		ifTrue: "###<metaclass soleInstance name>"
			[(self bindingOf: value) ifNotNil:[:assoc|
				 (assoc value isKindOf: Behavior)
					ifTrue: [^ nil->assoc value class]].
			 anEncoder notify: 'No such metaclass'.
			 ^false].
	(key isSymbol)
		ifTrue: "##<global var name>"
			[^ (self bindingOf: key) ifNil:
				[self environment undeclare: key]].
	anEncoder notify: '## must be followed by a non-local variable name'.
	^false
! !


!StCompilationCue methodsFor: 'accessing' stamp: 'cwp 12/26/2012 23:19'!
context
	^ context! !

!StCompilationCue methodsFor: 'accessing' stamp: 'cwp 6/19/2012 11:15'!
environment
	^ environment! !

!StCompilationCue methodsFor: 'accessing' stamp: 'cwp 6/19/2012 11:16'!
getClass
	^ class! !

!StCompilationCue methodsFor: 'accessing' stamp: 'cwp 6/19/2012 11:15'!
receiver
	^ receiver! !

!StCompilationCue methodsFor: 'accessing' stamp: 'mir 4/27/2018 16:33'!
requestor
	^nil! !

!StCompilationCue methodsFor: 'accessing' stamp: 'nice 9/17/2013 23:04'!
sourceStream
	^source! !


!StCompilationCue methodsFor: 'initialization' stamp: 'mir 5/1/2018 16:21'!
initializeWithSource: aString context: aContext receiver: recObject class: aClass environment: stEnvironment
	self initialize.
	source := aString readStream.
	context := aContext.
	receiver := recObject.
	class := aClass.
	environment := stEnvironment! !

"-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- "!

StCompilationCue class
	instanceVariableNames: ''!

!StCompilationCue class methodsFor: 'static compile' stamp: 'mir 4/30/2018 21:52'!
environment: stEnvironment evaluate: aTextOrStream
	^ self basicNew
		initializeWithSource: aTextOrStream 
		context: nil 
		receiver: nil
		class: (stEnvironment bindingOf: #UndefinedObject) 
		environment: stEnvironment! !


!StCompilationCue class methodsFor: 'instance creation' stamp: 'mir 4/9/2018 19:58'!
source: aTextOrStream class: aClass
	^ self basicNew
		initializeWithSource: aTextOrStream 
		context: nil 
		receiver: nil
		class: aClass 
		environment: (aClass ifNotNil: [aClass environment])! !

!StCompilationCue class methodsFor: 'instance creation' stamp: 'mir 4/30/2018 18:28'!
source: aTextOrStream class: aClass environment: stEnvironment
	^ self basicNew
		initializeWithSource: aTextOrStream 
		context: nil 
		receiver: nil
		class: aClass 
		environment: stEnvironment! !


Object subclass: #StCompiler
	instanceVariableNames: 'parser cue'
	classVariableNames: ''
	poolDictionaries: ''
	category: 'Compiler-JS'!
!StCompiler commentStamp: 'mir 6/26/2018 21:14' prior: 0!
!


!StCompiler methodsFor: 'evaluate' stamp: 'mir 4/30/2018 21:52'!
evaluate: textOrStream in: stEnvironment ifFail: failBlock
	"Compiles the sourceStream into a parse tree, then generates code into
	 a method. "
	
	^self
		evaluateCue: (StCompilationCue environment: stEnvironment evaluate: textOrStream)
		ifFail: failBlock! !

!StCompiler methodsFor: 'evaluate' stamp: 'mir 8/10/2018 09:05'!
evaluateCue: aCue ifFail: failBlock
	"Compiles the cue source into a parse tree, then generates code into
	a method. Finally, the compiled method is invoked from here via 	withArgs:executeMethod:, hence the system no longer creates Doit method
	litter on errors."

	| methodNode method generator |
	cue := aCue.
	methodNode := self parser parseDoItCue: cue  ifFail: [^failBlock value].

	generator := JSGenerator internal.
	generator asReceiverWith: [
		methodNode generateOn: generator].
	generator blockInvocation.
	method := generator source.
	^method! !


!StCompiler methodsFor: 'chunk processing' stamp: 'mir 6/8/2018 18:24'!
analyze: messageNode chunk: aString
	| args |
	messageNode isVariableNode
		ifTrue: [^nil].
	args := messageNode arguments collect: [:arg | arg key].
	^StChunk
		from: aString
		receiver: (self extractChunkReceiver: messageNode receiver)
		selector: messageNode selector key
		arguments: args asArray! !

!StCompiler methodsFor: 'chunk processing' stamp: 'mir 6/11/2018 22:32'!
extractChunkReceiver: node
	| receiver |
	node isMessageNode
		ifFalse: [
			^node key = 'nil'
				ifTrue: [nil]
				ifFalse: [node key]].
	"we are likely dealing with a metaclass reference"
	receiver := node receiver key.
	node selector key = 'class'
		ifTrue: [^receiver metaClass]
		ifFalse: [self error: 'no idea']! !

!StCompiler methodsFor: 'chunk processing' stamp: 'mir 4/30/2018 18:27'!
parseChunk: aString in: stEnvironment ifFail: failBlock
	"Compiles the sourceStream into a parse tree, then generates code into
	 a method. "
	
	| methodNode messageNode |
	cue := (StCompilationCue environment: stEnvironment evaluate: aString).
	methodNode := self parser parseDoItCue: cue  ifFail: [^failBlock value].
	messageNode := methodNode doitStatement.
	^self analyze: messageNode chunk: aString! !


!StCompiler methodsFor: 'accessing' stamp: 'mir 4/9/2018 18:04'!
parser

"	parser ifNil: [parser := (cue getClass ifNil: [self class]) newParser]."
	parser ifNil: [parser := StParser new].
	^parser! !

!StCompiler methodsFor: 'accessing' stamp: 'eem 5/15/2008 15:07'!
parser: aParser

	parser := aParser! !


!StCompiler methodsFor: 'compile' stamp: 'mir 7/5/2018 21:52'!
compile: textOrStream in: aClass generateOn: generator
	"Answer a MethodNode for the argument, textOrStream. If the 
	MethodNode can not be created, evaluate failBlock. 
	The MethodNode is the root a parse tree."

	| methodNode |
	methodNode := self
		compileCue: (StCompilationCue
			source: textOrStream
			class: aClass
			environment: StEnvironment bootstrap)
		noPattern: false
		ifFail: [self halt].
	methodNode generateOn: generator
! !

!StCompiler methodsFor: 'compile' stamp: 'mir 4/30/2018 18:28'!
compileMethod: methodSource class: aClass environment: stEnvironment generateOn: generator
	"Answer a MethodNode for the argument, textOrStream. If the 
	MethodNode can not be created, evaluate failBlock. 
	The MethodNode is the root a parse tree."

	| methodNode |
	methodNode := self
		compileCue: (StCompilationCue
			source: methodSource
			class: aClass
			environment: stEnvironment)
		noPattern: false
		ifFail: [self halt].
	methodNode generateOn: generator
! !

!StCompiler methodsFor: 'compile' stamp: 'mir 9/4/2018 16:44'!
compileMethodChunk: methodSource protocol: protocol class: aClass environment: stEnvironment includeSource: includeSource generateOn: generator
	"Answer a MethodNode for the argument, textOrStream. If the 
	MethodNode can not be created, evaluate failBlock. 
	The MethodNode is the root a parse tree."

	| methodNode selector |
	methodNode := self
		compileCue: (StCompilationCue
			source: methodSource
			class: aClass
			environment: stEnvironment)
		noPattern: false
		ifFail: [self halt].
	selector := methodNode selector.
	generator startSmalltalkMethodBinding: aClass selector: selector.
	methodNode generateOn: generator.
	generator methodProtocol: protocol.
	includeSource
		ifTrue: [generator methodSource: methodSource].
	generator endSmalltalkMethodBinding: aClass selector: selector! !


!StCompiler methodsFor: 'private' stamp: 'mir 4/9/2018 19:44'!
compileCue: aCue noPattern: noPattern ifFail: failBlock 
	"Answer a MethodNode corresponding to cue source.
	If the MethodNode can not be created, evaluate failBlock.
	The MethodNode is the root  of a parse tree."
	
	self setCue: aCue.
	^self parser
		parseCue: cue 
		noPattern: noPattern
		ifFail: [^failBlock value]! !

!StCompiler methodsFor: 'private' stamp: 'nice 9/17/2013 22:56'!
setCue: aCue
	cue := aCue! !

"-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- "!

StCompiler class
	instanceVariableNames: ''!

!StCompiler class methodsFor: 'instance creation' stamp: 'mir 9/4/2018 16:44'!
new
	| compiler |
	compiler := super new.
	compiler parser: StParser new.
	^compiler! !


!StCompiler class methodsFor: 'compiling' stamp: 'mir 5/16/2019 12:20'!
compileExpression: textOrString 
	^self compileExpression: textOrString environment: StEnvironment fromEnvironment! !

!StCompiler class methodsFor: 'compiling' stamp: 'mir 5/16/2019 12:20'!
compileExpression: textOrString environment: env
	^self new
		evaluateCue: (StCompilationCue
			source: textOrString
			class: (env bindingOf: #UndefinedObject)
			environment: env)
		ifFail: [nil]! !

!StCompiler class methodsFor: 'compiling' stamp: 'mir 1/24/2019 20:41'!
doIt: textOrString 
	^self evaluate: textOrString! !

!StCompiler class methodsFor: 'compiling' stamp: 'mir 4/27/2018 17:46'!
environment: environment parseChunk: textOrStream
	^ self new
		parseChunk: textOrStream
		in: environment
		ifFail: [^nil]! !

!StCompiler class methodsFor: 'compiling' stamp: 'mir 5/16/2019 12:16'!
evaluate: textOrString 
	| jsDoIt |
	jsDoIt := self compileExpression: textOrString.
	^self jsEvaluate: jsDoIt! !

!StCompiler class methodsFor: 'compiling' stamp: 'mir 1/24/2019 18:04'!
jsEvaluate: jsDoItString
	<primitive:'primEval' module:'SKSmalltalk'>
	^self primitiveFailed. ! !


Object subclass: #StParseNode
	instanceVariableNames: 'comment'
	classVariableNames: 'NodeFalse NodeNil NodeSelf NodeSuper NodeThisContext NodeTrue StdVariables'
	poolDictionaries: ''
	category: 'Compiler-JS'!
!StParseNode commentStamp: 'mir 6/26/2018 21:14' prior: 0!
!


!StParseNode methodsFor: 'comment'!
comment

	^comment! !

!StParseNode methodsFor: 'comment'!
comment: newComment

	comment := newComment! !


!StParseNode methodsFor: 'converting' stamp: 'mir 4/13/2018 16:32'!
asReturnNode
	^StReturnNode new expr: self! !

!StParseNode methodsFor: 'converting' stamp: 'mir 4/25/2018 14:50'!
inlineReturns
	self error: 'should not get here'! !

!StParseNode methodsFor: 'converting' stamp: 'mir 5/31/2018 11:36'!
returnLast
	^self asReturnNode! !


!StParseNode methodsFor: 'encoding'!
encodeSelector: selector

	^nil! !


!StParseNode methodsFor: 'testing'!
assignmentCheck: encoder at: location
	"For StMessageNodes masquerading as variables for the debugger.
	For now we let this through - ie we allow stores ev
	into args.  Should check against numArgs, though."
	^ -1! !

!StParseNode methodsFor: 'testing' stamp: 'mir 9/4/2018 08:52'!
canBeInlinedBlockValue
	^false! !

!StParseNode methodsFor: 'testing'!
canCascade

	^false! !

!StParseNode methodsFor: 'testing' stamp: 'eem 2/3/2011 09:12'!
ensureCanCascade: encoder! !

!StParseNode methodsFor: 'testing' stamp: 'mir 5/3/2019 14:06'!
hasNonLocalBlockReturn: generator
	^false! !

!StParseNode methodsFor: 'testing' stamp: 'mir 5/25/2018 19:17'!
hasNonLocalBlockReturn: generator optimized: parentOptimized
	^false! !

!StParseNode methodsFor: 'testing' stamp: 'mir 3/14/2018 11:25'!
isBlockNode
	^false! !

!StParseNode methodsFor: 'testing'!
isComplex
	"Used for pretty printing to determine whether to start a new line"

	^false! !

!StParseNode methodsFor: 'testing'!
isConstantNumber  "Overridden in StLiteralNode"
	^false! !

!StParseNode methodsFor: 'testing' stamp: 'mir 5/29/2018 12:18'!
isExpression
	^false! !

!StParseNode methodsFor: 'testing' stamp: 'mir 4/25/2018 15:01'!
isIf

	^false! !

!StParseNode methodsFor: 'testing' stamp: 'ls 1/29/2004 21:11'!
isJust: node
	^false! !

!StParseNode methodsFor: 'testing' stamp: 'mir 3/14/2018 11:27'!
isMessageNode
	^false! !

!StParseNode methodsFor: 'testing'!
isReturnSelf

	^false! !

!StParseNode methodsFor: 'testing'!
isReturningIf

	^false! !

!StParseNode methodsFor: 'testing' stamp: 'tk 8/2/1999 18:39'!
isSelfPseudoVariable	
	"Overridden in StVariableNode."
	^false! !

!StParseNode methodsFor: 'testing' stamp: 'mir 4/10/2018 19:51'!
isSuperPseudoVariable	
	"Overridden in StVariableNode."
	^false! !

!StParseNode methodsFor: 'testing' stamp: 'di 10/12/1999 15:28'!
isTemp
	^ false! !

!StParseNode methodsFor: 'testing'!
isUndefTemp
	^ false! !

!StParseNode methodsFor: 'testing'!
isUnusedTemp
	^ false! !

!StParseNode methodsFor: 'testing' stamp: 'mir 3/14/2018 11:27'!
isVariableNode
	^false! !

!StParseNode methodsFor: 'testing' stamp: 'mir 5/29/2018 10:20'!
markNonLocalReturns! !

!StParseNode methodsFor: 'testing'!
nowHasDef  "Ignored in all but StVariableNode"! !

!StParseNode methodsFor: 'testing'!
nowHasRef  "Ignored in all but StVariableNode"! !

!StParseNode methodsFor: 'testing' stamp: 'mir 5/31/2018 11:34'!
returns
	^false! !

!StParseNode methodsFor: 'testing'!
toDoIncrement: ignored
	"Only meant for Messages or Assignments - else return nil"
	^ nil! !


!StParseNode methodsFor: 'private' stamp: 'ls 1/29/2004 21:17'!
ifNilReceiver
	"assuming this object is the receiver of an ifNil:, what object is being asked about?"
	^self! !

!StParseNode methodsFor: 'private' stamp: 'mir 6/8/2018 14:49'!
nextWordFrom: aStream setCharacter: aBlock
	| outStream char |
	outStream := '' writeStream.
	[(aStream peekFor: Character space) 
		or: [aStream peekFor: Character tab]] whileTrue.
	[aStream atEnd
		or:
			[char := aStream next.
			char = Character cr or: [char = Character space]]]
		whileFalse: [outStream nextPut: char].
	aBlock value: char.
	^ outStream contents! !


!StParseNode methodsFor: 'generate' stamp: 'mir 4/10/2018 17:31'!
generateAsReceiverOn: generator
	self generateOn: generator! !

!StParseNode methodsFor: 'generate' stamp: 'mir 5/3/2019 17:09'!
generateBlockBodyOn: generator
	"StCompileException signal: 'Invalid code generation ' , self printString"
	"self shouldNotImplement"
	self generateInlinedBlockValueOn: generator! !

!StParseNode methodsFor: 'generate' stamp: 'mir 8/15/2018 20:36'!
generateInlinedBlockValueOn: generator
	"we have a variable or parameter containing a block (we assume)"
	self generateAsReceiverOn: generator.
	generator blockVariableInvocation! !

!StParseNode methodsFor: 'generate' stamp: 'mir 5/30/2018 10:06'!
generateInlinedOn: generator
	self generateOn: generator! !

!StParseNode methodsFor: 'generate' stamp: 'mir 5/30/2018 10:07'!
generateInlinedValueOn: generator
	self generateOn: generator! !

!StParseNode methodsFor: 'generate' stamp: 'mir 3/16/2018 11:06'!
generateOn: generator
	self subclassResponsibility! !

"-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- "!

StParseNode class
	instanceVariableNames: ''!

!StParseNode class methodsFor: 'class initialization' stamp: 'mir 6/8/2018 12:15'!
initialize
	"StParseNode initialize"
	| encoder |
	StdVariables := Dictionary new: 16.
	StdVariables
		at: 'self' put:  (StLiteralVariableNode new name:  'self' key:  'self');
		at: 'super' put:  (StLiteralVariableNode new name:  'super' key:  'super');
		at: 'nil' put:  (StLiteralVariableNode new name:  'nil' key:  'nil');
		at: 'false' put:  (StLiteralVariableNode new name:  'false' key:  'false');
		at: 'true' put:  (StLiteralVariableNode new name:  'true' key:  'true').

	encoder := StEncoder new.
	encoder initScopeAndLiteralTables.

	NodeNil := encoder encodeVariable: 'nil'.
	NodeTrue := encoder encodeVariable: 'true'.
	NodeFalse := encoder encodeVariable: 'false'.
	NodeSelf := encoder encodeVariable: 'self'.
	NodeSuper := encoder encodeVariable: 'super'
	! !


!StParseNode class methodsFor: 'accessing' stamp: 'eem 8/4/2009 12:34'!
tempSortBlock
	"Answer a block that can sort a set of temporaries into a stable
	 order so that different compilations produce the same results."
	^[:t1 :t2| | be1 be2 bs1 bs2 |
	   t1 index < t2 index "simple sort by index."
	   or: [t1 index = t2 index "complex tie break" 
		  and: [t1 isRemote ~= t2 isRemote
				ifTrue: [t2 isRemote] "put direct temps before indirect temps"
				ifFalse: 
					[((be1 := t1 definingScope blockExtent) isNil
					  or: [(be2 := t2 definingScope blockExtent) isNil])
						ifTrue: [t1 name < t2 name] "only have the name left to go on"
						ifFalse: "put temps from outer scopes before those from inner scopes"
							[(bs1 := be1 first) < (bs2 := be2 first)
							 or: [bs1 = bs2 and: [t1 name < t2 name]]]]]]] "only have the name left to go on"! !


StParseNode subclass: #StAssignmentNode
	instanceVariableNames: 'variable value'
	classVariableNames: ''
	poolDictionaries: ''
	category: 'Compiler-JS'!
!StAssignmentNode commentStamp: 'mir 6/26/2018 21:14' prior: 0!
!


!StAssignmentNode methodsFor: 'equation translation'!
variable
	^variable! !


!StAssignmentNode methodsFor: 'initialize-release'!
toDoIncrement: var
	var = variable ifFalse: [^ nil].
	(value isMemberOf: StMessageNode) 
		ifTrue: [^ value toDoIncrement: var]
		ifFalse: [^ nil]! !

!StAssignmentNode methodsFor: 'initialize-release'!
value
	^ value! !

!StAssignmentNode methodsFor: 'initialize-release'!
variable: aVariable value: expression

	variable := aVariable.
	value := expression! !


!StAssignmentNode methodsFor: 'generate' stamp: 'mir 7/16/2018 21:45'!
generateAsReceiverOn: generator
	generator asReceiverWith: [
		self generateOn: generator]! !

!StAssignmentNode methodsFor: 'generate' stamp: 'mir 5/31/2018 17:02'!
generateOn: generator
	variable generateAssignment: value on: generator! !


!StAssignmentNode methodsFor: 'testing' stamp: 'mir 5/3/2019 14:02'!
hasNonLocalBlockReturn: generator
	^value hasNonLocalBlockReturn: generator! !

!StAssignmentNode methodsFor: 'testing' stamp: 'mir 6/13/2018 17:50'!
hasNonLocalBlockReturn: generator optimized: parentOptimized
	^value hasNonLocalBlockReturn: generator optimized: parentOptimized! !

!StAssignmentNode methodsFor: 'testing' stamp: 'mir 5/29/2018 12:18'!
isExpression
	^value isExpression! !

!StAssignmentNode methodsFor: 'testing' stamp: 'mir 5/8/2019 09:58'!
markNonLocalReturns
	value markNonLocalReturns! !


StParseNode subclass: #StBlockNode
	instanceVariableNames: 'args statements returns temporaries'
	classVariableNames: ''
	poolDictionaries: ''
	category: 'Compiler-JS'!
!StBlockNode commentStamp: 'mir 6/26/2018 21:15' prior: 0!
!


!StBlockNode methodsFor: 'accessing' stamp: 'eem 6/2/2008 14:00'!
addArgument: aStTempVariableNode
	temporaries := temporaries copyWith: aStTempVariableNode! !

!StBlockNode methodsFor: 'accessing' stamp: 'mir 6/8/2018 18:29'!
arguments
	^args ifNil: [#()]! !

!StBlockNode methodsFor: 'accessing' stamp: 'mir 6/8/2018 18:29'!
arguments: argNodes 
	"Decompile."

	args := argNodes! !

!StBlockNode methodsFor: 'accessing' stamp: 'tk 8/4/1999 22:53'!
block
	^ self! !

!StBlockNode methodsFor: 'accessing' stamp: 'mir 6/8/2018 18:29'!
firstArgument
	^ args first! !

!StBlockNode methodsFor: 'accessing' stamp: 'mir 6/8/2018 18:29'!
numberOfArguments

	^args size! !

!StBlockNode methodsFor: 'accessing' stamp: 'mir 4/25/2018 15:00'!
returnLast
	self returns
		ifFalse: 
			["returns := true."
			statements at: statements size put: statements last asReturnNode]! !

!StBlockNode methodsFor: 'accessing' stamp: 'mir 5/25/2018 16:08'!
returnSelfIfNoOther: encoder
	self returns ifTrue:[^self].
	statements last == NodeSelf ifFalse: [
		statements := statements copyWith: (encoder encodeVariable: 'self').
	].
	self returnLast.
! !

!StBlockNode methodsFor: 'accessing'!
statements
	^statements! !

!StBlockNode methodsFor: 'accessing' stamp: 'eem 8/31/2010 12:30'!
temporaries
	^temporaries ifNil: [#()]! !

!StBlockNode methodsFor: 'accessing' stamp: 'sma 2/27/2000 22:37'!
temporaries: aCollection
	temporaries := aCollection! !


!StBlockNode methodsFor: 'initialize-release' stamp: 'mir 6/8/2018 18:29'!
arguments: argNodes statements: statementsCollection returns: returnBool from: encoder
	"Compile."
	args := argNodes.
	statements := statementsCollection size > 0
					ifTrue: [statementsCollection]
					ifFalse: [Array with: NodeNil].
	returns := returnBool! !

!StBlockNode methodsFor: 'initialize-release' stamp: 'mir 6/8/2018 18:29'!
returnNil
	returns := false.
	temporaries := OrderedCollection new.
	args := OrderedCollection new.
	statements := Array with: NodeNil.
	self returnLast! !


!StBlockNode methodsFor: 'generate' stamp: 'mir 4/25/2018 17:20'!
generateAsReceiverOn: generator
	generator asReceiverWith: [
		self generateOn: generator]
	
! !

!StBlockNode methodsFor: 'generate' stamp: 'mir 5/3/2019 14:08'!
generateBlockBodyOn: generator
	self generateInlinedOn: generator! !

!StBlockNode methodsFor: 'generate' stamp: 'mir 9/4/2018 08:52'!
generateInlinedBlockValueOn: generator
	self canBeInlinedBlockValue
		ifTrue: [statements first generateInlinedValueOn: generator]
		ifFalse: [
			self generateAsReceiverOn: generator.
			generator blockInvocation]! !

!StBlockNode methodsFor: 'generate' stamp: 'mir 8/9/2018 09:10'!
generateInlinedOn: generator
	generator generateTemporaries: temporaries.
	statements
		do: [:statement | 
				generator startStatement.
				statement generateOn: generator]
		andBetweenDo: [generator endStatement]! !

!StBlockNode methodsFor: 'generate' stamp: 'mir 6/1/2018 18:50'!
generateInlinedValueOn: generator
	self generateAsReceiverOn: generator! !

!StBlockNode methodsFor: 'generate' stamp: 'mir 5/3/2019 16:57'!
generateMethodBody: generator
	(self methodBodyHasNonLocalBlockReturn: generator)
		ifTrue: [
			generator nonLocalReturnWrapperStart.
			statements do:
				[:statement | 
					generator startStatement.
					statement generateOn: generator.
					generator endStatement].
			generator nonLocalReturnWrapperEnd]
		ifFalse: [
			statements do:
				[:statement | 
					generator startStatement.
					statement generateOn: generator.
					generator endStatement]]! !

!StBlockNode methodsFor: 'generate' stamp: 'mir 5/3/2019 14:06'!
generateOn: generator
	(self returns)
		ifFalse: [self returnLast].
	generator blockFunction: self arguments.
	generator startBlock.
	generator generateTemporaries: temporaries.
	statements do:
		[:statement | 
			generator startStatement.
			statement generateOn: generator.
			generator endStatement].
	generator endBlock! !



!StBlockNode methodsFor: 'testing' stamp: 'mir 5/3/2019 16:59'!
bodyHasNonLocalBlockReturn: generator
	"as we are now in a block, any return is non-local"
	| hasNonLocal |
	hasNonLocal := false.
	statements do: [:each |
		hasNonLocal :=
			(each hasNonLocalBlockReturn: generator optimized: false)
				or: [hasNonLocal]].
	^hasNonLocal! !

!StBlockNode methodsFor: 'testing' stamp: 'mir 6/13/2018 17:52'!
bodyHasNonLocalBlockReturn: generator optimized: optimized
	| hasNonLocal |
	hasNonLocal := false.
	statements do: [:each |
		hasNonLocal :=
			(each hasNonLocalBlockReturn: generator optimized: optimized)
				or: [hasNonLocal]].
	^hasNonLocal! !

!StBlockNode methodsFor: 'testing' stamp: 'mir 5/3/2019 14:08'!
canBeInlinedBlockValue
	^statements size == 1
		and: [statements first isExpression]! !

!StBlockNode methodsFor: 'testing' stamp: 'mir 5/3/2019 14:59'!
hasNonLocalBlockReturn: generator
	"we are in a generic context, optimization has neither been confirmed, nor denied"
	| hasNonLocal |
	"We are not explicitely optimized, so any return is non-local"
	self returns
		ifTrue: [hasNonLocal := true]
		ifFalse: [hasNonLocal := self bodyHasNonLocalBlockReturn: generator].
	hasNonLocal ifTrue: [self markNonLocalReturns].
	^hasNonLocal! !

!StBlockNode methodsFor: 'testing' stamp: 'mir 5/3/2019 14:07'!
hasNonLocalBlockReturn: generator optimized: optimized
	| hasNonLocal |
	hasNonLocal := (self returns and: [optimized not])
		or: [self bodyHasNonLocalBlockReturn: generator optimized: optimized].
	hasNonLocal ifTrue: [self markNonLocalReturns].
	^hasNonLocal! !

!StBlockNode methodsFor: 'testing' stamp: 'mir 3/14/2018 11:25'!
isBlockNode
	^true! !

!StBlockNode methodsFor: 'testing' stamp: 'mir 5/3/2019 12:50'!
isComplex
	self halt.
	^statements size > 1 or: [statements size = 1 and: [statements first isComplex]]! !

!StBlockNode methodsFor: 'testing' stamp: 'mir 5/29/2018 12:20'!
isExpression
	"only an expression if invoked, not in optimized form"
	^false! !

!StBlockNode methodsFor: 'testing'!
isJust: node

	returns ifTrue: [^false].
	^statements size = 1 and: [statements first == node]! !

!StBlockNode methodsFor: 'testing' stamp: 'mir 5/8/2019 09:58'!
markNonLocalReturns
	statements do: [:each | each markNonLocalReturns]! !

!StBlockNode methodsFor: 'testing' stamp: 'mir 5/3/2019 16:59'!
methodBodyHasNonLocalBlockReturn: generator
	"we are in a generic context, optimization has neither been confirmed, nor denied"
	| hasNonLocal |
	hasNonLocal := false.
	statements do: [:each |
		hasNonLocal :=
			(each hasNonLocalBlockReturn: generator)
				or: [hasNonLocal]].
	^hasNonLocal! !

!StBlockNode methodsFor: 'testing'!
returns

	^returns or: [statements last isReturningIf]! !

"-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- "!

StBlockNode class
	instanceVariableNames: ''!

!StBlockNode class methodsFor: 'instance creation' stamp: 'mir 5/25/2018 14:36'!
returnNil
	^ self new returnNil! !

!StBlockNode class methodsFor: 'instance creation' stamp: 'mir 4/13/2018 19:44'!
withJust: aNode
	^ self new statements: (Array with: aNode) returns: false! !


StParseNode subclass: #StCascadeNode
	instanceVariableNames: 'receiver messages'
	classVariableNames: ''
	poolDictionaries: ''
	category: 'Compiler-JS'!
!StCascadeNode commentStamp: 'mir 6/26/2018 21:15' prior: 0!
!


!StCascadeNode methodsFor: 'accessing' stamp: 'eem 9/10/2008 15:15'!
messages
	^messages! !

!StCascadeNode methodsFor: 'accessing' stamp: 'tk 10/22/2000 16:55'!
receiver
	^receiver! !


!StCascadeNode methodsFor: 'testing' stamp: 'mir 5/8/2019 10:25'!
hasNonLocalBlockReturn: generator
	"we are in a generic context, optimization has neither been confirmed, nor denied"
	| hasNonLocal |
	hasNonLocal := receiver hasNonLocalBlockReturn: generator.
	messages do: [:each | 
		hasNonLocal := (each hasNonLocalBlockReturn: generator) or: [hasNonLocal]].
	hasNonLocal ifTrue: [self markNonLocalReturns].
	^hasNonLocal! !

!StCascadeNode methodsFor: 'testing' stamp: 'mir 5/8/2019 10:37'!
hasNonLocalBlockReturn: generator optimized: parentOptimized
	"we are in a generic context, optimization has neither been confirmed, nor denied"
	| hasNonLocal |
	hasNonLocal := receiver hasNonLocalBlockReturn: generator optimized: parentOptimized.
	messages do: [:each | 
		hasNonLocal := (each hasNonLocalBlockReturn: generator optimized: parentOptimized) or: [hasNonLocal]].
	hasNonLocal ifTrue: [self markNonLocalReturns].
	^hasNonLocal! !

!StCascadeNode methodsFor: 'testing' stamp: 'mir 5/8/2019 10:22'!
markNonLocalReturns
	receiver markNonLocalReturns.
	messages do: [:each | each markNonLocalReturns]! !


!StCascadeNode methodsFor: 'initialize-release'!
receiver: receivingObject messages: msgs
	" Transcript show: 'abc'; cr; show: 'def' "

	receiver := receivingObject.
	messages := msgs! !


!StCascadeNode methodsFor: 'generate' stamp: 'mir 6/1/2018 17:26'!
generateOn: generator
	generator asLocalFunctionInvocation: messages with: receiver! !


StParseNode subclass: #StCommentNode
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	category: 'Compiler-JS'!


StParseNode subclass: #StEncoder
	instanceVariableNames: 'scopeTable nTemps supered requestor selector sourceRanges globalSourceRanges cue'
	classVariableNames: ''
	poolDictionaries: ''
	category: 'Compiler-JS'!
!StEncoder commentStamp: 'mir 6/26/2018 21:15' prior: 0!
!


!StEncoder methodsFor: 'encoding'!
cantStoreInto: varName

	^StdVariables includesKey: varName! !

!StEncoder methodsFor: 'encoding' stamp: 'eem 9/5/2009 20:04'!
doItInContextName
	^'ThisContext'! !

!StEncoder methodsFor: 'encoding' stamp: 'mir 5/25/2018 17:46'!
encodeCharacterLiteral: object
	^StLiteralNode new
		name: object
		key: (cue  literalScannedAs: object notifying: self)! !

!StEncoder methodsFor: 'encoding' stamp: 'mir 6/8/2018 17:48'!
encodeLiteral: object
	^StLiteralNode new
		name: object
		key: (cue  literalScannedAs: object notifying: self)! !

!StEncoder methodsFor: 'encoding' stamp: 'mir 5/25/2018 17:47'!
encodeLiteralLiteral: object
	^StLiteralNode new
		name: object
		key: object! !

!StEncoder methodsFor: 'encoding' stamp: 'mir 5/25/2018 17:47'!
encodeNumberLiteral: object
	^StLiteralNode new
		name: object
		key: object! !

!StEncoder methodsFor: 'encoding' stamp: 'mir 5/25/2018 17:53'!
encodeSelector: aSelector
	^StSelectorNode new 
		name: aSelector
		key: aSelector! !

!StEncoder methodsFor: 'encoding' stamp: 'mir 5/25/2018 17:47'!
encodeStringLiteral: object
	^StLiteralNode new
		name: object
		key: object! !

!StEncoder methodsFor: 'encoding' stamp: 'di 12/4/1999 20:09'!
encodeVariable: name
	^ self encodeVariable: name sourceRange: nil ifUnknown: [ self undeclared: name ]! !

!StEncoder methodsFor: 'encoding' stamp: 'ls 1/19/2001 12:59'!
encodeVariable: name ifUnknown: action
	^self encodeVariable: name sourceRange: nil ifUnknown: action! !

!StEncoder methodsFor: 'encoding' stamp: 'mir 6/27/2018 12:26'!
encodeVariable: name sourceRange: range ifUnknown: action
	| varNode |
"	varNode := scopeTable
					at: name
					ifAbsent: 
						[(self lookupInPools: name 
							ifFound: [:assoc | varNode := self global: assoc name: name])
							ifTrue: [varNode]
							ifFalse: [^action value]]."
	varNode := scopeTable at: name ifAbsent: [self lookupInPools: name].
	varNode ifNil: [^action value].

	range ifNotNil:
		[name first isUppercase ifTrue:
			[globalSourceRanges addLast: (Array with: name with: range with: false)]].

	(varNode isTemp and: [varNode scope < 0]) ifTrue:
		[^"OutOfScopeNotification" StCompileException signal
			ifTrue: [action value]
			ifFalse: [self notify: 'out of scope']].
	^varNode! !

!StEncoder methodsFor: 'encoding' stamp: 'cwp 12/27/2012 11:40'!
environment
	"Answer the environment of the current compilation context,
	 be it in a class or global (e.g. a workspace)"
	^cue environment! !

!StEncoder methodsFor: 'encoding' stamp: 'mir 6/25/2018 17:24'!
undeclared: name 
	| undeclared symbol |
	symbol := name asSymbol.
	undeclared := cue environment undeclare: name asSymbol.
	undeclared ifNil: [self notify: 'Undeclared variable: ' , name].
	^StUndeclaredVariableNode new
		name: symbol
		key: undeclared! !


!StEncoder methodsFor: 'error handling' stamp: 'mir 5/16/2019 14:22'!
notify: string
	"Put a separate notifier on top of the requestor's window"
	StCompileException signal: string! !

!StEncoder methodsFor: 'error handling' stamp: 'mir 4/9/2018 20:01'!
notify: string at: location

	| req |
	self halt.
	requestor == nil
		ifFalse: 
			[req := requestor.
			self release.
			req notify: string at: location].
	^false! !


!StEncoder methodsFor: 'initialize-release' stamp: 'mir 4/30/2018 16:50'!
init: aCue notifying: anObject

	self setCue: aCue.
	nTemps := 0.
	supered := false.
	self initScopeAndLiteralTables.
	cue getClass variablesDo:
		[:variableName|
		scopeTable
			at: variableName
			put: (StInstanceVariableNode new name: variableName)].
	sourceRanges := Dictionary new: 32.
	globalSourceRanges := OrderedCollection new: 32
! !

!StEncoder methodsFor: 'initialize-release' stamp: 'mir 8/9/2018 16:16'!
initScopeAndLiteralTables

	scopeTable := StdVariables deepCopy.
	"comments can be left hanging on nodes from previous compilations.
	 probably better than this hack fix is to create the nodes afresh on each compilation."
	scopeTable do:
		[:varNode| varNode comment: nil]! !

!StEncoder methodsFor: 'initialize-release'!
noteSuper

	supered := true! !

!StEncoder methodsFor: 'initialize-release'!
release

	requestor := nil! !


!StEncoder methodsFor: 'results' stamp: 'eem 9/8/2008 18:27'!
tempsAndBlockArgs
	| tempNodes |
	tempNodes := OrderedCollection new.
	scopeTable associationsDo:
		[:assn | | var |
		var := assn value.
		(var isTemp
		 and: [var isMethodArg not
		 and: [var scope = 0 or: [var scope = -1]]]) ifTrue:
			[tempNodes add: var]].
	^tempNodes! !

!StEncoder methodsFor: 'results' stamp: 'eem 8/13/2010 16:51'!
undeclaredTemps 
	^(scopeTable select: [:var | var isVariableNode and: [var isUndeclared]]) values! !

!StEncoder methodsFor: 'results' stamp: 'eem 6/24/2008 14:24'!
unusedTempNames 
	| unused |
	unused := OrderedCollection new.
	scopeTable associationsDo:
		[:assn | | name |
		(assn value isUnusedTemp) ifTrue:
			[name := assn value key.
			 name ~= self doItInContextName ifTrue: [unused add: name]]].
	^ unused! !


!StEncoder methodsFor: 'source mapping' stamp: 'di 12/4/1999 22:27'!
globalSourceRanges

	^ globalSourceRanges! !

!StEncoder methodsFor: 'source mapping'!
noteSourceRange: range forNode: node

	sourceRanges at: node put: range! !

!StEncoder methodsFor: 'source mapping' stamp: 'RAA 8/21/1999 06:52'!
rawSourceRanges

	^ sourceRanges ! !

!StEncoder methodsFor: 'source mapping'!
sourceMap
	"Answer with a sorted set of associations (pc range)."

	^ (sourceRanges keys collect: 
		[:key |  Association key: key pc value: (sourceRanges at: key)])
			asSortedCollection! !

!StEncoder methodsFor: 'source mapping' stamp: 'ar 11/19/2002 14:41'!
sourceRangeFor: node

	^sourceRanges at: node! !


!StEncoder methodsFor: 'temps' stamp: 'mir 8/22/2018 22:58'!
autoBind: name 
	"Declare a block argument as a temp if not already declared."
	| node |
	node := scopeTable 
			at: name
			ifAbsent: 
				[(self lookupInPools: name ifFound: [:assoc | assoc])
					ifTrue: [self warnAboutShadowed: name].
				^ (self reallyBind: name) nowHasDef nowHasRef scope: 1].
	node isTemp
		ifTrue: [node scope >= 0 ifTrue:
					[^ self notify: 'Name "', name , '"already used in this method: ' , cue getClass name , '>>', selector].
				node nowHasDef nowHasRef scope: 1]
		ifFalse: [^ self notify: 'Name "' , name , '" already used in this class'].
	^node! !

!StEncoder methodsFor: 'temps' stamp: 'mir 6/13/2018 17:34'!
bindArg: name 
	"Declare an argument."
	| node |
	nTemps >= 15
		ifTrue: [^self notify: 'Too many arguments'].
	node := self bindTemp: name.
	^ node nowHasDef nowHasRef! !

!StEncoder methodsFor: 'temps' stamp: 'eem 5/30/2008 12:05'!
bindBlockArg: name within: aBlockNode
	"With standard Smalltalk-80 (BlueBook) blocks it used to be legal to use a
	 method temp as a block argument.  This shouldn't be the case with the
	 current compiler, which checks for temp names already being used as
	 block arguments.  But it is easily fooled by local block temps in optimized
	 blocks, e.g.
		false
			ifTrue: [| temp |]
			ifFalse:[[:temp|]]
	Rather than fix this we keep the semantics and fix it in the closure compiler."
	^self autoBind: name! !

!StEncoder methodsFor: 'temps' stamp: 'mir 8/10/2018 14:42'!
bindBlockTemp: name 
	"Declare a temporary block variable; complain if it's not a field or class variable."

	| node |

	node := scopeTable at: name ifAbsent: [^self reallyBind: name].
	node isTemp
		ifTrue: [
			node scope >= 0 ifTrue: [^ self notify: 'Name "' , name , '" already used in this method'].
			node scope: 0]
		ifFalse: [^self notify: 'Name "' , name , '" already used in this class'].
	^node
! !

!StEncoder methodsFor: 'temps' stamp: 'eem 5/30/2008 14:14'!
bindBlockTemp: name within: aBlockNode
	"The BlockContext compiler (the Smalltalk-80 BlueBook compiler)
	 does provide support for ANSI block syntax, but not for ANSI block
	 semantics.  Here all temps live at the same level, the method level.
	 The approach taken to two block-local temps in different blocks is to
	 merge them into a single temp.  e.g.
		expr
			ifTrue: [|temp| self statementOne]
			ifFalse: [|temp| self statementTwo]
	 is effectvely transformed into
		| temp |
		expr
			ifTrue: [self statementOne]
			ifFalse: [self statementTwo]
	 and
		expr do: [:each| | temp | ...].
		expr do: [:each| | temp | ...].
	 is also effectively transformed into
		| temp |
		expr do: [:each|  ...].
		expr do: [:each| ...].

	 The closure compiler treats the former similarly, but not the latter.
	 The indirection through #bindBlockTemp:within: allows the closure StEncoder to do this."
	^self bindBlockTemp: name! !

!StEncoder methodsFor: 'temps' stamp: 'mir 8/9/2018 20:59'!
bindTemp: name 
	"Declare a temporary; error not if a field or class variable."
	scopeTable at: name ifPresent:[:node|
		"When non-interactive raise the error only if its a duplicate"
		node isTemp
			ifTrue:[^self notify: 'Name "' , name , '" already used in this method']
			ifFalse:[self warnAboutShadowed: name]].
	^self reallyBind: name! !

!StEncoder methodsFor: 'temps' stamp: 'mir 8/10/2018 14:43'!
bindTemp: name in: methodSelector
	"Declare a temporary; error not if a field or class variable."
	scopeTable at: name ifPresent:[:node|
		"When non-interactive raise the error only if its a duplicate"
		(node isTemp)
			ifTrue:[^self notify:'Name "' , name , '" already used in this method']
			ifFalse:[Transcript 
				show: '(', name, ' is shadowed in "' , cue getClass printString , '>>' , methodSelector printString , '")']].
	^self reallyBind: name! !

!StEncoder methodsFor: 'temps' stamp: 'mir 3/16/2018 11:12'!
fixTemp: name
	| node |
	node := scopeTable at: name ifAbsent: [].
	node class ~~ StTempVariableNode ifTrue:
		[self error: 'can only fix a floating temp var'].
	node index: nTemps.
	nTemps := nTemps + 1.
	^node! !

!StEncoder methodsFor: 'temps'!
maxTemp

	^nTemps! !

!StEncoder methodsFor: 'temps' stamp: 'mir 4/30/2018 17:57'!
newTemp: name

	nTemps := nTemps + 1.
	^ StTempVariableNode new
		name: name
		scope: 0! !

!StEncoder methodsFor: 'temps' stamp: 'mir 4/9/2018 17:50'!
newUndeclaredTemp: name
	^StUndeclaredVariableNode new name: name! !


!StEncoder methodsFor: 'private' stamp: 'mir 4/9/2018 18:20'!
bindUndeclaredTemp: name
	^scopeTable at: name put: (self newUndeclaredTemp: name)! !

!StEncoder methodsFor: 'private' stamp: 'cwp 12/27/2012 10:25'!
classEncoding
	"This is a hack so that the parser may findout what class it was parsing for when it wants to create a syntax error view."
	^ cue getClass! !

!StEncoder methodsFor: 'private' stamp: 'mir 5/31/2018 17:01'!
classVariable: ref name: name
	^StClassVariableNode new
		name: name
		key: ref! !

!StEncoder methodsFor: 'private' stamp: 'mir 5/31/2018 16:26'!
global: ref name: name
	^StLiteralVariableNode new
		name: name
		key: ref! !

!StEncoder methodsFor: 'private' stamp: 'mir 5/31/2018 18:04'!
lookupInPools: varName
	| binding |
	"we don't really have Symbol in JS,
	but let's go through the motions when running in ST"
	binding := cue bindingOf: varName asSymbol.
	^binding
		ifNotNil: [binding asVariableIn: self]! !

!StEncoder methodsFor: 'private' stamp: 'mir 8/15/2018 21:05'!
lookupInPools: varName ifFound: assocBlock

	^(cue bindingOf: varName)
		ifNil: [false]
		ifNotNil: [:assoc| assocBlock value: assoc]! !

!StEncoder methodsFor: 'private' stamp: 'cwp 12/27/2012 10:24'!
possibleNamesFor: proposedName
	| results |
	results := cue getClass 
		possibleVariablesFor: proposedName 
		continuedFrom: nil.
	^ proposedName correctAgainst: nil continuedFrom: results.
! !

!StEncoder methodsFor: 'private'!
reallyBind: name

	| node |
	node := self newTemp: name.
	scopeTable at: name put: node.
	^node! !

!StEncoder methodsFor: 'private' stamp: 'mir 8/22/2018 22:59'!
setCue: aCue
	cue := aCue! !

!StEncoder methodsFor: 'private' stamp: 'mir 5/2/2018 18:31'!
warnAboutShadowed: name
"	requestor addWarning: name,' is shadowed'."
	selector ifNotNil:
		[Transcript cr; show: cue getClass name,'>>', selector, '(', name,' is shadowed)']! !


!StEncoder methodsFor: 'accessing' stamp: 'eem 8/25/2015 15:39'!
maxIndexableLiterals
	"Answer the maximum number of literals supported by the receiver's
	 bytecode set. This is a nominal value based on the Blue Book bytecode
	 set; subclasses answer a more accurate value."
	^63! !

!StEncoder methodsFor: 'accessing' stamp: 'eem 8/25/2015 15:39'!
maxNumLiterals
	^CompiledMethod maxNumLiterals min: self maxIndexableLiterals! !

!StEncoder methodsFor: 'accessing' stamp: 'mir 3/16/2018 09:32'!
methodNodeClass
	^StMethodNode! !

!StEncoder methodsFor: 'accessing' stamp: 'ar 9/9/2006 12:06'!
selector
	^selector! !

!StEncoder methodsFor: 'accessing' stamp: 'ar 9/9/2006 12:06'!
selector: aSymbol
	selector := aSymbol! !


StParseNode subclass: #StLeafNode
	instanceVariableNames: 'key'
	classVariableNames: ''
	poolDictionaries: ''
	category: 'Compiler-JS'!
!StLeafNode commentStamp: 'mir 6/26/2018 21:15' prior: 0!
!


!StLeafNode methodsFor: 'accessing'!
key

	^key! !


!StLeafNode methodsFor: 'initialize-release' stamp: 'mir 4/30/2018 17:24'!
key: object

	key := object! !


!StLeafNode methodsFor: 'printing' stamp: 'mir 9/4/2018 08:41'!
printOn: stream
	super printOn: stream.
	stream
		nextPut: $(;
		nextPutAll: key asString;
		nextPut: $)! !


!StLeafNode methodsFor: 'private' stamp: 'mir 5/29/2018 12:21'!
isExpression
	^true! !


StLeafNode subclass: #StLiteralNode
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	category: 'Compiler-JS'!
!StLiteralNode commentStamp: 'mir 6/26/2018 21:15' prior: 0!
!


!StLiteralNode methodsFor: 'testing'!
isConstantNumber
	^ key isNumber! !

!StLiteralNode methodsFor: 'testing' stamp: 'mir 3/14/2018 11:26'!
isLiteralNode

	^ true! !

!StLiteralNode methodsFor: 'testing'!
literalValue

	^key! !


!StLiteralNode methodsFor: 'generate' stamp: 'mir 5/24/2018 11:24'!
generateOn: generator
	key generateOn: generator! !


!StLiteralNode methodsFor: 'initialize-release' stamp: 'mir 4/30/2018 17:24'!
name: literal key: object
	"For compatibility with Encoder>>name:key:class:type:set:"
	^self key: object! !


StParseNode subclass: #StMessageNode
	instanceVariableNames: 'receiver selector precedence args'
	classVariableNames: ''
	poolDictionaries: ''
	category: 'Compiler-JS'!
!StMessageNode commentStamp: 'mir 6/26/2018 21:15' prior: 0!
!



!StMessageNode methodsFor: 'initialize-release' stamp: 'mir 6/8/2018 18:33'!
receiver: rcvr selector: aSelector arguments: argList precedence: p from: encoder 
	receiver := rcvr.
	args := argList.
	precedence := p.
	selector := encoder encodeSelector: aSelector! !


!StMessageNode methodsFor: 'converting' stamp: 'mir 5/25/2018 13:03'!
asReturnNode
	^StReturnNode new expr: self! !


!StMessageNode methodsFor: 'accessing' stamp: 'mir 6/8/2018 18:32'!
arguments
	^args! !

!StMessageNode methodsFor: 'accessing' stamp: 'mir 6/8/2018 18:32'!
firstArgument
	^args first! !

!StMessageNode methodsFor: 'accessing'!
receiver
	^receiver! !

!StMessageNode methodsFor: 'accessing' stamp: 'mir 6/1/2018 17:23'!
receiver: aNode
	receiver := aNode! !

!StMessageNode methodsFor: 'accessing' stamp: 'mir 6/8/2018 18:33'!
secondArgument
	^args second! !

!StMessageNode methodsFor: 'accessing'!
selector
	^selector! !


!StMessageNode methodsFor: 'testing' stamp: 'mir 9/4/2018 10:14'!
canBeRewritten: generator
	(#( #whileTrue #whileTrue: #whileFalse #whileFalse) includes: selector key)
		ifTrue: [^receiver isBlockNode]
		ifFalse: [^generator canBeRewritten: selector key]
	! !

!StMessageNode methodsFor: 'testing' stamp: 'mir 5/30/2018 10:44'!
canBeValueRewritten: generator
	^generator canBeValueRewritten: selector key
	! !

!StMessageNode methodsFor: 'testing' stamp: 'mir 5/25/2018 13:13'!
canCascade
	^receiver ~~ NodeSuper! !

!StMessageNode methodsFor: 'testing' stamp: 'mir 9/4/2018 09:04'!
hasInlinedFunction: generator
	"we need to treat whileTrue/False(:) differently here depending on 
	whether we know the receiver is a block which can be inlined.
	The message might otherwise be overriden by the receiver class and can't be inlined here"

	(#( #whileTrue #whileTrue: #whileFalse #whileFalse) includes: selector key)
		ifTrue: [^receiver canBeInlinedBlockValue not]
		ifFalse: [^generator hasInlinedFunction: selector key]
	! !

!StMessageNode methodsFor: 'testing' stamp: 'mir 5/3/2019 14:01'!
hasNonLocalBlockReturn: generator
	"we are in a generic context, optimization has neither been confirmed, nor denied"
	| optimized hasNonLocal |
	(self canBeRewritten: generator)
		ifTrue: [
			"now we need to confirm or deny optimization"
			optimized := (self hasInlinedFunction: generator) not.
			(receiver hasNonLocalBlockReturn: generator optimized: optimized)
				ifTrue: [^true].
			hasNonLocal := false.
			args do: [:each | 
				hasNonLocal := (each hasNonLocalBlockReturn: generator optimized: optimized)
					or: [hasNonLocal]].
			^hasNonLocal]
		ifFalse: [
			"We continue to be in blissful ingnorance"
			(receiver hasNonLocalBlockReturn: generator)
				ifTrue: [^true].
			hasNonLocal := false.
			args do: [:each | 
				hasNonLocal := (each hasNonLocalBlockReturn: generator)
					or: [hasNonLocal]].
			^hasNonLocal]
! !

!StMessageNode methodsFor: 'testing' stamp: 'mir 9/4/2018 09:06'!
hasNonLocalBlockReturn: generator optimized: parentOptimized
	| optimized hasNonLocal |
	optimized := parentOptimized
		and: [(self canBeRewritten: generator) and: [(self hasInlinedFunction: generator) not]].
	(receiver hasNonLocalBlockReturn: generator optimized: optimized)
		ifTrue: [^true].
	hasNonLocal := false.
	args do: [:each | 
			hasNonLocal := (each hasNonLocalBlockReturn: generator optimized: optimized)
				or: [hasNonLocal]].
	^hasNonLocal! !

!StMessageNode methodsFor: 'testing' stamp: 'mir 5/29/2018 12:24'!
isExpression
	^true! !

!StMessageNode methodsFor: 'testing' stamp: 'mir 5/28/2018 17:57'!
isIf
	"todo: needs to be a set"
	^#( 
		ifTrue: ifFalse: ifTrue:ifFalse: ifFalse:ifTrue: 
		"ifNil: ifNotNil: ifNil:ifNotNil: ifNotNil:ifNil:") includes: selector key! !

!StMessageNode methodsFor: 'testing' stamp: 'mir 3/14/2018 11:20'!
isMessageNode
	^true! !

!StMessageNode methodsFor: 'testing' stamp: 'mir 5/25/2018 13:07'!
isNilIf
	^#(ifNil: ifNotNil: ifNil:ifNotNil: ifNotNil:ifNil:) includes: selector key! !

!StMessageNode methodsFor: 'testing' stamp: 'mir 6/8/2018 18:32'!
isReturningIf
	^self isIf
		and: [args first returns
			and: [args size > 1
				and: [args last returns]]]! !

!StMessageNode methodsFor: 'testing' stamp: 'mir 5/8/2019 10:00'!
markNonLocalReturns
	receiver markNonLocalReturns.
	args do: [:each | each markNonLocalReturns]! !

!StMessageNode methodsFor: 'testing' stamp: 'mir 6/8/2018 18:33'!
toDoIncrement: variable
	(receiver = variable and: [selector key = #+]) 
		ifFalse: [^ nil].
	args first isConstantNumber
		ifTrue: [^ args first]
		ifFalse: [^ nil]! !

!StMessageNode methodsFor: 'testing' stamp: 'mir 6/8/2018 18:33'!
toDoLimit: variable
	(receiver = variable and: [selector key = #<= or: [selector key = #>=]]) 
		ifTrue: [^ args first]
		ifFalse: [^ nil]! !


!StMessageNode methodsFor: 'private' stamp: 'mir 5/25/2018 13:04'!
checkBlock: node as: nodeName from: encoder maxArgs: maxArgs
	"Answer true if node is a StBlockNode with at most maxArgs arguments.
	This check is required in order to inline some special messages.
	Notify some undue usage of these special messages."

	node isBlockNode ifFalse: [ ^false ].
	node numberOfArguments <= maxArgs ifTrue: [ ^true ].
	^encoder notify: '<- ', nodeName , ' of ' , selector key , ' has too many arguments'! !

!StMessageNode methodsFor: 'private' stamp: 'acg 1/28/2000 00:57'!
ifNilReceiver

	^receiver! !

!StMessageNode methodsFor: 'private' stamp: 'mir 6/8/2018 18:33'!
inlineReturns
	"block arguments might be variables holding a block"
	args at: 1 put: args first returnLast.
	args size < 2
		ifTrue: [args add: (StBlockNode returnNil)]
		ifFalse: [args at: 2 put: args second returnLast]! !

!StMessageNode methodsFor: 'private'!
precedence

	^precedence! !


!StMessageNode methodsFor: 'generate' stamp: 'mir 6/8/2018 18:32'!
argumentsInEvaluationOrder
	^args! !

!StMessageNode methodsFor: 'generate' stamp: 'mir 5/30/2018 10:10'!
generateAsReceiverOn: generator
	generator asReceiverWith: [
		self generateInlinedValueOn: generator]
! !

!StMessageNode methodsFor: 'generate' stamp: 'mir 5/30/2018 10:24'!
generateInlinedOn: generator
	(self canBeRewritten: generator)
		ifTrue: [	generator rewrite: self]
		ifFalse: [self generateOn: generator]! !

!StMessageNode methodsFor: 'generate' stamp: 'mir 5/3/2019 15:24'!
generateInlinedValueOn: generator
	(self canBeValueRewritten: generator)
		ifTrue: [
			^generator rewriteValue: self].
	"we can't inline optimize in this case"
	receiver isSuperPseudoVariable
		ifTrue: [self generateSuperSendOn: generator]
		ifFalse: [
			receiver generateAsReceiverOn: generator.
			generator methodCall.
			generator selector: selector key.
			generator argumentList: self argumentsInEvaluationOrder]! !

!StMessageNode methodsFor: 'generate' stamp: 'mir 5/3/2019 15:26'!
generateOn: generator
	"receiver is nil cascades"
	receiver isSuperPseudoVariable
		ifTrue: [self generateSuperSendOn: generator]
		ifFalse: [
			(self canBeRewritten: generator)
				ifTrue: [	generator rewrite: self]
				ifFalse: [
					receiver generateAsReceiverOn: generator.
					generator methodCall.
					generator selector: selector key.
					generator argumentList: self argumentsInEvaluationOrder]]! !

!StMessageNode methodsFor: 'generate' stamp: 'mir 4/13/2018 15:26'!
generateSuperSendOn: generator
	"smalltalk.superImplementor(smalltalk.StCompilerTestClass.$klass,'$$new').apply(self, [])"
	generator superImplementor: selector key argumentList: self argumentsInEvaluationOrder! !

"-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- "!

StMessageNode class
	instanceVariableNames: ''!

!StMessageNode class methodsFor: 'class initialization' stamp: 'mir 3/29/2019 17:31'!
defaultOptimizationMap
	"compiler optimization map"

	^#(
		#( 0 #( "selectors without arguments"
			#( #class	'%receiver%.$klass' )
			#( #isNil	'(nil.isNil_(%receiver%))' )
			#( #notNil	'(nil.isNil_(%receiver%)===false)' )
			#( #whileTrue #receiverIsBlockNoArguments: '(function(){while(%receiver%()){};return nil})()' )
			#( #whileFalse #receiverIsBlockNoArguments: '(function(){while(!!!!%receiver%()){};return nil})()' )
			#( #basicValueOrNil '(function(){var $1$;return (nil.isNil_($1$ = %receiver%)) ? nil : $1$;})()' )
		) )
		#( 1 #( "one argument selectors and operations"
			#( #whileTrue: #allBlockNoArguments: '(function(){while(%receiver%()){%arg1%()};return nil})()' )
			#( #whileFalse: #allBlockNoArguments: '(function(){while(!!!!%receiver%()){%arg1%()};return nil})()' )
			#( #ifNil: #hasBlockArguments: '(function(){var $1$;return (nil.isNil_($1$ = %receiver%)) ? %arg1%() : $1$;})()' )
			#( #ifNotNil: #hasBlockArguments: '(function(){var $1$;return (nil.isNil_($1$ = %receiver%)===false) ? %arg1%() : $1$;})()' )
			#( #==	'(nil.is_eqeq_(%receiver%,%arg1%))' )
			#( #===	'(%receiver% === %arg1%)' )
			#( #||	'(%receiver% || %arg1%)' )
			#( #basicAt:	'((function(){var $1$=%receiver%[%arg1%];if(nil.isNil_($1$))return nil;return $1$;})())' )
			#( #ifUndefined: #hasBlockNoArguments: '(function(){var $1$ = %receiver%;if (typeof ($1$) == "undefined") return %arg1%(); return $1$;})()' )
			#( #timesRepeat: #hasBlockNoArguments: '(function(){for(var $1$=%receiver%;$1$>0;$1$--){%arg1%()};return nil})()' )
			#( #isKindOf: 'smalltalk.is_kindOf_(%receiver%,(%arg1%))' )
			#( #respondsTo: 'smalltalk.responds_to_(%receiver%,(%arg1%))' )
		) )
		#( 2 #( "two argument messages and operations"
			#( #ifNil:ifNotNil: #hasBlockNoArguments: '(nil.isNil_(%receiver%)) ? %arg1%() : %arg2%()' )
			#( #ifNotNil:ifNil: #hasBlockNoArguments: '(nil.isNil_(%receiver%)===false) ? %arg1%() : %arg2%()' )
			#( #basicAt:ifAbsent: '((function(){var $1$=%receiver%[%arg1%];if(nil.isNil_($1$))return (%arg2%.value());return $1$;})())' )
			#( #basicAt:put: '(%receiver%[%arg1%]=(%arg2%))' )
		) )
)! !

!StMessageNode class methodsFor: 'class initialization' stamp: 'mir 5/25/2018 18:57'!
initialize
	"StMessageNode initialize"
! !


StParseNode subclass: #StMethodNode
	instanceVariableNames: 'selectorOrFalse precedence args block primitive encoder temporaries sourceText locationCounter localsPool'
	classVariableNames: ''
	poolDictionaries: ''
	category: 'Compiler-JS'!
!StMethodNode commentStamp: 'mir 6/26/2018 21:15' prior: 0!
!


!StMethodNode methodsFor: 'initialize-release' stamp: 'tk 8/3/1999 12:47'!
block
	^ block! !

!StMethodNode methodsFor: 'initialize-release' stamp: 'mir 6/8/2018 18:34'!
selector: selOrFalse arguments: argList precedence: p temporaries: temps block: blk encoder: anEncoder primitive: prim
	"Initialize the receiver with respect to the arguments given."

	encoder := anEncoder.
	selectorOrFalse := selOrFalse.
	precedence := p.
	args := argList.
	temporaries := temps.
	block := blk.
	primitive := prim! !

!StMethodNode methodsFor: 'initialize-release' stamp: 'ajh 1/22/2003 17:53'!
sourceText: stringOrText

	sourceText := stringOrText! !


!StMethodNode methodsFor: 'accessing' stamp: 'mir 6/8/2018 18:33'!
arguments
	"For transformations etc, not used in compilation"
	^args! !

!StMethodNode methodsFor: 'accessing' stamp: 'mir 6/8/2018 18:33'!
arguments: aSequence
	"For transformations etc, not used in compilation"
	args := aSequence! !

!StMethodNode methodsFor: 'accessing' stamp: 'md 7/27/2006 19:12'!
body
	^block! !

!StMethodNode methodsFor: 'accessing' stamp: 'mir 4/27/2018 18:09'!
doitStatement
	"Assume this is a doit, find the the first statement and return the message node"
	| statements returnNode |
	self selector == #doIt ifFalse: [^nil].
	block ifNil: [^nil].
	statements := block statements.
	statements size == 1 ifFalse: [^nil].
	returnNode := statements first.
	^returnNode expr! !

!StMethodNode methodsFor: 'accessing' stamp: 'ajh 1/22/2003 17:39'!
methodClass

	^ encoder classEncoding! !

!StMethodNode methodsFor: 'accessing' stamp: 'mir 6/8/2018 16:10'!
selector 
	"Answer the message selector for the method represented by the receiver."

	(selectorOrFalse isSymbol)
		ifTrue: [^selectorOrFalse].
	^selectorOrFalse key! !

!StMethodNode methodsFor: 'accessing' stamp: 'mir 3/16/2018 09:35'!
selector: symbol

	selectorOrFalse := symbol! !

!StMethodNode methodsFor: 'accessing' stamp: 'mir 6/27/2018 12:47'!
selectorNode
	"Answer a SelectorNode for the message selector of the method represented by the receiver."

	^(selectorOrFalse isKindOf: StSelectorNode)
		ifTrue: [selectorOrFalse]
		ifFalse: [StSelectorNode new key: selectorOrFalse]! !

!StMethodNode methodsFor: 'accessing' stamp: 'ajh 1/24/2003 17:41'!
sourceText

	^ sourceText ifNil: [self printString]! !

!StMethodNode methodsFor: 'accessing' stamp: 'eem 7/21/2009 15:59'!
temporaries
	"For transformations etc, not used in compilation"
	^temporaries! !

!StMethodNode methodsFor: 'accessing' stamp: 'eem 7/21/2009 15:59'!
temporaries: aSequence
	"For transformations etc, not used in compilation"
	temporaries := aSequence! !


!StMethodNode methodsFor: 'converting' stamp: 'ar 4/17/2010 16:50'!
decompileString 
	"Answer a string description of the parse tree whose root is the receiver."

	^self fullPrintString
! !

!StMethodNode methodsFor: 'converting' stamp: 'eem 5/6/2008 15:17'!
decompileText 
	"Answer a string description of the parse tree whose root is the receiver."

	^self asColorizedSmalltalk80Text! !

!StMethodNode methodsFor: 'converting' stamp: 'eem 9/27/2011 15:15'!
ensureNotQuick
	"If the receiver is quick (can be generated as a Quick method, ^self,^inst var or ^ special constant)
	 make it not so.  This is used to create break-pointable versions of quick methods.   Answer if the
	 receiver was quick."
	^block ensureNotQuick: encoder! !


!StMethodNode methodsFor: 'source mapping' stamp: 'eem 6/4/2008 19:21'!
rawSourceRanges

	^self rawSourceRangesAndMethodDo: [:rawSourceRanges :method| rawSourceRanges]! !

!StMethodNode methodsFor: 'source mapping' stamp: 'nice 2/23/2011 21:50'!
rawSourceRangesAndMethodDo: aBinaryBlock
	"Evaluate aBinaryBlock with the rawSourceRanges and method generated from the receiver."

	| methNode method |
	methNode := encoder classEncoding newParser
					encoderClass: encoder class;
					parse: (sourceText "If no source, use decompile string as source to map from"
							ifNil: [self decompileString]
							ifNotNil: [sourceText])
					class: self methodClass.
	method := methNode generate.  "set bytecodes to map to"
	^aBinaryBlock
		value: methNode encoder rawSourceRanges
		value: method! !


!StMethodNode methodsFor: 'generate' stamp: 'mir 5/3/2019 15:41'!
generateOn: generator
	[
	generator methodClass: self methodClass selector: self selector.
	generator argumentList: self arguments.

	generator startBlock.
	generator generateTemporaries: temporaries.
	primitive ifNotNil: [primitive generateOn: generator].
	generator defineSelf.
	block generateMethodBody: generator.
	generator endBlock]
		on: StCompileException
		do: [:ex | StCompileException signal: ex messageText]! !


Object subclass: #StPragma
	instanceVariableNames: 'method keyword args'
	classVariableNames: ''
	poolDictionaries: ''
	category: 'Compiler-JS'!
!StPragma commentStamp: 'mir 6/26/2018 21:16' prior: 0!
!


!StPragma methodsFor: 'accessing-method' stamp: 'lr 1/20/2006 02:04'!
method
	"Answer the compiled-method containing the pragma."
	
	^ method! !

!StPragma methodsFor: 'accessing-method' stamp: 'lr 1/20/2006 02:08'!
methodClass
	"Answer the class of the method containing the pragma."
	
	^ method methodClass! !

!StPragma methodsFor: 'accessing-method' stamp: 'eem 12/1/2008 10:43'!
selector
	"Answer the selector of the method containing the pragma.
	 Do not confuse this with the selector of the pragma's message pattern."
	
	^method selector! !



!StPragma methodsFor: 'initialization' stamp: 'mir 6/9/2018 10:49'!
setArguments: anArray
	args := anArray! !

!StPragma methodsFor: 'initialization' stamp: 'lr 1/20/2006 00:53'!
setKeyword: aSymbol
	keyword := aSymbol! !

!StPragma methodsFor: 'initialization' stamp: 'lr 1/19/2006 23:39'!
setMethod: aCompiledMethod
	method := aCompiledMethod! !


!StPragma methodsFor: 'testing' stamp: 'mir 6/9/2018 10:49'!
hasLiteral: aLiteral
	^keyword == aLiteral 
	   or: [(args hasLiteral: aLiteral)
		or: [keyword == #hasLiteralTest: and: [
			self methodClass theNonMetaClass perform: args first with: aLiteral]]]! !

!StPragma methodsFor: 'testing' stamp: 'mir 6/9/2018 10:49'!
hasLiteralSuchThat: aBlock
	"Answer true if litBlock returns true for any literal in the receiver, even if embedded in further array structure.
	 This method is only intended for private use by CompiledMethod hasLiteralSuchThat:"
	^(aBlock value: keyword)
	   or: [args hasLiteralSuchThat: aBlock]! !


!StPragma methodsFor: 'comparing' stamp: 'mir 6/9/2018 10:49'!
= anObject 
	^self class == anObject class
	  and: [keyword == anObject keyword
	  and: [args = anObject arguments]]! !

!StPragma methodsFor: 'comparing' stamp: 'mir 6/9/2018 10:49'!
analogousCodeTo: anObject 
	^self class == anObject class
	  and: [keyword == anObject keyword
	  and: [args = anObject arguments]]! !

!StPragma methodsFor: 'comparing' stamp: 'mir 6/9/2018 10:49'!
hash
	^keyword hash + args hash! !


!StPragma methodsFor: 'accessing-pragma' stamp: 'lr 1/20/2006 02:10'!
argumentAt: anInteger
	"Answer one of the arguments of the pragma."
	
	^ self arguments at: anInteger.! !

!StPragma methodsFor: 'accessing-pragma' stamp: 'mir 6/9/2018 10:49'!
arguments
	"Answer the arguments of the receiving pragma. For a pragma defined as <key1: val1 key2: val2> this will answer #(val1 val2)."
	
	^ args! !

!StPragma methodsFor: 'accessing-pragma' stamp: 'eem 12/1/2008 10:42'!
key
	"Answer the keyword of the pragma (the selector of its message pattern).
	 This accessor provides polymorphism with Associations used for properties."
	^keyword! !

!StPragma methodsFor: 'accessing-pragma' stamp: 'eem 12/1/2008 10:42'!
keyword
	"Answer the keyword of the pragma (the selector of its message pattern).
	 For a pragma defined as <key1: val1 key2: val2> this will answer #key1:key2:."
	
	^ keyword! !

!StPragma methodsFor: 'accessing-pragma' stamp: 'lr 1/19/2006 20:55'!
message
	"Answer the message of the receiving pragma."
	
	^ Message selector: self keyword arguments: self arguments. ! !

!StPragma methodsFor: 'accessing-pragma' stamp: 'lr 1/20/2006 02:10'!
numArgs
	"Answer the number of arguments in the pragma."

	^ self arguments size.! !

"-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- "!

StPragma class
	instanceVariableNames: ''!

!StPragma class methodsFor: 'private' stamp: 'lr 1/20/2006 00:34'!
keyword: aSymbol arguments: anArray
	^ self new
		setKeyword: aSymbol;
		setArguments: anArray;
		yourself.! !

!StPragma class methodsFor: 'private' stamp: 'lr 1/20/2006 08:50'!
withPragmasIn: aClass do: aBlock
	aClass selectorsAndMethodsDo: [ :selector :method | method pragmas do: aBlock ].! !

!StPragma class methodsFor: 'private' stamp: 'mir 3/16/2018 13:17'!
withStPragmasIn: aClass do: aBlock
	aClass selectorsAndMethodsDo: [ :selector :method | method pragmas do: aBlock ].! !


!StPragma class methodsFor: 'instance creation' stamp: 'eem 11/29/2008 14:00'!
for: aMethod selector: aSelector arguments: anArray
	^self new
		setMethod: aMethod;
		setKeyword: aSelector;
		setArguments: anArray;
		yourself! !


StParseNode subclass: #StPrimitiveNode
	instanceVariableNames: 'module primitive'
	classVariableNames: ''
	poolDictionaries: ''
	category: 'Compiler-JS'!

!StPrimitiveNode methodsFor: 'generate' stamp: 'mir 11/7/2018 08:09'!
generateOn: generator
	generator generatePrimitiveDirect: primitive module: module! !


!StPrimitiveNode methodsFor: 'initialize-release' stamp: 'mir 4/13/2018 18:20'!
module: moduleName primitive: primitiveName
	module := moduleName.
	primitive := primitiveName! !


StParseNode subclass: #StReturnNode
	instanceVariableNames: 'expr nonLocal'
	classVariableNames: ''
	poolDictionaries: ''
	category: 'Compiler-JS'!
!StReturnNode commentStamp: 'mir 6/26/2018 21:15' prior: 0!
!


!StReturnNode methodsFor: 'converting' stamp: 'mir 3/15/2018 08:06'!
asReturnNode! !


!StReturnNode methodsFor: 'initialize-release' stamp: 'mir 5/29/2018 10:22'!
expr: e
	nonLocal := false.
	expr := e! !


!StReturnNode methodsFor: 'generate' stamp: 'mir 8/20/2018 17:26'!
generateBlockBodyOn: generator
	nonLocal
		ifTrue: [generator nonLocalReturnWith: [expr generateBlockBodyOn: generator]]
		ifFalse: [
			generator return.
			expr generateBlockBodyOn: generator]! !

!StReturnNode methodsFor: 'generate' stamp: 'mir 8/15/2018 20:13'!
generateInlinedBlockValueOn: generator
	nonLocal
		ifTrue: [generator nonLocalReturnWith: [expr generateInlinedBlockValueOn: generator]]
		ifFalse: [
			generator return.
			expr generateInlinedBlockValueOn: generator]! !

!StReturnNode methodsFor: 'generate' stamp: 'mir 5/3/2019 15:26'!
generateOn: generator
	nonLocal
		ifTrue: [generator nonLocalReturnWith: [expr generateInlinedValueOn: generator]]
		ifFalse: [
			expr isIf
				ifTrue: [
					expr inlineReturns.
					expr generateOn: generator]
				ifFalse: [
					generator return.
					expr generateInlinedValueOn: generator]]! !


!StReturnNode methodsFor: 'private' stamp: 'yo 8/2/2004 17:21'!
expr

	^ expr.
! !


!StReturnNode methodsFor: 'testing' stamp: 'mir 5/3/2019 14:17'!
hasNonLocalBlockReturn: generator
	^expr hasNonLocalBlockReturn: generator! !

!StReturnNode methodsFor: 'testing' stamp: 'mir 5/3/2019 13:04'!
hasNonLocalBlockReturn: generator optimized: parentOptimized
	^expr hasNonLocalBlockReturn: generator optimized: parentOptimized! !

!StReturnNode methodsFor: 'testing' stamp: 'mir 8/15/2018 20:58'!
isExpression
	^nonLocal not! !

!StReturnNode methodsFor: 'testing'!
isReturnSelf

	^expr == NodeSelf! !

!StReturnNode methodsFor: 'testing' stamp: 'mir 5/3/2019 14:11'!
markNonLocalReturns
	nonLocal := true.
	expr markNonLocalReturns! !


Object subclass: #StScanner
	instanceVariableNames: 'source mark hereChar aheadChar token tokenType currentComment buffer typeTable'
	classVariableNames: 'AllowBlockArgumentAssignment AllowUnderscoreAssignments AllowUnderscoreSelectors AllowUnicharSymbol DoItCharacter TypeTable'
	poolDictionaries: ''
	category: 'Compiler-JS'!
!StScanner commentStamp: 'mir 6/26/2018 21:16' prior: 0!
!


!StScanner methodsFor: 'error handling' stamp: 'nice 4/2/2010 19:36'!
ambiguousSelector: aString inRange: anInterval
	"Compile with backward compatibility: $- is part of literal argument.."
	
	token := token asSymbol.
	^self! !

!StScanner methodsFor: 'error handling'!
notify: string 
	"Refer to the comment in Object|notify:." 
	self error: string! !

!StScanner methodsFor: 'error handling' stamp: 'nice 2/25/2010 02:56'!
notify: string at: posiiton
	"Parser compatible message"
	 
	^self notify: string ! !

!StScanner methodsFor: 'error handling'!
offEnd: aString 
	"Parser overrides this"

	^self notify: aString! !


!StScanner methodsFor: 'expression types'!
advance

	| prevToken |
	prevToken := token.
	self scanToken.
	^prevToken! !

!StScanner methodsFor: 'expression types' stamp: 'nice 8/13/2012 23:30'!
scanAllTokenPositionsInto: aBlock
	"Evaluate aBlock with the start and end positions of all separate non-white-space tokens, including comments."

	| lastMark |
	lastMark := 1.
	[currentComment ifNotNil:
		[currentComment do:
			[:cmnt| | idx |
			 idx := source originalContents indexOfSubCollection: cmnt startingAt: lastMark.
			 (idx > 0 and: [idx < mark]) ifTrue:
				[aBlock value: idx - 1 value: (lastMark := idx + cmnt size)]].
		 currentComment := nil].
	mark ifNotNil:
		[(token == #- 
		  and: [(self typeTableAt: hereChar) == #xDigit]) ifTrue:
			[| savedMark |
			 savedMark := mark.
			 self scanToken.
			 token := token negated.
			 mark := savedMark].
		"Compensate for the fact that the parser uses two character lookahead.  Normally we must
		  remove the extra two characters.  But this mustn't happen for the last token at the end of stream."
		 aBlock
			value: mark
			value: source position - (aheadChar == DoItCharacter
				ifTrue: [hereChar == DoItCharacter
					ifTrue: [0]
					ifFalse: [1]]
				ifFalse: [2])].
	 (tokenType == #rightParenthesis
	  or: [tokenType == #doIt]) ifTrue:
		[^self].
	tokenType == #leftParenthesis
		ifTrue: 
			[self scanToken; scanAllTokenPositionsInto: aBlock]
		ifFalse: 
			[(tokenType == #word or: [tokenType == #keyword or: [tokenType == #colon]])
				ifTrue: 
					[self scanLitWord.
					 token == #true ifTrue: [token := true].
					 token == #false ifTrue: [token := false].
					 token == #nil ifTrue: [token := nil]]
				ifFalse:
					[(token == #- 
					  and: [(self typeTableAt: hereChar) == #xDigit])
						ifTrue: 
							[self scanToken.
							 token := token negated]]].
		self scanToken ] repeat! !

!StScanner methodsFor: 'expression types' stamp: 'ul 3/15/2011 04:02'!
scanLitByteVec
	| stream |
	stream := (ByteArray new: 16) writeStream.
	[ tokenType == #rightBracket or: [ tokenType == #doIt ] ] whileFalse: [
		tokenType == #word
			ifTrue: [ self scanLitWord ].
		(token isInteger and: [ token between: 0 and: 255 ])
			ifFalse: [ ^ self offEnd: '8-bit integer or right bracket expected' ].
		stream nextPut: token.
		self scanToken ].
	token := stream contents! !

!StScanner methodsFor: 'expression types' stamp: 'mir 8/15/2018 15:04'!
scanLitVec
	| s |
	s := (Array new: 16) writeStream.
	[tokenType == #rightParenthesis or: [tokenType == #doIt]] whileFalse:
		[tokenType == #leftParenthesis
			ifTrue: 
				[self scanToken; scanLitVec]
			ifFalse: 
				[(tokenType == #word or: [tokenType == #keyword or: [tokenType == #colon]])
					ifTrue: 
						[self scanLitWord.
						token == #true ifTrue: [token := true].
						token == #false ifTrue: [token := false].
						token == #nil ifTrue: [token := nil]]
					ifFalse: [
						(token = #- 
						and: [(self typeTableAt: hereChar) == #xDigit])
						ifTrue: [
							self scanToken.
							 token := token negated]
						ifFalse: [(token isCharacter and: [tokenType ~~ #character])
							ifTrue: [token := token asSymbol]
							ifFalse: []]]].
		s nextPut: token.
		self scanToken].
	token := s contents! !

!StScanner methodsFor: 'expression types' stamp: 'ul 4/3/2011 02:11'!
scanLitWord
	"Accumulate keywords and asSymbol the result."

	token := (String streamContents: [ :stream |
		stream nextPutAll: token.
		[ (self typeTableAt: hereChar) == #xLetter ] whileTrue: [
			self xLetter.
			stream nextPutAll: token ] ]) asSymbol! !

!StScanner methodsFor: 'expression types' stamp: 'mir 6/8/2018 14:37'!
scanStringStruct

	| s |
	s := (Array new: 16) writeStream.
	[tokenType == #rightParenthesis or: [tokenType == #doIt]]
		whileFalse: 
			[tokenType == #leftParenthesis
				ifTrue: 
					[self scanToken; scanStringStruct]
				ifFalse: 
					[tokenType == #word ifFalse:
						[^self error: 'only words and parens allowed']].
			s nextPut: token.
			self scanToken].
	token := s contents! !

!StScanner methodsFor: 'expression types' stamp: 'nice 9/5/2013 23:28'!
scanToken

	[(tokenType := self typeTableAt: hereChar) == #xDelimiter]
		whileTrue: [self step].  "Skip delimiters fast, there almost always is one."
	mark := aheadChar == DoItCharacter
		ifTrue: [hereChar == DoItCharacter
			ifTrue: [source position + 1]
			ifFalse: [source position]]
		ifFalse: [source position - 1].
	(tokenType at: 1) == $x "x as first letter"
		ifTrue: [self perform: tokenType "means perform to compute token & type"]
		ifFalse: [token := self step "else just unique the first char"].
	^token! !

!StScanner methodsFor: 'expression types' stamp: 'ul 3/27/2011 23:31'!
step

	| c |
	c := hereChar.
	hereChar := aheadChar.
	source atEnd
		ifTrue: [aheadChar := DoItCharacter]
		ifFalse: [aheadChar := source next].
	^c! !


!StScanner methodsFor: 'initialize-release' stamp: 'ul 12/6/2009 19:57'!
initStScannerForTokenization
	"Use a version of typeTable that doesn't raise xIllegal when enocuntering an _"
	| underscoreIndex |
	underscoreIndex := typeTable identityIndexOf: #xUnderscore ifAbsent: [^self].
	typeTable := typeTable copy.
	typeTable at: underscoreIndex put: #xUnderscoreForTokenization! !

!StScanner methodsFor: 'initialize-release' stamp: 'mir 6/8/2018 14:50'!
initialize

	super initialize.
	buffer := '' writeStream.
	typeTable := TypeTable! !

!StScanner methodsFor: 'initialize-release'!
scan: inputStream 
	"Bind the input stream, fill the character buffers and first token buffer."

	source := inputStream.
	self step.
	self step.
	self scanToken! !


!StScanner methodsFor: 'multi-character scans' stamp: 'nice 2/9/2012 14:32'!
typeTableAt: aCharacter
	^typeTable
		at: aCharacter charCode
		ifAbsent:
			[aCharacter == DoItCharacter
				ifTrue: [#doIt]
				ifFalse: [#xLetter]]! !

!StScanner methodsFor: 'multi-character scans' stamp: 'mir 3/29/2019 17:32'!
xBinary

	| startOfToken |
	tokenType := #binary.
	startOfToken := mark.
	token := String with: self step.
	[(self typeTableAt: hereChar) == #xBinary or: [(self typeTableAt: hereChar) == #verticalBar]] whileTrue:
		[(hereChar == $- and: [(self typeTableAt: aheadChar) == #xDigit])
			ifTrue: [^self ambiguousSelector: (token , '-')
					inRange: (startOfToken to: source position - 1).].
		token := token, (String with: self step)].
	"ugly hack to make \\\\ selector parsing work in JS"
	token = '%5C%5C%5C%5C' unescaped
		ifTrue: [token := '%5C%5C' unescaped].
	token := token asSymbol! !

!StScanner methodsFor: 'multi-character scans' stamp: 'ul 3/27/2011 23:32'!
xColon
	"Allow := for assignment"
	
	aheadChar == $= ifTrue:
		[self step.
		tokenType := #leftArrow.
		self step.
		^ token := #':='].
	"Otherwise, just do what normal scan of colon would do"
	tokenType := #colon.
	^ token := self step asSymbol! !

!StScanner methodsFor: 'multi-character scans'!
xDelimiter
	"Ignore blanks, etc."

	self scanToken! !

!StScanner methodsFor: 'multi-character scans' stamp: 'mir 8/14/2018 22:18'!
xDigit
	"Form a number."
	| numberString |
	tokenType := #number.
	aheadChar == DoItCharacter
		ifTrue: [source skip: -1 "Read off the end last time"]
		ifFalse: [source skip: -2].
	numberString := self scanNumberString: source.
	token := numberString asNumber.
"	[token := Number readFrom: source] on: Error do: [ :ex | self notify: ex description].
"
"	token := (SqNumberParser on: source)
		failBlock: [:errorString :position | self notify: errorString at:position];
		nextNumber.
"
	self step; step! !

!StScanner methodsFor: 'multi-character scans' stamp: 'nice 2/22/2012 03:22'!
xDollar
	"Form a Character literal."

	aheadChar == DoItCharacter
		ifTrue:
			[mark := mark + 1. "Let the notification lie behind the dollar"
			^self offEnd: 'A Character was expected'].
	self step. "pass over $"
	token := self step.
	tokenType := #character! !

!StScanner methodsFor: 'multi-character scans' stamp: 'mir 6/8/2018 18:00'!
xDoubleQuote
    "Collect a comment."

	buffer resetToStart.
	self step.
	[ hereChar == $" ] whileFalse: [
		hereChar == DoItCharacter ifTrue: [
			^self offEnd: 'Unmatched comment quote' ].
		buffer nextPut: self step ].
	self step.
	(currentComment ifNil: [ 
		currentComment := OrderedCollection new ])
			add: buffer contents.
	self scanToken! !

!StScanner methodsFor: 'multi-character scans' stamp: 'nice 7/25/2010 12:23'!
xIllegal
	"An illegal character was encountered"
	self notify: 'Illegal character (char code ' , hereChar charCode , ' ' , hereChar charCode storeStringHex , ')' at: mark! !

!StScanner methodsFor: 'multi-character scans' stamp: 'mir 6/8/2018 18:01'!
xLetter
	"Form a word or keyword."

	| type |
	buffer resetToStart.
	[(type := self typeTableAt: hereChar) == #xLetter
		or: [type == #xDigit
		or: [type == #xUnderscore and:[self allowUnderscoreSelectors]]]] whileTrue:
			["open code step for speed"
			buffer nextPut: hereChar.
			hereChar := aheadChar.
			aheadChar := source atEnd
							ifTrue: [DoItCharacter]
							ifFalse: [source next]].
	tokenType := (type == #xColon and: [aheadChar ~~ $=])
					ifTrue: 
						[buffer nextPut: self step.
						"Allow any number of embedded colons in literal symbols"
						[(self typeTableAt: hereChar) == #xColon] whileTrue:
							[buffer nextPut: self step].
						#keyword]
					ifFalse: 
						[#word].
	token := buffer contents! !

!StScanner methodsFor: 'multi-character scans' stamp: 'nice 9/6/2013 01:45'!
xLitQuote
	"Symbols and vectors: #(1 (4 5) 2 3) #ifTrue:ifFalse: #'abc'."
	| start |
	start := mark.
	self step. "litQuote"
	self scanToken.
	tokenType == #leftParenthesis
		ifTrue: [self scanToken; scanLitVec.
			mark := start + 1.
			tokenType == #doIt
				ifTrue: [self offEnd: 'Unmatched parenthesis']]
		ifFalse: [tokenType == #leftBracket
				ifTrue: [self scanToken; scanLitByteVec.
					mark := start + 1.
					tokenType == #doIt
						ifTrue: [self offEnd: 'Unmatched bracket']]
				ifFalse: [(tokenType == #word or: [tokenType == #keyword or: [tokenType == #colon]])
						ifTrue: [self scanLitWord]
						ifFalse: [(tokenType == #string or: [ tokenType == #verticalBar ])
							ifTrue: [token := token asSymbol]
							ifFalse: [tokenType == #binary 
								ifFalse: [(token isCharacter and: [tokenType ~~ #character and: [self class prefAllowUnicharSymbol]])
									ifTrue: [token := token asSymbol]
									ifFalse: [self notify: 'Invalid literal character' at: start + 1]]]]]].
	mark := start.
	tokenType := #literal

	"#(Pen)
	#Pen
	#'Pen'
	"! !

!StScanner methodsFor: 'multi-character scans' stamp: 'mir 6/8/2018 18:01'!
xSingleQuote
	"String."

	self step.
	buffer resetToStart.
	[hereChar == $' 
		and: [aheadChar == $' 
				ifTrue: [self step. false]
				ifFalse: [true]]]
		whileFalse: 
			[hereChar == DoItCharacter
				ifTrue: [^self offEnd: 'Unmatched string quote'].
			buffer nextPut: self step].
	self step.
	token := buffer contents.
	tokenType := #string! !

!StScanner methodsFor: 'multi-character scans' stamp: 'eem 11/16/2010 15:05'!
xUnderscore
	self allowUnderscoreAssignments ifTrue:[ | type |
		"Figure out if x _foo (no space between _ and foo) 
		should be a selector or assignment"
		(((type := self typeTableAt: aheadChar) == #xLetter
			or:[type == #xDigit or:[type == #xUnderscore]]) 
			and:[self allowUnderscoreSelectors]) ifFalse:[
				self step.
				tokenType := #leftArrow.
				^token := #'_'
		].
	].
	self allowUnderscoreSelectors ifTrue:[^self xLetter].
	^self xIllegal! !

!StScanner methodsFor: 'multi-character scans' stamp: 'eem 5/8/2008 17:01'!
xUnderscoreForTokenization
	self step.
	tokenType := #leftArrow.
	^token := #'_'! !


!StScanner methodsFor: 'public access' stamp: 'mir 6/8/2018 14:34'!
scanFieldNames: stringOrArray
	"Answer an Array of Strings that are the identifiers in the input string, 
	stringOrArray. If passed an Array, just answer with that Array, i.e., 
	assume it has already been scanned."

	| strm |
	stringOrArray isArray
		ifTrue: [^stringOrArray].
	self scan: (stringOrArray asString readStream).
	strm := (Array new: 10) writeStream.
	[tokenType == #doIt]
		whileFalse: 
			[tokenType == #word ifTrue: [strm nextPut: token].
			self scanToken].
	^strm contents

	"StScanner new scanFieldNames: 'abc  def ghi' ('abc' 'def' 'ghi' )"! !

!StScanner methodsFor: 'public access' stamp: 'mir 6/8/2018 14:35'!
scanStringStruct: textOrString 
	"The input is a string whose elements are identifiers and parenthesized
	 groups of identifiers.  Answer an array reflecting that structure, representing
	 each identifier by an uninterned string."

	self scan: textOrString asString readStream.
	self scanStringStruct.
	^token

	"StScanner new scanStringStruct: 'a b (c d) (e f g)'"! !

!StScanner methodsFor: 'public access' stamp: 'mir 6/8/2018 14:35'!
scanTokenPositionsIn: textOrString into: aBlock
	"Evaluate aBlock with the start and end positions of all separate non-white-space tokens, including comments, in textOrString."

	self initStScannerForTokenization.
	source := textOrString asString readStream.
	self step.
	self step.
	self scanAllTokenPositionsInto: aBlock

	"| code |
	code := '       #( 1 2 #( 3 4 ))  16r123 123 123.0  ', (StScanner sourceCodeAt: #scanTokenPositionsIn:into:).
	StScanner new scanTokenPositionsIn: code into: [:start :end| Transcript cr; nextPut: $_; nextPutAll: (code copyFrom: start to: end); nextPut: $_; endEntry]"

	"CodeDiffBuilder buildDisplayPatchFrom:  (StScanner sourceCodeAt: #scanTokenPositionsIn:into:) to:  ((StScanner sourceCodeAt: #scanTokenPositionsIn:into:) copyReplaceAll: (String with: Character cr) with: '')"

	"CodeDiffBuilder buildDisplayPatchFrom:  'colorTable ^colorTable ifNil: [colorTable _ ST80ColorTable]' to:'colorTable ^colorTable ifNil: [colorTable _ ST80ColorTable]'"! !

!StScanner methodsFor: 'public access' stamp: 'mir 6/8/2018 14:35'!
scanTokens: textOrString 
	"Answer an Array that has been tokenized as though the input text, 
	textOrString, had appeared between the array delimitors #( and ) in a 
	Smalltalk literal expression."

	self scan: textOrString asString readStream.
	self scanLitVec.
	^token

	"StScanner new scanTokens: 'identifier keyword: 8r31 ''string'' .'"! !

!StScanner methodsFor: 'public access' stamp: 'mir 6/8/2018 14:36'!
typedScan: textOrString do: aBinaryBlock
	"Evaluate aBinaryBlock with the token and its type for the first token in input,
	 mapping literals to type #literal and anything else to type #word."
	| theTokensType atNumber theToken |
	self initStScannerForTokenization.
	self scan: textOrString asString readStream.
	atNumber := hereChar notNil and: [hereChar isDigit].
	theTokensType := tokenType.
	theToken := self advance.
	(theToken == #- and: [atNumber and: [token isNumber]]) ifTrue:
		[theToken := self advance negated].
	theToken isNumber ifTrue: [theTokensType := #number].
	^aBinaryBlock
		value: theToken
		value: ((#(number string literal) includes: theTokensType)
				ifTrue: [#literal]
				ifFalse: [#word])! !

!StScanner methodsFor: 'public access' stamp: 'mir 6/8/2018 14:42'!
typedScanTokens: textOrString 
	"Answer an Array that has been tokenized with literals mapped to literals,
	 special characters mapped to symbols and variable names and keywords
	 to strings. This methiod accepts _ (underscore) as an assignment token
	 irrespective of whether the system prefers := as the assignment token."
	| s |
	self initStScannerForTokenization.
	self scan: textOrString asString readStream.
	s := (Array new: 16) writeStream.
	[tokenType == #doIt] whileFalse:
		[(token == #- 
		  and: [(self typeTableAt: hereChar) == #xDigit]) ifTrue: 
			[self scanToken.
			 token := token negated].
		s nextPut: token.
		self scanToken].
	^s contents

	"StScanner new typedScanTokens: (StScanner sourceCodeAt: #typedScanTokens:)"! !


!StScanner methodsFor: 'private' stamp: 'ul 10/28/2010 00:41'!
allowUnderscoreAssignments
	"Query preference"
	^self class allowUnderscoreAsAssignment! !

!StScanner methodsFor: 'private' stamp: 'mir 5/14/2018 21:50'!
allowUnderscoreSelectors
	^true! !

!StScanner methodsFor: 'private' stamp: 'mir 6/12/2018 14:13'!
scanDigitString: stream
	"we need to do this roundabout way to cope with broken number parsing on the JS side"
	| numberString char seenPeriod seenRadix |
	seenPeriod := false.
	seenRadix := false.
	numberString := '' writeStream.
	[char := stream peek.
	char 
		ifNil: [false]
		ifNotNil: [(char isDigit or: [char isUppercase])]
	] whileTrue: [numberString nextPut: stream next].
	^numberString contents! !

!StScanner methodsFor: 'private' stamp: 'mir 6/12/2018 15:33'!
scanNumberString: stream
	"we need to do this roundabout way to cope with broken number parsing on the JS side"
	| digitString numberString char seenPeriod seenRadix |
	seenPeriod := false.
	seenRadix := false.
	digitString := self scanDigitString: stream.
	digitString isEmpty ifTrue: [^''].

	numberString := '' writeStream.
	char := stream peek.
	char ifNil: [^digitString].
		
	char = $. 
		ifTrue: [
			numberString nextPutAll: digitString.
			stream next.
			digitString := self scanDigitString: stream.
			digitString isEmpty
				ifTrue: [
					stream skip: -1. "put the . back"]
				ifFalse: [
					numberString nextPut: $. .
					numberString nextPutAll: digitString].
			^numberString contents].
	^char = $r
		ifTrue: [
			numberString nextPutAll: digitString.
			stream next.
			digitString := self scanDigitString: stream.
			digitString isEmpty
				ifTrue: [
					stream skip: -1. "put the r back"]
				ifFalse: [
					numberString nextPut: $r .
					numberString nextPutAll: digitString].
			numberString contents]
		ifFalse: [digitString]
! !

"-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- "!

StScanner class
	instanceVariableNames: ''!

!StScanner class methodsFor: 'testing' stamp: 'sd 3/30/2005 22:00'!
inviolateInstanceVariableNames
	"Answer a list of instance variable names not to be used.  (Place holder for real list)"
	^ #('thisContext' 'self')! !

!StScanner class methodsFor: 'testing' stamp: 'sd 3/30/2005 22:00'!
isLegalInstVarName: aString
	"Answer whether aString is a legal instance variable name."

	^ ((self isLiteralSymbol: aString) and: [(aString includes: $:) not]) and:
		[(self inviolateInstanceVariableNames includes:  aString) not]! !

!StScanner class methodsFor: 'testing' stamp: 'nice 11/19/2010 17:22'!
isLiteralSymbol: aSymbol 
	"Test whether a symbol can be stored as # followed by its characters.  
	Symbols created internally with asSymbol may not have this property, 
	e.g. '3' asSymbol."

	| i ascii type next last |
	i := aSymbol size.
	i = 0 ifTrue: [^ false].

	"TypeTable should have been origined at 0 rather than 1 ..."
	ascii := (aSymbol at: 1) asciiValue.
	type := TypeTable at: ascii ifAbsent: [^false].
	type == #xLetter ifTrue: [
		next := last := nil.
		[i > 1]
				whileTrue: 
					[ascii := (aSymbol at: i) asciiValue.
					type := TypeTable at: ascii ifAbsent: [^false].
					(type == #xLetter or: [type == #xDigit or: [type == #xColon
							and: [
								next == nil
									ifTrue: [last := #xColon. true] 
									ifFalse: [last == #xColon and: [next ~~ #xDigit and: [next ~~ #xColon]]]]]])
						ifFalse: [^ false].
					next := type.
					i := i - 1].
			^ true].
	type == #xBinary ifTrue:
		[^(2 to: i) allSatisfy: [:j |
			ascii := (aSymbol at: j) asciiValue.
			(TypeTable at: ascii ifAbsent: []) == #xBinary]].
	type == #verticalBar ifTrue: [^i = 1].
	^false! !

!StScanner class methodsFor: 'testing' stamp: 'fbs 2/13/2006 22:33'!
wellFormedInstanceVariableNameFrom: aString
	"Answer a legal instance variable name, derived from aString"

	| cleansedString |
	cleansedString := aString select: [:ch | ch isDigit or: [ch isLetter]].
	(cleansedString isEmpty or: [cleansedString first isDigit])
		ifTrue: [cleansedString := 'a', cleansedString]
		ifFalse:	[cleansedString := cleansedString withFirstCharacterDownshifted].

	[self isLegalInstVarName: cleansedString] whileFalse:
		[cleansedString := cleansedString, 'x'].
	^ cleansedString

"StScanner wellFormedInstanceVariableNameFrom:  '234 xx\ Uml /ler42342380-4'"! !


!StScanner class methodsFor: 'initialization' stamp: 'mir 6/27/2018 12:44'!
initialize
	"StScanner initialize"
	self initializeTypeTable.
	"The unicode ending with FFFE or FFFF are non characters and can be used by applications if they wish.
	We use last legal unicode 16r10FFFF to encode the end of source stream"
	DoItCharacter := 16r10FFFF asCharacter! !

!StScanner class methodsFor: 'initialization' stamp: 'mir 6/27/2018 12:06'!
initializeTypeTable
	"self initializeTypeTable"

	| newTable |
	newTable := (Array new: 256) atAllPut: #xBinary. "default"
	newTable atAll: #(9 10 12 13 32 ) put: #xDelimiter. "tab lf ff cr space"
	newTable atAll: ($0 asciiValue to: $9 asciiValue) put: #xDigit.

	1 to: 255
		do: [:index |
			index asCharacter isLetter
				ifTrue: [newTable at: index put: #xLetter]].

	newTable at: $" asciiValue put: #xDoubleQuote.
	newTable at: $# asciiValue put: #xLitQuote.
	newTable at: $$ asciiValue put: #xDollar.
	newTable at: $' asciiValue put: #xSingleQuote.
	newTable at: $: asciiValue put: #xColon.
	newTable at: $( asciiValue put: #leftParenthesis.
	newTable at: $) asciiValue put: #rightParenthesis.
	newTable at: $. asciiValue put: #period.
	newTable at: $; asciiValue put: #semicolon.
	newTable at: $[ asciiValue put: #leftBracket.
	newTable at: $] asciiValue put: #rightBracket.
	newTable at: ${ asciiValue put: #leftBrace.
	newTable at: $} asciiValue put: #rightBrace.
	newTable at: $^ asciiValue put: #upArrow.
	newTable at: $_ asciiValue put: #xUnderscore.
	newTable at: $| asciiValue put: #verticalBar.
	TypeTable := newTable "bon voyage!!"! !


!StScanner class methodsFor: 'preferences' stamp: 'mir 3/16/2018 13:19'!
allowBlockArgumentAssignment
	"Accessor for the system-wide preference"
	
	"<preference: 'Allow block argument assignment.'
		category: 'Compiler'
		description: 'If enabled, the compiler will allow assignment into block arguments.
This provides backward compatibility with the pre-closure compiler.'
		type: #Boolean>"
	^AllowBlockArgumentAssignment ifNil: [ false ]! !

!StScanner class methodsFor: 'preferences' stamp: 'ul 6/10/2011 22:20'!
allowBlockArgumentAssignment: aBoolean
	"Accessor for the system-wide preference"
	
	AllowBlockArgumentAssignment := aBoolean! !

!StScanner class methodsFor: 'preferences' stamp: 'mir 3/16/2018 13:20'!
allowUnderscoreAsAssignment
	"Accessor for the system-wide preference"
	"<preference: 'Allow underscore assignments'
		category: 'Compiler'
		description: 'When true, underscore can be used as assignment operator'
		type: #Boolean>"
	^AllowUnderscoreAssignments ifNil:[true]! !

!StScanner class methodsFor: 'preferences' stamp: 'ul 10/28/2010 00:40'!
allowUnderscoreAsAssignment: aBool
	"Accessor for the system-wide preference"
	AllowUnderscoreAssignments := aBool! !

!StScanner class methodsFor: 'preferences' stamp: 'ul 10/28/2010 00:40'!
prefAllowUnderscoreAssignments
	"Accessor for the system-wide preference"
	
	self deprecated: 'Use #allowUnderscoreAsAssignment'.
	^self allowUnderscoreAsAssignment! !

!StScanner class methodsFor: 'preferences' stamp: 'ul 10/28/2010 00:41'!
prefAllowUnderscoreAssignments: aBool
	"Accessor for the system-wide preference"
	
	self deprecated: 'Use #allowUnderscoreAsAssignment:'.
	self allowUnderscoreAsAssignment: aBool! !

!StScanner class methodsFor: 'preferences' stamp: 'mir 3/16/2018 13:20'!
prefAllowUnderscoreSelectors
	"Accessor for the system-wide preference"
	"<preference: 'Allow underscore selectors'
		category: 'Compiler'
		description: 'When true, underscore can be used in selectors and varibable names'
		type: #Boolean>"
	^AllowUnderscoreSelectors ifNil:[false]! !

!StScanner class methodsFor: 'preferences' stamp: 'cwp 10/22/2012 00:33'!
prefAllowUnderscoreSelectors: aBool
	"Accessor for the system-wide preference"
	AllowUnderscoreSelectors := aBool.
	
	"Reinitialize String's tokenish character map"
	String initialize! !

!StScanner class methodsFor: 'preferences' stamp: 'mir 5/12/2018 18:55'!
prefAllowUnicharSymbol
	"Accessor for the system-wide preference"
	"<preference: 'Allow symbols with unique character like #,'
		category: 'Compiler'
		description: 'When true, the historical syntax #, #; or #. is allowed.'
		type: #Boolean>"
	^AllowUnicharSymbol ifNil: [true]! !

!StScanner class methodsFor: 'preferences' stamp: 'nice 10/4/2011 21:13'!
prefAllowUnicharSymbol: aBoolean
	"Accessor for the system-wide preference"
	AllowUnicharSymbol := aBoolean! !


StScanner subclass: #StParser
	instanceVariableNames: 'here hereType hereMark hereEnd prevMark prevEnd encoder parseNode failBlock requestorOffset tempsMark doitFlag queriedUnusedTemporaries cue pragmas'
	classVariableNames: ''
	poolDictionaries: ''
	category: 'Compiler-JS'!
!StParser commentStamp: 'mir 6/26/2018 21:16' prior: 0!
!


!StParser methodsFor: 'error correction' stamp: 'mir 3/15/2018 08:19'!
ambiguousSelector: aString inRange: anInterval
	
	"In non interactive mode, compile with backward comapatibility: $- is part of literal argument"
	Transcript cr; store: encoder classEncoding; nextPutAll:#'>>';store: encoder selector; show: ' would send ' , token , '-'.
	^super ambiguousSelector: aString inRange: anInterval.
! !

!StParser methodsFor: 'error correction' stamp: 'cwp 10/15/2007 23:00'!
canDeclareClassVariable
	^encoder classEncoding ~~ UndefinedObject! !

!StParser methodsFor: 'error correction' stamp: 'nice 2/4/2011 22:10'!
canDeclareInstanceVariable
	^encoder classEncoding ~~ UndefinedObject! !

!StParser methodsFor: 'error correction' stamp: 'mir 3/15/2018 08:19'!
correctSelector: proposedKeyword wordIntervals: spots exprInterval: expInt ifAbort: abortAction
	"Correct the proposedKeyword to some selector symbol, correcting the original text if such action is indicated.  abortAction is invoked if the proposedKeyword couldn't be converted into a valid selector.  Spots is an ordered collection of intervals within the test stream of the for each of the keyword parts."

	^proposedKeyword asSymbol! !

!StParser methodsFor: 'error correction' stamp: 'eem 8/17/2010 16:35'!
declareTemp: name at: levelTag
	"Defer declaring the temp until the parse has completed.  This allows
	 the StParser to declare the temp in the minimum enclosing block instead
	 of always at method level.  See StParser>>declareUndeclaredTemps:"
	^(encoder bindUndeclaredTemp: name)
		tag: levelTag;
		yourself! !

!StParser methodsFor: 'error correction' stamp: 'eem 8/14/2010 19:34'!
declareTempAndPaste: name
	"Defer declaring the temp until the parse has completed.  This allows
	 the StParser to declare the temp in the minimum enclosing block instead
	 of always at method level.  See StParser>>declareUndeclaredTemps:"
	^encoder bindUndeclaredTemp: name! !

!StParser methodsFor: 'error correction'!
substituteSelector: selectorParts wordIntervals: spots
	"Substitute the correctSelector into the (presuamed interactive) receiver."
	| offset |
	offset := 0.
	selectorParts with: spots do:
		[ :word :interval |
		offset := self substituteWord: word wordInterval: interval offset: offset ]
! !

!StParser methodsFor: 'error correction' stamp: 'eem 9/5/2009 14:41'!
substituteVariable: each atInterval: anInterval 
	self 
		substituteWord: each
		wordInterval: anInterval
		offset: 0.
	^encoder encodeVariable: each! !


!StParser methodsFor: 'error handling' stamp: 'eem 5/14/2008 13:34'!
addWarning: aString
	"ignored by the default compiler."! !

!StParser methodsFor: 'error handling' stamp: 'nice 2/22/2012 02:49'!
expected: aString 
	"Notify a problem at token 'here'."

	^ self notify: aString , ' expected' at: hereMark + requestorOffset! !

!StParser methodsFor: 'error handling' stamp: 'nice 2/26/2010 00:21'!
fail

	| exitBlock |
	(encoder == nil or: [encoder == self])
		ifFalse: [encoder release. encoder := nil]. "break cycle"
	exitBlock := failBlock.
	failBlock := nil.
	^exitBlock value! !

!StParser methodsFor: 'error handling' stamp: 'mt 2/17/2016 18:02'!
interactive
	"The compilation is interactive if there is a requestor and that requestor does either not care or explicitly allow interactive error correction."

	^ cue requestor notNil
		and: [(cue requestor respondsTo: #wantsInteractiveErrorCorrection) not
			or: [cue requestor perform: #wantsInteractiveErrorCorrection]]! !

!StParser methodsFor: 'error handling'!
notify: aString 
	"Notify problem at token before 'here'."

	^self notify: aString at: prevMark + requestorOffset! !

!StParser methodsFor: 'error handling' stamp: 'mir 5/16/2019 14:26'!
notify: string at: location
	| errorString |
	errorString := source contents
		copyReplaceFrom: location
		to: location - 1
		with: (Character lf asString , string , ' ->').
	StCompileException signal: errorString
! !

!StParser methodsFor: 'error handling' stamp: 'di 2/9/1999 15:43'!
offEnd: aString 
	"Notify a problem beyond 'here' (in lookAhead token). Don't be offEnded!!"

	requestorOffset == nil
		ifTrue: [^ self notify: aString at: mark]
		ifFalse: [^ self notify: aString at: mark + requestorOffset]
! !


!StParser methodsFor: 'expression types'!
argumentName

	hereType == #word
		ifFalse: [^self expected: 'Argument name'].
	^self advance! !

!StParser methodsFor: 'expression types' stamp: 'mir 6/12/2018 16:23'!
assignment: varNode
	" var ':=' expression => AssignmentNode."
	| loc start |
	(loc := varNode assignmentCheck: encoder at: prevMark + requestorOffset) >= 0
		ifTrue: [^self notify: 'Cannot store into "' , varNode class name , varNode asString , '"' at: loc].
	start := self startOfNextToken.
	self advance.
	self expression ifFalse: [^self expected: 'Expression'].
	parseNode := StAssignmentNode new
				variable: varNode
				value: parseNode.
	varNode nowHasDef.
	^true! !

!StParser methodsFor: 'expression types' stamp: 'mir 5/25/2018 11:14'!
blockExpression
	"[ ({:var} |) (| {temps} |) (statements) ] => BlockNode."

	| blockNode variableNodes temporaryBlockVariables start |
	blockNode := StBlockNode new.
	variableNodes := OrderedCollection new.
	start := prevMark + requestorOffset.
	"Gather parameters."
	[self match: #colon] whileTrue:
		[variableNodes addLast: (encoder bindBlockArg: self argumentName within: blockNode)].
	(variableNodes size > 0 & (hereType ~~ #rightBracket) and: [(self match: #verticalBar) not]) ifTrue:
		[^self expected: 'Vertical bar'].

	temporaryBlockVariables := self temporaryBlockVariablesFor: blockNode.
	self statements: variableNodes innerBlock: true blockNode: blockNode.
	blockNode temporaries: temporaryBlockVariables.

	(self match: #rightBracket) ifFalse: [^self expected: 'Period or right bracket'].

	"The scope of the parameters and temporary block variables is no longer active."
	temporaryBlockVariables do: [:variable | variable scope: -1].
	variableNodes do: [:variable | variable scope: -1]! !

!StParser methodsFor: 'expression types' stamp: 'mir 5/12/2018 12:37'!
braceExpression
	self notify: 'Brace expressions not supported'! !

!StParser methodsFor: 'expression types' stamp: 'mir 6/1/2018 17:19'!
cascade
	" {; message} => CascadeNode."

	| rcvr msgs |
	parseNode canCascade ifFalse:
		[^self expected: 'Cascading not'].
	rcvr := parseNode receiver.
	msgs := OrderedCollection with: parseNode.
	[self match: #semicolon]
		whileTrue: 
			[parseNode := rcvr.
			(self messagePart: 3 repeat: false)
				ifFalse: [^self expected: 'Cascade'].
			parseNode canCascade ifFalse:
				[^self expected: '<- No special messages'].
			parseNode ensureCanCascade: encoder.
			msgs addLast: parseNode].
	parseNode := StCascadeNode new receiver: rcvr messages: msgs! !

!StParser methodsFor: 'expression types' stamp: 'mir 6/8/2018 18:38'!
doIt: selector arguments: args precedence: precedence
	" pattern [ | temporaries ] block => MethodNode."

	| blk prim temps messageComment methodNode |
	encoder selector: selector.
	args do: [:argNode | argNode beMethodArg].
	temps := self temporaries.
	messageComment := currentComment.
	currentComment := nil.
	prim := self pragmaPrimitives.
	self statements: #() innerBlock: true.
	blk := parseNode.
	blk returnLast.
	hereType == #doIt ifFalse: [^self expected: 'Nothing more'].
	methodNode := self newMethodNode comment: messageComment.
	methodNode
		selector: selector
		arguments: args
		precedence: precedence
		temporaries: temps
		block: blk
		encoder: encoder
		primitive: prim.
	^methodNode! !

!StParser methodsFor: 'expression types' stamp: 'mir 5/14/2018 14:51'!
expression
	(hereType == #word
	 and: [tokenType == #leftArrow]) ifTrue:
		[^self assignment: self variable].
	self primaryExpression ifFalse:
		[^false].
	((self messagePart: 3 repeat: true)
	 and: [hereType == #semicolon]) ifTrue:
		[self cascade].
	^true! !

!StParser methodsFor: 'expression types' stamp: 'mir 6/8/2018 18:01'!
messagePart: level repeat: repeat

	| start receiver selector args precedence words keywordStart |
	[receiver := parseNode.
	(hereType == #keyword and: [level >= 3])
		ifTrue: 
			[start := self startOfNextToken.
			selector := '' writeStream.
			args := OrderedCollection new.
			words := OrderedCollection new.
			[hereType == #keyword]
				whileTrue: 
					[keywordStart := self startOfNextToken + requestorOffset.
					selector nextPutAll: self advance.
					words addLast: (keywordStart to: self endOfLastToken + requestorOffset).
					self primaryExpression ifFalse: [^self expected: 'Argument'].
					self messagePart: 2 repeat: true.
					args addLast: parseNode].
			selector := selector contents asSymbol.
			precedence := 3]
		ifFalse: [
			(level >= 2 and: [hereType == #verticalBar]) ifTrue: [self transformAVerticalBarIntoABinarySelector].
			(hereType == #binary and: [level >= 2])
				ifTrue: 
					[start := self startOfNextToken.
					selector := self advance asSymbol.
					self primaryExpression ifFalse: [^self expected: 'Argument'].
					self messagePart: 1 repeat: true.
					args := Array with: parseNode.
					precedence := 2]
				ifFalse: [hereType == #word
						ifTrue: 
							[start := self startOfNextToken.
							selector := self advance asSymbol.
							args := #().
							words := OrderedCollection with: (start  + requestorOffset to: self endOfLastToken + requestorOffset).
							precedence := 1]
						ifFalse: [^args notNil]]].
	parseNode := StMessageNode new
				receiver: receiver
				selector: selector
				arguments: args
				precedence: precedence
				from: encoder.
	repeat]
		whileTrue: [].
	^true! !

!StParser methodsFor: 'expression types' stamp: 'mir 6/8/2018 14:17'!
method: doit context: ctxt 
	" pattern [ | temporaries ] block => MethodNode."

	| sap blk prim temps messageComment methodNode |
	sap := self pattern: doit inContext: ctxt.
	"sap={selector, arguments, precedence}"
	encoder selector: (sap at: 1).
	(sap at: 2) do: [:argNode | argNode beMethodArg].
	doit ifFalse: [self pragmaSequence].
	temps := self temporaries.
	messageComment := currentComment.
	currentComment := nil.
	doit ifFalse: [self pragmaSequence].
	prim := self pragmaPrimitives.
	self statements: #() innerBlock: doit.
	blk := parseNode.
	doit ifTrue: [blk returnLast]
		ifFalse: [blk returnSelfIfNoOther: encoder].
	hereType == #doIt ifFalse: [^self expected: 'Nothing more'].
	methodNode := self newMethodNode comment: messageComment.
	methodNode
		selector: (sap at: 1)
		arguments: (sap at: 2)
		precedence: (sap at: 3)
		temporaries: temps
		block: blk
		encoder: encoder
		primitive: prim.
	^methodNode! !

!StParser methodsFor: 'expression types' stamp: 'eem 5/29/2008 09:36'!
newMethodNode
	^self encoder methodNodeClass new! !

!StParser methodsFor: 'expression types' stamp: 'mir 6/8/2018 14:50'!
pattern: fromDoit inContext: ctxt
	" unarySelector | binarySelector arg | keyword arg {keyword arg} =>
	{selector, arguments, precedence}."
	| args selector |
	doitFlag := fromDoit.
	fromDoit ifTrue:
		[^ctxt == nil
			ifTrue: [Array with: #DoIt with: Array new with: 1]
			ifFalse: [Array with: #DoItIn: with: (Array with: (encoder encodeVariable: encoder doItInContextName)) with: 3]].

	hereType == #word ifTrue: [^ Array with: self advance asSymbol with: Array new with: 1].

	(hereType == #binary or: [hereType == #verticalBar]) ifTrue: 
		[selector := self advance asSymbol.
		args := Array with: (encoder bindArg: self argumentName).
		^ Array with: selector with: args with: 2].

	hereType == #keyword ifTrue: 
		[selector := '' writeStream.
		args := OrderedCollection new.
		[hereType == #keyword] whileTrue:[
			selector nextPutAll: self advance.
			args addLast: (encoder bindArg: self argumentName).
		].
		^ Array with: selector contents asSymbol with: args with: 3].
	^self expected: 'Message pattern'! !

!StParser methodsFor: 'expression types' stamp: 'mir 6/8/2018 18:01'!
primaryExpression 
	hereType == #word 
		ifTrue: 
			[parseNode := self variable.
			parseNode nowHasRef.
			^ true].
	hereType == #leftBracket
		ifTrue: 
			[self advance.
			self blockExpression.
			^true].
	hereType == #leftBrace
		ifTrue: [
			self braceExpression.
			^true].
	hereType == #leftParenthesis
		ifTrue: 
			[self advance.
			self expression ifFalse: [^self expected: 'expression'].
			(self match: #rightParenthesis)
				ifFalse: [^self expected: 'right parenthesis'].
			^true].
	(hereType == #string or: [hereType == #number or: [hereType == #literal or: [hereType == #character]]])
		ifTrue: 
			[parseNode := encoder encodeLiteral: self advance.
			^true].
	(here == #- and: [tokenType == #number and: [1 + hereEnd = mark]])
		ifTrue: 
			[self advance.
			parseNode := encoder encodeLiteral: self advance negated.
			^true].
	^false! !

!StParser methodsFor: 'expression types' stamp: 'mir 6/8/2018 18:39'!
selector: selector arguments: args precedence: precedence
	" pattern [ | temporaries ] block => MethodNode."

	| blk prim temps messageComment methodNode |
	encoder selector: selector.
	args do: [:argNode | argNode beMethodArg].
	self pragmaSequence.
	temps := self temporaries.
	messageComment := currentComment.
	currentComment := nil.
	self pragmaSequence.
	prim := self pragmaPrimitives.
	self statements: #() innerBlock: false.
	blk := parseNode.
	blk returnSelfIfNoOther: encoder.
	hereType == #doIt ifFalse: [^self expected: 'Nothing more'].
	methodNode := self newMethodNode comment: messageComment.
	methodNode
		selector: selector
		arguments: args
		precedence: precedence
		temporaries: temps
		block: blk
		encoder: encoder
		primitive: prim.
	^methodNode! !

!StParser methodsFor: 'expression types' stamp: 'mir 3/16/2018 09:33'!
statements: argNodes innerBlock: inner

	^self statements: argNodes innerBlock: inner blockNode: StBlockNode new! !

!StParser methodsFor: 'expression types' stamp: 'mir 5/3/2019 15:19'!
statements: argNodes innerBlock: inner blockNode: theBlockNode

	| stmts returns start |
	"give initial comment to block, since others trail statements"
	theBlockNode comment: currentComment.
	currentComment := nil.
	stmts := OrderedCollection new.
	returns := false.
	hereType ~~ #rightBracket ifTrue:
		[[start := self startOfNextToken.
		  (returns := self matchReturn)
			ifTrue: 
				[self expression ifFalse:
					[^self expected: 'Expression to return'].
				 self addComment.
				 stmts addLast: (parseNode isReturningIf
								ifTrue: [parseNode]
								ifFalse: [StReturnNode new expr: parseNode
									"parseNode isIf
										ifTrue: [
											returns := false.
											parseNode inlineReturns]
										ifFalse: [StReturnNode new expr: parseNode]"])]
			ifFalse: 
				[self expression
					ifTrue: 
						[self addComment.
						 stmts addLast: parseNode]
					ifFalse: 
						[self addComment.
						 stmts size = 0 ifTrue: 
							[stmts addLast: 
								(encoder encodeVariable:
									(inner ifTrue: ['nil'] ifFalse: ['self']))]]].
		  returns ifTrue: 
			[self match: #period.
			 (hereType == #rightBracket or: [hereType == #doIt]) ifFalse:
				[^self expected: 'End of block']].
		  returns not and: [self match: #period]] whileTrue].
	theBlockNode
		arguments: argNodes
		statements: stmts
		returns: returns
		from: encoder.
	parseNode := theBlockNode.
	^true! !

!StParser methodsFor: 'expression types' stamp: 'mir 3/15/2018 08:23'!
temporaries
	" [ '|' (variable)* '|' ]"
	| vars theActualText |
	(self match: #verticalBar) ifFalse: 
		["no temps"
		doitFlag ifTrue:
			[tempsMark := 1.
			^ #()].
		tempsMark := hereMark	"formerly --> prevMark + prevToken".
		tempsMark > 0 ifTrue:
			[theActualText := source contents.
			[tempsMark < theActualText size and: [(theActualText at: tempsMark) isSeparator]]
				whileTrue: [tempsMark := tempsMark + 1]].
			^ #()].
	vars := OrderedCollection new.
	[hereType == #word]
		whileTrue: [vars addLast: (encoder bindTemp: self advance)].
	(self match: #verticalBar) ifTrue: 
		[tempsMark := prevMark.
		^ vars].
	^ self expected: 'Vertical bar'
! !

!StParser methodsFor: 'expression types' stamp: 'mir 3/15/2018 08:23'!
temporariesIn: methodSelector
	" [ '|' (variable)* '|' ]"
	| vars theActualText |
	(self match: #verticalBar) ifFalse: 
		["no temps"
		doitFlag ifTrue:
			[tempsMark := 1.
			^ #()].
		tempsMark := hereMark	"formerly --> prevMark + prevToken".
		tempsMark > 0 ifTrue:
			[theActualText := source contents.
			[tempsMark < theActualText size and: [(theActualText at: tempsMark) isSeparator]]
				whileTrue: [tempsMark := tempsMark + 1]].
			^ #()].
	vars := OrderedCollection new.
	[hereType == #word]
		whileTrue: [vars addLast: (encoder bindTemp: self advance in: methodSelector)].
	(self match: #verticalBar) ifTrue: 
		[tempsMark := prevMark.
		^ vars].
	^ self expected: 'Vertical bar'! !

!StParser methodsFor: 'expression types' stamp: 'mir 5/25/2018 11:20'!
temporaryBlockVariablesFor: aBlockNode
	"Scan and answer temporary block variables."

	| variables |
	(self match: #verticalBar) ifFalse:
		"There are't any temporary variables."
		[^#()].

	variables := OrderedCollection new.
	[hereType == #word] whileTrue:
		[variables addLast: (encoder bindBlockTemp: self advance within: aBlockNode)].
	(self match: #verticalBar) ifFalse:
		[^self expected: 'Vertical bar'].
	^variables! !

!StParser methodsFor: 'expression types' stamp: 'mir 5/16/2019 14:25'!
variable

	| varName varStart varEnd |
	varStart := self startOfNextToken + requestorOffset.
	varName := self advance.
	varEnd := self endOfLastToken + requestorOffset.
	^[encoder encodeVariable: varName
		sourceRange: (varStart to: varEnd)
		ifUnknown: [encoder undeclared: varName]]
		on: StCompileException
				do: [:exception | 
					self notify: exception messageText].! !


!StParser methodsFor: 'pragmas' stamp: 'mir 6/8/2018 14:18'!
addPragma: aPragma
	self pragmas add: aPragma! !

!StParser methodsFor: 'pragmas' stamp: 'mir 4/13/2018 18:05'!
pragmaLiteral: selectorSoFar
	"Read a pragma literal.  As a nicety we allow a variable name (rather
	 than a literal string) as the second argument to primitive:error:"

	(hereType == #string or: [ hereType == #literal or: [ hereType == #number or: [ hereType == #character ] ] ])
		ifTrue: [ ^ self advance ].
	(here == $# and: [ tokenType == #word ])
		ifTrue: [ ^ self advance ].
	(here == #- and: [ tokenType == #number ])
		ifTrue: [ ^ (self advance; advance) negated ].
	(here = 'true' or: [ here = 'false' or: [ here = 'nil' ] ])
		ifTrue: [ ^ (StScanner new scanTokens: self advance) first ].
	^self expected: 'Literal constant'! !

!StParser methodsFor: 'pragmas' stamp: 'mir 6/8/2018 14:16'!
pragmaPrimitives
	| primitives |
	self pragmas isEmpty ifTrue:
		[^nil].
	primitives := pragmas select:
					[:pragma|
					self class primitivePragmaSelectors includes: pragma keyword].
	primitives isEmpty ifTrue:
		[^nil].
	primitives size > 1 ifTrue:
		[^self notify: 'Ambigous primitives'].
	^self perform: primitives first keyword withArguments: primitives first arguments! !

!StParser methodsFor: 'pragmas' stamp: 'mir 6/8/2018 18:55'!
pragmaSequence
	"Parse a sequence of method pragmas."
	
	[
		(self matchToken: #<)
			ifFalse: [ ^ self ].
		self pragmaStatement.
		(self matchToken: #>)
			ifFalse: [ ^ self expected: '>' ].
		true] whileTrue! !

!StParser methodsFor: 'pragmas' stamp: 'mir 6/9/2018 10:51'!
pragmaStatement
	"Read a single pragma statement. Parse all generic pragmas in the form of: <key1: val1 key2: val2 ...> and remember them, including primitives."
	
	| selector args words index keyword |
	(hereType = #keyword or: [ hereType = #word or: [ hereType = #binary ] ])
		ifFalse: [  ^ self expected: 'pragma declaration' ].

	selector := ''.
	args := OrderedCollection new.
	words := OrderedCollection new.
	[ hereType = #keyword or: [ (hereType = #word or: [ hereType = #binary ]) and: [ selector isEmpty ] ] ] whileTrue: [
		index := self startOfNextToken + requestorOffset.
		selector := selector , self advance.
		words add: (index to: self endOfLastToken + requestorOffset).
		(selector last = $: or: [ selector first isLetter not ])
			ifTrue: [ args add: (self pragmaLiteral: selector) ] ].
"	selector numArgs ~= args size
		ifTrue: [ ^ self expected: 'pragma argument' ]."
	keyword := selector asSymbol.
	self addPragma: (StPragma keyword: keyword arguments: args asArray).
	^ true! !

!StParser methodsFor: 'pragmas' stamp: 'mir 6/8/2018 14:15'!
pragmas
	^pragmas ifNil: [pragmas := OrderedCollection new]! !


!StParser methodsFor: 'primitives' stamp: 'mir 4/13/2018 18:31'!
primitive: primitiveName module: moduleName
	"Create named primitive."
	"	<primitive: 'primScan' module: 'NKBarcodeScanner'>"
	^StPrimitiveNode new module: moduleName primitive: primitiveName! !


!StParser methodsFor: 'public access' stamp: 'mir 3/16/2018 09:32'!
encoder
	^encoder ifNil:
		[encoder := StEncoder new]! !

!StParser methodsFor: 'public access' stamp: 'jmv 3/2/2010 17:11'!
encoderClass: anEncoderClass
	encoder ifNotNil: [
		self error: 'encoder already set'].
	encoder := anEncoderClass new! !

!StParser methodsFor: 'public access' stamp: 'nice 9/19/2013 23:15'!
parse: sourceStreamOrString class: behavior

	^ self parse: sourceStreamOrString readStream class: behavior
		noPattern: false notifying: nil ifFail: [^nil]! !

!StParser methodsFor: 'public access' stamp: 'mir 4/9/2018 19:49'!
parse: sourceStream class: class noPattern: noPattern notifying: req ifFail: aBlock 
	| c |
	c := StCompilationCue
			source: sourceStream
			class: class.
	^ self 
		parseCue: c 
		noPattern: noPattern 
		ifFail: aBlock! !

!StParser methodsFor: 'public access' stamp: 'nice 9/20/2013 00:55'!
parseArgsAndTemps: aString 
        "Parse the argument, aString, answer nil if an error occurs. Otherwise, 
        answer an Array of strings (the argument names and temporary variable names)."

        aString == nil ifTrue: [^#()].
        doitFlag := false.               "Don't really know if a doit or not!!"
        ^self initPattern: aString
                return: [:pattern | (pattern at: 2) , (self temporariesIn: (pattern at: 1))]! !

!StParser methodsFor: 'public access' stamp: 'mir 4/9/2018 18:44'!
parseCue: aCue noPattern: noPattern ifFail: aBlock 
	"Answer a MethodNode for the argument, sourceStream, that is the root of
	 a parse tree. Parsing is done with respect to the CompilationCue to 
	 resolve variables. Errors in parsing are reported to the cue's requestor; 
	 otherwise aBlock is evaluated. The argument noPattern is a Boolean that is
	 true if the the sourceStream does not contain a method header (i.e., for DoIts)."

	| methNode myStream s p |
	myStream := aCue sourceStream.
	 p := myStream position.
	 s := myStream upToEnd.
	 myStream position: p.
	
	 self encoder init: aCue notifying: self.
	 self init: myStream cue: aCue failBlock: [^ aBlock value].
	
	 doitFlag := noPattern.
	 failBlock:= aBlock.
	 methNode := self method: noPattern context: cue context.
	methNode sourceText: s.
	^methNode
! !

!StParser methodsFor: 'public access' stamp: 'mir 4/27/2018 14:37'!
parseDoItCue: aCue ifFail: aBlock 
	"Answer a MethodNode for the argument, sourceStream, that is the root of
	 a parse tree. Parsing is done with respect to the CompilationCue to 
	 resolve variables. Errors in parsing are reported to the cue's requestor; 
	 otherwise aBlock is evaluated."

	| methNode myStream s p |
	myStream := aCue sourceStream.
	 p := myStream position.
	 s := myStream upToEnd.
	 myStream position: p.
	
	 self encoder init: aCue notifying: self.
	 self init: myStream cue: aCue failBlock: [^ aBlock value].
	
	 failBlock:= aBlock.
	 methNode := self doIt: #doIt arguments: #() precedence: 1.
	methNode sourceText: s.
	^methNode
! !

!StParser methodsFor: 'public access' stamp: 'nice 9/20/2013 00:51'!
parseMethodComment: aString setPattern: aBlock
	"Answer the method comment for the argument, aString. Evaluate aBlock 
	with the message pattern in the form #(selector, arguments, precedence)."

	self
		initPattern: aString
		return: aBlock.
	currentComment==nil
		ifTrue:	[^OrderedCollection new]
		ifFalse:	[^currentComment]! !

!StParser methodsFor: 'public access' stamp: 'nice 9/20/2013 00:51'!
parseParameterNames: aString 
	"Answer the parameter names for the argument, aString, which should 
	 parse successfully up to the temporary declaration or the end of the 
	 method header."

	self initScannerForTokenization.
	^self
		initPattern: aString
		return: [:pattern | pattern at: 2]! !

!StParser methodsFor: 'public access' stamp: 'eem 6/26/2014 12:35'!
parseSelector: aString 
	"Answer the message selector for the argument, aString, which should 
	 parse successfully up to the temporary declaration or the end of the 
	 method header."

	self allowUnderscoreSelectors ifFalse: [self initScannerForTokenization].
	^self
		initPattern: aString
		return: [:pattern | pattern at: 1]! !


!StParser methodsFor: 'scanning' stamp: 'nice 2/9/2012 14:02'!
advance
	| this |
	prevMark := hereMark.
	prevEnd := hereEnd.
	this := here.
	here := token.
	hereType := tokenType.
	hereMark := mark.
	hereEnd := source position - (aheadChar == DoItCharacter
		ifTrue: [hereChar == DoItCharacter
			ifTrue: [0]
			ifFalse: [1]]
		ifFalse: [2]).
	self scanToken.
	"Transcript show: 'here: ', here printString, ' mark: ', hereMark printString, ' end: ', hereEnd printString; cr."
	^this! !

!StParser methodsFor: 'scanning' stamp: 'hmm 7/16/2001 19:23'!
endOfLastToken

	^ prevEnd ifNil: [mark]! !

!StParser methodsFor: 'scanning'!
match: type 
	"Answer with true if next tokens type matches."

	hereType == type
		ifTrue: 
			[self advance.
			^true].
	^false! !

!StParser methodsFor: 'scanning' stamp: 'di 6/7/2000 08:44'!
matchReturn

	^ self match: #upArrow! !

!StParser methodsFor: 'scanning'!
matchToken: thing 
	"Matches the token, not its type."

	here = thing ifTrue: [self advance. ^true].
	^false! !

!StParser methodsFor: 'scanning'!
startOfNextToken
	"Return starting position in source of next token."

	hereType == #doIt ifTrue: [^source position + 1].
	^hereMark! !

!StParser methodsFor: 'scanning' stamp: 'nice 9/5/2013 23:06'!
transformAVerticalBarIntoABinarySelector
	"Transform a vertical bar into a binary selector.
	Eventually aggregate a serie of immediately following vertical bars and a binary selector.
	Note that this aggregation cannot occur at scan time, because a pair of vertical bars can be encountered in two valid constructs:
	- either as an empty temporaries specification,
	- or as a local temporaries specification in a block of arity > 0"
	here := '|'.
	hereType := #binary.
	[tokenType == #verticalBar and: [hereMark + here size = mark]]
		whileTrue: [
			here := here , '|'.
			hereEnd := hereEnd + 1.
			self scanToken].
	(tokenType == #binary and: [hereMark + here size = mark])
		ifTrue: [
			here := here asString , token.
			hereType := #binary.
			hereEnd := hereEnd + token size.
			self scanToken].! !


!StParser methodsFor: 'temps'!
bindArg: name

	^ self bindTemp: name! !

!StParser methodsFor: 'temps'!
bindTemp: name

	^name! !

!StParser methodsFor: 'temps' stamp: 'eem 5/13/2008 12:17'!
bindTemp: name in: methodSelector

	^name! !


!StParser methodsFor: 'private'!
addComment

	parseNode ~~ nil
		ifTrue: 
			[parseNode comment: currentComment.
			currentComment := nil]! !

!StParser methodsFor: 'private' stamp: 'mir 5/14/2018 21:50'!
allowUnderscoreAssignments
	^false! !

!StParser methodsFor: 'private' stamp: 'mir 4/27/2018 14:43'!
init: sourceStream cue: aCue failBlock: aBlock
	doitFlag := false.

	self setCue: aCue.
	failBlock := aBlock.
	requestorOffset := 0.
	super scan: sourceStream.
	prevMark := hereMark := mark.
	self advance
! !

!StParser methodsFor: 'private' stamp: 'mir 6/27/2018 12:23'!
initPattern: aString return: aBlock

	| result |
	self
		init: (aString asString readStream)
		cue: (StCompilationCue source: aString)
		failBlock: [^nil].
	encoder := self.
	result := aBlock value: (self pattern: false inContext: nil).
	encoder := failBlock := nil.  "break cycles"
	^result! !

!StParser methodsFor: 'private' stamp: 'nice 2/24/2013 22:38'!
setCue: aCue
	cue := aCue! !


!StParser methodsFor: 'accessing' stamp: 'lw 5/31/2011 17:35'!
queriedUnusedTemporaries

	queriedUnusedTemporaries ifNil: 
		[queriedUnusedTemporaries := Dictionary new].
	^queriedUnusedTemporaries! !

!StParser methodsFor: 'accessing' stamp: 'lw 5/27/2011 18:47'!
tempsMark
	^ tempsMark! !

!StParser methodsFor: 'accessing' stamp: 'lw 5/27/2011 18:47'!
tempsMark: aNumber
tempsMark := aNumber! !

"-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- "!

StParser class
	instanceVariableNames: ''!

!StParser class methodsFor: 'accessing' stamp: 'eem 12/1/2008 14:32'!
primitivePragmaSelectors
	"Answer the selectors of pragmas that specify VM primitives.
	 Needed for compile and decomple."
	^#(primitive:
		primitive:error:
		primitive:error:module:
		primitive:module:
		primitive:module:error:)! !


StLeafNode subclass: #StSelectorNode
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	category: 'Compiler-JS'!
!StSelectorNode commentStamp: 'mir 6/26/2018 21:15' prior: 0!
!



!StSelectorNode methodsFor: 'initialize-release' stamp: 'eem 9/25/2008 14:56'!
key: aSelector
	"This is for printing of FFI selectors."
	key := aSelector! !

!StSelectorNode methodsFor: 'initialize-release' stamp: 'mir 4/30/2018 17:23'!
name: literal key: object 
	"For compatibility with Encoder>>name:key:class:type:set:"
	^self key: object! !


StSelectorNode subclass: #StSpecialSelectorNode
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	category: 'Compiler-JS'!
!StSpecialSelectorNode commentStamp: 'mir 6/26/2018 21:15' prior: 0!
!



StLeafNode subclass: #StVariableNode
	instanceVariableNames: 'name'
	classVariableNames: ''
	poolDictionaries: ''
	category: 'Compiler-JS'!
!StVariableNode commentStamp: 'mir 6/26/2018 21:15' prior: 0!
!


!StVariableNode methodsFor: 'accessing' stamp: 'tk 1/30/2001 13:45'!
name
	^ name! !


!StVariableNode methodsFor: 'initialize-release'!
asStorableNode: encoder
	^ self! !

!StVariableNode methodsFor: 'initialize-release' stamp: 'eem 12/1/2008 13:51'!
name: string
	"Change name"

	name := string! !

!StVariableNode methodsFor: 'initialize-release' stamp: 'mir 5/25/2018 17:33'!
name: string key: object
	"Only used for std variables, nil, true, false, self, etc."
	name := string.
	key := object! !


!StVariableNode methodsFor: 'generate' stamp: 'mir 5/31/2018 16:42'!
generateAssignment: valueNode on: generator
	self generateOn: generator.
	generator generateAssignment.
	valueNode generateInlinedValueOn: generator! !

!StVariableNode methodsFor: 'generate' stamp: 'mir 8/20/2018 17:23'!
generateBlockBodyOn: generator
	self generateAsReceiverOn: generator.
	generator blockVariableInvocation! !

!StVariableNode methodsFor: 'generate' stamp: 'mir 7/5/2018 21:57'!
generateOn: generator
	generator generateVariable: self! !


!StVariableNode methodsFor: 'testing' stamp: 'eem 5/14/2008 09:11'!
assignmentCheck: encoder at: location
	^(encoder cantStoreInto: name) ifTrue: [location] ifFalse: [-1]! !

!StVariableNode methodsFor: 'testing' stamp: 'eem 5/14/2008 09:13'!
isSelfPseudoVariable
	"Answer if this StParseNode represents the 'self' pseudo-variable."

	^ key = 'self' or: [name = '{{self}}']! !

!StVariableNode methodsFor: 'testing' stamp: 'mir 4/30/2018 17:01'!
isSuperPseudoVariable
	^key = 'super' or: [name = '{{super}}']! !

!StVariableNode methodsFor: 'testing' stamp: 'eem 8/13/2010 15:34'!
isUndeclared
	^false! !

!StVariableNode methodsFor: 'testing' stamp: 'mir 3/14/2018 11:27'!
isVariableNode
	^true! !

!StVariableNode methodsFor: 'testing'!
isVariableReference

	^true! !


StVariableNode subclass: #StClassVariableNode
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	category: 'Compiler-JS'!

!StClassVariableNode methodsFor: 'generate' stamp: 'mir 5/31/2018 19:37'!
generateAssignment: valueNode on: generator
	generator generateClassVariableAt: self put: valueNode! !

!StClassVariableNode methodsFor: 'generate' stamp: 'mir 5/31/2018 19:42'!
generateOn: generator
	generator generateClassVariableAt: self! !


StVariableNode subclass: #StInstanceVariableNode
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	category: 'Compiler-JS'!

!StInstanceVariableNode methodsFor: 'generate' stamp: 'mir 5/30/2018 16:20'!
generateOn: generator
	generator generateInstanceVariable: self! !


StVariableNode subclass: #StLiteralVariableNode
	instanceVariableNames: 'readNode writeNode'
	classVariableNames: ''
	poolDictionaries: ''
	category: 'Compiler-JS'!

!StLiteralVariableNode methodsFor: 'generate' stamp: 'mir 5/25/2018 18:33'!
generateOn: generator
	self isSelfPseudoVariable
		ifTrue: [generator selfPseudoVariable: self]
		ifFalse: [
			self key isVariableBinding
				ifTrue: [key generateOn: generator]
				ifFalse: [generator literalVariable: self]]! !


!StLiteralVariableNode methodsFor: 'testing' stamp: 'eem 5/20/2010 09:12'!
assignmentCheck: encoder at: location
	^(key isVariableBinding and: [key canAssign not])
		ifTrue: [location]
		ifFalse: [-1]! !


StVariableNode subclass: #StTempVariableNode
	instanceVariableNames: 'argType hasRefs hasDefs scope definingScope readingScopes writingScopes remoteNode'
	classVariableNames: ''
	poolDictionaries: ''
	category: 'Compiler-JS'!
!StTempVariableNode commentStamp: 'mir 6/26/2018 21:15' prior: 0!
!


!StTempVariableNode methodsFor: 'initialize-release' stamp: 'mir 4/30/2018 17:56'!
name: varName index: i type: type scope: level
	"Only used for initting temporary variables"
	self halt.
	hasDefs := hasRefs := false.
	scope := level.
	^super name: varName key: varName! !

!StTempVariableNode methodsFor: 'initialize-release' stamp: 'mir 4/30/2018 17:58'!
name: varName scope: level
	"Only used for initting temporary variables"
	hasDefs := hasRefs := false.
	scope := level.
	^super name: varName key: varName! !

!StTempVariableNode methodsFor: 'initialize-release'!
nowHasDef
	hasDefs := true! !

!StTempVariableNode methodsFor: 'initialize-release'!
nowHasRef
	hasRefs := true! !

!StTempVariableNode methodsFor: 'initialize-release'!
scope: level
	"Note scope of temporary variables.
	Currently only the following distinctions are made:
		0	outer level: args and user-declared temps
		1	block args and doLimiT temps
		-1	a block temp that is no longer active
		-2	a block temp that held limit of to:do:"
	scope := level! !


!StTempVariableNode methodsFor: 'testing' stamp: 'mir 6/27/2018 12:07'!
assignmentCheck: encoder at: location
	^((self isBlockArg and: [StScanner allowBlockArgumentAssignment not])
	    or: [self isMethodArg])
			ifTrue: [location]
			ifFalse: [-1]! !

!StTempVariableNode methodsFor: 'testing' stamp: 'eem 9/8/2008 18:22'!
beBlockArg
	argType := #block! !

!StTempVariableNode methodsFor: 'testing' stamp: 'eem 9/8/2008 18:21'!
beMethodArg
	argType := #method! !

!StTempVariableNode methodsFor: 'testing' stamp: 'eem 9/8/2008 18:24'!
isArg
	^argType notNil! !

!StTempVariableNode methodsFor: 'testing' stamp: 'eem 9/8/2008 18:20'!
isBlockArg
	^#block == argType! !

!StTempVariableNode methodsFor: 'testing' stamp: 'eem 8/14/2010 11:02'!
isDeclaredAtMethodLevel
	"For the explainer."
	^scope = 0! !

!StTempVariableNode methodsFor: 'testing' stamp: 'eem 9/8/2008 18:20'!
isMethodArg
	^#method == argType! !

!StTempVariableNode methodsFor: 'testing' stamp: 'eem 5/29/2008 15:51'!
isRemote
	^remoteNode notNil! !

!StTempVariableNode methodsFor: 'testing'!
isTemp
	^ true! !

!StTempVariableNode methodsFor: 'testing'!
isUndefTemp
	^ hasDefs not! !

!StTempVariableNode methodsFor: 'testing'!
isUnusedTemp
	^ hasRefs not! !

!StTempVariableNode methodsFor: 'testing' stamp: 'eem 5/29/2008 15:51'!
remoteNode
	^remoteNode! !

!StTempVariableNode methodsFor: 'testing' stamp: 'eem 5/30/2008 12:31'!
scope
	"Answer scope of temporary variables.
	 Currently only the following distinctions are made:
		 0	outer level: args and user-declared temps
		 1	block args and doLimiT temps
		-1	a block temp that is no longer active
		-2	a block temp that held limit of to:do:"
	^scope! !


StVariableNode subclass: #StUndeclaredVariableNode
	instanceVariableNames: 'tag'
	classVariableNames: ''
	poolDictionaries: ''
	category: 'Compiler-JS'!

!StUndeclaredVariableNode methodsFor: 'generate' stamp: 'mir 7/5/2018 21:58'!
generateOn: generator
	generator generateUndeclaredVariable: self! !


!StUndeclaredVariableNode methodsFor: 'testing' stamp: 'eem 8/13/2010 15:34'!
isUndeclared
	^true! !


!StUndeclaredVariableNode methodsFor: 'accessing' stamp: 'eem 8/17/2010 16:30'!
tag
	"Tag can be whatever one wants it to be; used by Parser to tag
	  undeclared temps with the user's desired declaration level."

	^tag! !

!StUndeclaredVariableNode methodsFor: 'accessing' stamp: 'eem 8/17/2010 16:30'!
tag: anObject
	"Tag can be whatever one wants it to be; used by Parser to tag
	  undeclared temps with the user's desired declaration level."

	tag := anObject! !

JSGenerator initialize!
StParseNode initialize!
StMessageNode initialize!
StScanner initialize!