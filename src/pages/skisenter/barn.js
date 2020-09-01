import React from 'react';
import ReactDOM from 'react-dom';

import Title from '../../components/layout/Title';
import Navigation from '../../components/navigation/Navigation';
import SubNav from '../../components/navigation/SubNav';
import WeatherWidget from '../../components/widget/WeatherWidget';
import Banner from '../../media/skisenter.jpg';
import '../../sass/style.scss';

function Barn() {
	return (
		<>
			<Navigation/>
			<div style={{backgroundImage: `url(${Banner})`}} className="banner">
				<SubNav />
				<div className="widget center">
					<h1>Barn</h1>
				</div>
			</div>
			<div className="contentContainer">
				<Title title="Barneområde" />
				<div className="copy">
					Her kan barna kose seg med to skibånd, på totalt 100 meter, som er enkle å bruke, selv for de minste. Dette området er også perfekt for nybegynnere som tar sine første turer på ski og det er helt gratis å bruke det.
				</div>
				<div className="copy">
					Barneområdet ligger uforstyrret til borte fra hovedløypa, så her kan barna leke og kjøre slalom mellom de koselige figurene som er satt opp. Det er også mulighet for aking her. I tillegg er lyset på til kl. 21.00 i Lille-Petter, så her kan det også akes etter stengetid.
				</div>
				<h3>Det er gøy å være liten i Vrådal!</h3>
				<iframe width="70%" height="400" src="https://www.youtube.com/embed/PS-PXi6ACZw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
			</div>
		</>
	)
};

export default Barn;