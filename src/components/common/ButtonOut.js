import {React} from 'react';
import './styles/ButtonOut.css';


function ButtonOut({onClick}) {
    return (
        <div className='contenedor-btn-out'>
            <button onClick={onClick}>Salir</button>
        </div>
    );
}

export default ButtonOut;