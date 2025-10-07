import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ padding: '10px', background: '#007bff', color: 'white' }}>
      <h1>College Event Portal</h1>
      <nav>
        <Link to="/" style={{ margin: '0 10px', color: 'white' }}>Home</Link>
        <Link to="/events" style={{ margin: '0 10px', color: 'white' }}>Events</Link>
        <Link to="/departments" style={{ margin: '0 10px', color: 'white' }}>Departments</Link>
        <Link to="/contacts" style={{ margin: '0 10px', color: 'white' }}>Contacts</Link>
      </nav>
    </header>
  );
};

export default Header;
