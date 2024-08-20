import React, { useState,useEffect}from 'react'
import axios from "axios"
import {  useDispatch, useSelector } from 'react-redux'
import { getemployer } from '../../../../redux/slices/employerslice'
import { useNavigate,useParams } from 'react-router-dom'
import { FaHome, FaPlus, FaUserCircle } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

function EmployerProfile() {
    let {id}=  useParams() 
    let navigate = useNavigate()
    // <div className='d-flex vh-100 justify-content-center align-items-center'>
    // </div>
    
    const dispatch = useDispatch()
    const employers = useSelector(state=>state.employers.employers)
    const employer = employers.find(emp=>emp.id==id)
    
    const [username, setUsername]= useState(employer.username)
    const [email, setEmail]= useState(employer.email)
    const [companyName, setCompanyName]= useState(employer.companyName)
    const [province, setProvince]= useState(employer.province)
    const [area, setArea]= useState(employer.area)
    const [description, setDescription]= useState(employer.description)
    const [age, setAge]= useState(employer.age)
    const [gender, setGender]= useState(employer.gender)









  useEffect(() => {
           const fetchData = async ()=>{
    try {
        
        const response = await axios.get("http://localhost:5000/employers")
         dispatch(getemployer(response.data))
    } catch (error) {
            console.log(error)
        }
    
       }
       fetchData()
     }, [])
  return (
    <div className='d-flex'>
      <div style={{margin:"30px"}}>

            <button onClick={()=>navigate("/employerHome")} 
      style={{background:"green", color:"whitesmoke", fontWeight:"bold"}}>
        <FaHome/> Back home
      </button>
      <div style={{margin:"30px"}}>

       
        
<h2>Profile</h2>
<div className="d-grid me-2">
<p>Fullname - <FaUserCircle/> {username} </p>
<p>Email - <MdEmail/> {email}</p>
<p> age - {age}</p>
<p> gender - {gender}</p>
<p> companyName - {companyName}</p>
<p> province - {province}</p>
<p> area - {area}</p>
<p> description - {description}</p>

</div>
<button onClick={()=>navigate(`editEmployer/${id}`)}>Edit Info</button>
</div>       
                  

                            
          </div>
    </div>
  )
}

export default EmployerProfile