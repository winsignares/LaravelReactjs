import axion from "axios";
//Constate
const DataInicial = {
    array: [],
    loading: false,
    error: {}
}
//Type
const GET_LISTA_SUCCESS = "GET_LISTA_SUCCESS"
const PUT_LISTA_SUCCESS = "PUT_LISTA_SUCCESS"
const POST_ERROR = "POST_ERROR"
const GET_ERROR = "GET_ERROR"
const POST_SUCCESS = "POST_SUCCESS"
const DELETE_SUCCESS = "DELETE_SUCCESS"
//Reducer CRUD
const ControllercitasReducer = (state = DataInicial, action) => {

    switch (action.type) {
        case GET_LISTA_SUCCESS:
            return { ...state, array: action.payload }
        case POST_SUCCESS:
            return { ...state, array: action.payload }
        case DELETE_SUCCESS:
            return { ...state, array: action.payload }
                            
        case GET_ERROR:
        // return {...state,array:action}           
        default:
            return state

    }

}
export default ControllercitasReducer;
//Acciones
export const Postcitaaction = statusformu => async dispatch =>{
    try {
        
        const config ={
           headers:{
               "Contect-Type": "Aplication/json"
           }
        }

        const respuesta = await axion.post('api/PostServicios', statusformu, config)
        dispatch(
            {
                type: POST_SUCCESS,
                payload: respuesta.data
            }
        )
    } catch (error) {
        console.log(error);
    }
}

export const Deletecitaaccion = id => async dispatch  =>{
    try {
        const respuesta = await axion.delete(`api/DeleteServicios/${id}`);
        dispatch({
            type: DELETE_SUCCESS,
            payload: respuesta.data
        })
    } catch (error) {
        console.log(error);
    }
}













export const actualizarCitasAccion = (statusform, id) => async dispatch =>{
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    try {
        const respuesta = await axios.put(`api/PutServicios/${id}`, statusform, config);
        dispatch({
            type: PUT_SUCCESS,
            payload: respuesta.data
        })
    } catch (error) {
        console.log(error.status);
    }
 
}
export const eliminarCitasAccion = id => async dispatch =>{
   
    try {
        const respuesta = await axios.delete(`api/DeleteServicios/${id}`);
        dispatch({
            type: DELETE_SUCCESS,
            payload: respuesta.data
        })
    } catch (error) {
        console.log(error.status);
    }
 
}
export const GuardarCitasAccion = statusform => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    try {
        const respuesta = await axios.post("api/PostServicios", statusform, config);
        dispatch({
            type: POST_SUCCESS,
            payload: respuesta.data
        })
    } catch (error) {
        console.log(error.status);
    }


}
export const ObtenerListaCitasAccion = () => async (dispatch, getState) => {
    try {
        const respuesta = await axion.get('api/GetServicios')
        dispatch({
            type: GET_LISTA_SUCCESS,
            payload: respuesta.data.result
        })
    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: {
                msg: error.response.statusText,
                status: error.response.status
            }
        })
    }
}
