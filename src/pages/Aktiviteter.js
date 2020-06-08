import React from 'react';

import Navigation from '../components/navigation/Navigation';
import Title from '../components/layout/Title';
import Banner from '../media/home.jpg';
import '../sass/style.scss';

function Aktiviteter() {
	return (
		<div>
			<Navigation />
			<div style={{backgroundImage: `url(${Banner})`}} className="banner">
				<div></div>
				<div className="widget">
					<h1>Aktiviteter</h1>
				</div>
			</div>
			<div className="contentContainer">
				<Title title="Aktiviteter" />
			</div>
		</div>
	);
}

export default Aktiviteter;