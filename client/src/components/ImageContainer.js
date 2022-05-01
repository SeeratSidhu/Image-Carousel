import { useState, useEffect } from "react";
import Button from "./Button";
import Empty from "./Empty";
import ImageItem from "./ImageItem";
import Status from "./Status";
import axios from "axios";

const LOADING = "LOADING";
const EMPTY = "EMPTY";
const SHOW = "SHOW";

const ImageContainer = () => {
  const [image, setImage] = useState({ cats: false, sharks: false });
  const [data, setData] = useState(null);
  const [mode, setMode] = useState(EMPTY);

  useEffect(() => {
    if (!image.cats && !image.sharks) {
      setData(null);
      setMode(EMPTY);
      return;
    }

    let route;

    if (image.sharks && image.cats) {
      route = 'random';
    } else if (image.cats) {
      route = 'cats';
    } else if (image.sharks) {
     route = 'sharks';
    }

    setMode(LOADING);
    axios.get(`/api/${route}`).then((response) => {
      setTimeout(() => {
        setMode(SHOW);
        setData(response.data);
      }, 200);
    });

  }, [image]);

  return (
    <div className="image-container">
      <div className="controls">
      <Button isActive={image.cats ? "active": "inactive"} onClick={() => setImage({ ...image, cats: !image.cats })}>
        Cats
      </Button>
      <Button isActive={image.sharks ? "active": "inactive"} onClick={() => setImage({ ...image, sharks: !image.sharks })}>
        sharks
      </Button>
      </div>
      {mode === LOADING && <Status>Loading...</Status>}
      {mode === SHOW && <ImageItem images={data}></ImageItem>}
      {mode === EMPTY && <Empty></Empty>}
    </div>
  );
};

export default ImageContainer;
