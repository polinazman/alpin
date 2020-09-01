import React from 'react';
import ReactDOM from 'react-dom';

import Title from '../../components/layout/Title';
import Navigation from '../../components/navigation/Navigation';
import SubNav from '../../components/navigation/SubNav';
import WeatherWidget from '../../components/widget/WeatherWidget';
import Banner from '../../media/skisenter.jpg';
import '../../sass/style.scss';

function Loypekart() {
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
				<img src="http://vradalalpinse.wpengine.com/wp-content/uploads/2014/09/P3NpemU9b3JnJmlkPTY3NDk3NiZ0eXBlPTE.jpg" alt="Kart over alpinløyper" />
				<img src="http://vradalalpinse.wpengine.com/wp-content/uploads/2014/09/P3NpemU9b3JnJmlkPTY3NDk3NiZ0eXBlPTE.jpg" alt="Kart over alpinløyper" />
			</div>
		</>
	)
};


export default Loypekart;