import React from 'react'

export default function NavbarItem(props){
    return(
        <li className="nav-item">
            <a className={props.className} href={props.href} style={props.style}>{props.label}</a>
        </li>
    )
}