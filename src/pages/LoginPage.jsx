import React from 'react'
import { Header } from '../components/Header'
import FormTemplate from '../components/FormTemplate'

const LoginPage = () => {
  return (
   <>
      <Header title="Login"/>
      <FormTemplate isRegistered={false} />
   
   </>
  )
}

export default LoginPage