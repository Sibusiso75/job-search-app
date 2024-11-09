// import React,{useState, useEffect} from 'react'
// import { useSelector,useDispatch } from 'react-redux'
// import axios from "axios"
// import { getsavedJob } from '../../../../redux/slices/savedJobsSlice'
// import { userLoggedIn } from '../../../../redux/slices/userslice'
// import { toast } from 'react-toastify'

// function SavedJobs() {
//     const savedJobs = useSelector(state=>state.savedJobs.savedJobs)
//     const dispatch = useDispatch()
//     const [id, setId] = useState("")
//     const [username, setUsername] = useState("")

//     useEffect(()=>{
//   axios.get("http://localhost:5000/verify")
//   .then(res=>{
//    if(res.data.status){
//      dispatch(userLoggedIn(res.data.status))
//      setId(res.data.id)
//      setUsername(res.data.username)

//    }
//    else {
//      toast.error("User not verified")
//    }
//   })
//  },[])
//  useEffect(()=>{
//     try {
//         const fetchSavedJobs = async ()=>{
//             const res = await axios.get("http://localhost:5000/mysaveJobs")
//             dispatch(getsavedJob(res.data))
            
//     }
//         fetchSavedJobs()
//     } catch (error) {
//         console.log(error)
//     }
//  })
//   return (
//     <div>
//         {
//             savedJobs.map((s)=>{
//                 return <JobProps key={s.id} {...s}/>
//             })
//         }
//     </div>
//   )
// }

// export default SavedJobs