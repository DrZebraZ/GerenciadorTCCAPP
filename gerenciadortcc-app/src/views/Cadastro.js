import React from 'react';
import { NavLink } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
class Cadastro extends React.Component{
    state={
        email:'',
        senha:'',
        cpf:'',
        dataNasc: '',
        nomeCompleto:'',
        tipoUsuario:0

    }

    cadastrar = () =>{
        console.log("NOVO CADASTRO")
        console.log('Nome:', this.state.nomeCompleto)
        console.log('CPF: ', this.state.cpf)
        console.log('Email:', this.state.email)
        console.log('Senha: ', this.state.senha)
        console.log('TipoUsuario: ', this.state.tipoUsuario)
        console.log('DataNasc', this.state.dataNasc)

    }

    render(){
        return(
            <>
                <div className="container" style={{marginTop:"5%", marginBottom:300}}>
                    <div className="row justify-content-center">
                        <div className="col-10">
                            <div className="p-4 border">
                                <div className="col-6">
                                    <h1>Cadastro</h1>
                                </div>
                                <div className="form-floating mb-1 pt-1">
                                    <input value={this.state.nomeCompleto}
                                        type="nome"
                                        className="form-control" 
                                        id="floatingNome" 
                                        placeholder="Nome Completo"
                                        onChange={e => this.setState({nomeCompleto: e.target.value})}
                                    />
                                    <label for="floatingInput">Nome Completo</label>
                                </div>
                                <div className="form-floating mb-1 pt-1">
                                    <input value={this.state.cpf}
                                        type="nome"
                                        className="form-control" 
                                        id="floatingCPF"
                                        placeholder="CPF"
                                        onChange={e => this.setState({cpf: e.target.value})}
                                        />
                                    <label for="floatingInput">CPF (apenas numeros)</label>
                                </div>
                                <div className="form-floating mb-1 pt-1">
                                    <input value={this.state.email}
                                        type="email"
                                        className="form-control" 
                                        id="floatingEmail" 
                                        placeholder="name@example.com"
                                        onChange={e => this.setState({email: e.target.value})}
                                        />
                                    <label for="floatingInput">Email</label>
                                </div>
                                <div className="form-floating mb-1 pt-1">
                                    <input value={this.state.senha} 
                                        type="password" 
                                        className="form-control" 
                                        id="floatingPassword" 
                                        placeholder="Password"
                                        onChange={e => this.setState({senha: e.target.value})}
                                        />
                                    <label for="floatingPassword">Senha</label>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="row">
                                        <div className="col-6 mb-2 pt-2">
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
                                        
                                        <div className="form-floating col-6 p-2">
                                        <div>
                                                <label for="mb-2 floatingInput">Data Nascimento</label>
                                        </div>
                                            <DatePicker
                                                selected={this.state.dataNasc} 
                                                onChange={(date:Date) => this.setState({dataNasc:date})} 
                                                type="nome"
                                                className="form-control"
                                                placeholder="Data Nascimento"
                                                
                                            />
                                        </div>
                                    </div>
                                    <div className="" style={{textAlign:"center"}}>
                                        <button onClick={this.cadastrar} type="button" className="btn btn-light mb-2 pt-2" style={{width: "50%"}}>Cadastrar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="" style={{textAlign:"center"}}>
                        <NavLink to="/login">Ja tem conta? Login.</NavLink>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Cadastro