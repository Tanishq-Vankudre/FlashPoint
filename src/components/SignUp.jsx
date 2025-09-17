import React, { useState } from 'react';
import './SignUp.css';

const SignUp = ({ onSignUp, onClose, onSwitchToSignIn }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
      setError("All fields are required");
      return false;
    }
    
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      return false;
    }
    
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long");
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      return false;
    }
    
    return true;
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    setError("");
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    try {
      await onSignUp(formData);
    } catch (err) {
      setError("Failed to create account. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="signup-overlay" onClick={onClose}>
      <div className="signup-modal" onClick={(e) => e.stopPropagation()}>
        <div className="signup-header">
          <h2 className="signup-title">Create Account</h2>
          <p className="signup-subtitle">Join FlashPoint today</p>
          <button className="close-btn" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>
        
        <form onSubmit={handleSignUp} className="signup-form">
          <div className="input-group">
            <label htmlFor="signup-username" className="input-label">
              Username
            </label>
            <input
              type="text"
              className="input-field"
              id="signup-username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Choose a username"
              required
              disabled={isLoading}
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="signup-email" className="input-label">
              Email Address
            </label>
            <input
              type="email"
              className="input-field"
              id="signup-email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
              disabled={isLoading}
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="signup-password" className="input-label">
              Password
            </label>
            <input
              type="password"
              className="input-field"
              id="signup-password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Create a password"
              required
              disabled={isLoading}
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="signup-confirm-password" className="input-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="input-field"
              id="signup-confirm-password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Confirm your password"
              required
              disabled={isLoading}
            />
          </div>
          
          {error && (
            <div className="error-message">
              <span className="error-icon">⚠</span>
              {error}
            </div>
          )}
          
          <button 
            type="submit" 
            className={`submit-btn ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="spinner"></span>
                Creating Account...
              </>
            ) : (
              'Create Account'
            )}
          </button>
        </form>
        
        <div className="signup-footer">
          <p className="footer-text">
            Already have an account? 
            <span className="link-text" onClick={onSwitchToSignIn}> Sign in here</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
