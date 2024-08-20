import React, {useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FaChevronRight, FaGenderless, FaGraduationCap, FaHome, FaRegSave, FaUser, FaUserAlt, FaUserCircle } from 'react-icons/fa'
import { MdDashboard, MdEmail, MdMale, MdWork, MdWorkHistory } from 'react-icons/md'
import HomeNav from './HomeNav'

function Education() {
    let {id}=  useParams() 
    let navigate = useNavigate()
    const users = useSelector(state=>state.users.users)
    const user = users.find(u=>u.id==id)
    const [username, setUsername]= useState(user.username)
    const [email, setEmail]= useState(user.email)
    const [age, setAge]= useState(user.age)
    const [gender, setGender]= useState(user.gender)
    const [isAdmin, setIsAdmin]= useState(user.isAdmin)
    const [highestQualification, setHighestQualification] = useState(user.highestQualification)


      return (
    <div>

      <h3 style={{margin:"20px"}}>Educational background</h3>
      


      
      <br />
      {/* <form style={{margin:"30px"}}>

<input type="text" 
   minLength={2}
   
   value={username}
   disabled
   onChange={(e)=>setUsername(e.target.value)}
   
   
   
   placeholder='Username'/>
    <input type="email" 
              disabled
              value={email}
              
              onChange={(e)=>setEmail(e.target.value)}
              placeholder='Email'/>
               <input type="number" 
              value={age}
              disabled
              
              onChange={(e)=>setAge(e.target.value)}
              placeholder='Age'/>
              
         <select onChange={(e)=>setGender(e.target.value)}
          placeholder='Gender' 
          disabled

          value={gender}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
              </select>
              
               
              <button onClick={()=>navigate(`editUser/${id}`)}>Edit Info</button>
              </form> */}



           
           
           
</div>
           
  )
}

export default Education