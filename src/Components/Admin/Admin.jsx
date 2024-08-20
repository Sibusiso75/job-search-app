import React from 'react'
import AdminNav from './AdminNav'
import Users from './Users'

function Admin() {
  return (
    <div className='d-flex'>
        <AdminNav/>
       <Users/>
    </div>
  )
}

export default Admin