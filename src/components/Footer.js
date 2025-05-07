import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Farmers E-Commerce Platform. All rights reserved.</p>
                <ul className="footer-links">
                    <li><a href="/about.html">About</a></li>
                    <li><a href="/contact.html">Contact</a></li>
                    <li><a href="/blogs.html">Blogs</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;