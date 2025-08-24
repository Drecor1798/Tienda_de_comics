import "./ItemListContainer.css"

const ItemListContainer = () => {
    const imgEntrada = "./image/1.png"
  return (
    <div>
        <img className="imgEntrada" src={imgEntrada} alt="" />
        <h1>Bienvenido a La tienda de comics</h1>
    </div>
  )
}

export default ItemListContainer