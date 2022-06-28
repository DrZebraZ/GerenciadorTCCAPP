import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import Janela from '../components/janela'
import NPossuiTCC from '../components/tccs/npossuitcc';
import PossuiTCC from '../components/tccs/possuitcc';
function Tcc() {
  const [tituloTcc, setTituloTcc] = useState("Defesa");
  const [descricao, setDescricao] = useState("");
  const [orientador, setOrientador] = useState("");
  const [nomeOrientador, setNomeOrientador] = useState("")
  const [dataDefesa, setDataDefesa] = useState("");
  const [possuiTCC, setPossuiTCC] = useState(false);
  const [tcc, setTCC] = useState(JSON.parse(localStorage.getItem("_tcc")));
  
  useEffect(() => {
    async function setaTCC(){
      setTCC(JSON.parse(localStorage.getItem("_tcc")))
      setDescricao(tcc.descricao)
      setOrientador(tcc.idProfessor)
      setNomeOrientador(tcc.nomeProfessor)
      setPossuiTCC(true)
      console.log("tcc" , tcc)
    }
    setaTCC()
  }, [])
  
  if (!possuiTCC){
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
            <input style={{ borderRadius: 10 }} onChange={e => this.setState({ tituloTcc: e.target.value })} type="tituloTcc" className="form-control" id="exampleInputText" aria-describedby="emailHelp" placeholder={tituloTcc}></input>
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
            <textarea style={{ borderRadius: 10 }} className="form-control" id="exampleTextarea" placeholder={descricao} rows="6"></textarea>
          </div>
          <div className="form-group">
            <label style={{ fontSize: 20, color: "black" }} htmlFor="formFile" className="form-label mt-2">PDF TCC</label>
            <input style={{ borderRadius: 10 }} className="form-control" type="file" id="formFile" />
          </div>
        </div>
      </Janela>
    )
  }
}

export default Tcc