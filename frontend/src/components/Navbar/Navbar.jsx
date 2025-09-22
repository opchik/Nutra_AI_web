import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [open, setOpen] = useState(false);

  const logout = () => {
    localStorage.clear();
    window.location.href = '/enter';
  };

  return (
    <div className='navbar-wrapper'>
      <nav className="navbar">
        <div className="burger" onMouseEnter={() => setOpen(true)}>☰</div>
      </nav>

      {open && (
        <div className="navbar-menu" onMouseLeave={() => setOpen(false)}>
          <Link to="/" onClick={() => setOpen(false)}>Главная</Link>
          <Link to="/goals" onClick={() => setOpen(false)}>Цели</Link>
          <Link to="/profile" onClick={() => setOpen(false)}>Профиль</Link>
          <Link to="/calendar" onClick={() => setOpen(false)}>Календарь</Link>
          <span onClick={logout}>Выйти</span>
        </div>
      )}
      {open && <div className="menu-overlay"></div>}
    </div>
  );
}

export default Navbar;
