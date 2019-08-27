function SmalltalkModuleWrapper(module) {
	this.module = module
}

SmalltalkModuleWrapper.prototype.send = function (receiver, selector, arguments) {
	//A smalltalk message send
	return this.module.perform_withArguments_(selector, [receiver, arguments]);
}

function PrimitiveManager(_platform = 'common') {
	this.platform = _platform;
	this.modules = {};
	this.current = this;
	this.primFailValue = {};
}

//temporary for unit tests
PrimitiveManager.prototype.setPlatformName = function (_platform) {
	this.platform = _platform;
}

PrimitiveManager.prototype.primSetPlatformName = function(receiver, args) {
	return this.setPlatformName(args[0]);
}

PrimitiveManager.prototype.registerModule = function (module, name) {
	this.modules[name] = module;
}

PrimitiveManager.prototype.hasModule = function (moduleName) {
	return this.modules[moduleName] === undefined;
}

PrimitiveManager.prototype.callPrimitive = function (moduleName, primitiveName, receiver, args) {
	var module = this.modules[moduleName];
	if (module && module[primitiveName]) {
		const result = module[primitiveName](receiver, args);
		// if (result === this.primFailValue) {
		// 	console.log(moduleName + ':' + primitiveName);
		// }
		return result;
	}
	return this.primFailValue;
}

PrimitiveManager.prototype.newPrimitiveSpec = function() {
	const spec = {};
	spec.Android = {};
	spec.iOS = {};
	spec.NodeJS = {};
	spec.common = {};
	return spec;
}

PrimitiveManager.prototype.primNewPrimitiveSpec = function(receiver, args) {
	return this.newPrimitiveSpec();
}

PrimitiveManager.prototype.registerSpec = function (spec, name) {
	const module = {};
	Object.assign(module, spec.common, spec[this.platform]);
	this.registerModule(module, name);
}

PrimitiveManager.prototype.primRegisterSpec = function(receiver, args) {
	var spec = args[0];
	var specName = args[1];
	return this.registerSpec(spec, specName);
}

PrimitiveManager.prototype.primRegisterSmalltalkModule = function (receiver, args) {
	var smalltalkModule = args[0];
	var moduleName = args[1];
	var primitiveMapDictionary = args[2];
	var module = new SmalltalkModuleWrapper(smalltalkModule);

	try {
		//Smalltalk code happens in this try/catch
		//This block constructs primitive methods for each of the primitives that need to be registered
		//and adds them to a wrapper for the Smalltalk object.
		primitiveMapDictionary.keysAndValuesDo_(function (primitive, selector) {
			module[primitive] = function (receiverForPrimitive, argsForPrimitive) {
				var primitiveReceiver = receiverForPrimitive;
				var primitiveArguments = Array.prototype.slice.call(argsForPrimitive);
				var result =  module.send(primitiveReceiver, selector, primitiveArguments);
				if (result === smalltalkModule.primFailValue()) { //Smalltalk message send
					return smalltalk.primitiveManager.primFailValue;
				}
				return result;
			}
		});
	} catch (e) {
		return smalltalk.primitiveManager.primFailValue;
	}
	this.registerModule(module, moduleName);
}

//This is a primitive
PrimitiveManager.prototype.primDeregisterSmalltalkModule = function (receiver, args) {
	try {
		var moduleName = args[0].moduleName(); //Smalltalk message send
		this.deregisterModule(moduleName)
		return receiver;
	} catch (e) {
		return smalltalk.primitiveManager.primFailValue;
	}
}


StObject = function StObject(){};
StBehavior = function StBehavior(){};
StClass = function StClass(){};
StMetaclass = function StMetaclass(){ this.$meta = true; };
StMethod = function StMethod(){};
StUndefinedObject = function StUndefinedObject(){};
nil = new StUndefinedObject();
nil.toString = function() { return 'nil'; }
nil.isNil_ = function(x) {
	switch(typeof x) {
		case "undefined":
			return true;
		case "string": case "boolean":
		case "number": case "function":
			return false;
	};
	if ((x===null) || (x === this)) return true;
	if (x===smalltalk) return false;
	if ((x.$klass) && ("function" === typeof x.isNil)) return x.isNil();
	return false;
}
nil.is_eqeq_ = function(a,b) {
 if (a === b) return true;
 if (nil.isNil_(a) || nil.isNil_(b)) return false;
 if (a.constructor !== b.constructor) return false;
 if (a.constructor === Date) return a === b;
 return a.valueOf() === b.valueOf();
}

StSystemDictionary = function StSystemDictionary(){
	var st = this;
	st.$imageFileName = "image.js";
	st.isNil = function(x) { return (x || nil) === nil; }

	st.klass = function(spec) { // Private
		var aClass;
		if(spec.meta) {
			aClass = new StMetaclass();
		} else {
			var metaSpec = {meta:true};
			metaSpec.className = spec.className + " class";
			if (!st.isNil(spec.superclass)) {
				metaSpec.superclass = spec.superclass.$klass;
			}
			var metaClass = st.klass(metaSpec);
			aClass = new metaClass.$fn();
		}
		st.setClass(aClass,spec);
		aClass.$fn.prototype.$klass = aClass;
		aClass.$fn.prototype.$methods = {};
		if (aClass.$className == "Metaclass") { st.bindRoots(aClass); }
		return aClass;
	}
	st.setProtoOf_to_ = function(jsObject, proto) {
		jsObject.__proto__ = proto;
	}
	st.bindRoots = function(metaclass){ // Private
		var objectClassPrototype = st.Object.$klass.$fn.prototype;
		st.setProtoOf_to_(objectClassPrototype,st.Class.$fn.prototype);
		st.setProtoOf_to_(st.Smalltalk.$klass.$fn.prototype,objectClassPrototype);
		st.setProtoOf_to_(st.Behavior.$klass.$fn.prototype,objectClassPrototype);
		st.Object.$klass.$superclass = st.Class;
		metaclass.$superclass = st.Behavior;
	}
	st.setVarNames = function(aClass, iVarNames, aValue) { // Private
		aClass.$iVarNames = iVarNames;
		var i=iVarNames.length;while(i--){
			aClass.$fn.prototype["@"+iVarNames[i]] = aValue;
		}
	}
	st.setClass = function(aClass, spec) { // Private
		aClass.$className = spec.className;
		if(!spec.meta) { aClass.$klass["@instanceClass"] = aClass; }
		aClass.$category = spec.category || "";
		aClass.$superclass = spec.superclass || nil;
		if(!st.isNil(aClass.$superclass)) {
			delete aClass.$superclass["@subclasses"];
			if(!st.isNil(aClass.$klass)) {
				if(!spec.meta) aClass.$klass.$superclass = aClass.$superclass.$klass;
				if(aClass.$klass.$superclass)
					delete aClass.$klass.$superclass["@subclasses"];
			}
		}
		aClass.$fn = st.fnInSpec(spec);
		st.setVarNames(aClass,spec.iVarNames||[],nil);
		return aClass;
	}
	st.fnInSpec = function(spec) { // Private
		if (spec.meta && (st.isNil(spec.superclass))) {
			spec.superclass = st.Class;
		}
		if (spec.fn) {
			if (!st.isNil(spec.superclass))
				st.setProtoOf_to_(spec.fn.prototype,spec.superclass.$fn.prototype);
			return spec.fn;
		}
		var $stConstructor = function(){};
		if (!st.isNil(spec.superclass))
			$stConstructor.prototype = new spec.superclass.$fn();
		return $stConstructor;
	}
	st.classes = function() {
		var classes = [];
		for (var i in st){ if (st.hasOwnProperty(i) && (i != "$klass")) {
		    var cls = st[i]; if(!st.isNil(cls)){
			if(cls.$klass && cls.$className){ classes.push(cls); }
		    } }
		}
		return classes;
	}
	st.subclasses = function(aClass) {
		if(aClass.hasOwnProperty("@subclasses")) return aClass["@subclasses"];
		var result = [];
		var classes = st.classes();
		var i=classes.length;while(i--){
		    if(classes[i].$fn) {
			if(classes[i].$klass
				&& classes[i].$klass.$superclass === aClass)
				{ result.push(classes[i].$klass); }
			if(classes[i].$superclass === aClass)
				{ result.push(classes[i]); }
		    }
		}
		if(st.Class){ // Class linked to Object.$klass
			if(aClass === st.Class) { var k;
				for(var i in result) {
					if(result[i] === st.Object.$klass) { k = i; }
				}
				if(k) result.splice(k,1);
			}
		}
		aClass["@subclasses"] = result;
		return result;
	}
	st.allSubclassesDo = function(aClass,aBlock) {
		var subclasses = st.subclasses(aClass);
		var i=subclasses.length;while(i--){
			var cls = subclasses[i];
			aBlock(cls);
			st.allSubclassesDo(cls,aBlock);
		}
		return st;
	}
	st.mapClassName = function(className, category, fn, superclass) {
		var spec = {
			className: className,
			category: category,
			superclass: superclass,
			fn: fn };
		if (st[className]) return st.setClass(st[className],spec);
		st[className] = st.klass(spec);
		return st[className];
	}
	st.addClass = function(className, superclass, iVarNames, category) {
		st.debugAddClass(className, superclass, iVarNames, category);
		if(st[className]) {
			var aClass = st[className];
			var sameShape = (aClass.$superclass == superclass)
				&& (aClass.$iVarNames == iVarNames);
			if (sameShape && (aClass.$category == category) ) return aClass;
			if(aClass.$superclass) {
				delete aClass.$superclass["@subclasses"];
				var aMeta = aClass.$klass;
				if (aMeta && superclass) {
					delete  aMeta.$superclass["@subclasses"];
					aMeta.$superclass = superclass.$klass;
				}
			}
			aClass.$superclass = superclass;
			if(superclass && (superclass["@subclasses"])) {
				if(st.isNil(superclass["@subclasses"])) { superclass["@subclasses"] = []; }
				superclass["@subclasses"].push(aClass);
			}
			st.setVarNames(aClass,iVarNames||[],nil);
			aClass.$category = category || aClass.$category;
		} else {
			st[className] = st.klass({
				className: className,
				iVarNames: iVarNames,
				superclass: superclass
			});
			st[className].$category = category || "";
		}
		return st[className];
	}
	st.renameClass = function(aClass,aString) {
		delete st[aClass.$className];
		aClass.$className = aString;
		st[aString] = aClass;
	}
	st.removeClass = function(aClass) {
		var deleted = "Deleted-";
		if(aClass.$superclass) { delete aClass.$superclass["@subclasses"]; }
		delete st[aClass.$className];
		aClass.$className = deleted + aClass.$className;
		aClass.$klass.$className = deleted + aClass.$klass.$className;
	}
	st.metaVarNames = function(aMetaClass,iVarNames) {
		if (aMetaClass.$iVarNames == iVarNames) return false;
		st.setVarNames(aMetaClass,iVarNames||[],nil);
		return true;
	}

	st.whoImplements = function(klass,jsSelector) {
		var cls = klass;
		do {	if(cls.$fn.prototype.hasOwnProperty(jsSelector)) return cls;
			cls = cls.$superclass;
		} while (cls);
		return nil;
	}
	st.superImplementor = function(klass,jsSelector) {
		if (st.isNil(klass.$superclass)
			|| st.isNil(klass.$superclass.$fn))
			return klass.missingImplementorFor_(jsSelector);
		var cls = st.whoImplements(klass.$superclass,jsSelector);
		if (st.isNil(cls))
			return klass.$superclass.missingImplementorFor_(jsSelector);
		return cls.$fn.prototype[jsSelector];
	}
	st.addMethod = function(jsSelector, method, klass) {
		klass.$fn.prototype[jsSelector] = method.$fn;
		klass.$fn.prototype.$methods[method.$selector] = method;
		method["@classField"] = klass;
		return method;
	}

	st.bind = function(klass,stSelector,jsSelector,jsFunction,category,stSource) {
		st.debugBind(klass,stSelector,jsSelector,jsFunction,category,stSource);
		var method = new StMethod();
		method.$selector = stSelector;
		method.$fn	 = jsFunction;
		method.$category = category;
		method.$source   = stSource;
		method.$generation = st.$state;
		if(!st.isNil(klass)) {
			if(st.isNil(jsSelector)) { jsSelector = stSelector.replace(/\:/g,"_"); }
			st.addMethod(jsSelector,method,klass);
		}
		return method;
	}

	st.removeMethod = function(aClass,aMethod) {
		delete aClass.$fn.prototype[aMethod.$selector.asSelector()];
		delete aClass.$fn.prototype.$methods[aMethod.$selector]
		return aMethod;
	}

	st.newMethod = function(currentClass,selector,fn,source) {
		return st.bind(nil,selector,nil,fn,nil,source);
	}
	st.method = function(spec) { // OBSOLETE
		return st.bind(nil,spec.selector,nil,spec.fn,spec.category,spec.source);
	}

	st.readJSObject = function(js) {
		if(!js) return nil;
		var object = js;
		var readObject = (js.constructor === Object);
		var readArray = (js.constructor === Array);
		if(readObject) { object = st.Dictionary.$$new(); }
		for(var i in js) {
			if (!js.hasOwnProperty(i)) break;
			if(readObject) { object.at_put_(i, st.readJSObject(js[i])); }
			if(readArray) { object[i] = st.readJSObject(js[i]); }
		}
		return object;
	}

	st.globalsDo = function(action) {
		for (key in st) {
			if (!st.hasOwnProperty(key)) break;
			var aValue = st[key];
			if((typeof(aValue) != "function")
			 && (aValue.isClass
			 && (!aValue.isClass()))) { action(key) } }
		return st;
	}

	st.launchImage = function(imageName) {
		if(!st.isNil(imageName)) {
			st.$imageFileName = imageName;
			load(imageName);
		}
		st.$state = "launching";
		if(st.launch && typeof st.launch == "function") { st.launch(); }
		st.$state = "running";
		return st;
	}

	st.is_kindOf_ = function(anObject,aClass) {
		if(st.isNil(anObject) || ("undefined" === typeof anObject.isKindOf_)) return false;
		return anObject.isKindOf_(aClass);
	}
	st.responds_to_ = function(anObject,aSelector) {
		if(st.isNil(anObject) || ("undefined" === typeof anObject.respondsTo_)) return false;
		return anObject.respondsTo_(aSelector);
	}

	st.debugBind = function(klass,stSelector,jsSelector,jsFunction,category,stSource) { return st; }
	st.debugAddClass = function(className, superclass, iVarNames, category) { return st; }

	st.initClass = function(aClass) { return "DEPRECATED"; }
	st.initWithSubclasses = function(aClass) { return aClass; }
	st.init = function(aClass) { return "DEPRECATED"; }
	st.initRoots = function(){ return "DEPRECATED"; }

	st.primitiveManager = new PrimitiveManager();
} // Smalltalk definition

smalltalk = new StSystemDictionary();
smalltalk.primitiveManager.registerModule(smalltalk.primitiveManager, "RuntimePrimitiveManager");

smalltalk.toString = function() { return "smalltalk"; }

smalltalk.emptyJSONObject = function(js) {return {};}
smalltalk.readJSObject_ = smalltalk.readJSObject;
smalltalk.subclasses_ = smalltalk.subclasses;
smalltalk.allSubclassesDo_ = smalltalk.allSubclassesDo;
smalltalk.allSubclassesDo_value_ = smalltalk.allSubclassesDo;
smalltalk.removeMethod_ = smalltalk.removeMethod;
smalltalk.removeMethod_method_ = smalltalk.removeMethod;
smalltalk.renameClass_ = smalltalk.renameClass;
smalltalk.removeClass_ = smalltalk.removeClass;
smalltalk.metaVarNames_array_ = smalltalk.metaVarNames;
smalltalk.addMethod_method_to_ = smalltalk.addMethod;
smalltalk.globalsDo_ = smalltalk.globalsDo;

smalltalk.jsGlobal = function(js) {return (function test(){return this;}).call(null);}

smalltalk.$state = "booting";
smalltalk.OverwriteMethods = smalltalk.OverwriteMethods || nil;
smalltalk.DumpOverwritenMethods = smalltalk.DumpOverwritenMethods || nil;

smalltalk.mapClassName("Object", "Kernel", StObject);
smalltalk.mapClassName("Smalltalk", "Kernel", StSystemDictionary, smalltalk.Object);
smalltalk.mapClassName("Behavior", "Kernel", StBehavior, smalltalk.Object);
smalltalk.mapClassName("Class", "Kernel", StClass, smalltalk.Behavior);
smalltalk.mapClassName("Metaclass", "Kernel", StMetaclass, smalltalk.Behavior);
smalltalk.mapClassName("CompiledMethod", "Kernel", StMethod, smalltalk.Object);

smalltalk.mapClassName("Number", "Kernel", Number, smalltalk.Object);
smalltalk.mapClassName("BlockClosure", "Kernel", Function, smalltalk.Object);
smalltalk.mapClassName("Boolean", "Kernel", Boolean, smalltalk.Object);
smalltalk.mapClassName("DateTime", "Kernel", Date, smalltalk.Object);
smalltalk.mapClassName("UndefinedObject", "Kernel", StUndefinedObject, smalltalk.Object);

smalltalk.mapClassName("Collection", "Kernel", undefined, smalltalk.Object);
smalltalk.mapClassName("SequenceableCollection", "Kernel", undefined, smalltalk.Collection);
smalltalk.mapClassName("String", "Kernel", String, smalltalk.SequenceableCollection);
smalltalk.mapClassName("Array", "Kernel", Array, smalltalk.SequenceableCollection);
smalltalk.mapClassName("RegularExpression", "Kernel", RegExp, smalltalk.Object);

smalltalk.$state = "startup";

// Return the result of evaluating a smalltalk expression.
smalltalk.st = function(code) { return code.evaluate(); }

// Return the result of evaluating a smalltalk expression (or a description of the error occurred).
smalltalk.doIt = function(code) { return code.doIt() }

// FileIn the contents of file at fileName
fileIn = function(fileName) { return read(fileName).fileIn(); }

// FileIn smalltalk code at fileName emmiting generated code in a .js file
emmit = function(fileName) { return smalltalk.emmit_(fileName); }

// Eval the contents of file at fileName
fileInJS = function(fileName) { return eval(read(fileName)); }

// Export category
exportCategory = function(aString) { return smalltalk.Exporter.exportCategory_(aString); }

// Save Image functionality
saveImage = function() { return smalltalk.saveImage(); }
saveImageAs = function(fileName) { return smalltalk.saveImageAs_(fileName); }
smalltalk.$imageFileName = smalltalk.$imageFileName  || "image.js";
