import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/movies" style={linkStyle}>Movies</Link>
      <Link to="/cart" style={linkStyle}>Cart</Link>
      <Link to="/about" style={linkStyle}>About</Link>
    </nav>
  );
}

const navStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '1rem',
  backgroundColor: '#333',
  padding: '0.5rem',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontWeight: 'bold',
};

export default Navigation;
