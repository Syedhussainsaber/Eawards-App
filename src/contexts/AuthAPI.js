import React, { createContext, useContext, useEffect, useState, useReducer } from 'react'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged, signOut,} from "firebase/auth"
  import { auth, storage, db} from '../../firebaseConfig';
  import { useRouter } from 'next/router';
import { toast } from 'react-toastify';  
import { useData } from './DataApi';


const AuthContext = createContext()

const AuthAPI = ({children}) => {

  const [userData, setUserData] = useState(null)
  const router = useRouter()

const { uploadUsers} = useData()




  useEffect(()=>{
onAuthStateChanged(auth,async(user)=>{
if(user){
 setUserData(user)
 if(router.route ==='/'){
  router.replace('/home')
}
}
else if(router.pathname==='/'){
  setUserData(null)
}
else{
  setUserData(null)
}
})
  },[])



  const registerFun = async(email,password,phoneNumber)=>{
  try{
  const userRes= await createUserWithEmailAndPassword(auth,email,password)
userRes.user.phoneNumber = phoneNumber
if(userRes?.user){
uploadUsers({
    email:email,
    phoneNumber:phoneNumber
  })
toast.success("Registered Successfully")
await router.replace("/home")
}
setUserData(userRes?.user)
  }
  catch(err){
  console.log(err)
  toast.error("Not Registered")
  }
  }
  
const loginFun = async(email,password)=>{
try{
const userRes = await signInWithEmailAndPassword(auth,email,password)
if(userRes?.user){
  toast.success("Logged In Successfully")
 await router.replace("/home")
  setUserData(userRes?.user)
}
}
catch(err){
console.log(err)
toast.error("Not Logged In")
}
}


const logoutFun = async ()=>{
toast.success("Logged Out Successfully")
await signOut(auth)
router.replace("/")
setUserData(null)
}
  
  return (
   <AuthContext.Provider value={{registerFun,userData,loginFun,logoutFun}} >
{children}
   </AuthContext.Provider>
  )

}

export default AuthAPI


const useAuth = ()=>{
return useContext(AuthContext)
}

export {useAuth,AuthAPI}