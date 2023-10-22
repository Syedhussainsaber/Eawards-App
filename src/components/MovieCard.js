import React, { useEffect, useState } from 'react'
import { Card} from 'antd'
import { useData } from '@/contexts/DataApi'
import { useRouter } from 'next/router'

const {Meta} = Card
const MovieCard = ({img,title,description, id, type}) => {
  const { handleCurrentMovie, state, handleActive , handleReviewMovie} = useData()

const router = useRouter()

useEffect(()=>{

  if(router.query.info===`${id}`){
    handleActive('world')
  }
 
},[])

  return (
  <Card
    hoverable
    onClick={()=>{
      if(type==='movie'){
handleCurrentMovie({
  image:img,
  title:title,
id:id
})
handleActive('world')
router.replace(`/movieWorld/moviesInfo/${id}`)
      }
      else if(type === 'person'){
console.log("Person")
      }
      else if(type === 'rate'){
handleReviewMovie({
  image:img,
  title:title,
  id:id
})
      }

    }}
    style={{
      width: 250,
      marginTop:20
    }}
    cover={<img alt={title} src={img} height={250} />}
  >
    <Meta title={title} description={description} />
  </Card>

  )
}

export default MovieCard
