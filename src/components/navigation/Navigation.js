import React from 'react';

const Logo = () => {
	return (
		<div className="logoContainer">
			<a href="/"><img className="logo" src={require('../../media/logo.png')} alt="Vrådal Panorama logo" /></a>
		</div>
	);
};

const UpperNav = () => {
	return (
		<ul className="upperNav">
			<li>
				<a href="/omvradal.html">Om Vrådal</a>
			</li>
			<li>
				<a href="/sommer.html">Sommer</a>
			</li>
			<li>
				<a href="/kontakt.html">Kontakt oss</a>
			</li>
		</ul>
	);
};

const MainNav = ({active}) => {
	return (
		<ul className="mainNav">
			<li>
				<a href="/skisenter.html" className={`${location.pathname === '/skisenter.html' ? "active-main" : ""}`}>Skisenter</a>
			</li>
			<li>
				<a href="/overnatting.html" className={`${location.pathname === '/overnatting.html' ? "active-main" : ""}`}>Overnatting</a>
			</li>
			<li>
				<a href="/servering.html" className={`${location.pathname === '/servering.html' ? "active-main" : ""}`}>Servering</a>
			</li>
			<li>
				<a href="/hvaSkjer.html" className={`${location.pathname === '/hvaSkjer.html' ? "active-main" : ""}`}>Hva skjer</a>
			</li>
			<li>
				<a href="/reise.html" className={`${location.pathname === '/reise.html' ? "active-main" : ""}`}>Reise</a>
			</li>
			<li>
				<a href="/eiendom.html" className={`${location.pathname === '/eiendom.html' ? "active-main" : ""}`}>Eiendom</a>
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