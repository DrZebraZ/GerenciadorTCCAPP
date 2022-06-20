import React from 'react'

import {Route, Routes} from 'react-router-dom'
import Login from '../views/Login'
import Cadastro from '../views/Cadastro'
import Home from '../views/Home'
import Perfil from '../views/Perfil'
import Tcc from '../views/Tcc'

export default function Router(){
    return(
        
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/cadastro" element={<Cadastro />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/perfil" element={<Perfil/>}/>
            <Route path="/tcc" element={<Tcc/>}/>
        </Routes>

    )
}
