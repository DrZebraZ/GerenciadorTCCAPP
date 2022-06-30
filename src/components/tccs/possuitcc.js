import { useState } from "react";
import Janela from "../janela";

function PossuiTCC(){
  const [tituloTcc, setTituloTcc] = useState("Defesa");
  const [descricao, setDescricao] = useState("Coloque a descrição do seu TCC aqui");
  const [orientador, setOrientador] = useState("Orientador");
  const [dataDefesa, setDataDefesa] = useState("");
  const [orientadores, setOrientadores] = useState([{ nome: "Orientador...", id: 0 }, { nome: "Luis", id: 1 }]);


  return(
    <Janela>
        <div className="row mb-4">
          <div className="form-group col-8" >
            <label style={{ fontSize: 20, color: "black" }} htmlFor="exampleInputEmail" className="form-label mt-2" >Titulo TCC</label>
            <input style={{ borderRadius: 10 }} onChange={e => this.setState({ tituloTcc: e.target.value })} type="tituloTcc" className="form-control" id="exampleInputText" aria-describedby="emailHelp" placeholder={tituloTcc}></input>
          </div>
          <div className="form-group col-4">
            <label style={{ fontSize: 20, color: "black" }} htmlFor="exampleSelect1" className="form-label mt-2">Orientador</label>
            <select style={{ borderRadius: 10 }} className="form-select" id="exampleSelect1">
              {orientadores.map(opt => (<option key={opt.id}>{opt.nome}</option>))}
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
export default PossuiTCC