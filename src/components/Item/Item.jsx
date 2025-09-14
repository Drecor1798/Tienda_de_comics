import "./Item.css"
import { Link } from 'react-router-dom'

const Item = ({ id, nombre, precio, img }) => {
  return (
    <div className="card" style={{ width: '18rem', margin: '1rem' }}>
      <img src={img} className="card-img-top" alt={nombre} />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">Precio: ${precio.toLocaleString()}</p>
        <Link to={`/item/${id}`} className="btn btn-primary">Ver detalles</Link>
      </div>
    </div>
  )
}

export default Item
