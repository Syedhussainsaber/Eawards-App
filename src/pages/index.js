import React, { useEffect } from 'react'
import UserForm from '@/components/Form'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { useRouter } from 'next/router'
import Head from 'next/head'

const Login = () => {

  const router = useRouter()

  
  useEffect(()=>{
    if(router.route === '/'){
      router.replace("/home")
    }
  },[])
  

  return (
 <>
    <Head>
        <title>Eawards App - The Movie Review and Rating Platform</title>
        <meta name="description" content="Best Movie Review and Rating platform of India" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
 <div style={{position:'relative',top:'180px'}} >
 <h1 className='col-12 col-sm-6 text-center text-sm-start mx-auto'>Eawards</h1> 
 <div className="login-container py-4">
 <h2 className='text-center'>Login</h2>
<UserForm title={"Login"} phoneNumber={false} confirmPassword={false}/>

<p className='text-center py-2'>Not have an account ? <Link className='text-primary text-decoration-none' href={'/register'}>Create here</Link> </p> 
 </div>

<Footer/>
 </div>
  
 </>
  )
}

export default Login
