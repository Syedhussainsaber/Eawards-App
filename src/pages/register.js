import React from 'react'
import UserForm from '@/components/Form'
import Link from 'next/link'
import { useAuth } from '@/contexts/AuthAPI'


const Register = () => {
  const {userData} = useAuth()
  return (
    <>
    <h1 className='w-50 text-left mx-auto'>Eawards</h1>
{console.log(userData)}
    <div className='register-container py-4'>
  <h2 className='text-center'>Register</h2>
<UserForm title={"Register"} phoneNumber={true} confirmPassword={true} />
<p className='text-center py-2'>Already have an account ? <Link className='text-primary text-decoration-none' href={'/'}>Login</Link> </p> 
</div>
    </>
    
  )
}

export default Register


