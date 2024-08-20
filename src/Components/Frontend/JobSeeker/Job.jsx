import React, {useState, useEffect} from 'react'
import {FaArrowAltCircleDown, FaArrowAltCircleLeft, FaArrowLeft, FaHome, FaInfoCircle, FaLevelUpAlt, FaRegQuestionCircle, FaSearchLocation} from "react-icons/fa"
import {BsThreeDots} from "react-icons/bs"

import {MdDataArray, MdLocationCity, MdOutlineLocationCity, MdReadMore, MdRecentActors, MdRecommend, MdSave, MdWork} from "react-icons/md"

import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getJob } from '../../../redux/slices/jobSlice'

function Job() {
  let {id} = useParams()
 const jobs = useSelector(state=>state.jobs.jobs)
 const [showForm, setShowForm]= useState(false)
 const dispatch = useDispatch()
  let navigate = useNavigate()
  useEffect(() => {
    const fetchJob = async ()=>{
      const response = await fetch("https://job-search-api-n5ob.onrender.com/jobs")
      const data = await response.json()
      dispatch(getJob(data))
    }
    fetchJob()
  }, [])
  
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
          const {locationThatBestDescriptionsTheJob,jobType,province, area,id,url, title, description,level,posted}=j;
            return <div key={id}>
 <p> <b>Job Title - </b><MdWork/> {title}</p>
 <p><b>Job Level - </b>{level}</p>
 <p><b>Job Type - </b>{jobType}</p>
 <p><b>{locationThatBestDescriptionsTheJob}</b></p>


 <p> <b>Job Location - </b><FaSearchLocation/> {province}, {area}</p>
 <br />
 <p> <b><FaInfoCircle/> Job description </b></p>
 <p>{description}</p>
 


                        <p><b>Posted in </b>{posted}</p>

                        <a className='btn2' href={url}>
                          Apply
                        </a>
                        <div style={{display:"flex", gap:"0.5rem"}}>
                          <button style={{background:"black",color:"lightgray"}}>

                        Save job <MdSave />
                          </button>

                          <button className='btn btn-sm btn-secondary me-2' onClick={()=>setShowForm(!showForm)} >

                                <BsThreeDots/>
                          </button>
                        </div>
                          {showForm?
                        <div >
                          <textarea placeholder='report a job post'/>
                          <button>Report</button>
                        </div>
                        :
                        null
                       
                      }
            </div>
        })
       }
    </div>
  )
}

export default Job