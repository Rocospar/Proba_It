import React, { useState, useEffect } from 'react';

// Notice we added 'setGlobalUsername' to the props so we can update the App
function ProfilePage({ username, setGlobalUsername }) {
  // 1. State to toggle "Edit Mode" on/off
  const [isEditing, setIsEditing] = useState(false);

  // 2. State for the form fields
  const [editName, setEditName] = useState(username);
  const [editEmail, setEditEmail] = useState(''); // We will fetch this
  const [editPassword, setEditPassword] = useState('');

  // 3. Load user data (Email) when page opens
  useEffect(() => {
    fetch("http://localhost:1234/user-data", { credentials: "include" })
      .then(res => res.json())
      .then(data => {
        if (data.status === "Success") {
          setEditEmail(data.user.email);
        }
      })
      .catch(err => console.error("Error loading profile:", err));
  }, []);

  // 4. Handle Saving Changes
  const handleSave = async () => {
    try {
      const response = await fetch("http://localhost:1234/update-profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ 
            username: editName, 
            email: editEmail, 
            password: editPassword 
        })
      });

      const data = await response.json();
      
      if (data.status === "Success") {
        alert("Saved successfully!");
        
        // Update the username in the main App component
        if (setGlobalUsername) setGlobalUsername(editName);
        
        // Clear password and exit edit mode
        setEditPassword(""); 
        setIsEditing(false); 
      } else {
        alert(data.message);
      }
    } catch (err) {
      alert("Error saving: " + err);
    }
  };

  return (
    <div style={{ padding: '30px', textAlign: 'center' }}>
      <h1>{isEditing ? "Edit Your Profile" : "Your Profile"}</h1>
      
      <div className='profile-picture'>
        <img src="/src/assets/images/profilepic.PNG" alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      
      <div className='profile-container'>

        {!isEditing ? (
          // VIEW MODE
          <>
            <p><strong>Username:</strong> {username}</p>
            <p><strong>Email:</strong> {editEmail || "Loading..."}</p>
            <p><strong>Member Since:</strong> 2025</p>
            
            <button 
              onClick={() => {
                setEditName(username); 
                setIsEditing(true);    
              }} 
              style={styles.buttonPrimary}>
              Edit Profile
            </button>
          </>
        ) : (
          // EDIT MODE 
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '300px', margin: '20px auto' }}>
             <input 
                type="text" 
                placeholder="Username"
                value={editName} 
                onChange={(e) => setEditName(e.target.value)}
                style={styles.input}
             />
             <input 
                type="email" 
                placeholder="Email"
                value={editEmail} 
                onChange={(e) => setEditEmail(e.target.value)}
                style={styles.input}
             />
             <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={handleSave} style={styles.buttonSuccess}>Save</button>
                <button onClick={() => setIsEditing(false)} style={styles.buttonDanger}>Cancel</button>
             </div>
          </div>
        )}

      </div>
    </div>
  );
}


const styles = {
  input: { padding: '8px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' },
  buttonPrimary: { padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' },
  buttonSuccess: { padding: '8px 16px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', flex: 1 },
  buttonDanger:  { padding: '8px 16px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', flex: 1 }
};

export default ProfilePage;