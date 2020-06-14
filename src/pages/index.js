import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";

import Navigation from 'components/navigation/Navigation';
import Footer from 'components/footer/Footer';
import Home from './Home';

const scss = require("../sass/style.scss");

const homePage = (
	<>
		<Router>
			<Home />
			<Footer />
		</Router>
	</>
);


ReactDOM.render(homePage, document.getElementById('root'));