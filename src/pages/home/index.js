
import Head from 'next/head'
import MovieCard from '@/components/MovieCard'
import { Pagination } from 'antd'
import Slider from '@/components/Slider'
import SectionCard from '@/components/SectionCard'
import { useRouter } from 'next/router'
import { useAuth } from '@/contexts/AuthAPI'
import Footer from '@/components/Footer'
import { useEffect } from 'react'
import {toast} from 'react-toastify'

import TextAnimation from '@/components/TextAnimation'


export default function Home({popularMovies, currentPage, news ,upcomings}) {

const router = useRouter()
const {userData} = useAuth()

const sliderImgs={
  sliderImg1: popularMovies?.results[4]['poster_path'],
  sliderImg2: popularMovies?.results[3]['poster_path'],
  sliderImg3: popularMovies?.results[5]['poster_path']
}


  return (
    <>
      <Head>
        <title>Eawards App - The Movie Review and Rating Platform</title>
        <meta name="description" content="The Top Movie Review and Rating platform of India" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <main>


<TextAnimation text1={'⚫️ Eawards - a movie review rating application'} text2={'⚫️ Rate the latest movies'} text3={'⚫️ Vote for yours favourite stars'} />

{/* {
  userData ? <div className='w-100 text-end px-2'><p className='text-dark m-auto fs-6 py-1'>Welcome {userData.diplayName ? userData.diplayName: userData.email.slice(0,userData.email.indexOf("@"))}</p></div>:<>
  </>
} */}


<Slider sliderImgs={sliderImgs}/>
       <h1 className='my-5 fs-1' style={{position:"relative", top:"175px", display:"block"}}>Eawards App</h1>


<div className="normal-cards w-100">
<SectionCard title={"Movie Reviews"} link={"/movieReviews"}  data={popularMovies?.results} />
<SectionCard title={"Upcoming Releases"} link={"/upcomings"} data={upcomings?.results} />
<SectionCard title={"Movie News"} link={"/movieNews"} data={news?.articles}  />
<SectionCard title={"About Celebraty"} link={"/AboutCelebraty"} data={upcomings?.results} />
<SectionCard title={"About Cinema"} link={"/AboutCinema"} data={upcomings?.results}  />
<SectionCard title={"Recent OTT"} link={"/RecentOTT"} data={popularMovies?.results}/>
</div>

{console.log(popularMovies.results)}

<h2 className='my-4'>Now Playing</h2>
<div className="movies w-75 mb-5">

{
  popularMovies?.results.map((item,index)=>{
    if(item?.poster_path){

      return <MovieCard img={"https://image.tmdb.org/t/p/w500/"+item.poster_path} id={item.id} type={'movie'} title={item.title} description={''} key={index} />
    }
  })
}
</div>

<Pagination className='my-5 mb-8' defaultCurrent={1} pageSize={20} current={currentPage} total={popularMovies?.total_results-1} onChange={(pageNumber,pageSize)=>{
router.replace(`/home/${pageNumber}`)
}}/> 


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
    </main>
<footer>
  <Footer/>
</footer>
    </>
  )
}


// export const getStaticProps = async (context)=>{
//   try{
//     const result = await fetch(`https://eawards-app.vercel.app/api/movieApis/1`,{ cache: 'force-cache' })
//     const res = await result.json()
//     const popularMovies = await res.response

//     const newsRes = await fetch(`https://eawards-app.vercel.app/api/movieNews/${'bollywood'}`,{ cache: 'force-cache' })
//     const news = await newsRes.json()
    
//     const upcomingsRes= await fetch("https://eawards-app.vercel.app/api/upcomings/1",{
//       cache: 'force-cache' 
//     })
//     const upcomings = await  upcomingsRes.json()
//     const currentPage = 1

// return {
// props:{
//   popularMovies,
// currentPage,
//   news,
//   upcomings
// }
// }
//   }
//   catch(err){
//   console.log(err)
//   }
// }

export const getServerSideProps = async()=>{
try{

  const result = await fetch(`https://eawards-app.vercel.app/api/movieApis/1`,{ cache: 'force-cache' })
    const res = await result.json()
    const popularMovies = await res.response

    const newsRes = await fetch(`https://eawards-app.vercel.app/api/movieNews/${'bollywood'}`,{ cache: 'force-cache' })
    const news = await newsRes.json()
    
    const upcomingsRes= await fetch("https://eawards-app.vercel.app/api/upcomings/1",{
      cache: 'force-cache' 
    })
    const upcomings = await  upcomingsRes.json()
    const currentPage = 1

return {
props:{
  popularMovies,
currentPage,
  news,
  upcomings
}
}

}
catch(err){
console.log(err)
}
}