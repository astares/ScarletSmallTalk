smalltalk.addClass("PrimitiveBenchmark", smalltalk.Object, [], 'Benchmarks');
smalltalk.PrimitiveBenchmark.$classVariableNames=("");
smalltalk.bind(smalltalk.PrimitiveBenchmark, "tinyBenchmark:", "tinyBenchmark_", function PrimitiveBenchmark__tinyBenchmark_(iterations){
var size = nil;
var flags = nil;
var prime = nil;
var k = nil;
var count = nil;
var self = this; size=(8190);
for(var $1$ = iterations;$1$>0;$1$--){ count=(0);
flags=(smalltalk.Array.new_(size)).atAllPut_(true);
(1).to_do_(size,(function PrimitiveBenchmark__(i){
if ((flags.at_(i)).valueOf()) {prime=i._plus((1));
k=i._plus(prime);
while((k._lt_eq(size)).valueOf()){flags.at_put_(k,false);
k=k._plus(prime)};;
count=count._plus((1))};
return i;
}
))};;
return count;
}
, "running", unescape("tinyBenchmark%3A%20iterations%0D%09%22%28500000%20//%20time%20to%20run%29%20%3D%20approx%20bytecodes%20per%20second%22%0D%09%225000000%20//%20%28Time%20millisecondsToRun%3A%20%5B10%20benchmark%5D%29%20*%201000%22%0D%09%223059000%20on%20a%20Mac%208100/100%22%0D%20%20%20%20%7C%20size%20flags%20prime%20k%20count%20%7C%0D%20%20%20%20size%20%3A%3D%208190.%0D%20%20%20%20iterations%20timesRepeat%3A%0D%20%20%20%20%20%20%20%20%5B%0D%20%20%20%20%20%20%20%20count%20%3A%3D%200.%0D%20%20%20%20%20%20%20%20flags%20%3A%3D%20%28Array%20new%3A%20size%29%20atAllPut%3A%20true.%0D%20%20%20%20%20%20%20%201%20to%3A%20size%20do%3A%0D%20%20%20%20%20%20%20%20%20%20%20%20%5B%3Ai%20%7C%20%28flags%20at%3A%20i%29%20ifTrue%3A%0D%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5Bprime%20%3A%3D%20i+1.%0D%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20k%20%3A%3D%20i%20+%20prime.%0D%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5Bk%20%3C%3D%20size%5D%20whileTrue%3A%0D%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5Bflags%20at%3A%20k%20put%3A%20false.%0D%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20k%20%3A%3D%20k%20+%20prime%5D.%0D%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20count%20%3A%3D%20count%20+%201%5D.%0D%09%09%09i%5D%5D.%0D%20%20%20%20%5E%20count"));
smalltalk.bind(smalltalk.PrimitiveBenchmark, "runTinyBenchmark", "runTinyBenchmark", function PrimitiveBenchmark__runTinyBenchmark(){
var self = this; self.tinyBenchmark_((100));
return self;
}
, "running", unescape("runTinyBenchmark%0D%09self%20tinyBenchmark%3A%20100"));
smalltalk.bind(smalltalk.PrimitiveBenchmark, "runBenchmarks", "runBenchmarks", function PrimitiveBenchmark__runBenchmarks(){
var self = this; self.runTinyBenchmark();
return self;
}
, "running", unescape("runBenchmarks%0D%09self%20runTinyBenchmark"));
