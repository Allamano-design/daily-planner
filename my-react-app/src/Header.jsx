import { useState } from 'react';
import logo from './assets/logo.jpg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // ✅ useState added

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <nav className="navbar" id="home">
        <div className="logo">
          <img src={logo} alt="logo" className="logo-img" />
        </div>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#reminder">Reminder</a></li>
          <li><a href="#health">Health</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#social">Social</a></li>
          <li><a href="#salary">Salary</a></li>
        </ul>

        {/* ✅ Sidebar (conditionally applied class) */}
        <ul className={`sidebar ${menuOpen ? 'open' : ''}`}>
          <li><button className="close-btn" onClick={closeMenu}>×</button></li>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#reminder" onClick={closeMenu}>Reminder</a></li>
          <li><a href="#health" onClick={closeMenu}>Health</a></li>
          <li><a href="#work" onClick={closeMenu}>Work</a></li>
          <li><a href="#social" onClick={closeMenu}>Social</a></li>
          <li><a href="#salary" onClick={closeMenu}>Salary</a></li>
        </ul>

        {/* ✅ Overlay */}
        {menuOpen && <div className="overlay" onClick={closeMenu}></div>}

        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>
        
      </nav>
    </header>
  );
};

export default Header;
