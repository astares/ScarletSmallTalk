TestCase subclass: #OrderedCollectionTestCase
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	category: 'Tests'!

!OrderedCollectionTestCase methodsFor: 'tests' stamp: 'JohnMMcIntosh 10/27/2017 09:24'!
testAdd
	| oc |
	oc := OrderedCollection new.
	self assert: oc size = 0.
	oc add: 1.
	self assert: oc size = 1.
	self assert: (oc at: 1) = 1.
	oc add: 2.
	self assert: oc size = 2.
	self assert: (oc at: 2) = 2
! !

!OrderedCollectionTestCase methodsFor: 'tests' stamp: 'JohnMMcIntosh 10/27/2017 09:24'!
testAddFirst
	| oc |
	oc := OrderedCollection new.
	self assert: oc size = 0.
	oc add: 1.
	self assert: oc size = 1.
	self assert: (oc at: 1) = 1.
	oc addFirst: 2.
	self assert: oc size = 2.
	self assert: (oc at: 1) = 2
! !

!OrderedCollectionTestCase methodsFor: 'tests' stamp: 'JohnMMcIntosh 10/27/2017 09:24'!
testAddFirstEmpty
	| oc |
	oc := OrderedCollection new.
	self assert: oc size = 0.
	oc addFirst: 1.
	self assert: oc size = 1.
	self assert: (oc at: 1) = 1.
	oc addFirst: 2.
	self assert: oc size = 2.
	self assert: (oc at: 1) = 2
! !

!OrderedCollectionTestCase methodsFor: 'tests' stamp: 'JohnMMcIntosh 10/27/2017 09:24'!
testAddLast
	| oc |
	oc := OrderedCollection new.
	self assert: oc size = 0.
	oc add: 1.
	self assert: oc size = 1.
	self assert: (oc at: 1) = 1.
	oc addLast: 2.
	self assert: oc size = 2.
	self assert: (oc at: 2) = 2
! !

!OrderedCollectionTestCase methodsFor: 'tests' stamp: 'JohnMMcIntosh 10/27/2017 09:24'!
testAddLastEmpty
	| oc |
	oc := OrderedCollection new.
	self assert: oc size = 0.
	oc addLast: 1.
	self assert: oc size = 1.
	self assert: (oc at: 1) = 1.
	oc addLast: 2.
	self assert: oc size = 2.
	self assert: (oc at: 2) = 2
! !

!OrderedCollectionTestCase methodsFor: 'tests' stamp: 'JohnMMcIntosh 10/27/2017 09:24'!
testCompare

	self deny: (Array with: 1) = (OrderedCollection with: 1)
	! !

!OrderedCollectionTestCase methodsFor: 'tests' stamp: 'JohnMMcIntosh 10/27/2017 09:24'!
testAsCollection

	self assert: (#('TEXT_COLUMN' 'INT_COLUMN' 'REAL_COLUMN' ) asOrderedCollection) class = OrderedCollection.
	self assert: (Array with: 1) asOrderedCollection class = OrderedCollection.
	self assert: (SortedCollection with: 'a')  asOrderedCollection class =  OrderedCollection.
	self assert: (OrderedCollection with: 'a')  asOrderedCollection class =  OrderedCollection.
	self assert: (OrderedSet with: 'a')  asOrderedCollection class =  OrderedCollection.
	! !
