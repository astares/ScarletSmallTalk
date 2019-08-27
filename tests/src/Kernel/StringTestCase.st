TestCase subclass: #StringTestCase !

! StringTestCase methodsFor: #running !

testFromString

	self 
		assert: (String fromString: 'hello, world!!')
		equals: 'hello, world!!'.
	self
		assert: (String fromString: '')
		equals: ''.
	self
		should: [(String fromString: 12345)]
		raise: Error. !

testCR

	self
		assert: String cr
		equals: (String fromCharCode: 13). !

testLF

	self
		assert: String lf
		equals: (String fromCharCode: 10). !

testCRLF

	self
		assert: String crlf
		equals: ((String fromCharCode:13),(String fromCharCode:10)). !

testSpace

	self
		assert: String space
		equals: (String fromCharCode: 32). !

testTab

	self
		assert: String tab
		equals: (String fromCharCode: 9). !

testSize

	self
		assert: '123456789' size
		equals: 9.
	self
		assert: '' size
		equals: 0. !

testAt

	self
		assert: ('123456789' at: 6)
		equals: '6'.
	self
		should: [('' at: 1)]
		raise: Error.
	self
		should: [('12345' at: 2.5)]
		raise: Error.
	self
		should: [('12345') at: -2]
		raise: Error.
	self
		should: [('12345' at: 'one')]
		raise: Error. !

testEquals

	| nonStrings |
	nonStrings := #(1 true false #() #(1) nil).
	nonStrings do:[ :each | self deny: each = '1' ].
	self assert: 'Hello World!!' = 'Hello World!!'.
	self deny: 'Hello World!!' = 'HelloWorld!!'.
	self assert: 'Hello World!!' = ('Hello ','World!!'). !

testDo

	| result |
	result := ''.
	'hello world!!' do:[ :each | result := result,each].
	self
		assert: result
		equals: 'hello world!!'.
	self
		should: ['123' do: 3]
		raise: Error.
	self
		should: ['123' do: [:x :y | x + y]]
		raise: Error. ! 

testDetectIfNone

	| alphabet alphabetWithoutE result|
	alphabet := 'abcdefghijklmnopqrstuvwxyz'.
	alphabetWithoutE  := 'abcdfghijklmnopqrstuvwxyz'.
	result := true.
	alphabet detect:[ :each | each = 'e'] ifNone: [result := false].
	self assert: result.
	alphabetWithoutE detect:[ :each | each = 'e'] ifNone: [result := false].
	self deny: result.
	self
		should: [alphabet detect: [:each | each = 'e'] ifNone: false]
		raise: Error.
	self
		should: [alphabet detect: false ifNone: [result := false]]
		raise: Error.
	self
		should: [alphabet detect: [:each :each2 | each > each2] ifNone: [false]]
		raise: Error. !

testEscape

	self
		assert: '!!' escaped
		equals: '%21'.
	self
		assert: 'ć' escaped
		equals: '%u0107'. !

testUnescape

	self
		assert: '%21' unescaped
		equals: '!!'.
	self
		assert: '%u0107' unescaped
		equals: 'ć'. !

testAsEncodedURI

	self
		assert: '?x=test' asEncodedURI
		equals: '%3Fx%3Dtest'.
	self
		assert: '?x=шеллы' asEncodedURI
		equals: '%3Fx%3D%D1%88%D0%B5%D0%BB%D0%BB%D1%8B'. !

testAsDecodedURI

	self
		assert: '%3Fx%3Dtest' asDecodedURI
		equals: '?x=test'.
	self
		assert: '%3Fx%3D%D1%88%D0%B5%D0%BB%D0%BB%D1%8B' asDecodedURI
		equals: '?x=шеллы'. !

testConcat
	| undefinedString |
	self
		assert: 'Hello' , undefinedString
		equals: 'Hello'.
	self
		assert: 'Hello' , nil
		equals: 'Hello'.
	self
		assert: 'Hello, ','World!!'
		equals: 'Hello, World!!'. !

testCopyWith

	self
		assert: ('Hello,' copyWith:'1')
		equals: 'Hello,1'. !

testCopyFromTo

	self
		should: [('123Hello, World!!123' copyFrom: '1' to: 2)]
		raise: Error.
	self
		should: [('123Hello, World!!123' copyFrom: 1 to: '2')]
		raise: Error.
	self 
		assert: ('123Hello, World!!123' copyFrom: 4 to: 16)
		equals: 'Hello, World!!'. !

testIndexOf

	self
		assert: ('hello, world!!' indexOf: 'w')
		equals: 8.
	self
		assert: ('hello, world!!' indexOf: 'z')
		equals: 0.
	self
		assert: ('hello, world!!' indexOf: 'world')
		equals: 8.
	self
		should: [('1234' indexOf:3)]
		raise: Error. !

testIndexOfStartingFrom

	self
		assert: ('hello, world!!' indexOf: 'l' startingAt: 5)
		equals: 11.
	self
		assert: ('123' indexOf: '2' startingAt: 4)
		equals: 0.
	self
		should: ['123' indexOf: 2 startingAt: 1]
		raise: Error.
	self
		should: ['123' indexOf: '2' startingAt: '1']
		raise: Error. !

testLastIndexOf

	self
		assert: ('aaHello Worlda' lastIndexOf: 'a')
		equals: 14.
	self
		assert: ('aaHello Worlda' lastIndexOf:'z')
		equals: 0. !

testLastIndexOfStartingFrom

	self
		assert: ('aaHello Worlda' lastIndexOf: 'l' startingAt: 10)
		equals: 6.
	self
		assert: ('aaHello Worlda' lastIndexOf: 'l' startingAt: 14)
		equals: 12.
	self
		assert: ('121' lastIndexOf: '1' startingAt: 3)
		equals: 3. !

testAsJavascript

	self
		assert: '!!' asJavascript
		equals: 'unescape("%21")'.
	self
		assert: '@' asJavascript
		equals: 'unescape("@")'. !

testSplit
	
	self
		assert: ('162636465' tokenize: 6)
		equals: #('1' '2' '3' '4' '5').
	self
		assert: ('1 2 3 4 5' tokenize: ' ')
		equals: #('1' '2' '3' '4' '5'). !

testIsLetter

	self
		assert: 'L' isLetter;
		assert: 'z' isLetter;
		deny: '1' isLetter;
		deny: 'hey' isLetter;
		deny: '&' isLetter. !

testIsDigit

	self
		assert: '1' isDigit;
		assert: '0' isDigit;
		deny: 'a' isDigit;
		deny: '11' isDigit. !

testAsUppercase

	self
		assert: 'hello, world!!' asUpperCase
		equals: 'HELLO, WORLD!!'. !

testAsLowercase

	self
		assert: 'HELLO, WORLD!!' asLowerCase
		equals: 'hello, world!!'. !

testLessThan

	| nonStrings |
	nonStrings := #(1 #() false true nil).
	nonStrings do:[ :each | self should:['test' < each] raise: Error].
	self
		assert: ('abc' < 'xyz');
		assert: ('678' < '76');
		deny: ('abc' < 'abc');
		deny: ('26' < '128'). !

testGreaterThan

	| nonStrings |
	nonStrings := #(1 #() false true nil).
	nonStrings do:[ :each | self should:['test' > each] raise: Error].
	self
		assert: ('cat' > 'car');
		assert: ('70' > '432');
		deny: ('abc' > 'abc');
		deny: ('324' > '8'). !

testLessThanEqualTo

	| nonStrings |
	nonStrings := #(1 #() false true nil).
	nonStrings do:[ :each | self should:['test' <= each] raise: Error].
	self
		assert: ('abc' <= 'xyz');
		assert: ('678' <= '76');
		assert: ('abc' <= 'abc');
		deny: ('26' <= '128'). !

testGreaterThanEqualTo

	| nonStrings |
	nonStrings := #(1 #() false true nil).
	nonStrings do:[ :each | self should:['test' >= each] raise: Error].
	self
		assert: ('cat' >= 'car');
		assert: ('70' >= '432');
		assert: ('abc' >= 'abc');
		deny: ('324' >= '8'). !

testIsCharacter

	self
		assert: 'r' isCharacter;
		assert: '2' isCharacter;
		deny: '' isCharacter;
		deny: 'hello' isCharacter. !

testAsciiValue

	self
		assert: '!!' asciiValue
		equals: 33.
	self
		assert: 'A' asciiValue
		equals: 65.
	self 
		assert: 'test' asciiValue
		equals: 116. !

testIsSep

	self
		assert: String space isSeparator;
		assert: String tab isSeparator;
		assert: String cr isSeparator;
		assert: String lf isSeparator;
		deny: 'test' isSeparator. !

testReplaceRegExp

	| testString regExp |
	testString := 'Mr Blue has a blue house and a blue car'.
	regExp := (RegularExpression fromString:'blue' flag:'g').
	self
		assert: (testString replaceRegexp: regExp with: 'purple')
		equals: 'Mr Blue has a purple house and a purple car'.
	self
		should: [(testString replaceRegexp: '/test/' with: 'purple')]
		raise: Error.
	self
		should: [(testString replaceRegexp: regExp with: 1)]
		raise: Error. !

testAsSelector

	self
		assert: '\' asSelector
		equals:'_bk'.
	self
		assert: '*' asSelector
		equals:'_star'.
	self
		assert: '#toString' asSelector
		equals: 'toString'.
	self
		assert: '#toString:value:' asSelector
		equals: 'toString'.
	self
		assert: 'value:value:' asSelector
		equals: 'value_value_'. !

testReplaceWith

	self 
		assert: ('hello hello world' replace: 'hello' with: 'no')
		equals: 'no no world'.
	self
		should: [('hello hello world' replace: 3 with: 'no')]
		raise: Error.
	self
		should: [('hello hello world' replace: 'hello' with: true)]
		raise: Error. !

testFromCharCode

	self
		assert: (String fromCharCode: #(61 62 63))
		equals: '=>?'.
	self
		assert: (String fromCharCode: 81)
		equals: 'Q'.
	self
		assert: (String fromCharCode: 10)
		equals: String lf.
	self
		should: [(String fromCharCode: '81')]
		raise: Error. !

testArgumentCount

	self
		assert: 'test:test2:test3:' argumentCount
		equals: 3.
	self
		assert: '+' argumentCount
		equals: 1.
	self
		assert: 'test' argumentCount
		equals: 0. !

testMatchARegExp

	| testString |
	testString := 'test'.
	self
		 assert: ('hello, test world!!' match: testString);
		 deny: ('hello, world!!' match: testString).
	self
		should: [('1234' match: 3)]
		raise: Error. !

testWithIndexDo

	'123' withIndexDo: [ :each :index | self assert: each = index asString].
	self
		should: ['123' withIndexDo: 5]
		raise: Error.
	self
		should: ['123' withIndexDo:[:each | self assert each = 1]]
		raise: Error. !

testAsString

	self
		assert: 'hello, world' asString
		equals: 'hello, world'. !

testAsArrayOfSubstringsSeparatedBy

	self
		assert: ('the red fox' asArrayOfSubstringsSeparatedBy: ' ')
		equals: #('the' 'red' 'fox'). !

testCopyReplaceFromToWith

	self
		assert: ('those are nice cats' copyReplaceFrom: 16 to: 19 with: 'dogs')
		equals: 'those are nice dogs'. !

testReplaceAll

	self
		assert: ('fails, this test fails' replaceAll: 'fails' with: 'passes')
		equals: 'passes, this test passes'. !

testBetweenAnd

	self
		assert: ('car' between: 'can' and: 'cat');
		deny: ('bug' between: 'zap' and: 'zip'). !

testCopyWithout

	self
		assert: ('abcdefghijk' copyWithout: 'ghijk')
		equals: 'abcdef'. !

testFindFirst

	self
		assert: ('abcb' findFirst: [:each | each = 'b'])
		equals: 2. !

testFindLast

	self
		assert: ('zzaza' findLast: [:each | each = 'z'])
		equals: 4. !

testIndexOfIfAbsent

	| result |
	result := 0.
	result := ('test' indexOf: 'es' ifAbsent: [result := 0]).
	self 
		assert: result 
		equals: 2.
	result := ('test' indexOf: 'z' ifAbsent: [result := 0]).
	self 
		assert: result
		equals: 0. !

testReversed

	self
		assert: '12345' reversed
		equals: '54321'. !

testReverseDo

	| result |
	result := ''.
	'12345' reverseDo: [ :each | result := result,each ].
	self 
		assert: result 
		equals: '54321'. !

testWithDo

	| result |
	result := ''.
	'1357' with: '2468' do: [ :odd :even | result := result,odd,even ].
	self 
		assert: result 
		equals: '12345678'. !

testAsArray

	| result |
	result := '12345' asArray.
	self assert: result isArray.
	self 
		assert: result
		equals: #('1' '2' '3' '4' '5'). !

testAsSet

	| testSet |
	testSet := 'apple' asSet.
	self assert: testSet isSet.
	self
		assert: testSet size
		equals: 4.
	'apple' do: [:each | self assert: (testSet includes: each)]. !
	

testDetect

	self 
		assert: ('abcd' detect: [:each | each > 'c'])
		equals: 'd'.
	self
		should: [('abcd' detect: [:each | each > 'z'])]
		raise: Error. !

testDetectIfNone

	| testValue |
	testValue := 0.
	testValue := ('abcd' detect: [ :each | each > 'd'] ifNone: [-1]).
	self 
		assert: testValue
		equals: -1.
	testValue := ('abcd' detect: [ :each | each = 'd'] ifNone: [-2]).
	self
		assert: testValue
		equals: 'd'. !

testDoSeparatedBy

	| result |
	result := ''. 
	('12345' do: [:each | result := result,each] separatedBy: [result := result, ' ']).
	self
		assert: result
		equals: '1 2 3 4 5'. !

testIncludes

	self 
		assert: ('1234' includes: '2');
		deny: ('abcd' includes: '2'). !

testInjectInto

	| result |
	result := ('12345' inject: 'First' into: [:a :b | a,b ]).
	self
		assert: result
		equals: 'First12345'. !

testIsEmpty

	self 
		assert: '' isEmpty;
		deny: 'test' isEmpty. !

testNotEmpty

	self
		assert: 'test' notEmpty;
		deny: '' notEmpty. !

testOccurrencesOf

	self
		assert: ('aaa' occurrencesOf: 'a')
		equals: 3.
	self
		assert: ('abc' occurrencesOf: 'z')
		equals: 0. !

testSize

	self
		assert: '12345' size
		equals: 5.
	self
		assert: '' size
		equals: 0. !

testExec

	| testReg result |
	testReg := (RegularExpression fromString:'blue' flag:'g').
	result := testReg exec: 'that color is blue, blue'.
	self
		assert: result
		equals: #('blue').
	result := testReg exec: 'that color is red'.
	self assert: result isNil.
	testReg := (RegularExpression fromString:'d' flag:'g').
	self 
		should: [testReg exec: false]
		raise: Error. !

testCompile
	
	| reg |
	reg := (RegularExpression fromString:'blue' flag:'g').
	self 
		assert: ('red blue' replaceRegexp: reg with: 'test')
		equals: 'red test'.
	reg compile: 'red'.
	self 
		assert: ('red blue' replaceRegexp: reg with: 'test')
		equals: 'test blue'.
	self
		should: [reg compile: 23]
		raise: Error. !

testTest

	| reg |
	reg := (RegularExpression fromString:'f' flag:'g').
	self
		assert: (reg test: 'abcdefg');
		deny: (reg test: 'abcde').
	self
		should: [reg test: true]
		raise: Error. !

testAsNumber

	self
		assert: '5' asNumber
		equals: 5.
	self
		assert: '' asNumber
		equals: 0.
	self 
		assert: '2rr100' asNumber
		equals: 0.
	self 
		assert: '2r100' asNumber
		equals: 4 ! !