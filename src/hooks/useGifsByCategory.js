import { useEffect, useState } from "react";
import { getGifs } from "../helpers";

const useGifsByCategory = (category) => {

  const [imagesGifs, setImagesGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImagesFromGifs = async () => {
    const images = await getGifs(category);
    setImagesGifs(images);
    setIsLoading(false);
  };

  useEffect(() => {
    getImagesFromGifs();
  }, [])

  return {
    imagesGifs,
    isLoading,
  }
}

export default useGifsByCategory;