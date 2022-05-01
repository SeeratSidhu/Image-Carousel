import { useState } from 'react';
import Button from "./Button";
const ImageItem = ({ images }) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(currentIndex);
  return (
    <div>
      {currentIndex > 0 && <Button onClick={() => setCurrentIndex(currentIndex - 1)}>Left</Button>}
      {currentIndex < images.length - 1 && <Button onClick={() => setCurrentIndex(currentIndex + 1)}>Right</Button>}
      <img src={images[currentIndex]} alt="cats"/>  
    </div>
  )
}

export default ImageItem;