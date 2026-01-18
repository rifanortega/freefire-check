import React from 'react';
import { Link } from 'react-router-dom';
import { Flame } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar glass-panel">
            <div className="container navbar-content">
                <Link to="/" className="logo">
                    <Flame className="logo-icon" size={28} />
                    <span className="logo-text">ORTEGA<span className="highlight">CHECKER</span></span>
                </Link>
                <div className="nav-links">
                    {/* Add more links if needed */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
