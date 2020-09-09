import React from 'react';

const Footer = () => {
	return (
		<div className="footer">
			<div className="column">
				<h3>Om oss</h3>
				<ul>
					<li>
						<a href="/#/skisenter">Om skisenteret</a>
					</li>
					<li>
						<a href="/#/kontakt-oss">Kontakt oss</a>
					</li>
					<li>
						<a href="/#/reise">Reisen til Vrådal</a>
					</li>
				</ul>
			</div>
			<div className="column">
				<h3>Skiferie</h3>
				<ul>
					<li>
						<a href="/#/overnatting">Overnatting</a>
					</li>
					<li>
						<a href="/#/servering">Mat og drikke</a>
					</li>
					<li>
						<a href="/#/hva-skjer">Arrangement</a>
					</li>
				</ul>
			</div>
			<div className="column">
				<h3>Kontakt oss</h3>
				<ul>
					<li><a href="tel:+47 35 06 83 50">Tlf: +47 35 06 83 50</a></li>
					<li><a href="mailto:alpin@alpin.no">E-post: alpin@alpin.no</a></li>
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