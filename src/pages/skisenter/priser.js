import React from 'react';
import ReactDOM from 'react-dom';

import Title from 'components/layout/Title';
import Navigation from 'components/navigation/Navigation';
import SubNav from 'components/navigation/SubNav';
import WeatherWidget from 'components/widget/WeatherWidget';
import Tabs from 'components/layout/Tabs';
import PriserSkipassSkiutleie from 'components/tables/PriserSkipassSkiutleie';
import PriserSkiskole from 'components/tables/PriserSkiskole';
import Footer from 'components/footer/Footer';

const scss = require("../../sass/style.scss");
const banner = require('../../media/skisenter.jpg');

const priser = (
	<>
		<Navigation/>
		<div style={{backgroundImage: `url(${banner})`}} className="banner">
			<SubNav />
			<div className="widget center">
				<h1>Priser</h1>
			</div>
		</div>
		<div className="contentContainer">
			<Title title="Priser for vinter 2019/2020" />
		</div>
		<Tabs>
			<div label="Skipass og skiutleie">
				<PriserSkipassSkiutleie />
			</div>
			<div label="Skiskole">
				<PriserSkiskole />
			</div>
		</Tabs>
		<Footer />
	</>
);

ReactDOM.render(priser, document.getElementById('page'));