import React from "react"
// import { Link } from "react-router-dom";
import SideMenu from "../../SideMenu/SideMenu";




export default function Total () {
    return (
        <div className="flex max-w-screen bg-slate-200">
			<div>
			</div>
			<div>
				<div className="flex flex-col justify-center mt-8 ml-20 text-gray-700">
					<h1 className="text-3xl underline mb-4">Total</h1>
				</div>
				<div className="flex mb-5">
					<hr className="border-1 border-zinc-400 w-[75vw]" />
				</div>
				{/* <Link to="/nuevo-gasto">
				<button className="addClientButton">Agregar Gasto</button>
				</Link> */}
				
				
			</div>
		</div>
    )
}