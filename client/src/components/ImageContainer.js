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
    }

    if (image.sharks && image.cats) {
      axios.get("/api/random").then((response) => {
        setData(response.data);
      });
    }

    if (image.cats) {
      setMode(LOADING);
      axios.get("/api/cats").then((response) => {
        setTimeout(() => {
          setMode(SHOW);
          setData(response.data);
        }, 200);
      });
    }

    if (image.sharks) {
      axios.get("/api/sharks").then((response) => setData(response.data));
    }

    console.log("here");
  }, [image]);

  return (
    <div>
      <Button onClick={() => setImage({ ...image, cats: !image.cats })}>
        Cats
      </Button>
      <Button onClick={() => setImage({ ...image, sharks: !image.sharks })}>
        sharks
      </Button>
      {mode === LOADING && <Status>Loading...</Status>}
      {mode === SHOW && <ImageItem images={data}></ImageItem>}
      {mode === EMPTY && <Empty></Empty>}
    </div>
  );
};

export default ImageContainer;
