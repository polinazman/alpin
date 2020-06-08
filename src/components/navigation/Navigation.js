import React from 'react';
import { Link } from 'react-router-dom';

import '../../sass/style.scss';
import logo from '../../media/logo.png';

const Logo = () => {
	return (
		<Link to="/"><img className="logo" src={logo} alt="Vrådal Panorama logo" /></Link>
	);
};

const UpperNav = () => {
	return (
		<ul className="upperNav">
			<li>
				<Link to="/om-vradal">Om Vrådal</Link>
			</li>
			<li>
				<Link to="/vinter">Vinter</Link>
			</li>
			<li>
				<Link to="/sommer">Sommer</Link>
			</li>
			<li>
				<Link to="/kontakt-oss">Kontakt oss</Link>
			</li>
			<li>Språk</li>
		</ul>
	);
};

const MainNav = ({active}) => {
	return (
		<ul className="mainNav">
			<li>
				<Link to="/skisenter" className={active}>Skisenter</Link>
			</li>
			<li>
				<Link to="/overnatting" className={active}>Overnatting</Link>
			</li>
			<li>
				<Link to="/servering" className={active}>Servering</Link>
			</li>
			<li>
				<Link to="/aktiviteter" className={active}>Aktiviteter</Link>
			</li>
			<li>
				<Link to="/reise" className={active}>Reise</Link>
			</li>
			<li>
				<Link to="/eiendom" className={active}>Eiendom</Link>
			</li>
		</ul>
	);
}

const Navigation = () => {
	return (
		<div className="header">
			<Logo />
			<div className="navContainer">
				<UpperNav />
				<MainNav />
			</div>
		</div>
	);
}

export default Navigation;