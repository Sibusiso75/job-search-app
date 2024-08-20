import React, {useState, useEffect} from 'react'
import {FaHome, FaPlus} from "react-icons/fa"
import AdminNav from './AdminNav'
import { getJob } from '../../redux/slices/jobSlice'
import {  useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
function AllJobs() {
    const dispatch = useDispatch()
    const jobs = useSelector(state=>state.jobs.jobs)
    let navigate = useNavigate()
    useEffect(() => {
      const fetchData = async ()=>{
try {
   
   const response = await fetch("http://localhost:5000/jobs")
   const jobsData = await response.json()
   dispatch(getJob(jobsData))
} catch (error) {
       console.log(error)
   }

  }
  fetchData()
}, [])
 
  return (
    <div className='d-flex' >
        <AdminNav/>
        {/* <h2 style={{textAlign:"center"}}>{jobs.length} jobs</h2> */}
       <div>

          <div style={{margin:"10px"}}>
<button onClick={()=>navigate("/admin/addJob")} 
className='btn btn-sm btn-success'>
  Add new job <FaPlus/>
</button>
</div>
          <table className='table'>

                <thead >
                    <tr>
                        <th >ID</th>
                        <th >Title</th>
                        <th>Level</th>
                        <th>Description</th>
                        <th>posted</th>
                        <th>Link</th>
                        <th>Number of People to hire</th>
                        <th>Which option best describes this job's location?</th>
                        <th>Are employees required to reside in a specific location?</th>
                        <th>Job type</th>
                        <th>Location</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
       jobs.map((j)=>{
          const {id,EmployeesResideInJoblocation, title,jobType,numberOfPeopleToHire,locationThatBestDescriptionsTheJob, description,level, posted,url, province, area}=j;
            return <tr key={id} >

<td>{id}</td>
<td>{title}</td>
<td>{level}</td>
<td>{description}</td>
<td>{posted}</td>
<td>{url}</td>
<td>{numberOfPeopleToHire}</td>
<td>{locationThatBestDescriptionsTheJob}</td>
<td>{EmployeesResideInJoblocation}</td>
<td>{jobType}</td>
<td >{province}, {area}</td>


<td style={{display:"flex",gap:"0.5rem"}}>
<button onClick={()=>navigate(`/editJob/${id}`)}className='btn btn-sm btn-secondary me-2'>Edit</button>
                                <button className='btn btn-sm btn-danger'>Delete</button>
</td>
            </tr>
        })
      }
                </tbody>
            </table>

        
      {/* <button onClick={()=>navigate("/admin")} 
      style={{background:"green", color:"whitesmoke", fontWeight:"bold"}}>
      <FaHome/> Back home
    </button> */}
      {/* <h2>Job</h2>
      <button onClick={()=>navigate("/admin/addJob")} 
      style={{background:"green", color:"whitesmoke", fontWeight:"bold"}}>
      <FaPlus/> Add new job
    </button> */}
       
    </div>
    </div>
  )
}

export default AllJobs