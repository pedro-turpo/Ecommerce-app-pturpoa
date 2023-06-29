import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import ProductDetail from './pages/ProductDetail'
import Purchases from './pages/Purchases'
import Header from './components/layout/Header'
import ProtectedRoutes from './components/auth/ProtectedRoutes'
import Cart from './components/cart/Cart'

function App() {

  return (
    <main className='grid grid-rows-[auto_1fr] min-h-screen font-Yantramanav max-w-[1280px] mx-auto'>

      <Header />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/products/:id' element={<ProductDetail />} />

        <Route element={ <ProtectedRoutes />}>
          <Route path='/purchases' element={<Purchases />} />
        </Route>

      </Routes>

      <Cart />
    </main>
  )
}

export default App
