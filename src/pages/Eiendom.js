import React from 'react';
import ReactDOM from 'react-dom';

import Navigation from '../components/navigation/Navigation';
import Title from '../components/layout/Title';
import Tabs from '../components/layout/Tabs';
import Banner from '../media/eiendom.jpg';

import '../sass/style.scss';

function Eiendom() {
	return (
		<>
			<Navigation />
			<div style={{backgroundImage: `url(${Banner})`}} className="banner">
			</div>
			<div className="contentContainer">
			</div>
			<Tabs>
				<div label="Hytter">
					<h2>Disse bygger i Vrådal</h2>
					<div className="contentGrid">
						<div className="gridContainer">
							<img src="https://r-cf.bstatic.com/images/hotel/max500/374/37471548.jpg" className="featuredImg" alt="" /> 
							<h3>Buen Gruppen</h3>
							<p>Selger: </p>
						</div>
						<div className="gridContainer">
							<img src="https://r-cf.bstatic.com/images/hotel/max500/374/37471548.jpg" className="featuredImg" alt="" /> 
							<h3>Byggmaker - Seljord Elektriske</h3>
							<p>Selger: </p>
						</div>

					</div>
				</div>
				<div label="Tomter">
					<div className="contentGrid">
					</div>
				</div>
			</Tabs>
		</>
	)
};

export default Eiendom;