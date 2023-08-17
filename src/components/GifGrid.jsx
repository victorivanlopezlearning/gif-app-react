import { useEffect, useState } from "react";
import GifItem from "./GifItem";
import { getGifs } from "../helpers";

const GifGrid = ({ category }) => {

  const [imagesGifs, setImagesGifs] = useState([]);

  const getImagesFromGifs = async () => {
    const images = await getGifs(category);
    setImagesGifs(images);
  };

  useEffect(() => {
    getImagesFromGifs();
  }, [])

  return (
    <>
      <h2>{category}</h2>

      <div className="card-grid">
        {imagesGifs.map((image) => (
          <GifItem key={image.id} image={image} />
        ))}
      </div>
    </>
  )
}

export default GifGrid;