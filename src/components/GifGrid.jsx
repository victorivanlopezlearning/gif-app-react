import { useEffect, useState } from "react";
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

      <ol>
        {imagesGifs.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ol>
    </>
  )
}

export default GifGrid;