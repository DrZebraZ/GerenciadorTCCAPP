import { useEffect, useState } from "react"

export default function Mensagem(props){
  const [aluno, setAluno] = useState(localStorage.getItem("_usuario_logado"))
  const [recebido,setRecebido] = useState(true)
  const [tipoMensagem, setTipoMensagem] = useState(0)
  const [nomeNaMensagem, setNomeNaMensagem] = useState('')
  useEffect(()=>{
    async function setaTipoMensagem(){
      if (aluno && props.autor==="ALUNO"){
        setNomeNaMensagem(props.nomeAluno)
        setTipoMensagem(1)
      } else if(aluno && props.autor==="PROFESSOR"){
        setNomeNaMensagem(props.nomeProf)
        setTipoMensagem(2)
      } else if(!aluno && props.autor==="ALUNO"){
        setNomeNaMensagem(props.nomeAluno)
        setTipoMensagem(2)
      } else if(!aluno && props.autor==="PROFESSOR"){
        setNomeNaMensagem(props.nomeProf)
        setTipoMensagem(1)
      }
    }
    setaTipoMensagem()
  },[])

  if(tipoMensagem===1){
    return(
        <div className="col-12 row justify-content-end">
          <div class="col-10" style={{borderRadius:"8px", margin:"4px 0"}}>
            <div style={{backgroundColor:"#0F2537"}} class="list-group-item list-group-item-action flex-column align-items-start active">
              <div class="d-flex w-100 justify-content-between">
                <small class="mb-1">{nomeNaMensagem}</small>
                <small>{props.data[3]}:{props.data[4]} - {props.data[2]}/{props.data[1]}/{props.data[0]}</small>
              </div>
              <p class="mb-1">{props.mensagem}</p>
            </div>
          </div>
        </div>
    )
  }else if(tipoMensagem===2){
    return(
      <>
        <div class="list-group col-10" style={{borderRadius:"8px", margin:"4px"}}>
          <div class="list-group-item list-group-item-action flex-column align-items-start active">
            <div class="d-flex w-100 justify-content-between">
              <small class="mb-1">{nomeNaMensagem}</small>
              <small>{props.data[3]}:{props.data[4]} - {props.data[2]}/{props.data[1]}/{props.data[0]}</small>
            </div>
              <p class="mb-1">{props.mensagem}</p>
            </div>
        </div>
      </>
    )
  }
}