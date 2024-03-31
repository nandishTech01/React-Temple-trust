import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            {/*  container : thodo logo left side thi dur rahese.*/}
          <Link className="navbar-brand" to="/">Your Logo</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                {/* ms-auto means right side , me-auto means left side */}
              <li className="nav-item">
                <Link className="nav-link" to="/" style={{ color: 'black' }}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" style={{ color: 'black' }}>About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services" style={{ color: 'black' }}>Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact" style={{ color: 'black' }}>Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup" style={{ color: 'black' }}>Sign Up</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login" style={{ color: 'black' }}>Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
