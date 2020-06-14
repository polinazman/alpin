import React from 'react';
import ReactDOM from 'react-dom';

import Navigation from 'components/navigation/Navigation';
import Title from 'components/layout/Title';
import Footer from 'components/footer/Footer';

const scss = require("../sass/style.scss");

const banner = require('../media/omvradal.jpg');

const omvradal = (
	<>
		<Navigation />
		<div style={{backgroundImage: `url(${banner})`}} className="banner">
			<div></div>
			<div className="widget">
				<h1>Om Vrådal</h1>
			</div>
		</div>
		<div className="contentContainer">
			<Title title="Vrådal - Norges beste helårs feriested" />
			<div className="copy">
				Vrådal er ei bygd i Kviteseid kommune i Telemark. Selve tettstedet ligger der hvor Vråvatn munner ut i Nisser. Næringsgrunnlaget er turisme (hoteller, camping, hytter og skisenter), småindustri og litt skogsdrift.
			</div>
			<div className="copy">
				Navnet kommer sannsynligvis av det gammelnorske «vrá/ró» som betyr «ro/krok», gjerne brukt om gårder som lå litt avsides. Navnet kan også komme av at dalen gjør en sving, altså er krokete.
			</div>
		</div>
		<Footer />
	</>
);

ReactDOM.render(omvradal, document.getElementById('page'));