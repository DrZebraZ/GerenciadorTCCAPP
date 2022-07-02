import React from 'react'
import Janela from '../components/janela'
import { Navigate } from 'react-router-dom'
function HomeProf() {
  /*if (!(localStorage.getItem("_usuario_logado"))){
      console.log("DESLOGADO")
      return <Navigate to="/login"/>
  }else{*/
  return (
    <>
      <Janela>
        
        <h1>profe</h1>
      </Janela>
    </>
  )

}
export default HomeProf