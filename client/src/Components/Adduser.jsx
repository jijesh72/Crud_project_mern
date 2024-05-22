import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Adduser() {
  const [values,setValues]=useState({
    name:"",
    email:"",
    phone:""
  })
  const navigate=useNavigate()
  const handlessubmit=(e)=>{
    e.preventDefault()
    if(values.phone.length!==10){
      alert("Phone number must be in 10 letters")
    }
    else{
      axios.post("http://localhost:3010/Add",values)
      .then(res=>{
        
          navigate('/')
       
      })
      .catch(err=>console.log(err)) 
    }
    
  }
    
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary  vh-100'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={handlessubmit} className=''> 
          <h2>Create New User</h2>
          <div className='mt-2'>
            <input type="text" placeholder='Name' className='form-control'required onChange={e=> setValues({...values,name:e.target.value})} />
          </div>
          <div className='mt-2'>
            <input type='email' placeholder='email' className='form-control' required onChange={e=> setValues({...values,email:e.target.value})}/>
          </div>
          <div className='mt-2'>
            <input type='text' placeholder='Phone_number' className='form-control' required onChange={e=> setValues({...values,phone:e.target.value})}/>
          </div>
          <div className='mt-2'>
            <button className='btn btn-success' type="submit" >Submit</button>
          </div>
          
         
        </form>
        </div>
      </div>
  )
}

export default Adduser
