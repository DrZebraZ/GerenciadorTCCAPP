import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import TccService from '../app/service/TccService';
import Janela from '../components/janela'
import NPossuiTCC from '../components/tccs/npossuitcc';
import PossuiTCC from '../components/tccs/possuitcc';
function Tcc() {
  const [service, setService] = useState(new TccService())

  const [tcc, setTCC] = useState(JSON.parse(localStorage.getItem("_tcc")))
  const [idTCC, setIdTCC] = useState(localStorage.getItem("_idTCC"))
  const [tituloTcc, setTituloTcc] = useState("Defesa")
  const [descricao, setDescricao] = useState("")

  const [orientador, setOrientador] = useState("")
  const [nomeOrientador, setNomeOrientador] = useState("")

  const [docID, setDocID] = useState()
  const [docFile, setDocFile] = useState()

  const [possuiTCC, setPossuiTCC] = useState(false)
  const [setado, setSetado] = useState(false)

  useEffect(() => {
    async function setaTCC(){
      
    setTCC(JSON.parse(localStorage.getItem("_tcc")))
      try {
        const response = await service.pegarTCC({"idTCC":idTCC})
        const data = await response.data
        console.log(data)
        setTituloTcc(data.titulo)
        setDescricao(data.descricao)
        setNomeOrientador(data.professor.nome)
        setOrientador(data.professor.id)
        setDocID(data.docId)
        setPossuiTCC(true)
        setSetado(true)
      } catch (error) {
        console.log("erro")
        setPossuiTCC(false)
        setSetado(true)
      }
    }
    setaTCC()
  
  }, [])

  async function AtualizarTCC(){
    console.log("tituloTCC")
    console.log("descricao")
    const response = await service.atualizarTCC({"idTCC":idTCC},{
      "titulo":tituloTcc,
      "descricao":descricao,
      "professorId":orientador,
      "alunoId": JSON.parse(localStorage.getItem("_usuario_logado")).id
    })
    const data = response.data
    console.log("DATA ATT", data)
    if (docFile){
      console.log(docFile)
      let formData = new FormData()
      formData.append("file",docFile)
      console.log(formData)
      const salvatcc = await service.atualizarDoc({"idTCC":idTCC},formData)
      const data = await salvatcc.data
      console.log(data)
    }
  }
  


  if (!setado){
    return(
      <h1>Carregando...</h1>
    )
  }else{
    if (!idTCC){
    return (
      <>
        <NPossuiTCC/>
      </>
    )
    }else{
      return (
        <Janela>
          <div className="row mb-4">
            <div className="form-group col-8" >
              <label style={{ fontSize: 20, color: "black" }} htmlFor="exampleInputEmail" className="form-label mt-2" >Titulo TCC</label>
              <input style={{ borderRadius: 10 }} onChange={e => setTituloTcc(e.target.value)} type="tituloTcc" className="form-control" id="exampleInputText" aria-describedby="emailHelp" placeholder={tituloTcc}></input>
            </div>
            <div className="form-group col-4">
              <label style={{ fontSize: 20, color: "black" }} htmlFor="exampleSelect1" className="form-label mt-2">Orientador</label>
              <select style={{ borderRadius: 10 }} 
                className="form-select" 
                id="exampleSelect1"
                value={orientador} 
              >
                <option key={0} value={0}>{nomeOrientador}</option>
              </select>
            </div>
            <div className="form-group col-12">
              <label style={{ fontSize: 20, color: "black" }} htmlFor="exampleTextarea" className="form-label mt-2">Descrição TCC</label>
              <textarea style={{ borderRadius: 10 }} className="form-control" id="exampleTextarea" placeholder={descricao} onChange={e => setDescricao(e.target.value)} rows="6"></textarea>
            </div>
            <div className="form-group">
              <label style={{ fontSize: 20, color: "black" }} htmlFor="formFile" className="form-label mt-2">PDF TCC</label>
              <input style={{ borderRadius: 10 }} className="form-control" type="file" id="formFile" onChange={(e)=> setDocFile(e.target.files[0])}/>
            </div>
            <div className="form-group mt-2" style={{textAlign:"end"}}>
              <button 
                //onClick = Salvar TCC no banco 
                type="button" 
                className="btn btn-light col-6" 
                style={{marginTop:20, marginBottom:40, color: "black", backgroundColor: "white", borderRadius: "10px" }}
                onClick={() => {AtualizarTCC()}}
              >
                Atualizar
              </button>
            </div>
          </div>
        </Janela>
      )
    }
  }
}
export default Tcc