import React from 'react';
import { Link } from 'react-router-dom';

function LoginPage ({ username, setUsername, password, setPassword, handleLogin }) {
    return (
    <div className="background">
      <div className="LoginSquare">
        <h1>Login</h1>
        
        <form onSubmit={handleLogin}>
          <label>Username</label>
          <input 
            type="text" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Password</label>
          <input 
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