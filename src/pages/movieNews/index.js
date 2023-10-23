import React, { useEffect } from 'react'
import { Dropdown, Button } from 'antd'
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/router';
import { useData } from '@/contexts/DataApi';

const MovieNews = ({movieNews}) => {
    const items = [
        {
          key: '1',
          label: (
            <Link  href="/movieNews/bollywood" className='text-decoration-none'>
Bollywood
            </Link>
          ),
        },
        {
          key: '2',
          label: (
            <Link  href="/movieNews/tollywood" className='text-decoration-none'>
Tollywood
            </Link>
          ),
        },
        {
          key: '3',
          label: (
            <Link  href="/movieNews/kollywood" className='text-decoration-none'>
Kollywood
            </Link>
          ),
        },
          {
            key: '4',
            label: (
              <Link  href="/movieNews/mollywood" className='text-decoration-none' >
Mollywood
              </Link>
            ),
          },
          {
            key: '5',
            label: (
              <Link  href="/movieNews/hollywood" className='text-decoration-none'>
Hollywood
              </Link>
            ),
          },
      ];
const router = useRouter()
const {handleActive} = useData()
useEffect(()=>{
if(router.asPath.includes("/movieNews")){
handleActive("news")
}
},[])

  return (
    <div className='w-100'>
        <Navbar/>
        <div style={{position:'relative', top:"160px"}}>

      
        <h2 className='text-center fs-2 my-4'>Movie News</h2>
        <div className="my-4 d-flex w-75 mx-auto flex-row align-items-center justify-content-end">
        <Dropdown
        menu={{
          items,
        }}
        placement="bottomLeft"
      >
        <Button size="middle" type='primary'>Select News</Button>
      </Dropdown>
        </div>
    
      {
        movieNews?.articles?.map((news,index)=>{
 return <div className="news-section w-75  m-auto mb-5">
 <h3 className='fs-2 text-center text-md-start lh-base'>{index+1}. {news.title}</h3>
 <div className="d-flex w-100 flex-column flex-md-row justify-content-center justify-content-md-start gap-3 align-items-center align-items-md-start">
 <img src={news.urlToImage} className='p-2' width={'270px'} height={'300px'} alt={news.title} />
 <p className='w-75 text-center text-md-center fs-5'>{news?.description}</p>
</div>
 </div> 
        })
    }
   
    <Footer/>
    </div>
    </div>
  )
}

export default MovieNews



export const getServerSideProps= async(context)=>{
    const {query} = context
const response = await fetch(`http://eawards.vercel.app/api/movieNews/${'movies'}`,{ cache: 'force-cache' })
const movieNews = await response.json()

return {
    props:{
        movieNews
    }
}
}