import React from 'react'

import { useState } from 'react'

const ItemCount = ({inicial, stock, funcionAgregar}) => {
    const[Contador, setContador] = useState(inicial)
    const incrementar = () => {
        if(Contador < stock){
            setContador(Contador + 1)
        }
        
    }
    const decrementar = () => {
        if(Contador > 1){
            setContador(Contador - 1)
        }
        
    }
    console.log(Contador)
  return (

    <>
    <div>
        <button onClick={incrementar}>+</button>
        <p>{Contador}</p>
        <button onClick={decrementar}>-</button>
    
    </div>
    <button onClick={() =>funcionAgregar(Contador)}>Agregar al carrito</button>
    </>
    
  )
}

export default ItemCount