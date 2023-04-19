import React from "react"
import { Link } from "react-router-dom";





export default function Gastos () {
    return (
        <div className="flex max-w-screen bg-slate-200">
			<div>
			</div>
			<div>
            <div className="flex items-center mt-8 ml-20 text-gray-700">
  				<h1 className="text-3xl underline mb-4">Gastos</h1>
  					<Link to="/nuevo-gasto">
    					<button className="addClientButton ml-4">Agregar Gastos</button>
  					</Link>
				</div>
				<div className="flex mb-5">
					<hr className="border-1 border-zinc-400 w-[75vw]" />
				</div>
			</div>
		</div>
    )
}