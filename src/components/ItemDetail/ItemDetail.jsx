import './ItemDetail.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ id, nombre, precio, descripcion, stock }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    console.log(`Productos agregados: ${cantidad}`);
  };

  return (
    <div className="item-detail-container">
        <h2>{nombre}</h2>
        <h3>Precio: ${precio.toLocaleString()}</h3>

        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={`/imagenes/${nombre}/1.png`} className="d-block w-100" alt={`${nombre} imagen 1`} />
            </div>
            <div className="carousel-item">
                <img src={`/imagenes/${nombre}/3.png`} className="d-block w-100" alt={`${nombre} imagen 3`} />
            </div>
            <div className="carousel-item">
                <img src={`/imagenes/${nombre}/4.png`} className="d-block w-100" alt={`${nombre} imagen 4`} />
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>

    <p>{descripcion ? descripcion : "Descripción no disponible."}</p>

    {agregarCantidad > 0 ? (
            <Link to="/cart" className="btn btn-success">
                Terminar Compra
            </Link>
        ) : (
            <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />
        )}
    </div>
  );
};

export default ItemDetail;


