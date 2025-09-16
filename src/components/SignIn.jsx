import React, { useState } from 'react';
import './SignIn.css';

const SignIn = ({ onSignIn, onClose, onSwitchToSignUp }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");
    
    try {
      await onSignIn({ username, password }, setError);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="signin-overlay" onClick={onClose}>
      <div className="signin-modal" onClick={(e) => e.stopPropagation()}>
        <div className="signin-header">
          <h2 className="signin-title">Welcome Back</h2>
          <p className="signin-subtitle">Sign in to your account</p>
          <button className="close-btn" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>
        
        <form onSubmit={handleSignIn} className="signin-form">
          <div className="input-group">
            <label htmlFor="signin-username" className="input-label">
              Username
            </label>
            <input
              type="text"
              className="input-field"
              id="signin-username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
              disabled={isLoading}
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="signin-password" className="input-label">
              Password
            </label>
            <input
              type="password"
              className="input-field"
              id="signin-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
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
                Signing In...
              </>
            ) : (
              'Sign In'
            )}
          </button>
        </form>
        
        <div className="signin-footer">
          <p className="footer-text">
            Don't have an account? 
            <span className="link-text" onClick={onSwitchToSignUp}> Sign up here</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
