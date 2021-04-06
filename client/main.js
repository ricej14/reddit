import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {UP_Collection_Access} from './../imports/api/user_posts.js';
import App from './../imports/ui/App.js';

Meteor.startup(() => {
	Tracker.autorun(() => {
		const allPostsInDB = UP_Collection_Access.find({}, {sort: {votes: -1}}).fetch();
		let title = '441 reddit';

		ReactDOM.render(<App
			passedPropTitle={title}
			passedPropModerator={'newman'}
			passedPropAllPosts={allPostsInDB}
			passedFooter={'\u00A9 441 reddit'}
		/>, document.getElementById('content'));
	});
});
