import React from 'react';
import { Link } from  'react-router-dom';

function Header() {
    return (
        <nav>
            <div className="nav-wrapper  pink darken-1">
                <div className="container">
                    <Link to="/" className="brand-logo">Kim Wallpapers</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/upload">Upload</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;