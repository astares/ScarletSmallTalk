(function() {
	print = function(message) {
		console.log(message)
	}

	var exitCode = 0;
	try {
		require("../artifacts/sk-test-image.js");
	} catch (err) {
		console.log('// Run Error: '+err);
		console.log(err.stack);
		exitCode = 1;
    }
})();
