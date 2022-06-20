import NavbarItem from "./navbaritem"
import React from 'react'
import Deslogar from './deslogar'
class NavBar extends React.Component{
    state={
        nomePagina:window.location.pathname,
    }
    alteraEstilo = (nome) =>{
        if (this.state.nomePagina === nome){
            return{
                backgroundColor:"aquamarine",
                color:"Black",
                border:"0.5px solid black",
                borderRadius:"10px"
            }
        }
    }

    render(){
    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{position:"fixed", width:"100%"}}>
        <div className="container-fluid ">
            <div className="col-2"></div>
            <a className="navbar-brand" href="/home">GTCC</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav me-auto">
                    <NavbarItem className="nav-link" href="/home" label="Home" style={this.alteraEstilo("/home")}/> 
                    <NavbarItem className="nav-link" href="/tcc" label="TCC" style={this.alteraEstilo("/tcc")}/> 
                </ul>
            </div>
            <div className="align-end">
                <ul className="navbar-nav me-auto">
                    <NavbarItem className="nav-link" style={this.alteraEstilo("/perfil")} href="/perfil" label="Perfil"/>
                    <li className="button">
                        <a className="nav-link" href="/login" onClick={() => {Deslogar()}} >Deslogar</a>
                    </li>
                </ul>
            </div>
            <div className="col-2"></div>
        </div>
    </nav> 
    )}
}
export default NavBar