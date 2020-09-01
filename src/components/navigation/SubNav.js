import React from 'react';
import { Link } from 'react-router-dom';

function SubNav () {
	return ( 
		<div className="subnav">
			<ul>
				<li className="subnav-li" >
					<Link to="/priser" className={`${window.location.pathname === '/priser' ? "active-sub" : ""}`}>
						Priser
					</Link>
				</li>
				<li className="subnav-li">
					<Link to="/apningstider" className={`${window.location.pathname === '/apningstider' ? "active-sub" : ""}`}>
						Åpningstider
					</Link>
				</li>
				<li className="subnav-li">
					<Link to="/skiutleie-og-service"className={`${window.location.pathname === '/skiutleie-og-service' ? "active-sub" : ""}`}>
						Skiutleie og service
					</Link>
				</li>
				<li className="subnav-li">
					<Link to="/loypekart" className={`${window.location.pathname === '/loypekart' ? "active-sub" : ""}`}>
						Løypekart
					</Link>
				</li>
				<li className="subnav-li">
					<Link to="/snopark" className={`${window.location.pathname === '/snopark' ? "active-sub" : ""}`}>
						Snøpark
					</Link>
				</li>
				<li className="subnav-li">
					<Link to="/barn" className={`${window.location.pathname === '/barn' ? "active-sub" : ""}`}>
						Barn
					</Link>
				</li>
				<li className="subnav-li">
					<Link to="/skiskole" className={`${window.location.pathname === '/skiskole' ? "active-sub" : ""}`}>
						Skiskole
					</Link>
				</li>
				<li className="subnav-li">
					<Link to="/langrenn" className={`${window.location.pathname === '/langrenn' ? "active-sub" : ""}`}>
						Langrenn
					</Link>
				</li>
				<li className="subnav-li">
					<Link to="/skishop" className={`${window.location.pathname === '/skisenter/skishop' ? "active-sub" : ""}`}>
						Skishop
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default SubNav;