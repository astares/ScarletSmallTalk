Object
 subclass: #Transcript
 instanceVariableNames: ''
 classVariableNames: ''
 category: #Transcript!

! Transcript class methodsFor: #io !
cr
	" Put a line break sequence onto the receiver. "
	self nextPutAll: Character cr! !

! Transcript class methodsFor: #io !
show: aString
	self nextPutAll: aString asString.! !

! Transcript class methodsFor: #io !
nextPutAll: aCollection
	" Put aCollection onto the receiver. "

 	<primitive: 'primNextPutAll' module: 'SKTranscript'>
 	self primitiveFailed! ! !

