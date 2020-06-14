import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CALENDAR_API } from '../../constants/CALENDAR_API';

import Navigation from '../navigation/Navigation';

function Event () {
	const [event, setEvents] = useState([]);

	let { id } = useParams();

	const url = CALENDAR_API + "/" + id;

	useEffect(() => {
		fetch(url)
			.then(response => response.json())
			.then(events => setEvents(events))
			.catch(error => console.log(error))
	}, []);

	return (
		<div>
			<Navigation />
			<div className="contentContainer">
				<h3 dangerouslySetInnerHTML={{__html: new Date(event.date).toLocaleDateString()}} />
				<h1 dangerouslySetInnerHTML={{__html: event && event.title ? event.title : ''}} />
				<div 
					className="copy"
					dangerouslySetInnerHTML={{__html: event && event.description ? event.description : ''}}
				/>
			</div>
		</div>
	);
};

export default Event;