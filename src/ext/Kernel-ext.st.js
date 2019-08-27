smalltalk.bind(smalltalk.Set, unescape("indexOf%3AifAbsent%3A"), "indexOf_ifAbsent_", function Set__indexOf_ifAbsent_(anObject,aBlock){
const self = this; if ((self.includes_(anObject)).not()) {return aBlock.value()};
return self['@contents'].indexOf_ifAbsent_(anObject,aBlock);
}
, "", unescape("indexOf%3A%20anObject%20ifAbsent%3A%20aBlock%0D%09%22%20Private%2CInternal%20-%20Return%20the%20position%20of%20anObject%20in%20the%20receiver%2C%20or%20the%20result%20of%20evaluating%20aBlock.%20%22%0D%0D%09%28self%20includes%3A%20anObject%29%20ifFalse%3A%20%5B%20%5EaBlock%20value%20%5D.%0D%09%5Econtents%20indexOf%3A%20anObject%20ifAbsent%3A%20aBlock"));
