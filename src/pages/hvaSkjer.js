import React from 'react';
import ReactDOM from 'react-dom';

import Navigation from 'components/navigation/Navigation';
import Title from 'components/layout/Title';
import Kalender from 'components/calendar/Kalender';
import Footer from 'components/footer/Footer';

const scss = require("../sass/style.scss");

const banner = require('../media/hvaskjer.jpg');

const hvaSkjer = (
	<>
		<Navigation />
		<div style={{backgroundImage: `url(${banner})`}} className="banner">
			<div></div>
			<div className="widget">
				<h1>Hva skjer</h1>
			</div>
		</div>
		<div className="contentContainer">
			<Title title="Ting å gjøre" />
			<Kalender />
		</div>
		<Footer />
	</>
);

ReactDOM.render(hvaSkjer, document.getElementById('page'));