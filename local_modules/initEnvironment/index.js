const fs = require('fs')
const join = require('path').join;

module.exports = {
	name: 'initEnvironment',
	every: true,
	files: true,
	*func(file, opts) {
		// opts = Object.assign({}, opts, {});
		// var env = opts.env;
		const path = join(file.dir, file.base);
		console.log(path);
		try {
			var source = fs.readFileSync(path, 'utf8');
			env.readBindingsFrom_(source.asStream());
		} catch (e) {
			console.log(e);
		}
	}
}

function write(filePath, aString) {
	var fd = fs.openSync(filePath, 'w+');
	fs.writeSync(fd, aString);
	fs.closeSync(fd);
}