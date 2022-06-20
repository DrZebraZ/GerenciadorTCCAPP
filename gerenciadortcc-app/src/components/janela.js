import React from 'react'
import NavBar from '../components/navbar'
function Janela(props){
    return(
        <>
            <NavBar/>
            <div className="container" style={{backgroundColor:"rgb(50,50,50)" ,height:800, paddingTop:56}}>
                
                    {props.children}          
                
            </div>
        </>
    )
}
export default Janela