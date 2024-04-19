import React from 'react';
import footerLogo from '../assets/CatwikiLogoWhite.svg';

const Footer = () => {
  return (
    <div className="footer">
      <img src={footerLogo} alt="logo" />
      <p>
        &copy; created by <strong>Tran Linh Nhi</strong> - devChallenge.io 2024
      </p>
    </div>
  );
};

export default Footer;
