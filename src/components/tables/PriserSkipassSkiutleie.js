import React from 'react';

function createData(position, day1, day2, day3, day4, day5, day6, extradays) {
  return { position, day1, day2, day3, day4, day5, day6, extradays };
}

const data = [
	createData('Alpinski & snowboard, barn 0 - 15 år'),
	createData('Ski/brett', 210, 285, 360, 430, 505, 570, 45),
	createData('Støvler', 135, 170, 200, 230, 265, 295, 35),
	createData('Staver', 55, 75, 95, 115, 135, 160, 20),
	createData('Komplett', 310, 430, 540, 640, 705, 755, 55),
	createData('Alpinski & snowboard, voksen 16 +'),
	createData('Ski/brett', 285, 370, 465, 555, 650, 745, 75),
	createData('Støvler', 180, 220, 265, 305, 345, 380, 25),
	createData('Staver', 65, 95, 125, 145, 180, 200, 20),
	createData('Komplett', 430, 585, 715, 820, 915, 990, 75),
	createData('Alpinski avansert, voksen 16 +'),
	createData('Ski/brett', 405, 545, 680, 795, 915, 990, 75),
	createData('Støvler', 190, 230, 280, 320, 365, 400, 30),
	createData('Staver', 65, 95, 125, 145, 180, 200, 20),
	createData('Komplett', 485, 725, 905, 980, 1060, 1145, 75),
	createData('Langrenn barn 0 - 15 år'),
	createData('Langrennski', 125, 180, 230, 285, 335, 390, 45),
	createData('Komplett', 205, 260, 325, 380, 430, 485, 45),
	createData('Langrenn voksen 16 +'),
	createData('Langrennski', 160, 230, 305, 380, 450, 525, 65),
	createData('Komplett', 260, 345, 430, 530, 610, 705, 85),
	createData(''),
	createData('Langrennsko/støvler', 125, 145, 170, 190, 210, 230, 15),
	createData('Hjelm (Gratis barn 0-15 år)', 35, 50, 75, 85, 95, 105, 15),
	createData('Truger', 145, 230, 295, 360, 400, 420, 25),
	createData('Akebrett', 105, 150, 210, 265, 315, 370, 55)
]

function PriserSkipassSkiutleie() {
	return (
		<>
			<table className="custom-table">
				<thead>
					<tr>
						<td>(Priser oppgitt i NOK)</td>
					</tr>
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