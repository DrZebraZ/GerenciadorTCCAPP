import React from 'react'
import Janela from '../components/janela'
import DatePicker from "react-datepicker";
import UsuarioService from '../app/service/UsuarioService';
import { Navigate } from 'react-router-dom';
class Perfil extends React.Component {
    state = {
        nome: 'Luis',
        descricaoPessoal: 'Coloque uma breve descrição sua aqui',
        datanasc: this.setStartDate(),
        dataplaceholder:'',
    }
    setStartDate(){
        const isLogged = JSON.parse(localStorage.getItem("_usuario_logado"))
        return isLogged && new Date(...isLogged.datanasc)
        
        /*const isLogged = JSON.parse(localStorage.getItem("_usuario_logado"))
        const data = new Date()
        if (isLogged){
            const {datanasc}=isLogged
            data.setFullYear(datanasc[0], datanasc[1], datanasc[2])      
        }else{
            return null
        }
        return data*/
    }
    
    constructor() {
        super();
        this.service = new UsuarioService();
    }

    render() {
        if (!(localStorage.getItem("_usuario_logado"))){
            console.log("DESLOGADO")
            return <Navigate to="/login"/>
        }
        return (
            <>
            <Janela>
                <div className="row">
                    <div className="row">
                        <div className="form-group col-8">
                            <label htmlFor="exampleInputEmail" className="form-label mt-4">Nome</label>
                            <input value={this.state.nome} onChange={e => this.setState({ nome: e.target.value })} type="Nome" className="form-control" id="exampleInputText" aria-describedby="emailHelp" placeholder={this.state.nome}></input>
                        </div>
                        <div className="form-group col-8">
                            <label htmlFor="exampleInputEmail" className="form-label mt-4" > Data Nascimento
                            <DatePicker
                                dateFormat="dd/MMM/yyyy"
                                onChange={(date) => { this.setState({datanasc:date})}} 
                                selected={this.state.datanasc}
                                type="nome"
                                className="form-control"
                                placeholder="Data Nascimento"
                                
                            />
                            </label>
                        </div>
                        <div className="form-group col-12">
                            <label htmlFor="exampleTextarea" className="form-label mt-4">Descrição Pessoal</label>
                            <textarea className="form-control" id="exampleTextarea" placeholder={this.state.descricaoPessoal} rows="6"></textarea>
                        </div>
                    </div>
                </div>
            </Janela>
            </>
        )
    }
}
export default Perfil