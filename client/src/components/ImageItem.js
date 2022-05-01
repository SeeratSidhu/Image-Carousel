import { useState } from 'react';
import Button from "./Button";
const ImageItem = ({ images }) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(currentIndex);
  return (
    <div className='image-item'>
      <div className='left-control'>
      {currentIndex > 0 && <Button onClick={() => setCurrentIndex(currentIndex - 1)}><img src='images/left-arrow.png' alt='left-arrow'/></Button>}
      </div>
      <div className='main-image-container'>
      <img className='main-image' src={images[currentIndex]} alt={`carousel-image-${currentIndex}`}/>  
      </div>
      <div className='right-control'>
      {currentIndex < images.length - 1 && <Button onClick={() => setCurrentIndex(currentIndex + 1)}><img src='images/right-arrow.png' alt='right-arrow'/></Button>}
      </div>
  
    </div>
  )
}

export default ImageItem;