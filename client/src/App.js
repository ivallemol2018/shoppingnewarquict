import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';

import { CartContextProvider } from './context/CartContext'
import NavBar from './layout/NavBar/NavBar'
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'
import Cart from './pages/Cart'
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartContextProvider>
          <NavBar />          
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/signup" element={<SignupPage />}/>
            <Route path="/item/:id" element={<DetailPage />}/>
            <Route path="/cart" element={<Cart />}/>
          </Routes>
          </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
