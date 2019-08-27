const Taskr = require('taskr');
const join = require('path').join;

const cwd = process.cwd();
__dirname = cwd;
const file = join(cwd, 'taskfile.js');

const taskName = process.argv[2];

const taskr = new Taskr(
	{
	plugins: [
		require('@taskr/concat'),
		,require(cwd + '/local_modules/compileSK')
		,require(cwd + '/local_modules/initEnvironment')
	],
	file,
	cwd 
	}
);

if (taskName) {
	taskr.start(taskName);
} else {
	console.log("Available task names:")
	for (var task in taskr.tasks) {
		console.log(task);
	}
}

