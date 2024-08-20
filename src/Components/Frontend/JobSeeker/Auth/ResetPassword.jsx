import axios from "axios"
import { Link, useNavigate, useParams } from 'react-router-dom'
import {toast} from "react-toastify"

function ResetPassword() {
   
    const [password, setPassword]= useState("")
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    let navigate = useNavigate()
    let {token} = useParams()

  
    async function handleSubmit(e){
        e.preventDefault()
        try {
           const response = await axios.post(`http://localhost:5000/reset-password/${token}`, 
            {password})
             if(response.data.status){
                 toast.success(response.data.message)
                 setTimeout(() => {
                     navigate("/login")
                 }, 3000);
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
    <div style={{margin:"30px"}}>
        <h2>Reset Password</h2>
        <form onSubmit={handleSubmit}>
       
             <label htmlFor="password">Password</label>
            <input type="password" 
            onChange={(e)=>setPassword(e.target.value)}

            placeholder='Password'/>

            <button type="submit" className="btn1">Reset</button>
            <div>Cancel<Link to ="/login">
                Login
            </Link></div>
        </form>
        {error?<p>{errorMessage}</p>:null}
    </div>
  )
}

export default ResetPassword