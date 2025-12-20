import React from 'react';
import { Link } from 'react-router-dom';

function LoginPage ({ username, setUsername, password, setPassword, handleLogin }) {
    return (
    <div className="background">

      <div className="header-bar">
          <div className="logo-container">
             <span className="logo-text">Pimp your grill!</span>
             <div className="Logo"></div>
          </div>

          <div className="login-buttons-container">
            <div className="login-buttons">
                <button>Home</button>
                <button>Login</button>
                <button>Register</button>
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
            placeholder="Username"
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