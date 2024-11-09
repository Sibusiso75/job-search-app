import React, {useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FaHome } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { getUser,updateUser } from '../../redux/slices/userslice'
import axios from 'axios'

function User() {
    const {id}=  useParams() 
    let navigate = useNavigate()
    const users = useSelector(state=>state.users.users)
    const user = users.find(u=>u.id==id)
    const [username, setUsername]= useState(user.username)
    const [email, setEmail]= useState(user.email)
   
    async function update(e){
      e.preventDefault()
      try {
          
          const response = await axios.put(`http://localhost:5000/updateUser/${id}`,{username,email})
            if(response.data.status){
              dispatch(updateUser(response.data))
              toast.success("Updated successfully")
              navigate("/admin/dashboard")
            }
            else{
              toast.error("error")
            }
      } catch (error) {
          toast.error(error)
      }
  }
    
      return (
    <div>
         <button onClick={()=>navigate("/admin/dashboard")} 
      style={{background:"green", color:"whitesmoke", fontWeight:"bold"}}>
        <FaHome/> Back home
      </button>
   <form style={{margin:"30px"}} onSubmit={update}>
      <p>Username</p>
        <input type="text" 
           minLength={2}
           required
           value={username}
           onChange={(e)=>setUsername(e.target.value)}
           
           
           
           placeholder='Username'/>
           <p>Email</p>
            <input type="email" 
                      
                      value={email}
                      required
                      onChange={(e)=>setEmail(e.target.value)}
                      placeholder='Email'/>
                     
                     {/* <p>Admin</p>
                      <select onChange={(e)=>setIsAdmin(e.target.value)}
                  value={isAdmin}>
                   <option value={isAdmin}>Yes</option>
                    <option value={!isAdmin}>No</option>
                      </select>    */}
                      <button type="submit" className='btn2'>Update</button>
                      </form>
                    
           
    </div>
  )
}

export default User