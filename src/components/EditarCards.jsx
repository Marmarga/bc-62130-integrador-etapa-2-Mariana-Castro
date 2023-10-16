import './EditarCards.scss'

const EditarCards = ({producto}) => {

  return (
    <a className="editarCard" href="#">
    <article className="card__article">
    <div className="card__image-container">
        <img className="card__image" src={producto.foto} alt={producto.nombre} />
      </div>

      <div className="card__content">
        <h2 className="editarCard__heading">{producto.nombre}</h2>
        <div className="card__description">

          <p className='descripcion'>Precio:{producto.precio}</p>
          <p className='descripcion'>Stock:{producto.stock}</p>
          <p className='descripcion'> Marca:{producto.marca}</p>
          <p className='descripcion'>Categoria:{producto.categoria}</p>
          <p className='descripcion'>Detalle:{producto.detalles}</p>
        </div>
      </div>
    </article>
  </a>
  )
}

export default EditarCards