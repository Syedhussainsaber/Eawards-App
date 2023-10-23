import React from 'react'
import UserForm from '@/components/Form'
import Link from 'next/link'
import { useAuth } from '@/contexts/AuthAPI'


const Register = () => {
  const {userData} = useAuth()
  return (
    <>

    <div style={{position:'relative',top:'170px'}}>
    <h1 className='col-12 col-sm-6 text-center text-sm-start mx-auto' >Eawards</h1>
{console.log(userData)}
    <div className='register-container py-4'>
  <h2 className='text-center'>Register</h2>
<UserForm title={"Register"} phoneNumber={true} confirmPassword={true} />
<p className='text-center py-2'>Already have an account ? <Link className='text-primary text-decoration-none' href={'/'}>Login</Link> </p> 
</div>

</div>
    </>
    
  )
}

export default Register


