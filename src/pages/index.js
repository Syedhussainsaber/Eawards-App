import React, { useEffect } from 'react'
import UserForm from '@/components/Form'
import Link from 'next/link'


const Login = () => {


  return (
 <>
   <h1 className='w-50 text-left mx-auto'>Eawards</h1> 
 <div className="login-container py-4">
 <h2 className='text-center'>Login</h2>
<UserForm title={"Login"} phoneNumber={false} confirmPassword={false}/>

<p className='text-center py-2'>Not have an account ? <Link className='text-primary text-decoration-none' href={'/register'}>Create here</Link> </p> 
 </div>

 </>
  )
}

export default Login
