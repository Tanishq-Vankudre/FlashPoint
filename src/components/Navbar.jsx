import React, { useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ setCategory, setSearchTerm }) => {
  const [searchTerm, setLocalSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchChange = (event) => {
    setLocalSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault(); 
    setSearchTerm(searchTerm); 
    setShowSearch(false); 
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="navbar-container">
        <a className="navbar-brand" href="#">
          <img src="assets/Flash.png" alt="Bootstrap" width="30" height="24" className="d-inline-block align-text-top" />
          Flash Point
        </a>
        <ul className="navbar-nav mb-2 mb-lg-0 categories-container">
          <li className="nav-item">
            <a className="nav-link btn btn-light" onClick={() => setCategory("technology")} href="#">
              Technology
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link btn btn-light" onClick={() => setCategory("business")} href="#">
              Business
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link btn btn-light" onClick={() => setCategory("health")} href="#">
              Health
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link btn btn-light" onClick={() => setCategory("sports")} href="#">
              Sports
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link btn btn-light" onClick={() => setCategory("entertainment")} href="#">
              Entertainment
            </a>
          </li>
        </ul>
        <div className="search-container">
          <a className="nav-link btn btn-light search-toggle" onClick={() => setShowSearch(!showSearch)} href="#">
            Search <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </a>
          {showSearch && (
            <form className="d-flex search-form flex-grow-1" onSubmit={handleSearchSubmit}>
              <input
                className="form-control"
                type="search"
                placeholder="Search news..."
                aria-label="Search"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <button className="btn btn-primary" type="submit">Search</button>
            </form>
          )}
        </div>
        <ul className="navbar-nav justify-content-end sign-in-container">
          <li className="nav-item">
            <a className="nav-link" href="#">
              <FontAwesomeIcon icon={faUser} /> Sign In
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
