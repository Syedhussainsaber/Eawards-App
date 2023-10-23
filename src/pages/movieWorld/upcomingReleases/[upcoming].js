import React,{useEffect} from 'react'
import { useRouter } from 'next/router'
import MovieCard from '@/components/MovieCard'
import Footer from '@/components/Footer'
import { Pagination } from 'antd'

import { useData } from '@/contexts/DataApi'


const UpcomingMovies = ({upcomingMovies}) => {
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

        <div className='w-100' style={{position:'relative', top:'160px'}}>
      {console.log(upcomingMovies)}
      <h2 className='text-center my-4'>Upcoming Movies</h2>
      <div className="movies w-75">
{
  upcomingMovies?.results.map((item,index)=>{
    if(item.poster_path){
      return <MovieCard type={'movie'} id={item.id} img={"https://image.tmdb.org/t/p/w500/"+item.poster_path} title={item.title} description={''} key={index} />
    }
  })
}
</div>

<div className="pagination w-100 my-2">
<Pagination className='my-4 mx-auto' defaultCurrent={router?.query?.upcoming <=5 ? router?.query?.upcoming : 1} total={50} onChange={(pageNumber,pageSize)=>{
router.replace(`/movieWorld/upcomingReleases/${pageNumber}`)
}}/>
</div>
<Footer/>
</div>
    </>
       )
  
}

export default UpcomingMovies

export const getServerSideProps = async(context)=>{
    const {query} = context
      
      try{
        if(query.upcoming <= parseInt('5') && !isNaN(parseInt(query.upcoming))){


        const res = await fetch(`http://eawards.vercel.app/api/upcomings/${query.upcoming}`)
        const upcomingMovies = await res.json()
        return {
            props:{
                upcomingMovies
            }
          }
        }
        else{
            const result = await fetch(`http://eawards.vercel.app/api/upcomings/1`)
            const upcomingMovies = await result.json()
            return {
              props:{
            upcomingMovies,
              }
            }
        }
      }
      catch(err){
console.log(err)
      }
     

     



}