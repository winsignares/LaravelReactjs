import React from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { FormControl, InputLabel,Input, FormHelperText, Button } from '@material-ui/core';
import { Deletecitaaccion } from "../redux/Citas/CitasDucks";
const Botoneliminarcita = ({Deletecitaaccion, id}) => {

    const enviar = e => {
       Deletecitaaccion(id)
    }
    return (
        <div>
             <Button variant="contained" color="primary" onClick={e=>enviar(e)} >
      Eliminar
    </Button>
        </div>
    )
}

Botoneliminarcita.propTypes = {
    Deletecitaaccion: PropTypes.func.isRequired
}

export default connect (null, {Deletecitaaccion}) (Botoneliminarcita)

