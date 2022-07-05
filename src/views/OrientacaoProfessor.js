import React, { useEffect, useState } from 'react'
import Janela from '../components/janela'
import { NavLink } from 'react-router-dom'
import { Button, ButtonGroup, Dropdown, DropdownButton, SplitButton } from 'react-bootstrap'
import axios from 'axios'
import { Document, Page } from 'react-pdf'
import UsuarioService from '../app/service/UsuarioService'
import TccService from '../app/service/TccService'
function OrientacaoProfessor() {
  const [usuariologado, setUsuarioLogado] = useState(localStorage.getItem("_usuario_logado"))
  const [idProfessor, setIdProfessor] = useState()
  const [nomeAluno, setNomeAluno] = useState("Nome Aluno")
  const [listaTCCS, setListaTCCS] = useState()
  const [carregado, setCarregado] = useState(false)
  const [tccID, setTccID] = useState()



  const [service, setService] = useState(new TccService())
  
  useEffect(() => {
    async function atualizaLista(){
      console.log("pega lista tccs")
      const lista = await JSON.parse(localStorage.getItem("_tccs"))
      console.log(lista)
      const listaMapeada = await lista.map(objeto => ({ label: objeto.nomeAluno, key: objeto.idTCC }))
      console.log(listaMapeada)
      setListaTCCS(listaMapeada)
      setCarregado(true)
    }
    atualizaLista()
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
          <Dropdown as={ButtonGroup} className="col-8">
            <Button className="col-8" style={{border:"2px solid black", color:"black", backgroundColor:"white", borderTopLeftRadius:"10px", borderBottomLeftRadius:"10px" }}>{nomeAluno}</Button>
            <Dropdown.Toggle style={{border:"2px solid black", color:"black", backgroundColor:"white", borderTopRightRadius:"10px", borderBottomRightRadius:"10px"}}>
            trocar
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {listaTCCS.map(opt => (
                <Dropdown.Item key={opt.key} style={{}} onClick={()=> (setTccID(opt.key),(setNomeAluno(opt.label)),(CarregaOrientacao()))} eventKey={opt.key}>
                  {opt.label}
                </Dropdown.Item>))
              }
            </Dropdown.Menu>
          </Dropdown>
    
          <button style={{borderRadius:"10px"}} className="col-4" onClick={()=> {AbrirPDF()}}>
            Abrir PDF
          </button>
        </div>
      </Janela>
    </>
  )

}
export default OrientacaoProfessor