import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
	return (
		<div className="logoContainer">
			<Link to="/"><img className="logo" src={require('../../media/logo.png')} alt="Vrådal Panorama logo" /></Link>
		</div>
	);
};

const UpperNav = () => {
	return (
		<ul className="upperNav">
			<li>
				<Link to="/om-vradal">Om Vrådal</Link>
			</li>
			<li>
				<Link to="/sommer">Sommer</Link>
			</li>
			<li>
				<Link to="/kontakt-oss">Kontakt oss</Link>
			</li>
		</ul>
	);
};

const MainNav = ({active}) => {
	return (
		<ul className="mainNav">
			<li>
				<Link to="/skisenter" className={`${window.location.pathname === '/skisenter' ? "active-main" : ""}`}>Skisenter</Link>
			</li>
			<li>
				<Link to="/overnatting" className={`${window.location.pathname === '/overnatting' ? "active-main" : ""}`}>Overnatting</Link>
			</li>
			<li>
				<Link to="/servering" className={`${window.location.pathname === '/servering' ? "active-main" : ""}`}>Servering</Link>
			</li>
			<li>
				<Link to="/hva-skjer" className={`${window.location.pathname === '/hvaSkjer' ? "active-main" : ""}`}>Hva skjer</Link>
			</li>
			<li>
				<Link to="/reise" className={`${window.location.pathname === '/reise' ? "active-main" : ""}`}>Reise</Link>
			</li>
			<li>
				<Link to="/eiendom" className={`${window.location.pathname === '/eiendom' ? "active-main" : ""}`}>Eiendom</Link>
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