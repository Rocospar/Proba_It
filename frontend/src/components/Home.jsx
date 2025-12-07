import React from 'react';

function HomePage({ username }) {
  return (
    <div className="page-content">
      <h1>Welcome {username}!</h1>
      <p>You are successfully logged in.</p>
    
      <div className="footer-bar"></div>
    </div>
  );
}

export default HomePage;