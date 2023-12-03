import React, { useEffect } from 'react'
import { Dropdown, Button } from 'antd'
import Link from 'next/link';
import Footer from '@/components/Footer';
import {LikeOutlined, LikeFilled, DislikeFilled, DislikeOutlined} from '@ant-design/icons';
import {Card} from 'antd';
import { useRouter } from 'next/router';
import { useData } from '@/contexts/DataApi';


const {Meta} = Card
const MovieNews = ({movieNews}) => {
    const items = [
      {
        key: '1',
        label: (
          <Link  href="/movieNews/indian" className='text-decoration-none'>
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
const router = useRouter()
const {handleActive} = useData()
useEffect(()=>{
if(router.asPath.includes("/movieNews")){
handleActive("news")
}
},[])

// const { Meta } = Card;

  return (
    <div className='w-100'>
        <div style={{position:'relative', top:"160px"}}>
        <h2 className='text-center my-4 fw-bold'>Movie News</h2>
        <div className="my-4 d-flex w-75 mx-auto flex-row align-items-center justify-content-end">
        <Dropdown
        menu={{
          items,
        }}
        placement="bottomLeft"
      >
        <Button size="large" type='primary'>Select News</Button>
      </Dropdown>
        </div>
    
       

      {
        movieNews?.articles?.map((news,index)=>{
 return <div className="news-section w-75 m-auto mb-5">
   <Card
   title={news?.title}
hoverable
content={news?.description}
size="default"
extra={ <Link className='text-decoration-none' href={'/newsDetails/'+`${"indian"}/`+`${index}`}>View More</Link> }
cover={<img src={news?.urlToImage} height={"300px"} alt={news?.title} />}
>
<Meta title={news?.description} description={news?.content} />
</Card>
 </div> 
        })
    }

     <Footer/>
    </div>
    </div>

  )
}

export default MovieNews



// export const getStaticProps= async(context)=>{

// const response = await fetch(`https://eawards-app.vercel.app/api/movieNews/${'movies'}`,{ cache: 'force-cache' })
// const movieNews = await response.json()

// return {
//     props:{
//         movieNews
//     }
// }
// }


export const getServerSideProps = async(context)=>{
  const response = await fetch(`https://eawards-app.vercel.app/api/movieNews/${'india'}`,)
  const movieNews = await response.json()
  console.log(movieNews, "News")
  return {
      props:{
          movieNews
      }
  }
  
}



{/* <h3 className='text-center text-md-start lh-base'>{index+1}. {news.title}</h3>
<div className="d-flex w-100 flex-column flex-md-row justify-content-center justify-content-md-start gap-3 align-items-center align-items-md-start">
<img src={news.urlToImage} className='p-2' width={'270px'} height={'300px'} alt={news.title} />
<div className='text-start'>
<p className='w-75 text-center text-md-start'>{news?.description}</p>
<LinkclassName="text-decoration-none">View more</Link>
{/* <button className='btn btn-dark text-end p-1.5 fs-6'> 
</button> */}
// </div>
// </div> */}