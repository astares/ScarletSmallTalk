smalltalk.bind(smalltalk.Collection, unescape("allSatisfy%3A"), "allSatisfy_", function Collection__allSatisfy_(aBlock){
const self = this; var $early={name:"stReturn"};
try {
self.do_((function Collection__(each){
if ((aBlock.value_(each)).not()) {$early.result=false; throw ($early)} else {return nil};
}
));
return true;
} catch($ex) {
	if($ex===$early) { return $ex.result;}
	throw $ex
}
}
, "", unescape("allSatisfy%3A%20aBlock%0D%09%22Evaluate%20aBlock%20with%20the%20elements%20of%20the%20receiver.%0D%09If%20aBlock%20returns%20false%20for%20any%20element%20return%20false.%0D%09Otherwise%20return%20true.%22%0D%0D%09self%20do%3A%20%5B%3Aeach%20%7C%20%28aBlock%20value%3A%20each%29%20ifFalse%3A%20%5B%5E%20false%5D%5D.%0D%09%5E%20true"));
