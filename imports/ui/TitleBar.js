import React from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component{
	renderModerator() {
		if(this.props.moderator) {
			return <p>moderator: {this.props.moderator}</p>
		} else {
			return <p>moderator: unknown</p>
		}
	}
	render() {
		return(
			<>
				<h1>{this.props.title}</h1>
				{this.renderModerator()}
			</>
		);
	}
};

TitleBar.propTypes = {
	title: PropTypes.string.isRequired,
	moderator: PropTypes.string
};
