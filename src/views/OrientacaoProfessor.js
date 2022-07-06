import React, { useEffect, useState } from 'react'
import Janela from '../components/janela'
import { NavLink } from 'react-router-dom'
import { Button, ButtonGroup, Dropdown, DropdownButton, SplitButton } from 'react-bootstrap'
import axios from 'axios'
import { Document, Page } from 'react-pdf'
import UsuarioService from '../app/service/UsuarioService'
import TccService from '../app/service/TccService'
import Chat from '../components/chat'
import OrientacaoService from '../app/service/OrientacaoService'
function OrientacaoProfessor() {
  const [usuariologado, setUsuarioLogado] = useState(localStorage.getItem("_usuario_logado"))
  const [professorLogado, setProfessorLogado] = useState(localStorage.getItem("_professor_logado"))
  const [idProfessor, setIdProfessor] = useState()
  const [nomeAluno, setNomeAluno] = useState("Nome Aluno")
  const [listaTCCS, setListaTCCS] = useState()
  const [carregado, setCarregado] = useState(false)
  const [tccID, setTccID] = useState()
  const [idAluno, setIdAluno] = useState()
  const [service, setService] = useState(new TccService())
  const [orientacaoService, setOrientacaoService] = useState(new OrientacaoService)
  
  useEffect(() => {
    async function atualizaLista(){
      console.log("pega lista tccs")
      const possuiLocalSTORAGE = localStorage.getItem("_tccs")
      if(possuiLocalSTORAGE){
        const lista = JSON.parse(localStorage.getItem("_tccs"))
        console.log(lista)
        const listaMapeada = await lista.map(objeto => ({ label: objeto.nomeAluno, key: objeto.idTCC, idAluno:objeto.idAluno }))
        console.log(listaMapeada)
        setListaTCCS(listaMapeada)
        setCarregado(true)
      }
    }
    atualizaLista()
    return () => {};
  }, [])  


  function CarregaOrientacao(){
    setCarregado(false)
    
    console.log(tccID)
    console.log(nomeAluno)
    setCarregado(true)
  }


  async function AbrirPDF(){
    console.log(nomeAluno)
    console.log(tccID)
    const URL = `http://localhost:8080/tcc/get/${tccID}/document`
    console.log(URL)
    function openInNewTab(URL){
      const win = window.open(URL, '_blank')
      win.focus()
    }
    openInNewTab(URL)
    
  }

  async function AbrirRelatorio(){
    console.log(idAluno)
    const response = await orientacaoService.getOrientacaoAluno({"alunoId" : idAluno})
    const data = await response.data
    console.log(data)
    const URL = `http://localhost:8080/orientacao/${data.orientacacaoId}/getRelatorio`
    console.log(URL)
    function openInNewTab(URL){
      const win = window.open(URL, '_blank')
      win.focus()
    }
    openInNewTab(URL)
    
  }


  if (usuariologado){
    return(
      <NavLink to="/home"/>
    )
  }
  if (!carregado){
    return (
      <h1>Carregando...</h1>
    )
  }else  return (
    <>
      <Janela>
        <div className="row align-items-between">
          <Dropdown as={ButtonGroup} className="col-8" style={{margin:"0", padding:"0 16px 0 0"}}>
            <Button className="col-8" style={{border:"2px solid black", color:"black", backgroundColor:"white", borderTopLeftRadius:"10px", borderBottomLeftRadius:"10px" }}>{nomeAluno}</Button>
            <Dropdown.Toggle style={{border:"2px solid black", color:"black", backgroundColor:"white", borderTopRightRadius:"10px", borderBottomRightRadius:"10px"}}>
            trocar
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {listaTCCS.map(opt => (
                <Dropdown.Item key={opt.key} style={{}} onClick={()=> (setTccID(opt.key),(setNomeAluno(opt.label)),(setCarregado(false)),(setIdAluno(opt.idAluno)),(CarregaOrientacao()))} eventKey={opt.key}>
                  {opt.label}
                </Dropdown.Item>))
              }
            </Dropdown.Menu>
          </Dropdown>
    
          <button style={{borderRadius:"10px"}} className="col-4" onClick={()=> {AbrirPDF()}}>
            Abrir PDF
          </button>
          
          <button style={{borderRadius:"10px"}} className="col-12 mt-4" onClick={()=> {AbrirRelatorio()}}>
            Gerar Relatório
          </button>

          <Chat idTCC={tccID}/>
         
        </div>
      </Janela>
    </>
  )

}
export default OrientacaoProfessor