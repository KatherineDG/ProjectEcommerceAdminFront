import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login.js';
import ABM from '../pages/ABM.js';

function AppRoutes() {
    return(
        <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/productos" element={<ABM/>} />
        </Routes>
    )
}

export default AppRoutes