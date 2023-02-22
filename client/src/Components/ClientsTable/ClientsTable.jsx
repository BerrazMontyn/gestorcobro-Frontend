import React from 'react';
import './ClientsTable.css';

export default function ClientsTable() {
	return (
		<div className="ml-4">
			<table className="w-[65vw]">
				<thead>
					<tr>
						<th>Id</th>
						<th>Cliente</th>
						<th>Contacto</th>
						<th>Acciones</th>
					</tr>
				</thead>
				<tbody></tbody>
			</table>
		</div>
	);
}
