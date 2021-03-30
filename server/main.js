import {Meteor} from 'meteor/meteor';
import {UP_Collection_Access} from './../imports/api/user_posts.js';

Meteor.startup(() => {
	let basic_object = {
		moderator: 'newman',
		print_moderator() {
			console.log(`Moderator: ${this.moderator}`)
		}
	};
	basic_object.print_moderator();
	setTimeout(basic_object.print_moderator, 250);
	setTimeout(basic_object.print_moderator.bind(basic_object), 500);
});
