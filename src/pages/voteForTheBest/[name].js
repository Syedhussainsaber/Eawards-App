import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import UserForm from '@/components/Form'
import ImageSelector from '@/components/ImageRadioGroup'
import Footer from '@/components/Footer'
import { useData } from '@/contexts/DataApi'
import MovieCard from '@/components/MovieCard'

import {toast} from "react-toastify"
import { useAuth } from '@/contexts/AuthAPI'
import jsPDF from 'jspdf';
import axios from 'axios';


const Woods = ({starsData}) => {

const router = useRouter()
const actors = Object.entries(starsData['actors'])
const directors = Object.entries(starsData['directors'])
const actresses = Object.entries(starsData['actresses'])
const {users, getVotes, getAllVotes, handleActive } = useData()
const [votes, setVotes] = useState([])
const [allVotes, setAllVotes] = useState([])
const {userData} = useAuth()


useEffect(()=>{
if(userData){
  console.log(userData.email)
  getVotes(router.query.name, setVotes, userData.email)
getAllVotes(router.query.name, setAllVotes)
}

},[router.query.name, userData])

useEffect(()=>{
  if(router.asPath.includes('/voteForTheBest/')){
    handleActive("vote")
  }
},[])

const generatePdf = async () => {
  const doc = new jsPDF();

  // Set main title
  doc.setFontSize(24);
  doc.setTextColor(0, 0, 0);
  doc.text('Eawards', 105, 20, 'center');

  // Set subheading
  doc.setFontSize(16);
  doc.text('Your Bests:', 105, 30, 'right');

  // Set subheading

  // Fetch and add images with titles
  const imageElements = [
new Image(),
new Image(),
new Image()
  ];

  imageElements[0].src = '/img1.jpg'
  imageElements[1].src = '/img2.jpg'
  imageElements[2].src = '/img3.jpg'
  imageElements[0].alt = votes[0]?.bestActor?.name
  imageElements[1].alt = votes[0]?.bestDirector?.name
  imageElements[2].alt = votes[0]?.bestActress?.name
  let xPosition = 10;

  for (const img of imageElements) {
    // Add image URL as text link
    console.log(img)
    img.onload = function () {
      // Add image
      doc.addImage(this, 'JPEG', xPosition, 40, 50, 50);

      // Add image title
      doc.setFontSize(12);
      doc.text(`${img.alt}`, xPosition + 30, 105, 'center');

      xPosition += 70; // Adjust the x-position for the next image

      // If this is the last image, save or display the PDF
      if (xPosition >= 210) {
        doc.save('my_pdf.pdf');
      }
    };
  }
  // Save or display the PDF

  // for (const { url, title } of imageUrls) {
  //   try {
  //     const response = await axios.get(url, {
  //       responseType: 'arraybuffer',
  //     });

  //     const base64Image = Buffer.from(response.data, 'binary').toString('base64');

  //     // Add image
  //     doc.addImage(`data:image/jpeg;base64,${base64Image}`, 'JPEG', xPosition, 40, 60, 60);

  //     // Add image title
  //     doc.setFontSize(12);
  //     doc.text(title, xPosition + 30, 105, 'center');

  //     xPosition += 75; // Adjust the x-position for the next image
  //   } catch (error) {
  //     console.error('Error fetching image:', error);
  //   }
  // }
  // Save or display the PDF

};


return (
    <>
<div style={{position:'relative', top:'160px'}}>
<h1 className='text-center py-4 pb-3 fw-bold fs-1 text-success'>Vote For Your Best</h1>
<h2 className='w-50 text-center m-auto fs-2 pt-2 pb-4'>{starsData['title']}</h2>
{
votes.length > 0  ? 
<>

<p className='text-center fw-bold'>You Voted! for the {starsData['title']} </p>
<h4 className='text-left w-50 mx-auto mt-5'>Your Bests :</h4>
<div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3 m-auto w-75 w-sm-50 my-4">
<MovieCard title={votes[0]?.bestActor?.name} type={'person'} id={''} description={''} img={votes[0]?.bestActor?.img} />
<MovieCard title={votes[0]?.bestDirector?.name} type={'person'} id={''} description={''} img={votes[0]?.bestDirector?.img} />
<MovieCard title={votes[0]?.bestActress?.name} type={'person'} id={''} description={''} img={votes[0]?.bestActress?.img} />
</div>
<p className='text-center fs-3 mb-4'>Total Voting Count : <span className='text-success'>{allVotes.length}</span></p>

<p className='text-center text-success fw-bold fs-4 mb-4'>Thanks For Voting!</p>

<div className="w-100 d-flex justify-content-center mb-4 gap-4">
<button className='btn btn-success' onClick={generatePdf}>Download</button>
<button className='btn btn-dark' onClick={generatePdf}>Share</button>
</div>
</>: <>
<h2 className='w-50 m-auto py-2 fs-2 mt-4 mb-2'>Select Best Actor</h2>

<ImageSelector images={actors} name='actor' />

<h2 className='w-50 m-auto py-2 fs-2 mt-4 mb-2'>Select Best Director</h2>
<ImageSelector images={directors} name={'director'} />

<h2 className='w-50 m-auto py-2 fs-2 mt-4 mb-2'>Select Best Actress</h2>
<ImageSelector images={actresses} name={'actress'} />
<UserForm title={"Submit"} phoneNumber={true} confirmPassword={false} industry={router.query.name} />
  </>
}

<Footer/>
</div>
    </>
  )
}

export default Woods

export const getServerSideProps = async(context)=>{
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     accept: 'application/json',
  //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZGEzYzFhYmUzNDZhY2FiMTdkYzQzODgwZTEzMjI1YyIsInN1YiI6IjY0ZjYxMWE2ZTBjYTdmMDEwZGU2MGIxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tlUyPRuWTZ9S9MMYEhWnj7OmNOwiLjDtgYzqbvjhvVY'
  //   }
  // };
  
  // fetch(`https://api.themoviedb.org/3/search/person?query=${'salman'}?include_adult=false&language=en-US&page=1`, options)
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //   .catch(err => console.error(err));
const {query} = context
const res= await fetch("http://eawards.vercel.app/api/starsData",{ cache: 'force-cache' })
const data = await res.json()
return {
  props:{
   starsData:data[query.name]
  }
}
}


// Woods.getInitialProps = async(ctx)=>{
// const starsRes  = await fetch("http://eawards.vercel.app/api/starsData")
// const starsData = await starsRes.json()
// return {
//   props:starsData
// }
// }


