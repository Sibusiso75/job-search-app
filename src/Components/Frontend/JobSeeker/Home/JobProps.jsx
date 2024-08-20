import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import axios from "axios"
import {MdLocalActivity, MdLocationCity, MdSave} from "react-icons/md"
import { toast } from 'react-toastify'
import {BsThreeDots, BsThreeDotsVertical} from "react-icons/bs"
import { FaLongArrowAltDown, FaSearchLocation } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'

function JobProps({id, title, posted, level,province, area}) {
    const [showSave, setShowSave]= useState(false)
    // const loggedIn = useSelector(state=>state.users.loggedIn)
  // const [verifiedUserId, setVerifiedUserId] = useState(null)
    

    
    
    // const dispatch= useDispatch()
    
    let navigate = useNavigate()

    // async function saveJob(e){
    //   e.preventDefault()
    //   try {
    //     const response = await axios.post("http://localhost:5000/save-job",{userId:verifiedUserId,title,posted,province, area})
    //     if(response.data.status===true && loggedIn==true){
    //       dispatch(saveJob(response.data))
    //       toast.success(response.data.message)
    //     }
    //     else {
    //       navigate("/login")
    //     }
    //   } catch (error) {
    //     toast.error(response.data.error)
    //   }
    // }
    // useEffect(() => {
    //   const verify = async ()=>{
    //   const response = await axios.get("http://localhost:5000/verify")
    //   if(response.data.status){
    //     dispatch(loggedIn(true))
    //     setVerifiedUserId(response.data.userId)
    //   }
    //   }
    //   verify()
    // }, [])

    function save(){
      // toast.success("Job has been saved")
    }
    
  return (
    <div>
      
       <div
                      
                     className='itemsContainer'>
          <div onClick={()=>navigate(`/job/${id}`)}>
                        <p><b>Job Title - </b>{title}</p>
                        <p><b>Posted in </b>{posted}</p>
                        <p><b><FaSearchLocation/>{province}</b> - {area}</p>

                       
                      </div>
                      <div style={{display:"flex", justifyContent:"flex-end"}}>

                        <BsThreeDotsVertical style={{fontSize:"25px"}} onClick={()=>setShowSave(!showSave)} />
                      
                      {showSave?
                        <div>
                           <button onClick={save} style={{background:"black",color:"white"}}> Save job<MdSave/></button>
                        </div>:null}
                          </div>
                    </div>
               
        </div>
  )
}

export default JobProps