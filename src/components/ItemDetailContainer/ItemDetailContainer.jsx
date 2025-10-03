import React, { useEffect, useState } from 'react';
// import { getUnProducto } from '../../Asycmocks';
import { db } from '../../Service/Config';
import { getDoc,doc } from 'firebase/firestore';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { idItem } = useParams();

  // useEffect(() => {
  //   getUnProducto(idItem).then((respuesta) => setProducto(respuesta));
  // }, [idItem]);

  useEffect(() =>{
    const nuevoDoc = doc(db, "productos", idItem)

    getDoc(nuevoDoc)
      .then(res => {
        const data = res.data()
        const nuevoProducto = {id: res.id, ...data}
      })
      .catch(error => console.log(error))
  },[idItem])

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
