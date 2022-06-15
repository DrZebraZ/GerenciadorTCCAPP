import React from 'react'
import { NavLink } from 'react-router-dom'

class Login extends React.Component{
    state={
        email:'',
        senha:'',
        tipoUsuario:0

    }

    login = () =>{
        console.log('Email:', this.state.email)
        console.log('Senha: ', this.state.senha)
        console.log('TipoUsuario: ', this.state.tipoUsuario)
        
    }

    render(){
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
                                    <label for="floatingInput">Email</label>
                                </div>
                                <div className="form-floating mb-2 pt-2">
                                    <input value={this.state.senha} 
                                        type="password" 
                                        className="form-control" 
                                        id="floatingPassword" 
                                        placeholder="Password"
                                        onChange={e => this.setState({senha: e.target.value})}
                                        />
                                    <label for="floatingPassword">Senha</label>
                                </div>
                                <div className="row justify-content-md-center">
                                    <div className="row">
                                        <div className="col-8 mb-2 pt-2">
                                            <div className="form-check">
                                                <input onChange={e => this.setState({tipoUsuario: "1"})} className="form-check-input" type="radio" name="flexRadioDefault" id="1"/>
                                                <label class="form-check-label" for="flexRadioDefault1">
                                                    Aluno
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input onChange={e => this.setState({tipoUsuario: "2"})} className="form-check-input" type="radio" name="flexRadioDefault" id="2"/>
                                                <label class="form-check-label" for="flexRadioDefault1">
                                                    Professor
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input onChange={e => this.setState({tipoUsuario: "3"})} className="form-check-input" type="radio" name="flexRadioDefault" id="3"/>
                                                <label class="form-check-label" for="flexRadioDefault1">
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