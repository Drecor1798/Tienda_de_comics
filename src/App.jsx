import NavBar from './components/navbar/navbar'
import ItemListContainer from './components/ItemLisContainer/ItemListContainer'
import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  const imgEntrada = "public/image/1.png"
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <img className="imgEntrada" src={imgEntrada} alt="Imagen de entrada" />
    <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/categoria/:IdCategoria' element={<ItemListContainer/>}/>
      <Route path='/Item/:idItem' element={<ItemDetailContainer/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
