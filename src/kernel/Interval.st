SequenceableCollection
	subclass: #Interval
	instanceVariableNames: 'start stop step'
	category: #Kernel!

! Interval class methodsFor: #Instantiation !
from: startNum to: stopNum by: stepNum

	| interval |
	interval := Interval new.
	interval start: startNum.
	interval stop: stopNum.
	interval step: stepNum.
	^interval !

from: startNum to: stopNum

	^Interval from: startNum to: stopNum by: 1 ! !

! Interval methodsFor: #accessing !
start

	^start !

stop

	^stop !

step

	^step !

start: aNum

	start := aNum !

stop: aNum

	stop := aNum !

step: aNum

	step := aNum !

size
	^(((self stop - (self start)) / self step) + 1) floor ! !

! Interval methodsFor: #enumerating !
do: aBlock

	| current |
	current := self start.
	[current ~= (self stop)]
		whileTrue: 
			[ self step > 0
				ifTrue:
					[current > stop ifTrue:[^self]]
				ifFalse:
					[current < stop ifTrue:[^self]]. 
			aBlock value: current. 
			current := current + self step ].
	aBlock value: current ! !

! Interval methodsFor: #testing !
= anInterval

	^self class = anInterval class 
		and: [self start = anInterval start 
		and: [self stop = anInterval stop 
		and:[self step = anInterval step]]] ! !

! Interval methodsFor: #copying !
, anInterval

	| result index |
	index := 1.
	result := Array new: (self size + anInterval size).
	self do: 
		[ :each | result at: index put: each. 
		index := index + 1].
	anInterval do: 
		[ :each | result at: index put: each. 
		index := index + 1].
	^result !

collect: aBlock

	| result |
	result := Array new: self size.
	self asArray withIndexDo: [:each :index| result at: index put: (aBlock value: each)].
	^result !

copyFrom: start to: stop

	(start < self start or: [start > self stop])
		ifTrue: [^self error: 'Start argument must be in the range of the interval start and end'].
	(stop < start or: [stop > self stop])
		ifTrue: [^self error:'Stop argument must be in the range of the start argument and the interval''s end'].
	^Interval from: start to: stop by: self step !

copyReplaceAll: aCollection with: anotherCollection

	| selfArray replacingArray replacementArray startIndex |
	selfArray := self asArray.
	replacingArray := aCollection asArray.
	(selfArray includesAll: replacingArray)
		ifFalse: [^selfArray].
	replacementArray := anotherCollection asArray.
	startIndex := selfArray indexOf: replacingArray first.
	(selfArray indexOfCollection: replacingArray) = 0
		ifTrue: [^selfArray].
	^selfArray copyReplaceFrom: startIndex to: replacingArray size + 1 with: replacementArray !

copyReplaceFrom: start to: stop with: aCollection

	| oCollection selfArray begin end |
	"Case for Insertion"
	(stop = (start - 1) and: [start < (self size + 1)])
		ifTrue: 
			[selfArray := self asArray.
			stop = 0
				ifTrue: [begin := #()]
				ifFalse: [begin := selfArray copyFrom: 1 to: stop].
				end := selfArray copyFrom: start to: selfArray size.
				^begin,aCollection,end].
	"Case for appending"
	(stop = self size and: [start = (stop + 1)])
		ifTrue: 
			[oCollection := self asOrderedCollection.
			 aCollection do: [:each | oCollection add: each].
			 ^oCollection asArray].
	(start < 1 or: [start > stop] )
		ifTrue: [^self error: 'start argument outside of valid range'].
	(stop > (self size + 1))
		ifTrue: [^self error: 'stop argument outisde of valid range'].
	selfArray := self asArray.
	^selfArray copyReplaceFrom: start to: stop with: aCollection asArray !

copyReplaceFrom: start to: stop withObject: anObject

	| oCollection selfArray begin insert end|
	oCollection := self asOrderedCollection.
	"case for Insertion"
	(stop = (start - 1) and: [start < (oCollection size + 1)])
		ifTrue: 
			[ selfArray := self asArray.
			(stop = 0)
				ifTrue: [begin := #()]
				ifFalse: [begin := selfArray copyFrom: 1 to: stop].
			insert := Array with: anObject.
			end := selfArray copyFrom: start to: selfArray size.
			^begin,insert,end].
	"case for Appending"
	(stop = oCollection size and: [start = (stop + 1)])
		ifTrue:
			[oCollection add: anObject. 
			^oCollection asArray].
	(start > self stop or: [start > stop])
		ifTrue: [^self error: 'start argument outside of valid range'].
	(stop > (self size + 1))
		ifTrue: [^self error: 'stop argument outside of valide range'].
	"case for replacement"
	selfArray := self asArray.
	selfArray replaceFrom: start to: stop withObject: anObject.
	^selfArray !
	
copyReplacing: anObject withObject: replacementObject

	| result |
	result := (Array new: self size).
	self asArray withIndexDo: [:val :index | anObject = val ifTrue: [result at: index put: replacementObject] ifFalse: [result at: index put: val]].
	^result !

copyWithout: anObject

	| result |
	result := OrderedCollection new.
	self do: [:each | anObject = each ifFalse:[result add: each]].
	^result asArray ! !

! Interval methodsFor: #testing !
reject: aBlock

	| result |
	result := OrderedCollection new.
	self do: [:each | (aBlock value: each) ifFalse: [result add: each]].
	^result asArray ! !

! Interval methodsFor: #copying !
reverse

	^Interval from: self stop to: self start by: (self step * -1) !

select: aBlock

	| result |
	result := OrderedCollection new.
	self do: [:each | (aBlock value: each) ifTrue: [result add: each]].
	^result asArray ! !