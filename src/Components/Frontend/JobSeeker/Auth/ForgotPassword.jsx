// import axios from "axios"
// import {toast} from "react-toastify"
import React, {useState} from "react"
import { useNavigate } from 'react-router-dom'

function ForgotPassword() {
  const [email, setEmail]= useState("")
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
       let navigate = useNavigate()

    async function handleSubmit(e){
      e.preventDefault()
      try {
        const response = await axios.post("http://localhost:5000/forgot-password",{password})
        if(response.data.status){
          toast.success(response.data.message)
        }
        else{
          setError(true)
          setErrorMessage(response.data.message)
        }
      } catch (error) {
        setError(true)
        setErrorMessage(response.data.error)
      }
    }
  return (
    <>
    
        <h2 style={{marginLeft:"1%"}}>Forgot Password</h2>
          <form onSubmit={handleSubmit}>

            <input type="email" 
            onChange={(e)=>setEmail(e.target.value)}
           

            placeholder='Email'/>
             <span style={{margin:"5px"}}>
              <button onClick={()=>navigate("/login")} className='btn btn-sm btn-danger me-2'>Go back</button>
              <button type="submit" className='btn btn-sm btn-success'>Send</button>              </span>
          </form> 
            {error?<p>{errorMessage}</p>:null}
            
    </>
  )
}

export default ForgotPassword