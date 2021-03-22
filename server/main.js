import {Meteor} from 'meteor/meteor';
import {UP_Collection_Access} from './../imports/api/user_posts.js';

Meteor.startup(function(){
	let square = function(x) {
		return x*x;
	};
	console.log(square(10));

	function squareNamed(x){
		return x*x;
	};
	console.log(squareNamed(9));

	let square2 = (x) => {
		x = x + 1;
		return x*x;
	};
	console.log(square2(4));

	let square3 = (x) => x*x;
	console.log(square3(6));

	let user = {
		name: 'newman',
		sayHi: function(){
			console.log(this.name);
		}
	};
	user.sayHi();

	// let user2 = {
	// 	name: 'newman',
	// 	sayHi: () => {
	// 		console.log(this.name);
	// 	}
	// };
	// user2.sayHi();
});
