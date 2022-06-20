import React from 'react'
import Janela from '../components/janela'
import { Navigate } from 'react-router-dom'
class Home extends React.Component{
    state={

    }
    render(){
        if (!(localStorage.getItem("_usuario_logado"))){
            console.log("DESLOGADO")
            return <Navigate to="/login"/>
        }
        return(
            <>  
                <Janela>

                </Janela>
            </>
        )
    }
}
export default Home