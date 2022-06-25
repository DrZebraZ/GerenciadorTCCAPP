import React from 'react'
import NavBar from '../components/navbar'
function Janela(props, altura) {
  return (
    <div className="justify-content-center align-items-center">
      <NavBar />
      <div className="container" style={{ borderRadius: 20, backgroundColor: "#4C9BE8", padding: "16px 4%", marginTop: "5%", transition: ".5s linear" }}>

        {props.children}

      </div>
    </div>
  )
}
export default Janela