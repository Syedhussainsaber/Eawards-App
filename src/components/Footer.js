import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
<>
<div style={{backgroundColor:"#000080"}} className="footer-container w-100 d-flex align-items-center justify-content-center py-2">
<p className='text-center text-white align-self-center pt-2'>CopyRights Reserved For  <Link href={'/'} className='text-decoration-none' >Eawards</Link></p>
</div>
</>
  )
}

export default Footer
