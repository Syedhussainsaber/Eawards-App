import React,{useEffect} from 'react'
import MovieCard from '@/components/MovieCard'
import { Pagination } from 'antd'
import { useRouter } from 'next/router'
import Footer from '@/components/Footer'
import { useData } from '@/contexts/DataApi'

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
    <Pagination className='my-4 m-auto' defaultCurrent={upcomingMovies.page} pageSize={20} total={upcomingMovies.total_results} onChange={(pageNumber,pageSize)=>{
router.replace(`/movieWorld/upcomingReleases/${pageNumber}`)
}}/>
    </div>
<Footer/>
    </div>
    </>
  )
}

export default UpComing


// export const getStaticProps = async()=>{
      
//      const res = await fetch(`https://eawards-app.vercel.app/api/upcomings/1`)
//       const upcomingMovies = await res.json()

//       return {
//         props:{
//             upcomingMovies
//         }
//       }
// }



export const getServerSideProps = async()=>{
      
try{
  const res = await fetch(`https://eawards-app.vercel.app/api/upcomings/1`)
  const upcomingMovies = await res.json()

  return {
    props:{
        upcomingMovies
    }
  }

}
catch (err){
console.log(err)
}
}