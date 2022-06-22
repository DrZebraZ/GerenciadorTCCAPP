import React from 'react'
import NavBar from '../components/navbar'
function Janela(props){
    return(
        <>
            <NavBar/>
            <div className="container" style={{height:800, paddingTop:0}}>
                
                    {props.children}          
                
            </div>
        </>
    )
}
export default Janela