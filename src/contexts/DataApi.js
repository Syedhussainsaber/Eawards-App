import React, { useEffect, useState } from 'react'
import { useContext, useReducer, createContext } from 'react'
import { reducer } from '@/reducers/database'
import {addDoc, updateDoc, onSnapshot, collection,} from "firebase/firestore"
import { db,storage } from '../../firebaseConfig'
import {toast} from "react-toastify"


const DataContext = createContext()

const getLocalCurrentMovie = ()=>{
    if(typeof window !== 'undefined'){
        const currentMovie =localStorage?.getItem("currentMovie")
        if(currentMovie === null || currentMovie =='[]' || currentMovie == 'undefined'){
        return []
        }
        else if(typeof currentMovie =='string'){
            return JSON.parse(currentMovie)
        }
        else{
            return currentMovie
        }
    }

}

const getLocalReviewMovie = ()=>{
    if(typeof window !== 'undefined'){
        const reviewMovie = localStorage?.getItem("reviewMovie")
        if(reviewMovie === null || reviewMovie === '{}' || reviewMovie == 'undefined'){
        return {}
        }
        else if(typeof reviewMovie == 'string'){
            return JSON.parse(reviewMovie)
        }
        else {
            return reviewMovie
        }
    }

}

const getLocalReviewNews = ()=>{
    if(typeof window !== 'undefined'){
        const reviewNews = localStorage?.getItem("reviewNews")
        if(reviewNews === null || reviewNews === '{}' || reviewNews == 'undefined'){
        return {}
        }
        else if(typeof reviewNews == 'string'){
            return JSON.parse(reviewNews)
        }
        else {
            return reviewNews
        }
    }

}


const initialState = {
    currentMovie:getLocalCurrentMovie(),
    reviewMovie:getLocalReviewMovie(),
    reviewNews: getLocalReviewNews(),
    currentUser:{
    },
    votes:[
        {
userEmail:"",
phoneNumber:'',
industry:"",
bestActor:{
    img:"",
    name:''
},
bestActress:{
    img:"",
    name:""
},
bestDirector:{
    img:'',
    name:''
}
},
    ],
    comments:[],
    likes:[],
}

const DataApi = ({children}) => {

const [state, dispatch] = useReducer(reducer,initialState)
const [bestActor, setBestActor] = useState(null)
const [bestDirector, setBestDirector] = useState(null)
const [bestActress, setBestActress] = useState(null)
const [votes, setVotes] = useState(null)
const [active, setActive] = useState('home')

useEffect(()=>{
const fun = async()=>{
 const data= await state
 console.log(data)
localStorage.setItem("currentMovie", JSON.stringify(data.currentMovie))
localStorage.setItem("reviewMovie",JSON.stringify(data.reviewMovie))
localStorage.setItem("reviewNews",JSON.stringify(data.reviewNews))
}
fun()
},[state])

const uploadUsers = async(user)=>{
await addDoc(collection(db,'users'),user)
}

const handleVotes = async(votes)=>{
await addDoc(collection(db,`${votes.industry}`),votes)
}

const handleActor= (image)=>{
// setBestActor(JSON.stringify(image))
setBestActor(image[1])
console.log(image[1])
}

const handleActress= (image)=>{
// setBestActress(JSON.stringify(image))
setBestActress(image[1])
console.log(image[1])
}

const handleDirector= (image)=>{
// setBestActress(JSON.stringify(image))
setBestDirector(image[1])
console.log(image[1])
}

const getVotes = (industry, setVotes, email)=>{
try{
onSnapshot(collection(db,industry),(res)=>{
setVotes(res.docs.map((doc)=>{
return {
...doc.data(),id:doc.id
}
}).filter((item)=>{
return item.userEmail === email
})
)
})
}
catch(err){
console.log(err)
}
}

const getAllVotes = (industry, setAllVotes)=>{
onSnapshot(collection(db,industry),(res)=>{
setAllVotes(
    res.docs.map((doc)=>{
return {
...doc.data(), id:doc.id
}
    })
)
    })
}

const handleActive = (value)=>{
setActive(value)
}

const handleCurrentMovie = (currentMovie)=>{
dispatch({type:"UPDATE_MOVIE", payload:currentMovie})
}

const handleReviewMovie = (reviewMovie)=>{
    dispatch({type:"REVIEW_MOVIE",payload:reviewMovie})
}

const handleReviewNews = (reviewNews)=>{
    dispatch({type:"REVIEW_NEWS",payload:reviewNews})
}

const handleComments = async(commentData, docName)=>{
try{
const res = await addDoc(collection(db,docName), commentData)

if(res){
    toast.success("Commented!")
}
// dispatch({type:'UPLOAD_COMMENTS', payload:commentData})
}
catch(err){
    toast.error("Error Occurred")
console.log(err)
}
}



const getComments  = (idKey, id, setRecentComments, docName, category)=>{
try{
onSnapshot(collection(db, docName),(res)=>{
setRecentComments(
    res.docs.map((doc)=>{
return {
    ...doc.data(), id:doc.id
}
    }).filter((comment)=>{
return comment[idKey] === id && comment.category === category
    })
)
})
}
catch(err){
console.log(err)
}
}



const handlePromotion = async(promotions)=>{
try{
const res = await addDoc(collection(db, 'promotions'), promotions)
if(res){
    toast.success("Sent Successfully!")
}
}
catch(err){
    toast.error("Error Occurred!")
console.log(err)
}
}


return (
<DataContext.Provider value={{state, votes, active,handleReviewMovie,handleComments, getComments,handleCurrentMovie, handleActive, uploadUsers, getVotes,getAllVotes, handleVotes, handleActor, handleActress, handleDirector,bestActor, bestActress, bestDirector, handlePromotion, handleReviewNews}} >
{children}
</DataContext.Provider>
  )
  
}

const useData = ()=>{
    return useContext(DataContext)
}


export {DataApi,useData}
