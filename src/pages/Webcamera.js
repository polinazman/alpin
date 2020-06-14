import React from 'react';
import ReactDOM from 'react-dom';

import Navigation from 'components/navigation/Navigation';
import WeatherWidget from 'components/widget/WeatherWidget';
import Title from 'components/layout/Title';
import Tabs from 'components/layout/Tabs';
import Footer from 'components/footer/Footer';

const scss = require("../sass/style.scss");

const webcamera = (
	<>
		<Navigation />
		<div className="contentContainer">
			<Title title="Webkamera" />
		</div>
		<Tabs>
			<div label="Bunn">
				<img className="webcam-img" src="http://94.139.69.58:8080/axis-cgi/mjpg/video.cgi?resolution=4CIF" alt=""/>
			</div>
			<div label="Barneområdet">
				<img className="webcam-img" src="http://94.139.69.58:8081/axis-cgi/mjpg/video.cgi?resolution=4CIF" alt=""/>
			</div>
			<div label="Toppstasjon">
				<img className="webcam-img" src="http://195.204.130.69/axis-cgi/mjpg/video.cgi?resolution=4CIF" alt=""/>
			</div>
			<div label="Utsikt fra toppen">
				<img className="webcam-img" src="http://195.204.130.74:8080/axis-cgi/mjpg/video.cgi?resolution=4CIF" alt=""/>
			</div>
		</Tabs>
		<Footer />
	</>
);

ReactDOM.render(webcamera, document.getElementById('page'));