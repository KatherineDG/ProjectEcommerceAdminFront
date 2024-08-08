import {React, useState} from 'react';
import './styles/ABM.css';
import Navbar from '../components/common/Navbar.js';
import Table from '../components/common/Table.js';
import ButtonOut from '../components/common/ButtonOut.js';
import ModalBasic from '../components/common/ModalBasic.js';

function ABM() {
    const [mostrar, setMostrar] = useState(false);
  const handleOpen = () => setMostrar(true);
  const handleClose = () => setMostrar(false);

  const listaLabels = ['Nombre', 'Descripcion', 'Tipo Eleccion', 'Stock', 'Precio', 'Descuento', 'Categoria', 'Estado', 'Imagenes'];
  const listaInputs = ['text', 'text', 'text', 'number', 'number', 'number', 'text', ];
    
    return (
        <div>
            <Navbar />
            <ModalBasic mostrar={mostrar} handleClose={handleClose} titulo={'Crear Producto'} listaLabels={listaLabels} listaInputs={listaInputs} tipoABM={'alta'}/>
            <div className='contenedor-accesorios-abm'>
                <input type="text" placeholder="Buscar" />
                <button onClick={handleOpen}>Crear producto</button>
                <p>: Se podrá ver con detalle, eliminar y modificar el producto</p>
            </div>
            <Table />
            <ButtonOut />
        </div>
    );
}

export default ABM;