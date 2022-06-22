import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import Janela from '../components/janela'
function Tcc(){
    const [tituloTcc, setTituloTcc] = useState("Defesa");
    const [descricao, setDescricao]= useState("Coloque a descrição do seu TCC aqui");
    const [orientador,setOrientador] =useState("Orientador");
    const [dataDefesa, setDataDefesa]=useState("");
    const [orientadores, setOrientadores]=useState([{nome:"Orientador...",id:0},{nome:"Luis",id:1}]);
    
    
    return(
        <>
        <Janela>
            <div className="row">
                <div className="row">
                    <div className="form-group col-8">
                        <label htmlFor="exampleInputEmail" className="form-label mt-4">Titulo TCC</label>
                        <input onChange={e => this.setState({tituloTcc:e.target.value})}type="tituloTcc" className="form-control" id="exampleInputText" aria-describedby="emailHelp" placeholder={  tituloTcc}></input>
                    </div>
                    <div className="form-group col-4">
                        <label htmlFor="exampleSelect1" className="form-label mt-4">Orientador</label>
                        <select  className="form-select" id="exampleSelect1">
                            {  orientadores.map(opt => (<option key={opt.id}>{opt.nome}</option>))}
                        </select>
                    </div>
                    <div className="form-group col-12">
                        <label htmlFor="exampleTextarea" className="form-label mt-4">Descrição TCC</label>
                        <textarea className="form-control" id="exampleTextarea" placeholder={  descricao} rows="6"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formFile" className="form-label mt-4">PDF TCC</label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>
                </div>
            </div>
        </Janela>
        </>
    )
}

export default Tcc