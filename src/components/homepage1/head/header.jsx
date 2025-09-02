import React, { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

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

          {/* Single-page scrolling links */}
          <ScrollLink
            className="a"
            to="home"
            smooth={true}
            duration={500}
            offset={-70}
          >
            Home
          </ScrollLink>

          <ScrollLink
            className="a"
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
          >
            About us
          </ScrollLink>

          <ScrollLink
            className="a"
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
          >
            Contact us
          </ScrollLink>

          <ScrollLink
            className="a"
            to="services"
            smooth={true}
            duration={500}
            offset={-70}
          >
            Our services
          </ScrollLink>

          <ScrollLink
            className="a"
            to="team"
            smooth={true}
            duration={500}
            offset={-70}
          >
            Our team
          </ScrollLink>

          <ScrollLink
            className="a"
            to="testimonial"
            smooth={true}
            duration={500}
            offset={-70}
          >
            Testimonial
          </ScrollLink>

          {/* React Router link stays as-is */}
          <RouterLink className="a" to="/stock">Stock prices</RouterLink>
        </div>
      </nav>
    </div>
  );
}

export default Header;
