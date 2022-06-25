import { useState } from "react";
import Janela from "../janela";

function NPossuiTCC(){
  const [tituloTcc, setTituloTcc] = useState("Defesa");
  const [descricao, setDescricao] = useState("Coloque a descrição do seu TCC aqui");
  const [orientador, setOrientador] = useState("Orientador");
  const [orientadores, setOrientadores] = useState([{ nome: "Orientador...", id: 0 }, { nome: "Luis", id: 1 }]);


  return(
    <Janela>
      <label style={{textAlign:"center", fontSize: 32, color: "black" }} htmlFor="exampleInputEmail" className="col-12 mt-4" >Criar página TCC</label>  
      <div className="form-group mt-2">
        <label style={{ fontSize: 20, color: "black" }} htmlFor="exampleInputEmail" className="form-label mt-2" >Titulo TCC</label>
        <input style={{ borderRadius: 10 }} onChange={e => this.setState({ tituloTcc: e.target.value })} type="tituloTcc" className="form-control" id="exampleInputText" aria-describedby="emailHelp" placeholder={tituloTcc}></input>
      </div>
      <div className="form-group mt-2">
        <label style={{ fontSize: 20, color: "black" }} htmlFor="exampleSelect1" className="form-label mt-2">Orientador</label>
        <select style={{ borderRadius: 10 }} className="form-select" id="exampleSelect1">
          {orientadores.map(opt => (<option key={opt.id}>{opt.nome}</option>))}
        </select>
        <small style={{fontSize:"16px"}}>Enviará um pedido de confirmação ao orientador</small>
      </div>
      <div className="form-group col-12 mt-2">
        <label style={{ fontSize: 20, color: "black" }} htmlFor="exampleTextarea" className="form-label">Resumo</label>
        <textarea style={{ borderRadius: 10 }} className="form-control" id="exampleTextarea" placeholder={descricao} rows="6"></textarea>
      </div>
      <div className="form-group mt-2">
        <label style={{ fontSize: 20, color: "black" }} htmlFor="formFile" className="form-label">PDF TCC (Opicional)</label>
        <input style={{ borderRadius: 10 }} className="form-control" type="file" id="formFile" />
      </div>
      <div className="form-group" style={{textAlign:"end"}}>
        <button 
          //onClick = Salvar TCC no banco 
          type="button" 
          className="btn btn-light col-6" 
          style={{marginTop:20, marginBottom:40, color: "black", backgroundColor: "white", borderRadius: "10px" }}
        >
          Confirmar
        </button>
      </div>
    </Janela>
  )
}
export default NPossuiTCC