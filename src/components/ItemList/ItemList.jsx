import React from 'react'
import Item from '../Item/item'
import "./ItemList.css"


const ItemList = ({productos}) => {
  return (
    <div className='contenedorDeProductos'>
    {productos.map(item => <Item {...item}/>)}
    </div>
  )
}

export default ItemList