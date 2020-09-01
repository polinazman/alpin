import React from 'react';
import ReactDOM from 'react-dom';

import Navigation from '../components/navigation/Navigation';
import Title from '../components/layout/Title';
import Tabs from '../components/layout/Tabs';
import banner from '../media/sommer.jpg';
import '../sass/style.scss';

function Sommer() {
	return (
		<>
			<Navigation />
			<div style={{backgroundImage: `url(${banner})`}} className="banner">
				<div></div>
				<div className="widget center">
					<h1>Sommer</h1>
					<p>Vrådal Panorama er et helårs feriested for hele familien.</p>
					<p>Her finner du mye moro for både store og små.</p>
				</div>
			</div>
			<div className="contentContainer">
				<Title title="Sommer" />
			</div>
			<Tabs>
				<div label="Attraksjoner">
					<div className="contentGrid">
						<div className="gridContainer">
							<img src="https://straand.no/wp-content/uploads/2020/07/MS-Fram-og-vanntrampoline-Wiuff-og-N%C3%B8rgaard-scaled-1024x683.jpg" className="featuredImg" alt="" /> 
							<h3>Straand Sommerland</h3>
							<p>To beachvolleyball baner, badestrand, stort lekeområde med trampoliner, husker, vipper, klatrehus, rutsjebane, hinderløype og ballområde. Stor flytebrygge med utleie av robåter, kanoer og vannsykler. Her er også Skandinavias høyeste utendørs klatretårn på 12 meter.</p>
							<a className="link" href="https://straand.no/straand-sommerland/" target="_blank" rel="noopener">Besøk hjemmeside</a>
						</div>
						<div className="gridContainer">
							<img src="http://vradalalpinse.wpengine.com/wp-content/uploads/2015/10/bilde-sommarland-2.jpg" className="featuredImg" alt="" />
							<h3>Sommerland i Bø</h3>
							<p>Parken er kjent for sine mange vannaktiviteter med bla. Europas største vannrutsjebane og en kjempestor surfebølge. I tillegg finner man lekeaktiviteter i massevis, eget "spilleland" og koselige spisesteder for hele familien. I år står et nytt stort basseng klart til bruk! Bø Sommarland ligger kun 55 minutters kjøring fra Vrådal.</p>
							<a className="link" href="https://www.sommarland.no/" target="_blank" rel="noopener">Besøk hjemmeside</a>
						</div>
						<div className="gridContainer">
							<img src="http://vradalalpinse.wpengine.com/wp-content/uploads/2015/10/fram1.jpg" className="featuredImg" alt="" />
							<h3>Sightseeing med M/S Fram</h3>
							<p>Bli med på en sightseeing på Nisser med veteranskipet M/S Fram. Turen på 2,5 time leder deg gjennom Vrådals flotte øylandskap, og gjennom slusene "Småstraum" og "Storstraum" som er vel 100 år gamle. På denne turen er det anledning til å besøke Vrådal Slusemuseum. Båten har egen restaurant med plass til ca 50 pers.</p>
							<a className="link" href="https://ms-fram.no/" target="_blank" rel="noopener">Besøk hjemmeside</a>
						</div>
					</div>
				</div>
				<div label="Aktiviteter">
					<div className="contentGrid">
						<div className="gridContainer">
							<img src="http://vradalalpinse.wpengine.com/wp-content/uploads/2015/10/IMG_8196_1.jpg" className="featuredImg" alt="" /> 
							<h3>Strender</h3>
							<p>I Vrådal finnes en idyllisk innlandsskjærgård, med mange små holmer, svaberg og sandstrender. Mange øyer og holmer kan bare nås fra vannveien. Her er det over 30 km med badestrender hvor du stort sett kan oppholde deg usjenert hele dagen. Vrådal har et varmt innenlandsklima om sommeren. Det er badetemperatur med opp til 24 c i vannet fra juni til august.</p>
							<p>Det er ca. 5 min. å gå fra resepsjonen i Vrådal Panorama til nærmeste badeplass.</p>
						</div>
						<div className="gridContainer">
							<img src="http://vradalalpinse.wpengine.com/wp-content/uploads/2015/10/DSC_0925.jpg" className="featuredImg" alt="" />
							<h3>Vandreturer</h3>
							<p>Vrådal har ca. 80 kilometer med merkede løyper både i skogs og fjellterreng. Mange av de merkede turløypene er lagt til områder med utsikt over det vakre øylandskapet med skog og fjell i bakgrunnen.</p>
							<p>De fleste løypene har midlere stigning (5-10 %), men det kan være partier opp til toppene som kan være betydelig brattere. Populære fjelltopper er Venelifjell på 910 moh, Åhomnuten på 843 moh, Roholtsfjell på 1005 moh og det høyeste fjellet Hegefjell på 1021 moh.</p>
						</div>
						<div className="gridContainer">
							<img src="http://vradalalpinse.wpengine.com/wp-content/uploads/2015/10/IMG_8145.jpg" className="featuredImg" alt="" />
							<h3>Vrådal Skatepark</h3>
							<p>Parken ligger ved siden av lekeplassen og den passer for både nybegynnere og øvede. Flaten er på 36 x 9 m i betong, og minirampe og streetbox er levert av Parkpilot.</p>
							<p>Parken er gratis å bruke og det er påbudt med hjelm.</p>
						</div>
					</div>
				</div>
			</Tabs>
		</>
	)
};

export default Sommer;