import React from 'react';

import BlogPosts from '../components/blog/BlogPosts';
import Navigation from '../components/navigation/Navigation';
import WeatherWidget from '../components/widget/WeatherWidget';
import Title from '../components/layout/Title';
import Facebook from '../components/social-media/Facebook';
import '../sass/style.scss';
import Banner from '../media/home.jpg';

const Home = () => (
	<div>
		<Navigation />
		<div style={{backgroundImage: `url(${Banner})`}} className="banner">
			<div></div>
			<WeatherWidget />
		</div>
		<div className="contentContainer">
			<Title title="Nyheter" />
			<BlogPosts />
			<div className="contentGrid">
				<div className="gridContainer">
					<h2 className="blueHeading">Følg oss på Instagram</h2>
				</div>
				<div className="gridContainer">
					<h2 className="blueHeading">Facebook</h2>
					<p className="sm-text">Lik oss på Facebook og hold deg oppdatert på alt som skjer.</p>
					<Facebook />
				</div>
			</div>
		</div>
	</div>
);

export default Home;