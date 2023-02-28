import React, { useEffect } from 'react';
import { getCustomers } from '../../Redux/action';
import './ClientsTable.css';
import { useSelector, useDispatch } from 'react-redux';

export default function ClientsTable() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCustomers());
	}, [dispatch]);
	const customers = useSelector((state) => state.customers);
	console.log(customers, 'clientesssss');

	return (
		<div className="ml-4">
			<table className="w-[65vw]">
				<thead>
					<tr>
						<th>Id</th>
						<th>Cliente</th>
						<th>Dni</th>
						<th>Contacto</th>
						<th>Acciones</th>
					</tr>
				</thead>
				{customers.length > 0 ? (
					<tbody>
						{customers.map((c) => {
							return (
								<tr>
									<td>{c.id}</td>
									<td>{c.name}</td>
									<td>{c.identityCard}</td>
									<td className="flex flex-col">
										<div>Tel: {c.cellPhone}</div>
										<div>Email: {c.email}</div>
										<div>Dir: {c.address}</div>
									</td>
									<td>
										<button>Editar</button>
										<button>Detalles</button>
										<button>Eliminar</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				) : (
					<h1>No se encuentran clientes</h1>
				)}
			</table>
		</div>
	);
}
