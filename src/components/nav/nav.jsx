import React, { useState } from 'react';
import './nav.css';

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    const handleNavClick = (navId) => {
      setActiveNav(navId);
    };
  
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
    return (
      <div className="nav top">
        <a href='#' onClick={() => handleNavClick('#')} className={activeNav === '#' ? 'active' : ''}>Home</a>
        <a href='#about' onClick={() => handleNavClick('#about')} className={activeNav === '#about' ? 'active' : ''}>About</a>
        <a href='#skills' onClick={() => handleNavClick('#skills')} className={activeNav === '#skills' ? 'active' : ''}>Skills</a>
        <a href='#portfolio' onClick={() => handleNavClick('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}>Projects</a>
        <a href='#contact' onClick={() => handleNavClick('#contact')} className={activeNav === '#contact' ? 'active' : ''}>Contact</a>
  
        {/* Add this part for small screens */}
      <div className="nav-button" onClick={toggleDropdown}>
          <div className="nav-button-line"></div>
          <div className="nav-button-line"></div>
          <div className="nav-button-line"></div>
        </div>
  
        {isDropdownOpen && (
          <div className="nav-dropdown">
            <a href='#' onClick={toggleDropdown}>Home</a>
            <a href='#about' onClick={toggleDropdown}>About</a>
            <a href='#skills' onClick={toggleDropdown}>Skills</a>
            <a href='#portfolio' onClick={toggleDropdown}>Projects</a>
            <a href='#contact' onClick={toggleDropdown}>Contact</a>
          </div>
        )}
      </div>
    );
  };
  

export default Nav;