
const GifItem = ({ title, url }) => {

  return (
    <div className="card">
      <img src={url} alt={`Imagen ${title}`} />
      <p>{title}</p>
    </div>
  )
}

export default GifItem;