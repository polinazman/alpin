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
					<div className="text">
						<h1>Servering</h1>
						<p>Vrådal Panorama er kjent for matservering av høy kvalitet.</p>
						<p>Vi bruker kun ferske råvarer, blant annet selvplukkede bær, lokal fisk og kjøtt.</p>
					</div>
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
		</div>
	);
}

export default Servering;