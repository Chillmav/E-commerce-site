import './App.css'
import HomePage from './Components/Pages/HomePage';
import CartPage from './Components/Pages/CartPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>

  )
}

export default App
