import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {UP_Collection_Access} from './../imports/api/user_posts.js';
import TitleBar from './../imports/ui/TitleBar.js';
import AddTopics from './../imports/ui/AddTopics.js';
import TopicList from './../imports/ui/TopicList.js';

Meteor.startup(() => {
	Tracker.autorun(() => {
		const allPostsInDB = UP_Collection_Access.find().fetch();
		let title = '441 reddit';
		let jsx = (
					<div>
						<TitleBar title={title} moderator='newman' />
						<AddTopics />
						<TopicList passed_posts={allPostsInDB}/>
					</div>
					);
		ReactDOM.render(jsx, document.getElementById('content'));
	});
});
