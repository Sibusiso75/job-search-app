import React, { useEffect}from 'react'
import axios from "axios"
import {  useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../redux/slices/userslice'
import { useNavigate } from 'react-router-dom'
import AdminNav from './AdminNav'
function Users() {
    let navigate = useNavigate()
    // <div className='d-flex vh-100 justify-content-center align-items-center'>
    // </div>
    
    const dispatch = useDispatch()
    const users = useSelector(state=>state.users.users)

  useEffect(() => {
           const fetchData = async ()=>{
    try {
        
        const response = await axios.get("http://localhost:5000/users")
         dispatch(getUser(response.data
            ))
    } catch (error) {
            console.log(error)
        }
    
       }
       fetchData()
     }, [])
  return (
    <div className='d-flex'>
         <div>

<div style={{margin:"10px"}}>
<h3>{users.length} users</h3>
</div>
            <table className='table'>
                <thead>
                    <tr>
                    <th>ID</th>

                        <th>Name</th>
                        <th>Email</th>
                        <th>Admin</th>
                        <th>Gender</th>
                        <th>Age</th>
                        {/* <th>Password</th> */}
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user)=>{
                            
                            return <tr key={user.id}>
                              <td>{user.id}</td>

                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.isAdmin}</td>
                                <td>{user.gender}</td>
                                <td>{user.age}</td>
                                {/* <td>{user.password}</td> */}

                               <td>
                                <button onClick={()=>navigate(`/user/${user.id}`)}className='btn btn-sm btn-secondary me-2'>Edit</button>
                                <button className='btn btn-sm btn-danger'>Delete</button>
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

export default Users