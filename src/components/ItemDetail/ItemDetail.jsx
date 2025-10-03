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
    const Item = { id, nombre, precio };
    agregarAlCarrito(Item, cantidad);
  };

  return (
    <div className="item-detail-comic">
      <h2 className="comic-title">{nombre}</h2>
      <h3 className="comic-price">Precio: ${precio.toLocaleString()}</h3>

      <div id="carouselExample" className="carousel slide comic-carousel" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={`/imagenes/${nombre}/1.png`} className="d-block w-100 comic-img" alt={`${nombre} imagen 1`} />
          </div>
          <div className="carousel-item">
            <img src={`/imagenes/${nombre}/3.png`} className="d-block w-100 comic-img" alt={`${nombre} imagen 3`} />
          </div>
          <div className="carousel-item">
            <img src={`/imagenes/${nombre}/4.png`} className="d-block w-100 comic-img" alt={`${nombre} imagen 4`} />
          </div>
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

      <p className="comic-description">{descripcion ? descripcion : "Descripción no disponible."}</p>

      {agregarCantidad > 0 ? (
        <Link to="/cart" className="comic-button comic-finish-btn">Terminar Compra</Link>
      ) : (
        <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />
      )}
    </div>
  );
};

export default ItemDetail;


