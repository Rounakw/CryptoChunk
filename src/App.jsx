import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import { Navbar } from './components';
import CoinDetails from './components/pages/CoinDetails';

function App() {
  return (
    <Router basename="/CryptoChunk">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin-Details/:id" element={<CoinDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
