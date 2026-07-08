import React from "react";

import { Link } from "react-router-dom";


function Navbar() {
    return (
        <nav style={{ display: 'flex', gap: '15px', padding: '10px', background: '#eee' }}>
            {/* Always use the <Link> component instead of <a href> to prevent full-page refreshes */}
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </nav>
    );
}
export default Navbar;