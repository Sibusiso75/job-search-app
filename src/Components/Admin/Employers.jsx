import React, { useEffect}from 'react'
import axios from "axios"
import {  useDispatch, useSelector } from 'react-redux'
import { getemployer } from '../../redux/slices/employerslice'
import { useNavigate } from 'react-router-dom'
import AdminNav from './AdminNav'
import { FaHome, FaPlus } from 'react-icons/fa'
function Employers() {
    let navigate = useNavigate()
    // <div className='d-flex vh-100 justify-content-center align-items-center'>
    // </div>
    
    const dispatch = useDispatch()
    const employers = useSelector(state=>state.employers.employers)

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
    <div>

            <button onClick={()=>navigate("/admin/dashboard")} 
      style={{background:"green", color:"whitesmoke", fontWeight:"bold"}}>
        <FaHome/> Back home
      </button>
      <h3>{employers.length} employers</h3>
            <table className='table'>
                <thead>
                    <tr>
                    <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Admin</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>companyName</th>
                        <th>description</th>
                        <th>province</th>
                        <th>area</th>



                        
                        {/* <th>Password</th> */}
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employers.map((employer)=>{
                            
                            return <tr key={employer.id}>
                              <td>{employer.id}</td>

                                <td>{employer.username}</td>
                                <td>{employer.email}</td>
                                <td>{employer.isAdmin}</td>
                                <td>{employer.gender}</td>
                                <td>{employer.age}</td>
                                <td>{employer.companyName}</td>
                        <td>{employer.description}</td>
                        <td>{employer.province}</td>
                        <td>{employer.area}</td>
                                {/* <td>{employer.password}</td> */}

                               <td style={{gap:"0.5rem"}}>
                                <button onClick={()=>navigate(`/employer/${employer.id}`)}className='btn btn-sm btn-secondary me-2'>Edit</button>
                                <button className='btn btn-sm btn-danger'>Delete</button>
                               </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>

        
    </div>
  )
}

export default Employers