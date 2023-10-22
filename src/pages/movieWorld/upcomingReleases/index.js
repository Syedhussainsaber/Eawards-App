import React,{useEffect} from 'react'
import MovieCard from '@/components/MovieCard'
import { Pagination } from 'antd'
import { useRouter } from 'next/router'
import Navbar from '@/components/Navbar'
import { useData } from '@/contexts/DataApi'
import Footer from '@/components/Footer'
const UpComing = ({upcomingMovies}) => {
const router = useRouter()
const {handleActive} = useData()

useEffect(()=>{
  if(router.asPath.includes("movieWorld"))
  {
    handleActive("world")
  }
 
  },[])

  
  return (
    <>
    <Navbar/>
    <div style={{position:'relative', top:'160px'}}>
      {console.log(upcomingMovies)}
      <h2 className='text-center my-4'>Upcoming Movies</h2>
      <div className="movies w-75">

{
  upcomingMovies?.results.map((item,index)=>{
    if(item.poster_path){
      return <MovieCard id={item.id} type={'movie'} img={"https://image.tmdb.org/t/p/w500/"+item.poster_path} title={item.title} description={''} key={index} />
    }


  })
}
</div>
  
    <div className="pagination w-100 my-2">
    <Pagination className='my-4 m-auto' defaultCurrent={1} total={50} onChange={(pageNumber,pageSize)=>{
router.replace(`/movieWorld/upcomingReleases/${pageNumber}`)
}}/>
    </div>
    <Footer/>
    </div>
    </>
  )
}

export default UpComing


export const getServerSideProps = async()=>{
      
     const res = await fetch(`http://localhost:3000/api/upcomings/1`)
      const upcomingMovies = await res.json()

      return {
        props:{
            upcomingMovies
        }
      }
}