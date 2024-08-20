import React, {useState} from "react"
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'

function Login() {
       const [email, setEmail]= useState("")
       const [password, setPassword]= useState("")
       const [error, setError] = useState(true)
       const [errorMessage, setErrorMessage] = useState("")

    let navigate = useNavigate()

        axios.defaults.withCredentials=true;
    async function handleSubmit(e){
      e.preventDefault()
      try {
        const response = await axios.post("http://localhost:5000/login",{email,password})
     if(response.data.status){
      navigate("/")
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
    <div>
         <div style={{margin:"15px"}}>
         <Link to="/" style={{color:"gray",float:"right", textDecoration:"underline"}}>Browse</Link>
            <h2 style={{marginLeft:"10%"}}>Login as a job seeker</h2>
        

       <form onSubmit={handleSubmit}> 
            <input type="email" 
             
            onChange={(e)=>setEmail(e.target.value)}
            placeholder='Email'/>
            {error &&<p style={{color:"red"}}>{errorMessage}</p>}
            <input type="password" 
             
            onChange={(e)=>setPassword(e.target.value)}
            placeholder='Password'/>
            {error &&<p style={{color:"red"}}>{errorMessage}</p>}

            <button type="submit" className="btn2">Login</button>

        </form> 
            {error&&<p style={{color:"red"}}>{errorMessage}</p>}
        <Link style={{color:"blue"}} to="/forgotPassword">Forgot Password?</Link>
            <p>Don't have an account? <Link style={{color:"blue"}} to ="/register">
                Sign up
            </Link></p>
            </div>
    </div>
  )
}

export default Login