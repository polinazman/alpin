import React from 'react';
import ReactDOM from 'react-dom';

import Navigation from 'components/navigation/Navigation';
import Title from 'components/layout/Title';
import Footer from 'components/footer/Footer';

const scss = require("../sass/style.scss");
const banner = require('../media/reise.jpg');

const reise = (
	<>
		<Navigation />
		<div style={{backgroundImage: `url(${banner})`}} className="banner">
			<div></div>
			<div className="widget">
				<h1>Reise</h1>
			</div>
		</div>
		<div className="contentContainer">
			<Title title="Veien til Vrådal"/>
			<div className="copy">
				Oslo - Vrådal 211 km
			</div>
			<div className="copy">
				Kristiansand -Vrådal 176 km
			</div>
			<div className="copy">
				Tønsberg - Vrådal 174 km
			</div>
			<div className="copy">
				Skien - Vrådal 100 km
			</div>
			<div className="copy">
				Arendal - Vrådal 139 km
			</div>
		</div>
		<Footer />
	</>
);

ReactDOM.render(reise, document.getElementById('page'));