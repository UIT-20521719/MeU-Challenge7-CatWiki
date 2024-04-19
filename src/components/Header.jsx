import React from 'react';
import logo from '../assets/CatwikiLogo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Link to="/" className="header">
      <img src={logo} alt="logo" />
    </Link>
  );
};

export default Header;
