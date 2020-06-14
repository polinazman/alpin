import React from 'react';
import ReactDOM from 'react-dom';

import Title from 'components/layout/Title';
import Navigation from 'components/navigation/Navigation';
import SubNav from 'components/navigation/SubNav';
import WeatherWidget from 'components/widget/WeatherWidget';
import Footer from 'components/footer/Footer';

const banner = require('../../media/skisenter.jpg');
const scss = require("../../sass/style.scss");

const langrenn = (
	<>
		<Navigation/>
		<div style={{backgroundImage: `url(${banner})`}} className="banner">
			<SubNav />
			<div className="widget center">
				<h1>Langrenn</h1>
			</div>
		</div>
		<div className="contentContainer">
			<div className="copy">
				I Vrådal finnes det langrennsløyper både i skogsterreng og på fjellet. Her på skisenteret er det på toppen en rundløype på ca. 4 km. og en løype som går inn til Hægefjell - en flott dagstur!
			</div>
			<div className="contentGrid">
				<div className="gridContainer">
					<h3>40 km velpreparerte langrennsløyper!</h3>
				</div>
				<div className="gridContainer">
					<h3>1.5 km lysløype midt i sentrum</h3>
				</div>
				<div className="gridContainer">
					<h3>4 km rundløype på toppen av skisenteret</h3>
				</div>
			</div>
			<img src="http://alpin.no/wp-content/uploads/2015/09/langrenn2015.jpg" alt="Kart over langrennsløyper" />
		</div>
		<Footer />
	</>
);

ReactDOM.render(langrenn, document.getElementById('page'));