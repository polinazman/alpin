import React from 'react';

function createData(personer, hour1, hour2, hour3, hour4) {
  return { personer, hour1, hour2, hour3, hour4 };
}

const data = [
	createData('1 person', 530, 780, 1035, 1285),
	createData('2 personer', 360, 545, 730, 915),
	createData('3 personer', 310, 485, 650, 825),
	createData('4-5 personer', 275, 440, 615, 790),
]

function createData2(hours, price) {
  return { hours, price };
}

const data2 = [
	createData('', 'Pris pr. pers'),
	createData('4 timer', 770)
]

function PriserSkiskole() {
	return (
		<>
			<h3>Skiskole</h3>
			<p>En time er 45 minutter <br/>(Priser oppgitt i NOK)</p>
			<table className="custom-table">
				<thead>
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
							<td>{data2.hour2}</td>
						</tr>
					))}
				</tbody>
		    </table>
		</>
	);
}

export default PriserSkiskole;