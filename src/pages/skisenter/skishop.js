import React from 'react';
import ReactDOM from 'react-dom';

import Title from '../../components/layout/Title';
import Navigation from '../../components/navigation/Navigation';
import SubNav from '../../components/navigation/SubNav';
import WeatherWidget from '../../components/widget/WeatherWidget';
import Banner from '../../media/skisenter.jpg';
import skishop1 from '../../media/skishop1.jpg';
import skishop2 from '../../media/skishop2.jpg';
import '../../sass/style.scss';

function Skishop() {
	return(
		<>
			<Navigation/>
			<div style={{backgroundImage: `url(${Banner})`}} className="banner">
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
				<div className="contentGrid">
					<div className="gridContainer">
						<img src={skishop1} className="featuredImg" alt="" />
					</div>
					<div className="gridContainer">
						<img src={skishop2} className="featuredImg" alt="" />
					</div>
				</div>
			</div>
		</>
	)
};

export default Skishop;