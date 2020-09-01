import React from 'react';

import Title from '../components/layout/Title';
import Navigation from '../components/navigation/Navigation';
import SubNav from '../components/navigation/SubNav';
import WeatherWidget from '../components/widget/WeatherWidget';
import Banner from '../media/skisenter.jpg';
import '../sass/style.scss';
import familieferie from '../media/familieferie.jpg';
import alpin from '../media/alpin.jpg';

function Skisenter() {
	return (
		<>
			<Navigation/>
			<div style={{backgroundImage: `url(${Banner})`}} className="banner">
				<SubNav />
				<WeatherWidget />
			</div>
			<div className="contentContainer">
				<Title title="Om skisenteret"/>
				<div className="copy">
					Vrådal Panorama Skisenter ligger i Telemark, tre timers kjøring fra Oslo og to timer fra Kristiansand og Arendal. 
					Skisenteret har nå 18 nedfarter på i alt 15 km og åtte heiser, inkludert verdens første åtteseters stolheis som åpnet i 1998.
				</div>
				<div className="copy">
					Vrådal Panorama er et skianlegg for hele familien med løyper i alle vanskelighetsgrader. 
					Uansett om du vil stå slalåm, kjøre utfor, stå telemark eller leke deg på snøbrett: Her er forholdene lagt til rette.
				</div>
				<div className="copy">
					For barn er det mange tilbud på Vrådal. I 2007 åpnet vi et eget barneområde for aking og skilek rett ved siden av stolheisen. 
					Her har barna to skibånd på til sammen 100 meter som er lette å bruke selv for de aller minste. Vi har også skiskole for barn fra tre til fem år.
				</div>
				<Title title="Skiferie" />
				<div className="contentGrid">
					<div className="gridContainer">
						<img src={familieferie} className="featuredImg" alt="Mor og barn på akebrett" /> 
						<h3>Familieferie</h3>
						<p>Rett ved siden av stolheisen er et eget barneområde med to skibånd som enkle å bruke selv for de aller minste. Her kan barna leke, ake og kjøre slalom mellom de koselige figurene.</p>
					</div>
					<div className="gridContainer">
						<img src={alpin} className="featuredImg" alt="Stolheis med skikjørere" />
						<h3>Alpin for alle aldre</h3>
						<p>Skisenteret har 18 nedfarter på i alt 15 km og åtte heiser, inkludert verdens første åtteseters stolheis. Vrådal Panorama er skianlegg for hele familien med løyper i alle vanskelighetsgrader.</p>
					</div>
					<div className="gridContainer">
						<img src="http://alpin.no/wp-content/uploads/2015/11/Vinterlandskap.jpg" className="featuredImg" alt="" />
						<h3>Langrenn i idylliske omgivelser</h3>
						<p>I Vrådal finnes det langrennsløyper både i skogsterreng og på fjellet. Her er det muligheter for både korte turer og lengre dagsturer i totalt 40 km velpreparerte løyper.</p>
					</div>
				</div>
			</div>
		</>
	)
};

export default Skisenter;