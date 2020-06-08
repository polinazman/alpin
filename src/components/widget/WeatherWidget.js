import React, { useEffect, useState } from 'react';

import '../../sass/style.scss';
import LiftsIcon from '../../media/lifts.png';
import SlopesIcon from '../../media/slopes.png';
import CrossCountryIcon from '../../media/cross-country.png';
import WebcamIcon from '../../media/webcam.png';

const weatherIcon = '../../media/weather/weather-';
 
const WEATHER_API = 'https://api.fnugg.no/get/resort/114?sourceFields=name,opening_hours,location,contact,lifts,slopes,conditions';

function WeatherWidget () {
	const [conditions, setConditions] = useState([]);
	useEffect(() => {
		fetch(WEATHER_API)
			.then(response => response.json())
			.then(json => setConditions(json))
			.catch(error => console.log(error))
	}, []);

	return (
	<div className="widget">
		<div className="conditions">
			<a href="https://www.yr.no/sted/Norge/Vestfold_og_Telemark/Kviteseid/Vr%C3%A5dal_skisenter/langtidsvarsel.html" target="_blank" rel="noopener">
				<p>Vær</p>
				<img src={`${weatherIcon}${conditions && conditions._source ? conditions._source.conditions.combined.bottom.symbol.fnugg_id : ''}.svg`} />
				<span>
					{conditions && conditions._source ? conditions._source.conditions.combined.bottom.temperature.value : ''} &deg;C
				</span>
			</a>
		</div>
		<div className="conditions">
			<p>Heiser</p>
			<img src={LiftsIcon} alt="Lift icon"/>
			<span>
				{conditions && conditions._source ? conditions._source.lifts.open : ''}
				/{conditions && conditions._source ? conditions._source.lifts.count : ''}
			</span>
		</div>
		<div className="conditions">
			<p>Nedfarter</p>
			<img src={SlopesIcon} alt="Slope icon"/>
			<span>
				{conditions && conditions._source ? conditions._source.slopes.open : ''}
				/{conditions && conditions._source ? conditions._source.slopes.count : ''}
			</span>
		</div>
		<div className="conditions">
			<p>Skiløyper</p>
			<img src={CrossCountryIcon} alt="Cross-country ski icon"/>
		</div>
		<div className="conditions">
			<a href="webcamera">
				<p>Webcamera</p>
				<img src={WebcamIcon} alt="Webcam icon"/>
			</a>
		</div>
	</div>
	);
};

export default WeatherWidget;