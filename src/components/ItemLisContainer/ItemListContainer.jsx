import { useState, useEffect } from "react"
// import { getProductos, getProductosPorCategoria } from "../../Asycmocks"
import { db } from "../../Service/Config"
import { collection, getDocs, query, where } from "firebase/firestore"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
  const [productos , setProductos] = useState([])
  const {IdCategoria} = useParams()


  // useEffect(() => {
  //   const funcionProductos = IdCategoria ? getProductosPorCategoria : getProductos;
  //   funcionProductos(IdCategoria)
  //     .then(res => setProductos(res))
  // },[IdCategoria])

  useEffect(() => {
    const misProductos = IdCategoria ? query(collection(db, "productos"), where("idcat", "==", IdCategoria)) : collection(db,"productos")
    getDocs(misProductos)
      .then(res => {
        const nuevosProductos = res.docs.map(doc => {
          const data = doc.data()
          return {id: doc.id, ... data}
        })
        setProductos(nuevosProductos)
      })
      .catch(error => console.log(error))
  },[IdCategoria])

  return (
    <>
        <h2 style={{textAlign:"center"}}>Mis productos</h2>
        <ItemList productos={productos}/>
    </>
  )
}

export default ItemListContainer