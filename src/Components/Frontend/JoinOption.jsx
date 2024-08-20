import React, {useState} from 'react'
import { BsPerson, BsPersonDash, BsPersonWorkspace } from 'react-icons/bs'
import { FaHospitalUser, FaLaptop, FaSuitcaseRolling, FaUser, FaUserAlt, FaUserAltSlash, FaUserAstronaut, FaUserCheck, FaUserCog, FaUserEdit, FaUserGraduate, FaUserInjured, FaUserMd, FaUserNurse, FaUserSecret } from 'react-icons/fa'
import { MdWork, MdWorkHistory, MdWorkOutline } from 'react-icons/md'
import { useNavigate, Link } from 'react-router-dom'

function JoinOption() {
    const [option, setOption] = useState("")
    const [optionChecked, setOptionChecked] = useState(false) 
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

let navigate = useNavigate()
function handleSubmit(e){
    e.preventDefault()
      if(option=="jobSeeker"){
        navigate("/register")
      }
     else if(option=="employer"){
        navigate("/employerSignUp")
     }
     else{
        setError(true)
        setErrorMessage("You can't choose both options. Refresh the page and choose only one option.")

     }
    
}
  return (
    <div style={{padding:"50px",margin:"50px", boxShadow:"-1px -1px 3px 1px black"
    ,width:"85%",
    display:"flex",
    flexWrap:"wrap"
    }}>
{/* <form onSubmit={handleSubmit}> */}

 <label htmlFor=""> <MdWork style={{width:"50px",fontSize:"40px"}}/> Employer</label>
<input type="radio"
style={{height:"20px"}} 
onChange={(e)=>setOption(e.target.value)}

/>
    <label htmlFor=""> <FaUserAlt style={{width:"50px",fontSize:"40px"}}/>  Job Seeker</label>
    <input type="radio" style={{height:"20px"}}   
        checked={()=>setOptionChecked(!optionChecked)}
     onChange={(e)=>setOption(e.target.value)}
     
     />
    

     <button onClick={handleSubmit}className="btn2">Join</button>
     <div >
        Already have an account? <Link style={{color:"blue"}}to="/employerLogin">login as an employer</Link>
     or <Link style={{color:"blue"}} to="/login">login as a job seeker </Link>
     </div>
     {error && <p style={{color:"red"}}>{errorMessage}</p>}
     {/* </form> */}
    {/* Already have an account?<Link style={{color:"blue"}} to="/login">login as job seeker </Link>
     or <Link style={{color:"blue"}}to="/login">Login as an employer</Link>
      */}
    </div>
  )
}

export default JoinOption