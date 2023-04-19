import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../../Redux/action';


export default function MovimientoEntrada() {
  
    const [input, setInput] = useState({
        cliente: "",
        Categoria: "",
        monto: ""
    })
    const dispatch = useDispatch()
    const { Categories } = useSelector((state) => state.Categories);
    
      useEffect(() => {
        dispatch(getCategories());
      }, []);
    
      function handleSelectCategories(e) {
        setInput({
          ...input,
          Categories: e.target.value,
        });
      }
    
  return (
    <div>
        <form>
            <label>Cliente</label>
            <input type="text" />
            <label>Categoria</label>
            <select
            className="py-2 px-3 rounded-lg border-2 border-red-300 mt-1 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
            value={input.Categories}
            onChange={handleSelectCategories}>
            <option disabled value="">
              Seleccionar Categoria
            </option>
            {Categories?.map((e) => (
              <option value={e._id} key={e.id}>
                {e.name}
              </option>
            ))}
          </select>
          <label>Monto</label>
          <input Number={0} />
            
        </form>
    </div>
  )
}
