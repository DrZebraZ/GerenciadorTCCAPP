import React, { useEffect, useState } from 'react'
import OrientacaoService from '../app/service/OrientacaoService'
import TccService from '../app/service/TccService'
import NavBar from '../components/navbar'
import Mensagem from './mensagem'
import NavBarProfessor from './navbarprofessor'
function Chat(props) {
  const[aluno, setAluno] = useState(localStorage.getItem("_usuario_logado"))
  const[professor, setProfessor]=useState(localStorage.getItem("_professor_logado"))
  const[carregando, setCarregando]=useState(true)
  const[service,setService] = useState(new OrientacaoService)
  const[tccService, setTccService] = useState(new TccService)
  const[listaComentarios, setListaComentarios] = useState()
  const[nomeProfessor, setNomeProfessor] = useState()
  const[nomeAluno, setNomeAluno]=useState()
  const[orientacaoID, setOrientacaoID] = useState()
  const[comentarioNovo, setComentarioNovo] = useState('Escreva aqui o comentario')
  useEffect(()=>{
    setCarregando(true)
    async function mensagens(){
      console.log("ABRIU MENSAGENS")
      console.log(props.idTCC)
      const response = await tccService.pegarTCC({"idTCC":props.idTCC})
      const data = await response.data
      const response2 = await service.getOrientacaoAluno({"alunoId" : data.alunoDTO.id})
      const data2 = await response2.data
      setOrientacaoID(data2.orientacacaoId)
      setNomeProfessor(data2.nomeProfessor)
      setNomeAluno(data2.nomeAluno)
      setaListaComentarios({"data":data2})
    }
    mensagens()
  },[props])

  async function setaListaComentarios(props){
    setListaComentarios([])
    console.log("SETANDO LISTA COMENTARIOS")
    console.log(props.data)
    try {
      const mensagens = await props.data.comentarios.comentarios.map(objeto => ({ 
        autor: objeto.autor, 
        key: objeto.idComentario,
        mensagem: objeto.comentario,
        dataComentario : objeto.dataComentario
      }))
      setListaComentarios(mensagens)
      setCarregando(false)
    } catch (error) {
      console.log("erro", error)
      setCarregando(false)
    }
  }
  
  async function adicionaComentario(){
    console.log("ADICIONANDO COMENTARIO")
    try {
      setCarregando(true)
      if(window.location.pathname === "/orientacaoprofessor"){
        const response = await service.addOrientacaoProfessor({"orientacaoID":orientacaoID},{
          "comentario":JSON.stringify(comentarioNovo)
        })
        const data = response.data
        setaListaComentarios({"data":data})
      }else if(window.location.pathname==="/orientacao"){
        const response = await service.addOrientacaoAluno({"orientacaoID":orientacaoID},{
          "comentario":(comentarioNovo)
        })
        const data = response.data
        setaListaComentarios({"data":data})
      }
    } catch (error) {
      setCarregando(false)
      console.log(error)
    }
  }

  if(carregando){
    return(<h1 className="col-12 mt-4">Carregando... / Selecione um usuario</h1>)
  }else if (!carregando){
    return(
      <div className="col-12 mt-3" style={{border:"2px solid black", borderRadius:"10px", backgroundColor:"white", color:"black", padding:"8px 12px"}} >
        <h2 className="col-12 mt-2" style={{textAlign:"center", backgroundColor:"#CCCCCC", borderRadius:"10px"}}>Chat Orientação</h2>
        
        <textarea 
          className="form-control"
          style={{ borderRadius: 10, border:"2px solid black" }} 
          onChange={e => setComentarioNovo(e.target.value)}
          id="exampleTextarea" 
          rows="3" 
        />

        <div className="row mt-1" style={{padding:"0 12px"}}>
          <div className="col-8"></div>
          <button style={{borderRadius:"10px"}} onClick={()=>adicionaComentario()} className="col-4">Enviar</button>
        </div>

        <div className="col-12 mt-4" style={{overflow:"auto", height:"440px", border:"2px solid black", borderRadius:"10px"}}>
          {listaComentarios.map(obj => (
            <Mensagem autor={obj.autor} key={obj.key} mensagem={obj.mensagem} data={obj.dataComentario} nomeProf={nomeProfessor} nomeAluno={nomeAluno}/>
          ))}

        </div>
      </div>
    )
  }
}
export default Chat