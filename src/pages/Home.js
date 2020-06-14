import React from 'react';

import BlogPosts from 'components/blog/BlogPosts';
import Navigation from 'components/navigation/Navigation';
import WeatherWidget from 'components/widget/WeatherWidget';
import Title from 'components/layout/Title';
import Facebook from 'components/social-media/Facebook';
import Instagram from 'components/social-media/Instagram';

const banner = require('../media/skisenter.jpg');

const Home = () => (
	<>
		<Navigation />
		<div style={{backgroundImage: `url(${banner})`}} className="banner">
			<div></div>
			<WeatherWidget />
		</div>
		<div className="contentContainer">
			<Title title="Nyheter" />
			<BlogPosts />
			<div className="contentGrid">
				<div className="gridContainer">
					<h2 className="blueHeading">Følg oss på Instagram</h2>
					<Instagram />
				</div>
				<div className="gridContainer">
					<h2 className="blueHeading">Facebook</h2>
					<p className="sm-text">Lik oss på Facebook og hold deg oppdatert på alt som skjer.</p>
					<Facebook />
				</div>
			</div>
		</div>
	</>
);

export default Home;