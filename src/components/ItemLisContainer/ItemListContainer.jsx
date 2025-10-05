import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

import { getProductos, getProductosPorCategoria } from "../../Service/Config"; 
const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);
  const { idCategoria } = useParams();

  useEffect(() => {
    setLoading(true); 
    setError(null);    

    const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;

    funcionProductos(idCategoria)
      .then(res => {
        setProductos(res);
      })
      .catch(err => {
        console.error("Error al cargar productos:", err); 
        setError("No se pudieron cargar los productos. Por favor, inténtalo de nuevo más tarde."); // Mensaje para el usuario
      })
      .finally(() => {
        setLoading(false); 
      });
  }, [idCategoria]); 

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h2>Cargando productos...</h2>
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



