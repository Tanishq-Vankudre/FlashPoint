import React, { useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Navbar = ({ setCategory, setSearchTerm }) => {
  const [searchTerm, setLocalSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]); // In-memory user store
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearchChange = (event) => {
    setLocalSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(searchTerm);
    setShowSearch(false);
  };

  const handleSignUp = (newUser) => {
    setUsers([...users, newUser]);
    setUser(newUser.username); // Auto sign in after signup
    setShowSignUp(false);
  };

  const handleSignIn = ({ username, password }, setError) => {
    const foundUser = users.find((user) => user.username === username && user.password === password);
    if (foundUser) {
      setUser(username);
      setShowSignIn(false);
    } else {
      setError("Invalid username or password");
    }
  };

  const handleSwitchToSignUp = () => {
    setShowSignIn(false);
    setShowSignUp(true);
  };

  const handleSwitchToSignIn = () => {
    setShowSignUp(false);
    setShowSignIn(true);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleCategoryClick = (category) => {
    setCategory(category);
    setIsMobileMenuOpen(false); // Close mobile menu after selection
  };

  const handleLogout = () => {
    setUser(null);
    setIsMobileMenuOpen(false); // Close mobile menu after logout
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="navbar-container">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            <img src="/assets/Flash.png" alt="FlashPoint" width="30" height="24" className="d-inline-block align-text-top" />
            Flash Point
          </a>
          <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
            <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
            <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
          </button>
        </div>
        
        <div className={`navbar-content ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <ul className="navbar-nav mb-2 mb-lg-0 categories-container">
            <li className="nav-item">
              <a className="nav-link btn btn-light" onClick={() => handleCategoryClick("technology")} href="#">
                Technology
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link btn btn-light" onClick={() => handleCategoryClick("business")} href="#">
                Business
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link btn btn-light" onClick={() => handleCategoryClick("health")} href="#">
                Health
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link btn btn-light" onClick={() => handleCategoryClick("sports")} href="#">
                Sports
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link btn btn-light" onClick={() => handleCategoryClick("entertainment")} href="#">
                Entertainment
              </a>
            </li>
          </ul>
          
          <div className="search-container">
            <a className="nav-link btn btn-light search-toggle" onClick={() => setShowSearch(!showSearch)} href="#">
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
              <span className="search-text">Search</span>
            </a>
            {showSearch && (
              <form className="search-form" onSubmit={handleSearchSubmit}>
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
          
          <ul className="navbar-nav sign-in-container">
            <li className="nav-item">
              {user ? (
                <div className="user-section">
                  <span className="navbar-text welcome-user">Welcome, {user}</span>
                  <button className="logout-btn" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              ) : (
                <div className="auth-buttons">
                  <a className="nav-link auth-btn" href="#" onClick={() => setShowSignIn(true)}>
                    <FontAwesomeIcon icon={faUser} />
                    <span className="auth-text">Sign In</span>
                  </a>
                  <a className="nav-link auth-btn" href="#" onClick={() => setShowSignUp(true)}>
                    <FontAwesomeIcon icon={faUser} />
                    <span className="auth-text">Sign Up</span>
                  </a>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
      {showSignIn && (
        <SignIn 
          onSignIn={handleSignIn} 
          onClose={() => setShowSignIn(false)} 
          onSwitchToSignUp={handleSwitchToSignUp}
        />
      )}
      {showSignUp && (
        <SignUp 
          onSignUp={handleSignUp} 
          onClose={() => setShowSignUp(false)} 
          onSwitchToSignIn={handleSwitchToSignIn}
        />
      )}
    </nav>
  );
};

export default Navbar;
