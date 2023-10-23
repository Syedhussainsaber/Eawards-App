import React from 'react'
import Footer from '@/components/Footer'
const voteForBest = () => {
  return (
    <>

<div className='p-2' style={{position:'relative', top:'160px'}}>
      <h1 className='text-center text-success'>Vote For the Best</h1>

<Footer/>
    </div>
    </>
   
  )
}

export default voteForBest

// getStaticPaths() => If you want to add the feature for all the dynamic routes. If you want to see the data of all the fetched data then, we should write the logic for all data in this function. so that for every data the static file is created

// getStaticProps() => Fastest way. It fetches the api data during the build only. so all the static pages are created for this. This is very recommeded method and very good as user point of view.

// getServerSideProps() => Write the logic to fetch the data inside this funtion and return a prop in this function
// The particular page can take a prop and can use the data in the prop
// Generally, here the data is Server Side Rendered. So we get the data very fast. Generally this function is declared with *export* keyword and the function should be async function.

// Client Side Rendering is very slow by performance but even for client side fetching the data nextjs provides a package i,e SWR - Stale-While-Revalidate => Best if you are using client side rendering the data in nextjs. It provides a useSwr() hook, which generally takes a takes url and the function (fetcher) as parameters.

// useSwr returns - {data,error,isLoadind}  values after performing the tasks. Generally It caches the data. So that client no need to request the data from the server for every render. If you want the latest data then client can set the revalidtion time, so after completion of revalidation time it request the latest data from the api.

// useSwr is far better than using useEffect hook for client side rendering





