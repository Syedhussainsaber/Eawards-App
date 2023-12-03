import React from 'react'

const NewsAbout = ({context}) => {
  return (
    <div>
      
    </div>
  )
}

export default NewsAbout


export const getServerSideProps = async(context)=>{
    try{
        const response = await fetch(`https://eawards-app.vercel.app/api/movieNews/${context.query.movieNews}`,)
        const movieNews = await response.json()
      
        return {
            props:{
                movieNews
            }
        }
      }
      catch(err){
      console.log(err)
      }
}