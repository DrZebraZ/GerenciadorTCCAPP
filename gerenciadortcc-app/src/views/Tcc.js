import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import Janela from '../components/janela'
import NPossuiTCC from '../components/tccs/npossuitcc';
import PossuiTCC from '../components/tccs/possuitcc';
function Tcc() {
  const [tituloTcc, setTituloTcc] = useState("Defesa");
  const [descricao, setDescricao] = useState("Coloque a descrição do seu TCC aqui");
  const [orientador, setOrientador] = useState("Orientador");
  const [dataDefesa, setDataDefesa] = useState("");
  const [orientadores, setOrientadores] = useState([{ nome: "Orientador...", id: 0 }, { nome: "Luis", id: 1 }]);
  const [possuiTCC, setPossuiTCC] = useState(true);
  
  if (possuiTCC){
  return (
    <>
      <PossuiTCC/>
    </>
  )
  }else{
    return (
      <>
        <NPossuiTCC/>
      </>
    )
  }
}

export default Tcc