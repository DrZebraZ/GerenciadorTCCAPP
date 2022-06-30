import { createContext, useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import UsuarioService from "../app/service/UsuarioService";

const UserLogedContext = createContext();

export const UserLogedContextProvider = ({ children }) => {
  const [isLogado, setIsLogado] = useState(() => localStorage.getItem("_usuario_logado"))
  const [service, setService] = useState(new UsuarioService())
  const navigate = useNavigate()

  useEffect(() => {
    carregaIsLogado()
  }, [])

  useEffect(() => {
    if (isLogado){
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
      localStorage.setItem('_tcc', JSON.stringify(response.data.tccAlunoDTO))
      setIsLogado(true)
      navigate("/home")
    } else if (this.state.tipoUsuario === 2) {
      console.log("Professor")
    } else if (this.state.tipoUsuario === 3) {
      console.log("Sistema")
    } else {
      console.log("Informe se é Usuario, Professor ou Sistema")
    }
  }



  return (
    <UserLogedContext.Provider value={{ isLogado, login }}>
      {children}
    </UserLogedContext.Provider>
  )
}

export function useUserContext() {
  const context = useContext(UserLogedContext)
  if (!context) {
    throw new Error("nao passou no if context")
  }
  return context
}