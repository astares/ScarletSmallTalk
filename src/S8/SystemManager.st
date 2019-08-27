EventManager
	subclass: #SystemManager
	instanceVariableNames: ''
	classVariableNames: ' Current '
	poolDictionaries: ''
	category: #Snapshot!

! SystemManager class methodsFor: #events !
constructEventsTriggered
	" Private - Return the events managed by instances of the receiver. "

	^super constructEventsTriggered ,#(
		#aboutToBind:to:
		#methodBound:to:
		#aboutToRemove:from:
		#methodRemoved:from:
		#aboutToChange:to:
		#aboutToCreateClass:with:
		#classChanged:
		#classShapeChanged:
		#object:at:notFoundIn:
		#log:
		#memoryWarning:
	)! !

! SystemManager class methodsFor: #singleton !
currentOrNil
	" Return the current instance of the receiver. "

	^self classVariableAt: #Current ifAbsent: [ nil ]! !

! SystemManager class methodsFor: #singleton !
current
	" Return the current instance of the receiver. "

	Current isNil ifTrue: [ self current: self new ].
	^Current! !

! SystemManager class methodsFor: #singleton !
current: aSystemManager
	" Set the current source manager of the system. "

	Current := aSystemManager.
	aSystemManager install.! !

! SystemManager class methodsFor: #log !
log: aString
	" Log aString onto loggin stream. "

	Current notNil ifTrue: [ Current log: aString ]! !

! SystemManager class methodsFor: #memory !
memoryWarning: anArgument
	" Trigger a memory warning event. "

	Current notNil ifTrue: [ Current memoryWarning: anArgument ]! !

! SystemManager methodsFor: #install !
install
	" Private - Install the receiver as the source manager of the system.
	The default action is to do nothing.
	This method can be refined by subclasses.
	"! !

! SystemManager methodsFor: 'tracking-methods' !
aboutToBind: aMethod to: aClass
	" Private - The method will be bound to aClass. "

	^self triggerEvent: #aboutToBind:to: with: aMethod with: aClass ! !

! SystemManager methodsFor: 'tracking-methods' !
methodBound: aMethod to: aClass
	" Private - The method has been bound to aClass. "

	^self triggerEvent: #methodBound:to: with: aMethod with: aClass ! !

! SystemManager methodsFor: 'tracking-methods' !
aboutToRemove: aMethod from: aClass
	" Private - The method will be removed from aClass. "

	^self triggerEvent: #aboutToRemove:from: with: aMethod with: aClass ! !

! SystemManager methodsFor: 'tracking-methods' !
methodRemoved: aMethod from: aClass
	" Private - The method has been removed from aClass. "

	^self triggerEvent: #methodRemoved:from: with: aMethod with: aClass ! !

! SystemManager methodsFor: 'tracking-classes' !
aboutToChange: aClass superclass: superclass iVarNames: iVarNames category: category
	" Private - aClass is about to be changed. "

	^self	triggerEvent: #aboutToChange:to:
		with: aClass
		with: (Array with: superclass with: iVarNames with: category)! !

! SystemManager methodsFor: 'tracking-classes' !
aboutToCreateClass: globalName superclass: superclass iVarNames: iVarNames category: category
	" Private - Attemp to create Class with name globalName. "

	^self	triggerEvent: #aboutToCreateClass:with:
		with: globalName
		with: (Array with: superclass with: iVarNames with: category)! !

! SystemManager methodsFor: 'tracking-classes' !
classChanged: aBehavior
	" Private - aBehavior has been changed. "

	^self triggerEvent: #classChanged: with: aBehavior ! !

! SystemManager methodsFor: 'tracking-classes' !
classShapeChanged: aBehavior
	" Private - aBehavior has changed shape. "

	^self	triggerEvent: #classShapeChanged:
		with: aBehavior
		ifNotHandled: [ aBehavior recompileAll ]! !

! SystemManager methodsFor: #log !
log: aString
	" Private - Log aString onto loggin device. "

	^self triggerEvent: #log: with: aString! !

! SystemManager methodsFor: #memory !
memoryWarning: anArgument
	" Trigger a memory warning event.
	The execution environment can signal memory warning/low conditions, we trigger an event to be handled at application level.
	Note: It is frequent procedure to clean cached resources that can be reconstructed later, if required.
	"

	^self triggerEvent: #memoryWarning: with: anArgument! !

! SystemManager methodsFor: #failures !
object: anObject at: indexOrKey notFoundIn: aCollection
	" Trigger a missing object event. "

	^self triggerEvent: #object:at:notFoundIn:
		withArguments: (Array with: anObject with: indexOrKey with: aCollection)
		ifNotHandled: [
			self print: 'Object/key('
				,(indexOrKey isNil ifTrue: [anObject] ifFalse: [indexOrKey]) toString
				,') not found in ',aCollection printString
		]! !

