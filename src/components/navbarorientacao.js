import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBarOrientacao(){
  const [tccId, setTccId] = useState()
  const [possui, setPossui] = useState()
  useEffect(() => {
    async function setaTCC(){
      console.log("setando tcc")
      try {
        const id = await JSON.parse(localStorage.getItem("_idTCC"))
        setTccId(id)
        if (id != 0 && id != 'null'){
          console.log("id tcc ", id)
          setPossui(true)
        }else{
          console.log("n possui ID")
        }
      } catch (error) {
        setPossui(false)
      }
      
    }
    setaTCC()
  }, [])
  if (possui){
    return (
      <NavbarItem className="nav-link" href="/orientacao" label="Orientação" style={alteraEstilo({ nome: "/orientacao" })} />
    )
  }else{
    return(
    <></>
    )
  }
}