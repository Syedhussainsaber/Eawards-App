import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from '@/contexts/AuthAPI'
import { useData } from '@/contexts/DataApi'
import {useRouter} from 'next/router'
import { Dropdown, Button } from 'antd'



function Navbar2() {
  const [activeIcon, setActiveIcon] = useState("nav__menu");

  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (activeIcon === "nav__menu") {
      setActiveIcon("nav__menu nav__active");
    } else setActiveIcon("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };


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
    <nav className="nav" style={{position:'fixed', backgroundColor:'#000080',  top: '39.5px'}}>
      {/* <Link href={"/"} className="nav__brand">
<Image src={"/logo.jpeg"} width={'105'} height={'95'} className='logo'/></Link> */}

<Link className="nav__brand text-white rounded" onClick={()=>{
        handleActive("home")
        navToggle()
      }}  href="/home">< img src="/logo.jpg" className='rounded logo p-2' alt="E-awards" height={'80px'} width={"80px"} />
     
    
       </Link>


       <h1 className="p-2 text-white title">Eawards</h1>


      <ul className={activeIcon}>
      <li className="nav__item">
          {/* <Link href={"/"} className="nav__link">Home</Link> */}
          <Link href={'/home'} className={active==='home'?"nav__link rounded active p-2 p-lg-2":'nav__link rounded p-2 p-lg-2'}
          onClick={(e)=>{
            handleActive('home')
        navToggle()
        }

        }
      
          >Home</Link>  

        </li>
        <li className="nav__item">
          {/* <Link href={"/academics"} className="nav__link">Academics</Link> */}
          {
              items?   <Dropdown
              menu={{
items
              }}
              placement="bottomLeft"
            >
      <a  className={active ==='vote' ? "nav__link dropdown-toggle active rounded p-2 p-lg-2":'nav__link rounded dropdown-toggle p-2 p-lg-2'} onClick={(e)=>{
        handleActive('vote')
        // navToggle()
    }}  id="navbarDropdown" role="button" aria-expanded="false">
                  Vote for your Best </a>   
            </Dropdown>:<></>
            }
        </li>
      
<li className="nav__item">
    {/* <Link href={"/facilities"} className="nav__link">Facilities</Link> */}
    
    <Link className={active==='review' ? "nav__link rounded active p-2 p-lg-2":"nav__link rounded p-2 p-lg-2"} onClick={(e)=>{
              handleActive('review')
              navToggle()
          }} href="/movieReviews">Movie Review/Rating</Link>
    
    </li>

<li className="nav__item">
    {/* <Link href={"/buds-pre-school"} className="nav__link">BUDS Pre-school</Link> */}
    <Link  className={active==='news'? "nav__link rounded active p-2 p-lg-2":'nav__link rounded p-2 p-lg-2'} onClick={(e)=>{ 
              handleActive('news')
              navToggle()
            }
            } href="/movieNews">Movie News</Link>
    </li>


<li className="nav__item">
    {/* <Link href={"/events-and-activities"} className="nav__link">Events and Activities</Link> */}
    {
worlds ?   <Dropdown
              menu={{items:worlds}}
              placement="bottomLeft"
            >
      <a className={active==='world' ? "nav__link rounded dropdown-toggle active p-2 p-lg-2" : "nav__link rounded dropdown-toggle p-2 p-lg-2"} onClick={(e)=>{
              handleActive('world')
              // navToggle()
            }} id="navbarDropdown" role="button" aria-expanded="false">
              Movies World </a>   
            </Dropdown>:<></>
            }
    </li>

<li className="nav__item">
    {/* <Link href={"/admission"} className="nav__link">Admission</Link> */}
    {
winners ?   <Dropdown
              menu={{items:winners}}
              placement="bottomLeft"
            >
      <a  className={active==='award' ? "nav__link rounded dropdown-toggle active p-2 p-lg-2" : "nav__link rounded dropdown-toggle p-2 p-lg-2"} onClick={(e)=>{
              handleActive('award')
              // navToggle()
            }} id="navbarDropdown" role="button" aria-expanded="false">
Award Winners </a>   
            </Dropdown>:<></>
            }
    
    </li>

<li className="nav__item">
    {/* <Link href={"/photo-gallery"} className="nav__link">Photo Gallery</Link> */}
    <Link className={active==='blog' ? "nav__link rounded active p-2 p-lg-2" : "nav__link rounded p-2 p-lg-2"} onClick={(e)=>{
handleActive('blog')
navToggle()
            }} href="/blogs">Blogs</Link>
    
    </li>
      


<li className="nav__item">

{
abouts ?   <Dropdown
              menu={{items:abouts}}
              placement="bottomLeft"
            >
      <a  className={active==='about' ? "nav__link rounded active dropdown-toggle p-2 p-lg-2" : "nav__link rounded dropdown-toggle p-2 p-lg-2"} onClick={(e)=>{
              handleActive('about')
              // navToggle()
            }} id="navbarDropdown" role="button" aria-expanded="false">
About Eawards </a>   
            </Dropdown>:<></>
            }

</li>

<li className="nav__item">
{
            userData ? <>
             <button className="btn btn-danger px-2 py-1" type='button' onClick={logoutFun}>Logout</button></> :
            <> <button className="btn bg-warning px-2 py-1" style={{backgroundColor:'black'}} type='button' onClick={()=>{
router.push("/register")
            }}>Register</button></>
          }

</li>

      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar2;

