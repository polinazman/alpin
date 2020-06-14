import React from 'react';

function SubNav () {
	return ( 
		<div className="subnav">
			<ul>
				<li className="subnav-li" >
					<a href="/skisenter/priser.html" className={`${location.pathname === '/skisenter/priser.html' ? "active-sub" : ""}`}>
						Priser
					</a>
				</li>
				<li className="subnav-li">
					<a href="/skisenter/apningstider.html" className={`${location.pathname === '/skisenter/apningstider.html' ? "active-sub" : ""}`}>
						Åpningstider
					</a>
				</li>
				<li className="subnav-li">
					<a href="/skisenter/skiutleie.html"className={`${location.pathname === '/skisenter/skiutleie.html' ? "active-sub" : ""}`}>
						Skiutleie og service
					</a>
				</li>
				<li className="subnav-li">
					<a href="/skisenter/loypekart.html" className={`${location.pathname === '/skisenter/loypekart.html' ? "active-sub" : ""}`}>
						Løypekart
					</a>
				</li>
				<li className="subnav-li">
					<a href="/skisenter/snopark.html" className={`${location.pathname === '/skisenter/snopark.html' ? "active-sub" : ""}`}>
						Snøpark
					</a>
				</li>
				<li className="subnav-li">
					<a href="/skisenter/barn.html" className={`${location.pathname === '/skisenter/barn.html' ? "active-sub" : ""}`}>
						Barn
					</a>
				</li>
				<li className="subnav-li">
					<a href="/skisenter/skiskole.html" className={`${location.pathname === '/skisenter/skiskole.html' ? "active-sub" : ""}`}>
						Skiskole
					</a>
				</li>
				<li className="subnav-li">
					<a href="/skisenter/langrenn.html" className={`${location.pathname === '/skisenter/langrenn.html' ? "active-sub" : ""}`}>
						Langrenn
					</a>
				</li>
				<li className="subnav-li">
					<a href="/skisenter/skishop.html" className={`${location.pathname === '/skisenter/skishop.html' ? "active-sub" : ""}`}>
						Skishop
					</a>
				</li>
			</ul>
		</div>
	);
};

export default SubNav;