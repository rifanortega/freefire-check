import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import WhatsAppPopup from './components/WhatsAppPopup';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile/:uid" element={<Profile />} />
          </Routes>
        </div>
        <WhatsAppPopup />
      </div>
    </Router>
  );
}

export default App;
