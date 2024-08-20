import React, {useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FaHome } from 'react-icons/fa'

function ProfileEditUser() {
    let {id}=  useParams() 
    let navigate = useNavigate()
    const users = useSelector(state=>state.users.users)
    const user = users.find(u=>u.id==id)
    const [email, setEmail]= useState(user.email)
    const [age, setAge]= useState(user.age)
    const [gender, setGender]= useState(user.gender)



   
    const [username, setUsername]= useState(user.username)
    
      return (
    <div>
         <button onClick={()=>navigate(`/profile/${id}`)} 
      style={{background:"green", color:"whitesmoke", fontWeight:"bold"}}>
        <FaHome/> Back home
      </button>
   <form style={{margin:"30px"}}>
         <label htmlFor="">Full name</label><br/>
        <input type="text" 
           minLength={2}
           required
           value={username}
           onChange={(e)=>setUsername(e.target.value)}
           placeholder='Username'/>
                    <label htmlFor="">Email</label><br/>

            <input type="email" 
                      
                      value={email}
                      required
                      onChange={(e)=>setEmail(e.target.value)}
                      placeholder='Email'/>
                               <label htmlFor="">Age</label><br/>

                       <input type="number" 
                      value={age}
                      
                      required
                      onChange={(e)=>setAge(e.target.value)}
                      placeholder='Age'/>
                               <label htmlFor="">Gender</label><br/>

                 <select onChange={(e)=>setGender(e.target.value)}
                  placeholder='Gender' 
                  
                  value={gender}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                      </select>
                      
                       
                      <button type="submit">Update</button>
                      </form>
                    
           
    </div>
  )
}

export default ProfileEditUser