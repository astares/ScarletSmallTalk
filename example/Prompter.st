Object 
	subclass: #Prompter
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	category: 'Native-UI'!

! Prompter class methodsFor: #prompting !
info: message
	"Show the informational message"

 	<primitive: 'primInfo' module: 'SKPrompter'>
 	self primitiveFailed! !

! Prompter class methodsFor: #prompting !
error: message
	"Show the error message"

 	self info: message! !
