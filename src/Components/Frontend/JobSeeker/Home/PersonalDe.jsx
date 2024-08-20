import React, {useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FaChevronRight, FaEdit, FaGenderless, FaGraduationCap, FaHome, FaInfo, FaInfoCircle, FaPhone, FaPlusSquare, FaProjectDiagram, FaRProject, FaRegEdit, FaSearchLocation, FaUserAlt, FaUserCircle, FaUserEdit } from 'react-icons/fa'
import { MdDashboard, MdEmail, MdMale, MdWorkHistory } from 'react-icons/md'
import { BsCodeSlash } from 'react-icons/bs'

function PersonalDe() {
    let {id}=  useParams() 
    let navigate = useNavigate()
    const users = useSelector(state=>state.users.users)
    const user = users.find(u=>u.id==id)
    const [username, setUsername]= useState(user.username)
    const [email, setEmail]= useState(user.email)
    const [age, setAge]= useState(user.age)
    const [gender, setGender]= useState(user.gender)
    const [highestQualification, setHighestQualification] = useState(user.highestQualification)
    const [suburb, setSuburb]= useState(user.suburb)
    const [province, setProvince]= useState(user.province)
    const [postalCode, setPostalCode]= useState(user.postalCode)

    const [phoneNumber, setPhoneNumber]= useState(user.phoneNumber)


      return (
    <div className='d-flex'>
        <div style={{margin:"30px"}}>

        <div className="d-flex">
          </div><FaUserCircle style={{fontSize:"150px"}}/>
      <h1> {username}</h1>
     
      <div style={{display:"flex",gap:"0.2rem", flexDirection:"column",width:"90%",margin:"2px",paddingTop:"10px", flexWrap:"wrap"}}>
        <div style={{padding:"2.2%"}}> <MdEmail/> {email}  </div>
        <div style={{padding:"2.2%"}}> {age} </div>
        <div style={{padding:"2.2%"}}>   <MdMale/> {gender}  </div>
        <div style={{padding:"2.2%"}}> <FaSearchLocation/> {suburb}, {province}, {postalCode}</div>
        <div style={{padding:"2.2%"}}>  <FaPhone/>  +{phoneNumber}  </div>
        <div style={{padding:"2.2%"}}>   {user.jobTitle}      <FaEdit onClick={()=>navigate(`editUser/${id}`)}/>
 </div>

    
      </div>
      <br/>
      <div>
      <h3 style={{width:"fit-content",borderBottom:"3px double black"}}>About me <FaInfoCircle/></h3>
    <div>I am a highly motivated web developer skilled in both frontend and backend technologies  <FaEdit/>
    </div>
        
      </div>
      <br />
      <div>
        <h3 style={{width:"fit-content",borderBottom:"3px double black"}}>Skills <BsCodeSlash/> </h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          Add skill <FaPlusSquare/>

        </ul>
      </div>
      <br />
   <div>
   <h3>Work history <MdWorkHistory/></h3>
   <p>Frontend developer at ClearScore</p>
   <p>Year: 2024 - present</p>
   <button>Add <FaPlusSquare/></button>

   </div>
   <br />
   <div>
    <h3>Educational background <FaGraduationCap/></h3>
    
   </div>
   <div>
    <h3>Work samples <FaProjectDiagram/></h3>
   </div>

           
           
           
</div>
    </div>
  )
}

export default PersonalDe