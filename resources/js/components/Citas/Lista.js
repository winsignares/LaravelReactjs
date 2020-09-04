import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { ObtenerListaCitasAccion } from "../../redux/Citas/CitasDucks";

const Lista = ()=>{
    const uDispatch = useDispatch()
    const uSelector = useSelector(store =>store.citas.array)
    return(
        <div>
            Hola esta es una lista
            <button onClick={()=> uDispatch(ObtenerListaCitasAccion())}>
                obtener Citas
            </button>
            <ul>
                {
                    uSelector.map((item, i)=>(
                        <li>
                            {
                                item.Nombre
                            }
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Lista;