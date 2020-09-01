import React from 'react';

function createData(personer, hour1, hour2, hour3, hour4) {
  return { personer, hour1, hour2, hour3, hour4 };
}

const data = [
	createData('1 person', 550, 820, 1085, 1350),
	createData('2 personer', 380, 575, 765, 960),
	createData('3 personer', 325, 510, 680, 870),
	createData('4-5 personer', 290, 465, 645, 830),
]

const data2 = [
	createData('', 'Pris pr. pers'),
	createData('4 timer', 810)
]

function PriserSkiskole() {
	return (
		<>
			<table className="custom-table">
				<thead>
					<tr>
						<td>En time er 45 minutter (Priser oppgitt i NOK)</td>
					</tr>
					<tr>
				      <th>Undervisning</th>
				      <th>1 time</th>
				      <th>2 timer</th>
				      <th>3 timer</th>
				      <th>4 timer</th>
				    </tr>
				</thead>
				<tbody>
					{data.map((data,index) => (
					<tr key={index}>
						<td>{data.personer}</td>
						<td>{data.hour1}</td>
						<td>{data.hour2}</td>
						<td>{data.hour3}</td>
						<td>{data.hour4}</td>
					</tr>
					))}
				</tbody>
		    </table>
			<table className="custom-table">
				<thead>
					<tr>
				      <th>Gruppeundervisning mandag-torsdag,</th>
				      <th>minimum 6 personer</th>
				    </tr>
				</thead>
				<tbody>
					{data2.map((data2,index) => (
						<tr key={index}>
							<td>{data2.personer}</td>
							<td>{data2.hour1}</td>
						</tr>
					))}
				</tbody>
		    </table>
		</>
	);
}

export default PriserSkiskole;