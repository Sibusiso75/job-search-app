import React, {useEffect} from 'react'
import AdminNav from './AdminNav'
import { useDispatch, useSelector } from 'react-redux'
import { getReport } from '../../redux/slices/reportSlice'

function Reports() {
 const dispatch = useDispatch()
 const reports = useSelector(state=>state.reports.reports)

 useEffect(() => {
   const fetchReports = async ()=>{
    const response = await fetch("http://localhost:5000/reports")
    const data = await response.json()
    dispatch(getReport(data))
   }
   fetchReports() 
 }, [])
 
  return (
    <div style={{display:"flex"}}>
        <AdminNav/>
    <div>
      
        <table className="table">
            <thead>
                
                <tr>
                <th>Report number</th>
                <th>Username</th>
                <th>Email</th>
                <th>Job Title</th>
                <th>Job description</th>

                    <th>Report message</th>
                <th>Date reported</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    reports.map((r)=>{
                        const {id,username,description, report, email, posted,title}=r
                        return <tr key={id}>
                        <td>{id}</td>
                            <td>{username}</td>
                            <td>{email}</td>
                            <td>{title}</td>
                            <td>{description}</td>
                            <td>{report}</td>
                            <td>{posted}</td>

                           <td>
                            <button  className='btn btn-sm btn-danger'>Delete</button>
                           </td>
                        </tr>
                    })
                }
            </tbody>
        </table>

    </div>
</div>
  )
}

export default Reports