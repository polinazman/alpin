import React from 'react';

import Navigation from '../components/navigation/Navigation';
import Title from '../components/layout/Title';
import Tabs from '../components/layout/Tabs';
import Footer from '../components/footer/Footer';
import Banner from '../media/overnatting.jpg';
import '../sass/style.scss';

function Overnatting() {
	return (
		<>
			<Navigation />
			<div style={{backgroundImage: `url(${Banner})`}} className="banner">
				<div></div>
				<div className="widget center">
					<h1>Overnatting</h1>
					<p>Vrådal byr på et bredt utvalg av overnatting, enten du reiser alene eller med familien.</p>
					<p>Nedenfor finner du informasjon om hotell, camping og leiligheter og hytter til leie.</p>
				</div>
			</div>
			<div className="contentContainer">
			</div>
			<Tabs>
				<div label="Hotell">
					<div className="contentGrid">
						<div className="gridContainer">
							<img src="https://r-cf.bstatic.com/images/hotel/max500/374/37471548.jpg" className="featuredImg" alt="" /> 
							<h3>Straand Hotel</h3>
							<p>Straand Hotel i Vrådal er et helårsåpent hotell med 125 rom, moderne kurs & konferanse avdeling, restaurant, bar og svømmebasseng.</p>
							<a className="link" href="https://straand.no/" target="_blank" rel="noopener">Besøk hjemmeside</a>
						</div>
						<div className="gridContainer">
							<img src="https://images.citybreak.com/image.aspx?ImageId=2830667" className="featuredImg" alt="" />
							<h3>Seljord Hotel</h3>
							<p>Seljord Hotel ligger 30km unna Vrådal.</p>
							<p>Det er lite og intimt med overnatting i 21 rom – 18 dobbeltrom og 3 familierom med 4 sengeplasser. </p>
							<a className="link" href="https://www.seljordhotel.no/" target="_blank" rel="noopener">Besøk hjemmeside</a>
						</div>
					</div>
				</div>
				<div label="Hytteutleie">
					<div className="contentGrid">
						<div className="gridContainer">
							<img src="http://alpin.no/wp-content/uploads/2016/03/215_hytte2.jpg" className="featuredImg" alt="" /> 
							<h3>Vrådal Booking</h3>
							<p>Vrådal Booking har utleie av hytter, leiligheter og hotellrom i Vrådal. De fleste av hyttene og leilighetene ligger i gangavstand til Vrådal Panorama Skisenter.</p>
							<a className="link" href="https://vraadalbooking.no/" target="_blank" rel="noopener">Besøk hjemmeside</a>
						</div>
						<div className="gridContainer">
							<img src="http://www.hyttegrend.no/var/hyttegrend/storage/images/hytter/likeside-haven-vraadal/utendoers/4514-1-nor-NO/utendoers_popup.jpg" className="featuredImg" alt="" />
							<h3>Vrådal Hyttegrend</h3>
							<p>Vrådal Hyttegrend består av 20 hytter. Alle hyttene har dusj, WC og badstu (Sauna), 8 senger, kjøkkenkrok med komfyr, oppvaskmaskin, mikrobølgeovn, kjøleskap med 20 l fryser og bestikk/utstyr for 8-10 personer.</p>
							<a className="link" href="http://www.hyttegrend.no/" target="_blank" rel="noopener">Besøk hjemmeside</a>
						</div>
					</div>
				</div>
				<div label="Camping">
					<div className="contentGrid">
						<div className="gridContainer">
							<img src="https://aff.bstatic.com/images/hotel/max600/688/6887026.jpg" className="featuredImg" alt="" /> 
							<h3>Nedre Strand Camping</h3>
							<p>Den sydvendte campingplassen på Nedre Strand er  godt tilrettelagt for en ferie med campingidyll.</p>
							<p>Campingplassen ligger kun 600m fra Vrådal sentrum og 5km fra Vrådal Panorama skisenter.</p>
							<a className="link" href="https://www.nedrestrand.no/" target="_blank" rel="noopener">Besøk hjemmeside</a>
						</div>
					</div>
				</div>
			</Tabs>
		</>
	)
};

export default Overnatting;