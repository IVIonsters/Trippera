/* eslint-disable no-unused-vars */
import React from 'react';
import './Navbar.css';
import Logo from '../../images/airbnb-logo.png';

function Navbar() {
  return (
    <div>
      {/* Main Container */}
      <div className='navbar'>
        {/* Logo */}
        <img src={Logo} alt='Airbnb Logo' />
      </div>
    </div>
  );
}

export default Navbar;