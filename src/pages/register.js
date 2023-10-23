import React from 'react'
import UserForm from '@/components/Form'
import Link from 'next/link'
import { useAuth } from '@/contexts/AuthAPI'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const Register = () => {
  const {userData} = useAuth()
  return (
    <>
    <Navbar/>
    <div style={{position:'relative',top:'170px'}}>
    <h1 className='w-50 text-left mx-auto' >Eawards</h1>
{console.log(userData)}
    <div className='register-container py-4'>
  <h2 className='text-center'>Register</h2>
<UserForm title={"Register"} phoneNumber={true} confirmPassword={true} />
<p className='text-center py-2'>Already have an account ? <Link className='text-primary text-decoration-none' href={'/'}>Login</Link> </p> 
</div>
<Footer/>
</div>
    </>
    
  )
}

export default Register


