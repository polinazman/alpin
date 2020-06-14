import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid';
import { CALENDAR_API } from '../../constants/CALENDAR_API';

export default class Kalender extends Component {

	state = {
		calendarEvents: [{}]
	}

	componentDidMount() {
		fetch(CALENDAR_API)
		.then(response => response.json())
		.then(json => {
			this.setState({ calendarEvents: json.events.map(event => (
					{title: event.title, date: event.start_date, id: event.id, url: "/event/" + event.id }
				))})
		})
		.catch(console.log)
	}

	render() {
		return (
			<FullCalendar
				header={{
					left: 'prev',
					center: 'title',
					right: 'next'
	            }}
				defaultView="dayGridMonth"
				plugins={[ dayGridPlugin ]}
				events={ this.state.calendarEvents }
				locale="nb"
				firstDay={1}
			/>
		)
	}
}