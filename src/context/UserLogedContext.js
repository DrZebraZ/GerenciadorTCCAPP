import { createContext, useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import ProfessorService from "../app/service/ProfessorService";
import UsuarioService from "../app/service/UsuarioService";

const UserLogedContext = createContext();

export const UserLogedContextProvider = ({ children }) => {
  const [isLogado, setIsLogado] = useState(() => localStorage.getItem("_usuario_logado"))
  const [isLogadoProf, setIsLogadoProf] = useState(() => localStorage.getItem("_professor_logado"))
  const [service, setService] = useState(new UsuarioService())
  const [profService, setProfService] = useState(new ProfessorService())
  const navigate = useNavigate()

  useEffect(() => {
    carregaIsLogado()
  }, [])

  useEffect(() => {
    if (isLogado){
      navigate("/home")
    }
    if (isLogadoProf){
      navigate("/home")
    }
  }, [])


  function carregaIsLogado() {
    console.log("iniciou")
    if (localStorage.getItem('_usuario_logado')) {
      setIsLogado(true)
    } else {
      setIsLogado(false)
    }
    if (localStorage.getItem('_professor_logado')){
      setIsLogadoProf(true)
    } else{
      setIsLogadoProf(false)
    }
  }

  async function login(tipoUsuario, email, senha) {
    console.log("Tentando Login")
    console.log(email)
    console.log(senha)
    if (tipoUsuario === 1) {
      const response = await service.executarLogin({
        email: email,
        senha: senha
      })
      const data = await response.data
      console.log("Logou", data)
      localStorage.setItem('_usuario_logado', JSON.stringify(response.data))
      if (JSON.stringify(response.data.tccAlunoDTO) != 'null'){ 
        localStorage.setItem('_tcc', JSON.stringify(response.data.tccAlunoDTO))
        if (JSON.stringify(response.data.tccAlunoDTO.idTCC != 'null')){
          localStorage.setItem('_idTCC', JSON.stringify(response.data.tccAlunoDTO.idTCC))
        }      
      }else{
        console.log("n tem tcc")
      }
      setIsLogado(true)
      navigate("/home")
    } else if (tipoUsuario === 2) {

      const response = await profService.executarLogin({
        email: email,
        senha: senha
      })
      const data = await response.data
      console.log("Logou", data)
      localStorage.setItem('_professor_logado', JSON.stringify(response.data))
      if (JSON.stringify(response.data.tccs) != 'null'){ 
        localStorage.setItem('_tccs', JSON.stringify(response.data.tccs))     
      }else{
        console.log("n tem tcc")
      }
      if (JSON.stringify(response.data.cursos) != 'null'){
        localStorage.setItem('_cursos', JSON.stringify(response.data.cursos))
      }
      setIsLogadoProf(true)
      navigate("/home")
      console.log("Professor")
    } else if (this.state.tipoUsuario === 3) {
      console.log("Sistema")
    } else {
      console.log("Informe se é Usuario, Professor ou Sistema")
    }
  }



  return (
    <UserLogedContext.Provider value={{ isLogado, isLogadoProf, login }}>
      {children}
    </UserLogedContext.Provider>
  )
}

export function useUserContext(){
  const context = useContext(UserLogedContext)
  if (!context) {
    throw new Error("nao passou no if context")
  }
  return context
}