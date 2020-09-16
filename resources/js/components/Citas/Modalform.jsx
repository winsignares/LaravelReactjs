import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { FormControl, InputLabel,Input, FormHelperText, Button } from '@material-ui/core';
import { actualizarCitasAccion } from "../../redux/Citas/CitasDucks";

import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Modalform = ({ id, nombre, descripcion, actualizarCitasAccion}) => {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [stateFormulario, setstateFormulario] = React.useState({
   id : "",
    Nombre :"",
    Descripcion:""
})
  const handleOpen = (id) => {
    setstateFormulario({
      ...stateFormulario,
      id:id
  })
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const cambios = e =>{
    const {name, value} = e.target
    setstateFormulario({
        ...stateFormulario,
        [name]:value
    })
  
    console.log("Hola ", value);
}
const enviar = (e) =>{
    e.preventDefault();
    actualizarCitasAccion(stateFormulario, id)
    setstateFormulario({
        id:"",
        Nombre :"",
        Descripcion:""
    })

}
  const boton =  <div className={classes.root}>
    <Button variant="contained" color="primary" onClick={e=>enviar(e)} >
      Actualizar
    </Button>
    </div>
  const formulario =  
  <div>
      <form
          onSubmit=" return false;"
      >
                  <FormControl>
                      <InputLabel htmlFor="Nombre2">Nombre</InputLabel>
                      <Input name="Nombre" aria-describedby="my-helper-text" onChange={e=>cambios(e)} value={stateFormulario.Nombre ? stateFormulario.Nombre  : nombre} />
                      <FormHelperText id="my-helper-text">Nombre del Servicio </FormHelperText>
                    
                  </FormControl>
                  <FormControl>
                    <InputLabel htmlFor="Descripcion2">Descripcion</InputLabel>
                        <Input name="Descripcion" aria-describedby="my-helper-text" onChange={e=>cambios(e)} value = {stateFormulario.Descripcion ? stateFormulario.Descripcion  :descripcion} />
                        <FormHelperText id="my-helper-text">Nombre de la Descripcion</FormHelperText>
                    </FormControl>
                  {boton}
                  </form>
  </div>
  const modal2 = <div>
    <button type="button" onClick={()=>handleOpen(id)}>
      Editar {nombre}
</button>
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <h2 id="transition-modal-title">
            Editar {id} 
          </h2>
          <p id="transition-modal-description">
              {formulario}
          </p>
        </div>
      </Fade>
    </Modal>
  </div>

  return (
    <div>
      {modal2}
    </div>
  )
}

Modalform.propTypes = {
  actualizarCitasAccion : PropTypes.func.isRequired
}


export default connect(null, { actualizarCitasAccion })(Modalform)

