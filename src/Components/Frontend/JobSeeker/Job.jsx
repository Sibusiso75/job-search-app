import React, {useState, useEffect} from 'react'
import {FaArrowAltCircleDown, FaArrowAltCircleLeft, FaArrowLeft, FaHome, FaInfoCircle, FaLevelUpAlt, FaRegQuestionCircle, FaSearchLocation} from "react-icons/fa"
import {BsThreeDots} from "react-icons/bs"

import {MdDataArray, MdLocationCity, MdOutlineLocationCity, MdReadMore, MdRecentActors, MdRecommend, MdSave, MdWork} from "react-icons/md"

import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getJob } from '../../../redux/slices/jobSlice'
import axios from "axios"
import { userLoggedIn } from '../../../redux/slices/userslice'
import { toast } from 'react-toastify'

function Job() {
  const loggedIn = useSelector(state=>state.users.loggedIn)

  let {id} = useParams()
 const jobs = useSelector(state=>state.jobs.jobs)
 const [showForm, setShowForm]= useState(false)
 const [username, setUsername] = useState("")
 

 const dispatch = useDispatch()
//  https://job-search-api-n5ob.onrender.com - Production
// http://localhost:5000 -
  let navigate = useNavigate()

 
  useEffect(() => {
    const fetchJob = async ()=>{
      const response = await fetch("https://job-search-api-n5ob.onrender.com/allJobs")
      const data = await response.json()
      dispatch(getJob(data))
    }
    fetchJob()
  }, [])
  // async function save(e){
  //   e.preventDefault()
  //   try {
  //     const response = await axios.post("http://localhost:5000/save-job",{
  //       title,numberOfPeopleToHire,description,jobLocation,reside,jobUrl,province,area,jobType,
  //       username})
  //     if(response.data.status){
  //       dispatch(saveJob(response.data))
  //       toast.success(response.data.message)
  //     }
  //     else {
  //       navigate("/login")
  //     }
  //   } catch (error) {
  //     toast.error(error)
  //   }
  // }

  
  
  return (
    <div style={{margin:"30px"}}>
      <button onClick={()=>navigate("/")} 
      className='btn btn-sm btn-secondary me-2'>
        <FaArrowAltCircleLeft/> 
      </button>
     <br /><br />
       {
      jobs.filter((job)=>{
        return job.id==id
      })
      .map((j)=>{
          const {jobType,province, area,id,jobUrl, title, description}=j;
            return <div key={id} style={{display:"flex", flexDirection:"column"}}>
 <p> <b>Job Title - </b><MdWork/> {title}</p>
 <p><b>Job Type - </b>{jobType}</p>
 <p> <b>Job Location - </b><FaSearchLocation/> {province}, {area}</p>
 <p>{j.jobLocation}</p>


 <br />
 <p> <b><FaInfoCircle/> Job description </b></p>
 <ul>
 <li style={{width:"75%"}}>{description}</li>
 </ul>
 
                        <p><b>Posted in </b>{j.createdAt}</p>

                       
                          <a className='btn2' href={jobUrl}>
                          Apply
                        </a>
      
                        {/* <div style={{display:"flex", gap:"0.5rem"}}>
                          <button onClick={save} style={{background:"black",color:"lightgray"}}>

                        Save job <MdSave />
                          </button>

                          <button className='btn btn-sm btn-secondary me-2' onClick={()=>setShowForm(!showForm)} >

                                <BsThreeDots/>
                          </button>
                        </div> */}
                          {/* {showForm?
                        <div >
                          <textarea placeholder='report a job post'/>
                          <button>Report</button>
                        </div>
                        :
                        null
                       
                      } */}
            </div>
        })
       }
    </div>
  )
}

export default Job