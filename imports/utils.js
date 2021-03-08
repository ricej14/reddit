console.log('Log from /imports/utils.js')


export let say_hello = function() {
	return 'hello from imports/utils.js';
}

export let name = 'john rice';


//export default 'this is a default val from imports/utils.js';


let some_default = 'this is a default val from imports/utils.js';

export default some_default;
