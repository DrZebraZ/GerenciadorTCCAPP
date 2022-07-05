import React, { useState } from 'react'
import Janela from '../components/janela'
import { NavLink } from 'react-router-dom'
function Orientacao() {
  const [usuariologado, setUsuarioLogado] = useState(localStorage.getItem("_professor_logado"))
  const [idAluno, setIdAluno] = useState()
  const [idProfessor, setIdProfessor] = useState()
  

  if (usuariologado){
    return(
      <NavLink to="/home"/>
    )
  }


  return (
    <>
      <Janela>
        orientacao
      </Janela>
    </>
  )

}
export default Orientacao