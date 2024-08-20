import React from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {
    let navigate= useNavigate()
  return (
    <div>
         <button onClick={()=>navigate("/")} 
      style={{background:"green", color:"whitesmoke", fontWeight:"bold"}}>
        <FaHome/> Back home
      </button>
        <h3>404 - Page not found, bitch!</h3>
    </div>
  )
}

export default NotFound