import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <Link to="/" className="logo link">LOGO</Link>
            <nav>
                <Link to="/" className="link">Home</Link>
                <Link to="/select/" className="link" style={{marginLeft: "20px"}}>Select</Link>
            </nav>
        </header>

    )
}

export default Header;