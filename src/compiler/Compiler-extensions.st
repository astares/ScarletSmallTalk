!UndefinedObject methodsFor: '*Compiler-JS' stamp: 'mir 8/14/2018 22:27'!
generateOn: generator
	generator generateNilLiteral: self asString! !

!Boolean methodsFor: '*Compiler-JS' stamp: 'mir 8/14/2018 21:32'!
generateOn: generator
	generator generateBooleanLiteral: self! !

!Array methodsFor: '*Compiler-JS' stamp: 'mir 4/6/2018 15:34'!
generateOn: generator
	generator generateArrayLiteral: self! !

!String methodsFor: '*Compiler-JS' stamp: 'mir 4/6/2018 15:39'!
generateOn: generator
	generator generateStringLiteral: self! !

!Number methodsFor: '*Compiler-JS' stamp: 'mir 4/6/2018 15:38'!
generateOn: generator
	generator generateNumberLiteral: self! !

!Object methodsFor: 'testing' stamp: 'ar 8/14/2001 23:19'!
isVariableBinding
	"Return true if I represent a literal variable binding"
	^false
	! !
