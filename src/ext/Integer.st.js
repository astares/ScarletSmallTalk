smalltalk.addClass("Integer", smalltalk.Number, [], 'Number');
smalltalk.Integer.$classVariableNames=("");
smalltalk.addClass("SmallInteger", smalltalk.Integer, [], 'Number');
smalltalk.SmallInteger.$classVariableNames=("");
smalltalk.bind(smalltalk.SmallInteger.$klass, unescape("maxVal"), "maxVal", function SmallInteger_class__maxVal(){
const self = this; return ((1).bitShift_((30)))._minus((1));
}
, "instance creation", unescape("maxVal%0D%09%22Answer%20the%20largest%20%28positive%29%20integer%20value%20that%20can%20be%20represented%20as%20a%20SmallInteger.%22%0D%09%2216r3FFFFFFF%201073741823%22%0D%09%5E%28%201%20bitShift%3A%2030%20%29%20-%201"));
smalltalk.bind(smalltalk.SmallInteger.$klass, unescape("minVal"), "minVal", function SmallInteger_class__minVal(){
const self = this; return (-1).bitShift_((30));
}
, "instance creation", unescape("minVal%0D%09%09%22Answer%20the%20smallest%20%28negative%29%20integer%20value%20that%20can%20be%0D%09%09represented%20as%20a%20SmallInteger.%22%0D%09%09%22C0000000%20-1073741824%22%0D%09%5E%28-1%20bitShift%3A%2030%20%29"));
