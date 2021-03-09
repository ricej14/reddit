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

Meteor.startup(function(){
	UP_Collection_Access.insert({
		topic: 'kids',
		votes: 5
	});
	Tracker.autorun(function(){
		const posts = UP_Collection_Access.find().fetch();
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
});
