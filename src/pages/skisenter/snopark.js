import React from 'react';
import ReactDOM from 'react-dom';

import Title from '../../components/layout/Title';
import Navigation from '../../components/navigation/Navigation';
import SubNav from '../../components/navigation/SubNav';
import WeatherWidget from '../../components/widget/WeatherWidget';
import Banner from '../../media/skisenter.jpg';
import snopark1 from '../../media/snopark1.jpg';
import snopark2 from '../../media/snopark2.jpg';
import '../../sass/style.scss';

function Snopark() {
	return (
		<>
			<Navigation/>
			<div style={{backgroundImage: `url(${Banner})`}} className="banner">
				<SubNav />
				<div className="widget center">
					<h1>Snøpark</h1>
				</div>
			</div>
			<div className="contentContainer">
				<Title title="Snøpark" />
				<div className="copy">
					Shapecrew har laget en flott park til oss i januar 2018.
					Parken ligger i løype nr. 9 og består av ti elementer.
					Parken passer for både nybegynnere og viderekommende.
				</div>
				<div className="copy">
					Parken kan by på:
					<div className="contentGrid">
						<div className="gridContainer bullet-list">
							<li>Rød og blå linje</li>
							<li>Box</li>
						</div>
						<div className="gridContainer bullet-list">
							<li>Quarterpipe</li>
							<li>To blå hopp</li>
						</div>
						<div className="gridContainer bullet-list">
							<li>Roller</li>
							<li>To tabletops</li>
						</div>
					</div>
				</div>
				<div className="contentGrid">
					<div className="gridContainer">
						<img src={snopark1} className="featuredImg" alt="" />
					</div>
					<div className="gridContainer">
						<img src={snopark2} className="featuredImg" alt="" />
					</div>
				</div>
				<div className="contentGrid">
					<div className="gridContainer">
						<iframe className="video" title="snofilm 6" src="https://www.youtube.com/embed/l6Rk2mMq8u4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
					</div>
					<div className="gridContainer">
						<iframe className="video" title="snofilm 5" src="https://www.youtube.com/embed/rq7OAgqRFsw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
					</div>
				</div>
			</div>
		</>
	)
};

export default Snopark;