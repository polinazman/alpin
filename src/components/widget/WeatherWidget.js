import React, { useEffect, useState } from 'react';
import { ReactSVG } from 'react-svg';

import "./WeatherWidget.scss";

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
				{conditions && conditions._source && <ReactSVG  className ="weatherIcon" src={"../../media/resort-weather-" + conditions._source.conditions.combined.bottom.symbol.fnugg_id + ".svg" } /> }
				<span>
					{conditions && conditions._source ? conditions._source.conditions.combined.bottom.temperature.value : ''} &deg;C
				</span>
			</a>
		</div>
		<div className="conditions">
			<p>Heiser</p>
			<img src={require('../../media/lifts.png')} alt="Lift icon"/>
			<span>
				{conditions && conditions._source ? conditions._source.lifts.open : ''}
				/{conditions && conditions._source ? conditions._source.lifts.count : ''}
			</span>
		</div>
		<div className="conditions">
			<p>Nedfarter</p>
			<img src={require('../../media/slopes.png')} alt="Slope icon"/>
			<span>
				{conditions && conditions._source ? conditions._source.slopes.open : ''}
				/{conditions && conditions._source ? conditions._source.slopes.count : ''}
			</span>
		</div>
		<div className="conditions">
			<a href="/langrenn">
				<p>Skiløyper</p>
				<img src={require('../../media/cross-country.png')} alt="Cross-country ski icon"/>
			</a>
		</div>
		<div className="conditions">
			<a href="/webcamera">
				<p>Webcamera</p>
				<img src={require('../../media/webcam.png')} alt="Webcam icon"/>
			</a>
		</div>
	</div>
	);
};

export default WeatherWidget;