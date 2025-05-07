import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming you have a CSS file for styling the header

const Header = () => {
    return (
        <header>
            <h1>Farmers E-Commerce Platform</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/blogs">Blogs</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;