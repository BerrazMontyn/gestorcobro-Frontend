import React from "react"
import { Link } from "react-router-dom";
import ServicesTable from "./ServicesTable/ServicesTable";
import SideMenu from "../SideMenu/SideMenu";
import './Services.css'



export default function Services () {
    return (
        <div className="flex max-w-screen bg-slate-200">
			<div>
				<SideMenu />
			</div>
			<div>
				<div className="flex flex-col justify-center mt-8 ml-20 text-gray-700">
					<h1 className="text-3xl underline mb-4">Servicios</h1>
				</div>
				<div className="flex mb-5">
					<hr className="border-1 border-zinc-400 w-[75vw]" />
				</div>
				<Link to="/nuev0-servicio">
				<button className="addClientButton">Agregar servicio</button>
				</Link>
				
				<ServicesTable />
			</div>
		</div>
    )
}