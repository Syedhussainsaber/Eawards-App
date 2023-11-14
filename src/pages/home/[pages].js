import Head from 'next/head'
import MovieCard from '@/components/MovieCard'
import { Pagination } from 'antd'
import Slider from '@/components/Slider'
import SectionCard from '@/components/SectionCard'
import { useRouter } from 'next/router'
import Footer from '@/components/Footer'
import { useAuth } from '@/contexts/AuthAPI'

import { useEffect } from 'react'
import TextAnimation from '@/components/TextAnimation'

// import { onAuthStateChanged } from 'firebase/auth'
// import { auth } from '../../../firebaseConfig'


export default function HomePages({popularMovies, currentPage}) {

const router = useRouter()
const {userData} = useAuth()


const sliderImgs={
  sliderImg1: popularMovies?.results[4]['poster_path'],
  sliderImg2: popularMovies?.results[3]['poster_path'],
  sliderImg3: popularMovies?.results[5]['poster_path']
}


useEffect(()=>{
if(router.query.pages === '1'){
  router.replace("/home")
}
},[])


  return (
    <>
      <Head>
        <title>Eawards App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>



      <TextAnimation text1={'⚫️ Eawards - a movie review rating application'} text2={'⚫️ Rate the latest movies'} text3={'⚫️ Vote for yours favourite stars'} />

{
  userData ? <div className='w-100 text-end px-2'><p className='text-dark m-auto fs-6 py-1'>Welcome {userData.diplayName ? userData.diplayName: userData.email.slice(0,userData.email.indexOf("@"))}</p></div>:<>
  </>
}
<Slider sliderImgs={sliderImgs}/>
       <h1 className='my-5'>Eawards App</h1>


<div className="normal-cards">
{/* <SectionCard title={"Movie Reviews"} link={"/MovieReviews"}  img={"https://image.tmdb.org/t/p/w500/"+popularMovies?.results[2].poster_path} />
<SectionCard title={"Movie News"} link={"/MovieNews"}  img={"https://image.tmdb.org/t/p/w500/"+popularMovies?.results[4].poster_path} />
<SectionCard title={"Upcoming Releases"} link={"/upcomings"} img={"https://image.tmdb.org/t/p/w500/"+popularMovies?.results[5].poster_path} />

<SectionCard title={"About Celebraty"} link={"/AboutCelebraty"} img={"https://image.tmdb.org/t/p/w500/"+popularMovies?.results[10].poster_path} />
<SectionCard title={"About Cinema"} link={"/AboutCinema"} img={"https://image.tmdb.org/t/p/w500/"+popularMovies?.results[7].poster_path} />
<SectionCard title={"Recent OTT"} link={"/RecentOTT"} img={"https://image.tmdb.org/t/p/w500/"+popularMovies?.results[8].poster_path} /> */}
</div>


<h2 className='mt-5'>Now Playing</h2>

<div className="movies w-75 mb-5">
{
  popularMovies?.results?.map((item,index)=>{
    if(item.poster_path){
      return <MovieCard img={"https://image.tmdb.org/t/p/w500/"+item.poster_path} id={item.id} title={item.title} description={item.overview} key={index} type={"movie"} />
    }
{console.log(popularMovies)}
  })
}
</div>


<Pagination className='my-5 mb-8' defaultCurrent={1} pageSize={20} current={currentPage} total={popularMovies?.total_results-1} onChange={(pageNumber,pageSize)=>{
  if(pageNumber===1){
    router.replace('/home')
  }
  else{
    router.replace(`/home/${pageNumber}`)
  }

}}/> 

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
    </main>
    <footer>
    <Footer/>
    </footer>

    </>
  )
}


// export const getStaticPaths= async()=>{
//   try{
//     // const response = await fetch(`https://eawards.vercel.app/api/movieApis/1`)
//     // const popularMovies = await response.json()
// //     const moviePages = Array.from({ length: popularMovies?.total_pages }, (_, index) => index + 1);

// //     console.log(moviePages, "moviePages")
// // const paths  = moviePages?.map((page,id)=>{
// // return {
// // params:{
// // pages:`${page}`
// // }
// // }
// // })
//     return {
//       paths : [{params:{pages:'1'}}, {params:{pages:'2'}}, {params:{pages:'3'}}, {params:{pages:'4'}}, {params:{pages:'5'}}, {params:{pages:'6'}},],
//       fallback:false
//     }
//   }
//   catch(err){
//   console.log(err)
//   }
//   }



// export const getStaticProps = async({params})=>{
//   try {
// const result = await fetch(`https://eawards-app.vercel.app/api/movieApis/${params.pages}`)
// const res = await result.json()
// const popularMovies = res.response
// const currentPage =params.pages
// return {
//   props:{
// popularMovies,
// currentPage
//   }
// }

// } catch (err) {
// console.log(err)
//   }
// }

export const getServerSideProps = async(context)=>{
try{
  const result = await fetch(`https://eawards-app.vercel.app/api/movieApis/${context.query.pages}`)
  const res = await result.json()
  const popularMovies = res.response
  const currentPage = parseInt(context.query.pages)
  return {
    props:{
  popularMovies,
  currentPage
    }
  }

}
catch(err){
console.log(err)
}

}