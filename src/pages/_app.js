import '@/styles/globals.css'
import "@/styles/navbar.scss"
import "@/styles/image-radio.scss"
import "@/styles/home.scss"
import AuthAPI, { useAuth } from '@/contexts/AuthAPI'
import 'bootstrap/dist/css/bootstrap.min.css';
import {AiFillInstagram,AiFillFacebook,AiFillTwitterSquare} from "react-icons/ai"
import { DataApi } from '@/contexts/DataApi';
import { ToastContainer, toast } from 'react-toastify';

import "react-toastify/dist/ReactToastify.css";


export default function App({ Component, pageProps }) {
  return (
  <>
    <DataApi>
  <AuthAPI>
      <div style={{backgroundColor:"#000080", position:'fixed', top:"0px", zIndex:"10"}} className="social-icons w-100 d-flex flex-row justify-content-end gap-3 align-items-center py-2 py-lg-1 px-2">      
          <span className='fw-bold text-white'>Socail Links:</span>
<AiFillInstagram size={30} color='white' cursor={'pointer'}/>
<AiFillFacebook size={30} color='white' cursor={'pointer'} />
<AiFillTwitterSquare size={30} color='white' cursor={'pointer'}/>
{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.debug.js" integrity="sha384-NaWTHo/8YCBYJ59830LTz/P4aQZK1sS0SneOgAvhsIl3zBu8r9RevNg5lHCHAuQ/" crossorigin="anonymous"></script> */}
        </div> 
  

        <ToastContainer/>  
         <Component {...pageProps} />
    
   </AuthAPI>
   </DataApi>
  </>
  )
}
