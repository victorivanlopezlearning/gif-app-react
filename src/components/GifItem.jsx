
const GifItem = ({ title, url }) => {

  return (
    <div className="card">
      <img src={url} alt={`Imagen ${title}`} />
      <div className="card-body">
        <p>{title}</p>
      </div>
    </div>
  )
}

export default GifItem;