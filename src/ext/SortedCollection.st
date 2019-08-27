ArrayedContents
	subclass: #SortedCollection
	instanceVariableNames: 'sortBlock sorted'
	classVariableNames: ''
	poolDictionaries: ''!
SortedCollection class instanceVariableNames: ''!

! SortedCollection class methods !
new
    "Answer a SortedCollection capable of sort in ascending order."
    ^super new ascendingOrder! !

! SortedCollection class methods !
sortBlock: aBlock
   "Answer a SortedCollection which will
   sort in the order defined by aBlock."
   ^super new sortBlock: aBlock! !

! SortedCollection methods !
sortBlock
    "Return the block that determines sort
    ordering for the receiver."
   (sortBlock isNil)
      ifTrue:[sortBlock := self defaultSortBlock].
   ^sortBlock! !

! SortedCollection methods !
ascendingOrder
   "Sets default ascending order"
   self sortBlock: self defaultSortBlock.
   sorted := true.! !

! SortedCollection methods !
add: anObject
   "Add anObject to the receiver. "
   super add: anObject.
   sorted := false.
   ^anObject! !

! SortedCollection methods !
defaultSortBlock

   ^[:object1 :object2| object1 <= object2]! !

! SortedCollection methods !
sortBlock: aBlock
   "Return the receiver.  Set the sort block for
   the receiver to aBlock and resort the receiver."
   sortBlock := aBlock.
   self reSort! !

! SortedCollection methods !
reSort
   "Private - Return the receiver collection
   resorted according to sortBlock."
   self sort: (self sortBlock)! !

! SortedCollection methods !
sort: aBlock
   "Sort (inplace) the receiver's contents with aBlock. "

   contents isNil
      ifFalse:[contents sort: aBlock.
               sorted := true]! !

! SortedCollection methods !
checkSorting
   "Private - Check the properly sorting state,
   sorting the receiver if needed"
   sorted ifFalse:[ self reSort ]! !

! SortedCollection methods !
remove: anObject ifAbsent: aBlock
   " Remove anObject from the receiver.
   Return the result of evaluating aBlock if anObject is not in the receiver.	"
   | result |
   result := super remove: anObject ifAbsent: aBlock.
   sorted := false.
   ^result! !

! SortedCollection methods !
removeIndex: index
   "Remove the element at index. "
   | result |
   result := super removeIndex: index.
   sorted := false.
   ^result! !

! SortedCollection methods !
withIndexDo: aBlock
   "Evaluate aBlock with all the index positions in the receiver. "

   self checkSorting.
   super withIndexDo: aBlock! !

! SortedCollection methods !
sorted: aValue

        "Set my 'sorted' instance variable to aValue."
    sorted := aValue! !
