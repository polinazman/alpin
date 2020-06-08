import React from 'react';

import Navigation from '../components/navigation/Navigation';
import Title from '../components/layout/Title';
import Tabs from '../components/layout/Tabs';
import Banner from '../media/overnatting.jpg';
import '../sass/style.scss';

function Overnatting() {
	return (
		<div>
			<Navigation />
			<div style={{backgroundImage: `url(${Banner})`}} className="banner">
				<div></div>
				<div className="widget">
					<h1>Overnatting</h1>
					<p>Vrådal byr på et bredt utvalg av overnatting, enten du reiser alene eller med familien.</p>
					<p>Nedenfor finner du informasjon om hotell, camping og leiligheter og hytter til leie.</p>
				</div>
			</div>
			<div className="contentContainer">
				<Title title="Overnatting" />
			</div>
			<Tabs>
				<div label="Hotell">
					<div className="contentGrid">
						<div className="gridContainer">
							<img src="https://r-cf.bstatic.com/images/hotel/max500/374/37471548.jpg" className="featuredImg" alt="" /> 
							<h3>Straand Hotel</h3>
							<p>This is a subheading that gives an insight to the news article</p>
							<button className="btn-main"><a href="https://straand.no/" target="_blank" rel="noopener">Les mer</a></button>
						</div>
						<div className="gridContainer">
							<img src="../media/skisenter.jpg" className="featuredImg" alt="" />
							<h3>Heading</h3>
							<p>This is a subheading that gives an insight to the news article</p>
							<button className="btn-main"><a href="" target="_blank" rel="noopener">Mer informasjon</a></button>
						</div>
						<div className="gridContainer">
							<img src="../media/skisenter.jpg" className="featuredImg" alt="" />
							<h3>Heading</h3>
							<p>This is a subheading that gives an insight to the news article</p>
							<button className="btn-main"><a href="" target="_blank" rel="noopener">Mer informasjon</a></button>
						</div>
					</div>
				</div>
				<div label="Hytteutleie">
					After 'while, <em>Crocodile</em>!
				</div>
				<div label="Camping">
					Nothing to see here, this tab is <em>extinct</em>!
				</div>
			</Tabs>
		</div>
	);
}

export default Overnatting;