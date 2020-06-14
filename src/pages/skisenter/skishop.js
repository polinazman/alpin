import React from 'react';
import ReactDOM from 'react-dom';

import Title from 'components/layout/Title';
import Navigation from 'components/navigation/Navigation';
import SubNav from 'components/navigation/SubNav';
import WeatherWidget from 'components/widget/WeatherWidget';
import Footer from 'components/footer/Footer';

const scss = require("../../sass/style.scss");
const banner = require('../../media/skisenter.jpg');

const skishop = (
	<>
		<Navigation/>
		<div style={{backgroundImage: `url(${banner})`}} className="banner">
			<SubNav />
			<div className="widget center">
				<h1>Skishop</h1>
			</div>
		</div>
		<div className="contentContainer">
			<Title title="Skishop" />
			<div className="copy">
				I skishopen finner du alt som trengs for en perfekt dag i bakken. Vi fører klær og utstyr fra ledende norske og utenlandske leverandører, blant annen Bransdal of Norway, Bergans, Eska, Wind X-Treme og andre. Vi tilbyr et bredt utvalg av skijakker, bukser, hansker, goggles. Her kan du også kjøpe suvenirer som minne fra turen.
			</div>
		</div>
		<Footer />
	</>
);

ReactDOM.render(skishop, document.getElementById('page'));