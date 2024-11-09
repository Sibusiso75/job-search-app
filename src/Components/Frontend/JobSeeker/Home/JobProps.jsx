// import React, {useState, useEffect} from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import axios from "axios"
// import { useDispatch, useSelector } from 'react-redux'
// import {MdLocalActivity, MdLocationCity, MdSave} from "react-icons/md"
// import { toast } from 'react-toastify'
// import {BsThreeDots, BsThreeDotsVertical} from "react-icons/bs"
// import { saveJob } from '../../../../redux/slices/savedJobsSlice'
// import { userLoggedIn } from '../../../../redux/slices/userslice'

// import { FaLongArrowAltDown, FaSearchLocation } from 'react-icons/fa'

// function JobProps({id, title, createdAt, province, area}) {
//     const [showSave, setShowSave]= useState(false)
//     const [alertBox, setAlertBox] = useState(false)
//     const loggedIn = useSelector(state=>state.users.loggedIn)
//     const [username, setUsername] = useState("")
//     const [email, setEmail] = useState("")
//     const [userId, setUserId] = useState("")    

    
    
//     const dispatch= useDispatch()
    
//     let navigate = useNavigate()

// function goToLogin(){
//   navigate("/login")
// }
// useEffect(()=>{
//   axios.get("http://localhost:5000/verify")
//   .then(res=>{
//    if(res.data.status){
//      dispatch(userLoggedIn(res.data.status))
//      setUsername(res.data.username)
//      setEmail(res.data.email)
//      setUserId(res.data.id)
//    }
//   })
//  },[])
//     async function save(e){
//       e.preventDefault()
//       try {
//         const response = await axios.post("http://localhost:5000/save-job",{
//           userId,username,title,numberOfPeopleToHire,description,jobLocation,reside,jobUrl,province,area,jobType,
//           username})
//         if(response.data.status){
//           dispatch(saveJob(response.data))
//           toast.success(response.data.message)
//         }
//         else {
//           navigate("/login")
//         }
//       } catch (error) {
//         toast.error(error)
//       }
//     }
  

    
    
//   return (
//       <div className='itemsContainer'>
//           <div  style={{display:"flex", flexDirection:"column"}}  onClick={()=>navigate(`/job/${id}`)}>
//                         <p>Job title - <b>{title}</b></p>
//                         <p>Posted in {createdAt}</p>
//                         <p><FaSearchLocation/>{province}, {area}</p>

                       
//                       </div>
//                       <div style={{display:"flex", justifyContent:"flex-end"}}>

//                          <BsThreeDotsVertical style={{fontSize:"25px"}} onClick={()=>setShowSave(!showSave)} /> 
                      
//                        {showSave?
//                         <div>
//                            <button onClick={loggedIn?save:loggedIn} style={{background:"black",color:"white"}}> Save job<MdSave/></button>
//                       </div>:null}  

//                           </div>
//                     </div>
               
//   )
// }

// export default JobProps