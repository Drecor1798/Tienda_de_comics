import "./Item.css";
import { Link } from 'react-router-dom';

const Item = ({ id, nombre, precio, img }) => {
  return (
    <div className="comic-card">
      <img src={img} className="comic-card-img" alt={nombre} />
      <div className="comic-card-body">
        <h5 className="comic-card-title">{nombre}</h5>
        <p className="comic-card-text">Precio: ${precio.toLocaleString()}</p>
        <Link to={`/item/${id}`} className="comic-card-button">Ver detalles</Link>
      </div>
    </div>
  );
};

export default Item;

