import React from "react"
import CategoriesTable from './CategoriesTable/CategoriesTable'
import SideMenu from "../SideMenu/SideMenu";
import './Categories.css'


export default function Categories () {
    return (
        <div className="flex max-w-screen bg-slate-200">
			<div>
				<SideMenu />
			</div>
			<div>
				<div className="flex flex-col justify-center mt-8 ml-20 text-gray-700">
					<h1 className="text-3xl underline mb-4">Categorias</h1>
				</div>
				<div className="flex mb-5">
					<hr className="border-1 border-zinc-400 w-[75vw]" />
				</div>
				<button className="addClientButton">Agregar categoria</button>
				<CategoriesTable />
			</div>
		</div>
    )
}