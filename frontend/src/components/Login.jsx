import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage ({ username, setUsername, password, setPassword, handleLogin }) {
  const navigate = useNavigate();
  
  return (
    <div className="background">
      <div className="header-bar">
          <div className="logo-container">
             <span className="logo-text">Pimp your grill!</span>
             <div className="Logo"></div>
          </div>

          <div className="login-buttons-container">
            <div className="login-buttons">
                <button onClick={() => navigate('/Home')}>Best Grills</button>
                <button onClick={() => navigate('/Login')}>Login</button>
                <button onClick={() => navigate('/Register')}>Register</button>
              </div>
          </div>
      </div>

      <div className="LoginSquare">
        <h1 className="FontLogin">
          Bine ai revenit <br /> mare grătaragiu!
        </h1>
        
        
        <form onSubmit={handleLogin}>
          <input 
            type="text"
            value={username} 
            placeholder="Email/Username"
            onChange={(e) => setUsername(e.target.value)}

          />
          <input
            placeholder="Password"
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
          <div> 
            <Link to="/register">Register</Link>
          </div>
        </form>
      </div>
    </div>
    );
  }

export default LoginPage;