import React, {useState} from 'react'
import  axios from "axios"
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import {  useDispatch} from 'react-redux'
import { addUser } from '../../../../redux/slices/userslice'
function SignUp() {
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")
    const [username, setUsername]= useState("")
   const [error, setError]= useState(false)
   const [errorMsg, setErrorMsg]= useState("")




    const dispatch = useDispatch()



let navigate = useNavigate()
    async function handleSubmit(e){
      e.preventDefault()
    try {
      const response = await axios.post("https://job-search-api-n5ob.onrender.com/register",{email,username,password})
         if(response.data.status){
           dispatch(addUser(response.data))
          

          toast.success(response.data.message)
          setTimeout(() => {
            navigate("/login")
          }, 3000);
         }
         else {
          setError(true)
          setErrorMsg(response.data.message)
         }
    } catch (error) {
      setError(true)

    }
    }
  return (
    <div style={{margin:"25px"}}>
       
    <Link to="/" style={{color:"gray",float:"right", textDecoration:"underline"}}>Browse</Link>
            <h2 style={{marginLeft:"10%"}}>Sign up as a job seeker</h2>

        
        <form onSubmit={handleSubmit}>
       
          
           <input type="text" 
          
            onChange={(e)=>setUsername(e.target.value)}
            
            
            placeholder='Fullname'/>
            
            <input type="email" 
              
            onChange={(e)=>setEmail(e.target.value)}
            placeholder='Email'/>
            

            <input type="password" 
                      
            onChange={(e)=>setPassword(e.target.value)}
            
            placeholder='Password'/>
            {error &&<p style={{color:"red"}}>{errorMsg}</p>}


                                <button type="submit" className='btn2'>Register</button>
        </form>
        <p>Already have an account? <Link style={{color:"blue"}} to ="/login">
                Login
            </Link></p>
           
    </div>
  )
}

export default SignUp