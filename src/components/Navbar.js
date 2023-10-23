import React, { useEffect, useState } from 'react'
import { Dropdown, Button } from 'antd'
import Link from 'next/link'
// import Image from 'next/image'
import { useAuth } from '@/contexts/AuthAPI'
import { useData } from '@/contexts/DataApi'
import {useRouter} from 'next/router'


const Navbar = () => {
  const {userData, logoutFun} = useAuth()
const {active, handleActive} = useData()
const router = useRouter()

const abouts = [
  {
    key: '1',
    label: (
      <Link className='text-decoration-none' href="/aboutEawards/about">
About
      </Link>
    ),
  }, 
  {
    key: '2',
    label: (
      <Link className='text-decoration-none' href="/aboutEawards/helpToUs">
Help to us
      </Link>
    ),
  }, 
  {
    key: '3',
    label: (
      <Link className='text-decoration-none' href="/aboutEawards/contactForPromotion">
Contact For Promotion
      </Link>
    ),
  }, 
]

const winners = [
  {
    key: '1',
    label: (
      <Link className='text-decoration-none' href="/awardWinners/2021">
2021
      </Link>
    ),
  }, 
  {
    key: '2',
    label: (
      <Link className='text-decoration-none' href="/awardWinners/2022">
2022
      </Link>
    ),
  },
  {
    key: '3',
    label: (
      <Link className='text-decoration-none' href="/awardWinners/2023">
2023
      </Link>
    ),
  },
]
const worlds = [
  {
    key: '1',
    label: (
      <Link className='text-decoration-none' href="/movieWorld/celebratyProfile">
Celebraty Profile
      </Link>
    ),
  },
  {
    key: '2',
    label: (
      <Link className='text-decoration-none' href="/movieWorld/moviesInfo">
Movies Info
      </Link>
    ),
  },
  {
    key: '3',
    label: (
      <Link className='text-decoration-none' href="/movieWorld/mostPopular">
Most Popular & Top BoxOffice
      </Link>
    ),
  },
  {
    key: '4',
    label: (
      <Link className='text-decoration-none' href="/movieWorld/upcomingReleases">
Upcoming Releases
      </Link>
    ),
  },
  {
    key: '5',
    label: (
      <Link className='text-decoration-none' href="/movieWorld/ottReleases">
OTT Releases
      </Link>
    ),
  },
]
  const items = [
    {
      key: '1',
      label: (
        <Link className='text-decoration-none'  href="/voteForTheBest/panIndia">
Pan India
        </Link>
      ),
    },
    {
      key: '2',
      label: (
        <Link className='text-decoration-none' href="/voteForTheBest/tollywood">
Tollywood
        </Link>
      ),
    },
    {
      key: '3',
      label: (
        <Link className='text-decoration-none' href="/voteForTheBest/bollywood">
Bollywood
        </Link>
      ),
    },
    {
      key: '4',
      label: (
        <Link className='text-decoration-none' href="/voteForTheBest/mollywood">
Mollywood
        </Link>
      ),
    },
    {
      key: '5',
      label: (
        <Link className='text-decoration-none' href="/voteForTheBest/kollywood">
Kollywood
        </Link>
      ),
    },
    {
      key: '6',
      label: (
        <Link className='text-decoration-none' href="/voteForTheBest/sandalwood">
Sandalwood
        </Link>
      ),
    },
    {
      key: '7',
      label: (
        <Link className='text-decoration-none' href="/voteForTheBest/hollywood">
Hollywood
        </Link>
      ),
    },
  ];



  return (
    <nav className="navbar navbar-expand-lg" style={{position:'fixed'}}>
    <div className="container-fluid py-3 px-2" style={{backgroundColor:"#000080"}}>
      <Link className="navbar-brand text-white rounded" onClick={()=>{
        handleActive("home")
      }}  href="/home"><img src="/logo.jpg" className='rounded' alt="E-awards" height={'80px'} width={"80px"} />
       </Link>
      <button className="navbar-toggler bg-white my-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">

        <ul className="navbar-nav me-auto mb-2 mb-lg-0"  >
          
          <li className="nav-item my-2 my-lg-0">
          <Link href={'/home'} className={active==='home'?"nav-link rounded active p-2 p-lg-2":'nav-link rounded p-2 p-lg-2'}
          onClick={(e)=>{
            handleActive('home')}
        }
      
          >Home</Link>  
          </li>

          <li className="nav-item dropdown my-2 my-lg-0">
            {
              items?   <Dropdown
              menu={{
items
              }}
              placement="bottomLeft"
            >
      <a  className={active ==='vote' ? "nav-link dropdown-toggle active rounded p-2 p-lg-2":'nav-link rounded dropdown-toggle p-2 p-lg-2'} onClick={(e)=>{
        handleActive('vote')
    }}  id="navbarDropdown" role="button" aria-expanded="false">
                  Vote for your Best </a>   
            </Dropdown>:<></>
            }
       
          </li>

          <li className="nav-item my-2 my-lg-0">
            <Link className={active==='review' ? "nav-link rounded active p-2 p-lg-2":"nav-link rounded p-2 p-lg-2"} onClick={(e)=>{
              handleActive('review')
          }} href="/movieReviews">Movie Review/Rating</Link>
          </li>
          <li className="nav-item my-2 my-lg-0">
            <Link  className={active==='news'? "nav-link rounded active p-2 p-lg-2":'nav-link rounded p-2 p-lg-2'} onClick={(e)=>{ 
              handleActive('news')}
            } href="/movieNews">Movie News</Link>
          </li>
          <li className="nav-item dropdown my-2 my-lg-0">
            {
worlds ?   <Dropdown
              menu={{items:worlds}}
              placement="bottomLeft"
            >
      <a className={active==='world' ? "nav-link rounded dropdown-toggle active p-2 p-lg-2" : "nav-link rounded dropdown-toggle p-2 p-lg-2"} onClick={(e)=>{
              handleActive('world')
            }} id="navbarDropdown" role="button" aria-expanded="false">
              Movies World </a>   
            </Dropdown>:<></>
            }
      
          </li>

          <li className="nav-item dropdown my-2 my-lg-0">
            {
winners ?   <Dropdown
              menu={{items:winners}}
              placement="bottomLeft"
            >
      <a  className={active==='award' ? "nav-link rounded dropdown-toggle active p-2 p-lg-2" : "nav-link rounded dropdown-toggle p-2 p-lg-2"} onClick={(e)=>{
              handleActive('award')
            }} id="navbarDropdown" role="button" aria-expanded="false">
Award Winners </a>   
            </Dropdown>:<></>
            }
  
          </li>

          <li className="nav-item my-2 my-lg-0">
            <Link className={active==='blog' ? "nav-link rounded active p-2 p-lg-2" : "nav-link rounded p-2 p-lg-2"} onClick={(e)=>{
              handleActive('blog')
            }} href="/blogs">Blogs</Link>
          </li>

          <li className="nav-item dropdown my-2 my-lg-0">
            {
abouts ?   <Dropdown
              menu={{items:abouts}}
              placement="bottomLeft"
            >
      <a  className={active==='about' ? "nav-link rounded active dropdown-toggle p-2 p-lg-2" : "nav-link rounded dropdown-toggle p-2 p-lg-2"} onClick={(e)=>{
              handleActive('about')
            }} id="navbarDropdown" role="button" aria-expanded="false">
About Eawards </a>   
            </Dropdown>:<></>
            }
  
          </li>


        </ul>

        <form className="d-flex">
          <input className="form-control me-2 my-2 my-lg-0" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success p-lg-1" type="submit">Search</button>
          {
            userData ? <>
             <button className="btn btn-danger mx-4" type='button' onClick={logoutFun}>Logout</button></> :
            <> <button className="btn text-white mx-4" style={{backgroundColor:'black'}} type='button' onClick={()=>{
router.push("/register")
            }}>Register</button></>
          }
        </form>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
