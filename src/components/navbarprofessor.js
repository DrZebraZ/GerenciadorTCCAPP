import NavbarItem from "./navbaritem"
import React, { useEffect, useState } from 'react'
import Deslogar from './deslogar'
import { useNavigate, } from 'react-router-dom'
import { textAlign } from "@mui/system";
import { Navbar, Container, NavbarBrand, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
function NavBarProfessor() {
  let navigate = useNavigate();
  const [nomePagina, setNomePagina] = useState(window.location.pathname);
  const [tcc, setTCC] = useState()

  function alteraEstilo(props) {
    if (props.nome == nomePagina) {
      return {
        backgroundColor: "white",
        color: "Black",
        textAlign: "center",
        border: "0.5px solid black",
        borderRadius: "10px",
        width: "120%",
        padding: "12px",
        fontSize: 16,
        fontWeight: 900,
      }
    }
  }
  return (
    <>

      <Navbar bg="primary" expand="sm">
        <Container fluid>
          <NavbarItem className="navbar-brand" href="/home" label="GTCC" style={alteraEstilo({ nome: "/home" })} />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavbarItem className="nav-link" href="/orientacao" label="Orientação" style={alteraEstilo({ nome: "/orientacao" })} />
            </Nav>
            <div className="align-end">
              <ul className="navbar-nav me-auto">
                <NavbarItem className="nav-link" href="/perfil" label="Perfil" style={alteraEstilo({ nome: "/perfil" })} />
                <li className="button">
                  <a className="nav-link" href="/login" onClick={() => { Deslogar() }} >Deslogar</a>
                </li>
              </ul>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBarProfessor

/* DROPDOWN BUTTON
 <NavDropdown title="DROPDAWN" id="navbarScrollingDropdown">
    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item href="#action5">
        Something else here
    </NavDropdown.Item>
</NavDropdown>
*/
/*
<nav className="navbar navbar-expand-sm navbar-light bg-light" style={{position:"fixed", width:"100%"}}>
    <div className="container-fluid ">
        <div className="col-2"></div>
            <NavbarItem className="navbar-brand" href="/" label="GTCC"/>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive" >
                <ul className="navbar-nav me-auto">
                    <NavbarItem className="nav-link" href="/tcc" label="TCC" style={alteraEstilo({nome:"/tcc"})}/> 
                </ul>
                <div className="align-end">
                    <ul className="navbar-nav me-auto">
                        <NavbarItem className="nav-link" href="/perfil" label="Perfil" style={alteraEstilo({nome:"/perfil"})}  />
                        <li className="button">
                            <a className="nav-link" href="/login" onClick={() => {Deslogar()}} >Deslogar</a>
                        </li>
                    </ul>
                </div>
            </div>
        <div className="col-2"></div>
    </div>
</nav>
*/