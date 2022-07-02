import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import { useUserContext } from "../context/UserLogedContext"

function RequireAuth({children}){
  const {isLogado} = useUserContext()
  const {isLogadoProf} = useUserContext()
  return isLogado? children : isLogadoProf? children : <Navigate to="/login"/>
}
export default RequireAuth