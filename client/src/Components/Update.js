import React from 'react'
import { useState,useEffect } from 'react'
import {useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'



function Update() {

  const {id}=useParams()
  const navigate=useNavigate()
  useEffect(()=>{
      axios.get('http://localhost:3010/view/'+id)
      .then(res=>{
          console.log(res)
          setValues({...values, name: res.data[0].name,email:res.data[0].email,phone:res.data[0].phone})
      })
      .catch(err=>console.log(err))
  },[])

 
  const [values,setValues]=useState({
    name:' ',
    email:' ',
    phone:" "
  })

  const handleUpdate=(event)=>{
    event.preventDefault()
    axios.put('http://localhost:3010/edit/'+id,values)
    .then(res=>{
      console.log(res)
      navigate("/")
    })
    .catch(err=>console.log(err))
    
  }

    
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 bg-primary'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={handleUpdate} > 

          <h1>Update</h1>
          <div className='mt-3'>
            <input type="text" placeholder='Name' className='form-control '   onChange={e=> setValues({...values,name:e.target.value})} value={values.name}/>
          </div>
          <div className='my-3'>
            <input type='email' placeholder='email' className='form-control' value={values.email}  onChange={e=> setValues({...values,email:e.target.value})}/>
          </div>
          <div className='my-3'>
          <input type="text" placeholder='Phone' className='form-control '   onChange={e=> setValues({...values,phone:e.target.value})} value={values.phone}/>

          </div>
          <div>
            <button type="submit" className='btn btn-dark'>Update</button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Update
