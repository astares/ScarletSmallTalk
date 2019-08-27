!Character methodsFor: '*Compiler-JS' stamp: 'mir 4/6/2018 19:16'!

generateOn: generator

	generator generateCharacterLiteral: self! !



!String methodsFor: '*Compiler-JS' stamp: 'mir 4/6/2018 15:39'!

generateOn: generator

	generator generateStringLiteral: self! !



!String methodsFor: '*Compiler-JS' stamp: 'mir 5/24/2018 18:27'!

asJavascript

	"Escape the string, but only if needed. 

	The implementation differs by platform"



" !!""#$%&'()*+,-./"

"%20%21%22%23%24%25%26%27%28%29*+%2C-./"



"0123456789:;<=>?"

"0123456789%3A%3B%3C%3D%3E%3F"



"@ABCDEFGHIJKLMNO"

"@ABCDEFGHIJKLMNO"



"PQRSTUVWXYZ[\\]^_"

"PQRSTUVWXYZ%5B%5C%5D%5E_"



"`abcdefghijklmno"

"%60abcdefghijklmno"



"pqrstuvwxyz{|}-"

"pqrstuvwxyz%7B%7C%7D-"



	| jsStream |

	jsStream := WriteStream on: (String new: self size + 2).

	(self matchesRegex: '^[a-zA-Z0-9_:.$ ]*')

		ifTrue: [	jsStream nextPut: $"; nextPutAll: self; nextPut: $"]

		ifFalse: [

			jsStream nextPutAll: 'unescape("'.

			self do: [:char |

				| charCode |

				charCode := char charCode.

				(char isAlphaNumeric or: ['_:. ' includes: char])

					ifTrue: [jsStream nextPut: (Character value: charCode)]

					ifFalse: [

						jsStream nextPut: $%.

						jsStream nextPut: (charCode // 16) asHexDigit.

						jsStream nextPut: (charCode \\ 16) asHexDigit].

					].

			jsStream nextPutAll: '")'].

	^jsStream contents.

! !



!Global methodsFor: '*Compiler-JS' stamp: 'mir 5/25/2018 18:31'!

generateOn: generator

self halt.

	key generateOn: generator! !



!Behavior methodsFor: '*Compiler-JS' stamp: 'mir 4/30/2018 16:54'!

variablesDo: aBlock

	self instVarNamesAndOffsetsDo: [:variableName :index | aBlock value: variableName]! !

generate

	** ERROR!  THIS SCRIPT IS MISSING ** 



  

!Behavior methodsFor: '*Compiler-JS' stamp: 'mir 5/25/2018 18:24'!

generateMethod: selector

	| generator stEnvironment |

	generator := JSGenerator internal.

	stEnvironment := StEnvironment bootstrap.

	stEnvironment addClassDefinition: (StClassDefinition name: self name superclass: nil category: 'Kernel').

	generator environment: stEnvironment.

	self generateMethod: selector on: generator.

	^generator source! !



!Behavior methodsFor: '*Compiler-JS' stamp: 'mir 4/30/2018 18:30'!

generateMethod: selector on: generator

	generator startSmalltalkMethodBinding: self selector: selector.

	StCompiler new

		compileMethod: (self sourceCodeAt: selector)

		class: self

		environment: generator environment

		generateOn: generator.

	generator endSmalltalkMethodBinding: self selector: selector

! !



!Behavior methodsFor: '*Compiler-JS' stamp: 'mir 4/7/2018 15:14'!

generateMethodsOn: generator

	self selectorsDo: [:selector |

		self generateMethod: selector on: generator]

! !



!Behavior methodsFor: '*Compiler-JS' stamp: 'mir 4/7/2018 13:23'!

generateOn: generator

	self generateClassOn: generator.

	self generateMethodsOn: generator! !



!Class methodsFor: '*Compiler-JS' stamp: 'mir 4/7/2018 13:32'!

generateClassOn: generator

	generator

		generate: self name asString

		superclass: superclass name asString

		instanceVariableNames: self instVarNames

		classVariableNames: self classVarNames

		poolDictionaries: self sharedPools

		category: self category asString! !



!Metaclass methodsFor: '*Compiler-JS' stamp: 'mir 4/30/2018 21:09'!

generateClassOn: generator

	generator generateMeta: thisClass instanceVariableNames: ''

! !

