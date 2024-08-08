import { React, useState, useEffect } from "react";
import "./styles/Navbar.css";

function Navbar() {
    const [enlaceSeleccionado, setEnlaceSeleccionado] = useState("abm-productos");

    const handleEnlaceSeleccionado = (id) => {
        const enlace = document.getElementById(id);
        enlace.style.color = 'black';
        enlace.style.fontWeight = 'bold';

        if (enlaceSeleccionado !== id) {
            const enlaceAnterior = document.getElementById(enlaceSeleccionado);
            enlaceAnterior.style.color = 'gray';
            enlaceAnterior.style.fontWeight = 'normal';
        }
        setEnlaceSeleccionado(id);
    }

    useEffect(() => {
        const enlace = document.getElementById(enlaceSeleccionado);
        if (enlace) {
          enlace.style.color = 'black';
          enlace.style.fontWeight = 'bold';
        }
      }, [enlaceSeleccionado]);

      
    return (
        <div className="contenedor-navbar">
        <div>
            <p>Solsticio admin</p>
        </div>
        <div className="contenedor-enlaces">
            <a href="/productos" onClick={()=> handleEnlaceSeleccionado("abm-productos")} id="abm-productos">ABM Productos</a>  |
            <a href="#" onClick={()=> handleEnlaceSeleccionado("admin-carros")} id="admin-carros">Administrar carritos</a>  |
            <a href="#" onClick={()=> handleEnlaceSeleccionado("promociones")} id="promociones">Promociones</a>
        </div>
        </div>
    );
}

export default Navbar;
