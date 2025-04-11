import './App.css'
import HomePage from './Components/Pages/HomePage';
import CartPage from './Components/Pages/CartPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './Components/CartContext';
function App() {

  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </CartProvider>
  )
}

export default App
