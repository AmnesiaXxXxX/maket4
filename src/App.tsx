import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import NotFound from './pages/NotFound/NotFound';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


