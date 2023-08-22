import { GifItem } from "./GifItem";
import useGifsByCategory from "../hooks/useGifsByCategory";
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {

  const { imagesGifs, isLoading } = useGifsByCategory(category);

  return (
    <>
      <h2>{category}</h2>

      {isLoading && <h3>Cargando...</h3>}

      <div className="card-grid">
        {imagesGifs.map((image) => (
          <GifItem
            key={image.id}
            {...image} // Esparcir propiedades
          />
        ))}
      </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};