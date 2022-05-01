import { useState } from 'react';
import Button from "./Button";
import Navigator from './Navigator';
const ImageItem = ({ images }) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = images.map((item, index) => <Navigator key={index} onClick={() => setCurrentIndex(index)}/>)
  return (
    <div className='image-item'>
      <div className='left-control'>
      {currentIndex > 0 && <Button onClick={() => setCurrentIndex(currentIndex - 1)}><img src='images/left.png' alt='left-arrow'/></Button>}
      </div>
      <div className='main-image-container'>
      <img className='main-image' src={images[currentIndex]} alt={`carousel-image-${currentIndex}`}/>
      <div className='navigation'>
        {navigation}
      </div> 
      </div>
      <div className='right-control'>
      {currentIndex < images.length - 1 && <Button onClick={() => setCurrentIndex(currentIndex + 1)}><img src='images/right.png' alt='right-arrow'/></Button>}
      </div>
    
    </div>
  )
}

export default ImageItem;