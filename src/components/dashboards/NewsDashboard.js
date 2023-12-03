import React, { useState } from 'react'
import { Input } from 'antd'
import { Button } from 'antd'


const { TextArea } = Input;
const NewsDashboard = () => {

const [uploadedNews, setUploadedNews] = useState()

  return (
     <div>
    <h3 className='m-auto my-3'>News Dashboard</h3>

<div className='my-4'>
<h5>Post News</h5>
{console.log(uploadedNews, "uploadedNews")}
<div className='d-flex flex-column gap-3'>
    <div>
    <label htmlFor="news-title">News Title</label>
    <Input onChange={(e)=>{
setUploadedNews({
    ...uploadedNews,
    title:e.target.value
})
    }} size='large' id='news-title' placeholder="Enter the title" />
    </div>
 
    <div>
<label htmlFor="news-category">News Category</label>
    <Input onChange={(e)=>{
setUploadedNews({
    ...uploadedNews,
    category: e.target.value
})
    }} size='large' id='news-description' placeholder="Enter the category" />
</div>

<div>
<label htmlFor="news-description">News Description</label>
    <Input onChange={(e)=>{
setUploadedNews({
    ...uploadedNews,
    description: e.target.value
})
    }} size='large' id='news-description' placeholder="Enter the Description" />
</div>

<div className='d-flex flex-column'>
<label htmlFor="news-content">News Content</label>
   <TextArea rows={4} onChange={(e)=>{
setUploadedNews({
    ...uploadedNews,
    content: e.target.value
})
    }} name="content" id="news-content" />
</div>

<div>
<label htmlFor="news-image">News Image</label>
    <Input onChange={(e)=>{
setUploadedNews({
    ...uploadedNews,
image: e.target.files
})
    }} id='news-image' type='file' size='large' placeholder="Enter the Description" />
</div>

<div className='align-self-end'>
    <Button size="large">Upload</Button>
</div>
</div>

</div>

    </div>
  )
}

export default NewsDashboard
