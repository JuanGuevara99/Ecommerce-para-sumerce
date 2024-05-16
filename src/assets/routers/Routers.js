// Importaciones necesarias desde react-router-dom
import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Cart from '../pages/Cart'
import ProductDetails from '../pages/ProductDetails'
import CheckOut from '../pages/CheckOut'
import About from '../pages/About'
import Login from '../pages/Login'
import SingUp from '../pages/SingUp'

const Routers = () => {
  return (
    <Routes>
      {/*Redirige la raíz ('/') a la ruta 'home' para que la página de inicio sea 'home'*/}
      <Route path='/' element={<Navigate to='home' />} />
      <Route path='home' element={<Home />} />
      <Route path='shop' element={<Shop />} />
      <Route path='shop/:id' element={<ProductDetails />} />
      <Route path='cart' element={<Cart />} />
      <Route path='checkout' element={<CheckOut />} />
      <Route path='about' element={<About />} />
      <Route path='login' element={<Login />} />
      <Route path='sigUp' element={<SingUp />} />
    </Routes>
  );
};

export default Routers