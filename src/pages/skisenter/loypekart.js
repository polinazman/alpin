import React from 'react';
import ReactDOM from 'react-dom';

import Title from 'components/layout/Title';
import Navigation from 'components/navigation/Navigation';
import SubNav from 'components/navigation/SubNav';
import WeatherWidget from 'components/widget/WeatherWidget';
import Footer from 'components/footer/Footer';

const banner = require('../../media/skisenter.jpg');
const scss = require("../../sass/style.scss");

const loypekart = (
	<>
		<Navigation/>
		<div style={{backgroundImage: `url(${banner})`}} className="banner">
			<SubNav />
			<div className="widget center">
				<h1>Langrenn</h1>
			</div>
		</div>
		<div className="contentContainer">
			<img src="http://vradalalpinse.wpengine.com/wp-content/uploads/2014/09/P3NpemU9b3JnJmlkPTY3NDk3NiZ0eXBlPTE.jpg" alt="Kart over alpinløyper" />
		</div>
		<Footer />
	</>
);


ReactDOM.render(loypekart, document.getElementById('page'));