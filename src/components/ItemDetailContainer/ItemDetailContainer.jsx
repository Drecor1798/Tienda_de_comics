import React, { useEffect, useState } from 'react';
import { getUnProducto } from '../../Asycmocks';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { idItem } = useParams();

  useEffect(() => {
    getUnProducto(idItem).then((respuesta) => setProducto(respuesta));
  }, [idItem]);

  return (
    <div>
      {
        producto ? (
          <ItemDetail {...producto} />
        ) : (
          <p style={{ textAlign: 'center', marginTop: '50px' }}>Cargando producto...</p>
        )
      }
    </div>
  );
};

export default ItemDetailContainer;
