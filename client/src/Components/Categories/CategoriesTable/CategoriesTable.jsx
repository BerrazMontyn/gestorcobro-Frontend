import React from 'react'
import './CategoriesTable.css'


export default function CategoriesTable() {
	return (
		<div className="ml-4">
			<table className="w-[65vw]">
				<thead>
					<tr>
						<th>Id</th>
						<th>Nombre de categoria</th>
                        <th>Rubro Categoria</th>
					</tr>
				</thead>
				<tbody></tbody>
			</table>
		</div>
	);
}
