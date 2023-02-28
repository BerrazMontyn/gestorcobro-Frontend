import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createCustomer } from '../../Redux/action';
import SideMenu from '../SideMenu/SideMenu';

export default function AddClient() {
	const dispatch = useDispatch();

	const [input, setInput] = useState({
		name: '',
		identityCard: '',
		address: '',
		email: '',
		cellPhone: ''
	});

	const handleChange = (e) => {
		setInput({
			...input,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(createCustomer(input));
		alert('Cliente creado satisfactoriamente');
		setInput({
			name: '',
			identityCard: '',
			address: '',
			email: '',
			cellPhone: ''
		});
	};

	return (
		<div>
			<div className="flex max-w-screen bg-slate-200">
				<div>
					<SideMenu />
				</div>
				<div>
					<form>
						<div>
							<label>Nombre:</label>
							<input
								type="text"
								name="name"
								value={input.value}
								onChange={(e) => handleChange(e)}
							/>
						</div>
						<div>
							<label>Dni:</label>
							<input
								type="text"
								name="identityCard"
								value={input.value}
								onChange={(e) => handleChange(e)}
							/>
						</div>
						<div>
							<label>Telefono:</label>
							<input
								type="text"
								name="cellPhone"
								value={input.value}
								onChange={(e) => handleChange(e)}
							/>
						</div>
						<div>
							<label>Email:</label>
							<input
								type="text"
								name="email"
								value={input.value}
								onChange={(e) => handleChange(e)}
							/>
						</div>
						<div>
							<label>Direccion:</label>
							<input
								type="text"
								name="address"
								value={input.value}
								onChange={(e) => handleChange(e)}
							/>
						</div>
						<button onClick={handleSubmit}>Agregar Cliente</button>
					</form>
				</div>
			</div>
		</div>
	);
}
