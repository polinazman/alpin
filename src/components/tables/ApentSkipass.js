import React from 'react';

function createData(dato, apningstider) {
  return { dato, apningstider };
}

const data = [
	createData('16.11.19 - 21.12.19', 'Lørdag - søndag 10:00 - 15:30'),
	createData('21.12.19 - 17.01.20', 'Mandag - søndag 10:00 - 15:30'),
	createData('18.01.20 - 07.02.20', 'Mandag - søndag 10:00 - 16:00'),
	createData('08.02.20 - 23.02.20', 'Mandag - søndag 10:00 - 16:30'),
	createData('24.02.20 - 03.04.20', 'Mandag - søndag 10:00 - 16:00'),
	createData('04.04.20 - 12.04.20', 'Mandag - søndag 10:00 - 16:30'),
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