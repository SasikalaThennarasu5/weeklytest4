// components/Header.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <a className="navbar-brand" href="#">MyPortfolio</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
          <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
          <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
          <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
