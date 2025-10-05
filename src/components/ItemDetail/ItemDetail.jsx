import './ItemDetail.css';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { CarritoContext } from '../../Context/CarritoContext';

const ItemDetail = ({ id, nombre, precio, descripcion, stock }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);
  const { agregarAlCarrito } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    const item = { id, nombre, precio };
    agregarAlCarrito(item, cantidad);
  };

  const imageBasePath = `/image/imagenes/${nombre}`;

  return (
    <div className="item-detail-comic">
      <h2 className="comic-title">{nombre}</h2>
      <h3 className="comic-price">Precio: ${precio.toLocaleString()}</h3>

      <div id="carouselExample" className="carousel slide comic-carousel" data-bs-ride="carousel">
        <div className="carousel-inner">
          {[1, 3, 4].map((num, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={num}>
              <img
                src={`${imageBasePath}/${num}.png`}
                className="d-block w-100 comic-img"
                alt={`${nombre} imagen ${num}`}
                onError={(e) => {
                  e.target.src = '/image/placeholder.png'; // Fallback en caso de error
                  e.target.alt = 'Imagen no disponible';
                }}
              />
            </div>
          ))}
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>

      <p className="comic-description">{descripcion || "Descripción no disponible."}</p>

      {agregarCantidad > 0 ? (
        <Link to="/cart" className="comic-button comic-finish-btn">
          Terminar Compra
        </Link>
      ) : (
        <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />
      )}
    </div>
  );
};

export default ItemDetail;
