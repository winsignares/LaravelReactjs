import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { ObtenerListaCitasAccion, GuardarCitasAccion } from "../../redux/Citas/CitasDucks";
 import Botoneliminarcita from '../../Botones/Botoneliminarcita'
import { isArguments } from 'lodash';
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
                                             
                        <li key={i}>
                            {
                                item.Nombre
                            }
                             <div>
                                 <Botoneliminarcita id={item.id} />
                             </div>
                        </li>                           
                       
                    ))
                }
            </ul>
  
        </div>
    )
}

export default Lista;