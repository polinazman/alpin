import React from 'react';
import ReactDOM from 'react-dom';

import Title from '../../components/layout/Title';
import Navigation from '../../components/navigation/Navigation';
import SubNav from '../../components/navigation/SubNav';
import WeatherWidget from '../../components/widget/WeatherWidget';
import Banner from '../../media/skisenter.jpg';
import '../../sass/style.scss';

function Langrenn() {
	return (
		<>
			<Navigation/>
			<div style={{backgroundImage: `url(${Banner})`}} className="banner">
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
				<a href="http://alpin.no/wp-content/uploads/2015/09/langrenn2015.jpg" target="_blank">
					<img src="http://alpin.no/wp-content/uploads/2015/09/langrenn2015.jpg" className="doc-link" alt="Kart over langrennsløyper" />
				</a>
			</div>
		</>
	)
};

export default Langrenn;