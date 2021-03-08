console.log('Log from /server/main.js');

// import './../imports/utils.js';
import {say_hello} from './../imports/utils.js';
import {add} from './../imports/math.js';

console.log(say_hello());

console.log(add(5, 3));
