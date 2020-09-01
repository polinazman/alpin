import React from 'react';
import ReactDOM from 'react-dom';

import Navigation from '../components/navigation/Navigation';
import Kalender from '../components/calendar/Kalender';
import Footer from '../components/footer/Footer';
import Banner from '../media/hvaskjer2.jpg';

import '../sass/style.scss';

function HvaSkjer() {
	return (
		<>
			<Navigation />
			<div style={{backgroundImage: `url(${Banner})`}} className="banner">
				<div></div>
				<div className="widget center">
					<h1>Hva skjer?</h1>
					<p>Kalender for vinteren 2020/2021</p>
				</div>
			</div>
			<div className="contentContainer">
				<Kalender />
			</div>
		</>
	)
};

export default HvaSkjer;