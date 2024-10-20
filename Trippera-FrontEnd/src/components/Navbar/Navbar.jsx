/* eslint-disable no-unused-vars */
import React from 'react';
import './Navbar.css';
import Logo from '../../images/trippera-logo.png';

function Navbar() {
  return (
    <div>
      {/* Main Container */}
      <div className='navbar-container'>
        {/* Logo */}
        <img className='Logo' src={Logo} alt='Trippera Logo' />
      </div>
    </div>
  );
}

export default Navbar;