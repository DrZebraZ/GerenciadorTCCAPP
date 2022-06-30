import { useState } from "react";
import ProfessorService from "../../app/service/ProfessorService";
import UsuarioService from "../../app/service/UsuarioService";
import Janela from "../janela";



function NPossuiTCC(){
  const [tituloTcc, setTituloTcc] = useState("Tese do seu tcc aqui");
  const [descricao, setDescricao] = useState("Coloque o resumo do seu TCC aqui");
  const [orientador, setOrientador] = useState();
  const [docFile, setDocFile] = useState();
  const [orientadores, setOrientadores] = useState();
  const [idCurso ,setIdCurso] = useState()
  const [service, setService] = useState(new ProfessorService())
  const [carregado, setCarregado] = useState(false)
  
  function CadastraTCC(){
    console.log("TITULO: ", tituloTcc)
    console.log("Descricao: ", descricao)
    console.log("orientador: " , orientador)
    console.log("documento: ", docFile)

  }

  async function setaIdCurso(){
    const Logado = await JSON.parse(localStorage.getItem("_usuario_logado"))
    setIdCurso(Logado.idCurso)
  }

  async function procuraListaProfessores(){
    async function procuraCursos(){
      await setaIdCurso()
      const response = await service.getListaProfessores({"idCurso" : idCurso})
      console.log("1",response)
      const data = await response.data
      console.log("2",data)
      const lista = data.map(objeto => ({ nome: objeto.nome, key: objeto.id }))
      console.log(lista)
      setOrientadores(lista)
      console.log("orientadores", orientadores)  
      setCarregado(true)
    }
    procuraCursos()
  }

  if (!carregado){
    procuraListaProfessores()
    return (
      <h1>carregando...</h1>
    )
  }else{
    return(
      <Janela>
        <label style={{textAlign:"center", fontSize: 32, color: "black" }} htmlFor="exampleInputEmail" className="col-12 mt-4" >Criar página TCC</label>  
        <div className="form-group mt-2">
          <label style={{ fontSize: 20, color: "black" }} htmlFor="exampleInputEmail" className="form-label mt-2" >Tese</label>
          <input style={{ borderRadius: 10 }} onChange={e => setTituloTcc(e.target.value)} type="tituloTcc" className="form-control" id="exampleInputText" aria-describedby="emailHelp" placeholder={tituloTcc}></input>
        </div>
        <div className="form-group mt-2">
          <label style={{ fontSize: 20, color: "black" }} htmlFor="exampleSelect1" className="form-label mt-2">Orientador</label>
          <select style={{ borderRadius: 10 }}
           className="form-select" 
           id="exampleSelect1" 
           value={orientador} 
           onChange={(e) => setOrientador(e.target.value)}
          >
            <option key={0} value={0}>Selecione...</option>
            {orientadores.map(opt => (
              <option key={opt.key} value={opt.key}>
                {opt.nome}
              </option>))
            }
          </select>
          <small style={{fontSize:"16px"}}>Selecione um dos professores do seu curso</small>
        </div>
        <div className="form-group col-12 mt-2">
          <label style={{ fontSize: 20, color: "black" }} htmlFor="exampleTextarea" className="form-label">Resumo</label>
          <textarea style={{ borderRadius: 10 }} onChange={e => setDescricao(e.target.value)} className="form-control" id="exampleTextarea" placeholder={descricao} rows="6"></textarea>
        </div>
        <div className="form-group mt-2">
          <label style={{ fontSize: 20, color: "black" }} htmlFor="formFile" className="form-label">PDF TCC -Opicional</label>
          <input style={{ borderRadius: 10 }} className="form-control" type="file" id="formFile" onChange={(e)=> setDocFile(e.target.files[0])}/>
        </div>
        <div className="form-group" style={{textAlign:"end"}}>
          <button 
            //onClick = Salvar TCC no banco 
            type="button" 
            className="btn btn-light col-6" 
            style={{marginTop:20, marginBottom:40, color: "black", backgroundColor: "white", borderRadius: "10px" }}
            onClick={() => {CadastraTCC()}}
          >
            Confirmar
          </button>
        </div>
      </Janela>
    )
  }
}
export default NPossuiTCC