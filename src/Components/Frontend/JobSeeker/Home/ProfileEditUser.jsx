import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// import { FaHome } from 'react-icons/fa'
import { toast } from 'react-toastify'
import axios from "axios"
import { userLoggedIn, updateUser } from '../../../../redux/slices/userslice'

function ProfileEditUser() {
    let {id}=  useParams() 
    let navigate = useNavigate()
    let dispatch = useDispatch()
    const loggedIn = useSelector(state=>state.users.loggedIn)
    const [email, setEmail]= useState("")
    const [username, setUsername]= useState("")
    
    async function update(e){
      e.preventDefault()
      try {
        
        const response = await axios.put(`http://localhost:5000/updateUser/${id}`,{username,email})
        if(response.data.status){
          dispatch(updateUser(response.data))
          toast.success("Updated successfully")
              navigate("/")
            }
            else{
              toast.error("error")
            }
          } catch (error) {
            toast.error(error)
          }
  }
  
  useEffect(()=>{
    axios.get("http://localhost:5000/verify")
    .then(res=>{
     if(res.data.status){
       setUsername(res.data.username)
        setEmail(res.data.email)
       
     }
     else {
       toast.error("User not verified")
     }
    })
   },[])
  
      return (
    <div>
    
<button onClick={()=>navigate("/")} 
      style={{background:"green", color:"whitesmoke", fontWeight:"bold"}}>
         Back home
      </button>
   <form style={{margin:"30px"}} onSubmit={update}>
         <label htmlFor="">Full name</label><br/>
        <input type="text" 
           minLength={2}
       value={username}
           onChange={(e)=>setUsername(e.target.value)}
           placeholder='Username'/>
                    <label htmlFor="">Email</label><br/>

            <input type="email" 
                      
                      value={email}
                      
                      onChange={(e)=>setEmail(e.target.value)}
                      placeholder='Email'/>
                             

               
          
                      
                       
                      <button type="submit">Update</button>
                      </form>
        
                    
           
    </div>
  )
}

export default ProfileEditUser