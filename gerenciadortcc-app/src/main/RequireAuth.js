import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import { useUserContext } from "../context/UserLogedContext"

function RequireAuth({children}){
  const {isLogado} = useUserContext()
  return isLogado? children : <Navigate to="/login"/>
}
export default RequireAuth