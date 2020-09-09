import React from 'react';

import Navigation from '../components/navigation/Navigation';
import Title from '../components/layout/Title';
import Tabs from '../components/layout/Tabs';
import GridContainer from '../components/activities/GridContainer';

import banner from '../media/sommer.jpg';
import straandSommerland from '../media/straand-sommerland.jpg';
import boSommerland from '../media/bo-sommerland.jpg';
import fram from '../media/fram.jpg';
import solvsmed from '../media/solvsmedtunet.jpg';
import '../sass/style.scss';

function Sommer() {
	return (
		<>
			<Navigation />
			<div style={{backgroundImage: `url(${banner})`}} className="banner">
			</div>
			<div className="contentContainer">
			</div>
			<Tabs>
				<div label="Attraksjoner">
					<div className="contentGrid">
						<GridContainer
							link="https://straand.no/straand-sommerland/"
							photo={straandSommerland}
							heading="Straand Sommerland"
							copy="To beachvolleyball baner, badestrand, stort lekeområde med trampoliner, husker, vipper, klatrehus, rutsjebane, hinderløype og ballområde. Stor flytebrygge med utleie av robåter, kanoer og vannsykler. Her er også Skandinavias høyeste utendørs klatretårn på 12 meter."
						/>
						<GridContainer
							link="https://www.sommarland.no/"
							photo={boSommerland}
							heading="Sommerland i Bø"
							copy="Parken er kjent for sine mange vannaktiviteter med bla. Europas største vannrutsjebane og en kjempestor surfebølge. I tillegg finner man lekeaktiviteter i massevis, eget &quot;spilleland&quot; og koselige spisesteder for hele familien. I år står et nytt stort basseng klart til bruk! Bø Sommarland ligger kun 55 minutters kjøring fra Vrådal."
						/>
						<GridContainer
							link="https://ms-fram.no/"
							photo={fram}
							heading="Sightseeing med M/S Fram"
							copy="Bli med på en sightseeing på Nisser med veteranskipet M/S Fram. Turen på 2,5 time leder deg gjennom Vrådals flotte øylandskap, og gjennom slusene &quot;Småstraum&quot; og &quot;Storstraum&quot; som er vel 100 år gamle. På denne turen er det anledning til å besøke Vrådal Slusemuseum. Båten har egen restaurant med plass til ca 50 pers."
						/>
						<GridContainer
							link="https://www.facebook.com/pages/Galleri-Samvirke/157212151091648"
							photo="https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/57109752_1734410210038493_8978863616027525120_o.jpg?_nc_cat=101&_nc_sid=730e14&_nc_ohc=oeOQE9C-S_IAX82Lugq&_nc_ht=scontent-arn2-1.xx&oh=fd1b4eab6930b633644d6f7e12df503d&oe=5F7A5D90"
							heading="Galleri Samvirke"
							copy="Galleriet holder til i Vrådal Sentrum og arrangerer jevnlig utstillinger med bilder fra lokale kunstnere og medlemmer i Vrådal og Fyresdal maleklubb. Åpent året rundt."
						/>
						<GridContainer
							link="https://www.visittelemark.no/ting-a-gjore/kviteseid-bygdetun-p530763"
							photo="https://www.visittelemark.no/imageresizer/?image=%2Fdmsimgs%2FKviteseid_bygdetun_1__1478703252.jpg&action=ProductDetailProFullWidth"
							heading="Kviteseid Bygdetun"
							copy="Bygdetunet ligger 12 km unna skisenteret. Det er et av de eldste museum i landet, og ble etablert i 1907. Samlingen består av 12 bygninger som er flyttet hit fra ulike gårder og skal gi et intrykk av  hvordan en vestående gård så ut for omtrent 200 år siden."
						/>
						<GridContainer
							link="https://www.vraadalgolfklubb.no/"
							photo="https://assets.simpleview-europe.com/telemark2018/imageresizer/?image=%2Fdmsimgs%2F8CE54EE599AE9FE515B709EB36EB6B3E301F4DA3.jpg&action=ProductDetailProFullWidth"
							heading="Vrådal Golfbane"
							copy="Golfbanen på Fossøy er 9 hulls golfbane som ligger vakkert til ved Nisser, omkranset av skog og fjell, kun 5 km fra Vrådal Panorama. Banen er åpen for drop-in hver dag så lenge forholdene tillater det (ca. 1. mai – 15. oktober)."
						/>
						<GridContainer
							link="https://solvsmedtunet.no/"
							photo={solvsmed}
							heading="Sølvsmedtunet"
							copy="Sølvsmedtunet ligger like ved Straand Hotel i Vrådal. Her har Astrid Søftestad verksted og butikk med et rikt utvalg av smykker etter telemarkstradisjoner. I andre etasje ligger Nisseloftet, der du kan handle juleting og skrive julekort året rundt."
						/>
						<GridContainer
							link="http://www.z-museum.no"
							photo="http://www.z-museum.no/images/phocagallery/Bildegalleri/thumbs/phoca_thumb_l_sf12020129.jpg"
							heading="Z-museum"
							copy="Museet i Treungen har en stor utstilling av veteranbiler, motorsykler, mopeder og sykler, samt Norges største privateide telefonsamling. Her finner du også en unik samling av orientalske tepper, gamle møbler og leker.  I museet ligger også en koselig kafé og et gammeldags postkontor."
						/>
					</div>
				</div>
				<div label="Aktiviteter">
					<div className="contentGrid">
						<div className="gridContainer">
							<img src="http://vradalalpinse.wpengine.com/wp-content/uploads/2015/10/IMG_8196_1.jpg" className="featuredImg" alt="" /> 
							<h3>Strender</h3>
							<p>I Vrådal finnes en idyllisk innlandsskjærgård, med mange små holmer, svaberg og sandstrender. Mange øyer og holmer kan bare nås fra vannveien. Her er det over 30 km med badestrender hvor du stort sett kan oppholde deg usjenert hele dagen. Vrådal har et varmt innenlandsklima om sommeren. Det er badetemperatur med opp til 24 c i vannet fra juni til august.</p>
							<p>Det er ca. 5 min. å gå fra resepsjonen i Vrådal Panorama til nærmeste badeplass.</p>
						</div>
						<div className="gridContainer">
							<img src="http://vradalalpinse.wpengine.com/wp-content/uploads/2015/10/DSC_0925.jpg" className="featuredImg" alt="" />
							<h3>Vandreturer</h3>
							<p>Vrådal har ca. 80 kilometer med merkede løyper både i skogs og fjellterreng. Mange av de merkede turløypene er lagt til områder med utsikt over det vakre øylandskapet med skog og fjell i bakgrunnen.</p>
							<p>De fleste løypene har midlere stigning (5-10 %), men det kan være partier opp til toppene som kan være betydelig brattere. Populære fjelltopper er Venelifjell på 910 moh, Åhomnuten på 843 moh, Roholtsfjell på 1005 moh og det høyeste fjellet Hegefjell på 1021 moh.</p>
						</div>
						<div className="gridContainer">
							<img src="http://vradalalpinse.wpengine.com/wp-content/uploads/2015/10/IMG_8145.jpg" className="featuredImg" alt="" />
							<h3>Vrådal Skatepark</h3>
							<p>Parken ligger ved siden av lekeplassen og den passer for både nybegynnere og øvede. Flaten er på 36 x 9 m i betong, og minirampe og streetbox er levert av Parkpilot.</p>
							<p>Parken er gratis å bruke og det er påbudt med hjelm.</p>
						</div>
					</div>
				</div>
			</Tabs>
		</>
	)
};

export default Sommer;