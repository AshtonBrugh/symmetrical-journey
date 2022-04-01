import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/">
        <h1>Ashton's New App.</h1>
        </Link>

        <nav className="">
          <Link to= "/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
