import { useEffect, useState } from "react";
import { fetchImages } from "../api/items";

function Card({ image, setImage }) {
  useEffect(() => {
    const loadImage = async () => {
      const data = await fetchImages(150);
      setImage(data);
    };

    loadImage();
  }, []);

  return <>{image && <img src={image} alt="ditto" height={200} />}</>;
}

export default Card;
//
