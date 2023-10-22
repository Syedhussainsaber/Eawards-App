import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const blogs = () => {
  return (
<>
<Navbar/>
<div style={{position:'relative', top:'150px'}}>
<h2 className='text-center'>Blogs</h2>
<Footer/>
</div>
</>
  )
}

export default blogs
