import React from 'react';

import Title from '../components/layout/Title';
import Navigation from '../components/navigation/Navigation';
import SubNav from '../components/navigation/SubNav';
import WeatherWidget from '../components/widget/WeatherWidget';
import Banner from '../media/skisenter.jpg';

function Skisenter() {
	return (
		<div>
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
						<img src="../media/skisenter.jpg" className="featuredImg" alt="" /> 
						<h3>Heading</h3>
						<p>This is a subheading that gives an insight to the news article</p>
					</div>
					<div className="gridContainer">
						<img src="../media/skisenter.jpg" className="featuredImg" alt="" />
						<h3>Heading</h3>
						<p>This is a subheading that gives an insight to the news article</p>
					</div>
					<div className="gridContainer">
						<img src="../media/skisenter.jpg" className="featuredImg" alt="" />
						<h3>Heading</h3>
						<p>This is a subheading that gives an insight to the news article</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Skisenter;