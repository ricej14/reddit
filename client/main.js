import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

Meteor.startup(function(){

	const renderSomeParagraphs = function() {
		return [<p key='1'>p 1</p>, <p key='2'>p 2</p>, <p key='3'>p 3</p>];
	};

	const renderArrayMap = function() {
		let numbers = [{val: 1}, {val: 2}, {val: 3}];
		let newNumbers = numbers.map(function(number) {
			return number.val - 1;
		});
		console.log(newNumbers);
	};

	const renderPosts = function(passed_posts) {
		console.log(passed_posts);
		let numbers = [{val: 11}, {val: 23}, {val: 37}];
		let newNumbers = numbers.map(function(number) {
			return <p key={number.val}>{number.val}</p>;
		});
		return newNumbers;
	};

	let title = '441 reddit';
	let jsx = (
				<div>
					<h1>{title}</h1>
					{/* [<p key='1'>p 1</p>, <p key='2'>p 2</p>, <p key='3'>p 3</p>] */}
					{renderSomeParagraphs()}
					{renderArrayMap()}
					{renderPosts('hello')}
				</div>
				);

	ReactDOM.render(jsx, document.getElementById('content'));
});
