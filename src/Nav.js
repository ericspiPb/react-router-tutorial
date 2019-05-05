import React from 'react';
import './App.css';

import {Link} from 'react-router-dom'

function Nav() {
  const navStyle = {
    color: 'white'
  }

  return (
    <nav className="nav">
      <h3>Logo</h3>
      <ul className="nav-links">
        <li><Link style={navStyle} to="/about">About</Link></li>
        <li><Link style={navStyle} to="/Shop">Shop</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
