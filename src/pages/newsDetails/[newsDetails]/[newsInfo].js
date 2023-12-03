import React,{useState, useEffect} from 'react'
import { useData} from '@/contexts/DataApi'
import { useAuth } from '@/contexts/AuthAPI'
import moment from 'moment'
import {Input } from 'antd'

import Footer from '@/components/Footer'
import { useRouter } from 'next/router'





const NewsInfo = ({news, id}) => {
const {handleComments, getComments, state, handleActive} = useData()
const [comment, setComment] = useState('')
const {userData} = useAuth()
const [recentComments, setRecentComments]  = useState([])
const [reviewNews, setReviewNews] = useState(news?.articles[id])
const router = useRouter()



useEffect(()=>{
  const fun = async()=>{
  const data = await state
  console.log(data, "stateData")
  setReviewNews(data.reviewNews)
  }
  fun()
  if( typeof reviewNews === 'object' &&
  Object.keys(reviewNews).length > 0 && reviewNews != 'undefined' && reviewNews !== null){
    getComments("newsId" , id, setRecentComments, "newsComments", router.query.newsDetails)
  }
  else {
    getComments("newsId",id, setRecentComments, "newsComments", router.query.newsDetails)
  }
  // console.log(typeof comment)
  // console.log(reviewNews)
  },[state])
  
  useEffect(()=>{
    if( typeof reviewNews === 'object' &&
    Object.keys(reviewNews).length > 0 && reviewNews != 'undefined' && reviewNews !== null){
      getComments("newsId", id, setRecentComments, "newsComments", router.query.newsDetails)
    }
    else {
      getComments("newsId", id, setRecentComments, "newsComments", router.query.newsDetails)
    }
  },[reviewNews])
  
  useEffect(()=>{
    if(router.asPath.includes("news")){
        if(router.asPath.includes("news")){
        handleActive("news")
        }
    }
    },[])

  return (
      <div style={{position:'relative', top:'160px'}}>
        <div className='w-75 m-auto my-2 mb-5'>
 <h2 className='text-center py-2 mt-2 fw-bold'>News Info</h2>
{console.log(news, "news", id, "id")}

<div className='my-3 text-center d-flex flex-column w-75 justify-content-center align-items-center m-auto gap-3'>
  <h3 className='fw-bold'>{news.articles[id].title}</h3>
  <p><span className='fw-bold'>Published At:</span> {news.articles[id].publishedAt}</p>

<div className='mb-2'>
<img src={news.articles[id].urlToImage} alt={news.articles[id]?.urlToImage} height={'250px'} />
</div>
 
  <p><span className='fw-bold'>Description:</span> {news.articles[id]?.description}</p>

  <p>
<span className='fw-bold'>Content:</span> {(news.articles[id].content)}
  </p>

{
  news.articles[id].author ?  <p> <span className='fw-bold'>author:</span>  <a href={news.articles[id].author} target="_blank" rel="noopener noreferrer">{news.articles[id].author}</a></p> : <></>
}
  
</div>

<h5 className='fw-bold my-4'>Comments</h5>
  <div className='box border border-secondary my-2 rounded overflow-y-scroll py-2' style={{height:"280px"}}>
  <p className='m-3 my-2 mb-5 fw-bolder text-start'>Recent Comments</p> 
  {console.log(recentComments, "RecentComments")}
<div> 
{
recentComments?.map((comment, index)=>{
    return <div key={index} className='d-flex my-2 rounded flex-column w-100 align-items-center text-black'> 
    <div className='d-flex w-100 px-3 justify-content-between align-items-start'>
      <p style={{fontSize:"14px"}}>{comment?.userData.slice(0,comment?.userData.indexOf("@"))}</p>
      <p style={{fontSize:"14px"}}>{comment?.timeStamp}</p>
    </div>
    <p className='fw-bold text-black text-center'>{comment?.comment}</p>
    <hr className='w-100' />
    </div>
})}
</div>
</div>
<div className="comment d-flex flex-column">
<Input placeholder='Comment' size='large' value={comment} onChange={(e)=>{
setComment(e.target.value)
}} />
     <button className='btn btn-dark my-2 w-50 w-sm-25 align-self-end' disabled={comment ? false:true} onClick={()=>{
      if( typeof reviewNews === 'object' &&
      Object.keys(reviewNews).length > 0 && reviewNews != 'undefined' && reviewNews !== null ){
        handleComments({
          newsId: id,
          newsTitle: reviewNews?.title,
          comment: comment,
          timeStamp: moment().format("LLL"),
          userData:userData ? userData?.email : "Unknown_User@gmail.com",
          category:router.query.newsDetails
          }, "newsComments")
      }
else{
  handleComments({
   newsId: id,
    newsTitle: news.articles[id]?.title,
    comment: comment,
    timeStamp: moment().format("LLL"),
    userData:userData ? userData?.email : "Unknown_User@gmail.com",
    category:router.query.newsDetails
    },  "newsComments")
}
      setComment('')
}} >Comment</button>
</div>
</div>
<Footer/>
 </div>



  )
  
}

export default NewsInfo

export const getServerSideProps = async(context)=>{
    try{
        const response = await fetch(`https://eawards-app.vercel.app/api/movieNews/${context.query.newsDetails}`,)

        const news = await response.json()
      const id = Number(context.query.newsInfo)
        return {
            props:{
news,
id
            }
        }
      }
      catch(err){
      console.log(err)
      }
}