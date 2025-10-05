import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
// Importamos directamente las funciones de tu archivo de configuración de Firebase
import { getProductos, getProductosPorCategoria } from "../../Service/Config"; // Ajusta la ruta si es necesario

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true); // Nuevo estado para indicar carga
  const [error, setError] = useState(null); // Nuevo estado para manejar errores
  const { IdCategoria } = useParams();

  useEffect(() => {
    setLoading(true); // Inicia la carga
    setError(null);    // Limpia cualquier error previo

    const funcionProductos = IdCategoria ? getProductosPorCategoria : getProductos;

    funcionProductos(IdCategoria)
      .then(res => {
        setProductos(res);
      })
      .catch(err => {
        console.error("Error al cargar productos:", err); // Log más detallado
        setError("No se pudieron cargar los productos. Por favor, inténtalo de nuevo más tarde."); // Mensaje para el usuario
      })
      .finally(() => {
        setLoading(false); // Finaliza la carga, ya sea con éxito o error
      });
  }, [IdCategoria]); // Dependencia del efecto en IdCategoria

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h2>Cargando productos...</h2>
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

  // Si no hay productos después de cargar (y sin error), podrías mostrar un mensaje.
  if (!loading && !error && productos.length === 0) {
    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h2>No hay productos disponibles en esta categoría.</h2>
        </div>
    );
  }


  return (
    <>
      <h2 style={{ textAlign: "center" }}>Mis productos</h2>
      <ItemList productos={productos} />
    </>
  );
};

export default ItemListContainer;



