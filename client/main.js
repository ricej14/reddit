import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

Meteor.startup(function(){
	let name = 'newman';
	let jsx = (
				<div>
					<p>this is from the main.js</p>
					<p>Hello {name}</p>
				</div>
				);

	ReactDOM.render(jsx, document.getElementById('content'));
});
