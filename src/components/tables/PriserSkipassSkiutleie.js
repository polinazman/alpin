import React from 'react';

function createData(position, day1, day2, day3, day4, day5, day6, extradays) {
  return { position, day1, day2, day3, day4, day5, day6, extradays };
}

const data = [
	createData('Alpinski & snowboard, barn 0 - 15 år'),
	createData('Ski/brett', 200, 270, 340, 410, 480, 540, 40),
	createData('Støvler', 130, 160, 190, 220, 250, 280, 30),
	createData('Staver', 50, 70, 90, 110, 130, 150, 10),
	createData('Komplett', 295, 410, 515, 610, 670, 720, 50),
	createData('Alpinski & snowboard, voksen 16 +'),
	createData('Ski/brett', 260, 350, 440, 530, 620, 710, 70),
	createData('Støvler', 170, 210, 250, 290, 330, 360, 20),
	createData('Staver', 60, 90, 120, 140, 170, 190, 15),
	createData('Komplett', 410, 555, 680, 780, 870, 940, 70),
	createData('Alpinski avansert, voksen 16 +'),
	createData('Ski/brett', 360, 500, 620, 730, 840, 940, 70),
	createData('Støvler', 170, 210, 250, 290, 330, 360, 20),
	createData('Staver', 60, 90, 120, 140, 170, 190, 15),
	createData('Komplett', 460, 690, 860, 930, 1010, 1090, 70),
	createData('Langrenn barn 0 - 15 år'),
	createData('Langrennski', 120, 170, 220, 270, 320, 370, 40),
	createData('Komplett', 195, 245, 310, 360, 410, 460, 40),
	createData('Langrenn voksen 16 +'),
	createData('Langrennski', 150, 220, 290, 360, 430, 500, 60),
	createData('Komplett', 245, 330, 410, 505, 575, 670, 80),
	createData(''),
	createData('Langrennsko/støvler', 120, 140, 160, 180, 200, 220, 10),
	createData('Hjelm (Gratis barn 0-15 år)', 30, 50, 70, 80, 90, 100, 10),
	createData('Truger', 140, 220, 280, 340, 380, 400, 20),
	createData('Akebrett', 100, 150, 200, 250, 300, 350, 50)
]

function PriserSkipassSkiutleie() {
	return (
		<>
			<h3>Skipass/Heiskort</h3>
			<p>(Priser oppgitt i NOK)</p>
			<table className="custom-table">
				<thead>
					<tr>
				      <th>Dager</th>
				      <th>1</th>
				      <th>2</th>
				      <th>3</th>
				      <th>4</th>
				      <th>5</th>
				      <th>6</th>
				      <th>Etter 6+dag</th>
				    </tr>
				</thead>
				<tbody>
					{data.map((data,index) => (
					<tr key={index}>
						<td>{data.position}</td>
						<td>{data.day1}</td>
						<td>{data.day2}</td>
						<td>{data.day3}</td>
						<td>{data.day4}</td>
						<td>{data.day5}</td>
						<td>{data.day6}</td>
						<td>{data.extradays}</td>
					</tr>
					))}
				</tbody>
		    </table>
		</>
	);
}

export default PriserSkipassSkiutleie;