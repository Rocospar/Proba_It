import React from 'react';

function ProfilePage({ username }) {
  return (
    <div style={{ padding: '30px', textAlign: 'center' }}>
      <h1>Your Profile</h1>
      
      <div className='profile-picture'>
        <img src="/src/assets/images/profilepic.PNG" alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      
      <div className='profile-container'>
        <p><strong>Username:</strong> {username}</p>
        <p><strong>Email:</strong> user@example.com</p>
        <p><strong>Member Since:</strong> 2025</p>
        
        <button style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginTop: '10px'
        }}>
          Edit Profile
        </button>
      </div>
    </div>
  );
}

export default ProfilePage;
