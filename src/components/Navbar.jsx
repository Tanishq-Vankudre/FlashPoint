import React from 'react';
import './Navbar.css'; 

const Navbar = ({ setCategory }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="assets/Flash.png" alt="Bootstrap" width="30" height="24" className="d-inline-block align-text-top" />
          Flash Point
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" onClick={() => setCategory("technology")} href="#">
                Technology
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => setCategory("business")} href="#">
                Business
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => setCategory("health")} href="#">
                Health
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => setCategory("sports")} href="#">
                Sports
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => setCategory("entertainment")} href="#">
                Entertainment
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Sign In</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
