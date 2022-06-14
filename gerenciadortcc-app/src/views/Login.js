import React from 'react'

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
                        <div class="p-4 border">
                            <div class="col-6">
                                <h1>Login</h1>
                            </div>
                            <div class="form-floating mb-2 pt-2">
                                <input value={this.state.email}
                                    type="email"
                                    class="form-control" 
                                    id="floatingInput" 
                                    placeholder="name@example.com"
                                    onChange={e => this.setState({email: e.target.value})}
                                    />
                                <label for="floatingInput">Email</label>
                            </div>
                            <div class="form-floating mb-2 pt-2">
                                <input value={this.state.senha} 
                                    type="password" 
                                    class="form-control" 
                                    id="floatingPassword" 
                                    placeholder="Password"
                                    onChange={e => this.setState({senha: e.target.value})}
                                    />
                                <label for="floatingPassword">Senha</label>
                            </div>
                            <div class="row justify-content-center">
                                <div class="row">
                                    <div class="col-8 mb-2 pt-2">
                                        <div class="form-check">
                                            <input onChange={e => this.setState({tipoUsuario: "1"})} class="form-check-input" type="radio" name="flexRadioDefault" id="1"/>
                                            <label class="form-check-label" for="flexRadioDefault1">
                                                Aluno
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input onChange={e => this.setState({tipoUsuario: "2"})} class="form-check-input" type="radio" name="flexRadioDefault" id="2"/>
                                            <label class="form-check-label" for="flexRadioDefault1">
                                                Professor
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input onChange={e => this.setState({tipoUsuario: "3"})} class="form-check-input" type="radio" name="flexRadioDefault" id="3"/>
                                            <label class="form-check-label" for="flexRadioDefault1">
                                                Sistema
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <button onClick={this.login} type="button" class="btn btn-light mb-2 pt-2" style={{width: 200}}>Logar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <button type="button" class="btn btn-link">Novo por aqui? Cadastrar-se</button>
                </div>
            </div>
            
            </>
        )
    }

}
export default Login