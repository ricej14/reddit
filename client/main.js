import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {UP_Collection_Access} from './../imports/api/user_posts.js';
import TitleBar from './../imports/ui/TitleBar.js';
import AddTopics from './../imports/ui/AddTopics.js';

const renderPosts = (passed_posts) => {
	//console.log(passed_posts);
	let formattedPosts = passed_posts.map((post) => {
		return (
			<p key={post._id}>{post.topic} have {post.votes} vote[s] {''}
				<button onClick={() => {
					UP_Collection_Access.update({_id: post._id}, {$inc: {votes: 1}})
				}}>+1</button>
				<button onClick={() => {
					UP_Collection_Access.update({_id: post._id}, {$inc: {votes: -1}})
				}}>-1</button>
				<button onClick={() => {
					UP_Collection_Access.remove({_id: post._id})
				}}>X</button>
			</p>
		);
	});
	return formattedPosts;
};

const processFormDataFunction = (event) => {
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

Meteor.startup(() => {
	Tracker.autorun(() => {
		const allPostsInDB = UP_Collection_Access.find().fetch();
		let title = '441 reddit';
		let jsx = (
					<div>
						<TitleBar title={title}/>
						<form onSubmit={processFormDataFunction}>
							<input type='text' name='formInputNameAttribute' placeholder='Topic Name'/>
							<button>Add Topic</button>
						</form>
						<AddTopics />
						{renderPosts(allPostsInDB)}
					</div>
					);
		ReactDOM.render(jsx, document.getElementById('content'));
	});
});
