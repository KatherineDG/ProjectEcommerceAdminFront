import * as React from 'react';
import './styles/ModalBasic.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import Switch from '@mui/material/Switch';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  maxHeight: '80vh',
  overflowY: 'auto',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1
});

function ModalBasic({mostrar, handleClose, titulo, listaLabels, listaInputs, tipoABM}) {

  const [contadorTipos, setContadorTipos] = React.useState(0);
  const [contadorContenedoresTiposEleccion, setContadorContenedoresTiposEleccion] = React.useState(0);
  const [tiposEleccion, setTiposEleccion] = React.useState({});

  const handleTiposEleccion = () => {
    setTiposEleccion();
  }

  const handleContadorTipos = () => {
    setContadorTipos(contadorTipos + 1);
  }

  const handleContadorTiposEleccion = () => {
    setContadorContenedoresTiposEleccion(contadorContenedoresTiposEleccion + 1);
  }

  const eliminarContenedorIndividualTipoEleccion = () => {
    const contenedorIndividual = document.getElementById(`${contadorContenedoresTiposEleccion}-contenedor-tipo-eleccion-individual`); 
    contenedorIndividual.remove();
  }

  const eliminarTipoExtra = () => {
    const tipoExtraEliminar = document.getElementById(`${contadorContenedoresTiposEleccion}-${contadorTipos}-tipo`);
    const botonEliminar = document.getElementById(`${contadorContenedoresTiposEleccion}-${contadorTipos}-boton-eliminar`);
    tipoExtraEliminar.remove();
    botonEliminar.remove();
  }

  const agregarTipoCampo = () => {
    handleContadorTipos();
    console.log('contadorTiposEleccion', contadorContenedoresTiposEleccion);
    const contenedorIndividual = document.getElementById(`${contadorContenedoresTiposEleccion}-contenedor-tipo-eleccion-individual`);
    const tipoExtra = document.createElement('input');
    tipoExtra.setAttribute('id',`${contadorContenedoresTiposEleccion}-${contadorTipos}-tipo`);

    const botonEliminar = document.createElement('button');
    botonEliminar.innerHTML = '-';
    botonEliminar.onclick = eliminarTipoExtra;
    botonEliminar.setAttribute('id',`${contadorContenedoresTiposEleccion}-${contadorTipos}-boton-eliminar`);

    contenedorIndividual.appendChild(tipoExtra);
    contenedorIndividual.appendChild(botonEliminar);
  }

  const agregarTipoEleccion = () => {

    const contenedor = document.getElementById('contenedor-tipo-eleccion');

    const contenedorIndividual = document.createElement('div');
    contenedorIndividual.setAttribute('id',`${contadorContenedoresTiposEleccion}-contenedor-tipo-eleccion-individual`);
    contenedorIndividual.className = 'contenedor-tipo-eleccion-individual';


    const botonEliminarTipoElecciones = document.createElement('button');
    botonEliminarTipoElecciones.innerHTML = 'Eliminar';
    botonEliminarTipoElecciones.onclick = eliminarContenedorIndividualTipoEleccion;

    const campo = document.createElement('input');

    const separador = document.createElement('p');
    separador.innerHTML = ' : ';

    const tipo = document.createElement('input');
    tipo.setAttribute('id',`${contadorContenedoresTiposEleccion}-0-tipo`);

    const boton = document.createElement('button');
    boton.innerHTML = '+';
    boton.onclick = agregarTipoCampo;

    contenedor.appendChild(contenedorIndividual);
    contenedorIndividual.appendChild(botonEliminarTipoElecciones);
    contenedorIndividual.appendChild(campo);
    contenedorIndividual.appendChild(separador);
    contenedorIndividual.appendChild(tipo);
    contenedorIndividual.appendChild(boton);
  }

 

  return (
    <div>
      <Modal
        open={mostrar}
        
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {titulo}
          </Typography>
          {listaLabels.map((label, index) => (
            <div className='contenedor-inputs-crear'>
              {label === 'Tipo Eleccion' ? (
                <div>
                  <label key={index}>{label}</label>
                  <button className='btn-agregar' onClick={() => {handleContadorTiposEleccion(); agregarTipoEleccion()}}>Añadir</button>
                  <div id='contenedor-tipo-eleccion'></div>
                </div>
              ) : label === 'Estado' ? (
                <div>
                  <label key={index}>{label}</label>
                  <p>inactivo: no se muestra en la tienda | activo: se muestra en la tienda</p>
                  <Switch {...label} color="warning" />
                </div>
              ) : label === 'Imagenes' ? (
                <div>
                  <label key={index}>{label}</label><br></br><br></br>
                  <Button
                    className='btn-subir-imagen'
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                  >
                    Subir imagen
                    <VisuallyHiddenInput type="file" />
                  </Button>
                </div>
              ) :
               (
                <div>
                  <label key={index}>{label}</label>
                  <input type={listaInputs[index]}/>
                </div>
              )
              
            }
            </div>
          ))}
          {tipoABM === 'ninguno' ?
            <div className='btns-abm'>
              <button className='btn-eliminar'>Eliminar</button>
            </div>
          :
            tipoABM === 'alta' ?
              <div className='btns-abm'>
                <button className='btn-alta'>Crear</button>
                <button className='btn-cancelar' onClick={handleClose}>Cancelar</button>
              </div>
            :
              <div className='btns-abm'>
                <button className='btn-modificar'>Modificar</button>
                <button className='btn-eliminar'>Eliminar</button>
                <button className='btn-cancelar'>Cancelar</button>
              </div>
         }
        </Box>
      </Modal>
    </div>
  );
}

export default ModalBasic;