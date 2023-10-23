
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthAPI';
import { useData } from '@/contexts/DataApi';
import { toast } from 'react-toastify';
/* eslint-disable no-template-curly-in-string */

/* eslint-enable no-template-curly-in-string */


const UserForm = ({title,phoneNumber,confirmPassword,industry}) => {
  const [user,setUser] = useState({})
const {registerFun,userData,loginFun}= useAuth()
const {handleVotes, bestActor, bestActress, bestDirector} = useData()

  const handleSubmit = (e)=>{
e.preventDefault()
 if(title==="Register" ){
  if(user.confirmPassword === user.password){
    if(!isNaN(parseInt(user.phoneNumber))){
      registerFun(user.email, user.password,user.phoneNumber)
    }
    else{
toast.error("Enter a valid phone number!")
    }
   
  }
else{
toast.error("Password Not Matched!")
}
 }
else if (title==='Login'){
loginFun(user.email,user.password)
}

else if (title==='Submit'){
if(userData){
  if(userData.email === user.email ){
    handleVotes({
         userEmail: user.email,
         phoneNumber:user.phoneNumber,
         industry:industry,
         bestActor:bestActor,
         bestDirector:bestDirector,
         bestActress: bestActress
         })
   toast.success("Thank You For Submitting!")      
     }
   else{
   toast.error("Email Not Matched!")
   }
}
else{
  toast.error("You need to register!")
}
  

}

}

return (<form className='mx-auto col-sm-6 col-10 my-4' onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" onChange={(e)=> setUser({
      ...user,
      email:e.target.value
    })} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>

  {
    phoneNumber ?  <div className="mb-3">
    <label htmlFor="exampleInputPhoneNumber1" className="form-label">Phone Number</label>
    <input type='tel' onChange={(e)=> setUser({
      ...user,
      phoneNumber:e.target.value
    })} className="form-control" id="exampleInputPhoneNumber1"/>
  </div>:<></>
  }
 {
  title !== "Submit" ?  <div className="mb-3">
  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
  <input type="password" onChange={(e)=> setUser({
    ...user,
password:e.target.value
  })} className="form-control" id="exampleInputPassword1"/>
</div>:<></>
 }

{
  confirmPassword ?   <div className="mb-3">
  <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
  <input type="password" onChange={(e)=> setUser({
    ...user,
confirmPassword:e.target.value
  })} className="form-control" id="exampleInputPassword1"/>
</div>:<></>
}

{
  title !== "Submit" ? <div className="mb-3 form-check">
  <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
  <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
</div>:<></>
}
  
  <button type="submit" className="btn btn-dark">{title}</button>
</form>
);
}
export default UserForm;