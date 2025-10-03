import NavBar from './components/navbar/navbar'
import ItemListContainer from './components/ItemLisContainer/ItemListContainer'
import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CarritoProvider } from './Context/CarritoContext'
import { Cart } from './components/Cart/Cart'


const App = () => {
  const imgEntrada = "public/image/1.png"
  return (
    <>
    <BrowserRouter>
    <CarritoProvider>
    <NavBar/>
    <img className="imgEntrada" src={imgEntrada} alt="Imagen de entrada" />
    <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/categoria/:IdCategoria' element={<ItemListContainer/>}/>
      <Route path='/Item/:idItem' element={<ItemDetailContainer/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </CarritoProvider>
    </BrowserRouter>
    </>
  )
}

export default App
