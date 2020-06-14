import React from 'react';
import ReactDOM from 'react-dom';

import Navigation from 'components/navigation/Navigation';
import Title from 'components/layout/Title';
import Tabs from 'components/layout/Tabs';

const scss = require("../sass/style.scss");
const banner = require('../media/servering.jpg');

const servering = (
	<>
		<Navigation />
		<div style={{backgroundImage: `url(${banner})`}} className="banner">
			<div></div>
			<div className="widget center">
				<h1>Servering</h1>
				<p>Vrådal Panorama er kjent for matservering av høy kvalitet.</p>
				<p>Vi bruker kun ferske råvarer, blant annet selvplukkede bær, lokal fisk og kjøtt.</p>
			</div>
		</div>
		<div className="contentContainer">
			<Title title="Mat og drikke" />
		</div>
		<Tabs>
				<div label="Kafe">
					<div className="copy">
						På Vrådal Panorama finnes to spisesteder som holder åpent i vintersesongen. 
						Cafe Utsikten på toppen serverer hamburgere, pølser m.m. og har skjenkeløyve for øl og vin.
					</div>
					<div className="copy">
						Kafeen nede ved resepsjonen har alt fra pizza, hamburgere med pommes frites, dagens suppe og salater, i tillegg til et stort fokus på kortreist mat. 
					</div>
					<a className="link" href="/skisenter/apningstider">Se åpningstider</a>
				</div>
				<div label="Restaurant">
					<div className="copy">
						Hver lørdag i sesongen er restauranten åpen og her kan man spise kortreist mat laget av råvarer fra Vrådal og omegn. Hva med elggryte med elg fra Vrådal, fish & chips med fisk fra Nisser eller en deilig steinsopprisotto? 
					</div>
					<a className="link" href="/skisenter/apningstider">Se åpningstider</a>
				</div>
				<div label="Bar og Afterski">
					<div className="copy">
						Om kveldene kan man hygge seg på Mountain Loghome Bar som ligger vegg i vegg med hovedkafeen. I baren lager vi noe å drikke for enhver smak med råvarer av høy kvalitet.
						Hva med en skummende, forfriskende øl eller en varmende Irish? Vi har også glutenfri øl for dem som ønsker det.
					</div>
					<div className="copy">
						Vrådal Panorama Bar har sitteplasser til alle, musikk, ølservering og topp stemning.
						Utvalgte lørdager arrangeres det musikkbingo, quiz og det er levende musikk. Følg med i kalenderen for å se programmet.
					</div>
					<div className="copy">
						Vi har alle rettigheter og det er 18-årsgrense.
					</div>
					<a className="link" href="/skisenter/apningstider">Se åpningstider</a>
				</div>
		</Tabs>
	</>
);

ReactDOM.render(servering, document.getElementById('page'));