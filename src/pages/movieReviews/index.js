
import React, { useEffect, useState } from 'react'
import Card from '@/components/Card'
import {AiFillStar} from  'react-icons/ai'
import {Input } from 'antd'
import MovieCard from '@/components/MovieCard'
import { useData } from '@/contexts/DataApi'
import moment from 'moment'
import { useAuth } from '@/contexts/AuthAPI'
import Footer from '@/components/Footer'
const MovieReviews = ({nowPlaying}) => {

const [comment, setComment] = useState('')
const {handleComments,handleActive, state, getComments} = useData()
const [reviewMovie, setReviewMovie] = useState(nowPlaying.results[0])
const {userData} = useAuth()
const [recentComments, setRecentComments]  = useState([])

useEffect(()=>{
const fun = async()=>{
const data = await state
setReviewMovie(data.reviewMovie)
}
fun()
if( typeof reviewMovie === 'object' &&
Object.keys(reviewMovie).length > 0 && reviewMovie != 'undefined' && reviewMovie !== null){
  getComments(reviewMovie.id, setRecentComments)
}
else {
  getComments( nowPlaying.results[0].id, setRecentComments)
}
// console.log(typeof comment)
// console.log(reviewMovie)
},[state])

useEffect(()=>{
  if( typeof reviewMovie === 'object' &&
  Object.keys(reviewMovie).length > 0 && reviewMovie != 'undefined' && reviewMovie !== null){
    getComments(reviewMovie.id, setRecentComments)
  }
  else {
    getComments( nowPlaying.results[0].id, setRecentComments)
  }
},[reviewMovie])

useEffect(()=>{
handleActive('review')
},[])


  return (
  <>

<div style={{position:'relative', top:'160px'}}>


  <div className="p-2 w-75 m-auto">
    <h2 className='text-center my-2 fw-bold py-2 mb-4'>
        Movie Reviews & Rating
    </h2>

<div className="rating-section d-flex flex-column flex-lg-row py-2 gap-5 gap-lg-3 justify-content-evenly align-items-center align-items-lg-start">
  {console.log(reviewMovie, "In Review APges", )}
{
 typeof reviewMovie === 'object' &&
Object.keys(reviewMovie).length > 0 && reviewMovie != 'undefined' && reviewMovie !== null ? 
<Card id={reviewMovie?.id} title={reviewMovie?.title} btnText={"Review"} img={reviewMovie?.image}/>
:
<Card id={nowPlaying?.results[0]?.id} title={nowPlaying?.results[0]?.title} btnText={"Review"} img={"https://image.tmdb.org/t/p/w500/"+nowPlaying?.results[0]?.poster_path}/>
}
<div className='d-flex flex-column justify-content-center align-items-end'>
<p className='fs-3'>Eawards Rating <span className='mx-2'><AiFillStar/> <AiFillStar/> <AiFillStar/></span></p>
<p className='fs-3'>Mr . B Rating <span className='mx-2'><AiFillStar/> <AiFillStar/> <AiFillStar/></span></p>
<p className='fs-3'>Eawards Rating <span className='mx-2'><AiFillStar/> <AiFillStar/> <AiFillStar/></span></p>
<button className='btn btn-success my-2 w-100'>Submit Your Rating & Comment</button>
</div>
</div>
<h5 className='fw-bold fs-3 my-4'>Comments</h5>
<div className='box border border-secondary my-2 rounded overflow-y-scroll py-2' style={{height:"280px"}}>
  <p className='m-3 my-2 mb-5 fs-5 fw-bolder text-start'>Recent Comments</p>
  <div className='w-100'>
{

recentComments?.map((comment, index)=>{

    return <div key={index} className='d-flex my-2 rounded flex-column w-100 align-items-center text-black'> 
    <div className='d-flex w-100 px-3 justify-content-between align-items-start'>
      <p style={{fontSize:"14px"}}>{comment.userData.slice(0,comment.userData.indexOf("@"))}</p>
      <p style={{fontSize:"14px"}}>{comment.timeStamp}</p>
    </div>
    <p className='fw-bold text-black text-center'>{comment.comment}</p>
    <hr className='w-100' />
    </div>


})}
</div>
</div>
<div className="comment d-flex flex-column">
<Input placeholder='Comment' size='large' className='fs-5' value={comment} onChange={(e)=>{
setComment(e.target.value)
}} />
     <button className='btn btn-dark my-2 w-50 w-sm-25 align-self-end fs-5' disabled={comment ? false:true} onClick={()=>{
      if( typeof reviewMovie === 'object' &&
      Object.keys(reviewMovie).length > 0 && reviewMovie != 'undefined' && reviewMovie !== null ){
        handleComments({
          movieId: reviewMovie?.id,
          moviieTitle: reviewMovie?.title,
          comment: comment,
          timeStamp: moment().format("LLL"),
          userData:userData.email
          })
      }
else{
  handleComments({
    movieId: nowPlaying.results[0].id,
    moviieTitle: nowPlaying.results[0].title,
    comment: comment,
    timeStamp: moment().format("LLL"),
    userData:userData.email
    })
}
      setComment('')
}} >Comment</button>
</div>
<h5 className='w-75 p-2 fs-4 mt-5 mt-sm-3 text-start'>Rate Other Movies</h5>
<div className="w-100 w-sm-75 d-flex overflow-y-scroll justify-content-start align-items-start gap-5 mx-auto py-2">

{
  nowPlaying.results.map((movie, index)=>{
    if(movie.poster_path && reviewMovie.id !== movie.id){
return <div style={{width:'200px',margin:"10px"}} key={index}>
  <MovieCard id={movie.id} title={movie.title} img={'https://image.tmdb.org/t/p/w500/'+movie.poster_path} type={'rate'} />
</div>
    }

  })
}
</div>




</div>

<Footer/>
  </div>
  </>
  )
}

export default MovieReviews

export const getStaticProps = async(context)=>{
try{
const res = await fetch(`https://eawards-app.vercel.app/api/movieApis/1`)
const data= await res.json()
const nowPlaying = data.response

return {
  props:{
    nowPlaying
  }
}
}
catch(err){
console.log(err)
}
}