import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import straandSommerland from '../../media/straand-sommerland.jpg';

class ActivityContainer extends React.Component {
	render() {
		return (
			<a className="gridContainer" href={this.props.link} target="_blank" rel="noopener">
				<ActivityPhoto photo={this.props.photo} />
				<ActivityHeading heading={this.props.heading} />
				<ActivityCopy copy={this.props.copy}/>
			</a>
		);
	}
}

class ActivityPhoto extends	React.Component {
	render() {
		return (
			<img src={this.props.photo} className="featuredImg" alt="" /> 
		);
	}
}

class ActivityHeading extends React.Component {
	render() {
		return (
			<h3 className="blueHeading link-heading">{this.props.heading}</h3>
		);
	}
}

class ActivityCopy extends React.Component {
	render() {
		return (
			<p>{this.props.copy}</p>
		);
	}
}

export default ActivityContainer;