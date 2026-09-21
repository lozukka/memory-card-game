import { useEffect, useState } from "react";
import { fetchImages } from "../api/items";

function Card({ image, setImage }) {
  useEffect(() => {
    const loadImage = async () => {
      const data = await fetchImages(50);
      setImage(data);
    };

    loadImage();
  }, []);

  return <>{image && <img src={image} alt="ditto" />}</>;
}

export default Card;
//
