import React from 'react';
import ReactDOM from 'react-dom';

import Title from '../../components/layout/Title';
import Navigation from '../../components/navigation/Navigation';
import SubNav from '../../components/navigation/SubNav';
import WeatherWidget from '../../components/widget/WeatherWidget';
import Banner from '../../media/skisenter.jpg';
import '../../sass/style.scss';

function Skiskole() {
	return (
		<>
			<Navigation/>
			<div style={{backgroundImage: `url(${Banner})`}} className="banner">
				<SubNav />
				<div className="widget center">
					<h1>Skiskole</h1>
				</div>
			</div>
			<div className="contentContainer">
				<Title title="Skiskole" />
				<div className="copy">
					På skiskolen kan du forbedre skiferdighetene dine enten i gruppe eller alene, og du velger selv hva du vil fordype deg i. Vi underviser i slalåm, telemark, snowboard og langrenn for nybegynnere og viderekommende. Tro oss, du blir en bedre skiløper hvis du går på skiskole. Du føler deg sikrere og selvtilliten øker. Få mer ut av skiferien, kom til Vrådal Panorama Skiskole!
				</div>
				<h3>Inndeling etter ferdighet</h3>
				<div className="contentGrid">
					<div className="gridContainer">
						<hr className="line greenline"/>
						<h3> Grønn </h3>
						<p>Første gang på ski. Gruppene lærer om sikkerhet, lærer å ploge, bremse og kjøre heis.</p>
					</div>
					<div className="gridContainer">
						<hr className="line blueline"/>
						<h3> Blå </h3>
						<p>Kan kjøre heis, ploge, bremse og svinge litt. Gruppene kjører på grønne og blå løyper, og skal lære å kjøre med parallelle ski, svinge og bruke stavene.</p>
					</div>
				</div>
				<div className="contentGrid">
					<div className="gridContainer">
						<hr className="line redline"/>
						<h3> Rød </h3>
						<p>Kan kjøre med parallelle ski, kan bruke staver og kjører ned røde bakker. Gruppene lærer å kjøre mer teknisk riktig, større fart på skiene samt store og små svinger.</p>
					</div>
					<div className="gridContainer">
						<hr className="line blackline"/>
						<h3> Svart </h3>
						<p>Kan kjøre ned svarte bakker. Gruppene jobber med å perfeksjonere teknikken, øker farten, kjører på forskjellige underlag, prøver ut forskjellige svingteknikker samt å bruke kantene på skiene.</p>
					</div>
				</div>
			</div>
		</>
	)
};


export default Skiskole;