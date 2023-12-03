import React from 'react'

const NewsDetails = ({context}) => {
  return (
    <div style={{position:'relative', top:'160px'}}>
    <h2 className='text-center py-2 mt-2 fw-bold'>News Details</h2>
   
   {/* {console.log(context,"newsDetails")} */}
   
       </div>
  )
}

export default NewsDetails



export const getServerSideProps = async(context)=>{
    try{
      
        return {
            props:{
context
            }
        }
      }
      catch(err){
      console.log(err)
      }
}