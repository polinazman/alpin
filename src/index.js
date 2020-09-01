import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";

import Skisenter from './pages/Skisenter';
import Overnatting from './pages/Overnatting';
import Servering from './pages/Servering';
import HvaSkjer from './pages/HvaSkjer';
import Reise from './pages/Reise';
import Eiendom from './pages/Eiendom';
import Webcamera from './pages/Webcamera';

import Priser from './pages/skisenter/Priser';
import Apningstider from './pages/skisenter/Apningstider';
import Skiutleie from './pages/skisenter/Skiutleie';
import Loypekart from './pages/skisenter/Loypekart';
import Snopark from './pages/skisenter/Snopark';
import Barn from './pages/skisenter/Barn';
import Skiskole from './pages/skisenter/Skiskole';
import Langrenn from './pages/skisenter/Langrenn';
import Skishop from './pages/skisenter/Skishop';

import OmVradal from './pages/OmVradal';
import Sommer from './pages/Sommer';
import Kontakt from './pages/Kontakt';

import Home from './pages/Home';
import Footer from './components/footer/Footer';
import PostPage from './components/blog/PostPage';

import "./sass/style.scss";

const homePage = (
	<div>
		<Router>

			<Route path="/" exact component={Home} />
			<Route path="/skisenter" component={Skisenter} />
			<Route path="/overnatting" component={Overnatting} />
			<Route path="/servering" component={Servering} />
			<Route path="/hva-skjer" component={HvaSkjer} />
			<Route path="/reise" component={Reise} />
			<Route path="/eiendom" component={Eiendom} />

			<Route path="/priser" component={Priser} />
			<Route path="/apningstider" component={Apningstider} />
			<Route path="/skiutleie-og-service" component={Skiutleie} />
			<Route path="/loypekart" component={Loypekart} />
			<Route path="/snopark" component={Snopark} />
			<Route path="/barn" component={Barn} />
			<Route path="/skiskole" component={Skiskole} />
			<Route path="/langrenn" component={Langrenn} />
			<Route path="/skishop" component={Skishop} />

			<Route path="/om-vradal" component={OmVradal} />
			<Route path="/sommer" component={Sommer} />
			<Route path="/kontakt-oss" component={Kontakt} />

			<Route path="/webcamera" component={Webcamera} />

			<Route path="/post/:id" component={PostPage} />			

			<Footer />
		</Router>
	</div>
);


ReactDOM.render(homePage, document.getElementById('root'));