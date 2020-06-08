import React from 'react';

import Navigation from '../components/navigation/Navigation';
import Title from '../components/layout/Title';
import Tabs from '../components/layout/Tabs';
import Banner from '../media/servering.jpg';
import '../sass/style.scss';

function Servering() {
	return (
		<div>
			<Navigation />
			<div style={{backgroundImage: `url(${Banner})`}} className="banner">
				<div></div>
				<div className="widget">
					<h1>Servering</h1>
				</div>
			</div>
			<div className="contentContainer">
				<Title title="Servering" />
			</div>
			<Tabs>
					<div label="Kafe">
						See ya later, <em>Alligator</em>!
					</div>
					<div label="Restaurant">
						After 'while, <em>Crocodile</em>!
					</div>
					<div label="Afterski">
						Nothing to see here, this tab is <em>extinct</em>!
					</div>
			</Tabs>
			<div className="contentContainer">
				<Title title="Servering" />
			</div>
		</div>
	);
}

export default Servering;