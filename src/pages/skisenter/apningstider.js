import React from 'react';

import Title from '../../components/layout/Title';
import Navigation from '../../components/navigation/Navigation';
import SubNav from '../../components/navigation/SubNav';
import WeatherWidget from '../../components/widget/WeatherWidget';
import Tabs from '../../components/layout/Tabs';
import ApentSkipass from '../../components/tables/ApentSkipass';
import Banner from '../../media/skisenter.jpg';
import '../../sass/style.scss';

function Apningstider() {
	return(
		<>
			<Navigation/>
			<div style={{backgroundImage: `url(${Banner})`}} className="banner">
				<SubNav />
				<div className="widget center">
					<h1>Åpningstider</h1>
					<p>for vinter 2020/2021</p>
				</div>
			</div>
			<div className="contentContainer">
				<Tabs>
					<div label="Skipass og skiutleie">
						<ApentSkipass />
					</div>
					<div label="Kafe" id="kafe-apningstider">
						<ApentSkipass />
					</div>
					<div label="Afterski">
						<ApentSkipass />
					</div>
					<div label="Restaurant">
						<ApentSkipass />
					</div>
				</Tabs>
			</div>
		</>
	)
};

export default Apningstider;