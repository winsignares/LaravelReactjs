import React from "react";
import ReactDOM from "react-dom";
import Navegacion from "./components/Navegacion";
import Paneluno from './components/Panel/Paneluno';
import Lista from "./components/Citas/Lista";
import {Provider} from 'react-redux'
import generateStotrecitas from  './redux/Citas/Store'

const Esquelto = ()=>{
    const store  = generateStotrecitas()
    return(
        <div>
            <Navegacion Nombre="William"  />    
            <Paneluno />  
            <div id="bc">
            </div>  
            <Provider store= {store} >
                <Lista />
            </Provider> 
            
        </div>
    );
}

export default Esquelto;

ReactDOM.render(<Esquelto />, document.getElementById('contenido'));

