import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";

import Skisenter from './pages/Skisenter';
import Overnatting from './pages/Overnatting';
import Servering from './pages/Servering';
import Aktiviteter from './pages/Aktiviteter';
import Reise from './pages/Reise';
import Eiendom from './pages/Eiendom';
import Webcamera from './pages/Webcamera';

import Apningstider from './pages/Apningstider';

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
			<Route path="/aktiviteter" component={Aktiviteter} />
			<Route path="/reise" component={Reise} />
			<Route path="/eiendom" component={Eiendom} />

			<Route path="/apningstider" component={Apningstider} />

			<Route path="/om-vradal" component={Skisenter} />
			<Route path="/vinter" component={Overnatting} />
			<Route path="/sommer" component={Servering} />
			<Route path="/kontakt-oss" component={Aktiviteter} />

			<Route path="/webcamera" component={Webcamera} />

			<Route path="/post/:id" component={PostPage} />			

			<Footer />
		</Router>
	</div>
);


ReactDOM.render(homePage, document.getElementById('root'));