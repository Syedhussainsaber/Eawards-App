
import React, {useEffect} from 'react'
import { useRouter } from 'next/router'
import { useData } from '@/contexts/DataApi'
import Footer from '@/components/Footer'
import handle from '../api/upcomings/[upcomings]'

const Year = () => {
    
  const router = useRouter()
const {handleActive} = useData()


useEffect(()=>{
if(router.asPath.includes("awardWinners")){
  handleActive("award")
}
},[])


  return (
  <>
<div style={{position:'relative', top:'160px'}}>
<h2>{router.query.year} Winners</h2>
<Footer/>
</div>
  </>
  )
}

export default Year
