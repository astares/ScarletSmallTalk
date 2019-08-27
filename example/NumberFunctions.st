! Number methodsFor: #prompting !
factorial
	"Answer the factorial of the receiver."

	self = 0 ifTrue: [^ 1].
	self > 0 ifTrue: [^ self * (self - 1) factorial].
	Prompter error: 'Not valid for negative integers'! !