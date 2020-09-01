import React from 'react';

function createData(dato, apningstider) {
  return { dato, apningstider };
}

const data = [
	createData('21.11.20 - 18.12.20', 'Lørdag - søndag 10:00 - 15:30'),
	createData('19.12.20 - 15.01.21', 'Mandag - søndag 10:00 - 15:30'),
	createData('16.01.21 - 12.02.21', 'Mandag - søndag 10:00 - 16:00'),
	createData('13.02.21 - 28.02.21', 'Mandag - søndag 10:00 - 16:30'),
	createData('01.03.21 - 26.03.21', 'Mandag - søndag 10:00 - 16:00'),
	createData('27.03.21 - 05.04.21', 'Mandag - søndag 10:00 - 16:30'),
	createData('06.04.21 - 11.04.21', 'Mandag - søndag 10:00 - 16:00'),
]

function ApentSkipass() {
	return (
		<>
			<table className="custom-table apent-table">
				<thead>
					<tr>
				      <th>Dato</th>
				      <th>Åpningstider</th>
				    </tr>
				</thead>
				<tbody>
					{data.map((data,index) => (
					<tr key={index}>
						<td>{data.dato}</td>
						<td>{data.apningstider}</td>
					</tr>
					))}
				</tbody>
		    </table>
	    </>
	);
};

export default ApentSkipass;