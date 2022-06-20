import React from 'react'
import { Navigate } from 'react-router-dom';
import Janela from '../components/janela'
class Tcc extends React.Component{
    state={
        tituloTcc:"Defesa",
        descricao:"Coloque a descrição do seu TCC aqui",
        orientador:"Orientador",
        dataDefesa:"",
        orientadores:[{nome:"Orientador...",id:0},{nome:"Luis",id:1}]
    }
    render(){
        if (!(localStorage.getItem("_usuario_logado"))){
            console.log("DESLOGADO")
            return <Navigate to="/login"/>
        }
        return(
            <>
            <Janela>
                <div className="row">
                    <div className="row">
                        <div class="form-group col-8">
                            <label for="exampleInputEmail" class="form-label mt-4">Titulo TCC</label>
                            <input onChange={e => this.setState({tituloTcc:e.target.value})}type="tituloTcc" class="form-control" id="exampleInputText" aria-describedby="emailHelp" placeholder={this.state.tituloTcc}></input>
                        </div>
                        <div class="form-group col-4">
                            <label for="exampleSelect1" class="form-label mt-4">Orientador</label>
                            <select  class="form-select" id="exampleSelect1">
                                {this.state.orientadores.map(opt => (<option value={opt.id}>{opt.nome}</option>))}
                            </select>
                        </div>
                        <div class="form-group col-12">
                            <label for="exampleTextarea" class="form-label mt-4">Descrição TCC</label>
                            <textarea class="form-control" id="exampleTextarea" placeholder={this.state.descricao} rows="6"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="formFile" class="form-label mt-4">PDF TCC</label>
                            <input class="form-control" type="file" id="formFile" />
                        </div>
                    </div>
                </div>
            </Janela>
            </>
        )
    }
}
export default Tcc