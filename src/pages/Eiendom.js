import React from 'react';
import ReactDOM from 'react-dom';

import Navigation from 'components/navigation/Navigation';
import Title from 'components/layout/Title';
import Footer from 'components/footer/Footer';

const scss = require('../sass/style.scss');
const banner = require('../media/eiendom.jpg');

const eiendom = (
	<>
		<Navigation />
		<div style={{backgroundImage: `url(${banner})`}} className="banner">
			<div></div>
			<div className="widget">
				<h1>Eiendom</h1>
			</div>
		</div>
		<div className="contentContainer">
			<Title title="Hytter og tomter i Vrådal"/>
			<div className="copy">
				Kontaktperson angående tomter <br/>
				Leif Larsen <br/>
				Ansvarlig uteanlegg. veier m.m <br/>
				Mobil: + 47 476 01 003 <br/>
				E-mail: leif@alpin.no
			</div>
			<div className="copy">
				Petter Johnsen <br/>
				Mobil: +47 908 28 976 <br/>
				E-mail: petter@alpin.no 
			</div>
		</div>
		<Footer />
	</>
);

ReactDOM.render(eiendom, document.getElementById('page'));