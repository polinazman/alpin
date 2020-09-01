import React from 'react';
import ReactDOM from 'react-dom';

import Title from '../components/layout/Title';
import Navigation from '../components/navigation/Navigation';
import ContactForm from '../components/contact/ContactForm';
import '../sass/style.scss';

function Kontakt() {
	return (
		<>
			<Navigation />
			<div className="contentContainer">
				<div className="contentGrid">
					<div className="gridContainer">
						<Title title="Kontaktinformasjon"/>
						<div className="gridContainer">
							<h3>Skisenter</h3>
							<p>Tlf: +47 35 06 83 50</p>
							<p>E-post: <a className="link" href="mailto:alpin@alpin.no">alpin@alpin.no</a></p>
						</div>
						<div className="gridContainer">
							<h3>Daglig leder</h3>
							<p>Petter Johnsen</p>
							<p>E-post: <a className="link" href="mailto:alpin@alpin.no">petter@alpin.no</a></p>
						</div>
						<div className="gridContainer">
							<h3>Kasse, skishop & økonomi</h3>
							<p>Julia Johnsen</p>
							<p>E-post: <a className="link" href="mailto:alpin@alpin.no">julia@alpin.no</a></p>
						</div>
						<div className="gridContainer">
							<h3>Kafe og bar</h3>
							<p>Frank Schmidt</p>
							<p>Sjefskokk</p>
							<p>E-post: <a className="link" href="mailto:alpin@alpin.no">frank@alpin.no</a></p>
						</div>
						<div className="gridContainer">
							<h3>Skiskole & skiutleie</h3>
							<p>E-post: <a className="link" href="mailto:alpin@alpin.no">skiskole@alpin.no</a></p>
						</div>
					</div>
					<div className="gridContainer">
						<Title title="Kontakt oss" />
						<ContactForm />
					</div>
				</div>
			</div>
		</>
	)
};

export default Kontakt;