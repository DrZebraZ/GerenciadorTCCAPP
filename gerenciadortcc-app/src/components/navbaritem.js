import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavbarItem(props){
    return(
        <li className="nav" style={{textAlign:"center"}}>
            <NavLink  className={props.className} to={props.href} style={props.style}>{props.label}</NavLink>
        </li>
    )
}