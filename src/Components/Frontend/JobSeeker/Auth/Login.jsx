import React, {useState} from "react"
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from "react-redux"
import { userLoggedIn } from "../../../../redux/slices/userslice"
import { toast } from "react-toastify"

function Login() {
  const dispatch = useDispatch()
       const [email, setEmail]= useState("")
       const [password, setPassword]= useState("")
       const [error, setError] = useState(true)
       const [errorMessage, setErrorMessage] = useState("")

    let navigate = useNavigate()

        axios.defaults.withCredentials=true;
    async function handleSubmit(e){
      e.preventDefault()
      try {
        const response = await axios.post("https://job-search-api-n5ob.onrender.com/login",
        {email,password})
     if(response.data.status){
       dispatch(userLoggedIn(response.data.status))
      navigate("/")
    toast.success(response.data.message)
     }
    //  else if(response.data.emailSent){
    //   toast.success(response.data.message)
    //  }
     else{
      toast.error(response.data.message)
     }

      } catch (error) {
        console.log(error)
      }
     
     
  }
    
   
  return (
    <div>
         <div style={{margin:"15px"}}>
         <Link to="/" style={{color:"gray",float:"right", textDecoration:"underline"}}>Browse</Link>
            <h2 style={{marginLeft:"10%"}}>Login as a job seeker</h2>
        

       <form> 
            <input type="email" 
             
            onChange={(e)=>setEmail(e.target.value)}
            placeholder='Email'/>
            <input type="password" 
             
            onChange={(e)=>setPassword(e.target.value)}
            placeholder='Password'/>

            <button onClick={handleSubmit} className="btn2">Login</button>

        </form> 
        <Link style={{color:"blue"}} to="/forgotPassword">Forgot Password?</Link>
            <p>Don't have an account? <Link style={{color:"blue"}} to ="/register">
                Sign up
            </Link></p>
            </div>
    </div>
  )
}

export default Login