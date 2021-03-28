import {Meteor} from 'meteor/meteor';
import {UP_Collection_Access} from './../imports/api/user_posts.js';

Meteor.startup(() => {
	class Person {

	};
	let me = new Person();
	console.log(me);

	class Person2 {
		constructor(name) {
			this.name = name;
		}
	};
	let me2 = new Person2('Michael');
	console.log(me2);

	class Person3 {
		constructor(name = 'anonymous') {
			this.name = name;
		}
	};
	let me3 = new Person3();
	let me3b = new Person3('passed name');
	console.log(me3, me3b);

	class Person4 {
		constructor(name = 'anonymous') {
			this.name = name;
		}
		getGreeting() {
			return `hi, I am ${this.name}`;
		}
	};
	let me4 = new Person4('michael');
	console.log(me4.getGreeting());
});
