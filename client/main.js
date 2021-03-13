import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {UP_Collection_Access} from './../imports/api/user_posts.js';

const renderPosts = function(passed_posts) {
	console.log(passed_posts);
	let formattedPosts = passed_posts.map(function(post) {
		return <p key={post._id}>{post.topic} have {post.votes} vote[s]</p>;
	});
	return formattedPosts;
};

const processFormDataFunction = function(event){
	event.preventDefault();
	let newTopic = event.target.formInputNameAttribute.value;
	if (newTopic){
		event.target.formInputNameAttribute.value = '';
		UP_Collection_Access.insert({
			topic: newTopic,
			votes: 0
		});
	};
};

Meteor.startup(function(){
	Tracker.autorun(function(){
		const allPostsInDB = UP_Collection_Access.find().fetch();
		let title = '441 reddit';
		let jsx = (
					<div>
						<h1>{title}</h1>
						<form onSubmit={processFormDataFunction}>
							<input type='text' name='formInputNameAttribute' placeholder='Topic Name'/>
							<button>Add Topic</button>
						</form>
						{renderPosts(allPostsInDB)}
					</div>
					);
		ReactDOM.render(jsx, document.getElementById('content'));
	});
});
