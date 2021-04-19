import {Meteor} from 'meteor/meteor';
import {UP_Collection_Access} from './../imports/api/user_posts.js';

Meteor.startup(() => {

});

let person_one = {
	name: 'Newman',
	company: 'Post Office',
	fav_num: 43
};
console.log(person_one);

let person_two = {
	fav_num: 23
};
console.log(person_two);

let person_three = {
	...person_one,
	fav_num: 17
};
console.log(person_three);

let pet = 'cat';
let type = 'tabby';
let animal = {
	pet,
	type
};
console.log(animal);

let car = {
	color: 'green',
	doors: 2
};
let car_year = 1999;

console.log({
	...car,
	color: 'red',
	car_year,
	make: 'AMC'
});
