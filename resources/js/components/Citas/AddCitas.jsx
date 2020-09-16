import React, { useState } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FormControl, InputLabel, Input, FormHelperText, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { GuardarCitasAccion } from "../../redux/Citas/CitasDucks";


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const AddCitas = ({ GuardarCitasAccion }) => {
    const classes = useStyles();
    const [stateFormulario, setstateFormulario] = useState({
        Nombre: "",
        Descripcion: ""
    })

    const cambios = e => {
        const { name, value } = e.target
        setstateFormulario({
            ...stateFormulario,
            [name]: value
        })

        console.log("Hola ", name);
    }
    const enviar = (e) => {
        e.preventDefault();
        GuardarCitasAccion(stateFormulario)
        setstateFormulario({
            Nombre: "",
            Descripcion: ""
        })

    }
    const boton = <div className={classes.root}>
        <Button variant="contained" color="primary" onClick={e => enviar(e)} >
            Guardar
    </Button>
    </div>
    const formulario = <div>
        <div>
            <form onSubmit=" return false;">
                <FormControl>
                    <InputLabel htmlFor="Nombre">Nombre</InputLabel>
                    <Input name="Nombre" aria-describedby="my-helper-text" onChange={e => cambios(e)} />
                    <FormHelperText id="my-helper-text">Nombre del Servicio</FormHelperText>

                </FormControl>
                <div>
                    <FormControl>
                        <InputLabel htmlFor="Descripcion">Descripcion</InputLabel>
                        <Input name="Descripcion" aria-describedby="my-helper-text" onChange={e => cambios(e)} />
                        <FormHelperText id="my-helper-text">Nombre de la Descripcion</FormHelperText>
                    </FormControl>


                    <Input id="NombreP" aria-describedby="my-helper-text" value={stateFormulario.Nombre} />

                    <Input id="DescripcionP" aria-describedby="my-helper-text" value={stateFormulario.Descripcion} />

                </div>
                {boton}
            </form>
        </div>

    </div>


    return (
        <div>
            {formulario}

        </div>
    )
}

GuardarCitasAccion.propTypes = {
    GuardarCitasAccion: PropTypes.func.isRequired
}
export default connect(null, { GuardarCitasAccion })(AddCitas);


