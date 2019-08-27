smalltalk.bind(smalltalk.Class, unescape("launch"), "launch", function Class__launch(){
const self = this; self;
return self;
}
, "Snapshot-startup", unescape("launch%0D%09%22%20Private%20-%20The%20system%20has%20been%20launched%20and%20start%20execution.%0D%09The%20default%20action%20is%20to%20do%20nothing.%0D%09Subclasses%20can%20refine%20this%20method%20to%20execute%20actions%20on%20startup.%0D%09%22"));
smalltalk.bind(smalltalk.Class, unescape("pwrUp"), "pwrUp", function Class__pwrUp(){
const self = this; return self;
}
, "Snapshot-startup", unescape("pwrUp%0D%09%22Private%20-%20Subclasses%20should%20refine%20this%20method%20to%20execute%20actions%20on%20startup.%22%0D%09%5Eself"));
smalltalk.bind(smalltalk.Smalltalk, unescape("globalsDo%3A"), "globalsDo_", function Smalltalk__globalsDo_(aBlock){
const self = this; return self.globalsDo_(aBlock);
}
, "Snapshot-evaluating", unescape("globalsDo%3A%20aBlock%0D%09%22%20Private%20-%20Evaluates%20aBlock%20for%20each%20globals%20defined%20in%20the%20receiver.%20%22%0D%0D%09%5Eself%20globalsDo%3A%20aBlock"));
smalltalk.bind(smalltalk.Smalltalk, unescape("globalsDo%3AseparatedBy%3A"), "globalsDo_separatedBy_", function Smalltalk__globalsDo_separatedBy_(aBlock,anotherBlock){
var first = nil;
const self = this; first=true;
return self.globalsDo_((function Smalltalk__(each){
if ((first).valueOf()) {first=false} else {anotherBlock.value()};
return aBlock.value_(each);
}
));
}
, "Snapshot-evaluating", unescape("globalsDo%3A%20aBlock%20separatedBy%3A%20anotherBlock%0D%09%22%20Private%20-%20Evaluates%20aBlock%20for%20each%20globals%20defined%20in%20the%20receiver.%20%22%0D%0D%09%7C%20first%20%7C%20first%20%3A%3D%20true.%0D%09%5Eself%20globalsDo%3A%20%5B%3Aeach%7C%0D%09%20%20%20%20first%0D%09%09ifTrue%3A%20%5B%20first%20%3A%3D%20false%20%5D%0D%09%09ifFalse%3A%20%5B%20anotherBlock%20value%20%5D.%0D%09%20%20%20%20aBlock%20value%3A%20each%0D%09%5D"));
smalltalk.bind(smalltalk.Smalltalk, unescape("launch"), "launch", function Smalltalk__launch(){
const self = this; (function Smalltalk__($1$){
$1$.do_((function Smalltalk__(each){
return each.launch();
}
));
$1$.do_((function Smalltalk__(each){
return each.initialize();
}
));
return $1$.do_((function Smalltalk__(each){
return each.pwrUp();
}
))}
)(self.classes());
return self;
}
, "Snapshot-startup", unescape("launch%0D%09%22%20The%20system%20has%20been%20launched%20and%20start%20execution.%0D%09The%20default%20action%20is%20to%20propagate%20%23launch%20to%20current%20classes%20then%20%23initialize%20and%20finally%20%23pwrUp.%0D%09%22%0D%0D%09self%20classes%0D%09%09do%3A%20%5B%3Aeach%20%7C%20each%20launch%5D%3B%0D%09%09do%3A%20%5B%3Aeach%20%7C%20each%20initialize%5D%3B%0D%09%09do%3A%20%5B%3Aeach%20%7C%20each%20pwrUp%5D"));
smalltalk.bind(smalltalk.Object, unescape("logEvaluate%3A"), "logEvaluate_", function Object__logEvaluate_(source){
var result = nil;
const self = this; result=self.evaluate();
return result;
}
, "evaluating", unescape("logEvaluate%3A%20source%0D%09%22%20Return%20the%20result%20of%20valuating%20the%20receiver.%0D%09Log%20the%20source%20expression%20as%20reference%20of%20evaluation.%0D%09%22%0D%0D%09%7C%20result%20%7C%0D%09result%20%3A%3D%20self%20evaluate.%0D%09%22SystemManager%20log%3A%20source.%22%0D%09%5Eresult"));
