import { useEffect, useState } from 'react';
import { getUnProducto } from '../../Service/Config'; // Asegúrate de que la ruta sea correcta
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true); // Nuevo estado para indicar carga
  const [error, setError] = useState(null); // Nuevo estado para manejar errores
  const { idItem } = useParams();

  useEffect(() => {
    setLoading(true); // Inicia la carga
    setError(null);    // Limpia cualquier error previo
    setProducto(null); // Limpia el producto anterior al cargar uno nuevo

    getUnProducto(idItem)
      .then((respuesta) => {
        setProducto(respuesta); // 'respuesta' será null si el producto no existe
      })
      .catch((err) => {
        console.error("Error al cargar el producto:", err); // Log más detallado
        setError("No se pudo cargar el detalle del producto. Por favor, inténtalo de nuevo más tarde.");
      })
      .finally(() => {
        setLoading(false); // Finaliza la carga, ya sea con éxito o error
      });
  }, [idItem]); // Dependencia del efecto en idItem

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h2>Cargando detalle del producto...</h2>
        {/* Aquí podrías añadir un spinner o un indicador visual de carga */}
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

  // Si no está cargando, no hay error, pero 'producto' es null, significa que no se encontró.
  if (!producto) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h2>¡Lo sentimos! El producto que buscas no existe.</h2>
      </div>
    );
  }

  // Si llegamos aquí, significa que 'producto' tiene datos y podemos mostrar el detalle.
  return (
    <div>
      <ItemDetail {...producto} />
    </div>
  );
};

export default ItemDetailContainer;

