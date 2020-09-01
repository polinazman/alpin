import React from 'react';
import ReactDOM from 'react-dom';

import Title from '../../components/layout/Title';
import Navigation from '../../components/navigation/Navigation';
import SubNav from '../../components/navigation/SubNav';
import WeatherWidget from '../../components/widget/WeatherWidget';
import Tabs from '../../components/layout/Tabs';
import Banner from '../../media/skisenter.jpg';
import skiutleie from '../../media/skiutleie.jpg';
import '../../sass/style.scss';

function Skiutleie() {
	return (	
		<>
			<Navigation/>
			<div style={{backgroundImage: `url(${Banner})`}} className="banner">
				<SubNav />
				<div className="widget center">
					<h1>Skiutleie og service</h1>
				</div>
			</div>
			<div className="contentContainer">
			</div>
			<Tabs>
				<div label="Skiutleie">
					<div className="copy">
						I skiutleia har vi ski for store og små, nybegynnere og øvede og også de som ønsker å gå på langrenn eller kjøre telemark.
						Vi tilpasser skiene etter ferdighet, så alle skal få ski eller snowboard som passer. I tillegg har vi gratis utlån av hjelmer til barn. For dem som ikke ønsker å stå på ski, har vi utleie av snowracere.
					</div>
					<a className="link" href="/priser">Priser vinteren 2019/2020</a>
					<img src={skiutleie} className="featuredImg bannerImg" alt="" />
				</div>
				<div label="Service">
					<div className="copy">
						Vi tilbyr en av norges mest moderne skiverksted med helautomatisk sliperobot fra østerriske Wintersteiger.
					</div>
					<div className="copy">
						Leverer du skiene dine til service hos oss, kan du hente dem igjen neste morgen. Skal du kun være her en dag, så skal vi gjøre vårt beste for at skiene er ferdige til kl. 16.30. Gjelder vintersesong, ved kapasitet.
					</div>
					<div className="contentGrid">
						<div className="gridContainer">
							<h3>Bronseservice</h3>
							<li>Maskinell voksing</li>
							<li>Ski kr. 150,-</li>
							<li>Snowboard kr. 200,-</li>
							<li>Langrenn kr. 200,-</li>
							<li>Hurtigvoksing kr 50,-</li>
						</div>
						<div className="gridContainer">
							<h3>Sølvservice</h3>
							<li>Planslip, finslip med struktur, kantslip og voksing</li>
							<li>Ski fra kr. 450,- (10 % familierabatt ved innlevering av 3 par ski eller mer)</li>
							<li>Snowboard fra kr. 490,- (10 % familierabatt ved innlevering av 3 snowboard eller mer)</li>
						</div>
						<div className="gridContainer">
							<h3>Gullservice</h3>
							<li>Grovsliping, fylling av riper i sålen, finslip med struktur, kantslip og voksing</li>
							<li>Ski fra kr. 590,-</li>
							<li>Snowboard fra kr. 690,-</li>
						</div>
					</div>
					<div className="contentGrid">
						<iframe width="100%" height="400" src="https://www.youtube.com/embed/8cSCXMJRJVU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
					</div>
				</div>
			</Tabs>
		</>
	)
};

export default Skiutleie;