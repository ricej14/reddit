import {Meteor} from 'meteor/meteor';
import {UP_Collection_Access} from './../imports/api/user_posts.js';

Meteor.startup(() => {
	class Person5 {
		constructor(name = 'anonymous', age = 0) {
			this.name = name;
			this.age = age;
		}
		getGreeting() {
			return `hi, I am ${this.name}`;
		}
		getPersonDescription() {
			return `${this.name} is ${this.age}`;
		}
	};

	class Employee extends Person5 {

	};

	let me5 = new Person5('newman', 23);
	console.log(me5.getGreeting());
	console.log(me5.getPersonDescription());

	let me6 = new Employee('chris', 44);
	console.log(me6.getPersonDescription());

	class Employee2 extends Person5 {
		constructor(name, age, title) {
			super(name, age);
			this.title = title;
		}
		hasJob() {
			return !!this.title;
		}
	};
	let me7 = new Employee2('pat', 55, 'driver');
	console.log(me7.getPersonDescription());
	console.log('has job:', me7.hasJob());

	class Employee3 extends Person5 {
		constructor(name, age, title) {
			super(name, age);
			this.title = title;
		}
		getPersonDescription() {
			if(this.title) {
				return `hi, this is ${this.name} and I am a[n] ${this.title}`;
			} else {
				return super.getPersonDescription();
			}
		}
	};
	let me8 = new Employee3('des', 19, 'actor');
	console.log(me8.getPersonDescription());
	let me9 = new Employee3('pam', 88);
	console.log(me9.getPersonDescription());

	class Programmer extends Person5 {
		constructor(name, age, language = 'cobol') {
			super(name, age);
			this.language = language;
		}
		getGreeting() {
			return `I am ${this.name}, I am ${this.age}, and I like to program in ${this.language}`;
		}
	};
	let me10 = new Programmer('john', 23, 'python');
	console.log(me10.getGreeting());
});
