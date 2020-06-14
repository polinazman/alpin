import React from 'react';

const Footer = () => {
	return (
		<div className="footer">
			<div className="column">
				<h3>Om oss</h3>
				<ul>
					<li>
						<a href="/skisenter.html">Om skisenteret</a>
					</li>
					<li>
						<a href="/kontakt.html">Kontakt oss</a>
					</li>
					<li>
						<a href="/reise.html">Reisen til Vrådal</a>
					</li>
				</ul>
			</div>
			<div className="column">
				<h3>Skiferie</h3>
				<ul>
					<li>
						<a href="/overnatting.html">Overnatting</a>
					</li>
					<li>
						<a href="/servering.html">Mat og drikke</a>
					</li>
					<li>
						<a href="/hvaSkjer.html">Arrangement</a>
					</li>
				</ul>
			</div>
			<div className="column">
				<h3>Kontakt oss</h3>
				<ul>
					<li>Tlf: +47 35 06 83 50</li>
					<li>E-post: alpin@alpin.no</li>
					<li>
						Vrådal Panorama <br/>
						Vesletjønnvegen 50 <br/>
						3853 Vrådal
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;