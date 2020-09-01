import React from 'react';

import Navigation from '../components/navigation/Navigation';
import Title from '../components/layout/Title';
import Footer from '../components/footer/Footer';
import Banner from '../media/reise.jpg';
import '../sass/style.scss';

function Reise() {
	return (
		<>
			<Navigation />
			<div style={{backgroundImage: `url(${Banner})`}} className="banner">
				<div></div>
				<div className="widget">
					<h1>Reise</h1>
				</div>
			</div>
			<div className="contentContainer">
				<Title title="Veien til Vrådal"/>
				<div className="copy">
					Oslo - Vrådal 211 km
				</div>
				<div className="copy">
					Kristiansand -Vrådal 176 km
				</div>
				<div className="copy">
					Tønsberg - Vrådal 174 km
				</div>
				<div className="copy">
					Skien - Vrådal 100 km
				</div>
				<div className="copy">
					Arendal - Vrådal 139 km
				</div>
			</div>
		</>
	)
};

export default Reise;