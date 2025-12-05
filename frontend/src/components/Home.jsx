import React from 'react';

function HomePage({ username }) {
  return (
    <div style={{ padding: '30px', textAlign: 'center' }}>
      <h1>🎉 Welcome, {username}!</h1>
      <p>You are successfully logged in.</p>
      <p>Use the navigation menu above to explore different sections.</p>
    </div>
  );
}

export default HomePage;
