import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {UP_Collection_Access} from './../imports/api/user_posts.js';

console.log('Posting 1', UP_Collection_Access.find().fetch());

setTimeout(function(){
	console.log('Posting 2', UP_Collection_Access.find().fetch());
}, 1000);

Tracker.autorun(function(){
	console.log('Posting 3', UP_Collection_Access.find().fetch());
});

const renderPosts = function(passed_posts) {
	console.log(passed_posts);
	let formattedPosts = passed_posts.map(function(post) {
		return <p key={post._id}>{post.topic} have {post.votes} vote[s]</p>;
	});
	return formattedPosts;
};

Meteor.startup(function(){

	const posts = [  {
							_id: '01',
							topic: 'cats',
							votes: 5
						},
						{
							_id: '02',
							topic: 'dogs',
							votes: 2
						},
						{
							_id: '03',
							topic: 'birds',
							votes: 17
						}
	];

	let title = '441 reddit';
	let jsx = (
				<div>
					<h1>{title}</h1>
					{/*renderPosts('hello')*/}
					{renderPosts(posts)}
				</div>
				);
	ReactDOM.render(jsx, document.getElementById('content'));
});
