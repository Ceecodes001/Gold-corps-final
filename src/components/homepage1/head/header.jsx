import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  useEffect(() => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const closeBtn = document.getElementById('close-btn');

    const openMenu = () => navLinks.classList.add('active');
    const closeMenu = () => navLinks.classList.remove('active');
    const handleClickOutside = e => {
      if (
        navLinks.classList.contains('active') &&
        !navLinks.contains(e.target) &&
        !hamburger.contains(e.target)
      ) {
        navLinks.classList.remove('active');
      }
    };

    hamburger.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    document.addEventListener('click', handleClickOutside);

    return () => {
      hamburger.removeEventListener('click', openMenu);
      closeBtn.removeEventListener('click', closeMenu);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="header">
      <nav className="navbar">
        <h1>Gold Corps Inc</h1>

        <div className="hamburger" id="hamburger">
          <span></span><span></span><span></span>
        </div>

        <div className="nav-links" id="nav-links">
          <button className="close-btn" id="close-btn">&times;</button>

          <div className="search-container">
            <input placeholder="Search..." className="search-bar" type="search" />
          </div>

          {/* Single-page scrolling (anchors) */}
          <a className="a" href="#home">Home</a>
          <a className="a" href="#about">About us</a>
          <a className="a" href="#contact">Contact us</a>
          <a className="a" href="#services">Our services</a>
          <a className="a" href="#team">Our team</a>
          <a className="a" href="#testimonial">Testimonial</a>

          {/* React Router navigation */}
          <Link className="a" to="/stock">Stock prices</Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
