import React from 'react';
import { Navigate, NavLink } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import UsuarioService from '../app/service/UsuarioService';

class Cadastro extends React.Component{
    state={
        email:'',
        senha:'',
        cpf:'',
        dataNasc: '',
        nomeCompleto:'',
        tipoUsuario:0,
        curso:0,
        listaCursos:[],
        cadastrado:false,
        novalista:'',
    }
    
    constructor(){
        super();
        this.service = new UsuarioService();
        this.pegaListaCursos();
    }

    cadastrar = () =>{
        console.log(this.state.dataNasc)
        console.log("IDCurso", this.state.curso)
        this.service.cadastrarUsuario({
            email: this.state.email,
            nome: this.state.nomeCompleto,
            cpf: this.state.cpf,
            datanasc: this.state.dataNasc,
            senha: this.state.senha,
            curso_idcurso: this.state.curso,
        })
        .then( response => {
            console.log(this.state.dataNasc)
            console.log(this.state.email)
            console.log(response.data)
            console.log("CADASTROU")
            this.setState({cadastrado:true})
        })
        .catch( erro => {
            console.log(this.state.dataNasc)
            console.log(this.state.email)
            console.log("erro cadastro")
            console.log(erro.response)
        }) 
    }



    pegaListaCursos = async () =>{
        const response = await this.service.getListaCursos()
        console.log(response.data)
        const lista = []
        response.data.map(curso => {
            lista.push({
                label:curso.nome,
                id:curso.idcurso
            })
        })
        this.setState({listaCursos:lista})
    }
    
    render(){
        if (this.state.cadastrado){
            return <Navigate to="/login"/>;
        }
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
                                        type="nomeCompleto"
                                        className="form-control" 
                                        id="floatingNome" 
                                        placeholder="NomeCompleto"
                                        onChange={e => this.setState({nomeCompleto: e.target.value})}
                                    />
                                    <label htmlFor="floatingInput">Nome Completo</label>
                                </div>
                                <div className="form-floating mb-1 pt-1">
                                    <input value={this.state.cpf}
                                        type="cpf"
                                        className="form-control" 
                                        id="floatingCPF"
                                        placeholder="CPF"
                                        onChange={e => this.setState({cpf: e.target.value})}
                                        />
                                    <label htmlFor="floatingInput">CPF (apenas numeros)</label>
                                </div>
                                <div className="form-floating mb-1 pt-1">
                                    <input value={this.state.email}
                                        type="email"
                                        className="form-control" 
                                        id="floatingEmail" 
                                        placeholder="name@example.com"
                                        onChange={e => this.setState({email: e.target.value})}
                                        />
                                    <label htmlFor="floatingInput">Email</label>
                                </div>
                                <div className="form-floating mb-1 pt-1">
                                    <input value={this.state.senha} 
                                        type="password" 
                                        className="form-control" 
                                        id="floatingPassword" 
                                        placeholder="Password"
                                        onChange={e => this.setState({senha: e.target.value})}
                                        />
                                    <label htmlFor="floatingPassword">Senha</label>
                                </div>
                                <div className="form-floating mb-1 pt-1">
                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        options={this.state.listaCursos}
                                        renderInput={(params) => <TextField {...params } className="form-control"  label="Curso"/>}
                                        
                                        onChange={(e, newCurso) => this.setState({curso: newCurso.id})}
                                    />
                                </div>
                                <div className="row justify-content-center">
                                    <div className="row">
                                        <div className="col-6 mb-2 pt-2">
                                            <div className="form-check">
                                                <input onChange={e => this.setState({tipoUsuario: "1"})} className="form-check-input" type="radio" name="flexRadioDefault" id="1"/>
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    Aluno
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input onChange={e => this.setState({tipoUsuario: "2"})} className="form-check-input" type="radio" name="flexRadioDefault" id="2"/>
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    Professor
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input onChange={e => this.setState({tipoUsuario: "3"})} className="form-check-input" type="radio" name="flexRadioDefault" id="3"/>
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    Sistema
                                                </label>
                                            </div>
                                        </div>
                                        
                                        <div className="form-floating col-6 p-2">
                                        <div>
                                                <label htmlFor="mb-2 floatingInput">Data Nascimento</label>
                                        </div>
                                            <DatePicker
                                                dateFormat="dd/MM/yyyy"
                                                selected={this.state.dataNasc} 
                                                onChange={(date) => this.setState({dataNasc:date})}
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