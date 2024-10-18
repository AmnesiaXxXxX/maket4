import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import './App.css'
import Header from "./components/Header"
import Footer from "./components/Footer"

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />

        </Routes>
        <Footer />

      </div>
    </Router>
  );
};

export default App;
