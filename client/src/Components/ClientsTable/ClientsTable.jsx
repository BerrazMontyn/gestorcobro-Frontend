import React, { useEffect, useState } from 'react';
import { getCustomers } from '../../Redux/action';
import './ClientsTable.css';
import { useSelector, useDispatch } from 'react-redux';
import { FiEdit } from 'react-icons/fi';
import { CgMoreR } from 'react-icons/cg';
import { RiDeleteBinLine } from 'react-icons/ri';

export default function ClientsTable() {
	const dispatch = useDispatch();
	const [property, setProperty] = useState('id');
	const [order, setOrder] = useState('ASC');
	useEffect(() => {
		dispatch(getCustomers(property, order));
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
										<button>
											<FiEdit className="text-2xl mr-2" />
										</button>
										<button>
											<CgMoreR className="text-2xl mr-2" />
										</button>
										<button>
											<RiDeleteBinLine className="text-2xl mr-2" />
										</button>
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
