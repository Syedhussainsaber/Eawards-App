// ImageSelector.js

import React, { useState } from 'react';
import { useData } from '@/contexts/DataApi';

const ImageSelector = ({ images, name}) => {
  
const {handleActor, handleDirector, handleActress} = useData()
const [selectedImage, setSelectedImage] = useState(null);

const handleImageClick = (image) => {
 setSelectedImage(image[1])
  };

  return (
    <div className="image-selector w-75 m-auto">
      {images.map((image, index) => (
        <div
          key={index}
          className={`image-item ${selectedImage === image[1] ? 'selected shadow-lg rounded' : ''}`}
          onClick={() => {
            handleImageClick(image)

            if(name === 'actor'){
              handleActor(image)
              }
              else if(name==='director'){
              handleDirector(image)
              }
              else if(name==='actress'){
              handleActress(image)
              }
          }}
        >
          <img src={image[1]['img']} alt={`Image ${index + 1}`} />
<h5 className='text-center py-2'>{image[1]['name']}</h5>
        </div>
      ))}
    </div>
  );
};

export default ImageSelector;
