! Set methods !
indexOf: anObject ifAbsent: aBlock
	" Private,Internal - Return the position of anObject in the receiver, or the result of evaluating aBlock. "

	(self includes: anObject) ifFalse: [ ^aBlock value ].
	^contents indexOf: anObject ifAbsent: aBlock! !
