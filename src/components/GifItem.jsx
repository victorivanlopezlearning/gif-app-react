
export const GifItem = ({ title, url }) => {

  return (
    <div className="card">
      <img src={url} alt={`Imagen ${title}`} />
      <div className="card-body">
        <h3>{title}</h3>
      </div>
    </div>
  )
}