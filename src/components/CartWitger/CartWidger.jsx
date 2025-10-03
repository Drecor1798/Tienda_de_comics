import { useContext } from "react"
import "./CartWidger.css"
import { CarritoContext } from "../../Context/CarritoContext"
import { Link } from "react-router-dom"

const CartWidger = () => {
    const ImgCarrito = "./image/Diseño sin título (3).png"
    const {CantidadTotal} = useContext(CarritoContext)
  return (
    <div>
      <Link to="/cart">
        <img className="imgLogo" src={ImgCarrito} alt="Logo de la tienda" />
        {
          CantidadTotal > 0 && <strong>{CantidadTotal}</strong>
        }
      </Link>
        
    </div>
  )
}

export default CartWidger
