import React from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component{
	render() {
		return(
			<>
				<h1>{this.props.title}</h1>
				<p>{this.props.moderator}</p>
			</>
		);
	}
};

TitleBar.propTypes = {
	title: PropTypes.string.isRequired,
	moderator: PropTypes.string.isRequired
};
