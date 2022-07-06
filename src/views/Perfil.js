import Janela from '../components/janela'
import DatePicker from "react-datepicker";
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
function Perfil() {
  const [nome, setNome] = useState('seu nome');
  const [descricaoPessoal, setDescricaoPessoal] = useState('Coloque uma breve descrição sua aqui');
  const [dataNasc, setDataNasc] = useState(new Date());
  const [dataPlaceHolder, setDataPlaceHolder] = useState('');
  const [isLogged, setIsLogged] = useState(localStorage.getItem('_usuario_logado'))


  useEffect(() => {
    if(localStorage.getItem("_usuario_logado")){
      const Logado = JSON.parse(localStorage.getItem("_usuario_logado"))
      setNome(Logado.nome)
      setDataNasc(new Date(Logado.datanasc[0], (Logado.datanasc[1] - 1), Logado.datanasc[2]))
    } else if(localStorage.getItem("_professor_logado")){
      const Logado = JSON.parse(localStorage.getItem("_professor_logado"))
      setNome(Logado.nome)
      setDataNasc(new Date(Logado.datanasc[0], (Logado.datanasc[1] - 1), Logado.datanasc[2]))
    }
  },[])


  return (
    <>
      <Janela>
        <div className="mt-2 mb-4">
          <div className="form-group col-12">
            <label 
              className="form-label mt-2"
              style={{ fontSize: 20, color: "black" }}
              htmlFor="exampleInputEmail"
            > Nome Completo </label>
            <input style={{ borderRadius: 20 }}
              className="form-control" 
              value={nome} onChange={e => setNome(e.target.value)} 
              type="Nome" id="exampleInputText" 
              aria-describedby="nameHelp" 
              placeholder={nome}  />
            <label 
              className="form-label mt-2"
              style={{ fontSize: 20, color: "black" }} 
              htmlFor="exampleTextarea" 
            > Descrição Pessoal</label>
            <textarea 
              className="form-control" 
              style={{ borderRadius: 20 }} 
              id="exampleTextarea" 
              placeholder={descricaoPessoal} 
              rows="6" />
            <></>
            <div className="row justify-content-between mb-4">
              <div className="col-6 col-sm">
                <label 
                  className="form-label col-4 mt-2" 
                  style={{fontSize: 20, color: "black" }} 
                > Data Nascimento </label>
                <DatePicker
                  className="form-control rounded-pill"
                  dateFormat="dd/MMM/yyyy"
                  onChange={(date) => { setDataNasc(date) }}
                  selected={dataNasc}
                  type="nome"
                  placeholder="Data Nascimento"
                />
              </div>
              <div className="col col-4 align-self-end">
                <button 
                  //onClick = Salvar TCC no banco 
                  type="button" 
                  className="btn btn-light col-12 " 
                  style={{color: "black", backgroundColor: "white", borderRadius: "20px" }}
                >
                  Salvar
                </button>
              </div>
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