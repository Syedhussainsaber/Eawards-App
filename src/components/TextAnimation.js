import React from 'react';


const TextAnimation = ({text1, text2, text3}) => {
  return (
    <div className="marquee-container">
      <div className="marquee-text"> <span className='mx-4'>{text1}</span> <span className='mx-4'>{text2}</span> <span className='mx-4'>{text3}</span> </div>
    </div>
  );
};

export default TextAnimation;
