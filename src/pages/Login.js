import {React, useState} from 'react';
import './styles/Login.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Login() {
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');

    const handleUsuario = (e) => {
        setUsuario(e.target.value);
    }

    const handleContrasena = (e) => {
        setContrasena(e.target.value); 
    }

    return(
        <div className='contenedor-login'>
                
            <Box className='box-login' component="form" sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}} noValidate autoComplete="off">
                <h1>Solsticio Admin</h1>
                <TextField label="Usuario" variant="outlined" onChange={handleUsuario} />
                <TextField label="Contraseña" type="password" variant="outlined" onChange={handleContrasena} />
                <Button className='btn-login' variant="contained">Entrar</Button>
            </Box> 
        </div>
    )
}

export default Login;