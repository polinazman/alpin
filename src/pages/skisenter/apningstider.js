import React from 'react';
import ReactDOM from 'react-dom';

import Title from 'components/layout/Title';
import Navigation from 'components/navigation/Navigation';
import SubNav from 'components/navigation/SubNav';
import WeatherWidget from 'components/widget/WeatherWidget';
import Tabs from 'components/layout/Tabs';
import ApentSkipass from 'components/tables/ApentSkipass';
import Footer from 'components/footer/Footer';

const scss = require("../../sass/style.scss");
const banner = require('../../media/skisenter.jpg');

const apningstider = (
	<>
		<Navigation/>
		<div style={{backgroundImage: `url(${banner})`}} className="banner">
			<SubNav />
			<div className="widget center">
				<h1>Åpningstider</h1>
			</div>
		</div>
		<div className="contentContainer">
			<Title title="Åpningstider" />
		</div>
		<Tabs>
			<div label="Skipass og skiutleie">
				<ApentSkipass />
			</div>
			<div label="Kafe">
				<ApentSkipass />
			</div>
			<div label="Afterski">
				<ApentSkipass />
			</div>
			<div label="Restaurant">
				<ApentSkipass />
			</div>
		</Tabs>
		<Footer />
	</>
);

ReactDOM.render(apningstider, document.getElementById('page'));