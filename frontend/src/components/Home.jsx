import React from 'react';

function HomePage({ username }) {
  return (
    <div style={{ padding: '30px', textAlign: 'center' }}>
      <h1> Welcome {username}!</h1>
      <p>You are successfully logged in.</p>
    </div>
  );
}

export default HomePage;
