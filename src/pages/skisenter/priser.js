import React from 'react';
import ReactDOM from 'react-dom';

import Title from '../../components/layout/Title';
import Navigation from '../../components/navigation/Navigation';
import SubNav from '../../components/navigation/SubNav';
import WeatherWidget from '../../components/widget/WeatherWidget';
import Tabs from '../../components/layout/Tabs';
import PriserSkipassSkiutleie from '../../components/tables/PriserSkipassSkiutleie';
import PriserSkiskole from '../../components/tables/PriserSkiskole';
import Banner from '../../media/skisenter.jpg';
import '../../sass/style.scss';

function Priser() {
	return (	
		<>
			<Navigation/>
			<div style={{backgroundImage: `url(${Banner})`}} className="banner">
				<SubNav />
				<div className="widget center">
					<h1>Priser</h1>
					<p>for vinter 2019/2020</p>
				</div>
			</div>
			<div className="contentContainer">
			</div>
			<Tabs>
				<div label="Skipass og skiutleie">
					<PriserSkipassSkiutleie />
				</div>
				<div label="Skiskole">
					<PriserSkiskole />
				</div>
			</Tabs>
		</>
	)
};

export default Priser;