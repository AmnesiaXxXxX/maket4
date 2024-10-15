import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import './App.css'
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>
        <Footer />

      </div>
    </Router>
  );
};

export default App;
