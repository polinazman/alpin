import React from 'react';

import Navigation from '../components/navigation/Navigation';
import Title from '../components/layout/Title';
import Tabs from '../components/layout/Tabs';
import GridContainer from '../components/activities/GridContainer';

import Banner from '../media/overnatting.jpg';
import '../sass/style.scss';

function Overnatting() {
	return (
		<>
			<Navigation />
			<div style={{backgroundImage: `url(${Banner})`}} className="banner">
			</div>
			<div className="contentContainer">
			</div>
			<Tabs>
				<div label="Hotell">
					<div className="contentGrid">
						<GridContainer
							link="https://straand.no/"
							photo="https://r-cf.bstatic.com/images/hotel/max500/374/37471548.jpg"
							heading="Straand Hotel"
							copy="Straand Hotel i Vrådal er et helårsåpent hotell med 125 rom, moderne kurs & konferanse avdeling, restaurant, bar og svømmebasseng"
						/>
						<GridContainer
							link="https://www.seljordhotel.no/"
							photo="https://images.citybreak.com/image.aspx?ImageId=2830667"
							heading="Seljord Hotel"
							copy="Seljord Hotel ligger en halvtimes kjøretur unna Vrådal. Det er lite og intimt med overnatting i 21 rom – 18 dobbeltrom og 3 familierom med 4 sengeplasser."
						/>
					</div>
				</div>
				<div label="Hytteutleie">
					<div className="contentGrid">
						<GridContainer
							link="https://vraadalbooking.no/"
							photo="http://alpin.no/wp-content/uploads/2016/03/215_hytte2.jpg"
							heading="Vrådal Booking"
							copy="Vrådal Booking har utleie av hytter, leiligheter og hotellrom i Vrådal. De fleste av hyttene og leilighetene ligger i gangavstand til Vrådal Panorama Skisenter."
						/>
						<GridContainer
							link="http://www.hyttegrend.no/"
							photo="http://www.hyttegrend.no/var/hyttegrend/storage/images/hytter/likeside-haven-vraadal/utendoers/4514-1-nor-NO/utendoers_popup.jpg"
							heading="Vrådal Hyttegrend"
							copy="Vrådal Hyttegrend består av 20 hytter. Alle hyttene har dusj, WC og badstu (Sauna), 8 senger, kjøkkenkrok med komfyr, oppvaskmaskin, mikrobølgeovn, kjøleskap med 20 l fryser og bestikk/utstyr for 8-10 personer."
						/>
					</div>
				</div>
				<div label="Camping">
					<div className="contentGrid">
						<GridContainer
							link="https://www.nedrestrand.no/"
							photo="https://aff.bstatic.com/images/hotel/max600/688/6887026.jpg"
							heading="Nedre Strand Camping"
							copy="Den sydvendte campingplassen på Nedre Strand er  godt tilrettelagt for en ferie med campingidyll. Campingplassen ligger kun 600m fra Vrådal sentrum og 5km fra Vrådal Panorama skisenter."
						/>
					</div>
				</div>
			</Tabs>
		</>
	)
};

export default Overnatting;