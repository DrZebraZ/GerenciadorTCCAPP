import Janela from '../components/janela'
import DatePicker from "react-datepicker";
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
function Perfil(){
    const [nome , setNome ] = useState('Luis');
    const [descricaoPessoal, setDescricaoPessoal ] = useState('Coloque uma breve descrição sua aqui');
    const [dataNasc, setDataNasc ] = useState(new Date(setStartDate()));
    const [dataPlaceHolder, setDataPlaceHolder ] = useState('');
    const [isLogged,setIsLogged] = useState(localStorage.getItem('_usuario_logado'))
    
    function setStartDate(){
        const Logado = JSON.parse(localStorage.getItem("_usuario_logado"))
        return Logado && new Date(Logado.datanasc[0],(Logado.datanasc[1]-1),Logado.datanasc[2])
        
    }    


 
    return (
        <>
        <Janela>
            <div className="row">
                <div className="row">
                    <div className="form-group col-8">
                        <label htmlFor="exampleInputEmail" className="form-label mt-4">Nome</label>
                        <input value={nome} onChange={e => setNome(e.target.value)} type="Nome" className="form-control" id="exampleInputText" aria-describedby="emailHelp" placeholder={nome}></input>
                    </div>
                    <div className="form-group col-8">
                        <label htmlFor="exampleInputEmail" className="form-label mt-4" > Data Nascimento
                        <DatePicker
                            dateFormat="dd/MMM/yyyy"
                            onChange={(date) => { setDataNasc(date)}} 
                            selected={dataNasc}
                            type="nome"
                            className="form-control"
                            placeholder="Data Nascimento"
                            
                        />
                        </label>
                    </div>
                    <div className="form-group col-12">
                        <label htmlFor="exampleTextarea" className="form-label mt-4">Descrição Pessoal</label>
                        <textarea className="form-control" id="exampleTextarea" placeholder={descricaoPessoal} rows="6"></textarea>
                    </div>
                </div>
            </div>
        </Janela>
        </>
    )
    
}
export default Perfil



 /*const isLogged = JSON.parse(localStorage.getItem("_usuario_logado"))
        return isLogged && new Date(...isLogged.datanasc)
        return Logado && new Date(...Logado.datanasc)
        */
        

        /*const isLogged = JSON.parse(localStorage.getItem("_usuario_logado"))
        const data = new Date()
        if (isLogged){
            const {datanasc}=isLogged
            data.setFullYear(datanasc[0], datanasc[1], datanasc[2])      
        }else{
            return null
        }
        return data*/