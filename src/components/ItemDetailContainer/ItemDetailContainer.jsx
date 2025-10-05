import { useEffect, useState } from 'react';
import { getUnProducto } from '../../Service/Config'; 
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const { idItem } = useParams();

  useEffect(() => {
    setLoading(true); 
    setError(null);    
    setProducto(null); 

    getUnProducto(idItem)
      .then((respuesta) => {
        setProducto(respuesta); 
      })
      .catch((err) => {
        console.error("Error al cargar el producto:", err); 
        setError("No se pudo cargar el detalle del producto. Por favor, inténtalo de nuevo más tarde.");
      })
      .finally(() => {
        setLoading(false); 
      });
  }, [idItem]); 

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h2>Cargando detalle del producto...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: "center", padding: "20px", color: "red" }}>
        <h2>Error: {error}</h2>
      </div>
    );
  }


  if (!producto) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h2>¡Lo sentimos! El producto que buscas no existe.</h2>
      </div>
    );
  }

  return (
    <div>
      <ItemDetail {...producto} />
    </div>
  );
};

export default ItemDetailContainer;

