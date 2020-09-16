import React from 'react'
import PropTypes from 'prop-types'
import {eliminarCitasAccion} from '../../redux/Citas/CitasDucks'
import { connect } from "react-redux";
import { FormControl, InputLabel,Input, FormHelperText, Button } from '@material-ui/core';
function Btneliminar({eliminarCitasAccion, id}) {
    const enviar = e => {
        eliminarCitasAccion(id)
    }
    return (
        <div>
             <Button variant="contained" color="primary" onClick={e=>enviar(e)} >
      Eliminar
    </Button>
        </div>
    )
}

Btneliminar.propTypes = {
    eliminarCitasAccion : PropTypes.func.isRequired,
    props: PropTypes.func.isRequired
}

export default connect(null, { eliminarCitasAccion })( Btneliminar)

