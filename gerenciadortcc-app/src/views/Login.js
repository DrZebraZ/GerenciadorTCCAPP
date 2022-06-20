import React from 'react'
import { Navigate} from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import UsuarioService from '../app/service/UsuarioService'

class Login extends React.Component{
    state={
        email:'',
        senha:'',
        tipoUsuario:0,
        isLoged:false

    }
    constructor(){
        super();
        this.service = new UsuarioService();
    }

    login = async () =>{
        console.log(this.state.tipoUsuario)
        console.log(this.state.email)
        console.log(this.state.senha)
        if (this.state.tipoUsuario === 1){
            console.log("Usuario")
            this.service.executarLogin({
                email: this.state.email,
                senha: this.state.senha
            })
            .then( response => {
            localStorage.setItem('_usuario_logado', JSON.stringify(response.data))
            console.log(localStorage.getItem('_usuario_logado'))
            this.setState({isLoged:true})
            })
            .catch( erro => {
                console.log(erro.response)
                console.log("não logou")
            }) 

        }else if (this.state.tipoUsuario === 2){
            console.log("Professor")
        }else if (this.state.tipoUsuario === 3){
            console.log("Sistema")
        }else{
            console.log("Informe se é Usuario, Professor ou Sistema")
        }
    }

    render(){
        if (this.state.isLoged === true){
            return <Navigate to="/home"/>
        }
        return(
            <>  
                <div className="container" style={{marginTop:200, marginBottom:300}}>
                    <div className="row justify-content-center">
                        <div className="col-8">
                            <div className="p-4 border">
                                <div className="col-6">
                                    <h1>Login</h1>
                                </div>
                                <div className="form-floating mb-2 pt-2">
                                    <input value={this.state.email}
                                        type="email"
                                        className="form-control" 
                                        id="floatingInput" 
                                        placeholder="name@example.com"
                                        onChange={e => this.setState({email: e.target.value})}
                                        />
                                    <label htmlFor="floatingInput">Email</label>
                                </div>
                                <div className="form-floating mb-2 pt-2">
                                    <input value={this.state.senha} 
                                        type="password" 
                                        className="form-control" 
                                        id="floatingPassword" 
                                        placeholder="Password"
                                        onChange={e => this.setState({senha: e.target.value})}
                                        />
                                    <label htmlFor="floatingPassword">Senha</label>
                                </div>
                                <div className="row justify-content-md-center">
                                    <div className="row">
                                        <div className="col-8 mb-2 pt-2">
                                            <div className="form-check">
                                                <input onChange={e => this.setState({tipoUsuario: 1})} className="form-check-input" type="radio" name="flexRadioDefault" id="1"/>
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    Aluno
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input onChange={e => this.setState({tipoUsuario: 2})} className="form-check-input" type="radio" name="flexRadioDefault" id="2"/>
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    Professor
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input onChange={e => this.setState({tipoUsuario: 3})} className="form-check-input" type="radio" name="flexRadioDefault" id="3"/>
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    Sistema
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="" style={{textAlign:"center"}}>
                                        <button onClick={this.login} type="button" className="btn btn-light mb-2 pt-2" style={{width: "50%"}}>Logar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="" style={{textAlign:"center"}}>
                        <NavLink to="/cadastro">Novo por aqui? Cadastrar-se.</NavLink>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Login