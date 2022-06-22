import React from 'react'
import Janela from '../components/janela'
import { Navigate } from 'react-router-dom'
function Home(){  
  if (!(localStorage.getItem("_usuario_logado"))){
      console.log("DESLOGADO")
      return <Navigate to="/login"/>
  }else{
    return(
      <>  
        <Janela>

        </Janela>
      </>
    )
  }
}
export default Home