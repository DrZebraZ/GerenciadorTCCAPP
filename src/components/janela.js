import React, { useState } from 'react'
import NavBar from '../components/navbar'
import NavBarProfessor from './navbarprofessor'
function Janela(props, altura) {

  const[aluno, setAluno] = useState(localStorage.getItem("_usuario_logado"))
  const[professor, setProfessor]=useState(localStorage.getItem("_professor_logado"))
  

  
  return aluno? (
    <div className="justify-content-center align-items-center">
      <NavBar />
      <div className="container" style={{ borderRadius: 20, backgroundColor: "#4C9BE8", padding: "16px 4%", marginTop: "5%", transition: ".5s linear" }}>

        {props.children}

      </div>
    </div>
  ) : (
    <div className="justify-content-center align-items-center">
      <NavBarProfessor />
      <div className="container" style={{ borderRadius: 20, backgroundColor: "#4C9BE8", padding: "16px 4%", marginTop: "5%", transition: ".5s linear" }}>

        {props.children}

      </div>
    </div>
  )
}
export default Janela