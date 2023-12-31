
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import MovieCard from '@/components/MovieCard'
import Link from 'next/link'
import { useData } from '@/contexts/DataApi'
import Footer from '@/components/Footer'

const Infos = ({popularMovies,movieDetails, castings}) => {
    const router= useRouter()
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
 <h2 className='text-center py-2 mt-2 fw-bold'>Movie Info</h2>

{
console.log(movieDetails,  castings, )
}

<div className='px-2 px-sm-0'>
<div className="reviews-section pb-4 rounded d-flex flex-column flex-lg-row gap-2 align-items-center justify-content-evenly my-4 col-12 col-sm-10 mx-auto" style={{backgroundImage:`url(https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path})`}}>
<MovieCard type={'movie'} img={"https://image.tmdb.org/t/p/w500/"+movieDetails.poster_path} description={movieDetails.tagline} title={movieDetails.title}/>


<div className="content w-100 w-md-75 rounded">
<h4 className='text-light text-center py-3 fw-bold'>
  {movieDetails.title}</h4>
  <div className="genres d-flex justify-content-end text-white align-items-center gap-2">
  {
movieDetails.genres.map((type,id)=>{
return <span key={id}>{type.name}</span>
})
}
</div>
 <p className='text-white'>Release Date: <span className='fw-bold'>{movieDetails.release_date}</span></p>
  <h5 className='text-light text-light'>Overview</h5>
<p className='text-light py-2 text-left'>{movieDetails.overview}</p>
{
    movieDetails?.homepage ?<Link className='text-decoration-none text-info my-2' href={movieDetails?.homepage}>Vist Homepage</Link>:<></>
}

<p className='text-white text-end my-2'>Original Language : {movieDetails.original_language}</p>
<p className='text-white'>Budget: {movieDetails.budget}/-</p>
</div>
</div>
</div>
<h5 className='w-75 m-auto fw-bold pt-2'>Movie Casts</h5>
<div className="castings overflow-x-scroll d-flex justify-content-start align-items-center gap-3 m-auto w-75 p-2">
{
  castings.cast.map((cast, index)=>{
    if(cast.profile_path){
      return <><MovieCard type={'person'} id={''} key={index} img={'https://image.tmdb.org/t/p/w500/'+ cast.profile_path} title={cast.name}/></>
    }
else{
  return <><MovieCard type={'person'} id={''} key={index} img={'/img3.jpg'} title={cast.name}/></>
}

  })
}
</div>

<h5 className='w-75 m-auto fw-bold pt-4 mt-2'>See Other Movie Details</h5>
<div className="castings overflow-x-scroll d-flex justify-content-start align-items-center gap-3 m-auto w-75 p-2">
{
popularMovies?.results.map((movie,id)=>{
  if(movie.id !== movieDetails.id){
    if(movie.poster_path){
      return <><MovieCard key={id} id={movie.id} type={'movie'} img={'https://image.tmdb.org/t/p/w500/'+ movie.poster_path} title={movie.title}/></>
    }
  }
    
  })
}
</div>

<Footer/>
</div>
</>
  )
}

export default Infos


export const getServerSideProps = async(context)=>{
    try{    

      const result = await fetch(`https://eawards-app.vercel.app/api/movieApis/1`)
      const res = await result.json()
      const popularMovies = res.response
      
const movieRes = await fetch(`https://eawards-app.vercel.app/api/movieDetails/${context.query.info}`)
const movieDetails = await movieRes.json()
    const castsRes = await fetch(`https://eawards-app.vercel.app/api/movieCastings/${context.query.info}`)
    const castings = await castsRes.json()
    console.log(castings)
      return{
        props:{
          popularMovies,
          movieDetails,
          castings
        }
      }
    }
    catch(err){
    console.log(err)
    }
    }


// export const getStaticPaths = async()=>{
// try{

// }
// catch(err){
// console.log(err)
// }

// }


// export const getStaticProps = async()=>{
//   try{
//     const result = await fetch(`https://eawards.vercel.app/api/movieApis/1`,{ cache: 'force-cache' })
//     const res = await result.json()
//     const popularMovies = res.response
  
//   }
//   catch(err){
//   console.log(err)
//   }
// }


