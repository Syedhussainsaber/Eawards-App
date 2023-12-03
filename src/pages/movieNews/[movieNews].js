import React,{useEffect} from 'react'
import { useRouter } from 'next/router'
import { Dropdown, Button } from 'antd'
import Link from 'next/link';
import Footer from '@/components/Footer';
import { useData } from '@/contexts/DataApi';
import {Card} from 'antd';


const {Meta} = Card

const News = ({movieNews}) => {
    const router = useRouter()
const {handleActive} = useData()

useEffect(()=>{
if(router.asPath.includes("/movieNews/")){
handleActive("news")
}
},[])

    const items = [
         {
          key: '1',
          label: (
            <Link  href="/movieNews/india" className='text-decoration-none'>
Latest
            </Link>
          ),
        },
        {
          key: '2',
          label: (
            <Link  href="/movieNews/bollywood" className='text-decoration-none'>
Bollywood
            </Link>
          ),
        },
        {
          key: '3',
          label: (
            <Link  href="/movieNews/tollywood" className='text-decoration-none'>
Tollywood
            </Link>
          ),
        },
        {
          key: '4',
          label: (
            <Link  href="/movieNews/kollywood" className='text-decoration-none'>
Kollywood
            </Link>
          ),
        },
       
          {
            key: '5',
            label: (
              <Link  href="/movieNews/mollywood" className='text-decoration-none' >
Mollywood
              </Link>
            ),
          },
          {
            key: '6',
            label: (
              <Link  href="/movieNews/hollywood" className='text-decoration-none'>
Hollywood
              </Link>
            ),
          },
      ];

  return (
    <div className='w-100'>
   <div style={{position:'relative', top:"160px"}}>
<h2 className='text-center my-4 fw-bold'>{router.query.movieNews}{router.query.movieNews === "india" ? "" :"Movie"} News</h2>
<div className="my-4 d-flex w-75 mx-auto flex-row align-items-center justify-content-end">
        <Dropdown
        menu={{
          items,
        }}
        placement="bottomLeft"
      >
        <Button size="middle" type='primary'>Select News</Button>
      </Dropdown>
        </div>
<div>
    {
movieNews?.articles?.map((news,index)=>{
 return  <div className="news-section w-75 m-auto mb-5"> <Card
 title={news?.title}
hoverable
content={news?.description}
size="default"
extra={ <Link className='text-decoration-none' href={'/newsDetails/'+`${router.query.movieNews}/`+`${index}`}>View More</Link> }
cover={<img src={news?.urlToImage} height={"300px"} alt={news?.title} />}
>
<Meta title={news?.description} description={news?.content} />
</Card>
</div>
})
}
     </div>
     <Footer/>
     </div>
      </div>
      

  )
}

export default News



// export const getStaticPaths = async() =>{

//   try{
//     const paths = [{ params:{movieNews:"bollywood"}},{params:{movieNews:"tollywood"}},{params:{movieNews:"hollywood"}},{params:{movieNews:"kollywood"}},{params:{movieNews:"mollywood"}},{params:{movieNews:"sandalwood"}},]

//     return {
//     paths,
//     fallback:false
//     }
//   }
//   catch(err){
// console.log(err)
//   }

// }

// export const getStaticProps = async({params})=>{
// try{
//   const response = await fetch(`https://eawards-app.vercel.app/api/movieNews/${params.movieNews}`,{ cache: 'force-cache' })
//   const movieNews = await response.json()

//   return {
//       props:{
//           movieNews
//       }
//   }
// }
// catch(err){
// console.log(err)
// }
// }


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