! Class methodsFor: 'Snapshot-startup' !
launch
	" Private - The system has been launched and start execution.
	The default action is to do nothing.
	Subclasses can refine this method to execute actions on startup.
	"! !

! Class methodsFor: 'Snapshot-startup' !
pwrUp
	"Private - Subclasses should refine this method to execute actions on startup."
	^self! !

! Smalltalk methodsFor: 'Snapshot-evaluating' !
globalsDo: aBlock
	" Private - Evaluates aBlock for each globals defined in the receiver. "

	^self globalsDo: aBlock! !

! Smalltalk methodsFor: 'Snapshot-evaluating' !
globalsDo: aBlock separatedBy: anotherBlock
	" Private - Evaluates aBlock for each globals defined in the receiver. "

	| first | first := true.
	^self globalsDo: [:each|
	    first
		ifTrue: [ first := false ]
		ifFalse: [ anotherBlock value ].
	    aBlock value: each
	]! !

! Smalltalk methodsFor: 'Snapshot-startup' !
launch
	" The system has been launched and start execution.
	The default action is to propagate #launch to current classes then #initialize and finally #pwrUp.
	"

	self classes
		do: [:each | each launch];
		do: [:each | each initialize];
		do: [:each | each pwrUp]! !

! Object methodsFor: #evaluating !
logEvaluate: source
	" Return the result of valuating the receiver.
	Log the source expression as reference of evaluation.
	"

	| result |
	result := self evaluate.
	"SystemManager log: source."
	^result! !
