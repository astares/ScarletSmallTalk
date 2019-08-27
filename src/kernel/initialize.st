!Object methodsFor: 'printing'!
print: what
	" Output what to console. "

	<primitive: 'primPrint' module: 'SKObject'>! !

!Object methodsFor: 'fileIn'!
fileIn: fileName
	" FileIn contents of file at fileName. "

	<primitive: 'primFileIn' module: 'SKObject'>
	self primitiveFailed! !

!Object methodsFor: 'fileIn'!
fileInJS: fileName
	" FileIn javascript code from file at fileName. "

	<primitive: 'primFileInJS' module: 'SKObject'>
	self primitiveFailed! !