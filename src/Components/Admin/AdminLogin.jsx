// import Axios from "axios"
// import {toast} from "react-toastify"
import {  useNavigate } from 'react-router-dom'
import React, {useState} from "react"

function AdminLogin() {
       const [email, setEmail]= useState("")
       const [password, setPassword]= useState("")
    const [error, setError] = useState(true)
    const [errorMessage, setErrorMessage] = useState("")


    let navigate = useNavigate()
    // https://mealapp-api-2.onrender.com/login

    function handleSubmit(e){
        e.preventDefault()
        if(email=="sibusisomatebese75@gmail.com" && password=="cristiano12@"){
            navigate("/admin/dashboard")
        }
        else{
      setError(true)
      setErrorMessage("Incorrect name or password. Please try again.")
        }
    }
//     Axios.defaults.withCredentials=true;
//     function handleSubmit(e){
//         e.preventDefault()
//         Axios.post("http://localhost:5000/login", 
//           { email, password}).then(response =>{
//             if(response.data.status){
//                 navigate("/")
//             }
//             else {
//                 toast.error("Invalid login details")
//             }
//         }).catch(err =>{
//             toast.error("error")
//         })
//    }
   
  return (
    <div>
         <div style={{margin:"15px"}}>
            <h2 style={{marginLeft:"10%"}}>Login as an administrator</h2>
        

       
          
            <input type="email" 
             required
            onChange={(e)=>setEmail(e.target.value)}
            
            placeholder='Email'/>

            <input type="password" 
             required
            onChange={(e)=>setPassword(e.target.value)}
            
            placeholder='Password'/>
            <button onClick={handleSubmit} className="btn2">Login</button>
            {error&&<p style={{color:"red"}}>{errorMessage}</p>}
         
        
            </div>
    </div>
  )
}

export default AdminLogin