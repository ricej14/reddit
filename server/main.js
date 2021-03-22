import {Meteor} from 'meteor/meteor';
import {UP_Collection_Access} from './../imports/api/user_posts.js';

Meteor.startup(function(){
	let numbers = [3, 12, 54, 17];

	let newNumbers = numbers.map(function(number){
		return number + 1;
	});

	console.log(newNumbers);

	let newNumbers2 = numbers.map((number) => number + 1);
	console.log(newNumbers2);
});
