import React from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';

export default function Landing() {
	return (
		<div className="max-w-screen h-screen max-h-screen">
			<div className="flex justify-center ">
				<div className="flex flex-col ">
					<div>
						<h1 className="homeTittle">Gestor de cobranzas</h1>
					</div>
					<div className="flex justify-center mt-32">
						<Link to="/clientes">
							<button className="landingButton">Ingresa</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
