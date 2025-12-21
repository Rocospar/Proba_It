import React from 'react';
import { useNavigate, Link } from 'react-router-dom'; 

// 1. ACCEPT THE NEW PROPS HERE: isLoggedIn, handleLogout
function HomePage({ username, isLoggedIn, handleLogout }) {
  const navigate = useNavigate(); 

  return (
    <div className="background" style={{ flexDirection: 'column', gap: '30px' }}>
      <div className="header-bar">
          <div className="logo-container">
             <span className="logo-text">Pimp your grill!</span>
             <div className="Logo"></div>
          </div>

          <div className="header-buttons-container">
            <div className="header-buttons">
                {isLoggedIn && (
                  <button onClick={() => navigate('/profile')}>Profile</button>
                )}
                <button onClick={() => navigate('/')}style={{ boxShadow: '0 0 0 2px white', borderRadius: '10px', padding: '8px 30px', transition: 'all 0.3s ease' }}>Best Grills</button>
                
               
                {isLoggedIn ? (
                  // LOGGED IN: Show Logout
                  <button className="login-buttons" onClick={handleLogout}>
                    Logout
                  </button>
                ) : (
                  // LOGGED OUT: Show Login/Register
                  <>
                    <button onClick={() => navigate('/login')}>Login</button>
                    <button onClick={() => navigate('/register')}>Register</button>
                  </>
                )}
            </div>
          </div>
      </div>


      <div style={{ marginTop: '100px', textAlign: 'center' }}>
        {username ? (
            <h1 style={{color:'white'}}>Welcome back, {username}!</h1>
        ) : (
            <h1 style={{color:'white'}}>Welcome to the Grill Master App</h1>
        )}
      </div>

    </div>
  );
}

export default HomePage;