
import React, { useEffect } from 'react'
import MovieCard from '@/components/MovieCard'
import {Pagination} from "antd"
import { useData } from '@/contexts/DataApi'
import { useRouter } from 'next/router'
import Footer from '@/components/Footer'

const Celebraty = ({popularPeople}) => {
    const {handleActive} = useData()
const router = useRouter()
useEffect(()=>{
if(router.asPath.includes("movieWorld"))
{
    handleActive("world")
}

},[])

  return (
    <>

    <div  style={{position:'relative', top:'160px'}}>
    <h2 className='text-center my-4 fw-bold'>Celebraty Profiles</h2>
    <div className="w-100 my-3 d-flex flex-column justify-content-center align-items-center gap-2">
        {console.log(popularPeople)}
    {popularPeople?.results?.map((person,index)=>{
        if(person.profile_path){
            return <>
            <div className="d-flex shadow-lg py-2 flex-column flex-lg-row w-75 m-auto justify-content-evenly my-4 rounded align-items-center">
   <MovieCard key={index} id={''} type={'person'} img={'https://image.tmdb.org/t/p/w500/'+person?.profile_path} title={person?.name} description={''}/>
<div className="celebraty-content w-75">
    <h3 className='text-center my-4'>Profession: {person.known_for_department}</h3>
<h4 className='text-start text-lg-center w-50 w-lg-25 mb-4'>Known For:</h4>
<div className="d-flex flex-column flex-md-row justify-content-evenly align-items-center gap-2 w-100">

{person.known_for.map((item,index)=>{
return <>
<div key={index}>
{
        item?.backdrop_path?
        <img src={"https://image.tmdb.org/t/p/w500/"+item.backdrop_path} className='rounded m-auto' alt="" width={150} height={180} />
        :<></>
       }
        
<p className='text-center mt-2'>{item.title}</p>
</div>
</>
    })}
    </div>
</div>
            </div>
{/* <hr className='w-100 my-2 mt-4' /> */}
            </>
        }
    })}
    </div>
   

<div className="w-100 d-flex justify-content-center align-items-center py-2 my-4">
<Pagination className='m-2 mb-8' defaultCurrent={router.query.celebraty}  showSizeChanger showQuickJumpe total={5000} onChange={(pageNumber,pageSize)=>{
router.replace(`/movieWorld/celebratyProfile/${pageNumber}`)
}}/> 
</div>

<Footer/>
</div>
    </>

  )
}

export default Celebraty


export const getStaticProps = async ()=>{
try{
const response = await fetch(`https://eawards-app.vercel.app/api/popularPeople/1`,{
    cache:"force-cache"
})
const popularPeople = await response.json()
// const filteredPeople = popularPeople?.results?.filter((person)=>{
// console.log(person['known_for'][0]['original_language'])
// return  person['known_for'][0]['original_language']==='kn' ||  person['known_for'][0]['original_language']==='hi' ||  person['known_for'][0]['original_language']==='te' ||  person['known_for'][0]['original_language']==='ta' || person['known_for'][0]['original_language']==='ml'
// })
 return {
    props:{
popularPeople
    }
}
}
catch(err){
console.log(err)
}
}