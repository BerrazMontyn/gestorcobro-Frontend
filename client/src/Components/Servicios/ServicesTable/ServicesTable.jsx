import React, { useEffect, } from 'react'
import { useSelector, useDispatch } from "react-redux"
import {  getServices } from '../../../Redux/action';
import './ServicesTable.css'


export default function ServicesTable() {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getServices());
	  }, [dispatch]);

	  const services = useSelector((state) => state.services)
	  console.log(services, 'categoories') 
	  
	return (
		<div className="ml-4">
			<table className="w-[65vw]">
				<thead>
					<tr>
						<th>Id</th>
						<th>Nombre del Servicio</th>
                        
					
					</tr>
				</thead>
				{services.length > 0 ?  (
					<tbody>
						{services.map((c) => {
							return (
								<tr>
									<td>{c.id}</td>
									<td>{c.name}</td>
									

								
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
					<h1>No se encuentran categorias</h1>
				)}
				
			</table>
		</div>
	);
}
