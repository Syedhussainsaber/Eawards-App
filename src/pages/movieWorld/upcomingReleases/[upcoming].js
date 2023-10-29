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
<Pagination className='my-4 mx-auto' defaultCurrent={upcomingMovies.page} pageSize={20}  total={upcomingMovies.total_results} onChange={(pageNumber,pageSize)=>{
router.replace(`/movieWorld/upcomingReleases/${pageNumber}`)
}}/>
</div>
<Footer/>
</div>
    </>
       )
  
}

export default UpcomingMovies


export const getStaticPaths = async()=>{
try{
  // const response = await fetch(`https://eawards.vercel.app/api/upcomings/1`,{
  //           cache:"force-cache"
  //       })
        // const upcomings = await response.json()
//         const upcomingsPages = Array.from({ length: 3 }, (_, index) => index + 1);
// const paths  = upcomingsPages?.map((page,id)=>{
// return {
//     params:{
// upcoming:`${page}`
//     }
// }
// })
return {
    paths : [{params:{upcoming:'1'}}, {params:{upcoming:'2'}}, {params:{upcoming:'3'}}],
    fallback:false
}
}
catch(err){
console.log(err)
}
}


export const getStaticProps = async({params})=>{
  try{
    const res = await fetch(`https://eawards-hnfbzk8a0-bitovia.vercel.app/api/upcomings/${params?.upcoming}`)
    const upcomingMovies = await res.json()
    return {
        props:{
            upcomingMovies
        }
      }
  }
  catch(err){
  console.log(err)
  }
}