import React from 'react';

import Navigation from '../components/navigation/Navigation';
import Title from '../components/layout/Title';
import Tabs from '../components/layout/Tabs';
import Banner from '../media/servering.jpg';

import '../sass/style.scss';

function Servering() {
	return (
		<>
			<Navigation />
			<div style={{backgroundImage: `url(${Banner})`}} className="banner">
			</div>
			<div className="contentContainer">
			</div>
			<Tabs>
					<div label="Kafe">
						<div className="contentGrid">
							<div className="gridContainer">
								<p>
									Vrådal Panorama er kjent for matservering av høy kvalitet. Vi bruker kun ferske råvarer, blant annet selvplukkede bær, lokal fisk og kjøtt. På Vrådal Panorama finnes to spisesteder som holder åpent i vintersesongen. 
								</p>
							</div>
							<div className="gridContainer">
								<p>
									Cafe Utsikten på toppen serverer hamburgere, pølser m.m. og har skjenkeløyve for øl og vin. Kafeen nede ved resepsjonen har alt fra pizza, hamburgere med pommes frites, dagens suppe og salater, i tillegg til et stort fokus på kortreist mat.
								</p>
								<p>
									<a className="link" href="/#/apningstider">Se åpningstider</a>
								</p>
							</div>
						</div>
					</div>
					<div label="Restaurant">
						<div className="contentGrid">
							<div className="gridContainer">
								<p>
									Hver lørdag i sesongen er restauranten åpen og her kan man spise kortreist mat laget av råvarer fra Vrådal og omegn. Hva med elggryte med elg fra Vrådal, fish & chips med fisk fra Nisser eller en deilig steinsopprisotto? 
								</p>
								<p>
									<a className="link" href="/apningstider">Se åpningstider</a>
								</p>
							</div>
						</div>
					</div>
					<div label="Bar og Afterski">
						<div className="contentGrid">
							<div className="gridContainer">
								<p>
									Om kveldene kan man hygge seg på Mountain Loghome Bar som ligger vegg i vegg med hovedkafeen. I baren lager vi noe å drikke for enhver smak med råvarer av høy kvalitet.
									Hva med en skummende, forfriskende øl eller en varmende Irish? Vi har også glutenfri øl for dem som ønsker det.
								</p>
							</div>
							<div className="gridContainer">
								<p>
									Vrådal Panorama Bar har sitteplasser til alle, musikk, ølservering og topp stemning.
									Utvalgte lørdager arrangeres det musikkbingo, quiz og det er levende musikk. Følg med i kalenderen for å se programmet.
								</p>
								<p>
									Vi har alle rettigheter og det er 18-årsgrense.
								</p>
								<p>
									<a className="link" href="/apningstider">Se åpningstider</a>
								</p>
							</div>
						</div>
					</div>
			</Tabs>
		</>
	)
};

export default Servering;