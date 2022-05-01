import { useState } from 'react';
import Button from "./Button";
const ImageItem = ({ images }) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(currentIndex);
  return (
    <div>
      {currentIndex > 0 && <Button onClick={() => setCurrentIndex(currentIndex - 1)}><img src='images/left-arrow.png' alt='left-arrow'/></Button>}
      <img src={images[currentIndex]} alt={`carousel-image-${currentIndex}`}/>  
      {currentIndex < images.length - 1 && <Button onClick={() => setCurrentIndex(currentIndex + 1)}><img src='images/right-arrow.png' alt='right-arrow'/></Button>}
    </div>
  )
}

export default ImageItem;