import React, { useState } from 'react'
import Janela from '../components/janela'
import { NavLink } from 'react-router-dom'
import Chat from '../components/chat'
function Orientacao() {
  const [professorlogado, setProfessorLogado] = useState(localStorage.getItem("_professor_logado"))
  const [idAluno, setIdAluno] = useState()
  const [idProfessor, setIdProfessor] = useState()

  if (professorlogado){
    return(
      <NavLink to="/home"/>
    )
  }
  return (
    <>
      <Janela>
        <Chat idTCC={localStorage.getItem("_idTCC")}/>
      </Janela>
    </>
  )

}
export default Orientacao