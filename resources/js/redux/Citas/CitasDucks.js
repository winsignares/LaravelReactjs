import axion from "axios";
//Constate
const DataInicial = {
    array:[]
}
//Type
const GET_LISTA_SUCCESS = "GET_LISTA_SUCCESS"
const PUT_LISTA_SUCCESS = "PUT_LISTA_SUCCESS"
//Reducer CRUD
const ControllercitasReducer = (state = DataInicial , action)=>{

    switch (action.type) {
        case GET_LISTA_SUCCESS:
            return {...state, array:action.payload}
                    
        default:
            return state
            
    }

}
export default ControllercitasReducer;
//Acciones
export const ObtenerListaCitasAccion = () => async (dispatch, getState)=>{
    try {
        const respuesta = await axion.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
        dispatch({
            type: GET_LISTA_SUCCESS,
            payload: respuesta.data.results
        })
    } catch (error) {
        console.log(error);
    }
}
