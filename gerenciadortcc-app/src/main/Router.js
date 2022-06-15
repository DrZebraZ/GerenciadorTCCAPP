import React from 'react'

import {Route, Routes} from 'react-router-dom'
import Login from '../views/Login'
import Cadastro from '../views/Cadastro'

export default function Router(){
    return(
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/cadastro" element={<Cadastro />}/>
        </Routes>

    )
}
