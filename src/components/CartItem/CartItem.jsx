import { useContext } from "react";
import { CarritoContext } from "../../Context/CarritoContext";
import "./CartItem.css";

export const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto } = useContext(CarritoContext);

  return (
    <div className="cart-item">
      <h4>{item.nombre}</h4>
      <p>Cantidad: {cantidad}</p>
      <p>Precio: ${item.precio}</p>
      <button onClick={() => eliminarProducto(item.id)}>Eliminar</button>
    </div>
  );
};

