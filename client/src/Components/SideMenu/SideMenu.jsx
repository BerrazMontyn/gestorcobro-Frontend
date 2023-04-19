import React from 'react';
import './SideMenu.css';
import { BsPersonFill } from 'react-icons/bs';
import { FaListUl } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import caja from './caja test.jpg';

export default function SideMenu() {
	return (
		<div className="h-screen w-[20vw] bg-sky-900 static ">
			<div className="flex justify-center pt-4">
				<div>
					<img
						src={caja}
						alt="foto perfil"
						className="w-20 h-20 rounded-full"
					/>
				</div>
				<div className="pl-3 text-xl text-white pt-1">
					<h2>Bienvenido,</h2>
					<h2 className="pb-2">Ricardo.</h2>
					<button className="text-red-500 border-2 border-red-500 py-1 px-1 rounded-xl hover:bg-red-500 hover:text-white">
						Cerrar sesion
					</button>
				</div>
			</div>

			<h1 className="text-2xl text-white pt-8 flex justify-center pr-6 underline">
				Menu general
			</h1>
			<div className="pt-8 text-white ml-6">
				<div>
					<Link to="/clientes">
						<li className="text-xl flex ">
							{' '}
							<BsPersonFill className="text-3xl" />
							<h2 className="pl-4">Clientes</h2>
						</li>
					</Link>
				</div>

				<div>
					<Link to="/categorias">
						<li className="text-xl flex ">
							{' '}
							<FaListUl className="text-3xl" />
							<h2 className="pl-4">Categorias</h2>
						</li>
					</Link>
				</div>

				<li></li>
				<li></li>
				<li></li>
			</div>
		</div>
	);
}
