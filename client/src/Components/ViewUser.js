import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function ViewUser() {
    const {id}=useParams()
    const [user,setUser]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:3010/view/'+id)
        .then(res=>{
            console.log(res)
            setUser(res.data[0])
        })
        .catch(err=>console.log(err))
    })
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 bg-primary'>
      <div className='w-50 bg-white rounded p-3'>
        <div className='p-2'>
          <h2 className='fst-italic'>User Details</h2>
          <h2>{user.id}</h2>
          <h2>{user.name}</h2>
          <h2>{user.email}</h2>
          <h2>{user.phone}</h2>

        </div>
        
        <Link to="/" className="btn btn-info">Back</Link>
        <Link to={`/Edit/${user.id}`} className="btn btn-info mx-3">Edit</Link>
      </div>
    </div>
  )
}

export default ViewUser
