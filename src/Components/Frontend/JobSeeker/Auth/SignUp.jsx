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
    const [dob, setDob] = useState("")
    const [gender, setGender] = useState("")
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")


    const dispatch = useDispatch()



let navigate = useNavigate()


    async function handleSubmit(e){
      e.preventDefault()
    try {
      const response = await axios.post("http://localhost:5000/register",{email,username,password,gender,dob})
         if(response.data.status){
           dispatch(addUser(response.data))
          toast.success(response.data.message)
          setTimeout(() => {
            navigate("/login")
          }, 3000);
         }
         else {
          setError(true)
          setErrorMessage(response.data.message)
         }
    } catch (error) {
      setError(true)
          setErrorMessage(response.data.error)
    }
    }
  return (
    <div style={{margin:"25px"}}>
       
    <Link to="/" style={{color:"gray",float:"right", textDecoration:"underline"}}>Browse</Link>
            <h2 style={{marginLeft:"10%"}}>Sign up as a job seeker</h2>

        
        <form onSubmit={handleSubmit}>
       
          
           <input type="text" 
           minLength={2}
          
            onChange={(e)=>setUsername(e.target.value)}
            
            
            placeholder='Fullname'/>
            {error? <p style={{color:"red"}}>{errorMessage}</p>:null}
            <input type="email" 
              
            onChange={(e)=>setEmail(e.target.value)}
            placeholder='Email'/>
          {error? <p style={{color:"red"}}>{errorMessage}</p>:null}

            <input type="password" 
                       minLength={6}
                       maxLength={30}
            onChange={(e)=>setPassword(e.target.value)}
            
            placeholder='Password'/>
            {error? <p style={{color:"red"}}>{errorMessage}</p>:null}

            <input type="date"  onChange={(e)=>setDob(e.target.value)} />
             <select onChange={(e)=>setGender(e.target.value)}>
             <option value="">Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>

             </select> 
             {error? <p style={{color:"red"}}>{errorMessage}</p>:null}
                                <button type="submit" className='btn2'>Register</button>
        </form>
        <p>By clicking 'register', you agree to our <a style={{color:"blue", textDecoration:"underline"}} href="#">terms</a> and <a style={{color:"blue", textDecoration:"underline"}} href="">conditions</a>. You also agree that React is better than Angular.</p>
        <p>Already have an account? <Link style={{color:"blue"}} to ="/login">
                Login
            </Link></p>
           
    </div>
  )
}

export default SignUp