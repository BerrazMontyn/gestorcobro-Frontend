import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createService } from '../../../Redux/action';
import SideMenu from '../../SideMenu/SideMenu';

export default function AddServices() {
    const dispatch = useDispatch();

    const [input, setInput] = useState({
        name: '',
        
    });

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createService(input));
        alert('Categoria creada satisfactoriamente')
        setInput({
            name: '',
            subCategories: ''
        });
    };

    return(
        <div>
            <div className='flex max-w-screen bg-slate-200'>
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
                                <div>
                                    <label>Rubro:</label>
                                    <input 
                                        type="text"
                                        name="subCategories"
                                        value={input.value}
                                        onChange={(e) => handleChange(e)}
                                         />
                                </div>
                        </div>
                        <button onClick={handleSubmit}>Agregar Categories</button>
                    </form>
                </div>
            </div>
        </div>
    )
}