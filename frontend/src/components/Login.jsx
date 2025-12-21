import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 

function LoginPage({ username, setUsername, password, setPassword, handleLogin, isLoggedIn, handleLogout }) {
  
  const navigate = useNavigate();

  return (
    <div className="background" style={{ flexDirection: 'column' }}>
       
 
       <div className="header-bar">
          <div className="logo-container">
             <span className="logo-text">Pimp your grill!</span>
             <div className="Logo"></div>
          </div>

          <div className="header-buttons-container">
            <div className="header-buttons">
          
                <button onClick={() => navigate('/')}>Best Grills</button>
                
              
                {isLoggedIn ? (
                  <>
                  
                    <button onClick={() => navigate('/profile')}>Profile</button>
                    <button onClick={handleLogout} style={{ backgroundColor: 'red', border: 'none' }}>Logout</button>
                  </>
                ) : (
                
                  <>
                    <button onClick={() => navigate('/login')}style={{ boxShadow: '0 0 0 2px white', borderRadius: '10px', padding: '8px 30px', transition: 'all 0.3s ease' }}>Login</button>
                    <button onClick={() => navigate('/register')}>Register</button>
                  </>
                )}
            </div>
          </div>
       </div>
      


      
       <form className="LoginSquare" onSubmit={handleLogin} style={{ marginTop: '120px' }}>
          
          <div className="FontLogin">
            Bine ai revenit <br /> mare grătaragiu!
          </div>

          <div className="input-container">
            <input 
              type="text" 
              placeholder="Email/Username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="input-container">
            <input 
              type="password" 
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              required
            />
          </div>

          <button type="submit" className="login-btn">Login</button>
          
          <Link to="/register" style={{ color: '#4a148c', textDecoration: 'none', marginTop: '10px' }}>
            Register
          </Link>
       </form>

    </div>
  );
}

export default LoginPage;