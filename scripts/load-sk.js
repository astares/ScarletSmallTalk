
(function() {
	var exitCode = 0;
	try {
		require("../artifacts/sk.kernel.js");
	} catch (err) {
		console.log('// Run Error: '+err);
		console.log(err.stack);
		exitCode = 1;
    }
})();
