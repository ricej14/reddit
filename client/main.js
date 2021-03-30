import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {UP_Collection_Access} from './../imports/api/user_posts.js';
import TitleBar from './../imports/ui/TitleBar.js';
import AddTopics from './../imports/ui/AddTopics.js';
import RenderPost from './../imports/ui/RenderPost.js';

const renderPosts = (passed_posts) => {
	//console.log(passed_posts);
	let formattedPosts = passed_posts.map((post) => {
		return <RenderPost key={post._id} post_prop_obj={post} />
		// return (
		// 	<p key={post._id}>{post.topic} have {post.votes} vote[s] {''}
		// 		<button onClick={() => {
		// 			UP_Collection_Access.update({_id: post._id}, {$inc: {votes: 1}})
		// 		}}>+1</button>
		// 		<button onClick={() => {
		// 			UP_Collection_Access.update({_id: post._id}, {$inc: {votes: -1}})
		// 		}}>-1</button>
		// 		<button onClick={() => {
		// 			UP_Collection_Access.remove({_id: post._id})
		// 		}}>X</button>
		// 	</p>
		// );
	});
	return formattedPosts;
};

Meteor.startup(() => {
	Tracker.autorun(() => {
		const allPostsInDB = UP_Collection_Access.find().fetch();
		let title = '441 reddit';
		let jsx = (
					<div>
						<TitleBar title={title} moderator='newman' />
						<AddTopics />
						{renderPosts(allPostsInDB)}
					</div>
					);
		ReactDOM.render(jsx, document.getElementById('content'));
	});
});
