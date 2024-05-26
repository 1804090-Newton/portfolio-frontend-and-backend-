import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'; 
import { faBars } from '@fortawesome/free-solid-svg-icons';
import log from '../assets/icon/Nicon.jpg';



const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <header className="bar">
     <Link to="/portfolio"> <img src={log} alt="Logo" className="logo" /></Link>

      <FontAwesomeIcon icon={faBars} className="bars-icon" onClick={toggleNavbar} />

      <nav className={`nav-links ${showNavbar ? 'show' : ''}`}>
        <ul>
          <li><Link to="/about" className="nav-item">about</Link></li>
          <li><Link to="/experience" className="nav-item">experience</Link></li>
          <li><Link to="/feature-project" className="nav-item">project</Link></li>
          <li><Link to="/quotes" className="nav-item">Quotes</Link></li>
          <li><Link to="/contact" className="nav-item">contact</Link></li>
        </ul>
      </nav>
      
      <span className="resume-button">
        <Link className="btn1" to="/resume"><button>Resume</button></Link>
        <Link className="btn2" to="/hire-me"><button>Hire Me</button></Link>
      </span>
     
    </header>
   
  );
};

export default Header;
