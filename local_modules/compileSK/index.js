const fs = require('fs')
const join = require('path').join;

eval(fs.readFileSync('./bootstrap/node-compat.js', 'utf-8'));

module.exports = {
	name: 'compileSK',
	every: true,
	files: true,
	*func(file, opts) {
		opts = Object.assign({}, opts, {});
		var includeSource = true;
		if (opts.hasOwnProperty("includeSource")) {
			includeSource = opts.includeSource;
		}
		const path = join(file.dir, file.base);
		console.log("Compiling " , path);
		try {
			var shouldCompile = isFileOlderThan((path + ".js"), path); 
			if (shouldCompile){
				var begin=Date.now();
				var source = read(path, 'utf8');
				var result = smalltalk.StStreamCompiler.compile_in_(source, env);
				if (result.substr(0, 4) == "{st:") {
					console.log(result);
					process.exit(1);
				}

				var outPath = path + ".js";
				write (outPath, result);
				var end= Date.now();
				var timeToRun=(end-begin);
				console.log(path, " took: " , timeToRun);
			} else {
//				console.log("Path: ", path, " up to date");
			}
		} catch (e) {
			console.log(e);
			var message = e.messageText();
			message = message.replace(/\r/g, '\n');
			message = message.replace("->", "\x1b[31m->\x1b[0m");
			console.log(message);
			quit();
		}
	}
}

function write(filePath, aString) {
	var fd = fs.openSync(filePath, 'w+');
	fs.writeSync(fd, aString);
	fs.closeSync(fd);
}