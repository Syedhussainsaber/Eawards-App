
import React,{useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import { useData } from '@/contexts/DataApi'

const About = () => {

const router = useRouter()
const {handleActive, handlePromotion} = useData()
const [promotion, setPromotion] = useState({})

useEffect(()=>{
if(router.asPath.includes("about")){
handleActive("about")
}
},[])


return (
<>

<div  style={{position:'relative', top:'160px'}}>
<h2 className='text-center py-3' >{router.query.about}</h2>
{/* <div className='w-100 d-flex justify-content-center'> */}
{ router.asPath.toLowerCase().includes('contactforpromotion') ? 
  <form className='col-10 col-md-6 m-auto my-4 py-2' onSubmit={(e)=>{
    e.preventDefault()
    handlePromotion(promotion)
    setPromotion({
      name:"",
      email:"",
      phoneNumber:'',
      company:'',
      message:""
    })
  }}>
  <div className="row mb-3">
    <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" value={promotion.name} onChange={(e)=>{
setPromotion({...promotion,name:e.target.value})
}} id="inputName"/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputCompany" className="col-sm-2 col-form-label">Comapany</label>
    <div className="col-sm-10">
      <input type="text" value={promotion.company} className="form-control" onChange={(e)=>{
setPromotion({...promotion,company:e.target.value})
}} id="inputCompany"/>
    </div>
  </div>

  <div className="row mb-3">
    <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" value={promotion.email} className="form-control" onChange={(e)=>{
setPromotion({...promotion,email:e.target.value})
}} id="inputEmail"/>
    </div>
  </div>

  <div className="row mb-3">
    <label htmlFor="inputNumber" className="col-sm-3 col-form-label">Contact Number</label>
    <div className="col-sm-9"> 
      <input value={promotion.phoneNumber} type="tel" className="form-control" onChange={(e)=>{
setPromotion({...promotion, phoneNumber:e.target.value})
}} id="inputNumber"/>
    </div>
  </div>

  <div className="row mb-3">
    <label htmlFor="inputMessage" className="col-sm-2 col-form-label">Message</label>
    <div className="col-sm-10">
      <textarea className='form-control' value={promotion.message} onChange={(e)=>{
setPromotion({...promotion,message:e.target.value})
}} name="message" id="inputMessage" cols="30" rows="10"></textarea>
    </div>
  </div>


<div className="col-6 col-md-3 mx-auto my-4">
<button type="submit" disabled={ Object.values(promotion).length === 5 && promotion.email !== '' && promotion.name !=="" && promotion.phoneNumber !== '' && promotion.company !== '' && promotion.message !== '' ? false : true} style={{backgroundColor:"#000080", color:'white'}} className="btn w-100">Submit</button>
</div>
  
</form>:<></>
}

{/* </div> */}


</div>
</>
  )
}

export default About
