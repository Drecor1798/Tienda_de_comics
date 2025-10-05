import React, { useState, useContext } from 'react';
import { CarritoContext } from '../../Context/CarritoContext';
import { db } from '../../Service/Config';
import { collection, addDoc } from 'firebase/firestore';
import './Checkout.css'; // Importa el CSS estilo cómic

export const Checkout = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [emailConfirmacion, setEmailConfirmacion] = useState('');
  const [error, setError] = useState('');
  const [ordenId, setOrdenId] = useState('');
  const { carrito, total, vaciarCarrito } = useContext(CarritoContext);

  const manejadorFormulario = (event) => {
    event.preventDefault();

    // Validaciones
    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError('¡Por favor completá todos los campos!');
      return;
    }

    if (email !== emailConfirmacion) {
      setError('Los correos electrónicos no coinciden');
      return;
    }

    const orden = {
      items: carrito.map((producto) => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad,
      })),
      total,
      fecha: new Date(),
      cliente: {
        nombre,
        apellido,
        telefono,
        email,
      },
    };

    addDoc(collection(db, 'ordenes'), orden)
      .then((docRef) => {
        setOrdenId(docRef.id);
        vaciarCarrito();
        setError('');
      })
      .catch((error) => {
        console.error('Error al crear la orden', error);
        setError('Se produjo un error al generar la orden.');
      });
  };

  return (
    <div className="checkout-container">
      <h2>¡Finalizá tu compra!</h2>
      <form onSubmit={manejadorFormulario} className="checkout-form">
        <div>
          <label>Nombre</label>
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div>
          <label>Apellido</label>
          <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
        </div>
        <div>
          <label>Teléfono</label>
          <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Confirmar Email</label>
          <input type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
        </div>

        {error && <p className="error-message">{error}</p>}

        <button type="submit"> Confirmar Compra </button>

        {ordenId && (
          <p className="success-message">
            🎉 ¡Gracias por tu compra! Tu número de orden es: <strong>{ordenId}</strong>
          </p>
        )}
      </form>
    </div>
  );
};

export default Checkout;
