import React from 'react';
import { Link } from 'react-router-dom';
import ClientsTable from '../ClientsTable/ClientsTable';
import SideMenu from '../SideMenu/SideMenu';

import './Clients.css';

export default function Clientes() {
	return (
		<div className="flex max-w-screen bg-slate-200">
			<div>
				<SideMenu />
			</div>
			<div>
				<div className="flex flex-col justify-center mt-8 ml-20 text-gray-700">
					<h1 className="text-3xl underline mb-4">Clientes</h1>
				</div>
				<div className="flex mb-5">
					<hr className="border-1 border-zinc-400 w-[75vw]" />
				</div>
				<Link to="/nuevo-cliente">
					<button className="addClientButton">Agregar cliente</button>
				</Link>
				<ClientsTable />
			</div>
		</div>
	);
}
