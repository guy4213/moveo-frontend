import React from 'react'
import { Header } from '../components/Header'
import FormTemplate from '../components/FormTemplate'
import { useNavigate } from 'react-router-dom'

const RegisterPage = () => {
  const nav=useNavigate();
  return (
    <>
   <Header title="Register"/>
   <FormTemplate isRegistered={true} route="/login"/>
   <div className='mt-1 mx-[9vw]'> 
    <span >already have a user? log in </span>
    <button className='text-blue-700' 
       onClick={()=>nav('/login')}>here</button>
      </div>
   </> 
  )
}

export default RegisterPage