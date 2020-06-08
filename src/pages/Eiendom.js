import React from 'react';

import Navigation from '../components/navigation/Navigation';
import Title from '../components/layout/Title';
import Banner from '../media/overnatting.jpg';
import '../sass/style.scss';

function Eiendom() {
	return (
		<div>
			<Navigation />
			<div style={{backgroundImage: `url(${Banner})`}} className="banner">
				<div></div>
				<div className="widget">
					<h1>Eiendom</h1>
				</div>
			</div>
			<div className="contentContainer">
				<Title title="Eiendom"/>
			</div>
		</div>
	);
}

export default Eiendom;